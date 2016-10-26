
var marg = 0;

function changeBgColor(elem, val){
  $(elem).css({ "background-color" : val});
}

function identifyById() {
  console.log($("#para1"));
}

function identifyByClass() {
  console.log($(".class1"));
}

function byTag() {
  console.log($("p"));
}

function changeBackground() {
  changeBgColor("#block1", "purple");
}

function increaseFont() {
  $("#block2").css({"font-size": "1.995em"});
}

function changeFontColor() {
  changeBgColor("#block3", "green");
}

function revertColor() {
  changeBgColor("#block3", "white");
}

function hide() {
  $("#block4").css({"display" : "none"});
}

function changeBackColor(color, className) {
  console.log("changeBackColor");
  changeBgColor("." + className, color);

}

function numbersOnly(e) {
  if(parseInt(e.key) >= 0 && parseInt(e.key) <= 9){
    return e;
  }
return false;
}

function addAdjacent() {
  $("<p>",{    text: "I got generated on the fly..!!"
  }).appendTo("#para2");

}

function removePara() {
  $("#para4").remove();

}

function myMove() {
  element = $("#box5");
  pos = 0;
  id = setInterval(frame,50);

  function frame() {
    console.log(pos);
    if(pos == 350){
      clearInterval(id);
    } else {
      pos++;
      element.css({
        "margin-left": pos + 'px',
        "margin-top": pos + 'px'
    });

    }
  }
}

function myFunction() {
  valueToUppercase("#fname");
}

function changeOn() {
  valueToUppercase("#fname1");
}

function valueToUppercase(name){
  $(name).val($(name).val().toUpperCase());
}

function preferedBrowser() {
  console.log($("#browsers").val());

}


function color(elem) {
  changeBgColor(elem, "red");
}


function inputxt(s) {
  console.log(s);
  $("#demo").text(s.value);
  }

function confirmInput() {
  prompt("Hey Man!!!");
}

function message() {
  alert("Stay Hungry Stay foolish");
}

function keydown(n) {
  console.log(n);
}

function keypress(n) {
  console.log(n.code);
  $(keycode).text(n.code);
}

function keyup() {
  valueToUppercase("#fname2");
}

function writeMessage() {
  elements = $("input");
    var temp = "";
   $.each(elements,function(i,e){
      if(e.name == "sam"){
       temp = $(e).val();
      }
      else if(e.name == "sam1"){
      $(e).val(temp);
    }
  })
}
