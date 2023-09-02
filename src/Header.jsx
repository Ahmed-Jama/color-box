
const Header = () => {

  // you can also but styles in a variable
  const h1Style = {
    fontSize: '3rem',
    padding: '0.3em'
  }

  return (

    // inline style
    // Note: its look like an js object
    <header style={{
      backgroundColor: 'black',
      color: '#fff',
      borderBottomLeftRadius: '1rem',
      borderBottomRightRadius: '1rem'
    }}>
      <h1 style={h1Style}>Challenge Project</h1>
      </header>
  )
}

export default Header