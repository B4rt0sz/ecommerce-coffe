import { Link, useRouteMatch } from 'react-router-dom'
import merchandiseIMG from '../../../public/images/shopMerchandise.jpg'

const Merchandise = ({ url }) => {
  return (
    <div className='shop__merchandise'>
      <Link to={`${url}/merchandise`}>
        <img
          className='shop__merchandise-img'
          src={merchandiseIMG}
          alt='merchandise'
          loading='lazy'
        />
        <h2 className='shop__merchandise-title'>Merchandise</h2>
      </Link>
    </div>
  )
}

export default Merchandise
