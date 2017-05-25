$(document).ready(function(){
  getAPI()
})

function getAPI(){
  Zoo.all(ZooView.render)
  Zoo.all(Zoo.refreshMap)
}

$('#form').submit(function(event){
  event.preventDefault()
  var name = $('#name').val()
  var state = $('#state').val()
  var facility = $('#facility').val()
  var address = $('#address').val()
  var values = `{"name": "${name}", "state": "${state}", "facility": "${facility}", "address": "${address}"}`
  $('#form').trigger('reset')
  
  newZoo(values)
})

function newZoo(values){
  Zoo.addZoo(values)
}
