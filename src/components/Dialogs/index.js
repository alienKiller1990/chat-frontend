import React from 'react';
import { orderBy } from 'lodash-es';
import { DialogItem } from '../';

import './Dialogs.scss';

const Dialogs = ({ items, userId }) => {
    return (
        <div className="dialogs">
            {
                orderBy(items, ['created_at'], ['desc']).map(item => (
                    <DialogItem key={item._id} isMe={item.user_id === userId} {...item} />)
                )
            }
        </div >
    )
}

export default Dialogs
