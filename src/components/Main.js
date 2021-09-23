import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import BeastList from './BeastList.js';
import data from '../data/data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        {data.map((i, idx) => (
          <HornedBeasts
            key={idx}
            title={i.title}
            description={i.description}
            image={i.image_url}
            alt={i.keyword}
          />
        ))}
      </>
    );
  }
}

export default Main;
