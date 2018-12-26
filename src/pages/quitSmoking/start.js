import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtButton} from 'taro-ui'
import './index.scss'
import '../../assets/images/logo.jpg'


@connect(({bg}) => ({
  ...bg,
}))

export default class Start extends Component {
  config = {
    navigationBarTitleText: '戒烟助理'
  };

  componentWillMount() {
    console.log('startWillMount')
    if (Taro.getStorageSync('days')) {
      Taro.navigateTo({
        url: '/pages/quitSmoking/doing'
      })
    }
  }

  // componentDidMount () {
  //
  // }

  // componentDidShow = () => {
  //   this.props.dispatch({
  //     type: 'getBaiduImg/getBaiduImg',
  //   })
  // };

  onStart() {
    if (!Taro.getStorageSync('days')){
      Taro.navigateTo({
        url: '/pages/quitSmoking/info'
      })
    }
  }

// 微信相关
  onShareAppMessage() {
    return {
      title: '为了爱你和你爱的人，戒烟助理送给你',
      // path: '/pages/quitSmoking/start/index',
      imageUrl: '../../assets/images/logo.jpg'
    }
  }

  render() {
    const {imgList} = this.props
    console.log(this.props)
    return (
      <View className='body'>
        <Image className='background' src={imgList[Math.floor(Math.random() * 3)].hoverURL}></Image>
        <View className='main'>
          <View className='panel'>
            <View className='btn-item'>
              <AtButton type='secondary' onClick={this.onStart}>开始戒烟</AtButton>
            </View>
            <View className='btn-item'>
              <AtButton openType='share' type='primary'>帮助Ta戒烟</AtButton>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
