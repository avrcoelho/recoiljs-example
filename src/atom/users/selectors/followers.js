import { selector } from 'recoil';

import { usersList } from '../index';
import api from '../../../services/api';

export const userToFollowerMap = selector({
  key: 'userToFollowerMap',
  get: async ({ get }) => {
    const _usersList = get(usersList);

    const responses = await new Promise.all(
      _usersList.map(user => api.get(`users/${user}`))
    )

    const followerMap = {};

    responses.forEach(response => {
      const { data: user } = response;

      followerMap[user.login] = user.followers;
    })

    return followerMap;
  }
})