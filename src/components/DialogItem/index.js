import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns/esm';
import { isToday } from 'date-fns/esm';

import { IconReaded } from '../';


import './DialogItem.scss';

const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(new Date(created_at), 'HH:mm');
    } else {
        return format(new Date(created_at), 'P');
    }
}

const getAvatar = avatar => {
    if (avatar) {
        return (
            <img src="https://yt3.ggpht.com/I_0bAV91DK1KNoCyYUooOFlaRTyGdnKGWYs9hEfbayFsoKhbGl9WUrg9MGsGdDw6i2qCoCB0pQ=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
        );
    } else {
        //make avatar
    }
}

const DialogItem = ({ user, created_at, text, unreaded, isMe }) => {
    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
            <div className="dialogs__item-avatar">
                {
                    getAvatar(user.avatar)
                }
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <span>
                        {getMessageTime(created_at)}
                    </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <IconReaded isMe={true} isReaded={false} />}
                    {unreaded > 0 && <div className="dialogs__item-info-bottom-count">{unreaded}</div>}
                </div>
            </div>
        </div>
    )
}

export default DialogItem
