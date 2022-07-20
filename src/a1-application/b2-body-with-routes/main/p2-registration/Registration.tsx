import React from 'react';
import style from './Registration.module.scss'
import CustomButton from '../../../b0-common/custom-components/c2-CustomButton/CustomButton';
import CustomInputText from '../../../b0-common/custom-components/c1-CustomInputText/CustomInputText';
import CustomCheckBox from '../../../b0-common/custom-components/c3-CustomCheckBox/CustomCheckBox';

export const Registration = () => {
    return (
        <div>
            <CustomButton > send </CustomButton>
            <CustomInputText/>
            <CustomCheckBox/>
        </div>
    );
};

