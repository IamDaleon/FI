import React from 'react'

const Slider = () => {
  return (
<div className="demo-cont">
    
  <div className="fnc-slider example-slider">
    <div className="fnc-slider__slides">
        
      <div className="fnc-slide m--blend-green m--active-slide">
        <div className="fnc-slide__inner">
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner"></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Kratom</span>
              </div>
            </h2>
          </div>
        </div>
      </div>

      <div className="fnc-slide m--blend-dark">
        <div className="fnc-slide__inner">
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner"></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Kratom</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Alternative</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits">Credits</span>
            </button>
          </div>
        </div>
      </div>

      <div className="fnc-slide m--blend-red">
        <div className="fnc-slide__inner">
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner"></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Incense</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>&</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Smudge</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits">Credits</span>
            </button>
          </div>
        </div>
      </div>

      <div className="fnc-slide m--blend-blue">
        <div className="fnc-slide__inner">
          <div className="fnc-slide__mask">
            <div className="fnc-slide__mask-inner"></div>
          </div>
          <div className="fnc-slide__content">
            <h2 className="fnc-slide__heading">
              <div className="fnc-slide__heading-line">
                <span>Speciality</span>
              </div>
              <div className="fnc-slide__heading-line">
                <span>Herbs</span>
              </div>
            </h2>
            <button type="button" className="fnc-slide__action-btn">
              Credits
              <span data-text="Credits">Credits</span>
            </button>
          </div>
        </div>
      </div>

    </div>
    <nav className="fnc-nav">
      <div className="fnc-nav__bgs">
        <div className="fnc-nav__bg m--navbg-green m--active-nav-bg"></div>
        <div className="fnc-nav__bg m--navbg-dark"></div>
        <div className="fnc-nav__bg m--navbg-red"></div>
        <div className="fnc-nav__bg m--navbg-blue"></div>
      </div>
      <div className="fnc-nav__controls">
        <button className="fnc-nav__control">
          Kratom
          <span className="fnc-nav__control-progress"></span>
        </button>
        <button className="fnc-nav__control">
          Kratom Alternative
          <span className="fnc-nav__control-progress"></span>
        </button>
        <button className="fnc-nav__control">
          Smudge & Incense
          <span className="fnc-nav__control-progress"></span>
        </button>
        <button className="fnc-nav__control">
          Speciality Herbs
          <span className="fnc-nav__control-progress"></span>
        </button>
      </div>
    </nav>
  </div>

  <div class="demo-cont__credits">
    <div class="demo-cont__credits-close"></div>
    <h2 class="demo-cont__credits-heading">Made by</h2>
    <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/142996/profile/profile-512_5.jpg" alt="" class="demo-cont__credits-img" />
    <h3 class="demo-cont__credits-name">Nikolay Talanov</h3>
    <a href="https://codepen.io/suez/" target="_blank" class="demo-cont__credits-link">My codepen</a>
    <a href="https://twitter.com/NikolayTalanov" target="_blank" class="demo-cont__credits-link">My twitter</a>
    <h2 class="demo-cont__credits-heading">Based on</h2>
    <a href="https://dribbble.com/shots/2375246-Fashion-Butique-slider-animation" target="_blank" class="demo-cont__credits-link">Concept by Kreativa Studio</a>
    <h4 class="demo-cont__credits-blend">Global Blend Mode</h4>
    <div class="colorful-switch">
      <input type="checkbox" class="colorful-switch__checkbox js-activate-global-blending" id="colorful-switch-cb" />
      <label class="colorful-switch__label" for="colorful-switch-cb">
        <span class="colorful-switch__bg"></span>
        <span class="colorful-switch__dot"></span>
        <span class="colorful-switch__on">
          <span class="colorful-switch__on__inner"></span>
        </span>
        <span class="colorful-switch__off"></span>
      </label>
    </div>
  </div>
</div>
  )
}

export default Slider