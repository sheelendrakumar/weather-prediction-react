import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav
} from '@coreui/react'
import './leftSide.css'
import admin_icon from './images/admin_icon.png'
import network_icon from './images/network_icon.png'
import point_icon from './images/point_icon.png'
import strategy_icon from './images/strategy_icon.png'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)
  
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="weather_prediction">
       Daily Weather Prediction
      </CSidebarBrand>
      <CSidebarNav>
        <div className="left_container">
          <div className="left_container_top">
            <div className="lft_top">
              <div className="lft_lft">
                <img src={admin_icon}/>
              </div>
              <div className="lft_rft">
              Rona Lamba
              <span>Data Analyst</span>
              </div>
            </div>
            <div className="lft_bottom">
              Powerd by <a href={'https://www.deltika.com/'} target='_blank'>Deltika</a>
            </div>
          </div>
          <div className="left_container_middle">
              <div className="lft_mdl_top">
                <span><img src={strategy_icon}></img></span> Strategy
              </div>
              <div className="lft_mdl_mdl">
                <span><img src={point_icon}></img></span> Points
              </div>
              <div className="lft_mdl_btm">
                <span><img src={network_icon}></img></span> What If
              </div>
          </div>
          <div className="left_container_bottom">
              <div className="botm_container">
                <div className="profile_img">
                  <div className="img_div">
                      <span><img src={admin_icon}/></span>
                  </div>
                  <div className="uname_div">
                      <span className="user_name">
                        Rona Lamla
                      </span>
                      <span className="targer_div">
                        Target: 750
                      </span>
                  </div>
                </div>
                <div className="border_line">
            
                </div>
                <div className="profile_desc">
                  <div className="profile_elements">
                    <span className="label_name">
                        Email
                    </span>
                    <span className="label_val">
                      abc@gmail.com
                    </span>
                  </div>
                  <div className="profile_elements">
                    <span className="label_name">
                        Phone
                    </span>
                    <span className="label_val">
                      0504490101
                    </span>
                  </div>
                  <div className="profile_elements">
                    <span className="label_name">
                        ID
                    </span>
                    <span className="label_val">
                      0123456789
                    </span>
                  </div>
                  <div className="profile_elements">
                    <span className="label_name">
                        AC
                    </span>
                    <span className="label_val">
                      34778888
                    </span>
                    <span>
                      <a className="see_all_link"> See all</a>
                    </span>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
