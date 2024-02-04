import * as api from './api.js'

//TODO: Add the links needed for the functions
const endpoints = {
  allChars: '/data/characters?sortBy=_createdOn%20desc',
  oneChar: '/data/characters/',
  addChar: '/data/characters',
}

export async function getAll(){
  return api.get(endpoints.allChars)
};

export async function getById(id){
  return api.get(endpoints.oneChar + id)
};

export async function createNew(data){
  return api.post(endpoints.addChar, data)
};

export async function updateIt(id, data){
  return api.put(endpoints.oneChar + id, data)
};

export async function deleteIt(id){
  return api.del(endpoints.oneChar + id)
}