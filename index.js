var text = "Bangladesh";
var text1 = prompt("Enter a phrase : ");
var linebreak = "<br/>"
document.write("Number of characters : " + text.length + linebreak);
document.write("Index 2 : " + text.charAt(2) + linebreak);
document.write("In upper case : " + text.toUpperCase() + linebreak);
document.write("Lowe case : : " + text.toLowerCase() + linebreak);
document.write("Full phrase : " + text.concat(text1) + linebreak);
document.write("Slice : " + text.slice(0, 5));