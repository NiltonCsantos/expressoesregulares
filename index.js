function validateEmail(email){

  if(!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{3,3}/)){

   const error= new Error("inválido");

   error.input="email";

   throw error;
  }

}

function validatePassword(password){

  if(password.length < 8 || !password.match(/[a-z]/) || !password.match(/[A-Z]/) || 
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z\d\s]/)){

    const error= new Error("Inválido");

    error.input="password";

    throw error;

  }

}

const user={
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password")
}

const form= document.getElementById("form").addEventListener("submit", (ev) =>{

  ev.preventDefault();
   
    try {

      validateEmail(user.email.value);
      validatePassword(user.password.value)

      document.getElementById("email-error").textContent="válido";
      document.getElementById("email-error").style.color="#60F558";

      document.getElementById("password-error").textContent="Válido"
      document.getElementById("password-error").style.color="#60F558";

      
    } catch (error) {

      console.log(error.input)
      document.getElementById(`${error.input}-error`).textContent=error.message;
      document.getElementById(`${error.input}-error`).style.color="#702e0f";
    }

    

})



const check=document.getElementById("check");

check.addEventListener("click",()=>{


  if(check.checked){
    document.getElementById("password").type="text"
  }
  else{
    document.getElementById("password").type="password"
  }
  

  

})