const $main = $('main')
const $selector = $('#image-selector')
const allHorns = []
const allKeywords= []

const apiURL = 'https://raw.githubusercontent.com/EyasuG/lab-02-repository/master/data/page-1.json' 

const Horn = function(title, filePath, description, keyword) {
  this.title = title
  this.path = filePath
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
    let newHorn = new Horn(horn.title,horn.filepath, horn.description, horn.keyword) 
    newHorn.displayHorn()
    allHorns.push(newHorn)
    $selector.append(`<option value=${newHorn.title}>${newHorn.title}</option>`)
    })
    console.log($(`option[value='narwhal']`))
if($(`option[value= 'horn']`[0])){
  console.log('nope')
  }
})







 //$.getJSON(apiURL)
//   .then(response => {
//     response.forEach(dog => {
//       let newDog = new Dog(dog.name, dog.image_url, dog.hobbies)
//       newDog.displayDog()
//       allDogs.push(newDog)
//       $selector.append(`<option value=${newDog.title}>${newDog.title}</option>`)
//     })
//     console.log($(`option[value='Odie']`))
//     if($(`option[value='dog']`[0])) {
//       console.log('nope')
//     }
//   })





