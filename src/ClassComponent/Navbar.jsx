import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }
    postSearch(e) {
        e.preventDefault()
        this.props.changeSearch(this.state.search)
        this.setState({ search: "" })
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg background sticky-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light mb-0 h1" to="/" onClick={() => this.props.changeSearch("")}>FlashFeed.com</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" aria-current="page" to="/All" onClick={() => this.props.changeSearch("")}>All</Link>
                                </li>
                                <li className="nav-item"><Link className="nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/Politics" onClick={() => this.props.changeSearch("")}>Politics</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/Crime" onClick={() => this.props.changeSearch("")}>Crime</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/Education" onClick={() => this.props.changeSearch("")}>Education</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/Entertainment" onClick={() => this.props.changeSearch("")}>Entertainment</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/World" onClick={() => this.props.changeSearch("")}>World</Link></li>
                                <li className="nav-item"><Link className="nav-link text-light nav-link text-light icon-link icon-link-hover link-danger link-underline-success link-underline-opacity-25" to="/India" onClick={() => this.props.changeSearch("")}>India</Link></li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Other
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/Stock" onClick={() => this.props.changeSearch("")}>Stock</Link></li>
                                        <li><Link className="dropdown-item" to="/Sports" onClick={() => this.props.changeSearch("")}>Sports</Link></li>
                                        <li><Link className="dropdown-item" to="/Cricket" onClick={() => this.props.changeSearch("")}>Cricket</Link></li>
                                        <li><Link className="dropdown-item" to="/t20" onClick={() => this.props.changeSearch("")}>T20 World Cup</Link></li>
                                        <li><Link className="dropdown-item" to="/Science" onClick={() => this.props.changeSearch("")}>Science</Link></li>
                                        <li><Link className="dropdown-item" to="/Technology" onClick={() => this.props.changeSearch("")}>Technology</Link></li>
                                        <li><Link className="dropdown-item" to="/Jokes" onClick={() => this.props.changeSearch("")}>Jokes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Language
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("hi")}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changeLanguage("en")}>English</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e) => this.postSearch(e)}>
                                <input className="form-control me-2" name='search' value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
