/**
 * Created by mr_mac1 on 16/5/19.
 */

//定义几个页面的组成

import React, {Component} from 'react';
import {render} from 'react-dom';
import siglePageSample from './siglePageSample.jsx'


class PageContainer extends Component {
    render() {
        const { pages } = this.props.pages;
        return (
            <div className="section">
                {pages.map(pageName =>
                    <siglePageSample
                        key={pageName}
                        pageName={pageName}
                    />
                )}
            </div>
        );
    }
}

module.exports = PageContainer;