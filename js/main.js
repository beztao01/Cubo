// Generamos la escena
const scene = new THREE.Scene();

//Agregamos una camara
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

// Renderizamos
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

// Agregamos el rendeizado a body del HTML
document.body.appendChild(renderer.domElement);