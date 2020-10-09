const validations = {
  name: name => name.length > 3,
  email: email => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email),
  message: message => message.length > 6,
};

const validateSubmission = (name, email, message) => {
  let fields = [name, email, message];

  for (let i = 0; i < 3; i++) {
    let f = fields[i];
    if (!validations[f.current.name](f.current.value)) {
      f.current.focus();
      f.current.style.borderColor = "#e91e63";
      f.current.style.transitionDuration = "0.5s";
      return f.current.name;
    }
  }
  return false;
};

export { validations, validateSubmission };
