import React from 'react'

import './About.css'
import Welcome from '../../assets/images/hi.png'




const Aboutus = () => {
  return (
    <><div id='aboutus' className='about'><span style={{ fontFamily: 'El Messiri', color: 'black' }}>ABOUT-</span><p> </p> <span style={{ fontFamily: 'El Messiri', color: 'green' }}>US</span></div>
      <div className='parents'>
        <span id='text1'>Hey We  Have Been Looking</span><span style={{fontFamily:'El Messiri',fontSize:'30px', color:'green'}}>        For You !</span>
        <p style={{fontFamily:'Poppins',fontSize:'24px', marginLeft:'3%',marginRight:'5%',marginTop:'20px',color:'gray'}}>Young minds are like clay that can take any shape and become anything they want but we should not try to mold them into a figure we want them to be. Every child is special. They are all unique and defined so we should encourage their individuality. Education should be fun. These are the principle on which Baby Villa School has been founded.</p>
        <p style={{fontFamily:'Poppins',fontSize:'24px', marginLeft:'3%',marginRight:'5%',marginTop:'20px',color:'gray'}}>Our school's teaching approach is based on Montessori Methods, which means that we follow the educational philosophy and principles developed by Dr. Maria Montessori. This approach emphasizes the child's natural curiosity, creativity, and ability to learn through hands-on experiences and self-directed exploration. In a classroom following Montessori methods, you will see students working independently or in small groups, engaging in a variety of hands-on activities that are designed to foster their creativity, problem-solving skills, and critical thinking abilities. Our teacher are trained to observe and assess each child's progress and provide individualized guidance and support when needed. They also help students develop important social and emotional skills, such as cooperation, communication, and conflict resolution, through various classroom activities and exercises.</p>
        <p style={{fontFamily:'Poppins',fontSize:'24px', marginLeft:'3%',marginRight:'5%',marginTop:'20px',color:'gray'}}>Since 2015, Baby Villa has been a haven for curious young minds. Our unwavering mission is to create the perfect environment: one that sparks a lifelong love of learning and fosters a child's unique potential. We believe in the power of the Montessori method, where self-discovery and hands-on exploration guide children on a personalized learning journey. Our dedicated, Montessori-trained teachers create a stimulating and supportive atmosphere where every child thrives. We don't just focus on academics – we open doors to a world of knowledge, from language and math to science and social studies. At Baby Villa Montessori, we're nurturing not only future scholars, but also confident and innovative leaders who are prepared to embrace the world with a thirst for discovery.</p>
        
      </div>
      <img style={{width:'100%'}} src={Welcome} alt="" />
      
      
      
    </>
  )
}

export default Aboutus
