// Task 3: addUser(first_name, last_name, email)
// index.js

import fetch from'node-fetch';



export function addUser(first_name, last_name, email){
  try{
      fetch('http://localhost:3000/users').then(response=>response.json()).then(data=>{
          fetch('http://localhost:3000/users',{
          method: "POST",
          body: JSON.stringify({
          id: `${data.length+1}`,
          first_name: first_name,
          last_name: last_name,
          email:email
          }),
          headers: {
          "Content-Type": "application/json"
          }
  })
      })

    }catch(e){
      console.log("ERROR")
  }
}
