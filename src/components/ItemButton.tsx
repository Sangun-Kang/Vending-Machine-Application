import { ButtonHTMLAttributes, ReactElement, useEffect, useState } from "react"
import '../styles/ItemButton.css'

export interface ItemDetail {
  itemId: string
  name: string
  price: number
}

// カスタムButton Componentの定義のため、Typeを宣言
type ItemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactElement, itemdetail: ItemDetail, orderhistory: ItemDetail[] }

export const ItemButton  = (props: ItemButtonProps) => {
  const initialValue = 0
  const [itemCount, setItemCount] = useState(0)
  useEffect(() => {
    let count  = props.orderhistory.reduce(
      (accumulator, currentValue) => accumulator + (props.itemdetail.itemId === currentValue.itemId ? 1 : 0), initialValue)
    setItemCount(count)
  }, [props])

  
  return (
    <div className="item_button_container">
      <button  className="item_button" onClick={props.onClick} id={props.itemdetail.itemId}>
        <span>{props.itemdetail.name}</span>
        <span className="price">{props.itemdetail.price}</span>円
      </button>
      <div id={props.itemdetail.itemId + "-count"} className="item_count">
          {itemCount}
      </div>
    </div>
  )
}