// প্রাকটিস প্রব্লেম-২: 

// তাড়াহুড়া করে স্কুলের জন্য বের হচ্ছ কিন্তু রাস্তা পার হওয়ার সময় দেখলে, ট্রাফিক সিগন্যাল লাল রং। এই অবস্থায় যদি তুমি রাস্তা পার হওয়ার চেষ্টা কর, তাহলে ডেঞ্জার হতে পারে। যদি হলুদ রং হয় তাহলে তোমার থেমে যাওয়া উচিত। আর যদি ট্রাফিক সিগন্যাল গ্রিন হয় তাহলে তোমার রাস্তা পার হওয়া উচিত। তাই একটা কোড লিখে ফেলো। যেখানে আমরা signal নামে একটা ভেরিয়েবল থাকবে। সেটার মান green, yellow বা red হতে পারে। সেই অনুসারে ডিফারেন্ট ডিফারেন্ট কাজ হবে। তো, সেই কোড ফটাফট লিখে ফেলো। 


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