import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import { useDispatch } from 'react-redux';
import store from './store/AppState';
//import { update } from './store/userSlice';
import UserDisplay from './UserDisplay';
import PostDisplay from './PostDisplay';

function App() {
  const [userid, setUserid] = useState(0)
  //const dispach = useDispatch();
  const [postid, setPostid] = useState(0)

  const onChangeUserId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('userid', e.target.value)
    setUserid(e.target.value ? Number(e.target.value) : 0)

    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users')
    if (usersResponse.ok) {
      const useridFromImput = e.target.value ? Number(e.target.value) : 0
      console.log('userid', useridFromImput)
      const users = await usersResponse.json()
      console.log('users', users)
      const usr = users.find((userItem: any) => {
        return userItem && userItem.id === useridFromImput
      })
      console.log('usr', usr)

      store.dispatch({
        type: 'user/update',
        payload: {
          id: usr.id,
          username: usr.username,
          email: usr.email,
          city: usr.address.city
        }
      })
    }
  }

  const onChangePostId = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const postIdFromInput = e.target.value ? Number(e.target.value) : 0
    setPostid(postIdFromInput)

    const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + postIdFromInput)
    if (postResponse.ok) {
      const post = await postResponse.json()
      console.log('post', post)
      store.dispatch({
        type: 'post/update',
        payload: {
          id: post.id,
          title: post.title,
          body: post.body
        }
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <label>user id</label>
        <input value={userid} onChange={onChangeUserId} />
        <UserDisplay />
        <p></p>
        <label>post id</label>
        <input value={postid} onChange={onChangePostId} />
        <PostDisplay />


      {/* 初期画面
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      */}

      </header>
    </div>
  );
}

export default App;
