// Task 2: listUsers()
import fetch from 'node-fetch'


const SERVER_URL = 'http://localhost:3000'; 

export function listUsers() {
    fetch(`${SERVER_URL}/users`)
        .then(response => response.json())
        .then(data => {
            if (Array.isArray(data)) {
                const formattedData = data.map(user => {
                    return `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`;
                }).join(',\n');
                console.log(`[\n${formattedData}\n]`);
            } else {
                console.error('La respuesta no es un array');
            }
        })
        .catch(error => {
            console.error('Error al obtener la lista de usuarios:', error);
        });
}

listUsers();

