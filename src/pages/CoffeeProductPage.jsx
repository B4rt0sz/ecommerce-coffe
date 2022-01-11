import ProductCarousel from '../components/CoffeeProductPage/ProductCarousel'
import ProductDescription from '../components/CoffeeProductPage/ProductDescription'

import MureaKavutiriImg from '../../public/images/coffee/mureaKavutiri.jpg'
import MureaKavutiriFrontImg from '../../public/images/coffee/mureaKavutiriFront.png'
import MureaKavutiriSideImg from '../../public/images/coffee/mureaKavutiriSide.png'
import MureaKavutiriBackImg from '../../public/images/coffee/mureaKavutiriBack.png'

const products = {
  id: 1,
  url: 'murue-kavutiri-kenia',
  img: [
    MureaKavutiriImg,
    MureaKavutiriFrontImg,
    MureaKavutiriSideImg,
    MureaKavutiriBackImg,
  ],
  title: 'Murue Kavutiri | Kenia',
  flavor: 'wild rose | buckwheat honey | rhubarb',
  region: 'embu',
  variety: 'SL28 | SL34 | RUIRU 11 | BATIAN',
  roast: 'blonde',
  scaScroe: '86.75',
  description1:
    'Someone waited for grains in a light, airy and pleasant version? There you go, here they are! A hot cake with rhubarb and rosehip tea sweetened with a spoonful of honey. Sounds like heaven on a tongue, right? Just a sip and ... you will be gone.',
  description2:
    'Great for pouring, perfect on ice - just perfect for your grinder!',
  price250g: 16,
  price500g: 30,
}

const CoffeeProductPage = () => {
  return (
    <section className='coffeeProduct'>
      <div className='container'>
        <ProductCarousel images={products.img} />
        <ProductDescription products={products} />
      </div>
    </section>
  )
}

export default CoffeeProductPage
