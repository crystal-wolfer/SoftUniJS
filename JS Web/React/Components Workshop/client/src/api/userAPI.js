const baseURL = "http://localhost:3030/jsonstore/users";

export const getAll = async () => {
  const response = await fetch(baseURL);
  const result = await response.json();

  const data = Object.values(result);
  return data;
};

export const createUser = async (data) => {
  const body = {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    imageUrl: data.imageUrl,
    phoneNumber: data.phoneNumber,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    address: {
      country: data.country,
      city: data.city,
      street: data.street,
      streetNumber: data.streetNumber,
    },
  };

  const response = await fetch(baseURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  return result
};

export const getOne = async (id) => {
  const response = await fetch(`${baseURL}/${id}`);
  const result = await response.json();
  return result;
};

export const remove = async (id) => {
  const response = await fetch(`${baseURL}/${id}`,{
    method: "DELETE"
  });
  
  const result = await response.json()
  return result
}