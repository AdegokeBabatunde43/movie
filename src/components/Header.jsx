import React from 'react'

const Header = () => {
  return (
    <header className="wrapper">
        <h2>nFlix App</h2>
        <form>
            <input type="text" placeholder="Enter Movie Name" />
            <button className="btn-primary">Search</button>
        </form>
    </header>
  )
}

export default Header