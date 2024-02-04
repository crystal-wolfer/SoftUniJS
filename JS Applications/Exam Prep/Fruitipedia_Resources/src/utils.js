const item = 'userData'

export function getUserData(){
  return JSON.parse(sessionStorage.getItem(item))
}

export function setUserData(data){
  return sessionStorage.setItem(item, JSON.stringify(data))
}

export function clearUserData(){
  sessionStorage.removeItem(item)
}

// Function that creates form submit handler and passes trimeed data to the handler
export function createFormSubmitHandler(callback){
  return function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries([...formData.entries()].map(([key, value]) => [key, value.trim()]));

    callback(data, form); 
  }
}

