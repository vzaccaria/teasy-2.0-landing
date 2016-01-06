import Markdown from 'react-markdown';
import Feature from './featurette.jsx';
import React from 'react';
import { Page, Hero, Section, HorizontalSplit } from "neal-react";

export default (props) => {
    let { title, children } = props;
    return (
        <Section heading={title}>
            {children}
        </Section>);

}
