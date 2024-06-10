const btnPrint = document.querySelector("button")
const resultList = document.querySelector("#resultPrints")

btnPrint.addEventListener("click", () => {
    resultList.innerHTML = "";
     const n = 10;

     for(let i = 0; i < n; i++) {
        let newLi = document.createElement("li");
        newLi.innerText = `${i + 1}. I am awesome!`;
        resultList.appendChild(newLi)
     }
});
