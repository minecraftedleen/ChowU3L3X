var myLeads = []
var inputEl = document.getElementById("input-el")
inputBtn = document.getElementById("input-btn")
var ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", renderLeads)
inputBtn.addEventListener("click", function(){
    document.getElementById("input-el").value=""
})

function renderLeads(){
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
    var listItems = ""
    for (var i = 0; i < myLeads.length; i++) {
        listElement = myLeads[i]
        listItems += `<li>
        <a href=
        ${listElement}>
        ${listElement}`
    }
    ulEl.innerHTML=listItems
    console.log(ulEl.innerHTML)
 }




 