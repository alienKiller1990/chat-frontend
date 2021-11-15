import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


import './Status.scss'


const Status = ({online}) => {
    return (
        <div className={classNames("status", { "status--online": online })}>{online ? 'онлайн' : 'офлайн'}</div>
    )
}

Status.propTypes = {
    online: PropTypes.string,
}

export default Status
