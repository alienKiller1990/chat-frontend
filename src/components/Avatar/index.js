import React from 'react';
import { generateAvatarFromHash } from 'utils/helpers'



import './Avatar.scss';

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img className="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`} />
        );
    } else {
        const {color, colorLighten} = generateAvatarFromHash(user._id);
        const firstChar = user.fullname[0]
        return <div
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`}}
            className="avatar avatar--symbol">{firstChar.toUpperCase()}</div>
    }
}

export default Avatar
