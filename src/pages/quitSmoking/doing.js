import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text, OpenData} from '@tarojs/components'
import {connect} from '@tarojs/redux';
import {AtButton, AtProgress,AtModal} from "taro-ui";
import './index.scss'

@connect(({bg, doing}) => ({
  ...bg,
  ...doing,
}))

export default class Doing extends Component {
  config = {
    navigationBarTitleText: '戒烟'
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
    console.log('componentWillMount')
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        days: Taro.getStorageSync('days'),
        healthPercent: parseInt(Taro.getStorageSync('unitamount') / 20 * Taro.getStorageSync('days')),
        moneyPercent: parseInt(Taro.getStorageSync('unitprice') / Taro.getStorageSync('unitamount') * Taro.getStorageSync('amount') * Taro.getStorageSync('days') / 5),
        rewardPercent: Taro.getStorageSync('days')
      },
    })
  };

  onShareAppMessage() {
    return {
      title: 'Taro UI',
      path: '/pages/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg'
    }
  };
  onOpenModal= () => {
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        openModal: true
      },
    })
  };
  onCloseModal= () => {
    this.props.dispatch({
      type: 'doing/save',
      payload: {
        openModal: false
      },
    })
  };

  onConfirm = () => {
    Taro.setStorageSync('days',0);
    Taro.setStorageSync('amount',0);
    Taro.setStorageSync('unitamount',0);
    Taro.setStorageSync('unitprice',0);
    Taro.navigateBack();
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
      payload:{
        days: Taro.getStorageSync('days') + 1
      }
    })

  };

  render() {
    const {healthPercent, moneyPercent, rewardPercent, imgList} = this.props;

    return (
      <View>

        <Image className='background' src={imgList[Math.floor(Math.random()*3)].hoverURL}></Image>
        <View className='main'>
          <OpenData type='userAvatarUrl'/>
          <View className='panel panel-big'>
            <View>
              {/*<View className='panel__title'>状态</View>*/}
              <View className='panel__content'>
                <View className='example-item'>
                  <Text className='example-item__desc'>健康恢复进度</Text>
                  <AtProgress percent={healthPercent} strokeWidth={30}/>
                  <Text className='example-item__desc'>金钱节省进度</Text>
                  <AtProgress percent={moneyPercent} strokeWidth={30}/>
                  {/*<View className='example-item__desc'>时间提升</View>*/}
                  {/*<AtProgress percent={this.state.timePercent} strokeWidth={20}/>*/}
                  <Text className='example-item__desc'>奖励达成进度</Text>
                  <AtProgress percent={rewardPercent} strokeWidth={30}/>
                </View>
              </View>
            </View>

            <View className='btn-item'>
              <AtButton type='primary' onClick={this.onSign}>今天没吸烟</AtButton>
            </View>

            <View className='btn-item'>
              <AtButton type='secondary' onClick={this.onOpenModal}>我没能坚持，重新开始吧</AtButton>
            </View>



            {this.state.showShare === true &&
            <View className='btn-item'>
              <AtButton openType='share' type='primary'
                        onClick={this.onShareAppMessage}
              >分享战果</AtButton>
            </View>
            }
          </View>
        </View>
        <AtModal
          isOpened={this.props.openModal}
          // title='标题'
          cancelText='取消'
          confirmText='确认'
          content='确认重新开始戒烟？'
          onClose={this.onCloseModal}
          onCancel={this.onCloseModal}
          onConfirm={this.onConfirm}
        />
      </View>

    )
  }
}
