import React from 'react'
import ReactDOM from 'react-dom'

console.log("Radhe Radhe...")
const rootElement = document.getElementById('root')
const newsShelter=(
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

ReactDOM.render(newsShelter, rootElement)
