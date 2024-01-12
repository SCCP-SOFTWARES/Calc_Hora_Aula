const H1 = document.querySelector('.hora1');
const H2 = document.querySelector('.hora2');
const result = document.querySelector('h1');



document.querySelector('button').addEventListener('click', ()=>{
    const hh1 = H1.value.split(':');
    const hh2 = H2.value.split(':');
     
    const result1h = (Number(hh2[0]) * 60) + Number(hh2[1]);
    const result2h = (Number(hh1[0]) * 60) + Number(hh1[1]); 

    result.innerText =`${parseInt((result1h - result2h)/45)}` + ' Aulas';

    H2.value = " ";
    H1.value = " "
})






