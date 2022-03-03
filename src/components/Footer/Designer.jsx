import { Link } from 'react-router-dom'

const linkedinURL = 'https://www.linkedin.com/in/bartoszszucko/'

const Designer = () => {
  return (
    <div className='footer__designer'>
      <p>
        Website Development & Design by{' '}
        <Link to={{ pathname: linkedinURL }} target='_blank'>
          Bartosz Szućko
        </Link>
      </p>
    </div>
  )
}

export default Designer
