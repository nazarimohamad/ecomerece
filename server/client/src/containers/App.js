import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../store';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './Main';
import Navbar from '../components/Navbar';


const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
)

export default App;
