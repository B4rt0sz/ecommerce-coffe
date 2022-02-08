import { Redirect, Route, Switch, useLocation } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ShopPage from '../pages/ShopPage'
import PrivacyPage from '../pages/PrivacyPage'
import TermsPage from '../pages/TermsPage'
import SubscriptionPage from '../pages/SubscriptionPage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import CoffeePage from '../pages/CoffeePage'
import CoffeeProductPage from '../pages/CoffeeProductPage'
import MerchandisePage from '../pages/MerchandisePage'
import MerchandiseProductPage from '../pages/MerchandiseProductPage'
import CartPage from '../pages/CartPage'
import LoginPage from '../pages/LoginPage'
import ForgotPage from '../pages/ForgotPage'

import { useSelector } from 'react-redux'
import { isUserLogged } from '../store/slices/userSlice'

const Router = () => {
  const location = useLocation()
  const showMenu = useSelector(isUserLogged)

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/' exact component={HomePage} />
        <Route path='/shop' exact component={ShopPage} />
        <Route path='/shop/coffee' exact component={CoffeePage} />
        <Route path='/shop/coffee/:id' component={CoffeeProductPage} />
        <Route path='/shop/merchandise' exact component={MerchandisePage} />
        <Route
          path='/shop/merchandise/:id'
          component={MerchandiseProductPage}
        />
        <Route path='/privacy-policy' component={PrivacyPage} />
        <Route path='/terms-conditions' component={TermsPage} />
        <Route path='/subscription' component={SubscriptionPage} />
        <Route path='/about_us' component={AboutPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/cart' component={CartPage} />
        {!showMenu ? <Route path='/login' component={LoginPage} /> : null}
        {!showMenu ? <Route path='/forgot' component={ForgotPage} /> : null}

        <Redirect to='/' />
      </Switch>
    </>
  )
}

export default Router
