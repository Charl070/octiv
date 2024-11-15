# Places Viewer Web App

A React application to display places in both a table and map view, with search, filtering, and detailed place information. This app uses Mapbox for map rendering and supports custom category icons on map markers.

---

## Features

- **Map View**: View places on an interactive map with category-specific icons.
- **Table View**: Paginated table for viewing places with detailed information.
- **Search Functionality**: Search places by name in both views.
- **Theme Switching**: Light and dark mode themes for a personalized experience.
- **Responsive Design**: Works seamlessly across different devices.
- **API Integration**: Fetches data from a mock API.

---

## Prerequisites

Before running the app, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)

---

## Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/places-viewer.git
   cd places-viewer
2. Install dependencies
   ```bash
   npm install

3. Set Environment Variables Create a .env file in the root of the project and add the following variables:

REACT_APP_MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoiY2hhcmwwNzAiLCJhIjoiY20zZGQ0d3Y3MDFtZDJqczhzZm5nb3A2ZCJ9.eIHZOu2N8vPRBVxUm98ZGw
REACT_APP_EMOJI_API_KEY=5dce1cd4a4711ee85619fac1611491436733784b

4. Run the App

   ```bash
     npm start
