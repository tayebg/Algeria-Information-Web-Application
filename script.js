//function to dynamically load the SVG and add event listeners
function loadSVG() {
    fetch('dz.svg')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load SVG file');
            }
            return response.text();
        })
        .then(svgContent => {
            const container = document.getElementById('svg-container');
            container.innerHTML = svgContent;

            //apply event listeners for the paths inside the SVG
            const all_states = container.querySelectorAll("path");
            all_states.forEach(state => {
                state.addEventListener("click", () => {
                    apifun(state.getAttribute("name"));
                });
            });
        })
        .catch(error => {
            console.error('Error loading SVG:', error);
        });
}

//call the loadSVG function on page load
document.addEventListener('DOMContentLoaded', loadSVG);

//function to handle video reveal and smooth scroll
function showVideo() {
    const videoSection = document.getElementById("video-section");
    videoSection.style.display = "block"; // Display the video section
    videoSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the video section
}

//search functionality
const pages = {
    'home': 'MAPS OF ALGERIA.html',
    'map': 'MAPS OF ALGERIA.html',
    'flag': 'MAPS OF ALGERIA.html',
    'maps of algeria': 'MAPS OF ALGERIA.html',
    'population': 'population.html',
    'economy': 'statistic.html'
};

function handleSearch() {
    const searchBar = document.getElementById('search-bar');
    const suggestions = document.getElementById('suggestions');
    const query = searchBar.value.toLowerCase();

    //reset suggestions
    suggestions.innerHTML = '';

    for (let term in pages) {
        if (term.startsWith(query) && query.length > 0) {
            const suggestionItem = document.createElement('li');
            suggestionItem.innerText = term.charAt(0).toUpperCase() + term.slice(1);
            suggestionItem.onclick = () => window.location.href = pages[term];
            suggestions.appendChild(suggestionItem);
        }
    }

    suggestions.style.display = suggestions.childNodes.length > 0 ? 'block' : 'none';
}

function apifun(state_name) {
    window.open("https://www.google.com/search?q=" + state_name);
}
