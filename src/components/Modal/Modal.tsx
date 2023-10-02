import { useRef, useState } from 'preact/hooks'
import './Modal.scss'
import { JSX } from 'preact/jsx-runtime'
import { signal } from '@preact/signals'
import { VNode } from 'preact'

interface ModalSignalProps {
  isVisible: boolean
  content: VNode
  result?: boolean
  callback?: (x:any) => any
}

const modalData = signal<ModalSignalProps>({
  isVisible: false,
  content: <></>,
  result: undefined
})

export function Modal() {
  const ref = useRef(null)
  // const [isVisible, setIsVisible] = useState(true)
  // return isVisible ? (
  //   <aside class="modal" ref={ref} onClick={e => {
  //     if (e.target === ref.current)
  //       setIsVisible(false)
  //   }}>
  //     <div className="modal-content">
  //       {content}
  //     </div>
  //   </aside>
  // ) : null
  if (!modalData.value.isVisible) return null

  const onClickOutside = (evt: JSX.TargetedMouseEvent<HTMLElement>) => {
    if (evt.target === ref.current)
      modalData.value = { ...modalData.value, isVisible: false }
  }

  const close = (result: boolean) => {
    modalData.value = {...modalData.value, isVisible: false, result}
    modalData.value.callback?.apply(null, [result])
  }

  return (
    <aside class="modal" ref={ref} onClick={onClickOutside}>
      <div className="modal-content">
        <div className="modal-user-content">
          {modalData.value.content}
        </div>
        <div className="modal-footer">
          <button onClick={() => close(true)}>OK</button>
          <button onClick={() => close(false)}>Cancel</button>
        </div>
      </div>
    </aside>
  )
}

export function showModal(content: JSX.Element, callback: (x: any) => any) {
  modalData.value = { ...modalData.value, content, isVisible: true, callback }
}

export function isModalShowing() {
  return modalData.value.isVisible
}