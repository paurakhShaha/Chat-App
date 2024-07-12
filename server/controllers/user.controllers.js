import User from "../model/User.model.js";
export const getUserSidebar = async (req, res) => {
  try {
    const logedInUserID = req.user._id;

    const filteredUser = await User.find({ _id: { $ne: logedInUserID } }).select("_id username profilePic");
    res.status(200).json(filteredUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message:"Error in getting user sidebar"});
  }
}