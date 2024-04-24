// import getResponseFromAPI from "./0-promise.js";

// const response = getResponseFromAPI();
// console.log(response instanceof Promise);

// import getFullResponseFromAPI from './1-promise';

// console.log(getFullResponseFromAPI(true));
// console.log(getFullResponseFromAPI(false));

// import handleResponseFromAPI from "./2-then";

// const promise = Promise.resolve();
// handleResponseFromAPI(promise);
// import handleProfileSignup from "./3-all";

// handleProfileSignup();

// import signUpUser from "./4-user-promise";

// console.log(signUpUser("Bob", "Dylan"));


// import uploadPhoto from './5-photo-reject';

// console.log(uploadPhoto('guillaume.jpg'));

// import handleProfileSignup from './6-final-user';

// console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));


import loadBalancer from "./7-load_balancer";

const ukSuccess = 'Downloading from UK is faster';
const frSuccess = 'Downloading from FR is faster';

const promiseUK = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, ukSuccess);
});

const promiseUKSlow = new Promise(function(resolve, reject) {
    setTimeout(resolve, 400, ukSuccess);
});

const promiseFR = new Promise(function(resolve, reject) {
    setTimeout(resolve, 200, frSuccess);
});

const test = async () => {
    console.log(await loadBalancer(promiseUK, promiseFR));
    console.log(await loadBalancer(promiseUKSlow, promiseFR));
}

test();


