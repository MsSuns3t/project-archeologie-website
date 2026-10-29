import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { SceneViewer } from './components/SceneViewer.jsx'
import { scenes } from './data/scenes.js'
import VestisRomana from './games/verhaallijn-4/RomeinseUitrusting.jsx'
import './App.css'

function SceneRoute() {
  const { sceneId } = useParams()
  const scene = scenes.find((item) => item.id === sceneId)

  if (!scene) {
    return (
      <main className="route-message">
        <p className="route-eyebrow">Scene unavailable</p>
        <h1>This scene could not be found.</h1>
        <Link to={`/scenes/${scenes[0].id}`}>Open the viewer preview</Link>
      </main>
    )
  }

  return (
    <SceneViewer
      scene={scene}
      onPoiSelect={(poi) => console.info('Selected point of interest:', poi)}
    />
  )
}

function VestisRomanaRoute() {
  return (
    <div className="game-page">
      <Link className="game-back-link" to={`/scenes/${scenes[0].id}`}>
        Back to the scene
      </Link>
      <VestisRomana />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={`/scenes/${scenes[0].id}`} />} />
      <Route path="/scenes/:sceneId" element={<SceneRoute />} />
      <Route path="/games/vestis-romana" element={<VestisRomanaRoute />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App