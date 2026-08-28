# 🇩🇿 Algeria Explorer — Interactive Map & National Data Portal

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SVG](https://img.shields.io/badge/SVG_Map-00874E?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/SVG)
[![Country](https://img.shields.io/badge/Algeria-58_Wilayas-D52B1E?style=for-the-badge)](https://en.wikipedia.org/wiki/Algeria)

An interactive web application showcasing the **58 Provinces (Wilayas) of Algeria**, demographic growth, economic statistics, and a documentary video with synchronized Arabic subtitles.

Developed as part of the **PAWEB (Programmation et Applications Web)** course project for L3 Computer Science (Semester 5).

---

## 🌟 Key Features

### 1. 🗺️ Interactive Map & Flag (MAPS OF ALGERIA.html)
* **Dynamic SVG Map:** Loads dz.svg containing all 58 provinces of Algeria with interactive hover effects and clickable links to search each province on Google.
* **National Flag & Video Link:** Clicking the Flag of Algeria smoothly reveals and scrolls to the documentary video.
* **Smart Search Bar:** Quick search navigation with autocomplete suggestions for pages and key topics.

### 2. 👥 Demographic & Population Analytics (population.html)
* **HTML5 Canvas Histogram Chart:** Custom Canvas bar chart displaying historical population data (1990, 2000, 2020).
* Unified navigation bar and search bar.

### 3. 📈 Economic Sector Statistics (statistic.html)
* **HTML5 Canvas Pie Chart:** Custom Canvas pie diagram showing economic sectors (Population, Agriculture, Other) with percentage callouts and indicators.
* Unified navigation bar and search bar.

### 4. 🎬 Video Documentary & Subtitles (code.html / MAPS OF ALGERIA.html)
* HTML5 video player with synchronized Arabic subtitles (subtitles_ar.vtt).

---

## 🏛️ Complete List of 58 Wilayas

| N° | Wilaya (Français) | الولاية (العربية) | N° | Wilaya (Français) | الولاية (العربية) |
|:---|:------------------|:------------------|:---|:------------------|:------------------|
| **01** | Adrar | أدرار | **30** | Ouargla | ورقلة |
| **02** | Chlef | الشلف | **31** | Oran | وهران |
| **03** | Laghouat | الأغواط | **32** | El Bayadh | البيض |
| **04** | Oum El Bouaghi | أم البواقي | **33** | Illizi | إليزي |
| **05** | Batna | باتنة | **34** | Bordj Bou Arréridj | برج بوعريريج |
| **06** | Béjaïa | بجاية | **35** | Boumerdès | بومرداس |
| **07** | Biskra | بسكرة | **36** | El Tarf | الطارف |
| **08** | Béchar | بشار | **37** | Tindouf | تندوف |
| **09** | Blida | البليدة | **38** | Tissemsilt | تيسمسيلت |
| **10** | Bouira | البويرة | **39** | El Oued | الوادي |
| **11** | Tamanrasset | تمنراست | **40** | Khenchela | خنشلة |
| **12** | Tébessa | تبسة | **41** | Souk Ahras | سوق أهراس |
| **13** | Tlemcen | تلمسان | **42** | Tipaza | تيبازة |
| **14** | Tiaret | تيارت | **43** | Mila | ميلة |
| **15** | Tizi Ouzou | تيزي وزو | **44** | Aïn Defla | عين الدفلى |
| **16** | Alger | الجزائر | **45** | Naâma | النعامة |
| **17** | Djelfa | الجلفة | **46** | Aïn Témouchent | عين تموشنت |
| **18** | Jijel | جيجل | **47** | Ghardaïa | غرداية |
| **19** | Sétif | سطيف | **48** | Relizane | غليزان |
| **20** | Saïda | سعيدة | **49** | El M'Ghair | المغير |
| **21** | Skikda | سكيكدة | **50** | El Meniaa | المنيعة |
| **22** | Sidi Bel Abbès | سيدي بلعباس | **51** | Ouled Djellal | أولاد جلال |
| **23** | Annaba | عنابة | **52** | Bordj Baji Mokhtar | برج باجي مختار |
| **24** | Guelma | قالمة | **53** | Béni Abbès | بني عباس |
| **25** | Constantine | قسنطينة | **54** | Timimoun | تيميمون |
| **26** | Médéa | المدية | **55** | Touggourt | تقرت |
| **27** | Mostaganem | مستغانم | **56** | Djanet | جانت |
| **28** | M'Sila | المسيلة | **57** | In Salah | عين صالح |
| **29** | Mascara | معسكر | **58** | In Guezzam | عين قزام |

---

## 🚀 Getting Started / Running Locally

Because the application uses dynamic asynchronous etch() to load the SVG map (dz.svg) and HTML5 video subtitle tracks (subtitles_ar.vtt), it should be served via an HTTP server.

### Option 1: Python (Recommended)
`ash
# Navigate to the project directory
cd dz-map-explorer

# Start a local HTTP server on port 8000
python -m http.server 8000
`
Open **[http://localhost:8000](http://localhost:8000)** or **[http://localhost:8000/MAPS OF ALGERIA.html](http://localhost:8000/MAPS%20OF%20ALGERIA.html)** in your browser.

### Option 2: Node.js
`ash
npx serve .
`

### Option 3: VS Code Live Server
* Open the folder in **VS Code**.
* Right-click MAPS OF ALGERIA.html and select **"Open with Live Server"**.

> **Note on Media:** Place lgeria.mp4 in the project root folder to enable local video playback.

---

## 📂 Project Structure

`	ext
dz-map-explorer/
├── MAPS OF ALGERIA.html    # Home Page & Interactive 58-Wilaya SVG Map
├── index.html              # Entry redirect to MAPS OF ALGERIA.html
├── population.html         # Population Demographics & Canvas Histogram Chart
├── statistic.html          # Economic Overview & Canvas Pie Chart
├── code.html               # Dedicated Video Player with Subtitles
├── style.css               # Project Stylesheet & Responsive Design
├── script.js               # SVG Map Loader, Search & Video Interactivity
├── dz.svg                  # Vector Map of Algeria (58 Wilayas)
├── FLAG.png                # Flag of Algeria Image
├── MAP.jpg                 # Algeria Map Image
├── subtitles_ar.vtt        # Synchronized Arabic Subtitles (.vtt)
├── info.txt                # Author Information
├── .gitignore              # Git Ignore (excludes large .mp4 video)
└── README.md               # Project Documentation
`

---

## 👥 Authors & Academic Attribution

Developed for the **PAWEB (Programmation et Applications Web)** module, **L3 Computer Science (Semester 5)**:

* **Tayeb BEKKOUCHE** — [GitHub: @tayebg](https://github.com/tayebg)
* **Alaaeddine SNOUBER**

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
