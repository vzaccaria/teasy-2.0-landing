import Markdown from 'react-markdown';
import React from 'react';

module.exports = React.createClass({
    render() {
    let { title, markdown } = this.props;
    return (
        <div>
            <p className="lead">{title}</p>
            <Markdown source={markdown} />
          </div>
    );
        }
})
