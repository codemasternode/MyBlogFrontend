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
            return (
                <li key={tutorial.id}>
                    <div>
                        <h3>{tutorial.title}</h3>
                        <img src={tutorial.imageUrl} />
                        <div>
                            <p>{tutorial.overview}</p>
                        </div>
                    </div>
                </li>
            )
        })
    }


    render() {
        return (
            <div>
                <ul>
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