 import React, { Component } from 'react'
 import { BrowserRouter, Route, Routes } from "react-router-dom"
 import LoadingBar from 'react-top-loading-bar'
 import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import News from './News';
import About from './About';
import Contect from './Contect';
import Addsection from './Addsection';
 
 
 
 export class App extends Component {
  pageSize = 12
  apiKey = process.env.REACT_APP_NEWS_API
   
  state = {
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

   render() {
     return (
       <div>
       <BrowserRouter>
       <Navbar/>
       <LoadingBar
       height={3}
        color='#060008'
        progress={this.state.progress}
        
      />
      
        
      <Routes>
        <Route exact path='/'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/>}/>
        <Route exact path='/entertainment'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/>}/>
        <Route exact path='/health'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="health"/>}/>
        <Route exact path='/business'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="business"/>}/>
        <Route exact path='/sports'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="sports"/>}/>
        <Route exact path='/science'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="science"/>}/>
        <Route exact path='/technology'element={ <News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="technology"/>}/>
        <Route exact path='/about'element={<About />}/>
        <Route exact path='/contect'element={ <Contect/> }/>
      </Routes>
      
     </BrowserRouter>
           <Footer/>
       </div>
     )
   }
 }
 
 export default App
 