// Range Slider
const rangeInputs = document.querySelectorAll('input[type="range"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

// Range Slider
function update(){
  let x = parseInt(document.getElementById('XSlider').value);
  let y = parseInt(document.getElementById('YSlider').value);
  let sum = x + y;
  console.log(sum);
  document.getElementById('output').innerText = '£' + Number(x + y);
  document.getElementById('totals').innerText = '£' + Number(x + y); 
}

// Toggle