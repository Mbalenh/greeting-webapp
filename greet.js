module.exports = function Greeting(array) {
  var nameArray = array || [];
  let username = "";
  let language = "";
  

  function greet(username, language) {
    nameArray.push(username);
    if (language === "english") {

      return "Hello, " + username;
    }
    if (language === "isizulu") {

      return "Sawubona, " + username;
    }
    if (language === "isixhosa") {

      return "Molo, " + username;
    }


  }

  function errorMessage(username, language) {
    // console.log(username, language);
    if (!username ) {

      return "please enter username";
    }
   else if (!/^[a-zA-Z]+$/.test(username)) {

      return "invalid username"
    }
   else if (language != undefined) {
      nameArray.push(username);

    } else {
      return "please select language"
    }
  }
  
  function getCounter() {
    let names = {}
    for (let name of nameArray) {
if(/^[a-zA-Z]+$/.test(name)){
      if (names[name] === undefined) {
        names[name] = 1
      } else {
        names[name]++
      }
    }
  }
    // console.log(names);
    return Object.keys(names).length
  }

  function clearArray() {
  while (nameArray.length > 0) {
    nameArray.pop();
  }
}

  return {
    greet,
    username,
    language,
    getCounter,
    errorMessage,
     clearArray

  }
}