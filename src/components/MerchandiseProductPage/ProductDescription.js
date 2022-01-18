const ProductDescription = ({ data, id }) => {
  const merchandiseData = data.find((merchandise) => merchandise.url === id)

  const description = merchandiseData.description.map((info, index) => (
    <li key={index}>{info}</li>
  ))

  const descriptionInfo = (
    <>
      <ul>{description}</ul>
    </>
  )

  return (
    <div className='merchandiseProduct__description'>
      <h1 className='merchandiseProduct__description-title'>
        {merchandiseData.title}
      </h1>

      <h3 className='merchandiseProduct__description-price'>{`$${merchandiseData.price}`}</h3>

      <div className='merchandiseProduct__description-info'>
        {descriptionInfo}
      </div>

      <button className='merchandiseProduct__description-btn'>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductDescription
