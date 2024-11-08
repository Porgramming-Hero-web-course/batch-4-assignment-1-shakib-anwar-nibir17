"use strict";
const updateProfile = (profileObj, updateObj) => {
    const updatedProfile = Object.assign(Object.assign({}, profileObj), updateObj);
    return updatedProfile;
};
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { email: "newalice@example.com" }));
