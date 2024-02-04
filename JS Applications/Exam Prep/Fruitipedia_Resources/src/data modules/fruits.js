import * as api from './api.js'

//TODO: Add the links needed for the functions
const endpoints = {
  allFruits: '/data/fruits?sortBy=_createdOn%20desc',
  oneFruit: '/data/fruits/',
  addFruit: '/data/fruits',
  searchFruit: '/data/fruits?where=name%20LIKE%20%22'
}

export async function getAll(){
  return api.get(endpoints.allFruits)
};

export async function getById(id){
  return api.get(endpoints.oneFruit + id)
};

export async function createNew(data){
  return api.post(endpoints.addFruit, data)
};

export async function updateIt(id, data){
  return api.put(endpoints.oneFruit + id, data)
};

export async function deleteIt(id){
  return api.del(endpoints.oneFruit + id)
}

export async function search(query){
  return api.get(endpoints.searchFruit + `${query}%22`)
};