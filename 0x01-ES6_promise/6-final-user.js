import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(promise)
  .then((results) => {
      const response = [];
      results.forEach((result) => {
          if (result.status === "fulfilled") {
              response.push({
                  status: "fulfilled",
                  value: result.value,
              });
          } else {
              response.push({
                  status: "rejected",
                  value: result.reason,
              });
          }
      });
      return response;
  })
  .catch((error) => {
      console.error("Signup system offline");
      return [];
  });
}
