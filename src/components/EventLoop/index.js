// { First }
console.log("Start");
setTimeout(() => {
  console.log("setTimeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");

// { Second }
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
Promise.resolve()
  .then(() => {
    console.log("C");
  })
  .then(() => {
    console.log("D");
  });
console.log("E");

// { Third }
setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
  }, 0);
}, 0);
setTimeout(() => {
  console.log("3");
}, 0);

//  {Fourth}
setTimeout(() => {
  console.log("Timeout");
  Promise.resolve().then(() => {
    console.log("Promise inside Timeout");
  });
}, 0);
console.log("Sync Log");

// { Fifth }
async function test() {
  console.log("1");
  await Promise.resolve();
  console.log("2");
}
console.log("3");
test();
console.log("4");

//  { Sixth }
setImmediate(() => {
  console.log("setImmediate");
});
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// {Seventh}
console.log("A");
setTimeout(() => console.log("B"), 0);
Promise.resolve()
  .then(() => {
    console.log("C");
    return Promise.resolve();
  })
  .then(() => console.log("D"));
console.log("E");

// {Eigth}
console.log("X");
setTimeout(() => console.log("Y"), 0);
Promise.resolve()
  .then(() => {
    console.log("Z");
    return Promise.resolve();
  })
  .then(() => {
    console.log("W");
    setTimeout(() => console.log("V"), 0);
  });
console.log("U");

// {Ninth}
const observer = new MutationObserver(() => console.log("MutationObserver"));
const targetNode = document.createElement("div");
observer.observe(targetNode, { attributes: true });
console.log("Start");
setTimeout(() => console.log("setTimeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
targetNode.setAttribute("data-test", "1");
console.log("End");

// {Tenth}
async function test() {
  console.log("1");
  setTimeout(() => console.log("2"), 0);
  await Promise.resolve();
  console.log("3");
}
console.log("4");
test();
console.log("5");

// {Eleventh}
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
console.log("Sync log");

// {Twelfth}
Promise.reject("Immediate Reject").catch(console.log);
setTimeout(() => {
  Promise.reject("Delayed Reject").catch(console.log);
}, 0);
console.log("End");
