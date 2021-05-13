const fs = require('fs');

var dev = './config/dev.yml'
var pro = './config/pro.yml'
var common = './config/common.yml'
var gateway = './config/gateway.config.yml'

let ENV = process.env.GATEWAY_ENV

let file1 = `./config/${ENV}.yml`

console.log(file1)

fs.readFile(dev , 'utf-8' , function(err,data){
  fs.readFile(common , 'utf-8' , function(err2,data2){
      let str = data + '\n' + data2;
      fs.writeFile(gateway , str , function(){});        
  })
})
