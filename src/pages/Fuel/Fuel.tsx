import { useState } from 'preact/hooks'
import './Fuel.scss'
import { JSX } from 'preact/jsx-runtime'
import dayjs from 'dayjs'

interface FuelItemProps {
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

const someData: FuelItemProps[] = [
    {
        id: '1',
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
        id: '2',
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
        id: '3',
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
        id: '4',
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
        id: '5',
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
        id: '5',
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
        id: '5',
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
        id: '5',
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
        id: '5',
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
        id: '5',
        date: '2020/04/11 18:34',
        station: 'United Puma9678',
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
    const [data, setData] = useState<FuelItemProps[]>(someData)
    data.sort((a, b) => dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 0)

    return <div className="fuel-container">
        <button className="add-fuel-item" onClick={() => {
            if (!valid(text)) return
            // setData([...data, text])
            setText('')
        }}>Add</button>

        {/* <input value={text} onChange={(e) => {
            setText((e.target as HTMLInputElement).value)
        }}></input> */}

        {data.map((item, index) => {
            return <FuelItemCard key={item.id + index} {...item}/>
        })}
    </div>
}

function valid(text: string) {
    return text.length > 0
}

export function FuelItemCard(item: FuelItemProps) {
    const date = dayjs(item.date)
    const dateStringFormat = date.year() < new Date().getFullYear() ? "YYYY-MMM-DD" : "MMM DD"
    return <div className="fuel-item-card">
        <div>
        <span>📅 {dayjs(item.date).format(dateStringFormat)}</span>
        <span>{item.station}</span>
        </div>
        <div>
        {item.distance}
        {item.cost}
        {item.volume}
        </div>
    </div>
}

export function FuelItemDetails(item: FuelItemProps) {
    return <div className="fuel-item-details">
        {item.station}
    </div>
}