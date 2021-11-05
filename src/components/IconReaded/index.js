

import React from 'react';
import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';
import PropTypes from 'prop-types';


const IconReaded = ({ isMe, isReaded }) => (
    isMe && (
        isReaded
            ? <img className="message__img message__img--readed" src={readedSvg} alt="readed" />
            : <img className="message__img message__img--noreaded" src={noReadedSvg} alt="noreaded" />
    )

)


IconReaded.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
}

export default IconReaded
