var multiplicationTable1 = document.querySelector('#multiplicationTable1');
var multiplicationTable2 = document.querySelector('#multiplicationTable2');
var m1 = "";
var m2 = "";

function displayTable(){
    var n = parseInt(prompt("Digite um número:"));
    var i = 1;

    if(isNaN(n)){
        n = parseInt(Math.random(n)*10) ;
    }else{
        n;
    }

    clearTable(); 

    while(i <= 25){
        m1 += n + " x " + i + " = " + (n*i) + "<br>";
        i++;
    }

    multiplicationTable1.innerHTML = m1;

    var i = 26;

    while(i <= 50){
        m2 += n + " x " + i + " = " + (n*i) + "<br>";
        i++;
    }

    multiplicationTable2.innerHTML = m2;
}

function clearTable(){
    m1 = "";
    m2 = "";
    multiplicationTable1.innerHTML = m1;
    multiplicationTable2.innerHTML = m2;
}