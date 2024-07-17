// ASYNC-AWAIT fubction
async function fetchUserData () {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    // Fetch data using try-catch
    try {
        const response = await fetch(apiUrl);
        const users = await response.json();

        dataContainer.innerHTML = '';
        
        // Append userList
        const userList = document.createElement('ul');
        users.forEach(user => {
            const liItems = document.createElement('li')
            liItems.textContent = user.name;
            userList.appendChild(liItems);  
        });
        dataContainer.appendChild(userList);
    }

    // Error Handling
    catch (err) {
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error(err)
    }
}

// DOMCOntent
document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
    
});