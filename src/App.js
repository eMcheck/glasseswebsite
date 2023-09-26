import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import HeaderContainer from './containers/HeaderContainer';
import HomeContainer from './containers/HomeContainer';
import SectionContainer from './containers/SectionContainer';
import CartConteiner from './containers/CartContainer';
import FooterContainer from './containers/FooterContainer';
import AuthContainer from './containers/AuthContainer';
import RegistrationContainer from './containers/RegistrationContainer';
import SearchContainer from './containers/SearchContainer';
import Error from './components/error/Error';
import './App.css';

import {
  selectData, changeLanguage, changeMoney
} from './store/initData';
import {
  selectGoods, init
} from './store/cartGoods';

import { useEffect } from 'react';

function App() {
  const data = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang) {
      dispatch(changeLanguage(lang));
    }
    let money = localStorage.getItem('money');
    if (money) {
      dispatch(changeMoney(money));
    }

    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(init(cart))
    }
  }, [data])




  const titleText = data.store[data.currentLanguage].header.section2;

  return (
    <div >
      <Router>
        <HeaderContainer />
        <Routes>
          <Route exact path='/' element={<HomeContainer />} />
          <Route path='/women' element={<SectionContainer title={titleText.women} />} />
          <Route path='/men' element={<SectionContainer title={titleText.men} />} />
          <Route path='/other' element={<SectionContainer title={titleText.other} />} />
          <Route path='/cart' element={<CartConteiner />} />
          <Route path='/login' element={<AuthContainer />} />
          <Route path='/registration' element={<RegistrationContainer />} />
          <Route path='/search' element={<SearchContainer />} />
          <Route exact path='*' element={<Error text={data.store[data.currentLanguage].error} />} />
        </Routes>
        <FooterContainer />
      </Router>
    </div>
  );
}

export default App;
