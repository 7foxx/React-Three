/* eslint-disable react/jsx-no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { List, Spin } from 'antd'
import { useSelector } from 'react-redux'
import routes from './routes'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import { PROGRESS } from '../Redux/store/actions'
import { useDispatch } from 'react-redux'

export default function index() {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()
  const BoxRef = useRef(null)
  const [Fullscrenn, SetFullscrenn] = useState(true)
  const [ProgressFlag, setProgressFlag] = useState(true)
  const { success } = useSelector(state => state)
  // console.log(itemsLoaded);
  // 监测全屏状态
  useEffect(() => {
    const fun = () => {
      if (!document.fullscreenElement) SetFullscrenn(true)
    }
    window.addEventListener('resize', fun)
    return () => {
      window.removeEventListener('resize', fun)
    }
  }, [Fullscrenn])

  // 计算进度条
  useEffect(() => {
    if (/doc_/gi.test(location.pathname)) {
      setProgressFlag(false)
    } else {
      setProgressFlag(typeof success === 'string' ? false : success)
    }
    if (!success || typeof success === 'string') {
      // setProgressFlag(true)
      const Three = document.querySelector('#Three')
      if (Three && Three.style) Three.style.display = 'block'
    }
  }, [success])

  return (
    <>
      <div id="left">
        <List
          className="List"
          itemLayout="horizontal"
          dataSource={routes}
          rowKey="path"
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                onClick={() => {
                  navigate(item.path)
                  if (location.pathname !== item.path) {
                    dispatch(
                      PROGRESS({
                        success: true
                      })
                    )
                  }
                }}
              />
              <span
                style={{
                  marginBottom: '4px',
                  marginLeft: 10
                }}
                onClick={() => {
                  navigate(item.code.path, { state: item.code.doc })
                  setProgressFlag(false)
                }}
              >
                源码
              </span>
            </List.Item>
          )}
        />
      </div>
      <div
        id="Box"
        ref={BoxRef}
        // onDoubleClick={() => {
        //   // 判断是否全屏
        //   if (document.fullscreenElement) {
        //     // 就推出全屏
        //     document.exitFullscreen()
        //     SetFullscrenn(true)
        //   }
        // }}
      >
        {/* Icon */}
        <div
          id="icon"
          onClick={() => {
            // 判断是否全屏
            if (!document.fullscreenElement) {
              // 请求全屏
              BoxRef.current.requestFullscreen()
              SetFullscrenn(false)
            } else {
              // 推出全屏
              document.exitFullscreen()
              SetFullscrenn(true)
            }
          }}
        >
          {Fullscrenn ? (
            <FullscreenOutlined
              style={{ color: '#ffffff', fontSize: '30px' }}
            />
          ) : (
            <FullscreenExitOutlined
              style={{ color: '#ffffff', fontSize: '30px' }}
            />
          )}
        </div>
        {/* 进度条 */}
        {ProgressFlag && (
          <div id="spin">
            <Spin size="lorge" spinning={ProgressFlag} />
          </div>
        )}
        {/* 路由入口 */}
        <Suspense>
          <Routes>
            {routes.map(item => {
              return (
                <Route key={item.path}>
                  <Route path={item.path} element={<item.component />}></Route>
                  <Route
                    path={item.code.path}
                    element={<item.code.component />}
                  ></Route>
                </Route>
              )
            })}
          </Routes>
        </Suspense>
      </div>
    </>
  )
}
