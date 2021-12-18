module.exports = {
    async getPosts(limit = 100) {
        const response = await fetch(`http://localhost:4000/backend/api/v1/posts?limit=${limit}`, {
            headers: {
                'Content-Type':  'application/json'
            }
        })

        const data = await response.json();

        if(data.status == 'success')
        {
            return data.posts;
        }
        else
        {
            return {};
        }
    },
    async getPost(id) {
        const response = await fetch(`http://localhost:4000/backend/api/v1/posts/${id}`, {
            headers: {
                'Content-Type':  'application/json'
            }
        })

        const data = await response.json();

        if(data.status == 'success')
        {
            return data.post;
        }
        else
        {
            return {};
        }
    }
}