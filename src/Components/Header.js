import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosMore, IoIosMenu, IoMdClose } from 'react-icons/io';

function Header() {
  const nav = useNavigate();
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle((prev) => !prev);
  };
  const [isLogin, setIsLogin] = useState(false);
  const user = localStorage.getItem('insta');
  useEffect(() => {
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);
  const onLogOut = () => {
    localStorage.removeItem('insta');
    nav('/login');
  };

  return (
    <Wrapper>
      <Title>Logo</Title>
      <UL>
        <Input type="text" placeholder="검색"></Input>
        <LI>
          <StyledLink to="/">Home</StyledLink>
        </LI>
        {isLogin ? (
          <button onClick={onLogOut}>로그아웃</button>
        ) : (
          <LI>
            <Link to="/login">로그인</Link>
          </LI>
        )}
      </UL>
      <Menubar onClick={onToggle}>
        {toggle ? (
          <IoIosMenu />
        ) : (
          <>
            <MobileBar>
              <StyledLink to="/">Home</StyledLink>
              {isLogin ? (
                <button onClick={onLogOut}>로그아웃</button>
              ) : (
                <Link to="/login">로그인</Link>
              )}
            </MobileBar>
          </>
        )}
      </Menubar>
    </Wrapper>
  );
}

const MobileBar = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: space-between;
  }
`;

const UL = styled.ul`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    display: none;
  }
`;
const LI = styled.li`
  margin-left: 10px;
  font-size: 30px;
`;

const Input = styled.input`
  border: 1px solid black;
  padding: 10px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

const Menubar = styled.div`
  display: none;
  font-size: 40px;
  @media screen and (max-width: 500px) {
    display: flex;
    position: absolute;
    right: 32px;
    top: 30px;
  }
`;

const StyledLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: #000;
`;

export default Header;
