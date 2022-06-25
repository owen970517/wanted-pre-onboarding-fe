import { React, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Page from './Components/Page';

function App() {
  /*   const [isLogin, setIsLogin] = useState(false);
  const user = localStorage.getItem('insta');
  console.log(user);
  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]); */
  return (
    <>
      <BrowserRouter>
        <Header />
        <Page />
      </BrowserRouter>
    </>
  );
}

export default App;
