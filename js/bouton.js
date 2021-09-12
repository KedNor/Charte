// random boutton

let list = ["Noreddine","Aline","Blandine","Cécile","William","Vincent","Romain","Isabelle",
"Julian","Mohammed","Paul-Emmanuel","Elodie","Sana","Thomas"];
function generator() {
 document.getElementById("APPRENANT").innerHTML = list[Math.floor(Math.random() * list.length)];
}
setInterval(function(generator) {document.getElementById('APPRENANT').innerHTML = "RANDOM APPRENANT";
},3000);