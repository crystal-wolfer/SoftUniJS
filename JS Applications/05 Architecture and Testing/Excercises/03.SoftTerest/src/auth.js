
export const auth = {
  isLoggedIn: function (){
    if(sessionStorage.getItem("user")){
      return true;
    } else {
      return false;
    }
  },

  isOwner: function (ownerId){
    const userData = JSON.parse(sessionStorage.getItem("user"))
    if(userData._id === ownerId){
      return true;
    } else {
      return false;
    }
  }
}

export function registerValidator(email, password, repeatPassword) {
  const username = email.split('@')[0];

  if (username.length < 3 || password.length < 3 || repeatPassword.length < 3 || password !== repeatPassword){
    return false
  } else {
    return true;
  }
}

export function dataValidator(title, description, img) {
  if (title.length < 6 || description.length < 10 || img.length < 5){
    alert('Title must be at least 6 characters, description at least 10 characters and img at least 5 characters')
    return false
  } else {
    return true;
  }
}