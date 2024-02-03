import { useEffect, useRef, useState } from 'preact/hooks'
import './Fuel.scss'
import { JSX } from 'preact/jsx-runtime'
import dayjs from 'dayjs'
import { showModal } from '../../components/Modal/Modal'
import dummy from './dummy'

interface FuelItem {
  id: number, //string,
  date: string,
  station: string,
  location: string,
  odometer: number,
  cost: number,
  volume: number,
  filled: boolean,
  highwayVsOverall?: number
}

export function Fuel() {
  const [text, setText] = useState('')
  const [data, setData] = useState<FuelItem[]>(dummy)
  data.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 0)

  const handleClick = function (item: FuelItem) {
    let www = item
    const content = (//<div style={{ background: 'blue', width: '10rem', height: '9rem' }}>
      <FuelItemDetails item={item} callback={x => www = x}/>
    )//</div>
    showModal(content, ex => {
      if (!ex) return
      setData(prev => {
        // const index = prev.findIndex(x => x.id === www.id)
        let result = [...prev.filter(x => x.id !== www.id), www]
        return result.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 0)
      })
    })
  }

  return <div className="fuel-container" onBlur={() => console.log('blurred')}>
    <button className="add-fuel-item" onClick={() => {
      if (!valid(text)) return
      // setData([...data, text])
      setText('')
    }}>Add</button>
    {/* 
    <input style={{ margin: '20px'}} value={text} onChange={(e) => {
      setText((e.target as HTMLInputElement).value)
    }}></input> */}

    {data.map((item, index) => {
      return <FuelItemCard key={index} {...{ item, handleClick }} />
    })}
  </div>
}

function valid(text: string) {
  return text.length > 0
}

export function FuelItemCard({ item, handleClick }:
  { item?: FuelItem, handleClick: (x: any) => void }) {
  const date = dayjs(item?.date ?? Date())
  const dateStringFormat = date.year() < new Date().getFullYear() ? "YYYY-MMM-DD" : "MMM DD"
  const dateFormatted = dayjs(date).format(dateStringFormat)
  const from = item ? [item.station, item.location].join(', ') : ''
  const distance = item ? `${item.odometer.toLocaleString('en')} km` : ''
  const cost = item ? `$${item.cost.toFixed(2)}` : ''
  const volume = item ? `${item.volume} ltr` : ''

  return <div className="fuel-item-card" 
    //onClick={() => console.log(JSON.stringify(handleClick))}
    onClick={() => handleClick(item)}>
    <div>
      <span>📅 {dateFormatted}</span>
      <span>{from}</span>
    </div>
    <div>
      <span>{distance}</span>
      <span>
        <span>{cost}</span>
        <span>{volume}</span>
      </span>
    </div>
  </div>
}

export function FuelItemDetails({ item, callback: get }: { item: FuelItem, callback: (x: FuelItem) => void }) {
  return <div className="fuel-item-details">

    <label> Time <br/>
      <input type="text" value={item.date}
        onChange={e => {
          let date = (e.target as HTMLInputElement).value
          get({...item, date})
        }}></input>
    </label><br/>

    <label> Station <br/>
      <input type="text" value={item.station}
        onChange={e => {
          let station = (e.target as HTMLInputElement).value
          get({...item, station})
        }}></input>
    </label><br/>

    <label> Location <br/>
      <input type="text" value={item.location}
        onChange={e => {
          let location = (e.target as HTMLInputElement).value
          get({...item, location})
        }}></input>
    </label><br/>

    <label> Cost <br/>
      <input type="text" value={item.cost}
        onChange={e => {
          let cost = parseFloat((e.target as HTMLInputElement).value)
          get({...item, cost})
        }}></input>
    </label><br/>

    <label> Odometer <br/>
      <input type="text" value={item.odometer}
        onChange={e => {
          let odometer = parseFloat((e.target as HTMLInputElement).value)
          get({...item, odometer})
        }}></input>
    </label><br/>

    <label> Volume <br/>
      <input type="text" value={item.volume}
        onChange={e => {
          let volume = parseFloat((e.target as HTMLInputElement).value)
          get({...item, volume})
        }}></input>
    </label><br/>

    <label> Filled <br/>
      <input type="checkbox" checked={item.filled}
        onChange={e => {
          let filled = (e.target as HTMLInputElement).checked
          get({...item, filled})
        }}></input>
    </label><br/>

    <label> Highway vs Overall <br/>
      <input type="number" value={item.highwayVsOverall}
        onChange={e => {
          let highwayVsOverall = parseInt((e.target as HTMLInputElement).value)
          get({...item, highwayVsOverall})
        }}></input>
    </label>
  </div>
}
