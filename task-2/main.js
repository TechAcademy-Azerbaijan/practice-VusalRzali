const prompt = require("prompt");
prompt.start();
prompt.get("input", function (err, result) {
  let eded = parseInt(result.input);
  var result = false;
  for (i = 2; i < eded; i++) {
    if (eded % i === 0) {
        result = true
        console.log('No');
        break;
    }
  }
  if(result === false){
    console.log('Yes');
  }
});
