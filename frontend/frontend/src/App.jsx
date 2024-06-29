import { useState } from 'react'

import Meeting from './page/video'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Meeting/>
      </div>
    </>
  )
}

export default App
