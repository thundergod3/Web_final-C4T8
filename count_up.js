if (localStorage.getItem('Flag') === 'null' || localStorage.getItem('Flag') === null) {
    localStorage.setItem('Flag', false);
} else {
    localStorage.getItem('Flag');
}

function SetUpDate() {
    var Accept = document.getElementById('accept');
    Accept.addEventListener('click', function () {
        localStorage.setItem('Flag', true);

        var NoContainer = document.getElementById('container_begin');

        NoContainer.innerHTML = '';

        var ContainerSetUp = document.getElementById('container_setup')
        var Advertise = `
            <div id='lonely_container'>
                <div class='time_lonely'>Your time lonely</div>
            </div>  
        `
        ContainerSetUp.insertAdjacentHTML('afterbegin', Advertise);

        var totalSeconds = 0;
        setInterval(setTime, 1000);

        function setTime() {
            var secondsLabel = document.getElementById('seconds');
            var minutesLabel = document.getElementById('minutes');
            var hoursLabel = document.getElementById('hours');
            var daysLabel = document.getElementById('days');

            ++totalSeconds;
            var secondRemaining = pad(totalSeconds % 60);
            var minutesRamining = pad(parseInt(totalSeconds / 60) % 60);
            var hoursRemaining = pad(parseInt(totalSeconds / 3600) % 24);
            var daysRamaining = pad(parseInt(totalSeconds / 86400));

            daysLabel.innerHTML = daysRamaining;
            var HTMLDaysAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Days</span>          
            `;
            daysLabel.insertAdjacentHTML('beforeend', HTMLDaysAfter);

            hoursLabel.innerHTML = hoursRemaining;
            var HTMLHoursAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Hours</span>          
            `;
            hoursLabel.insertAdjacentHTML('beforeend', HTMLHoursAfter);

            minutesLabel.innerHTML = minutesRamining;
            var HTMLMinutesAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Minutes</span>          
            `;
            minutesLabel.insertAdjacentHTML('beforeend', HTMLMinutesAfter);

            secondsLabel.innerHTML = secondRemaining;
            var HTMLSecondsAfter = `
                <div class='block_after'></div>
                <span class='text_after'>Seconds</span>          
            `;
            secondsLabel.insertAdjacentHTML('beforeend', HTMLSecondsAfter);

            localStorage.setItem('SaveSeconds', totalSeconds);
        }

        function pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            }
            else {
                return valString;
            }
        }

        var YearOff = new Date().getFullYear() ;
        var MonthOff = new Date().getMonth() ;  
        var DayOff = new Date().getDate();        
        var HourOff = new Date().getHours();
        var MinuteOff = new Date().getMinutes();
        var SecondOff = new Date().getSeconds();

        var TimeSave = {
            SaveDays: `${DayOff}`,
            SaveNewMonth: `${MonthOff}`,
            SaveNewYear: `${YearOff}`,
            SaveHours: `${HourOff}`,
            SaveMinutes: `${MinuteOff}`,
            SaveSeconds: `${SecondOff}`
        }

        localStorage.setItem('DateSaveCountUp', JSON.stringify(TimeSave));

        var TicTacToeGame = document.getElementById('tic_tac_toe');
        var HTMLGame = `
            <div id='game_container'>
                <span id='game'>This game can make you feel better ^^</span>
                <a target="_blank" href='./tic_tac_toe.html' id='link_game'>Tic Tac Toe</a>
            </div>
        `
        TicTacToeGame.insertAdjacentHTML('afterbegin', HTMLGame)
    })
}

if (localStorage.getItem('Flag') == "true") {
    var NoContainer = document.getElementById('container_begin');
    var NewDate = JSON.parse(localStorage.getItem('DateSaveCountUp'));
    NoContainer.innerHTML = '';

    var YearSave = parseInt(NewDate.SaveNewYear) ;
    var MonthSave = parseInt(NewDate.SaveNewMonth) + 1 ;
    var NumberMonthSave = NewDate.SaveNewMonth;
    console.log(NumberMonthSave);
    
    var DaySave = parseInt(NewDate.SaveDays);
    console.log(DaySave);
    
    var HourSave = NewDate.SaveHours;
    var MinuteSave = NewDate.SaveMinutes;
    var SecondSave = NewDate.SaveSeconds;
    var DateSave = new Date(YearSave, NumberMonthSave, DaySave, HourSave, MinuteSave, SecondSave);
    console.log(DateSave);
    

    var ContainerSetUp = document.getElementById('container_setup')
    var Advertise = `
            <div id='lonely_container'>
                <div class='time_lonely'>Your time lonely</div>
            </div>   
        `
    ContainerSetUp.insertAdjacentHTML('afterbegin', Advertise);

    var NewSecondsLabel = document.getElementById('seconds');
    var NewMinutesLabel = document.getElementById('minutes');
    var NewHoursLabel = document.getElementById('hours');
    var NewDaysLabel = document.getElementById('days');

    setInterval(setTime, 1000);

    function setTime() {
        var DateNow = new Date();
        console.log(DateNow);
        

        if (DateNow < DateSave) {
            DateNow.setDate(DateNow.getDate() + 1);
        }
        var diff = DateNow - DateSave;
        var msec = diff;
        var ss = Math.floor(msec / 1000);
        console.log(ss);
        
        msec -= ss * 1000;

        var secondRemaining = pad(ss % 60);
        var minutesRamining = pad(parseInt(ss / 60) % 60);
        var hoursRemaining = pad(parseInt(ss / 3600) % 24);
        var daysRamaining = pad(parseInt(ss / 86400) );

        NewDaysLabel.innerHTML = daysRamaining;
        var HTMLDaysAfter = `
        <div class='block_after'></div>
        <span class='text_after'>Days</span>          
        `;
        NewDaysLabel.insertAdjacentHTML('beforeend', HTMLDaysAfter);

        NewHoursLabel.innerHTML = hoursRemaining;
        var HTMLHoursAfter = `
            <div class='block_after'></div>
            <span class='text_after'>Hours</span>          
        `;
        NewHoursLabel.insertAdjacentHTML('beforeend', HTMLHoursAfter);

        NewMinutesLabel.innerHTML = minutesRamining;
        var HTMLMinutesAfter = `
            <div class='block_after'></div>
            <span class='text_after'>Minutes</span>          
        `;
        NewMinutesLabel.insertAdjacentHTML('beforeend', HTMLMinutesAfter);

        NewSecondsLabel.innerHTML = secondRemaining;
        var HTMLSecondsAfter = `
            <div class='block_after'></div>
            <span class='text_after'>Seconds</span>          
        `;
        NewSecondsLabel.insertAdjacentHTML('beforeend', HTMLSecondsAfter);

    }


    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        }
        else {
            return valString;
        };
    }

    var TicTacToeGame = document.getElementById('tic_tac_toe');
    var HTMLGame = `
        <div id='game_container'>
            <span id='game'>This game can make you feel better ^^</span>
            <a target="_blank" href='./tic_tac_toe.html' id='link_game'>Tic Tac Toe</a>
        </div>
    `
    TicTacToeGame.insertAdjacentHTML('afterbegin', HTMLGame)
} else {
    SetUpDate()
}

var Back = document.getElementById('back');
Back.addEventListener('click', function () {
    localStorage.setItem('Flag', false);
    window.location = "./count_up.html"
})
