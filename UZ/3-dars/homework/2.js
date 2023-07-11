alert(`What's the "official" name Javascript?`);

let name = prompt('Enter JS official name') || "Name is not entered"

if (name.toLowerCase() === 'ecmascript' ) {
    alert('Right')
}else{
    alert(`You don't know \n "ECMAScript"`)
}