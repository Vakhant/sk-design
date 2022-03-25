export const requiredField = value => {
    if (value) return undefined;
    return 'Обязательное поле';
}


//call inside variable(let, const) outside the validate={} attr
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength}`;
    return undefined;
}