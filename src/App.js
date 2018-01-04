import logo from './logo.svg';
import genie from './genie.png';

import './App.css';

import {TRACKING_NO_TEMPLATE} from './constants'
import React, {Component} from 'react';
import TrackingBoard from "./features/board/TrackingBoard";

let items = [
    {
        name: 'Blue Slim Back Cover for Huawei Matebook tablet',
        trackingNumber: 'RY713082696CN',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/Fashion-Ultra-Thin-Slim-Lightweight-PC-Protective-Skins-Case-Back-Cover-For-Huawei-MateBook-HZ-W09/32725937032.html',
        trackingUrl: `https://track24.net/?code=${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Tempered Glass for Huawei Matebook tablet',
        trackingNumber: 'LX058643803CN',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/Tempered-Glass-membrane-For-Huawei-MateBook-12-inch-Steel-film-Tablet-PC-Screen-Protection-Toughened-HZ/32838792953.html',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Smart PU Leather cover for Huawei Matebook tablet',
        trackingNumber: 'LX058644485CN',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/Case-For-Huawei-MateBook-Case-Cover-12-inch-PU-Leather-Protective-Tablet-PC-For-HUAWEI-MateBook/32776697770.html',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'DC Jack for SAMSUNG laptop',
        trackingNumber: '06996280600',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/NEW-DC-Power-Jack-Connector-for-SAMSUNG-np-700z3a-700z4a-700z5a-700z5b-700g7a-700g7c-DC/32664114003.html',
        trackingUrl: `https://track24.net/?code=${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Laptop CPU Cooling Fan for SAMSUNG laptop',
        trackingNumber: 'UBY7410777015124',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/Free-shipping-Brand-New-laptop-Cooling-Fan-for-SAMSUNG-NP700Z5B-700Z5A-700z5c-700Z5-A-pair-left/1915167628.html',
        trackingUrl: `https://track24.net/?code=${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Bottom shell for SAMSUNG laptop',
        trackingNumber: 'UBY7410655015123',
        orderedFrom: 'AliExpress/China',
        productUrl: 'https://www.aliexpress.com/item/new-Bottom-shell-for-SAMSUNG-LCD-15-6-NP700Z5-NP700Z5A-NP700Z5B-NP700Z5C-Bottom-case-Bottom-base/32807491638.html',
        trackingUrl: `https://track24.net/?code=${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'LCD Touchscreen Digitizer For Lenovo A750',
        orderedFrom: 'Ebay/China',
        productUrl: 'https://www.ebay.com.au/itm/Brand-New-Lcd-Touch-Screen-Lens-Glass-Digitizer-For-Lenovo-A750-GS-168/181986094267'
    },
    {
        name: 'Refillable Ink Cartridges for WF 645 Printer',
        trackingNumber: 'LP009098069HK',
        status: 'Handed-over to OzPost',
        orderedFrom: 'Ebay/China',
        productUrl: 'https://www.ebay.com.au/itm/NONOEM-Empty-Refillable-Ink-Cartridges-for-Workforce-645-840-845-WF-7510-WF-7520/372055670595',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Pen for Huawei Matebook tablet',
        trackingNumber: '00093459160075963519',
        status: 'Delivered',
        orderedFrom: 'Catch.com.au/VIC',
        productUrl: 'http://consumer.huawei.com/en/tablets/matebook/mobile/stylus/',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Respro Cinqro Anti Pollution Mask',
        trackingNumber: '2QY009152101000930203',
        orderedFrom: 'Wiggles/UK',
        productUrl: 'http://respro.com/store/product/cinqro-mask',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    },
    {
        name: 'Respro Ultralight Anti Pollution Mask',
        trackingNumber: '2QY009151701000930206',
        orderedFrom: 'Wiggles/UK',
        productUrl: 'http://respro.com/store/product/ultra-light',
        trackingUrl: `https://babar4spamgmail.aftership.com/${TRACKING_NO_TEMPLATE}`
    }
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">
                        <img src={logo} className="App-logo" alt="logo"/>
                        React Tracking for Rashid
                        <img src={genie} className="genie" alt="genie"/>
                    </h1>
                </header>
                <div className="container">
                    <TrackingBoard items={items}/>
                </div>
            </div>
        );
    }
}

export default App;
