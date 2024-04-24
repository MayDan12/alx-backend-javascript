import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filename) {
  const promise = [signUpUser(firstName, lastName), uploadPhoto(filename)];
  return Promise
    .allSettled(promise)
    .then((data) => (
      data.map((o) => ({
        status: o.status,
        value: o.status === 'fulfilled' ? o.value : String(o.reason),
      }))
    ));
}
