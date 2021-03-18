/******************************************************************************
 2. Use Promises to write more maintainable asynchronous code
*******************************************************************************/
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitAndLog() {
  await wait(2000);
  console.log('The waiting is over!');
}

waitAndLog();
