//hierarchy
//ReviewList
  //SingleReview
    //UserData
    //ReviewData

import React from 'react';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';
// import SingleReview from './SingleReviewimport { clearLine } from 'readline';

import { userInfo } from 'os';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import {faStar} from '@fortawesome/free-regular-svg-icons'

import {EntireReviewSection, AllReviews, Options, SingleReview, VerticalDivider, UserData, Avatar, UserStats, UserName, Location, Elite, ReviewData, FoodPicture, Useful, Funny, Cool, Flag, Divider, SearchSortLanguage, Search, SearchButton} from './reviewListStyles.js'



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
      console.log(this.state.reviews[0]._id, 'id')
    })
    .catch(err => console.error(err));
  }

  displayRatings(review) {
    let rating = review.reviewData.rating
    if (rating === 1) { 
      return <span><FontAwesomeIcon icon="star" color="#cc8b1f"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 2) {
      return <span><FontAwesomeIcon icon="star" color="#dcb228"/><FontAwesomeIcon icon="star" color="#dcb228"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 3) {
      return <span><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#f0991e"/><FontAwesomeIcon icon="star" color="#eee"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else if (rating === 4) {
      return <span><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#f26a2c"/><FontAwesomeIcon icon="star" color="#eee"/></span>
    } else {
      return <span><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/><FontAwesomeIcon icon="star" color="#dd050b"/></span>
    }
    
  }

  isElite(review) {
    if (review.user.elite === true) {
      return `Elite '18`
    }
  }

  
  createData() {
    for(let i = 0; i < 100; i++) {
      axios.post('/api/reviews')
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
    }
  }

  increaseUsefulVotes(review) {
    axios.post(`/api/reviews/${review._id}/usefulVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }

  increaseFunnyVotes(review) {
    axios.post(`/api/reviews/${review._id}/funnyVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }

  increaseCoolVotes(review) {
    axios.post(`/api/reviews/${review._id}/CoolVotes`)
    .then(() => this.fetchReviews())
    .catch(err => console.log(err));
  }

  //create functions that post to new routes for buttons on bottom
 

  render () {

    const size = 10;
    const reviewDisplay = this.state.reviews.slice(0, size).map((review, index) => {
      const dateToFormat = new Date(review.reviewData.time_created)
      return (
        <SingleReview key={index}>
            
            <UserData >

              <Avatar src={review.user.image_url}/>
              <UserStats >

                <UserName href="https://www.yelp.com/">{review.user.name}</UserName>
                <Location>{review.user.location}, CA</Location>
                <div className="user-friends"><FontAwesomeIcon icon="user-friends" color="#F15C00"/> <b>{review.user.friends}</b> friends</div>
                <div className="user-review-number"><FontAwesomeIcon icon="star" color="#F15C00"/> <b>{review.user.reviews}</b> reviews</div>
                <div className="user-photo-number"><FontAwesomeIcon icon="camera" color="#F15C00"/> <b>{review.user.photos}</b> photos</div>
                <Elite>{this.isElite(review)}</Elite>
              </UserStats>
            
              <Divider/>
            
            </UserData>

            <br/>

            <ReviewData className="review-data">
           
              <div className="review-score-date">


                <span className="review-rating">{this.displayRatings(review)}</span> {'  '}
                <Moment format="MM/DD/YY" date={dateToFormat}/> 

              </div>
              <br/>
              <div className="review-text">{review.reviewData.text}</div>
              <br/>
              <FoodPicture src={review.reviewData.review_pic}/>
              <br/><br/>
              <div className="review-buttons">
                <font size="2"><b>Was this review ...?</b></font>
                <br/><br/>
                <Useful onClick={() => this.increaseUsefulVotes(review)}><FontAwesomeIcon icon="lightbulb" /> Useful {review.usefulVotes}</Useful> {'  '}
                <Funny onClick={() => this.increaseFunnyVotes(review)}><FontAwesomeIcon icon="thumbs-up" /> Funny {review.funnyVotes}</Funny> {'  '}
                <Cool onClick={() => this.increaseCoolVotes(review)}><FontAwesomeIcon icon="user-astronaut" /> Cool {review.coolVotes}</Cool>{'  '}
                <Flag><FontAwesomeIcon icon="flag" /></Flag>
              </div>
              
              <br/>
             ` 
              
            <Divider/>
            

            </ReviewData>


        </SingleReview>
      )
    })

    return (
      <EntireReviewSection>
        <h2><font color="#d32323">Recommended Reviews </font>for {this.props.restaurant}</h2>

        <SearchSortLanguage className="search-sort-language">
          <form>
            <Search type="text" placeholder="Search within the reviews" />
            <SearchButton ><FontAwesomeIcon icon="search" color="#eee"/></SearchButton> {'  '}
          
            Sort by
            <select> 
              <Options value="yelp-sort">Yelp Sort</Options>
              <Options value="newest">Newest First</Options>
              <Options value="oldest">Oldest First</Options>
              <Options value="highest-rated">Highest Rated</Options>
              <Options value="lowest-rated">Lowest Rated</Options>
              <Options value="elites">Elites</Options>
            </select> {'  '}
            Language
            <select>
              <Options value="english">English ({this.state.reviews.length})</Options>
            </select>
          </form>
        </SearchSortLanguage>

        <AllReviews>
          {reviewDisplay}
        </AllReviews>

        Page 1 of {Math.ceil(this.state.reviews.length / 10)}
        {/* <button onClick={() => this.createData()}>Create data</button> */}
      </EntireReviewSection>
    )
  }
}

export default ReviewList;