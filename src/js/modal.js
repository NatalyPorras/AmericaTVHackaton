const dayWeekend = [
  {date: "#", key: 0},
  {date: "Lunes", day: '2018-10-29', key: 1},
  {date: "Martes", day: '2018-10-30', key: 2},
  {date: "Miercoles", day: '2018-10-31', key: 3},
  {date: "Jueves", day: '2018-11-01', key: 4},
  {date: "Viernes", day: '2018-11-02', key: 5},
  {date: "Sabado", day: '2018-11-03', key: 6},
  {date: "Domingo", day: '2018-11-04', key: 7},
]
const getData2 = () =>{
    firebase.database().ref().child('Programas').on("value", snap => {
        const arrayHoras = Object.values(snap.val());
        catchData(arrayHoras)
    })
}

const catchData = (programName1) => {
  let dateDeHora = []
  let crearTabla = []
  programName1.forEach(hora => {
    let data = Object.values(hora)
    data.forEach(data1 => {
      dateDeHora.push(`${data1.inicio} - ${data1.fin}`)
      const obj= {
        number: parseInt(data1.inicio),
        string:`${data1.inicio} - ${data1.fin}`,
        price: data1.price,
        programName: data1.programName,
        select: data1.select,
        date: data1.date
      }
      crearTabla.push(obj)
      })
  })
  let completeData = crearTabla;
  let dateDeHora1 = dateDeHora.sort()
  let dateDeHora2 =  dateDeHora1.filter(date => date !== undefined)
  let dateDeHora3 = valoreUnicos(dateDeHora2)
  genera_tabla(dateDeHora3, completeData)
}

const valoreUnicos = (horas) => [...new Set(horas)]

const genera_tabla = (dateDeHora3, completeData) => {
  let body = document.getElementById('contenedorPerfecto')
  let table = document.createElement('table')
  let tbody = document.createElement('tbody')
  for (let i = 0; i < dateDeHora3.length; i++) {
    let hilera = document.createElement('tr')
    if (i > 0) {
        // console.log(hora);
        let celda = document.createElement('th')
        let textCelda = document.createTextNode(dateDeHora3[i])
        celda.appendChild(textCelda)
        hilera.appendChild(celda)
    }
    for (let j = 0; j < 8; j++) {
      if (i === 0) {
        let date = dayWeekend[j].date
        let celda = document.createElement('td')
        let textCelda = document.createTextNode(date)
        celda.appendChild(textCelda)
        hilera.appendChild(celda)
      }
      for (var l = 0; l < completeData.length; l++) {
        // console.log(completeData[l].string);
        if (i !== 0 && j !== 0 && dateDeHora3[i] == completeData[l].string && completeData[l].date == dayWeekend[j].day) {
          // let date = completeData[j]
          let celda = document.createElement('td')
          let textCelda = document.createTextNode(completeData[l].programName)
          celda.appendChild(textCelda)
          hilera.appendChild(celda)
        }
      }
    }
    tbody.appendChild(hilera)
  }
  table.appendChild(tbody)
  body.appendChild(table)
  table.setAttribute('border', '2')
}
getData2()
genera_tabla()
