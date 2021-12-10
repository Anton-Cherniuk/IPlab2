let txt = document.querySelector("#txt");
let onBtnclk = document.querySelector("#onBtnclk");

function solve(){

  let parsedTxt = txt.value.split("\n\n");

  //let check = parsedTxt[0].split("\n")[1];
  //alert(check);

  let body = document.getElementsByTagName("body")[0];

  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  let header = tbl.createTHead();
  let head = "FirstName LastName Gender Address BirthDate Nickname Password Email";

  for (let i = 0; i < 1; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < 8; j++) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(head.split(" ")[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    header.appendChild(row);
  }

  //tblBody.appendChild("FirstName, LastName, Gender, Address, BirthDate, Nickname, Password, Email");

  for (let i = 0; i < parsedTxt.length; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < parsedTxt[0].split("\n").length; j++) {
      let cell = document.createElement("td");
      let cellText = null;
      if(j == 0)
        cellText = document.createTextNode(parsedTxt[i].split("\n")[0].split(" ")[0]);
      else if (j == 1)
        cellText = document.createTextNode(parsedTxt[i].split("\n")[0].split(" ")[1]);
      else if (j == 2)
        cellText = document.createTextNode(parsedTxt[i].split("\n")[1]);
      else
        cellText = document.createTextNode(parsedTxt[i].split("\n")[j]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);

  tbl.setAttribute("border", "1");
  tbl.setAttribute("width", "100%");
  
  // all lines 
  // console.log(parsedTxt[0].split("\n"));

}

onBtnclk.addEventListener("click", solve);