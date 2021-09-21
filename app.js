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
            let y=i + "<p>lines of code in the file</p>" + i + "<p>lines of code.</p>" + friends[friend] + "<p>strikes one out, clears it all out, </p>" + (i--) + "<p>lines of code in the file.</p>";
            document.getElementById("text").innerHTML=y;
            container.appendChild(y);
        } else if (i==2) {
            let y=i + "<p>lines of code in the file</p>" + i + "<p>lines of code.</p>" + friends[friend] + "<p>strikes one out, clears it all out, </p>" + (i--) + "<p>line of code in the file.</p>";
            document.getElementById("text").innerHTML=y;
            container.appendChild(y);
        } else {
            let str=("line")
            let y=i + "<p>line of code in the file</p>" + i + "<p>line of code.</p>" + friends[friend] + "<p>strikes one out, clears it all out, </p>" + (i--) + "<p>no more lines of code in the file.</p>";
            document.getElementById("text").innerHTML=y;
            container.appendChild(y);
        counter++;
        }
    }
}
    }
    document.getElementById("btn-sing").addEventListener("click", sing);
});

