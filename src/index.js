import React from 'react';
import ReactDOM from 'react-dom';
import { Badges } from './pages/Badges';
import { AppRouter } from './routers/AppRouter';
import './global.css';



ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);

