import { useState } from 'react'
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { SceneViewer } from './components/SceneViewer.jsx'
import { scenes } from './data/scenes.js'
import './App.css'

const schoolPlates = Array.from({ length: 8 }, (_, index) => index + 1)

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

function HomePage() {
  const [selectedPlate, setSelectedPlate] = useState(null)
  const navigate = useNavigate()

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
        <section className="plate-placeholder" aria-label={`Schoolplaat ${selectedPlate}`}>
          <p className="plate-unavailable">Deze schoolplaat is nog niet toegevoegd.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="home-page">
      <div className="page-bar">Startpagina</div>
      <header className="site-header">Archeologie-Website Veluws Verleden</header>
      <section className="plate-catalog" aria-label="Alle schoolplaten">
        <div className="plate-grid-home">
          {schoolPlates.map((plate) => (
            <article className="plate-card" key={plate}>
              <button
                className={`card-art${plate === 3 ? ' card-art-scene' : ''}`}
                type="button"
                aria-label={`Open plaat ${plate}`}
                onClick={() => {
                  if (plate === 3) {
                    navigate(`/scenes/${scenes[0].id}`)
                    return
                  }

                  setSelectedPlate(plate)
                }}
              >
                {plate === 3 && <img src={scenes[0].image} alt="" />}
              </button>
              <h2>Plaat {plate}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/scenes/:sceneId" element={<SceneRoute />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default App