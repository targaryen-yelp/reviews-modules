//hierarchy
//ReviewList
  //SingleReview
    //UserData
    //ReviewData

import React from 'react';
import axios from 'axios';
import SingleReview from './SingleReview';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      // reviewData: {
      //   id: '',
      //   rating: 0,
      //   time_created: '',
      //   text: '',
      //   url: '',
      // },
      // user: {
      //   image_url: '',
      //   name: '',
      //   location: '',
      //   friends: 0,
      //   reviews: 0,
      //   photos: 0,
      //   elite: undefined,
      // },
      // restaurants: [],
    } 

    // this.fetchReviews = this.fetchReviews.bind(this);
    
    
  }


  componentDidMount() {
    this.fetchReviews();
    console.log(this.state.reviews, 'what')
  }

  fetchReviews() {
    const newReviews = this.state.reviews;
    axios.get('/api/reviews')
    .then(result => {
      this.setState({reviews: result.data}) 
      console.log(this.state.reviews[0])
    })
    .catch(err => console.error(err));
  }

  
  
  createData() {
    for(let i = 0; i <= 100; i++) {
      axios.post('/api/reviews')
      .then(result => console.log(result.data))
      .catch(err => console.log(err))
    }
  }


  render () {
    return (
      <div>
        Reviews

        <SingleReview 
        reviews={this.state.reviews}
        />

        {/* <button onClick={() => this.createData()}>Create data</button> */}
      </div>
    )
  }
}

export default ReviewList;