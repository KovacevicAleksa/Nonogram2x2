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
//When press on try it
function chagenumbers() {
  // Delete Parameters
  document.getElementById("kolonab_1_polje_2").innerHTML = "";
  document.getElementById("kolonab_1_polje_3").innerHTML = "";
  document.getElementById("kolonab_2_polje_2").innerHTML = "";
  document.getElementById("kolonab_2_polje_3").innerHTML = "";
  //Get random numbers
  document.getElementById("kolonab_1_polje_1").innerHTML = Math.floor(Math.random() * 3);
  document.getElementById("kolonab_2_polje_1").innerHTML = Math.floor(Math.random() * 3);

  // When new numbers are obtained, we return the redb1 redb2 value to 0
  redb1 = 0;
  redb2 = 0;
  //After try it back colors
  document.getElementById("kolonab_1_polje_2").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_2_polje_2").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_1_polje_3").style.backgroundColor = "rgb(245, 245, 220)";
  document.getElementById("kolonab_2_polje_3").style.backgroundColor = "rgb(245, 245, 220)";

  document.getElementById("kolonab_1_polje_2").style.border = "solid 1px silver";
  document.getElementById("kolonab_2_polje_2").style.border = "solid 1px silver";
  document.getElementById("kolonab_1_polje_3").style.border = "solid 1px silver";
  document.getElementById("kolonab_2_polje_3").style.border = "solid 1px silver";
  //First case
  if (document.getElementById("kolonab_1_polje_1").innerHTML == "1") {
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    if (Math.floor(Math.random() * 2) == 1) {
      // the first field will be x
      // the third field will be 0

      comp[0] = "x";
      comp[2] = "0";
      redb1 = redb1 + 1;
    } else {
      // the first field will be 0
      // the third field will be x
      comp[0] = "0";
      comp[2] = "x";
      redb2 = redb2 + 1;
    }
    console.log("prvi slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //Second case

  if (document.getElementById("kolonab_1_polje_1").innerHTML == "2") {
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
     // first field will be x
     // the third field will be x
    comp[0] = "x";
    comp[2] = "x";
    redb1 = redb1 + 1;
    redb2 = redb2 + 1;
    console.log("drugi slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //third case

  if (document.getElementById("kolonab_2_polje_1").innerHTML == "1") {

    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
    if (Math.floor(Math.random() * 2) == 1) {
      comp[1] = "x";
      comp[3] = "0";
      // second field will be x
      // fourth field will be 0
      redb1 = redb1 + 1;
    } else {
      comp[1] = "0";
      comp[3] = "x";
      // second field will be 0
      // fourth field will be x
      redb2 = redb2 + 1;
    }
    console.log("treci slucaj sada je redb1 i redb2 " + redb1 + " " + redb2);
  }
  //Fourth case

  if (document.getElementById("kolonab_2_polje_1").innerHTML == "2") {
    console.log("redb1 i redb2 je bio " + redb1 + " " + redb2);
     // second field will be x
     // the fourth field will be x
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

  //first field
  if (document.getElementById("kolonab_1_polje_1").innerHTML == "0") {
    comp[0] = "0";
    comp[2] = "0";
  }
  //second field
  if (document.getElementById("kolonab_2_polje_1").innerHTML == "0") {
    comp[1] = "0";
    comp[3] = "0";
  }
  //third field
  if (document.getElementById("redb_1_polje_1").innerHTML == "0") {
    comp[0] = "0";
    comp[1] = "0";
  }
  //fourth field
  if (document.getElementById("redb_2_polje_1").innerHTML == "0") {
    comp[2] = "0";
    comp[3] = "0";
  }
  console.log(comp);
}


function check() {
    //this function will check the accuracy entered by the user, i.e. the x and o positions
   //create global variables 4 variables eg solution_1 solution_2 solution_3 solution_4 will be 0 at the beginning
   //in each case (4 cases) you have to give a value to one of the solutions. The value can be x and 0
   // means at the end each of the solutions must be 0 or 1
   // checking what the user entered, for example, he entered x in the first case and x is 0, which means that it should be colored red afterwards, i.e. the user made a mistake


  //first field true
  if (document.getElementById("kolonab_1_polje_2").innerHTML == comp[0]) {

    document.getElementById("kolonab_1_polje_2").style.backgroundColor = "green";
    mistake[0]="tacno";
  } else {
    document.getElementById("kolonab_1_polje_2").style.backgroundColor = "red";
    document.getElementById("kolonab_1_polje_2").style.border = "thick solid red";
    mistake[0] = "pogresno";


  }

  //second field true
  if (document.getElementById("kolonab_2_polje_2").innerHTML == comp[1]) {

    document.getElementById("kolonab_2_polje_2").style.backgroundColor = "green";
    mistake[1]="tacno";
  } else {
    document.getElementById("kolonab_2_polje_2").style.backgroundColor = "red";
    document.getElementById("kolonab_2_polje_2").style.border = "thick solid red";
    mistake[1] = "pogresno";

  }

  //third field true
  if (document.getElementById("kolonab_1_polje_3").innerHTML == comp[2]) {

    document.getElementById("kolonab_1_polje_3").style.backgroundColor = "green";
    mistake[2]="tacno";
  } else {
    document.getElementById("kolonab_1_polje_3").style.backgroundColor = "red";
    document.getElementById("kolonab_1_polje_3").style.border = "thick solid red";
    mistake[2]="pogresno";

  }

  //fourth field true
  if (document.getElementById("kolonab_2_polje_3").innerHTML == comp[3]) {

    document.getElementById("kolonab_2_polje_3").style.backgroundColor = "green";
    mistake[3]="tacno";
  } else {
    document.getElementById("kolonab_2_polje_3").style.backgroundColor = "red";
    document.getElementById("kolonab_2_polje_3").style.border = "thick solid red";
    mistake[3]="pogresno";

  }

    //solutions
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
