import React from 'react';
import { motion } from 'framer-motion';
import {FaCrown} from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
      <motion.div class="container" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0, transition:{duration:0.1}}}>
        <div className='discription'>
        <button><Link to="/about" className='linkToAbout'><p className='titleDis'>حواله چیست ؟</p></Link></button>
      </div>
      <div className='registerCard'>
        <div class="brand-logo"></div>
        <div class="brand-title">HAVALE</div>
          <div class="inputs">
            <label>ایمیل</label>
            <input type="email" placeholder="example@test.com" />
            <label>نام کامل</label>
            <input type="name" placeholder="سهراب کاشف" />
            <label>شماره همراه</label>
            <input type="name" placeholder="0921xxxxx25" />
            <button type="submit">ثبت نام</button>
          </div>
          <div className='banner'>
            <img alt='banner' src='/static/img/increase.png' />
          </div>
      </div>
  
      <h1 className='registered-title'>ثبت نام شدگان</h1>
      <div className='registered'>
        <div className='user'>
          <h4>1</h4>
          <img className='man' alt='man' src='/static/img/man.png'/>
          <p className='fullName'>مهدی کاظمی</p>
          <p className='phone'>0915xxxxx36</p>
        </div>
  
        <div className='user'>
          <h4>2</h4>
          <img className='woman' alt='woman' src='/static/img/woman.png'/>
          <p className='fullName'>یاسمن محمدی</p>
          <p className='phone'>0936xxxxx54</p>
        </div>
  
        <div className='user'>
          <h4>3</h4>
          <img className='man' alt='man' src='/static/img/man.png'/>
          <p className='fullName'>ماهان کاشف</p>
          <p className='phone'>0915xxxxx45</p>
        </div>
  
      </div>
  
  
      <h1 className='winners-title'>برندگان <i><FaCrown /></i></h1>
      <div className='registered'>
        <div className='user'>
          <h4>1</h4>
          <img className='man' alt='man' src='/static/img/man.png'/>
          <p className='fullName'>متین محمدی</p>
          <p className='phone'>0915xxxxx86</p>
        </div>
  
        <div className='user'>
          <h4>2</h4>
          <img className='woman' alt='woman' src='/static/img/woman.png'/>
          <p className='fullName'>یاسمن معتمدی</p>
          <p className='phone'>0936xxxxx54</p>
        </div>
  
      </div>
  
    </motion.div>
    )
}