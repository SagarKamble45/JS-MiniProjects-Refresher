let colorPara = document.getElementById('color');
colorPara.textContent="black";

document.getElementById('btn').onclick = function(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorPara.textContent=randomColor;
    document.body.style.background = randomColor;
}

document.getElementById('')