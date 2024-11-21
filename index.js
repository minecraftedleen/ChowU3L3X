var myLeads = []
var inputEl = document.getElementById("input-el")
inputBtn = document.getElementById("input-btn")
var ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
    var listed = "";
    for (var i = 0; i < myLeads.length; i++) {
        listed += myLeads[i] + " "
    }
    console.log(listed)
 })


 