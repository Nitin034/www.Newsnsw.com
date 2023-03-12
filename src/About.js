import React from 'react'
import img1 from "./image/Screenshot (82).png"
import imgrt from "./image/Screenshot (95).png"
import imgfou from "./image/nitin.JPG"

export default function About() {
  return (
    <div className='contenar' style={{margin:"100px" }}>
    <div class="row g-0 bg-light position-relative ">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={img1} class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">NSW NEWS</h5>
    <p>The full name of NSW News is NaverSettle67 World News which is a practice base project,NSW News is a cutting-edge news API providing up-to-date information and breaking news for the state of New South Wales, Australia. With a dedicated team of journalists and a commitment to accuracy, NSW News delivers the most important and relevant stories from across the state. Whether you're a business, media outlet, or just interested in staying informed, our API provides quick and easy access to the latest news and events in New South Wales. Stay ahead of the curve with NSW News.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
    <div class="row g-0 bg-light position-relative ">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={imgrt} class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Neversettle67 World</h5>
    <p>Neversettle67 World is a website development company founded by Nitin Yadav that specializes in using React.js technology. React.js is a popular JavaScript library for building user interfaces, and it's known for its efficiency, flexibility, and scalability. Neversettle67 World leverages these strengths to deliver high-quality, dynamic websites to its clients. The company is dedicated to helping businesses create online experiences that engage their customers and drive growth. With a focus on delivering cutting-edge solutions, Neversettle67 World is poised to continue setting the bar for website development in the industry.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
    <div class="row g-0 bg-light position-relative ">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={imgfou} class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">Founder</h5>
    <p>Hello everyone, My name is Nitin Yadav and I am a front-end developer. I am passionate about creating beautiful and user-friendly websites and applications. To keep my skills sharp and up-to-date, I constantly work on new projects in my free time. Whether it's experimenting with new technologies or improving upon existing ones, I love pushing the limits of what's possible on the web. If you're looking for someone who is dedicated to their craft and eager to learn, look no further than me. I'm excited to share my passion for front-end development with you!"</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </div>
</div>
  
    </div>
  )
}
