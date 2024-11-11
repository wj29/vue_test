const myImage = document.querySelector("img");

myImage.onclick = () => {
    const src = myImage.getAttribute("src")
    if (src == "images/莫纳.jpg") {
        myImage.setAttribute("src", "http://img.xinminweekly.com.cn/2024/07/29/3AC87352722DD2FCD09724189A39ADB0_w708h373.png")
    } else {
        myImage.setAttribute("src", "images/莫纳.jpg")
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = function() {
    setUserName()
}
