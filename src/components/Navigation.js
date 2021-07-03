
import { Route, NavLink, Switch} from 'react-router-dom';
//components
import Home from '../views/HomePage'
import RegistrationPage from '../views/RegistrationPage'
import LoginPage from '../views/LoginPage'
import DashboardPage from '../views/DashboardPage'
const Navigation = () => {

    return (<> 
     <NavLink to='/'>home</NavLink>
     <NavLink to='/dashboard'>dashboard</NavLink>
     <NavLink to='/login'>login</NavLink>
     <NavLink to='/registration'>registration</NavLink>

     <Switch>
    <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/login" component={LoginPage}/>
      <Route path="/registration" component={RegistrationPage}  />
      </Switch>
    </>)
}


export default Navigation