import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
   let {title, description, imageurl, newsurl, author, date, source} = this.props;
    return (
      <div className='my-2 mx-2 d-flex justify-content-center'>
                <div className="card">
            <img src={!imageurl?"https://images.livemint.com/img/2023/01/26/600x338/Infosys_bonus_shares_1674717463966_1674717464216_1674717464216.jpg":imageurl} className="card-img-top" alt="..."/><span className="badge bg-dark">{source}</span>
            <div className="card-body">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">new
              
            </span>
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}... </p>
                <p className="card-text"><small className="text-muted">By-{!author?"Nitin Yadav":author} On {new Date(date).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" className="btn btn-sm btn-danger">Read More</a>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItem
