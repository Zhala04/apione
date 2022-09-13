import React, { Component } from 'react'
import Search from './Search'
export class Nav extends Component {
  render() {
    return (
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navone">
        <div className="container">
          <a className="navbar-brand" href="#"><i class="fa-brands fa-github fa-3x"></i></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Product</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Enterprise</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Marketplace</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Pricing</a>
              </li>
             
            </ul>
            <form className="d-flex">
          
           
            </form>
          </div>
        </div>
      </nav>
     
    )
  }
}

export default Nav