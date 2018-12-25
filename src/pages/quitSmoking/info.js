import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtButton, AtInput, AtForm } from 'taro-ui'
import './index.scss'


@connect(({ bg, info }) => ({
  ...bg,
  ...info,
}))

export default class Info extends Component {
  config = {
    navigationBarTitleText: '戒烟助理'
  };

  componentWillMount () {

  }


  onAmount = e => {
    console.log(e)
    this.props.dispatch({
      type: 'info/save',
      payload: {
        amount: e
      },
    })
  };

  onUnitprice = e => {
    console.log(e)
    this.props.dispatch({
      type: 'info/save',
      payload: {
        unitprice: e
      },
    })
  };

  onUnitamount = e => {
    console.log(e)
    this.props.dispatch({
      type: 'info/save',
      payload: {
        unitamount: e
      },
    })
  };

  onSubmit = () => {
    if (this.props.amount &&
      this.props.unitprice &&
      this.props.unitamount) {
      Taro.setStorageSync('amount', this.props.amount)
      Taro.setStorageSync('unitprice', this.props.amount)
      Taro.setStorageSync('unitamount', this.props.amount)
      Taro.setStorageSync('days', 0)
      Taro.navigateTo({
        url: '/pages/quitSmoking/doing'
      })
    } else {
      Taro.showModal({ content: `请输入评估信息`, showCancel: false })
    }
  };


  onBack () {
    Taro.navigateBack()
  }

  render () {
    const { amount, unitprice, unitamount, imgList } = this.props
    return (
      <View className='body'>
        <Image className='background' src={imgList[Math.floor(Math.random() * 3)].hoverURL}></Image>
        <View className='main'>
          <View className='panel'>
            <View className='component-item'>
              <AtForm>
                <AtInput name='amount' title='支数' type='number' placeholder='每天吸烟支数' value={amount} onChange={this.onAmount} />
                <AtInput name='unitprice' title='单价' type='number' placeholder='香烟单价' value={unitprice} onChange={this.onUnitprice} />
                <AtInput name='unitamount' title='每包支数' type='number' placeholder='每包烟支数' value={unitamount} onChange={this.onUnitamount} />
                <View className='btn-item'>
                  <AtButton type='primary' onClick={this.onSubmit}>提交</AtButton>
                  <AtButton type='secondary' onClick={this.onBack}>返回</AtButton>
                </View>
              </AtForm>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
