import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';



class SmurfList extends Component {

    



    render () {
        return (
            <div className='Smurf-List-Wrapper'>

                <div className='Smurf-List-Data'>

                    {this.props.smurfs.map(smurfBeingExamined => {
                        return (
                            <div className="Individual-Smurf-Wrapper">
                               <p> Name: {smurfBeingExamined.name} </p>
                               <p> Age: {smurfBeingExamined.age} </p>
                               <p> Height: {smurfBeingExamined.height} </p>
                            </div>
                        );
                    })}
                </div>
                
                
                    
            
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
        

//     }
// }

// export default connect( mapStateToProps, {} )(SmurfList);
export default (SmurfList);