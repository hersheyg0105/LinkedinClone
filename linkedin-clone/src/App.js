// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed'

function App() {
  return (
    <div className="app">
      <Header />
      
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
      
    </div>
  );
}

export default App;
