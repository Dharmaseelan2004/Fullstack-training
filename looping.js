array=[10,20,30,40,50,[60.5],"a","kec",true]
console.log(array)

for(var a in array)
{
    console.log(a);
    console.log("Elements present in index",a,"is",array[a]);
}