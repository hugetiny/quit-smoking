import * as service from './service'

export default {
  namespace: 'bg',
  state: {
    imgList: [
      { 'hoverURL': 'http://img5.imgtn.bdimg.com/it/u=836265247,2849726974&fm=26&gp=0.jpg' },
      { 'hoverURL': 'http://img1.imgtn.bdimg.com/it/u=3393017267,1285027554&fm=26&gp=0.jpg' },
      { 'hoverURL': 'http://img5.imgtn.bdimg.com/it/u=3865034104,2533845533&fm=26&gp=0.jpg' }]
  },

  effects: {
    * getBaiduImg (_, { call, put }) {

      // const {imgs} = yield call(service.getBaiduImg, {});
      // console.log(imgs)
      // yield put({
      //   type: 'save',
      //   payload: {
      //     imgList: imgs,
      //   }
      // });

    },
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
  },

}
