function submitAlert() {
    alert("Thank you for your message.");
  }


  function heartFunc(x) {
    x.classList.toggle("fa-heart-o");
  }


fetch('/data.json')
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
});




function RecentTable() {
    var recentlyPlayed = [
        {"Image":"Hotel Diablo", "Title:":"Candy (feat. Trippie Redd)", "Artist":"Machine Gun Kelly", "Last Listened:":"47 minutes ago"}, 
        {"Image":"Music To Be Murdered By", "Title:":"Marsh", "Artist":"Eminem", "Last Listened:":"52 minutes ago"},
        {"Image":"ADHD", "Title:":"Revenge", "Artist":"Joyner Lucas", "Last Listened:":"59 minutes ago"},
        {"Image":"Funeral", "Title:":"Mama Mia","Artist":"Lil Wayne", "Last Listened:":"An hour ago"},
        {"Image":"Music To Be Murdered By", "Title:":"You Gon' Learn (feat. Royce Da 5'9\" & White Gold)", "Artist":"Eminem", "Last Listened:":"An hour ago"},
        {"Image":"Bezerk", "Title:":"Bezerk (feat.A$AP Ferg)", "Artist":"Big Sean", "Last Listened:":"An hour ago"},
        {"Image":"Blame it on Baby", "Title:":"DROP (feat. A Boogie wit da Hoodie & London On Da Track)", "Artist":"DaBaby", "Last Listened:":"An hour ago"},
        {"Image":"Blame it on Baby", "Title:":"ROCKSTAR (feat. Roddy Ricch)", "Artist":"DaBaby", "Last Listened:":"An hour ago"},
        {"Image":"Only The Team", "Title:":"Only The Team (with Lil Mosey & Lil Tjay)", "Artist":"Rvssian", "Last Listened:":"An hour ago"},
        {"Image":"Hotel Diablo", "Title:":"Glass House (feat. Naomi Wild)", "Artist":"Machine Gun Kelly", "Last Listened:":"An hour ago"}    
    ]

    var col = [];
    for (var i = 0; i < recentlyPlayed.length; i++) {
        for (var key in recentlyPlayed[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }

    var table = document.createElement("table");

    var tr = table.insertRow(-1);

    for (var i = 0; i < col.length; i++) {
        var th = document.createElement("th");
        th.innerHTML = col[i];
        tr.appendChild(th);
    }
    for (var i = 0; i < recentlyPlayed.length; i++) {

        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
            var tabCell = tr.insertCell(-1);
            tabCell.innerHTML = recentlyPlayed[i][col[j]];
        }
    }
    var divContainer = document.getElementById("showData");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
}