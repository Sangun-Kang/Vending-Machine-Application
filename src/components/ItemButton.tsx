export interface ItemButtonDetail {
  itemId: string
  name: string
  price: number

}

export const ItemButton = (props: ItemButtonDetail) => {
  return (
    <div>
      <button id={props.itemId}>{props.name} {props.price}</button>
    </div>
  )
}
