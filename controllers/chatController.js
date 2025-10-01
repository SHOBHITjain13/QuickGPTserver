import Chat from "../models/chat.js"



//API for creating new chats
export const createChat = async (res, res)=> {
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
 res.json({success:false, error: error.message})
  }
}