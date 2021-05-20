const input = document.querySelector('input')
const button = document.querySelector('button')
const locationForm = document.querySelector('#location-form')
const magnitudeForm = document.querySelector('#magnitude-form')
let featuresArray = []

const locationSearch = async () => { 
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    const data = response.data.features
    featuresArray = data
    appendLocationData(data)
    // appendMagnitudeData(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
locationSearch()

function appendLocationData(features) {
  const uniqueLocations = []            // this empty array will hold unique locations after the features forEach runs
  const dataList = document.querySelector('#select-location')
  features.forEach(feature => {         // for each item in the API response array we are grabbing the location.
    let placesArray = feature.properties.place.split('of')
    if (!uniqueLocations.includes(placesArray[1]))    uniqueLocations.push(placesArray[1])    // for each item in the API response array we are checking if the location is included in the uniqueLocations array.  If it is not in the uniqueLocations array we are pushing the location into that array.
  })
  uniqueLocations.forEach(location => {        // for each location in the uniqueLocations array we are creating an option tag, setting the value attribute of the option tag to the location value and appending the option tag to the DOM
    const optionTag = document.createElement('option')
    optionTag.setAttribute('value', location)
    dataList.appendChild(optionTag)
  })
}

function displayDataByLocation(filteredFeatures) {
// display the following data.  Under geometry.coordinates 0:latitude 1:longitude 2:depth, felt, mag, place(beginning of string), tsunami, time
  const dataContainer = document.querySelector('.data-container')
  filteredFeatures.forEach( feature => {
    const time = feature.properties.time
    const distanceFrom = feature.properties.place.split('of')[0]
    const latitude = feature.geometry.coordinates[1]
    const longitude = feature.geometry.coordinates[0]
    const depth = feature.geometry.coordinates[2]
    const magnitude = feature.properties.mag
    const felt = feature.properties.felt
    const tsunami = feature.properties.tsunami
    const featureTemplate = `
    <div class="time">
      <p>Time Happened: ${time}</p>
    </div>
    <div class="geometry">
    <p>Distance From: ${distanceFrom}</p>
    <p>Latitude: ${latitude}</p>
    <p>Longitude: ${longitude}</p>
      <p>Depth: ${depth} km</p>
    </div>
    <div class="outcome">
      <p>The Magnitude was: ${magnitude}</p>
      <p>Was Quake Felt: ${felt}</p>
      <p>Tsunami Associated: ${tsunami}</p>
    </div>
    `
    dataContainer.insertAdjacentHTML('beforeend', featureTemplate)
  })
}

locationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(featuresArray)
  const locationInput = document.querySelector('#location-input')
  console.log(locationInput.value)
  const featuresByLocation = featuresArray.filter( feature => {
    const placesArray = feature.properties.place.split('of')
      return placesArray[1] === locationInput.value
  })
  console.log(featuresByLocation)
  displayDataByLocation(featuresByLocation)
})

const magnitudeSearch = async () => { 
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    const data = response.data.features
    featuresArray = data
    appendMagnitudeData(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
// magnitudeSearch()

function appendMagnitudeData() {
  const uniqueMagnitudes = []            // this empty array will hold unique lmagnitude after the features forEach runs
  // console.log(featuresArray)
  const dataList = document.querySelector('#select-magnitude')
  featuresArray.forEach(feature => {         // for each item in the API response array we are grabbing the magnitude.
    // console.log(feature)
    let magnitude = feature.properties.mag/*.slice('')*/
    console.log(magnitude)
    // if (!uniqueMagnitude.includes(magArray[1])) 
    
    uniqueMagnitudes.push(magnitude)    // for each item in the API response array we are checking if the magnitude is included in the uniqueMagnitude array.  If it is not in the uniqueMagnitude array we are pushing the location into that array.
  })
  // console.log(uniqueMagnitudes)
  uniqueMagnitudes.forEach(magnitude => {        // for each magnitude in the uniqueMagnitude array we are creating an option tag, setting the value attribute of the option tag to the location value and appending the option tag to the DOM
    const optionTag = document.createElement('option')
    optionTag.setAttribute('value', magnitude)
    dataList.appendChild(optionTag)
  })
}

function displayDataByMagnitude(filteredFeatures) {
  // display the following data.  Under geometry.coordinates 0:latitude 1:longitude 2:depth, felt, place(entire string), tsunami, time
    const dataContainer = document.querySelector('.data-container')
    filteredFeatures.forEach( feature => {
      const time = feature.properties.time
      const location = feature.properties.place/*.split('of')[0]*/
      const latitude = feature.geometry.coordinates[1]
      const longitude = feature.geometry.coordinates[0]
      const depth = feature.geometry.coordinates[2]
      const magnitude = feature.properties.mag
      const felt = feature.properties.felt
      const tsunami = feature.properties.tsunami
      const featureTemplate = `
      <div class="time">
        <p>Time Happened: ${time}</p>
      </div>
      <div class="geometry">
      <p>Location: ${location}</p>
      <p>Latitude: ${latitude}</p>
      <p>Longitude: ${longitude}</p>
        <p>Depth: ${depth} km</p>
      </div>
      <div class="outcome">
        <p>Magnitude: ${magnitude}</p>
        <p>Was Quake Felt: ${felt}</p>
        <p>Tsunami Associated: ${tsunami}</p>
      </div>
      `
      dataContainer.insertAdjacentHTML('beforeend', featureTemplate)
    })
  }

  magnitudeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(featuresArray)
    const maxInput = document.querySelector('#max')
    const minInput = document.querySelector('#min')
    // console.log(parseInt(maxInput.value))
    const featuresByMaxMagnitude = featuresArray.filter(feature => parseInt(maxInput.value) >= feature.properties.mag)
    const featuresByMinMagnitude = featuresArray.filter(feature => parseInt(minInput.value) <= feature.properties.mag)
      // console.log(feature.properties.mag)
    
    // console.log(featuresByMinMagnitude)
    displayDataByMagnitude(featuresByMaxMagnitude)
    displayDataByMagnitude(featuresByMinMagnitude)
  })