import Chat from "../models/chat.js"



//API for creating new chats
export const createChat = async (req, res)=> {
  try{
    const userId = req.user._id

    const chatData = {
        userId,
        message:[],
        name: "New Chat",
        userName: req.user.name

    }
    await Chat.create(chatData)
    res.json({success: true, message: "Chat Created"})
  }catch(error){
 res.json({success:false, message: error.message})
  }
}

//Api for getting all chats
export const getChats = async (req, res)=> {
  try{
    const userId = req.user._id
    const chats = await Chat.find({userId}).sort({updatedAt: -1})
    res.json({success: true, chats})

  }catch(error){
 res.json({success:false, message: error.message})
  }
}

//Deleting Chat
export const deleteChat = async (req, res)=> {
  try{
    const userId = req.user._id
   const {chatId} = req.body

   await chatId.deleteOne({_id: chatId, userId})

    res.json({success: true, message: 'Chat Deleted'})

  }catch(error){
 res.json({success:false, message: error.message})
  }
}