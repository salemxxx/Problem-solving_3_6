const { fileURLToPath } = require("url");

let fInput = 'code',
    lInput = 'edoc',
    strCheck = '';

// i = 0  j = lInput. length 

if (fInput.length <= 100 && typeof fInput === 'string' && !fInput == '') {
    for (let index = lInput.length-1; index >= 0 ; index--){
        strCheck += lInput[index]
    
    }
    if (strCheck === fInput) {
    console.log('Yes');    
    }else
    console.log('No');
}


