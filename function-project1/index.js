//  we got and created some elements from DOM


//  function 
 function simple(){
    const elDiv = document.getElementById("parent");
    const elParagraph = document.createElement("p");
    elDiv.appendChild(elParagraph);
    elParagraph.textContent = "Hello all Coders from anywehre i love coding "
    document.body.appendChild(elDiv);
 }


