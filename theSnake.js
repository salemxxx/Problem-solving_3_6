let input = '5 9'
let fNum = parseInt(input[0]),
    lNum = parseInt(input[2]);
let hash = '#' , ponit = '.'
let x ='',y = '',z ='',y1 = '',z1 ='';
 let check  = true;
 let col =0;

if (( 3 <= fNum && fNum <= 50 ) && ( 3 <= lNum && lNum <= 50 ) && fNum % 2 == 1) {
    for ( col= 0; col < lNum; col++) {
        x += hash
        y += ponit
        z = y.substring(0,y.length-1) + hash
     }
       
    for ( col = 0; col < lNum ; col++) {
        y1 += ponit
        z1 = hash + y1.substring(0,y1.length-1)
    
    }
   for (let index = 1; index <= fNum; index++) {
    if (index % 2 ==1) {
        console.log(x);
    } else if (index % 2 == 0 && check) {
       console.log(z); 
       check = false
    }else{
       console.log(z1);
       check = true
    }
}
}
    
