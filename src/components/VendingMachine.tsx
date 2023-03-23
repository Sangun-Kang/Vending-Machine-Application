import { useState, useEffect } from 'react'
import { ItemButton, ItemDetail } from './ItemButton'
import { PaymentSummary } from './PaymentSummary'


export const VendingMachine = () => {
  const itemList: ItemDetail[] = [
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
  const [orderhistory, setOrderHistory] = useState<ItemDetail[]>([])

  const addItemHandle = (item: ItemDetail) => {
    setOrderHistory((prevList) => [...prevList, item])
  }

  return (
    <div className="container">
      {itemList.map((item) => (
        <ItemButton key={item.itemId} onClick={() => addItemHandle(item)} itemdetail={item} orderhistory={orderhistory} />
      ))}
      <PaymentSummary orderhistory={orderhistory} />
    </div>
  )
}
