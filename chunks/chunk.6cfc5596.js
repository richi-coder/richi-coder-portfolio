/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, b as renderHead, d as renderSlot, m as maybeRenderHead, e as renderComponent, f as addAttribute } from './chunk.ceabbea4.js';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$q = createAstro("https://richicoder.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en">
  <head>
    <!-- Google Tag Manager -->
    ${title === "index" && "production" === "production" ? renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n    })(window,document,'script','dataLayer','GTM-KDD5R8Q');<\/script>"]))) : null}
    <!-- End Google Tag Manager -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="richiCoder, Frontend Developer. Spanish, English, Portuguese. Let's build the client! Javascript, Typescript, SASS, TailwindCSS, Bootstrap, Astro, React.js, Redux, Next.js.">
    <meta name="keywords" content="richiCoder, react developer, portfolio, frontend developer, web developer, javascript, html5, css3, es6, react js, react, bootstrap, tailwindcss, sass, jquery, markdown, restful apis, git, github, next.js, astro, react/redux, react-bootstrap, npm, terminal">
    <meta name="author" content="richiCoder">
    <meta property="og:title" content="richiCoder | Frontend Developer">
        <meta property="og:description" content="Building client apps">
        <meta property="og:image" content="https://richicoder.com/richicoder_logo.png">
    <link rel="icon" type="image/x-icon" href="/richiFavicon.ico">
    ${title === "index" ? renderTemplate`<link rel="canonical" href="https://richicoder.com/">` : null}
    <title>${title === "index" ? "richiCoder | Frontend Developer | Building client apps" : title}</title>
    <!-- Fonts preloading -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="preload" as="style" type="font/woff" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="preload" as="style" type="font/woff" crossorigin>
    <!-- Image preload -->
    ${title === "index" ? renderTemplate`<link rel="preload" href="richicoder.png" as="image">` : null}
    <!-- Normal font load --> 
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Play&display=swap" rel="stylesheet">
  ${renderHead($$result)}</head>
  <body>
    <!-- Google Tag Manager (noscript) -->
  ${title === "index" && "production" === "production" ? renderTemplate`<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KDD5R8Q" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>` : null}
    <!-- End Google Tag Manager (noscript): -->
    ${renderSlot($$result, $$slots["default"])}
  </body></html>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/layouts/Layout.astro");

const $$Astro$p = createAstro("https://richicoder.com/");
const $$Precomponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$Precomponent;
  return renderTemplate`${maybeRenderHead($$result)}<span class="precomponent absolute bottom-0 left-0 w-full z-10"></span>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Precomponent.astro");

const $$Astro$o = createAstro("https://richicoder.com/");
const $$ScrollDown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$ScrollDown;
  return renderTemplate`${maybeRenderHead($$result)}<div class="scrolldown absolute bottom-0 left-0 w-full h-[10vh] flex flex-row items-center justify-between z-50 text-white pb-20 select-none astro-OJD6CESN">
    <div class="scrollsign astro-OJD6CESN">- scroll down</div>
    <div class="scrollsign astro-OJD6CESN">scroll down -</div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/ScrollDown.astro");

const $$Astro$n = createAstro("https://richicoder.com/");
const $$FirstLayer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$FirstLayer;
  return renderTemplate`${maybeRenderHead($$result)}<span class="firstLayer absolute w-full h-full z-[100]"></span>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/FirstLayer.astro");

const $$Astro$m = createAstro("https://richicoder.com/");
const $$FirstView = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$FirstView;
  return renderTemplate`${maybeRenderHead($$result)}<div class="firstView w-full h-screen relative top-0 left-0 z-10 overflow-hidden astro-JQSH7G6P">
  <div class="logoContainer flex flex-col items-center w-full h-full absolute top-0 left-0 select-none astro-JQSH7G6P">
    <div class="layer astro-JQSH7G6P"></div>
    <div class="logo astro-JQSH7G6P">
      <h2 class="richi astro-JQSH7G6P">richi</h2>
      <h2 class="text-gradient coder astro-JQSH7G6P">Coder</h2>
      <div class="bar ml-5 h-full w-1 astro-JQSH7G6P"></div>
      <div class="tech text-white astro-JQSH7G6P">
        <div class="es5 astro-JQSH7G6P">Responsive Design</div>
        <div class="astro-JQSH7G6P">Single Page Apps</div>
        <div class="astro-JQSH7G6P">Progressive Web Apps</div>
        <div class="astro-JQSH7G6P">Multi Page Apps</div>
        <div class="astro-JQSH7G6P">API communications</div>
      </div>
    </div>
    <div class="layer astro-JQSH7G6P"></div>
  </div>
  ${renderComponent($$result, "Precomponent", $$Precomponent, { "class": "astro-JQSH7G6P" })}
  ${renderComponent($$result, "ScrollDown", $$ScrollDown, { "class": "astro-JQSH7G6P" })}
  ${renderComponent($$result, "FirstLayer", $$FirstLayer, { "class": "astro-JQSH7G6P" })}
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/FirstView.astro");

const $$Astro$l = createAstro("https://richicoder.com/");
const $$Number = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Number;
  const { number } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`n-${number}`, "id")} class="number absolute mx-auto w-full sm:w-full left-0 flex flex-row justify-end p-0 pr-10">
    <div class="tracking-tighter p-0 text-[70vw] sm:text-[50vw] h-full -my-6 sm:-my-52">${number}</div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Number.astro");

const $$Astro$k = createAstro("https://richicoder.com/");
const $$Project = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Project;
  const { projectDetails } = Astro2.props;
  const { id, title, number, app, description, mobileImage, desktopImage, demoURL, githubURL } = projectDetails;
  return renderTemplate`${maybeRenderHead($$result)}<div class="w-full z-10"${addAttribute(`${id}-container`, "id")}>
  ${renderComponent($$result, "Number", $$Number, { "number": number })}
  
      <div${addAttribute(id, "id")} class="bg-transparent project-component mt-96">
        
        <div class="mx-auto max-w-full sm:px-6 pb-20 lg:px-8">
          <!-- <BlurLayer id={id} /> -->
          <div class="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-1 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7"></circle>
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-Color="#7775D6"></stop>
                  <stop offset="1" stop-Color="blue"></stop>
                </radialGradient>
              </defs>
            </svg>
            <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-48 lg:text-left">
              <h3 style="font-family: Play;" class="text-5xl font-bold tracking-tight text-white sm:text-5xl">
                ${title}
                <br>
                <em style="font-family: Play;" class="text-blue-900 text-3xl">${app}</em>
              </h3>
              <div class="w-fit">
              <p class="typing mt-6 text-lg leading-8 text-gray-300 text-left">
                ${description}
              </p>
              </div>
              <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a${addAttribute(demoURL, "href")} target="_blank" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:translate-y-2 transition-all">
                  View DEMO!
                </a>
                <a${addAttribute(githubURL, "href")} target="_blank" class="text-sm font-semibold leading-6 text-white">
                  Check repo <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div class="relative mt-16 h-80 lg:mt-8">
              <img${addAttribute(`${id}-desktopImage`, "id")} class="absolute top-0 left-0 w-[24rem] sm:w-[50rem] max-w-none rounded-md"${addAttribute(desktopImage, "src")} alt="App screenshot" width="1149" height="681" loading="lazy">
              <img${addAttribute(`${id}-mobileImage`, "id")} class="absolute top-1/3 left-[14rem] sm:-left-[7rem] w-[7rem] sm:w-[17rem] max-w-none"${addAttribute(mobileImage, "src")} alt="App screenshot" width="1149" height="681" loading="lazy">
            </div>
          </div>
        </div>
      </div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Project.astro");

const $$Astro$j = createAstro("https://richicoder.com/");
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Title;
  const { id, title, preTitle, titleClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(id, "id")}${addAttribute(`title text-white w-full text-center ${titleClass} ${title === "Contact" ? "hidden sm:block" : ""}`, "class")}>
      
            <h2 class="logoTitle">
            ${preTitle}<span class="text-gradient">${title}</span>
            </h2>
            
    </div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Title.astro");

const $$Astro$i = createAstro("https://richicoder.com/");
const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Portfolio;
  return renderTemplate`${maybeRenderHead($$result)}<div id="portfolioContainer" class="portfolio relative w-screen h-fit flex flex-col">
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Portfolio.astro");

const $$Astro$h = createAstro("https://richicoder.com/");
const $$Shortbio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Shortbio;
  const { id, ownClass } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(id, "id")}${addAttribute(`shortbio w-screen ${ownClass}`, "class")}>
    ${renderComponent($$result, "Precomponent", $$Precomponent, {})}
    ${renderSlot($$result, $$slots["default"])}
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Shortbio.astro");

