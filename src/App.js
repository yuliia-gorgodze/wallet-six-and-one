
import React, { Suspense} from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation'

 export default function App () {
  return (
          <Suspense fallback={<p>Загружаем.... </p>}>
            <BrowserRouter>
            <Switch>
           <Navigation/>
           </Switch>
           </BrowserRouter>
          </Suspense>
        );
 }