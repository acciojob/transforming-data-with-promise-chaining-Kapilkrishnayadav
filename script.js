const ip = document.getElementById("ip");
      const output = document.getElementById("output");

      function startChain() {
        new Promise((resolve, reject) => {
          setTimeout(() => {
            output.innerText = ip.value;
            resolve(Number(ip.value)); // convert string to number
          }, 2000);
        })
          .then((data) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                output.innerText = data * 2;
                resolve(data * 2);
              }, 2000);
            });
          })
          .then((data) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                output.innerText = data - 3;
                resolve(data - 3);
              }, 1000);
            });
          })
          .then((data) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                output.innerText = data / 2;
                resolve(data / 2);
              }, 1000);
            });
          })
          .then((data) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                output.innerText = data + 10;
                resolve(data + 10);
              }, 1000);
            });
          });
      }