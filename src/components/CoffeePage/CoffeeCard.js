import { Link } from 'react-router-dom'

import MureaKavutiriImg from '../../../public/images/coffee/mureaKavutiri.jpg'
import LaJoyaImg from '../../../public/images/coffee/laJoya.jpg'
import SertaoImg from '../../../public/images/coffee/sertao.jpg'
import JinotegaImg from '../../../public/images/coffee/jinotega.jpg'
import NiglaImg from '../../../public/images/coffee/nigla.jpg'

const products = [
  {
    id: 1,
    url: 'murue-kavutiri-kenia',
    img: MureaKavutiriImg,
    title: 'Murue Kavutiri | Kenia',
    flavor: 'wild rose | buckwheat honey | rhubarb',
    price250g: '$16',
    price500g: '$30',
  },
  {
    id: 2,
    url: 'la-joya-salwador',
    img: LaJoyaImg,
    title: 'La Joya | Salwador',
    flavor: 'cranberries | hazelnut | dessert chocolate',
    price250g: '$13',
    price500g: '$24',
  },
  {
    id: 3,
    url: 'serato-brazylia',
    img: SertaoImg,
    title: 'Sertão | Brazylia',
    flavor: 'dried plum | dessert chocolate | roasted almonds',
    price250g: '$10',
    price500g: '$18',
  },
  {
    id: 4,
    url: 'jinotega-nikaragua',
    img: JinotegaImg,
    title: 'Jinotega | Nikaragua',
    flavor: 'red apple | cardamom | cocoa',
    price250g: '$11',
    price500g: '$20',
  },
  {
    id: 5,
    url: 'ngila-tanzania',
    img: NiglaImg,
    title: 'Ngila | Tanzania',
    flavor: 'pink grapefruit | cedar | caramel',
    price250g: '$14',
    price500g: '$26',
  },
]

const CoffeeCard = ({ match }) => {
  const list = products.map((product) => (
    <li className='coffee__product-list-item' key={product.id}>
      <Link to={`${match.url}/${product.url}`}>
        <img
          className='coffee__product-list-item-img'
          src={product.img}
          alt={product.url}
        />
        <div className='coffee__product-list-item-container'>
          <h2 className='coffee__product-list-item-title'>{product.title}</h2>
          <p className='coffee__product-list-item-flavor'>{product.flavor}</p>
          <p className='coffee__product-list-item-price'>{product.price250g}</p>
          <button className='coffee__product-list-item-btn'>View more</button>
        </div>
      </Link>
    </li>
  ))

  return (
    <div className='coffee__product'>
      <ul className='coffee__product-list'>{list}</ul>
    </div>
  )
}

export default CoffeeCard
