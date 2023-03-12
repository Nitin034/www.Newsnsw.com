//using Next and Previous buttan //


import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Sppinar from './Sppinar';
import PropTypes from 'prop-types'


 

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
      loading: false,
      page: 1
      
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} NEWNEWS` ;
  }
  async componentDidMount(){
    console.log("cdm")
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=697bea5637814035a04c8fb792e8302b&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
  }

   handlePrevClick = async ()=>{
     console.log("Previous");
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=697bea5637814035a04c8fb792e8302b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
     this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
  this.setState({
    page: this.state.page - 1,
    articles: parsedData.articles,
    loading: false
  })
 }

   handleNextClick =  async ()=>{
  console.log("next");
  if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=697bea5637814035a04c8fb792e8302b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
    loading: false
  })
 }
}


  render() {
    console.log("render")
    return (
      <div className='container justify-content-center'>
      <h1 className='text-center my-3'><strong>NSW NEWS PRESENTS - Top {this.capitalizeFirstLetter(this.props.category)} Headline </strong></h1>
      {this.state.loading && <Sppinar/>}
      <div className="row">
      {!this.state.loading && this.state.articles.map((element)=>{
        return <div className="col-md-3" key={element.url} > 
        <NewsItem title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 90):""} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div> 
        
      })}
      
        </div>
        <div className="container d-flex justify-content-between my-3">
        <button disabled={this.state.page<=1} type="button" className="btn btn-danger" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-danger" onClick={this.handleNextClick}>next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
