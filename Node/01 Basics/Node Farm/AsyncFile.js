const fs = require('fs');

fs.readFile('./txt/startqe.txt', 'utf-8', (err, data1) => {
  if (err) return console.log(`${err} 💥`);
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
      fs.writeFile('./txt/op2.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log(err);
      });
    });
  });
});

console.log('Reading File.... ');
