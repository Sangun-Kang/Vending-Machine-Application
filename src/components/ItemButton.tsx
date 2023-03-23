import { ButtonHTMLAttributes, ReactElement } from "react"

export interface ItemDetail {
  itemId: string
  name: string
  price: number
}

// カスタムButton Componentの定義のため、Typeを宣言
type ItemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactElement, itemdetail: ItemDetail }

export const ItemButton  = (props: ItemButtonProps) => {
  return (
    <div>
      <button {...props} id={props.itemdetail.itemId}>
        {props.itemdetail.itemId}, {props.itemdetail.price}
      </button>
    </div>
  )
}