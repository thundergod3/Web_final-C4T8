var block1 = document.getElementsByClassName('block1');
var count = -1;

function PrintXorO(count, e_target_html) {
    if (e_target_html == '') {
        if (count % 2 == 0) {
            return 'X'
        } 
        else {
            return 'O'
        }
    } 
    else {
        return e_target_html
    }
}
var conditionWin = false
function win(a0,a1,a2) {
    if ( a0 == 'X' && a1 == 'X' && a2 == 'X') {
        conditionWin = true;
        var win = document.getElementById('winner');
        win.innerHTML = `<div id='block_winner'>X win</div>`
    }
    else if ( a0 == 'O' && a1 == 'O' && a2 == 'O') {
        conditionWin = true;
        var win = document.getElementById('winner');
        win.innerHTML = `<div id='block_winner'>O win</div>`
    }
    else if ( count > 7) {
        conditionWin = true;
        var win = document.getElementById('winner');
        win.innerHTML = `<div id='block_winner'>Draw</div>`
    }
}


for(var i = 0; i < block1.length; i++) {
    block1[i].addEventListener('click', function(e) { 
        if( conditionWin == false) {
            count++;            
            e.target.innerHTML = PrintXorO(count, e.target.innerHTML);
            win(block1[0].innerHTML, block1[1].innerHTML, block1[2].innerHTML)
            win(block1[0].innerHTML, block1[3].innerHTML, block1[6].innerHTML)
            win(block1[0].innerHTML, block1[4].innerHTML, block1[8].innerHTML)
            win(block1[1].innerHTML, block1[4].innerHTML, block1[7].innerHTML)
            win(block1[2].innerHTML, block1[5].innerHTML, block1[8].innerHTML)
            win(block1[2].innerHTML, block1[4].innerHTML, block1[6].innerHTML)
            win(block1[3].innerHTML, block1[4].innerHTML, block1[5].innerHTML)
            win(block1[6].innerHTML, block1[7].innerHTML, block1[8].innerHTML)
        }
    })
}

var Back = document.getElementById('back');
Back.addEventListener('click', function () {
    localStorage.setItem('Flag', false);
    window.location = "./tic_tac_toe.html"
})

 