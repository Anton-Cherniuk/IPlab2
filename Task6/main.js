function formatDate(str){
  var date = str.match(/\d+/g),
  year = date[0], 
  month = date[1],
  day = date[2];

  return day+'.'+month+'.'+year;
}

alert(formatDate("2021/2/1"));