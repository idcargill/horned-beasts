import React from 'react';
import HornedBeasts from './HornedBeasts';
import beasts from './beasts.json';

class BeastList extends React.Component {
    render() {
        return (
            <>
            {beasts.map((beast) => (
                <HornedBeasts 
                  title={beast.title}
                  src={beast.image_url}
                  description={beast.description}
                  />
            ))}
            </>
        )

    }
}

export default BeastList;