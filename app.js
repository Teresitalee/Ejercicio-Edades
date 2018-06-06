var edad =prompt("Que edad tienes?"); 


do{
    edad =prompt("Ingresa una edad válida, Que edad tienes?"); 
}while (Number.isInteger(edad));

if(edad<3){
    alert("Por  tu rango de edad eres un Toddler");
}else if(edad<5){
    alert("Por  tu rango de edad eres un Preschool");
}else if(edad<12){
    alert("Por  tu rango de edad eres un Gradeschooler");   
}else if(edad<18){
    alert("Por  tu rango de edad eres un Teen");
}else if(edad<21){
    alert("Por  tu rango de edad eres un Young Adult");
}else {
    alert("Por  tu rango de edad eres un Adult");   
}