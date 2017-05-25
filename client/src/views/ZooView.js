class ZooView {
  constructor(name, state, facility, address) {
    this.name = name
    this.state = state
    this.facility = facility
    this.address = address
  }

  static render(response) {
    var html = "<div class=\"results\">"

  $.each(response, function(index, zoo) {
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
  }

  static addZoosToDom(data){
    $('.results').append(ZooView.formatZoos(data))
  }

  static formatZoos(data){
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

}
