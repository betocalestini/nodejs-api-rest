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
module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) =>{

  const novoCaminho = `./assets/imagens/${nomeDoArquivo}`
  fs.createReadStream(caminho)
    .pipe(fs.createWriteStream(novoCaminho))
    .on('finish', () =>{
      callBackImagemCriada(novoCaminho)
    })
}