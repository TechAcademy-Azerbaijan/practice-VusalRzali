const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
    let number = parseInt(result.input)
    console.log(parseInt(number/100)*100 + parseInt((number%100)/20)*30 + ((number%100)%20)*2);
    
});











