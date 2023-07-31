import { useRef, useState } from 'preact/hooks'
import './Modal.scss'
import { JSX } from 'preact/jsx-runtime'
import { signal } from '@preact/signals'

const modalData = signal({
  isVisible: false,
  content: <></>,
  result: null
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
  return modalData.value.isVisible ? (
    <aside class="modal" ref={ref} onClick={e => {
      if (e.target === ref.current)
        modalData.value = { ...modalData.value, isVisible: false }
    }}>
      <div className="modal-content">
        <div className="modal-user-content">
          {modalData.value.content}
        </div>

        <div className="modal-footer">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    </aside>
  ) : null
}

export function showModal(content: JSX.Element) {
  modalData.value = { ...modalData.value, content, isVisible: true }
}

export function isModalShowing() {
  return modalData.value.isVisible
}