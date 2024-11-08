interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (
  profileObj: Profile,
  updateObj: Partial<Profile>
): Profile => {
  const updatedProfile: Profile = { ...profileObj, ...updateObj };
  return updatedProfile;
};

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { email: "newalice@example.com" }));
