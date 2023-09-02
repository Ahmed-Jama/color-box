import { useState } from 'react'
import colorNames from 'colornames'

const Content = () => {

  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [darkText, setDarkText] = useState(true)
  
  // const handelBgColor = (e) => {
  //   e.preventDefault()
  //   if(!color.length) return
  //   divColor.style.backgroundColor = `${color}`
  //}

  return (

    <main>
        <div 
          id='divBg' 
          className='colorBox'
          style={{
            backgroundColor: `${color}`,
            color: darkText ? '#000': '#fff'
          }}
        >
          <p>{color ? color : 'Empty value...'}</p>
          <p>{hexValue ? hexValue : ''}</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="color">Choose color name <br /> or color code</label>
        <input 
          type="text"
          autoFocus
          placeholder='#000 or black'
          value={color}
          onChange={(e) => {
            setColor(e.target.value)
            setHexValue(colorNames(e.target.value))
          }}
        /> 
          <button onClick={() => setDarkText(!darkText)}>
            Change text color
          </button>
        </form>
    </main>
  )
}

export default Content