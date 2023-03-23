import { useState } from 'react'
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
  const [totalCount, setTotalCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)


  const addItemHandle = () => {
    console.log("!!")
    setTotalCount(totalCount+1)
    calculationTotalPrice()
    // Add Item Event
  }

  const calculationTotalPrice = () => {
    console.log("??")
    // Add Clculation Event
  }  

  return (
    <div className="container">
      {itemList.map((item) => (
        <ItemButton onClick={addItemHandle} itemDetail={item} />
      ))}
      <PaymentSummary totalItem={totalCount} totalPrice={totalPrice} />
    </div>
  )
}
