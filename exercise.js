function printname(){
    let helloName = "Hello John";
    function inner(){
        console.log(helloName)
    }
    inner();
}
printname();