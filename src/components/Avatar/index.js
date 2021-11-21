import React from 'react';
// import randomColor from 'randomcolor';
import tinycolor from 'tinycolor2';




import './Avatar.scss';
import generateAvatarFromHash from '../../utils/helpers/generateAvatarFromHash';

const Avatar = ({ user }) => {
    if (user.avatar) {
        return (
            <img className="avatar" src={user.avatar} alt={`Avatar ${user.fullname}`} />
        );
    } else {
        // const color = randomColor({
        //     luminosity: 'dark',
        // });
        const { color, colorLighten } = generateAvatarFromHash(user.fullname)
        // const colorLight = tinycolor(color).lighten(30)
        const firstChar = user.fullname[0]
        return <div
            style={{ background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96%)`}}
            className="avatar avatar--symbol">{firstChar.toUpperCase()}</div>
    }
}

export default Avatar
