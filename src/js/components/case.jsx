import Markdown from 'react-markdown';
import Feature from './featurette.jsx';
import React from 'react';
import { Page, Hero, Section, HorizontalSplit } from "neal-react";

export default (props) => {
    let { image, title, markdown } = props;
    return (
        <HorizontalSplit padding="md">
            <img style={{maxWidth: '100%'}} src={image} />
            <Feature title={title} markdown={markdown} />
        </HorizontalSplit>);
}
