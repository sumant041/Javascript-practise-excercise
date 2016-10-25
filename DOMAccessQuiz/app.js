var marg = 0;

function identifyById() {
element = document.getElementsById("para1");
console.log(element);
}

function identifyByClass() {
element = document.getElementByClassName("class1");
console.log(element);
}

function byTag() {
element = document.getElementByTagname("p");
console.log(element);
}

function changeBackground() {
element = document.getElementById("block1");
element.style.backgroundColor="blue";
}

function increaseFont() {
element = document.getElementById("block2");
element.style.fontSize="1.995em";
}

function changeFontColor() {
element = document.getElementById("block3");
element.style.backgroundColor="green";
}

function revertColor() {
element = document.getElementById("block3");
element.style.backgroundColor="white";
}

function hide() {
element = document.getElementById("block4");
element.style.display="none";
}

function changeBackColor(color, className) {
  elements = document.getElementsByClassName(className);
    if(className==="box1"){
       for(var i = 0; i < elements.length; i++){
         elements[i].style.backgroundColor = "green";
       }
}else {
  for(var i=0; i< elements.length;i++)
  elements[i].style.backgroundColor = "purple";
}

function numbersOnly(e) {
  if(parseInt(e.key) >= 0 && parseInt(e.key) <= 9){
       return e;
     }
return -1;
}

function addAdjacent() {
   element = document.getElementById("para2");
   para = document.createElement("p");
   sam = document.createTextNode("I got generated on the fly...");
   para.appendChild(sam);
   element.appendChild(para);
  }


}

function removePara() {
  element = document.getElementById("para3");
  elementb = document.getElementById("para4");
  element.parentElement.removeChild(elementb);

}
  function myMove() {
     element = document.getElementById("box5");

       pos = 0;
       id = setInterval(frame, 95);
      function frame() {
          if (pos == 360) {
              clearInterval(id);
          } else {
              pos++;
              element.style.top = pos +'px';
              elem.style.left = pos +'px';
          }
      }
  }


function myFunction() {
  element = document.getElementById("fname");
  element.value = element.value.toUpperCase();

}

function changeOn() {
  element = document.getElementById("fname1");
  element.value = element.value.toUpperCase();
}

function preferedBrowser() {
  element = document.getElementById("browsers");
  console.log(element.value);
}

function color(elem) {
elem.style.backgroundColor="purple";
}

function inputxt(s) {
   element = document.getElementById("demo");
   element = document.getElementById(s.value);
   element.textContent = s.value;
    if (!element.match(/\S/))
        {
            alert("Field is blank");
            return false;
        }
        else
    {
        return true;
    }
}


function confirmInput() {
  n=prompt("Enter something");
}

function message() {
 alert("Hey man!!");
}

function keydown(n) {
  console.log(n);
}

function keypress(n) {
  console.log(n.code);
  element = document.getElementById("keycode");
  element.textContent = n.code;
}

function keyup() {
  element = document.getElementById("fname2");
  element.value = element.value.toUpperCase();

}

function writeMessage() {
  elements = document.getElementsByTagName("input");
   for(i = 0; i < elements.length; i++){
     if(elements[i].name=="myInput"){
       elements[i++].value = elements[i].value;
     }
    }
  }
