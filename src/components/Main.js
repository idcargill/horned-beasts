import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import BeastList from './BeastList.js';

class Main extends React.Component{
    render() {
        return (
            <>
              <HornedBeasts 
                title='Fanged Cat' 
                src='https://via.placeholder.com/150' 
                description='Purring Death'/>
              <HornedBeasts 
                title='Dog & Jackalope Hybrid'
                src='https://via.placeholder.com/150'
                description='A huge horned animal that likes bacon.'/>
            <BeastList />
            </>
            
        )
    }
}

export default Main; 