import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const headers = {
  'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  'Accept': 'application/json'
}

const fetchTodos = () => {
  fetch('http://localhost:8000/api/todos', {headers: headers})
    .then(response => response.json())
    .then(data => console.log('data: ', data))
    .catch(error => console.log('error: ', error))
}

const fetchTodos2 = async () => {
  const response = await fetch('http://localhost:8000/api/todos?colors=black', {headers: headers})
  const data = await response.json()
  console.log('data2: ', data)
}

fetchTodos()
fetchTodos2()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
