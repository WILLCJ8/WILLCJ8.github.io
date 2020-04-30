function submitAlert() {
    alert("Thank you for your message.");
  }


  function heartFunc(x) {
    x.classList.toggle("fa-heart");
  }



const tableMain = document.getElementById('table');

fetch('/Recently Played.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += '<tr>'
        table += '<td><i onclick="heartFunc(this)" class="fa fa-heart-o"></i></td>'
        table += `<td><img src="${element["Image"]}"></td>`
        table += `<td>${element["Title"]}</td>`
        table += `<td>${element["Artist"]}</td>`
        table += `<td>${element["Last Listened"]}</td>`
        table += "</tr>"
    })
    table += "</table>"
    tableMain.innerHTML = table;
});