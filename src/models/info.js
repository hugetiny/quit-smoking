import Taro from '@tarojs/taro'

export default {
  namespace: 'info',
  state: {
    amount: '',
    unitprice: '',
    unitamount: ''
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },

  }
}

