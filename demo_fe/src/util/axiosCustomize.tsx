
// import axios from "axios";
// import NProgress from "nprogress";
// NProgress.configure({
//     showSpinner: false,
//     trickleSpeed: 100,
// }
// )
// const instance =axios.create({
//     baseURL:"http://localhost:8081/"
// })
// // Addd a request interceptor
// instance.interceptors.request.use(function (config){
//     NProgress.start();
//     // Do sth before request in sent
//     return config;
// }, function(error) {
//     // Do something with request error
//     return Promise.reject(error);
// })

// // Add respone
// instance.interceptors.response.use(function (respone) {
//     NProgress.done();
//     return respone && respone.data ? respone.data : respone
// }, function(error) {
//     // Do something with request error
//     return Promise.reject(error);
// })