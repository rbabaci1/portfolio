const validations = {
  name: name => name.length > 3,
  email: email => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email),
  message: message => message.length > 6,
};

export { validations };
