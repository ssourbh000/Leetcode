var myPow = function(x, n) {
    if(x == 1.00000)
    return 1.00000;

    let m=1;
    let l = Math.abs(n);
    for(let i=0; i<l; i++){
        if(n>0)
        m *= parseFloat(x);
        else
        m /= parseFloat(x);
    }
    return parseFloat(m).toFixed(5);

    // return x**n;
};

console.log(myPow(2.00000, -2))

// var myPow = function(x, n) {
//     if(n==0)
//         return 1;
//     if(n<0)
//         return myPow(1/x,-n)
//     if(n%2==0)
//         {
//             let h = myPow(x,n/2);
//             return h*h;
//         }
//     else
//         {
//             let h = myPow(x,(n-1)/2)
//             return x*h*h;
//         }
// };