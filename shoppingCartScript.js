var input = document.getElementById('inputItem');
var itemAlert = document.getElementById('itemAlert');
var items = [];

function alertFlash() {
  setTimeout(()=>{itemAlert.style = "color:yellow;"}, 60);
  setTimeout(()=>{itemAlert.style = "color:red;"}, 120);
  setTimeout(()=>{itemAlert.style = "color:yellow;"}, 180);
  setTimeout(()=>{itemAlert.style = "color:red;"}, 240);
  setTimeout(()=>{itemAlert.style = "color:yellow;"}, 300);
  setTimeout(()=>{itemAlert.style = "color:red;"}, 360);
}

function add() {
  
  if (input.value == "") {
    itemAlert.innerHTML = "Type something you want to add to the cart";
    alertFlash();
  }
  
  else {
    itemAlert.innerHTML = "";
    
    if (items.length > 6) {
      itemAlert.innerHTML = "LIST IS FULL";
      
      alertFlash();
      
      input.value = "";
    }
    
    else {
      var newList = document.createElement('li');
      var newItem = document.createTextNode(input.value);
      var position = document.getElementsByTagName('ol')[0];
      
      items.push(input.value);
      
      newList.appendChild(newItem);
      position.appendChild(newList);
      input.value = "";
    }
  }
}

function rem() {
  if (input.value == "") {
    itemAlert.innerHTML = "Type something you want to remove from the cart";
    alertFlash();
  }
  
  else {
    var child = document.getElementsByTagName('li')[input.value - 1];
    var parent = child.parentNode;

    items.splice(input.value-1 ,1);
    
    parent.removeChild(child);
    input.value = "";
    itemAlert.innerHTML = "";
  }
}