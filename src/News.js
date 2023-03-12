import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppinar from './Sppinar';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


 

export class News extends Component {
    
  static defaultProps ={
    country: "in",
    pageSize: 12,
    category: "general",
  }
  static defaultProps ={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    
  }
   capitalizeFirstLetter = (string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} NEWNEWS` ;
  }
  
  async updateNews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false  })
    this.props.setProgress(100);
  }
   
  async componentDidMount(){
    this.updateNews();
  }

   handlePrevClick = async ()=>{
    this.setState({page: this.state.page - 1});
    this.updateNews();
   }

   handleNextClick =  async ()=>{
  console.log("next");
  this.setState({page: this.state.page + 1})
  this.updateNews();
 
}
fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({page: this.state.page + 1})
    
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
       totalResults: parsedData.totalResults
        
    })
};


  render() {
    console.log("render")
    return (
      <div style={{marginTop:"100px"}} className='justify-content-center'>
      <h1 className='text-center my-4' ><strong>NSW NEWS PRESENTS - Top {this.capitalizeFirstLetter(this.props.category)} Headline </strong></h1>
      {this.state.loading && <Sppinar/>}

      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Sppinar/>}
        >
        <div className='container'> 

      <div className="row">
      {this.state.articles.map((element)=>{
        return <div className="col-md-3" key={element.url} > 
        <NewsItem title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 90):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div> 
        
      })}
      
        </div>
        </div>
        </InfiniteScroll>
        
      </div>
    )
  }
}

export default News
