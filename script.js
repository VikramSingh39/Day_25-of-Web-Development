// Qu. 1 Create a function that takes a callback and executes it after "n" seconds indefinitely.
function repeatFun(fn, time){
    setInterval(fn, time);
}
repeatFun(()=>{
    console.log("I am running bro just sit back and relax");
}, 1000);


// Qu. 2 Implement a function that returns a function with a preset greeting (Closure).
function greet(fn){
    let name = prompt("please enter your name")
    return ()=>{
      console.log(`${fn} ${name}`);
    }
} 
let greetKaro = greet("hello");
greetKaro();



// Qu. 3 Implement a function that takes a callback and only executes it once (HOF + Closures).
function abc(fn){
let runned = false;
    return ()=>{
        if(!runned){
            runned = true;
            fn();
        }else{
            console.error("executed once already 😊")
        }
    }
}
let abc_function = abc(()=>{
    console.log("Hello I am executed once");
});
abc_function();


// Qu 4. Implement a function that throttle another function (HOF + Closures)
function once(fn, delay){
    let lastCall = 0;

   return ()=>{
        let currentTime = Date.now();
        if(currentTime - lastCall >= delay){
            lastCall = currentTime;
            fn();
        }
    }
}
let onceCall = once(()=>{
    console.log("Vikram");
}, 4000)

onceCall();

