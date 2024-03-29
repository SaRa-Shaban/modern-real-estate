import React from 'react'
import styles from "./Listed.module.css";
import p1 from './../../images/p-1.png'
import p2 from './../../images/p-2.png'
import p5 from './../../images/p-5.png'
import p4 from './../../images/p-4.png'
import p6 from './../../images/p-6.png'
import p7 from './../../images/p-7.png'




export default function Listed() {
  return (
    <>
      {/* blog */}
      <div className="container py-5">
          <div className="row gy-5 gx-5 ">

            <div className="col-md-4">
              <div className="card" >
                <img src={p1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.rent} px-2`}>for rent</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card" >
                <img src={p2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.sale} px-2`}>for sale</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card" >
                <img src={p5} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.rent} px-2`}>for rent</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card" >
                <img src={p4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.sale} px-2`}>for sale</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card" >
                <img src={p6} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.rent} px-2`}>for rent</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="col-md-4">
              <div className="card" >
                <img src={p7} className="card-img-top" alt="..." />
                <div className="card-body">
                  <div className='w-100 d-flex justify-conten-between align-items-center'>
                    <div className='w-100'>
                      <span className={`${styles.sale} px-2`}>for sale</span>
                    </div>
                    <div>
                      <i className={`${styles.heart} fa fa-heart`}></i>
                    </div>
                  </div>
                  <h6 className='fw-semibold pt-2'>Red Carpet Real Estate</h6>
                  <p className='text-muted'><span><i className='fa fa-location-dot'></i></span> 210 Zirak Road, Canada</p>
                </div>
                <ul className="list-group list-group-flush py-3">
                  <li className="list-group-item">
                    <button className='btn btn-success rounded-5 py-3 px-4 fs-5'>$3.700</button>/sqf
                    <span className='ms-1 p-2'>apartment</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
    </>
  )
}
