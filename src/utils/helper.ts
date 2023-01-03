export const keyExists = (array: { [key: string]: any }[], key: string): boolean => {


    return array.some(item => Object.keys(item)[0] === key);
}

export const concatenate = (array: { [key: string]: any | string }[]): string => {
    return array.reduce((acc, item, i) => {
        const key = Object.keys(item)[0];
        const value = item[key];
        return `${i}. ${acc}\n${key} *${value}*%0a%0a%0a`;
    }, '');
}


