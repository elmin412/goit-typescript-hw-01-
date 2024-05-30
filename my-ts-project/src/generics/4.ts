type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<User>): User {
    const defaultUser: User = {
    email: '',
    password: '',
    name: "Dog",
    surname: "Cat"
}
    return {...defaultUser, ...initialValues}
}

const updateUser = createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

console.log(updateUser)