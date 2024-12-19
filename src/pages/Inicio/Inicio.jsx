import React from 'react'
import './inicio.css';
import Bruts from '../../components/Busqueda/Bruts';

export const Inicio = () => {
  return (
    <>
      
      <div id="bannerp" >
      <div className='banner' style={{ backgroundImage: `url("https://masterscoding.com/wp-content/uploads/2020/06/Banner-817x400-05-scaled.jpg")` }}>
        {
          <Bruts />
        }
      </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='team4_logo' >
              <div className='team4_logo_img' style={{ backgroundImage: `url("https://pluspng.com/img-png/react-logo-png-react-logo-png-img-900-900-free-transparent-react-png-900x900.jpg")` }}>

              </div>
            </div>
          </div>
          <div className='team4_titulos'>
            <h1>PROYECTO TEAM 4</h1>
          </div>
          <div className='team4_content'>
            <p>Pagina desarrollada como proyecto final del curso React</p>
              
          </div>
        </div>
       

      </div>
    </>
  )
}
