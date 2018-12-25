import Taro from '@tarojs/taro'

export default {
  namespace: 'common',
  state: {
    access_token: '024b12087e6f0d2169c2665a6e127f9b'
    // mobile: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').mobile :'',
    // nickname: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').nickname :'',
    // new_user: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').new_user :'',
    // is_has_buy_card: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').is_has_buy_card :'',
    // erroMessage: Taro.getStorageSync('user_info') ? Taro.getStorageSync('user_info').erroMessage :'',
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
  },

}
