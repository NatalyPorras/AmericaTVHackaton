// let programs = ['AMERICA NOTICIAS: PRIMERA EDICION: LOCAL', 'AMERICA NOTICIAS: PRIMERA EDICION', 'AMERICA DEPORTES', 'AMERICA NOTICIAS: PRIMERA EDICION', 'TN. EL PRIVILEGIO DE AMAR', 'TN. MARIMAR', 'LOS AMORES DE POLO', 'AMERICA NOTICIAS: EDICION DEL MEDIODIA', 'EN BOCA DE TODOS']
const close1 = document.getElementById('close');
// const name = document.getElementById('name');
// const hour = document.getElementById('hour');
// const programName = document.getElementById('programName');
// const date = document.getElementById('date');
// const guardar = document.getElementById('guardar');
// const price = document.getElementById('price');
// const select = document.getElementById('select');
// const type = document.getElementById('type');


close1.addEventListener('click', () => {
  close()
  window.location = 'index.html'
})

// window.onload = () => {
//   firebase.auth().onAuthStateChanged(user => {
//     if (user) {
//       // if (user.emailVerified) {
//       let userUid = firebase.auth().currentUser.uid;
//       firebase.database().ref('Users/' + userUid).on('value', (userRef) => {
//         let user = userRef.val();
//         // name.innerHTML += `<p>${user.displayName}</p>`
//       })
//     }
//   })
// }

// guardar.addEventListener('click', () => {
//   saveProgram(hour.value, hourFinal.value, programName.value, date.value, price.value, select.value, type.value)
// })

// firebase.database().ref('Programas/').on('value', data => {
//   let data1 = data.val()
//   // console.log(data1);
// })
