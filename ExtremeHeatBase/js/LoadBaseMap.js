//********************************************************
// Author: Tom Lavery, devPuppy Simulations Inc.
//********************************************************

var map = L.map('map').setView([52.5, -124], 6);

//the initial basemap is set to the ESRI 'Gray' basemap which does not have any labels by default
var shadedReliefBase = L.esri.basemapLayer('ShadedRelief').addTo(map);
//add the labels after the basemap is added so the labels show up on top
var shadedRelief = L.esri.basemapLayer('ShadedReliefLabels').addTo(map);