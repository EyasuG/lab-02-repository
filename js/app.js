const $main = $('main')
const $selector = $('#image-selector')
const allHorns = []

const apiURL = 'https://raw.githubusercontent.com/Eyasu/lab/master/data/page-1.json' 

const Horn = function(title, filePath, description, keyword) {
  this.title = title
  this.path = filePath
  this.description = description
  this.keyword=keyword
}

Horn.prototype.displayHorn = function() {
  const $cloneHorn= $('#template').clone()
  $main.append($cloneHorn)
  $cloneHorn.attr('id', this.title)
  $cloneHorn.find('img').attr('class', 'images')
  $cloneHorn.find('img').attr('src', this.path)
  $cloneHorn.find('img').attr('alt', this.description)
  $cloneHorn.find('h6').text(this.title)
}
$($selector).on('change', () => {
  $('div').hide()
  $(`#${event.target.value}`).show()
})
$.getJSON(apiURL)
.then(response=>{
  response.forEach(image=>{
    let Horn_collection=new Horn(image.title,image.filepath, image.description, image.keyword) 
    Horn_collection.displayimage()
    allHorns.push(Horn_collection)
    $selector.append(`<option value=${Horn_collection.title}>${Horn_collection.title}</option>`)
    })
    console.log($(`option[value='']`))
if($(`option[value= '']`[0])){
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





