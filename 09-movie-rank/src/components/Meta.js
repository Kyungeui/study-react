import React from 'react';
import { Helmet, HelmetProvdier } from 'react-helmet-async'

const Meta = (props) => {
    return (
        <HelmetProvdier>
            <Helmet>
                <meta charset='utf-8'/>
                <title>{props.title}</title>
                {/* SEO 태그  */}
                <meta name='description' content={props.description} />
                <meta name='keywords' content={props.keywords} />
                <meta name='author' content={props.author} />
                <meta property='og:type' content='website' />
                <meta property='og:title' content={props.title} />
                <meta property='og:description' content={props.description} />
                <meta property='og:image' content={props.image} />
                <meta property='og:url' content={props.url} />
            </Helmet>
        </HelmetProvdier>
    );
};

Meta.defaultProps = {
    title: 'BoxOffice',
    description: 'React.js로 구현한 영화순위 대시보드',
    keywords: 'React,영화순위,박스오피스',
    author: '호쌤',
    image: window.location.protocol + '//' + window.location.hostname + ':' + window.location.port + '/logo512.png',
    url: window.location.href
}

export default Meta;