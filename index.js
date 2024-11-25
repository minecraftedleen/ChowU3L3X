var myLeads = []
var inputEl = document.getElementById("input-el")
inputBtn = document.getElementById("input-btn")
var ulEl = document.getElementById("ul-el")

console.log(ulEl)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(inputEl.value)
    var listed = "";
    ulEl.innerHTML = ""
    for (var i = 0; i < myLeads.length; i++) {
        listed += myLeads[i] + " "
        const li = document.createElement("li") 
        const link = document.createElement("a")
        link.textContent = myLeads[i]
        link.href = "'" + myLeads[i] + "'"
        li.innerHTML = link.innerHTML
        ulEl.append(li)

    }
    console.log(listed)
   
     
 })




 