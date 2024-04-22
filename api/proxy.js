// api/proxy.js

const fetch = require('node-fetch');

module.exports = async (req, res) => {
    // 从请求中获取要代理的目标URL
    const targetUrl = req.query.url;

    try {
        // 使用 fetch 函数代理请求到目标URL，并获取响应
        const response = await fetch(targetUrl);

        // 检查响应状态码
        if (response.ok) {
            // 如果响应成功，将响应内容返回给客户端
            const data = await response.text();
            res.status(200).send(data);
        } else {
            // 如果响应失败，返回错误信息
            res.status(response.status).send('Failed to fetch data from the target URL');
        }
    } catch (error) {
        // 如果出现错误，返回错误信息
        console.error('Error while proxying request:', error);
        res.status(500).send('Internal Server Error');
    }
};
