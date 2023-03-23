interface PaymentSummaryItem {
  totalItem: number
  totalPrice: number
}


export const PaymentSummary = (props: PaymentSummaryItem) => {
  return (
    <>
      <div>
        {props.totalItem}
      </div>
      <div>
        {props.totalPrice}
      </div>
    </>
  )
}
