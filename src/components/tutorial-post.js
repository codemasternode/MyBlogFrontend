import React from 'react';
import { fetchTutorial } from '../actions/tutorials';
import { connect } from 'react-redux';

class TutorialPost extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchTutorial(id);
    }

    render() {
        if (this.props.tutorial.data) {
            const tutorial = this.props.tutorial.data
            return (
                <div className="container">
                    <h1>{tutorial.title}</h1>
                </div>
            )
        }else{
            return <div>Loading...</div>
        }

       
    }
}

function mapStateToProps(state) {
    return {
        tutorial: state.tutorial
    }
}


export default connect(mapStateToProps, { fetchTutorial })(TutorialPost);