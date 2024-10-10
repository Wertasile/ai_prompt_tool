import { connectToDB } from "@utils/database"
import Prompt from "@models/prompt";

export const POST = async (req, res) => {
    const {userId, prompt, tag} = await req.json()

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt, 
            tag
        })

        await newPrompt.save()

        return new Response(JSON.stringify(newPrompt), {status: 201})  // status of 201 means created
    } catch (error) {
        return new Response("Failed to create new prompt", {status: 500}) // status of 500 means error
    }
}