import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import Projects from './pages/projects/projects.component';
import About from './pages/about/about.component';
import Header from './components/header/header.component';
import './App.css';
//Redux
import { Provider } from 'react-redux';
import store from './store';
const App = () => (
  <Provider store={store}>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />{' '}
      <Route path='/products' component={Projects} />{' '}
      <Route path='/about' component={About} />{' '}
    </Switch>{' '}
    <footer>
      <div className='icons'>
        <p> Made with 💙 by <a href= "https://www.himanshukj.me/" target="_blank" rel="noopener noreferrer">Himanshu Jain</a>, <a href = "https://aneeshgupta.me/" target = "_blank" rel="noopener noreferrer">Aneesh Gupta</a> and <a href = "https://www.linkedin.com/in/riadkanj/" target="_blank" rel="noopener noreferrer">Riad Kanj.</a></p>
      </div>{' '}
    </footer>{' '}
  </Provider>
);

export default App;
