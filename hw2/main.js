function mute() {
  var x = document.getElementById("myDIV2");
  if (x.style.visibility == "visible") {
    x.style.visibility = "hidden";
  } else {
    x.style.visibility = "visible";
  }
  }

let anchored = true;

function to_anch(a, b, c, d){
  if(anchored){
    var a1 = document.getElementById(a).textContent
    var b1 = document.getElementById(b).textContent
    var c1 = document.getElementById(c).src
    var d1 = document.getElementById(d).src
    document.getElementById(a).textContent = b1
    document.getElementById(b).textContent = a1
    document.getElementById(c).src = d1
    document.getElementById(d).src = c1
    }
  else{
  
  document.getElementById('aside_pic1').style.width = "100px"
  document.getElementById('aside_pic1').style.height = "100px"
  document.getElementById('aside_pic2').style.width = "100px"
  document.getElementById('aside_pic2').style.height = "100px"
  document.getElementById('aside_pic3').style.width = "100px"
  document.getElementById('aside_pic3').style.height = "100px"
  document.getElementById('aside_pic4').style.width = "100px"
  document.getElementById('aside_pic4').style.height = "100px"
  document.getElementById('aside_pic5').style.width = "100px"
  document.getElementById('aside_pic5').style.height = "100px"
  document.getElementById('aside_pic6').style.width = "100px"
  document.getElementById('aside_pic6').style.height = "100px"
    var a1 = document.getElementById(a).textContent
    var b1 = document.getElementById(b).textContent
    var c1 = document.getElementById(c).src
    var d1 = document.getElementById(d).src
    document.getElementById(a).textContent = b1
    document.getElementById(b).textContent = a1
    document.getElementById(c).src = d1
    document.getElementById(d).src = c1


    document.getElementById("section1").style.display = 'block'
    document.getElementById("aside1").style.left = "65%"
    document.getElementById("block6").style.display = "none"
    const picsrc = document.getElementById("anchpic1").src
    document.getElementById("aside_pic6").src = picsrc

    var elements = document.getElementsByClassName('block');
    for (var i in elements) {
      elements[i].style.width = "200px"
      elements[i].style.height = "150px"
    }

    anchored = true
    }
}


function refresh(){
  const d = new Date();
  var hour = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()
  document.getElementById("time").innerHTML = String(hour) +':'+ String(min)+':'+String(sec)
  
  setTimeout(refresh, 1000); 
  
  var n = document.getElementsByClassName("block").length
  if(n === 1){
    document.getElementById("section1").style.right = '0%'
    document.getElementById("aside1").style.display = "block"
  }
}

refresh();

function crossed(a){
  const a1 = document.getElementById(a)
  a1.remove()
}

function deanch(){
  anchored = false
  document.getElementById("section1").style.display = 'none'
  document.getElementById("aside1").style.left = 0
  document.getElementById("block6").style.display = "block"
  const picsrc = document.getElementById("anchpic1").src
  document.getElementById("aside_pic6").src = picsrc
  const anchname = document.getElementById("anchname1").textContent
  document.getElementById("aside_name6").textContent = anchname
  document.getElementById('aside_pic1').style.width = "200px"
  document.getElementById('aside_pic1').style.height = "200px"
  document.getElementById('aside_pic2').style.width = "200px"
  document.getElementById('aside_pic2').style.height = "200px"
  document.getElementById('aside_pic3').style.width = "200px"
  document.getElementById('aside_pic3').style.height = "200px"
  document.getElementById('aside_pic4').style.width = "200px"
  document.getElementById('aside_pic4').style.height = "200px"
  document.getElementById('aside_pic5').style.width = "200px"
  document.getElementById('aside_pic5').style.height = "200px"
  document.getElementById('aside_pic6').style.width = "200px"
  document.getElementById('aside_pic6').style.height = "200px"

  var elements = document.getElementsByClassName('block');
  for (let i in elements) {
    if (i === elements.length) { break; }
    elements[i].style.width = "400px"
    elements[i].style.height = "250px"
  }

  
 
  
}



