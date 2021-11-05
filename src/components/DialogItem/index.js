import React from 'react';
import classNames from 'classnames';


import { Time, IconReaded } from '../';


import './DialogItem.scss';

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img src="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
        );
    } else {
        //make avatar
    }
}

const DialogItem = ({ user, message, unreaded }) => {
    return (
        <div className={classNames('dialogs__item', {'dialogs__item--online': user.isOnline} )}>
            <div className="dialogs__item-avatar">
                {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
                {
                    getAvatar("https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo")
                }

            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Федор Достоевский</b>
                    <span>
                        {/* <Time date={new Date()} /> */}
                        13:03
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Мы все свидетельствуем...Мы все свидетельствуем... </p>
                    <IconReaded isMe={true} isReaded={false} />
                    {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>}
                </div>
            </div>
        </div>
    )
}

export default DialogItem
