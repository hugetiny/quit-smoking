import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton } from 'taro-ui'
import './index.scss'


@connect(({ bg }) => ({
  ...bg,
}))

export default class Start extends Component {
  config = {
    navigationBarTitleText: '戒烟'
  };
  componentWillMount(){
    if(Taro.getStorageSync('days')){
      Taro.navigateTo({
        url: '/pages/quitSmoking/doing'
      })
    }
  };
  componentDidMount(){

  };

  // componentDidShow = () => {
  //   this.props.dispatch({
  //     type: 'getBaiduImg/getBaiduImg',
  //   })
  // };

  onStart () {
    Taro.navigateTo({
      url: '/pages/quitSmoking/info'
    })
  }

  onShareAppMessage () {
    return {
      title: '戒烟',
      path: '/pages/quitSmoking/start/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  }

  render () {
    const { imgList } = this.props
    console.log(this.props)
    return (
      <View>
        <Image className='background' src={imgList[Math.floor(Math.random()*3)].hoverURL}></Image>


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
