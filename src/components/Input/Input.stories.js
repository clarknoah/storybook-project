import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './Input';



storiesOf('Input', module)
    .add('Regular Input', () => <Input placeholder={"hello world"}/>) 
