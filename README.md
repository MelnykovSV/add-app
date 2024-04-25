## Live Version

Explore the live version of the Listings App: [Listings App](https://listings-app-rho.vercel.app/)

## Technologies Used

- React
- Emotion
- TypeScript
- React Hook Form
- Google Maps API

## Features

- **Interactive Map View**: The app provides an interactive map interface where users can visualize
  rental listings through markers placed on the map. This allows users to quickly identify listings
  based on their geographical location.
- **List View Sidebar**: In addition to the map view, the app also offers a list view sidebar. This
  sidebar displays a list of rental listings, providing users with an alternative way to browse and
  select listings.
- **Clickable Markers and Listing Cards**: Users can easily navigate through listings by clicking on
  either the markers on the map or the corresponding listing cards in the sidebar. This intuitive
  feature enhances user experience by allowing seamless interaction with the listings.
- **Search Functionality**: The app includes a search feature that enables users to search for
  listings by entering keywords related to the listing name or description. This helps users quickly
  find relevant listings based on their preferences.
- **Create Listing Form**: Users have the ability to create their own rental listings through a
  "Create Listing" button. The app presents a form with fields such as name, description, price,
  image, and address. All fields are necessary to ensure comprehensive information about the
  listing.
- **Address Input Options**: Users have flexibility in providing the address for their listing. They
  can either select the location directly on the map or utilize the Google Places autocomplete
  feature to find the address quickly and accurately.
- **Image Upload**: As part of the listing creation process, users can upload images to showcase
  their rental property. This visual representation enhances the attractiveness of the listing and
  helps potential renters make informed decisions.
- **Validation and Error Handling**: The app ensures data integrity and user experience by
  implementing validation for all required fields in the create listing form. Additionally, it
  provides clear error messages to guide users in case of missing or incorrect information.
- **Responsive Design**: The app is designed to be responsive, adapting seamlessly to various screen
  sizes and devices. Whether accessed on a desktop computer, tablet, or smartphone, users can enjoy
  a consistent and optimized experience.

## Getting Started

To get started with the Listings App, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/MelnykovSV/listings-app.git
```

2. Install dependencies using npm:

```bash
npm install

```

3. Start the development server:

```bash
npm run dev

```

4. Include the .env file in the root directory with the following contents:

   VITE_APP_GOOGLE_MAPS_KEY = YourValidGoogleMapsApiKey

5) You can access the application in your web browser at http://localhost:5173.
