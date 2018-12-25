import Taro from '@tarojs/taro'

export default {
  namespace: 'doing',
  state: {
    lastsign: 0,
    days: 0,
    healthPercent: 0,
    moneyPercent: 0,
    rewardPercent: 0,
    openModal: false,
    toasts: {
      1: '血压和心率将逐渐平缓下来\n因为人体不再摄入香烟中的尼古丁\n\n尼古丁也不再会让人体心跳加快了会感到烦躁、精神萎靡、不停地打哈欠\n\n因为尼古丁会让大脑分泌多巴胺\n\n而这种多巴胺会让人感到快乐\n\n所以戒烟后会感到精神不好血管中的一氧化碳会慢慢消失\n\n同时，血液中的含氧量恢复了正常\n\n因为在吸烟的时候会吸入一氧化碳\n\n消耗人体的氧气会导致血管缺氧和血栓\n\n引发中风、冠心病等多种心脑血管疾病',
      2: '肺纤毛开始修复和再生\n\n会将有毒物质从口中排出\n\n因此将会不断咳嗽',
      3: '尼古丁将完全被身体清除掉\n\n味觉恢复正常、吃东西更香\n\n因为吸烟会导致味觉退化\n\n但是对于长期吸烟的人\n\n味觉将没有办法恢复',
      4: '戒烟综合征达到顶峰、感觉最糟糕\n\n感到头痛、胸闷、沮丧、想吸烟\n\n但是只要咬咬牙挺过这段时间\n\n就能成功地把烟戒了\n\n但可惜的是很多人都熬不过',
      5: '大多人每天烟瘾发作下降到三次。你会觉得时间开始扭曲并且有恐慌感，感觉度日如年，做任何简单的事不会超过3分钟，你需要一个闹钟来找回你的时间观',
      10: '烟瘾发作下降到每天少于两次',
      14: '身体恢复已经进展到烟瘾不再发作的地步。现在牙龈和牙齿中的血液循环已与正常人相似',
      21: '戒断症相关的愤怒、焦虑、注意力不集中、焦躁不安、失眠、躁动和抑郁等症状已全部结束。如果仍然有任何这些症状之一，你需要找医生来诊断',
      30: '身体会开始逐渐恢复健康\n\n癌症、心血管疾病的风险将显著降低',
      31: '乙酰胆碱受体的数量开始大幅减少，增加是因为尼古丁影响大脑额叶、顶叶、颞、枕叶、基底节、丘脑、脑干和小脑，受体已恢复到非吸烟者大脑正常水平',
      40: '你的心脏病风险已经开始下降，肺功能和血液循环会得到明显改善，这时，你散步、爬楼梯或跑步会比以前速度更快',
      90: '肺已经修复得非常好了\n\n咳嗽、气喘的症状会明显减少\n\n呼吸也会顺畅很多\n\n并且牙齿和指甲的烟斑会变浅',
      365: '血管状况已经恢复正常\n\n心血管疾病的风险也因此降低了一半',
      3650: '患肺癌的风险将是之前的一半\n\n而心血管疾病的风险\n\n将和没有抽过烟的人一样你的头脑清醒了\n\n口气清新了\n\n肺部清爽了\n\n心脏供血充足了\n\n皮肤代谢正常了\n\n心情也会变得更好'
    }
  },

  reducers: {
    save (state, { payload }) {
      return { ...state, ...payload }
    },
    sign (state, { payload }) {
      // state.days =  Taro.getStorageSync('days')
      state.lastsign = Date.parse(new Date())
      Taro.setStorageSync('lastsign', state.lastsign)
      Taro.setStorageSync('days', state.days + 1)

      state.healthPercent = parseInt(Taro.getStorageSync('unitamount') / 20 * state.days)
      state.moneyPercent = parseInt(Taro.getStorageSync('unitprice') / Taro.getStorageSync('unitamount') * Taro.getStorageSync('amount') * state.days / 2)
      state.rewardPercent = state.days + 1
      Taro.showToast({
        title: `戒烟第${state.days}天`,
        icon: 'success',
        duration: 3000
      })
      // if (state.toasts.hasOwnProperty(state.days)) {
      //   Taro.showToast({
      //     title: `戒烟第${state.days}天`,
      //     icon: 'success',
      //     duration: 3000
      //   })
      // }
      return { ...state, ...payload }
    },
  }
}
