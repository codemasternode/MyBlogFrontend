import React from 'react';
import { connect } from 'react-redux';
import fetchTutorials from '../actions/tutorials';
import _ from 'lodash';
import { Link } from 'react-router-dom'

class Tutorials extends React.Component {
    constructor() {
        super();
        this.renderList = this.renderList.bind(this);
    }

    componentDidMount() {
        this.props.fetchTutorials();
    }

    componentDidUpdate() {
        if (this.props.tutorials) {
            _.map(this.props.tutorials, tutorial => {
                console.log(tutorial.id)
            })
        }
    }

    renderList() {
        return _.map(this.props.tutorials, tutorial => {
            const color = {
                background: tutorial.tutorialCategory.color,
                'borderRadius': '5px'
            }
            return (
                <li className="list-group-item" key={tutorial.id}>
                    <div style={color}>
                        <Link to={`/tutorials/${tutorial.id}`}>
                            <img src={tutorial.imageUrl} />
                        </Link>
                        <div className="tutorial-overview">
                            <Link to={`/tutorials/${tutorial.id}`}>
                                {tutorial.title}
                            </Link>
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
                <h1 id="title">Tutoriale</h1>
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