var myLeads = []
var inputEl = document.getElementById("input-el")
inputBtn = document.getElementById("input-btn")
var ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
    var listItems = ""
    for (var i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i]
    }
    console.log(myLeads)
    ulEl.innerHTML=listItems
    console.log(ulEl.innerHTML)
 })




 