import React from 'react'
import "../Sass/ConnectionsComponent.scss";
import img1 from "../assets/school1.jpg"
import img2 from "../assets/school2.jpg"
import img3 from "../assets/school3.jpg"

export default function AboutComponent() {
    return (
    <>
    <div className='about-text'>
        <h2>The BMPS Alumni Connect platform serves as a web-based hub that facilitates meaningful connections among alumni, current students, and teachers. Here are some key points about the platform:</h2>
        <p>Alumni Networking: The platform enables alumni to connect with one another, fostering a strong and supportive community. It provides a dedicated space for alumni to engage in discussions, exchange ideas, and collaborate on various initiatives.</p>

<p>Alumni-Student Interaction: BMPS Alumni Connect platform bridges the gap between alumni and current students, allowing them to connect and interact. Alumni can offer guidance, mentorship, and career advice to students, providing valuable insights and support as they navigate their educational and professional journeys.</p>

<p>Alumni-Teacher Engagement: The platform also facilitates interactions between alumni and teachers, promoting ongoing relationships beyond the classroom. Alumni can share their experiences, provide feedback, and contribute to the growth and development of the school community.</p>

<p>Achievement Sharing: BMPS Alumni Connect platform offers a space for alumni to showcase their accomplishments and milestones. Whether it's professional achievements, personal endeavors, or community contributions, alumni can share their success stories, inspiring others and fostering a sense of pride within the community.</p>

<p>Enhanced Communication: The platform serves as a central communication channel, ensuring efficient and streamlined information sharing. Alumni can stay updated on school events, reunions, and alumni gatherings, fostering a sense of belonging and enabling them to actively participate in the school's activities.</p>

<p>Directory and Search Functionality: The platform features a comprehensive alumni directory, allowing users to easily find and connect with their fellow schoolmates based on various criteria such as graduation year, location, or professional background. This functionality enhances networking opportunities and facilitates meaningful connections.</p>
    </div>

    <div>
        <h1 className='aboutgallery'>Our Gallery</h1>
        <img className='schoolimg' src={img1} alt="BMPS" />
        <img className='schoolimg' src={img2} alt="BMPS" />
        <img className='schoolimg' src={img3} alt="BMPS" />
    </div>
    </>
    )
}
