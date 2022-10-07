import $ from 'jquery'; 

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

$(document).ready(function() {
    $(function() {
    
    var SToday = new Date();

    var month = SToday.getMonth() +1;
    var day = SToday.getDate();
    var year = SToday.getFullYear();
    if(month < 10)
        month = '0' + month.toString();
    if(day < 10)
        day = '0' + day.toString();

    var maxDate = year + '-' + month + '-' + day;

    $('#dateControl').attr('min', maxDate);
});
})
