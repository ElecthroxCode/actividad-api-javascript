// Task 4: delUser(number)

import fetch from 'node-fetch';


export function delUser(number){
    try{
        fetch(`http://localhost:3000/users/${number}`,{method:'DELETE'})
    }catch(e){
        console.log(e + " Error al eliminar");
    }
}
