# Algeria Information Web Application

An interactive web application showcasing the provinces (wilayas) of Algeria, demographic trends, and economic statistics, alongside a documentary video with synchronized Arabic subtitles.

This project was developed for the **PAWEB (Programmation et Applications Web)** course in the L3 Computer Science program.

## Features

- **Interactive Vector Map:** Loads an SVG map of Algeria (dz.svg) where users can click on any province to open a Google search query for that region.
- **National Flag & Video Scroll:** Clicking the Algerian flag scrolls smoothly to the documentary video player.
- **Subtitled Documentary:** Video player (lgeria.mp4) with synchronized Arabic WebVTT subtitles (subtitles_ar.vtt).
- **Population Demographics:** Custom HTML5 Canvas histogram chart depicting historical population data across multiple decades.
- **Economic Sector Distribution:** Custom HTML5 Canvas pie chart displaying the breakdown of national economic sectors.
- **Search Navigation:** Search input with live suggestion dropdown linking to relevant sections and pages.

## Tech Stack

- **HTML5:** Semantic layout, Canvas API, and video element with WebVTT subtitle track.
- **CSS3:** Responsive layout, flexbox, navigation bar, and media queries.
- **JavaScript (Vanilla):** Dynamic SVG loading via etch(), DOM event listeners, and interactive search routing.

## Project Structure

`	ext
.
├── MAPS OF ALGERIA.html    # Home page with interactive SVG map and video player
├── index.html              # Entry redirect to MAPS OF ALGERIA.html
├── population.html         # Population demographics with HTML5 Canvas histogram
├── statistic.html          # Economic statistics with HTML5 Canvas pie chart
├── code.html               # Standalone documentary video player page
├── style.css               # Main stylesheet and responsive rules
├── script.js               # SVG loader, search handler, and video toggle
├── dz.svg                  # Vector map of Algerian provinces
├── FLAG.png                # National flag asset
├── MAP.jpg                 # Topographic map poster
├── subtitles_ar.vtt        # Synchronized Arabic subtitles
├── info.txt                # Project metadata and authors
└── README.md               # Project documentation
`

## Requirements

- Any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
- A local HTTP server (such as Python, Node.js serve, or VS Code Live Server) to allow asynchronous loading of dz.svg and subtitle tracks without cross-origin file restrictions.

## How to Run

### Using Python (Recommended)

1. Clone or download the repository.
2. Open a terminal in the project directory:
   `ash
   python -m http.server 8000
   `
3. Open your browser and navigate to:
   `
   http://localhost:8000/MAPS OF ALGERIA.html
   `

### Using Node.js

1. Run with 
px:
   `ash
   npx serve .
   `
2. Navigate to the URL shown in the terminal.

### Using VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Right-click MAPS OF ALGERIA.html and select **Open with Live Server**.

> **Note on Media:** Ensure lgeria.mp4 is placed in the root directory to enable video playback.

## Authors

- **Tayeb BEKKOUCHE**
- **Alaaeddine SNOUBER**

## License

This project is open-source and available under the [MIT License](LICENSE).
