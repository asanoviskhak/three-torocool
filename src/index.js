import ReactDOM from 'react-dom'
import { Suspense } from 'react'
import {Loader} from '@react-three/drei'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="https://www.instagram.com/toro.cool/" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        Torocool
        <br />
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>Digital Artist</div>
    </div>
  )
}

ReactDOM.render(
  <>
    <Suspense fallback={null}>
      <App />
      <Overlay />
    </Suspense>
    <Loader/>
  </>,
  document.getElementById('root')
)
