
function happyHolidays(){
  return 'Happy holidays!'
}


function happyHolidaysTo(name){
  return 'Happy holidays, ${name}!'
}



function happyHolidaysTo(holiday, name){
  return 'Happy ${holiday}, ${name}!'
}
happyHolidaysTo("Independence Day", "you")


function holidayCountdown(days, holiday){
  return 'It\'s ${days} days until ${holiday}!'
}
holidayCountdown(20, "Mother's Day")