const $$Astro$g = createAstro("https://richicoder.com/");
const $$SkillsTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$SkillsTitle;
  return renderTemplate`${maybeRenderHead($$result)}<div class="skillsTitleContainer w-full h-screen absolute top-0 left-0 -z-10 astro-7SKGP42P">
  <div id="slideContainer" class="absolute top-0 left-0 astro-7SKGP42P">
    <section class="panel blue astro-7SKGP42P">
      ${renderComponent($$result, "Title", $$Title, { "id": "skills-title", "title": "Skills", "preTitle": "richi", "titleClass": "text-6xl sm:text-9xl", "class": "astro-7SKGP42P" })}
    </section>
    <section class="panel turqoise flex flex-col justify-center astro-7SKGP42P">
      ${renderComponent($$result, "Title", $$Title, { "id": "responsive-title", "title": "Design", "preTitle": "responsive", "class": "astro-7SKGP42P" })}
      <div class="responsive-tools container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-4xl sm:text-3xl md:text-5xl m-auto gap-9 sm:gap-7 md:gap-y-40 md:-gap-x-5 lg:gap-y-12 astro-7SKGP42P">
        <div class="flex flex-row md:flex-col items-center justify-start pl-[15vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-html5-plain text-5xl sm:text-7xl"></i> -->
          <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="white" d="M.946 0L2.23 14.4L7.992 16l5.777-1.602L15.055 0H.947zM12.26 4.71H5.502l.161 1.809H12.1l-.485 5.422l-3.623 1.004l-3.618-1.004l-.247-2.774H5.9l.126 1.41l1.967.53l.004-.001l1.968-.531l.204-2.29H4.048l-.476-5.341h8.847l-.158 1.766z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">HTML5</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[15vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-css3-plain text-5xl sm:text-7xl"></i> -->
          <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622l10.125.002l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523l-2.91.804l-2.956-.81l-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" class="astro-7SKGP42P"></path></svg>
          

          <div class="astro-7SKGP42P">CSS</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[15vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-bootstrap-plain text-5xl sm:text-7xl"></i> -->
          <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M11.79 11.5H9.72V8.19h2.47c1.26 0 1.96.56 1.96 1.59c0 1.12-.83 1.72-2.36 1.72m.37 1.13H9.72v3.64h2.56c1.56 0 2.38-.63 2.38-1.83s-.85-1.81-2.5-1.81M22 5.31v13.38C22 20.5 20.5 22 18.69 22H5.31C3.5 22 2 20.5 2 18.69V5.31C2 3.5 3.5 2 5.31 2h13.38C20.5 2 22 3.5 22 5.31m-6 9.19c0-1.38-.92-2.37-2.33-2.55v-.06c1-.18 1.79-1.18 1.79-2.26c0-1.55-1.2-2.58-2.96-2.58H8.43v10.36h4.04c2.21 0 3.53-1.09 3.53-2.91Z" class="astro-7SKGP42P"></path></svg>
          
          <div class="astro-7SKGP42P">Bootstrap</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[15vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-tailwindcss-plain text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">TailwindCSS</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[15vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-sass-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M15.145 5.014c-1.414-.075-3.003.142-4.557.681c-2.47.857-5.142 2.205-7.063 3.961c-2.282 2.09-2.648 3.91-2.498 4.67c.534 2.7 4.34 4.46 5.864 5.762c-.075.04-.145.076-.211.113c-.764.371-3.599 1.829-4.325 3.397c-.82 1.778.136 3.05.764 3.224c1.96.532 3.898-.397 4.975-1.968c1.078-1.572.948-3.624.45-4.56c-.004-.013-.014-.022-.019-.036c.197-.115.398-.23.6-.346c.389-.225.769-.43 1.102-.61c-.188.496-.324 1.093-.395 1.954c-.084 1.008.342 2.312.895 2.826c.244.225.538.23.72.23c.647 0 .938-.522 1.26-1.146c.398-.761.75-1.645.75-1.645s-.44 2.391.766 2.391c.44 0 .88-.554 1.078-.838v.004s.007-.018.031-.055c.047-.069.07-.109.07-.109V22.9c.178-.298.569-.98 1.155-2.107c.759-1.457 1.484-3.277 1.484-3.277c.07.4.167.794.291 1.181c.131.435.409.912.629 1.375c-.178.238-.287.375-.287.375c0 .004.003.008.006.01c-.141.183-.301.38-.465.572c-.6.697-1.313 1.496-1.406 1.725c-.113.27-.085.47.13.627c.16.119.443.137.737.115a3.331 3.331 0 0 0 1.101-.248a3.86 3.86 0 0 0 .946-.484c.586-.422.943-1.028.91-1.825c-.02-.44-.166-.88-.344-1.293c.052-.073.11-.15.16-.228a24.175 24.175 0 0 0 1.645-2.777c.07.4.167.794.29 1.181c.114.371.334.779.536 1.178c-.871.692-1.412 1.494-1.6 2.021c-.347.976-.073 1.415.438 1.516c.23.046.557-.058.8-.158c.363-.118.703-.29 1.012-.51c.586-.422 1.154-1.012 1.116-1.814c-.014-.362-.116-.725-.252-1.073c.736-.302 1.69-.467 2.91-.33c2.61.298 3.121 1.893 3.023 2.557c-.098.665-.647 1.036-.83 1.146c-.183.11-.238.152-.224.235c.023.119.106.114.261.086c.216-.037 1.368-.54 1.42-1.774c.075-1.557-1.455-3.27-4.168-3.257h-.004c-.941 0-1.87.211-2.715.619c-.277-.545-.563-1.022-.609-1.38c-.056-.416-.116-.663-.05-1.157c.065-.495.36-1.197.355-1.248c-.005-.05-.066-.302-.67-.307c-.604-.005-1.126.114-1.186.27c-.107.284-.19.576-.248.874c-.108.536-1.209 2.453-1.832 3.452c-.206-.39-.379-.733-.416-1.008c-.056-.417-.118-.664-.053-1.158c.066-.495.363-1.197.358-1.248c-.005-.05-.066-.302-.67-.307c-.604-.005-1.127.114-1.188.27c-.06.155-.127.521-.248.874c-.122.353-1.588 3.544-1.972 4.373a21.34 21.34 0 0 1-.489.99c-.019.038-.032.06-.04.079c.013-.023.023-.046.023-.037c-.103.197-.164.306-.164.306v.004c-.08.147-.17.282-.211.282c-.028 0-.09-.386.014-.913c.22-1.109.74-2.832.736-2.892c-.005-.032.096-.33-.344-.49c-.427-.151-.58.101-.617.101c-.038 0-.066.092-.066.092s.471-1.943-.91-1.943c-.864 0-2.064.925-2.653 1.763c-.37.197-1.172.624-2.016 1.078l-.968.522c-.023-.023-.043-.046-.067-.069c-1.678-1.75-4.775-2.988-4.644-5.34c.047-.856.353-3.105 5.957-5.837c4.594-2.236 8.266-1.623 8.898-.258c.91 1.948-1.964 5.574-6.734 6.096c-1.818.197-2.656-.571-2.895-.828c-.248-.27-.287-.285-.38-.235c-.156.082-.057.321 0 .463c.14.362.767.929 1.765 1.25c.877.28 2.89.515 5.469-.46c2.896-1.092 5.108-4.056 4.447-6.599c-.42-1.615-2.289-2.551-4.644-2.675zm-1.538 12.275c.074.005.128.033.159.084c.164.271-.57 2.266-.758 2.715c-.3.72-.934 2.554-1.319 2.457c-.328-.082-.53-1.48-.066-2.856c.234-.692.731-1.516 1.027-1.837c.355-.389.738-.58.957-.563zm9.74 2.262c.056.16.085.328.089.496c-.005 1.032-.76 1.416-1.213 1.576c-.094-.064-.082-.28.232-.95c.122-.26.405-.7.893-1.122zM7.605 20.688c.389 1.393.014 2.621-.895 3.59c-.862.92-2.072 1.269-2.592.976c-.558-.317-.337-1.674.727-2.656c.647-.596 1.482-1.146 2.035-1.485c.127-.073.308-.183.533-.316a.576.576 0 0 1 .057-.031c.042-.027.088-.05.135-.078zm11.777.16c0 .023.006.047.006.074c-.006.82-.814 1.374-1.18 1.594h.004v.002c-.127.064-.245.104-.3.072c-.043-.023.052-.11.052-.11s.651-.684.908-.996c.15-.183.323-.398.51-.636z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">SASS</div>
        </div>
        <div class="flex flex-row items-center justify-start pl-[15vw] sm:pl-0 gap-2 sm:gap-3 sm:justify-center astro-7SKGP42P">
          <!-- <i class="devicon-firefox-plain text-5xl sm:text-7xl"></i> -->
          <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M6.85 6.74c.01 0 .01 0 0 0M21.28 8.6c-.43-1.05-1.32-2.18-2.01-2.54c.56 1.11.89 2.22 1.02 3.04v.02c-1.13-2.82-3.05-3.96-4.62-6.44c-.08-.12-.17-.25-.24-.38c-.04-.07-.07-.14-.11-.21c-.06-.13-.12-.26-.15-.4c0-.01-.01-.02-.02-.02h-.03c-2.22 1.3-3.15 3.59-3.38 5.04c-.69.04-1.37.21-1.99.51c-.12.05-.17.19-.13.31c.05.14.21.21.34.15c.54-.26 1.14-.41 1.74-.45h.05c.08-.01.17-.01.25-.01c.5-.01.97.06 1.44.2l.06.02c.1.02.17.06.25.06c.05.04.11.06.16.08l.14.06c.07.03.14.06.2.09c.03.02.06.03.09.05c.07.04.16.07.2.11c.04.02.08.05.12.07c.73.45 1.34 1.07 1.75 1.81c-.53-.37-1.49-.74-2.41-.58c3.6 1.81 2.63 8-2.36 7.76c-.44-.01-.88-.1-1.3-.25c-.1-.03-.2-.07-.29-.12c-.05-.02-.12-.05-.17-.08c-1.23-.63-2.24-1.82-2.38-3.27c0 0 .5-1.73 3.33-1.73c.31 0 1.17-.86 1.2-1.1c0-.09-1.74-.78-2.42-1.45c-.37-.36-.54-.53-.69-.66c-.08-.07-.17-.13-.26-.19a4.63 4.63 0 0 1-.03-2.45C7.6 6.12 6.8 6.86 6.22 7.5c-.4-.5-.37-2.15-.35-2.5c-.01 0-.3.16-.33.18c-.35.25-.68.53-.98.82c-.35.37-.66.74-.94 1.14c-.62.91-1.12 1.95-1.34 3.04c0 .01-.1.41-.17.92l-.03.23c-.02.17-.04.32-.08.58v.41c0 5.53 4.5 10.01 10 10.01c4.97 0 9.08-3.59 9.88-8.33c.02-.11.03-.24.05-.37c.2-1.72-.02-3.52-.65-5.03Z" class="astro-7SKGP42P"></path></svg>
          <!-- <i class="devicon-chrome-plain text-5xl sm:text-7xl -ml-5 sm:ml-0"></i> -->
          <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M9.827 21.763C5.35 20.771 2 16.777 2 12c0-1.822.487-3.53 1.339-5.002l4.283 7.419a4.999 4.999 0 0 0 4.976 2.548l-2.77 4.798ZM12 22l4.287-7.425A4.977 4.977 0 0 0 17 12a4.978 4.978 0 0 0-1-3h5.542A9.98 9.98 0 0 1 22 12c0 5.523-4.477 10-10 10Zm2.572-8.455a2.999 2.999 0 0 1-5.17-.045l-.029-.05a3 3 0 1 1 5.225.05l-.026.045Zm-9.94-8.306A9.974 9.974 0 0 1 12 2a9.996 9.996 0 0 1 8.662 5H12a5.001 5.001 0 0 0-4.599 3.034L4.632 5.24Z" class="astro-7SKGP42P"></path></svg>
          <div class="astro-7SKGP42P">Dev Tools</div>
        </div>
      </div>
    </section>
    <section class="panel green flex flex-col justify-center astro-7SKGP42P">
      ${renderComponent($$result, "Title", $$Title, { "id": "spa-title", "title": "Development", "preTitle": "app", "class": "astro-7SKGP42P" })}
      <div class="spa-tools container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-4xl sm:text-3xl md:text-5xl m-auto gap-9 sm:gap-7 md:gap-y-40 md:-gap-x-5 lg:gap-y-12 astro-7SKGP42P">
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <div class="flex flex-row astro-7SKGP42P">
        <!-- <i class="devicon-javascript-plain text-5xl sm:text-7xl relative"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873c-.736-.345-1.554-.585-1.797-1.14c-.091-.33-.105-.51-.046-.705c.15-.646.915-.84 1.515-.66c.39.12.75.42.976.9c1.034-.676 1.034-.676 1.755-1.125c-.27-.42-.404-.601-.586-.78c-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005c-1.14 1.291-.811 3.541.569 4.471c1.365 1.02 3.361 1.244 3.616 2.205c.24 1.17-.87 1.545-1.966 1.41c-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109c1.74 1.756 6.09 1.666 6.871-1.004c.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805c0 1.232.063 2.363-.138 2.711c-.33.689-1.18.601-1.566.48c-.396-.196-.597-.466-.83-.855c-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517c.855.51 2.004.675 3.207.405c.783-.226 1.458-.691 1.811-1.411c.51-.93.402-2.07.397-3.346c.012-2.054 0-4.109 0-6.179l.004-.056z" class="astro-7SKGP42P"></path></svg>
        <!-- <i class="devicon-typescript-plain text-5xl sm:text-7xl -z-10 relative"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" class="astro-7SKGP42P"><g clip-path="url(#akarIconsTypescriptFill0)" class="astro-7SKGP42P"><path fill="white" d="M23.429 0H.57A.571.571 0 0 0 0 .571V23.43a.57.57 0 0 0 .571.571H23.43a.571.571 0 0 0 .571-.571V.57a.571.571 0 0 0-.572-.57Zm-9.143 12.826h-2.857v8.888H9.143v-8.888H6.286v-1.969h8v1.969Zm.64 8.38v-2.375s1.298.978 2.855.978s1.497-1.018 1.497-1.158c0-1.477-4.412-1.477-4.412-4.751c0-4.452 6.429-2.695 6.429-2.695l-.08 2.116s-1.078-.719-2.296-.719c-1.218 0-1.657.58-1.657 1.198c0 1.597 4.452 1.438 4.452 4.652c0 4.95-6.788 2.755-6.788 2.755Z" class="astro-7SKGP42P"></path></g><defs class="astro-7SKGP42P"><clipPath id="akarIconsTypescriptFill0" class="astro-7SKGP42P"><path fill="#fff" d="M0 0h24v24H0z" class="astro-7SKGP42P"></path></clipPath></defs></g></svg>
        </div>

          <div class="astro-7SKGP42P">JS / TS</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-react-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" class="astro-7SKGP42P"><g fill="white" clip-path="url(#akarIconsReactFill0)" class="astro-7SKGP42P"><path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689Zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387Zm-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952ZM16.97 13c.264.655.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13Zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566Zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144Zm3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566ZM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386Zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499Zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132Zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423Zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475Z" class="astro-7SKGP42P"></path><path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472Z" class="astro-7SKGP42P"></path></g><defs class="astro-7SKGP42P"><clipPath id="akarIconsReactFill0" class="astro-7SKGP42P"><path fill="#fff" d="M0 0h24v24H0z" class="astro-7SKGP42P"></path></clipPath></defs></g></svg>

          <div class="astro-7SKGP42P">React</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-redux-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12.118 5.466a2.306 2.306 0 0 0-.623.08c-.278.067-.702.332-.953.583c-.41.423-.49.609-.662 1.469c-.08.423.41 1.43.847 1.734c.45.317 1.085.502 2.065.608c1.429.16 1.84.636 1.84 2.197c0 1.377-.385 1.747-1.96 1.906c-1.707.172-2.58.834-2.765 2.117c-.106.781.41 1.76 1.125 2.091c1.627.768 3.15-.198 3.467-2.196c.211-1.284.622-1.642 1.998-1.747c1.588-.133 2.409-.675 2.713-1.787c.278-1.02-.304-2.157-1.297-2.554c-.264-.106-.873-.238-1.35-.291c-1.495-.16-1.879-.424-2.038-1.39c-.225-1.337-.317-1.562-.794-2.09a2.174 2.174 0 0 0-1.613-.73zm-4.785 4.36a2.145 2.145 0 0 0-.497.048c-1.469.318-2.17 2.051-1.35 3.295c1.178 1.774 3.944.953 3.97-1.177c.012-1.193-.98-2.143-2.123-2.166zM2.089 14.19a2.22 2.22 0 0 0-.427.052c-2.158.476-2.237 3.626-.106 4.182c.53.145.582.145 1.111.013c1.191-.318 1.866-1.456 1.549-2.607c-.278-1.02-1.144-1.664-2.127-1.64zm19.824.008c-.233.002-.477.058-.784.162c-1.39.477-1.866 2.092-.98 3.336c.557.794 1.96 1.058 2.82.516c1.416-.874 1.363-3.057-.093-3.746c-.38-.186-.663-.271-.963-.268z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">Router</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <div class="flex flex-row astro-7SKGP42P">
        <!-- <i class="devicon-nextjs-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M23.749 30.005c-.119.063-.109.083.005.025a.31.31 0 0 0 .095-.061c0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016a.249.249 0 0 0 .068-.047c0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016a.246.246 0 0 0 .068-.048c0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015c.037-.02.068-.041.068-.047c0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068c.067-.041.181-.131.161-.131c-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041c-4.548.412-8.803 2.86-11.5 6.631a15.828 15.828 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333c0 1.192.016 1.448.145 2.328c.871 6.011 5.147 11.057 10.943 12.927c1.043.333 2.136.563 3.381.704c.484.052 2.577.052 3.061 0c2.152-.24 3.969-.771 5.767-1.688c.276-.14.328-.177.291-.208a340.89 340.89 0 0 1-2.609-3.495l-2.557-3.453l-3.203-4.745a416.396 416.396 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681c-.011 4.505-.011 4.688-.068 4.792a.572.572 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.595.595 0 0 1-.208-.229l-.068-.141l.005-6.271l.011-6.271l.099-.125a.753.753 0 0 1 .229-.187c.131-.063.183-.073.724-.073c.635 0 .74.025.907.208a602.855 602.855 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839l.125-.083a16.346 16.346 0 0 0 3.285-2.885a15.935 15.935 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333c0-1.193-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a16.983 16.983 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.623.623 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624l-.989-1.52l-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068c.463 0 .541.005.645.063z" class="astro-7SKGP42P"></path></svg>

        </div>
          <div class="astro-7SKGP42P">Next.js</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-redux-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" class="astro-7SKGP42P"><g clip-path="url(#akarIconsReduxFill0)" class="astro-7SKGP42P"><path fill="white" d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598Zm5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492ZM6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894Z" class="astro-7SKGP42P"></path></g><defs class="astro-7SKGP42P"><clipPath id="akarIconsReduxFill0" class="astro-7SKGP42P"><path fill="#fff" d="M0 0h24v24H0z" class="astro-7SKGP42P"></path></clipPath></defs></g></svg>
          
          <div class="astro-7SKGP42P">Redux</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 128 128" class="astro-7SKGP42P"><path fill="currentColor" d="M81.504 9.465c.973 1.207 1.469 2.836 2.457 6.09l21.656 71.136a90.079 90.079 0 0 0-25.89-8.765L65.629 30.28a1.833 1.833 0 0 0-3.52.004L48.18 77.902a90.104 90.104 0 0 0-26.003 8.778l21.758-71.14c.996-3.25 1.492-4.876 2.464-6.083a8.023 8.023 0 0 1 3.243-2.398c1.433-.575 3.136-.575 6.535-.575H71.72c3.402 0 5.105 0 6.543.579a7.988 7.988 0 0 1 3.242 2.402Zm2.59 80.61c-3.57 3.054-10.696 5.136-18.903 5.136c-10.07 0-18.515-3.137-20.754-7.356c-.8 2.418-.98 5.184-.98 6.954c0 0-.527 8.675 5.508 14.71a5.671 5.671 0 0 1 5.672-5.671c5.37 0 5.367 4.683 5.363 8.488v.336c0 5.773 3.527 10.719 8.543 12.805a11.62 11.62 0 0 1-1.172-5.098c0-5.508 3.23-7.555 6.988-9.938c2.989-1.894 6.309-4 8.594-8.222a15.513 15.513 0 0 0 1.875-7.41a15.55 15.55 0 0 0-.734-4.735Zm0 0" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">Astro</div>
        </div>
        <!-- <div
          class="flex flex-row items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center sm:col-span-2 md:col-span-3"
        >
          
        <i class="devicon-react-original text-5xl sm:text-7xl"></i>
        <svg class='dev-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><g fill="white" clip-path="url(#akarIconsReactFill0)"><path d="M24 11.689c0-1.59-1.991-3.097-5.044-4.031c.705-3.111.392-5.587-.988-6.38a2.145 2.145 0 0 0-1.096-.273v1.09c.225 0 .406.045.558.128c.665.382.954 1.834.729 3.703c-.054.46-.142.944-.25 1.438a23.706 23.706 0 0 0-3.106-.533a23.857 23.857 0 0 0-2.035-2.446c1.595-1.482 3.092-2.294 4.11-2.294V1c-1.346 0-3.107.959-4.888 2.622C10.21 1.97 8.448 1.02 7.103 1.02v1.09c1.013 0 2.515.808 4.11 2.28c-.685.72-1.37 1.536-2.021 2.441a22.844 22.844 0 0 0-3.111.538a14.683 14.683 0 0 1-.255-1.418c-.23-1.87.054-3.322.715-3.708c.146-.088.337-.128.562-.128v-1.09c-.41 0-.783.088-1.105.273c-1.375.793-1.683 3.263-.974 6.365C1.981 8.603 0 10.104 0 11.689c0 1.59 1.991 3.097 5.044 4.03c-.705 3.112-.392 5.588.988 6.38c.318.186.69.274 1.1.274c1.346 0 3.107-.959 4.888-2.622c1.78 1.653 3.541 2.602 4.887 2.602a2.18 2.18 0 0 0 1.105-.274c1.375-.792 1.683-3.262.974-6.364C22.019 14.781 24 13.274 24 11.689Zm-6.37-3.263a22.023 22.023 0 0 1-.66 1.932a26.444 26.444 0 0 0-1.345-2.319c.695.103 1.365.23 2.006.387Zm-2.24 5.21a25.94 25.94 0 0 1-1.179 1.869a25.453 25.453 0 0 1-4.412.005a25.457 25.457 0 0 1-2.201-3.806a26.064 26.064 0 0 1 2.192-3.82a25.455 25.455 0 0 1 4.411-.006c.406.582.803 1.204 1.184 1.86c.372.64.71 1.29 1.018 1.946a27.41 27.41 0 0 1-1.013 1.952ZM16.97 13c.264.655.49 1.311.675 1.947c-.64.157-1.316.289-2.015.391A27.044 27.044 0 0 0 16.97 13Zm-4.96 5.22c-.455-.47-.91-.993-1.36-1.566c.44.02.89.035 1.345.035c.46 0 .915-.01 1.36-.035c-.44.573-.895 1.096-1.345 1.566Zm-3.64-2.882a22.113 22.113 0 0 1-2.006-.386c.181-.631.406-1.282.66-1.932c.201.39.412.782.642 1.174c.23.391.464.773.704 1.144Zm3.615-10.18c.455.47.91.993 1.36 1.566c-.44-.02-.89-.035-1.345-.035c-.46 0-.915.01-1.36.035c.44-.573.895-1.096 1.345-1.566ZM8.365 8.04a27.02 27.02 0 0 0-1.34 2.333a20.96 20.96 0 0 1-.675-1.947c.64-.152 1.316-.284 2.015-.386Zm-4.427 6.124c-1.732-.738-2.852-1.707-2.852-2.475s1.12-1.742 2.852-2.475c.42-.181.88-.343 1.355-.494c.279.958.646 1.956 1.1 2.979a23.165 23.165 0 0 0-1.085 2.964a14.875 14.875 0 0 1-1.37-.499Zm2.632 6.99c-.665-.38-.954-1.834-.729-3.702c.054-.46.142-.945.25-1.439c.958.235 2.005.416 3.106.534a23.87 23.87 0 0 0 2.035 2.446c-1.595 1.482-3.092 2.294-4.11 2.294a1.167 1.167 0 0 1-.552-.132Zm11.604-3.727c.23 1.869-.054 3.322-.715 3.708c-.146.088-.337.127-.562.127c-1.013 0-2.515-.807-4.11-2.28a23.01 23.01 0 0 0 2.021-2.44a22.843 22.843 0 0 0 3.111-.538c.113.494.2.968.255 1.423Zm1.883-3.263c-.42.181-.88.343-1.355.494a23.482 23.482 0 0 0-1.1-2.979c.45-1.017.811-2.01 1.085-2.964a15.3 15.3 0 0 1 1.375.499c1.732.738 2.852 1.707 2.852 2.475c-.005.768-1.125 1.742-2.857 2.475Z"/><path d="M11.995 13.925a2.236 2.236 0 1 0 0-4.472a2.236 2.236 0 0 0 0 4.472Z"/></g><defs><clipPath id="akarIconsReactFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
        <i class="devicon-redux-original text-5xl sm:text-7xl"></i>
        <svg class='dev-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none"><g clip-path="url(#akarIconsReduxFill0)"><path fill="white" d="M16.63 16.563c.885-.092 1.557-.863 1.527-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062c-.947.03-1.68.832-1.65 1.788c.032.463.215.863.49 1.14c-1.039 2.067-2.627 3.577-5.01 4.841c-1.618.864-3.298 1.172-4.977.956c-1.375-.185-2.444-.802-3.116-1.819c-.977-1.51-1.068-3.145-.244-4.779c.58-1.171 1.497-2.035 2.077-2.466a16.987 16.987 0 0 1-.397-1.573C-.871 14.436-.412 18.814.93 20.88c1.008 1.542 3.054 2.498 5.315 2.498a7.45 7.45 0 0 0 1.832-.216c3.91-.77 6.872-3.114 8.552-6.598Zm5.375-3.823c-2.321-2.744-5.742-4.255-9.651-4.255h-.489a1.677 1.677 0 0 0-1.496-.925h-.062c-.946.031-1.68.833-1.649 1.789c.03.925.794 1.664 1.71 1.664h.062a1.721 1.721 0 0 0 1.496-1.048h.55c2.321 0 4.52.678 6.505 2.004c1.527 1.018 2.627 2.343 3.237 3.947c.52 1.294.49 2.558-.06 3.638c-.856 1.634-2.291 2.528-4.185 2.528c-1.221 0-2.382-.37-2.993-.648a18.07 18.07 0 0 1-1.374 1.11c1.313.617 2.657.956 3.94.956c2.932 0 5.1-1.634 5.925-3.268c.885-1.788.824-4.871-1.466-7.492ZM6.49 17.087c.03.925.794 1.665 1.71 1.665h.061c.947-.03 1.68-.832 1.65-1.788a1.723 1.723 0 0 0-1.71-1.665h-.062a.53.53 0 0 0-.214.03c-1.252-2.096-1.771-4.377-1.588-6.844c.122-1.85.733-3.453 1.802-4.779c.886-1.14 2.596-1.695 3.757-1.726c3.237-.062 4.611 4.008 4.703 5.642c.397.092 1.069.308 1.527.462C17.759 3.09 14.706.5 11.773.5C9.025.5 6.49 2.504 5.482 5.464c-1.405 3.946-.489 7.738 1.222 10.729c-.153.216-.245.555-.214.894Z"/></g><defs><clipPath id="akarIconsReduxFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>
        
          <div class='-ml-2 sm:ml-0'>Dev Tools</div>
        </div> -->
      </div>
    </section>
    <section class="panel bordeaux astro-7SKGP42P">
      ${renderComponent($$result, "Title", $$Title, { "id": "projectInit-title", "title": "Initialization", "preTitle": "project", "class": "astro-7SKGP42P" })}
      <div class="init-tools container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-4xl sm:text-3xl md:text-5xl pt-7 md:pt-32 sm:pt-12 m-auto gap-10 sm:gap-7 md:gap-y-52 md:gap-x-0 lg:gap-y-12 lg:pt-16 astro-7SKGP42P">
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-vscode-plain text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" class="astro-7SKGP42P"><g fill="white" clip-path="url(#akarIconsVscodeFill0)" class="astro-7SKGP42P"><path d="M.228 8.37s-.584-.427.117-.995L1.98 5.897s.467-.497.962-.064l15.081 11.542v5.534s-.007.87-1.11.774L.227 8.369Z" class="astro-7SKGP42P"></path><path d="M4.116 11.937L.228 15.509s-.4.3 0 .837l1.805 1.66s.429.465 1.062-.065l4.121-3.158l-3.1-2.846Zm6.824.029l7.13-5.502l-.047-5.505s-.305-1.202-1.32-.576L7.216 9.11l3.724 2.856Z" class="astro-7SKGP42P"></path><path d="M16.912 23.69c.414.428.916.288.916.288l5.556-2.767c.711-.49.611-1.098.611-1.098V3.588c0-.726-.735-.977-.735-.977L18.444.264c-1.052-.657-1.741.119-1.741.119s.886-.645 1.32.576v21.85c0 .15-.032.297-.095.43c-.127.259-.402.5-1.062.4l.046.051Z" class="astro-7SKGP42P"></path></g><defs class="astro-7SKGP42P"><clipPath id="akarIconsVscodeFill0" class="astro-7SKGP42P"><path fill="#fff" d="M0 0h24v24H0z" class="astro-7SKGP42P"></path></clipPath></defs></g></svg>

          <div class="astro-7SKGP42P">VSCode</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-github-original text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">GIT/Github</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="fa fa-terminal text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m11 12l-7.071 7.07l-1.414-1.413L8.172 12L2.514 6.343l1.414-1.414l7.07 7.07Zm0 7h10v2H11v-2Z" class="astro-7SKGP42P"></path></svg>
        
        <div class="astro-7SKGP42P">Terminal</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="hey text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12 12.534V9.871h-1.334v2.666zM24 7.2H0v8h6.666v1.334H12v-1.333h12zM6.666 8.534v5.337H5.333v-4H3.999v4H1.333V8.537zm6.667 0v5.337h-2.666v1.334H8.001V8.539zm9.333 0v5.337h-1.333v-4h-1.334v4h-1.334v-4h-1.333v4h-2.667V8.537z" class="astro-7SKGP42P"></path></svg>
          
          <div class="astro-7SKGP42P">NPM</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <!-- <i class="devicon-webpack-plain text-5xl sm:text-7xl"></i> -->
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m20.45 17.39l-8.09 4.58V18.4l5.04-2.77l3.05 1.76m.55-.5V7.31L18.04 9v6.18L21 16.89m-17.45.5l8.09 4.57V18.4L6.6 15.63l-3.05 1.76m-.55-.5V7.31L5.96 9v6.18L3 16.89m.35-10.2L11.64 2v3.45L6.33 8.37l-.05.02l-2.93-1.7m17.3 0L12.36 2v3.45l5.31 2.93l.04.02l2.94-1.71m-9.01 10.9l-4.97-2.74V9.44l4.97 2.87v5.28m.72 0l4.97-2.73V9.44l-4.97 2.87v5.28M7 8.81l5-2.75l5 2.75l-5 2.88l-5-2.88Z" class="astro-7SKGP42P"></path></svg>

          <div class="astro-7SKGP42P">Webpack</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        <svg class="dev-icon astro-7SKGP42P" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="m8.286 10.578l.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55l-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887l2.077-.4a.8.8 0 0 1 .84.369a.8.8 0 0 1 .034.783L12.9 19.93l-.013.025l-.015.023l-.122.19a.801.801 0 0 1-.672.37a.826.826 0 0 1-.634-.302a.8.8 0 0 1-.16-.67l1.029-4.981l-1.12.34a.81.81 0 0 1-.86-.262a.802.802 0 0 1-.165-.67l.63-3.08l-2.027.468a.808.808 0 0 1-.768-.233a.81.81 0 0 1-.217-.6l.389-6.57l-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z" class="astro-7SKGP42P"></path></svg>
          
          <div class="astro-7SKGP42P">Vite</div>
        </div>
      </div>
    </section>
    <section class="panel orange astro-7SKGP42P">
      ${renderComponent($$result, "Title", $$Title, { "id": "others-title", "title": "Tools", "preTitle": "other", "class": "astro-7SKGP42P" })}
      <div class="other-tools container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-4xl sm:text-3xl md:text-5xl m-auto gap-3 sm:gap-12 md:gap-y-32 lg:gap-y-12 pt-10  md:pt-20 lg:pt-12 astro-7SKGP42P">
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">

          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>REST APIs</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">

          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>AJAX</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
        
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>Chart JS</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>jQuery</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">

          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>Firebase</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>PWA</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>Three.js</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>Figma</div>
        </div>
        <div class="flex flex-row md:flex-col items-center justify-start pl-[12vw] sm:pl-0 gap-7 sm:gap-3 sm:justify-center astro-7SKGP42P">
          
          <div class="-ml-2 sm:ml-0 astro-7SKGP42P"><span class="sm:hidden astro-7SKGP42P">- </span>Testing</div>
        </div>
      </div>
      <!-- <Precomponent /> -->
    </section>
  </div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/SkillsTitle.astro");

const $$Astro$f = createAstro("https://richicoder.com/");
const $$Photo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Photo;
  return renderTemplate`${maybeRenderHead($$result)}<div id="photo" class="photo text-white fixed z-50">
    <div class="absolute top-0 left-0 h-screen w-full z-0 myphoto"><img id="richi-photo" src="richicoder.png" alt="richicoder_profile_photo" class="absolute top-0 left-0 h-screen w-full object-cover"></div>
    ${renderComponent($$result, "SkillsTitle", $$SkillsTitle, {})} 
    <div class="photolayer "></div>
    
    <div class="titleContainer absolute top-16 left-0 w-fit h-fit z-40">
    </div>

