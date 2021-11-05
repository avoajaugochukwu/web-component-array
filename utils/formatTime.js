const formatTime = (clientDate) => {
  var date = new Date(clientDate);
  var month = date.getMonth();
  var day = date.getDate();
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  var timeZone = date.getTimezoneOffset() / -60;
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  timeZone = timeZone < 0 ? `GMT- ${timeZone}` : `GMT+ ${timeZone}`;

  var strTime = `${year}-${month}-${day} ${hours}:${minutes}${ampm} ${timeZone}`;
  return strTime;
};

export default formatTime;
