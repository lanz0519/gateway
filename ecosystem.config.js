module.exports = {
  apps: [
    {
      name: "gateway", //应用名
      script: "server.js", //应用文件位置
      output: '/dev/null',
      error: './error.log',
      env: {
        NODE_ENV: "development", //启动默认模式
      },
      env_production: {
        GATEWAY_ENV: "pro", //使用production模式 pm2 start ecosystem.config.js --env production
      },
      // instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
      // instance_var: "INSTANCE_ID",
      // exec_mode: "cluster",
      // min_uptime: "30s",
      // max_restarts: 10,
      //cron_restart: "40",
      // watch:[
      //   "server",
      // ],  //监听模式，不能单纯的设置为true，易导致无限重启，因为日志文件在变化，需要排除对其的监听
      // merge_logs: true,         //集群情况下，可以合并日志
    },
  ],
  deploy: {
    production: {
      //配置没法提供密码，所以前面需要配置ssh免密码登录服务器
      user: "root", //ssh 登陆服务器用户名
      host: "119.29.201.187", //ssh 地址服务器domain/IP
      ref: "origin/master", //Git远程/分支
      repo: "ssh://git@172.16.16.15:10022/lanz/expressGateway.git", //git地址使用ssh地址
      path: "/root/expressGateway/prod", //项目存放服务器文件路径
      "post-deploy":
        "git pull && npm i && pm2 reload ecosystem.config.js --env production", //部署后的动作
    },
  },
};