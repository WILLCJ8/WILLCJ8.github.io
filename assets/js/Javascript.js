//This is the function for the message system
function submitAlert() {
  alert("Thank you for your message.");
}

//This is the fuction for the heart/unheart system.
function heartFunc(x) {
  x.classList.toggle("fa-heart-o");
}

//This is where the "Recently Played" data and building is.
const tableRecent = document.getElementById("Recently_Played");

//This chunk of code fetches the file needed.
fetch("/assets/json/Recently Played.json")
  .then((res) => {
    return res.json();
  })
  //This code below is where it is all outputted and placed into a table.
  .then((data) => {
    let table = "";
    table += "<table>";
    data.forEach((element) => {
      table += "<tr>";
      table += `<td><img src="${element["Image"]}"></td>`;
      table +=
        '<td>  <i onclick="heartFunc(this)" class="fa fa-heart"></i></td>';
      table += `<td>  ${element["Title"]}</td>`;
      table += `<td>  ${element["Artist"]}</td>`;
      table += `<td>  ${element["Last Listened"]}</td>`;
      table += "</tr>";
    });
    table += "</table>";
    tableRecent.innerHTML = table; //Outputs to html
  });

//This is where the "Recently Played" data and building is.
const tableTracks = document.getElementById("Top_Tracks");

//This chunk of code fetches the file needed.
fetch("/assets/json/Top Tracks.json")
  .then((res) => {
    return res.json();
  })
  //This code below is where it is all outputted and placed into a table.
  .then((data) => {
    let table = "";
    table += "<table>";
    data.forEach((element) => {
      table += "<tr>";
      table += `<td><img src="${element["Image"]}"></td>`;
      table +=
        '<td>  <i onclick="heartFunc(this)" class="fa fa-heart"></i> </td>';
      table += `<td>  ${element["Title"]}  </td>`;
      table += `<td>  ${element["Artist"]}  </td>`;
      table += `<td><div class="barchart" width=${element["Total Listens"]}/10000 * 100%>${element["Total Listens"]}</div></td>`;
      table += "</tr>";
    });
    table += "</table>";
    tableTracks.innerHTML = table; //Outputs to html
  });

//This is where the "Recently Played" data and building is.
const gridArtists = document.getElementById("Top_Artists");

//This chunk of code fetches the file needed.
fetch("/assets/json/Top Artists.json")
  .then((res) => {
    return res.json();
  })
  //This code below is where it is all outputted and placed into a table.
  .then((data) => {
    let table = "";
    table += "<table>";
    data.forEach((element) => {
      table += `<img src="${element["Image"]}" style="margin-left: 20px">`;
    });
    table += "</table>";
    gridArtists.innerHTML = table; //Outputs to html
  });

//Gets date/time
var d = new Date();
var Date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

//Appends the comment, name and date/time together and displays on page
function getcomment() {
  var node = document.createElement("p");
  node.innerHTML =
    document.getElementById("comment").value +
    "<div>" +
    "Posted by: " +
    document.getElementById("name").value +
    "<div>" +
    "Posted at: " +
    d;
  document.getElementById("commentOut").appendChild(node);
}
