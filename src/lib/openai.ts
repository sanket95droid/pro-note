import {Configuration, OpenAIApi} from 'openai-edge'

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openAi = new OpenAIApi(config)

export async function generateImagePrompt(name: string) {
    try {
        const response = await openAi.createChatCompletion({
            model: 'gpt-3/5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'you are a creative and helpful AI assistant capabel of generating interesting thumbnail descriptions for my notes. Your output will be fetched into the DALL-E API to genereate a thumbnail. I want the description to be minimalistic and flat style.'
                },
                {
                    role: 'user',
                    content: `please genereate a thumbnail description for my notebook titles ${name}`
                }
            ]
        })
        const data = await response.json()
        const image_description = data.choices[0].message.content
        return image_description as string
    }
    catch(error) {
        throw error;
    }
}

export async function generateImage() {
    
}