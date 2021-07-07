//Reloj control
const htmlHora = document.getElementById('hora');
const [htmlWeek, htmlMonth, htmlDay] = document.querySelectorAll('#date');

const weekList = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const monthList = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

function updateTime() {
  let horario = new Date().toLocaleTimeString().split(':');
  horario.pop();

  //update DOM if horario has change
  if (horario.join(':') != htmlHora.innerHTML) {
    htmlHora.innerHTML = horario.join(':');
  }
}

function updateDate() {
  let weekDay = new Date().getDay();
  let month = new Date().getMonth();
  let day = new Date().getDate();
  htmlWeek.innerHTML = weekList[weekDay];
  htmlMonth.innerHTML = monthList[month];
  htmlDay.innerHTML = day;
}

updateDate();
setInterval(updateTime, 1000);
