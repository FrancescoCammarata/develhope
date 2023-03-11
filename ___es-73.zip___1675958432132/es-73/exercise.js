function printAsyncName(callback, name){
    setTimeout(() => {
        callback();
        setTimeout(() => {
            console.log(name)
        }, 2000)
    }, 1000)
}

printAsyncName(() => {
    console.log("Hello");
}, "Francesco");