function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    var fibnumber =[];
    var input = n;

    if (input === 1) {
       fibnumber.push(0);
       return fibnumber
    } else {
       fibnumber.push(0)
       for(var i=1;i<input;i++){
         if(i===1) {
           fibnumber.push(1);
         } else {
           fibnumber.push(fibnumber[i-2]+fibnumber[i-1]);
         }
       }
       return fibnumber
    }   //Return an array of fibonacci numbers starting from 0.    
//Do NOT change any of the code below 👇
}
