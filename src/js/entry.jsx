const React = require("react");
const ReactDOM = require("react-dom");
import { Page, Hero, Section, HorizontalSplit, Footer } from "neal-react";
import Feature from './components/featurette.jsx';
import Features from './components/features.jsx';
import ShowCase from './components/showcase.jsx';
import Case from './components/case.jsx';

global.jQuery = require('jQuery');

const businessAddress = (
  <address>
    <strong>Pippo</strong><br/>
    1337 Market Street, Suite 1337<br/>
    San Francisco, CA 94103<br/>
    +1 (123) 456-7890
  </address>
);

let page = (
    <Page>
        <Hero backgroundImage={require("file!../img/lp_background_darken.jpg")}
              className="text-xs-center">
            <h1 className="display-5">Enhance the way you teach programming  </h1>
            <p className="lead">Livecode without distracting your audience. Choose a window to mirror on the secondary display. Full screen.</p>
            <p>
                <a href="https://github.com/vzaccaria/teasy-2.0" target="_blank" className="btn btn-white">
                    Get it on Github (only for Mac)
                </a>
            </p>
        </Hero>
        <Features title="the features!">
            <Feature title="great feature 1" markdown=" way **out** " />
            <Feature title="great feature 2" markdown=" way **out** " />
            <Feature title="great feature 3" markdown=" way **out** " />
            <Feature title="great feature 4" markdown=" way **out** " />
        </Features>
        <ShowCase title="Pippo">
            <Case image={require('file!../img/case1.png')} title="sjsj" markdown="aaaks" />
        </ShowCase>
        <Footer brandName="Teasy"
                twitterUrl="http://www.twitter.com/_vzaccaria_"
                githubUrl="https://github.com/vzaccaria/teasy-2.0"
                address={businessAddress}>
        </Footer>
    </Page>
);



ReactDOM.render(page, document.getElementById("container"));
