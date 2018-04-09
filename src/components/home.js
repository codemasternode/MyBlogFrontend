import React from 'react';

class Home extends React.Component {

    constructor() {
        super();

    }

    componentDidMount() {
        this.props.fetchHomeTut();
    }

    renderHomeTutorials() {

    }

    render() {
        return (
            <div className="content-wrapper">
                <img src="../../assets/tlonastrone.jpg" id="tlo" />
                <div className="container">
                    <div className="custom-home">
                        <h3>Tutoriale</h3>
                        <div className="row">

                            <br />
                            {this.renderHomeTutorials()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;