</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Photo.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$e = createAstro("https://richicoder.com/");
const $$Talk = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Talk;
  return renderTemplate(_a || (_a = __template(["", '<div id="talking" class="w-full sm:w-2/3 h-fit text-white flex flex-col items-start pl-14 sm:pl-20 md:pl-10 lg:pl-40 xl:pl-80 justify-center text-6xl sm:text-8xl gap-8 sm:gap-16 m-auto font-[Play] overflow-hidden sm:pt-16">\n    <div class="talk relative right-[400px] sm:right-[800px]">Let me</div>\n    <div class="talk relative right-[400px] sm:right-[800px]">talk to you</div>\n    <a target="_blank" href="/contact/" class="talk relative transition-transform duration-300 px-8 py-4 -ml-6 bg-gradient-to-tr from-[#7C3AED] from-60% to-[#00407c] active:bg-purple-500 rounded-lg right-[400px] sm:right-[800px] ladder">\n        CONTACT\n    </a>\n    <div class="relative talk text-xl flex flex-row items-center gap-x-3 sm:gap-x-5">\n        <!-- <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" data-text="Great website! @RichiCoder" data-url="https://richicoder.com/" data-hashtags="richicoder" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"><\/script> -->\n        <a href="https://twitter.com/intent/tweet?hashtags=richicoder&original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=Great%20website!%20%40RichiCoder&url=https%3A%2F%2Frichicoder.com%2F" class="rounded-lg px-3 py-2 text-xl font-semibold leading-6 text-white flex flex-row items-center gap-x-2 border-2 border-transparent md:hover:border-white active:border-white transition-all" target="_blank">\n            <span>Tweet</span>\n            <svg class="relative w-full text-center" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path></svg>\n        </a>\n        <a href="https://twitter.com/intent/follow?original_referer=http%3A%2F%2Flocalhost%3A3000%2F&ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Efollow%7Ctwgr%5ERichiCoder&screen_name=RichiCoder" class="rounded-lg px-3 py-2 text-xl font-semibold leading-6 text-white flex flex-row items-center gap-x-2 border-2 border-transparent md:hover:border-white active:border-white transition-all" target="_blank">\n            <span>Follow</span>\n            <svg class="relative w-full text-center" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"></path></svg>\n        </a>\n    </div>\n</div>'])), maybeRenderHead($$result));
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Talk.astro");

