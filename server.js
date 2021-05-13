const path = require('path');
const gateway = require('express-gateway');
const fs = require('fs')

var common = './config/common.yml'
var gatewayConfig = './config/gateway.config.yml'

let ENV = process.env.GATEWAY_ENV

let file1 = `./config/${ENV}.yml`

fs.readFile(file1 , 'utf-8' , function(err,data){
  fs.readFile(common , 'utf-8' , function(err2,data2){
      let str = data + '\n' + data2;
      fs.writeFile(gatewayConfig , str , function(){
        gateway()
          .load(path.join(__dirname, 'config'))
          .run()
      });        
  })
})
