import { useDispatch } from 'react-redux'
import { showInfo } from '../../store/slices/accountSlice'

const AccountNavigation = () => {
  const dispatch = useDispatch()

  const handleShowOrders = () => dispatch(showInfo(true))

  const handleShowInfo = () => dispatch(showInfo(false))

  const accountMenu = [
    {
      title: 'Orders',
      class: 'account__navigation-btn',
      handler: handleShowOrders,
    },
    {
      title: 'Details',
      class: 'account__navigation-btn',
      handler: handleShowInfo,
    },
  ]

  const menu = accountMenu.map((menuItem, index) => (
    <li className={menuItem.class} key={index} onClick={menuItem.handler}>
      {menuItem.title}
    </li>
  ))

  return <nav className='account__navigation'>{menu}</nav>
}

export default AccountNavigation
