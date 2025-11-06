// //  para mudar cores de lampada, exemplo sinaleiro, com temporizado das funcoes

// const lampada = document.getElementById('lampada');
// const ligar = document.getElementById('ligar');
// const desligar = document.getElementById('desligar');
// const piscar = document.getElementById('piscar');

// function ligarLampada() {
//     lampada.src = './imagens/lampada_ligada.jpg';
// }

// function desligarLampada() {
//     lampada.src = './imagens/lampada_desligada.jpg';
// }

// let piscarInterval;

// function piscarLampada() {
//     if (piscarInterval) {
//         clearInterval(piscarInterval);
//         piscarInterval = null;
//         desligarLampada();
//     } else {
//         piscarInterval = setInterval(() => {
//             if (lampada.src.includes('lampada_ligada.jpg')) {
//                 desligarLampada();
//             } else {
//                 ligarLampada();
//             }
//         }, 500);
//     }
// }

// ligar.addEventListener('click', ligarLampada);
// desligar.addEventListener('click', desligarLampada);
// piscar.addEventListener('click', piscarLampada);    




const lampada = document.getElementById('lampada');
const btAlternar =document.getElementById ('btn-alternar');
const baseUrlImg = 'https://symmetrical-garbanzo-wr5v5pgqx74vh5x7q-5508.app.github.dev/aulas/LampadaJavascript/'

// alert(lampada.src)
// alert(btnAlternar.textContent) 
btAlternar.addEventListener('click', () => {
    if(lampada.src == baseUrlImg + 'lampada1.png') {
        lampada.src = 'lampada2.png' 
        btAlternar.textContent = "Lâmpada Acessa!"
    } else {
        lampada.src = "lampada1.png"
        btAlternar.textContent = 'Lâmpada Apagada!' 
    } })

    // dbl click - duplo clique
    btAlternar.addEventListener('dblclick', () => {
        lampada.src = 'lampada0.png' 
        btAlternar.textContent = 'Lâmpada Queimada2!'    
    })

    // btAlternar.addEventListener('dblclick', () => {
    
    //     lampada.src = 'lampada0.png' 
    //     btAlternar.textContent = "Lâmpada Queimada!"
    //     btAlternar.backgroundColor = 'red'
    // })

