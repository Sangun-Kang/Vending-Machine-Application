import { useState } from 'react'
import { ItemButton, ItemButtonDetail } from './ItemButton'
import { PaymentSummary } from './PaymentSummary'

export const VendingMachine = () => {
  const itemList: ItemButtonDetail[] = [
    {
      itemId: 'coffee',
      name: 'コーヒ',
      price: 480,
    },
    {
      itemId: 'tea',
      name: '紅茶',
      price: 280,
    },
    {
      itemId: 'milk',
      name: 'ミルク',
      price: 180,
    },
    {
      itemId: 'coke',
      name: 'コーラ',
      price: 190,
    },
    {
      itemId: 'beer',
      name: 'ビール',
      price: 580,
    },
  ]
  const [count, setCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)


  const addItemHandle = () => {
    // Add Item Event
  }

  const calculationTotalPrice = () => {
    // Add Clculation Event
  }  

  return (
    <div className="container">
      {itemList.map((item) => (
        <ItemButton {...item} />
      ))}
      <PaymentSummary totalItem={count} totalPrice={totalPrice} />
    </div>
  )
}
