import React from 'react'
import slideshow1 from '../assets/images/slideshow/slideshow1.jpg'
import slideshow2 from '../assets/images/slideshow/slideshow2.jpg'
import slideshow3 from '../assets/images/slideshow/slideshow3.jpg'
import slideshow4 from '../assets/images/slideshow/slideshow4.jpg'
import slideshow5 from '../assets/images/slideshow/slideshow5.jpg'
import slideshow6 from '../assets/images/slideshow/slideshow6.jpg'
import slideshow7 from '../assets/images/slideshow/slideshow7.jpg'
import slideshow8 from '../assets/images/slideshow/slideshow8.jpg'
import slideshow9 from '../assets/images/slideshow/slideshow9.jpg'
import slideshow10 from '../assets/images/slideshow/slideshow10.jpg'
import slideshow11 from '../assets/images/slideshow/slideshow11.jpg'
import slideshow12 from '../assets/images/slideshow/slideshow12.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
  
      <div className="container">
        <div className="item">
          <a href='https://bwogi.github.io/run-buddy/'target="_blank">
          <img src={slideshow1} alt="slideshow1" />
          </a>
          <h6>Run Buddy Web App</h6>
        </div>
        <div className="item">
          <a href='https://www.balloonbrace.com/' target="_blank">
          <img src={slideshow2} alt="slideshow2" />
          </a>
          <h6>Balloon Brace App</h6>
        </div>
        <div className="item">
          <a href='https://tech-blog-abl.herokuapp.com/login'target="_blank">
          <img src={slideshow3} alt="slideshow3" />
          </a>
          <h6>The Technology Blog App</h6>
        </div>
        <div className="item">
          <a href='ttps://bwogi.github.io/work-day-scheduler/'target="_blank">
          <img src={slideshow4} alt="slideshow4" />
          </a>
          <h6>Work Day Scheduler App</h6>
        </div>
        <div className="item">
          <a href='https://bwogi.github.io/weather-dashboard/' target="_blank">
          <img src={slideshow5} alt="slideshow5" />
          </a>
          <h6>Weather Dashboard App</h6>
        </div>
        <div className="item">
          <a href='https://bwogi.github.io/covid19GlobalApp/' target="_blank">
          <img src={slideshow6} alt="slideshow6" />
          </a>
          <h6>Covid19 Analytics Web App</h6>
        </div>
        <div className="item">
          <a href='http://attsgames.herokuapp.com/' target="_blank">
          <img src={slideshow8} alt="slideshow8" />
          </a>
          <h6>Game Library App</h6>
        </div>
        <div className="item">
          <a href='https://bwogi.github.io/taskinator/' target="_blank">
          <img src={slideshow9} alt="slideshow9" />
          </a>
          <h6>Taskinator Web App</h6>
        </div>
        <div className="item">
          <a href='https://github.com/bwogi/employee-tracker' target="_blank">
          <img src={slideshow7} alt="slideshow7" />
          </a>
          <h6>Employee Tracking Web App</h6>
        </div>
        <div className="item">
          <a href='https://github.com/Bwogi/team-profile-generator' target="_blank">
          <img src={slideshow10} alt="slideshow10" />
          </a>
          <h6>Command-line Profile Generator App</h6>
        </div>
        <div className="item">
          <a href='https://bwogi-note-taker.herokuapp.com/' target="_blank">
          <img src={slideshow11} alt="slideshow11" />
          </a>
          <h6>Note taking Web App</h6>
        </div>
        <div className="item">
          <a href='https://github.com/troygrossi/Crypto-Tracker' target="_blank">
          <img src={slideshow12} alt="slideshow12" />
          </a>
          <h6>Crypto Tracker App</h6>
        </div>
        
      </div>
      
    </div>
  )
}

export default Portfolio

