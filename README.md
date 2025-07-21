# FreeMovies

FreeMovies is a React-based web application that allows users to search for movies and view details using a modern, responsive interface. The app integrates with Appwrite for backend services and uses Vite for fast development and build.

## Features
- Search for movies by title
- View movie details including poster, rating, and description
- Responsive design for desktop and mobile
- Appwrite integration for tracking search counts

## Technologies Used
- React
- Vite
- Appwrite
- JavaScript (ES6+)
- CSS

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Dame-Abera/Freemovies.git
   cd "react project/jsmcourse"
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Set up your environment variables in a `.env` file:
   ```env
   VITE_APPWRITE_PROJECT_ID=your_project_id
   VITE_APPWRITE_DATABASE_ID=your_database_id
   VITE_APPWRITE_COLLECTION_ID=your_collection_id
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure
```
jsmcourse/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard,.jsx
│   │   └── Search.jsx
│   ├── App.jsx
│   ├── appwrite.js
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Appwrite Setup
- Make sure you have an Appwrite project and database set up.
- Update the `.env` file with your Appwrite credentials.
- The app uses Appwrite to track the number of searches performed.

## License
This project is licensed under the MIT License.
