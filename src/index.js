import React from 'react'
import ReactDOM from 'react-dom'
import asabenehImg from './images/asabeneh.jpg';
console.log("Radhe Radhe...")
const rootElement = document.getElementById('root')
const radheRadhe = <h1>Radhe Radhe...</h1>
const newsShelter = (
  <div className='news_shelter wrapper'>
    <header className='header'>
      <h1>SUBSCRIBE</h1>
      <h2>Sign up with your email address to receive news and updates.</h2>
    </header>
    <main>
      <form>
        <input type='text' className="firstName" placeholder='First Name'></input>
        <input type='text' className='lastName' placeholder='Last Name'></input>
        <input type='email' className='email' placeholder='Email'></input>
        <div>
          <button type='submit' className='subscribeButton'>Subscribe</button></div>
      </form>
    </main>
  </div>
)
const profileCardHeader= (
  <header className='profileCardHeader pro-card-weapper'>
    <img className='profileCardImage' src={asabenehImg} alt='profile image'/>
    <div id='profile-name'>
    <h1>ASABENEH YATAYEH <span>Senior Developer, Finland</span></h1>
    </div>
  </header>
)
const profileCardMain=(
  <main className='profileCardMain pro-card-weapper'>
    <h2>SKILLS</h2>
  <div className="Skills">
  <span>HTML</span>
  <span>CSS</span>
  <span>Sass</span>
  <span>JS</span>
  <span>React</span>
  <span>Redux</span>
  <span>Node</span>
  <span>MongoDB</span>
  <span>Python</span>
  <span>Flask</span>
  <span>Django</span>
  <span>Numpy</span>
  <span>Pandas</span>
  <span>Data Analysis</span>
  <span>MYSQL</span>
  <span>GraphQt</span>
  <span>D3.js</span>
  <span>Gastsby</span>
  <span>Docker</span>
  <span>Heroky</span>
  <span>Git</span>
  </div>
  <div className='profileCardFooter'>
    <p>Joined on Aug 30 2020</p>
  </div>
  </main>
)
const profileCard=(
  <div>
    {profileCardHeader}
    {profileCardMain}
  </div>
)

ReactDOM.render(profileCard, rootElement)
