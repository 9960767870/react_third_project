import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row" style={{ background: "#eaeaea" }}>
                        <div className="col-sm-1 p-3"><h4>Rushi<span style={{color:"red"}}>.in</span></h4></div>
                        <div className="col-sm-1 p-3"><a className='nav-link'  href='/'>Home</a></div>
                        <div className="col-sm-1 p-3"><a className='nav-link'  href='/'>Link</a></div>
                        <div className="col-sm-1 p-3"><a className='nav-link'  href='/'>About</a></div>
                        <div className="col-sm-1 p-3"><a className='nav-link'  href='/'>Solutions</a></div>
                        <div className="col-sm-2 p-3 offset-4">

                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                             
                            </form>
                        </div>
                        <div className="col-sm-1 p-3">
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
