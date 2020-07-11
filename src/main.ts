import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  TorusGeometry,
  MeshNormalMaterial,
  Mesh,
} from 'three'
function main() {
  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight
  )
  camera.position.set(0, 0, 1000)

  const geometry = new TorusGeometry(300, 100, 64, 100)
  const material = new MeshNormalMaterial()
  const mesh = new Mesh(geometry, material)

  camera.lookAt(0, 0, 0)

  const scene = new Scene()
  scene.add(mesh)
  tick()
  function tick() {
    // メッシュを回転させる
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01

    // レンダリング
    renderer.render(scene, camera)

    requestAnimationFrame(tick)
  }
}
window.addEventListener('DOMContentLoaded', main)
