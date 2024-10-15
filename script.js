document.addEventListener('DOMContentLoaded', function () {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username) {
        document.getElementById('welcome-message').textContent = 'You Are Welc, ' + storedUser.username + '!';
    } else {
        window.location.href = 'login.html';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const tripTypeRadios = document.querySelectorAll('input[name="radios"]');
    const returnDateGroup = document.getElementById('return-date-group');
    const noReturnDateGroup = document.getElementById('no-return-date-group');
    const returnInputFromOne = document.getElementById('return-input-from-one');
    const returnInputToOne = document.getElementById('return-input-to-one');
    const returnInputDepartureOne = document.getElementById('return-input-departure-one');
    const returnInputFromTwo = document.getElementById('return-input-from-two');
    const returnInputToTwo = document.getElementById('return-input-to-two');
    const returnInputDepartureTwo = document.getElementById('return-input-departure-two');
    // const returnDateInputOne = document.getElementById('return-date1');

    tripTypeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            if (this.value === 'Multi-City') {
                returnDateGroup.style.display = 'block';
                noReturnDateGroup.style.display = 'none';
                returnInputFromOne.setAttribute('required', 'required');
                returnInputToOne.setAttribute('required', 'required');
                returnInputDepartureOne.setAttribute('required', 'required');
                returnInputFromTwo.setAttribute('required', 'required');
                returnInputToTwo.setAttribute('required', 'required');
                returnInputDepartureTwo.setAttribute('required', 'required');
                // returnDateInput.setAttribute('required', 'required');
            } else {
                returnDateGroup.style.display = 'none';
                noReturnDateGroup.style.display = 'block';
                returnInputFromOne.removeAttribute('required');
                returnInputToOne.removeAttribute('required');
                returnInputDepartureOne.removeAttribute('required');
                returnInputFromTwo.removeAttribute('required');
                returnInputToTwo.removeAttribute('required');
                returnInputDepartureTwo.removeAttribute('required');
                // returnDateInput.removeAttribute('required');
            }
        });
    });

    document.getElementById('booking-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const radios = document.querySelector('input[name="radios"]:checked').value;
        const from = document.getElementById('from').value;
        const to = document.getElementById('to').value;
        const returnFromOne = radios === 'Multi-City' ? document.getElementById('return-input-from-one').value : 'N/A';
        const returnToOne = radios === 'Multi-City' ? document.getElementById('return-input-to-one').value : 'N/A';
        const returnDepartureOne = radios === 'Multi-City' ? document.getElementById('return-input-departure-one').value : 'N/A';
        const returnFromTwo = radios === 'Multi-City' ? document.getElementById('return-input-from-two').value : 'N/A';
        const returnToTwo = radios === 'Multi-City' ? document.getElementById('return-input-to-two').value : 'N/A';
        const returnDepartureTwo = radios === 'Multi-City' ? document.getElementById('return-input-departure-two').value : 'N/A';
        const departure = document.getElementById('departure').value;
        const returns = document.getElementById('returns').value;
        const passengers = document.getElementById('passengers').value;
        const classes = document.getElementById('classes').value;
        const amount = Math.floor(Math.random() * 901) + 100;

        const booking = {
            radios,
            from,
            to,
            returnFromOne,
            returnToOne,
            returnDepartureOne,
            returnFromTwo,
            returnToTwo,
            returnDepartureTwo,
            departure,
            returns,
            passengers,
            classes,
            amount
        };

        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));

        document.getElementById('booking-form').reset();
        returnDateGroup.style.display = 'none';

        alert('Done!')
        window.location.href = 'mybooking.html';
        // alert(`${ways} ${from} ${to} ${departure} ${returns} ${passengers} ${classes}`)
    });



});


document.addEventListener('DOMContentLoaded', function () {
    const bookingList = document.getElementById('booking-list');
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];

    bookings.forEach(booking => {
        const bookingBlock = document.createElement('div');
        bookingBlock.className = 'booking-block';

        bookingBlock.innerHTML = `
       <div class=" sigble4 mb-0 shadow rounded my-5 py-4 px-3">
      <div class="">
      <p><strong>Type Of Flight:</strong> ${booking.radios}</p>
      <p><strong>From:</strong> ${booking.from}</p>
      <p><strong>To:</strong> ${booking.to}</p>
      <hr>
      <p><strong>Multi-City Trip One:</strong></p>
      <p><strong>From:</strong> ${booking.returnFromOne}</p>
      <p><strong>To:</strong> ${booking.returnToOne}</p>
      <p><strong>Departure:</strong> ${booking.returnDepartureOne}</p>
      <p><strong>Multi-City Trip Two:</strong></p>
      <p><strong>From:</strong> ${booking.returnFromTwo}</p>
      <p><strong>To:</strong> ${booking.returnToTwo}</p>
      <p><strong>Departure:</strong> ${booking.returnDepartureTwo}</p>
      <hr>
      <p><strong>Departure For Flight:</strong> ${booking.departure}</p>
      <p><strong>Returns:</strong> ${booking.returns}</p>
      <p><strong>Passengers:</strong> ${booking.passengers}</p>
      <p><strong>Class:</strong> ${booking.classes}</p>
      <p><strong>Amount to Pay:</strong> $${booking.amount}</p>
      <button class="btn btn-danger my-2" onclick="del()">Delete</button>
      <button class="btn btn-success my-2" style="margin-left: 35%;" onclick="pay()">Pay To Bank</button>
      </div>    
       </div>`;
        bookingList.appendChild(bookingBlock);


    });
});

function myBooking() {
    window.location.href = 'mybooking.html';
};
function myAccount() {
    window.location.href = 'myaccount.html';
};

    // slice();
    function pay() {
        window.location.href = 'skrill.com';
    }

function del() {
    // localStorage.removeItem('bookings');
    delete(bookings);
};


function logout() {
    alert("You Are Ready To Log Out");
    localStorage.removeItem('user');
    window.location.href = 'login.html';
};

function home() {
    window.location.href = 'index.html';
};

