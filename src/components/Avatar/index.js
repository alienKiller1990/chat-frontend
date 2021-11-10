import React from 'react';
// import { generateAvatarFromHash } from 'utils/helpers'
import randomColor from 'randomcolor';
import tinycolor from 'tinycolor2';




import './Avatar.scss';

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img className="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`} />
        );
    } else {
        // const {color, colorLighten} = generateAvatarFromHash(user._id);
        const color = randomColor({
            luminosity: 'dark',
        });
        const colorLight = tinycolor(color).lighten(30)
        console.log(color)
        const firstChar = user.fullname[0]
        return <div
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLight} 96%)`}}
            className="avatar avatar--symbol">{firstChar.toUpperCase()}</div>
    }
}

export default Avatar
