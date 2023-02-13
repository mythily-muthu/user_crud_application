
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Home from './pages/Home';
import NewUser from './pages/NewUser';
import NotFound from './pages/NotFound';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div className="w-screen h-screen bg-green-200 flex flex-col ">

      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
