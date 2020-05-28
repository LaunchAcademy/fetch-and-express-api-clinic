# Setup

```
yarn install
yarn run dev
```

# Goals
1. The index page should display every location (city and country) on our wishlist (`locations.json`)
2. The index page should also have a form that allows the user to add a new location to our `locations.json` file

## Explanation of provided code UPDATE NEEDED

#### `app.js`
```js
    def write_to_json_file(location)
      # Read from our json file and turn it into an array of hashes
      file = File.read("locations.json")
      locations_array = JSON.parse(file)

      # Figure out what the id of the new location should be
      new_location_id = locations_array["locations"].last["id"] + 1

      # Make a new location using the input to this method and new_location_id
      new_location = {
        id: new_location_id,
        city: location["city"],
        country: location["country"]
      }

      # Add our new location onto the end of the locations array and save as new array
      updated_locations = {
        locations: locations_array["locations"].concat([new_location])
      }

      # Save updated_locations in JSON format

      # Either of these next two lines will work: pretty_generate just gives us line
      # breaks and indentation in our .json file (making it easier on the eyes)

      updated_locations_json = updated_locations.to_json
      # updated_locations_json = JSON.pretty_generate(updated_locations, indent: ' ')

      File.write("locations.json", updated_locations_json)
    end
```
#### `client.js`
```js
  let appendLocationsArrayToHtml = (locations) => {
    // Grab element with id of locations from HTML
    let locationList = document.getElementById('locations')

    // for each location (from the input to this function), append a <li> to the
    // locationList element, containing the city and country names
    locations.forEach(location => {
      locationList.innerHTML += `<li>${location.city}, ${location.country}</li>`
    })
  }

  let fetchLocations = () => {
    # Your code here
  }

  let postLocation = (event) => {
    # Your code here
  }

  // runs automatically on page load
  fetchLocations()

  // add an event listener that will call postLocation to the submit button
  document
    .getElementById('new-location-submit-button')
    .addEventListener('click', postLocation)
```
