



// ================================ If_Else Assaignment ================================


let Visitor_age: number = 25;

if (Visitor_age <= 5) {
  console.log("Hey! You can't enter the park because you are a kid.");
} else if (Visitor_age <= 18) {
  console.log(
    "Congratulations! You can enter the park because you are a teenager, but you need to pay half the ticket price."
  );
} else if (Visitor_age <= 30) {
  console.log(
    "Hey! You are an adult, so you need to purchase a ticket and pay a fee of 300pkr."
  );
} else if (Visitor_age > 60) {
  console.log(
    "Most Welcome! Sir/Madam, you are a senior citizen, so you can enter the park free of cost."
  );
} else {
  console.log("Sorry, you are too late. The park is closed now.");
}




