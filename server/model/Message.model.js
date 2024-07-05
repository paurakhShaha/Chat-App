import mongooes from 'mongoose';

const messageSchema = new mongooes.Schema({
    senderId: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'User', //specify the model to which the id belongs
        required: true
    },
    receiverId: {
        type: mongooes.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true
    },
},{timestamps:true}) 


const Message = mongooes.model('Message', messageSchema);
export default Message;