import { domElements, isMobile } from "../main";

export function initializeValues(isMobile) {
    const { page } = domElements
    // let page = document.title === 'richiCoder | Frontend Developer | Building client apps' ? 'index' : document.title;
    // isMobile?
    let numberOffset = 0;
    let numberYpercent = 0;
    let numberYpercentStart = 0;
    let skillsFixedDuration = '';
    let talkRight;
    let contactYpercent;
    let socialOffset;
    let talkDuration;
    let socialDuration;
    let startTabletPosition;
    let bioStartPosition;
    let videoShow;
    let contactTitleShow;
    if (isMobile) {
        numberOffset = -500;
        numberYpercentStart = 0;
        numberYpercent = 80;
        skillsFixedDuration = '400%';
        talkRight = 400
        contactYpercent = -10
        talkDuration = '50%'
        socialOffset = 0
        socialDuration = 180
        bioStartPosition = 50
        if (window.innerWidth > 650) {
            startTabletPosition = 5;
        } else if (window.innerWidth <= 650 && window.innerWidth > 500) {
            startTabletPosition = 70;
        } else if (window.innerWidth <= 500 && window.innerWidth > 400) {
            startTabletPosition = 20;
        } else if (window.innerWidth <= 400 && window.innerWidth > 300) {
            startTabletPosition = 30;
        } else {
            startTabletPosition = 40;
        }
        videoShow = 1
        contactTitleShow = 0.8
    } else {
        numberOffset = -200;
        numberYpercentStart = -20;
        numberYpercent = 50;
        skillsFixedDuration = '100%' //0.01%
        talkRight = 800
        contactYpercent = -25
        socialOffset = 100
        talkDuration = '70%'
        socialDuration = '70%'
        bioStartPosition = 0
        if (window.innerWidth >= 1250) {
            startTabletPosition = 50;
        } else if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
            startTabletPosition = 80;
        } else if (window.innerWidth > 900 && window.innerWidth < 1000) {
            startTabletPosition = -40;
        } else if (window.innerWidth > 770 && window.innerWidth <= 900) {
            startTabletPosition = -20;
        } else if (window.innerHeight <= 770 && window.innerWidth > 650) {
            startTabletPosition = 0;
        } else {
            startTabletPosition = 0;
        }
        videoShow = 1
        contactTitleShow = 1
    }

    return {
        numberOffset,
        numberYpercent,
        numberYpercentStart,
        skillsFixedDuration,
        talkRight,
        contactYpercent,
        socialOffset,
        talkDuration,
        socialDuration,
        startTabletPosition,
        bioStartPosition,
        videoShow,
        contactTitleShow
    }

} 