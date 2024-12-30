async function funName(){
    return "Hello";
}
arrowFunName=async()=>{
    return "KEC";
}

console.log(funName())
console.log(arrowFunName())
//my own 
 arrowDharma=async()=>{
    setTimeout(()=>
    {
        return "seelan"
    },2000);
 }
 console.log(arrowDharma())

 function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data fetched!");
            resolve(); 
        }, 2000);
    });
}

async function handleData() {
    console.log("Start fetching...");
    await fetchData(); 
    console.log("Process fetched data...");
}

handleData();
 
