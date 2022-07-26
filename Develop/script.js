// Global variables
const timesClasses = ['9', '10', '11', '12', '13', '14', '15', '16', '17']
const saveButtonEl = $('.saveBtn')
let checkTime = parseInt(moment().format('H'))
const textArea = $('.textarea')
let dataEntries = [ '#A', '#B', '#C', '#D', '#E', '#F', '#G', '#H', '#I']
let toDos = ['', '', '', '', '', '', '', '', '', '']

// // current date and time
var today = moment().format('[Today is ] MMM Do, YYYY');
$("#currentDay").text(today)

// setting up different buttons to accept respective textareas
$(document).ready(function() {
    $('.saveBtn').click(function() {
        $(this).siblings('.textarea').val()
        saveEntries()
    })
})

function saveEntries() {
    var saved = textArea.val()
    localStorage.setItem.json.stringify('saved', )
}

// code to change color scheme according to the day

// if (checkTime > 17) {
//     for (let index = 0; index <timesClasses.length; index++) {
//          $(`${timesClasses[i]}`)
//     $('.textarea').addClass('past')
//     }
// } else if (checkTime < 9) {
//     $(`${timesClasses[i]}`)
//     $('.textarea').addCLass('future')
//     console.log(timesClasses)
// }
// } else {
//     checkThisHour()
// }

// function checkThisHour() {
// let thisTime = timeClasses.entry
// for (let index = 0; index < timeClasses.length; index++) {
//     if (checkTime == thisTime) {
//             $('.textarea').addClass('present')
//     }
//    }
//  }

// code to store save and retirve To Do entries (setItem / getItem)

// allBtns.addEventListener('click', function() {
//     var 
    
//     localStorage.setItem('A', 'value')
// })
