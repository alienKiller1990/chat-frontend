import React from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import { Dialogs as BaseDialogs } from 'components'

const Dialogs = ({ fetchDialogs, items, userId }) => {
    const [inputValue, setValue] = React.useState('');
    const [filtred, setFiltredItems] = React.useState(Array.from(items));

    const onChangeInput = value => {
        setFiltredItems(items.filter(dialog => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0))
        setValue(value);
    }
    React.useEffect(() => {
        if (!items.length) {
            fetchDialogs()
        } else {
            setFiltredItems(items)
        }
    }, [items])

    return <BaseDialogs
        userId={userId}
        items={filtred}
        onSearch={onChangeInput}
        inputValue={inputValue} />
}

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs)
