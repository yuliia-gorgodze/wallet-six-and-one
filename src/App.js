import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <Suspense fallback={<p>Загружаем.... </p>}>
      <Switch>
        <Navigation />
      </Switch>
    </Suspense>
  );
}
