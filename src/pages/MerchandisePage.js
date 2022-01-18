import MerchandiseCard from '../components/MerchandisePage/MerchandiseCard'
import MerchandiseSearch from '../components/MerchandisePage/MerchandiseSearch'

const MerchandisePage = ({ match }) => {
  return (
    <section className='merchandise'>
      <div className='container'>
        <MerchandiseSearch />
        <MerchandiseCard match={match} />
      </div>
    </section>
  )
}

export default MerchandisePage
