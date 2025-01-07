function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];
console.log(greeter(user)); //This will throw an error because the function expects a string, but it receives an array of strings.