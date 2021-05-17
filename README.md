# Project Overview

## Earthquake Analysis Application
Deployed URL [Goes Here]

## Project Description
User will be able to search earthquake data from across the world for the past day.  User will be able to look up datatypes such as magnitude, location, time and if a tsunami was associated with it.

## API and Data Sample
I am using the USGS Earthquake API.  
API Link: [USGS API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

API Documentation Link: [Documentation](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## Code Snippet
```json
{
            "type": "Feature",
            "properties": {
                "mag": 3.6,
                "place": "7km SE of Dollar Point, CA",
                "time": 1621279480360,
                "updated": 1621280017707,
                "tz": null,
                "url": "https://earthquake.usgs.gov/earthquakes/eventpage/nc73563860",
                "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/nc73563860.geojson",
                "felt": 64,
                "cdi": 4.6,
                "mmi": 3.215,
                "alert": null,
                "status": "reviewed",
                "tsunami": 0,
                "sig": 229,
                "net": "nc",
                "code": "73563860",
                "ids": ",nc73563860,nn00807449,",
                "sources": ",nc,nn,",
                "types": ",dyfi,focal-mechanism,nearby-cities,origin,phase-data,scitech-link,shakemap,",
                "nst": 77,
                "dmin": 0.09402,
                "rms": 0.57,
                "gap": 57,
                "magType": "ml",
                "type": "earthquake",
                "title": "M 3.6 - 7km SE of Dollar Point, CA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -120.0414963,
                    39.1403351,
                    -1.96
                ]
            },
            "id": "nc73563860"
        },
```
## Wireframes
Link to wireframe…Shows proposed user interface page
[Wireframe Model](https://imgur.com/x1icC5T)

## MVP
1. Choose filtering by Location, Magnitude, Time or Tsunami from individual dropdown menus
2. Render data for each dropdown menu in the results list
3. Create button to refresh page
4. Add background image to the page

## PostMVP
1. Add second API showing image of country where earthquake took place
2. Render Earthquake API data onto a map

## Project Schedule
|   Day   |   Deliverable   |   Status   |
|---------|-----------------|------------|
| May 14-16 | Prompt / Wireframes / Priority Matrix / Timeframes| Complete |
| May 17 | Project Approval / Initial Application Structure / Pseudocode / Basic HTML Boilerplate | Incomplete |
| May 18 | Core Appliction functionality | Incomplete |
| May 19 | Initial Clickable Model / MVP | Incomplete |
| May 20 | CSS / Post MVP buildout | Incomplete |
| May 21 | Presentation of Project | Incomplete |

## Priority Matrix
Direct Link to Priority Matrix... [Priority Matrix Model](https://imgur.com/nz2TuhJ)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
|-----------|----------|----------------|---------------|-------------|
| Build out Pre-Project Approval Materials | H | 3hrs | 3hrs | 3hrs |
| Calling API | H | 3hrs | N/A | N/A | N/A |
| Filter Location Data Functionality | H | 2hrs | N/A | N/A |
| Filter MagnitudeData Functionality | H | 2hrs | N/A | N/A |
| Filter Time Data Functionality | H | 2hrs | N/A | N/A |
| Filter Tsunami Data Functionality | H | 2hrs | N/A | N/A |
| Appending Earthquake Results by Location | H | 2hrs | N/A | N/A |
| Appending Earthquake Results by Magnitude| H | 2hrs | N/A | N/A |
| Appending Earthquake Results by Time | H | 2hrs | N/A | N/A |
| Appending Earthquake Results by Tsunami | H | 2hrs | N/A | N/A |
| Add Background Image | M | 1hrs | N/A | N/A |
| Test/Refactor Code | M | 3hrs | N/A | N/A |
| CSS for Dropdown Menus | L | 3hrs | N/A | N/A |
| CSS for Results List | L | 3hrs | N/A | N/A |
| CSS Responsive Design | L | 3hrs | N/A | N/A |
| TOTAL HOURS | H | 35hrs | N/A| 3hrs | 3hrs |

## Code Snippet

## Change Log
