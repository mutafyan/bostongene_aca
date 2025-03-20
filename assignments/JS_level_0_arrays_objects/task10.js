/**
 * Write a program that creates two objects ‘A’ and ‘B’ from the given array,
 * A object should collect items whose team is ‘A’, and the B object should 
 * collect items whose team is ‘B’
 */

let teamsData = [
    { team: 'A', name: 'John', score: 12 },
    { team: 'B', name: 'Mary', score: 13 },
    { team: 'A', name: 'Karine', score: 15 },
    { team: 'A', name: 'Aram', score: 34 },
    { team: 'B', name: 'Davit', score: 12 },
    { team: 'B', name: 'Tigran', score: 39 },
    { team: 'A', name: 'Gayane', score: 9 },
    { team: 'B', name: 'Elina', score: 12 },
];


export const run = () => {
    let A = {};
    let B = {};
    
    teamsData.forEach(item => {
      if (item.team === 'A') {
        A[item.name] = item.score;
      } else if (item.team === 'B') {
        B[item.name] = item.score;
      }
    });
    console.log('A: ', A);
    console.log('B: ', B);
}