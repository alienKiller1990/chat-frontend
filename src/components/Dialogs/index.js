import React from 'react';
import { orderBy } from 'lodash-es';
import { DialogItem } from '../';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';



import './Dialogs.scss';

const Dialogs = ({ items, userId, onSearch, inputValue }) => {

    return (
        <div className="dialogs">
            <div className="dialogs__search">
                <Input
                    value={inputValue}
                    placeholder="Поиск среди контактов"
                    onChange={e => onSearch(e.target.value)}
                />
                {<SearchOutlined />}
            </div>
            {
                orderBy(items, ['created_at'], ['desc']).map((item, index) => (
                    <DialogItem key={`${item._id}_${index}`} isMe={item.user_id === userId} {...item} />)
                )
            }
        </div >
    )
}

export default Dialogs
