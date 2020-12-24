import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDropdownItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu

} from '@coreui/react'
import React, {useState} from 'react'

import MainChartExample from '../charts/MainChartExample.js'

const Dashboard = () => {
  const [featured, setFeatured] = useState('Pressure');

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="2">
              <h4 id="traffic" className="card-title mb-0">Main Graph</h4>
              <div className="small text-muted">Featured wise</div>
            </CCol>
            <CCol sm="10" className="d-none d-md-block">

              <CDropdown className="mt-2">
                <CDropdownToggle caret color="info">
                    {featured}
                </CDropdownToggle>
                <CDropdownMenu>{
                ['Pressure', 'Temperature', 'Relative Humidity','Saturation vapor pressure','Vapor pressure deficit','Water vapor concentration','Airtight','Wind speed','Wind direction in degrees'].map(value => (
                    <CDropdownItem
                     color="outline-secondary"
                      key={value}
                      className="mx-0"
                      id={value} 
                    onClick={()=>setFeatured(value)}>{value}
                    
                </CDropdownItem>
                ))
                }
                </CDropdownMenu>
                
              </CDropdown>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '400px', marginTop: '50px'}, {featured}}/>
        </CCardBody>

      </CCard>

    </>
  )
}

export default Dashboard
