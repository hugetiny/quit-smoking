import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {AtButton, AtProgress, AtModal, AtAvatar} from 'taro-ui'
import './index.scss'

@connect(({bg, doing}) => ({
  ...bg,
  ...doing,
}))

export default class Doing extends Component {
  config = {
    navigationBarTitleText: '戒烟助理'
  };

  //
  // image() {
  //   return {
  //     title: 'image?',
  //     path: '/pages/index/index',
  //     imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
  //   }
  // }

  componentWillMount() {
    console.log('doingWillMount')
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        lastsign: Taro.getStorageSync('lastsign'),
        days: Taro.getStorageSync('days'),
        healthPercent: parseInt(Taro.getStorageSync('unitamount') / 20 * Taro.getStorageSync('days')),
        moneyPercent: parseInt(Taro.getStorageSync('unitprice') / Taro.getStorageSync('unitamount') * Taro.getStorageSync('amount') * Taro.getStorageSync('days') / 10),
        rewardPercent: Taro.getStorageSync('days') / 10
      },
    })
    // if(Date.parse(new Date()) - Taro.getStorageSync('lastsign')>= 864000000){
    //   this.props.dispatch({
    //     type: 'doing/allowSign'
    //   };
    // }
  }

  // componentWillUpdate(nextProps, nextState, nextContext) {
  //   console.log('doingWillUpdate')
  //   this.props.dispatch({
  //     type: 'doing/save',
  //     payload: {
  //       lastsign: Taro.getStorageSync('lastsign'),
  //       days: Taro.getStorageSync('days'),
  //       healthPercent: parseInt(Taro.getStorageSync('unitamount') / 20 * Taro.getStorageSync('days')),
  //       moneyPercent: parseInt(Taro.getStorageSync('unitprice') / Taro.getStorageSync('unitamount') * Taro.getStorageSync('amount') * Taro.getStorageSync('days') / 10),
  //       rewardPercent: Taro.getStorageSync('days') / 10
  //     },
  //   })
  // }


  onOpenModal = () => {
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        openModal: true
      },
    })
  };
  onCloseModal = () => {
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        openModal: false
      },
    })
  };

  onConfirm = () => {
    Taro.setStorageSync('days', 0)
    Taro.setStorageSync('amount', 0)
    Taro.setStorageSync('unitamount', 0)
    Taro.setStorageSync('unitprice', 0)
    Taro.setStorageSync('lastsign', 0)
    Taro.navigateBack()
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        openModal: false
      },
    })
  };

  onSign = () => {
    this.props.dispatch({
      type: 'doing/sign',
      payload: {
        days: Taro.getStorageSync('days') + 1
      }
    })
  };

  // 微信相关
  onShareAppMessage() {
    return {
      title: '为了爱你和你爱的人，戒烟助理送给你',
      // path: '/pages/quitSmoking/start/index',
      imageUrl: '/assets/images/logo.jpg'
    }
  }

  render() {
    const {healthPercent, moneyPercent, rewardPercent, imgList} = this.props
    return (
      <View className='body'>
        <Image className='background' src={imgList[Math.floor(Math.random() * 3)].hoverURL}></Image>
        <View className='main'>

          <View className='panel panel-big'>
            {/* openData 头像（仅微信小程序支持） */}
            {Taro.getEnv() === Taro.ENV_TYPE.WEAPP &&
            <View className='avatar at-row at-row__justify--center'>
              <View className='at-col at-col-3'>
                <AtAvatar circle openData={{type: 'userAvatarUrl'}}></AtAvatar>
              </View>
            </View>
            }
            <View>
              {/* <View className='panel__title'>状态</View> */}
              <View className='panel__content'>
                <View className='example-item'>
                  <Text className='example-item__desc'>健康恢复进度</Text>
                  <AtProgress percent={healthPercent} strokeWidth={30}/>
                  <Text className='example-item__desc'>金钱节省进度</Text>
                  <AtProgress percent={moneyPercent} strokeWidth={30}/>
                  {/* <View className='example-item__desc'>时间提升</View> */}
                  {/* <AtProgress percent={this.state.timePercent} strokeWidth={20}/> */}
                  <Text className='example-item__desc'>奖励达成进度</Text>
                  <AtProgress percent={rewardPercent} strokeWidth={30}/>
                </View>
              </View>
            </View>

            <View className='btn-item'>
              {Date.parse(new Date()) - this.props.lastsign >= 86400000
                ? <AtButton type='primary' onClick={this.onSign}>坚持了1天</AtButton>
                : <AtButton type='primary'>准备明天签到</AtButton>
              }

            </View>

            <View className='btn-item'>
              <AtButton type='secondary' onClick={this.onOpenModal}>我没能坚持，重新开始吧</AtButton>
            </View>

            <View className='btn-item'>
              <AtButton openType='share' type='secondary'>分享戒烟助理</AtButton>
            </View>

          </View>
        </View>
        <AtModal
          isOpened={this.props.openModal}
          title='确认重新开始戒烟？'
          cancelText='取消'
          confirmText='确认'
          // content='确认重新开始戒烟？'
          onClose={this.onCloseModal}
          onCancel={this.onCloseModal}
          onConfirm={this.onConfirm}
        />
      </View>

    )
  }
}
