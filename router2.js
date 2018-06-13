function route(handle,pathname){
    console.log("About to route a request for " + pathname);

    // 獲取網址的URL,判斷是否有對應的路由
    if(typeof handle[pathname]==='function'){
        // pathname : /  /start  /upload 在index.js中獲取
        //  /  /start 對應的函數是start(),/upload 對應函數是upload()
       handle[pathname](); 
    }else{
        console.log("No request handler found for " + pathname);
    }
}

exports.route = route;