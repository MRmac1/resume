/**
 * Created by mr_mac1 on 16/5/19.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';

class siglePageSample extends Component {
    render() {
        const { pages } = this.props;
        return (
            <div className="section">
                <h1 className="">Resume</h1>
                <h3>{this.props.pageName}</h3>
                <p>fullPage.js — 项目导航演示</p>
            </div>
        );
    }
}

module.exports = siglePageSample;