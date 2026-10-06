import { useState } from 'react'
import './App.css'

const schoolPlates = Array.from({ length: 8 }, (_, index) => index + 1)

function App() {
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
        <div className="plate-grid-home">
          {schoolPlates.map((plate) => (
            <article className="plate-card" key={plate}>
              <button
                className="card-art"
                type="button"
                aria-label={`Open plaat ${plate}`}
                onClick={() => setSelectedPlate(plate)}
              />
              <h2>Plaat {plate}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App