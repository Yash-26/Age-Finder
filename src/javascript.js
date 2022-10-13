function calc() {
    let birth= prompt("Enter your Birth year");
    let present=2022;
    let age=present-birth;
    
    let h1=document.createElement("h2");
    let text=document.createTextNode("You are "+age);
    h1.setAttribute("id","ageresult");
    h1.appendChild(text);
    document.getElementById("flex-box-result").appendChild(h1);


}

function reset(){

    document.getElementById("ageresult").remove();
}

