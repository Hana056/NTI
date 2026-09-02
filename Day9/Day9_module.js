export function welcomeUserName(name) {
  return `Welcome ${name}!`;
}

export function userAge(num){
  return `Age is ${num}`;
}

const userData = {
  cityOfResidence: "Cairo",
  proffession: "Student",
  advice() {
    console.log("Be aware of your studies.");
  },
};

export default userData;