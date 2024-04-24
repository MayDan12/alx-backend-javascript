import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise.allSettled(promise)
    .then((data) => {
    //   console.log(data[0].value, data[0].status, data[1].status, data[1].reason);
      const newInfo = [];
      for (const res of data) {
        if (res.status === 'fulfilled') {
          newInfo.push({ status: res.status, value: res.value });
        } else if (res.status === 'rejected') {
          newInfo.push({ status: res.status, value: res.reason });
        }
      }
      return newInfo;
    });
}
