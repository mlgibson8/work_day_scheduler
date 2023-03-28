
$(document).ready(function () {
    let NowMoment = dayjs().format('MMMM-DD-YYYY:  hh:mm:ss A');
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
   
    $(".time-div").each(function () {
        var timeDiv = $(this).attr("id").split("-")[1];
        if(currentHour === timeDiv) { 
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present"); 
        }
        else if (currentHour > timeDiv) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
       else if (currentHour < timeDiv) {
            $(this).removeClass("past");
            $(this).removeClass("present");
         $(this).addClass("future");
         }

    }) 


      $(".saveBtn").click(function (event) {
        event.preventDefault();
        var value = $(this).siblings(".time-block").val();
        var time = $(this).parent().attr("id").split("-")[1];
        localStorage.setItem(time, value);
      });


    $("#hour-08 .time-block").val(localStorage.getItem("08"));
    $("#hour-09 .time-block").val(localStorage.getItem("09"));
    $("#hour-10 .time-block").val(localStorage.getItem("10"));
    $("#hour-11 .time-block").val(localStorage.getItem("11"));
    $("#hour-12 .time-block").val(localStorage.getItem("12"));
    $("#hour-13 .time-block").val(localStorage.getItem("13"));
    $("#hour-14 .time-block").val(localStorage.getItem("14"));
    $("#hour-15 .time-block").val(localStorage.getItem("15"));
    $("#hour-16 .time-block").val(localStorage.getItem("16")); 
    $("#hour-17 .time-block").val(localStorage.getItem("17")); 
    $("#hour-18 .time-block").val(localStorage.getItem("18"));
});