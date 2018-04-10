import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeTutorials, fetchHomeBlogPosts } from '../actions/home';
import _ from 'lodash';

class Home extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.fetchHomeTutorials();
        this.props.fetchHomeBlogPosts();
    }

    componentDidUpdate() {
        if (this.props.data.tutorials) {
            _.map(this.props.data.tutorials, tutorial => {
                console.log(tutorial.id)
            })
        }
    }

    renderHomeTutorials() {
        return (
            _.map(this.props.data.tutorials, tutorial => {
                return (
                    <div key={tutorial.id}>
                        <div className="col-sm-12 col-md-6 col-lg-5">
                            <img src={tutorial.title} />
                        </div>
                    </div>
                )
            })

        )
    }

    render() {
        return (
            <div className="content-wrapper">
                <img src="../../assets/gory-w-ciazy.jpg" id="tlo" />
                <div className="container">
                    <div className="custom-home">
                        <h1 id="title">Tutoriale</h1>
                        <div className="row">
                            <hr />
                            {this.renderHomeTutorials()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.homeData
    }
}

export default connect(mapStateToProps, { fetchHomeTutorials, fetchHomeBlogPosts })(Home);
