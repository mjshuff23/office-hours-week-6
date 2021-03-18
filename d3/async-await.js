/******************************************************************************
 1. Use async/await with promise-based functions to write asynchronous code that behaves synchronously
*******************************************************************************/
const fetch = require('node-fetch');

getPerson = async (id) => {
  let response = await fetch(`https://swapi.dev/api/people/${id}`);
  let person = await response.json();
  console.log(person);
};

getPerson(1); // => Luke Skywalker
getPerson(2); // => C-3PO
getPerson(3); // => R2-D2
