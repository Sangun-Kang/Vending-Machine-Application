import { ItemDetail } from "./ItemButton"
import { useEffect, useState } from "react"

interface PaymentSummaryItem {
  orderHistory: ItemDetail[]
}


export const PaymentSummary = (props: PaymentSummaryItem) => {
  const [totalCount, setTotalCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0
    setTotalCount(props.orderHistory.length)
    props.orderHistory.map((order) => {
      price += order.price
    })
    setTotalPrice(price)
  }, [props])
  
  return (
    <>
      <div>
        {totalCount}
      </div>
      <div>
        {totalPrice}
      </div>
    </>
  )
}
