// We recupered the elements from DOM;
let elDoc = document.getElementById("content");
function  calculate() {
    const radius= prompt('Donnez moi un nombre')
 if(radius != null){
    const diameter = radius * 2;
    const circonf =  2 * 31416 * radius;
     const content = elDoc.textContent = "Diameter = radius * 2  : "  + "[ " + diameter + " ] " + "Circonférence = 2* PI * radius : "  + " [ " + circonf + " ]" 
     return  content; 
 }else{
    
      return content;
    
 }
  
}