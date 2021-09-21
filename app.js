window.addEventListener("DOMContentLoaded", function () {
    let counter=1;
     // Margaret G. Robinson
    // Create an array with 5 friends
  
    const friends = [ "Tony" , "Dianna" , "James" , "Mary" , "Joyce"];
function sing() {
for (let friend=0; friend<friends.length; friend++) {
    let container=document.createElement("div");
    container.className="friend";
    document.body.appendChild(container);

    let h3=document.createElement("h3");
    let h3friend=friends[friend];
    h3.appendChild(h3friend);
    container.appendChild(h3);
    
    console.log(friends[friend])
    for (let i=99; i>0; i--) {
        let str=("lines")
        if (i>2) {
        console.log(i + " " + str + " of code in the file, " + i + " " + str + " of code:  " + friends[friend] + " " + "strikes one out, clears it all out ", + (i-1) + "lines of code");
        } else if (i==2) {
            console.log(i + " " + str + " of code in the file, " + i + " " + str + " of code:  " + friends[friend] + " " + "strikes one out, clears it all out ", + (i-1) + "line of code");
        } else {
            let str=("line")
            console.log(i + " " + str + " of code in the file, " + i + " " + str + " of code:  " + friends[friend] + " " + "strikes one out, clears it all out ", "no more lines of code");
        counter++;
        }
    }
}
    }
    document.getElementById("btn-sing").addEventListener("click", sing);
});

