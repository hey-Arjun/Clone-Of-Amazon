let a=math.random()*100;
a=Number.parseInt(a)
let inp;
let score=100;

while(inp!=a) {
    score=score-1;
    inp=prompt("Enter No.");
    
    if(inp==a){
        console.log("correct")
        console.log("you guess in ${100-score} chances")
    }
    else if(inp>a && inp<100) {
        console.log("your no is greater than actual no.")
    }
    else if(inp<a && inp>0) {
        console.log("your no is smaller than actual no")
    }
    else {
        console.log("enter no btw 1 to 100")
    }
}