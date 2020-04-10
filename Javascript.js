let myObj = {"myKey":"some kind of value"};
console.log(myObj["myKey"]); //will show "some kind of value"

function submitAlert() {
    alert("Thank you for your message.");
  }

fetch('./data.json')
.then(res => {
    return res.json();
})
.then(data => {
    console.log(data);
});
