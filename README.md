# Bostongene Training Exercises

## Structure

You may find exercise solutions grouped in folders by theme in assignments folder. Each file contains a solution to certain exercise marked by number. Each file contains the task itself and the solution.

```struct
assignments/
    conditional_operators/
        exercise1.js
        exercise2.js
        ...
    loops/
        ...
```

## Modular solution

Using node v20+, ES6. Each exercise file is a module. Also there is a helper module to re-use often needed code pieces.
Start script defined for ease of use while running through CLI

```json
// package.json
{
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "engines": {
    "node": ">=20.0.0"
  },
}
```

## How to run

Since each exercise file is a module and each module contains a run function which executes the solution, you may import them and use in **index.js** like this to test each solution:

```js
import { run } from './assignments/conditional_branching/exercise2.js';

run();
```

Then run in terminal using:

```sh
npm start
```
