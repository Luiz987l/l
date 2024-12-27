// Definir o tempo para liberar o acesso (em segundos)
let timeLeft = 60 ;

// Atualiza o timer a cada segundo
const timerElement = document.getElementById('timer');
const accessButton = document.getElementById('accessButton');

function updateTimer() {
    if (timeLeft > 0) {
        timerElement.textContent = `Tempo restante: ${timeLeft} segundos`;
        timeLeft--;
    } else {
        timerElement.textContent = 'Acesso liberado!';
        accessButton.disabled = false; // Habilitar o botão quando o tempo acabar
        accessButton.addEventListener('click', () => {
            window.location.href = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.essencialenxovais.com.br%2Fcoracao-de-pelucia-eu-te-amo-mini%2Fp&psig=AOvVaw2VlrDjkGX8c8ZU3hOwWbV5&ust=1735416703620000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLD9n5bhyIoDFQAAAAAdAAAAABAJ"; // Substitua pelo site desejado
        });
    }
}

// Inicia o contador
setInterval(updateTimer, 1000);
