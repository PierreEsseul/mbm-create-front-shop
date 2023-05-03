import React, { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

import './BtnLoad.css';


const BtnLoad = (props) => {
  const buttonArea = useRef(null);
  const progressArea = useRef(null);
  const completeArea = useRef(null);
  const mainBtn = useRef(null);
  const frameBtn = useRef(null);
  const loadingIcon = useRef(null);
  const loadingProgress = useRef(null);
  const tick1 = useRef(null);
  const tick2 = useRef(null);
  const doneText = useRef(null);

  let loadingTime = 6000
  let progress = {
    value: '0 %'
  };  
  
  useEffect(startLoading, []);

  function completeLoading() {
    anime({
      targets: loadingIcon.current,
      translateX: [0, -20],
      opacity: [1, 0],
      duration: 500,
      delay: 0,
      easing: 'easeInQuad'
    })

    anime({
      targets: loadingProgress.current,
      translateY: [0, -20],
      opacity: [1, 0],
      duration: 500,
      delay: 250,
      easing: 'easeInQuad',
      complete: function() {
        completeArea.current.style.display = 'flex'
      }
    })

    anime({
      targets: frameBtn.current,
      fill: ['#f5f9fe', '#ffbf23'],
      duration: 500,
      delay: 750,
      easing: 'easeInQuad'
    })

    anime({
      targets: tick1.current,
      strokeDashoffset: [52, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'cubicBezier(.5, .05, .3, .9)',
      delay: 1000
    })

    anime({
      targets: tick2.current,
      strokeDashoffset: [52, 0],
      opacity: [0, 1],
      duration: 500,
      easing: 'cubicBezier(.5, .05, .3, .9)',
      delay: 1250
    })

    anime({
      targets: doneText.current,
      opacity: [0, 1],
      translateY: ['25', '0'],
      duration: 1000,
      easing: 'easeOutQuad',
      delay: 1250
    })
  };

  function startLoading() {
    anime({
      targets: loadingIcon.current,
      opacity: [0, 1],
      duration: 750,
      easing: 'easeOutQuad'
    })

    anime({
      targets: loadingIcon.current,
      rotateZ: 360,
      duration: 2000,
      loop: true,
      easing: 'linear'
    })

    anime({
      targets: loadingProgress.current,
      translateY: ['15px', '0'],
      opacity: [0, 1],
      delay: 250,
      duration: 750,
      easing: 'easeOutQuart'
    })

    anime({
      targets: progress,
      value: '100%',
      duration: loadingTime, 
      easing: 'easeInOutExpo',
      delay: 1000,
      round: 1,
      update: function() {
        loadingProgress.current.innerHTML = JSON.stringify(progress.value).replace(/^"(.*)"$/, '$1')
      }
    })

    anime({
      targets: frameBtn.current,
      strokeDashoffset: [525, 0],
      duration: loadingTime,
      easing: 'cubicBezier(.5, .05, .3, .9)',
      delay: 1000,
      complete: function() {
        completeLoading()
      }
    })
  };

    return (
      <main className='main'>
          <div className="btn-area" ref={buttonArea} >
              <svg className="main-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <rect ref={mainBtn} fill="#fff" stroke="#ffbf23" strokeWidth="4" x="1" y="1" rx="10" ry="10" />
              </svg>

              <svg className="frame-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <rect ref={frameBtn} fill="none" stroke="#ffbf23" strokeWidth="2" strokeDasharray="525" strokeDashoffset="525" x="1" y="1" rx="10" ry="10" />
              </svg>

              <div className="progress-area" ref={progressArea}>
                  <div className="area-left">
                      <svg ref={loadingIcon} width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 3C17.1 3 16.5 3.6 16.5 4.5V8.25C16.5 9.15 17.1 9.75 18 9.75C18.9 9.75 19.5 9.15 19.5 8.25V4.5C19.5 3.6 18.9 3 18 3Z" fill="#ffbf23" />
                        <path d="M10.0504 12.1504C10.3504 12.4504 10.8004 12.6004 11.1004 12.6004C11.4004 12.6004 11.8504 12.4504 12.1504 12.1504C12.7504 11.5504 12.7504 10.6504 12.1504 10.0504L9.45039 7.35039C8.85039 6.75039 7.95039 6.75039 7.35039 7.35039C6.75039 7.95039 6.75039 8.85039 7.35039 9.45039L10.0504 12.1504Z" fill="#ffbf23" />
                        <path d="M9.75 18C9.75 17.1 9.15 16.5 8.25 16.5H4.5C3.6 16.5 3 17.1 3 18C3 18.9 3.6 19.5 4.5 19.5H8.25C9 19.5 9.75 18.9 9.75 18Z" fill="#ffbf23" />
                        <path d="M10.0508 23.8504L7.50078 26.4004C6.90078 27.0004 6.90078 27.9004 7.50078 28.5004C7.80078 28.8004 8.25078 28.9504 8.55078 28.9504C8.85078 28.9504 9.30078 28.8004 9.60078 28.5004L12.1508 25.9504C12.7508 25.3504 12.7508 24.4504 12.1508 23.8504C11.5508 23.2504 10.6508 23.2504 10.0508 23.8504Z" fill="#ffbf23" />
                        <path d="M18 26.25C17.1 26.25 16.5 26.85 16.5 27.75V31.5C16.5 32.4 17.1 33 18 33C18.9 33 19.5 32.4 19.5 31.5V27.75C19.5 27 18.9 26.25 18 26.25Z" fill="#ffbf23" />
                        <path d="M25.9504 23.8504C25.3504 23.2504 24.4504 23.2504 23.8504 23.8504C23.2504 24.4504 23.2504 25.3504 23.8504 25.9504L26.4004 28.5004C26.7004 28.8004 27.1504 28.9504 27.4504 28.9504C27.7504 28.9504 28.2004 28.8004 28.5004 28.5004C29.1004 27.9004 29.1004 27.0004 28.5004 26.4004L25.9504 23.8504Z" fill="#ffbf23" />
                        <path d="M31.5 16.5H27.75C26.85 16.5 26.25 17.1 26.25 18C26.25 18.9 26.85 19.5 27.75 19.5H31.5C32.4 19.5 33 18.9 33 18C33 17.1 32.4 16.5 31.5 16.5Z" fill="#ffbf23" />
                        <path d="M24.9004 12.5998C25.3504 12.5998 25.6504 12.4498 25.9504 12.1498L28.5004 9.5998C29.1004 8.9998 29.1004 8.0998 28.5004 7.4998C27.9004 6.8998 27.0004 6.8998 26.4004 7.4998L23.8504 10.0498C23.2504 10.6498 23.2504 11.5498 23.8504 12.1498C24.1504 12.4498 24.6004 12.5998 24.9004 12.5998Z" fill="#ffbf23" />
                      </svg>

                      <span ref={loadingProgress}>0 %</span>
                  </div>
              </div>
              <div className="complete-area" ref={completeArea}>
                <a href={props.urlShop}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.71 28.57">
                      <path className="tick-1" ref={tick1} fill="none" stroke="#6c6c6c" strokeDasharray="52" strokeDashoffset="52" d="M2,12.42,16.14,26.57,34.71,2" />
                      <path className="tick-2" ref={tick2} fill="none"  stroke="#000" strokeDasharray="52" strokeDashoffset="52" d="M18,12.42,32.14,26.57,50.71,2" />
                  </svg>
                  <span ref={doneText}>Voir ma boutique</span>
                </a>
              </div>
          </div>
      </main>

  );
  
}

export default BtnLoad;