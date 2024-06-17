const baseURL = "http://localhost:3030/jsonstore/users";

export const getAll = async() => {
  try {
    const response = await fetch(baseURL);
    const result = await response.json();
    
    const data = Object.values(result);
    return data
  } catch (error) {
    console.log(error);
  }

}