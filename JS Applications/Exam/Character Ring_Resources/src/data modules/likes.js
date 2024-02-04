import { post, get } from "./api.js";

const urls = {
  addLike: '/data/useful',
  getFactLikes: (characterId) => `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`,
  getCountPerUser: (characterId, userId) => `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function addLike(characterId){
  return post(urls.addLike, {characterId})
}

export async function getFactLikes(characterId){
  return get(urls.getFactLikes(characterId))
}

export async function getUserLikes(characterId,userId){
  return get(urls.getCountPerUser(characterId, userId))
}