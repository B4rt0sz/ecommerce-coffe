import Video from '../components/HomePage/Video'
import Description from '../components/HomePage/Description'
import Subscription from '../components/HomePage/Subscription'

const HomePage = () => {
  return (
    <section className='home'>
      <div className='container'>
        <Video />
        <Description />
        <Subscription />
      </div>
    </section>
  )
}

export default HomePage
