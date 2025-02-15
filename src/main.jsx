import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

// redux toolkit
import { Provider } from 'react-redux';
import {store} from '../store';


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App tab='home' />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
