import React from 'react'
import './services.css'
import ListServices from './listServices'


export const Services = () => {
  return (
    <section id="services">
          <h2>Services</h2>
      <h5>What i offer</h5>
      
      <div className="container services__container">
        <ListServices />
      </div>
    </section>
  );
}
export default Services;