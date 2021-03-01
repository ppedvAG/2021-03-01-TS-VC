let myInput = document.getElementById('myInp');

let myOutput = document.getElementById('myOut');

// myOutput!.textContent = (myInput! as HTMLInputElement).value;
myOutput!.textContent = (<HTMLInputElement>myInput!).value;