const axios = require('axios');

module.exports = async function () {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
