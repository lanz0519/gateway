module.exports = {
  logConfig: {
    maxBufferLength: 25, // 内存中日志最大数目
    frequencyInterval: false, // 是否开启日志定时写入
    flushTime: 2000, // 定时写入间隔
    maxSize: '50m', // 单个日志文件的最大,超过的将会被gzip压缩
    maxFiles: '7d', // 存储文件的天数，超过的会被删除
    filename: `./gatewayLog/%DATE%/%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    frequency: '5m',
    test: 'test'
  },
  bucConfig: {
    // 必选参数
    SecretId: "AKIDVlmX2HpJ5a7TYQnRYP0LRAfvvf9ODCpC",
    SecretKey: "JNBj16yb4HFxOZU9algLkskMjphIelbC",
    // 可选参数
    FileParallelLimit: 3,    // 控制文件上传并发数
    ChunkParallelLimit: 8,   // 控制单个文件下分片上传并发数，在同园区上传可以设置较大的并发数
    ChunkSize: 1024 * 1024 * 21,  // 控制分片大小，单位 B，在同园区上传可以设置较大的分片大小
    StorageClass: 'STANDARD_IA',
    Bucket: 'gateway-log-1255375280', /* 必须 */
    Region: 'ap-chongqing',     /* 存储桶所在地域，必须字段 */
  },
  webSocketConfig: [
    // {
    //   url: '/peerJsServer/*/',
    //   host: 'localhost',
    //   port: '9000'
    // },
    // {
    //   url: '/water-as/*',
    //   host: 'localhost',
    //   port: '4011'
    // }
  ]
}