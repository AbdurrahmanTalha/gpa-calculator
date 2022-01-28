// const signals=["green","yellow","red"];

// for(let i=0; i<signals.length; i++){
//     if(signals[i]="green"){
//         console.log("Allowed to cross the road");
//     }else if(signals[i]="yellow"){
//         console.log("Wait for crossing the road");
//     } else if(signals[i]="red"){
//         console.log("You are not allowed to cross the road");
//     } else{
//         console.log("Invalid Signal");
//     }
// }

const signals=[
    {
        signal:"green",
        permission:"Alowed"
    },
    {
        signal:"yellow",
        permission:"Wait"
    },
    {
        signal:"red",
        permission:"Not Allowed"
    }
];

for(let i=0; i<signals.length;i++){
    if(signals[i].signal=="green"){
        signals[i].permission="Allowed"
    }else if(signals[i].signal=="yellow"){
        signals[i].permission="Wait"
    }else if(signals[i].signal=="red"){
        signals.permission="Not Allowed"
    }
    console.log(signals[i]);
}