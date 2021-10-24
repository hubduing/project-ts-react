import React from 'react';
import './App.scss';
import Blog from './components/Blog/Blog';
import Corousel from './components/Comments/Comments';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footex';
import Header from './components/header/Header';
import Hotels from './components/Hotels/Hotels';
import HotelStar from './components/HotelStar/HotelStar';
import Location from './components/Location/Location'
import Partners from './components/Partners/Partners';
import Service from './components/Service/Service';
import Weather from './components/Weather/Weather';
import Form from './components/Form/Form'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Location />
      <Blog/>
      <Weather/>
      <Hotels/>
      <Service />
      <Partners/>
      <Corousel/>
      <HotelStar/>

      <div className="contacts">
        <Form/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
