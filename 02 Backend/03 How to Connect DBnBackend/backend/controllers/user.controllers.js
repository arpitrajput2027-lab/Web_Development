import User from "../models/user.model.js"

export const home = (req, res) => {
    res.send("Server is running")
}

export const createUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body
        const user = await User.create({
            name,
            email,
            username,
            password
        })

        res.status(201).json({ message: "User created successfully", user })
    }
    catch (error) {
        console.log("Error creating user:", error)
        res.status(500).json({ error: "Failed to create user" })
    }
}


export const getAllUsers = async (req, res) => {
    try {
        // const users = await User.find({ username: { $eq: "nisha" } })
        const users = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        console.log("Error fetching users:", error)
        res.status(500).json({ error: "Failed to fetch users or User not found " })
    }
}

export const get_user_by_name = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json({ user })
    } catch (error) {
        console.log("Error fetching user:", error)
        res.status(500).json({ error: "Failed to fetch user or User not found " })
    }
}
export const update_name_by_id = async (req, res) => {
    try {
        const { name } = req.body
        const id = req.params.id
        const user = await User.findByIdAndUpdate(id, { name }, { new: true })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json({ message: "User updated successfully", user })
    }
    catch (error) {
        console.log("Error updating user:", error)
        res.status(500).json({ error: "Failed to update user" })
    }
}
export const delete_user_by_id = async (req, res) => {
    try {
        let id = req.params.id
        const user = await User.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        }
        res.status(200).json({ message: "User deleted successfully" })
    } catch (error) {
        console.log("Error deleting user:", error)
        res.status(500).json({ error: "Failed to delete user" })
    }
}