
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';



const Routes = () => {
  return(
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/home" component={Dashboard} />
        <Route path="*" component={Error} />
    </Switch>
  )
}

export default Routes;