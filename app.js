const express = require('express');
const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');

app.get('/', (req, res) => {
  // let letras=''
  // for(let i=0;i<50;i++){
  //   const numeroVisual=i+1;
  //   if(numeroVisual%2===0){
  //     letras+=`<p>${numeroVisual} Soy Par!</p>`
  //   }
  //   else{
  //     letras+=`<p>${numeroVisual} Soy Impar!</p>`
  //   }
  // }    
  // res.send(letras);
  const texts = [];
  for (let i=1; i <=50; i++) {
    texts.push(`${i} Soy ${(i % 2 == 0 ? "Par" : "Impar")}!`);
  }

  res.render("index", { texts: texts });
});


app.listen(3000, () => console.log('Listening on port 3000!'));