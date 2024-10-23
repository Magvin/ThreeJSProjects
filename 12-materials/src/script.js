import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as lil from 'lil-gui';

THREE.ColorManagement.enabled = false
// importing textures

const debug = new lil.GUI();


const loaderManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader(loaderManager)
const colorTexture = textureLoader.load('/textures/door/color.jpg')
const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')
const matcapTexture = textureLoader.load('/textures/matcaps/3.png');
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg');


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.add(debug)

// Objects

// const material = new THREE.MeshBasicMaterial();
// material.map = colorTexture;
// material.transparent = true;
// material.alphaMap = alphaTexture;
// material.side = THREE.DoubleSide;

// const material = new THREE.MeshNormalMaterial();
// matcap
// const material = new THREE.MeshMatcapMaterial();
// material.matcap = matcapTexture;
// depth
// const material = new THREE.MeshDepthMaterial();

// const material = new THREE.MeshLambertMaterial()

// const material = new THREE.MeshStandardMaterial();

// material.map = colorTexture;
// material.aoMap = ambientTexture;
// material.displacementMap = heightTexture;
// material.metalnessMap = metalnessTexture;
// material.roughnessMap = roughnessTexture;
// material.normalMap = normalTexture;
// material.alphaMap = alphaTexture;
// material.transparent = true;
// material.side = THREE.DoubleSide;
// material.displacementScale = 0.05

const material = new THREE.MeshPhysicalMaterial()
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)

debug.add(material, 'metalness', 0, 1, 0.1).name('Metalness')
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight)


const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 64, 64),
    material
)
sphere.position.x = - 1.5;

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1,100,100),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2 ,64, 128),
    material
)

torus.position.x = 1.5
scene.add(sphere, plane, torus)



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
     sphere.rotation.y = 0.1 * elapsedTime
     plane.rotation.y = 0.1 * elapsedTime
     torus.rotation.y = 0.1 * elapsedTime

     sphere.rotation.x = 0.15 * elapsedTime
     plane.rotation.x = 0.15 * elapsedTime
     torus.rotation.x = 0.15 * elapsedTime




    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()