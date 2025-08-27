function getElement(id) {
  let newElement = document.getElementById(id);
  return newElement;
}

getElement("card-section").addEventListener("click", function (e) {
  if (e.target.classList.contains("heart")) {
    let heart1 = getElement("heart-1").innerText;
    let heart1Number = Number(heart1);

    getElement("heart-1").innerText = heart1Number + 1;
  }
});

getElement("card-section").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-call")) {
    let callButton = e.target;
    let serviceName = callButton.parentNode.children[1].innerText;
    let serviceNumber = callButton.parentNode.children[3].innerText;

    let newTime = new Date();
    let currentTime = newTime.toLocaleTimeString("en-US", {
      timeZone: "Asia/Dhaka",
    });

    let callHistoryContainer = getElement("call-history-container");

    let newDivElement = document.createElement("div");

    newDivElement.innerHTML = `
    <div
              class="single-container flex justify-between items-center bg-[#FAFAFA] xl:p-[10px] lg:p-[6px] md:p-[6px] p-[10px] rounded-lg mb-[16px]"
              >
              <div class="left-side">
                <h1
                  class="2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[12px] text-[#111111] font-[600] font-inter"
                >
                  ${serviceName}
                </h1>
                <span
                  class="xl:text-[14px] lg:text-[12px] md:text-[14px] text-[12px] text-[#5C5C5C] font-[400] font-hind-madurai"
                  >${serviceNumber}</span
                >
              </div>
              <div class="right-side">
                <div class="current-date">
                  <span
                    class="2xl:text-[16px] xl:text-[14px] lg:text-[12px] text-[12px] text-[#5C5C5C] font-[400] font-hind-madurai"
                    >${currentTime}</span
                  >
                </div>
              </div>
            </div>
    
    `;

    let coinNumber = Number(getElement("coin-number").innerText);

    if (coinNumber < 20) {
      return alert("Insufficient Coin. You need 20 coin for calling");
    } else {
      alert(`${serviceName}: ${serviceNumber}`);
      getElement("coin-number").innerText = coinNumber - 20;
      callHistoryContainer.append(newDivElement);
    }
  }
});

getElement("btn-clear").addEventListener("click", function () {
  getElement("call-history-container").innerHTML = "";
});

getElement("card-section").addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-copy")) {
    let btnCopy = e.target;
    let serviceNumber = btnCopy.parentNode.children[3].innerText;

    navigator.clipboard.writeText(serviceNumber).then(function () {
      alert(`Number Copied: ${serviceNumber}`);

      let copyNumber = Number(getElement("copy-number").innerText);
      getElement("copy-number").innerText = copyNumber + 1;
    });
  }
});
