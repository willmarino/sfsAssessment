import $ from 'jquery';

export const reqCreditorInfo = () => (
  $.ajax({
    method: "GET",
    url: 'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
  })
)