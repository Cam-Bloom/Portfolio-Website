import {FiAward, FiUsers, FiFolder } from 'react-icons/fi'
import profilePic from '../assets/profilePic.svg'


const About = () => {
  return (
    <section id = "about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <img className='about__me-image' src={profilePic} alt="Profile Picture" />
        </div>

        <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                <FiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>1 Year Experience</small>
              </article>


              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Experience</h5>
                <small>1 Year Experience</small>
              </article>

              <article className='about__card'>
                <FiFolder className='about__icon'/>
                <h5>Experience</h5>
                <small>1 Year Experience</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error aliqm dolor sit amet consectetur adipisicing elit. Asperiores error aliqm dolor sit amet consectetur adipisicing elit. Asperiores error aliqm dolor sit amet consectetur adipisicing elit. Asperiores error aliquam illo dolorum omnis. Earum quia nulla, ducimus quam autem alias, cum veritatis dicta sit perferendis minus fugit labore aliquid.
            </p>

            <a href='#contact' className=' btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About