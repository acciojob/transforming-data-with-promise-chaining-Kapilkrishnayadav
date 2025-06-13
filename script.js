const ip = document.getElementById("ip");
const output = document.getElementById("output");

function startChain() {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      output.innerText = "Result: " + ip.value;
      resolve(Number(ip.value));
    }, 2000);
  })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.innerText = "Result: " + (data * 2);
          resolve(data * 2);
        }, 1000); // note: Cypress test expects 1 second here, not 2
      });
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.innerText = "Result: " + (data - 3);
          resolve(data - 3);
        }, 1000);
      });
    })
    .then((data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          output.innerText = "Result: " + (data / 2);
          resolve(data / 2);
        }, 1000);
      });
    })
    .then((data) => {
      setTimeout(() => {
        output.innerText = "Final Result: " + (data + 10);
      }, 1000);
    });
}
