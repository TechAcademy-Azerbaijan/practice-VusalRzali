const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let n =parseInt(result.input)
    let ch = "";
for (let i = 1; i * i < n; i++) {
  ch = ch + `${i * i}` + " ";
}
console.log(ch);
})
