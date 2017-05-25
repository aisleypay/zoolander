class Zoo {
  static all(callbackFn) {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/v1/zoos',
      contentType: 'application/json',
      dataType: 'json',
      success: function (response) {
        callbackFn(response)
      }
    })
  }

  static addZoo(values) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/v1/zoos',
      contentType: 'application/json',
      dataType: 'json',
      data: values,
      success: function(response) {
        ZooView.addZoosToDom(response)
        Zoo.all(Zoo.refreshMap)
      }
    })
  }

  static refreshMap(zoos) {
    var marker = "&markers=color:blue"
    var marklist = zoos.map(function(zoo) {
      return `%7C${zoo.latitude}, ${zoo.longitude}`
    })

    var coordinates = marklist.join("|")
    var api = "&key=AIzaSyDrqVfE1a10Yt0yZGSlgUh5EKCtTqI9-2Q"
    var url = $('#googlemap')[0].src.concat(marker).concat(coordinates).concat(api)

    $('#googlemap').attr("src", url)
  }
}
