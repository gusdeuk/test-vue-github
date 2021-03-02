import React from 'react';
import {SvgIcon} from '@material-ui/core';

export const CusIconMobile = (props) => {
    return (
        // svg custom icon > use 20X20 VIEWBOX
        <SvgIcon {...props} viewBox="0 0 20 20">

            <g id="mobile">
                <rect id="base20x20" opacity="0" fill="#D8D8D8" x="0" y="0" width="20" height="20"></rect>
                <path
                    d="M15,17.8748567 C15,18.496224 14.5024425,19 13.8887451,19 L6.11125489,19 C5.4975575,19 5,18.496224 5,17.8748567 L5,2.1251433 C5,1.50377595 5.4975575,1 6.11125489,1 L13.8887451,1 C14.5024425,1 15,1.50377595 15,2.1251433 L15,17.8748567 Z M15.9987296,2.21071203 C15.9987296,1.06311002 15.1453525,0.118806753 14.0502858,0 L5.94812619,0 C4.8530595,0.118806753 4,1.06311002 4,2.21071203 L4,17.776339 C4,19.0045483 4.97660385,20 6.18155833,20 L13.8168537,20 C15.0218082,20 15.9987296,19.0045483 15.9987296,17.776339 L16,17.776339 L16,16.6643466 L15.9987296,16.6643466 L15.9987296,13.329017 L16,13.329017 L16,12.2173484 L15.9987296,12.2173484 L15.9987296,2.21071203 Z"
                    id="Fill-1"></path>
                <polygon id="Fill-4" points="9 18 11 18 11 16 9 16"></polygon>
            </g>


        </SvgIcon>
    );
};

