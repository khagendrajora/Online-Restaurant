const OrderItem = require('../models/orderItemModel')
const orderModel = require('../models/OrderModel')


//post order

exports.postOrder = async (req, res) => {
    //post data to orderitemmodel and return the id of that data
    const orderItemIds = Promise.all(req.body.orderItem.map(async orderItemData => {
        let newOrderItem = new OrderItem({
            quantity: orderItemData.quantity,
            item: orderItemData.item

        })
        newOrderItem = await newOrderItem.save()
        return newOrderItem._id  //this will return value to line number 9
    }))
    const orderItemIdResolved = await orderItemIds   // this id must be passed in orderModel

    //calculate total price

}