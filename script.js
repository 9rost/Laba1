function fact(x) {
    var result = 1;
    while(x){
        result *= x--;
    }
    return result;
};


function fix () {
    var sum=0;
    var x = Number(document.getElementById("x").value)
    var n = Number(document.getElementById("n").value)
for (var i = 0 ; i <= n ; i++){
    sum += (((-1)**n)*(x*2*n))/fact(x);
}
document.writeln(sum);
};
