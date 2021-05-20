const input = document.querySelector('input')
const button = document.querySelector('button')
const locationForm = document.querySelector('#location-form')
const magnitudeForm = document.querySelector('#magnitude-form')
const typeForm = document.querySelector('#type-form')
let featuresArray = []

const locationSearch = async () => { 
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    const data = response.data.features
    featuresArray = data
    appendLocationData(data)
    // appendMagnitudeData(data)
    appendTypeData(data)
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
  const locationInput = document.querySelector('#location-input')
  const featuresByLocation = featuresArray.filter( feature => {
    const placesArray = feature.properties.place.split('of')
      return placesArray[1] === locationInput.value
  })
  displayDataByLocation(featuresByLocation)
})

function appendMagnitudeData() {
  const uniqueMagnitudes = []           
  const dataList = document.querySelector('#select-magnitude')
  featuresArray.forEach(feature => {         
    let magnitude = feature.properties.mag
    uniqueMagnitudes.push(magnitude)
  })

  uniqueMagnitudes.forEach(magnitude => {        
    const optionTag = document.createElement('option')
    optionTag.setAttribute('value', magnitude)
    dataList.appendChild(optionTag)
  })
}

function displayDataByMagnitude(filteredFeatures) {
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
    const maxInput = document.querySelector('#max')
    const minInput = document.querySelector('#min')
    const featuresByMaxMagnitude = featuresArray.filter(feature => parseInt(maxInput.value) >= feature.properties.mag)
    const featuresByMinMagnitude = featuresArray.filter(feature => parseInt(minInput.value) <= feature.properties.mag)

    displayDataByMagnitude(featuresByMaxMagnitude)
    displayDataByMagnitude(featuresByMinMagnitude)
  })

  function appendTypeData(features) {
    // console.log(features)
    const uniqueTypes = []            
    const dataList = document.querySelector('#select-type')
    features.forEach(feature => {
      let typeString = feature.properties.type
      // console.log(typeString)
      if (!uniqueTypes.includes(typeString))    uniqueTypes.push(typeString)   
    })
    uniqueTypes.forEach(type => {        
      const optionTag = document.createElement('option')
      optionTag.setAttribute('value', type)
      dataList.appendChild(optionTag)
    })
  }

  function displayDataByType(filteredFeatures) {
    const dataContainer = document.querySelector('.data-container')
    filteredFeatures.forEach( feature => {
      const time = feature.properties.time
      const distanceFrom = feature.properties.place
      const latitude = feature.geometry.coordinates[1]
      const longitude = feature.geometry.coordinates[0]
      const depth = feature.geometry.coordinates[2]
      const magnitude = feature.properties.mag
      const felt = feature.properties.felt
      const tsunami = feature.properties.tsunami
      const featureTemplate = `
      <div class="tsunami">
        <p>Tsunami Associated: ${tsunami}</p>
      </div>
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
      </div>
      `
      dataContainer.insertAdjacentHTML('beforeend', featureTemplate)
    })
  }

  typeForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const typeInput = document.querySelector('#type-input')
    const featuresByType = featuresArray.filter( feature => {
      const typeString = feature.properties.type
        return typeString === typeInput.value
    })
    displayDataByType(featuresByType)
  })