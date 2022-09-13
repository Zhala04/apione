import React, { Component } from 'react'
import './sass/mon.css'
export class User extends Component {
  render() {
    const {login,avatar_url,html_url,id,followers_url}=this.props.puser;
    return (
      <div className="container">
        <div className='userdiv mb-4 d-flex justify-content-between'>
            <div className="proimage">
              <img src={avatar_url} alt="" />
            </div>
            <div className='userinfo'>
            <h5><b>Username: </b>{login}</h5>
            <p><b>id:</b> {id}</p>
            <a href={html_url} className="btn btn-dark btn-outline-light" target='_blank'>Go Profile</a>
            </div>
        </div>
      </div>




   
      
    )
  }
}

export default User