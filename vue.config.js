module.exports = {
    publicPath: '',
    filenameHashing: false,
    css: {
        loaderOptions: {
            sass: {
                /** 各コンポーネント共通で読み込むスタイルファイルを指定 */
                data: '@import "./src/styles/common.scss";'
            }
        }
    }
}