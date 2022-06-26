import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosMore, IoIosMenu, IoMdClose } from 'react-icons/io';
import { FaRegCommentDots } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

function Home() {
  const [loading, setLoading] = useState(true);
  const [menus, setMenus] = useState([
    {
      id: 'owen',
      img: 'https://source.unsplash.com/random/600x500',
      comments: ['안녕', '반가워', '잘부탁해'],
    },
    {
      id: 'Lark',
      img: 'https://source.unsplash.com/random/900x500',
      comments: ['오하요', '곤방와'],
    },
    {
      id: 'Mobydick',
      img: 'https://source.unsplash.com/random/700x1080',
      comments: ['시예시예', '니하오'],
    },
  ]);
  const [comments, setComments] = useState([
    'qwewqewqeq',
    'asdsadsadsa',
    'zxczxczx',
  ]);
  const [value, setInput] = useState('');
  const handleChange = (e, index) => {
    setInput(e.target.value);
    /*     const { value } = e.target;
    const newComment = [...comments];
    newComment[index] = value;
    setInput(newComment); */
  };
  const onSubmit = (e, index) => {
    e.preventDefault();
    let newComments = [...comments, value];
    setComments(newComments);
    setInput('');
  };
  return (
    <>
      {loading && <Animation />}
      <FeedList>
        {menus.map((menu, index) => {
          return (
            <Feeds key={index}>
              <FeedHeader>
                <Title>{menu.id}</Title>
                <IoIosMore />
              </FeedHeader>

              <img
                src={`${menu.img}`}
                onLoad={() => {
                  console.log('이미지 로딩 완료');
                  setLoading(false);
                }}
              />
              {comments.map((comment, index) => (
                <UserComment key={index}>
                  <h1>{menu.id}</h1>
                  <h2>{comment}</h2>
                </UserComment>
              ))}
              <CommentList key={index} onSubmit={(e) => onSubmit(e, index)}>
                <Comments
                  key={index}
                  type="text"
                  placeholder="댓글달기"
                  value={value}
                  onChange={(e) => handleChange(e, index)}
                />
                <button onClick={onSubmit}>게시</button>
              </CommentList>
            </Feeds>
          );
        })}
      </FeedList>
    </>
  );
}
const Animation = styled.div`
  width: 42px;
  height: 42px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 50%;

  margin-left: -21px;
  margin-top: -21px;
  border-radius: 50%;

  border: 4px solid red;
  border-top-color: transparent;
  border-left-color: transparent;

  animation: Rotate 0.8s infinite linear;
  z-index: 100;

  @keyframes Rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Feeds = styled.div`
  margin-bottom: 40px;
  background-color: white;
  width: 100%;
  max-width: 320px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.8);
`;

const FeedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 10px;
`;

const CommentList = styled.form`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Comments = styled.input`
  border: 1px solid black;
`;

const UserComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default Home;
