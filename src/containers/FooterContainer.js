import React from 'react';
import { useSelector } from 'react-redux';
import FooterOne from '../components/footer/FooterOne';
import FooterTwo from '../components/footer/FooterTwo';
import FooterThree from '../components/footer/FooterThree';

import {
    selectData
} from '../store/initData';


export default function FooterContainer() {
    const data = useSelector(selectData);


    return (
        <>
            <FooterOne
                text={data.store[data.currentLanguage].footer}
                money={data.money[data.currentMoney]}
                currentMoney={data.currentMoney}
            />
            <FooterTwo
                text={data.store[data.currentLanguage].footer}
            />
            <FooterThree />
        </>
    );
}