import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="landing-page-content">
                <div className="jumbotron">
                    <h1>React Redux Demo</h1>
                    <p>
                      Demo presentation to showcase React with Redux in practice.
                    </p>
                    <div className="text-center">
                      <Link to="/" className="btn btn-lg landing-page-btn">
                        Learn More
                      </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
