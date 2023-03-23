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
  const [orderHistory, setOrderHistory] = useState<ItemDetail[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  const addItemHandle = (item: ItemDetail) => {
    setTotalCount((prevValue) => prevValue + 1)
    setTotalPrice((prevValue) => prevValue + item.price)
    setOrderHistory((prevList) => [...prevList, item])
  }

  return (
    <div className="container">
      {itemList.map((item) => (
        <ItemButton onClick={() => addItemHandle(item)} itemDetail={item} />
      ))}
      <PaymentSummary totalItem={totalCount} totalPrice={totalPrice} />
    </div>
  )
}
