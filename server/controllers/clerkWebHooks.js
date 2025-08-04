import User from "../models/userModels.js";
import { Webhook } from "svix";


const clerkWebhooks = async (req, res) => {
    try {
        //create svs instance
        const whook = new Webhook(process.env.CLERK_WEB_HOOKS_SECRET)
        //getting headers

        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        // verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        //getting Data from request body
        const { data, type } = req.body;

        const userData = {
            _id: data.id,
            email: data.email_addresses[0].email_address,
            username: data.first_name + " " + data.last_name,
            image: data.image_url,
        }

        //swith case for different event
        switch (type) {
            case "user.created": {
                await User.create(userData)
                break;
            }
            case "user.updated": {
                await User.findByIdAndUpdate(data.id, userData);
                break;
            }
            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                break;
            }
            default:
                break;
        }

        res.status(200).json({ success: true, message: "Webhook Recieved" })


    } catch (error) {
        console.log(error.message)
        res.status(200).json({ success: false, message: `Webhook Can't Recieved` });
    }
}

export default clerkWebhooks;