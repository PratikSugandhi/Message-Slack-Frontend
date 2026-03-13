import axios from '@/config/axiosConfig';

export const deleteChannelRequest = async ({ channelId, token }) => {
    try {
        const response = await axios.delete(`/channels/${channelId}`, {
            headers: {
                'x-access-token': token
            }
        });

        return response?.data?.data;
    } catch (error) {
        console.log('Error in deleting channel request', error);
        throw error.response?.data || error;
    }
};

export const getChannelById = async ({ channelId, token }) => {
    try {
        const response = await axios.get(`/channels/${channelId}`, {
            headers: {
                'x-access-token': token
            }
        });
        return response?.data?.data;
    } catch(error) {
        console.log('Error in getChannelByIdRequest', error);
    }
};

