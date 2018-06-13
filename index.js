var server = require("./server4");
var router = require("./router3");
var requestHandlers = require("./requestHandlers4");

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

/**
 * handle的值： 得到路由和函數對應關係
 * {    '/' : [Function:start],
 *      '/start':[Fcuntion:start],
 *      '/upload'[Function:upload]  }
 */
console.log(handle);

server.start(router.route,handle);