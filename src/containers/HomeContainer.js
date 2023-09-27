import React from 'react';

import BannerContainer from './BannerContainer';
import SectionContainer from './SectionContainer';


export default function HomeContainer() {
    return (
        <div >
            <BannerContainer />
            <SectionContainer title={'All products'} />
        </div>
    );
}