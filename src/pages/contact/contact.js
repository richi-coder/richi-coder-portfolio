// const origin = 'https://richicoder.com' || 'http://localhost:3000/' ? false : true
console.log(document.referrer, 'reeef ');
const origin = document.referrer === 'https://richicoder.com' || document.referrer === 'http://localhost:3000/' ? true : false 
console.log(origin, );

if (!origin) {
    console.log(origin, 'entro');
    window.location.replace('https://richicoder.com')
} 