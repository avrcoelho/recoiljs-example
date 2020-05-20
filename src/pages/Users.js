import React, {useState, Suspense} from 'react';
import { useRecoilState } from 'recoil'

import { usersList } from '../atom/users'
import UsersList from '../components/UsersList'

function UserInput() {
  const [input, setInput] = useState('');
  const [usernames, setUsersnames] = useRecoilState(usersList)

  function onChange(event) {
    setInput(event.target.value.trim().toLowerCase());
  }
  
  function submit() {
    setUsersnames(...usernames, input)

    setInput('')
  }

  return (
    <div>
      <input type="text" value={input} onChange={onChange} />
      <button onClick={submit}>Add GitHub user</button>
    </div>
  )
}

export default function Users() {
  return (
    <div>
      <UserInput />

      <Suspense fallback={<h1>Loading...</h1>}>
        <UsersList />
      </Suspense>
    </div>
  )
}