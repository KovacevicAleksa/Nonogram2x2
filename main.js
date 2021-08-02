//menjati brojeve od 0 do 2 naslovima kolnama
var slucaj_1 = "";
var slucaj_2 = "";
var slucaj_3 = "";
var slucaj_4 = "";
var redb1 = 0;
var redb2 = 0;
var click = "0";
var comp = [];
var mistake = [];

function chageclick0() {
  click = "0";

}

function chageclickx() {
  click = "x";
}

function change1() {
  document.getElementById("kolonab_1_polje_2").innerHTML = click;
}

function change2() {
  document.getElementById("kolonab_2_polje_2").innerHTML = click;
}

function change3() {
  document.getElementById("kolonab_1_polje_3").innerHTML = click;
}

function change4() {
  document.getElementById("kolonab_2_polje_3").innerHTML = click;
}
//Kada pritisnemo na try it
function chagenumbers() {
  // x4 linija brisemo pametre koje smo postavili x ili 0
  document.getElementById("kolonab_1_polje_2").innerHTML = "";
  document.getElementById("kolonab_1_polje_3").innerHTML = "";
  document.getElementById("kolonab_2_polje_2").innerHTML = "";
  document.getElementById("kolonab_2_polje_3").innerHTML = "";
  //dobijamo slucajne brojeve
  document.getElementById("kolonab_1_polje_1").innerHTML = Math.floor(Math.random() * 3);
  document.getElementById("kolonab_2_polje_1").innerHTML = Math.floor(Math.random() * 3);

  //Kada se dobiju novi brojevi vracamo vrednost redb1 redb2 na 0
  redb1 = 0;
  redb2 = 0;
  //posle try ita vracaju se boje na polja
  document.getElementById("kolonab_1_polje_2").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_2_polje_2").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_1_polje_3").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_2_polje_3").style.backgroundColor = "rgb(245, 245, 220)";

  document.getElementById("kolonab_1_polje_2").style.border = "solid 1px silver";
  document.getElementById("kolonab_2_polje_2").style.border = "solid 1px silver";
  document.getElementById("kolonab_1_polje_3").style.border = "solid 1px silver";
  document.getElementById("kolonab_2_polje_3").style.border = "solid 1px silver";
  //prvi slucaj
  if (document.getElementById("kolonab_1_polje_1").innerHTML == "1") {
    //math funkcija opseg 0 do 1
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    if (Math.floor(Math.random() * 2) == 1) {
      // prvo polje ce biti x
      // trece polje ce biti 0
      // Prvo polje prvi broj drugo drugi...
      comp[0] = "x";
      comp[2] = "0";
      redb1 = redb1 + 1;
    } else {
      // prvo polje ce biti 0
      // trece polje ce biti x
      comp[0] = "0";
      comp[2] = "x";
      redb2 = redb2 + 1;
    }
    console.log("prvi slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //drugi slucaj

  if (document.getElementById("kolonab_1_polje_1").innerHTML == "2") {
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    // prvo polje ce biti x
    // trece polje ce biti x
    comp[0] = "x";
    comp[2] = "x";
    redb1 = redb1 + 1;
    redb2 = redb2 + 1;
    console.log("drugi slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //treci slucaj

  if (document.getElementById("kolonab_2_polje_1").innerHTML == "1") {

    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    if (Math.floor(Math.random() * 2) == 1) {
      comp[1] = "x";
      comp[3] = "0";
      // drugo polje ce biti x
      // cetvrto polje ce biti 0
      redb1 = redb1 + 1;
    } else {
      comp[1] = "0";
      comp[3] = "x";
      // drugo polje ce biti 0
      // cetvrto polje ce biti x
      redb2 = redb2 + 1;
    }
    console.log("treci slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //cetvrti slucaj

  if (document.getElementById("kolonab_2_polje_1").innerHTML == "2") {
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    // drugo polje ce biti x
    // cetvrto polje ce biti x
    comp[1] = "x";
    comp[3] = "x";
    redb1 = redb1 + 1;
    redb2 = redb2 + 1;
    console.log("cetvrti slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  document.getElementById("redb_1_polje_1").innerHTML = "";
  document.getElementById("redb_2_polje_1").innerHTML = "";

  console.log(" ");
  document.getElementById("redb_1_polje_1").innerHTML = redb1;
  document.getElementById("redb_2_polje_1").innerHTML = redb2;

  //prvo polje
  if (document.getElementById("kolonab_1_polje_1").innerHTML == "0") {
    comp[0] = "0";
    comp[2] = "0";
  }
  //drugo polje
  if (document.getElementById("kolonab_2_polje_1").innerHTML == "0") {
    comp[1] = "0";
    comp[3] = "0";
  }
  //trece polje
  if (document.getElementById("redb_1_polje_1").innerHTML == "0") {
    comp[0] = "0";
    comp[1] = "0";
  }
  //cetvrto polje
  if (document.getElementById("redb_2_polje_1").innerHTML == "0") {
    comp[2] = "0";
    comp[3] = "0";
  }
  console.log(comp);
}


function check() {
  //ova funcija ce proveravati tacnost koju je korisnik uneo odnosno pozicije x i o
  //napraviti variable globalne 4 variable npr resenje_1 resenje_2 resenje_3 resenje_4 na pocetku ce biti 0
  //u svakoj slucaju (4 slucaja) moras nekom od resenje da da vrednos.Vrednost moze biti x i 0
  // znaci na kraju svaki od resenja mora biti 0 ili 1
  // provera sta je korisnik uneo npr on je uneo u prvom slucaju x a x je 0 znaci da to poslje treba npr obojiti u crveno odnosno kosrisnik je pogresio


  //prvo polje je tacno
  if (document.getElementById("kolonab_1_polje_2").innerHTML == comp[0]) {

    document.getElementById("kolonab_1_polje_2").style.backgroundColor = "green";
    mistake[0]="tacno";
  } else {
    document.getElementById("kolonab_1_polje_2").style.backgroundColor = "red";
    document.getElementById("kolonab_1_polje_2").style.border = "thick solid red";
    mistake[0] = "pogresno";


  }

  //drugo polje je tacno
  if (document.getElementById("kolonab_2_polje_2").innerHTML == comp[1]) {

    document.getElementById("kolonab_2_polje_2").style.backgroundColor = "green";
    mistake[1]="tacno";
  } else {
    document.getElementById("kolonab_2_polje_2").style.backgroundColor = "red";
    document.getElementById("kolonab_2_polje_2").style.border = "thick solid red";
    mistake[1] = "pogresno";

  }

  //trece polje je tacno
  if (document.getElementById("kolonab_1_polje_3").innerHTML == comp[2]) {

    document.getElementById("kolonab_1_polje_3").style.backgroundColor = "green";
    mistake[2]="tacno";
  } else {
    document.getElementById("kolonab_1_polje_3").style.backgroundColor = "red";
    document.getElementById("kolonab_1_polje_3").style.border = "thick solid red";
    mistake[2]="pogresno";

  }

  //cetvrto polje je tacno
  if (document.getElementById("kolonab_2_polje_3").innerHTML == comp[3]) {

    document.getElementById("kolonab_2_polje_3").style.backgroundColor = "green";
    mistake[3]="tacno";
  } else {
    document.getElementById("kolonab_2_polje_3").style.backgroundColor = "red";
    document.getElementById("kolonab_2_polje_3").style.border = "thick solid red";
    mistake[3]="pogresno";

  }

    //resenja
    alert("Prvo polje " + mistake[0]+
    "\nDrugo polje " + mistake[1] +
    "\nTrece polje " + mistake[2]+
    "\nCetvrto polje " + mistake[3]+
    "\n\n"+
    "answer\n"+
    "[ "+comp[0] + "  " +
    comp[1] + " ]" + "\n" +
    "[ "+comp[2] + "  " +
    comp[3] + " ]");
}
