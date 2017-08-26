### Comments

Always use comments on a line by itself before a section of related of code. In a case of compact or complex code, such as a line with many nested functions, use a comment on the line after a space. Example of proper commenting:

```
// Write to <body> the user's name after getting their name from a prompt
var x = "My name's length is ";
var y = prompt("What is your name?");
document.write( // Converts the length of the user's name to a string and writes
    x.concat(y.length.toString()) 
)
```

### Variables

Use camelcase in all variables, unless the variable is x or y. Examples:

```
var thisIsCamelCase = "Make the start of every word in a variable capitalized.";
var x = 4;
```

### Indentation

Use four spaces to indent. Please don't use two spaces, and definitely **don't** use tabs. **PLEASE**.

### Line Length

No line is to exceed the length of one hundred characters. 
