window.addEventListener('load', atualizarLicao)

const licoes = [
  // Trimestre 1
  {trim: '1º', data1: new Date(2024, 1, 3), data2: new Date(2024, 1, 9), numero: 6, titulo: "Eu me Levantarei"},
  {trim: '1º', data1: new Date(2024, 1, 10), data2: new Date(2024, 1, 16), numero: 7, titulo: "Sua misericórdia se eleva até os céus"},
  {trim: '1º', data1: new Date(2024, 1, 17), data2: new Date(2024, 1, 23), numero: 8, titulo: "Sabedoria para uma vida justa"},
  {trim: '1º', data1: new Date(2024, 1, 24), data2: new Date(2024, 2, 1), numero: 9, titulo: "Bendito o que vem em nome do Senhor"},
  {trim: '1º', data1: new Date(2024, 2, 2), data2: new Date(2024, 2, 8), numero: 10, titulo: "Lições do passado"},
  {trim: '1º', data1: new Date(2024, 2, 9), data2: new Date(2024, 2, 15), numero: 11, titulo: "Anseio por Deus em Sião"},
  {trim: '1º', data1: new Date(2024, 2, 16), data2: new Date(2024, 2, 22), numero: 12, titulo: "Adoração para toda a vida"},
  {trim: '1º', data1: new Date(2024, 2, 23), data2: new Date(2024, 2, 29), numero: 13, titulo: "Espere no Senhor"},
  //Trimestre 2
  {trim: '2º', data1: new Date(2024, 2, 30), data2: new Date(2024, 3, 5), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 3, 6), data2: new Date(2024, 3, 12), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 3, 13), data2: new Date(2024, 3, 19), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 3, 20), data2: new Date(2024, 3, 26), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 3, 27), data2: new Date(2024, 4, 3), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 4, 4), data2: new Date(2024, 4, 10), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 4, 11), data2: new Date(2024, 4, 17), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 4, 18), data2: new Date(2024, 4, 24), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 4, 25), data2: new Date(2024, 4, 31), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 5, 1), data2: new Date(2024, 5, 7), numero: 10, titulo: "Espiritualismo exposto"},
  {trim: '2º', data1: new Date(2024, 5, 8), data2: new Date(2024, 5, 14), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 5, 15), data2: new Date(2024, 5, 21), numero: 13, titulo: "Título lição"},
  {trim: '2º', data1: new Date(2024, 5, 22), data2: new Date(2024, 5, 28), numero: 13, titulo: "Título lição"},
]  


function atualizarLicao() {

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);
  
  const nextLessons = licoes.filter((e) => {
 
    const lessonStartDate = new Date(e.data1);
    const lessonEndDate = new Date(e.data2);
    
    lessonStartDate.setHours(0, 0, 0, 0);
    lessonEndDate.setHours(0, 0, 0, 0);
    
    return lessonStartDate.getTime() >= currentDate.getTime() || currentDate.getTime() <= lessonEndDate.getTime()

  });

  document.querySelector('#titulo').innerHTML = `Lição ${nextLessons[0].numero} - ${nextLessons[0].titulo}`
  document.querySelector('#trimestre').innerHTML = `${nextLessons[0].trim} Trimestre de ${currentDate.getFullYear()}`
  
}