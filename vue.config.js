module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/irongrove/" : "/",
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/scss/variables.scss";`
      }
    }
  }
};
