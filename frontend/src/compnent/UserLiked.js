import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/userSlice';
import { removeToken, removeid } from '../services/LocalStorageService';
import moment from 'moment';

const UserLiked = () => {
  
  const ai = axios.create({
    baseURL : 'http://127.0.0.1:8000'
  })

  const { access_token } = useSelector(state => state.auth)

  const [lists, setlist] = useState([])
  

  useEffect( () => {
    async function getUser() {
      try {
        const response = await ai.get(
          'userlikedevents/',
          {headers : {
            'authorization' : `Bearer ${access_token}`
        }}
          );

            setlist(response.data)
      
      } catch (error) {
        console.error(error);
      }
    }
    getUser()
  },[])




  let navigate = useNavigate();
  const dispatch = useDispatch()

  const handlleclick = () => {
    
    removeToken()
    removeid()
    dispatch( unSetUserToken({access_token : null}) )

   navigate('/')

  }



  return (
    <>





<div className="eds-structure__header">
      <div className="without-sticky-behavior" style={{ paddingTop: "0px" }}>
        <div>
          <header
            id="global-header"
            className="consumer-header"
            data-spec="consumer-header"
          >
            <a
              className="consumer-header__skip-links eds-is-hidden-accessible"
              href="#skip-heading"
            >
              Skip Main Navigation
            </a>
            <div
              className="consumer-header__main"
              data-role="header"
            >
              <div
                className="consumer-header__content consumer-header__desktop eds-show-up-md"
                data-spec="consumer-header-desktop"
              >
              

              <a href="/" className="consumer-header__logo-link" data-spec="consumer-header-logo-link">
      <i
        className="eds-vector-image eds-brand--small eds-vector-image--ui-orange eds-vector-image--block eds-vector-image-size--reset"
        title="Eventbrite"
        data-spec="icon"
        data-testid="icon"
        style={{ height: '20px', width: '110px' }}
      >
        <svg viewBox="0 0 200 36">
          <g fillRule="evenodd">
            <g>
              <g transform="translate(.347)">
                <path d="M185.945 17.513c2.693-.61 5.381.495 6.878 2.584l-11.905 2.693c.411-2.52 2.333-4.668 5.027-5.277zm6.944 9.91a6.57 6.57 0 01-3.979 2.679c-2.711.614-5.417-.51-6.908-2.626l11.942-2.702 1.945-.44 3.719-.841a11.782 11.782 0 00-.31-2.372c-1.513-6.426-8.055-10.432-14.611-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.61 8.95 3.864-.875 6.869-3.46 8.377-6.751l-5.655-1.269z"></path>
                <path id="logo-wordmark-brand_svg__Fill-10" d="M164.788 35.118V18.082h-3.677v-5.804h3.677V4.289h6.244v7.989h4.69v5.804h-4.69v17.036z"></path>
                <path d="M152.86 35.118h6.03v-22.84h-6.03v22.84zm-.785-30.853c0-2.114 1.667-3.7 3.825-3.7 2.157 0 3.775 1.586 3.775 3.7 0 2.115-1.618 3.748-3.775 3.748-2.158 0-3.825-1.633-3.825-3.748zM150.76 12.342c-3.082.16-4.9.633-6.75 1.973v-2.037h-6.026v22.84h6.026v-11.2c0-3.524.86-5.529 6.75-5.726v-5.85zM117.16 24.057c.15 3.333 3.051 6.128 6.602 6.128 3.601 0 6.552-2.942 6.552-6.422 0-3.432-2.95-6.373-6.552-6.373-3.551 0-6.452 2.843-6.602 6.128v.539zm-5.88 11.061V1.38l6.03-1.364v13.962c1.863-1.49 4.07-2.115 6.472-2.115 6.864 0 12.355 5.286 12.355 11.918 0 6.583-5.491 11.965-12.355 11.965-2.403 0-4.609-.624-6.472-2.114v1.487h-6.03z"></path>
                <path id="logo-wordmark-brand_svg__Fill-1" d="M98.445 35.118V17.965h-3.677v-5.687h3.677V4.283l6.244-1.413v9.408h4.69v5.687h-4.69v17.153z"></path>
                <path d="M87.394 35.118V22.915c0-4.421-2.402-5.382-4.805-5.382-2.402 0-4.805.913-4.805 5.286v12.299h-6.03v-22.84h6.03v1.699c1.324-.961 2.942-2.115 6.13-2.115 5.098 0 9.51 2.932 9.51 10.092v13.164h-6.03zM56.484 17.513c2.694-.61 5.382.495 6.878 2.584L51.458 22.79c.41-2.52 2.332-4.668 5.026-5.277zm6.945 9.91a6.57 6.57 0 01-3.98 2.679c-2.71.614-5.416-.51-6.907-2.626l11.942-2.702 1.944-.44 3.72-.841a11.782 11.782 0 00-.31-2.372c-1.514-6.426-8.056-10.432-14.612-8.949-6.556 1.484-10.644 7.896-9.13 14.321 1.513 6.426 8.055 10.433 14.611 8.95 3.863-.875 6.868-3.46 8.376-6.751l-5.654-1.269z"></path>
                <path id="logo-wordmark-brand_svg__Fill-2" d="M31.89 35.118l-9.364-22.84h6.57l5.932 15.49 5.982-15.49h6.57l-9.365 22.84z"></path>
                <path d="M10.703 17.507c2.694-.61 5.382.495 6.878 2.584L5.677 22.785c.41-2.52 2.332-4.668 5.026-5.278zm6.945 9.91a6.57 6.57 0 01-3.98 2.68c-2.71.613-5.416-.51-6.907-2.626l11.942-2.702 1.945-.44 3.718-.842a11.782 11.782 0 00-.31-2.371c-1.513-6.426-8.055-10.433-14.61-8.95C2.888 13.65-1.2 20.063.314 26.489c1.514 6.426 8.055 10.432 14.611 8.949 3.864-.874 6.869-3.46 8.376-6.75l-5.654-1.27z"></path>
              </g>
            </g>
          </g>
        </svg>
        <span className="eds-is-hidden-accessible">Eventbrite</span>
      </i>
    </a>



                <div className="consumer-header__search" data-spec="consumer-header-search">
      <button
        data-testid="consumer-global-header-search"
        className="eds-btn--button eds-btn--none eds-btn--block consumer-header__search--button"
        type="button"
      >
        <div
          className="eds-field-styled eds-field-styled--disabled eds-field-styled--basic"
          style={{ marginBottom: '8px' }}
          data-automation="input-field-wrapper"
          data-testid="input-field-wrapper"
          data-spec="input-field"
        >
          <div className="eds-field-styled__border-simulation">
            <div className="eds-field-styled__internal">
              <span className="eds-field-styled__aside eds-field-styled__aside-prefix eds-field-styled__aside--icon">
                <i
                  className="eds-vector-image eds-icon--small eds-vector-image--ui-600"
                  data-spec="icon"
                  data-testid="icon"
                  aria-hidden="true"
                >
                  <svg
                    id="magnifying-glass-chunky_svg__eds-icon--magnifying-glass-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                  >
                    <path
                      id="magnifying-glass-chunky_svg__eds-icon--magnifying-glass-chunky_base"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"
                    />
                  </svg>
                </i>
              </span>
              <div className="eds-field-styled__input-container">
                <div className="eds-field-styled__label-wrapper">
                  <label
                    className="eds-field-styled__label eds-is-hidden-accessible"
                    id="header-event-search-button-label"
                    htmlFor="header-event-search-button"
                    data-spec="label-label"
                  >
                    <span className="eds-label__content">Search for events</span>
                  </label>
                </div>
                <input
                  type="text"
                  data-spec="input-field-input-element"
                  className="eds-field-styled__input"
                  disabled
                  id="header-event-search-button"
                  placeholder="Search events"
                  value=""
                  role="button"
                />
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>




  













                <div
                  className="consumer-header__links"
                  data-testid="consumer-header-links-test"
                >
                








                { access_token ? 
                <>
                <NavLink to="/usercreated" style={{textDecoration: 'none', color:'black'}}>

<a
  data-automation="global-nav-create"
  href="https://www.eventbrite.com/create/"
  data-spec="consumer-header__quick-link"
  className="consumer-header__quick-link consumer-header__quick-link--cta consumer-header__menu-label"
  style={{ color: "black" }}
  >
 Browse User event
</a>

  </NavLink>
                   <NavLink to="/userlikedevent" style={{textDecoration: 'none', color:'black'}}>

                   <a
                     data-automation="global-nav-create"
                     href="https://www.eventbrite.com/create/"
                     data-spec="consumer-header__quick-link"
                     className="consumer-header__quick-link consumer-header__quick-link--cta consumer-header__menu-label"
                     style={{ color: "black" }}
                     >
                     User Liked event
                   </a>
 
                     </NavLink>
                     <NavLink to="/createevent" style={{textDecoration: 'none', color:'black'}}>

<a
  data-automation="global-nav-create"
  href="https://www.eventbrite.com/create/"
  data-spec="consumer-header__quick-link"
  className="consumer-header__quick-link consumer-header__quick-link--cta consumer-header__menu-label"
  style={{ color: "black" }}
  >
  Create an event
</a>

  </NavLink>
                </>
   : 
   <NavLink to="/login" style={{textDecoration: 'none', color:'black'}}>

   <a
     data-automation="global-nav-create"
     href="https://www.eventbrite.com/create/"
     data-spec="consumer-header__quick-link"
     className="consumer-header__quick-link consumer-header__quick-link--cta consumer-header__menu-label"
     style={{ color: "rgb(61, 100, 255)" }}
     >
     Create an event
   </a>

     </NavLink>
        }







                  
                  <div
                    className="consumer-header__quick-links eds-l-mar-left-2"
                    data-testid="consumer-header-quick-links"
                  >


{ access_token ? 

<NavLink to="/" style={{textDecoration: 'none', color:'#0d6efd'}}>
          
          <a onClick={() => handlleclick()} className="consumer-header__quick-link">
            <span></span>
            <span>Logout</span>
          </a>
</NavLink>

                
                : 
             
                <>
                <NavLink to="/login" style={{textDecoration: 'none', color:'#0d6efd'}}>
          
          <a href="https://www.eventbrite.com/signin/?referrer=%2F" className="consumer-header__quick-link">
            <span></span>
            <span>Log In</span>
          </a>
</NavLink>
          
<NavLink to="/signup" style={{textDecoration: 'none', color:'#0d6efd'}}>

          <a href="https://www.eventbrite.com/signin/signup/?referrer=%2F" className="consumer-header__quick-link">
            <span></span>
            <span>Sign Up</span>
          </a>
</NavLink>          
                </>

                     }



                  
                  </div>
                </div>
              </div>
              <div
                className="consumer-header__content consumer-header__mobile eds-show-down-mn eds-g-cell eds-g-cell--has-overflow eds-g-cell-1-1"
                data-spec="consumer-header-mobile"
              >
                <div className="consumer-header__mobile-links eds-align--space-between">
                  <a
                    href="https://www.eventbrite.com"
                    className="consumer-header__logo-link"
                    data-spec="consumer-header-logo-link"
                  >
                    <i
                      className="eds-vector-image eds-brand--small eds-vector-image--ui-orange eds-vector-image--block eds-vector-image-size--reset"
                      title="Eventbrite"
                      data-spec="icon"
                      data-testid="icon"
                      style={{ height: "20px", width: "110px" }}
                    >
                      <svg viewBox="0 0 200 36">
                        {/* SVG paths go here */}
                      </svg>
                      <span className="eds-is-hidden-accessible">Eventbrite</span>
                    </i>
                  </a>
                  <div className="eds-align--center-vertical">
                    <div className="consumer-header__mobile-search-button">
                      <span className="eds-icon-button eds-icon-button--neutral" data-spec="icon-button">
                        <button className="eds-btn--button eds-btn--none eds-btn--icon-only" type="button">
                          <i
                            className="eds-vector-image eds-icon--small eds-vector-image--grey-600 eds-vector-image--block"
                            data-spec="icon"
                            data-testid="icon"
                          >
                            {/* Icon SVG goes here */}
                          </i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span id="skip-heading" className="eds-is-hidden-accessible">Page Content</span>
          </header>
        </div>
      </div>
    </div>








<div>
      <div>
        <div className="browse-section" id="browse-section">
          <div className="without-sticky-behavior" style={{ paddingTop: '0px' }}>
            <div>
              <div className="eds-tabs">
                <div>
                  <div id="panel0" className="eds-tabs__content eds-tabs__content-all" role="region" aria-live="polite" aria-labelledby="tab0">
                    <section className="eds-layout eds-layout--has-large-max-width eds-layout--has-horizontal-gutters" data-spec="eds-layout">
                      <div className="eds-layout__body" data-spec="eds-layout__body">
                        <div className="feed-builder" data-event-bucket-label="All">
                          <section>
                            <div className="feed-events-bucket feed-events--primary_bucket feed-events-bucket--animated feed-events-bucket--animate" style={{ minHeight: '100px' }}>
                              <div className="feed-events-bucket__content">
                                <div className="feed__bucket-header eds-l-mn-pad-hor-3 eds-l-md-pad-hor-3 eds-l-mw-pad-hor-3 eds-l-ln-pad-hor-3 eds-l-lg-pad-hor-3 eds-l-lw-pad-hor-3" data-testid="feed-bucket-header">
                                  <div></div>
                                </div>
                                <div className="feed-events-bucket__content__cards-container">



  <div style={{ marginTop: '50px', marginBottom: '30px' }}>
  <div className="eds-structure__body eds-structure__body--overflow-set">
    <section className="eds-structure__drawer eds-structure__right-drawer" data-spec="eds-structure-drawer-right">
      <div className="eds-structure__drawer-content"></div>
    </section>
    <div className="eds-structure__main-mask eds-structure__main-mask--overflow-set" data-spec="eds-structure-main-mask">
      <div className="eds-structure__fixed-bottom-bar-layout-wrapper">
        <div className="eds-fixed-bottom-bar-layout" data-spec="fixed-bottom-bar-layout">
          <div className="eds-fixed-bottom-bar-layout__content">
            <div className="eds-structure__main-container">
              <main className="eds-structure__main" data-spec="eds-structure-main">
                <section className="eds-layout eds-layout--has-large-max-width eds-layout--has-horizontal-gutters" data-spec="eds-layout">
                  <div className="eds-layout__body" data-spec="eds-layout__body">
                    <header className="user-page--header">
                      <h1 className="eds-text-hl user-page--header__title">Likes</h1>
                    </header>

                    {

lists != [] ? lists.map((x,j)=>
  // console.log(x.event_name)
  // console.log(x.image)
  // console.log(x.location)
  // console.log(x.time)
                    <main className="user-page__main">
                      <div className="user-profile__events-section">
                        <main data-spec="events-from-following-events">
                          <div className="eds-show-up-sm" data-spec="events-from-following__desktop">
                            <div className="event-card-group">
                              <div className="eds-g-group">
                                <div className="eds-g-cell eds-g-cell--has-overflow eds-g-cell-1-1 eds-g-cell-mn-9-12">
                                  <div className="eds-l-pad-hor-2 eds-l-pad-vert-1">
                                    <div className="eds-event-card--consumer">
                                      <div className="eds-card eds-card--neutral" role="presentation">
                                        <article className="eds-l-pad-all-3 eds-event-card-content eds-event-card-content--list eds-event-card-content--standard eds-event-card-content--fixed" role="presentation">
                                          <div className="eds-show-up-sm"></div>
                                          <div className="eds-event-card-content__content-container eds-l-pad-right-4">
                                            
                                            <div className="eds-event-card-content__content">
                                              <div className="eds-event-card-content__content__principal">
                                                <div className="eds-event-card-content__primary-content">
                                                  <a tabIndex="0" href="https://www.eventbrite.com/e/global-business-management-education-expo-2023-delhi-tickets-665153410757?aff=eprofsaved" className="eds-event-card-content__action-link" aria-label="">
                                                    <h3 className="eds-event-card-content__title eds-text-color--ui-800 eds-text-bl eds-text-weight--heavy">
                                                      <div data-spec="event-card__formatted-name">
                                                        <div className="eds-is-hidden-accessible">{x.event_name}</div>
                                                        <div className="eds-event-card__formatted-name--is-clamped eds-event-card__formatted-name--is-clamped-three eds-text-weight--heavy" aria-hidden="true" role="presentation" data-spec="event-card__formatted-name--content">{x.event_name}</div>
                                                      </div>
                                                    </h3>
                                                  </a>
                                                  <div className="eds-event-card-content__sub-title eds-text-color--primary-brand eds-l-pad-bot-1 eds-l-pad-top-2 eds-text-weight--heavy eds-text-bm">{moment(`${x.time}`).fromNow()}</div>
                                                </div>
                                                <div className="eds-event-card-content__sub-content">
                                                  <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1 eds-event-card-content__sub--cropped">
                                                    <div data-subcontent-key="location" className="card-text--truncated__one">{x.location}</div>
                                                  </div>
                                                  <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1 eds-event-card-content__sub--cropped">Free</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </article>
    <div style={{paddingTop:"10px"}}>                           
<img height="130px" src={`http://127.0.0.1:8000/.${x.image}`} />
<svg height="50px"
    id="share-ios-chunky_svg__eds-icon--share-ios-chunky_svg"
    x="0"
    y="0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="share-ios-chunky_svg__eds-icon--share-ios-chunky_base"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 16v2H6v-2H4v4h16v-4z"
    />
    <path
      id="share-ios-chunky_svg__eds-icon--share-ios-chunky_arrow"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4L7 9l1.4 1.4L11 7.8V16h2V7.8l2.6 2.6L17 9l-5-5z"
    />
  </svg>          
  
  <svg height="50px"
    id="heart-fill-chunky_svg__eds-icon--heart-fill-chunky_svg"
    x="0"
    y="0"
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="heart-fill-chunky_svg__eds-icon--heart-fill-chunky_base"
      fill="red"  // Change the fill color to red
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.5-1.6 1.5-4.2 0-5.8C18.1 5.4 17 5 16 5"
    />
  </svg>                       
  </div>    
                                   

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="eds-show-down-sn" data-spec="events-from-following__mobile">
                            <div className="event-card-group">
                              <div className="eds-g-group">
                                <div className="eds-g-cell eds-g-cell--has-overflow">
                                  <div className="eds-l-pad-hor-2 eds-l-pad-vert-1">
                                    <div className="eds-event-card--consumer">
                                      <div className="eds-card eds-card--neutral" role="presentation">
                                        <article className="eds-event-card-content eds-event-card-content--list eds-event-card-content--standard eds-event-card-content--fixed" role="presentation">
                                          <div className="eds-show-up-sm"></div>
                                          <div className="eds-event-card-content__content-container eds-l-pad-right-4">
                                            <div className="eds-event-card-content__content">
                                              <div className="eds-event-card-content__content__principal">
                                                <div className="eds-event-card-content__primary-content">
                                                  <a tabIndex="0" href="https://www.eventbrite.com/e/global-business-management-education-expo-2023-delhi-tickets-665153410757?aff=eprofsaved" className="eds-event-card-content__action-link" aria-label="">
                                                    <h3 className="eds-event-card-content__title eds-text-color--ui-800 eds-text-bl eds-text-weight--heavy">
                                                      <div data-spec="event-card__formatted-name">
                                                        <div className="eds-is-hidden-accessible">{x.event_name}</div>
                                                        <div className="eds-event-card__formatted-name--is-clamped eds-event-card__formatted-name--is-clamped-three eds-text-weight--heavy" aria-hidden="true" role="presentation" data-spec="event-card__formatted-name--content">{x.event_name}</div>
                                                      </div>
                                                    </h3>
                                                  </a>
                                                  <div className="eds-event-card-content__sub-title eds-text-color--primary-brand eds-l-pad-bot-1 eds-l-pad-top-2 eds-text-weight--heavy eds-text-bm">Sat, Aug 5, 10:00 AM</div>
                                                </div>
                                                <div className="eds-event-card-content__sub-content">
                                                  <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1 eds-event-card-content__sub--cropped">
                                                    <div data-subcontent-key="location" className="card-text--truncated__one">Le Meridien New Delhi, New Delhi</div>
                                                  </div>
                                                  <div className="eds-event-card-content__sub eds-text-bm eds-text-color--ui-600 eds-l-mar-top-1 eds-event-card-content__sub--cropped">Free</div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </article>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </main>
                        <div className="eds-l-mar-vert-6"></div>
                      </div>
                    </main>
     
     ) : <></>

}
     
                  
                  </div>
                </section>
              </main>
            </div>
          </div>
          <div className="eds-fixed-bottom-bar-layout__bar"></div>
        </div>
      </div>
    </div>
  </div>
</div>








 













                                </div>
                              </div>
                            </div>
                          </section>
                          <hr className="feed-events-bucket__separator" />
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    </>
  )
}

export default UserLiked