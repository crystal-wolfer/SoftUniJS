import * as api from './api.js'

//TODO: Add the links needed for the functions
const endpoints = {
  allMotors: '/data/motorcycles?sortBy=_createdOn%20desc',
  oneMotor: '/data/motorcycles/',
  addMotor: '/data/motorcycles',
  searchMotor: '/data/motorcycles?where=model%20LIKE%20%22'
}

export async function getAll(){
  return api.get(endpoints.allMotors)
};

export async function getById(id){
  return api.get(endpoints.oneMotor + id)
};

export async function createNew(data){
  return api.post(endpoints.addMotor, data)
};

export async function updateIt(id, data){
  return api.put(endpoints.oneMotor + id, data)
};

export async function deleteIt(id){
  return api.del(endpoints.oneMotor + id)
}

export async function search(query){
  return api.get(endpoints.searchMotor + `${query}%22`)
};