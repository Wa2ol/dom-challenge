document.body.style.fontFamily="sans-serif";

// Header-------------------------------------

let Header = document.createElement("header");
Header.style.height = "15px";

// logo----------------------------------------

let logo = document.createElement("h3");
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
logo.style.cssText="font-size: 20px; font-weight: 20px; font-size: 25px; color: #23a86c;"
Header.appendChild(logo);

// ul------------------------------------------

let ul = document.createElement("ul");
let li=[];
let links=[];
let liText=["Home","About","Services","Contact"];

for (let i = 0; i <4;i++) {
    li[i] = document.createElement("a");
    links[i] = document.createTextNode(liText[i]);
}

for (let i = 0; i <4;i++) {
    li[i].appendChild(links[i]);
}

for (let i = 0; i <4;i++) {
    li[i].style.fontSize="15px";
    li[i].style.color="#caccd3";
    li[i].style.paddingRight = "10px";

}

for (let i = 0; i <4;i++) {
    ul.appendChild(li[i]);
}

Header.appendChild(ul);
Header.style.display = "flex";
Header.style.justifyContent = "space-between";
Header.style.alignItems = "center";
Header.style.padding = "10px";
Header.style.paddingLeft = "15px";
Header.style.paddingRight = "10px";

document.body.appendChild(Header);

// Content-----------------------------------------

let content = document.createElement("div");
content.style.cssText=" background: #ececec; padding-left: 10px; padding-bottom: 10px; display: flex; justify-content: center; flex-wrap: wrap; align-items: center"

for (let i = 1; i <= 15; i++) {
    let product = document.createElement("div");
    let number = document.createElement("h3");
    let num = document.createTextNode(i);
    number.appendChild(num);
    product.appendChild(number);
    number.style.margin = "0px";
    let productTitle = document.createTextNode("Product");
    let pro = document.createElement("p");
    pro.appendChild(productTitle);
    product.appendChild(pro);

    pro.style.cssText="margin: -3px; padding: 0px; font-size: 15px; text-align: center; color: #caccdc"

    number.style.padding = "5px";
    number.style.textAlign = "center";

    product.style.display = "absolute";
    product.style.padding = "10px 0px";
    product.style.width = "32%";
    product.style.height = "55px";
    product.style.backgroundColor = "white";
    product.style.margin = "10px 10px 0px 0px";
    product.style.borderRadius= "3px"

    content.appendChild(product);
}
document.body.appendChild(content);

//Footer----------------------------------------------

let footer = document.createElement("footer");
footer.style.background = "#23a86c";
footer.style.height = "50px";
let text = document.createTextNode("Copyright 2021");
let myText = document.createElement("p");

myText.appendChild(text);
myText.style.cssText=" color: white; font-size: 15px; padding: 10px; letterSpacing: 0.3px"

footer.appendChild(myText);
footer.style.display = "flex";
footer.style.justifyContent = "center";
footer.style.alignItems = "center";
document.body.appendChild(footer);