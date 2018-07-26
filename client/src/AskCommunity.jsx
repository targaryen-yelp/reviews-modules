import React from 'react';


class AskCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaruantName: '',
    }
  }

  render() {
    return (

    <div>
      <h1>Ask the Community</h1>
 
      <span>
        Yelp users haven’t asked any questions yet about RESTAURANT-NAME.
      </span>
      <br/>
      <button>Ask a Question</button>
    </div>

    )
  }
}

export default AskCommunity;