const $$Astro$d = createAstro("https://richicoder.com/");
const $$Socials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Socials;
  return renderTemplate`${maybeRenderHead($$result)}<div id="socials" class="grid grid-cols-3 sm:grid-cols-1 gap-y-10 py-10 sm:pb-1 text-white text-6xl w-full h-fit sm:w-1/3 astro-FWXVJMNE">
    <a href="https://www.linkedin.com/in/richicoder" target="_blank" class="order-1 sm:order-6 astro-FWXVJMNE">
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" class="astro-FWXVJMNE"></path></svg>
    </a>
    <a href="https://github.com/richi-coder" target="_blank" class="order-2 sm:order-5 astro-FWXVJMNE">
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" class="astro-FWXVJMNE"></path></svg>
    </a>
    <a href="https://twitter.com/RichiCoder" target="_blank" class="order-3 sm:order-4 astro-FWXVJMNE">
        <!-- <i class="fa fa-twitter relative w-full text-center"></i> -->
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z" class="astro-FWXVJMNE"></path></svg>
    </a>
    <a href="https://www.instagram.com/richi.coder/" target="_blank" class="order-4 sm:order-3 astro-FWXVJMNE">
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z" class="astro-FWXVJMNE"></path></svg>
    </a>
    <a href="https://www.codewars.com/users/richicoder" target="_blank" class="order-5 sm:order-2 astro-FWXVJMNE">
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="0" y="0" width="24" height="24" fill="none" stroke="none" class="astro-FWXVJMNE"></rect><g transform="rotate(180 12 12)" class="astro-FWXVJMNE"><path fill="white" d="M1.072.142A1.072 1.072 0 0 0 0 1.214v21.572a1.072 1.072 0 0 0 1.072 1.072h21.856A1.072 1.072 0 0 0 24 22.786V1.214A1.072 1.072 0 0 0 22.928.142zm9.736 1.818a.904.904 0 0 1 .828.539a.784.784 0 0 1 1.274.493a.639.639 0 0 1 .29-.06c.33.008.59.262.625.575a1.322 1.322 0 0 1 .624-.515a1.325 1.325 0 0 1 1.718.71a1.098 1.098 0 0 1 .306-.236a1.102 1.102 0 0 1 1.483.479a1.094 1.094 0 0 1 .12.47a.994.994 0 0 1 1.322 1.214a.904.904 0 0 1 .874 1.438a.784.784 0 0 1 .176 1.356a.639.639 0 0 1 .19.224a.642.642 0 0 1-.011.613a1.326 1.326 0 0 1 .482.235a1.334 1.334 0 0 1 .258 1.842a1.098 1.098 0 0 1 .35.15a1.102 1.102 0 0 1 .337 1.516a1.094 1.094 0 0 1-.344.344a.994.994 0 0 1 .228 1.318a1.006 1.006 0 0 1-.605.434a.904.904 0 0 1-.803 1.482a.814.814 0 0 0-.008-.04a.784.784 0 0 1-1.075.873a.639.639 0 0 1-.098.28a.625.625 0 0 1-.43.288a1.33 1.33 0 0 1 .023.456a1.334 1.334 0 0 1-1.44 1.173a1.098 1.098 0 0 1 .054.377a1.102 1.102 0 0 1-1.128 1.072a1.098 1.098 0 0 1-.47-.12a.994.994 0 0 1-1.696.583a.904.904 0 0 1-1.685.075a.784.784 0 0 1-1.274-.493a.639.639 0 0 1-.29.064a.64.64 0 0 1-.621-.58l.004-.007a1.326 1.326 0 0 1-.632.523a1.334 1.334 0 0 1-1.718-.706a1.098 1.098 0 0 1-.306.232a1.102 1.102 0 0 1-1.48-.478a1.094 1.094 0 0 1-.123-.471a.994.994 0 0 1-1.318-1.21a.904.904 0 0 1-.874-1.442a.784.784 0 0 1-.176-1.356a.639.639 0 0 1-.194-.224a.642.642 0 0 1 .011-.61l.019.004a1.326 1.326 0 0 1-.497-.239a1.334 1.334 0 0 1-.262-1.845a1.098 1.098 0 0 1-.35-.146a1.102 1.102 0 0 1-.337-1.52a1.094 1.094 0 0 1 .347-.34A.994.994 0 0 1 2.88 9a.904.904 0 0 1 .803-1.48a.784.784 0 0 1 1.083-.836a.639.639 0 0 1 .098-.28a.649.649 0 0 1 .433-.288a1.33 1.33 0 0 1-.026-.452A1.334 1.334 0 0 1 6.716 4.49a1.098 1.098 0 0 1-.06-.377a1.101 1.101 0 0 1 1.13-1.073a1.094 1.094 0 0 1 .47.115a.994.994 0 0 1 1.696-.579a.904.904 0 0 1 .857-.617zM3.683 7.519a.784.784 0 0 0 .008.041l-.004-.04a.904.904 0 0 0-.004-.001zM17.502 19.61a1.098 1.098 0 0 0-.002-.004h-.037a1.334 1.334 0 0 0 .039.004zM13.825 3.507a1.322 1.322 0 0 0-.008.012l.008-.011zm-2.369-.014l-.003.003a.9.9 0 0 1-.665.27a.896.896 0 0 1-.583-.232a.994.994 0 0 1-.986.732a.99.99 0 0 1-.362-.075a1.098 1.098 0 0 1-1.061 1.046a1.326 1.326 0 0 1 .123.736a1.334 1.334 0 0 1-.725 1.035a1.1 1.1 0 0 1 .307.795a1.106 1.106 0 0 1-.232.65c.321.18.53.523.523.915a1.016 1.016 0 0 1-.07.337a.915.915 0 0 1 .82.937a.923.923 0 0 1-.01.138a.74.74 0 0 1 .157-.01c.343.007.627.25.702.57a.661.661 0 0 1 .38-.111c.31.007.561.224.632.511a.418.418 0 0 1 .381-.015a1.352 1.352 0 0 1 .303-.63a.418.418 0 0 1-.12-.143a.422.422 0 0 1 .004-.392a.665.665 0 0 1-.325-1.117a.736.736 0 0 1-.359-.336a.74.74 0 0 1 .385-1.023a.747.747 0 0 0-.06.026a.915.915 0 0 1-.201-.262a.915.915 0 0 1 .623-1.315V6.53a1.02 1.02 0 0 1 .437-1.371a1.012 1.012 0 0 1 .553-.112a1.11 1.11 0 0 1 .598-1.054a1.12 1.12 0 0 1 .06-.026a.642.642 0 0 1-.109-.21a.784.784 0 0 1-.455.132a.784.784 0 0 1-.662-.396zm4.573 1.512a1.326 1.326 0 0 1-.587.46a1.334 1.334 0 0 1-1.255-.142v-.011a1.11 1.11 0 0 1-.553.66a1.106 1.106 0 0 1-.683.113a1.02 1.02 0 0 1-.553.889a1.016 1.016 0 0 1-.329.105a.918.918 0 0 1-.43 1.169a.923.923 0 0 1-.127.056a.74.74 0 0 1 .086.13a.738.738 0 0 1-.168.89a.661.661 0 0 1 .28.283a.655.655 0 0 1-.149.796a.418.418 0 0 1 .153.164c.019.034.03.068.038.101a1.356 1.356 0 0 1 .672-.015a.422.422 0 0 1 .056-.142a.422.422 0 0 1 .34-.194a.665.665 0 0 1 .796-.848a.736.736 0 0 1 .112-.478a.733.733 0 0 1 1.016-.224a.915.915 0 0 1 .127-.306a.915.915 0 0 1 1.27-.28a.915.915 0 0 1 .179.153a1.02 1.02 0 0 1 1.408-.314a1.012 1.012 0 0 1 .374.422c.355-.24.833-.261 1.214-.015a1.11 1.11 0 0 1 .209.172a.642.642 0 0 1 .082-.108a.784.784 0 0 1-.332-.337a.784.784 0 0 1 .03-.77a.9.9 0 0 1-.553-.455a.896.896 0 0 1-.075-.624a.994.994 0 0 1-1.117-.511a.994.994 0 0 1-.104-.359a1.098 1.098 0 0 1-1.427-.43zM5.249 7.37a.784.784 0 0 1-.124.46a.784.784 0 0 1-.68.362c.06.235.026.49-.112.71a.896.896 0 0 1-.5.377c.31.325.373.829.12 1.225a.99.99 0 0 1-.255.269a1.098 1.098 0 0 1 .351 1.45a1.326 1.326 0 0 1 .691.276a1.334 1.334 0 0 1 .512 1.154c.28-.064.579-.019.84.15a1.106 1.106 0 0 1 .438.53a1.02 1.02 0 0 1 1.05.03a1.016 1.016 0 0 1 .257.231a.914.914 0 0 1 1.225-.224a.919.919 0 0 1 .112.086a.74.74 0 0 1 .071-.142a.74.74 0 0 1 .852-.306a.661.661 0 0 1 .1-.381a.664.664 0 0 1 .763-.273a.418.418 0 0 1 .246-.373a1.36 1.36 0 0 1-.358-.523v-.008a.418.418 0 0 1-.25.075a.422.422 0 0 1-.344-.19a.665.665 0 0 1-1.132-.243a.736.736 0 0 1-.47.149a.733.733 0 0 1-.718-.755a.915.915 0 0 1-.329.049a.915.915 0 0 1-.855-1.177h-.004a1.016 1.016 0 0 1-.993-1.042a1.012 1.012 0 0 1 .168-.534a1.11 1.11 0 0 1-.64-1.035a1.11 1.11 0 0 1 .068-.358a.65.65 0 0 1-.1-.019zm11.127 2.133a.913.913 0 0 1-1.225.224a.926.926 0 0 1-.112-.082a.74.74 0 0 1-.067.142a.74.74 0 0 1-.852.302a.661.661 0 0 1-.105.385a.662.662 0 0 1-.762.277a.418.418 0 0 1-.063.212a.426.426 0 0 1-.075.086a1.356 1.356 0 0 1 .314.564a.418.418 0 0 1 .187-.04a.422.422 0 0 1 .343.194a.665.665 0 0 1 1.136.242a.736.736 0 0 1 .467-.153c.41.008.728.348.72.755a.74.74 0 0 1 0 .008v-.005a.915.915 0 0 1 .326-.052a.915.915 0 0 1 .896.941a.919.919 0 0 1-.037.236c.564.015 1.008.482.993 1.046a1.012 1.012 0 0 1-.168.534a1.11 1.11 0 0 1 .647 1.035a1.11 1.11 0 0 1-.075.362l.004-.007l.1.018a.784.784 0 0 1 .124-.46a.784.784 0 0 1 .68-.362a.9.9 0 0 1 .112-.71a.896.896 0 0 1 .504-.373a.994.994 0 0 1-.123-1.225a.99.99 0 0 1 .257-.269a1.098 1.098 0 0 1-.35-1.453a1.326 1.326 0 0 1-.696-.273h-.003a1.334 1.334 0 0 1-.512-1.158a1.082 1.082 0 0 1-.837-.145a1.106 1.106 0 0 1-.44-.535a1.02 1.02 0 0 1-1.05-.026a1.016 1.016 0 0 1-.258-.235zm-.094 3.116l-.007.066a.74.74 0 0 0 .007-.066zm-2.864-.259a1.36 1.36 0 0 1-.363.598a.418.418 0 0 1 .194.187a.422.422 0 0 1-.007.396a.665.665 0 0 1 .329 1.113a.736.736 0 0 1 .358.336a.739.739 0 0 1-.32.994a.915.915 0 0 1 .197.261a.91.91 0 0 1-.396 1.233a.919.919 0 0 1-.224.082v.004a1.02 1.02 0 0 1-.44 1.374a1.012 1.012 0 0 1-.55.109a1.11 1.11 0 0 1-.661 1.083a.642.642 0 0 1 .112.21a.026.026 0 0 1-.004 0v.003a.784.784 0 0 1 .456-.134a.784.784 0 0 1 .661.392a.9.9 0 0 1 .665-.27a.896.896 0 0 1 .587.236a.994.994 0 0 1 .982-.736a.99.99 0 0 1 .362.079v.022a1.1 1.1 0 0 1 1.061-1.072a1.326 1.326 0 0 1-.123-.736c.056-.46.34-.837.725-1.035l.003.004a1.102 1.102 0 0 1-.31-.795a1.106 1.106 0 0 1 .232-.654a1.02 1.02 0 0 1-.452-1.251a.915.915 0 0 1-.822-.934a.923.923 0 0 1 .011-.142a.74.74 0 0 1-.157.015a.74.74 0 0 1-.698-.572a.661.661 0 0 1-.385.112a.667.667 0 0 1-.627-.512a.418.418 0 0 1-.217.053a.418.418 0 0 1-.18-.045zm-.964.93a1.36 1.36 0 0 1-.336.042c-.112 0-.22-.012-.322-.038a.418.418 0 0 1-.06.295a.422.422 0 0 1-.343.195a.665.665 0 0 1-.792.844a.736.736 0 0 1-.112.478a.74.74 0 0 1-1.02.224a.915.915 0 0 1-.127.306a.915.915 0 0 1-1.266.28a.919.919 0 0 1-.183-.153v.004a1.02 1.02 0 0 1-1.408.31a1.012 1.012 0 0 1-.374-.418c-.355.239-.83.261-1.214.015a1.113 1.113 0 0 1-.21-.172a.65.65 0 0 1-.081.105a.784.784 0 0 1 .336.336a.784.784 0 0 1-.034.77a.89.89 0 0 1 .553.455a.896.896 0 0 1 .075.624a.994.994 0 0 1 1.12.515a.99.99 0 0 1 .101.355a1.098 1.098 0 0 1 1.431.43a1.326 1.326 0 0 1 .587-.46c.43-.172.896-.104 1.255.142a1.106 1.106 0 0 1 .549-.65a1.106 1.106 0 0 1 .683-.108a1.02 1.02 0 0 1 .553-.893a1.02 1.02 0 0 1 .333-.104a.916.916 0 0 1 .425-1.17a.919.919 0 0 1 .131-.052a.736.736 0 0 1-.09-.134a.738.738 0 0 1 .169-.886a.661.661 0 0 1-.28-.284a.67.67 0 0 1 .149-.799a.418.418 0 0 1-.15-.164a.418.418 0 0 1-.048-.24z" class="astro-FWXVJMNE"></path></g></svg>
    </a>
    <a href="https://medium.com/@richicoder" target="_blank" class="order-6 sm:order-1 astro-FWXVJMNE">
        <svg class="dev-icon fa relative w-full text-center astro-FWXVJMNE" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="white" d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236c-1.246 0-2.256-1.897-2.256-4.236c0-2.34 1.01-4.236 2.256-4.236c1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795c-.438 0-.793-1.7-.793-3.795c0-2.096.355-3.795.794-3.795c.438 0 .793 1.699.793 3.795z" class="astro-FWXVJMNE"></path></svg>
    </a>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Socials.astro");

const $$Astro$c = createAstro("https://richicoder.com/");
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Reviews;
  const tweetReviews = [];
  return renderTemplate`${tweetReviews.length > 0 ? renderTemplate`${maybeRenderHead($$result)}<div id="reviews" class="relative w-full z-[60] pt-16 astro-AHZVBDGF">
    
    <div class="w-full h-52 relative bg-[rgb(10,10,10)] overflow-clip -mt-1 astro-AHZVBDGF">
        <div class="w-fit flex flex-row flex-nowrap gap-x-10 absolute top-2 left-0 moveTweets1 astro-AHZVBDGF">
            ${tweetReviews.map((tweet, index) => renderTemplate`${renderComponent($$result, "Review", null, { "tweetCard": tweetReviews[index], "client:only": "react", "client:component-hydration": "only", "class": "astro-AHZVBDGF", "client:component-path": "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Review", "client:component-export": "default" })}`)}
        </div>
    </div>
    <div class="w-full h-52 relative bg-[rgb(10,10,10)] overflow-clip -mt-1 astro-AHZVBDGF">
        <div class="w-fit flex flex-row flex-nowrap gap-x-10 absolute top-2 left-0 moveTweets2 astro-AHZVBDGF">
            ${tweetReviews.map((tweet, index) => renderTemplate`${renderComponent($$result, "Review", null, { "tweetCard": tweetReviews[index], "client:only": "react", "client:component-hydration": "only", "class": "astro-AHZVBDGF", "client:component-path": "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Review", "client:component-export": "default" })}`)}
        </div>
    </div>
    </div>` : null}`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Reviews.astro");

const $$Astro$b = createAstro("https://richicoder.com/");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${maybeRenderHead($$result)}<div class="contactContainer relative w-full h-fit bg-[rgb(10,10,10)] text-lg overflow-hidden z-50">
  <!-- <BlurLayer id="contact-blur" /> -->
  <div class="w-full pt-6 sm:pt-24 relative z-10">
    ${renderComponent($$result, "Title", $$Title, { "id": "contact-title", "title": "Contact", "preTitle": "richi", "titleClass": "mx-auto text-6xl sm:text-9xl" })}
  </div>
  <!-- world Map -->
  <!-- <div class="w-[200vw] sm:w-full h-fit relative z-40"> -->
  
    ${renderComponent($$result, "Reviews", $$Reviews, {})}
  <!-- </div> -->
  <svg viewBox="0 0 1024 1024" class="absolute bottom-0  -z-10 h-[64rem] w-[64rem]  [mask-image:radial-gradient(closest-side,white,transparent)]  left-1/2 translate-y-2/3 -translate-x-1/2" aria-hidden="true">
    <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.6"></circle>
    <defs>
      <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
        <stop stop-Color="#777"></stop>
        <stop offset="1" stop-Color="blue"></stop>
      </radialGradient>
    </defs>
  </svg>
  <div id="contact-block" class="flex flex-col w-full h-fit sm:flex-row">
    ${renderComponent($$result, "Talk", $$Talk, {})}
    ${renderComponent($$result, "Socials", $$Socials, {})}
  </div>
  
    <div class="w-full flex flex-row items-center justify-center py-2 ">
      <div style="font-family: Orbitron;" class="p-0 m-0 text-white ">
        <h2 class="text-center p-0 m-0">
          richi<span class="text-gradient">Coder</span>
        </h2>
      </div>
  </div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Contact.astro");

const $$Astro$a = createAstro("https://richicoder.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="bg-white/30 rounded-b-xl fixed top-0 left-1/2 -translate-x-1/2 w-2/3 md:w-3/4 view-navbar backdrop-blur astro-JXAS2XML">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 astro-JXAS2XML">
    <div class="relative flex h-16 items-center justify-between astro-JXAS2XML">
      <div class="flex flex-1 items-center sm:items-stretch sm:justify-start h-full astro-JXAS2XML">
        <div class="flex flex-shrink-0 items-center astro-JXAS2XML">
          <div class="ml-3 sm:ml-0 astro-JXAS2XML">
            <button id="profile-photo" type="button" class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 md:hover:scale-150 md:transition-all md:hover:translate-y-1 astro-JXAS2XML" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only astro-JXAS2XML">Open user menu</span>
              <img class="h-8 w-8 rounded-full astro-JXAS2XML" src="richicoder_profile_photo.png" alt="richiCoder profile photo" loading="lazy">
            </button>
          </div>

        </div>
        <div class="hidden sm:ml-3 sm:block sm:w-2/3 md:w-1/2 lg:w-1/3 lg:ml-5 astro-JXAS2XML">
          <ul class="flex flex-row items-center justify-start h-full w-full sm:gap-7 astro-JXAS2XML">
            <li class="relative py-2 px-3 w-1/4 h-full astro-JXAS2XML">
            <a id="biolink" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white m-0 p-0 rounded-md text-sm font-medium sm:hover:cursor-pointer sm:hover:scale-[1.7] sm:transition-all active:text-blue-800 astro-JXAS2XML" aria-current="page">bio</a>
            </li>
            <li class="relative py-2 px-3 w-1/4 h-full astro-JXAS2XML">
            <a id="projectslink" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white m-0 p-0 rounded-md text-sm font-medium sm:hover:cursor-pointer sm:hover:scale-[1.7] sm:transition-all active:text-blue-800 astro-JXAS2XML" aria-current="page">projects</a>
            </li>
            <li class="relative py-2 px-3 w-1/4 h-full astro-JXAS2XML">
            <a id="skillslink" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white m-0 p-0 rounded-md text-sm font-medium sm:hover:cursor-pointer sm:hover:scale-[1.7] sm:transition-all active:text-blue-800 astro-JXAS2XML" aria-current="page">skills</a>
            </li>
            <li class="relative py-2 px-3 w-1/4 h-full astro-JXAS2XML">
            <a id="contactlink" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white m-0 p-0 rounded-md text-sm font-medium sm:hover:cursor-pointer sm:hover:scale-[1.7] sm:transition-all active:text-blue-800 astro-JXAS2XML" aria-current="page">contact</a>
            </li>
            <li class="relative py-2 px-3 w-1/4 h-full astro-JXAS2XML">
              <a id="resumeLink" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white m-0 p-0 rounded-md text-sm font-medium sm:hover:cursor-pointer sm:hover:scale-[1.7] sm:transition-all active:text-blue-800 astro-JXAS2XML" aria-current="page" href="/resume" target="_blank">resume</a>
              </li>
          </ul>
        </div>
        <div id="nav-logo1" class="w-fit h-full flex flex-col items-start pl-1 sticky top-0 left-0 justify-center m-0 sm:hidden sm:cursor-pointer astro-JXAS2XML">
          <div style="font-family: Orbitron;" class="nav-logo p-0 m-0 text-left opacity-0 astro-JXAS2XML">
            <h1 class="text-center p-0 m-0 astro-JXAS2XML">
              richi<span class="text-gradient astro-JXAS2XML">Coder</span>
            </h1>
          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-0 sm:static sm:inset-auto sm:ml-6 sm:pr-0 -mr-3 astro-JXAS2XML">
        <div id="nav-logo2" class="w-fit h-full sm:flex flex-col items-start sticky top-0 left-0 justify-center m-0 hidden cursor-pointer astro-JXAS2XML">
          <div style="font-family: Orbitron;" class="nav-logo p-0 m-0 text-left opacity-0 astro-JXAS2XML">
            <h2 class="text-center p-0 m-0 astro-JXAS2XML">
              richi<span class="text-gradient astro-JXAS2XML">Coder</span>
            </h2>
          </div>
        </div>
        <div class="sm:hidden block astro-JXAS2XML">
          <button id="hamburguer-button" type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white astro-JXAS2XML" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only astro-JXAS2XML">Open main menu</span>
            <!--
			  Icon when menu is closed.
  
			  Menu open: "hidden", Menu closed: "block"
			-->
            <svg class="block h-6 w-6 astro-JXAS2XML" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" class="astro-JXAS2XML"></path>
            </svg>
            <!--
			  Icon when menu is open.
  
			  Menu open: "block", Menu closed: "hidden"
			-->
            <svg class="hidden h-6 w-6 astro-JXAS2XML" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="astro-JXAS2XML"></path>
            </svg>
          </button>
        </div>

        <!-- Profile dropdown -->
        <div class="relative ml-3 astro-JXAS2XML">
  
        </div>
      </div>
    </div>
  </div>

  <div id="mobile-menu" class="w-screen h-screen bg-gradient-to-br from-blue-900 from-60% via-indigo-600 via-80% to-purple-800 to-90% absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full scale-50 opacity-0 transition duration-500 ease-in-out sm:hidden astro-JXAS2XML">
    <div class="relative w-full mt-12 astro-JXAS2XML">
      <button id="close-button" type="button" class="absolute top-0 right-0 mr-8 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition-all astro-JXAS2XML">
        <span class="sr-only astro-JXAS2XML">Close panel</span>
        <svg class="h-12 w-12 astro-JXAS2XML" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" class="astro-JXAS2XML"></path>
        </svg>
      </button>
    </div>
    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="block sm:hidden w-full astro-JXAS2XML" id="mobile-menu">
		<div class="flex flex-col gap-[7vh] px-[5vw] pt-[10vh] pb-3 text-5xl w-full astro-JXAS2XML">
		<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
	
			<a id="mobile-bio-link" class="text-gray-100 px-1 font-medium mobile-link transition duration-200 -translate-y-96  active:text-blue-800 astro-JXAS2XML">bio</a>
	
			<a id="mobile-portfolio-link" class="text-gray-100 px-1 font-medium mobile-link transition duration-300 -translate-y-96 active:text-blue-800 astro-JXAS2XML">projects</a>

			<a id="mobile-skills-link" class="text-gray-100 px-1 font-medium mobile-link transition duration-500 -translate-y-96 active:text-blue-800 astro-JXAS2XML">skills</a>

			<a id="mobile-contact-link" class="text-gray-100 px-1 font-medium mobile-link transition duration-700 -translate-y-96 active:text-blue-800 astro-JXAS2XML">contact</a>

      <a id="mobile-resume-link" target="_blank"${addAttribute("/resume", "href")} class="text-gray-100 px-1 font-medium mobile-link transition duration-1000 -translate-y-96 active:text-blue-800 astro-JXAS2XML">resume</a>
      
		</div>
    <img src="richicoder_logo.png" alt="richicoder_logo" class="w-screen aspect-[4/1] object-cover absolute bottom-0 left-0 astro-JXAS2XML" loading="lazy">
	</div>
  </div>
</nav>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Header.astro");

const $$Astro$9 = createAstro("https://richicoder.com/");
const $$Bio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Bio;
  const { bioId, bioDescription, fontSize } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<p${addAttribute(bioId, "id")}${addAttribute(`bio absolute text-white w-full mx-auto ${fontSize} sm:text-7xl lg:text-7xl text-center`, "class")}>${bioDescription}</p>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Bio.astro");

const $$Astro$8 = createAstro("https://richicoder.com/");
const $$BioComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$BioComponent;
  const { ids, titles, fontSize } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`w-full h-[50vh] relative`, "class")}>
    ${renderComponent($$result, "Bio", $$Bio, { "bioId": ids[0], "bioDescription": titles[0], "fontSize": fontSize })}
	${renderComponent($$result, "Bio", $$Bio, { "bioId": ids[1], "bioDescription": titles[1], "fontSize": fontSize })}
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/BioComponent.astro");

const $$Astro$7 = createAstro("https://richicoder.com/");
const $$Bios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Bios;
  return renderTemplate`${maybeRenderHead($$result)}<div style="font-family: Play;" class="w-full h-[220vh] sm:h-[300vh] flex flex-col items-center justify-center relative pt-40 gap-16">
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio1", "bio2"], "titles": ["Frontend", "Developer"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio3", "bio4"], "titles": ["Self-driven", "Career"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio5", "bio6"], "titles": ["Client Apps", "w/ React.js"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio7", "bio8"], "titles": ["Full Stack Apps", "w/ Next.js"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio9", "bio10"], "titles": ["28 years", "Old"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio11", "bio12"], "titles": ["Mechanical", "Engineer"], "fontSize": "text-5xl" })}
    ${renderComponent($$result, "BioComponent", $$BioComponent, { "ids": ["bio13", "bio14"], "titles": ["Spanish, Portuguese", "English"], "fontSize": "text-4xl" })}
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/Bios.astro");

