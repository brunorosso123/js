const user = {username:'dfift', age:31, country:'UY'};

const {username, ...values} = user;
console.log(username);
console.log(values);