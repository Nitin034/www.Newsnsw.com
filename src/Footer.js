 import React, { Component } from 'react'
 import imglogo from "./image/Screenshot (82).png"
 
 export class Footer extends Component {

  static defaultProps ={
    country: "in",
    pageSize: 4,
    
  }
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
      
    }
   
  }
  async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=697bea5637814035a04c8fb792e8302b&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }


   render() {
    console.log("render")
     return (


        
        <div>
        <footer className="area">
         
         <div className="foo_top_header_one section_padding_100_70">
             <div className="container">
                 <div className="row">
                     <div className="col-12 col-md-6 col-lg-3">
                         <div className="part">
                             <h5>About Us</h5>
                             <p>NSW News is a cutting-edge news API providing up-to-date information and breaking news for the state of New South Wales, Australia. With a dedicated team of journalists and a commitment to accuracy, NSW News delivers the most important and relevant stories from across the state. Whether you're a business, media outlet, or just interested in staying informed, our API provides quick and easy access to the latest news and events in New South Wales.</p>
                             <p>Stay ahead of the curve with NSW News.</p>
                         </div>
                         <div className="part m-top-15">
                             <h5>Social Links</h5>
                      <div className="social_links social">
                        <i className="fa fa-facebook-square"></i>
                        <i className="fa fa-github-square"></i>
                        <i className="fa fa-linkedin-square"></i>
                        <i className="fa fa-instagram"></i>
                    </div>
                         </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-3">
                         <div className="part">
                             <h5>Tags Widget</h5>
                             <ul className="widget">
                                 <li><a href="#">Classy</a></li>
                                 <li><a href="#">Blog</a></li>
                                 <li><a href="#">Creative</a></li>
                                 <li><a href="#">One Page</a></li>
                                 <li><a href="#">Multipurpose</a></li>
                                 <li><a href="#">Minimal</a></li>
                                 <li><a href="#">Classic</a></li>
                                 <li><a href="#">Medical</a></li>
                             </ul>
                         </div>
                         <div className="part m-top-15">
                             <h5>Important Links</h5>
                             <ul className="links">
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Terms & Conditions</a></li>
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>About Licences</a></li>
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Help & Support</a></li>
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Careers</a></li>
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Privacy Policy</a></li>
                                 <li><a href="#"><i className="fa fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li>
                             </ul>
                         </div>
                     </div>
                     <div className="col-12 col-lg-3">
                         <div className="part">
                             <h5>Latest News</h5>
                             <div className=''> 
                             {this.state.articles.map((element)=>{
                            return <div className="blog_area" key={element.url}>
                                 <div className="thumb">
                                 <img className="img-fluid" src={element.urlToImage}alt=""/>
 
                                 </div>
                                 <a href={element.url}>{element.title?element.title.slice(0, 25):" "}...</a>
                                 <p className="date">{element.publishedAt}</p>
                                 <p>{element.description?element.description.slice(0, 50):" "}... </p>
                             </div>
                            })}
                         </div>
                     </div>
                     </div>
                     <div className="col-12 col-md-6 col-lg-3">
                         <div className="part">
                             <h5>Quick Contact</h5>
                             <div className="single_contact_info">
                                 <h5>Phone:</h5>
                                 <p>+7860031131   +7677990834</p>
                             </div>
                             <div className="single_contact_info">
                                 <h5>Email:</h5>
                                 <p>support@Neversettle67world@gmail.com  12nitinkumaryd@gmail.com</p>
                             </div>
                         </div>
                         <div className="part">
                             <h5>Latest Works</h5>
                             <div className="works">
                                <a className="works_img" href="img/gallery/1.jpg"><img src={imglogo} alt=""/></a>
                                 <a className="works_img" href="img/gallery/4.jpg"><img src="img/gallery/4.jpg" alt=""/></a>
                                 <a className="works_img" href="img/gallery/5.jpg"><img src="img/gallery/5.jpg" alt=""/></a>
                                 <a className="works_img" href="img/gallery/7.jpg"><img src="img/gallery/7.jpg" alt=""/></a>
                                 <a className="works_img" href="img/gallery/10.jpg"><img src="img/gallery/10.jpg" alt=""/></a>
                                 <a className="works_img" href="img/gallery/11.jpg"><img src="img/gallery/11.jpg" alt=""/></a>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
         <div className=" bottom_header_one section_padding_50 text-center">
             <div className="container">
                 <div className="row">
                     <div className="col-12">
                         <p>© All Rights Reserved by <a href="#">Never settle67 World (with all love)<i className="fa fa-love"></i></a></p>
                     </div>
                 </div>
             </div>
         </div>
     </footer>   
                     
                      
                     
     </div>
     )
   }
 }
 
 export default Footer
 