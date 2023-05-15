var http = require('http');
var static = require('node-static');

var path = new static.Server(`${__dirname}/localhost/`)

http.createServer(function (req, res) {
    req.addListener('end', function () {
        path.serve(req, res)
    }).resume()
  }).listen(8080);


  console.log('Server criado em: localhost:8080')

  //meu localhost não funciona, acho que deve ser por conta que eu tenho docker
  //e já utiliza uma porta, mas mesmo mudando a porta ele não consegue se conectar