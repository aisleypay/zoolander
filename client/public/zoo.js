$(document).ready(function(){
  getAPI()
})

function getAPI(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/zoos',
    contentType: 'application/json',
    dataType: 'json',
    success: function(data){
      var html = "<div class=\"results\">"
    $.each(data, function(index, zoo) {
      var individual = "<div class=\"row-md-4\">"
      individual += "<div class=\"col-md-4 zoo\">"
      individual += `<h2>${zoo.name}</h2>`
      individual += `<p><strong>State:</strong> ${zoo.state}</p>`
      individual += `<p><strong>Facility Type:</strong> ${zoo.facility}</p>`
      individual += `<p><strong>Address:</strong> ${zoo.address}</p>`
      individual += "</div>"
      individual += "</div>"
      html += individual
    })
    html += "</div>"
    $("#zoos").html(html)
    zooLocations()
    }
  })
}

$('#form').submit(function(event){
  event.preventDefault()
  var name = $('#name').val()
  var state = $('#state').val()
  var facility = $('#facility').val()
  var address = $('#address').val()
  var values = `{"name": "${name}", "state": "${state}", "facility": "${facility}", "address": "${address}"}`
  $('#form').trigger('reset')
  fetchJSON(values)
})

function fetchJSON(values){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/zoos',
    contentType: 'application/json',
    dataType: 'json',
    data: values,
    success: function(data) {
      addZoosToDom(data)
      zooLocations()
    }
  })
}

function addZoosToDom(data){
  $('.results').append(formatZoos(data))
}

function formatZoos(data){
    var html = "<div class=\"row\">"
    html += "<div class=\"col-md-4 zoo\">"
    html += `<h2>${data.name}</h2>`
    html += `<p><strong>State:</strong> ${data.state}</p>`
    html += `<p><strong>Facility Type:</strong> ${data.facility}</p>`
    html += `<p><strong>Address:</strong> ${data.address}</p>`
    html += "</div>"
    html += "</div>"
    return html
}

function zooLocations(){
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/api/v1/zoos',
    contentType: 'application/json',
    dataType: 'json',
    success: function(zoos) {
      var marker = "&markers=color:blue"
      var marklist = zoos.map(function(zoo) {
        return `%7C${zoo.latitude}, ${zoo.longitude}`
      })

      var coordinates = marklist.join("|")
      var api = "&key=AIzaSyDrqVfE1a10Yt0yZGSlgUh5EKCtTqI9-2Q"
      var url = $('#googlemap')[0].src.concat(marker).concat(coordinates).concat(api)

      $('#googlemap').attr("src", url)
    }
  })
}
