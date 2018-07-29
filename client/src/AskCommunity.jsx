import React from 'react';
import styled from 'styled-components';

import {EntireSection, Header, Divider, Button, Questions} from './askCommunityStyles'




class AskCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaruantName: '',
      questions: [],
    }
  }

  compenentDidMount() {
    console.log(this.props.restaurant)
  }

  

  render() {
    return (

    <EntireSection>
      <Header>Ask the Community</Header>
      <Divider/>
      <Questions>
        Yelp users haven’t asked any questions yet about {this.props.restaurant}
      </Questions>
      <br/>
      <Button>Ask a Question</Button>
    </EntireSection>

    )
  }
}

export default AskCommunity;
