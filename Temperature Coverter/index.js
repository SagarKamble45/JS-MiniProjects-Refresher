document.getElementById('convert').onclick = function(){
    let temp = (document.getElementById('temp').value);

    if (temp === '' || isNaN(temp)) {
    alert('Please enter a value');
    return;
    }
    temp = parseFloat(temp);
    let unit = document.getElementById('unit').value;

    let convertedTemp = unit === 'C' 
    ? (temp * 9/5) + 32 // convert c -> F
    : (temp - 32 ) * 5/9 // convert f -> C
        
    document.getElementById('converted').textContent=convertedTemp.toFixed(2);
        
}