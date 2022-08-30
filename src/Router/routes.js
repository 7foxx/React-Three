/* eslint-disable import/no-anonymous-default-export */
import { lazy } from 'react'

const MarKdown = lazy(() => import('../MarKdown'))

const obj = [
  {
    title: '1、 场景与相机',
    path: '/three_1',
    component: lazy(() => import('../Page/1-Three')),
    code: {
      path: '/three_1/doc_1',
      doc: require('../Docs/Three_1.md'),
      component: MarKdown
    }
  },
  {
    title: '2、 控制器与坐标轴',
    path: '/three_2',
    component: lazy(() => import('../Page/2-Three')),
    code: {
      path: '/three_2/doc_2',
      doc: require('../Docs/Three_2.md'),
      component: MarKdown
    }
  },
  {
    title: '3、 移动、缩放、旋转',
    path: '/three_3',
    component: lazy(() => import('../Page/3-Three')),
    code: {
      path: '/three_3/doc_3',
      doc: require('../Docs/Three_3.md'),
      component: MarKdown
    }
  },
  {
    title: '4、 GSAP动画',
    path: '/three_4',
    component: lazy(() => import('../Page/4-Three')),
    code: {
      path: '/three_4/doc_4',
      doc: require('../Docs/Three_4.md'),
      component: MarKdown
    }
  },
  {
    title: '5、 控制器阻尼与响应式场景',
    path: '/three_5',
    component: lazy(() => import('../Page/5-Three')),
    code: {
      path: '/three_5/doc_5',
      doc: require('../Docs/Three_5.md'),
      component: MarKdown
    }
  },
  {
    title: '6、 材质与纹理',
    path: '/three_6',
    component: lazy(() => import('../Page/6-Three')),
    code: {
      path: '/three_6/doc_6',
      doc: require('../Docs/Three_6.md'),
      component: MarKdown
    }
  },
  {
    title: '7、 灯光与置换、粗糙、金属、法线各类贴图',
    path: '/three_7',
    component: lazy(() => import('../Page/7-Three')),
    code: {
      path: '/three_7/doc_7',
      doc: require('../Docs/Three_7.md'),
      component: MarKdown
    }
  },
  {
    title: '8、 资源加载进度',
    path: '/three_8',
    component: lazy(() => import('../Page/8-Three')),
    code: {
      path: '/three_8/doc_8',
      doc: require('../Docs/Three_8.md'),
      component: MarKdown
    }
  },
  {
    title: '9、 环境贴图与HDR场景',
    path: '/three_9',
    component: lazy(() => import('../Page/9-Three')),
    code: {
      path: '/three_9/doc_9',
      doc: require('../Docs/Three_9.md'),
      component: MarKdown
    }
  },
  {
    title: '10、 灯光与阴影',
    path: '/three_10',
    component: lazy(() => import('../Page/10-Three')),
    code: {
      path: '/three_10/doc_10',
      doc: require('../Docs/Three_10.md'),
      component: MarKdown
    }
  },
  {
    title: '11、 聚光灯',
    path: '/three_11',
    component: lazy(() => import('../Page/11-Three')),
    code: {
      path: '/three_11/doc_11',
      doc: require('../Docs/Three_11.md'),
      component: MarKdown
    }
  },
  {
    title: '12、 点光源',
    path: '/three_12',
    component: lazy(() => import('../Page/12-Three')),
    code: {
      path: '/three_12/doc_12',
      doc: require('../Docs/Three_12.md'),
      component: MarKdown
    }
  },
  {
    title: '13、 水面',
    path: '/three_13',
    component: lazy(() => import('../Page/13-Three')),
    code: {
      path: '/three_13/doc_13',
      doc: require('../Docs/Three_13.md'),
      component: MarKdown
    }
  }
]

export default obj
