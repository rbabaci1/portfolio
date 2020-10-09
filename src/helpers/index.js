const validations = {
  name: name => name.length > 3,
  email: email => /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email),
  subject: subject => subject.length > 6,
  message: message => message.length > 6,
};

const validateSubmission = ({ name, email, subject, message }) => {
  let fields = [name, email, subject, message];

  for (let i = 0; i < fields.length; i++) {
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
