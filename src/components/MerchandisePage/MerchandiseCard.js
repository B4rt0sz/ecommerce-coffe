import { Link } from 'react-router-dom'

import BialettiMokaExpress150Img from '../../../public/images/merchandise/bialettiMokaExpress150.jpg'
import hariov6002Img from '../../../public/images/merchandise/hario-v60-02.jpg'
import HarioRangeServerV6002Img from '../../../public/images/merchandise/harioRangeServerV60-02.jpg'
import BialettiVenusImg from '../../../public/images/merchandise/bialettiVenus.jpg'
import FilterHarioV6002Img from '../../../public/images/merchandise/filterHarioV60-02.jpg'
import HarioTeaPressImg from '../../../public/images/merchandise/harioTeaPress.jpg'
import temperMottaImg from '../../../public/images/merchandise/temperMotta.jpg'
import BialettiFrenchPress1000Img from '../../../public/images/merchandise/bialettiFrenchPress1000.jpg'
import BialettiMokaExpress300Img from '../../../public/images/merchandise/bialettiMokaExpress300.jpg'
import BialettiFrenchPress350Img from '../../../public/images/merchandise/bialettiFrenchPress350.jpg'
import BaristaSpaceImg from '../../../public/images/merchandise/baristaSpace.jpg'
import FellowStaggKettleImg from '../../../public/images/merchandise/fellowStaggKettle.jpg'

const products = [
  {
    id: 1,
    url: 'bialetti-moka-express-150-ml',
    img: BialettiMokaExpress150Img,
    title: 'Bialetti Moka Express 150ml',
    price: '$27',
  },
  {
    id: 2,
    url: 'hario-v60-02-dripper',
    img: hariov6002Img,
    title: 'Hario v60-02 Dripper',
    price: '$24',
  },
  {
    id: 3,
    url: 'hario-range-server-v60-02',
    img: HarioRangeServerV6002Img,
    title: 'Hario Range Server v60-02',
    price: '$29',
  },
  {
    id: 4,
    url: 'bialetti-venus-300-ml',
    img: BialettiVenusImg,
    title: 'Bialetti Venus 300ml',
    price: '$39',
  },
  {
    id: 5,
    url: 'hario-v60-02-misarashi-filters',
    img: FilterHarioV6002Img,
    title: 'Hario v60-02 Misarashi',
    price: '$8',
  },
  {
    id: 6,
    url: 'hario-tea-press-olive-wood-300-ml',
    img: HarioTeaPressImg,
    title: 'Hario Tea Press 300ml',
    price: '$44',
  },
  {
    id: 7,
    url: 'tamper-motta',
    img: temperMottaImg,
    title: 'Temper Motta',
    price: '$27',
  },
  {
    id: 8,
    url: 'bialetti-french-press-signature-1000-ml',
    img: BialettiFrenchPress1000Img,
    title: 'Bialetti French Press Signature 1000ml',
    price: '$33',
  },
  {
    id: 9,
    url: 'bialetti-moka-express-300-ml',
    img: BialettiMokaExpress300Img,
    title: 'Bialetti Moka Express 300ml',
    price: '$36',
  },
  {
    id: 10,
    url: 'bialetti-french-press-signature-350-ml',
    img: BialettiFrenchPress350Img,
    title: 'Bialetti French Press Signature 350ml',
    price: '$26',
  },
  {
    id: 11,
    url: 'barista-space-hand-grinder-silver',
    img: BaristaSpaceImg,
    title: 'Barista Space Hand Grinder',
    price: '$97',
  },
  {
    id: 12,
    url: 'fellow-stagg-kettle-white',
    img: FellowStaggKettleImg,
    title: 'Fellow Stagg Kettle',
    price: '$85',
  },
]

const MerchandiseCard = ({ match }) => {
  const list = products.map((product) => (
    <li className='merchandise__product-list-item' key={product.id}>
      <Link to={`${match.url}/${product.url}`}>
        <img
          className='merchandise__product-list-item-img'
          src={product.img}
          alt={product.url}
        />
        <div className='merchandise__product-list-item-container'>
          <h2 className='merchandise__product-list-item-title'>
            {product.title}
          </h2>
          <p className='merchandise__product-list-item-price'>
            {product.price}
          </p>
          <button className='merchandise__product-list-item-btn'>
            View more
          </button>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className='merchandise__product'>
      <ul className='merchandise__product-list'>{list}</ul>
    </div>
  )
}

export default MerchandiseCard
