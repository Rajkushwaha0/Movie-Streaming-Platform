export const checkValidData = (username, email, password) => {
  const isValidEmail = /^[a-zA-Z0-9._%+-]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isValidPassword =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (username != "signin" && username == "") return "Each Entry is required";
  if (!isValidEmail) return "Email ID is not valid";
  if (!isValidPassword) return "Password is not valid";

  return null;
};
