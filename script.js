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


function appendData(locations) {
  console.log(locations)
  let placeArray = []
  // let locationArray = []
  locations.forEach(location => {
    // console.log(location)
    let locationArray = location.properties.place.split('of')
    placeArray.push(locationArray[1])
    console.log(locationArray[1])
    // let locations = features.properties.place
    // console.log(location.properties.place)
  })
  // console.log(placeArray)
}

