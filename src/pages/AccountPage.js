import { useSelector } from 'react-redux'
import { showUserInfo } from '../store/slices/accountSlice'

import AccountOrders from '../components/AccountPage/AccountOrders'
import AccountDetails from '../components/AccountPage/AccountDetails'
import AccountNavigation from '../components/AccountPage/AccountNavigation'
import { useEffect } from 'react'

const AccountPage = () => {
  const showInfo = useSelector(showUserInfo)

  useEffect(() => {
    document.title = 'Account | EGO COFFE'
  }, [])

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
