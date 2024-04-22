const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer();

// 设置代理路由
app.get('/bb', (req, res) => {
    // 将请求转发到代理服务器
    proxy.web(req, res, { target: 'https://www.bilibili.com' });
});

// 监听端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});