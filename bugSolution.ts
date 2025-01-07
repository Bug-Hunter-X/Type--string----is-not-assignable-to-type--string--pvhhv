function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return persons.map(person => "Hello, " + person).join("\n");
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user[0])); // Correct: Passing the first element of the array
console.log(greeterArray(user)); // Correct: Using a function designed for arrays