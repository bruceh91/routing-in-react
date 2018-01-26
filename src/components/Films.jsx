import React from 'react';
import List from './List';

class Films extends React.Component{
  
    logTitle(title){
        this.setState({title: title});
    }
   
    render() {
        return (
            <div>
                <List logTitle={this.logTitle.bind(this)} />
           </div>)
    }
}

export default Films;