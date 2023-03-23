import { useState } from 'react'
import { ItemButton } from './ItemButton'

interface ItemDetail {
  name: string
  price: number
}

export const VendingMachine = () => {
  const itemList: ItemDetail[] = [
    {
      name: 'コーヒ',
      price: 480,
    },
    {
      name: '紅茶',
      price: 280,
    },
    {
      name: 'ミルク',
      price: 180,
    },
    {
      name: 'コーラ',
      price: 190,
    },
    {
      name: 'ビール',
      price: 580,
    },
  ]
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  
  return (
    <div>
      {itemList.map((item) => (
        <ItemButton name={item.name} price={item.price} />
      ))}
    </div>
  )
}
