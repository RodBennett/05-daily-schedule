// Global variables
// let presentTime = parseInt(moment().format('H'))
// let hourCheck = time.indexOf(presentTime)
// const textArea = $('.textarea')
// let dataEntries = [ '#A', '#B', '#C', '#D', '#E', '#F', '#G', '#H', '#I']
let toDos = ['']

// // current date and time
var today = moment().format('[Today is ] MMM Do, YYYY');
$("#currentDay").text(today)

// setting up different buttons to accept respective textareas and set to local storage
$(document).ready(function () {
$(".saveBtn").on("click", function () {
    var save = $(this).siblings('.textarea').val();
    var saveBtns =  $(this).parent().attr('id')
    localStorage.setItem(saveBtns, save)
})

// code to retrieve To Do entries (setItem / getItem)

    $('#9 .textarea').val(localStorage.getItem('9'))
    $('#10 .textarea').val(localStorage.getItem('10'))
    $('#11 .textarea').val(localStorage.getItem('11'))
    $('#12 .textarea').val(localStorage.getItem('12'))
    $('#13 .textarea').val(localStorage.getItem('13'))
    $('#14 .textarea').val(localStorage.getItem('14'))
    $('#15 .textarea').val(localStorage.getItem('15'))
    $('#16 .textarea').val(localStorage.getItem('16'))
    $('#17 .textarea').val(localStorage.getItem('17'))
})
    // code to clear data from To Do rows
$('.clear-button').on('click', function() {
    localStorage.clear()
})

// code to change color scheme according to the day


