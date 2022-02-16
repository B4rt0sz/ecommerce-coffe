import CheckoutContainer from '../components/CheckoutPage/CheckoutContainer'

const CheckoutPage = () => {
  return (
    <section className='checkout'>
      <div className='container'>
        <h1 className='checkout__title'>Checkout</h1>
        <CheckoutContainer />
      </div>
    </section>
  )
}

export default CheckoutPage
