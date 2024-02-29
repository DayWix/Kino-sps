const selectedSeats = [];
document.addEventListener('DOMContentLoaded', function() { 
    const seats = document.querySelectorAll('.seat');
     
    seats.forEach(seat => {
        seat.addEventListener('click', function() { //přidání funkcce click a funkce při kliknutí přidá class selected
            seat.classList.toggle('selected');
            const selectedSeatId = seat.id; 

            
            const seatIndex = selectedSeats.indexOf(selectedSeatId);
            if (seatIndex === -1) {
              
                selectedSeats.push(selectedSeatId);
            } else {
                
                selectedSeats.splice(seatIndex, 1);
            }

            
        });
    });
});



function submitReservation() {
    var jmeno = document.getElementById('name').value;
    var prijmeni = document.getElementById('surname').value;
    var cas = document.getElementById('time').value;
    const registrace = jmeno + ' ' + prijmeni + ', ' + cas; // Uložení do localStorage

    selectedSeats.forEach(seatId => {
        if (!localStorage.getItem(seatId)) { // Kontrola, zda sedadlo není již rezervováno
            localStorage.setItem(seatId, registrace);
        } else {
            const existingReservation = localStorage.getItem(seatId);
            const updatedReservation = existingReservation;
            localStorage.setItem(seatId, updatedReservation);
        }
        
        const seat = document.getElementById(seatId);
        seat.className = 'seat registred'; // Přidání třídy "registred" pro označení rezervovaného sedadla
        seat.title = localStorage.getItem(seatId); // Přidání všech rezervací jako titulek sedadla
    });
    
    var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    myModal.show();
}

    
