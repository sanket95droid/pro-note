import {Configuration, OpenAIApi} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openAi = new OpenAIApi(config)

export async function generateImagePrompt(name: string) {
    try {
        const response = await openAi.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    // telling gpt his role
                    role: 'system',
                    content: 'you are a creative and helpful AI assistant capable of generating interesting thumbnail descriptions for my notes. Your output will be fetched into the DALL-E API to genereate a thumbnail. I want the description to be minimalistic and flat style.'
                },
                {
                    // giving gpt the note name to generate the prompt for thumbnail
                    role: 'user',
                    content: `please genereate a thumbnail description for my notebook titles ${name}`
                }
            ]
        })
        const data = await response.json()
        const image_description = data.choices[0].message.content
        console.log(image_description)
        return image_description
    }
    catch(error) {
        console.log(error)
        throw error;
    }

}

export async function generateImage(image_description: string) {
    try {
        const response = await openAi.createImage({
            prompt: image_description,
            n: 1,
            size: '256x256'
        })
        const data = await response.json()
        const image_url = data.data[0].url
        console.log(image_url)
        return image_url as string
    }
    catch(error) {
        console.log(error)
    }
}