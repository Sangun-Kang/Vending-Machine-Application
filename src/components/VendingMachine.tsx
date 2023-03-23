import { useState } from 'react'
import { ItemButton, ItemDetail } from './ItemButton'
import { PaymentSummary } from './PaymentSummary'
import '../styles/VendingMachine.css'

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
    <article className="main">
      <section>
        {itemList.map((item) => (
          <ItemButton key={item.itemId} onClick={() => addItemHandle(item)} itemdetail={item} orderhistory={orderhistory} />
        ))}
      </section>
      <section>
        <PaymentSummary orderhistory={orderhistory} />
      </section>
    </article>
  )
}
