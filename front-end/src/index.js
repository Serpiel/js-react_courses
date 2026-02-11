import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profiler from './Profiler';

const products = [
  { id: 1, name: 'Orange', description: 'Long live vitamins', price: 2 },
  { id: 2, name: 'Chocolate', description: 'The black one', price: 4 },
  { id: 3, name: 'Lentils', description: 'Good for mood', price: 1.5 }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Profiler>
    <App products={products} />
    </Profiler>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
