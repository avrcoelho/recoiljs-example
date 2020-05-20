import React from 'react'
import { useRecoilValue } from 'recoil';

import { usersList } from '../atom/users/index'
import { userToFollowerMap } from '../atom/users/selectors/followers'

export default function UsersList() {
  // quando se quer ter get e setImmediate, use useRecoilState
  // quando é somente para consultar dados, use useRecoilValue
  const usernames = useRecoilValue(usersList)
  const followersMap = useRecoilValue(userToFollowerMap);

  return (
    <ul>
      {usernames.map(username => (
        <li key={username}> ({followersMap[username]}){username}</li>
      ))}
    </ul>
  )
}