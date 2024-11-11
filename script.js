// Define data for each library
const libraryData = {
    lodash: {
        name: "Lodash",
        website: "https://lodash.com/",
        description: "A modern JavaScript utility library delivering modularity, performance, & extras.",
        exampleCode: `
const array = [1, 2, 3, 4];
const doubled = _.map(array, n => n * 2);
console.log(doubled); // [2, 4, 6, 8]
        `,
        exampleOutput: "[2, 4, 6, 8]"
    },
    moment: {
        name: "Moment.js",
        website: "https://momentjs.com/",
        description: "Parse, validate, manipulate, and display dates and times in JavaScript.",
        exampleCode: `
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(now);
        `,
        exampleOutput: "November 11th 2024, 4:52 pm"
    },
    axios: {
        name: "Axios",
        website: "https://axios-http.com/",
        description: "Promise based HTTP client for the browser and node.js.",
        exampleCode: `
axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response => console.log(response.data));
        `,
        exampleOutput: "{ id: 1, title: '...', body: '...' }"
    },
    chartjs: {
        name: "Chart.js",
        website: "https://www.chartjs.org/",
        description: "Simple yet flexible JavaScript charting library for the web.",
        exampleCode: `
new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: ['red', 'blue', 'yellow']
        }]
    }
});
        `,
        exampleOutput: "A bar chart showing votes for each color."
    },
    d3js: {
        name: "D3.js",
        website: "https://d3js.org/",
        description: "D3.js is a JavaScript library for producing dynamic, interactive data visualizations.",
        exampleCode: `
d3.select("body").append("p").text("Hello D3.js!");
        `,
        exampleOutput: "Hello D3.js! text on screen."
    },
    threejs: {
        name: "Three.js",
        website: "https://threejs.org/",
        description: "Three.js is a cross-browser JavaScript library and API used to create and display animated 3D graphics in a web browser.",
        exampleCode: `
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
document.body.appendChild(renderer.domElement);
        `,
        exampleOutput: "A simple 3D scene."
    },
    anime: {
        name: "Anime.js",
        website: "https://animejs.com/",
        description: "A lightweight JavaScript animation library with a simple, yet powerful API.",
        exampleCode: `
anime({
    targets: 'div.box',
    translateX: 250,
    duration: 800
});
        `,
        exampleOutput: "A box slides to the right."
    },
    swiper: {
        name: "Swiper",
        website: "https://swiperjs.com/",
        description: "Swiper is the most modern free mobile touch slider with hardware accelerated transitions and amazing native behavior.",
        exampleCode: `
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true
});
        `,
        exampleOutput: "A swipeable slideshow."
    },
    aos: {
        name: "AOS (Animate On Scroll)",
        website: "https://michalsnik.github.io/aos/",
        description: "Animate elements on your page as you scroll.",
        exampleCode: `
<div data-aos="fade-up">Content to animate</div>
        `,
        exampleOutput: "Content fades up on scroll."
    },
    socketio: {
        name: "Socket.IO",
        website: "https://socket.io/",
        description: "Enables real-time bidirectional event-based communication.",
        exampleCode: `
const socket = io('http://localhost');
socket.on('message', data => console.log(data));
        `,
        exampleOutput: "Real-time messages from the server."
    }
};

// Function to load content
function loadContent(libraryKey) {
    const library = libraryData[libraryKey];
    const content = `
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">${library.name}</h3>
                <p><a href="${library.website}" target="_blank">${library.website}</a></p>
                <p>${library.description}</p>
                <h5>Example Code:</h5>
                <pre>${library.exampleCode}</pre>
                <h5>Expected Output:</h5>
                <p>${library.exampleOutput}</p>
            </div>
        </div>
    `;
    document.getElementById("content").innerHTML = content;
}

// Event listeners for menu items
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", function(event) {
        const target = event.target.getAttribute("data-target");
        loadContent(target);
    });
});

// Load first item by default
loadContent("lodash");
