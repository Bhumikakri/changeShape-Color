// let circle = document.getElementsByClassName("circle");
let btnn1 = document.getElementById('btn1')
let btnn2 = document.getElementById('btn2')

let colors = [ "red","Bole","blue","black","yellow", "#5d8aa8", "#fae7b5", "#3d2b1f", "#fe6f5e", "#faf0be", "#de5d83"];
let indx=0;
btnn1.addEventListener('click',() => {
    if(indx == colors.length){
        indx = 0;
    }
    document.getElementById("circle").style.backgroundColor = colors[indx];
    indx++;
    btnn1.classList.add("button");

    setTimeout(() => {
        btnn1.classList.remove("button");
    },500);
})

//------------------------for shapes changing   ------------------------------//


    const shape1 = document.querySelector(".shap1");
    // const shape2 = document.getElementById("shap1").classList.add('triangle')
    // const shape3 = document.getElementById("shap1").classList.add('star');
    const shape = ['shape1', 'triangle', 'parallel', 'star', 'close', 'hexagon','cross', 'pentagon', 'circleMini'];
    let index = 0;
btnn2.addEventListener('click',() =>{
    shape1.classList.remove(shape[index]);
    if(index == shape.length){
        index = 0;
    }
    index++;
    shape1.classList.add(shape[index]);
    btnn2.classList.add("button");

    setTimeout(() => {
        btnn2.classList.remove("button");
    },500);
})