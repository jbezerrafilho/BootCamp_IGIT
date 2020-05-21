window.addEventListener('load', colorPicker)

function colorPicker () {
  
  var red = document.querySelector('#red').value
  var green = document.querySelector('#green').value
  var  blue = document.querySelector('#blue').value
  var color = 'rgb(' + red + ',' + green + ',' + blue + ')'
  
  document.querySelector('#inputRed').value = red
  document.querySelector('#inputGreen').value = green
  document.querySelector('#inputBlue').value = blue

 
  
  document.body.style.backgroundColor = color

}

document.querySelector('#red').addEventListener('input', colorPicker)
document.querySelector('#green').addEventListener('input', colorPicker)
document.querySelector('#blue').addEventListener('input', colorPicker)
