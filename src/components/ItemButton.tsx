import { ButtonHTMLAttributes, ReactElement } from "react"
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
  let count  = props.orderhistory.reduce(
    (accumulator, currentValue) => accumulator + (props.itemdetail.itemId === currentValue.itemId ? 1 : 0), initialValue)
  
  return (
    <div className="item_button_container">
      <button  className="item_button" onClick={props.onClick} id={props.itemdetail.itemId}>
        {props.itemdetail.name}, {props.itemdetail.price}
      </button>
      <div id={props.itemdetail.itemId + "-count"} className="item_count">
          {count}
      </div>
    </div>
  )
}