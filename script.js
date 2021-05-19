const input = document.querySelector('input')
const button = document.querySelector('button')
const locationForm = document.querySelector('#location-form')
let featuresArray = []

const locationSearch = async () => { 
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    const data = response.data.features
    featuresArray = data
    appendData(data)
    return data
  } catch (error) {
    console.error(error)
  }
}
locationSearch()

function appendData(features) {
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
    const distanceFrom = feature.properties.place.split('of')[0]
    const longitude = feature.geometry.coordinates[0]
    const latitude = feature.geometry.coordinates[1]
    const depth = feature.geometry.coordinates[2]
    // console.log(longitude)
    const featureTemplate = `
    <div class="geometry">
      <p>Distance From: ${distanceFrom}</p>
      <p>Longitude: ${longitude}</p>
      <p>Latitude: ${latitude}</p>
      <p>Depth: ${depth}</p>
    </div>
    `
    dataContainer.insertAdjacentHTML('beforeend', featureTemplate)
  })
  // filteredFeatures.forEach(feature => {
  //   const locationGeometry = []
  //   console.log(locationGeometry)

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
