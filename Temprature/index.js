function Temprature() {
    let temp = ["Celcius(1)", "Fahranheit(2)"];
    let choices = prompt("Choose Celcius(1), Fahranheit(2):");
    let degree = prompt("Enter the temperature:");

  
    let result;
    
    if (choice === "1") {
      result = degree * 9/5 + 32; 
    } else if (choice === "2") {
      result = degree - 32 * 5/9; 
      alert("Invalid choice");
      return;
    }
      
    alert("Result: " + result);

  Temprature(); 


}
  
  

  

  