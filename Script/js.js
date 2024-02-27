const selectedSeats = [];
document.addEventListener('DOMContentLoaded', function() {
    const seats = document.querySelectorAll('.seat');
     
    seats.forEach(seat => {
        seat.addEventListener('click', function() {
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
    const registrace = jmeno + ' ' + prijmeni + ', ' + cas;

    selectedSeats.forEach(seatId => {
        if (!localStorage.getItem(seatId)) { // Kontrola, zda sedadlo není již rezervováno
            localStorage.setItem(seatId, registrace);
        }
        
        const seat = document.getElementById(seatId);
        seat.className = 'seat'; 
        seat.classList.add('registred');
        seat.title = registrace;
    });
    var myModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
    myModal.show();
}

    
