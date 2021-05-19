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

// grabbing item value using filter method


// let locations = []
// function filterLocations(locations, ', ') {
//   return arr.filter(function(el))
// }
// console.log(locations)


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


locationForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(featuresArray)
})