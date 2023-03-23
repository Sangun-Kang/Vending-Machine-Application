interface ItemButton {
  name: string
  price: number

}

export const ItemButton = (props: ItemButton) => {
  return (
    <div>
      <button>{props.name} {props.price}</button>
    </div>
  )
}
