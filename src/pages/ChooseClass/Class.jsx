import React from 'react';
import { Link } from 'react-router-dom';

import '../ChooseClass/class.css'

const Classe = () => {
    return (
        <div className='class justify--content'>
            <div className='class__container'>
                <Link to={'/intro'}><img src='/src/assets/class1.png'></img></Link>
            </div>
        </div>
    );
};

export default Classe;