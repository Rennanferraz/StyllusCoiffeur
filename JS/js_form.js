document.getElementById('form-agendamento').addEventListener('submit', function(e) {
    e.preventDefault(); // impede o envio tradicional

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const barbeiro = document.getElementById('barbeiro').value;
    const dataHora = document.getElementById('dataHora').value;

    const numeroWhatsApp = '5521985646904'; // DDI + DDD + número, sem espaços nem +

    const mensagem = `Olá! Gostaria de agendar um horário com as seguintes informações:\n\n` +
                     `👤 Nome: ${nome}\n📞 Telefone: ${telefone}\n💈 Barbeiro: ${barbeiro}\n📅 Data/Hora: ${dataHora}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
});