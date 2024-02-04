import * as api from './api.js'

//TODO: Add the links needed for the functions
const endpoints = {

}

export async function getAll(){
  return api.get()
};

export async function getById(id){
  return api.get()
};

export async function createNew(data){
  return api.post( data)
};

export async function updateIt(id, data){
  return api.put( data)
};

export async function deleteIt(id){
  return api.del()
}