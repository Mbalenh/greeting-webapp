module.exports = function Greeting(names){
var nameArray =names||[];
 let username ="";
 let language="";

function addName(username, language){
  if(username === ""){
    return
  }
 else if(nameArray.includes(username)){
    return
  }
   else if(language === null){
    return
  }
  else if(/[0-9]/.test(username)){
   return
  }
 
    nameArray.push(username);

}

function greet(username, language){
    if(username === ""){
   
 return "please enter username";
    }
      if(/[0-9]/.test(username)){
     
      return "invalid username"
    }
    if(nameArray.includes(username)){
      return
    }
    
    if(language !== null){
      nameArray.push(username)
    if(language ==="english"){
   
       return "Hello, " +  username;
     }
     if(language === "isizulu"){
   
       return "Sawubona, " +  username;
     }
     if(language === "isixhosa"){
   
       return "Molo, " +  username;  
     }
}else{
  
  return "please select language"
}
}


return{
    addName,
    nameArray,
    greet,
    username,
    language
   
}
}