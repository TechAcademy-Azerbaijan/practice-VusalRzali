const prompt = require('prompt');
prompt.start();

prompt.get('input', function (err, result) {
    let Fibonacci6 = parseInt(result.input)
        let sayi1 = 0;
        let sayi2 = 1;
        let toplam;
        let fibonacciSayilari = [];
 
        for(let i = 0; i < Fibonacci6; i++){
            toplam = sayi1 + sayi2;
            sayi1 = sayi2;
            sayi2 = toplam;
            fibonacciSayilari.push(toplam);
        }        
 
        console.log("Fibonacci (" + Fibonacci6 + ") : " + toplam);
})
