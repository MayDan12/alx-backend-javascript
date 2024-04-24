import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const promise = [uploadPhoto(), createUser()];
    const [photoRes, userRes] = await Promise.all(promise);

    return {
      photo: photoRes,
      user: userRes,
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      photo: null,
      user: null,
    };
  }
}
