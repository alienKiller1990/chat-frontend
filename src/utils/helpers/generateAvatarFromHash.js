import randomColor from 'randomcolor';
import tinycolor from 'tinycolor2';



const getSumofNumber = str => {
    return [...str].reduce((accum, item) => accum + item.charCodeAt(),0)
}

export default (hash) => {
    const [r, g, b] = hash
        .substr(0, 9)
        .match(/.../g)
        .map(item => getSumofNumber(item) > 250 ? getSumofNumber(item) / 2 : getSumofNumber(item)  );
        console.log(r, g, b)
    return {
        color:
            tinycolor({ r, g, b })
                .toHexString(),
        colorLighten:
            tinycolor({ r, g, b })
                .darken(20)
                .toHexString()

    };
}