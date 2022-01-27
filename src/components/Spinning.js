import Loading from './loading.gif'
import React, { Component } from 'react';

export class Spinning extends Component {
    static propTypes = {};

    render() {
        return <div className='text-center '>
            <img src={Loading} alt="Loading" />
        </div>;
    }
}

export default Spinning;
