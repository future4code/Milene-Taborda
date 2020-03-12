

function addPlanner() {
  
  const input = document.getElementById("input");
  const novaTarefa = input.value;

  const selectDay = document.getElementById("select");
  const weekday = selectDay.value;


  if(novaTarefa === "") {
    alert("Digite um valor!");
  } else {
    switch(weekday) {
      case "Segunda-feira":
        let plannerSeg = document.getElementById("seg");
        plannerSeg.innerHTML += "<li>" +novaTarefa+ "<button onclick='scratch()'>Riscar</button></li>"
        input.value = "";
        break;

      case "Terça-feira":
        let plannerTer = document.getElementById("ter");
        plannerTer.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;

      case "Quarta-feira":
        let plannerQua = document.getElementById("qua");
        plannerQua.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;

      case "Quinta-feira":
        let plannerQui = document.getElementById("qui");
        plannerQui.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;

      case "Sexta-feira":
        let plannerSex = document.getElementById("sex");
        plannerSex.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;

      case "Sábado":
        let plannerSab = document.getElementById("sab");
        plannerSab.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;

      case "Quinta-feira":
        let plannerDom = document.getElementById("dom");
        plannerDom.innerHTML += "<li>" +novaTarefa+ "</li>"
        input.value = "";
        break;   
    }
  }
}

function scratch() {
  let scratchPlanner = document.getElementsByTagName("li");
  scratchPlanner.innerHTML += "button class='scratch'>"
}

