const express = require('express');
const app = express();

app.get('/', (req, res) => {
  let letras=''
  for(let i=0;i<50;i++){
    const numeroVisual=i+1;
    if(numeroVisual%2===0){
      letras+=`<p>${numeroVisual} Soy Par!</p>`
    }
    else{
      letras+=`<p>${numeroVisual} Soy Impar!</p>`
    }
  }
  // for(let i=0;i<50;i++){    
  res.send(letras);
  
  // }
});


app.listen(3000, () => console.log('Listening on port 3000!'));