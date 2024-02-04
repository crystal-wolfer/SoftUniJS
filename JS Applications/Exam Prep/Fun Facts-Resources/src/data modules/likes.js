import { post, get } from "./api.js";

const urls = {
  addLike: '/data/likes',
  getFactLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
  getCountPerUser: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function addLike(factId){
  return post(urls.addLike, {factId})
}

export async function getFactLikes(factId){
  return get(urls.getFactLikes(factId))
}

export async function getUserLikes(factId,userId){
  return get(urls.getCountPerUser(factId, userId))
}