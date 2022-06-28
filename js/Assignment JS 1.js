var m = 10, s=0;
var xyz = setInterval(function () {
    var min = m>=10?m:"0"+m;// toán tử 3 ngôi
    var sec = s>=10?s:"0"+s;
    console.log(min+":"+sec);
    s--;
    if(s <0){
        s=59;
        m--;
    }
    if(m<0) clearInterval(xyz);
},1000);