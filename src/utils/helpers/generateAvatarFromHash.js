import randomColor from 'randomcolor';
import tinycolor from 'tinycolor2';


// const getCorrectIndex = number => {
//     return number > 255 ? 255 : number < 0 ? 0 : number;
// }

const getSumofNumber = str => {
    return [...str].reduce((accum, item) => accum + item.charCodeAt(),0)
}




export default (hash) => {
    const [r, g, b] = hash
        .substr(0, 6)
        .match(/../g)
        .map(item => getSumofNumber(item));
        console.log(r, g, b)
    return {
        color:
            tinycolor({ r, g, b })
                .toHexString(),
        colorLighten:
            tinycolor({ r, g, b })
                .lighten(30)
                .toHexString()

    };
}