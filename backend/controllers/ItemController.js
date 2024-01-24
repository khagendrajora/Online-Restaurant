const Item = require('../models/Product')

// exports.itemDetail = async (req, res) => {
//     // const id=req.params.id
//   //  const item = await fetch_item.findOne(req.params.id)
//     //     .populate('foodData')
//     // if (!item) {
//     //     return res.status(400).json({ error: 'something went wrong' })
//     // }
//     res.send(item)
// }

exports.ItemUpload = async (req, res) => {

    let item = new Item({
        item_name: req.body.item_name,
        item_category: req.body.item_category,
        item_description: req.body.item_description,
        // item_img: req.file.path,
        item_price: req.body.item_price,


    })
    item = await item.save()
    if (!item) {
        return res.status(400).json({ error: "Item not  uploaded" })
    }
    res.send(item)

}

//itemDetails

exports.itemDetails = async (req, res) => {
    const item = await Item.findById(req.params.id)
    if (!item) {
        return res.status(400).json({ error: "invalid" })
    }
    res.send(item)
}


//fetch all data 
exports.itemList = async (req, res) => {
    const item = await Item.find()

    if (!item) {
        return res.status(400).json({ error: 'invalid' })
    }
    res.send(item)
}


//delete item
exports.deleteItem = async (req, res) => {
    const id = req.params.id
    Item.findByIdAndDelete(id)
        .then((item) => {
            if (!item) {
                return res.status(403).json({ error: 'item not found' })
            }
            else {
                return res.status(200).json({ message: 'item deleted' })
            }
        }).catch(err => {
            return res.status(400).json({ error: err })
        })
}

