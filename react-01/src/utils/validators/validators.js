export const required = (name) => (value) => {
    if (value) return undefined;
    return name
}

export const maxLength = (maxLength, minLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    if (value && value.length < minLength ) return 'Is empty'
    return undefined
}