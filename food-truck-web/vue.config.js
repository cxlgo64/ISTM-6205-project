const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true
})

module.exports = {
    chainWebpack: (config) => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'GWU Food Truck at Foggy Buttom';
                args[0].meta = { viewport: 'width=device-width,initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86, user-scalable=no' };

                return args;
            })
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}