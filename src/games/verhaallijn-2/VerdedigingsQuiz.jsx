import { useState } from 'react'
import { X } from 'lucide-react'
import vragen from './vragen.js'
import './styles.css'

export default function VerdedigingsQuiz({ onClose }) {
  const [vraagIndex, setVraagIndex] = useState(0)
  const [gekozenAntwoord, setGekozenAntwoord] = useState(null)
  const [score, setScore] = useState(0)
  const [afgerond, setAfgerond] = useState(false)

  const vraag = vragen[vraagIndex]
  const antwoordGegeven = gekozenAntwoord !== null

  function kiesAntwoord(index) {
    if (antwoordGegeven) return

    setGekozenAntwoord(index)
    if (index === vraag.juist) setScore((huidigeScore) => huidigeScore + 1)
  }

  function volgendeVraag() {
    if (vraagIndex === vragen.length - 1) {
      setAfgerond(true)
      return
    }

    setVraagIndex((huidigeIndex) => huidigeIndex + 1)
    setGekozenAntwoord(null)
  }

  function opnieuwSpelen() {
    setVraagIndex(0)
    setGekozenAntwoord(null)
    setScore(0)
    setAfgerond(false)
  }

  return (
    <div className="defense-quiz-backdrop">
      <section
        className="defense-quiz"
        role="dialog"
        aria-modal="true"
        aria-labelledby="defense-quiz-title"
        onKeyDown={(event) => {
          if (event.key === 'Escape') onClose()
        }}
      >
        <header className="defense-quiz-header">
          <div className="defense-quiz-heading">
            <p className="defense-quiz-eyebrow">Verhaallijn 2</p>
            <h2 id="defense-quiz-title">Verdediging van het legerkamp</h2>
          </div>
          <button
            className="defense-quiz-close"
            type="button"
            onClick={onClose}
            aria-label="Sluit de quiz"
            autoFocus
          >
            <X aria-hidden="true" />
          </button>
          <p className="defense-quiz-intro">
            Romeinse soldaten maakten onderweg een kamp. Een diepe sloot, een wal en houten palen
            hielpen om het kamp te beschermen. Beantwoord de drie vragen.
          </p>
        </header>

        <div className="defense-quiz-content">
          {afgerond ? (
            <div className="defense-quiz-result" aria-live="polite">
              <p className="defense-quiz-eyebrow">Quiz afgerond</p>
              <p className="defense-quiz-score">{score} van {vragen.length} goed</p>
              <p>Goed gedaan met de verdediging van het marskamp.</p>
              <div className="defense-quiz-actions">
                <button className="defense-quiz-secondary" type="button" onClick={opnieuwSpelen}>
                  Opnieuw spelen
                </button>
                <button className="defense-quiz-primary" type="button" onClick={onClose}>
                  Terug naar de schoolplaat
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="defense-quiz-progress-row">
                <span>Vraag {vraagIndex + 1} van {vragen.length}</span>
                <span>Score {score}</span>
              </div>
              <div
                className="defense-quiz-progress"
                role="progressbar"
                aria-label="Voortgang quiz"
                aria-valuemin={0}
                aria-valuemax={vragen.length}
                aria-valuenow={vraagIndex + (antwoordGegeven ? 1 : 0)}
              >
                <span style={{ width: `${((vraagIndex + (antwoordGegeven ? 1 : 0)) / vragen.length) * 100}%` }} />
              </div>

              <h3 className="defense-quiz-question">{vraag.vraag}</h3>
              <div className="defense-quiz-answers" role="group" aria-label="Kies een antwoord">
                {vraag.antwoorden.map((antwoord, index) => {
                  const isJuist = index === vraag.juist
                  const isGekozen = index === gekozenAntwoord
                  const antwoordKlasse = antwoordGegeven
                    ? isJuist
                      ? ' defense-answer-correct'
                      : isGekozen
                        ? ' defense-answer-incorrect'
                        : ''
                    : ''

                  return (
                    <button
                      className={`defense-answer${antwoordKlasse}`}
                      type="button"
                      key={antwoord}
                      onClick={() => kiesAntwoord(index)}
                      aria-pressed={isGekozen}
                      disabled={antwoordGegeven}
                    >
                      <span className="defense-answer-letter">{String.fromCharCode(65 + index)}</span>
                      <span>{antwoord}</span>
                    </button>
                  )
                })}
              </div>

              {antwoordGegeven && (
                <p className="defense-quiz-feedback" aria-live="polite">
                  <strong>{gekozenAntwoord === vraag.juist ? 'Goed!' : 'Niet helemaal.'}</strong>{' '}
                  {vraag.uitleg}
                </p>
              )}

              <button
                className="defense-quiz-primary"
                type="button"
                onClick={volgendeVraag}
                disabled={!antwoordGegeven}
              >
                {vraagIndex === vragen.length - 1 ? 'Bekijk score' : 'Volgende vraag'}
              </button>
            </>
          )}
        </div>
      </section>
    </div>
  )
}