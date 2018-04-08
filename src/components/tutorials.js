import React from 'react';
import { connect } from 'react-redux';
import fetchTutorials from '../actions/tutorials';
import _ from 'lodash';

class Tutorials extends React.Component {
    constructor() {
        super();
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        this.props.fetchTutorials();
    }

    renderList() {
        return _.map(this.props.tutorials, tutorial => {
            const color = {
                background: tutorial.tutorialCategory.color
            }
            return (
                <li className="list-group-item" key={tutorial.id}>
                    <div style={color}>
                        <img src={tutorial.imageUrl} />
                        <div className="tutorial-overview">
                            <h2 className="header">{tutorial.title}</h2>
                            <p>{tutorial.overview}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }


    render() {
        return (
            <div className="container custom-tutorials">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tutorials: state.tutorials.data
    }
}

export default connect(mapStateToProps, { fetchTutorials })(Tutorials);