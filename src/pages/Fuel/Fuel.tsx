import { useEffect, useRef, useState } from 'preact/hooks'
import './Fuel.scss'
import { JSX } from 'preact/jsx-runtime'
import dayjs from 'dayjs'
import { showModal } from '../../components/Modal/Modal'

interface FuelItem {
  id: string,
  date: string,
  station: string,
  location: string,
  distance: number,
  cost: number,
  volume: number,
  filled: boolean,
  highwayVsOverall?: number
}

let index = 1
const someData: FuelItem[] = [
  {
    id: '' + index++,
    date: '2023/04/11 18:34',
    station: 'United Puma',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2023/04/14 15:21',
    station: 'BP',
    location: 'Pemberton',
    distance: 192554,
    cost: 79.62,
    volume: 42.15,
    filled: false,
    highwayVsOverall: .95
  },
  {
    id: '' + index++,
    date: '2023/04/16 10:42',
    station: 'BP',
    location: 'Pemberton',
    distance: 192718,
    cost: 49.96,
    volume: 26.45,
    filled: true,
    highwayVsOverall: .50
  },
  {
    id: '' + index++,
    date: '2023/04/18 18:54',
    station: 'BP',
    location: 'Wembley',
    distance: 193189,
    cost: 99.95,
    volume: 56.50,
    filled: true,
    highwayVsOverall: .90
  },
  {
    id: '' + index++,
    date: '2023/04/11 18:34',
    station: 'United Puma',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2023/04/11 18:34',
    station: 'United Puma 44',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2023/04/11 18:34',
    station: 'United Puma 324',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2021/04/11 18:34',
    station: 'United Puma 3245',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2022/04/11 18:34',
    station: 'United Puma658546',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United Puma9678',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
  {
    id: '' + index++,
    date: '2020/04/11 18:34',
    station: 'United !!!',
    location: 'Northbridge',
    distance: 192187,
    cost: 95.19,
    volume: 56.02,
    filled: true,
    highwayVsOverall: .20
  },
]

export function Fuel() {
  const [text, setText] = useState('')
  const [data, setData] = useState<FuelItem[]>(someData)
  data.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 0)

  const handleClick = function (item: FuelItem) {
    const content = (//<div style={{ background: 'blue', width: '10rem', height: '9rem' }}>
      <FuelItemDetails item={{ ...item }} get={(item) => {
        console.log(item)
      }}/>
    )//</div>
    showModal(content, ex => console.log(`returned`, ex, item))
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
      return <FuelItemCard key={item.id + index} {...{ item, handleClick }} />
    })}
  </div>
}

function valid(text: string) {
  return text.length > 0
}

// write code to double all elements in an array

// define a var equal to 1

export function FuelItemCard({ item, handleClick }:
  { item?: FuelItem, handleClick: (x: any) => void }) {
  const date = dayjs(item?.date ?? Date())
  const dateStringFormat = date.year() < new Date().getFullYear() ? "YYYY-MMM-DD" : "MMM DD"
  const dateFormatted = dayjs(date).format(dateStringFormat)
  const from = item ? [item.station, item.location].join(', ') : ''
  const distance = item ? `${item.distance.toLocaleString('en')} km` : ''
  const cost = item ? `$${item.cost.toFixed(2)}` : ''
  const volume = item ? `${item.volume} ltr` : ''

  return <div className="fuel-item-card" onClick={() => handleClick(item)}>
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

export function FuelItemDetails({ item, get }: { item: FuelItem, get: (x: FuelItem) => void }) {
  const [distance, setDistance] = useState(item.distance)

  return <div className="fuel-item-details">
    {dayjs(item.date).format("YYYY-MMM-DD")}<br />
    {item.station}<br />
    {item.location}<br />
    {item.cost}<br />
    Distance:
    <input type="number" value={distance}
      onChange={e => {
        let parsed = parseFloat((e.target as HTMLInputElement).value)
        if (isNaN(parsed)) parsed = distance
        setDistance(parsed)
      }}>
    </input><br />
    {item.volume}<br />
    {item.filled}<br />
    {item.highwayVsOverall}<br />
  </div>
}
