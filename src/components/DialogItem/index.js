import React from 'react';

import { Time } from '../';


import './DialogItem.scss';

const DialogItem = ({ user, message }) => {
    return (
        <div className="dialogs__item">
            <div className="dialogs__item-avatar">
                {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
                <img src="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Федор Достоевский</b>
                    <span><Time date={new Date()}/></span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Мы все свидетельствуем</p>
                </div>
            </div>
        </div>
    )
}

export default DialogItem
