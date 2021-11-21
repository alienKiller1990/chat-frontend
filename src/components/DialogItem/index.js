import React from 'react';
import classNames from 'classnames';
import { format } from 'date-fns/esm';
import { isToday } from 'date-fns/esm';
import parseISO from 'date-fns/parseISO'

import { IconReaded, Avatar } from '../';


import './DialogItem.scss';

const getMessageTime = created_at => {
    if (isToday(parseISO(created_at))) {
        return format(new Date(created_at), 'HH:mm');
    } else {
        return format(new Date(created_at), 'P');
    }
}


const DialogItem = ({ user, created_at, text, unreaded, isMe,  }) => {
    return (
        <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
            <div className="dialogs__item-avatar">
                <Avatar user={user}/>
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