const $$Astro$6 = createAstro("https://richicoder.com/");
const $$LandscapeModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LandscapeModal;
  return renderTemplate`${maybeRenderHead($$result)}<div id="landscape-modal" class="fixed top-0 left-0 bg-black w-screen h-screen text-white font-bold">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">Please, use vertical orientation only!</div>
</div>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/landscape/LandscapeModal.astro");

const $$Astro$5 = createAstro("https://richicoder.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index;
  const Gallery3d = {
    id: "gallery",
    title: "3D-GALLERY",
    number: "01",
    app: "Facundo Meire's requirement",
    description: "Single Page App / React - Router - Three.js",
    mobileImage: "3dGallery_mobile.png",
    desktopImage: "3dGallery_desktop.png",
    demoURL: "https://richi-coder.github.io/3dGallery/",
    githubURL: "https://github.com/richi-coder/3dGallery"
  };
  const gameProps = {
    id: "pics-game",
    title: "4PICS-1WORD",
    number: "04",
    app: "Web Game",
    description: "Multi Page App / React - Redux - Astro",
    mobileImage: "4pics_1word_mobile.png",
    desktopImage: "4pics_1word_desktop.png",
    demoURL: "https://pics-1word-6a8f0.web.app/",
    githubURL: "https://github.com/richi-coder/4pics-1word-richi-coder"
  };
  const ecommerceProps = {
    id: "richi-shop",
    title: "RICHI-SHOP",
    number: "03",
    app: "Ecommerce Site",
    description: "Single Page App / React - Router - PWA",
    mobileImage: "richi_shop_mobile.png",
    desktopImage: "richi_shop_desktop.png",
    demoURL: "https://richi-shop.web.app/",
    githubURL: "https://github.com/richi-coder/richi-coder-portfolio"
  };
  const calculatorProps = {
    id: "richi-calc",
    title: "RICHI-CALC",
    number: "02",
    app: "Web App",
    description: "Single Page App / React",
    mobileImage: "richiCalcMobile_Final.png",
    desktopImage: "richiCalcDesktop_Final.png",
    demoURL: "https://richi-coder.github.io/React-Calculator/",
    githubURL: "https://github.com/richi-coder/React-Calculator/tree/freecodecamp"
  };
  const streamingProps = {
    id: "richi-trailers",
    title: "RICHI-TRAILERS",
    number: "05",
    app: "Trailer Streaming App",
    description: "Multi Page App / Next JS - React",
    mobileImage: "richiTrailers_mobile.png",
    desktopImage: "richiTrailers_desktop.png",
    demoURL: "https://richi-trailers.vercel.app/",
    githubURL: "https://github.com/richi-coder/richiMovies"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "index", "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="main astro-J7PV25F6">
		${renderComponent($$result2, "Header", $$Header, { "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "FirstView", $$FirstView, { "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "Photo", $$Photo, { "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "Shortbio", $$Shortbio, { "id": "shortbio", "ownClass": "h-[350vh] sm:h-[450vh]", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<div id="bio-title-container" class="w-full h-screen relative astro-J7PV25F6">
				${renderComponent($$result3, "Title", $$Title, { "id": "shortbio-title", "title": "Bio", "preTitle": "richi", "titleClass": "absolute top-2/3 sm:top-3/4 text-6xl sm:text-9xl", "class": "astro-J7PV25F6" })}
			</div>${renderComponent($$result3, "Bios", $$Bios, { "class": "astro-J7PV25F6" })}` })}
		
		${renderComponent($$result2, "Portfolio", $$Portfolio, { "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`<img id="richi-tablet" src="/richicoder_tablet.png" alt="" class="mx-auto absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full z-50 w-[70vw] max-w-xs h-auto sm:max-w-none sm:w-[550px] sm:h-[550px] astro-J7PV25F6" loading="lazy"><div id="projects-title-container" class="w-full h-[25vh] relative astro-J7PV25F6">
			${renderComponent($$result3, "Title", $$Title, { "id": "projects-title", "title": "Projects", "preTitle": "richi", "titleClass": "absolute top-3/4 sm:top-1/2 text-6xl sm:text-9xl", "class": "astro-J7PV25F6" })}
			</div>${renderComponent($$result3, "Project", $$Project, { "projectDetails": Gallery3d, "class": "astro-J7PV25F6" })}${renderComponent($$result3, "Project", $$Project, { "projectDetails": calculatorProps, "class": "astro-J7PV25F6" })}${renderComponent($$result3, "Project", $$Project, { "projectDetails": ecommerceProps, "class": "astro-J7PV25F6" })}${renderComponent($$result3, "Project", $$Project, { "projectDetails": gameProps, "class": "astro-J7PV25F6" })}${renderComponent($$result3, "Project", $$Project, { "projectDetails": streamingProps, "class": "astro-J7PV25F6" })}` })}
		${renderComponent($$result2, "Shortbio", $$Shortbio, { "id": "shortbio2", "ownClass": "h-[500vh]", "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "VideoContainer", null, { "client:only": "react", "client:component-hydration": "only", "class": "astro-J7PV25F6", "client:component-path": "@modules/indexPage/video/components/VideoContainer.jsx", "client:component-export": "default" })}
		${renderComponent($$result2, "Contact", $$Contact, { "class": "astro-J7PV25F6" })}
		${renderComponent($$result2, "LandscapeModal", $$LandscapeModal, { "class": "astro-J7PV25F6" })} 
	</main>` })}



