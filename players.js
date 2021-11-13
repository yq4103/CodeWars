// My friend Lee is a fan of foosball (insert/use another 1-on-1 game here). Lee plays in an amateur foosball league, has asked us for help writing a program to understand player rankings.

// We're given some game outcome data like the following:
const games = [
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 },
];
// Write a function that returns a list of all the player names (no player should be listed more than once).

// names = ['Alice', 'Bob', 'Carol', 'Dean', 'Elise']

//create an empty result array []
//iterate through the array of objects to push a name to the result array if the name doesn't already exist

const playerNames = function(input) {
  let resultArr = [];
  input.forEach((obj) => {
    if (!resultArr.includes(obj.winner)) {
      resultArr.push(obj.winner);
    }
    if (!resultArr.includes(obj.loser)) {
      resultArr.push(obj.loser);
    }
  });

  return resultArr;
};

console.log(playerNames(games));

// Question #2
// Using the same data as the previous question, write a function that produces a data structure like the following, which lists each participant, and a list of who they've beaten.

// Output:

// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }

//take the input array, use the playerNames helper function to create an array of players
//turn the array of players into a player object
//loop through the input array again, this time creating arrays for each player which include the players they beat
//give the arrays of defeted players to the corresponding keys in the player object

// CONSOLE>LOG:

// {
//   'Alice': ['Bob']
//   'Bob': []
// }

const playerBeat = function(input) {
  let playerObj = {};
  const namesArr = ["Alice", "Bob", "Carol", "Dean", "Elise"];

  namesArr.forEach((name) => {
    playerObj[name] = [];
    input.forEach((game) => {
      if (game.winner === name && !playerObj[name].includes(game.loser)) {
        playerObj[name].push(game.loser);
      }
    });
  });
  return playerObj;
};

console.log(playerBeat(games));
