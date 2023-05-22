import React from 'react'
import './header.css'
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
//import me from './IMG-20221020-WA0006.jpg'
import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<h5>Hello I'm</h5>
<h1>Wesley Mungo</h1>
<h5 className='text-light'>Software Engineer and Entreprenuer </h5>
<CTA/>
<HeaderSocial/>
<div className='my_image'>
<img src='./IMG-20221020-WA0006.jpg' alt='my_image'/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>
</div>
</header>
)
}
export default Header;