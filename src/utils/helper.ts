export const keyExists = (array: { [key: string]: any }[], key: string): boolean => {


    return array.some(item => Object.values(item)[0] === key);
}

export const concatenate = (array: { [key: string]: any | string }[]): string => {
    return array.reduce((acc, item,) => {
        const key = Object.keys(item)[0];
        const value = item[key];
        return `${acc}\n${key} *${value}*%0a%0a%0a`;
    }, '');
}


