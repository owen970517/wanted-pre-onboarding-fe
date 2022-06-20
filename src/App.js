import { React, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Page from './Components/Page';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('insta');
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header isLogin={isLogin} />
        <Page isLogin={isLogin} />
      </BrowserRouter>
    </>
  );
}

export default App;
