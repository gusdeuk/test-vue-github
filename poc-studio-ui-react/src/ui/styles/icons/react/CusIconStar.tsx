import React from 'react';
import { SvgIcon } from '@material-ui/core';

export const CusIconStar= (props) => {
    return (
        // svg custom icon > use 20X20 VIEWBOX
        <SvgIcon {...props} viewBox="0 0 20 20" >

            <g id="star">
                <rect id="base20x20" fill="#D8D8D8" opacity="0" x="0" y="0" width="20" height="20"></rect>
                <path d="M6.92502627,6.4581788 L1.41804888,7.29702605 L1.31715051,7.32020536 C0.833247473,7.47101221 0.660431405,8.12822723 1.03999352,8.51576165 L5.02445792,12.5831815 L4.08433244,18.3297852 L4.07437411,18.431232 C4.05727549,18.9633455 4.60308979,19.3423747 5.07409422,19.0830053 L9.99888861,16.3700865 L14.9257819,19.0830053 L15.0148162,19.1242743 C15.4926808,19.3057396 16.0054975,18.8791385 15.9155437,18.3297852 L14.9743688,12.5831815 L18.9598826,8.51576165 L19.0285038,8.43488898 C19.3355097,8.01484643 19.1063692,7.37686253 18.5818273,7.29702605 L13.0738004,6.4581788 L10.6116445,1.23162591 C10.3614234,0.70056914 9.63845275,0.70056914 9.38823164,1.23162591 L6.92502627,6.4581788 Z M9.99993807,3.16043864 L12.0098693,7.42809418 L12.0669865,7.52792217 C12.1740918,7.68457872 12.338332,7.7907803 12.523484,7.81896086 L17.0176634,8.5027777 L13.7656898,11.8234548 L13.6926982,11.9112023 C13.5835546,12.0663077 13.5378787,12.262738 13.5695064,12.4558904 L14.3362983,17.1439562 L10.3173694,14.9308038 L10.2151409,14.8852067 C10.0405811,14.8244106 9.84811171,14.8396096 9.6825067,14.9308038 L5.66252835,17.1439562 L6.43036974,12.4558904 L6.44018063,12.3399624 C6.44144036,12.1472829 6.36816363,11.9602462 6.23418636,11.8234548 L2.98116328,8.5027777 L7.47639215,7.81896086 C7.69857458,7.78514419 7.89064389,7.63897725 7.99000689,7.42809418 L9.99993807,3.16043864 Z"></path>
            </g>

        </SvgIcon>
    );
};
