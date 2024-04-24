import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(promise)
    .then((data) => {
    //   console.log(data[0].value, data[0].status, data[1].status, data[1].reason);
      if (data.status) {
        return [{
          status: data[0].status,
          value: data[0].value,
        }];
      }
      return [{
        status: data[1].status,
        error: data[1].reason,
      }];
    });
}
