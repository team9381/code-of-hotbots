### Comments

Always use comments on a line by itself before a section of related of code. In a case of compact or complex code, such as a line with many nested functions, use a comment on the line after a space. Examples:

```
// Write to <body> the user's name after getting their name from a prompt
var x = "My name is ";
var y = prompt("What is your name?");
document.write(x.concat(y.length.toString())) // Concatinate x and the length of y and write the result to the HTML page's body
```

### Variables

Use camelcase in all variables, unless the variable is x or y. Examples:

```
var thisIsCamelCase = "Make the start of every word in a variable capitalized.";
var x = 4;
```

### Indentation

Use four spaces to indent. Please don't use two spaces, and definitely **don't** use tabs. **PLEASE**.
