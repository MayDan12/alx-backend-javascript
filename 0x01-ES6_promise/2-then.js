export default function handleResponseFromApi(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch(() => {
      console.error('Got an error from thr API');
      return new Error();
    });
}
