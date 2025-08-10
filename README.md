# React Netflix Clone

A modern Netflix-inspired web application built with React, featuring movie and TV show browsing, search functionality, and a responsive design.

## Screenshots

<img width="1887" height="947" alt="image" src="https://github.com/user-attachments/assets/404159a7-4741-4f8b-a954-e123a4e95f8f" /> <img width="478" height="899" alt="image" src="https://github.com/user-attachments/assets/8ff931fb-3fcd-4b56-acf8-7ee63c8cfec7" />

## Features

- 🎬 **Movie & TV Show Browsing** - Browse popular movies and TV shows
- 🔍 **Search Functionality** - Search for movies and TV shows with real-time results
- 📱 **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- 🌙 **Dark Theme** - Netflix-style dark theme with theme toggle
- 🎥 **Movie Details** - View detailed information about movies and TV shows
- 📺 **Upcoming Releases** - Discover upcoming movies and TV shows
- ⭐ **Favorites** - Save your favorite titles
- 🎯 **Filter Navigation** - Switch between movies and TV shows

## Tech Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing
- **Swiper** - Touch slider component
- **TMDB API** - Movie and TV show data

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd react-netflix
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory and add your TMDB API credentials:

```env
VITE_API_KEY=your_tmdb_api_key_here
VITE_BASE_URL=https://api.themoviedb.org/3
```

4. Start the development server

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── api/           # API functions for TMDB
├── components/    # Reusable UI components
├── context/       # React context providers
├── hooks/         # Custom React hooks
├── layout/        # Layout components
├── pages/         # Page components
└── styles/        # CSS styles
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

This project uses The Movie Database (TMDB) API to fetch:

- Popular movies and TV shows
- Search results
- Movie/TV show details
- Video trailers
- Upcoming releases

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is for educational purposes only.

## Screenshots

Built with ❤️ using React and TMDB API
