const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let arr = result.input.split(',');
    let arr2= arr.reverse()
    for(i = 0; i<arr.length; i++){
        console.log(arr2[i]);
    }

})
