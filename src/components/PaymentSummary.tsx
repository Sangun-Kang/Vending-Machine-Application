import { ItemDetail } from "./ItemButton"
import { useEffect, useState } from "react"
import '../styles/PaymentSummary.css'

interface PaymentSummaryItem {
  orderhistory: ItemDetail[]
}


export const PaymentSummary = (props: PaymentSummaryItem) => {
  const [totalCount, setTotalCount] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let price = 0
    setTotalCount(props.orderhistory.length)
    props.orderhistory.map((order) => {
      price += order.price
    })
    setTotalPrice(price)
  }, [props])

  return (
    <div className="payment-summary-container">
      お会計
      <hr />
      <div>
        <span>商品数: </span>
        <span id="count">
          {totalCount}個
        </span>
      </div>
      <div>
        <span>合計金額: </span>
        <span id="price">
          {totalPrice}円
        </span>
      </div>
    </div>
  )
}
