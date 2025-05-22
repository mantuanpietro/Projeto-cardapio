// formulário de reserva
function setupReservationForm() {
    const form = document.getElementById('reservation-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        //envio do formulário
        const name = document.getElementById('name').value;
        alert(`Obrigado, ${name}! Sua reserva foi enviada. Entraremos em contato para confirmação.`);
        
        // Resetar formulário
        form.reset();
    });
    }