let userInfo = [
  {
    firstName: "Rocky",
    lastName: "Balboa",
    number: 1234567890,
    likes: ["Movies", "Singing"],
  },
  {
    firstName: "Billie",
    lastName: "Rambo",
    number: 1656567890,
    likes: ["Dancing", "Shopping"],
  },
  {
    firstName: "John",
    lastName: "Wick",
    number: 2234567890,
    likes: ["Shooting", "Hiking"],
  },
  {
    firstName: "Andy",
    lastName: "Murray",
    number: 1237567890,
    likes: ["Running", "Movies"],
  },
  {
    firstName: "Dave",
    lastName: "Jonathan",
    number: 344567890,
    likes: ["Golf", "Theatre"],
  },
];

function findUser(username, details) {
  let output = "";
  for (let index = 0; index < userInfo.length; index++) {
    if (userInfo[index].firstName.toLowerCase() == username.toLowerCase()) {
      if (userInfo[index][details]) {
        output = userInfo[index][details];
        break;
      } else {
        output = "No Such Property exists";
        break;
      }
    } else {
      output = "No Such User Found";
    }
  }
  return output;
}

let fName = prompt("What's the name of the person?");
let property = prompt("What details would you like to know?");

alert(findUser(fName, property));
