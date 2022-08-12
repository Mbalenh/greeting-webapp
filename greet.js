module.exports = function Greeting(names){
var nameArray =names||[];
 let username ="";
 let language="";

function addName(username, language){
  if(username === ""){
    return
  }
   else if(language === ""){
    return
  }
  else if(/[0-9]/.test(username)){
   return
  }
 
}

function greet(username, language){
    if(username === ""){
   
 return "please enter username";
    }
      if(/[0-9]/.test(username)){
     
      return "invalid username"
    }
   
    if(language != undefined){
      nameArray.push(username);
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