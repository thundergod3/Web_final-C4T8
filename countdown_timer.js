if (localStorage.getItem('Flag') === 'null' || localStorage.getItem('Flag') === null) {
    localStorage.setItem('Flag', false);
} else {
    localStorage.getItem('Flag');
}

function begin() {
    for (var i = 1; i < 32; i++) {
        var dayBegin = i;
        var HTMLDayBegin = `
            <option>${dayBegin}</option>
        `
        document.getElementById('exampleFormControlSelect1').insertAdjacentHTML('beforeend', HTMLDayBegin)
    }

    for (var x = 1; x < 13; x++) {
        var monthBegin = x;
        var HTMLMonthBegin = `
            <option>${monthBegin}</option>
        `
        document.getElementById('exampleFormControlSelect2').insertAdjacentHTML('beforeend', HTMLMonthBegin)
    }

    for (var y = 2100; y > 1900; y--) {
        var yearBegin = y;
        var HTMLYearBegin = `
            <option>${yearBegin}</option>
        `
        document.getElementById('exampleFormControlSelect3').insertAdjacentHTML('beforeend', HTMLYearBegin)
    }

    var accept = document.getElementById('accept');
    accept.addEventListener('click', function () {
        localStorage.setItem('Flag', true);

        var NoContainer = document.getElementById('container_begin');
        var newDay = document.getElementById('exampleFormControlSelect1').value;
        var newMonth = document.getElementById('exampleFormControlSelect2').value;

        if (newMonth == 1) {
            newMonth = 'January'
        }
        if (newMonth == 2) {
            newMonth = 'Febuary'
        }
        if (newMonth == 3) {
            newMonth = 'March'
        }
        if (newMonth == 4) {
            newMonth = 'April'
        }
        if (newMonth == 5) {
            newMonth = 'May'
        }
        if (newMonth == 6) {
            newMonth = 'Jun'
        }
        if (newMonth == 7) {
            newMonth = 'Junly'
        }
        if (newMonth == 8) {
            newMonth = 'August'
        }
        if (newMonth == 9) {
            newMonth = 'September'
        }
        if (newMonth == 10) {
            newMonth = 'October'
        }
        if (newMonth == 11) {
            newMonth = 'November'
        }
        if (newMonth == 12) {
            newMonth = 'December'
        }

        var newYear = document.getElementById('exampleFormControlSelect3').value;
        var TimeSave = {
            SaveDays: `${newDay}`,
            SaveNewMonth: `${newMonth}`,
            SaveNewYear: `${newYear}`,
        }

        localStorage.setItem('DateSave', JSON.stringify(TimeSave));

        NoContainer.innerHTML = '';

        if (document.getElementById('container_begin').innerHTML == '') {
            var x = setInterval(function () {
                var CountDownDate = new Date(`${newMonth} ${newDay}, ${newYear} 0:00:00`).getTime();
                var now = new Date().getTime();
                var distance = CountDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                var DaysAfter = document.getElementById('days_after');
                var HoursAfter = document.getElementById('hours_after');
                var MinutesAfter = document.getElementById('minutes_after');
                var SecondsAfter = document.getElementById('seconds_after');

                DaysAfter.innerHTML = days;
                var HTMLDaysAfter = `
                    <div class='block_after'></div>
                    <span class='text_after'>Days</span>          
                `;
                DaysAfter.insertAdjacentHTML('beforeend', HTMLDaysAfter);

                HoursAfter.innerHTML = hours;
                var HTMLHoursAfter = `
                    <div class='block_after'></div>
                    <span class='text_after'>Hours</span>          
                `;
                HoursAfter.insertAdjacentHTML('beforeend', HTMLHoursAfter);

                MinutesAfter.innerHTML = minutes;
                var HTMLMinutesAfter = `
                    <div class='block_after'></div>
                    <span class='text_after'>Minutes</span>          
                `;
                MinutesAfter.insertAdjacentHTML('beforeend', HTMLMinutesAfter);

                SecondsAfter.innerHTML = seconds;
                var HTMLSecondsAfter = `
                    <div class='block_after'></div>
                    <span class='text_after'>Seconds</span>          
                `;
                SecondsAfter.insertAdjacentHTML('beforeend', HTMLSecondsAfter);
                if (distance < 0) {
                    var AnotherNoContainer = document.getElementById('container_after')
                    var newContainer = document.getElementById('new_container');
                    AnotherNoContainer.innerHTML = '';

                    var HTMLAdvertise = `
                        <div id='advertise'>It's time for you to do something important</div>
                    `;
                    newContainer.insertAdjacentHTML('afterbegin', HTMLAdvertise)
                }
            })
        }
    })
}

if (localStorage.getItem('Flag') == "true") {
    var NewDate = JSON.parse(localStorage.getItem('DateSave'));
    var NoContainer = document.getElementById('container_begin');
    NoContainer.innerHTML = '';
    
    var newMonth = NewDate.SaveNewMonth;
    var newYear = NewDate.SaveNewYear;
    var newDay = NewDate.SaveDays;
    if (document.getElementById('container_begin').innerHTML == '') {
        var x = setInterval(function () {
            var CountDownDate = new Date(`${newMonth} ${newDay}, ${newYear} 0:00:00`).getTime();
            var now = new Date().getTime();
            var distance = CountDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            var DaysAfter = document.getElementById('days_after');
            var HoursAfter = document.getElementById('hours_after');
            var MinutesAfter = document.getElementById('minutes_after');
            var SecondsAfter = document.getElementById('seconds_after');

            DaysAfter.innerHTML = days;
            var HTMLDaysAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Days</span>          
            `;
            DaysAfter.insertAdjacentHTML('beforeend', HTMLDaysAfter);

            HoursAfter.innerHTML = hours;
            var HTMLHoursAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Hours</span>          
            `;
            HoursAfter.insertAdjacentHTML('beforeend', HTMLHoursAfter);

            MinutesAfter.innerHTML = minutes;
            var HTMLMinutesAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Minutes</span>          
            `;
            MinutesAfter.insertAdjacentHTML('beforeend', HTMLMinutesAfter);

            SecondsAfter.innerHTML = seconds;
            var HTMLSecondsAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Seconds</span>          
            `;
            SecondsAfter.insertAdjacentHTML('beforeend', HTMLSecondsAfter);
            if (distance < 0) {
                var AnotherNoContainer = document.getElementById('container_after')
                var newContainer = document.getElementById('new_container');
                AnotherNoContainer.innerHTML = '';

                var HTMLAdvertise = `
                    <div id='advertise'>It's time for you to do something important</div>
                `;
                newContainer.insertAdjacentHTML('afterbegin', HTMLAdvertise)
            }
        })
    }
} else {
    begin();
}

var Back = document.getElementById('back');
Back.addEventListener('click', function () {
    localStorage.setItem('Flag', false);
    window.location = "./countdown_timer.html"
})


