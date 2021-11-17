import Introductory from '../components/TermsPage/Introductory'
import Definitions from '../components/TermsPage/Definitions'
import Contact from '../components/TermsPage/Contact'
import Requirements from '../components/TermsPage/Requirements'
import Informations from '../components/TermsPage/Informations'
import Account from '../components/TermsPage/Account'
import Rules from '../components/TermsPage/Rules'
import Offer from '../components/TermsPage/Offer'
import Contract from '../components/TermsPage/Contract'
import Withdrawal from '../components/TermsPage/Withdrawal'
import Complaint from '../components/TermsPage/Complaint'
import Claims from '../components/TermsPage/Claims'
import Final from '../components/TermsPage/Final'

const TermsPage = () => {
  return (
    <section className='termsConditions'>
      <div className='container'>
        <h1 className='termsConditions__title'>Terms & Conditions</h1>
        <Introductory />
        <Definitions />
        <Contact />
        <Requirements />
        <Informations />
        <Account />
        <Rules />
        <Offer />
        <Contract />
        <Withdrawal />
        <Complaint />
        <Claims />
        <Final />
      </div>
    </section>
  )
}

export default TermsPage
