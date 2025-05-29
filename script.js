function setupReservationForm() {
    const form = document.getElementById('reservation-form');
    
    if (!form) {
        console.error('Formulário não encontrado!');
        return;
    }
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        if (!name) {
            alert(' Preencha este campo');
            return;
        }
        
        alert(`Obrigado, ${name}! Sua reserva foi enviada. Entraremos em contato para confirmação.`);
        form.reset();
    });
}

// Garante que o DOM está carregado antes de executar
document.addEventListener('DOMContentLoaded', function() {
    setupReservationForm();
});