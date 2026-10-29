import { Link } from 'react-router-dom'
import { ArrowLeft, Minus, Plus, RotateCcw } from 'lucide-react'
import {
  TransformComponent,
  TransformWrapper,
  useTransformComponent,
} from 'react-zoom-pan-pinch'
import './SceneViewer.css'

function ViewerControls({ zoomIn, zoomOut, resetTransform }) {
  const scale = useTransformComponent(({ state }) => state.scale)

  return (
    <nav className="viewer-controls" aria-label="Image zoom controls">
      <button type="button" onClick={() => zoomOut(0.2)} aria-label="Zoom out" title="Zoom out">
        <Minus aria-hidden="true" />
      </button>
      <output className="zoom-level" aria-live="polite">
        {Math.round(scale * 100)}%
      </output>
      <button type="button" onClick={() => zoomIn(0.2)} aria-label="Zoom in" title="Zoom in">
        <Plus aria-hidden="true" />
      </button>
      <span className="control-divider" aria-hidden="true" />
      <button
        type="button"
        onClick={() => resetTransform()}
        aria-label="Reset image view"
        title="Reset image view"
      >
        <RotateCcw aria-hidden="true" />
      </button>
    </nav>
  )
}

export function SceneViewer({ scene, onPoiSelect }) {
  return (
    <main className="scene-viewer" aria-label={`${scene.title} viewer`}>
      <header className="scene-header">
        <div className="scene-heading">
          <p className="scene-eyebrow">{scene.period}</p>
          <h1>{scene.title}</h1>
          <Link className="scene-back-link" to="/">
            <ArrowLeft aria-hidden="true" />
            Startpagina
          </Link>
        </div>
        <span className="preview-status">{scene.imageStatus}</span>
      </header>

      <TransformWrapper
        minScale={0.5}
        maxScale={6}
        fitOnInit="contain"
        centerOnInit
        wheel={{ step: 0.0012 }}
        panning={{ excluded: ['poi-marker'] }}
        pinch={{ step: 5, excluded: ['poi-marker'] }}
        doubleClick={{ disabled: true }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="scene-canvas">
              <TransformComponent
                wrapperClass="scene-transform-viewport"
                contentClass="scene-transform-content"
                wrapperStyle={{ width: '100%', height: '100%' }}
              >
                <div className="scene-artwork">
                  <img src={scene.image} alt={scene.imageAlt} draggable="false" />
                  <div className="poi-layer" role="group" aria-label="Points of interest">
                    {scene.pois.map((poi, index) => (
                      poi.gameId ? (
                        <Link
                          key={poi.id}
                          to={`/games/${poi.gameId}`}
                          className="poi-marker poi-marker-game"
                          style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                          aria-label={`Open ${poi.label}`}
                          title={poi.label}
                          onClick={(event) => event.stopPropagation()}
                        >
                          <span aria-hidden="true">{index + 1}</span>
                        </Link>
                      ) : (
                        <button
                          key={poi.id}
                          type="button"
                          className="poi-marker"
                          style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
                          aria-label={poi.label}
                          title={poi.label}
                          onClick={(event) => {
                            event.stopPropagation()
                            onPoiSelect?.(poi)
                          }}
                        >
                          <span aria-hidden="true">{index + 1}</span>
                        </button>
                      )
                    ))}
                  </div>
                </div>
              </TransformComponent>
            </div>

            <ViewerControls
              zoomIn={zoomIn}
              zoomOut={zoomOut}
              resetTransform={resetTransform}
            />
          </>
        )}
      </TransformWrapper>

      <p className="viewer-hint">
        Drag to explore <span aria-hidden="true">·</span> Scroll or pinch to zoom
      </p>
    </main>
  )
}