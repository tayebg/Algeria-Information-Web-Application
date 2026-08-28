// Function to dynamically load the SVG and add event listeners
function loadSVG() {
    const container = document.getElementById('svg-container');
    if (!container) return;

    fetch('dz.svg')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load SVG file');
            }
            return response.text();
        })
        .then(svgContent => {
            container.innerHTML = svgContent;

            // Apply event listeners for the paths inside the SVG
            const all_states = container.querySelectorAll("path");
            all_states.forEach(state => {
                state.addEventListener("click", () => {
                    const stateName = state.getAttribute("name");
                    if (stateName) {
                        apifun(stateName);
                    }
                });
            });
        })
        .catch(error => {
            console.error('Error loading SVG:', error);
        });
}

// Call loadSVG on page load
document.addEventListener('DOMContentLoaded', loadSVG);

// Function to handle video reveal and smooth scroll
function showVideo() {
    const videoSection = document.getElementById("video-section");
    if (!videoSection) return;
    videoSection.style.display = "block";
    videoSection.scrollIntoView({ behavior: "smooth" });
}

// Search functionality
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
    if (!searchBar || !suggestions) return;

    const query = searchBar.value.trim().toLowerCase();
    suggestions.innerHTML = '';

    if (!query) {
        suggestions.style.display = 'none';
        return;
    }

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

// Close suggestions on outside click
document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-container');
    const suggestions = document.getElementById('suggestions');
    if (suggestions && searchContainer && !searchContainer.contains(e.target)) {
        suggestions.style.display = 'none';
    }
});

function apifun(state_name) {
    window.open("https://www.google.com/search?q=" + encodeURIComponent("Algeria " + state_name));
}
