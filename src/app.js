import '@tarojs/async-await'
import Taro, {Component} from '@tarojs/taro'
import {Provider} from '@tarojs/redux'

import dva from './utils/dva'
import models from './models'

import Start from './pages/quitSmoking/start'
// import Doing from './pages/quitSmoking/doing'


// import './app.scss'
if (process.env.TARO_ENV === 'weapp') {
  require('taro-ui/dist/weapp/css/index.css')
} else if (process.env.TARO_ENV === 'h5') {
  require('taro-ui/dist/h5/css/index.css')
}

const dvaApp = dva.createApp({
  initialState: {},
  models,
})
const store = dvaApp.getStore()


class App extends Component {
  config = {
    pages: [
      'pages/quitSmoking/start',
      'pages/quitSmoking/info',
      'pages/quitSmoking/doing'
      // 'pages/quitSmoking/share'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'quitSmoking',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   list: [{
    //     pagePath: 'pages/quitSmoking/index',
    //     text: '戒烟',
    //     iconPath: 'assets/font/smoking-ban.svg'
    //     // selectedIconPath: './images/tab/cart-active.png'
    //   }, {
    //     pagePath: 'pages/quitSmoking/share',
    //     text: '其他',
    //     iconPath: 'assets/font/smoking-ban.svg'
    //     // selectedIconPath: './images/tab/cart-active.png'
    //   }],
    //   color: '#333',
    //   selectedColor: '#333',
    //   backgroundColor: 'rgba(255,255,255,0.9)',
    //   borderStyle: '#ccc'
    // }
  }

  componentDidMount () {
  }

  // componentDidShow () {
  // }
  //
  // componentDidHide () {
  // }

  render() {
    return (<Provider store={store}>
      <Start />
    </Provider>)
  }
}

Taro.render(<App />, document.getElementById('app'))
