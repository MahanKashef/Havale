import React from 'react';
import { motion } from 'framer-motion'
import { TiArrowRightThick } from 'react-icons/ti'
import { Link } from 'react-router-dom';


export default function About() {
    return(
      <motion.div className='about'  initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0 , transition:{duration:0.1}}}>
        <Link to='/' className='linkToHome'><i><TiArrowRightThick /></i></Link>
        <div className='aboutCard'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non? Nesciunt perspiciatis eveniet, rem necessitatibus animi at, quis veritatis nisi nemo eius reiciendis, fuga illum enim molestias eaque commodi voluptas.</p>
          {/* <p>سلام خیلی خوش اومدین به سایت ما, پولاتو بده یرگه</p>
          <strong>تو که میخوای گند بزنی تو پولات خب بده من بزنم</strong>
          <br/>
          <strong>اسم و شمارتو دارم آدرس خونت رو هم پیدا میکنم پولاتو ندی میام دم خونت</strong> */}
        </div>
      </motion.div>
    )
}