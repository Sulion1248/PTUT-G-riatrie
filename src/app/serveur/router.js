function route(handle,pathname,res,meth) {
         var param=0;
         if (pathname.split("/").length>2){
            param = pathname.split("/")[2] 
            pathname="/"+pathname.split("/")[1]
         }
         if (typeof handle[pathname] === 'function' ){
             handle[pathname](res,param,meth);} 
         else {
             res.writeHead(404, {"Content-Type": "text/plain"});
             res.write("404");
             res.end()
         }
    }


    
    exports.route = route;
    