//    JSON iterate over all for loops (for, for in, for of, forEach)

//for loop

let sum =[{"a":"1","c":"7"},{"d":"2","v":"6"}];
for(let i=0;i<=sum.length;i++)
{
  
console.log(sum[i]);
};

 //for in

const person =[{"name":"suriya"},{"age":"21"},{"sex":"male'"
}];
for (let key in person)
{
    console.log(key+":", person[key]);
} ;

//for of

let colors =[{"1":"red"},{"2":"yellow"},{"3":"green"}];
for(let color of colors)
{
    console.log(color);
};

//forEach loop

var geek=[{"name":"moorthi"} ,{"lastname":"moorthi"},{"ade":"21"}];
    geek.forEach(i =>console.log (i));
