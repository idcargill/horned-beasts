import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render() {
        return (
            <>
              <HornedBeasts 
                title='Fanged Cat' 
                url='https://via.placeholder.com/150' 
                description='Big Fangs'/>
              <HornedBeasts 
                title='Dog & Jackalope Hybrid'
                url='https://via.placeholder.com/150'
                description='A huge horned animal that likes bacon.'/>
            </>
        )
    }
}

export default Main;