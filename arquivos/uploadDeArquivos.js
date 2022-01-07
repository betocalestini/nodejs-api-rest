const fs = require('fs')
const path = require('path')

//metodo sincrono
// fs.readFile('./assets/salsicha.jpg', (erro, buffer) => {
//   console.log('A imagem foi bufferizada')
//   // console.log(buffer)

//   fs.writeFile('./assets/salsicha2.jpg', buffer, (erro) => {
//     console.log('A imagem foi escrita')
//   })
// })

//metodo assincrono
module.exports = (caminho, nomeDoArquivo, callBackImagemCriada) => {

  const tiposValidos = ['.jpg', '.png', '.jpeg']
  const tipo = path.extname(caminho)
  const tipoEhValido = tiposValidos.indexOf(tipo) !== -1

  if (tipoEhValido) {
    const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    fs.createReadStream(caminho)
      .pipe(fs.createWriteStream(novoCaminho))
      .on('finish', () => {
        callBackImagemCriada(false, novoCaminho)
      })
  } else {
    const erro = "Tipo é inválido"
    console.log('Erro! Tipo de arquivo invalido')
    callBackImagemCriada(erro)
  }
}