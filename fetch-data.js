async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        // if (!response.ok) {
        //     throw new Error('Failed to fetch user data.')
        // }
        const users = await response.json();

        dataContainer.innerHTML = '';

        const userList = document.createElement('ul');
        users.forEach(user => {
            const liItems = document.createElement('li')
            liItems.textContent = user.name;
            userList.appendChild(liItems);  
        });
        dataContainer.appendChild(userList);
    }
    catch (err) {
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(err)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
    
});