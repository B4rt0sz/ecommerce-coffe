import { useState } from 'react'
import ReactImageMagnify from 'react-image-magnify'

const ProductCarousel = ({ data, id }) => {
  const merchandiseData = data.find((merchandise) => merchandise.url === id)
  const [selectedImg, setSelectedImg] = useState(merchandiseData.images[0])

  const imageGallery = merchandiseData.images.map((img, index) => (
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
          alt: 'merchandise',
          isFluidWidth: true,
          src: selectedImg,
        },
        largeImage: {
          alt: 'merchandise',
          src: selectedImg,
          width: 700,
          height: 700,
        },
      }}
      imageStyle={{ height: '100%' }}
      enlargedImagePosition='over'
      isEnlargedImagePortalEnabledForTouch={true}
      className='merchandiseProduct__gallery-mainImg-small'
    />
  )

  return (
    <div className='merchandiseProduct__gallery'>
      <div className='merchandiseProduct__gallery-mainImg'>{imageMagnify}</div>
      <div className='merchandiseProduct__gallery-container'>
        {imageGallery}
      </div>
      <div className='merchandiseProduct__gallery-zoom'></div>
    </div>
  )
}

export default ProductCarousel
