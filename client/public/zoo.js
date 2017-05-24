$(document).ready(function(){
  getAPI()
  $('#form').submit(function(event){
    event.preventDefault()
    var name = $('#name').val()
    var state = $('#state').val()
    var facility = $('#facility').val()
    var values = `{"name": "${name}", "state": "${state}", "facility": "${facility}"}`
    $('#form').trigger('reset')
    fetchJSON(values)
  })
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
      var individual = "<div class=\"row\">"
      individual += "<div class=\"col-md-4 zoo\">"
      individual += `<h2>${zoo.name}</h2>`
      individual += `<p><strong>State:</strong> ${zoo.state}</p>`
      individual += `<p><strong>Facility Type:</strong> ${zoo.facility}</p>`
      individual += "</div>"
      individual += "</div>"
      html += individual
    })
    html += "</div>"
    $("#zoos").html(html)
    }
  })
}

function fetchJSON(values){
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/api/v1/zoos',
    contentType: 'application/json',
    dataType: 'json',
    data: values,
    success: function(data) {addZoosToDom(data)}
  })
}

function addZoosToDom(data){
  $('#zoos').append(formatZoos(data))
}

function formatZoos(data){
    var html = "<div class=\"row\">"
    html += "<div class=\"col-md-4 zoo\">"
    html += `<h2>${data.name}</h2>`
    html += `<p><strong>State:</strong> ${data.state}</p>`
    html += `<p><strong>Facility Type:</strong> ${data.facility}</p>`
    html += "</div>"
    html += "</div>"
    return html
}
