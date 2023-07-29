export function initializeValues(isMobile) {
   
    let numberOffset = 0;
    let numberYpercent = 0;
    let numberYpercentStart = 0;
    let skillsFixedDuration = '';
    let talkRight;
    let contactYpercent;
    let socialOffset;
    let talkDuration;
    let socialDuration;
    let startTabletPositionX;
    let startTabletPositionY;
    let endTabletPositionX;
    let endTabletPositionY;
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

        if (window.innerWidth < 300) {
            startTabletPositionX = -250
            endTabletPositionX = 250
            startTabletPositionY = 0;
            endTabletPositionY = -30
        } else if (window.innerWidth / window.innerHeight >= 0.7) {
            startTabletPositionX = -250
            endTabletPositionX = 250
            startTabletPositionY = -40;
            endTabletPositionY = -100
        } else if(window.innerWidth / window.innerHeight >= 0.55 && window.innerWidth / window.innerHeight < 0.7) {
            startTabletPositionX = -250
            endTabletPositionX = 250
            startTabletPositionY = 0; // iPhone SE
            endTabletPositionY = 0
        } else if(window.innerWidth / window.innerHeight >= 0.5 && window.innerWidth / window.innerHeight < 0.55) {
            startTabletPositionX = -250
            endTabletPositionX = 250
            startTabletPositionY = -(window.innerWidth/window.innerHeight)*100; // A12 my phone
            endTabletPositionY = -100
        }
         else {
            startTabletPositionX = -250
            endTabletPositionX = 250
            startTabletPositionY = -30;
            endTabletPositionY = -150
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
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 60;
            endTabletPositionY = -10;
        } else if (window.innerWidth >= 1000 && window.innerWidth < 1250) {
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 90;
            endTabletPositionY = -10;
        } else if (window.innerWidth > 900 && window.innerWidth < 1000) {
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 0;
            endTabletPositionY = -30;
        } else if (window.innerWidth > 770 && window.innerWidth <= 900) {
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 10;
            endTabletPositionY = -30;
        } else if (window.innerHeight <= 770 && window.innerWidth > 650) {
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 0;
            endTabletPositionY = -30;
        } else {
            startTabletPositionX = -300
            endTabletPositionX = 200;
            startTabletPositionY = 0;
            endTabletPositionY = -30;
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
        startTabletPositionX,
        startTabletPositionY,
        endTabletPositionX,
        endTabletPositionY,
        bioStartPosition,
        videoShow,
        contactTitleShow
    }

} 