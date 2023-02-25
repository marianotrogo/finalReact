import React from 'react'
import { Link } from 'react-router-dom';
import Cartwidget from './Cartwidget';

const Navbar = () => {
  return (

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <div class="navbar-brand">Tienda Game</div>
        <Link className='nav-link' to={'/cart'}><Cartwidget /></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/categoria/PS3'}>PS3</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/categoria/PS4'}>PS4</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={'/categoria/PC'}>PC</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar