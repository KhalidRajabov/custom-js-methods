//Change color from rgb to Hexadecimal

function ColorToHex(color) {
  var hexadecimal = color.toString(16);
  return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

function ConvertRGBtoHex(red, green, blue) {
  return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}
console.log(ConvertRGBtoHex(0, 255, 255));





//Get host name from any url

const url = "https://www.example.com/blog?search=hello&world";
let domain = (new URL(url));
domain = domain.hostname;
console.log(domain);


