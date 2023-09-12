# USGS Earthquake Visualization

## Introduction

This repository presents an interactive visualization of earthquake data provided by the United States Geological Survey (USGS). The USGS collects and updates earthquake data regularly to monitor seismic activity worldwide. This project aims to create a meaningful and informative visualization of this data to better educate the public and government organizations about the Earth's seismic events.

## Data Source

The earthquake data used in this visualization is sourced from the USGS GeoJSON Feed. The USGS provides earthquake data in various formats, updated every 5 minutes. For this project, the dataset "All Earthquakes from the Past 7 Days" was chosen. The data is retrieved in JSON format and used for the visualization.

## Visualization Features

The earthquake visualization includes the following key features:

- **Mapping with Leaflet:** Utilizing the Leaflet library, a dynamic map is created to plot earthquake locations based on their latitude and longitude.

- **Magnitude-Based Markers:** Earthquake markers on the map vary in size based on the earthquake's magnitude. Larger markers represent earthquakes with higher magnitudes.

- **Depth-Based Coloring:** The color of the earthquake markers reflects the depth of the seismic event. Earthquakes with greater depths appear darker in color.

- **Popup Information:** Clicking on an earthquake marker displays a popup with additional information about that specific earthquake, including its magnitude, depth, and location.

- **Legend:** A legend is provided to help users understand the relationship between marker size, color, and earthquake properties.

![image](https://github.com/nancygmz/leaflet-challenge/blob/main/Leaflet-Part-1/Images/Screenshot%202023-09-11%20200202.png).
## Findings

This visualization project allows users to explore earthquake data visually, providing insights into the distribution, magnitude, and depth of recent seismic events. By effectively representing this data on a map, it serves as a valuable educational tool for understanding Earth's dynamic processes.

## Conclusion

This project contributes to the USGS's efforts to better communicate vital earthquake data to the public and government organizations. The visualization enhances understanding and awareness of seismic activity, ultimately contributing to informed decision-making.
