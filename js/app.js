const $main = $('main')
const $selector = $('#image-selector')
const allHorns = []
const allKeywords= []

const apiURL = 'https://raw.githubusercontent.com/EyasuG/lab-02-repository/master/data/page-1.json' 

const Horn = function(title, path, description, keyword) {
  this.title = title
  this.path = path
  this.description = description
  this.keyword=keyword
}
Horn.prototype.displayHorn = function() {
  const $cloneHorn= $('#template').clone()
  $main.append($cloneHorn)
  $cloneHorn.attr('class', this.title)
  $cloneHorn.find('img').attr('class', 'images')
  $cloneHorn.find('img').attr('src', this.path)
  $cloneHorn.find('img').attr('alt', this.description)
  $cloneHorn.find('h6').text(this.title)
}
$($selector).on('change', () => {
  $('div').hide()
  $(`.${event.target.value}`).show()
})

$.getJSON(apiURL)
.then(response=> {
  response.forEach(horn=>{
    let newHorn = new Horn(horn.title, horn.image_url, horn.description, horn.keyword) 
    newHorn.displayHorn()
    allHorns.push(newHorn)
    $selector.append(`<option value=${newHorn.title}>${newHorn.title}</option>`)
    })
//     console.log($(`option[value='UniWhal']`))
// if($(`option[value= 'horn']`[0])){
//   console.log('nope')
//   }
})


