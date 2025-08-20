const capitalize = (name) => {
    if (typeof(name) !== 'string'){
        return
    }
    return (name.charAt(0).toUpperCase() + name.slice(1))
}

export default capitalize;
