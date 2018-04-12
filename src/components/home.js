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
    }

    componentDidUpdate() {
        if (this.props.data) {
            console.log(this.props.data.tutorials.data)
        }
    }

    renderHomeTutorials() {
        return (
            _.map(this.props.data.tutorials.data, tutorial => {
                return (

                    <div key={tutorial.id} className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
                        <img src={tutorial.imageUrl} />
                        <div className="homek">
                            <h3>{tutorial.title}</h3>
                            <p>{tutorial.overview}</p>
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

                <div className="custom-home">
                    <h1 id="title">Tutoriale</h1>
                    <div className="row">
                        {this.renderHomeTutorials()}
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
