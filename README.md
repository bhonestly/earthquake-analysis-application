# Project Overview

## Earthquake Analysis Application
Deployed URL [Goes Here]

## Project Description
User will be able to search earthquake data from across the world for the past day.  User will be able to look up datatypes such as magnitude, location, time and if a tsunami was associated with it.

## API and Data Sample
I am using the USGS Earthquake API.  
API Link: [USGS API](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/)

API Documentation Link: [Documentation](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

## Code Snippet
```
1.0_day.geojson
JSON Snippet
	{
	type: "Feature",
	properties: {
	mag: 3.3,
	place: "5 km SSW of L'Épiphanie, Canada",
	time: 1621249402287,
	updated: 1621251663818,
	tz: null,
	url: "https://earthquake.usgs.gov/earthquakes/eventpage/us7000e3rp",
	detail: "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us7000e3rp.geojson",
	felt: 117,
	cdi: 3.8,
	mmi: null,
	alert: null,
	status: "reviewed",
	tsunami: 0,
	sig: 212,
	net: "us",
	code: "7000e3rp",
	ids: ",us7000e3rp,",
	sources: ",us,",
	types: ",dyfi,origin,phase-data,",
	nst: null,
	dmin: 0.315,
	rms: 0.62,
	gap: 84,
	magType: "mb_lg",
	type: "earthquake",
	title: "M 3.3 - 5 km SSW of L'Épiphanie, Canada"
	},
	geometry: {
	type: "Point",
	coordinates: [
	-73.5106,
	45.806,
	5
	]
	},
	id: "us7000e3rp"
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
Direct Link to Priority Matrix... [Priority Matrix Model](https://imgur.com/z1cD0Gt)

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
|-----------|----------|----------------|---------------|-------------|
| Build out Pre-Project Approval Materials | H | 1hrs | 3hrs | 3hrs |
| Calling API | H | 3hrs | N/A | N/A | N/A |
| Create Dropdown Menus | H | 2hrs | N/A | N/A |
| Create form for Menu Items 1-2 | H | 3hrs | N/A | N/A |
| Create form for Menu Items 3-4 | H | 2hrs | N/A | N/A |
| Render Menu for Menu Items 1-2 | H | 3hrs | N/A | N/A |
| Render Menu for Menu Items 3-4 | H | 2hrs | N/A | N/A |
| Add Background Image | M | 1hrs | N/A | N/A |
| Test/Refactor Code | M | 3hrs | N/A | N/A |
| CSS Buildout | L | 3hrs | N/A | N/A |
| TOTAL HOURS | H | N/A | 21hrs | 3hrs | 3hrs |

## Code Snippet

## Change Log
