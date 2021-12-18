const express2 = require('express'); // autistic typescript

module.exports = (app, database) => {
    app.get('/backend/api/v1/posts', (req, res) => {
        const limit = parseInt(req.query.limit) || 100;
        database.query("SELECT id, title, note, posted_on FROM posts LIMIT ?", [limit], (error, results) => {
            if(error) throw error;
            
            res.status(200).json({
                status: 'success',
                posts: results
            });
        });
    });

    app.get('/backend/api/v1/posts/:id', (req, res) => {
        database.query("SELECT * FROM posts WHERE id = ?", [req.params.id], (error, results) => {
            if(error) throw error;
            
            if(results.length >= 1)
            {
                res.status(200).json({
                    status: 'success',
                    post: results[0]
                }); 
            }
            else
            {
                res.status(404).json({
                    status: 'failure',
                    errors: ['post-doesnt-exist']
                });
            }
        });
    });

    return app;
};