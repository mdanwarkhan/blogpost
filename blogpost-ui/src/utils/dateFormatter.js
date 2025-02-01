const dateFormatter = date => {
    const dt = new Date(date).toLocaleDateString()
    return dt
}

export default dateFormatter