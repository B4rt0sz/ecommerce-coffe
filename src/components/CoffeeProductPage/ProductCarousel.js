import { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ProductCarousel = ({ images }) => {
  const [selectedImg, setSelectedImg] = useState(images[0])

  const imageGallery = images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt='productImg'
      loading='lazy'
      className={selectedImg === img ? 'active' : null}
      onClick={() => {
        setSelectedImg(img)
      }}
    />
  ))

  const imageMagnify = (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: 'coffee',
          isFluidWidth: true,
          src: selectedImg,
        },
        largeImage: {
          alt: 'coffee',
          src: selectedImg,
          width: 900,
          height: 1350,
        },
      }}
      imageStyle={{ height: '100%' }}
      enlargedImagePosition='over'
      isEnlargedImagePortalEnabledForTouch={true}
      className='coffeeProduct__gallery-mainImg-small'
    />
  )

  return (
    <div className='coffeeProduct__gallery'>
      <div className='coffeeProduct__gallery-mainImg'>{imageMagnify}</div>
      <div className='coffeeProduct__gallery-container'>{imageGallery}</div>
      <div className='coffeeProduct__gallery-zoom'></div>
    </div>
  )
}

export default ProductCarousel
