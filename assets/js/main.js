'use strict'
const form = document.querySelector('.form')

form.addEventListener('submit', function(e){
  e.preventDefault()
  const heightValue = e.target.querySelector('.heightidentfier')
  const weightValue = e.target.querySelector('.weightidentfier')
  const height = Number(heightValue.value)
  const weight = Number(weightValue.value) 



  if (!height) {
    SetResult('Altura invalida', false)  
    return
  }
  if (!weight) {
    SetResult('Peso invalido', false)
    return
  }

  const bmi = (getBmi(height, weight))
  const message = resultMessage(bmi)
  SetResult(`O seu imc é ${bmi}, ${message}`, true)
})

const getBmi = (height, weight) =>{
   const result = weight / height**2
   return result.toFixed(2)
}

const resultMessage = (bmi) =>{
  const resultMessages = ['Abaixo do peso','Peso normal','Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3' ]
  if (bmi <= 18.5) {
    return resultMessages[0]
    
  }else if (bmi <=24.9){
    return resultMessages[1]
    
  }else if (bmi <=29.9){
    return resultMessages[2]

  }else if (bmi <=34.9){
    return resultMessages[3]
    
  }else if (bmi <= 39.9){
    return resultMessages[4]
    
  } else if(bmi > 39) {
    return resultMessages[5]
  }
}

const createParagraph = () =>{
  const p = document.createElement('p')
  return p 
}

const SetResult = (smg, isValid) =>{
   const result = document.getElementById('result')
   result.innerHTML = ''
   const p = createParagraph()
   p.innerHTML = (smg)
   if (isValid) {
    p.classList.add('paragraph-result')
   }else{
    p.classList.add('bad-result')
   }
   result.appendChild(p)
}