import Message from "../model/Message.model.js";
import Conversation from "../model/Conversation.model.js";

export const sendMessage = async (req, res) => {
  const id = req.params.id;
  const { message } = req.body;
  try {
    let converstion = await Conversation.findOne({participants:{$all:[req.user._id,id]}});

    if(!converstion){
      converstion = new Conversation({
        participants:[req.user._id,id]
      });
      await converstion.save();
    }



    const newMessage = await Message.create({
      senderId : req.user._id,
      receiverId : id,
      message
    });
    if(!newMessage) return res.status(400).json({message:"Error in sending message"});
      converstion.message.push(newMessage._id);
      await converstion.save();

    res.status(200).json({message:"Message sent"});
  } catch (error) {
    res.status(500).json({message:"Error in sending message"});
  }

} 
export const getMessages = async (req, res) => {
  try {
    
    const userChatToId = req.params.id;
    const userId = req.user._id;
    const converstion = await Conversation.findOne({participants : {$all :[userId,userChatToId]} }).populate("message");
    if (!converstion){
      res.status(200).json({msg : "No message sent"})
    }
    res.status(200).json({msg : converstion.message})
    
  } catch (error) {
    console.log(error.message)
    res.status(500).json({message:"Error in sending message"});
  }

} 