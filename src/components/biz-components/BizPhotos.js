// import React, { Component, useState } from 'react';
// import { Link, NavLink } from "react-router-dom";
// import Header from '../Header';
// import LeftSidebar from '../LeftSidebar';
// import RightSidebar from '../RightSidebar';
// import BizTopBanner from './BizTopBanner';
// import BizDetailMenu from './BizDetailMenu';
// import Models from '../Models';

// export default function GroupDetail() {
//     const [kebab, setKebab] = useState([
//         {
//             icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>,
//             name: "Hide from Timeline"
//         },
//         {
//             icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>,
//             name: "Copy Link"
//         },
//         {
//             icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>,
//             name: 'Edit Post'
//         },
//         {
//             icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>,
//             name: 'Delete'
//         },
//         {
//             icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
//             name: 'Share'
//         }

//     ])
//     return (
//         <>
//             <Header />
//             <div className="page-body container-fluid profile-page">
//                 <LeftSidebar />
//                 <div className="page-center">
//                     <BizTopBanner />
//                     <BizDetailMenu />

//                     <div className="container-fluid section-t-space px-0">
//                         <div className="page-content">
//                             <div className="content-center w-100">
//                                 <div className="gallery-page-section section-b-space">
//                                     <div className="card-title">
//                                         <h3>Media</h3>
//                                         <div className="right-setting">
//                                             <a href="#" className="btn btn-outline-green ms-3">Add photo/video</a>
//                                         </div>
//                                     </div>
//                                     <div className="tab-section">
//                                         <ul className="nav nav-tabs" id="myTab" role="tablist">
//                                             <li className="nav-item">
//                                                 <a className="nav-link active" id="profile-tab" data-bs-toggle="tab"
//                                                     href="#gallery-image" role="tab" aria-selected="false">Images (59)</a>
//                                             </li>
//                                             <li className="nav-item">
//                                                 <a className="nav-link " id="gallery-video" data-bs-toggle="tab" href="#photo" role="tab"
//                                                     aria-selected="true">Videos (5)</a>
//                                             </li>
//                                         </ul>
//                                         <div className="tab-content" id="myTabContent">
//                                             <div className="tab-pane fade show active Choose-photo-modal" id="gallery-image"
//                                                 role="tabpanel" aria-labelledby="profile-tab">
//                                                 <div className="row gallery-album">
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-1.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                             {
//                                                                                 kebab.map((option, index) => (
//                                                                                     <ul>
//                                                                                         <li>
//                                                                                             <Link to={'./'} >{option.icon}{option.name}</Link>
//                                                                                         </li>
//                                                                                     </ul>

//                                                                                 ))
//                                                                             }
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-4.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-4.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-1.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-3.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-1.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-4.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-3.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <ul className="pagination-block">
//                                                     <li><a className="prev"><img src="assets/images/prev.png" /></a></li>
//                                                     <li><a className="active">1</a></li>
//                                                     <li><a>2</a></li>
//                                                     <li><a>3</a></li>
//                                                     <li><a>4</a></li>
//                                                     <li><a className="next"><img src="assets/images/next.png" /></a></li>
//                                                 </ul>
//                                             </div>
//                                             <div className="tab-pane fade Choose-photo-modal" id="photo" role="tabpanel" aria-labelledby="gallery-video">
//                                                 <div className="row gallery-album">
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-1.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="center-gallery-cont">
//                                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img src="assets/images/play-btn.png" /></a>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="center-gallery-cont">
//                                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img src="assets/images/play-btn.png" /></a>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-3.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="center-gallery-cont">
//                                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img src="assets/images/play-btn.png" /></a>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-4.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="center-gallery-cont">
//                                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img src="assets/images/play-btn.png" /></a>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
//                                                         <div className="media-images-blk">
//                                                             <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-2.jpg" alt="" /></a>
//                                                             <div className="text-gallery">
//                                                                 <div className="top-gallery-cont">
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

//                                                                     <div className="gallery-img-sublink">
//                                                                         <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
//                                                                         <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
//                                                                             <ul>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
//                                                                                 </li>
//                                                                                 <li>
//                                                                                     <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
//                                                                                 </li>
//                                                                             </ul>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
//                                                                 <div className="center-gallery-cont">
//                                                                     <a href="#" data-bs-toggle="modal" data-bs-target="#imageModel"><img src="assets/images/play-btn.png" /></a>
//                                                                 </div>
//                                                                 <div className="bottom-gallery-cont">
//                                                                     <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
//                                                                     <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <RightSidebar></RightSidebar>
//             </div>
//             <Models></Models>
//         </>
//     );
// }
import React from 'react'
import Header from '../Header'
import LeftSidebar from '../LeftSidebar'
import Models from '../Models'
import BizTopBanner from './BizTopBanner'
import BizDetailMenu from './BizDetailMenu'
import RightSidebar from '../RightSidebar'
import { Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import { useState } from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const BizPhotos = () => {
    const [currentActiveTab, setCurrentActiveTab] = useState('1')
    //  toggle  active state  for tab 
    const toggle = tab => {
        if (currentActiveTab !== tab) setCurrentActiveTab(tab)
    }
    const CardMedia = () => {
        const options = [
            {
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>,
                name: "Hide from Timeline"
            },
            {
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>,
                name: "Copy Link"
            },
            {
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>,
                name: 'Edit Post'
            },
            {
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>,
                name: 'Delete'
            },
            {
                icon: <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>,
                name: 'Share'
            }
        ]
        return (
            <>
                <div className="media-images-blk">
                    <a data-bs-toggle="modal" data-bs-target="#imageModel"><img className="gallery-img" src="assets/images/media-1.jpg" alt="" /></a>
                    <div className="text-gallery">
                        <div className="top-gallery-cont">
                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> 120</p>

                            <div className="gallery-img-sublink">
                                <a href="#" className="dropbtn-gal" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                                <div className="dropdown-menu dropdown-menu-right custom-dropdown drop-menu-gal">
                                    <ul>
                                        <li>
                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide from Timeline</a>
                                        </li>
                                        <li>
                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy Link</a>
                                        </li>
                                        <li>
                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg> Delete</a>
                                        </li>
                                        <li>
                                            <a href="#"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon-font-light iw-16 ih-16"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> Share</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className="bottom-gallery-cont">
                            <p><img src="assets/images/like.png" className="iw-14 ih-14" /> 121</p>
                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> 30</p>
                            <p><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="iw-14 ih-14"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg> 32</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    const CardDataInfo = () => {
        return (
            <>
                <Row className='mt-4'>
                    <Col xl="3" lg="4" md="6" sm="6">
                        <CardMedia />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6">
                        <CardMedia />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6">
                        <CardMedia />
                    </Col>
                    <Col xl="3" lg="4" md="6" sm="6">
                        <CardMedia />
                    </Col>
                </Row>
            </>
        )
    }
    const TabFunction = () => {
        return (
            <>
                <div className="container-fluid section-t-space px-0">
                    <div className="content-center w-100">
                        <div className="gallery-page-section section-b-space">
                            <div className="card-title">
                                <h3>Media</h3>
                                <div className="right-setting">
                                    <Link to={"#"} className="btn btn-outline-green ms-3">Add photo/video</Link>
                                </div>
                            </div>
                            <Row className="card-title">
                                <Col md={6} >
                                    <h3>Media</h3>
                                </Col>
                                <Col md={6} >
                                    <div className=' right-setting d-flex justify-content-end'>
                                        <Link to={"#"} className="btn btn-outline-green ms-3">Add photo/video</Link>
                                    </div>
                                </Col>
                            </Row>
                            <Nav tabs >
                                <NavItem>
                                    <NavLink
                                        className={
                                            classnames({
                                                active: currentActiveTab === '1'
                                            })}
                                        onClick={() => { toggle('1') }}
                                    >

                                        Images {59}
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={
                                            classnames({
                                                active: currentActiveTab === '2'
                                            })}
                                        onClick={() => { toggle('2') }}
                                    >
                                        videos {5}
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={currentActiveTab}>
                                <TabPane tabId="1">
                                    <CardDataInfo />
                                </TabPane>
                                <TabPane tabId="2">
                                    bfxdgb
                                </TabPane>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    // main_return_function
    return (
        <>
            <Header />
            <div className="page-body container-fluid profile-page">
                <LeftSidebar />
                <div className="page-center">
                    <BizTopBanner />
                    <BizDetailMenu />
                    <TabFunction />
                </div>
                <RightSidebar />
            </div>
            <Models />

        </>
    )
}

export default BizPhotos