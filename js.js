let x = prompt("Zadej první číslo");
let y = prompt("Zadej druhé číslo");
let z = Math.sqrt(x * x + y * y);

if (z > 5) {
    document.write("<span style=color:red> Bod" + "[" + x + ";" + y + "]" + "Není v dostřelu věže </span>")

} else
    document.write("<span style=Color:green> Bod" + "[" + x + ";" + y + "]" + "Je v dostřelu věže </span>")

