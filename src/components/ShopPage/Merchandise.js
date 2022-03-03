import { Link } from 'react-router-dom'

const Merchandise = ({ url }) => {
  return (
    <div className='shop__merchandise'>
      <Link to={`${url}/merchandise`}>
        <img
          className='shop__merchandise-img'
          src='/images/shopMerchandise.jpg'
          alt='merchandise'
          loading='lazy'
        />
        <h2 className='shop__merchandise-title'>Merchandise</h2>
      </Link>
    </div>
  )
}

export default Merchandise
