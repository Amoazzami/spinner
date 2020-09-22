let spinner2 = ["\r|", "\r/" ,"\r-", "\r\\", "\r|", "\r/", "\r-", "\r\\", "\r|"]
const display = function (spinner2) {
  let counter = 100; 
  for (const char of spinner2) {  
    setTimeout(() => {process.stdout.write(char)}, counter) 
    counter += 200; 
}
}
display(spinner2);
