// api/movie.js
import axios from 'axios'

export default {
  getStore({urls}){
    return new Promise((resolve, reject) => {
      axios.get(urls).then(res => {
       
        resolve(
          res.data.rows
            .map(arr => Object.assign({}, arr, {
              goods_image: arr.goods_image.replace(/#/, '')

              // new branch code
              //adfadsfa
}))
        );
      }).catch(err=>reject(err))
    })
  },
  getOrderlist({urlss}){
    return new Promise((resolve, reject) => {
      axios.get(urls).then(res => {
      
        resolve(
          res.data.rows
            .map(arr => Object.assign({}, arr, {
              goods_image: arr.goods_image.replace(/#/, '')
            }))
        );
      }).catch(err=>reject(err))
    })
  },
  getOrderlist({urlss}){
    return new Promise((resolve, reject) => {
      axios.get(urls).then(res => {
      
        resolve(
          res.data.rows
            .map(arr => Object.assign({}, arr, {
              goods_image: arr.goods_image.replace(/#/, '')
            }))
        );
      }).catch(err=>reject(err))
    })
  },
  auth(){
    return 'success'
  }
}