const marqueeContentDiv = document.getElementById("marqueeContent")
const marqueeCloneDiv = document.querySelectorAll("#marqueeClone")

const clonedContent = marqueeContentDiv.cloneNode(true)

marqueeCloneDiv.forEach(element => element.innerHTML = clonedContent.innerHTML)