export default function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
  // return new Promise((resolve) => {
  //   resolve({ firstName: firstName, lastName: lastName });
  // });
}
