import { ButtonHTMLAttributes, ReactElement } from "react"

export interface ItemDetail {
  itemId: string
  name: string
  price: number
}

// カスタムButton Componentの定義のため、Typeを宣言
type ItemButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children?: ReactElement, itemDetail: ItemDetail }

export const ItemButton  = (props: ItemButtonProps) => {
  return (
    <div>
      <button {...props} id={props.itemDetail.itemId}>
        {props.itemDetail.itemId}, {props.itemDetail.price}
      </button>
    </div>
  )
}