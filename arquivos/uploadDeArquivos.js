const fs = require('fs')

//metodo sincrono
// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//   console.log('A imagem foi bufferizada')
//   // console.log(buffer)

//   fs.writeFile('./assets/salsicha2.jpg', buffer, (erro) => {
//     console.log('A imagem foi escrita')
//   })
// })

//metodo assincrono
fs.createReadStream('./assets/salsicha.jpg')
  .pipe(fs.createWriteStream('./assets/salsicha3.jpg'))
  .on('finish', () =>{
    console.log('A imagem foi escrita com sucesso')
  })