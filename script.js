const input = document.querySelector('input')
const button = document.querySelector('button')
const locationContainer = document.querySelector('.location-list')

const locationSearch = async () => { 
  // const url = `${DOMAIN}`
  try {
    const response = await axios.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson')
    const data = response.data.features
    // console.log(data)
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


function appendData(locations) {
  console.log(locations)
  let placeArray = []
  const dataList = document.querySelector('#select-location')
  console.log(dataList)
  locations.forEach(location => {
    // console.log(location)
    let locationArray = location.properties.place.split('of')
    placeArray.push(locationArray[1])
    console.log(locationArray[1])
    const optionTag = document.createElement('option')
    optionTag.setAttribute('value', locationArray[1])
    dataList.appendChild(optionTag)
    // let locations = features.properties.place
    // console.log(location.properties.place)
  })
  // console.log(placeArray)
}