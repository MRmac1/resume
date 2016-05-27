require('bootstrap/dist/css/bootstrap.min.css');
require('fullpage.js/jquery.fullPage.css');
require('imports?$=jquery!bootstrap/dist/js/bootstrap.min.js');
require('imports?$=jquery!fullpage.js/jquery.fullPage.js');

import React, {Component} from 'react';
import {render} from 'react-dom';
import PageContainer from './page.jsx'

const pages = ['HomePage', 'BasicInfo', 'AboutWork', 'TechStack', 'WorkExperience', 'ContactMe'];

const PageContent = (props) => {
    return (
        <div className="section">
            <h3>{props.page}</h3>
            <p>fullPage.js — 基本演示</p>
        </div>
    )
};

class FullPages extends Component {

    componentDidMount() {
        console.log(123);
        $('#fullPage').fullpage({
            sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90'],
            'navigation': true
        });
    }

    render() {
        return (
            <div id="fullPage"> {
                    this.props.pages.map( (page, i) => {
                        return (
                            <PageContent page={page} key={i}/>
                        )
                    })
                }
            </div>
        )
    }
}

render( <FullPages pages={pages}/>, document.getElementById('container') );
