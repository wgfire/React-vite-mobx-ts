const setDom = function () {
const count = 16;
const body = document.querySelector('body')
const dom = document.createElement("div");
dom.className="g-container"

for (let index = 0; index < count; index++) {
  const gView = document.createElement("div");
  gView.className = "g-view";
  const gText = document.createElement("div");
  gText.className = "g-text";
  gText.innerText = "L4C2H2W2Z2";
  gView.append(gText);
  dom.append(gView);
}
dom.style["filter"] = "blur(0.23vw) contrast(8)";
body.append(dom)
let textType  = true
setInterval(() => {
    const gView = Array.from(document.querySelectorAll(".g-view"));
    textType = !textType
    for (let index = 0; index < gView.length; index++) {
        const element = gView[index];
        element.classList.add('g-view-'+index)
    }
    setTimeout(() => {
        const gText = Array.from(document.querySelectorAll(".g-text"));
        for (let index = 0; index < gText.length; index++) {
          const element = gText[index];
          element.innerText = textType?"BUSYBOX.FIRE":"L4C2H2W2Z2";
        }
        for (let index = 0; index < gView.length; index++) {
            const element = gView[index];
            element.classList.remove('g-view-'+index)
        }
      }, 2000);  
}, 2200);

}

document.addEventListener('DOMContentLoaded',setDom)