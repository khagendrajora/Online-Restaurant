
exports.DisplayData = async (req, res) => {
    try {
        // console.log(global.sample)
        res.send([global.sample, global.category])

    } catch (error) {
        console.error(error.message)
        res.send("server Error")

    }
}