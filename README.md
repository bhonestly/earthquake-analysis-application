# Project Overview

## Earthquake Analysis Application

Deployed URL [Goes Here]

## Project Description

User will be able to search earthquake data from across the world for the past day.  User will be able to look up datatypes such as magnitude, location, time and if a tsunami was associated with it.

## API and Data Sample

I am using the USGS Earthquake API.  
Link here… [title](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/)

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
[title](https://imgur.com/x1icC5T)

## MVP

1. Choose items from dropdown menu
2. Render data for each dropdown menu in the results list
3. Create button to refresh page
4. Add background image to the page

## PostMVP

1. Add second API showing image of country where earthquake took place
2. Render Earthquake API data onto a map

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.
You are responsible for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding Saturday and Sunday.
|   Day   |   Deliverable   |   Status   |
|---------|-----------------|------------|
| May 14-16 | Prompt / Wireframes / Priority Matrix / Timeframes| Complete |
| May 17 | Project Approval / Initial Application Structure / Pseudocode / Basic HTML Boilerplate | Incomplete |
| May 18 | Core Appliction functionality | Incomplete |
| May 19 | Initial Clickable Model / MVP | Incomplete |
| May 20 | CSS / Post MVP buildout | Incomplete |
| May 21 | Presentation of Project | Incomplete |


## Priority Matrix
Include a full list of features that have been prioritized based on the Time and Importance Matrix. Link this image in a similar manner to your wireframes

## Timeframes
Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.
Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.


## Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of and a brief description.
function reverse(string) {
	// here is the code to reverse a string of text
}

## Change Log
Use this section to document what changes were made and the reasoning behind those changes.