<!-- ../modules/FirstView.astro../modules/Project.astro../modules/Title.astro../modules/Portfolio.astro../modules/Shortbio.astro../modules/Photo.astro../modules/Contact.astro../modules/Header.astro../modules/Bios.astro../modules/Video/VideoContainer.jsx../modules/Landscape/LandscapeModal.astro../modules/video/VideoContainer.jsx -->`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/index.astro");

const $$file$3 = "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://richicoder.com/");
const $$EmailCopied = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$EmailCopied;
  return renderTemplate`${maybeRenderHead($$result)}<p id="emailCopied" class="fixed bottom-[7vh] right-0 translate-x-full z-50 px-16 py-1 text-white opacity-0 bg-gradient-to-r from-transparent to-blue-700 ">Email copied</p>`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/indexPage/EmailCopied.astro");

const $$Astro$3 = createAstro("https://richicoder.com/");
const $$ContactComponent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ContactComponent;
  return renderTemplate`${maybeRenderHead($$result)}<div class="contactFormBlock flex flex-col items-center justify-center h-full w-full bg-transparent font-[Play] astro-TTWU6TJF"> 
            <div class="m-auto relative h-full sm:h-3/4 w-full sm:w-11/12 isolate overflow-clip shadow-2xl sm:rounded-3xl sm:px-16 md:pt-1 flex lg:gap-x-20 lg:px-24 lg:pt-0 bg-black astro-TTWU6TJF">
                <svg viewBox="0 0 1024 1024" class="absolute top-1/2 -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)] left-1/2 ml-0 translate-y-0 -translate-x-1/2 astro-TTWU6TJF" aria-hidden="true">
                  <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" class="astro-TTWU6TJF"></circle>
                  <defs class="astro-TTWU6TJF">
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" class="astro-TTWU6TJF">
                      <stop stop-Color="#7775D6" class="astro-TTWU6TJF"></stop>
                      <stop offset="1" stop-Color="blue" class="astro-TTWU6TJF"></stop>
                    </radialGradient>
                  </defs>
                </svg>
                <div class="top-0 left-0 relative w-full h-full flex flex-col items-center astro-TTWU6TJF">
                  ${renderComponent($$result, "DataForm", null, { "client:only": "react", "client:component-hydration": "only", "class": "astro-TTWU6TJF", "client:component-path": "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/contactPage/container/DataForm", "client:component-export": "default" })}
                  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center astro-TTWU6TJF">
                      <div class="lds-ring astro-TTWU6TJF"><div class="astro-TTWU6TJF"></div><div class="astro-TTWU6TJF"></div><div class="astro-TTWU6TJF"></div><div class="astro-TTWU6TJF"></div></div>
                  </div>
                </div>        
            </div>
            ${renderComponent($$result, "EmailCopied", $$EmailCopied, { "class": "astro-TTWU6TJF" })}
