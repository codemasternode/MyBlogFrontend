import React from 'react';
import { connect } from 'react-redux';
import { fetchHomeTutorials, fetchHomeBlogPosts } from '../actions/home';
import _ from 'lodash';
import { Link } from 'react-router-dom'

class Home extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.fetchHomeTutorials();
    }

    componentDidUpdate() {
        if (this.props.data) {
            console.log(this.props.data.tutorials.data.find(x => x.id === 6))
        }
    }

    renderHomeTutorials() {

        return (
            _.map(this.props.data.tutorials.data, tutorial => {
                console.log('To ejst',tutorial.id,' element: ', tutorial)
                return (

                    <div key={tutorial.id} className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
                        <Link to={`/tutorials/${tutorial.id}`}>
                            <img src={tutorial.imageUrl} />
                        </Link>
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
        const array = this.props.data.tutorials.data
        return (
            <div className="content-wrapper">
                <img src="../../assets/gory-w-ciazy.jpg" id="tlo" />

                <div className="custom-home">
                    <h1 id="title">Tutoriale</h1>
                    <div className="row">
                        {this.renderHomeTutorials()}
                    </div>
                </div>
                <a href="http://www.interia.pl">Tutorials</a>
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
