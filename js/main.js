// BUILD THE SCENE
var renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor( 0xffffff, 1 )
document.body.appendChild(renderer.domElement)

var scene = new THREE.Scene()

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 4000)
camera.position.set(0, 0, 10)

//LIGHT
var light = new THREE.DirectionalLight(0x888888,  1.5)
light.position.set(0, 0, 3)
scene.add(light)

//GHOST CUBE
var loader = new THREE.JSONLoader

var skull;
loader.load('./skull.js', function (geo) {
  var material = new THREE.MeshPhongMaterial({color: 0xffffff})
  skull = new THREE.Mesh(geo, material)
  skull.position.set(0, -3, 0)
  scene.add(skull)
  console.log(skull)
  render(skull)
})


function render() {
  requestAnimationFrame(render)

  skull.rotation.y += 0.01

  renderer.render(scene, camera)
}
