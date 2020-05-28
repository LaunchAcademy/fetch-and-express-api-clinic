let appendLocationsArrayToHtml = (locations) => {
  let locationList = document.getElementById('locations')

  locations.forEach(location => {
    locationList.innerHTML += `<li>${location.city}, ${location.country}</li>`
  })
}

let fetchLocations = () => {
  // our code here
}

let postLocation = (event) => {
  // ooooh what does this all do?
  // event.preventDefault()

  // let cityInputField = document.getElementById('city')
  // let countryInputField = document.getElementById('country')
  //
  // let newLocation = {
  //   location: {
  //     city: cityInputField.value,
  //     country: countryInputField.value
  //   }
  // }

  // fetch code HERE


 }

console.log("running JS code ")
fetchLocations()
console.log("Fetch complete")

document
  .getElementById('new-location-submit-button')
  .addEventListener('click', postLocation)
