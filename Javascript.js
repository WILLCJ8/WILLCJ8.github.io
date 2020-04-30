function submitAlert() {
    alert("Thank you for your message.");
  }

function heartFunc(x) {
    x.classList.toggle("fa-heart");
  }



const tableRecent = document.getElementById('Recently_Played');

fetch('/Recently Played.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += '<tr>'
        table += `<td><img src="${element["Image"]}"></td>`
        table += `<td>&nbsp;&nbsp;${element["Title"]}&nbsp;&nbsp;</td>`
        table += `<td>&nbsp;&nbsp;${element["Artist"]}&nbsp;&nbsp;</td>`
        table += `<td>&nbsp;&nbsp;${element["Last Listened"]}</td>`
        table += '<td>&nbsp;&nbsp;<i onclick="heartFunc(this)" class="fa fa-heart-o"></i>&nbsp;&nbsp;</td>'
        table += "</tr>"
    })
    table += "</table>"
    tableRecent.innerHTML = table;
});

const tableTracks = document.getElementById('Top_Tracks');

fetch('/Top Tracks.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += '<tr>'
        table += `<td><img src="${element["Image"]}"></td>`
        table += `<td>&nbsp;&nbsp;${element["Title"]}&nbsp;&nbsp;</td>`
        table += `<td>&nbsp;&nbsp;${element["Artist"]}&nbsp;&nbsp;</td>`
        table += `<td>&nbsp;&nbsp;${element["Total Listens"]}</td>`
        table += '<td>&nbsp;&nbsp;<i onclick="heartFunc(this)" class="fa fa-heart-o"></i>&nbsp;&nbsp;</td>'
        table += "</tr>"
    })
    table += "</table>"
    tableTracks.innerHTML = table;
});

const gridArtists = document.getElementById('Top_Artists');

fetch('/Top Artists.json')
.then(res => {
    return res.json();
})
.then(data => {
    let table = '';
    table += "<table>"
    data.forEach(element => {
        table += `<img src="${element["Image"]}" style="margin-left: 20px">&nbsp;&nbsp;`
    })
    table += "</table>"
    gridArtists.innerHTML = table;
});