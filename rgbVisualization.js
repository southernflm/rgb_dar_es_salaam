// Title: RGB Visualisations of DSM using Earth Engine Strings

// Load Landsat 8 Surface Reflectance Tier 1

var landsatImage = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2');
// Define Area of Interest (AOI): Dar es Salaam

var pointDAR = ee.Geometry.Point([39.19, -6.78]);
var darLandsat8 = landsatImage.filterBounds(pointDAR).sort('CLOUD_COVER').filterDate('2020-01-01', '2024-12-31').first();
print(darLandsat8);

// Centering Map to the AOI (Dar es Salaam)
Map.centerObject(darLandsat8, 8);

// Natural Color Visualization
Map.addLayer(darLandsat8,
{
bands: ['SR_B4', 'SR_B3', 'SR_B2'],
min: 5000,
max: 15000
},
'Natural Landsat 8');

// NIR Composite
Map.addLayer(darLandsat8,
{
bands: ['SR_B5', 'SR_B4', 'SR_B2'],
min: 5000,
max: 15000
},
'NIR Landsat 8');

// SWIR Composite

Map.addLayer(darLandsat8,
{
bands: ['SR_B6', 'SR_B5', 'SR_B2'],
min: 5000,
max: 15000
},
'SWIR Landsat 8');