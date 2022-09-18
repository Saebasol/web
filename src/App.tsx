import "./App.css"

function App() {

  return (
    <div className="App">
      <video muted loop autoPlay>
        <source src="/public/pixabay.mp4" type="video/mp4" />
      </video>
      <div className='Container'>
        <div className='Landing'>
          <div className='SubTitle'>
            Could you call us gentlemen?
          </div>
          <div className='Description'>
            <span className='TeamName'>
              <a href='https://github.com/Saebasol'>
                Saebasol
              </a>
            </span> is conducting open source contributions and toy projects by analyzing the services of various subculture sites such as Pixiv, Hitomi, Novelpia, etc.
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
