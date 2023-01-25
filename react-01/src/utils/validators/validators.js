export const required = (name) => (value) => {
    if (value) return undefined;
    return name
}

export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined
}