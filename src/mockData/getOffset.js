const getOffset = (page) => {
    return [(page - 1) * 6, page * 6]
}

export default getOffset