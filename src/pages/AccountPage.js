import { useSelector } from 'react-redux'
import { showUserInfo } from '../store/slices/accountSlice'

import AccountOrders from '../components/AccountPage/AccountOrders'
import AccountDetails from '../components/AccountPage/AccountDetails'
import AccountNavigation from '../components/AccountPage/AccountNavigation'

const AccountPage = () => {
  const showInfo = useSelector(showUserInfo)

  return (
    <section className='account'>
      <div className='container'>
        <h1 className='account__title'>Account</h1>
        <AccountNavigation />
        {showInfo ? <AccountOrders /> : <AccountDetails />}
      </div>
    </section>
  )
}

export default AccountPage
