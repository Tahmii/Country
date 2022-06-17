import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        {/* Les images importer depuis la balise img sont accesible dans publique */}
        <img src='./img/logo192.png' alt='logo react' />
        <h2>React World</h2>
      </div>
    )
  }
}

export default Logo