import * as api from './api.js'

const endpoints = {
  allFacts: '/data/facts?sortBy=_createdOn%20desc',
  oneFact: '/data/facts/',
  createFact: '/data/facts'
}

export async function getAllFacts(){
  return api.get(endpoints.allFacts)
};

export async function getFactById(id){
  return api.get(endpoints.oneFact + id)
};

export async function createFact(data){
  return api.post(endpoints.createFact, data)
};

export async function updateFact(id, data){
  return api.put(endpoints.oneFact + id, data)
};

export async function deleteFact(id){
  return api.del(endpoints.oneFact + id)
}

