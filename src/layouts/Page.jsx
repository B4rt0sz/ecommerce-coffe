import { Route, Switch, useLocation } from 'react-router-dom'

import ShopPage from '../pages/ShopPage'
import PrivacyPage from '../pages/PrivacyPage'
import TermsPage from '../pages/TermsPage'

const Page = () => {
  const location = useLocation()

  return (
    <>
      <Switch location={location} key={location.key}>
        <Route path='/shop' component={ShopPage} />
        <Route path='/privacy-policy' component={PrivacyPage} />
        <Route path='/terms-conditions' component={TermsPage} />
      </Switch>
    </>
  )
}

export default Page