</div>../../../modules/EmailCopied.astro`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/modules/contactPage/container/ContactComponent.astro");

const $$Astro$2 = createAstro("https://richicoder.com/");
function getStaticPaths() {
  return [{ params: { route: void 0 } }, { params: { route: "inputA" } }, { params: { route: "inputB" } }, { params: { route: "inputC" } }, { params: { route: "inputD" } }, { params: { route: "inputE" } }, { params: { route: "inputF" } }, { params: { route: "inputG" } }, { params: { route: "inputH" } }, { params: { route: "inputI" } }, { params: { route: "inputJ" } }, { params: { route: "formend" } }];
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | richiCoder", "class": "astro-LH3U3SJD" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="h-screen w-screen bg-[rgb(12,12,12)] overflow-clip astro-LH3U3SJD">
            ${renderComponent($$result2, "ContactComponent", $$ContactComponent, { "class": "astro-LH3U3SJD" })}
        </div>` })}`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/contact/[...route].astro");

const $$file$2 = "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/contact/[...route].astro";
const $$url$2 = "/contact/[...route]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file$2,
  getStaticPaths,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://richicoder.com/");
const $$Resume = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Resume;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resume | richiCoder" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<main class="bg-[rgb(10,10,10)] h-screen w-screen flex flex-col items-center justify-center gap-y-10">
        <div class="fixed top-0 left-0 h-screen w-full myphoto blur-md"><img id="richi-photo" src="richicoder.png" alt="richicoder_profile_photo" class="absolute top-0 left-0 h-screen w-full object-cover"></div>
        <span class="fixed top-0 left-0 h-screen w-full bg-white opacity-40"></span>
        ${renderComponent($$result2, "DownloadResumeButton", null, { "background": "bg-gradient-to-tr from-[#7C3AED] from-60% to-[#00407c] active:bg-purple-500", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@components/DownloadResumeButton", "client:component-export": "default" })}
        ${renderComponent($$result2, "EmailButton", null, { "classStyle": "z-10 text-3xl", "client:only": "react", "client:component-hydration": "only", "client:component-path": "@modules/indexPage/EmailButton", "client:component-export": "default" })}
        <a${addAttribute("/", "href")} class="text-center text-xl sm:text-3xl p-0 m-0 z-10 fixed bottom-5 text-white left-1/2 -translate-x-1/2 select-none" style="font-family: Orbitron, monospace;">
            richi<span class="text-gradient">Coder</span>
        </a>
        ${renderComponent($$result2, "EmailCopied", $$EmailCopied, {})}
    </main>` })}`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/resume.astro");

const $$file$1 = "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/resume.astro";
const $$url$1 = "/resume";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://richicoder.com/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 - richiCoder" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead($$result2)}<div class="bg-[rgb(10,10,10)] h-screen w-screen text-white flex flex-col items-center justify-center text-2xl">
        <div class="w-full text-center">404 PAGE</div>
        <a href="https://richicoder.com">Go back to</a>
        <a style="font-family: Orbitron;" class="flex flex-row text-5xl" href="/">
        <h2 class="richi">richi</h2>
		<h2 class="text-gradient coder">Coder</h2>
        </a>
    </div>` })}`;
}, "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/404.astro");

const $$file = "/home/richicoderlinux/Desktop/richi-portfolio/src/pages/404.astro";
const $$url = "/404";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c };
