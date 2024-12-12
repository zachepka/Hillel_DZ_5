let userName = prompt("Ім'я користувача:");

if (userName === null || userName.trim() === '') {
    userName = '[noname]';
}

alert(`Hello, ${userName}! How are you?`);