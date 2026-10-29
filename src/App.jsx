import { useState } from 'react'
import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { SceneViewer } from './components/SceneViewer.jsx'
import { scenes } from './data/scenes.js'
import VestisRomana from './games/verhaallijn-4/RomeinseUitrusting.jsx'
import './App.css'

const schoolPlates = Array.from({ length: 8 }, (_, index) => index + 1)

function HomePage() {
  const [selectedPlate, setSelectedPlate] = useState(null)

  if (selectedPlate !== null) {
    return (
      <main className="home-page">
        <div className="page-bar">Schoolplaat {selectedPlate}</div>
        <header className="site-header">
          <button className="back-button" onClick={() => setSelectedPlate(null)}>
            ← Startpagina
          </button>
          <span>Plaat {selectedPlate}</span>
        </header>
        <section className="plate-placeholder" aria-label={`Lege schoolplaat ${selectedPlate}`} />
      </main>
    )
  }

  return (
    <main className="home-page">
      <div className="page-bar">Startpagina</div>
      <header className="site-header">
        Archeologie-Website Veluws Verleden
      </header>
      <section className="plate-catalog" aria-label="Alle schoolplaten">
        <p><Link to={`/scenes/${scenes[0].id}`}>Bekijk de scènepreview</Link></p>
        <div className="plate-grid-home">
          {schoolPlates.map((plate) => (
            <article className="plate-card" key={plate}>
              {plate === 1 ? (
                <Link className="plate-card-link" to={`/scenes/${scenes[0].id}`}>
                  <span className="card-art" aria-hidden="true" />
                  <h2>Plaat {plate}</h2>
                </Link>
              ) : (
                <>
                  <button
                    className="card-art"
                    type="button"
                    aria-label={`Open plaat ${plate}`}
                    onClick={() => setSelectedPlate(plate)}
                  />
                  <h2>Plaat {plate}</h2>
                </>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

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
      <Route path="/" element={<HomePage />} />
      <Route path="/scenes/:sceneId" element={<SceneRoute />} />
      <Route path="/games/vestis-romana" element={<VestisRomanaRoute />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App
