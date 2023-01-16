import React from "react";
import { Link, useRouteMatch, Route } from "react-router-dom";
import SinglePage from "./SinglePage";

const About = (props: any) => {
    const { url, path } = useRouteMatch();
    return (
        <div>
            <div className="about__content">
                <ul className="about__list">
                    <li>
                        <Link to={`${url}/about-app`}>About App</Link>
                    </li>
                    <li>
                        <Link to={`${url}/about-author`}>About Author</Link>
                    </li>
                </ul>
                <Route path={`${path}/:slug`}>
                    <SinglePage />
                </Route>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <a style={{color: "grey"}} href="https://ibaslogic.com/react-tutorial-for-beginners/">Complete Tutorial Link</a>
            </div>
        </div>
    )
}
export default About;