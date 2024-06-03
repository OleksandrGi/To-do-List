let input_js = document.getElementById("input_js");
let list = document.getElementById("list");
let ol = document.createElement("ol");


function pinClick() {
if(input_js.value === ''){
    alert('напишите текст ')
    return;
}

  let input_value = input_js.value;

  let li = document.createElement("li");
  li.innerHTML = input_value;

  list.appendChild(ol);
  ol.appendChild(li);

 

  let span = document.createElement("span");

 
  li.appendChild(span);


  input_js.value = "";
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  span.title = "close";
  span.classList.add("x");

  span.onclick = () => {
    li.remove();
  };
}
