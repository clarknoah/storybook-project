import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

function helloWorld(){
    alert("Button Component Executed props.onClick")
}


storiesOf('Button', module)
    .add('Primary', () => <Button 
    type="primary"
    onClick={helloWorld}
    label="Primary" />) 
    .add('Large Primary', () => <Button 
    type="primary"
    large
    label="Large Primary Button" />) 
    .add('Large Danger', () => <Button 
    type="danger"
    large
    label="Large Danger Button" />) 
    .add('Large Primary Outline', () => <Button 
    type="primary"
    outline
    label="Large Primary Outline" />) 
