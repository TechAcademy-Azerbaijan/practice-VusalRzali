const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let n = parseInt(result.input)
    let c = "";
for (let i = 1; i * i < n; i++) {
  c = c + `${i * i}` + " ";
}
console.log(c);
})
