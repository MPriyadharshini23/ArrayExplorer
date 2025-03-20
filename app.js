function arrayInput(){
    let input=document.getElementById("input").value;
    return input.split(",").map(num=> parseFloat(num.trim())).filter(num=>!isNaN(num));
}
function display(result){
    document.getElementById("output").innerText=result;
}
function sort(){
    let arr=arrayInput();
    arr.sort((a,b)=>a-b);
    display(arr.join(", "));
}
function sum(){
    let arr=arrayInput();
    let sum=arr.reduce((acc,num)=>acc+num,0);
    display(sum);
}
function reverse(){
    let arr=arrayInput();
    display(arr.reverse().join(", "));
}
function even(){
    let arr=arrayInput().filter(num=> num%2===0)
    display(arr.join(", "));
}
function odd(){
    let arr=arrayInput().filter(num=> num%2!==0)
    display(arr.join(", "));
}
function min(){
    let arr=arrayInput();
    let min=Math.min(...arr);
    display(min);
}
function max(){
    let arr=arrayInput();
    let max=Math.max(...arr);
    display(max);
}