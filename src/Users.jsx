import React, { Component } from 'react'
import User from './User'

export class Users extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className='row'>
        {this.props.uservalue.map((fetchdata,i)=>(
          <User puser={fetchdata} key={i} />
        ))}
        </div>
      </div>
    )
  }
}

export default Users