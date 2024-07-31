const User = require("../model/signup");
const Contact = require("../model/contact");

const getAllUsers =async (req,res) => {
    try {
        const fetchData = await User.find().select({password : 0});
        if(!fetchData || fetchData.length === 0){
            res.json({message : "User doesn't exists..."});
        }
        res.status(200).json(fetchData)
    } catch (error) {
        res.json({message : "Error in getAllUsers..."})
    }
}

const getAllContacts =async (req,res) => {
    try {
        const fetchData = await Contact.find();
        if(!fetchData || fetchData.length === 0){
            res.json({message : "Contact doesn't exists..."});
        }
        res.status(200).json(fetchData)
    } catch (error) {
        res.json({message : "Error in getAllContacts..."})
    }
}

const getUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const fetchData = await User.findOne({_id : id}).select({password : 0});
        res.status(200).json({message : fetchData});
    } catch (error) {
        console.log(error);
    }
}

const deleteUserById =async (req,res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id})
        return res.status(200).json({ message: "User deletion is succesful..." });
    } catch (error) {
        res.json({message : "Error in deleteUserById..."})
    }
}

const deleteContactById =async (req,res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({_id : id})
        return res.status(200).json({ message: "Contact deletion is succesful..." });
    } catch (error) {
        res.json({message : "Error in deleteContactById..."})
    }
}

const updateUserById = async (req,res) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const userData = await User.updateOne({_id : id}, {$set : updatedUserData});
        return res.status(200).json({ message: userData });
    } catch (error) {
        res.json({message : "Error in updateUserById..."})
    }
}

module.exports = {getAllUsers,getAllContacts,deleteUserById,deleteContactById,updateUserById,getUserById}