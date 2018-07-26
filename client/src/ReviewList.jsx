//hierarchy
//ReviewList
  //SingleReview
    //UserData
    //ReviewData

import React from 'react';
import axios from 'axios';
import SingleReview from './SingleReview';
import { userInfo } from 'os';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    } 
  
  }


  componentDidMount() {
    this.fetchReviews();
  }



  fetchReviews() {
    axios.get('/api/reviews')
    .then(result => {
      this.setState({reviews: result.data}) 
      console.log(this.state.reviews[0])
    })
    .catch(err => console.error(err));
  }

  
  
  createData() {
    for(let i = 0; i < 100; i++) {
      axios.post('/api/reviews')
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
    }
  }

  

  //I will map the single reviews here
  render () {

    const size = 10;
    const reviewDisplay = this.state.reviews.slice(0, size).map((review, index) => {
      return (
        <li key={index} className="single-review">

            <div className="user-data">

              {/* <img src={review.user.image_url} className="user-picture"/> */}
              <div className="user-name">{review.user.name}</div>
              <div className="user-location">{review.user.location}</div>
              <div className="user-friends">{review.user.friends}</div>
              <div className="user-review-number">{review.user.reviews}</div>
              <div className="user-photo-number">{review.user.photos}</div>
            
            </div>

            <br/>

            <div className="review-data">
            <div className="review-rating">{review.reviewData.rating}</div>
            <div className="review-date">{review.reviewData.time_created}</div>
            <div className="review-text">{review.reviewData.text}</div>
            <div className="review-buttons">
              Was this review ...?
              <br/>
              <button>Useful</button>
              <button>Funny</button>
              <button>Cool</button>
            </div>
            
            <br/>
             
            </div>
            
        </li>
      )
    })

    return (
      <div>
        <h2>Recommended Reviews for RESTAURANT-NAME</h2>
        <div className="search-sort-language">
          <input type="text" placeholder="Search within the reviews" />
          Sort by
          <select> 
            <option value="yelp-sort">Yelp Sort</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="highest-rated">Highest Rated</option>
            <option value="lowest-rated">Lowest Rated</option>
            <option value="elites">Elites</option>
          </select>
          Language
          <select>
            <option value="english">English ({this.state.reviews.length})</option>
          </select>
        </div>

        <ul>
          {reviewDisplay}
        </ul>


        {/* <button onClick={() => this.createData()}>Create data</button> */}
      </div>
    )
  }
}

export default ReviewList;