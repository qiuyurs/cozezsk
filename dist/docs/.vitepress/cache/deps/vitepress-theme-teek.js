import {
  EMPTY_OBJ,
  Fragment,
  NO,
  NOOP,
  PatchFlagNames,
  Teleport,
  Transition,
  TransitionGroup,
  camelize,
  capitalize,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createPropsRestProxy,
  createSlots,
  createStaticVNode,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  effectScope,
  extend,
  getCurrentInstance,
  getCurrentScope,
  guardReactiveProps,
  h,
  inject,
  isArray,
  isBuiltInDirective,
  isHTMLTag,
  isMathMLTag,
  isObject,
  isOn,
  isRef,
  isReservedProp,
  isSVGTag,
  isString,
  isSymbol,
  isVNode,
  isVoidTag,
  makeMap,
  markRaw,
  mergeDefaults,
  mergeModels,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  onScopeDispose,
  onUnmounted,
  onUpdated,
  openBlock,
  parseStringStyle,
  provide,
  reactive,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  shallowReactive,
  shallowRef,
  slotFlagsText,
  toDisplayString,
  toHandlerKey,
  toHandlers,
  toValue,
  unref,
  useId,
  useModel,
  useSlots,
  vModelDynamic,
  vModelRadio,
  vModelText,
  vShow,
  vue_runtime_esm_bundler_exports,
  watch,
  watchEffect,
  withCtx,
  withDirectives,
  withKeys,
  withModifiers
} from "./chunk-KPJVG2LS.js";
import "./chunk-PZ5AY32C.js";

// node_modules/vitepress-theme-teek/es/index.mjs
import DefaultTheme2 from "vitepress/theme";

// node_modules/vitepress-theme-teek/es/helper/dist/index.mjs
var isExternal = (path) => /^(http?:|https?:|mailto:|tel:)/.test(path);
var isValidURL = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
var isType = (val) => {
  if (val === null) return "null";
  if (typeof val !== "object") return typeof val;
  else return Object.prototype.toString.call(val).slice(8, -1).toLocaleLowerCase();
};
var is = (val, type2) => {
  return Object.prototype.toString.call(val) === `[object ${type2}]`;
};
var isFunction = (val) => {
  return is(val, "Function");
};
var isDef = (val) => {
  return typeof val !== "undefined";
};
var isUnDef = (val) => {
  return !isDef(val);
};
var isObject2 = (val) => {
  return val !== null && is(val, "Object");
};
var isDate = (val) => {
  return is(val, "Date");
};
var isNumber = (val) => {
  const regPos = /^\d+(\.\d+)?$/;
  const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
  if (regPos.test(val) || regNeg.test(val)) {
    return true;
  } else {
    return false;
  }
};
var isStringNumber = (val) => {
  if (!isString2(val)) return false;
  return !Number.isNaN(Number(val));
};
var isAsyncFunction = (val) => {
  return is(val, "AsyncFunction");
};
var isPromise = (val) => {
  return is(val, "Promise") && isObject2(val) && isFunction(val.then) && isFunction(val.catch);
};
var isString2 = (val) => {
  return is(val, "String");
};
var isBoolean = (val) => {
  return is(val, "Boolean");
};
var isArray2 = (arg) => {
  if (typeof Array.isArray === "undefined") {
    return Object.prototype.toString.call(arg) === "[object Array]";
  }
  return Array.isArray(arg);
};
var isClient = typeof window !== "undefined" && typeof document !== "undefined";
var isServer = !isClient;
var inBrowser = isClient;
var isElement = (val) => {
  if (typeof Element === "undefined") return false;
  return val instanceof Element;
};
var isImageDom = (o) => {
  return o && ["IMAGE", "IMG"].includes(o.tagName);
};
var isNull = (val) => {
  return val === null;
};
var isNullAndUnDef = (val) => {
  return isUnDef(val) && isNull(val);
};
var isNullOrUnDef = (val) => {
  return isUnDef(val) || isNull(val);
};
var isPhone = (val) => {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(val);
};
var isImgPath = (path) => {
  return /(https?:\/\/|data:image\/).*?\.(png|jpg|jpeg|gif|svg|webp|ico)/gi.test(path);
};
var isIOS = () => {
  var _a, _b;
  return isClient && ((_a = window == null ? void 0 : window.navigator) == null ? void 0 : _a.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((_b = window == null ? void 0 : window.navigator) == null ? void 0 : _b.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
};
var isEmpty = (val, checkFull = true) => {
  if (isNumber(val) && isNaN(val)) return true;
  if (val === "" || val === null || val === void 0) return true;
  if (!checkFull) return false;
  if (isArray2(val) && val.length === 0) return true;
  if (isObject2(val) && Object.keys(val).length === 0) return true;
  return false;
};
var isFocusable = (element) => {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute("tabIndex") !== null) {
    return true;
  }
  if (element.tabIndex < 0 || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true") {
    return false;
  }
  switch (element.nodeName) {
    case "A": {
      return !!element.href && element.rel !== "ignore";
    }
    case "INPUT": {
      return !(element.type === "hidden" || element.type === "file");
    }
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA": {
      return true;
    }
    default: {
      return false;
    }
  }
};
var getNowDate = () => {
  return formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd hh:mm:ss");
};
var formatDate = (date, format = "yyyy-MM-dd hh:mm:ss") => {
  if (!date) return "";
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");
  return format.replace("yyyy", year.toString()).replace("MM", month).replace("dd", day).replace("hh", hours).replace("mm", minutes).replace("ss", seconds);
};
var formatDiffDate = (startDate, endDate) => {
  const start = +new Date(startDate);
  const end = endDate ? +new Date(endDate) : +/* @__PURE__ */ new Date();
  const diff = Math.abs(end - start);
  const oneSeconds = 1e3;
  const oneMinute = oneSeconds * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;
  const oneWeek = oneDay * 7;
  const oneMonth = oneDay * 30;
  const oneYear = oneMonth * 12;
  if (diff < 1) return "刚刚";
  if (diff < oneMinute) return `${Math.floor(diff / oneSeconds)} 秒前`;
  if (diff < oneHour) return `${Math.floor(diff / oneMinute)} 分前`;
  if (diff < oneDay) return `${Math.floor(diff / oneHour)} 时前`;
  if (diff < oneWeek) return `${Math.floor(diff / oneDay)} 天前`;
  if (diff < oneMonth) return `${Math.floor(diff / oneWeek)} 周前`;
  if (diff < oneYear) return `${Math.floor(diff / oneMonth)} 月前`;
  return `${Math.floor(diff / oneYear)} 年前`;
};
var formatDiffDateToDay = (startDate, endDate) => {
  const start = +new Date(startDate);
  const end = endDate ? +new Date(endDate) : +/* @__PURE__ */ new Date();
  return Math.floor(Math.abs(start - end) / (1e3 * 60 * 60 * 24));
};
var withBase = (base, path) => {
  if (!path) return;
  return /^(?:[a-z]+:|\/\/)/i.test(path) || !path.startsWith("/") ? path : `${base}${path}`.replace(/\/+/g, "/");
};
var upperFirst = (str2) => {
  return str2.charAt(0).toUpperCase() + str2.slice(1);
};
var addUnit = (value, defaultUnit = "px") => {
  if (!value) return "";
  if (isNumber(value) || isStringNumber(value)) return `${value}${defaultUnit}`;
  else if (isString2(value)) return value;
  return "";
};
var removeUnit = (value, defaultUnit = "px") => {
  if (!value) return;
  if (isNumber(value)) return value;
  if (isString2(value)) return Number(value.replace(defaultUnit, ""));
  else return;
};
var get = (object, path, defaultValue) => {
  let obj = { ...object };
  if (!path.includes(".")) return obj[path] || defaultValue;
  else {
    path.split(".").forEach((item) => obj = obj[item] ?? "");
    return obj || defaultValue;
  }
};
var removeStorageItem = (key, storage2, vague = false) => {
  if (!vague) return storage2.removeItem(key);
  const keysToRemove = [];
  for (let i = 0; i < storage2.length; i++) {
    const key2 = storage2.key(i);
    if (key2 && key2.startsWith(key2)) {
      keysToRemove.push(key2);
    }
  }
  keysToRemove.forEach((key2) => storage2.removeItem(key2));
};
var hexToRgb = (str2) => {
  let hex = "";
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(str2)) return console.error("[Teek Error] 输入错误的 hex");
  str2 = str2.replace("#", "");
  hex = str2.match(/../g);
  for (let i = 0; i < 3; i++) hex[i] = parseInt(hex[i], 16);
  return hex;
};
var rgbToHex = (r, g, b) => {
  const reg = /^\d{1,3}$/;
  if (!reg.test(r) || !reg.test(g) || !reg.test(b)) return console.error("[Teek Error] 输入错误的 rgb 颜色值");
  const hex = [r.toString(16), g.toString(16), b.toString(16)];
  for (let i = 0; i < 3; i++) if (hex[i].length === 1) hex[i] = `0${hex[i]}`;
  return `#${hex.join("")}`;
};
var getDarkColor = (color, level) => {
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return console.error("[Teek Error] 输入错误的 hex 颜色值");
  const rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(20.5 * level + rgb[i] * (1 - level));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};
var getLightColor = (color, level) => {
  const reg = /^\#?[0-9A-Fa-f]{6}$/;
  if (!reg.test(color)) return console.error("[Teek Error] 输入错误的 hex 颜色值");
  const rgb = hexToRgb(color);
  for (let i = 0; i < 3; i++) rgb[i] = Math.round(255 * level + rgb[i] * (1 - level));
  return rgbToHex(rgb[0], rgb[1], rgb[2]);
};
var baiduAnalytics = (options) => {
  var _a;
  if (!isClient) return;
  const { id, production = true } = options || {};
  if (production && true) return;
  if (!id) return console.warn("[Teek Warning] Baidu analytics id is empty");
  if (!document.querySelector(`#baidu-analytics-${id}`)) {
    window._hmt = window._hmt || [];
    const script = document.createElement("script");
    script.id = `baidu-analytics-${id}`;
    script.async = true;
    script.src = `https://hm.baidu.com/hm.js?${id}`;
    (_a = document.querySelector("head")) == null ? void 0 : _a.appendChild(script);
  }
};
var trackPageview = (options, pageUrl) => {
  if (!isClient) return;
  const { id, production = true } = options || {};
  if (production && true) return;
  if (!id) return;
  if (!pageUrl || !isString2(pageUrl)) pageUrl = "/";
  if (pageUrl.startsWith("http")) {
    const urlFragment = pageUrl.split("/");
    const origin = `${urlFragment[0]}//${urlFragment[2]}`;
    pageUrl = pageUrl.replace(origin, "");
  }
  if (window._hmt) {
    window._hmt.push(["_setAccount", id]);
    window._hmt.push(["_trackPageview", pageUrl]);
  }
};
var googleAnalytics = (options) => {
  if (!isClient) return;
  if (window.dataLayer && window.gtag) return;
  const { id, production = true } = options || {};
  if (production && true) return;
  if (!id) return console.warn("[Teek Warning] Google analytics id is empty");
  if (!document.querySelector(`#google-analytics-${id}`)) {
    const gtagScript = document.createElement("script");
    gtagScript.id = `google-analytics-${id}`;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    gtagScript.async = true;
    document.head.appendChild(gtagScript);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      dataLayer.push(arguments);
    };
    gtag("js", /* @__PURE__ */ new Date());
    gtag("config", id);
  }
};
var umamiAnalytics = (options, production = true) => {
  if (!isClient) return;
  if (production && true) return;
  let properties = [];
  if (Array.isArray(options)) properties.push(...options);
  else properties.push(options);
  properties = properties.filter((property) => Boolean(property.id));
  if (!properties.length) return;
  for (const property of properties) {
    const { id, src } = property;
    if (!document.querySelector(`#umami-analytics-${id}`)) {
      const script = document.createElement("script");
      script.id = `umami-analytics-${id}`;
      script.async = true;
      script.defer = true;
      script.setAttribute("data-website-id", id);
      script.src = src;
      document.head.appendChild(script);
    }
  }
};

// node_modules/vitepress-theme-teek/es/static/icons/aliPay.mjs
var aliPayIcon = `<svg
      id="mx_n_1711731519286"
      t="1711731519285"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="9945"
      width="16"
      height="16"
    >
      <path
        fill="currentColor"
        d="M230.404 576.536c-12.087 9.728-25.043 23.93-28.805 41.984-5.12 24.666-1.069 55.541 22.728 79.761 28.828 29.362 72.637 37.398 91.56 38.779 51.4 3.717 106.184-21.772 147.477-50.844 16.184-11.42 43.899-34.349 70.39-69.721-59.37-30.653-133.477-64.557-212.703-61.24-40.47 1.692-69.454 10.084-90.647 21.281z m752.859 135.545C1009.463 650.574 1024 582.968 1024 512 1024 229.688 794.335 0 512 0 229.665 0 0 229.688 0 512c0 282.335 229.665 512 512 512 170.385 0 321.491-83.723 414.631-212.124-87.997-43.742-233.027-115.734-322.36-159.299-42.63 48.596-105.65 97.303-176.84 118.495-44.722 13.29-85.037 18.365-127.199 9.75-41.739-8.548-72.481-28.093-90.401-47.683-9.127-9.995-19.612-22.706-27.203-37.82a71.25 71.25 0 0 0 1.202 3.049s-4.363-7.524-7.702-19.5a85.994 85.994 0 0 1-3.34-18.143 93.517 93.517 0 0 1-0.2-13.045c-0.378-7.702-0.066-15.783 1.67-24.064 4.185-20.235 12.822-43.81 35.172-65.692 49.063-48.039 114.777-50.621 148.814-50.42 50.421 0.289 138.04 22.35 211.812 48.439 20.436-43.52 33.547-90.068 42.007-121.1H305.308v-33.168h157.518v-66.337H272.139v-33.169h190.687v-66.315c0-9.105 1.803-16.584 16.584-16.584h74.619v82.899h207.293v33.169H554.029v66.337h165.82s-16.65 92.828-68.719 184.32c115.557 41.272 278.128 104.849 332.133 126.086z"
        p-id="9946"
      />
    </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/arrowDown.mjs
var arrowDownIcon = `<svg
    t="1739882271546"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4346"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M959.429379 343.214852 890.590548 274.378068 511.268336 653.699256 131.944078 274.378068 63.105247 343.214852 501.1857 781.294282 521.348925 781.294282Z"
      p-id="4347"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/category.mjs
var categoryIcon = `<svg
    t="1738937526967"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="6716"
    width="200"
    height="200"
  >
    <path
      d="M918.673 883H104.327C82.578 883 65 867.368 65 848.027V276.973C65 257.632 82.578 242 104.327 242h814.346C940.422 242 958 257.632 958 276.973v571.054C958 867.28 940.323 883 918.673 883z"
      fill="#FFE9B4"
      p-id="6717"
    ></path>
    <path
      d="M512 411H65V210.37C65 188.597 82.598 171 104.371 171h305.92c17.4 0 32.71 11.334 37.681 28.036L512 411z"
      fill="#FFB02C"
      p-id="6718"
    ></path>
    <path
      d="M918.673 883H104.327C82.578 883 65 865.42 65 843.668V335.332C65 313.58 82.578 296 104.327 296h814.346C940.422 296 958 313.58 958 335.332v508.336C958 865.32 940.323 883 918.673 883z"
      fill="#FFCA28"
      p-id="6719"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/close.mjs
var closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/copyright.mjs
var copyrightIcon = `<svg
    t="1695543755857"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="89399"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m234.268 693.506c-3.184 3.734-79.552 91.462-219.702 91.462-169.384 0-288.968-126.52-288.968-291.134 0-162.606 124.008-286.802 287.524-286.802 133.914 0 203.93 74.63 206.844 77.808a24 24 0 0 1 2.476 29.246l-44.76 69.31c-8.098 12.534-25.548 14.702-36.468 4.59-0.466-0.428-53.058-47.76-123.76-47.76-92.232 0-147.832 67.15-147.832 152.164 0 79.204 51.028 159.384 148.554 159.384 77.394 0 130.56-56.676 131.088-57.25 10.264-11.13 28.118-10.066 37.016 2.106l49.094 67.144a24.002 24.002 0 0 1-1.106 29.732z"
      p-id="89400"
    />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/docAnalysis.mjs
var docAnalysisIcon = `<svg
    t="1738938044985"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="20199"
    width="200"
    height="200"
  >
    <path d="M896 42.666667h-128l-170.666667 213.333333h128z" fill="#FF4C4C" p-id="20200"></path>
    <path d="M768 42.666667h-128l-170.666667 213.333333h128z" fill="#3B8CFF" p-id="20201"></path>
    <path d="M640 42.666667h-128L341.333333 256h128z" fill="#F1F1F1" p-id="20202"></path>
    <path d="M128 42.666667h128l170.666667 213.333333H298.666667z" fill="#FF4C4C" p-id="20203"></path>
    <path d="M256 42.666667h128l170.666667 213.333333h-128z" fill="#3B8CFF" p-id="20204"></path>
    <path d="M384 42.666667h128l170.666667 213.333333h-128z" fill="#FBFBFB" p-id="20205"></path>
    <path d="M298.666667 256h426.666666v213.333333H298.666667z" fill="#E3A815" p-id="20206"></path>
    <path d="M512 661.333333m-320 0a320 320 0 1 0 640 0 320 320 0 1 0-640 0Z" fill="#FDDC3A" p-id="20207"></path>
    <path d="M512 661.333333m-256 0a256 256 0 1 0 512 0 256 256 0 1 0-512 0Z" fill="#E3A815" p-id="20208"></path>
    <path
      d="M512 661.333333m-213.333333 0a213.333333 213.333333 0 1 0 426.666666 0 213.333333 213.333333 0 1 0-426.666666 0Z"
      fill="#F5CF41"
      p-id="20209"
    ></path>
    <path
      d="M277.333333 256h469.333334a21.333333 21.333333 0 0 1 0 42.666667h-469.333334a21.333333 21.333333 0 0 1 0-42.666667z"
      fill="#D19A0E"
      p-id="20210"
    ></path>
    <path
      d="M277.333333 264.533333a12.8 12.8 0 1 0 0 25.6h469.333334a12.8 12.8 0 1 0 0-25.6h-469.333334z m0-17.066666h469.333334a29.866667 29.866667 0 1 1 0 59.733333h-469.333334a29.866667 29.866667 0 1 1 0-59.733333z"
      fill="#F9D525"
      p-id="20211"
    ></path>
    <path
      d="M512 746.666667l-100.309333 52.736 19.157333-111.701334-81.152-79.104 112.128-16.298666L512 490.666667l50.176 101.632 112.128 16.298666-81.152 79.104 19.157333 111.701334z"
      fill="#FFF2A0"
      p-id="20212"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/empty.mjs
var emptyIcon = `<svg
      t="1742486057552"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1713"
      width="200"
      height="200"
    >
      <path
        d="M956 634.8L803.3 458.4c-5-7.2-12.9-11.1-22.3-11.1H243c-9.4 0-17.3 3.9-21.4 10L71 629.3l-4.1 5.8v1.9c-1.1 2.4-1.9 5.5-1.9 9.2v285c0 17.1 10.9 27.8 28.5 27.8h837c17.6 0 28.5-10.7 28.5-27.8v-285c0-4.9-1.3-8.6-3-11.4z m-324.4-16.5c-17.3 0-28.5 10.9-28.5 27.8 0 23.7-8.7 43.5-26.6 60.6-18.1 17.3-39.2 25.7-64.5 25.7s-46.4-8.4-64.4-25.6c-17.9-17.1-26.6-36.9-26.6-60.6 0-16.9-11.2-27.8-28.5-27.8H155.2L256.6 503h510.9l101.4 115.4H631.6z m-20.2 133.4c24.8-21.4 40.5-47.5 46.6-77.8h244v229.4H122V674h244c6.1 30.3 21.8 56.4 46.6 77.8C440.5 775.9 474 788 512 788s71.6-12.2 99.4-36.3zM96.3 317.1l100.3 56.3c5.1 2.9 10.9 4.4 16.8 4.4 11.7 0 22.8-6.1 28.8-15.8 4.7-7.5 6-16.3 3.8-24.8-2.2-8.6-7.8-15.8-15.8-20.3l-100.3-56.3c-15.8-8.9-36.3-3.7-45.6 11.5-4.6 7.5-6 16.3-3.8 24.8 2.3 8.5 7.9 15.7 15.8 20.2zM508.6 377.7h0.5c18.1 0 33.2-14.3 33.6-31.9l5.9-247.4c0.2-8.5-2.9-16.7-8.9-23-6.2-6.6-14.7-10.3-25.8-10.4-18.5 2.1-32.1 15.5-32.5 31.8l-5.9 247.4c-0.2 8.6 3 16.7 8.9 23 6.2 6.6 14.7 10.3 24.2 10.5zM330.3 312.9c5.3 12.1 17.4 19.8 30.9 19.8 4.3 0 8.8-0.9 12.8-2.5 8.5-3.4 15-9.8 18.4-18.1 3.3-8.1 3.2-17-0.3-25L345 180.3c-7.2-16.5-26.9-24.2-43.7-17.3-8.5 3.4-15 9.9-18.4 18.2-3.3 8.1-3.1 16.9 0.4 24.9l47 106.8zM810.6 377.7c5.9 0 11.7-1.5 16.8-4.4L927.7 317c7.9-4.5 13.5-11.7 15.7-20.3 2.2-8.5 0.8-17.3-3.8-24.7-9.5-15.4-29.5-20.5-45.6-11.5l-100.3 56.3c-7.9 4.5-13.5 11.7-15.7 20.3-2.2 8.5-0.8 17.3 3.8 24.7 6 9.9 17 15.9 28.8 15.9zM649.9 330.2c4.1 1.7 8.5 2.5 12.9 2.5 13.5 0 25.6-7.8 30.9-19.8L740.8 206c3.5-8 3.6-16.8 0.3-24.9-3.4-8.3-9.9-14.7-18.4-18.1-16.8-6.8-36.5 0.9-43.7 17.3l-47.2 106.9c-3.5 8-3.6 16.9-0.3 25 3.5 8.2 10 14.7 18.4 18z"
        p-id="1714"
      ></path>
    </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/friendLink.mjs
var friendLinkIcon = `<svg width="512" height="512" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
  <path
    fill="#EF9645"
    d="M16.428 30.331a2.31 2.31 0 0 0 3.217-.568a.798.798 0 0 0-.197-1.114l-1.85-1.949l4.222 2.955a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-3.596-3.305l5.375 3.763a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089l-4.766-4.073l5.864 4.105a1.497 1.497 0 0 0 2.089-.369a1.5 1.5 0 0 0-.369-2.089L4.733 11.194l-3.467 5.521c-.389.6-.283 1.413.276 1.891l7.786 6.671c.355.304.724.591 1.107.859l5.993 4.195z"
  />
  <path
    fill="#FFDC5D"
    d="M29.802 21.752L18.5 13.601l-.059-.08l.053-.08l.053-.053l.854.469c.958.62 3.147 1.536 4.806 1.536c1.135 0 1.815-.425 2.018-1.257a1.409 1.409 0 0 0-1.152-1.622a6.788 6.788 0 0 1-2.801-1.091l-.555-.373c-.624-.421-1.331-.898-1.853-1.206c-.65-.394-1.357-.585-2.163-.585c-1.196 0-2.411.422-3.585.83l-1.266.436a5.18 5.18 0 0 1-1.696.271c-1.544 0-3.055-.586-4.516-1.152l-.147-.058a1.389 1.389 0 0 0-1.674.56L1.35 15.669a1.357 1.357 0 0 0 .257 1.761l7.785 6.672c.352.301.722.588 1.1.852l6.165 4.316a2 2 0 0 0 2.786-.491a.803.803 0 0 0-.196-1.115l-1.833-1.283a.424.424 0 0 1-.082-.618a.422.422 0 0 1 .567-.075l3.979 2.785a1.4 1.4 0 0 0 1.606-2.294l-3.724-2.606a.424.424 0 0 1-.082-.618a.423.423 0 0 1 .567-.075l5.132 3.593a1.4 1.4 0 0 0 1.606-2.294l-4.868-3.407a.42.42 0 0 1-.081-.618a.377.377 0 0 1 .506-.066l5.656 3.959a1.4 1.4 0 0 0 1.606-2.295z"
  />
  <path
    fill="#EF9645"
    d="M16.536 27.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 23.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.495 1.495 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 23.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 25.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm16.555-4.137l.627-.542l-6.913-10.85l-12.27 1.985a1.507 1.507 0 0 0-1.235 1.737c.658 2.695 6.003.693 8.355-.601l11.436 8.271z"
  />
  <path
    fill="#FFCC4D"
    d="M16.536 26.929c-.07.267-.207.498-.389.681l-1.004.996a1.494 1.494 0 0 1-1.437.396a1.5 1.5 0 0 1-.683-2.512l1.004-.996a1.494 1.494 0 0 1 1.437-.396a1.502 1.502 0 0 1 1.072 1.831zM5.992 22.008l1.503-1.497a1.5 1.5 0 0 0-.444-2.429a1.497 1.497 0 0 0-1.674.31l-1.503 1.497a1.5 1.5 0 0 0 .445 2.429a1.496 1.496 0 0 0 1.673-.31zm5.204.052a1.5 1.5 0 1 0-2.122-2.118L6.072 22.94a1.5 1.5 0 1 0 2.122 2.118l3.002-2.998zm2.25 3a1.5 1.5 0 0 0-.945-2.555a1.489 1.489 0 0 0-1.173.44L9.323 24.94a1.5 1.5 0 0 0 .945 2.556c.455.036.874-.141 1.173-.44l2.005-1.996zm21.557-7.456a1.45 1.45 0 0 0 .269-1.885l-.003-.005l-3.467-6.521a1.488 1.488 0 0 0-1.794-.6c-1.992.771-4.174 1.657-6.292.937l-1.098-.377c-1.948-.675-4.066-1.466-6-.294c-.695.409-1.738 1.133-2.411 1.58a6.873 6.873 0 0 1-2.762 1.076a1.502 1.502 0 0 0-1.235 1.737c.613 2.512 5.3.908 7.838-.369a.968.968 0 0 1 1.002.081l11.584 8.416l4.369-3.776z"
  />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/icpRecord.mjs
var icpRecordIcon = `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <title>ICP备案号</title>
    <path
      d="M778.24 163.84c-76.8-40.96-165.888-61.44-269.312-61.44s-192.512 20.48-269.312 61.44h-133.12l23.552 337.92c8.192 113.664 67.584 217.088 162.816 280.576l215.04 144.384 215.04-144.384c96.256-63.488 155.648-166.912 163.84-280.576l23.552-337.92H778.24z m47.104 333.824c-7.168 94.208-56.32 181.248-135.168 233.472l-181.248 120.832L327.68 731.136c-78.848-53.248-129.024-139.264-135.168-233.472L173.056 225.28h136.192v-26.624c58.368-23.552 124.928-34.816 199.68-34.816s141.312 12.288 199.68 34.816V225.28H844.8l-19.456 272.384z"
    ></path>
    <path
      d="M685.056 328.704v-46.08H455.68c2.048-4.096 6.144-9.216 11.264-15.36 5.12-7.168 9.216-12.288 11.264-15.36L419.84 240.64c-31.744 46.08-75.776 87.04-133.12 123.904 4.096 4.096 10.24 11.264 18.432 21.504l17.408 17.408c23.552-15.36 45.056-31.744 63.488-50.176 26.624 25.6 49.152 43.008 67.584 51.2-46.08 15.36-104.448 27.648-175.104 35.84 2.048 5.12 6.144 13.312 9.216 24.576 4.096 11.264 6.144 19.456 7.168 24.576l39.936-7.168v218.112H389.12V680.96h238.592v19.456h54.272V481.28H348.16c60.416-12.288 114.688-27.648 163.84-46.08 49.152 19.456 118.784 34.816 210.944 46.08 5.12-17.408 10.24-34.816 17.408-51.2-62.464-4.096-116.736-12.288-161.792-24.576 38.912-20.48 74.752-46.08 106.496-76.8z m-150.528 194.56h94.208v41.984h-94.208v-41.984z m0 78.848h94.208v41.984h-94.208v-41.984z m-144.384-78.848h94.208v41.984H390.144v-41.984z m0 78.848h94.208v41.984H390.144v-41.984zM424.96 326.656h182.272c-26.624 22.528-57.344 41.984-94.208 57.344-31.744-15.36-61.44-34.816-88.064-57.344z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/notice.mjs
var noticeIcon = `<svg
    t="1716085184855"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="4274"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M660.48 872.448q6.144 0-3.584 15.36t-29.696 33.792-47.104 33.792-57.856 15.36q-27.648 0-53.248-15.36t-45.056-33.792-29.696-33.792-6.144-15.36l272.384 0zM914.432 785.408q7.168 9.216 6.656 17.92t-4.608 14.848-10.24 9.728-12.288 3.584l-747.52 0q-14.336 0-20.992-11.776t4.608-29.184q17.408-30.72 40.96-68.608t44.544-81.408 36.352-92.16 15.36-101.888q0-51.2 14.336-92.16t37.376-71.68 53.248-52.224 62.976-32.768q-16.384-26.624-16.384-55.296 0-41.984 28.672-70.656t70.656-28.672 70.656 28.672 28.672 70.656q0 14.336-4.096 28.16t-11.264 25.088q34.816 11.264 66.048 32.768t54.272 53.248 36.864 72.704 13.824 91.136q0 51.2 15.36 100.864t36.864 94.208 45.568 81.408 43.52 63.488zM478.208 142.336q0 16.384 11.264 28.16t27.648 11.776l2.048 0q16.384-1.024 27.648-12.288t11.264-27.648q0-17.408-11.264-28.672t-28.672-11.264-28.672 11.264-11.264 28.672z"
      p-id="4275"
    />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/playground.mjs
var playgroundIcon = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
    <path
      fill="currentColor"
      d="M16 2v2h-1v3.243c0 1.158.251 2.301.736 3.352l4.282 9.276A1.5 1.5 0 0 1 18.656 22H5.344a1.5 1.5 0 0 1-1.362-2.129l4.282-9.276A7.994 7.994 0 0 0 9 7.243V4H8V2h8zm-2.612 8.001h-2.776c-.104.363-.23.721-.374 1.071l-.158.361L6.125 20h11.749l-3.954-8.567a9.978 9.978 0 0 1-.532-1.432zM11 7.243c0 .253-.01.506-.029.758h2.058a8.777 8.777 0 0 1-.021-.364L13 7.243V4h-2v3.243z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/rocket.mjs
var rocketIcon = `<svg
    t="1741888593841"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="9313"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M760.789 439.887C764.394 155.042 530.029 25.24 512 14.423c-14.423 7.21-252.394 137.014-248.789 425.464-46.873 32.451-97.352 86.536-90.14 180.282 7.21 93.746 100.957 158.648 137.014 155.042 36.056-3.605 25.239-28.845 25.239-28.845l10.817-50.479s54.084 79.324 68.507 79.324h194.704c18.028 0 68.507-79.324 68.507-79.324l10.817 50.48s-10.817 25.239 25.24 28.844c36.056 3.606 129.802-61.296 137.014-155.042 7.21-93.746-43.268-147.831-90.141-180.282zM512 436.282c-7.211 0-93.746-3.606-104.563-104.564C411.042 234.366 504.789 227.155 512 223.55c7.211 0 100.958 10.817 104.563 108.17C605.746 432.675 519.211 436.281 512 436.281z m-54.085 493.972c0 10.816-10.816 21.633-21.633 21.633-10.817 0-21.634-10.817-21.634-21.633V825.69c0-10.817 10.817-21.634 21.634-21.634s21.633 10.817 21.633 21.634v104.564z m79.325 54.084c0 10.817-10.817 21.634-21.634 21.634s-21.634-10.817-21.634-21.634V829.296c0-10.817 10.817-21.634 21.634-21.634s21.633 10.817 21.633 21.634v155.042z m72.112-79.324c0 10.817-10.817 21.634-21.634 21.634s-21.633-10.817-21.633-21.634v-75.718c0-10.817 10.816-21.634 21.633-21.634 10.817 0 21.634 10.817 21.634 21.634v75.718z m0 0"
      p-id="9314"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/size.mjs
var size = `<svg
    t="1739366297687"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8454"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M920 416H616c-4.4 0-8 3.6-8 8v112c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-56h60v320h-46c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h164c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-46V480h60v56c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V424c0-4.4-3.6-8-8-8z"
      p-id="8455"
    ></path>
    <path
      fill="currentColor"
      d="M656 296V168c0-4.4-3.6-8-8-8H104c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-64h168v560h-92c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-92V232h168v64c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8z"
      p-id="8456"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/tag.mjs
var tagIcon = `<svg
  t="1695048840129" class="icon" viewBox="0 0 1024 1024" version="1.1"
  xmlns="http://www.w3.org/2000/svg" p-id="4290" width="200" height="200"
  >
  <path
    d="M810.88 245.888a118.432 118.432 0 1 0 0 236.864 118.432 118.432 0 0 0 0-236.864z m-151.008 118.432a151.008 151.008 0 1 1 302.016 0 151.008 151.008 0 0 1-302.016 0z"
    fill="#D3D3D3" p-id="4291"
  />
  <path
    d="M774.08 565.6l61.76-160.64c6.4-16.64 2.56-35.84-10.24-48.64l-151.04-151.04c-12.8-12.8-31.68-16.64-48.64-10.24l-160.64 61.76c-12.16 4.8-23.36 11.84-32.64 21.12l-355.2 355.2c-17.92 17.92-17.92 46.72 0 64.32l256 256c17.92 17.92 46.72 17.92 64.32 0l355.2-355.2c9.28-9.28 16.32-20.16 21.12-32.64z m-159.36-149.12c-22.08-22.08-22.08-57.6 0-79.68 22.08-22.08 57.6-22.08 79.68 0 22.08 22.08 22.08 57.6 0 79.68-22.08 21.76-57.92 21.76-79.68 0z"
    fill="#FCD53F" p-id="4292"
  />
  <path
    d="M654.4 320.48c14.4 0 28.8 5.44 39.68 16.64 22.08 22.08 22.08 57.6 0 79.68-10.88 10.88-25.28 16.64-39.68 16.64-14.4 0-28.8-5.44-39.68-16.64-22.08-22.08-22.08-57.6 0-79.68 10.88-11.2 25.28-16.64 39.68-16.64z m0-30.08c-23.04 0-44.8 8.96-61.12 25.28a86.72 86.72 0 0 0 0 122.24c16.32 16.32 38.08 25.28 61.12 25.28s44.8-8.96 61.12-25.28a86.72 86.72 0 0 0 0-122.24c-16.32-16.32-38.08-25.28-61.12-25.28z"
    fill="#F8312F" p-id="4293"
  />
  <path
    d="M676.16 348.032c8.992 0 16.288 7.296 16.288 16.288a118.144 118.144 0 0 0 64.288 105.44h0.064c22.24 11.296 47.36 15.264 71.68 11.84a16.288 16.288 0 0 1 4.48 32.32 154.24 154.24 0 0 1-90.848-15.04 150.72 150.72 0 0 1-82.24-134.56c0-8.992 7.296-16.288 16.288-16.288z"
    fill="#D3D3D3" p-id="4294"
  />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme.mjs
var themeIcon = `<svg width="128" height="128" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <title>主题</title>
  <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 0 0 2.5-2.5c0-.61-.23-1.2-.64-1.67a.528.528 0 0 1-.13-.33c0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6c0-4.96-4.49-9-10-9zm5.5 11c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm-3-4c-.83 0-1.5-.67-1.5-1.5S13.67 6 14.5 6s1.5.67 1.5 1.5S15.33 9 14.5 9zM5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S7.33 13 6.5 13S5 12.33 5 11.5zm6-4c0 .83-.67 1.5-1.5 1.5S8 8.33 8 7.5S8.67 6 9.5 6s1.5.67 1.5 1.5z"/>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/topArticle.mjs
var topArticleIcon = `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
    <radialGradient id="notoFire0" cx="68.884" cy="124.296" r="70.587" gradientTransform="matrix(-1 -.00434 -.00713 1.6408 131.986 -79.345)" gradientUnits="userSpaceOnUse">
        <stop offset=".314" stop-color="#FF9800"/>
        <stop offset=".662" stop-color="#FF6D00"/>
        <stop offset=".972" stop-color="#F44336"/>
    </radialGradient>
    <path fill="url(#notoFire0)" d="M35.56 40.73c-.57 6.08-.97 16.84 2.62 21.42c0 0-1.69-11.82 13.46-26.65c6.1-5.97 7.51-14.09 5.38-20.18c-1.21-3.45-3.42-6.3-5.34-8.29c-1.12-1.17-.26-3.1 1.37-3.03c9.86.44 25.84 3.18 32.63 20.22c2.98 7.48 3.2 15.21 1.78 23.07c-.9 5.02-4.1 16.18 3.2 17.55c5.21.98 7.73-3.16 8.86-6.14c.47-1.24 2.1-1.55 2.98-.56c8.8 10.01 9.55 21.8 7.73 31.95c-3.52 19.62-23.39 33.9-43.13 33.9c-24.66 0-44.29-14.11-49.38-39.65c-2.05-10.31-1.01-30.71 14.89-45.11c1.18-1.08 3.11-.12 2.95 1.5z"/>
    <radialGradient id="notoFire1" cx="64.921" cy="54.062" r="73.86" gradientTransform="matrix(-.0101 .9999 .7525 .0076 26.154 -11.267)" gradientUnits="userSpaceOnUse">
        <stop offset=".214" stop-color="#FFF176"/>
        <stop offset=".328" stop-color="#FFF27D"/>
        <stop offset=".487" stop-color="#FFF48F"/>
        <stop offset=".672" stop-color="#FFF7AD"/>
        <stop offset=".793" stop-color="#FFF9C4"/>
        <stop offset=".822" stop-color="#FFF8BD" stop-opacity=".804"/>
        <stop offset=".863" stop-color="#FFF6AB" stop-opacity=".529"/>
        <stop offset=".91" stop-color="#FFF38D" stop-opacity=".209"/>
        <stop offset=".941" stop-color="#FFF176" stop-opacity="0"/>
    </radialGradient>
    <path fill="url(#notoFire1)" d="M76.11 77.42c-9.09-11.7-5.02-25.05-2.79-30.37c.3-.7-.5-1.36-1.13-.93c-3.91 2.66-11.92 8.92-15.65 17.73c-5.05 11.91-4.69 17.74-1.7 24.86c1.8 4.29-.29 5.2-1.34 5.36c-1.02.16-1.96-.52-2.71-1.23a16.09 16.09 0 0 1-4.44-7.6c-.16-.62-.97-.79-1.34-.28c-2.8 3.87-4.25 10.08-4.32 14.47C40.47 113 51.68 124 65.24 124c17.09 0 29.54-18.9 19.72-34.7c-2.85-4.6-5.53-7.61-8.85-11.88z"/>
    </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/reading.mjs
var readingIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="m512 863.36 384-54.848v-638.72L525.568 222.72a96 96 0 0 1-27.136 0L128 169.792v638.72zM137.024 106.432l370.432 52.928a32 32 0 0 0 9.088 0l370.432-52.928A64 64 0 0 1 960 169.792v638.72a64 64 0 0 1-54.976 63.36l-388.48 55.488a32 32 0 0 1-9.088 0l-388.48-55.488A64 64 0 0 1 64 808.512v-638.72a64 64 0 0 1 73.024-63.36z"
    ></path>
    <path fill="currentColor" d="M480 192h64v704h-64z"></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/clock.mjs
var clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
    ></path>
    <path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"></path>
    <path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/view.mjs
var viewIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/house.mjs
var houseIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/arrowLeft.mjs
var arrowLeftIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/arrowRight.mjs
var arrowRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/magic.mjs
var magicIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64h64v192h-64zm0 576h64v192h-64zM160 480v-64h192v64zm576 0v-64h192v64zM249.856 199.04l45.248-45.184L430.848 289.6 385.6 334.848 249.856 199.104zM657.152 606.4l45.248-45.248 135.744 135.744-45.248 45.248zM114.048 923.2 68.8 877.952l316.8-316.8 45.248 45.248zM702.4 334.848 657.152 289.6l135.744-135.744 45.248 45.248z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/comment.mjs
var commentIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M273.536 736H800a64 64 0 0 0 64-64V256a64 64 0 0 0-64-64H224a64 64 0 0 0-64 64v570.88zM296 800 147.968 918.4A32 32 0 0 1 96 893.44V256a128 128 0 0 1 128-128h576a128 128 0 0 1 128 128v416a128 128 0 0 1-128 128z"
    ></path>
    <path
      fill="currentColor"
      d="M512 499.2a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm192 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4zm-384 0a51.2 51.2 0 1 1 0-102.4 51.2 51.2 0 0 1 0 102.4z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/user.mjs
var userIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <path
    fill="currentColor"
    d="M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
  ></path>
</svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/calendar.mjs
var calendarIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
  <path
    fill="currentColor"
    d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"
  ></path>
</svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/folderOpened.mjs
var folderOpenedIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M878.08 448H241.92l-96 384h636.16l96-384zM832 384v-64H485.76L357.504 192H128v448l57.92-231.744A32 32 0 0 1 216.96 384zm-24.96 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.872l128.384 128H864a32 32 0 0 1 32 32v96h23.04a32 32 0 0 1 31.04 39.744l-112 448A32 32 0 0 1 807.04 896"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/collectionTag.mjs
var collectionTagIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M256 128v698.88l196.032-156.864a96 96 0 0 1 119.936 0L768 826.816V128zm-32-64h576a32 32 0 0 1 32 32v797.44a32 32 0 0 1-51.968 24.96L531.968 720a32 32 0 0 0-39.936 0L243.968 918.4A32 32 0 0 1 192 893.44V96a32 32 0 0 1 32-32"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/editPen.mjs
var editPenIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="m199.04 672.64 193.984 112 224-387.968-193.92-112-224 388.032zm-23.872 60.16 32.896 148.288 144.896-45.696zM455.04 229.248l193.92 112 56.704-98.112-193.984-112-56.64 98.112zM104.32 708.8l384-665.024 304.768 175.936L409.152 884.8h.064l-248.448 78.336zm384 254.272v-64h448v64h-448z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/github.mjs
var githubIcon = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
    <path
      fill="currentColor"
      d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.587.196 1.15.14c.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047c.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308c1.477-.933 2.613-1.226 3.422-1.096c.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19c.691.936 1.058 2.045 1.058 3.293c0 3.757-1.674 5.665-4.642 6.392c.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716a1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446l.005-.705c.005-.708.007-1.338.007-1.998c0-.697-.183-1.152-.425-1.36c-.661-.57-.326-1.655.54-1.752c2.967-.333 4.337-1.482 4.337-4.66c0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947c-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66c.865.097 1.201 1.177.544 1.748c-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/copy.mjs
var copyIcon = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
    <path
      fill="currentColor"
      d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/code.mjs
var codeIcon = `<svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
    <path
      fill="currentColor"
      d="m23 12l-7.071 7.071l-1.414-1.414L20.172 12l-5.657-5.657l1.414-1.414L23 12zM3.828 12l5.657 5.657l-1.414 1.414L1 12l7.071-7.071l1.414 1.414L3.828 12z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/caretTop.mjs
var caretTopIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path fill="currentColor" d="M512 320 192 704h639.936z"></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/weChatPay.mjs
var weChatPayIcon = `<svg
      t="1711730357270"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4392"
      width="16"
      height="16"
    >
      <path
        fill="currentColor"
        d="M512 1024a512 512 0 1 1 512-512 512 512 0 0 1-512 512z m-112.523636-836.538182c-144.989091 0-262.516364 100.538182-262.516364 224.465455 0 74.007273 42.123636 139.636364 106.705455 180.363636l-19.549091 78.312727 86.807272-47.592727a301.265455 301.265455 0 0 0 88.669091 13.381818h2.210909a178.967273 178.967273 0 0 1-3.607272-34.909091c0-115.083636 109.498182-208.407273 244.363636-208.407272 6.167273 0 11.636364 0 18.152727 0.814545-10.589091-115.665455-123.461818-206.778182-261.469091-206.778182z m246.690909 226.443637c-124.741818 0-225.861818 86.109091-225.861818 192.465454s101.003636 192.349091 225.861818 192.349091a257.047273 257.047273 0 0 0 99.723636-20.014545l77.265455 40.610909L802.909091 744.727273a179.316364 179.316364 0 0 0 69.003636-138.24c0-106.24-101.12-192.465455-225.861818-192.465455z m81.454545 152.087272a31.767273 31.767273 0 1 1 32.349091-31.767272 32 32 0 0 1-32.349091 31.767272z m-164.072727 0a31.767273 31.767273 0 1 1 32.349091-31.767272 32 32 0 0 1-32.349091 31.767272zM502.341818 373.527273a34.909091 34.909091 0 1 1 34.909091-34.909091 34.909091 34.909091 0 0 1-34.909091 34.909091z m-206.196363 0a34.909091 34.909091 0 1 1 34.90909-34.909091 34.909091 34.909091 0 0 1-34.90909 34.909091z m0 0"
        p-id="4393"
      />
    </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/share.mjs
var shareIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify iconify--solar"
    alt="Icon"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    style="vertical-align: -0.125em"
  >
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M13.803 5.333c0-1.84 1.5-3.333 3.348-3.333A3.34 3.34 0 0 1 20.5 5.333c0 1.841-1.5 3.334-3.349 3.334a3.35 3.35 0 0 1-2.384-.994l-4.635 3.156a3.34 3.34 0 0 1-.182 1.917l5.082 3.34a3.35 3.35 0 0 1 2.12-.753a3.34 3.34 0 0 1 3.348 3.334C20.5 20.507 19 22 17.151 22a3.34 3.34 0 0 1-3.348-3.333a3.3 3.3 0 0 1 .289-1.356L9.05 14a3.35 3.35 0 0 1-2.202.821A3.34 3.34 0 0 1 3.5 11.487a3.34 3.34 0 0 1 3.348-3.333c1.064 0 2.01.493 2.623 1.261l4.493-3.059a3.3 3.3 0 0 1-.161-1.023"
      clip-rule="evenodd"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/thumbs.mjs
var thumbsIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify iconify--mdi"
    alt="Icon"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    style="vertical-align: -0.125em"
  >
    <path
      fill="currentColor"
      d="M23 10a2 2 0 0 0-2-2h-6.32l.96-4.57c.02-.1.03-.21.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.59 7.58C7.22 7.95 7 8.45 7 9v10a2 2 0 0 0 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73zM1 21h4V9H1z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/externalLink.mjs
var externalLinkIcon = `<svg
    t="1743866145262"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2634"
    width="200"
    height="200"
  >
    <path
      fill="currentColor"
      d="M426.666667 256v85.333333H213.333333v469.333334h469.333334v-213.333334h85.333333v256a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V298.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h256z m469.333333-128v341.333333h-85.333333V273.621333l-332.501334 332.544-60.330666-60.330666L750.293333 213.333333H554.666667V128h341.333333z"
      p-id="2635"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/dArrowRight.mjs
var dArrowRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/dArrowLeft.mjs
var dArrowLeftIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/moreFilled.mjs
var moreFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M176 416a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224 112 112 0 0 1 0-224"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/fullscreen.mjs
var fullscreenIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="m160 96.064 192 .192a32 32 0 0 1 0 64l-192-.192V352a32 32 0 0 1-64 0V96h64zm0 831.872V928H96V672a32 32 0 1 1 64 0v191.936l192-.192a32 32 0 1 1 0 64zM864 96.064V96h64v256a32 32 0 1 1-64 0V160.064l-192 .192a32 32 0 1 1 0-64l192-.192zm0 831.872-192-.192a32 32 0 0 1 0-64l192 .192V672a32 32 0 1 1 64 0v256h-64z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/refreshLeft.mjs
var refreshLeftIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/refreshRight.mjs
var refreshRightIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M784.512 230.272v-50.56a32 32 0 1 1 64 0v149.056a32 32 0 0 1-32 32H667.52a32 32 0 1 1 0-64h92.992A320 320 0 1 0 524.8 833.152a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384 384 384 0 0 1-384-384 384 384 0 0 1 643.712-282.88z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/scaleToOriginal.mjs
var scaleToOriginalIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M813.176 180.706a60.235 60.235 0 0 1 60.236 60.235v481.883a60.235 60.235 0 0 1-60.236 60.235H210.824a60.235 60.235 0 0 1-60.236-60.235V240.94a60.235 60.235 0 0 1 60.236-60.235h602.352zm0-60.235H210.824A120.47 120.47 0 0 0 90.353 240.94v481.883a120.47 120.47 0 0 0 120.47 120.47h602.353a120.47 120.47 0 0 0 120.471-120.47V240.94a120.47 120.47 0 0 0-120.47-120.47zm-120.47 180.705a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 0 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118zm-361.412 0a30.118 30.118 0 0 0-30.118 30.118v301.177a30.118 30.118 0 1 0 60.236 0V331.294a30.118 30.118 0 0 0-30.118-30.118M512 361.412a30.118 30.118 0 0 0-30.118 30.117v30.118a30.118 30.118 0 0 0 60.236 0V391.53A30.118 30.118 0 0 0 512 361.412M512 512a30.118 30.118 0 0 0-30.118 30.118v30.117a30.118 30.118 0 0 0 60.236 0v-30.117A30.118 30.118 0 0 0 512 512"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/zoomIn.mjs
var zoomInIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/zoomOut.mjs
var zoomOutIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/circleCloseFilled.mjs
var circleCloseFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/infoFilled.mjs
var infoFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/successFilled.mjs
var successFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/warningFilled.mjs
var warningFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/questionFilled.mjs
var questionFilledIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/top.mjs
var topIcon = `<svg
    t="1746805227914"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="8528"
    width="200"
    height="200"
  >
    <path d="M103.5 103.5h407.8L928 521v407z" fill="currentColor" p-id="8529"></path>
    <path
      d="M507.7 219.1l-40-40.2 23.8-23.6 108.7 109.3-23.8 23.6-40.3-40.6-119.2 118.6-28.4-28.6 119.2-118.5zM539.3 345.2c46.5-46.3 99.5-47.1 137.2-9.3 37.7 37.9 36.4 91-10 137.1-46.3 46.1-100.7 48.3-138.3 10.4-37.7-37.8-35.2-92.1 11.1-138.2z m98.2 98.7c30.7-30.5 35.6-62.3 14.5-83.6s-52.9-16.5-83.6 14c-30.5 30.4-36.6 63.3-15.4 84.5 21 21.3 54 15.4 84.5-14.9zM765.2 430.5l46.7 46.9c31.5 31.7 44.7 67 10.9 100.6-32.6 32.5-71.7 22.5-102.3-8.2l-19-19.1-50.8 50.5-28.4-28.6 142.9-142.1z m-24 115c19.6 19.7 37.3 20.9 53.7 4.6 16.6-16.5 11.8-32.5-7.8-52.2L771 481.7l-46.9 46.7 17.1 17.1z"
      fill="#FFFFFF"
      p-id="8530"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/lock.mjs
var lockIcon = `<svg data-v-d2e47025="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
    <path
      fill="currentColor"
      d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
    ></path>
    <path
      fill="currentColor"
      d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/autoWidth.mjs
var autoWidthIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4">
      <path d="M6 7h36M8 24h32" />
      <path stroke-linejoin="round" d="M13.99 30L8 24.005L14 18m20.01 0L40 23.995L34 30" />
      <path d="M6 41h36" />
    </g>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/click.mjs
var clickIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
      <path d="M24 4v8" />
      <path d="m22 22l20 4l-6 4l6 6l-6 6l-6-6l-4 6z" clip-rule="evenodd" />
      <path d="m38.142 9.858l-5.657 5.657M9.858 38.142l5.657-5.657M4 24h8M9.858 9.858l5.657 5.657" />
    </g>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/fullScreenOne.mjs
var fullScreenOneIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="m6 6l10 9.9m-10 26L16 32m26 9.9L32.1 32m9.8-26L32 15.9M33 6h9v9m0 18v9h-9m-18 0H6v-9m0-18V6h9"
    />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/fullscreenTwo.mjs
var fullscreenTwoIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M30 6h12v12M18 6H6v12m24 24h12V30M18 42H6V30M42 6L29 19M19 29L6 42"
    />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/layout.mjs
var layoutIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
      <rect width="36" height="36" x="6" y="6" rx="3" />
      <path stroke-linecap="round" d="M6 16h36M6 13v6m36-5v6m-10-4v26m-3 0h6" />
    </g>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/overallReduction.mjs
var overallReductionIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="4"
      d="M15 15h18v18H15zm-4 28v-6H5m32 6v-6h6M11 5v6H5m32-6v6h6"
    />
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/alignLeft.mjs
var alignLeftIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4">
      <path stroke-linejoin="round" d="M16 6h16v6H16z" />
      <path d="M6 42V6" />
      <path stroke-linejoin="round" d="M16 21h20v6H16zm0 15h26v6H16z" />
    </g>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/alignTextLeft.mjs
var alignTextLeftIcon = `<svg
    viewBox="0 0 48 48"
    display="inline-block"
    vertical-align="middle"
    min-width="1.2rem"
    width="1.2em"
    height="1.2em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
      <path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Z" />
      <path stroke-linecap="round" d="M26 24H14m20-9H14m18 18H14" />
    </g>
  </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/scale.mjs
var scaleIcon = `<svg
      viewBox="0 0 48 48"
      display="inline-block"
      vertical-align="middle"
      min-width="1.2rem"
      width="1.2em"
      height="1.2em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
        <path d="M30 6h12v12M31 29H19V17M42 6L19 29" />
        <path d="M22 6H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2h32a2 2 0 0 0 2-2V26" />
      </g>
    </svg>`;

// node_modules/vitepress-theme-teek/es/static/icons/theme-enhance/water.mjs
var waterIcon = `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-droplet h-4 w-4"
  >
    <path
      d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
    ></path>
  </svg>`;

// node_modules/vitepress-theme-teek/es/composables/useScopeDispose.mjs
var useScopeDispose = (fn) => {
  if (!getCurrentScope()) return false;
  onScopeDispose(fn);
  return true;
};

// node_modules/vitepress-theme-teek/es/composables/useEventListener.mjs
var useEventListener = (target, event, handler, options) => {
  const cleanups = [];
  const cleanup = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
  };
  const register = (el2, event2, listener, options2) => {
    el2.addEventListener(event2, listener, options2);
    return () => el2.removeEventListener(event2, listener, options2);
  };
  const el = computed(() => {
    if (!isClient) return;
    const plain = toValue(target) || window;
    return (plain == null ? void 0 : plain.$el) ?? plain;
  });
  const stopWatch = watch(
    el,
    (val) => {
      cleanup();
      if (!val) return;
      cleanups.push(register(val, event, handler, options));
    },
    { flush: "post", immediate: true }
    // flush: "post" 确保在组件挂载后执行
  );
  const stop = () => {
    stopWatch();
    cleanup();
  };
  useScopeDispose(cleanup);
  return stop;
};

// node_modules/vitepress-theme-teek/es/composables/onClickOutside.mjs
var _iOSWorkaround = false;
var onClickOutside = (target, handler, options = {}) => {
  const { ignore = [], capture = true, detectIframe = false, controls = false } = options;
  if (!isClient) {
    return controls ? { stop: () => {
    }, cancel: () => {
    }, trigger: () => {
    } } : () => {
    };
  }
  if (isIOS() && !_iOSWorkaround) {
    _iOSWorkaround = true;
    const listenerOptions = { passive: true };
    Array.from(window.document.body.children).forEach((el) => useEventListener(el, "click", () => {
    }, listenerOptions));
    useEventListener(window.document.documentElement, "click", () => {
    }, listenerOptions);
  }
  let shouldListen = true;
  const shouldIgnore = (event) => {
    return toValue(ignore).some((target2) => {
      if (typeof target2 === "string") {
        return Array.from(window.document.querySelectorAll(target2)).some(
          (el) => el === event.target || event.composedPath().includes(el)
        );
      } else {
        const el = toValue(target2);
        return el && (event.target === el || event.composedPath().includes(el));
      }
    });
  };
  function hasMultipleRoots(target2) {
    const vm = toValue(target2);
    return vm && vm.$.subTree.shapeFlag === 16;
  }
  function checkMultipleRoots(target2, event) {
    const vm = toValue(target2);
    const children = vm.$.subTree && vm.$.subTree.children;
    if (children == null || !Array.isArray(children)) return false;
    return children.some((child) => child.el === event.target || event.composedPath().includes(child.el));
  }
  const listener = (event) => {
    const plain = toValue(target);
    const el = (plain == null ? void 0 : plain.$el) ?? plain;
    if (event.target == null) return;
    if (!(el instanceof Element) && hasMultipleRoots(target) && checkMultipleRoots(target, event)) return;
    if (!el || el === event.target || event.composedPath().includes(el)) return;
    if ("detail" in event && event.detail === 0) shouldListen = !shouldIgnore(event);
    if (!shouldListen) {
      shouldListen = true;
      return;
    }
    handler(event);
  };
  let isProcessingClick = false;
  const cleanup = [
    useEventListener(
      window,
      "click",
      (event) => {
        if (!isProcessingClick) {
          isProcessingClick = true;
          setTimeout(() => {
            isProcessingClick = false;
          }, 0);
          listener(event);
        }
      },
      { passive: true, capture }
    ),
    useEventListener(
      window,
      "pointerdown",
      (e) => {
        const plain = toValue(target);
        const el = (plain == null ? void 0 : plain.$el) ?? plain;
        shouldListen = !shouldIgnore(e) && !!(el && !e.composedPath().includes(el));
      },
      { passive: true }
    ),
    detectIframe && useEventListener(
      window,
      "blur",
      (event) => {
        setTimeout(() => {
          var _a;
          const plain = toValue(target);
          const el = (plain == null ? void 0 : plain.$el) ?? plain;
          if (((_a = window.document.activeElement) == null ? void 0 : _a.tagName) === "IFRAME" && !(el == null ? void 0 : el.contains(window.document.activeElement))) {
            handler(event);
          }
        }, 0);
      },
      { passive: true }
    )
  ].filter(Boolean);
  const stop = () => cleanup.forEach((fn) => fn());
  if (controls) {
    return {
      stop,
      cancel: () => {
        shouldListen = false;
      },
      trigger: (event) => {
        shouldListen = true;
        listener(event);
        shouldListen = false;
      }
    };
  }
  return stop;
};

// node_modules/vitepress-theme-teek/es/composables/useAnchorScroll.mjs
import { useData } from "vitepress";

// node_modules/vitepress-theme-teek/es/composables/useMounted.mjs
var useMounted = (fn, options = {}) => {
  const { sync = false, nexTick = true } = options;
  const isMounted = shallowRef(false);
  const instance2 = getCurrentInstance();
  if (instance2) {
    onMounted(() => {
      isMounted.value = true;
      fn == null ? void 0 : fn();
    }, instance2);
  } else if (sync) fn == null ? void 0 : fn();
  else if (nexTick) nextTick(fn);
  return isMounted;
};

// node_modules/vitepress-theme-teek/es/composables/useAnchorScroll.mjs
var useAnchorScroll = () => {
  const { theme } = useData();
  const currentAnchor = reactive({ id: "", top: -1 });
  const calculateCurrentAnchor = () => {
    const anchors = document.querySelectorAll(".content-container .main :is(h1, h2, h3, h4, h5, h6)");
    for (let i = 0; i < anchors.length; i++) {
      const anchor = anchors[i];
      const computedStyle = window.getComputedStyle(anchor);
      if (computedStyle.display === "none") break;
      const rect = anchor.getBoundingClientRect();
      if (rect.top <= 150 && anchor.id !== currentAnchor.id) {
        currentAnchor.id = anchor.id;
        currentAnchor.top = rect.top;
      }
    }
  };
  useMounted(() => {
    useEventListener(window, "scroll", calculateCurrentAnchor);
  });
  const startWatch = () => {
    if (theme.value.anchorScroll === false) return;
    watch(
      () => currentAnchor.id,
      (val) => {
        if (!isClient || !val) return;
        window.history.replaceState(history.state || null, "", `#${val}`);
      }
    );
  };
  return { startWatch };
};

// node_modules/vitepress-theme-teek/es/composables/useBuSuanZi.mjs
var callBsz = (url = "//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback") => {
  const jsonpCallback = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
  url = url.replace("=BusuanziCallback", "=" + jsonpCallback);
  const scriptDom = document.createElement("script");
  scriptDom.type = "text/javascript";
  scriptDom.defer = true;
  scriptDom.src = url;
  document.body.appendChild(scriptDom);
  let response;
  window[jsonpCallback] = (data) => response = data;
  return new Promise((resolve, reject) => {
    scriptDom.onload = () => {
      resolve(response);
      setTimeout(() => {
        document.body.removeChild(scriptDom);
      }, 10);
    };
    scriptDom.onerror = () => reject("Error Loading " + url);
  });
};
var useBuSuanZi = (immediate = false, options = {}) => {
  const { url, tryRequest = false, tryCount = 5, tryIterationTime = 2e3 } = options;
  const sitePv = ref(0);
  const siteUv = ref(0);
  const pagePv = ref(0);
  const isGet = ref(null);
  const request = () => {
    if (!isClient) return;
    if (isGet.value === false) return;
    isGet.value = false;
    callBsz(url).then((data) => {
      sitePv.value = data.site_pv || 9999;
      siteUv.value = data.site_uv || 9999;
      pagePv.value = data.page_pv || 9999;
      isGet.value = true;
    });
  };
  if (immediate) request();
  if (tryRequest) {
    let i = 0;
    const clearTimer = (timer2) => {
      if (timer2) {
        clearInterval(timer2);
        timer2 = null;
      }
    };
    const timer = setInterval(() => {
      if (isGet.value) return clearTimer(timer);
      request();
      i += tryIterationTime;
      if (i > tryIterationTime * tryCount) clearTimer(timer);
    }, tryIterationTime);
    useScopeDispose(() => clearTimer(timer));
  }
  return { sitePv, siteUv, pagePv, isGet, request };
};

// node_modules/vitepress-theme-teek/es/composables/useClipboard.mjs
var useClipboard = (timeout = 1500) => {
  const copied = ref(false);
  const text = ref("");
  const isSupported = ref(false);
  if (isClient && !!navigator.clipboard && !!document.execCommand) isSupported.value = true;
  else isSupported.value = true;
  const copy = async (str2, size2 = -1) => {
    if (!isClient) return;
    if (navigator.clipboard) {
      return await navigator.clipboard.writeText(str2).then(() => {
        text.value = str2;
        copied.value = true;
        resetCopied();
      });
    }
    const input = document.createElement("input");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("value", str2);
    document.body.appendChild(input);
    input.select();
    if (size2 > 0) input.setSelectionRange(0, size2);
    if (document.execCommand("copy")) {
      text.value = str2;
      document.execCommand("copy");
      copied.value = true;
      resetCopied();
    }
    document.body.removeChild(input);
  };
  const resetCopied = () => {
    setTimeout(() => {
      copied.value = false;
    }, timeout);
  };
  return { copy, text, copied, isSupported };
};

// node_modules/vitepress-theme-teek/es/composables/useDebounce.mjs
var useDebounce = (func, delay = 0, immediate = false) => {
  let timer;
  return (...args) => {
    const callNow = immediate && !timer;
    if (callNow) func(...args);
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const later = () => {
      clearTimer();
      if (!immediate) func(...args);
    };
    clearTimer();
    timer = setTimeout(later, delay);
  };
};

// node_modules/vitepress-theme-teek/es/composables/useElementHover.mjs
var useElementHover = (el, options = {}) => {
  const { delayEnter = 0, delayLeave = 0 } = options;
  const isHovered = shallowRef(false);
  let timer;
  const toggle = (entering) => {
    const delay = entering ? delayEnter : delayLeave;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    if (delay) timer = setTimeout(() => isHovered.value = entering, delay);
    else isHovered.value = entering;
  };
  if (!isClient) return isHovered;
  useEventListener(el, "mouseenter", () => toggle(true), { passive: true });
  useEventListener(el, "mouseleave", () => toggle(false), { passive: true });
  return isHovered;
};

// node_modules/vitepress-theme-teek/es/locale/lang/zh-cn.mjs
var zhCn = {
  lang: "zh-CN",
  tk: {
    archives: {
      label: "归档页",
      title: "归档",
      totalCount: "总共 {count} 篇文章",
      year: "年",
      month: "月",
      count: "篇",
      notFound: "未指定"
    },
    articleAnalyze: {
      label: "文章分析",
      wordCount: "文章字数",
      readingTime: "预计阅读时长",
      pageView: "浏览量"
    },
    articleAppreciation: {
      label: "文章赞赏",
      contentLabel: "赞赏方式"
    },
    articleBreadcrumb: {
      label: "文章面包屑",
      home: "首页"
    },
    breadcrumb: {
      label: "面包屑"
    },
    articleInfo: {
      label: "文章信息",
      author: "作者",
      createTime: "创建时间",
      updateTime: "更新时间",
      category: "分类",
      tag: "标签"
    },
    articleOverview: {
      label: "文章清单",
      overview: " 清单",
      category: " 目录",
      name: "文章目录",
      title: "文章标题",
      date: "发布时间",
      wordCount: "文章字数",
      readingTime: "预阅读时长"
    },
    articleShare: {
      label: "文章分享",
      text: "分享此页面",
      copiedText: "链接已复制"
    },
    articleTitle: {
      label: "文章标题"
    },
    articleUpdate: {
      label: "最近更新"
    },
    catalogue: {
      label: "目录页",
      title: "目录"
    },
    demoCode: {
      playground: "在 Playground 中编辑",
      github: "在 Github 中编辑",
      copy: "复制代码",
      collapseSource: "查看源代码",
      expandSource: "隐藏源代码",
      notSupport: "浏览器不支持复制",
      copySuccess: "复制成功",
      copyFail: "复制失败"
    },
    footerInfo: {
      label: "页脚信息",
      socialLabel: "社交媒体",
      infoLabel: "页脚内容"
    },
    home: {
      label: "首页",
      postLabel: "文章列表",
      cardLabel: "侧边卡片栏"
    },
    homeBanner: {
      label: "首页横幅",
      wavesLabel: "首页横幅波浪",
      bgImgLabel: "首页横幅背景图",
      maskLabel: "首页横幅遮罩层",
      bgPureLabel: "首页横幅背景色",
      contentLabel: "首页横幅内容",
      titleLabel: "首页横幅标题",
      descLabel: "首页横幅描述",
      descSwitchLabel: "描述动态切换",
      descTypedLabel: "描述打字机效果",
      featureLabel: "首页横幅功能特性"
    },
    homePost: {
      label: "文章列表",
      emptyLabel: "暂无文章",
      pageLabel: "分页导航",
      moreLabel: "阅读全文 >",
      pin: "置顶：{sticky}",
      pinLabel: "置顶标志",
      excerptLabel: "文章摘要",
      infoLabel: "文章信息",
      coverImgLabel: "文章封面图"
    },
    pageCard: {
      label: "首页卡片",
      prev: "上一页",
      next: "下一页"
    },
    categoryCard: {
      pageTitle: "{icon}全部分类",
      homeTitle: "{icon}文章分类",
      label: "首页分类卡片",
      emptyLabel: "暂无文章分类",
      listLabel: "分类列表",
      moreLabel: "更多 ..."
    },
    docAnalysisCard: {
      title: "{icon}站点信息",
      totalPosts: "文章数目",
      weekAddNum: "近一周新增",
      monthAddNum: "近一月新增",
      runtime: "已运行时间",
      totalWordCount: "本站总字数",
      lastActiveTime: "最后活动时间",
      viewCount: "本站被访问了",
      visitCount: "本站曾来访过",
      fileUnit: "篇",
      runtimeLess: "不到一天",
      runtimeUnit: "天",
      wordCountUnit: "字",
      viewCountUnit: "次",
      visitCountUnit: "人",
      label: "首页站点分析卡片"
    },
    friendLinkCard: {
      title: "{icon}友情链接",
      emptyLabel: "暂无友情链接",
      label: "首页友情链接卡片",
      listLabel: "友情链接列表"
    },
    myCard: {
      label: "我的信息卡片",
      avatarAlt: "博主头像",
      avatarTitle: "我好看吗",
      socialLabel: "社交链接",
      bloggerLabel: "博主信息"
    },
    tagCard: {
      pageTitle: "{icon}全部标签",
      homeTitle: "{icon}热门标签",
      label: "首页标签卡片",
      emptyLabel: "暂无标签",
      listLabel: "标签列表",
      moreLabel: "更多 ..."
    },
    topArticleCard: {
      title: "{icon}精选文章",
      label: "首页精选文章卡片",
      emptyLabel: "暂无精选文章",
      listLabel: "精选文章列表"
    },
    image: {
      error: "加载失败"
    },
    notice: {
      label: "公告栏",
      title: "公告",
      openLabel: "打开公告弹窗",
      closeLabel: "关闭公告弹窗",
      headLabel: "公告头部区域",
      contentLabel: "公告内容"
    },
    pagination: {
      goto: "前往",
      pagesize: "条/页",
      total: "共 {total} 条",
      pageClassifier: "页",
      page: "页",
      prev: "上一页",
      next: "下一页",
      currentPage: "第 {pager} 页",
      prevPages: "向前 {pager} 页",
      nextPages: "向后 {pager} 页"
    },
    rightBottomButton: {
      backTopTitle: "返回顶部",
      themeSizeTitle: "主题尺寸切换",
      themeStyleTitle: "主题风格切换",
      toComment: "前往评论"
    },
    themeEnhance: {
      title: "布局增强",
      layoutSwitch: {
        title: "布局切换",
        helpDesc: "调整 VitePress 的布局样式，以适配不同的阅读习惯和屏幕环境。",
        fullWidthTipTitle: "全部展开",
        fullWidthHelpTipContent: "使侧边栏和内容区域占据整个屏幕的全部宽度。",
        sidebarWidthAdjustableOnlyTipTitle: "全部展开，但侧边栏宽度可调",
        sidebarWidthAdjustableOnlyHelpTipContent: "侧边栏宽度可调，但内容区域宽度不变，调整后的侧边栏将可以占据整个屏幕的最大宽度。",
        bothWidthAdjustableTipTitle: "全部展开，且侧边栏和内容区域宽度均可调",
        bothWidthAdjustableHelpTipContent: "侧边栏和内容区域宽度均可调，调整后的侧边栏和内容区域将可以占据整个屏幕的最大宽度。",
        originalWidthTipTitle: "原始宽度",
        originalWidthHelpTipContent: "原始的 VitePress 默认布局宽度"
      },
      docLayoutMaxWidth: {
        title: "文档内容最大宽度",
        helpDesc: "调整 VitePress 布局中文档内容区域的宽度，以适配不同的阅读习惯和屏幕环境。",
        helpTipTitle: "调整文档内容最大宽度",
        helpTipContent: "一个可调整的滑块，用于选择和自定义文档内容最大宽度。"
      },
      pageLayoutMaxWidth: {
        title: "页面最大宽度",
        helpDesc: "调整 VitePress 布局中页面的宽度，以适配不同的阅读习惯和屏幕环境。",
        helpTipTitle: "调整页面最大宽度",
        helpTipContent: "一个可调整的滑块，用于选择和自定义页面最大宽度。"
      },
      themeColor: {
        title: "主题色",
        speedLabel: "扩散",
        vpLabel: "VP 主题",
        epLabel: "EP 主题",
        vpTip: "VitePress 主题",
        epTip: "ElementPlus 主题",
        defaultLabel: "预设",
        blueLabel: "蓝色",
        greenLabel: "绿色",
        yellowLabel: "黄色",
        redLabel: "红色",
        helpDesc: "提供 VitePress 的基础色板和 ElementPlus 的基础色板进行选择，通过扩散开关可以将主题色扩散至其他元素，如侧边栏背景色、字体色等",
        vpHelpTipTitle: "VitePress 基础色板",
        vpHelpTipContent: "提供蓝（预设）、绿、黄、红 4 种 VitePress 基础色板",
        epHelpTipTitle: "ElementPlus 基础色板",
        epHelpTipContent: "提供蓝、绿、黄、红 4 种 ElementPlus 基础色板"
      },
      spotlight: {
        title: "聚光灯",
        helpDesc: "支持在正文中高亮当前鼠标悬停的行和元素，以优化阅读和专注困难的用户的阅读体验。",
        onTipTitle: "开启",
        onHelpTipContent: "开启聚光灯。",
        offTipTitle: "关闭",
        offHelpTipContent: "关闭聚光灯。"
      },
      spotlightStyles: {
        title: "聚光灯样式",
        helpDesc: "调整聚光灯的样式。",
        asideTipTitle: "置于侧边",
        asideHelpTipContent: "在当前鼠标悬停的元素旁边添加一条固定的纯色线以突出显示当前鼠标悬停的位置。",
        underTipTitle: "置于底部",
        underHelpTipContent: "在当前鼠标悬停的元素下方添加一个纯色背景以突出显示当前鼠标悬停的位置。"
      }
    },
    login: {
      label: "登录页",
      reset: "重置",
      login: "登录",
      loginSuccess: "登录成功！",
      loginError: "用户名或者密码错误！",
      loginInfoNonNull: "请输入用户名和密码！",
      usernamePlaceholder: "请输入用户名",
      passwordPlaceholder: "请输入密码",
      verifyCodePlaceholder: "请输入验证码",
      verifyCodeNonNull: "请输入验证码",
      verifyCodeError: "请输入正确的验证码"
    },
    riskLink: {
      label: "风险链接提示页",
      title: "即将离开 {name}，请注意财产安全",
      linkIllegal: "链接安全性校验中，请稍后 ...",
      confirmButtonText: "继续访问"
    }
  }
};

// node_modules/vitepress-theme-teek/es/composables/useLocale.mjs
var localeContextKey = Symbol("localeContextKey");
var useLocale = (localeOverride) => {
  const locale = localeOverride || inject(localeContextKey, ref());
  const finalLocale = computed(() => (locale == null ? void 0 : locale.value) || zhCn);
  const lang = computed(() => finalLocale.value.lang);
  const localeRef = isRef(finalLocale) ? finalLocale : ref(finalLocale);
  const translate = (path, option, locale2) => {
    return get(locale2, path, path).replace(/\{(\w+)\}/g, (_, key) => `${(option == null ? void 0 : option[key]) ?? `{${key}}`}`);
  };
  return {
    lang,
    locale: localeRef,
    t: (path, option) => {
      return translate(path, option, finalLocale.value);
    },
    translate
  };
};

// node_modules/vitepress-theme-teek/es/composables/useMediaQuery.mjs
var useMediaQuery = (query, match = true) => {
  const isSupported = shallowRef(false);
  useMounted(() => {
    isSupported.value = window && "matchMedia" in window && typeof window.matchMedia === "function";
  });
  const mediaQuery = shallowRef();
  const matches = shallowRef(false);
  const handler = (event) => {
    matches.value = event.matches;
  };
  watchEffect(() => {
    if (!isSupported.value) return;
    mediaQuery.value = window.matchMedia(toValue(query));
    matches.value = mediaQuery.value.matches;
  });
  useEventListener(mediaQuery, "change", handler, { passive: true });
  return computed(() => match ? matches.value : !matches.value);
};

// node_modules/vitepress-theme-teek/es/composables/cssModule/namespace.module.scss.mjs
var namespaceModule = { "namespace": "tk" };

// node_modules/vitepress-theme-teek/es/composables/useNamespace.mjs
var useNamespace = (block = "", namespaceOverrides) => {
  const finalNamespace = namespaceOverrides || namespaceModule.namespace;
  const b = (blockSuffix) => {
    return createBem(finalNamespace, block, blockSuffix);
  };
  const e = (element) => {
    return createBem(finalNamespace, block, "", element);
  };
  const m = (modifier) => {
    return createBem(finalNamespace, block, "", "", modifier);
  };
  const be = (blockSuffix, element) => {
    return createBem(finalNamespace, block, blockSuffix, element);
  };
  const bm = (blockSuffix, modifier) => {
    return createBem(finalNamespace, block, blockSuffix, "", modifier);
  };
  const em = (element, modifier) => {
    return createBem(finalNamespace, block, "", element, modifier);
  };
  const bem = (blockSuffix, element, modifier) => {
    return createBem(finalNamespace, block, blockSuffix, element, modifier);
  };
  const is2 = (name, bool2 = true) => {
    return bool2 ? `is-${name}` : "";
  };
  const createBem = (namespace, block2, blockSuffix, element, modifier) => {
    let space = `${namespace}-${block2}`;
    if (blockSuffix) space += `-${blockSuffix}`;
    if (element) space += `__${element}`;
    if (modifier) space += `--${modifier}`;
    return space;
  };
  const joinNamespace = (scope) => {
    return `${finalNamespace}-${scope}`;
  };
  const cssVar = (name) => `var(--${finalNamespace}-${name})`;
  const cssVarName = (name) => `--${finalNamespace}-${name}`;
  const storageKey = (...key) => `${finalNamespace}:${key.join(":")}`;
  return {
    namespaceModule,
    namespace: namespaceModule.namespace,
    b,
    e,
    m,
    be,
    bm,
    em,
    bem,
    is: is2,
    createBem,
    joinNamespace,
    cssVar,
    cssVarName,
    storageKey
  };
};

// node_modules/vitepress-theme-teek/es/composables/useWindowSize.mjs
var useWindowSize = (sizeChangedCallback, options = {}) => {
  const {
    initialWidth = Number.POSITIVE_INFINITY,
    initialHeight = Number.POSITIVE_INFINITY,
    includeScrollbar = true,
    type: type2 = "inner"
  } = options;
  const width = shallowRef(initialWidth);
  const height = shallowRef(initialHeight);
  const update = useDebounce(() => {
    if (!isClient) return;
    if (type2 === "outer") {
      width.value = window.outerWidth;
      height.value = window.outerHeight;
    } else if (type2 === "visual" && window.visualViewport) {
      const { width: visualViewportWidth, height: visualViewportHeight, scale } = window.visualViewport;
      width.value = Math.round(visualViewportWidth * scale);
      height.value = Math.round(visualViewportHeight * scale);
    } else if (includeScrollbar) {
      width.value = window.innerWidth;
      height.value = window.innerHeight;
    } else {
      width.value = window.document.documentElement.clientWidth;
      height.value = window.document.documentElement.clientHeight;
    }
    sizeChangedCallback == null ? void 0 : sizeChangedCallback(width.value, height.value);
  }, 100);
  update();
  useMounted(update);
  useEventListener(() => window, "resize", update, { passive: true });
  if (isClient && type2 === "visual" && window.visualViewport) {
    useEventListener(window.visualViewport, "resize", update, { passive: true });
  }
  return { width, height, update };
};

// node_modules/vitepress-theme-teek/es/composables/useScrollbarSize.mjs
var useScrollbarSize = () => {
  const width = ref(0);
  const height = ref(0);
  let measureElement = null;
  const createMeasureElement = () => {
    var _a;
    if (measureElement) return measureElement;
    (_a = document.querySelector("#measure-element")) == null ? void 0 : _a.remove();
    measureElement = document.createElement("div");
    measureElement.id = "measure-element";
    measureElement.style.cssText = `
        position: fixed;
        top: -9999px;
        left: 0;
        width: 100px;
        height: 100px;
        overflow: scroll;
        visibility: hidden;
      `;
    document.body.appendChild(measureElement);
    return measureElement;
  };
  const clearMeasureElement = () => {
    if (!measureElement) return;
    if (document.body.contains(measureElement)) {
      document.body.removeChild(measureElement);
      measureElement = null;
    }
  };
  const calculate = () => {
    if (!isClient) return;
    const docElem = document.documentElement;
    const isQuirksMode = document.compatMode === "BackCompat";
    const hasVertical = isQuirksMode ? document.body.scrollHeight > document.body.clientHeight : docElem.scrollHeight > docElem.clientHeight;
    const hasHorizontal = isQuirksMode ? document.body.scrollWidth > document.body.clientWidth : docElem.scrollWidth > docElem.clientWidth;
    if (!hasVertical && !hasHorizontal) {
      width.value = 0;
      height.value = 0;
      return;
    }
    const measure = createMeasureElement();
    width.value = hasVertical ? measure.offsetWidth - measure.clientWidth : 0;
    height.value = hasHorizontal ? measure.offsetHeight - measure.clientHeight : 0;
  };
  const update = () => {
    calculate();
  };
  useEventListener(() => window, "resize", update);
  useMounted(() => {
    createMeasureElement();
    calculate();
  });
  calculate();
  useScopeDispose(clearMeasureElement);
  return { width, height, update };
};

// node_modules/vitepress-theme-teek/es/composables/usePopoverSize.mjs
var AUTO = "auto";
var defaultSpace = 10;
var usePopoverSize = (trigger, popover, options = {}) => {
  const { placement = "bottom", offset = 0, xOffset = 0, yOffset = 0 } = options;
  const top = ref(AUTO);
  const right = ref(AUTO);
  const bottom = ref(AUTO);
  const left = ref(AUTO);
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const { width: scrollbarWidth, height: scrollbarHeight } = useScrollbarSize();
  const triggerEl = computed(() => {
    const plain = toValue(trigger);
    return (plain == null ? void 0 : plain.$el) ?? plain;
  });
  const popoverEl = computed(() => {
    const plain = toValue(popover);
    return (plain == null ? void 0 : plain.$el) ?? plain;
  });
  const calculatePosition = async () => {
    if (!isClient || !triggerEl.value || !popoverEl.value) return;
    await nextTick();
    const {
      top: triggerTop,
      right: triggerLeftWidth,
      // 等于 left + width
      bottom: triggerTopHeigh,
      // 等于 top + height
      left: triggerLeft,
      width: triggerWidth,
      height: triggerHeight
    } = triggerEl.value.getBoundingClientRect();
    const triggerRight = windowWidth.value - triggerLeftWidth;
    const triggerBottom = windowHeight.value - triggerTopHeigh;
    const popoverWidth = popoverEl.value.offsetWidth;
    const popoverHeight = popoverEl.value.offsetHeight;
    const x = window.scrollX + (offset || xOffset);
    const y = window.scrollY + (offset || yOffset);
    let popoverTop = AUTO;
    let popoverRight = AUTO;
    let popoverBottom = AUTO;
    let popoverLeft = AUTO;
    const placementIsY = ["top", "bottom"].some((item) => placement.startsWith(item));
    const placementIsX = ["left", "right"].some((item) => placement.startsWith(item));
    const expectTop = () => triggerTop + triggerHeight + y;
    const expectRight = () => triggerRight + triggerWidth - x - scrollbarWidth.value;
    const expectBottom = () => triggerBottom + triggerHeight - y - scrollbarHeight.value;
    const expectLeft = () => triggerLeft + triggerWidth + x;
    if (placementIsY) {
      if (placement.endsWith("start")) popoverLeft = expectLeft() - triggerWidth;
      else if (placement.endsWith("end")) popoverRight = expectRight() - triggerWidth;
      else popoverLeft = triggerLeft + triggerWidth / 2 - popoverWidth / 2 + x;
    } else if (placementIsX) {
      if (placement.endsWith("start")) popoverTop = expectTop() - triggerHeight;
      else if (placement.endsWith("end")) popoverBottom = expectBottom() - triggerHeight;
      else popoverTop = triggerTop + triggerHeight / 2 - popoverHeight / 2 + y;
    }
    if (placement.startsWith("top")) popoverBottom = expectBottom() + defaultSpace;
    else if (placement.startsWith("right")) popoverLeft = expectLeft() + defaultSpace;
    else if (placement.startsWith("bottom")) popoverTop = expectTop() + defaultSpace;
    else if (placement.startsWith("left")) popoverRight = expectRight() + defaultSpace;
    const isOverTop = () => !isString2(popoverBottom) && popoverBottom + popoverHeight > windowHeight.value - y;
    const isOverRight = () => !isString2(popoverLeft) && popoverLeft + popoverWidth > windowWidth.value + x;
    const isOverBottom = () => !isString2(popoverTop) && popoverTop + popoverHeight > windowHeight.value + y;
    const isOverLeft = () => !isString2(popoverRight) && popoverRight + popoverWidth > windowWidth.value - x;
    if (isOverTop()) {
      popoverTop = (placementIsX ? expectTop() - triggerHeight : expectTop()) + defaultSpace;
      if (isOverBottom()) popoverTop = AUTO;
      else popoverBottom = AUTO;
    }
    if (isOverBottom()) {
      popoverBottom = (placementIsX ? expectBottom() - triggerHeight : expectBottom()) + defaultSpace;
      if (isOverTop()) popoverBottom = AUTO;
      else popoverTop = AUTO;
    }
    if (isOverRight()) {
      popoverRight = (placementIsY ? expectRight() - triggerWidth : expectRight()) + defaultSpace;
      if (isOverLeft()) popoverRight = AUTO;
      else popoverLeft = AUTO;
    }
    if (isOverLeft()) {
      popoverLeft = (placementIsY ? expectLeft() - triggerWidth : expectLeft()) + defaultSpace;
      if (isOverRight()) popoverLeft = AUTO;
      else popoverRight = AUTO;
    }
    top.value = popoverTop;
    right.value = popoverRight;
    bottom.value = popoverBottom;
    left.value = popoverLeft;
  };
  calculatePosition();
  const update = () => {
    calculatePosition();
  };
  useEventListener(() => window, "scroll", update);
  useEventListener(() => window, "resize", update);
  return { top, right, bottom, left, update };
};

// node_modules/vitepress-theme-teek/es/composables/useScrollData.mjs
var useScrollData = (data, limit, options = {}) => {
  const { intervalTime = 3e3, reloadWhenDataChanged = false } = options;
  const dataComputed = computed(() => toValue(data) || []);
  const visibleData = ref(dataComputed.value.slice(0, limit));
  let currentIndex = limit;
  let timer = null;
  const scrollData = () => {
    const nextIndex = (currentIndex + 1) % dataComputed.value.length;
    visibleData.value.push(dataComputed.value[nextIndex]);
    visibleData.value.shift();
    currentIndex = nextIndex;
  };
  const start = () => {
    scrollData();
    timer = setInterval(() => {
      scrollData();
    }, intervalTime);
  };
  const stop = (restore = false) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    if (restore) {
      visibleData.value = dataComputed.value.slice(0, limit);
      currentIndex = limit;
    }
  };
  const restart = () => {
    stop(true);
    start();
  };
  if (reloadWhenDataChanged) watch(dataComputed, () => restart());
  useScopeDispose(stop);
  return {
    data: visibleData,
    start,
    stop,
    restart
  };
};

// node_modules/vitepress-theme-teek/es/composables/useStorage.mjs
var StorageSerializers = {
  boolean: { read: (v) => v === "true", write: (v) => String(v) },
  object: { read: (v) => JSON.parse(v), write: (v) => JSON.stringify(v) },
  number: { read: (v) => Number.parseFloat(v), write: (v) => String(v) },
  any: { read: (v) => v, write: (v) => String(v) },
  string: { read: (v) => v, write: (v) => String(v) },
  map: {
    read: (v) => new Map(JSON.parse(v)),
    write: (v) => JSON.stringify(Array.from(v.entries()))
  },
  set: { read: (v) => new Set(JSON.parse(v)), write: (v) => JSON.stringify(Array.from(v)) },
  date: { read: (v) => new Date(v), write: (v) => v.toISOString() }
};
var guessSerializerType = (rawInit) => {
  if (rawInit == null) return "any";
  if (rawInit instanceof Set) return "set";
  if (rawInit instanceof Map) return "map";
  if (rawInit instanceof Date) return "date";
  if (typeof rawInit === "boolean") return "boolean";
  if (typeof rawInit === "string") return "string";
  if (typeof rawInit === "number") return "number";
  if (typeof rawInit === "object") return "object";
  return "any";
};
var useStorage = (key, defaults, storageType = "localStorage", options = {}) => {
  const { flush = "pre", deep = true, writeDefaults = true, mergeDefaults: mergeDefaults2 = false, initOnMounted } = options;
  const rawInit = toValue(defaults);
  const data = ref(rawInit);
  if (!isClient) return data;
  const type2 = guessSerializerType(rawInit);
  const serializer = StorageSerializers[type2];
  const keyComputed = computed(() => toValue(key));
  const storage2 = storageType === "localStorage" ? localStorage : sessionStorage;
  watch(keyComputed, () => update(), { flush });
  watch(data, () => write(data.value), { flush, deep });
  useMounted(() => {
    if (initOnMounted) update();
  });
  const dispatchWriteEvent = (oldValue, newValue) => {
    if (window) {
      const payload = { key: keyComputed.value, oldValue, newValue, storageArea: storage2 };
      window.dispatchEvent(new StorageEvent("storage", payload));
    }
  };
  const write = (val) => {
    const oldValue = storage2.getItem(keyComputed.value);
    if (val == null) {
      dispatchWriteEvent(oldValue, null);
      storage2.removeItem(keyComputed.value);
    } else {
      const serialized = serializer.write(val);
      if (oldValue !== serialized) {
        storage2.setItem(keyComputed.value, serialized);
        dispatchWriteEvent(oldValue, serialized);
      }
    }
  };
  const read = (event) => {
    const rawValue = event ? event.newValue : storage2.getItem(keyComputed.value);
    if (rawValue == null) {
      if (writeDefaults && rawInit != null) storage2.setItem(keyComputed.value, serializer.write(rawInit));
      return rawInit;
    }
    if (!event && mergeDefaults2) {
      const value = serializer.read(rawValue);
      if (typeof mergeDefaults2 === "function") return mergeDefaults2(value, rawInit);
      if (type2 === "object" && !Array.isArray(value)) return { ...rawInit, ...value };
      return value;
    }
    if (typeof rawValue !== "string") return rawValue;
    else return serializer.read(rawValue);
  };
  const update = (event) => {
    if (event && event.storageArea !== storage2) return;
    if (event && event.key == null) {
      data.value = rawInit;
      return;
    }
    if (event && event.key !== keyComputed.value) return;
    if ((event == null ? void 0 : event.newValue) !== serializer.write(data.value)) data.value = read(event);
  };
  if (!initOnMounted) update();
  useEventListener(() => window, "storage", update, { passive: true });
  return data;
};

// node_modules/vitepress-theme-teek/es/composables/useSwitchData.mjs
var useSwitchData = (dataList, options = {}) => {
  const {
    timeout = 4e3,
    shuffle = false,
    reloadWhenDataChanged = false,
    onBeforeUpdate,
    onUpdate,
    onAfterUpdate
  } = options;
  const dataListComputed = computed(() => toValue(dataList) || []);
  const data = ref(dataListComputed.value[0]);
  const index2 = ref(-1);
  let timer;
  const splitOutRandom = (dataList2) => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * dataList2.length);
    } while (newIndex === index2.value);
    index2.value = newIndex;
    return dataList2[newIndex];
  };
  const splitOutOrder = (dataList2) => {
    index2.value = (index2.value + 1) % dataList2.length;
    return dataList2[index2.value];
  };
  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  const startTimer = () => {
    clearTimer();
    if (timeout > 0) {
      timer = setTimeout(start, timeout);
    }
  };
  const start = () => {
    const dataListConst = dataListComputed.value;
    if (dataListConst.length < 1) return;
    if (dataListConst.length === 1) {
      data.value = dataListConst[0];
      return;
    }
    startTimer();
    let newValue;
    if (shuffle) newValue = splitOutRandom(dataListConst);
    else newValue = splitOutOrder(dataListConst);
    if (newValue === data.value) return;
    onBeforeUpdate == null ? void 0 : onBeforeUpdate(newValue);
    if (onUpdate) return onUpdate(data, newValue);
    data.value = newValue;
    onAfterUpdate == null ? void 0 : onAfterUpdate(newValue);
  };
  const stop = (restore = false) => {
    clearTimer();
    if (restore) index2.value = -1;
  };
  const restart = () => {
    stop(true);
    start();
  };
  if (reloadWhenDataChanged) watch(dataListComputed, () => restart());
  useScopeDispose(stop);
  return { data, index: index2, start, stop, restart };
};

// node_modules/vitepress-theme-teek/es/composables/useTextTypes.mjs
var useTextTypes = (data, options = {}) => {
  const { inputTime = 200, outputTime = 100, nextTime = 800, shuffle = false, reloadWhenDataChanged = false } = options;
  const dataComputed = computed(() => toValue(data) || []);
  const text = ref("");
  const isFinished = ref(false);
  let originText = "";
  let inputTimer;
  let outputTimer;
  let textIndex = 0;
  let dataIndex = 0;
  const clearInputTimer = () => {
    if (inputTimer) {
      clearInterval(inputTimer);
      inputTimer = null;
    }
  };
  const clearOutputTimer = () => {
    if (outputTimer) {
      clearInterval(outputTimer);
      outputTimer = null;
    }
  };
  const typesIn = () => {
    isFinished.value = false;
    originText = dataComputed.value[dataIndex];
    if (!originText) return stop();
    text.value = originText.substring(0, textIndex++);
    if (textIndex > originText.length) {
      clearInputTimer();
      isFinished.value = true;
      setTimeout(() => {
        outputTimer = setInterval(() => {
          typesOut();
        }, outputTime);
      }, nextTime);
    }
  };
  const typesOut = () => {
    if (textIndex >= 0) {
      isFinished.value = false;
      text.value = originText.substring(0, textIndex--);
    } else {
      clearOutputTimer();
      isFinished.value = true;
      setTimeout(() => {
        if (shuffle) {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * dataComputed.value.length);
          } while (newIndex === dataIndex);
          dataIndex = newIndex;
        } else {
          dataIndex = (dataIndex + 1) % dataComputed.value.length;
        }
        inputTimer = setInterval(() => {
          typesIn();
        }, inputTime);
      }, nextTime);
    }
  };
  const start = () => {
    isFinished.value = false;
    inputTimer = setInterval(() => {
      typesIn();
    }, inputTime);
  };
  const stop = (restore = false) => {
    clearInputTimer();
    clearOutputTimer();
    isFinished.value = false;
    if (restore) {
      text.value = "";
      originText = "";
      textIndex = 0;
      dataIndex = 0;
    }
  };
  const restart = () => {
    stop(true);
    start();
  };
  if (reloadWhenDataChanged) watch(dataComputed, () => restart());
  useScopeDispose(stop);
  return { text, isFinished, start, stop, restart };
};

// node_modules/vitepress-theme-teek/es/composables/useThemeColor.mjs
import { useData as useData2 } from "vitepress";
var vpIndigo1 = "--vp-c-indigo-1";
var vpIndigo2 = "--vp-c-indigo-2";
var vpIndigo3 = "--vp-c-indigo-3";
var vpIndigoSoft = "--vp-c-indigo-soft";
var vpBg = "--vp-c-bg";
var vpBgAlt = "--vp-c-bg-alt";
var vpBgSoft = "--vp-c-bg-soft";
var vpBgElv = "--vp-c-bg-elv";
var vpText1 = "--vp-c-text-1";
var vpText2 = "--vp-c-text-2";
var vpText3 = "--vp-c-text-3";
var tkBgColorElm = "--tk-bg-color-elm";
var tkBgColorMute = "--tk-bg-color-mute";
var varNameList = {
  vpIndigo1,
  vpIndigo2,
  vpIndigo3,
  vpIndigoSoft,
  vpBg,
  vpBgAlt,
  vpBgSoft,
  vpBgElv,
  vpText1,
  vpText2,
  vpText3,
  tkBgColorElm,
  tkBgColorMute
};
var useThemeColor = (color, ignoreList) => {
  const { isDark } = useData2();
  const ignoreListConst = isFunction(ignoreList) ? ignoreList() : ignoreList || [];
  const setStyleVar = (key, value) => {
    if (!isClient) return;
    document.documentElement.style.setProperty(key, value);
  };
  const removeStyleVar = (key) => {
    if (!isClient) return;
    document.documentElement.style.removeProperty(key);
  };
  const colorComputed = computed(() => toValue(color));
  const clear = () => {
    Object.values(varNameList).forEach((key) => {
      removeStyleVar(key);
    });
  };
  const switchLight = () => {
    if (!isClient) return;
    const primary = colorComputed.value;
    if (!primary) return;
    const lightVarMap = {
      [vpIndigo1]: primary,
      [vpIndigo2]: getLightColor(primary, 0.1),
      [vpIndigo3]: getLightColor(primary, 0.2),
      [vpIndigoSoft]: getLightColor(primary, 0.85),
      [vpBg]: getLightColor(primary, 0.96),
      [vpBgAlt]: getLightColor(primary, 0.93),
      [vpBgElv]: getLightColor(primary, 0.945),
      [vpBgSoft]: getLightColor(primary, 0.93),
      [vpText1]: getDarkColor(primary, 0.6),
      [vpText2]: getDarkColor(primary, 0.7),
      [vpText3]: getLightColor(primary, 0.6),
      [tkBgColorElm]: getLightColor(primary, 0.945),
      [tkBgColorMute]: getLightColor(primary, 0.91)
    };
    Object.keys(lightVarMap).forEach((key) => {
      if (ignoreListConst == null ? void 0 : ignoreListConst.includes(key)) return;
      setStyleVar(key, lightVarMap[key]);
    });
  };
  const switchDark = () => {
    if (!isClient) return;
    const primary = colorComputed.value;
    if (!primary) return;
    const darkVarMap = {
      [vpIndigo1]: primary,
      [vpIndigo2]: getDarkColor(primary, 0.1),
      [vpIndigo3]: getDarkColor(primary, 0.2),
      [vpIndigoSoft]: getDarkColor(primary, 0.85),
      [vpBg]: getDarkColor(primary, 0.92),
      [vpBgAlt]: getDarkColor(primary, 0.94),
      [vpBgElv]: getDarkColor(primary, 0.92),
      [vpBgSoft]: getDarkColor(primary, 0.94),
      [vpText1]: getLightColor(primary, 0.9),
      [tkBgColorElm]: getDarkColor(primary, 0.92),
      [tkBgColorMute]: getDarkColor(primary, 0.91)
    };
    Object.keys(darkVarMap).forEach((key) => {
      if (ignoreListConst == null ? void 0 : ignoreListConst.includes(key)) return;
      setStyleVar(key, darkVarMap[key]);
    });
  };
  const isStop = shallowRef(false);
  let stopWatch = null;
  const update = () => {
    if (isStop.value) return;
    clear();
    if (isDark.value) switchDark();
    else switchLight();
  };
  const start = () => {
    if (!isStop.value || !!stopWatch) return;
    isStop.value = false;
    update();
    stopWatch = watch(isDark, update, { flush: "post" });
  };
  const stop = () => {
    stopWatch == null ? void 0 : stopWatch();
    stopWatch = null;
    isStop.value = true;
    clear();
  };
  start();
  watch(colorComputed, update);
  return { start, stop, update, clear };
};

// node_modules/vitepress-theme-teek/es/composables/useViewTransition.mjs
import { useData as useData3 } from "vitepress";
var useViewTransition = (duration = 300, easing = "ease-in") => {
  const { isDark, theme } = useData3();
  const isOpenViewTransition = theme.value.viewTransition ?? true;
  if (!isOpenViewTransition) return;
  const enableTransitions = () => "startViewTransition" in document && window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
  provide("toggle-appearance", async ({ clientX: x, clientY: y }) => {
    if (!enableTransitions()) {
      isDark.value = !isDark.value;
      return;
    }
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))}px at ${x}px ${y}px)`
    ];
    await document.startViewTransition(async () => {
      isDark.value = !isDark.value;
      await nextTick();
    }).ready;
    document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration,
        easing,
        pseudoElement: `::view-transition-${isDark.value ? "old" : "new"}(root)`
      }
    );
  });
};

// node_modules/vitepress-theme-teek/es/composables/useVpRouter.mjs
import { useRouter } from "vitepress";
var useVpRouter = () => {
  const router = useRouter();
  const bindBeforeRouteChange = (stateFlag, bindFn, bindPosition = "after") => {
    const { state = {}, onBeforeRouteChange } = router;
    if (state[stateFlag]) return;
    const beforeFn = bindPosition === "before" ? bindFn : onBeforeRouteChange;
    const afterFn = bindPosition === "after" ? bindFn : onBeforeRouteChange;
    router.onBeforeRouteChange = (href) => {
      const res = beforeFn == null ? void 0 : beforeFn(href);
      if (res === false) return false;
      return afterFn == null ? void 0 : afterFn(href);
    };
    router.state = { ...state, [stateFlag]: true };
  };
  const bindBeforePageLoad = (stateFlag, bindFn, bindPosition = "after") => {
    const { state = {}, onBeforePageLoad } = router;
    if (state[stateFlag]) return;
    const beforeFn = bindPosition === "before" ? bindFn : onBeforePageLoad;
    const afterFn = bindPosition === "after" ? bindFn : onBeforePageLoad;
    router.onBeforePageLoad = (href) => {
      const res = beforeFn == null ? void 0 : beforeFn(href);
      if (res === false) return false;
      return afterFn == null ? void 0 : afterFn(href);
    };
    router.state = { ...state, [stateFlag]: true };
  };
  const bindAfterPageLoad = (stateFlag, bindFn, bindPosition = "after") => {
    const { state = {}, onAfterPageLoad } = router;
    if (state[stateFlag]) return;
    const beforeFn = bindPosition === "before" ? bindFn : onAfterPageLoad;
    const afterFn = bindPosition === "after" ? bindFn : onAfterPageLoad;
    router.onAfterPageLoad = (href) => {
      beforeFn == null ? void 0 : beforeFn(href);
      afterFn == null ? void 0 : afterFn(href);
    };
    router.state = { ...state, [stateFlag]: true };
  };
  const bindAfterRouteChange = (stateFlag, bindFn, bindPosition = "after") => {
    const { state = {}, onAfterRouteChange } = router;
    if (state[stateFlag]) return;
    const beforeFn = bindPosition === "before" ? bindFn : onAfterRouteChange;
    const afterFn = bindPosition === "after" ? bindFn : onAfterRouteChange;
    router.onAfterRouteChange = (href) => {
      beforeFn == null ? void 0 : beforeFn(href);
      afterFn == null ? void 0 : afterFn(href);
    };
    router.state = { ...state, [stateFlag]: true };
  };
  const bindRouterFn = (stateFlag, bindFn) => {
    const { state = {} } = router;
    if (state[stateFlag]) return;
    bindFn(router);
    router.state = { ...state, [stateFlag]: true };
  };
  return {
    router,
    route: router.route,
    bindBeforeRouteChange,
    bindBeforePageLoad,
    bindAfterPageLoad,
    bindAfterRouteChange,
    bindRouterFn
  };
};

// node_modules/vitepress-theme-teek/es/composables/useZIndex.mjs
var initial = {
  current: 0
};
var zIndex = ref(0);
var defaultInitialZIndex = 2e3;
var Z_INDEX_INJECTION_KEY = Symbol("tkZIndexContextKey");
var zIndexContextKey = Symbol("zIndexContextKey");
var useZIndex = (zIndexOverrides) => {
  const increasingInjection = getCurrentInstance() ? inject(Z_INDEX_INJECTION_KEY, initial) : initial;
  const zIndexInjection = zIndexOverrides || (getCurrentInstance() ? inject(zIndexContextKey, void 0) : void 0);
  const initialZIndex = computed(() => {
    const zIndexFromInjection = zIndexInjection == null ? void 0 : zIndexInjection.value;
    return isNumber(zIndexFromInjection) ? zIndexFromInjection : defaultInitialZIndex;
  });
  const currentZIndex = computed(() => initialZIndex.value + zIndex.value);
  const nextZIndex = () => {
    increasingInjection.current++;
    zIndex.value = increasingInjection.current;
    return currentZIndex.value;
  };
  if (inject(Z_INDEX_INJECTION_KEY, void 0)) {
    console.warn(
      "ZIndexInjection",
      `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`
    );
  }
  return {
    initialZIndex,
    currentZIndex,
    nextZIndex
  };
};

// node_modules/vitepress-theme-teek/es/locale/lang/en.mjs
var en = {
  lang: "en-US",
  tk: {
    archives: {
      label: "Archive Page",
      title: "Archive",
      totalCount: "Total {count} articles",
      year: "Year",
      month: "Month",
      count: "Articles",
      notFound: "Not specified"
    },
    articleAnalyze: {
      label: "Article Analysis",
      wordCount: "Word Count",
      readingTime: "Estimated Reading Time",
      pageView: "Page Views"
    },
    articleAppreciation: {
      label: "Article Appreciation",
      contentLabel: "Appreciation Method"
    },
    articleBreadcrumb: {
      label: "Article Breadcrumb",
      home: "Home"
    },
    breadcrumb: {
      label: "Breadcrumb"
    },
    articleInfo: {
      label: "Article Information",
      author: "Author",
      createTime: "Create Time",
      updateTime: "Update Time",
      category: "Category",
      tag: "Tag"
    },
    articleOverview: {
      label: "Article Overview",
      overview: " Overview",
      category: " Category",
      name: "Category",
      title: "Title",
      date: "Publish Time",
      wordCount: "Word Count",
      readingTime: "Reading Time"
    },
    articleShare: {
      label: "Article Sharing",
      text: "Share this page",
      copiedText: "Link copied"
    },
    articleTitle: {
      label: "Article Title"
    },
    articleUpdate: {
      label: "Recent Update"
    },
    catalogue: {
      label: "Catalogue Page",
      title: "Table of Contents"
    },
    demoCode: {
      playground: "Edit in Playground",
      github: "Edit in GitHub",
      copy: "Copy Code",
      collapseSource: "View Source Code",
      expandSource: "Hide Source Code",
      notSupport: "Browser does not support copying",
      copySuccess: "Copy successful",
      copyFail: "Copy failed"
    },
    footerInfo: {
      label: "Footer Information",
      socialLabel: "Social Media",
      infoLabel: "Footer Content"
    },
    home: {
      label: "Home",
      postLabel: "Article List",
      cardLabel: "Sidebar Card Bar"
    },
    homeBanner: {
      label: "Home Banner",
      wavesLabel: "Home Banner Waves",
      bgImgLabel: "Home Banner Background Image",
      maskLabel: "Home Banner Mask Layer",
      bgPureLabel: "Home Banner Background Color",
      contentLabel: "Home Banner Content",
      titleLabel: "Home Banner Title",
      descLabel: "Home Banner Description",
      descSwitchLabel: "Dynamic Description Switching",
      descTypedLabel: "Typewriter Effect Description",
      featureLabel: "Home Banner Features"
    },
    homePost: {
      label: "Article List",
      emptyLabel: "No articles available",
      pageLabel: "Pagination Navigation",
      moreLabel: "Read More >",
      pin: "Sticky: {sticky}",
      pinLabel: "Sticky Mark",
      excerptLabel: "Article Summary",
      infoLabel: "Article Information",
      coverImgLabel: "Article Cover Image"
    },
    pageCard: {
      label: "Home Card",
      prev: "Previous Page",
      next: "Next Page"
    },
    categoryCard: {
      pageTitle: "{icon} All Categories",
      homeTitle: "{icon} Article Categories",
      label: "Home Category Card",
      emptyLabel: "No categories available",
      listLabel: "Category List",
      moreLabel: "More ..."
    },
    docAnalysisCard: {
      title: "{icon} Site Information",
      totalPosts: "Number of Articles",
      weekAddNum: "Added in the Last Week",
      monthAddNum: "Added in the Last Month",
      runtime: "Running Time",
      totalWordCount: "Total Word Count",
      lastActiveTime: "Last Activity Time",
      viewCount: "This site has been visited",
      visitCount: "This site has had visitors",
      fileUnit: "Articles",
      runtimeLess: "Less than a day",
      runtimeUnit: "Days",
      wordCountUnit: "Words",
      viewCountUnit: "Times",
      visitCountUnit: "People",
      label: "Home Site Analysis Card"
    },
    friendLinkCard: {
      title: "{icon} Friend Links",
      emptyLabel: "No friend links available",
      label: "Home Friend Link Card",
      listLabel: "Friend Link List"
    },
    myCard: {
      label: "My Information Card",
      avatarAlt: "Blogger Avatar",
      avatarTitle: "Do I look good?",
      socialLabel: "Social Links",
      bloggerLabel: "Blogger Information"
    },
    tagCard: {
      pageTitle: "{icon} All Tags",
      homeTitle: "{icon} Popular Tags",
      label: "Home Tag Card",
      emptyLabel: "No tags available",
      listLabel: "Tag List",
      moreLabel: "More ..."
    },
    topArticleCard: {
      title: "{icon} Featured Articles",
      label: "Home Featured Article Card",
      emptyLabel: "No featured articles available",
      listLabel: "Featured Article List"
    },
    image: {
      error: "Failed to load"
    },
    notice: {
      label: "Announcement Bar",
      title: "Announcement",
      openLabel: "Open Announcement Popup",
      closeLabel: "Close Announcement Popup",
      headLabel: "Announcement Header Area",
      contentLabel: "Announcement Content"
    },
    pagination: {
      goto: "Go to",
      pagesize: "Items/Page",
      total: "Total {total} items",
      pageClassifier: "Page",
      page: "Page",
      prev: "Previous Page",
      next: "Next Page",
      currentPage: "Page {pager}",
      prevPages: "Previous {pager} Pages",
      nextPages: "Next {pager} Pages"
    },
    rightBottomButton: {
      backTopTitle: "Back to Top",
      themeSizeTitle: "Theme Size Switch",
      themeStyleTitle: "Theme Style Switch",
      toComment: "Go to Comment"
    },
    themeEnhance: {
      title: "Theme Enhancement",
      layoutSwitch: {
        title: "Layout Switch",
        helpDesc: "Adjust VitePress layout styles to adapt to different reading habits and screen environments.",
        fullWidthTipTitle: "Full Width",
        fullWidthHelpTipContent: "Make the sidebar and content area occupy the full width of the screen.",
        sidebarWidthAdjustableOnlyTipTitle: "Full Width, but Sidebar Width Adjustable",
        sidebarWidthAdjustableOnlyHelpTipContent: "The sidebar width is adjustable, but the content area width remains unchanged. The adjusted sidebar can occupy the maximum width of the screen.",
        bothWidthAdjustableTipTitle: "Full Width, and Both Sidebar and Content Area Widths Adjustable",
        bothWidthAdjustableHelpTipContent: "Both the sidebar and content area widths are adjustable. The adjusted sidebar and content area can occupy the maximum width of the screen.",
        originalWidthTipTitle: "Original Width",
        originalWidthHelpTipContent: "The original default VitePress layout width."
      },
      docLayoutMaxWidth: {
        title: "Document Content Maximum Width",
        helpDesc: "Adjust the width of the document content area in the VitePress layout to adapt to different reading habits and screen environments.",
        helpTipTitle: "Adjust Document Content Maximum Width",
        helpTipContent: "A slider to select and customize the maximum width of the document content."
      },
      pageLayoutMaxWidth: {
        title: "Page Maximum Width",
        helpDesc: "Adjust the width of the page in the VitePress layout to adapt to different reading habits and screen environments.",
        helpTipTitle: "Adjust Page Maximum Width",
        helpTipContent: "A slider to select and customize the maximum width of the page."
      },
      themeColor: {
        title: "Layout Theme Color",
        speedLabel: "Speed",
        vpLabel: "VP Theme",
        epLabel: "EP Theme",
        vpTip: "VitePress Theme",
        epTip: "ElementPlus Theme",
        defaultLabel: "Default",
        blueLabel: "Blue",
        greenLabel: "Green",
        yellowLabel: "Yellow",
        redLabel: "Red",
        helpDesc: "Provide VitePress base color palette and ElementPlus base color palette for selection. The theme color can be diffused to other elements such as sidebar background color, font color, etc. through the diffusion switch.",
        vpHelpTipTitle: "VitePress Base Color Palette",
        vpHelpTipContent: "Provides 4 VitePress base color palettes: Blue (default), Green, Yellow, Red.",
        epHelpTipTitle: "ElementPlus Base Color Palette",
        epHelpTipContent: "Provides 4 ElementPlus base color palettes: Blue, Green, Yellow, Red."
      },
      spotlight: {
        title: "Spotlight",
        helpDesc: "Highlight the current line or element under the mouse pointer in the main text to optimize the reading experience for users with focus difficulties.",
        onTipTitle: "Enable",
        onHelpTipContent: "Turn on the spotlight.",
        offTipTitle: "Disable",
        offHelpTipContent: "Turn off the spotlight."
      },
      spotlightStyles: {
        title: "Spotlight Styles",
        helpDesc: "Adjust the style of the spotlight.",
        asideTipTitle: "Place Aside",
        asideHelpTipContent: "Add a fixed solid line next to the current element under the mouse pointer to highlight its position.",
        underTipTitle: "Place Under",
        underHelpTipContent: "Add a solid background below the current element under the mouse pointer to highlight its position."
      }
    },
    login: {
      label: "Login Page",
      reset: "Reset",
      login: "Login",
      loginSuccess: "Login succeeded!",
      loginError: "Username or password incorrect!",
      loginInfoNull: "Please input your username and password!",
      usernamePlaceholder: "Please input a username",
      passwordPlaceholder: "Please input a password",
      verifyCodePlaceholder: "Please input the verification code",
      verifyCodeNonNull: "Please input the verification code",
      verifyCodeError: "Please input the correct verification code"
    },
    riskLink: {
      label: "Risk Link Page",
      title: "Leaving {name} soon, please pay attention to property safety",
      linkIllegal: "Link security verification in progress, please wait ...",
      confirmButtonText: "Continue to visit"
    }
  }
};

// node_modules/markdown-it-container/index.mjs
function container_plugin(md, name, options) {
  function validateDefault(params) {
    return params.trim().split(" ", 2)[0] === name;
  }
  function renderDefault(tokens, idx, _options, env, slf) {
    if (tokens[idx].nesting === 1) {
      tokens[idx].attrJoin("class", name);
    }
    return slf.renderToken(tokens, idx, _options, env, slf);
  }
  options = options || {};
  const min_markers = 3;
  const marker_str = options.marker || ":";
  const marker_char = marker_str.charCodeAt(0);
  const marker_len = marker_str.length;
  const validate = options.validate || validateDefault;
  const render3 = options.render || renderDefault;
  function container(state, startLine, endLine, silent) {
    let pos;
    let auto_closed = false;
    let start = state.bMarks[startLine] + state.tShift[startLine];
    let max = state.eMarks[startLine];
    if (marker_char !== state.src.charCodeAt(start)) {
      return false;
    }
    for (pos = start + 1; pos <= max; pos++) {
      if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
        break;
      }
    }
    const marker_count = Math.floor((pos - start) / marker_len);
    if (marker_count < min_markers) {
      return false;
    }
    pos -= (pos - start) % marker_len;
    const markup = state.src.slice(start, pos);
    const params = state.src.slice(pos, max);
    if (!validate(params, markup)) {
      return false;
    }
    if (silent) {
      return true;
    }
    let nextLine = startLine;
    for (; ; ) {
      nextLine++;
      if (nextLine >= endLine) {
        break;
      }
      start = state.bMarks[nextLine] + state.tShift[nextLine];
      max = state.eMarks[nextLine];
      if (start < max && state.sCount[nextLine] < state.blkIndent) {
        break;
      }
      if (marker_char !== state.src.charCodeAt(start)) {
        continue;
      }
      if (state.sCount[nextLine] - state.blkIndent >= 4) {
        continue;
      }
      for (pos = start + 1; pos <= max; pos++) {
        if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
          break;
        }
      }
      if (Math.floor((pos - start) / marker_len) < marker_count) {
        continue;
      }
      pos -= (pos - start) % marker_len;
      pos = state.skipSpaces(pos);
      if (pos < max) {
        continue;
      }
      auto_closed = true;
      break;
    }
    const old_parent = state.parentType;
    const old_line_max = state.lineMax;
    state.parentType = "container";
    state.lineMax = nextLine;
    const token_o = state.push("container_" + name + "_open", "div", 1);
    token_o.markup = markup;
    token_o.block = true;
    token_o.info = params;
    token_o.map = [startLine, nextLine];
    state.md.block.tokenize(state, startLine + 1, nextLine);
    const token_c = state.push("container_" + name + "_close", "div", -1);
    token_c.markup = state.src.slice(start, pos);
    token_c.block = true;
    state.parentType = old_parent;
    state.lineMax = old_line_max;
    state.line = nextLine + (auto_closed ? 1 : 0);
    return true;
  }
  md.block.ruler.before("fence", "container_" + name, container, {
    alt: ["paragraph", "reference", "blockquote", "list"]
  });
  md.renderer.rules["container_" + name + "_open"] = render3;
  md.renderer.rules["container_" + name + "_close"] = render3;
}

// node_modules/vitepress-theme-teek/es/markdown/helper/simpleContainer.mjs
var createContainerThenUse = (md, option) => {
  md.use(...createContainerThenGet(md, option));
};
var createContainerThenGet = (md, option) => {
  const { type: type2, useTitle, defaultTitle, className } = option;
  return [
    container_plugin,
    type2,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info.trim().slice(type2.length).trim();
        if (token.nesting === 1) {
          const title = useTitle ? md.renderInline(info || defaultTitle || "") : "";
          return `<div class="${type2} ${className}">${useTitle ? `<p class="title ${type2}-title ${className ? `${className}-title` : ""}">${title}</p>` : ""}
`;
        } else return `</div>
`;
      }
    }
  ];
};
var createContainersThenUse = (md, options) => {
  options.forEach((option) => {
    md.use(...createContainerThenGet(md, option));
  });
};
var createContainersThenGet = (md, options) => {
  const containers = [];
  options.forEach((option) => {
    containers.push(createContainerThenGet(md, option));
  });
  return containers;
};

// node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject3(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];
  return [sequence];
}
function extend2(target, source) {
  var index2, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index2 = 0, length = sourceKeys.length; index2 < length; index2 += 1) {
      key = sourceKeys[index2];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject3;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend2;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message2 = exception2.reason || "(unknown reason)";
  if (!exception2.mark) return message2;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message2 + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "→") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer) return null;
  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent !== "number") options.indent = 1;
  if (typeof options.linesBefore !== "number") options.linesBefore = 3;
  if (typeof options.linesAfter !== "number") options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data) {
    return data;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index2, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index2 = 0, length = arguments.length; index2 < length; index2 += 1) {
    arguments[index2].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend3(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data) {
    return data !== null ? data : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data) {
    return data !== null ? data : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data) {
    return data !== null ? data : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data) {
  if (data === null) return true;
  var max = data.length;
  return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull2(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull2,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data) {
  if (data === null) return false;
  var max = data.length;
  return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
}
function constructYamlBoolean(data) {
  return data === "true" || data === "True" || data === "TRUE";
}
function isBoolean2(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean2,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data) {
  if (data === null) return false;
  var max = data.length, index2 = 0, hasDigits = false, ch;
  if (!max) return false;
  ch = data[index2];
  if (ch === "-" || ch === "+") {
    ch = data[++index2];
  }
  if (ch === "0") {
    if (index2 + 1 === max) return true;
    ch = data[++index2];
    if (ch === "b") {
      index2++;
      for (; index2 < max; index2++) {
        ch = data[index2];
        if (ch === "_") continue;
        if (ch !== "0" && ch !== "1") return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index2++;
      for (; index2 < max; index2++) {
        ch = data[index2];
        if (ch === "_") continue;
        if (!isHexCode(data.charCodeAt(index2))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index2++;
      for (; index2 < max; index2++) {
        ch = data[index2];
        if (ch === "_") continue;
        if (!isOctCode(data.charCodeAt(index2))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_") return false;
  for (; index2 < max; index2++) {
    ch = data[index2];
    if (ch === "_") continue;
    if (!isDecCode(data.charCodeAt(index2))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_") return false;
  return true;
}
function constructYamlInteger(data) {
  var value = data, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-") sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0") return 0;
  if (ch === "0") {
    if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data) {
  if (data === null) return false;
  if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data[data.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data) {
  var value, sign;
  value = data.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data) {
  if (data === null) return false;
  if (YAML_DATE_REGEXP.exec(data) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
  return false;
}
function constructYamlTimestamp(data) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
  if (match === null) throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-") delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data) {
  return data === "<<" || data === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data) {
  if (data === null) return false;
  var code, idx, bitlen = 0, max = data.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map2.indexOf(data.charAt(idx));
    if (code > 64) continue;
    if (code < 0) return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data) {
  var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data) {
  if (data === null) return true;
  var objectKeys = [], index2, length, pair, pairKey, pairHasKey, object = data;
  for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
    pair = object[index2];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]") return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }
    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }
  return true;
}
function constructYamlOmap(data) {
  return data !== null ? data : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data) {
  if (data === null) return true;
  var index2, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
    pair = object[index2];
    if (_toString$1.call(pair) !== "[object Object]") return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index2] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data) {
  if (data === null) return [];
  var index2, length, pair, keys, result, object = data;
  result = new Array(object.length);
  for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
    pair = object[index2];
    keys = Object.keys(pair);
    result[index2] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data) {
  if (data === null) return true;
  var key, object = data;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }
  return true;
}
function constructYamlSet(data) {
  return data !== null ? data : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "" : c === 95 ? " " : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message2) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message2, mark);
}
function throwError(state, message2) {
  throw generateError(state, message2);
}
function throwWarning(state, message2) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message2));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index2, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index2 = 0, quantity = sourceKeys.length; index2 < quantity; index2 += 1) {
    key = sourceKeys[index2];
    if (!_hasOwnProperty$1.call(destination, key)) {
      destination[key] = source[key];
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index2, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index2 = 0, quantity = keyNode.length; index2 < quantity; index2 += 1) {
      if (Array.isArray(keyNode[index2])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index2]) === "[object Object]") {
        keyNode[index2] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index2 = 0, quantity = valueNode.length; index2 < quantity; index2 += 1) {
        mergeMappings(state, _result, valueNode[index2], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    if (keyNode === "__proto__") {
      Object.defineProperty(_result, keyNode, {
        configurable: true,
        enumerable: true,
        writable: true,
        value: valueNode
      });
    } else {
      _result[keyNode] = valueNode;
    }
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat("\n", emptyLines);
      }
    } else {
      state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33) return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38) return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0) readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index2 = 0, length = documents.length; index2 < length; index2 += 1) {
    iterator(documents[index2]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
  var result, keys, index2, length, tag, style, type2;
  if (map2 === null) return {};
  result = {};
  keys = Object.keys(map2);
  for (index2 = 0, length = keys.length; index2 < length; index2 += 1) {
    tag = keys[index2];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf("\n", position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== "\n") result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index2, length, type2;
  for (index2 = 0, length = state.implicitTypes.length; index2 < length; index2 += 1) {
    type2 = state.implicitTypes[index2];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    (inblock ? (
      // c = flow-in
      cIsNsCharOrWhitespace
    ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
  );
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(
      string,
      singleLineOnly,
      state.indent,
      lineWidth,
      testAmbiguity,
      state.quotingType,
      state.forceQuotes && !iskey,
      inblock
    )) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  }();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === "\n";
  var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string) {
  return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = function() {
    var nextLF = string.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  }();
  var prevMoreIndented = string[0] === "\n" || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ") return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += "\n" + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 65536) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index2, length, value;
  for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
    value = object[index2];
    if (state.replacer) {
      value = state.replacer.call(object, String(index2), value);
    }
    if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index2, length, value;
  for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
    value = object[index2];
    if (state.replacer) {
      value = state.replacer.call(object, String(index2), value);
    }
    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index2, length, objectKey, objectValue, pairBuffer;
  for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
    pairBuffer = "";
    if (_result !== "") pairBuffer += ", ";
    if (state.condenseFlow) pairBuffer += '"';
    objectKey = objectKeyList[index2];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024) pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index2, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index2];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index2, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index2 = 0, length = typeList.length; index2 < length; index2 += 1) {
    type2 = typeList[index2];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(
        state.tag[0] === "!" ? state.tag.slice(1) : state.tag
      ).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index2, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index2 = 0, length = duplicatesIndexes.length; index2 < length; index2 += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index2]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index2, length;
  if (object !== null && typeof object === "object") {
    index2 = objects.indexOf(object);
    if (index2 !== -1) {
      if (duplicatesIndexes.indexOf(index2) === -1) {
        duplicatesIndexes.push(index2);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index2 = 0, length = object.length; index2 < length; index2 += 1) {
          inspectNode(object[index2], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index2 = 0, length = objectKeyList.length; index2 < length; index2 += 1) {
          inspectNode(object[objectKeyList[index2]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs) getDuplicateReferences(input, state);
  var value = input;
  if (state.replacer) {
    value = state.replacer.call({ "": value }, "", value);
  }
  if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
  };
}
var Type = type;
var Schema = schema;
var FAILSAFE_SCHEMA = failsafe;
var JSON_SCHEMA = json;
var CORE_SCHEMA = core;
var DEFAULT_SCHEMA = _default;
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var YAMLException = exception;
var types = {
  binary,
  float,
  map,
  null: _null,
  pairs,
  set,
  timestamp,
  bool,
  int,
  merge,
  omap,
  seq,
  str
};
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");
var jsYaml = {
  Type,
  Schema,
  FAILSAFE_SCHEMA,
  JSON_SCHEMA,
  CORE_SCHEMA,
  DEFAULT_SCHEMA,
  load,
  loadAll,
  dump,
  YAMLException,
  types,
  safeLoad,
  safeLoadAll,
  safeDump
};
var js_yaml_default = jsYaml;

// node_modules/vitepress-theme-teek/es/markdown/helper/cardContainer.mjs
var createCardContainers = (md, option) => {
  option.forEach((item) => createCardContainer(md, item));
};
var createCardContainer = (md, option) => {
  const { type: type2, className, beforeHtmlRender, htmlRender, afterHtmlRender, transformHtml } = option;
  md.use(container_plugin, type2, {});
  md.renderer.rules[`container_${type2}_open`] = (tokens, idx) => {
    const containerToken = tokens[idx];
    let html = `<div class="${className || `${type2}-container`}">`;
    for (let i = idx; i < tokens.length; i++) {
      const token = tokens[i];
      if (token.type === `container_${type2}_close`) break;
      if (!["yaml", "yml"].includes(token.info)) continue;
      const yamlContent = js_yaml_default.load(token.content.trim());
      let data = [];
      let config = {};
      if (Array.isArray(yamlContent)) data = yamlContent;
      else {
        data = yamlContent.data || [];
        config = yamlContent.config || {};
      }
      const info = containerToken.info.trim().slice(type2.length).trim();
      const result = beforeHtmlRender == null ? void 0 : beforeHtmlRender({ data, config }, info, tokens, i);
      if (result === false) continue;
      html += htmlRender({ data, config }, info, tokens, i);
      afterHtmlRender == null ? void 0 : afterHtmlRender({ data, config }, info, tokens, i);
    }
    html = (transformHtml == null ? void 0 : transformHtml(html)) ?? html;
    return html;
  };
};

// node_modules/vitepress-theme-teek/es/version.mjs
var version = "1.3.5";

// node_modules/vitepress-theme-teek/es/components/theme/ConfigProvider/index.mjs
import { useData as useData4 } from "vitepress";

// node_modules/vitepress-theme-teek/es/config/post/helper.mjs
var emptyPost = {
  allPosts: [],
  originPosts: [],
  sortPostsByDateAndSticky: [],
  sortPostsByDate: [],
  groupPostsByYear: {},
  groupPostsByYearMonth: {},
  groupPosts: { categories: {}, tags: {} },
  groupCards: { categories: [], tags: [] },
  locales: {}
};

// node_modules/vitepress-theme-teek/es/components/theme/ConfigProvider/index.mjs
var postsContext = Symbol("posts");
var teekConfigContext = Symbol("teekConfig");
var TeekConfigProvider = (layout) => {
  return defineComponent({
    name: "TeekConfigProvider",
    setup(_, { slots }) {
      provide(postsContext, useAllPosts());
      useAnchorScroll().startWatch();
      useViewTransition();
      return () => h(layout, null, slots);
    }
  });
};
var useTeekConfig = () => {
  const { theme, frontmatter } = useData4();
  const teekConfigProvide = inject(teekConfigContext, {});
  const getTeekConfig = (key, defaultValue) => {
    var _a;
    let dv = defaultValue;
    if (isFunction(defaultValue)) dv = defaultValue();
    if (!key) {
      return { ...dv, ...theme.value, ...frontmatter.value, ...frontmatter.value.tk, ...unref(teekConfigProvide) };
    }
    const valueFromTheme = theme.value[key];
    const valueFromFrontmatter = ((_a = frontmatter.value.tk) == null ? void 0 : _a[key]) ?? frontmatter.value[key];
    const valueFromInject = unref(teekConfigProvide)[key];
    if (isObject2(valueFromTheme) || isObject2(valueFromFrontmatter) || isObject2(valueFromInject)) {
      return { ...dv, ...valueFromTheme, ...valueFromFrontmatter, ...valueFromInject };
    }
    return valueFromInject || valueFromFrontmatter || valueFromTheme || dv;
  };
  const getTeekConfigRef = (key, defaultValue) => {
    return computed(() => getTeekConfig(key, defaultValue));
  };
  return { getTeekConfig, getTeekConfigRef };
};
var usePageState = () => {
  const { frontmatter } = useData4();
  const isHomePage = computed(
    () => !isCategoriesPage.value && !isTagsPage.value && frontmatter.value.layout === "home"
  );
  const isCategoriesPage = computed(() => !!frontmatter.value.categoriesPage);
  const isTagsPage = computed(() => !!frontmatter.value.tagsPage);
  const isArchivesPage = computed(() => !!frontmatter.value.archivesPage);
  const isCataloguePage = computed(() => !!frontmatter.value.catalogue);
  const isArticleOverviewPage = computed(() => !!frontmatter.value.articleOverviewPage);
  const isLoginUrl = computed(() => !!frontmatter.value.loginPage);
  const isRiskLinkPage = computed(() => !!frontmatter.value.riskLinkPage);
  return {
    isHomePage,
    isCategoriesPage,
    isTagsPage,
    isArchivesPage,
    isCataloguePage,
    isArticleOverviewPage,
    isLoginUrl,
    isRiskLinkPage
  };
};
var usePagePath = () => {
  const { getTeekConfigRef } = useTeekConfig();
  const { localeIndex, site } = useData4();
  const posts = usePosts();
  const categoryConfig = getTeekConfigRef("category", { path: "/categories" });
  const tagConfig = getTeekConfigRef("tag", { path: "/tags" });
  const categoryPath = computed(() => {
    const localeIndexConst = localeIndex.value;
    const localeName = localeIndexConst !== "root" ? `/${localeIndexConst}` : "";
    return `${localeName}${categoryConfig.value.path}${site.value.cleanUrls ? "" : ".html"}`;
  });
  const tagPath = computed(() => {
    const localeIndexConst = localeIndex.value;
    const localeName = localeIndexConst !== "root" ? `/${localeIndexConst}` : "";
    return `${localeName}${tagConfig.value.path}${site.value.cleanUrls ? "" : ".html"}`;
  });
  const postPagePath = computed(() => {
    let archivesUrl = "";
    let articleOverviewUrl = "";
    let loginUrl = "";
    let riskLinkUrl = "";
    posts.value.allPosts.forEach((item) => {
      const {
        frontmatter: { layout, archivesPage, articleOverviewPage, loginPage, riskLinkPage },
        url
      } = item;
      const isPageLayout = layout === "page";
      if (layout === "TkCataloguePage" || isPageLayout && archivesPage === true) archivesUrl = url;
      if (layout === "TkArticleOverviewPage" || isPageLayout && articleOverviewPage === true) {
        articleOverviewUrl = url;
      }
      if (layout === false && loginPage === true) loginUrl = url;
      if (layout === false && riskLinkPage === true) riskLinkUrl = url;
    });
    return { archivesUrl, articleOverviewUrl, loginUrl, riskLinkUrl };
  });
  return {
    categoryPath,
    tagPath,
    archivesPath: computed(() => postPagePath.value.archivesUrl),
    articleOverviewPath: computed(() => postPagePath.value.articleOverviewUrl),
    loginPath: computed(() => postPagePath.value.loginUrl),
    riskLinkPath: computed(() => postPagePath.value.riskLinkUrl)
  };
};
var useAllPosts = () => {
  const { theme } = useData4();
  const posts = theme.value.posts;
  return posts || emptyPost;
};
var usePosts = () => {
  const { localeIndex } = useData4();
  const posts = useAllPosts();
  return computed(() => {
    var _a;
    return ((_a = posts.locales) == null ? void 0 : _a[localeIndex.value]) || posts;
  });
};
var useTagColor = () => {
  const { getTeekConfigRef } = useTeekConfig();
  return getTeekConfigRef("tagColor", [
    { border: "#bfdbfe", bg: "#eff6ff", text: "#2563eb" },
    { border: "#e9d5ff", bg: "#faf5ff", text: "#9333ea" },
    { border: "#fbcfe8", bg: "#fdf2f8", text: "#db2777" },
    { border: "#a7f3d0", bg: "#ecfdf5", text: "#059669" },
    { border: "#fde68a", bg: "#fffbeb", text: "#d97706" },
    { border: "#a5f3fc", bg: "#ecfeff", text: "#0891b2" },
    { border: "#c7d2fe", bg: "#eef2ff", text: "#4f46e5" }
  ]);
};

// node_modules/vitepress-theme-teek/es/components/theme/CataloguePage/src/index.vue2.mjs
import { useData as useData6 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/components/DocAsideOutline.vue2.mjs
import { useData as useData5, onContentUpdated } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/components/outline.mjs
import { getScrollOffset } from "vitepress";
var ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
var resolvedHeaders = [];
function resolveTitle(theme) {
  return typeof theme.outline === "object" && !Array.isArray(theme.outline) && theme.outline.label || "On this page";
}
function getHeaders(range) {
  const ns4 = useNamespace();
  const headers = [...document.querySelectorAll(`.${ns4.joinNamespace("article-page")} :where(h1,h2,h3,h4,h5,h6)`)].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className)) continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
var useActiveAnchor = (container, marker) => {
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const onScroll = useDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!is1280.value) return;
    const scrollY = window.scrollY;
    const innerHeight2 = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight2 - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link }) => ({
      link,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) break;
      activeLink = link;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) prevActiveLink.classList.remove("active");
    if (hash == null) prevActiveLink = null;
    else prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
};
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack2 = [];
  data.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack2[stack2.length - 1];
    while (parent && parent.level >= node.level) {
      stack2.pop();
      parent = stack2[stack2.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack2.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min) return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent) parent.children.push(node);
    else result.push(node);
    stack2.push(node);
  });
  return result;
}

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/components/DocAsideOutlineItem.vue2.mjs
import "vitepress";
var _hoisted_1 = ["href", "title"];
var _sfc_main = defineComponent({
  ...{ name: "DocAsideOutlineItem" },
  __name: "DocAsideOutlineItem",
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    const ns4 = useNamespace("aside-outline-item");
    function onClick({ target: el }) {
      const id = el.href.split("#")[1];
      const heading = document.getElementById(decodeURIComponent(id));
      heading == null ? void 0 : heading.focus({ preventScroll: true });
    }
    return (_ctx, _cache) => {
      const _component_DocAsideOutlineItem = resolveComponent("DocAsideOutlineItem", true);
      return openBlock(), createElementBlock(
        "ul",
        {
          class: normalizeClass([unref(ns4).b(), _ctx.root ? unref(ns4).is("root") : unref(ns4).is("nested")])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.headers, ({ children, link, title }) => {
              return openBlock(), createElementBlock("li", { key: link }, [
                createBaseVNode("a", {
                  class: normalizeClass(unref(ns4).m("link")),
                  href: link,
                  onClick,
                  title
                }, toDisplayString(title), 11, _hoisted_1),
                (children == null ? void 0 : children.length) ? (openBlock(), createBlock(_component_DocAsideOutlineItem, {
                  key: 0,
                  headers: children
                }, null, 8, ["headers"])) : createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/components/DocAsideOutline.vue2.mjs
var _sfc_main2 = defineComponent({
  ...{ name: "DocAsideOutline" },
  __name: "DocAsideOutline",
  setup(__props) {
    const ns4 = useNamespace("aside-outline");
    const { frontmatter, theme } = useData5();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    onMounted(() => {
      var _a;
      if (!((_a = headers.value) == null ? void 0 : _a.length)) headers.value = getHeaders(frontmatter.value.outline ?? theme.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "nav",
        {
          "aria-labelledby": "doc-outline-aria-label",
          class: normalizeClass([unref(ns4).b(), { "has-outline": headers.value.length > 0 }]),
          ref_key: "container",
          ref: container
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns4).e("content"))
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns4).m("marker")),
                  ref_key: "marker",
                  ref: marker
                },
                null,
                2
                /* CLASS */
              ),
              createBaseVNode(
                "div",
                {
                  id: "doc-outline-aria-label",
                  "aria-level": "2",
                  class: normalizeClass(unref(ns4).m("title")),
                  role: "heading"
                },
                toDisplayString(unref(resolveTitle)(unref(theme))),
                3
                /* TEXT, CLASS */
              ),
              createVNode(_sfc_main, {
                headers: headers.value,
                root: true
              }, null, 8, ["headers"])
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/ArticlePage/src/index.vue2.mjs
var _sfc_main3 = defineComponent({
  ...{ name: "ArticlePage" },
  __name: "index",
  props: {
    doc: { type: Boolean },
    aside: { type: Boolean }
  },
  setup(__props) {
    const ns4 = useNamespace("article-page");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).is("aside", _ctx.aside)])
        },
        [
          _ctx.aside ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(ns4).e("aside"))
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns4).e("aside__container"))
                },
                [
                  createVNode(_sfc_main2)
                ],
                2
                /* CLASS */
              )
            ],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns4).joinNamespace("doc"), { "vp-doc": _ctx.doc }])
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CataloguePage/src/CatalogueItem.vue2.mjs
import { withBase as withBase2 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/TitleTag/src/index.vue2.mjs
import "vitepress";
var _sfc_main4 = defineComponent({
  ...{ name: "TitleTag" },
  __name: "index",
  props: {
    text: {},
    type: {},
    position: {},
    size: {}
  },
  setup(__props) {
    const ns4 = useNamespace("title-tag");
    return (_ctx, _cache) => {
      return _ctx.text || _ctx.$slots.default ? (openBlock(), createElementBlock(
        "span",
        {
          key: 0,
          class: normalizeClass([unref(ns4).b(), _ctx.type && unref(ns4).m(_ctx.type), _ctx.position && unref(ns4).m(_ctx.position), _ctx.size && unref(ns4).m(_ctx.size)])
        },
        [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(
              toDisplayString(_ctx.text),
              1
              /* TEXT */
            )
          ])
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CataloguePage/src/CatalogueItem.vue2.mjs
var _hoisted_12 = ["href", "aria-label"];
var _hoisted_2 = ["innerHTML"];
var _hoisted_3 = ["id", "aria-labelledby"];
var _hoisted_4 = ["href", "aria-label"];
var _hoisted_5 = ["id"];
var _hoisted_6 = ["aria-label"];
var _sfc_main5 = defineComponent({
  ...{ name: "CatalogueItem" },
  __name: "CatalogueItem",
  props: {
    item: {},
    index: {}
  },
  setup(__props) {
    const nsSub = useNamespace("sub-catalogue");
    const nsItem = useNamespace("catalogue-item");
    return (_ctx, _cache) => {
      const _component_CatalogueItem = resolveComponent("CatalogueItem", true);
      return openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass(_ctx.item.children ? unref(nsSub).b() : unref(nsItem).b())
        },
        [
          !_ctx.item.children ? (openBlock(), createElementBlock("a", {
            key: 0,
            href: _ctx.item.link && unref(withBase2)(_ctx.item.link),
            "aria-label": `${_ctx.index}. ${_ctx.item.title}`
          }, [
            createTextVNode(
              toDisplayString(_ctx.index) + ". ",
              1
              /* TEXT */
            ),
            createBaseVNode("span", {
              innerHTML: _ctx.item.title
            }, null, 8, _hoisted_2),
            _ctx.item.frontmatter.titleTag ? (openBlock(), createBlock(unref(_sfc_main4), {
              key: 0,
              text: _ctx.item.frontmatter.titleTag,
              position: "right",
              size: "small",
              "aria-label": _ctx.item.frontmatter.titleTag
            }, null, 8, ["text", "aria-label"])) : createCommentVNode("v-if", true)
          ], 8, _hoisted_12)) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createBaseVNode("div", {
                id: _ctx.item.title,
                class: normalizeClass(unref(nsSub).e("title")),
                role: "group",
                "aria-labelledby": `${_ctx.item.title}-label`
              }, [
                createBaseVNode("a", {
                  href: `#${_ctx.item.title}`,
                  class: "anchor",
                  "aria-label": _ctx.item.title
                }, "#", 8, _hoisted_4),
                createBaseVNode("span", {
                  id: `${_ctx.item.title}-label`
                }, toDisplayString(`${_ctx.index}. ${_ctx.item.title}`), 9, _hoisted_5)
              ], 10, _hoisted_3),
              _ctx.item.children ? (openBlock(), createElementBlock("ul", {
                key: 0,
                class: normalizeClass(`${unref(nsSub).e("inline")} flx-wrap-between`),
                "aria-label": _ctx.item.title
              }, [
                createCommentVNode(" 递归自己 "),
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(_ctx.item.children, (item, i) => {
                    return openBlock(), createBlock(_component_CatalogueItem, {
                      key: i,
                      item,
                      index: `${_ctx.index}-${i + 1}`
                    }, null, 8, ["item", "index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ], 10, _hoisted_6)) : createCommentVNode("v-if", true)
            ],
            64
            /* STABLE_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CataloguePage/src/index.vue2.mjs
var _hoisted_13 = { id: "catalogue-header-title" };
var _hoisted_22 = { class: "description" };
var _hoisted_32 = {
  id: "catalogue-list-title",
  class: "title"
};
var _hoisted_42 = { class: "flx-wrap-between" };
var _hoisted_52 = { class: "vp-doc" };
var _sfc_main6 = defineComponent({
  ...{ name: "CataloguePage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("catalogue");
    const { t } = useLocale();
    const { theme, frontmatter } = useData6();
    const catalogues = computed(() => {
      var _a, _b;
      return (_b = (_a = theme.value.catalogues) == null ? void 0 : _a.inv[frontmatter.value.path]) == null ? void 0 : _b.catalogues;
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createBlock(unref(_sfc_main3), {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.catalogue.label")
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "teek-catalogue-top-before"),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns4).e("header")),
              role: "group",
              "aria-labelledby": "catalogue-header-title"
            },
            [
              createBaseVNode(
                "h2",
                _hoisted_13,
                toDisplayString(unref(frontmatter).title),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "div",
                _hoisted_22,
                toDisplayString(unref(frontmatter).desc || unref(frontmatter).description),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          ),
          renderSlot(_ctx.$slots, "teek-catalogue-top-after"),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns4).e("wrapper")),
              "aria-labelledby": "catalogue-list-title"
            },
            [
              createBaseVNode(
                "div",
                _hoisted_32,
                toDisplayString(unref(frontmatter).pageTitle || unref(t)("tk.catalogue.title")),
                1
                /* TEXT */
              ),
              createBaseVNode("ul", _hoisted_42, [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(catalogues.value, (item, index2) => {
                    return openBlock(), createBlock(_sfc_main5, {
                      key: index2,
                      item,
                      index: index2 + 1
                    }, null, 8, ["item", "index"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            2
            /* CLASS */
          ),
          createBaseVNode("div", _hoisted_52, [
            createVNode(_component_Content)
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "aria-label"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArchivesPage/src/index.vue2.mjs
import { useData as useData7, withBase as withBase3 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ArticleTitle/src/index.vue2.mjs
import "vitepress";

// node_modules/@vue/compiler-core/dist/compiler-core.esm-bundler.js
var FRAGMENT = Symbol(true ? `Fragment` : ``);
var TELEPORT = Symbol(true ? `Teleport` : ``);
var SUSPENSE = Symbol(true ? `Suspense` : ``);
var KEEP_ALIVE = Symbol(true ? `KeepAlive` : ``);
var BASE_TRANSITION = Symbol(
  true ? `BaseTransition` : ``
);
var OPEN_BLOCK = Symbol(true ? `openBlock` : ``);
var CREATE_BLOCK = Symbol(true ? `createBlock` : ``);
var CREATE_ELEMENT_BLOCK = Symbol(
  true ? `createElementBlock` : ``
);
var CREATE_VNODE = Symbol(true ? `createVNode` : ``);
var CREATE_ELEMENT_VNODE = Symbol(
  true ? `createElementVNode` : ``
);
var CREATE_COMMENT = Symbol(
  true ? `createCommentVNode` : ``
);
var CREATE_TEXT = Symbol(
  true ? `createTextVNode` : ``
);
var CREATE_STATIC = Symbol(
  true ? `createStaticVNode` : ``
);
var RESOLVE_COMPONENT = Symbol(
  true ? `resolveComponent` : ``
);
var RESOLVE_DYNAMIC_COMPONENT = Symbol(
  true ? `resolveDynamicComponent` : ``
);
var RESOLVE_DIRECTIVE = Symbol(
  true ? `resolveDirective` : ``
);
var RESOLVE_FILTER = Symbol(
  true ? `resolveFilter` : ``
);
var WITH_DIRECTIVES = Symbol(
  true ? `withDirectives` : ``
);
var RENDER_LIST = Symbol(true ? `renderList` : ``);
var RENDER_SLOT = Symbol(true ? `renderSlot` : ``);
var CREATE_SLOTS = Symbol(true ? `createSlots` : ``);
var TO_DISPLAY_STRING = Symbol(
  true ? `toDisplayString` : ``
);
var MERGE_PROPS = Symbol(true ? `mergeProps` : ``);
var NORMALIZE_CLASS = Symbol(
  true ? `normalizeClass` : ``
);
var NORMALIZE_STYLE = Symbol(
  true ? `normalizeStyle` : ``
);
var NORMALIZE_PROPS = Symbol(
  true ? `normalizeProps` : ``
);
var GUARD_REACTIVE_PROPS = Symbol(
  true ? `guardReactiveProps` : ``
);
var TO_HANDLERS = Symbol(true ? `toHandlers` : ``);
var CAMELIZE = Symbol(true ? `camelize` : ``);
var CAPITALIZE = Symbol(true ? `capitalize` : ``);
var TO_HANDLER_KEY = Symbol(
  true ? `toHandlerKey` : ``
);
var SET_BLOCK_TRACKING = Symbol(
  true ? `setBlockTracking` : ``
);
var PUSH_SCOPE_ID = Symbol(true ? `pushScopeId` : ``);
var POP_SCOPE_ID = Symbol(true ? `popScopeId` : ``);
var WITH_CTX = Symbol(true ? `withCtx` : ``);
var UNREF = Symbol(true ? `unref` : ``);
var IS_REF = Symbol(true ? `isRef` : ``);
var WITH_MEMO = Symbol(true ? `withMemo` : ``);
var IS_MEMO_SAME = Symbol(true ? `isMemoSame` : ``);
var helperNameMap = {
  [FRAGMENT]: `Fragment`,
  [TELEPORT]: `Teleport`,
  [SUSPENSE]: `Suspense`,
  [KEEP_ALIVE]: `KeepAlive`,
  [BASE_TRANSITION]: `BaseTransition`,
  [OPEN_BLOCK]: `openBlock`,
  [CREATE_BLOCK]: `createBlock`,
  [CREATE_ELEMENT_BLOCK]: `createElementBlock`,
  [CREATE_VNODE]: `createVNode`,
  [CREATE_ELEMENT_VNODE]: `createElementVNode`,
  [CREATE_COMMENT]: `createCommentVNode`,
  [CREATE_TEXT]: `createTextVNode`,
  [CREATE_STATIC]: `createStaticVNode`,
  [RESOLVE_COMPONENT]: `resolveComponent`,
  [RESOLVE_DYNAMIC_COMPONENT]: `resolveDynamicComponent`,
  [RESOLVE_DIRECTIVE]: `resolveDirective`,
  [RESOLVE_FILTER]: `resolveFilter`,
  [WITH_DIRECTIVES]: `withDirectives`,
  [RENDER_LIST]: `renderList`,
  [RENDER_SLOT]: `renderSlot`,
  [CREATE_SLOTS]: `createSlots`,
  [TO_DISPLAY_STRING]: `toDisplayString`,
  [MERGE_PROPS]: `mergeProps`,
  [NORMALIZE_CLASS]: `normalizeClass`,
  [NORMALIZE_STYLE]: `normalizeStyle`,
  [NORMALIZE_PROPS]: `normalizeProps`,
  [GUARD_REACTIVE_PROPS]: `guardReactiveProps`,
  [TO_HANDLERS]: `toHandlers`,
  [CAMELIZE]: `camelize`,
  [CAPITALIZE]: `capitalize`,
  [TO_HANDLER_KEY]: `toHandlerKey`,
  [SET_BLOCK_TRACKING]: `setBlockTracking`,
  [PUSH_SCOPE_ID]: `pushScopeId`,
  [POP_SCOPE_ID]: `popScopeId`,
  [WITH_CTX]: `withCtx`,
  [UNREF]: `unref`,
  [IS_REF]: `isRef`,
  [WITH_MEMO]: `withMemo`,
  [IS_MEMO_SAME]: `isMemoSame`
};
function registerRuntimeHelpers(helpers) {
  Object.getOwnPropertySymbols(helpers).forEach((s) => {
    helperNameMap[s] = helpers[s];
  });
}
var locStub = {
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 },
  source: ""
};
function createRoot(children, source = "") {
  return {
    type: 0,
    source,
    children,
    helpers: /* @__PURE__ */ new Set(),
    components: [],
    directives: [],
    hoists: [],
    imports: [],
    cached: [],
    temps: 0,
    codegenNode: void 0,
    loc: locStub
  };
}
function createVNodeCall(context, tag, props, children, patchFlag, dynamicProps, directives, isBlock = false, disableTracking = false, isComponent2 = false, loc = locStub) {
  if (context) {
    if (isBlock) {
      context.helper(OPEN_BLOCK);
      context.helper(getVNodeBlockHelper(context.inSSR, isComponent2));
    } else {
      context.helper(getVNodeHelper(context.inSSR, isComponent2));
    }
    if (directives) {
      context.helper(WITH_DIRECTIVES);
    }
  }
  return {
    type: 13,
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2,
    loc
  };
}
function createArrayExpression(elements, loc = locStub) {
  return {
    type: 17,
    loc,
    elements
  };
}
function createObjectExpression(properties, loc = locStub) {
  return {
    type: 15,
    loc,
    properties
  };
}
function createObjectProperty(key, value) {
  return {
    type: 16,
    loc: locStub,
    key: isString(key) ? createSimpleExpression(key, true) : key,
    value
  };
}
function createSimpleExpression(content, isStatic = false, loc = locStub, constType = 0) {
  return {
    type: 4,
    loc,
    content,
    isStatic,
    constType: isStatic ? 3 : constType
  };
}
function createCompoundExpression(children, loc = locStub) {
  return {
    type: 8,
    loc,
    children
  };
}
function createCallExpression(callee, args = [], loc = locStub) {
  return {
    type: 14,
    loc,
    callee,
    arguments: args
  };
}
function createFunctionExpression(params, returns = void 0, newline = false, isSlot = false, loc = locStub) {
  return {
    type: 18,
    params,
    returns,
    newline,
    isSlot,
    loc
  };
}
function createConditionalExpression(test, consequent, alternate, newline = true) {
  return {
    type: 19,
    test,
    consequent,
    alternate,
    newline,
    loc: locStub
  };
}
function createCacheExpression(index2, value, needPauseTracking = false, inVOnce = false) {
  return {
    type: 20,
    index: index2,
    value,
    needPauseTracking,
    inVOnce,
    needArraySpread: false,
    loc: locStub
  };
}
function createBlockStatement(body) {
  return {
    type: 21,
    body,
    loc: locStub
  };
}
function getVNodeHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_VNODE : CREATE_ELEMENT_VNODE;
}
function getVNodeBlockHelper(ssr, isComponent2) {
  return ssr || isComponent2 ? CREATE_BLOCK : CREATE_ELEMENT_BLOCK;
}
function convertToBlock(node, { helper, removeHelper, inSSR }) {
  if (!node.isBlock) {
    node.isBlock = true;
    removeHelper(getVNodeHelper(inSSR, node.isComponent));
    helper(OPEN_BLOCK);
    helper(getVNodeBlockHelper(inSSR, node.isComponent));
  }
}
var defaultDelimitersOpen = new Uint8Array([123, 123]);
var defaultDelimitersClose = new Uint8Array([125, 125]);
function isTagStartChar(c) {
  return c >= 97 && c <= 122 || c >= 65 && c <= 90;
}
function isWhitespace2(c) {
  return c === 32 || c === 10 || c === 9 || c === 12 || c === 13;
}
function isEndOfTagSection(c) {
  return c === 47 || c === 62 || isWhitespace2(c);
}
function toCharCodes(str2) {
  const ret = new Uint8Array(str2.length);
  for (let i = 0; i < str2.length; i++) {
    ret[i] = str2.charCodeAt(i);
  }
  return ret;
}
var Sequences = {
  Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
  // CDATA[
  CdataEnd: new Uint8Array([93, 93, 62]),
  // ]]>
  CommentEnd: new Uint8Array([45, 45, 62]),
  // `-->`
  ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
  // `<\/script`
  StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
  // `</style`
  TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101]),
  // `</title`
  TextareaEnd: new Uint8Array([
    60,
    47,
    116,
    101,
    120,
    116,
    97,
    114,
    101,
    97
  ])
  // `</textarea
};
var Tokenizer = class {
  constructor(stack2, cbs) {
    this.stack = stack2;
    this.cbs = cbs;
    this.state = 1;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.entityStart = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.inXML = false;
    this.inVPre = false;
    this.newlines = [];
    this.mode = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
    this.delimiterIndex = -1;
    this.currentSequence = void 0;
    this.sequenceIndex = 0;
  }
  get inSFCRoot() {
    return this.mode === 2 && this.stack.length === 0;
  }
  reset() {
    this.state = 1;
    this.mode = 0;
    this.buffer = "";
    this.sectionStart = 0;
    this.index = 0;
    this.baseState = 1;
    this.inRCDATA = false;
    this.currentSequence = void 0;
    this.newlines.length = 0;
    this.delimiterOpen = defaultDelimitersOpen;
    this.delimiterClose = defaultDelimitersClose;
  }
  /**
   * Generate Position object with line / column information using recorded
   * newline positions. We know the index is always going to be an already
   * processed index, so all the newlines up to this index should have been
   * recorded.
   */
  getPos(index2) {
    let line = 1;
    let column = index2 + 1;
    for (let i = this.newlines.length - 1; i >= 0; i--) {
      const newlineIndex = this.newlines[i];
      if (index2 > newlineIndex) {
        line = i + 2;
        column = index2 - newlineIndex;
        break;
      }
    }
    return {
      column,
      line,
      offset: index2
    };
  }
  peek() {
    return this.buffer.charCodeAt(this.index + 1);
  }
  stateText(c) {
    if (c === 60) {
      if (this.index > this.sectionStart) {
        this.cbs.ontext(this.sectionStart, this.index);
      }
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!this.inVPre && c === this.delimiterOpen[0]) {
      this.state = 2;
      this.delimiterIndex = 0;
      this.stateInterpolationOpen(c);
    }
  }
  stateInterpolationOpen(c) {
    if (c === this.delimiterOpen[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterOpen.length - 1) {
        const start = this.index + 1 - this.delimiterOpen.length;
        if (start > this.sectionStart) {
          this.cbs.ontext(this.sectionStart, start);
        }
        this.state = 3;
        this.sectionStart = start;
      } else {
        this.delimiterIndex++;
      }
    } else if (this.inRCDATA) {
      this.state = 32;
      this.stateInRCDATA(c);
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInterpolation(c) {
    if (c === this.delimiterClose[0]) {
      this.state = 4;
      this.delimiterIndex = 0;
      this.stateInterpolationClose(c);
    }
  }
  stateInterpolationClose(c) {
    if (c === this.delimiterClose[this.delimiterIndex]) {
      if (this.delimiterIndex === this.delimiterClose.length - 1) {
        this.cbs.oninterpolation(this.sectionStart, this.index + 1);
        if (this.inRCDATA) {
          this.state = 32;
        } else {
          this.state = 1;
        }
        this.sectionStart = this.index + 1;
      } else {
        this.delimiterIndex++;
      }
    } else {
      this.state = 3;
      this.stateInterpolation(c);
    }
  }
  stateSpecialStartSequence(c) {
    const isEnd = this.sequenceIndex === this.currentSequence.length;
    const isMatch = isEnd ? (
      // If we are at the end of the sequence, make sure the tag name has ended
      isEndOfTagSection(c)
    ) : (
      // Otherwise, do a case-insensitive comparison
      (c | 32) === this.currentSequence[this.sequenceIndex]
    );
    if (!isMatch) {
      this.inRCDATA = false;
    } else if (!isEnd) {
      this.sequenceIndex++;
      return;
    }
    this.sequenceIndex = 0;
    this.state = 6;
    this.stateInTagName(c);
  }
  /** Look for an end tag. For <title> and <textarea>, also decode entities. */
  stateInRCDATA(c) {
    if (this.sequenceIndex === this.currentSequence.length) {
      if (c === 62 || isWhitespace2(c)) {
        const endOfText = this.index - this.currentSequence.length;
        if (this.sectionStart < endOfText) {
          const actualIndex = this.index;
          this.index = endOfText;
          this.cbs.ontext(this.sectionStart, endOfText);
          this.index = actualIndex;
        }
        this.sectionStart = endOfText + 2;
        this.stateInClosingTagName(c);
        this.inRCDATA = false;
        return;
      }
      this.sequenceIndex = 0;
    }
    if ((c | 32) === this.currentSequence[this.sequenceIndex]) {
      this.sequenceIndex += 1;
    } else if (this.sequenceIndex === 0) {
      if (this.currentSequence === Sequences.TitleEnd || this.currentSequence === Sequences.TextareaEnd && !this.inSFCRoot) {
        if (!this.inVPre && c === this.delimiterOpen[0]) {
          this.state = 2;
          this.delimiterIndex = 0;
          this.stateInterpolationOpen(c);
        }
      } else if (this.fastForwardTo(60)) {
        this.sequenceIndex = 1;
      }
    } else {
      this.sequenceIndex = Number(c === 60);
    }
  }
  stateCDATASequence(c) {
    if (c === Sequences.Cdata[this.sequenceIndex]) {
      if (++this.sequenceIndex === Sequences.Cdata.length) {
        this.state = 28;
        this.currentSequence = Sequences.CdataEnd;
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
      }
    } else {
      this.sequenceIndex = 0;
      this.state = 23;
      this.stateInDeclaration(c);
    }
  }
  /**
   * When we wait for one specific character, we can speed things up
   * by skipping through the buffer until we find it.
   *
   * @returns Whether the character was found.
   */
  fastForwardTo(c) {
    while (++this.index < this.buffer.length) {
      const cc = this.buffer.charCodeAt(this.index);
      if (cc === 10) {
        this.newlines.push(this.index);
      }
      if (cc === c) {
        return true;
      }
    }
    this.index = this.buffer.length - 1;
    return false;
  }
  /**
   * Comments and CDATA end with `-->` and `]]>`.
   *
   * Their common qualities are:
   * - Their end sequences have a distinct character they start with.
   * - That character is then repeated, so we have to check multiple repeats.
   * - All characters but the start character of the sequence can be skipped.
   */
  stateInCommentLike(c) {
    if (c === this.currentSequence[this.sequenceIndex]) {
      if (++this.sequenceIndex === this.currentSequence.length) {
        if (this.currentSequence === Sequences.CdataEnd) {
          this.cbs.oncdata(this.sectionStart, this.index - 2);
        } else {
          this.cbs.oncomment(this.sectionStart, this.index - 2);
        }
        this.sequenceIndex = 0;
        this.sectionStart = this.index + 1;
        this.state = 1;
      }
    } else if (this.sequenceIndex === 0) {
      if (this.fastForwardTo(this.currentSequence[0])) {
        this.sequenceIndex = 1;
      }
    } else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
      this.sequenceIndex = 0;
    }
  }
  startSpecial(sequence, offset) {
    this.enterRCDATA(sequence, offset);
    this.state = 31;
  }
  enterRCDATA(sequence, offset) {
    this.inRCDATA = true;
    this.currentSequence = sequence;
    this.sequenceIndex = offset;
  }
  stateBeforeTagName(c) {
    if (c === 33) {
      this.state = 22;
      this.sectionStart = this.index + 1;
    } else if (c === 63) {
      this.state = 24;
      this.sectionStart = this.index + 1;
    } else if (isTagStartChar(c)) {
      this.sectionStart = this.index;
      if (this.mode === 0) {
        this.state = 6;
      } else if (this.inSFCRoot) {
        this.state = 34;
      } else if (!this.inXML) {
        if (c === 116) {
          this.state = 30;
        } else {
          this.state = c === 115 ? 29 : 6;
        }
      } else {
        this.state = 6;
      }
    } else if (c === 47) {
      this.state = 8;
    } else {
      this.state = 1;
      this.stateText(c);
    }
  }
  stateInTagName(c) {
    if (isEndOfTagSection(c)) {
      this.handleTagName(c);
    }
  }
  stateInSFCRootTagName(c) {
    if (isEndOfTagSection(c)) {
      const tag = this.buffer.slice(this.sectionStart, this.index);
      if (tag !== "template") {
        this.enterRCDATA(toCharCodes(`</` + tag), 0);
      }
      this.handleTagName(c);
    }
  }
  handleTagName(c) {
    this.cbs.onopentagname(this.sectionStart, this.index);
    this.sectionStart = -1;
    this.state = 11;
    this.stateBeforeAttrName(c);
  }
  stateBeforeClosingTagName(c) {
    if (isWhitespace2(c)) ;
    else if (c === 62) {
      if (true) {
        this.cbs.onerr(14, this.index);
      }
      this.state = 1;
      this.sectionStart = this.index + 1;
    } else {
      this.state = isTagStartChar(c) ? 9 : 27;
      this.sectionStart = this.index;
    }
  }
  stateInClosingTagName(c) {
    if (c === 62 || isWhitespace2(c)) {
      this.cbs.onclosetag(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.state = 10;
      this.stateAfterClosingTagName(c);
    }
  }
  stateAfterClosingTagName(c) {
    if (c === 62) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeAttrName(c) {
    if (c === 62) {
      this.cbs.onopentagend(this.index);
      if (this.inRCDATA) {
        this.state = 32;
      } else {
        this.state = 1;
      }
      this.sectionStart = this.index + 1;
    } else if (c === 47) {
      this.state = 7;
      if (this.peek() !== 62) {
        this.cbs.onerr(22, this.index);
      }
    } else if (c === 60 && this.peek() === 47) {
      this.cbs.onopentagend(this.index);
      this.state = 5;
      this.sectionStart = this.index;
    } else if (!isWhitespace2(c)) {
      if (c === 61) {
        this.cbs.onerr(
          19,
          this.index
        );
      }
      this.handleAttrStart(c);
    }
  }
  handleAttrStart(c) {
    if (c === 118 && this.peek() === 45) {
      this.state = 13;
      this.sectionStart = this.index;
    } else if (c === 46 || c === 58 || c === 64 || c === 35) {
      this.cbs.ondirname(this.index, this.index + 1);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 12;
      this.sectionStart = this.index;
    }
  }
  stateInSelfClosingTag(c) {
    if (c === 62) {
      this.cbs.onselfclosingtag(this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
      this.inRCDATA = false;
    } else if (!isWhitespace2(c)) {
      this.state = 11;
      this.stateBeforeAttrName(c);
    }
  }
  stateInAttrName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.onattribname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 34 || c === 39 || c === 60) {
      this.cbs.onerr(
        17,
        this.index
      );
    }
  }
  stateInDirName(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 58) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 14;
      this.sectionStart = this.index + 1;
    } else if (c === 46) {
      this.cbs.ondirname(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDirArg(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 91) {
      this.state = 15;
    } else if (c === 46) {
      this.cbs.ondirarg(this.sectionStart, this.index);
      this.state = 16;
      this.sectionStart = this.index + 1;
    }
  }
  stateInDynamicDirArg(c) {
    if (c === 93) {
      this.state = 14;
    } else if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirarg(this.sectionStart, this.index + 1);
      this.handleAttrNameEnd(c);
      if (true) {
        this.cbs.onerr(
          27,
          this.index
        );
      }
    }
  }
  stateInDirModifier(c) {
    if (c === 61 || isEndOfTagSection(c)) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.handleAttrNameEnd(c);
    } else if (c === 46) {
      this.cbs.ondirmodifier(this.sectionStart, this.index);
      this.sectionStart = this.index + 1;
    }
  }
  handleAttrNameEnd(c) {
    this.sectionStart = this.index;
    this.state = 17;
    this.cbs.onattribnameend(this.index);
    this.stateAfterAttrName(c);
  }
  stateAfterAttrName(c) {
    if (c === 61) {
      this.state = 18;
    } else if (c === 47 || c === 62) {
      this.cbs.onattribend(0, this.sectionStart);
      this.sectionStart = -1;
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (!isWhitespace2(c)) {
      this.cbs.onattribend(0, this.sectionStart);
      this.handleAttrStart(c);
    }
  }
  stateBeforeAttrValue(c) {
    if (c === 34) {
      this.state = 19;
      this.sectionStart = this.index + 1;
    } else if (c === 39) {
      this.state = 20;
      this.sectionStart = this.index + 1;
    } else if (!isWhitespace2(c)) {
      this.sectionStart = this.index;
      this.state = 21;
      this.stateInAttrValueNoQuotes(c);
    }
  }
  handleInAttrValue(c, quote) {
    if (c === quote || this.fastForwardTo(quote)) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(
        quote === 34 ? 3 : 2,
        this.index + 1
      );
      this.state = 11;
    }
  }
  stateInAttrValueDoubleQuotes(c) {
    this.handleInAttrValue(c, 34);
  }
  stateInAttrValueSingleQuotes(c) {
    this.handleInAttrValue(c, 39);
  }
  stateInAttrValueNoQuotes(c) {
    if (isWhitespace2(c) || c === 62) {
      this.cbs.onattribdata(this.sectionStart, this.index);
      this.sectionStart = -1;
      this.cbs.onattribend(1, this.index);
      this.state = 11;
      this.stateBeforeAttrName(c);
    } else if (c === 34 || c === 39 || c === 60 || c === 61 || c === 96) {
      this.cbs.onerr(
        18,
        this.index
      );
    } else ;
  }
  stateBeforeDeclaration(c) {
    if (c === 91) {
      this.state = 26;
      this.sequenceIndex = 0;
    } else {
      this.state = c === 45 ? 25 : 23;
    }
  }
  stateInDeclaration(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateInProcessingInstruction(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.onprocessinginstruction(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeComment(c) {
    if (c === 45) {
      this.state = 28;
      this.currentSequence = Sequences.CommentEnd;
      this.sequenceIndex = 2;
      this.sectionStart = this.index + 1;
    } else {
      this.state = 23;
    }
  }
  stateInSpecialComment(c) {
    if (c === 62 || this.fastForwardTo(62)) {
      this.cbs.oncomment(this.sectionStart, this.index);
      this.state = 1;
      this.sectionStart = this.index + 1;
    }
  }
  stateBeforeSpecialS(c) {
    if (c === Sequences.ScriptEnd[3]) {
      this.startSpecial(Sequences.ScriptEnd, 4);
    } else if (c === Sequences.StyleEnd[3]) {
      this.startSpecial(Sequences.StyleEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  stateBeforeSpecialT(c) {
    if (c === Sequences.TitleEnd[3]) {
      this.startSpecial(Sequences.TitleEnd, 4);
    } else if (c === Sequences.TextareaEnd[3]) {
      this.startSpecial(Sequences.TextareaEnd, 4);
    } else {
      this.state = 6;
      this.stateInTagName(c);
    }
  }
  startEntity() {
  }
  stateInEntity() {
  }
  /**
   * Iterates through the buffer, calling the function corresponding to the current state.
   *
   * States that are more likely to be hit are higher up, as a performance improvement.
   */
  parse(input) {
    this.buffer = input;
    while (this.index < this.buffer.length) {
      const c = this.buffer.charCodeAt(this.index);
      if (c === 10 && this.state !== 33) {
        this.newlines.push(this.index);
      }
      switch (this.state) {
        case 1: {
          this.stateText(c);
          break;
        }
        case 2: {
          this.stateInterpolationOpen(c);
          break;
        }
        case 3: {
          this.stateInterpolation(c);
          break;
        }
        case 4: {
          this.stateInterpolationClose(c);
          break;
        }
        case 31: {
          this.stateSpecialStartSequence(c);
          break;
        }
        case 32: {
          this.stateInRCDATA(c);
          break;
        }
        case 26: {
          this.stateCDATASequence(c);
          break;
        }
        case 19: {
          this.stateInAttrValueDoubleQuotes(c);
          break;
        }
        case 12: {
          this.stateInAttrName(c);
          break;
        }
        case 13: {
          this.stateInDirName(c);
          break;
        }
        case 14: {
          this.stateInDirArg(c);
          break;
        }
        case 15: {
          this.stateInDynamicDirArg(c);
          break;
        }
        case 16: {
          this.stateInDirModifier(c);
          break;
        }
        case 28: {
          this.stateInCommentLike(c);
          break;
        }
        case 27: {
          this.stateInSpecialComment(c);
          break;
        }
        case 11: {
          this.stateBeforeAttrName(c);
          break;
        }
        case 6: {
          this.stateInTagName(c);
          break;
        }
        case 34: {
          this.stateInSFCRootTagName(c);
          break;
        }
        case 9: {
          this.stateInClosingTagName(c);
          break;
        }
        case 5: {
          this.stateBeforeTagName(c);
          break;
        }
        case 17: {
          this.stateAfterAttrName(c);
          break;
        }
        case 20: {
          this.stateInAttrValueSingleQuotes(c);
          break;
        }
        case 18: {
          this.stateBeforeAttrValue(c);
          break;
        }
        case 8: {
          this.stateBeforeClosingTagName(c);
          break;
        }
        case 10: {
          this.stateAfterClosingTagName(c);
          break;
        }
        case 29: {
          this.stateBeforeSpecialS(c);
          break;
        }
        case 30: {
          this.stateBeforeSpecialT(c);
          break;
        }
        case 21: {
          this.stateInAttrValueNoQuotes(c);
          break;
        }
        case 7: {
          this.stateInSelfClosingTag(c);
          break;
        }
        case 23: {
          this.stateInDeclaration(c);
          break;
        }
        case 22: {
          this.stateBeforeDeclaration(c);
          break;
        }
        case 25: {
          this.stateBeforeComment(c);
          break;
        }
        case 24: {
          this.stateInProcessingInstruction(c);
          break;
        }
        case 33: {
          this.stateInEntity();
          break;
        }
      }
      this.index++;
    }
    this.cleanup();
    this.finish();
  }
  /**
   * Remove data that has already been consumed from the buffer.
   */
  cleanup() {
    if (this.sectionStart !== this.index) {
      if (this.state === 1 || this.state === 32 && this.sequenceIndex === 0) {
        this.cbs.ontext(this.sectionStart, this.index);
        this.sectionStart = this.index;
      } else if (this.state === 19 || this.state === 20 || this.state === 21) {
        this.cbs.onattribdata(this.sectionStart, this.index);
        this.sectionStart = this.index;
      }
    }
  }
  finish() {
    this.handleTrailingData();
    this.cbs.onend();
  }
  /** Handle any trailing data. */
  handleTrailingData() {
    const endIndex = this.buffer.length;
    if (this.sectionStart >= endIndex) {
      return;
    }
    if (this.state === 28) {
      if (this.currentSequence === Sequences.CdataEnd) {
        this.cbs.oncdata(this.sectionStart, endIndex);
      } else {
        this.cbs.oncomment(this.sectionStart, endIndex);
      }
    } else if (this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9) ;
    else {
      this.cbs.ontext(this.sectionStart, endIndex);
    }
  }
  emitCodePoint(cp, consumed) {
  }
};
var deprecationData = {
  ["COMPILER_IS_ON_ELEMENT"]: {
    message: `Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".`,
    link: `https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html`
  },
  ["COMPILER_V_BIND_SYNC"]: {
    message: (key) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${key}.sync\` should be changed to \`v-model:${key}\`.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-model.html`
  },
  ["COMPILER_V_BIND_OBJECT_ORDER"]: {
    message: `v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-bind.html`
  },
  ["COMPILER_V_ON_NATIVE"]: {
    message: `.native modifier for v-on has been removed as is no longer necessary.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html`
  },
  ["COMPILER_V_IF_V_FOR_PRECEDENCE"]: {
    message: `v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html`
  },
  ["COMPILER_NATIVE_TEMPLATE"]: {
    message: `<template> with no special directives will render as a native template element instead of its inner content in Vue 3.`
  },
  ["COMPILER_INLINE_TEMPLATE"]: {
    message: `"inline-template" has been removed in Vue 3.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html`
  },
  ["COMPILER_FILTERS"]: {
    message: `filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.`,
    link: `https://v3-migration.vuejs.org/breaking-changes/filters.html`
  }
};
function getCompatValue(key, { compatConfig }) {
  const value = compatConfig && compatConfig[key];
  if (key === "MODE") {
    return value || 3;
  } else {
    return value;
  }
}
function isCompatEnabled(key, context) {
  const mode = getCompatValue("MODE", context);
  const value = getCompatValue(key, context);
  return mode === 3 ? value === true : value !== false;
}
function checkCompatEnabled(key, context, loc, ...args) {
  const enabled = isCompatEnabled(key, context);
  if (enabled) {
    warnDeprecation(key, context, loc, ...args);
  }
  return enabled;
}
function warnDeprecation(key, context, loc, ...args) {
  const val = getCompatValue(key, context);
  if (val === "suppress-warning") {
    return;
  }
  const { message: message2, link } = deprecationData[key];
  const msg = `(deprecation ${key}) ${typeof message2 === "function" ? message2(...args) : message2}${link ? `
  Details: ${link}` : ``}`;
  const err = new SyntaxError(msg);
  err.code = key;
  if (loc) err.loc = loc;
  context.onWarn(err);
}
function defaultOnError(error) {
  throw error;
}
function defaultOnWarn(msg) {
  console.warn(`[Vue warn] ${msg.message}`);
}
function createCompilerError(code, loc, messages, additionalMessage) {
  const msg = true ? (messages || errorMessages)[code] + (additionalMessage || ``) : `https://vuejs.org/error-reference/#compiler-${code}`;
  const error = new SyntaxError(String(msg));
  error.code = code;
  error.loc = loc;
  return error;
}
var errorMessages = {
  // parse errors
  [0]: "Illegal comment.",
  [1]: "CDATA section is allowed only in XML context.",
  [2]: "Duplicate attribute.",
  [3]: "End tag cannot have attributes.",
  [4]: "Illegal '/' in tags.",
  [5]: "Unexpected EOF in tag.",
  [6]: "Unexpected EOF in CDATA section.",
  [7]: "Unexpected EOF in comment.",
  [8]: "Unexpected EOF in script.",
  [9]: "Unexpected EOF in tag.",
  [10]: "Incorrectly closed comment.",
  [11]: "Incorrectly opened comment.",
  [12]: "Illegal tag name. Use '&lt;' to print '<'.",
  [13]: "Attribute value was expected.",
  [14]: "End tag name was expected.",
  [15]: "Whitespace was expected.",
  [16]: "Unexpected '<!--' in comment.",
  [17]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [18]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [19]: "Attribute name cannot start with '='.",
  [21]: "'<?' is allowed only in XML context.",
  [20]: `Unexpected null character.`,
  [22]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [23]: "Invalid end tag.",
  [24]: "Element is missing end tag.",
  [25]: "Interpolation end sign was not found.",
  [27]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [26]: "Legal directive name was expected.",
  // transform errors
  [28]: `v-if/v-else-if is missing expression.`,
  [29]: `v-if/else branches must use unique keys.`,
  [30]: `v-else/v-else-if has no adjacent v-if or v-else-if.`,
  [31]: `v-for is missing expression.`,
  [32]: `v-for has invalid expression.`,
  [33]: `<template v-for> key should be placed on the <template> tag.`,
  [34]: `v-bind is missing expression.`,
  [52]: `v-bind with same-name shorthand only allows static argument.`,
  [35]: `v-on is missing expression.`,
  [36]: `Unexpected custom directive on <slot> outlet.`,
  [37]: `Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.`,
  [38]: `Duplicate slot names found. `,
  [39]: `Extraneous children found when component already has explicitly named default slot. These children will be ignored.`,
  [40]: `v-slot can only be used on components or <template> tags.`,
  [41]: `v-model is missing expression.`,
  [42]: `v-model value must be a valid JavaScript member expression.`,
  [43]: `v-model cannot be used on v-for or v-slot scope variables because they are not writable.`,
  [44]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  [45]: `Error parsing JavaScript expression: `,
  [46]: `<KeepAlive> expects exactly one child component.`,
  [51]: `@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.`,
  // generic errors
  [47]: `"prefixIdentifiers" option is not supported in this build of compiler.`,
  [48]: `ES module mode is not supported in this build of compiler.`,
  [49]: `"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.`,
  [50]: `"scopeId" option is only supported in module mode.`,
  // just to fulfill types
  [53]: ``
};
var isStaticExp = (p) => p.type === 4 && p.isStatic;
function isCoreComponent(tag) {
  switch (tag) {
    case "Teleport":
    case "teleport":
      return TELEPORT;
    case "Suspense":
    case "suspense":
      return SUSPENSE;
    case "KeepAlive":
    case "keep-alive":
      return KEEP_ALIVE;
    case "BaseTransition":
    case "base-transition":
      return BASE_TRANSITION;
  }
}
var nonIdentifierRE = /^\d|[^\$\w\xA0-\uFFFF]/;
var isSimpleIdentifier = (name) => !nonIdentifierRE.test(name);
var validFirstIdentCharRE = /[A-Za-z_$\xA0-\uFFFF]/;
var validIdentCharRE = /[\.\?\w$\xA0-\uFFFF]/;
var whitespaceRE = /\s+[.[]\s*|\s*[.[]\s+/g;
var getExpSource = (exp) => exp.type === 4 ? exp.content : exp.loc.source;
var isMemberExpressionBrowser = (exp) => {
  const path = getExpSource(exp).trim().replace(whitespaceRE, (s) => s.trim());
  let state = 0;
  let stateStack = [];
  let currentOpenBracketCount = 0;
  let currentOpenParensCount = 0;
  let currentStringType = null;
  for (let i = 0; i < path.length; i++) {
    const char = path.charAt(i);
    switch (state) {
      case 0:
        if (char === "[") {
          stateStack.push(state);
          state = 1;
          currentOpenBracketCount++;
        } else if (char === "(") {
          stateStack.push(state);
          state = 2;
          currentOpenParensCount++;
        } else if (!(i === 0 ? validFirstIdentCharRE : validIdentCharRE).test(char)) {
          return false;
        }
        break;
      case 1:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `[`) {
          currentOpenBracketCount++;
        } else if (char === `]`) {
          if (!--currentOpenBracketCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 2:
        if (char === `'` || char === `"` || char === "`") {
          stateStack.push(state);
          state = 3;
          currentStringType = char;
        } else if (char === `(`) {
          currentOpenParensCount++;
        } else if (char === `)`) {
          if (i === path.length - 1) {
            return false;
          }
          if (!--currentOpenParensCount) {
            state = stateStack.pop();
          }
        }
        break;
      case 3:
        if (char === currentStringType) {
          state = stateStack.pop();
          currentStringType = null;
        }
        break;
    }
  }
  return !currentOpenBracketCount && !currentOpenParensCount;
};
var isMemberExpression = isMemberExpressionBrowser;
var fnExpRE = /^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/;
var isFnExpressionBrowser = (exp) => fnExpRE.test(getExpSource(exp));
var isFnExpression = isFnExpressionBrowser;
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg || `unexpected compiler condition`);
  }
}
function findDir(node, name, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 7 && (allowEmpty || p.exp) && (isString(name) ? p.name === name : name.test(p.name))) {
      return p;
    }
  }
}
function findProp(node, name, dynamicOnly = false, allowEmpty = false) {
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (dynamicOnly) continue;
      if (p.name === name && (p.value || allowEmpty)) {
        return p;
      }
    } else if (p.name === "bind" && (p.exp || allowEmpty) && isStaticArgOf(p.arg, name)) {
      return p;
    }
  }
}
function isStaticArgOf(arg, name) {
  return !!(arg && isStaticExp(arg) && arg.content === name);
}
function hasDynamicKeyVBind(node) {
  return node.props.some(
    (p) => p.type === 7 && p.name === "bind" && (!p.arg || // v-bind="obj"
    p.arg.type !== 4 || // v-bind:[_ctx.foo]
    !p.arg.isStatic)
    // v-bind:[foo]
  );
}
function isText$1(node) {
  return node.type === 5 || node.type === 2;
}
function isVSlot(p) {
  return p.type === 7 && p.name === "slot";
}
function isTemplateNode(node) {
  return node.type === 1 && node.tagType === 3;
}
function isSlotOutlet(node) {
  return node.type === 1 && node.tagType === 2;
}
var propsHelperSet = /* @__PURE__ */ new Set([NORMALIZE_PROPS, GUARD_REACTIVE_PROPS]);
function getUnnormalizedProps(props, callPath = []) {
  if (props && !isString(props) && props.type === 14) {
    const callee = props.callee;
    if (!isString(callee) && propsHelperSet.has(callee)) {
      return getUnnormalizedProps(
        props.arguments[0],
        callPath.concat(props)
      );
    }
  }
  return [props, callPath];
}
function injectProp(node, prop, context) {
  let propsWithInjection;
  let props = node.type === 13 ? node.props : node.arguments[2];
  let callPath = [];
  let parentCall;
  if (props && !isString(props) && props.type === 14) {
    const ret = getUnnormalizedProps(props);
    props = ret[0];
    callPath = ret[1];
    parentCall = callPath[callPath.length - 1];
  }
  if (props == null || isString(props)) {
    propsWithInjection = createObjectExpression([prop]);
  } else if (props.type === 14) {
    const first = props.arguments[0];
    if (!isString(first) && first.type === 15) {
      if (!hasProp(prop, first)) {
        first.properties.unshift(prop);
      }
    } else {
      if (props.callee === TO_HANDLERS) {
        propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
          createObjectExpression([prop]),
          props
        ]);
      } else {
        props.arguments.unshift(createObjectExpression([prop]));
      }
    }
    !propsWithInjection && (propsWithInjection = props);
  } else if (props.type === 15) {
    if (!hasProp(prop, props)) {
      props.properties.unshift(prop);
    }
    propsWithInjection = props;
  } else {
    propsWithInjection = createCallExpression(context.helper(MERGE_PROPS), [
      createObjectExpression([prop]),
      props
    ]);
    if (parentCall && parentCall.callee === GUARD_REACTIVE_PROPS) {
      parentCall = callPath[callPath.length - 2];
    }
  }
  if (node.type === 13) {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.props = propsWithInjection;
    }
  } else {
    if (parentCall) {
      parentCall.arguments[0] = propsWithInjection;
    } else {
      node.arguments[2] = propsWithInjection;
    }
  }
}
function hasProp(prop, props) {
  let result = false;
  if (prop.key.type === 4) {
    const propKeyName = prop.key.content;
    result = props.properties.some(
      (p) => p.key.type === 4 && p.key.content === propKeyName
    );
  }
  return result;
}
function toValidAssetId(name, type2) {
  return `_${type2}_${name.replace(/[^\w]/g, (searchValue, replaceValue) => {
    return searchValue === "-" ? "_" : name.charCodeAt(replaceValue).toString();
  })}`;
}
function getMemoedVNodeCall(node) {
  if (node.type === 14 && node.callee === WITH_MEMO) {
    return node.arguments[1].returns;
  } else {
    return node;
  }
}
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
var defaultParserOptions = {
  parseMode: "base",
  ns: 0,
  delimiters: [`{{`, `}}`],
  getNamespace: () => 0,
  isVoidTag: NO,
  isPreTag: NO,
  isIgnoreNewlineTag: NO,
  isCustomElement: NO,
  onError: defaultOnError,
  onWarn: defaultOnWarn,
  comments: true,
  prefixIdentifiers: false
};
var currentOptions = defaultParserOptions;
var currentRoot = null;
var currentInput = "";
var currentOpenTag = null;
var currentProp = null;
var currentAttrValue = "";
var currentAttrStartIndex = -1;
var currentAttrEndIndex = -1;
var inPre = 0;
var inVPre = false;
var currentVPreBoundary = null;
var stack = [];
var tokenizer = new Tokenizer(stack, {
  onerr: emitError,
  ontext(start, end) {
    onText(getSlice(start, end), start, end);
  },
  ontextentity(char, start, end) {
    onText(char, start, end);
  },
  oninterpolation(start, end) {
    if (inVPre) {
      return onText(getSlice(start, end), start, end);
    }
    let innerStart = start + tokenizer.delimiterOpen.length;
    let innerEnd = end - tokenizer.delimiterClose.length;
    while (isWhitespace2(currentInput.charCodeAt(innerStart))) {
      innerStart++;
    }
    while (isWhitespace2(currentInput.charCodeAt(innerEnd - 1))) {
      innerEnd--;
    }
    let exp = getSlice(innerStart, innerEnd);
    if (exp.includes("&")) {
      {
        exp = currentOptions.decodeEntities(exp, false);
      }
    }
    addNode({
      type: 5,
      content: createExp(exp, false, getLoc(innerStart, innerEnd)),
      loc: getLoc(start, end)
    });
  },
  onopentagname(start, end) {
    const name = getSlice(start, end);
    currentOpenTag = {
      type: 1,
      tag: name,
      ns: currentOptions.getNamespace(name, stack[0], currentOptions.ns),
      tagType: 0,
      // will be refined on tag close
      props: [],
      children: [],
      loc: getLoc(start - 1, end),
      codegenNode: void 0
    };
  },
  onopentagend(end) {
    endOpenTag(end);
  },
  onclosetag(start, end) {
    const name = getSlice(start, end);
    if (!currentOptions.isVoidTag(name)) {
      let found = false;
      for (let i = 0; i < stack.length; i++) {
        const e = stack[i];
        if (e.tag.toLowerCase() === name.toLowerCase()) {
          found = true;
          if (i > 0) {
            emitError(24, stack[0].loc.start.offset);
          }
          for (let j = 0; j <= i; j++) {
            const el = stack.shift();
            onCloseTag(el, end, j < i);
          }
          break;
        }
      }
      if (!found) {
        emitError(23, backTrack(start, 60));
      }
    }
  },
  onselfclosingtag(end) {
    const name = currentOpenTag.tag;
    currentOpenTag.isSelfClosing = true;
    endOpenTag(end);
    if (stack[0] && stack[0].tag === name) {
      onCloseTag(stack.shift(), end);
    }
  },
  onattribname(start, end) {
    currentProp = {
      type: 6,
      name: getSlice(start, end),
      nameLoc: getLoc(start, end),
      value: void 0,
      loc: getLoc(start)
    };
  },
  ondirname(start, end) {
    const raw = getSlice(start, end);
    const name = raw === "." || raw === ":" ? "bind" : raw === "@" ? "on" : raw === "#" ? "slot" : raw.slice(2);
    if (!inVPre && name === "") {
      emitError(26, start);
    }
    if (inVPre || name === "") {
      currentProp = {
        type: 6,
        name: raw,
        nameLoc: getLoc(start, end),
        value: void 0,
        loc: getLoc(start)
      };
    } else {
      currentProp = {
        type: 7,
        name,
        rawName: raw,
        exp: void 0,
        arg: void 0,
        modifiers: raw === "." ? [createSimpleExpression("prop")] : [],
        loc: getLoc(start)
      };
      if (name === "pre") {
        inVPre = tokenizer.inVPre = true;
        currentVPreBoundary = currentOpenTag;
        const props = currentOpenTag.props;
        for (let i = 0; i < props.length; i++) {
          if (props[i].type === 7) {
            props[i] = dirToAttr(props[i]);
          }
        }
      }
    }
  },
  ondirarg(start, end) {
    if (start === end) return;
    const arg = getSlice(start, end);
    if (inVPre) {
      currentProp.name += arg;
      setLocEnd(currentProp.nameLoc, end);
    } else {
      const isStatic = arg[0] !== `[`;
      currentProp.arg = createExp(
        isStatic ? arg : arg.slice(1, -1),
        isStatic,
        getLoc(start, end),
        isStatic ? 3 : 0
      );
    }
  },
  ondirmodifier(start, end) {
    const mod = getSlice(start, end);
    if (inVPre) {
      currentProp.name += "." + mod;
      setLocEnd(currentProp.nameLoc, end);
    } else if (currentProp.name === "slot") {
      const arg = currentProp.arg;
      if (arg) {
        arg.content += "." + mod;
        setLocEnd(arg.loc, end);
      }
    } else {
      const exp = createSimpleExpression(mod, true, getLoc(start, end));
      currentProp.modifiers.push(exp);
    }
  },
  onattribdata(start, end) {
    currentAttrValue += getSlice(start, end);
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribentity(char, start, end) {
    currentAttrValue += char;
    if (currentAttrStartIndex < 0) currentAttrStartIndex = start;
    currentAttrEndIndex = end;
  },
  onattribnameend(end) {
    const start = currentProp.loc.start.offset;
    const name = getSlice(start, end);
    if (currentProp.type === 7) {
      currentProp.rawName = name;
    }
    if (currentOpenTag.props.some(
      (p) => (p.type === 7 ? p.rawName : p.name) === name
    )) {
      emitError(2, start);
    }
  },
  onattribend(quote, end) {
    if (currentOpenTag && currentProp) {
      setLocEnd(currentProp.loc, end);
      if (quote !== 0) {
        if (currentAttrValue.includes("&")) {
          currentAttrValue = currentOptions.decodeEntities(
            currentAttrValue,
            true
          );
        }
        if (currentProp.type === 6) {
          if (currentProp.name === "class") {
            currentAttrValue = condense(currentAttrValue).trim();
          }
          if (quote === 1 && !currentAttrValue) {
            emitError(13, end);
          }
          currentProp.value = {
            type: 2,
            content: currentAttrValue,
            loc: quote === 1 ? getLoc(currentAttrStartIndex, currentAttrEndIndex) : getLoc(currentAttrStartIndex - 1, currentAttrEndIndex + 1)
          };
          if (tokenizer.inSFCRoot && currentOpenTag.tag === "template" && currentProp.name === "lang" && currentAttrValue && currentAttrValue !== "html") {
            tokenizer.enterRCDATA(toCharCodes(`</template`), 0);
          }
        } else {
          let expParseMode = 0;
          currentProp.exp = createExp(
            currentAttrValue,
            false,
            getLoc(currentAttrStartIndex, currentAttrEndIndex),
            0,
            expParseMode
          );
          if (currentProp.name === "for") {
            currentProp.forParseResult = parseForExpression(currentProp.exp);
          }
          let syncIndex = -1;
          if (currentProp.name === "bind" && (syncIndex = currentProp.modifiers.findIndex(
            (mod) => mod.content === "sync"
          )) > -1 && checkCompatEnabled(
            "COMPILER_V_BIND_SYNC",
            currentOptions,
            currentProp.loc,
            currentProp.arg.loc.source
          )) {
            currentProp.name = "model";
            currentProp.modifiers.splice(syncIndex, 1);
          }
        }
      }
      if (currentProp.type !== 7 || currentProp.name !== "pre") {
        currentOpenTag.props.push(currentProp);
      }
    }
    currentAttrValue = "";
    currentAttrStartIndex = currentAttrEndIndex = -1;
  },
  oncomment(start, end) {
    if (currentOptions.comments) {
      addNode({
        type: 3,
        content: getSlice(start, end),
        loc: getLoc(start - 4, end + 3)
      });
    }
  },
  onend() {
    const end = currentInput.length;
    if (tokenizer.state !== 1) {
      switch (tokenizer.state) {
        case 5:
        case 8:
          emitError(5, end);
          break;
        case 3:
        case 4:
          emitError(
            25,
            tokenizer.sectionStart
          );
          break;
        case 28:
          if (tokenizer.currentSequence === Sequences.CdataEnd) {
            emitError(6, end);
          } else {
            emitError(7, end);
          }
          break;
        case 6:
        case 7:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
          emitError(9, end);
          break;
      }
    }
    for (let index2 = 0; index2 < stack.length; index2++) {
      onCloseTag(stack[index2], end - 1);
      emitError(24, stack[index2].loc.start.offset);
    }
  },
  oncdata(start, end) {
    if (stack[0].ns !== 0) {
      onText(getSlice(start, end), start, end);
    } else {
      emitError(1, start - 9);
    }
  },
  onprocessinginstruction(start) {
    if ((stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
      emitError(
        21,
        start - 1
      );
    }
  }
});
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
function parseForExpression(input) {
  const loc = input.loc;
  const exp = input.content;
  const inMatch = exp.match(forAliasRE);
  if (!inMatch) return;
  const [, LHS, RHS] = inMatch;
  const createAliasExpression = (content, offset, asParam = false) => {
    const start = loc.start.offset + offset;
    const end = start + content.length;
    return createExp(
      content,
      false,
      getLoc(start, end),
      0,
      asParam ? 1 : 0
      /* Normal */
    );
  };
  const result = {
    source: createAliasExpression(RHS.trim(), exp.indexOf(RHS, LHS.length)),
    value: void 0,
    key: void 0,
    index: void 0,
    finalized: false
  };
  let valueContent = LHS.trim().replace(stripParensRE, "").trim();
  const trimmedOffset = LHS.indexOf(valueContent);
  const iteratorMatch = valueContent.match(forIteratorRE);
  if (iteratorMatch) {
    valueContent = valueContent.replace(forIteratorRE, "").trim();
    const keyContent = iteratorMatch[1].trim();
    let keyOffset;
    if (keyContent) {
      keyOffset = exp.indexOf(keyContent, trimmedOffset + valueContent.length);
      result.key = createAliasExpression(keyContent, keyOffset, true);
    }
    if (iteratorMatch[2]) {
      const indexContent = iteratorMatch[2].trim();
      if (indexContent) {
        result.index = createAliasExpression(
          indexContent,
          exp.indexOf(
            indexContent,
            result.key ? keyOffset + keyContent.length : trimmedOffset + valueContent.length
          ),
          true
        );
      }
    }
  }
  if (valueContent) {
    result.value = createAliasExpression(valueContent, trimmedOffset, true);
  }
  return result;
}
function getSlice(start, end) {
  return currentInput.slice(start, end);
}
function endOpenTag(end) {
  if (tokenizer.inSFCRoot) {
    currentOpenTag.innerLoc = getLoc(end + 1, end + 1);
  }
  addNode(currentOpenTag);
  const { tag, ns: ns4 } = currentOpenTag;
  if (ns4 === 0 && currentOptions.isPreTag(tag)) {
    inPre++;
  }
  if (currentOptions.isVoidTag(tag)) {
    onCloseTag(currentOpenTag, end);
  } else {
    stack.unshift(currentOpenTag);
    if (ns4 === 1 || ns4 === 2) {
      tokenizer.inXML = true;
    }
  }
  currentOpenTag = null;
}
function onText(content, start, end) {
  {
    const tag = stack[0] && stack[0].tag;
    if (tag !== "script" && tag !== "style" && content.includes("&")) {
      content = currentOptions.decodeEntities(content, false);
    }
  }
  const parent = stack[0] || currentRoot;
  const lastNode = parent.children[parent.children.length - 1];
  if (lastNode && lastNode.type === 2) {
    lastNode.content += content;
    setLocEnd(lastNode.loc, end);
  } else {
    parent.children.push({
      type: 2,
      content,
      loc: getLoc(start, end)
    });
  }
}
function onCloseTag(el, end, isImplied = false) {
  if (isImplied) {
    setLocEnd(el.loc, backTrack(end, 60));
  } else {
    setLocEnd(el.loc, lookAhead(end, 62) + 1);
  }
  if (tokenizer.inSFCRoot) {
    if (el.children.length) {
      el.innerLoc.end = extend({}, el.children[el.children.length - 1].loc.end);
    } else {
      el.innerLoc.end = extend({}, el.innerLoc.start);
    }
    el.innerLoc.source = getSlice(
      el.innerLoc.start.offset,
      el.innerLoc.end.offset
    );
  }
  const { tag, ns: ns4, children } = el;
  if (!inVPre) {
    if (tag === "slot") {
      el.tagType = 2;
    } else if (isFragmentTemplate(el)) {
      el.tagType = 3;
    } else if (isComponent(el)) {
      el.tagType = 1;
    }
  }
  if (!tokenizer.inRCDATA) {
    el.children = condenseWhitespace(children);
  }
  if (ns4 === 0 && currentOptions.isIgnoreNewlineTag(tag)) {
    const first = children[0];
    if (first && first.type === 2) {
      first.content = first.content.replace(/^\r?\n/, "");
    }
  }
  if (ns4 === 0 && currentOptions.isPreTag(tag)) {
    inPre--;
  }
  if (currentVPreBoundary === el) {
    inVPre = tokenizer.inVPre = false;
    currentVPreBoundary = null;
  }
  if (tokenizer.inXML && (stack[0] ? stack[0].ns : currentOptions.ns) === 0) {
    tokenizer.inXML = false;
  }
  {
    const props = el.props;
    if (isCompatEnabled(
      "COMPILER_V_IF_V_FOR_PRECEDENCE",
      currentOptions
    )) {
      let hasIf = false;
      let hasFor = false;
      for (let i = 0; i < props.length; i++) {
        const p = props[i];
        if (p.type === 7) {
          if (p.name === "if") {
            hasIf = true;
          } else if (p.name === "for") {
            hasFor = true;
          }
        }
        if (hasIf && hasFor) {
          warnDeprecation(
            "COMPILER_V_IF_V_FOR_PRECEDENCE",
            currentOptions,
            el.loc
          );
          break;
        }
      }
    }
    if (!tokenizer.inSFCRoot && isCompatEnabled(
      "COMPILER_NATIVE_TEMPLATE",
      currentOptions
    ) && el.tag === "template" && !isFragmentTemplate(el)) {
      warnDeprecation(
        "COMPILER_NATIVE_TEMPLATE",
        currentOptions,
        el.loc
      );
      const parent = stack[0] || currentRoot;
      const index2 = parent.children.indexOf(el);
      parent.children.splice(index2, 1, ...el.children);
    }
    const inlineTemplateProp = props.find(
      (p) => p.type === 6 && p.name === "inline-template"
    );
    if (inlineTemplateProp && checkCompatEnabled(
      "COMPILER_INLINE_TEMPLATE",
      currentOptions,
      inlineTemplateProp.loc
    ) && el.children.length) {
      inlineTemplateProp.value = {
        type: 2,
        content: getSlice(
          el.children[0].loc.start.offset,
          el.children[el.children.length - 1].loc.end.offset
        ),
        loc: inlineTemplateProp.loc
      };
    }
  }
}
function lookAhead(index2, c) {
  let i = index2;
  while (currentInput.charCodeAt(i) !== c && i < currentInput.length - 1) i++;
  return i;
}
function backTrack(index2, c) {
  let i = index2;
  while (currentInput.charCodeAt(i) !== c && i >= 0) i--;
  return i;
}
var specialTemplateDir = /* @__PURE__ */ new Set(["if", "else", "else-if", "for", "slot"]);
function isFragmentTemplate({ tag, props }) {
  if (tag === "template") {
    for (let i = 0; i < props.length; i++) {
      if (props[i].type === 7 && specialTemplateDir.has(props[i].name)) {
        return true;
      }
    }
  }
  return false;
}
function isComponent({ tag, props }) {
  if (currentOptions.isCustomElement(tag)) {
    return false;
  }
  if (tag === "component" || isUpperCase(tag.charCodeAt(0)) || isCoreComponent(tag) || currentOptions.isBuiltInComponent && currentOptions.isBuiltInComponent(tag) || currentOptions.isNativeTag && !currentOptions.isNativeTag(tag)) {
    return true;
  }
  for (let i = 0; i < props.length; i++) {
    const p = props[i];
    if (p.type === 6) {
      if (p.name === "is" && p.value) {
        if (p.value.content.startsWith("vue:")) {
          return true;
        } else if (checkCompatEnabled(
          "COMPILER_IS_ON_ELEMENT",
          currentOptions,
          p.loc
        )) {
          return true;
        }
      }
    } else if (
      // :is on plain element - only treat as component in compat mode
      p.name === "bind" && isStaticArgOf(p.arg, "is") && checkCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        currentOptions,
        p.loc
      )
    ) {
      return true;
    }
  }
  return false;
}
function isUpperCase(c) {
  return c > 64 && c < 91;
}
var windowsNewlineRE = /\r\n/g;
function condenseWhitespace(nodes) {
  const shouldCondense = currentOptions.whitespace !== "preserve";
  let removedWhitespace = false;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (node.type === 2) {
      if (!inPre) {
        if (isAllWhitespace(node.content)) {
          const prev = nodes[i - 1] && nodes[i - 1].type;
          const next = nodes[i + 1] && nodes[i + 1].type;
          if (!prev || !next || shouldCondense && (prev === 3 && (next === 3 || next === 1) || prev === 1 && (next === 3 || next === 1 && hasNewlineChar(node.content)))) {
            removedWhitespace = true;
            nodes[i] = null;
          } else {
            node.content = " ";
          }
        } else if (shouldCondense) {
          node.content = condense(node.content);
        }
      } else {
        node.content = node.content.replace(windowsNewlineRE, "\n");
      }
    }
  }
  return removedWhitespace ? nodes.filter(Boolean) : nodes;
}
function isAllWhitespace(str2) {
  for (let i = 0; i < str2.length; i++) {
    if (!isWhitespace2(str2.charCodeAt(i))) {
      return false;
    }
  }
  return true;
}
function hasNewlineChar(str2) {
  for (let i = 0; i < str2.length; i++) {
    const c = str2.charCodeAt(i);
    if (c === 10 || c === 13) {
      return true;
    }
  }
  return false;
}
function condense(str2) {
  let ret = "";
  let prevCharIsWhitespace = false;
  for (let i = 0; i < str2.length; i++) {
    if (isWhitespace2(str2.charCodeAt(i))) {
      if (!prevCharIsWhitespace) {
        ret += " ";
        prevCharIsWhitespace = true;
      }
    } else {
      ret += str2[i];
      prevCharIsWhitespace = false;
    }
  }
  return ret;
}
function addNode(node) {
  (stack[0] || currentRoot).children.push(node);
}
function getLoc(start, end) {
  return {
    start: tokenizer.getPos(start),
    // @ts-expect-error allow late attachment
    end: end == null ? end : tokenizer.getPos(end),
    // @ts-expect-error allow late attachment
    source: end == null ? end : getSlice(start, end)
  };
}
function cloneLoc(loc) {
  return getLoc(loc.start.offset, loc.end.offset);
}
function setLocEnd(loc, end) {
  loc.end = tokenizer.getPos(end);
  loc.source = getSlice(loc.start.offset, end);
}
function dirToAttr(dir) {
  const attr = {
    type: 6,
    name: dir.rawName,
    nameLoc: getLoc(
      dir.loc.start.offset,
      dir.loc.start.offset + dir.rawName.length
    ),
    value: void 0,
    loc: dir.loc
  };
  if (dir.exp) {
    const loc = dir.exp.loc;
    if (loc.end.offset < dir.loc.end.offset) {
      loc.start.offset--;
      loc.start.column--;
      loc.end.offset++;
      loc.end.column++;
    }
    attr.value = {
      type: 2,
      content: dir.exp.content,
      loc
    };
  }
  return attr;
}
function createExp(content, isStatic = false, loc, constType = 0, parseMode = 0) {
  const exp = createSimpleExpression(content, isStatic, loc, constType);
  return exp;
}
function emitError(code, index2, message2) {
  currentOptions.onError(
    createCompilerError(code, getLoc(index2, index2), void 0, message2)
  );
}
function reset() {
  tokenizer.reset();
  currentOpenTag = null;
  currentProp = null;
  currentAttrValue = "";
  currentAttrStartIndex = -1;
  currentAttrEndIndex = -1;
  stack.length = 0;
}
function baseParse(input, options) {
  reset();
  currentInput = input;
  currentOptions = extend({}, defaultParserOptions);
  if (options) {
    let key;
    for (key in options) {
      if (options[key] != null) {
        currentOptions[key] = options[key];
      }
    }
  }
  if (true) {
    if (!currentOptions.decodeEntities) {
      throw new Error(
        `[@vue/compiler-core] decodeEntities option is required in browser builds.`
      );
    }
  }
  tokenizer.mode = currentOptions.parseMode === "html" ? 1 : currentOptions.parseMode === "sfc" ? 2 : 0;
  tokenizer.inXML = currentOptions.ns === 1 || currentOptions.ns === 2;
  const delimiters = options && options.delimiters;
  if (delimiters) {
    tokenizer.delimiterOpen = toCharCodes(delimiters[0]);
    tokenizer.delimiterClose = toCharCodes(delimiters[1]);
  }
  const root = currentRoot = createRoot([], input);
  tokenizer.parse(currentInput);
  root.loc = getLoc(0, input.length);
  root.children = condenseWhitespace(root.children);
  currentRoot = null;
  return root;
}
function cacheStatic(root, context) {
  walk(
    root,
    void 0,
    context,
    // Root node is unfortunately non-hoistable due to potential parent
    // fallthrough attributes.
    !!getSingleElementRoot(root)
  );
}
function getSingleElementRoot(root) {
  const children = root.children.filter((x) => x.type !== 3);
  return children.length === 1 && children[0].type === 1 && !isSlotOutlet(children[0]) ? children[0] : null;
}
function walk(node, parent, context, doNotHoistNode = false, inFor = false) {
  const { children } = node;
  const toCache = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child.type === 1 && child.tagType === 0) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType > 0) {
        if (constantType >= 2) {
          child.codegenNode.patchFlag = -1;
          toCache.push(child);
          continue;
        }
      } else {
        const codegenNode = child.codegenNode;
        if (codegenNode.type === 13) {
          const flag = codegenNode.patchFlag;
          if ((flag === void 0 || flag === 512 || flag === 1) && getGeneratedPropsConstantType(child, context) >= 2) {
            const props = getNodeProps(child);
            if (props) {
              codegenNode.props = context.hoist(props);
            }
          }
          if (codegenNode.dynamicProps) {
            codegenNode.dynamicProps = context.hoist(codegenNode.dynamicProps);
          }
        }
      }
    } else if (child.type === 12) {
      const constantType = doNotHoistNode ? 0 : getConstantType(child, context);
      if (constantType >= 2) {
        toCache.push(child);
        continue;
      }
    }
    if (child.type === 1) {
      const isComponent2 = child.tagType === 1;
      if (isComponent2) {
        context.scopes.vSlot++;
      }
      walk(child, node, context, false, inFor);
      if (isComponent2) {
        context.scopes.vSlot--;
      }
    } else if (child.type === 11) {
      walk(child, node, context, child.children.length === 1, true);
    } else if (child.type === 9) {
      for (let i2 = 0; i2 < child.branches.length; i2++) {
        walk(
          child.branches[i2],
          node,
          context,
          child.branches[i2].children.length === 1,
          inFor
        );
      }
    }
  }
  let cachedAsArray = false;
  const slotCacheKeys = [];
  if (toCache.length === children.length && node.type === 1) {
    if (node.tagType === 0 && node.codegenNode && node.codegenNode.type === 13 && isArray(node.codegenNode.children)) {
      node.codegenNode.children = getCacheExpression(
        createArrayExpression(node.codegenNode.children)
      );
      cachedAsArray = true;
    } else if (node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
      const slot = getSlotNode(node.codegenNode, "default");
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    } else if (node.tagType === 3 && parent && parent.type === 1 && parent.tagType === 1 && parent.codegenNode && parent.codegenNode.type === 13 && parent.codegenNode.children && !isArray(parent.codegenNode.children) && parent.codegenNode.children.type === 15) {
      const slotName = findDir(node, "slot", true);
      const slot = slotName && slotName.arg && getSlotNode(parent.codegenNode, slotName.arg);
      if (slot) {
        slotCacheKeys.push(context.cached.length);
        slot.returns = getCacheExpression(
          createArrayExpression(slot.returns)
        );
        cachedAsArray = true;
      }
    }
  }
  if (!cachedAsArray) {
    for (const child of toCache) {
      slotCacheKeys.push(context.cached.length);
      child.codegenNode = context.cache(child.codegenNode);
    }
  }
  if (slotCacheKeys.length && node.type === 1 && node.tagType === 1 && node.codegenNode && node.codegenNode.type === 13 && node.codegenNode.children && !isArray(node.codegenNode.children) && node.codegenNode.children.type === 15) {
    node.codegenNode.children.properties.push(
      createObjectProperty(
        `__`,
        createSimpleExpression(JSON.stringify(slotCacheKeys), false)
      )
    );
  }
  function getCacheExpression(value) {
    const exp = context.cache(value);
    if (inFor && context.hmr) {
      exp.needArraySpread = true;
    }
    return exp;
  }
  function getSlotNode(node2, name) {
    if (node2.children && !isArray(node2.children) && node2.children.type === 15) {
      const slot = node2.children.properties.find(
        (p) => p.key === name || p.key.content === name
      );
      return slot && slot.value;
    }
  }
  if (toCache.length && context.transformHoist) {
    context.transformHoist(children, context, node);
  }
}
function getConstantType(node, context) {
  const { constantCache } = context;
  switch (node.type) {
    case 1:
      if (node.tagType !== 0) {
        return 0;
      }
      const cached = constantCache.get(node);
      if (cached !== void 0) {
        return cached;
      }
      const codegenNode = node.codegenNode;
      if (codegenNode.type !== 13) {
        return 0;
      }
      if (codegenNode.isBlock && node.tag !== "svg" && node.tag !== "foreignObject" && node.tag !== "math") {
        return 0;
      }
      if (codegenNode.patchFlag === void 0) {
        let returnType2 = 3;
        const generatedPropsType = getGeneratedPropsConstantType(node, context);
        if (generatedPropsType === 0) {
          constantCache.set(node, 0);
          return 0;
        }
        if (generatedPropsType < returnType2) {
          returnType2 = generatedPropsType;
        }
        for (let i = 0; i < node.children.length; i++) {
          const childType = getConstantType(node.children[i], context);
          if (childType === 0) {
            constantCache.set(node, 0);
            return 0;
          }
          if (childType < returnType2) {
            returnType2 = childType;
          }
        }
        if (returnType2 > 1) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7 && p.name === "bind" && p.exp) {
              const expType = getConstantType(p.exp, context);
              if (expType === 0) {
                constantCache.set(node, 0);
                return 0;
              }
              if (expType < returnType2) {
                returnType2 = expType;
              }
            }
          }
        }
        if (codegenNode.isBlock) {
          for (let i = 0; i < node.props.length; i++) {
            const p = node.props[i];
            if (p.type === 7) {
              constantCache.set(node, 0);
              return 0;
            }
          }
          context.removeHelper(OPEN_BLOCK);
          context.removeHelper(
            getVNodeBlockHelper(context.inSSR, codegenNode.isComponent)
          );
          codegenNode.isBlock = false;
          context.helper(getVNodeHelper(context.inSSR, codegenNode.isComponent));
        }
        constantCache.set(node, returnType2);
        return returnType2;
      } else {
        constantCache.set(node, 0);
        return 0;
      }
    case 2:
    case 3:
      return 3;
    case 9:
    case 11:
    case 10:
      return 0;
    case 5:
    case 12:
      return getConstantType(node.content, context);
    case 4:
      return node.constType;
    case 8:
      let returnType = 3;
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];
        if (isString(child) || isSymbol(child)) {
          continue;
        }
        const childType = getConstantType(child, context);
        if (childType === 0) {
          return 0;
        } else if (childType < returnType) {
          returnType = childType;
        }
      }
      return returnType;
    case 20:
      return 2;
    default:
      if (true) ;
      return 0;
  }
}
var allowHoistedHelperSet = /* @__PURE__ */ new Set([
  NORMALIZE_CLASS,
  NORMALIZE_STYLE,
  NORMALIZE_PROPS,
  GUARD_REACTIVE_PROPS
]);
function getConstantTypeOfHelperCall(value, context) {
  if (value.type === 14 && !isString(value.callee) && allowHoistedHelperSet.has(value.callee)) {
    const arg = value.arguments[0];
    if (arg.type === 4) {
      return getConstantType(arg, context);
    } else if (arg.type === 14) {
      return getConstantTypeOfHelperCall(arg, context);
    }
  }
  return 0;
}
function getGeneratedPropsConstantType(node, context) {
  let returnType = 3;
  const props = getNodeProps(node);
  if (props && props.type === 15) {
    const { properties } = props;
    for (let i = 0; i < properties.length; i++) {
      const { key, value } = properties[i];
      const keyType = getConstantType(key, context);
      if (keyType === 0) {
        return keyType;
      }
      if (keyType < returnType) {
        returnType = keyType;
      }
      let valueType;
      if (value.type === 4) {
        valueType = getConstantType(value, context);
      } else if (value.type === 14) {
        valueType = getConstantTypeOfHelperCall(value, context);
      } else {
        valueType = 0;
      }
      if (valueType === 0) {
        return valueType;
      }
      if (valueType < returnType) {
        returnType = valueType;
      }
    }
  }
  return returnType;
}
function getNodeProps(node) {
  const codegenNode = node.codegenNode;
  if (codegenNode.type === 13) {
    return codegenNode.props;
  }
}
function createTransformContext(root, {
  filename = "",
  prefixIdentifiers = false,
  hoistStatic = false,
  hmr = false,
  cacheHandlers = false,
  nodeTransforms = [],
  directiveTransforms = {},
  transformHoist = null,
  isBuiltInComponent = NOOP,
  isCustomElement = NOOP,
  expressionPlugins = [],
  scopeId = null,
  slotted = true,
  ssr = false,
  inSSR = false,
  ssrCssVars = ``,
  bindingMetadata = EMPTY_OBJ,
  inline = false,
  isTS = false,
  onError = defaultOnError,
  onWarn = defaultOnWarn,
  compatConfig
}) {
  const nameMatch = filename.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/);
  const context = {
    // options
    filename,
    selfName: nameMatch && capitalize(camelize(nameMatch[1])),
    prefixIdentifiers,
    hoistStatic,
    hmr,
    cacheHandlers,
    nodeTransforms,
    directiveTransforms,
    transformHoist,
    isBuiltInComponent,
    isCustomElement,
    expressionPlugins,
    scopeId,
    slotted,
    ssr,
    inSSR,
    ssrCssVars,
    bindingMetadata,
    inline,
    isTS,
    onError,
    onWarn,
    compatConfig,
    // state
    root,
    helpers: /* @__PURE__ */ new Map(),
    components: /* @__PURE__ */ new Set(),
    directives: /* @__PURE__ */ new Set(),
    hoists: [],
    imports: [],
    cached: [],
    constantCache: /* @__PURE__ */ new WeakMap(),
    temps: 0,
    identifiers: /* @__PURE__ */ Object.create(null),
    scopes: {
      vFor: 0,
      vSlot: 0,
      vPre: 0,
      vOnce: 0
    },
    parent: null,
    grandParent: null,
    currentNode: root,
    childIndex: 0,
    inVOnce: false,
    // methods
    helper(name) {
      const count = context.helpers.get(name) || 0;
      context.helpers.set(name, count + 1);
      return name;
    },
    removeHelper(name) {
      const count = context.helpers.get(name);
      if (count) {
        const currentCount = count - 1;
        if (!currentCount) {
          context.helpers.delete(name);
        } else {
          context.helpers.set(name, currentCount);
        }
      }
    },
    helperString(name) {
      return `_${helperNameMap[context.helper(name)]}`;
    },
    replaceNode(node) {
      if (true) {
        if (!context.currentNode) {
          throw new Error(`Node being replaced is already removed.`);
        }
        if (!context.parent) {
          throw new Error(`Cannot replace root node.`);
        }
      }
      context.parent.children[context.childIndex] = context.currentNode = node;
    },
    removeNode(node) {
      if (!context.parent) {
        throw new Error(`Cannot remove root node.`);
      }
      const list = context.parent.children;
      const removalIndex = node ? list.indexOf(node) : context.currentNode ? context.childIndex : -1;
      if (removalIndex < 0) {
        throw new Error(`node being removed is not a child of current parent`);
      }
      if (!node || node === context.currentNode) {
        context.currentNode = null;
        context.onNodeRemoved();
      } else {
        if (context.childIndex > removalIndex) {
          context.childIndex--;
          context.onNodeRemoved();
        }
      }
      context.parent.children.splice(removalIndex, 1);
    },
    onNodeRemoved: NOOP,
    addIdentifiers(exp) {
    },
    removeIdentifiers(exp) {
    },
    hoist(exp) {
      if (isString(exp)) exp = createSimpleExpression(exp);
      context.hoists.push(exp);
      const identifier = createSimpleExpression(
        `_hoisted_${context.hoists.length}`,
        false,
        exp.loc,
        2
      );
      identifier.hoisted = exp;
      return identifier;
    },
    cache(exp, isVNode2 = false, inVOnce = false) {
      const cacheExp = createCacheExpression(
        context.cached.length,
        exp,
        isVNode2,
        inVOnce
      );
      context.cached.push(cacheExp);
      return cacheExp;
    }
  };
  {
    context.filters = /* @__PURE__ */ new Set();
  }
  return context;
}
function transform(root, options) {
  const context = createTransformContext(root, options);
  traverseNode(root, context);
  if (options.hoistStatic) {
    cacheStatic(root, context);
  }
  if (!options.ssr) {
    createRootCodegen(root, context);
  }
  root.helpers = /* @__PURE__ */ new Set([...context.helpers.keys()]);
  root.components = [...context.components];
  root.directives = [...context.directives];
  root.imports = context.imports;
  root.hoists = context.hoists;
  root.temps = context.temps;
  root.cached = context.cached;
  root.transformed = true;
  {
    root.filters = [...context.filters];
  }
}
function createRootCodegen(root, context) {
  const { helper } = context;
  const { children } = root;
  if (children.length === 1) {
    const singleElementRootChild = getSingleElementRoot(root);
    if (singleElementRootChild && singleElementRootChild.codegenNode) {
      const codegenNode = singleElementRootChild.codegenNode;
      if (codegenNode.type === 13) {
        convertToBlock(codegenNode, context);
      }
      root.codegenNode = codegenNode;
    } else {
      root.codegenNode = children[0];
    }
  } else if (children.length > 1) {
    let patchFlag = 64;
    if (children.filter((c) => c.type !== 3).length === 1) {
      patchFlag |= 2048;
    }
    root.codegenNode = createVNodeCall(
      context,
      helper(FRAGMENT),
      void 0,
      root.children,
      patchFlag,
      void 0,
      void 0,
      true,
      void 0,
      false
    );
  } else ;
}
function traverseChildren(parent, context) {
  let i = 0;
  const nodeRemoved = () => {
    i--;
  };
  for (; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (isString(child)) continue;
    context.grandParent = context.parent;
    context.parent = parent;
    context.childIndex = i;
    context.onNodeRemoved = nodeRemoved;
    traverseNode(child, context);
  }
}
function traverseNode(node, context) {
  context.currentNode = node;
  const { nodeTransforms } = context;
  const exitFns = [];
  for (let i2 = 0; i2 < nodeTransforms.length; i2++) {
    const onExit = nodeTransforms[i2](node, context);
    if (onExit) {
      if (isArray(onExit)) {
        exitFns.push(...onExit);
      } else {
        exitFns.push(onExit);
      }
    }
    if (!context.currentNode) {
      return;
    } else {
      node = context.currentNode;
    }
  }
  switch (node.type) {
    case 3:
      if (!context.ssr) {
        context.helper(CREATE_COMMENT);
      }
      break;
    case 5:
      if (!context.ssr) {
        context.helper(TO_DISPLAY_STRING);
      }
      break;
    case 9:
      for (let i2 = 0; i2 < node.branches.length; i2++) {
        traverseNode(node.branches[i2], context);
      }
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      traverseChildren(node, context);
      break;
  }
  context.currentNode = node;
  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}
function createStructuralDirectiveTransform(name, fn) {
  const matches = isString(name) ? (n) => n === name : (n) => name.test(n);
  return (node, context) => {
    if (node.type === 1) {
      const { props } = node;
      if (node.tagType === 3 && props.some(isVSlot)) {
        return;
      }
      const exitFns = [];
      for (let i = 0; i < props.length; i++) {
        const prop = props[i];
        if (prop.type === 7 && matches(prop.name)) {
          props.splice(i, 1);
          i--;
          const onExit = fn(node, prop, context);
          if (onExit) exitFns.push(onExit);
        }
      }
      return exitFns;
    }
  };
}
var PURE_ANNOTATION = `/*@__PURE__*/`;
var aliasHelper = (s) => `${helperNameMap[s]}: _${helperNameMap[s]}`;
function createCodegenContext(ast, {
  mode = "function",
  prefixIdentifiers = mode === "module",
  sourceMap = false,
  filename = `template.vue.html`,
  scopeId = null,
  optimizeImports = false,
  runtimeGlobalName = `Vue`,
  runtimeModuleName = `vue`,
  ssrRuntimeModuleName = "vue/server-renderer",
  ssr = false,
  isTS = false,
  inSSR = false
}) {
  const context = {
    mode,
    prefixIdentifiers,
    sourceMap,
    filename,
    scopeId,
    optimizeImports,
    runtimeGlobalName,
    runtimeModuleName,
    ssrRuntimeModuleName,
    ssr,
    isTS,
    inSSR,
    source: ast.source,
    code: ``,
    column: 1,
    line: 1,
    offset: 0,
    indentLevel: 0,
    pure: false,
    map: void 0,
    helper(key) {
      return `_${helperNameMap[key]}`;
    },
    push(code, newlineIndex = -2, node) {
      context.code += code;
    },
    indent() {
      newline(++context.indentLevel);
    },
    deindent(withoutNewLine = false) {
      if (withoutNewLine) {
        --context.indentLevel;
      } else {
        newline(--context.indentLevel);
      }
    },
    newline() {
      newline(context.indentLevel);
    }
  };
  function newline(n) {
    context.push(
      "\n" + `  `.repeat(n),
      0
      /* Start */
    );
  }
  return context;
}
function generate(ast, options = {}) {
  const context = createCodegenContext(ast, options);
  if (options.onContextCreated) options.onContextCreated(context);
  const {
    mode,
    push,
    prefixIdentifiers,
    indent,
    deindent,
    newline,
    scopeId,
    ssr
  } = context;
  const helpers = Array.from(ast.helpers);
  const hasHelpers = helpers.length > 0;
  const useWithBlock = !prefixIdentifiers && mode !== "module";
  const preambleContext = context;
  {
    genFunctionPreamble(ast, preambleContext);
  }
  const functionName = ssr ? `ssrRender` : `render`;
  const args = ssr ? ["_ctx", "_push", "_parent", "_attrs"] : ["_ctx", "_cache"];
  const signature = args.join(", ");
  {
    push(`function ${functionName}(${signature}) {`);
  }
  indent();
  if (useWithBlock) {
    push(`with (_ctx) {`);
    indent();
    if (hasHelpers) {
      push(
        `const { ${helpers.map(aliasHelper).join(", ")} } = _Vue
`,
        -1
        /* End */
      );
      newline();
    }
  }
  if (ast.components.length) {
    genAssets(ast.components, "component", context);
    if (ast.directives.length || ast.temps > 0) {
      newline();
    }
  }
  if (ast.directives.length) {
    genAssets(ast.directives, "directive", context);
    if (ast.temps > 0) {
      newline();
    }
  }
  if (ast.filters && ast.filters.length) {
    newline();
    genAssets(ast.filters, "filter", context);
    newline();
  }
  if (ast.temps > 0) {
    push(`let `);
    for (let i = 0; i < ast.temps; i++) {
      push(`${i > 0 ? `, ` : ``}_temp${i}`);
    }
  }
  if (ast.components.length || ast.directives.length || ast.temps) {
    push(
      `
`,
      0
      /* Start */
    );
    newline();
  }
  if (!ssr) {
    push(`return `);
  }
  if (ast.codegenNode) {
    genNode(ast.codegenNode, context);
  } else {
    push(`null`);
  }
  if (useWithBlock) {
    deindent();
    push(`}`);
  }
  deindent();
  push(`}`);
  return {
    ast,
    code: context.code,
    preamble: ``,
    map: context.map ? context.map.toJSON() : void 0
  };
}
function genFunctionPreamble(ast, context) {
  const {
    ssr,
    prefixIdentifiers,
    push,
    newline,
    runtimeModuleName,
    runtimeGlobalName,
    ssrRuntimeModuleName
  } = context;
  const VueBinding = runtimeGlobalName;
  const helpers = Array.from(ast.helpers);
  if (helpers.length > 0) {
    {
      push(
        `const _Vue = ${VueBinding}
`,
        -1
        /* End */
      );
      if (ast.hoists.length) {
        const staticHelpers = [
          CREATE_VNODE,
          CREATE_ELEMENT_VNODE,
          CREATE_COMMENT,
          CREATE_TEXT,
          CREATE_STATIC
        ].filter((helper) => helpers.includes(helper)).map(aliasHelper).join(", ");
        push(
          `const { ${staticHelpers} } = _Vue
`,
          -1
          /* End */
        );
      }
    }
  }
  genHoists(ast.hoists, context);
  newline();
  push(`return `);
}
function genAssets(assets, type2, { helper, push, newline, isTS }) {
  const resolver = helper(
    type2 === "filter" ? RESOLVE_FILTER : type2 === "component" ? RESOLVE_COMPONENT : RESOLVE_DIRECTIVE
  );
  for (let i = 0; i < assets.length; i++) {
    let id = assets[i];
    const maybeSelfReference = id.endsWith("__self");
    if (maybeSelfReference) {
      id = id.slice(0, -6);
    }
    push(
      `const ${toValidAssetId(id, type2)} = ${resolver}(${JSON.stringify(id)}${maybeSelfReference ? `, true` : ``})${isTS ? `!` : ``}`
    );
    if (i < assets.length - 1) {
      newline();
    }
  }
}
function genHoists(hoists, context) {
  if (!hoists.length) {
    return;
  }
  context.pure = true;
  const { push, newline } = context;
  newline();
  for (let i = 0; i < hoists.length; i++) {
    const exp = hoists[i];
    if (exp) {
      push(`const _hoisted_${i + 1} = `);
      genNode(exp, context);
      newline();
    }
  }
  context.pure = false;
}
function isText(n) {
  return isString(n) || n.type === 4 || n.type === 2 || n.type === 5 || n.type === 8;
}
function genNodeListAsArray(nodes, context) {
  const multilines = nodes.length > 3 || nodes.some((n) => isArray(n) || !isText(n));
  context.push(`[`);
  multilines && context.indent();
  genNodeList(nodes, context, multilines);
  multilines && context.deindent();
  context.push(`]`);
}
function genNodeList(nodes, context, multilines = false, comma = true) {
  const { push, newline } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if (isString(node)) {
      push(
        node,
        -3
        /* Unknown */
      );
    } else if (isArray(node)) {
      genNodeListAsArray(node, context);
    } else {
      genNode(node, context);
    }
    if (i < nodes.length - 1) {
      if (multilines) {
        comma && push(",");
        newline();
      } else {
        comma && push(", ");
      }
    }
  }
}
function genNode(node, context) {
  if (isString(node)) {
    context.push(
      node,
      -3
      /* Unknown */
    );
    return;
  }
  if (isSymbol(node)) {
    context.push(context.helper(node));
    return;
  }
  switch (node.type) {
    case 1:
    case 9:
    case 11:
      assert(
        node.codegenNode != null,
        `Codegen node is missing for element/if/for node. Apply appropriate transforms first.`
      );
      genNode(node.codegenNode, context);
      break;
    case 2:
      genText(node, context);
      break;
    case 4:
      genExpression(node, context);
      break;
    case 5:
      genInterpolation(node, context);
      break;
    case 12:
      genNode(node.codegenNode, context);
      break;
    case 8:
      genCompoundExpression(node, context);
      break;
    case 3:
      genComment(node, context);
      break;
    case 13:
      genVNodeCall(node, context);
      break;
    case 14:
      genCallExpression(node, context);
      break;
    case 15:
      genObjectExpression(node, context);
      break;
    case 17:
      genArrayExpression(node, context);
      break;
    case 18:
      genFunctionExpression(node, context);
      break;
    case 19:
      genConditionalExpression(node, context);
      break;
    case 20:
      genCacheExpression(node, context);
      break;
    case 21:
      genNodeList(node.body, context, true, false);
      break;
    case 22:
      break;
    case 23:
      break;
    case 24:
      break;
    case 25:
      break;
    case 26:
      break;
    case 10:
      break;
    default:
      if (true) {
        assert(false, `unhandled codegen node type: ${node.type}`);
        const exhaustiveCheck = node;
        return exhaustiveCheck;
      }
  }
}
function genText(node, context) {
  context.push(JSON.stringify(node.content), -3, node);
}
function genExpression(node, context) {
  const { content, isStatic } = node;
  context.push(
    isStatic ? JSON.stringify(content) : content,
    -3,
    node
  );
}
function genInterpolation(node, context) {
  const { push, helper, pure } = context;
  if (pure) push(PURE_ANNOTATION);
  push(`${helper(TO_DISPLAY_STRING)}(`);
  genNode(node.content, context);
  push(`)`);
}
function genCompoundExpression(node, context) {
  for (let i = 0; i < node.children.length; i++) {
    const child = node.children[i];
    if (isString(child)) {
      context.push(
        child,
        -3
        /* Unknown */
      );
    } else {
      genNode(child, context);
    }
  }
}
function genExpressionAsPropertyKey(node, context) {
  const { push } = context;
  if (node.type === 8) {
    push(`[`);
    genCompoundExpression(node, context);
    push(`]`);
  } else if (node.isStatic) {
    const text = isSimpleIdentifier(node.content) ? node.content : JSON.stringify(node.content);
    push(text, -2, node);
  } else {
    push(`[${node.content}]`, -3, node);
  }
}
function genComment(node, context) {
  const { push, helper, pure } = context;
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(
    `${helper(CREATE_COMMENT)}(${JSON.stringify(node.content)})`,
    -3,
    node
  );
}
function genVNodeCall(node, context) {
  const { push, helper, pure } = context;
  const {
    tag,
    props,
    children,
    patchFlag,
    dynamicProps,
    directives,
    isBlock,
    disableTracking,
    isComponent: isComponent2
  } = node;
  let patchFlagString;
  if (patchFlag) {
    if (true) {
      if (patchFlag < 0) {
        patchFlagString = patchFlag + ` /* ${PatchFlagNames[patchFlag]} */`;
      } else {
        const flagNames = Object.keys(PatchFlagNames).map(Number).filter((n) => n > 0 && patchFlag & n).map((n) => PatchFlagNames[n]).join(`, `);
        patchFlagString = patchFlag + ` /* ${flagNames} */`;
      }
    } else {
      patchFlagString = String(patchFlag);
    }
  }
  if (directives) {
    push(helper(WITH_DIRECTIVES) + `(`);
  }
  if (isBlock) {
    push(`(${helper(OPEN_BLOCK)}(${disableTracking ? `true` : ``}), `);
  }
  if (pure) {
    push(PURE_ANNOTATION);
  }
  const callHelper = isBlock ? getVNodeBlockHelper(context.inSSR, isComponent2) : getVNodeHelper(context.inSSR, isComponent2);
  push(helper(callHelper) + `(`, -2, node);
  genNodeList(
    genNullableArgs([tag, props, children, patchFlagString, dynamicProps]),
    context
  );
  push(`)`);
  if (isBlock) {
    push(`)`);
  }
  if (directives) {
    push(`, `);
    genNode(directives, context);
    push(`)`);
  }
}
function genNullableArgs(args) {
  let i = args.length;
  while (i--) {
    if (args[i] != null) break;
  }
  return args.slice(0, i + 1).map((arg) => arg || `null`);
}
function genCallExpression(node, context) {
  const { push, helper, pure } = context;
  const callee = isString(node.callee) ? node.callee : helper(node.callee);
  if (pure) {
    push(PURE_ANNOTATION);
  }
  push(callee + `(`, -2, node);
  genNodeList(node.arguments, context);
  push(`)`);
}
function genObjectExpression(node, context) {
  const { push, indent, deindent, newline } = context;
  const { properties } = node;
  if (!properties.length) {
    push(`{}`, -2, node);
    return;
  }
  const multilines = properties.length > 1 || properties.some((p) => p.value.type !== 4);
  push(multilines ? `{` : `{ `);
  multilines && indent();
  for (let i = 0; i < properties.length; i++) {
    const { key, value } = properties[i];
    genExpressionAsPropertyKey(key, context);
    push(`: `);
    genNode(value, context);
    if (i < properties.length - 1) {
      push(`,`);
      newline();
    }
  }
  multilines && deindent();
  push(multilines ? `}` : ` }`);
}
function genArrayExpression(node, context) {
  genNodeListAsArray(node.elements, context);
}
function genFunctionExpression(node, context) {
  const { push, indent, deindent } = context;
  const { params, returns, body, newline, isSlot } = node;
  if (isSlot) {
    push(`_${helperNameMap[WITH_CTX]}(`);
  }
  push(`(`, -2, node);
  if (isArray(params)) {
    genNodeList(params, context);
  } else if (params) {
    genNode(params, context);
  }
  push(`) => `);
  if (newline || body) {
    push(`{`);
    indent();
  }
  if (returns) {
    if (newline) {
      push(`return `);
    }
    if (isArray(returns)) {
      genNodeListAsArray(returns, context);
    } else {
      genNode(returns, context);
    }
  } else if (body) {
    genNode(body, context);
  }
  if (newline || body) {
    deindent();
    push(`}`);
  }
  if (isSlot) {
    if (node.isNonScopedSlot) {
      push(`, undefined, true`);
    }
    push(`)`);
  }
}
function genConditionalExpression(node, context) {
  const { test, consequent, alternate, newline: needNewline } = node;
  const { push, indent, deindent, newline } = context;
  if (test.type === 4) {
    const needsParens = !isSimpleIdentifier(test.content);
    needsParens && push(`(`);
    genExpression(test, context);
    needsParens && push(`)`);
  } else {
    push(`(`);
    genNode(test, context);
    push(`)`);
  }
  needNewline && indent();
  context.indentLevel++;
  needNewline || push(` `);
  push(`? `);
  genNode(consequent, context);
  context.indentLevel--;
  needNewline && newline();
  needNewline || push(` `);
  push(`: `);
  const isNested = alternate.type === 19;
  if (!isNested) {
    context.indentLevel++;
  }
  genNode(alternate, context);
  if (!isNested) {
    context.indentLevel--;
  }
  needNewline && deindent(
    true
    /* without newline */
  );
}
function genCacheExpression(node, context) {
  const { push, helper, indent, deindent, newline } = context;
  const { needPauseTracking, needArraySpread } = node;
  if (needArraySpread) {
    push(`[...(`);
  }
  push(`_cache[${node.index}] || (`);
  if (needPauseTracking) {
    indent();
    push(`${helper(SET_BLOCK_TRACKING)}(-1`);
    if (node.inVOnce) push(`, true`);
    push(`),`);
    newline();
    push(`(`);
  }
  push(`_cache[${node.index}] = `);
  genNode(node.value, context);
  if (needPauseTracking) {
    push(`).cacheIndex = ${node.index},`);
    newline();
    push(`${helper(SET_BLOCK_TRACKING)}(1),`);
    newline();
    push(`_cache[${node.index}]`);
    deindent();
  }
  push(`)`);
  if (needArraySpread) {
    push(`)]`);
  }
}
var prohibitedKeywordRE = new RegExp(
  "\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"
);
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function validateBrowserExpression(node, context, asParams = false, asRawStatements = false) {
  const exp = node.content;
  if (!exp.trim()) {
    return;
  }
  try {
    new Function(
      asRawStatements ? ` ${exp} ` : `return ${asParams ? `(${exp}) => {}` : `(${exp})`}`
    );
  } catch (e) {
    let message2 = e.message;
    const keywordMatch = exp.replace(stripStringRE, "").match(prohibitedKeywordRE);
    if (keywordMatch) {
      message2 = `avoid using JavaScript keyword as property name: "${keywordMatch[0]}"`;
    }
    context.onError(
      createCompilerError(
        45,
        node.loc,
        void 0,
        message2
      )
    );
  }
}
var transformExpression = (node, context) => {
  if (node.type === 5) {
    node.content = processExpression(
      node.content,
      context
    );
  } else if (node.type === 1) {
    const memo = findDir(node, "memo");
    for (let i = 0; i < node.props.length; i++) {
      const dir = node.props[i];
      if (dir.type === 7 && dir.name !== "for") {
        const exp = dir.exp;
        const arg = dir.arg;
        if (exp && exp.type === 4 && !(dir.name === "on" && arg) && // key has been processed in transformFor(vMemo + vFor)
        !(memo && arg && arg.type === 4 && arg.content === "key")) {
          dir.exp = processExpression(
            exp,
            context,
            // slot args must be processed as function params
            dir.name === "slot"
          );
        }
        if (arg && arg.type === 4 && !arg.isStatic) {
          dir.arg = processExpression(arg, context);
        }
      }
    }
  }
};
function processExpression(node, context, asParams = false, asRawStatements = false, localVars = Object.create(context.identifiers)) {
  {
    if (true) {
      validateBrowserExpression(node, context, asParams, asRawStatements);
    }
    return node;
  }
}
var transformIf = createStructuralDirectiveTransform(
  /^(if|else|else-if)$/,
  (node, dir, context) => {
    return processIf(node, dir, context, (ifNode, branch, isRoot) => {
      const siblings = context.parent.children;
      let i = siblings.indexOf(ifNode);
      let key = 0;
      while (i-- >= 0) {
        const sibling = siblings[i];
        if (sibling && sibling.type === 9) {
          key += sibling.branches.length;
        }
      }
      return () => {
        if (isRoot) {
          ifNode.codegenNode = createCodegenNodeForBranch(
            branch,
            key,
            context
          );
        } else {
          const parentCondition = getParentCondition(ifNode.codegenNode);
          parentCondition.alternate = createCodegenNodeForBranch(
            branch,
            key + ifNode.branches.length - 1,
            context
          );
        }
      };
    });
  }
);
function processIf(node, dir, context, processCodegen) {
  if (dir.name !== "else" && (!dir.exp || !dir.exp.content.trim())) {
    const loc = dir.exp ? dir.exp.loc : node.loc;
    context.onError(
      createCompilerError(28, dir.loc)
    );
    dir.exp = createSimpleExpression(`true`, false, loc);
  }
  if (dir.exp) {
    validateBrowserExpression(dir.exp, context);
  }
  if (dir.name === "if") {
    const branch = createIfBranch(node, dir);
    const ifNode = {
      type: 9,
      loc: cloneLoc(node.loc),
      branches: [branch]
    };
    context.replaceNode(ifNode);
    if (processCodegen) {
      return processCodegen(ifNode, branch, true);
    }
  } else {
    const siblings = context.parent.children;
    const comments = [];
    let i = siblings.indexOf(node);
    while (i-- >= -1) {
      const sibling = siblings[i];
      if (sibling && sibling.type === 3) {
        context.removeNode(sibling);
        comments.unshift(sibling);
        continue;
      }
      if (sibling && sibling.type === 2 && !sibling.content.trim().length) {
        context.removeNode(sibling);
        continue;
      }
      if (sibling && sibling.type === 9) {
        if (dir.name === "else-if" && sibling.branches[sibling.branches.length - 1].condition === void 0) {
          context.onError(
            createCompilerError(30, node.loc)
          );
        }
        context.removeNode();
        const branch = createIfBranch(node, dir);
        if (comments.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(context.parent && context.parent.type === 1 && (context.parent.tag === "transition" || context.parent.tag === "Transition"))) {
          branch.children = [...comments, ...branch.children];
        }
        if (true) {
          const key = branch.userKey;
          if (key) {
            sibling.branches.forEach(({ userKey }) => {
              if (isSameKey(userKey, key)) {
                context.onError(
                  createCompilerError(
                    29,
                    branch.userKey.loc
                  )
                );
              }
            });
          }
        }
        sibling.branches.push(branch);
        const onExit = processCodegen && processCodegen(sibling, branch, false);
        traverseNode(branch, context);
        if (onExit) onExit();
        context.currentNode = null;
      } else {
        context.onError(
          createCompilerError(30, node.loc)
        );
      }
      break;
    }
  }
}
function createIfBranch(node, dir) {
  const isTemplateIf = node.tagType === 3;
  return {
    type: 10,
    loc: node.loc,
    condition: dir.name === "else" ? void 0 : dir.exp,
    children: isTemplateIf && !findDir(node, "for") ? node.children : [node],
    userKey: findProp(node, `key`),
    isTemplateIf
  };
}
function createCodegenNodeForBranch(branch, keyIndex, context) {
  if (branch.condition) {
    return createConditionalExpression(
      branch.condition,
      createChildrenCodegenNode(branch, keyIndex, context),
      // make sure to pass in asBlock: true so that the comment node call
      // closes the current block.
      createCallExpression(context.helper(CREATE_COMMENT), [
        true ? '"v-if"' : '""',
        "true"
      ])
    );
  } else {
    return createChildrenCodegenNode(branch, keyIndex, context);
  }
}
function createChildrenCodegenNode(branch, keyIndex, context) {
  const { helper } = context;
  const keyProperty = createObjectProperty(
    `key`,
    createSimpleExpression(
      `${keyIndex}`,
      false,
      locStub,
      2
    )
  );
  const { children } = branch;
  const firstChild = children[0];
  const needFragmentWrapper = children.length !== 1 || firstChild.type !== 1;
  if (needFragmentWrapper) {
    if (children.length === 1 && firstChild.type === 11) {
      const vnodeCall = firstChild.codegenNode;
      injectProp(vnodeCall, keyProperty, context);
      return vnodeCall;
    } else {
      let patchFlag = 64;
      if (!branch.isTemplateIf && children.filter((c) => c.type !== 3).length === 1) {
        patchFlag |= 2048;
      }
      return createVNodeCall(
        context,
        helper(FRAGMENT),
        createObjectExpression([keyProperty]),
        children,
        patchFlag,
        void 0,
        void 0,
        true,
        false,
        false,
        branch.loc
      );
    }
  } else {
    const ret = firstChild.codegenNode;
    const vnodeCall = getMemoedVNodeCall(ret);
    if (vnodeCall.type === 13) {
      convertToBlock(vnodeCall, context);
    }
    injectProp(vnodeCall, keyProperty, context);
    return ret;
  }
}
function isSameKey(a, b) {
  if (!a || a.type !== b.type) {
    return false;
  }
  if (a.type === 6) {
    if (a.value.content !== b.value.content) {
      return false;
    }
  } else {
    const exp = a.exp;
    const branchExp = b.exp;
    if (exp.type !== branchExp.type) {
      return false;
    }
    if (exp.type !== 4 || exp.isStatic !== branchExp.isStatic || exp.content !== branchExp.content) {
      return false;
    }
  }
  return true;
}
function getParentCondition(node) {
  while (true) {
    if (node.type === 19) {
      if (node.alternate.type === 19) {
        node = node.alternate;
      } else {
        return node;
      }
    } else if (node.type === 20) {
      node = node.value;
    }
  }
}
var transformBind = (dir, _node, context) => {
  const { modifiers, loc } = dir;
  const arg = dir.arg;
  let { exp } = dir;
  if (exp && exp.type === 4 && !exp.content.trim()) {
    {
      exp = void 0;
    }
  }
  if (!exp) {
    if (arg.type !== 4 || !arg.isStatic) {
      context.onError(
        createCompilerError(
          52,
          arg.loc
        )
      );
      return {
        props: [
          createObjectProperty(arg, createSimpleExpression("", true, loc))
        ]
      };
    }
    transformBindShorthand(dir);
    exp = dir.exp;
  }
  if (arg.type !== 4) {
    arg.children.unshift(`(`);
    arg.children.push(`) || ""`);
  } else if (!arg.isStatic) {
    arg.content = `${arg.content} || ""`;
  }
  if (modifiers.some((mod) => mod.content === "camel")) {
    if (arg.type === 4) {
      if (arg.isStatic) {
        arg.content = camelize(arg.content);
      } else {
        arg.content = `${context.helperString(CAMELIZE)}(${arg.content})`;
      }
    } else {
      arg.children.unshift(`${context.helperString(CAMELIZE)}(`);
      arg.children.push(`)`);
    }
  }
  if (!context.inSSR) {
    if (modifiers.some((mod) => mod.content === "prop")) {
      injectPrefix(arg, ".");
    }
    if (modifiers.some((mod) => mod.content === "attr")) {
      injectPrefix(arg, "^");
    }
  }
  return {
    props: [createObjectProperty(arg, exp)]
  };
};
var transformBindShorthand = (dir, context) => {
  const arg = dir.arg;
  const propName = camelize(arg.content);
  dir.exp = createSimpleExpression(propName, false, arg.loc);
};
var injectPrefix = (arg, prefix) => {
  if (arg.type === 4) {
    if (arg.isStatic) {
      arg.content = prefix + arg.content;
    } else {
      arg.content = `\`${prefix}\${${arg.content}}\``;
    }
  } else {
    arg.children.unshift(`'${prefix}' + (`);
    arg.children.push(`)`);
  }
};
var transformFor = createStructuralDirectiveTransform(
  "for",
  (node, dir, context) => {
    const { helper, removeHelper } = context;
    return processFor(node, dir, context, (forNode) => {
      const renderExp = createCallExpression(helper(RENDER_LIST), [
        forNode.source
      ]);
      const isTemplate = isTemplateNode(node);
      const memo = findDir(node, "memo");
      const keyProp = findProp(node, `key`, false, true);
      const isDirKey = keyProp && keyProp.type === 7;
      if (isDirKey && !keyProp.exp) {
        transformBindShorthand(keyProp);
      }
      let keyExp = keyProp && (keyProp.type === 6 ? keyProp.value ? createSimpleExpression(keyProp.value.content, true) : void 0 : keyProp.exp);
      const keyProperty = keyProp && keyExp ? createObjectProperty(`key`, keyExp) : null;
      const isStableFragment = forNode.source.type === 4 && forNode.source.constType > 0;
      const fragmentFlag = isStableFragment ? 64 : keyProp ? 128 : 256;
      forNode.codegenNode = createVNodeCall(
        context,
        helper(FRAGMENT),
        void 0,
        renderExp,
        fragmentFlag,
        void 0,
        void 0,
        true,
        !isStableFragment,
        false,
        node.loc
      );
      return () => {
        let childBlock;
        const { children } = forNode;
        if (isTemplate) {
          node.children.some((c) => {
            if (c.type === 1) {
              const key = findProp(c, "key");
              if (key) {
                context.onError(
                  createCompilerError(
                    33,
                    key.loc
                  )
                );
                return true;
              }
            }
          });
        }
        const needFragmentWrapper = children.length !== 1 || children[0].type !== 1;
        const slotOutlet = isSlotOutlet(node) ? node : isTemplate && node.children.length === 1 && isSlotOutlet(node.children[0]) ? node.children[0] : null;
        if (slotOutlet) {
          childBlock = slotOutlet.codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
        } else if (needFragmentWrapper) {
          childBlock = createVNodeCall(
            context,
            helper(FRAGMENT),
            keyProperty ? createObjectExpression([keyProperty]) : void 0,
            node.children,
            64,
            void 0,
            void 0,
            true,
            void 0,
            false
          );
        } else {
          childBlock = children[0].codegenNode;
          if (isTemplate && keyProperty) {
            injectProp(childBlock, keyProperty, context);
          }
          if (childBlock.isBlock !== !isStableFragment) {
            if (childBlock.isBlock) {
              removeHelper(OPEN_BLOCK);
              removeHelper(
                getVNodeBlockHelper(context.inSSR, childBlock.isComponent)
              );
            } else {
              removeHelper(
                getVNodeHelper(context.inSSR, childBlock.isComponent)
              );
            }
          }
          childBlock.isBlock = !isStableFragment;
          if (childBlock.isBlock) {
            helper(OPEN_BLOCK);
            helper(getVNodeBlockHelper(context.inSSR, childBlock.isComponent));
          } else {
            helper(getVNodeHelper(context.inSSR, childBlock.isComponent));
          }
        }
        if (memo) {
          const loop = createFunctionExpression(
            createForLoopParams(forNode.parseResult, [
              createSimpleExpression(`_cached`)
            ])
          );
          loop.body = createBlockStatement([
            createCompoundExpression([`const _memo = (`, memo.exp, `)`]),
            createCompoundExpression([
              `if (_cached`,
              ...keyExp ? [` && _cached.key === `, keyExp] : [],
              ` && ${context.helperString(
                IS_MEMO_SAME
              )}(_cached, _memo)) return _cached`
            ]),
            createCompoundExpression([`const _item = `, childBlock]),
            createSimpleExpression(`_item.memo = _memo`),
            createSimpleExpression(`return _item`)
          ]);
          renderExp.arguments.push(
            loop,
            createSimpleExpression(`_cache`),
            createSimpleExpression(String(context.cached.length))
          );
          context.cached.push(null);
        } else {
          renderExp.arguments.push(
            createFunctionExpression(
              createForLoopParams(forNode.parseResult),
              childBlock,
              true
            )
          );
        }
      };
    });
  }
);
function processFor(node, dir, context, processCodegen) {
  if (!dir.exp) {
    context.onError(
      createCompilerError(31, dir.loc)
    );
    return;
  }
  const parseResult = dir.forParseResult;
  if (!parseResult) {
    context.onError(
      createCompilerError(32, dir.loc)
    );
    return;
  }
  finalizeForParseResult(parseResult, context);
  const { addIdentifiers, removeIdentifiers, scopes } = context;
  const { source, value, key, index: index2 } = parseResult;
  const forNode = {
    type: 11,
    loc: dir.loc,
    source,
    valueAlias: value,
    keyAlias: key,
    objectIndexAlias: index2,
    parseResult,
    children: isTemplateNode(node) ? node.children : [node]
  };
  context.replaceNode(forNode);
  scopes.vFor++;
  const onExit = processCodegen && processCodegen(forNode);
  return () => {
    scopes.vFor--;
    if (onExit) onExit();
  };
}
function finalizeForParseResult(result, context) {
  if (result.finalized) return;
  if (true) {
    validateBrowserExpression(result.source, context);
    if (result.key) {
      validateBrowserExpression(
        result.key,
        context,
        true
      );
    }
    if (result.index) {
      validateBrowserExpression(
        result.index,
        context,
        true
      );
    }
    if (result.value) {
      validateBrowserExpression(
        result.value,
        context,
        true
      );
    }
  }
  result.finalized = true;
}
function createForLoopParams({ value, key, index: index2 }, memoArgs = []) {
  return createParamsList([value, key, index2, ...memoArgs]);
}
function createParamsList(args) {
  let i = args.length;
  while (i--) {
    if (args[i]) break;
  }
  return args.slice(0, i + 1).map((arg, i2) => arg || createSimpleExpression(`_`.repeat(i2 + 1), false));
}
var defaultFallback = createSimpleExpression(`undefined`, false);
var trackSlotScopes = (node, context) => {
  if (node.type === 1 && (node.tagType === 1 || node.tagType === 3)) {
    const vSlot = findDir(node, "slot");
    if (vSlot) {
      vSlot.exp;
      context.scopes.vSlot++;
      return () => {
        context.scopes.vSlot--;
      };
    }
  }
};
var buildClientSlotFn = (props, _vForExp, children, loc) => createFunctionExpression(
  props,
  children,
  false,
  true,
  children.length ? children[0].loc : loc
);
function buildSlots(node, context, buildSlotFn = buildClientSlotFn) {
  context.helper(WITH_CTX);
  const { children, loc } = node;
  const slotsProperties = [];
  const dynamicSlots = [];
  let hasDynamicSlots = context.scopes.vSlot > 0 || context.scopes.vFor > 0;
  const onComponentSlot = findDir(node, "slot", true);
  if (onComponentSlot) {
    const { arg, exp } = onComponentSlot;
    if (arg && !isStaticExp(arg)) {
      hasDynamicSlots = true;
    }
    slotsProperties.push(
      createObjectProperty(
        arg || createSimpleExpression("default", true),
        buildSlotFn(exp, void 0, children, loc)
      )
    );
  }
  let hasTemplateSlots = false;
  let hasNamedDefaultSlot = false;
  const implicitDefaultChildren = [];
  const seenSlotNames = /* @__PURE__ */ new Set();
  let conditionalBranchIndex = 0;
  for (let i = 0; i < children.length; i++) {
    const slotElement = children[i];
    let slotDir;
    if (!isTemplateNode(slotElement) || !(slotDir = findDir(slotElement, "slot", true))) {
      if (slotElement.type !== 3) {
        implicitDefaultChildren.push(slotElement);
      }
      continue;
    }
    if (onComponentSlot) {
      context.onError(
        createCompilerError(37, slotDir.loc)
      );
      break;
    }
    hasTemplateSlots = true;
    const { children: slotChildren, loc: slotLoc } = slotElement;
    const {
      arg: slotName = createSimpleExpression(`default`, true),
      exp: slotProps,
      loc: dirLoc
    } = slotDir;
    let staticSlotName;
    if (isStaticExp(slotName)) {
      staticSlotName = slotName ? slotName.content : `default`;
    } else {
      hasDynamicSlots = true;
    }
    const vFor = findDir(slotElement, "for");
    const slotFunction = buildSlotFn(slotProps, vFor, slotChildren, slotLoc);
    let vIf;
    let vElse;
    if (vIf = findDir(slotElement, "if")) {
      hasDynamicSlots = true;
      dynamicSlots.push(
        createConditionalExpression(
          vIf.exp,
          buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++),
          defaultFallback
        )
      );
    } else if (vElse = findDir(
      slotElement,
      /^else(-if)?$/,
      true
      /* allowEmpty */
    )) {
      let j = i;
      let prev;
      while (j--) {
        prev = children[j];
        if (prev.type !== 3 && isNonWhitespaceContent(prev)) {
          break;
        }
      }
      if (prev && isTemplateNode(prev) && findDir(prev, /^(else-)?if$/)) {
        let conditional = dynamicSlots[dynamicSlots.length - 1];
        while (conditional.alternate.type === 19) {
          conditional = conditional.alternate;
        }
        conditional.alternate = vElse.exp ? createConditionalExpression(
          vElse.exp,
          buildDynamicSlot(
            slotName,
            slotFunction,
            conditionalBranchIndex++
          ),
          defaultFallback
        ) : buildDynamicSlot(slotName, slotFunction, conditionalBranchIndex++);
      } else {
        context.onError(
          createCompilerError(30, vElse.loc)
        );
      }
    } else if (vFor) {
      hasDynamicSlots = true;
      const parseResult = vFor.forParseResult;
      if (parseResult) {
        finalizeForParseResult(parseResult, context);
        dynamicSlots.push(
          createCallExpression(context.helper(RENDER_LIST), [
            parseResult.source,
            createFunctionExpression(
              createForLoopParams(parseResult),
              buildDynamicSlot(slotName, slotFunction),
              true
            )
          ])
        );
      } else {
        context.onError(
          createCompilerError(
            32,
            vFor.loc
          )
        );
      }
    } else {
      if (staticSlotName) {
        if (seenSlotNames.has(staticSlotName)) {
          context.onError(
            createCompilerError(
              38,
              dirLoc
            )
          );
          continue;
        }
        seenSlotNames.add(staticSlotName);
        if (staticSlotName === "default") {
          hasNamedDefaultSlot = true;
        }
      }
      slotsProperties.push(createObjectProperty(slotName, slotFunction));
    }
  }
  if (!onComponentSlot) {
    const buildDefaultSlotProperty = (props, children2) => {
      const fn = buildSlotFn(props, void 0, children2, loc);
      if (context.compatConfig) {
        fn.isNonScopedSlot = true;
      }
      return createObjectProperty(`default`, fn);
    };
    if (!hasTemplateSlots) {
      slotsProperties.push(buildDefaultSlotProperty(void 0, children));
    } else if (implicitDefaultChildren.length && // #3766
    // with whitespace: 'preserve', whitespaces between slots will end up in
    // implicitDefaultChildren. Ignore if all implicit children are whitespaces.
    implicitDefaultChildren.some((node2) => isNonWhitespaceContent(node2))) {
      if (hasNamedDefaultSlot) {
        context.onError(
          createCompilerError(
            39,
            implicitDefaultChildren[0].loc
          )
        );
      } else {
        slotsProperties.push(
          buildDefaultSlotProperty(void 0, implicitDefaultChildren)
        );
      }
    }
  }
  const slotFlag = hasDynamicSlots ? 2 : hasForwardedSlots(node.children) ? 3 : 1;
  let slots = createObjectExpression(
    slotsProperties.concat(
      createObjectProperty(
        `_`,
        // 2 = compiled but dynamic = can skip normalization, but must run diff
        // 1 = compiled and static = can skip normalization AND diff as optimized
        createSimpleExpression(
          slotFlag + (true ? ` /* ${slotFlagsText[slotFlag]} */` : ``),
          false
        )
      )
    ),
    loc
  );
  if (dynamicSlots.length) {
    slots = createCallExpression(context.helper(CREATE_SLOTS), [
      slots,
      createArrayExpression(dynamicSlots)
    ]);
  }
  return {
    slots,
    hasDynamicSlots
  };
}
function buildDynamicSlot(name, fn, index2) {
  const props = [
    createObjectProperty(`name`, name),
    createObjectProperty(`fn`, fn)
  ];
  if (index2 != null) {
    props.push(
      createObjectProperty(`key`, createSimpleExpression(String(index2), true))
    );
  }
  return createObjectExpression(props);
}
function hasForwardedSlots(children) {
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    switch (child.type) {
      case 1:
        if (child.tagType === 2 || hasForwardedSlots(child.children)) {
          return true;
        }
        break;
      case 9:
        if (hasForwardedSlots(child.branches)) return true;
        break;
      case 10:
      case 11:
        if (hasForwardedSlots(child.children)) return true;
        break;
    }
  }
  return false;
}
function isNonWhitespaceContent(node) {
  if (node.type !== 2 && node.type !== 12)
    return true;
  return node.type === 2 ? !!node.content.trim() : isNonWhitespaceContent(node.content);
}
var directiveImportMap = /* @__PURE__ */ new WeakMap();
var transformElement = (node, context) => {
  return function postTransformElement() {
    node = context.currentNode;
    if (!(node.type === 1 && (node.tagType === 0 || node.tagType === 1))) {
      return;
    }
    const { tag, props } = node;
    const isComponent2 = node.tagType === 1;
    let vnodeTag = isComponent2 ? resolveComponentType(node, context) : `"${tag}"`;
    const isDynamicComponent = isObject(vnodeTag) && vnodeTag.callee === RESOLVE_DYNAMIC_COMPONENT;
    let vnodeProps;
    let vnodeChildren;
    let patchFlag = 0;
    let vnodeDynamicProps;
    let dynamicPropNames;
    let vnodeDirectives;
    let shouldUseBlock = (
      // dynamic component may resolve to plain elements
      isDynamicComponent || vnodeTag === TELEPORT || vnodeTag === SUSPENSE || !isComponent2 && // <svg> and <foreignObject> must be forced into blocks so that block
      // updates inside get proper isSVG flag at runtime. (#639, #643)
      // This is technically web-specific, but splitting the logic out of core
      // leads to too much unnecessary complexity.
      (tag === "svg" || tag === "foreignObject" || tag === "math")
    );
    if (props.length > 0) {
      const propsBuildResult = buildProps(
        node,
        context,
        void 0,
        isComponent2,
        isDynamicComponent
      );
      vnodeProps = propsBuildResult.props;
      patchFlag = propsBuildResult.patchFlag;
      dynamicPropNames = propsBuildResult.dynamicPropNames;
      const directives = propsBuildResult.directives;
      vnodeDirectives = directives && directives.length ? createArrayExpression(
        directives.map((dir) => buildDirectiveArgs(dir, context))
      ) : void 0;
      if (propsBuildResult.shouldUseBlock) {
        shouldUseBlock = true;
      }
    }
    if (node.children.length > 0) {
      if (vnodeTag === KEEP_ALIVE) {
        shouldUseBlock = true;
        patchFlag |= 1024;
        if (node.children.length > 1) {
          context.onError(
            createCompilerError(46, {
              start: node.children[0].loc.start,
              end: node.children[node.children.length - 1].loc.end,
              source: ""
            })
          );
        }
      }
      const shouldBuildAsSlots = isComponent2 && // Teleport is not a real component and has dedicated runtime handling
      vnodeTag !== TELEPORT && // explained above.
      vnodeTag !== KEEP_ALIVE;
      if (shouldBuildAsSlots) {
        const { slots, hasDynamicSlots } = buildSlots(node, context);
        vnodeChildren = slots;
        if (hasDynamicSlots) {
          patchFlag |= 1024;
        }
      } else if (node.children.length === 1 && vnodeTag !== TELEPORT) {
        const child = node.children[0];
        const type2 = child.type;
        const hasDynamicTextChild = type2 === 5 || type2 === 8;
        if (hasDynamicTextChild && getConstantType(child, context) === 0) {
          patchFlag |= 1;
        }
        if (hasDynamicTextChild || type2 === 2) {
          vnodeChildren = child;
        } else {
          vnodeChildren = node.children;
        }
      } else {
        vnodeChildren = node.children;
      }
    }
    if (dynamicPropNames && dynamicPropNames.length) {
      vnodeDynamicProps = stringifyDynamicPropNames(dynamicPropNames);
    }
    node.codegenNode = createVNodeCall(
      context,
      vnodeTag,
      vnodeProps,
      vnodeChildren,
      patchFlag === 0 ? void 0 : patchFlag,
      vnodeDynamicProps,
      vnodeDirectives,
      !!shouldUseBlock,
      false,
      isComponent2,
      node.loc
    );
  };
};
function resolveComponentType(node, context, ssr = false) {
  let { tag } = node;
  const isExplicitDynamic = isComponentTag(tag);
  const isProp = findProp(
    node,
    "is",
    false,
    true
    /* allow empty */
  );
  if (isProp) {
    if (isExplicitDynamic || isCompatEnabled(
      "COMPILER_IS_ON_ELEMENT",
      context
    )) {
      let exp;
      if (isProp.type === 6) {
        exp = isProp.value && createSimpleExpression(isProp.value.content, true);
      } else {
        exp = isProp.exp;
        if (!exp) {
          exp = createSimpleExpression(`is`, false, isProp.arg.loc);
        }
      }
      if (exp) {
        return createCallExpression(context.helper(RESOLVE_DYNAMIC_COMPONENT), [
          exp
        ]);
      }
    } else if (isProp.type === 6 && isProp.value.content.startsWith("vue:")) {
      tag = isProp.value.content.slice(4);
    }
  }
  const builtIn = isCoreComponent(tag) || context.isBuiltInComponent(tag);
  if (builtIn) {
    if (!ssr) context.helper(builtIn);
    return builtIn;
  }
  context.helper(RESOLVE_COMPONENT);
  context.components.add(tag);
  return toValidAssetId(tag, `component`);
}
function buildProps(node, context, props = node.props, isComponent2, isDynamicComponent, ssr = false) {
  const { tag, loc: elementLoc, children } = node;
  let properties = [];
  const mergeArgs = [];
  const runtimeDirectives = [];
  const hasChildren = children.length > 0;
  let shouldUseBlock = false;
  let patchFlag = 0;
  let hasRef = false;
  let hasClassBinding = false;
  let hasStyleBinding = false;
  let hasHydrationEventBinding = false;
  let hasDynamicKeys = false;
  let hasVnodeHook = false;
  const dynamicPropNames = [];
  const pushMergeArg = (arg) => {
    if (properties.length) {
      mergeArgs.push(
        createObjectExpression(dedupeProperties(properties), elementLoc)
      );
      properties = [];
    }
    if (arg) mergeArgs.push(arg);
  };
  const pushRefVForMarker = () => {
    if (context.scopes.vFor > 0) {
      properties.push(
        createObjectProperty(
          createSimpleExpression("ref_for", true),
          createSimpleExpression("true")
        )
      );
    }
  };
  const analyzePatchFlag = ({ key, value }) => {
    if (isStaticExp(key)) {
      const name = key.content;
      const isEventHandler = isOn(name);
      if (isEventHandler && (!isComponent2 || isDynamicComponent) && // omit the flag for click handlers because hydration gives click
      // dedicated fast path.
      name.toLowerCase() !== "onclick" && // omit v-model handlers
      name !== "onUpdate:modelValue" && // omit onVnodeXXX hooks
      !isReservedProp(name)) {
        hasHydrationEventBinding = true;
      }
      if (isEventHandler && isReservedProp(name)) {
        hasVnodeHook = true;
      }
      if (isEventHandler && value.type === 14) {
        value = value.arguments[0];
      }
      if (value.type === 20 || (value.type === 4 || value.type === 8) && getConstantType(value, context) > 0) {
        return;
      }
      if (name === "ref") {
        hasRef = true;
      } else if (name === "class") {
        hasClassBinding = true;
      } else if (name === "style") {
        hasStyleBinding = true;
      } else if (name !== "key" && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
      if (isComponent2 && (name === "class" || name === "style") && !dynamicPropNames.includes(name)) {
        dynamicPropNames.push(name);
      }
    } else {
      hasDynamicKeys = true;
    }
  };
  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    if (prop.type === 6) {
      const { loc, name, nameLoc, value } = prop;
      let isStatic = true;
      if (name === "ref") {
        hasRef = true;
        pushRefVForMarker();
      }
      if (name === "is" && (isComponentTag(tag) || value && value.content.startsWith("vue:") || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      properties.push(
        createObjectProperty(
          createSimpleExpression(name, true, nameLoc),
          createSimpleExpression(
            value ? value.content : "",
            isStatic,
            value ? value.loc : loc
          )
        )
      );
    } else {
      const { name, arg, exp, loc, modifiers } = prop;
      const isVBind = name === "bind";
      const isVOn = name === "on";
      if (name === "slot") {
        if (!isComponent2) {
          context.onError(
            createCompilerError(40, loc)
          );
        }
        continue;
      }
      if (name === "once" || name === "memo") {
        continue;
      }
      if (name === "is" || isVBind && isStaticArgOf(arg, "is") && (isComponentTag(tag) || isCompatEnabled(
        "COMPILER_IS_ON_ELEMENT",
        context
      ))) {
        continue;
      }
      if (isVOn && ssr) {
        continue;
      }
      if (
        // #938: elements with dynamic keys should be forced into blocks
        isVBind && isStaticArgOf(arg, "key") || // inline before-update hooks need to force block so that it is invoked
        // before children
        isVOn && hasChildren && isStaticArgOf(arg, "vue:before-update")
      ) {
        shouldUseBlock = true;
      }
      if (isVBind && isStaticArgOf(arg, "ref")) {
        pushRefVForMarker();
      }
      if (!arg && (isVBind || isVOn)) {
        hasDynamicKeys = true;
        if (exp) {
          if (isVBind) {
            {
              pushMergeArg();
              if (true) {
                const hasOverridableKeys = mergeArgs.some((arg2) => {
                  if (arg2.type === 15) {
                    return arg2.properties.some(({ key }) => {
                      if (key.type !== 4 || !key.isStatic) {
                        return true;
                      }
                      return key.content !== "class" && key.content !== "style" && !isOn(key.content);
                    });
                  } else {
                    return true;
                  }
                });
                if (hasOverridableKeys) {
                  checkCompatEnabled(
                    "COMPILER_V_BIND_OBJECT_ORDER",
                    context,
                    loc
                  );
                }
              }
              if (isCompatEnabled(
                "COMPILER_V_BIND_OBJECT_ORDER",
                context
              )) {
                mergeArgs.unshift(exp);
                continue;
              }
            }
            pushRefVForMarker();
            pushMergeArg();
            mergeArgs.push(exp);
          } else {
            pushMergeArg({
              type: 14,
              loc,
              callee: context.helper(TO_HANDLERS),
              arguments: isComponent2 ? [exp] : [exp, `true`]
            });
          }
        } else {
          context.onError(
            createCompilerError(
              isVBind ? 34 : 35,
              loc
            )
          );
        }
        continue;
      }
      if (isVBind && modifiers.some((mod) => mod.content === "prop")) {
        patchFlag |= 32;
      }
      const directiveTransform = context.directiveTransforms[name];
      if (directiveTransform) {
        const { props: props2, needRuntime } = directiveTransform(prop, node, context);
        !ssr && props2.forEach(analyzePatchFlag);
        if (isVOn && arg && !isStaticExp(arg)) {
          pushMergeArg(createObjectExpression(props2, elementLoc));
        } else {
          properties.push(...props2);
        }
        if (needRuntime) {
          runtimeDirectives.push(prop);
          if (isSymbol(needRuntime)) {
            directiveImportMap.set(prop, needRuntime);
          }
        }
      } else if (!isBuiltInDirective(name)) {
        runtimeDirectives.push(prop);
        if (hasChildren) {
          shouldUseBlock = true;
        }
      }
    }
  }
  let propsExpression = void 0;
  if (mergeArgs.length) {
    pushMergeArg();
    if (mergeArgs.length > 1) {
      propsExpression = createCallExpression(
        context.helper(MERGE_PROPS),
        mergeArgs,
        elementLoc
      );
    } else {
      propsExpression = mergeArgs[0];
    }
  } else if (properties.length) {
    propsExpression = createObjectExpression(
      dedupeProperties(properties),
      elementLoc
    );
  }
  if (hasDynamicKeys) {
    patchFlag |= 16;
  } else {
    if (hasClassBinding && !isComponent2) {
      patchFlag |= 2;
    }
    if (hasStyleBinding && !isComponent2) {
      patchFlag |= 4;
    }
    if (dynamicPropNames.length) {
      patchFlag |= 8;
    }
    if (hasHydrationEventBinding) {
      patchFlag |= 32;
    }
  }
  if (!shouldUseBlock && (patchFlag === 0 || patchFlag === 32) && (hasRef || hasVnodeHook || runtimeDirectives.length > 0)) {
    patchFlag |= 512;
  }
  if (!context.inSSR && propsExpression) {
    switch (propsExpression.type) {
      case 15:
        let classKeyIndex = -1;
        let styleKeyIndex = -1;
        let hasDynamicKey = false;
        for (let i = 0; i < propsExpression.properties.length; i++) {
          const key = propsExpression.properties[i].key;
          if (isStaticExp(key)) {
            if (key.content === "class") {
              classKeyIndex = i;
            } else if (key.content === "style") {
              styleKeyIndex = i;
            }
          } else if (!key.isHandlerKey) {
            hasDynamicKey = true;
          }
        }
        const classProp = propsExpression.properties[classKeyIndex];
        const styleProp = propsExpression.properties[styleKeyIndex];
        if (!hasDynamicKey) {
          if (classProp && !isStaticExp(classProp.value)) {
            classProp.value = createCallExpression(
              context.helper(NORMALIZE_CLASS),
              [classProp.value]
            );
          }
          if (styleProp && // the static style is compiled into an object,
          // so use `hasStyleBinding` to ensure that it is a dynamic style binding
          (hasStyleBinding || styleProp.value.type === 4 && styleProp.value.content.trim()[0] === `[` || // v-bind:style and style both exist,
          // v-bind:style with static literal object
          styleProp.value.type === 17)) {
            styleProp.value = createCallExpression(
              context.helper(NORMALIZE_STYLE),
              [styleProp.value]
            );
          }
        } else {
          propsExpression = createCallExpression(
            context.helper(NORMALIZE_PROPS),
            [propsExpression]
          );
        }
        break;
      case 14:
        break;
      default:
        propsExpression = createCallExpression(
          context.helper(NORMALIZE_PROPS),
          [
            createCallExpression(context.helper(GUARD_REACTIVE_PROPS), [
              propsExpression
            ])
          ]
        );
        break;
    }
  }
  return {
    props: propsExpression,
    directives: runtimeDirectives,
    patchFlag,
    dynamicPropNames,
    shouldUseBlock
  };
}
function dedupeProperties(properties) {
  const knownProps = /* @__PURE__ */ new Map();
  const deduped = [];
  for (let i = 0; i < properties.length; i++) {
    const prop = properties[i];
    if (prop.key.type === 8 || !prop.key.isStatic) {
      deduped.push(prop);
      continue;
    }
    const name = prop.key.content;
    const existing = knownProps.get(name);
    if (existing) {
      if (name === "style" || name === "class" || isOn(name)) {
        mergeAsArray(existing, prop);
      }
    } else {
      knownProps.set(name, prop);
      deduped.push(prop);
    }
  }
  return deduped;
}
function mergeAsArray(existing, incoming) {
  if (existing.value.type === 17) {
    existing.value.elements.push(incoming.value);
  } else {
    existing.value = createArrayExpression(
      [existing.value, incoming.value],
      existing.loc
    );
  }
}
function buildDirectiveArgs(dir, context) {
  const dirArgs = [];
  const runtime = directiveImportMap.get(dir);
  if (runtime) {
    dirArgs.push(context.helperString(runtime));
  } else {
    {
      context.helper(RESOLVE_DIRECTIVE);
      context.directives.add(dir.name);
      dirArgs.push(toValidAssetId(dir.name, `directive`));
    }
  }
  const { loc } = dir;
  if (dir.exp) dirArgs.push(dir.exp);
  if (dir.arg) {
    if (!dir.exp) {
      dirArgs.push(`void 0`);
    }
    dirArgs.push(dir.arg);
  }
  if (Object.keys(dir.modifiers).length) {
    if (!dir.arg) {
      if (!dir.exp) {
        dirArgs.push(`void 0`);
      }
      dirArgs.push(`void 0`);
    }
    const trueExpression = createSimpleExpression(`true`, false, loc);
    dirArgs.push(
      createObjectExpression(
        dir.modifiers.map(
          (modifier) => createObjectProperty(modifier, trueExpression)
        ),
        loc
      )
    );
  }
  return createArrayExpression(dirArgs, dir.loc);
}
function stringifyDynamicPropNames(props) {
  let propsNamesString = `[`;
  for (let i = 0, l = props.length; i < l; i++) {
    propsNamesString += JSON.stringify(props[i]);
    if (i < l - 1) propsNamesString += ", ";
  }
  return propsNamesString + `]`;
}
function isComponentTag(tag) {
  return tag === "component" || tag === "Component";
}
var transformSlotOutlet = (node, context) => {
  if (isSlotOutlet(node)) {
    const { children, loc } = node;
    const { slotName, slotProps } = processSlotOutlet(node, context);
    const slotArgs = [
      context.prefixIdentifiers ? `_ctx.$slots` : `$slots`,
      slotName,
      "{}",
      "undefined",
      "true"
    ];
    let expectedLen = 2;
    if (slotProps) {
      slotArgs[2] = slotProps;
      expectedLen = 3;
    }
    if (children.length) {
      slotArgs[3] = createFunctionExpression([], children, false, false, loc);
      expectedLen = 4;
    }
    if (context.scopeId && !context.slotted) {
      expectedLen = 5;
    }
    slotArgs.splice(expectedLen);
    node.codegenNode = createCallExpression(
      context.helper(RENDER_SLOT),
      slotArgs,
      loc
    );
  }
};
function processSlotOutlet(node, context) {
  let slotName = `"default"`;
  let slotProps = void 0;
  const nonNameProps = [];
  for (let i = 0; i < node.props.length; i++) {
    const p = node.props[i];
    if (p.type === 6) {
      if (p.value) {
        if (p.name === "name") {
          slotName = JSON.stringify(p.value.content);
        } else {
          p.name = camelize(p.name);
          nonNameProps.push(p);
        }
      }
    } else {
      if (p.name === "bind" && isStaticArgOf(p.arg, "name")) {
        if (p.exp) {
          slotName = p.exp;
        } else if (p.arg && p.arg.type === 4) {
          const name = camelize(p.arg.content);
          slotName = p.exp = createSimpleExpression(name, false, p.arg.loc);
        }
      } else {
        if (p.name === "bind" && p.arg && isStaticExp(p.arg)) {
          p.arg.content = camelize(p.arg.content);
        }
        nonNameProps.push(p);
      }
    }
  }
  if (nonNameProps.length > 0) {
    const { props, directives } = buildProps(
      node,
      context,
      nonNameProps,
      false,
      false
    );
    slotProps = props;
    if (directives.length) {
      context.onError(
        createCompilerError(
          36,
          directives[0].loc
        )
      );
    }
  }
  return {
    slotName,
    slotProps
  };
}
var transformOn = (dir, node, context, augmentor) => {
  const { loc, modifiers, arg } = dir;
  if (!dir.exp && !modifiers.length) {
    context.onError(createCompilerError(35, loc));
  }
  let eventName;
  if (arg.type === 4) {
    if (arg.isStatic) {
      let rawName = arg.content;
      if (rawName.startsWith("vnode")) {
        context.onError(createCompilerError(51, arg.loc));
      }
      if (rawName.startsWith("vue:")) {
        rawName = `vnode-${rawName.slice(4)}`;
      }
      const eventString = node.tagType !== 0 || rawName.startsWith("vnode") || !/[A-Z]/.test(rawName) ? (
        // for non-element and vnode lifecycle event listeners, auto convert
        // it to camelCase. See issue #2249
        toHandlerKey(camelize(rawName))
      ) : (
        // preserve case for plain element listeners that have uppercase
        // letters, as these may be custom elements' custom events
        `on:${rawName}`
      );
      eventName = createSimpleExpression(eventString, true, arg.loc);
    } else {
      eventName = createCompoundExpression([
        `${context.helperString(TO_HANDLER_KEY)}(`,
        arg,
        `)`
      ]);
    }
  } else {
    eventName = arg;
    eventName.children.unshift(`${context.helperString(TO_HANDLER_KEY)}(`);
    eventName.children.push(`)`);
  }
  let exp = dir.exp;
  if (exp && !exp.content.trim()) {
    exp = void 0;
  }
  let shouldCache = context.cacheHandlers && !exp && !context.inVOnce;
  if (exp) {
    const isMemberExp = isMemberExpression(exp);
    const isInlineStatement = !(isMemberExp || isFnExpression(exp));
    const hasMultipleStatements = exp.content.includes(`;`);
    if (true) {
      validateBrowserExpression(
        exp,
        context,
        false,
        hasMultipleStatements
      );
    }
    if (isInlineStatement || shouldCache && isMemberExp) {
      exp = createCompoundExpression([
        `${isInlineStatement ? `$event` : `${``}(...args)`} => ${hasMultipleStatements ? `{` : `(`}`,
        exp,
        hasMultipleStatements ? `}` : `)`
      ]);
    }
  }
  let ret = {
    props: [
      createObjectProperty(
        eventName,
        exp || createSimpleExpression(`() => {}`, false, loc)
      )
    ]
  };
  if (augmentor) {
    ret = augmentor(ret);
  }
  if (shouldCache) {
    ret.props[0].value = context.cache(ret.props[0].value);
  }
  ret.props.forEach((p) => p.key.isHandlerKey = true);
  return ret;
};
var transformText = (node, context) => {
  if (node.type === 0 || node.type === 1 || node.type === 11 || node.type === 10) {
    return () => {
      const children = node.children;
      let currentContainer = void 0;
      let hasText = false;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child)) {
          hasText = true;
          for (let j = i + 1; j < children.length; j++) {
            const next = children[j];
            if (isText$1(next)) {
              if (!currentContainer) {
                currentContainer = children[i] = createCompoundExpression(
                  [child],
                  child.loc
                );
              }
              currentContainer.children.push(` + `, next);
              children.splice(j, 1);
              j--;
            } else {
              currentContainer = void 0;
              break;
            }
          }
        }
      }
      if (!hasText || // if this is a plain element with a single text child, leave it
      // as-is since the runtime has dedicated fast path for this by directly
      // setting textContent of the element.
      // for component root it's always normalized anyway.
      children.length === 1 && (node.type === 0 || node.type === 1 && node.tagType === 0 && // #3756
      // custom directives can potentially add DOM elements arbitrarily,
      // we need to avoid setting textContent of the element at runtime
      // to avoid accidentally overwriting the DOM elements added
      // by the user through custom directives.
      !node.props.find(
        (p) => p.type === 7 && !context.directiveTransforms[p.name]
      ) && // in compat mode, <template> tags with no special directives
      // will be rendered as a fragment so its children must be
      // converted into vnodes.
      !(node.tag === "template"))) {
        return;
      }
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (isText$1(child) || child.type === 8) {
          const callArgs = [];
          if (child.type !== 2 || child.content !== " ") {
            callArgs.push(child);
          }
          if (!context.ssr && getConstantType(child, context) === 0) {
            callArgs.push(
              1 + (true ? ` /* ${PatchFlagNames[1]} */` : ``)
            );
          }
          children[i] = {
            type: 12,
            content: child,
            loc: child.loc,
            codegenNode: createCallExpression(
              context.helper(CREATE_TEXT),
              callArgs
            )
          };
        }
      }
    };
  }
};
var seen$1 = /* @__PURE__ */ new WeakSet();
var transformOnce = (node, context) => {
  if (node.type === 1 && findDir(node, "once", true)) {
    if (seen$1.has(node) || context.inVOnce || context.inSSR) {
      return;
    }
    seen$1.add(node);
    context.inVOnce = true;
    context.helper(SET_BLOCK_TRACKING);
    return () => {
      context.inVOnce = false;
      const cur = context.currentNode;
      if (cur.codegenNode) {
        cur.codegenNode = context.cache(
          cur.codegenNode,
          true,
          true
        );
      }
    };
  }
};
var transformModel = (dir, node, context) => {
  const { exp, arg } = dir;
  if (!exp) {
    context.onError(
      createCompilerError(41, dir.loc)
    );
    return createTransformProps();
  }
  const rawExp = exp.loc.source.trim();
  const expString = exp.type === 4 ? exp.content : rawExp;
  const bindingType = context.bindingMetadata[rawExp];
  if (bindingType === "props" || bindingType === "props-aliased") {
    context.onError(createCompilerError(44, exp.loc));
    return createTransformProps();
  }
  if (!expString.trim() || !isMemberExpression(exp) && true) {
    context.onError(
      createCompilerError(42, exp.loc)
    );
    return createTransformProps();
  }
  const propName = arg ? arg : createSimpleExpression("modelValue", true);
  const eventName = arg ? isStaticExp(arg) ? `onUpdate:${camelize(arg.content)}` : createCompoundExpression(['"onUpdate:" + ', arg]) : `onUpdate:modelValue`;
  let assignmentExp;
  const eventArg = context.isTS ? `($event: any)` : `$event`;
  {
    assignmentExp = createCompoundExpression([
      `${eventArg} => ((`,
      exp,
      `) = $event)`
    ]);
  }
  const props = [
    // modelValue: foo
    createObjectProperty(propName, dir.exp),
    // "onUpdate:modelValue": $event => (foo = $event)
    createObjectProperty(eventName, assignmentExp)
  ];
  if (dir.modifiers.length && node.tagType === 1) {
    const modifiers = dir.modifiers.map((m) => m.content).map((m) => (isSimpleIdentifier(m) ? m : JSON.stringify(m)) + `: true`).join(`, `);
    const modifiersKey = arg ? isStaticExp(arg) ? `${arg.content}Modifiers` : createCompoundExpression([arg, ' + "Modifiers"']) : `modelModifiers`;
    props.push(
      createObjectProperty(
        modifiersKey,
        createSimpleExpression(
          `{ ${modifiers} }`,
          false,
          dir.loc,
          2
        )
      )
    );
  }
  return createTransformProps(props);
};
function createTransformProps(props = []) {
  return { props };
}
var validDivisionCharRE = /[\w).+\-_$\]]/;
var transformFilter = (node, context) => {
  if (!isCompatEnabled("COMPILER_FILTERS", context)) {
    return;
  }
  if (node.type === 5) {
    rewriteFilter(node.content, context);
  } else if (node.type === 1) {
    node.props.forEach((prop) => {
      if (prop.type === 7 && prop.name !== "for" && prop.exp) {
        rewriteFilter(prop.exp, context);
      }
    });
  }
};
function rewriteFilter(node, context) {
  if (node.type === 4) {
    parseFilter(node, context);
  } else {
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (typeof child !== "object") continue;
      if (child.type === 4) {
        parseFilter(child, context);
      } else if (child.type === 8) {
        rewriteFilter(node, context);
      } else if (child.type === 5) {
        rewriteFilter(child.content, context);
      }
    }
  }
}
function parseFilter(node, context) {
  const exp = node.content;
  let inSingle = false;
  let inDouble = false;
  let inTemplateString = false;
  let inRegex = false;
  let curly = 0;
  let square = 0;
  let paren = 0;
  let lastFilterIndex = 0;
  let c, prev, i, expression, filters = [];
  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 39 && prev !== 92) inSingle = false;
    } else if (inDouble) {
      if (c === 34 && prev !== 92) inDouble = false;
    } else if (inTemplateString) {
      if (c === 96 && prev !== 92) inTemplateString = false;
    } else if (inRegex) {
      if (c === 47 && prev !== 92) inRegex = false;
    } else if (c === 124 && // pipe
    exp.charCodeAt(i + 1) !== 124 && exp.charCodeAt(i - 1) !== 124 && !curly && !square && !paren) {
      if (expression === void 0) {
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 34:
          inDouble = true;
          break;
        case 39:
          inSingle = true;
          break;
        case 96:
          inTemplateString = true;
          break;
        case 40:
          paren++;
          break;
        case 41:
          paren--;
          break;
        case 91:
          square++;
          break;
        case 93:
          square--;
          break;
        case 123:
          curly++;
          break;
        case 125:
          curly--;
          break;
      }
      if (c === 47) {
        let j = i - 1;
        let p;
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== " ") break;
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }
  if (expression === void 0) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }
  function pushFilter() {
    filters.push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }
  if (filters.length) {
    warnDeprecation(
      "COMPILER_FILTERS",
      context,
      node.loc
    );
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i], context);
    }
    node.content = expression;
    node.ast = void 0;
  }
}
function wrapFilter(exp, filter, context) {
  context.helper(RESOLVE_FILTER);
  const i = filter.indexOf("(");
  if (i < 0) {
    context.filters.add(filter);
    return `${toValidAssetId(filter, "filter")}(${exp})`;
  } else {
    const name = filter.slice(0, i);
    const args = filter.slice(i + 1);
    context.filters.add(name);
    return `${toValidAssetId(name, "filter")}(${exp}${args !== ")" ? "," + args : args}`;
  }
}
var seen = /* @__PURE__ */ new WeakSet();
var transformMemo = (node, context) => {
  if (node.type === 1) {
    const dir = findDir(node, "memo");
    if (!dir || seen.has(node)) {
      return;
    }
    seen.add(node);
    return () => {
      const codegenNode = node.codegenNode || context.currentNode.codegenNode;
      if (codegenNode && codegenNode.type === 13) {
        if (node.tagType !== 1) {
          convertToBlock(codegenNode, context);
        }
        node.codegenNode = createCallExpression(context.helper(WITH_MEMO), [
          dir.exp,
          createFunctionExpression(void 0, codegenNode),
          `_cache`,
          String(context.cached.length)
        ]);
        context.cached.push(null);
      }
    };
  }
};
function getBaseTransformPreset(prefixIdentifiers) {
  return [
    [
      transformOnce,
      transformIf,
      transformMemo,
      transformFor,
      ...[transformFilter],
      ...true ? [transformExpression] : [],
      transformSlotOutlet,
      transformElement,
      trackSlotScopes,
      transformText
    ],
    {
      on: transformOn,
      bind: transformBind,
      model: transformModel
    }
  ];
}
function baseCompile(source, options = {}) {
  const onError = options.onError || defaultOnError;
  const isModuleMode = options.mode === "module";
  {
    if (options.prefixIdentifiers === true) {
      onError(createCompilerError(47));
    } else if (isModuleMode) {
      onError(createCompilerError(48));
    }
  }
  const prefixIdentifiers = false;
  if (options.cacheHandlers) {
    onError(createCompilerError(49));
  }
  if (options.scopeId && !isModuleMode) {
    onError(createCompilerError(50));
  }
  const resolvedOptions = extend({}, options, {
    prefixIdentifiers
  });
  const ast = isString(source) ? baseParse(source, resolvedOptions) : source;
  const [nodeTransforms, directiveTransforms] = getBaseTransformPreset();
  transform(
    ast,
    extend({}, resolvedOptions, {
      nodeTransforms: [
        ...nodeTransforms,
        ...options.nodeTransforms || []
        // user transforms
      ],
      directiveTransforms: extend(
        {},
        directiveTransforms,
        options.directiveTransforms || {}
        // user transforms
      )
    })
  );
  return generate(ast, resolvedOptions);
}
var noopDirectiveTransform = () => ({ props: [] });

// node_modules/@vue/compiler-dom/dist/compiler-dom.esm-bundler.js
var V_MODEL_RADIO = Symbol(true ? `vModelRadio` : ``);
var V_MODEL_CHECKBOX = Symbol(
  true ? `vModelCheckbox` : ``
);
var V_MODEL_TEXT = Symbol(true ? `vModelText` : ``);
var V_MODEL_SELECT = Symbol(
  true ? `vModelSelect` : ``
);
var V_MODEL_DYNAMIC = Symbol(
  true ? `vModelDynamic` : ``
);
var V_ON_WITH_MODIFIERS = Symbol(
  true ? `vOnModifiersGuard` : ``
);
var V_ON_WITH_KEYS = Symbol(
  true ? `vOnKeysGuard` : ``
);
var V_SHOW = Symbol(true ? `vShow` : ``);
var TRANSITION = Symbol(true ? `Transition` : ``);
var TRANSITION_GROUP = Symbol(
  true ? `TransitionGroup` : ``
);
registerRuntimeHelpers({
  [V_MODEL_RADIO]: `vModelRadio`,
  [V_MODEL_CHECKBOX]: `vModelCheckbox`,
  [V_MODEL_TEXT]: `vModelText`,
  [V_MODEL_SELECT]: `vModelSelect`,
  [V_MODEL_DYNAMIC]: `vModelDynamic`,
  [V_ON_WITH_MODIFIERS]: `withModifiers`,
  [V_ON_WITH_KEYS]: `withKeys`,
  [V_SHOW]: `vShow`,
  [TRANSITION]: `Transition`,
  [TRANSITION_GROUP]: `TransitionGroup`
});
var decoder;
function decodeHtmlBrowser(raw, asAttr = false) {
  if (!decoder) {
    decoder = document.createElement("div");
  }
  if (asAttr) {
    decoder.innerHTML = `<div foo="${raw.replace(/"/g, "&quot;")}">`;
    return decoder.children[0].getAttribute("foo");
  } else {
    decoder.innerHTML = raw;
    return decoder.textContent;
  }
}
var parserOptions = {
  parseMode: "html",
  isVoidTag,
  isNativeTag: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
  isPreTag: (tag) => tag === "pre",
  isIgnoreNewlineTag: (tag) => tag === "pre" || tag === "textarea",
  decodeEntities: decodeHtmlBrowser,
  isBuiltInComponent: (tag) => {
    if (tag === "Transition" || tag === "transition") {
      return TRANSITION;
    } else if (tag === "TransitionGroup" || tag === "transition-group") {
      return TRANSITION_GROUP;
    }
  },
  // https://html.spec.whatwg.org/multipage/parsing.html#tree-construction-dispatcher
  getNamespace(tag, parent, rootNamespace) {
    let ns4 = parent ? parent.ns : rootNamespace;
    if (parent && ns4 === 2) {
      if (parent.tag === "annotation-xml") {
        if (tag === "svg") {
          return 1;
        }
        if (parent.props.some(
          (a) => a.type === 6 && a.name === "encoding" && a.value != null && (a.value.content === "text/html" || a.value.content === "application/xhtml+xml")
        )) {
          ns4 = 0;
        }
      } else if (/^m(?:[ions]|text)$/.test(parent.tag) && tag !== "mglyph" && tag !== "malignmark") {
        ns4 = 0;
      }
    } else if (parent && ns4 === 1) {
      if (parent.tag === "foreignObject" || parent.tag === "desc" || parent.tag === "title") {
        ns4 = 0;
      }
    }
    if (ns4 === 0) {
      if (tag === "svg") {
        return 1;
      }
      if (tag === "math") {
        return 2;
      }
    }
    return ns4;
  }
};
var transformStyle = (node) => {
  if (node.type === 1) {
    node.props.forEach((p, i) => {
      if (p.type === 6 && p.name === "style" && p.value) {
        node.props[i] = {
          type: 7,
          name: `bind`,
          arg: createSimpleExpression(`style`, true, p.loc),
          exp: parseInlineCSS(p.value.content, p.loc),
          modifiers: [],
          loc: p.loc
        };
      }
    });
  }
};
var parseInlineCSS = (cssText, loc) => {
  const normalized = parseStringStyle(cssText);
  return createSimpleExpression(
    JSON.stringify(normalized),
    false,
    loc,
    3
  );
};
function createDOMCompilerError(code, loc) {
  return createCompilerError(
    code,
    loc,
    true ? DOMErrorMessages : void 0
  );
}
var DOMErrorMessages = {
  [53]: `v-html is missing expression.`,
  [54]: `v-html will override element children.`,
  [55]: `v-text is missing expression.`,
  [56]: `v-text will override element children.`,
  [57]: `v-model can only be used on <input>, <textarea> and <select> elements.`,
  [58]: `v-model argument is not supported on plain elements.`,
  [59]: `v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.`,
  [60]: `Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.`,
  [61]: `v-show is missing expression.`,
  [62]: `<Transition> expects exactly one child element or component.`,
  [63]: `Tags with side effect (<script> and <style>) are ignored in client component templates.`
};
var transformVHtml = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(53, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(54, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`innerHTML`, true, loc),
        exp || createSimpleExpression("", true)
      )
    ]
  };
};
var transformVText = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(55, loc)
    );
  }
  if (node.children.length) {
    context.onError(
      createDOMCompilerError(56, loc)
    );
    node.children.length = 0;
  }
  return {
    props: [
      createObjectProperty(
        createSimpleExpression(`textContent`, true),
        exp ? getConstantType(exp, context) > 0 ? exp : createCallExpression(
          context.helperString(TO_DISPLAY_STRING),
          [exp],
          loc
        ) : createSimpleExpression("", true)
      )
    ]
  };
};
var transformModel2 = (dir, node, context) => {
  const baseResult = transformModel(dir, node, context);
  if (!baseResult.props.length || node.tagType === 1) {
    return baseResult;
  }
  if (dir.arg) {
    context.onError(
      createDOMCompilerError(
        58,
        dir.arg.loc
      )
    );
  }
  function checkDuplicatedValue() {
    const value = findDir(node, "bind");
    if (value && isStaticArgOf(value.arg, "value")) {
      context.onError(
        createDOMCompilerError(
          60,
          value.loc
        )
      );
    }
  }
  const { tag } = node;
  const isCustomElement = context.isCustomElement(tag);
  if (tag === "input" || tag === "textarea" || tag === "select" || isCustomElement) {
    let directiveToUse = V_MODEL_TEXT;
    let isInvalidType = false;
    if (tag === "input" || isCustomElement) {
      const type2 = findProp(node, `type`);
      if (type2) {
        if (type2.type === 7) {
          directiveToUse = V_MODEL_DYNAMIC;
        } else if (type2.value) {
          switch (type2.value.content) {
            case "radio":
              directiveToUse = V_MODEL_RADIO;
              break;
            case "checkbox":
              directiveToUse = V_MODEL_CHECKBOX;
              break;
            case "file":
              isInvalidType = true;
              context.onError(
                createDOMCompilerError(
                  59,
                  dir.loc
                )
              );
              break;
            default:
              checkDuplicatedValue();
              break;
          }
        }
      } else if (hasDynamicKeyVBind(node)) {
        directiveToUse = V_MODEL_DYNAMIC;
      } else {
        checkDuplicatedValue();
      }
    } else if (tag === "select") {
      directiveToUse = V_MODEL_SELECT;
    } else {
      checkDuplicatedValue();
    }
    if (!isInvalidType) {
      baseResult.needRuntime = context.helper(directiveToUse);
    }
  } else {
    context.onError(
      createDOMCompilerError(
        57,
        dir.loc
      )
    );
  }
  baseResult.props = baseResult.props.filter(
    (p) => !(p.key.type === 4 && p.key.content === "modelValue")
  );
  return baseResult;
};
var isEventOptionModifier = makeMap(`passive,once,capture`);
var isNonKeyModifier = makeMap(
  // event propagation management
  `stop,prevent,self,ctrl,shift,alt,meta,exact,middle`
);
var maybeKeyModifier = makeMap("left,right");
var isKeyboardEvent = makeMap(`onkeyup,onkeydown,onkeypress`);
var resolveModifiers = (key, modifiers, context, loc) => {
  const keyModifiers = [];
  const nonKeyModifiers = [];
  const eventOptionModifiers = [];
  for (let i = 0; i < modifiers.length; i++) {
    const modifier = modifiers[i].content;
    if (modifier === "native" && checkCompatEnabled(
      "COMPILER_V_ON_NATIVE",
      context,
      loc
    )) {
      eventOptionModifiers.push(modifier);
    } else if (isEventOptionModifier(modifier)) {
      eventOptionModifiers.push(modifier);
    } else {
      if (maybeKeyModifier(modifier)) {
        if (isStaticExp(key)) {
          if (isKeyboardEvent(key.content.toLowerCase())) {
            keyModifiers.push(modifier);
          } else {
            nonKeyModifiers.push(modifier);
          }
        } else {
          keyModifiers.push(modifier);
          nonKeyModifiers.push(modifier);
        }
      } else {
        if (isNonKeyModifier(modifier)) {
          nonKeyModifiers.push(modifier);
        } else {
          keyModifiers.push(modifier);
        }
      }
    }
  }
  return {
    keyModifiers,
    nonKeyModifiers,
    eventOptionModifiers
  };
};
var transformClick = (key, event) => {
  const isStaticClick = isStaticExp(key) && key.content.toLowerCase() === "onclick";
  return isStaticClick ? createSimpleExpression(event, true) : key.type !== 4 ? createCompoundExpression([
    `(`,
    key,
    `) === "onClick" ? "${event}" : (`,
    key,
    `)`
  ]) : key;
};
var transformOn2 = (dir, node, context) => {
  return transformOn(dir, node, context, (baseResult) => {
    const { modifiers } = dir;
    if (!modifiers.length) return baseResult;
    let { key, value: handlerExp } = baseResult.props[0];
    const { keyModifiers, nonKeyModifiers, eventOptionModifiers } = resolveModifiers(key, modifiers, context, dir.loc);
    if (nonKeyModifiers.includes("right")) {
      key = transformClick(key, `onContextmenu`);
    }
    if (nonKeyModifiers.includes("middle")) {
      key = transformClick(key, `onMouseup`);
    }
    if (nonKeyModifiers.length) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_MODIFIERS), [
        handlerExp,
        JSON.stringify(nonKeyModifiers)
      ]);
    }
    if (keyModifiers.length && // if event name is dynamic, always wrap with keys guard
    (!isStaticExp(key) || isKeyboardEvent(key.content.toLowerCase()))) {
      handlerExp = createCallExpression(context.helper(V_ON_WITH_KEYS), [
        handlerExp,
        JSON.stringify(keyModifiers)
      ]);
    }
    if (eventOptionModifiers.length) {
      const modifierPostfix = eventOptionModifiers.map(capitalize).join("");
      key = isStaticExp(key) ? createSimpleExpression(`${key.content}${modifierPostfix}`, true) : createCompoundExpression([`(`, key, `) + "${modifierPostfix}"`]);
    }
    return {
      props: [createObjectProperty(key, handlerExp)]
    };
  });
};
var transformShow = (dir, node, context) => {
  const { exp, loc } = dir;
  if (!exp) {
    context.onError(
      createDOMCompilerError(61, loc)
    );
  }
  return {
    props: [],
    needRuntime: context.helper(V_SHOW)
  };
};
var transformTransition = (node, context) => {
  if (node.type === 1 && node.tagType === 1) {
    const component = context.isBuiltInComponent(node.tag);
    if (component === TRANSITION) {
      return () => {
        if (!node.children.length) {
          return;
        }
        if (hasMultipleChildren(node)) {
          context.onError(
            createDOMCompilerError(
              62,
              {
                start: node.children[0].loc.start,
                end: node.children[node.children.length - 1].loc.end,
                source: ""
              }
            )
          );
        }
        const child = node.children[0];
        if (child.type === 1) {
          for (const p of child.props) {
            if (p.type === 7 && p.name === "show") {
              node.props.push({
                type: 6,
                name: "persisted",
                nameLoc: node.loc,
                value: void 0,
                loc: node.loc
              });
            }
          }
        }
      };
    }
  }
};
function hasMultipleChildren(node) {
  const children = node.children = node.children.filter(
    (c) => c.type !== 3 && !(c.type === 2 && !c.content.trim())
  );
  const child = children[0];
  return children.length !== 1 || child.type === 11 || child.type === 9 && child.branches.some(hasMultipleChildren);
}
var ignoreSideEffectTags = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && (node.tag === "script" || node.tag === "style")) {
    context.onError(
      createDOMCompilerError(
        63,
        node.loc
      )
    );
    context.removeNode();
  }
};
function isValidHTMLNesting(parent, child) {
  if (parent === "template") {
    return true;
  }
  if (parent in onlyValidChildren) {
    return onlyValidChildren[parent].has(child);
  }
  if (child in onlyValidParents) {
    return onlyValidParents[child].has(parent);
  }
  if (parent in knownInvalidChildren) {
    if (knownInvalidChildren[parent].has(child)) return false;
  }
  if (child in knownInvalidParents) {
    if (knownInvalidParents[child].has(parent)) return false;
  }
  return true;
}
var headings = /* @__PURE__ */ new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);
var emptySet = /* @__PURE__ */ new Set([]);
var onlyValidChildren = {
  head: /* @__PURE__ */ new Set([
    "base",
    "basefront",
    "bgsound",
    "link",
    "meta",
    "title",
    "noscript",
    "noframes",
    "style",
    "script",
    "template"
  ]),
  optgroup: /* @__PURE__ */ new Set(["option"]),
  select: /* @__PURE__ */ new Set(["optgroup", "option", "hr"]),
  // table
  table: /* @__PURE__ */ new Set(["caption", "colgroup", "tbody", "tfoot", "thead"]),
  tr: /* @__PURE__ */ new Set(["td", "th"]),
  colgroup: /* @__PURE__ */ new Set(["col"]),
  tbody: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["tr"]),
  tfoot: /* @__PURE__ */ new Set(["tr"]),
  // these elements can not have any children elements
  script: emptySet,
  iframe: emptySet,
  option: emptySet,
  textarea: emptySet,
  style: emptySet,
  title: emptySet
};
var onlyValidParents = {
  // sections
  html: emptySet,
  body: /* @__PURE__ */ new Set(["html"]),
  head: /* @__PURE__ */ new Set(["html"]),
  // table
  td: /* @__PURE__ */ new Set(["tr"]),
  colgroup: /* @__PURE__ */ new Set(["table"]),
  caption: /* @__PURE__ */ new Set(["table"]),
  tbody: /* @__PURE__ */ new Set(["table"]),
  tfoot: /* @__PURE__ */ new Set(["table"]),
  col: /* @__PURE__ */ new Set(["colgroup"]),
  th: /* @__PURE__ */ new Set(["tr"]),
  thead: /* @__PURE__ */ new Set(["table"]),
  tr: /* @__PURE__ */ new Set(["tbody", "thead", "tfoot"]),
  // data list
  dd: /* @__PURE__ */ new Set(["dl", "div"]),
  dt: /* @__PURE__ */ new Set(["dl", "div"]),
  // other
  figcaption: /* @__PURE__ */ new Set(["figure"]),
  // li: new Set(["ul", "ol"]),
  summary: /* @__PURE__ */ new Set(["details"]),
  area: /* @__PURE__ */ new Set(["map"])
};
var knownInvalidChildren = {
  p: /* @__PURE__ */ new Set([
    "address",
    "article",
    "aside",
    "blockquote",
    "center",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "fieldset",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "li",
    "main",
    "nav",
    "menu",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "ul"
  ]),
  svg: /* @__PURE__ */ new Set([
    "b",
    "blockquote",
    "br",
    "code",
    "dd",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hr",
    "i",
    "img",
    "li",
    "menu",
    "meta",
    "ol",
    "p",
    "pre",
    "ruby",
    "s",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "table",
    "u",
    "ul",
    "var"
  ])
};
var knownInvalidParents = {
  a: /* @__PURE__ */ new Set(["a"]),
  button: /* @__PURE__ */ new Set(["button"]),
  dd: /* @__PURE__ */ new Set(["dd", "dt"]),
  dt: /* @__PURE__ */ new Set(["dd", "dt"]),
  form: /* @__PURE__ */ new Set(["form"]),
  li: /* @__PURE__ */ new Set(["li"]),
  h1: headings,
  h2: headings,
  h3: headings,
  h4: headings,
  h5: headings,
  h6: headings
};
var validateHtmlNesting = (node, context) => {
  if (node.type === 1 && node.tagType === 0 && context.parent && context.parent.type === 1 && context.parent.tagType === 0 && !isValidHTMLNesting(context.parent.tag, node.tag)) {
    const error = new SyntaxError(
      `<${node.tag}> cannot be child of <${context.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`
    );
    error.loc = node.loc;
    context.onWarn(error);
  }
};
var DOMNodeTransforms = [
  transformStyle,
  ...true ? [transformTransition, validateHtmlNesting] : []
];
var DOMDirectiveTransforms = {
  cloak: noopDirectiveTransform,
  html: transformVHtml,
  text: transformVText,
  model: transformModel2,
  // override compiler-core
  on: transformOn2,
  // override compiler-core
  show: transformShow
};
function compile(src, options = {}) {
  return baseCompile(
    src,
    extend({}, parserOptions, options, {
      nodeTransforms: [
        // ignore <script> and <tag>
        // this is not put inside DOMNodeTransforms because that list is used
        // by compiler-ssr to generate vnode fallback branches
        ignoreSideEffectTags,
        ...DOMNodeTransforms,
        ...options.nodeTransforms || []
      ],
      directiveTransforms: extend(
        {},
        DOMDirectiveTransforms,
        options.directiveTransforms || {}
      ),
      transformHoist: null
    })
  );
}

// node_modules/vitepress-theme-teek/es/components/theme/ArticleTitle/src/compile.mjs
var createDynamicComponent = (template) => {
  const { code } = compile(template);
  const render3 = new Function("Vue", code)(vue_runtime_esm_bundler_exports);
  return defineComponent({ render: render3 });
};

// node_modules/vitepress-theme-teek/es/components/theme/ArticleTitle/src/index.vue2.mjs
var _hoisted_14 = ["aria-label"];
var _sfc_main7 = defineComponent({
  ...{ name: "ArticleTitle" },
  __name: "index",
  props: {
    post: {},
    titleTagProps: {}
  },
  setup(__props) {
    const ns4 = useNamespace("article-title");
    const { t } = useLocale();
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.articleTitle.label")
      }, [
        _ctx.post.frontmatter.titleTag && ((_a = _ctx.titleTagProps) == null ? void 0 : _a.position) === "left" ? (openBlock(), createBlock(unref(_sfc_main4), mergeProps({
          key: 0,
          text: _ctx.post.frontmatter.titleTag
        }, _ctx.titleTagProps, {
          "aria-label": _ctx.post.frontmatter.titleTag
        }), null, 16, ["text", "aria-label"])) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          _ctx.post.title ? (openBlock(), createBlock(resolveDynamicComponent(unref(createDynamicComponent)(_ctx.post.title)), { key: 0 })) : createCommentVNode("v-if", true)
        ]),
        _ctx.post.frontmatter.titleTag && ((_b = _ctx.titleTagProps) == null ? void 0 : _b.position) === "right" ? (openBlock(), createBlock(unref(_sfc_main4), mergeProps({
          key: 1,
          text: _ctx.post.frontmatter.titleTag
        }, _ctx.titleTagProps, {
          "aria-label": _ctx.post.frontmatter.titleTag
        }), null, 16, ["text", "aria-label"])) : createCommentVNode("v-if", true)
      ], 10, _hoisted_14);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArchivesPage/src/index.vue2.mjs
var _hoisted_15 = { class: "count" };
var _hoisted_23 = { class: "vp-doc" };
var _hoisted_33 = { class: "year" };
var _hoisted_43 = { class: "count" };
var _hoisted_53 = { class: "month" };
var _hoisted_62 = { class: "count" };
var _hoisted_7 = ["href", "aria-label"];
var _hoisted_8 = { class: "date" };
var _sfc_main8 = defineComponent({
  ...{ name: "ArchivesPage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("archives");
    const { t } = useLocale();
    const { frontmatter } = useData7();
    const posts = usePosts();
    const defaultLabel = computed(() => {
      const frontmatterConst = frontmatter.value;
      return {
        title: frontmatterConst.title ?? t("tk.archives.title"),
        totalCount: frontmatterConst.totalCount ?? t("tk.archives.totalCount"),
        year: frontmatterConst.year ?? t("tk.archives.year"),
        month: frontmatterConst.month ?? t("tk.archives.month"),
        count: frontmatterConst.count ?? t("tk.archives.count"),
        notFound: frontmatterConst.notFound ?? t("tk.archives.notFound")
      };
    });
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createBlock(unref(_sfc_main3), {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.archives.label")
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "teek-archives-top-before"),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(`${unref(ns4).e("header")} flx-justify-between`)
            },
            [
              createBaseVNode(
                "h1",
                null,
                toDisplayString(defaultLabel.value.title),
                1
                /* TEXT */
              ),
              createBaseVNode(
                "div",
                _hoisted_15,
                toDisplayString(defaultLabel.value.totalCount.replace("{count}", unref(posts).sortPostsByDate.length)),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          ),
          renderSlot(_ctx.$slots, "teek-archives-top-after"),
          createBaseVNode("div", _hoisted_23, [
            createVNode(_component_Content)
          ]),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns4).e("timeline"))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(posts).groupPostsByYearMonth, (monthPosts, year) => {
                  return openBlock(), createElementBlock(
                    Fragment,
                    { key: year },
                    [
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(`${unref(ns4).em("timeline", "year")} flx-justify-between`)
                        },
                        [
                          createBaseVNode(
                            "div",
                            _hoisted_33,
                            toDisplayString(String(year).trim() === "NaN" ? defaultLabel.value.notFound : String(year).trim() + defaultLabel.value.year),
                            1
                            /* TEXT */
                          ),
                          createBaseVNode(
                            "div",
                            _hoisted_43,
                            toDisplayString(unref(posts).groupPostsByYear[year].length + defaultLabel.value.count),
                            1
                            /* TEXT */
                          )
                        ],
                        2
                        /* CLASS */
                      ),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns4).e("timeline__m"))
                        },
                        [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(monthPosts, (p, month) => {
                              return openBlock(), createElementBlock(
                                Fragment,
                                { key: month },
                                [
                                  createBaseVNode(
                                    "div",
                                    {
                                      class: normalizeClass(`${unref(ns4).em("timeline__m", "month")} flx-justify-between`)
                                    },
                                    [
                                      createBaseVNode(
                                        "div",
                                        _hoisted_53,
                                        toDisplayString(String(month) === "NaN" ? defaultLabel.value.notFound : month + defaultLabel.value.month),
                                        1
                                        /* TEXT */
                                      ),
                                      createBaseVNode(
                                        "div",
                                        _hoisted_62,
                                        toDisplayString(p.length + defaultLabel.value.count),
                                        1
                                        /* TEXT */
                                      )
                                    ],
                                    2
                                    /* CLASS */
                                  ),
                                  createBaseVNode("ul", null, [
                                    (openBlock(true), createElementBlock(
                                      Fragment,
                                      null,
                                      renderList(p, (item) => {
                                        var _a;
                                        return openBlock(), createElementBlock("li", {
                                          key: item.url
                                        }, [
                                          createBaseVNode("a", {
                                            href: item.url && unref(withBase3)(item.url),
                                            "aria-label": `${item.title}`
                                          }, [
                                            createBaseVNode(
                                              "span",
                                              _hoisted_8,
                                              toDisplayString((_a = item.date) == null ? void 0 : _a.slice(5, 10)),
                                              1
                                              /* TEXT */
                                            ),
                                            createVNode(unref(_sfc_main7), {
                                              post: item,
                                              "title-tag-props": { position: "right", size: "small" }
                                            }, null, 8, ["post"])
                                          ], 8, _hoisted_7)
                                        ]);
                                      }),
                                      128
                                      /* KEYED_FRAGMENT */
                                    ))
                                  ])
                                ],
                                64
                                /* STABLE_FRAGMENT */
                              );
                            }),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        2
                        /* CLASS */
                      )
                    ],
                    64
                    /* STABLE_FRAGMENT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ],
            2
            /* CLASS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "aria-label"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleOverviewPage/src/index.vue2.mjs
import { useData as useData8, withBase as withBase4 } from "vitepress";
var _hoisted_16 = { key: 0 };
var _hoisted_24 = ["href", "aria-label"];
var _hoisted_34 = ["id"];
var _hoisted_44 = ["href", "aria-label"];
var _hoisted_54 = ["href"];
var _hoisted_63 = { "aria-describedby": `overview-title` };
var _hoisted_72 = ["href", "aria-label"];
var _sfc_main9 = defineComponent({
  ...{ name: "ArticleOverviewPage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("article-overview");
    const { t } = useLocale();
    const posts = usePosts();
    const { localeIndex, site, theme, frontmatter } = useData8();
    const { getTeekConfigRef } = useTeekConfig();
    const categoryConfig = getTeekConfigRef("category", {
      path: "/categories"
    });
    const categories = computed(() => posts.value.groupPosts.categories);
    const eachFileWords = computed(() => {
      var _a;
      return ((_a = theme.value.docAnalysisInfo) == null ? void 0 : _a.eachFileWords) || [];
    });
    const categoriesPageLink = computed(() => {
      const localeIndexConst = localeIndex.value;
      const localeName = localeIndexConst !== "root" ? `/${localeIndexConst}` : "";
      return `${localeName}${categoryConfig.value.path}${site.value.cleanUrls ? "" : ".html"}`;
    });
    const getFileWords = (url) => {
      return eachFileWords.value.filter((item) => {
        const path = "/" + item.fileInfo.relativePath.replace(".md", "");
        return [path, `${path}.html`].includes(url);
      })[0];
    };
    const enhancedCategories = computed(() => {
      return Object.entries(categories.value).map(([key, items]) => ({
        name: key,
        data: items.map((item) => {
          const wordsInfo = getFileWords(item.url);
          return {
            ...item,
            wordCount: (wordsInfo == null ? void 0 : wordsInfo.wordCount) || "-",
            readingTime: (wordsInfo == null ? void 0 : wordsInfo.readingTime) || "-"
          };
        }) || []
      })).sort(
        (a, b) => new Date(b.data[b.data.length - 1].date).getTime() - new Date(a.data[a.data.length - 1].date).getTime()
      );
    });
    const formatPublishDate = (date) => {
      const publishDateFormat = frontmatter.value.publishDateFormat;
      if (!publishDateFormat) return date;
      return formatDate(date || /* @__PURE__ */ new Date(), publishDateFormat);
    };
    return (_ctx, _cache) => {
      const _component_Content = resolveComponent("Content");
      return openBlock(), createBlock(unref(_sfc_main3), {
        doc: "",
        aside: "",
        class: normalizeClass(unref(ns4).b())
      }, {
        default: withCtx(() => [
          unref(frontmatter).title ? (openBlock(), createElementBlock("h1", _hoisted_16, [
            createTextVNode(
              toDisplayString(unref(frontmatter).title) + " ",
              1
              /* TEXT */
            ),
            createBaseVNode("a", {
              class: "header-anchor",
              href: `#${unref(frontmatter).title}`,
              "aria-label": `Permalink to '${unref(frontmatter).title}'`
            }, null, 8, _hoisted_24)
          ])) : createCommentVNode("v-if", true),
          createVNode(_component_Content),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(enhancedCategories.value, (item) => {
              return openBlock(), createElementBlock(
                Fragment,
                {
                  key: item.name
                },
                [
                  createBaseVNode("h2", {
                    id: `${item.name}-${unref(t)("tk.articleOverview.overview")}`
                  }, [
                    createTextVNode(
                      toDisplayString(item.name) + " " + toDisplayString(unref(t)("tk.articleOverview.overview")) + " ",
                      1
                      /* TEXT */
                    ),
                    createBaseVNode("a", {
                      class: "header-anchor",
                      href: `#${item.name}-${unref(t)("tk.articleOverview.overview")}`,
                      "aria-label": `Permalink to '${item.name}-${unref(t)("tk.articleOverview.overview")}'`
                    }, null, 8, _hoisted_44)
                  ], 8, _hoisted_34),
                  createBaseVNode("a", {
                    href: `${categoriesPageLink.value}?category=${item.name}`,
                    "aria-describedby": `overview-title`
                  }, toDisplayString(item.name) + " " + toDisplayString(unref(t)("tk.articleOverview.category")), 9, _hoisted_54),
                  createBaseVNode("table", _hoisted_63, [
                    createBaseVNode("thead", null, [
                      createBaseVNode("tr", null, [
                        createBaseVNode(
                          "th",
                          null,
                          toDisplayString(unref(t)("tk.articleOverview.name")),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "th",
                          null,
                          toDisplayString(unref(t)("tk.articleOverview.title")),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "th",
                          null,
                          toDisplayString(unref(t)("tk.articleOverview.date")),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "th",
                          null,
                          toDisplayString(unref(t)("tk.articleOverview.wordCount")),
                          1
                          /* TEXT */
                        ),
                        createBaseVNode(
                          "th",
                          null,
                          toDisplayString(unref(t)("tk.articleOverview.readingTime")),
                          1
                          /* TEXT */
                        )
                      ])
                    ]),
                    createBaseVNode("tbody", null, [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(item.data, (data) => {
                          return openBlock(), createElementBlock("tr", {
                            key: data.url
                          }, [
                            createBaseVNode(
                              "td",
                              null,
                              toDisplayString(item.name),
                              1
                              /* TEXT */
                            ),
                            createBaseVNode("td", null, [
                              createBaseVNode("a", {
                                href: data.url && unref(withBase4)(data.url),
                                "aria-label": data.title
                              }, [
                                data.title ? (openBlock(), createBlock(resolveDynamicComponent(unref(createDynamicComponent)(data.title)), { key: 0 })) : createCommentVNode("v-if", true)
                              ], 8, _hoisted_72)
                            ]),
                            createBaseVNode(
                              "td",
                              null,
                              toDisplayString(formatPublishDate(data.date)),
                              1
                              /* TEXT */
                            ),
                            createBaseVNode(
                              "td",
                              null,
                              toDisplayString(data.wordCount),
                              1
                              /* TEXT */
                            ),
                            createBaseVNode(
                              "td",
                              null,
                              toDisplayString(data.readingTime),
                              1
                              /* TEXT */
                            )
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/LoginPage/src/index.vue2.mjs
import { useRouter as useRouter2, useData as useData9, withBase as withBase5 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/components/SvgIcon.vue2.mjs
var _hoisted_17 = ["innerHTML"];
var _sfc_main10 = defineComponent({
  ...{ name: "SvgIcon" },
  __name: "SvgIcon",
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", { innerHTML: _ctx.icon }, null, 8, _hoisted_17);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/components/FontIcon.vue2.mjs
var _hoisted_18 = {
  key: 0,
  class: "iconfont"
};
var _hoisted_25 = {
  key: 2,
  class: "icon-svg",
  "aria-hidden": "true"
};
var _hoisted_35 = ["xlink:href"];
var _sfc_main11 = defineComponent({
  ...{ name: "FontIcon" },
  __name: "FontIcon",
  props: {
    icon: {},
    iconType: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return _ctx.iconType === "unicode" ? (openBlock(), createElementBlock(
        "i",
        _hoisted_18,
        toDisplayString(_ctx.icon),
        1
        /* TEXT */
      )) : _ctx.iconType === "iconfont" ? (openBlock(), createElementBlock(
        "i",
        {
          key: 1,
          class: normalizeClass(`iconfont ${_ctx.icon}`)
        },
        null,
        2
        /* CLASS */
      )) : _ctx.iconType === "symbol" ? (openBlock(), createElementBlock("svg", _hoisted_25, [
        createBaseVNode("use", {
          "xlink:href": `#${_ctx.icon}`
        }, null, 8, _hoisted_35)
      ])) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/@iconify/vue/dist/iconify.mjs
var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
var validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  ((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
var defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
var defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
var defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
var defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
var optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (
      // Name cannot be empty
      !name || // Must have body
      typeof icon.body !== "string" || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
      // Name cannot be empty
      !name || // Parent must be set and point to existing icon
      typeof parent !== "string" || !icons[parent] && !aliases[parent] || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  return data;
}
var dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
function addIconToStorage(storage2, name, icon) {
  try {
    if (typeof icon.body === "string") {
      storage2.icons[name] = { ...icon };
      return true;
    }
  } catch (err) {
  }
  return false;
}
var simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
function addIcon(name, data) {
  const icon = stringToIcon(name, true, simpleNames);
  if (!icon) {
    return false;
  }
  const storage2 = getStorage(icon.provider, icon.prefix);
  if (data) {
    return addIconToStorage(storage2, icon.name, data);
  } else {
    storage2.missing.add(icon.name);
    return true;
  }
}
function addCollection(data, provider) {
  if (typeof data !== "object") {
    return false;
  }
  if (typeof provider !== "string") {
    provider = data.provider || "";
  }
  if (simpleNames && !provider && !data.prefix) {
    let added = false;
    if (quicklyValidateIconSet(data)) {
      data.prefix = "";
      parseIconSet(data, (name, icon) => {
        if (addIcon(name, icon)) {
          added = true;
        }
      });
    }
    return added;
  }
  const prefix = data.prefix;
  if (!validateIconName({
    provider,
    prefix,
    name: "a"
  })) {
    return false;
  }
  const storage2 = getStorage(provider, prefix);
  return !!addIconSet(storage2, data);
}
var defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
var defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size2, ratio, precision) {
  if (ratio === 1) {
    return size2;
  }
  precision = precision || 100;
  if (typeof size2 === "number") {
    return Math.ceil(size2 * ratio * precision) / precision;
  }
  if (typeof size2 !== "string") {
    return size2;
  }
  const oldParts = size2.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size2;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber2 = unitsTest.test(code);
  while (true) {
    if (isNumber2) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber2 = !isNumber2;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index2 = content.indexOf("<" + tag);
  while (index2 >= 0) {
    const start = content.indexOf(">", index2);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index2).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
var regex = /\sid="(\S+)"/g;
var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
var counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
var storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
var configStorage = /* @__PURE__ */ Object.create(null);
var fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
var fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function addAPIProvider(provider, customConfig) {
  const config = createAPIConfig(customConfig);
  if (config === null) {
    return false;
  }
  configStorage[provider] = config;
  return true;
}
function getAPIConfig(provider) {
  return configStorage[provider];
}
var detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
var fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
var prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type2 = "icons";
  let item = {
    type: type2,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index2) => {
    length += name.length + 1;
    if (length >= maxLength && index2 > 0) {
      results.push(item);
      item = {
        type: type2,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
var send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
var fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage2 = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage2.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage2.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items = storage2.loaderCallbacks;
    if (items) {
      storage2.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
var idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index2 = config.resources.indexOf(item.resource);
      if (index2 !== -1 && index2 !== config.index) {
        config.index = index2;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance2 = {
    query,
    find,
    setIndex: (index2) => {
      config.index = index2;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance2;
}
function emptyCallback$1() {
}
var redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function checkIconNamesForAPI(icons) {
  const valid = [];
  const invalid = [];
  icons.forEach((name) => {
    (name.match(matchIconName) ? valid : invalid).push(name);
  });
  return {
    valid,
    invalid
  };
}
function parseLoaderResponse(storage2, icons, data) {
  function checkMissing() {
    const pending = storage2.pendingIcons;
    icons.forEach((name) => {
      if (pending) {
        pending.delete(name);
      }
      if (!storage2.icons[name]) {
        storage2.missing.add(name);
      }
    });
  }
  if (data && typeof data === "object") {
    try {
      const parsed = addIconSet(storage2, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }
  checkMissing();
  loadedNewIcons(storage2);
}
function parsePossiblyAsyncResponse(response, callback) {
  if (response instanceof Promise) {
    response.then((data) => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
  } else {
    callback(response);
  }
}
function loadNewIcons(storage2, icons) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons2 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      if (!icons2 || !icons2.length) {
        return;
      }
      const customIconLoader = storage2.loadIcon;
      if (storage2.loadIcons && (icons2.length > 1 || !customIconLoader)) {
        parsePossiblyAsyncResponse(
          storage2.loadIcons(icons2, prefix, provider),
          (data) => {
            parseLoaderResponse(storage2, icons2, data);
          }
        );
        return;
      }
      if (customIconLoader) {
        icons2.forEach((name) => {
          const response = customIconLoader(name, prefix, provider);
          parsePossiblyAsyncResponse(response, (data) => {
            const iconSet = data ? {
              prefix,
              icons: {
                [name]: data
              }
            } : null;
            parseLoaderResponse(storage2, [name], iconSet);
          });
        });
        return;
      }
      const { valid, invalid } = checkIconNamesForAPI(icons2);
      if (invalid.length) {
        parseLoaderResponse(storage2, invalid, null);
      }
      if (!valid.length) {
        return;
      }
      const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
      if (!api) {
        parseLoaderResponse(storage2, valid, null);
        return;
      }
      const params = api.prepare(provider, prefix, valid);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          parseLoaderResponse(storage2, item.icons, data);
        });
      });
    });
  }
}
var loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const list = newIcons[storage2.provider][storage2.prefix];
    if (list.length) {
      loadNewIcons(storage2, list);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
var separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str2) => {
    const value = str2.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
var defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
var svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
var commonProps = {
  display: "inline-block"
};
var monotoneProps = {
  backgroundColor: "currentColor"
};
var coloredProps = {
  backgroundColor: "transparent"
};
var propsToAdd = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
var propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + prop] = propsToAdd[prop];
  }
}
var customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
  const attr = prefix.slice(0, 1) + "Flip";
  customisationAliases[prefix + "-flip"] = attr;
  customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
  customisationAliases[prefix + "Flip"] = attr;
});
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
var render2 = (icon, props) => {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const componentProps = { ...svgDefaults };
  const mode = props.mode || "svg";
  const style = {};
  const propsStyle = props.style;
  const customStyle = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      case "color":
        style.color = value;
        break;
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default: {
        const alias = customisationAliases[key];
        if (alias) {
          if (value === true || value === "true" || value === 1) {
            customisations[alias] = true;
          }
        } else if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
      }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style.verticalAlign = "-0.125em";
  }
  if (mode === "svg") {
    componentProps.style = {
      ...style,
      ...customStyle
    };
    Object.assign(componentProps, renderAttribs);
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
    return h("svg", componentProps);
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  componentProps.style = {
    ...style,
    "--svg": svgToURL(html),
    "width": fixSize(renderAttribs.width),
    "height": fixSize(renderAttribs.height),
    ...commonProps,
    ...useMask ? monotoneProps : coloredProps,
    ...customStyle
  };
  return h("span", componentProps);
};
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
if (typeof document !== "undefined" && typeof window !== "undefined") {
  const _window = window;
  if (_window.IconifyPreload !== void 0) {
    const preload = _window.IconifyPreload;
    const err = "Invalid IconifyPreload syntax.";
    if (typeof preload === "object" && preload !== null) {
      (preload instanceof Array ? preload : [preload]).forEach((item) => {
        try {
          if (
            // Check if item is an object and not null/array
            typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
            typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
            !addCollection(item)
          ) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      });
    }
  }
  if (_window.IconifyProviders !== void 0) {
    const providers = _window.IconifyProviders;
    if (typeof providers === "object" && providers !== null) {
      for (let key in providers) {
        const err = "IconifyProviders[" + key + "] is invalid.";
        try {
          const value = providers[key];
          if (typeof value !== "object" || !value || value.resources === void 0) {
            continue;
          }
          if (!addAPIProvider(key, value)) {
            console.error(err);
          }
        } catch (e) {
          console.error(err);
        }
      }
    }
  }
}
var emptyIcon2 = {
  ...defaultIconProps,
  body: ""
};
var Icon = defineComponent({
  // Do not inherit other attributes: it is handled by render()
  inheritAttrs: false,
  // Set initial data
  data() {
    return {
      // Current icon name
      _name: "",
      // Loading
      _loadingIcon: null,
      // Mounted status
      iconMounted: false,
      // Callback counter to trigger re-render
      counter: 0
    };
  },
  mounted() {
    this.iconMounted = true;
  },
  unmounted() {
    this.abortLoading();
  },
  methods: {
    abortLoading() {
      if (this._loadingIcon) {
        this._loadingIcon.abort();
        this._loadingIcon = null;
      }
    },
    // Get data for icon to render or null
    getIcon(icon, onload, customise) {
      if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
        this._name = "";
        this.abortLoading();
        return {
          data: icon
        };
      }
      let iconName;
      if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
        this.abortLoading();
        return null;
      }
      let data = getIconData(iconName);
      if (!data) {
        if (!this._loadingIcon || this._loadingIcon.name !== icon) {
          this.abortLoading();
          this._name = "";
          if (data !== null) {
            this._loadingIcon = {
              name: icon,
              abort: loadIcons([iconName], () => {
                this.counter++;
              })
            };
          }
        }
        return null;
      }
      this.abortLoading();
      if (this._name !== icon) {
        this._name = icon;
        if (onload) {
          onload(icon);
        }
      }
      if (customise) {
        data = Object.assign({}, data);
        const customised = customise(data.body, iconName.name, iconName.prefix, iconName.provider);
        if (typeof customised === "string") {
          data.body = customised;
        }
      }
      const classes = ["iconify"];
      if (iconName.prefix !== "") {
        classes.push("iconify--" + iconName.prefix);
      }
      if (iconName.provider !== "") {
        classes.push("iconify--" + iconName.provider);
      }
      return { data, classes };
    }
  },
  // Render icon
  render() {
    this.counter;
    const props = this.$attrs;
    const icon = this.iconMounted || props.ssr ? this.getIcon(props.icon, props.onLoad, props.customise) : null;
    if (!icon) {
      return render2(emptyIcon2, props);
    }
    let newProps = props;
    if (icon.classes) {
      newProps = {
        ...props,
        class: (typeof props["class"] === "string" ? props["class"] + " " : "") + icon.classes.join(" ")
      };
    }
    return render2({
      ...defaultIconProps,
      ...icon.data
    }, newProps);
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/components/IconifyOffline.vue2.mjs
var _sfc_main12 = defineComponent({
  ...{ name: "IconifyOffline" },
  __name: "IconifyOffline",
  props: {
    icon: {}
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      const id = useId();
      addIcon(`iconify-${id}`, props.icon);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Icon), {
        icon: _ctx.icon,
        style: { outline: "none" }
      }, null, 8, ["icon"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/components/IconifyOnline.vue2.mjs
var _sfc_main13 = defineComponent({
  ...{ name: "IconifyOnline" },
  __name: "IconifyOnline",
  props: {
    icon: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Icon), {
        icon: _ctx.icon,
        style: { outline: "none" }
      }, null, 8, ["icon"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Icon/src/index.vue2.mjs
var _hoisted_19 = ["src", "alt"];
var _sfc_main14 = defineComponent({
  ...{ name: "Icon" },
  __name: "index",
  props: {
    icon: { default: "" },
    iconType: {},
    size: {},
    color: {},
    hover: { type: Boolean, default: false },
    hoverColor: {},
    imgAlt: {},
    style: {}
  },
  setup(__props) {
    const ns4 = useNamespace("icon");
    const props = createPropsRestProxy(__props, ["icon", "iconType", "color", "hover", "hoverColor"]);
    const slot = useSlots();
    const getStyle = () => {
      return {
        ...props.style,
        "--icon-color": __props.color,
        "--icon-size": props.size && addUnit(props.size),
        "--icon-color-hover": __props.hoverColor || ns4.cssVar("theme-color")
      };
    };
    const finalIcon = computed(() => {
      if (isString2(__props.icon)) return __props.icon.replace(/^(if-|uni-|sym-|img-)/, "");
      return __props.icon;
    });
    const getFontIconType = () => {
      if (__props.iconType && ["unicode", "iconfont", "symbol"].includes(__props.iconType)) {
        return __props.iconType;
      }
      if (!isString2(__props.icon)) return "iconfont";
      if (__props.icon.toLowerCase().startsWith("if-")) return "iconfont";
      if (__props.icon.toLowerCase().startsWith("uni-")) return "unicode";
      if (__props.icon.toLowerCase().startsWith("sym-")) return "symbol";
    };
    const isSvgIcon = () => isString2(__props.icon) && (__props.iconType === "svg" || __props.icon.startsWith("<svg"));
    const isFontIcon = () => isString2(__props.icon) && getFontIconType();
    const isComponent2 = () => !isString2(__props.icon) && (__props.iconType === "component" || __props.icon.name || __props.icon.setup);
    const isIconifyOffline = () => !isString2(__props.icon) && (__props.iconType === "iconifyOffline" || __props.icon.body);
    const isIconifyOnline = () => isString2(__props.icon) && (__props.iconType === "iconifyOnline" || __props.icon.includes(":"));
    const isImg = () => isString2(__props.icon) && (__props.iconType === "img" || __props.icon.toLowerCase().startsWith("img-"));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).is("hover", _ctx.hover)]),
          style: normalizeStyle(getStyle())
        },
        [
          unref(slot).default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : isComponent2() ? (openBlock(), createBlock(resolveDynamicComponent(finalIcon.value), {
            key: 1,
            size: _ctx.size
          }, null, 8, ["size"])) : isImg() ? (openBlock(), createElementBlock("img", {
            key: 2,
            src: finalIcon.value,
            alt: _ctx.imgAlt
          }, null, 8, _hoisted_19)) : isSvgIcon() ? (openBlock(), createBlock(_sfc_main10, {
            key: 3,
            icon: finalIcon.value
          }, null, 8, ["icon"])) : isFontIcon() ? (openBlock(), createBlock(_sfc_main11, {
            key: 4,
            icon: finalIcon.value,
            iconType: getFontIconType()
          }, null, 8, ["icon", "iconType"])) : isIconifyOffline() ? (openBlock(), createBlock(_sfc_main12, {
            key: 5,
            icon: finalIcon.value
          }, null, 8, ["icon"])) : isIconifyOnline() ? (openBlock(), createBlock(_sfc_main13, {
            key: 6,
            icon: finalIcon.value
          }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Message/src/index.vue2.mjs
import { VPBadge } from "vitepress/theme";
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Message/src/message.mjs
var messageTypes = ["primary", "success", "info", "warning", "error"];
var messagePropsDefaults = {
  customClass: "",
  center: false,
  dangerouslyUseHTMLString: false,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: false,
  type: "info",
  plain: false,
  offset: 16,
  zIndex: 0,
  grouping: false,
  repeatNum: 1
};
var messageDefaults = {
  ...messagePropsDefaults,
  appendTo: isClient ? document.body : void 0
};

// node_modules/vitepress-theme-teek/es/components/common/Message/src/instance.mjs
var instances = shallowReactive([]);
var getInstance = (id) => {
  const idx = instances.findIndex((instance2) => instance2.id === id);
  const current = instances[idx];
  let prev;
  if (idx > 0) {
    prev = instances[idx - 1];
  }
  return { current, prev };
};
var getLastOffset = (id) => {
  const { prev } = getInstance(id);
  if (!prev) return 0;
  return prev.vm.exposed.bottom.value;
};
var getOffsetOrSpace = (id, offset) => {
  const idx = instances.findIndex((instance2) => instance2.id === id);
  return idx > 0 ? 16 : offset;
};

// node_modules/vitepress-theme-teek/es/components/common/Message/src/index.vue2.mjs
var _hoisted_110 = ["id"];
var _hoisted_26 = ["innerHTML"];
var _sfc_main15 = defineComponent({
  ...{ name: "Message" },
  __name: "index",
  props: mergeDefaults({
    customClass: {},
    center: { type: Boolean },
    dangerouslyUseHTMLString: { type: Boolean },
    duration: {},
    icon: {},
    id: {},
    message: { type: [String, Object, Function] },
    onClose: { type: Function },
    showClose: { type: Boolean },
    type: {},
    plain: { type: Boolean },
    offset: {},
    zIndex: {},
    grouping: { type: Boolean },
    repeatNum: {}
  }, messagePropsDefaults),
  emits: ["destroy"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const iconsMap = {
      success: successFilledIcon,
      warning: warningFilledIcon,
      error: circleCloseFilledIcon,
      info: infoFilledIcon
    };
    const isStartTransition = ref(false);
    const ns4 = useNamespace("message");
    const { currentZIndex, nextZIndex } = useZIndex();
    const messageRef = ref();
    const visible = ref(false);
    const height = ref(0);
    const badeTypeMap = {
      info: "info",
      primary: "primary",
      success: "success",
      warning: "warning",
      error: "danger"
    };
    const badgeType = computed(() => props.type ? badeTypeMap[props.type] : "info");
    const typeClass = computed(() => {
      const type2 = props.type;
      return { [ns4.bm("icon", type2)]: type2 && iconsMap[type2] };
    });
    const iconComponent = computed(() => props.icon || iconsMap[props.type] || "");
    const lastOffset = computed(() => getLastOffset(props.id));
    const offset = computed(() => getOffsetOrSpace(props.id, props.offset) + lastOffset.value);
    const bottom = computed(() => height.value + offset.value);
    const customStyle = computed(() => ({
      top: `${offset.value}px`,
      zIndex: currentZIndex.value
    }));
    let timer;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    const startTimer = () => {
      if (props.duration === 0) return;
      clearTimer();
      timer = setTimeout(() => {
        close();
      }, props.duration);
    };
    const close = () => {
      visible.value = false;
      nextTick(() => {
        var _a;
        if (!isStartTransition.value) {
          (_a = props.onClose) == null ? void 0 : _a.call(props);
          emit("destroy");
        }
      });
    };
    const keydown = ({ code }) => {
      if (code === "Space") {
        close();
      }
    };
    let resizeObserver;
    onMounted(() => {
      startTimer();
      nextZIndex();
      visible.value = true;
      resizeObserver = new ResizeObserver(() => {
        if (messageRef.value) height.value = messageRef.value.getBoundingClientRect().height;
      });
      if (messageRef.value) resizeObserver.observe(messageRef.value);
    });
    onUnmounted(() => {
      if (resizeObserver && messageRef.value) resizeObserver.unobserve(messageRef.value);
    });
    watch(
      () => props.repeatNum,
      () => {
        clearTimer();
        startTimer();
      }
    );
    useEventListener(document, "keydown", keydown);
    __expose({
      visible,
      bottom,
      close
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns4).b("fade"),
        onBeforeEnter: _cache[0] || (_cache[0] = ($event) => isStartTransition.value = true),
        onBeforeLeave: _ctx.onClose,
        onAfterLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("destroy")),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            id: _ctx.id,
            ref_key: "messageRef",
            ref: messageRef,
            class: normalizeClass([
              unref(ns4).b(),
              { [unref(ns4).m(_ctx.type)]: _ctx.type },
              unref(ns4).is("center", _ctx.center),
              unref(ns4).is("closable", _ctx.showClose),
              unref(ns4).is("plain", _ctx.plain),
              _ctx.customClass
            ]),
            style: normalizeStyle(customStyle.value),
            role: "alert",
            onMouseenter: clearTimer,
            onMouseleave: startTimer
          }, [
            _ctx.repeatNum > 1 ? (openBlock(), createBlock(unref(VPBadge), {
              key: 0,
              text: _ctx.repeatNum,
              type: badgeType.value,
              class: normalizeClass(unref(ns4).e("badge"))
            }, null, 8, ["text", "type", "class"])) : createCommentVNode("v-if", true),
            iconComponent.value ? (openBlock(), createBlock(unref(_sfc_main14), {
              key: 1,
              icon: iconComponent.value,
              class: normalizeClass([unref(ns4).e("icon"), typeClass.value])
            }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true),
            renderSlot(_ctx.$slots, "default", {}, () => [
              !_ctx.dangerouslyUseHTMLString ? (openBlock(), createElementBlock(
                "p",
                {
                  key: 0,
                  class: normalizeClass(unref(ns4).e("content"))
                },
                toDisplayString(_ctx.message),
                3
                /* TEXT, CLASS */
              )) : (openBlock(), createElementBlock("p", {
                key: 1,
                class: normalizeClass(unref(ns4).e("content")),
                innerHTML: _ctx.message
              }, null, 10, _hoisted_26))
            ]),
            _ctx.showClose ? (openBlock(), createBlock(unref(_sfc_main14), {
              key: 2,
              icon: unref(closeIcon),
              class: normalizeClass(unref(ns4).e("closeBtn")),
              onClick: withModifiers(close, ["stop"])
            }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true)
          ], 46, _hoisted_110), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["name", "onBeforeLeave"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Message/src/method.mjs
var seed = 1;
var normalizeOptions = (params) => {
  const options = !params || isString2(params) || isVNode(params) || isFunction(params) ? { message: params } : params;
  const normalized = {
    ...messageDefaults,
    ...options
  };
  if (!normalized.appendTo) normalized.appendTo = document.body;
  else if (isString2(normalized.appendTo)) {
    let appendTo = document.querySelector(normalized.appendTo);
    if (!isElement(appendTo)) {
      console.warn("Message", "the appendTo option is not an HTMLElement. Falling back to document.body.");
      appendTo = document.body;
    }
    normalized.appendTo = appendTo;
  }
  return normalized;
};
var closeMessage = (instance2) => {
  const idx = instances.indexOf(instance2);
  if (idx === -1) return;
  instances.splice(idx, 1);
  const { handler } = instance2;
  handler.close();
};
var createMessage = ({ appendTo, ...options }, context) => {
  const id = `message_${seed++}`;
  const userOnClose = options.onClose;
  const container = document.createElement("div");
  const props = {
    ...options,
    // now the zIndex will be used inside the message.vue component instead of here.
    // zIndex: nextIndex() + options.zIndex
    id,
    onClose: () => {
      userOnClose == null ? void 0 : userOnClose();
      closeMessage(instance2);
    },
    // clean message element preventing mem leak
    onDestroy: () => {
      render(null, container);
    }
  };
  const vnode = createVNode(
    _sfc_main15,
    props,
    isFunction(props.message) || isVNode(props.message) ? {
      default: isFunction(props.message) ? props.message : () => props.message
    } : null
  );
  vnode.appContext = context || message._context;
  render(vnode, container);
  appendTo.appendChild(container.firstElementChild);
  const vm = vnode.component;
  const handler = {
    // instead of calling the onClose function directly, setting this value so that we can have the full lifecycle
    // for out component, so that all closing steps will not be skipped.
    close: () => {
      vm.exposed.close();
    }
  };
  const instance2 = {
    id,
    vnode,
    vm,
    handler,
    props: vnode.component.props
  };
  return instance2;
};
var message = (options = {}, context) => {
  if (!isClient) return { close: () => void 0 };
  const normalized = normalizeOptions(options);
  if (normalized.grouping && instances.length) {
    const instance22 = instances.find(({ vnode: vm }) => {
      var _a;
      return ((_a = vm.props) == null ? void 0 : _a.message) === normalized.message;
    });
    if (instance22) {
      instance22.props.repeatNum += 1;
      instance22.props.type = normalized.type;
      return instance22.handler;
    }
  }
  const instance2 = createMessage(normalized, context);
  instances.push(instance2);
  return instance2.handler;
};
messageTypes.forEach((type2) => {
  message[type2] = (options = {}, appContext) => {
    const normalized = normalizeOptions(options);
    return message({ ...normalized, type: type2 }, appContext);
  };
});
function closeAll(type2) {
  const instancesToClose = [...instances];
  for (const instance2 of instancesToClose) {
    if (!type2 || type2 === instance2.props.type) {
      instance2.handler.close();
    }
  }
}
message.closeAll = closeAll;
message._context = null;

// node_modules/vitepress-theme-teek/es/components/common/VerifyCode/src/useImgCode.mjs
var useImageVerify = (width = 120, height = 40) => {
  const domRef = ref();
  const imgCode = ref("");
  function setImgCode(code) {
    imgCode.value = code;
  }
  function getImgCode() {
    if (!domRef.value) return;
    imgCode.value = draw(domRef.value, width, height);
  }
  onMounted(() => {
    getImgCode();
  });
  return {
    domRef,
    imgCode,
    setImgCode,
    getImgCode
  };
};
function randomNum(min, max) {
  const num = Math.floor(Math.random() * (max - min) + min);
  return num;
}
function randomColor(min, max) {
  const r = randomNum(min, max);
  const g = randomNum(min, max);
  const b = randomNum(min, max);
  return `rgb(${r},${g},${b})`;
}
function draw(dom, width, height) {
  let imgCode = "";
  const NUMBER_STRING = "0123456789";
  const ctx = dom.getContext("2d");
  if (!ctx) return imgCode;
  ctx.fillStyle = randomColor(180, 230);
  ctx.fillRect(0, 0, width, height);
  for (let i = 0; i < 4; i += 1) {
    const text = NUMBER_STRING[randomNum(0, NUMBER_STRING.length)];
    imgCode += text;
    const fontSize = randomNum(18, 41);
    const deg = randomNum(-30, 30);
    ctx.font = `${fontSize}px Simhei`;
    ctx.textBaseline = "top";
    ctx.fillStyle = randomColor(80, 150);
    ctx.save();
    ctx.translate(30 * i + 15, 15);
    ctx.rotate(deg * Math.PI / 180);
    ctx.fillText(text, -15 + 5, -15);
    ctx.restore();
  }
  for (let i = 0; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(randomNum(0, width), randomNum(0, height));
    ctx.lineTo(randomNum(0, width), randomNum(0, height));
    ctx.strokeStyle = randomColor(180, 230);
    ctx.closePath();
    ctx.stroke();
  }
  for (let i = 0; i < 41; i += 1) {
    ctx.beginPath();
    ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fillStyle = randomColor(150, 200);
    ctx.fill();
  }
  return imgCode;
}

// node_modules/vitepress-theme-teek/es/components/common/VerifyCode/src/index.vue2.mjs
var _sfc_main16 = defineComponent({
  ...{ name: "ImageVerifyCode" },
  __name: "index",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const { domRef, imgCode, setImgCode, getImgCode } = useImageVerify();
    const code = useModel(__props, "modelValue");
    watch(code, (newValue) => {
      setImgCode(newValue);
    });
    watch(imgCode, (newValue) => {
      code.value = newValue;
    });
    __expose({ getImgCode });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "canvas",
        {
          ref_key: "domRef",
          ref: domRef,
          width: "120",
          height: "40",
          class: "cursor-pointer",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(getImgCode) && unref(getImgCode)(...args))
        },
        null,
        512
        /* NEED_PATCH */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/LoginPage/src/login.mjs
import "vitepress";
var getLoginStorageKey = () => {
  if (!isClient) return { siteLoginKey: "", pagesLoginKey: "", pageLoginKey: "", realmLoginKey: "" };
  const ns4 = useNamespace();
  const siteLoginKey = ns4.storageKey("private", "site", window.location.hostname);
  const pagesLoginKey = ns4.storageKey("private", "pages", window.location.hostname);
  const pageLoginKey = ns4.storageKey("private", "page", window.location.hostname);
  const realmLoginKey = ns4.storageKey("private", "realm", window.location.hostname);
  return { siteLoginKey, pagesLoginKey, pageLoginKey, realmLoginKey };
};
var loginUrlKeyMap = {
  realm: "realm",
  toPath: "toPath",
  verifyMode: "verifyMode"
};
var verifyModeMap = {
  site: "site",
  pages: "pages",
  page: "page",
  realm: "realm"
};
var defaultPrivateConfig = {
  enabled: false,
  expire: "1d",
  session: false,
  siteLogin: false,
  site: [],
  pages: [],
  realm: {}
};

// node_modules/vitepress-theme-teek/es/components/theme/LoginPage/src/index.vue2.mjs
var _hoisted_111 = ["aria-label"];
var _hoisted_27 = ["src"];
var _hoisted_36 = ["src"];
var _hoisted_45 = { class: "title" };
var _hoisted_55 = { class: "flx-space-y-20 login-form" };
var _hoisted_64 = ["for"];
var _hoisted_73 = ["onUpdate:modelValue", "type", "placeholder", "onFocus", "onBlur"];
var _hoisted_82 = ["aria-label"];
var _hoisted_9 = ["aria-label"];
var _sfc_main17 = defineComponent({
  ...{ name: "LoginPage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("login");
    const router = useRouter2();
    const { frontmatter } = useData9();
    const posts = usePosts();
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const privateConfig = getTeekConfigRef("private", defaultPrivateConfig);
    const { siteLoginKey, pagesLoginKey, pageLoginKey, realmLoginKey } = getLoginStorageKey();
    const imgCode = ref("");
    const loginForm = reactive({
      username: {
        model: "",
        focusModel: false,
        errorModel: false,
        icon: userIcon,
        placeholder: t("tk.login.usernamePlaceholder"),
        type: "text"
      },
      password: {
        model: "",
        focusModel: false,
        errorModel: false,
        icon: lockIcon,
        placeholder: t("tk.login.passwordPlaceholder"),
        type: "password"
      },
      verifyCode: {
        model: "",
        focusModel: false,
        errorModel: false,
        icon: warningFilledIcon,
        placeholder: t("tk.login.verifyCodePlaceholder"),
        type: "text",
        append: markRaw(_sfc_main16),
        appendModel: imgCode
      }
    });
    const checkLoginForm = () => {
      if (loginForm.verifyCode.model === "") {
        loginForm.verifyCode.errorModel = true;
        message.warning({ message: t("tk.login.verifyCodeNonNull"), plain: true });
        return false;
      }
      if (loginForm.verifyCode.model !== imgCode.value) {
        loginForm.verifyCode.errorModel = true;
        message.error({ message: t("tk.login.verifyCodeError"), plain: true });
        return false;
      }
      if (loginForm.username.model === "" || loginForm.password.model === "") {
        loginForm.username.errorModel = true;
        message.warning({ message: t("tk.login.loginInfoNonNull"), plain: true });
        return false;
      }
      if (loginForm.password.model === "") {
        loginForm.password.errorModel = true;
        message.warning({ message: t("tk.login.loginInfoNonNull"), plain: true });
        return false;
      }
      return true;
    };
    const getExpire = (expire) => {
      if (!expire) return 864e5;
      if (expire.indexOf("d") !== -1) return parseInt(expire.replace("d", "")) * 24 * 60 * 60 * 1e3;
      if (expire.indexOf("h") !== -1) return parseInt(expire.replace("h", "")) * 60 * 60 * 1e3;
      return parseInt(expire) * 1e3;
    };
    const resetForm = () => {
      Object.values(loginForm).forEach((form) => {
        form.model = "";
        form.focusModel = false;
      });
    };
    const getLoginHandler = () => {
      const { searchParams } = new URL(window.location.href);
      const verifyModeValue = searchParams.get(loginUrlKeyMap.verifyMode);
      const toPath = searchParams.get(loginUrlKeyMap.toPath);
      const realmValue = searchParams.get(loginUrlKeyMap.realm);
      const { site = [], pages = [], realm = {} } = privateConfig.value;
      return [
        {
          // 单页面级别登录
          condition: () => verifyModeValue === verifyModeMap.page && toPath,
          handle: () => execLogin([], pageLoginKey, { toPath })
        },
        {
          // 单页面级别登录
          condition: () => verifyModeValue === verifyModeMap.realm && realmValue,
          handle: () => execLogin(realm[realmValue] || [], realmLoginKey, { isRealm: true, realm: realmValue })
        },
        {
          // 全局页面级别登录
          condition: () => verifyModeValue === verifyModeMap.pages,
          handle: () => execLogin(pages, pagesLoginKey)
        },
        {
          // 站点级别登录
          condition: () => verifyModeValue === verifyModeMap.site,
          handle: () => execLogin(site, siteLoginKey, { isSite: true })
        }
      ].find((item) => item.condition());
    };
    const login = () => {
      if (!isClient) return;
      const { enabled = false } = privateConfig.value;
      if (!enabled) {
        message.success({ message: t("tk.login.loginSuccess"), plain: true });
        return router.go("/");
      }
      if (!checkLoginForm()) return;
      const { searchParams } = new URL(window.location.href);
      const toPath = searchParams.get(loginUrlKeyMap.toPath);
      let isLogin = false;
      const handler = getLoginHandler();
      if (handler) {
        const { doLogin } = privateConfig.value;
        const loginInfo = { username: loginForm.username.model, password: loginForm.password.model };
        const nativeLogin = handler.handle;
        isLogin = doLogin ? doLogin(loginInfo, "page", nativeLogin) : nativeLogin();
      }
      if (isLogin === void 0) return;
      if (isLogin) {
        message.success({ message: t("tk.login.loginSuccess"), plain: true });
        if (toPath) router.go(toPath);
      } else message.error({ message: t("tk.login.loginError"), plain: true });
    };
    const execLogin = (loginInfo, storageKey, options = {}) => {
      const { toPath } = options;
      if (toPath) return execSinglePageLogin(toPath, storageKey);
      const credential = loginInfo.find(
        (item) => item.username === loginForm.username.model && item.password === loginForm.password.model
      );
      if (!credential) return false;
      return storeLoginInfo(credential, storageKey, options);
    };
    const execSinglePageLogin = (toPath, storageKey) => {
      const post = posts.value.originPosts.find((post2) => [post2.frontmatter.permalink, post2.url].includes(toPath));
      if (!post) return false;
      const { username, password, session, expire, strategy, realm } = post.frontmatter || {};
      const loginInfoList = [
        ...post.frontmatter.loginInfo || [],
        { username, password, session, expire, strategy, realm }
      ].filter((item) => ![void 0, ""].includes(item.username) && ![void 0, ""].includes(item.password));
      const loginInfo = loginInfoList.find(
        (item) => item.username === loginForm.username.model && item.password === loginForm.password.model
      );
      if (loginInfo) {
        return storeLoginInfo({ ...loginInfo }, storageKey + post.url);
      }
      if (realm && privateConfig.value.realm) {
        const nativeLogin = () => execLogin(privateConfig.value.realm[realm], realmLoginKey, { isRealm: true, realm });
        return privateConfig.value.doLogin ? privateConfig.value.doLogin({ username, password }, "realm", nativeLogin) : nativeLogin();
      }
      return false;
    };
    const storeLoginInfo = (loginInfo, storageKey, options = {}) => {
      const { session, expire, strategy = "once", role = "common" } = loginInfo;
      const { isSite = false, isRealm = false, realm } = options;
      const storage2 = session || privateConfig.value.session ? sessionStorage : localStorage;
      const key = isRealm ? `${storageKey}${realm}` : storageKey;
      const encrypt = privateConfig.value.encrypt;
      try {
        storage2.setItem(
          key,
          JSON.stringify({
            username: loginForm.username.model,
            password: encrypt ? encrypt(loginForm.password.model, frontmatter) : loginForm.password.model,
            loginTime: (/* @__PURE__ */ new Date()).getTime(),
            expire: strategy === "always" ? (/* @__PURE__ */ new Date()).getTime() + 30 * 1e3 : getExpire(expire || privateConfig.value.expire),
            strategy: strategy || "once",
            ...isSite && { role }
            // 站点级别登录信息需要存储角色，如果为 admin，代表后续有所有的文章页面权限
          })
        );
        return true;
      } catch (error) {
        console.error("[Teek Error] Failed to store credentials:", error);
        return false;
      }
    };
    const handleFocus = (item, formName) => {
      var _a, _b;
      item.focusModel = true;
      item.errorModel = false;
      (_b = (_a = privateConfig.value).onFocus) == null ? void 0 : _b.call(_a, item.model, formName);
    };
    const handleBlur = (item, formName) => {
      var _a, _b;
      item.focusModel = false;
      if (item.model === "") item.errorModel = true;
      (_b = (_a = privateConfig.value).onBlur) == null ? void 0 : _b.call(_a, item.model, formName);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.login.label")
      }, [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(ns4).e("wrapper"))
          },
          [
            unref(frontmatter).leftImg ? (openBlock(), createElementBlock(
              "div",
              {
                key: 0,
                class: normalizeClass(unref(ns4).e("left"))
              },
              [
                createBaseVNode("img", {
                  src: unref(withBase5)(unref(frontmatter).leftImg),
                  alt: "login"
                }, null, 8, _hoisted_27)
              ],
              2
              /* CLASS */
            )) : createCommentVNode("v-if", true),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns4).e("right"))
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass([unref(ns4).e("right__header"), "flx-center"])
                  },
                  [
                    unref(frontmatter).logo ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: unref(frontmatter).logo,
                      alt: "logo"
                    }, null, 8, _hoisted_36)) : createCommentVNode("v-if", true),
                    createBaseVNode(
                      "span",
                      _hoisted_45,
                      toDisplayString(unref(frontmatter).name ?? "VitePress Theme Teek"),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                createBaseVNode("form", _hoisted_55, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(loginForm, (item, key) => {
                      return openBlock(), createElementBlock("div", {
                        key,
                        class: "flx login-form-item"
                      }, [
                        createBaseVNode(
                          "div",
                          {
                            class: normalizeClass([unref(ns4).e("right__form"), unref(ns4).is("focus", item.focusModel), unref(ns4).is("error", item.errorModel)])
                          },
                          [
                            createVNode(unref(_sfc_main14), {
                              icon: item.icon
                            }, null, 8, ["icon"]),
                            createBaseVNode("label", {
                              for: "input-" + key,
                              class: "sr-only"
                            }, toDisplayString(item.placeholder), 9, _hoisted_64),
                            withDirectives(createBaseVNode("input", {
                              "onUpdate:modelValue": ($event) => item.model = $event,
                              type: item.type,
                              class: normalizeClass(unref(ns4).em("right__form", "control")),
                              placeholder: item.placeholder,
                              onFocus: ($event) => handleFocus(item, key),
                              onBlur: ($event) => handleBlur(item, key),
                              onKeydown: withKeys(login, ["enter"])
                            }, null, 42, _hoisted_73), [
                              [vModelDynamic, item.model]
                            ])
                          ],
                          2
                          /* CLASS */
                        ),
                        item.append ? (openBlock(), createBlock(resolveDynamicComponent(item.append), {
                          key: 0,
                          modelValue: item.appendModel,
                          "onUpdate:modelValue": ($event) => item.appendModel = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("v-if", true)
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  )),
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns4).e("right__form__btn"))
                    },
                    [
                      createBaseVNode("button", {
                        type: "button",
                        onClick: _cache[0] || (_cache[0] = ($event) => resetForm()),
                        class: "flx-center",
                        "aria-label": unref(t)("tk.login.reset")
                      }, [
                        createVNode(unref(_sfc_main14), { icon: unref(refreshRightIcon) }, null, 8, ["icon"]),
                        createBaseVNode(
                          "span",
                          null,
                          toDisplayString(unref(t)("tk.login.reset")),
                          1
                          /* TEXT */
                        )
                      ], 8, _hoisted_82),
                      createBaseVNode("button", {
                        type: "button",
                        onClick: _cache[1] || (_cache[1] = ($event) => login()),
                        class: "flx-center primary",
                        "aria-label": unref(t)("tk.login.login")
                      }, [
                        createVNode(unref(_sfc_main14), { icon: unref(successFilledIcon) }, null, 8, ["icon"]),
                        createBaseVNode(
                          "span",
                          null,
                          toDisplayString(unref(t)("tk.login.login")),
                          1
                          /* TEXT */
                        )
                      ], 8, _hoisted_9)
                    ],
                    2
                    /* CLASS */
                  )
                ])
              ],
              2
              /* CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ], 10, _hoisted_111);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/LoginPage/src/useWatchLogin.mjs
import { useRouter as useRouter3, useData as useData10 } from "vitepress";
var useWatchLogin = () => {
  const router = useRouter3();
  const { frontmatter } = useData10();
  const { loginPath } = usePagePath();
  const { siteLoginKey, pagesLoginKey, pageLoginKey, realmLoginKey } = getLoginStorageKey();
  const { getTeekConfigRef } = useTeekConfig();
  const privateConfig = getTeekConfigRef("private", defaultPrivateConfig);
  const getLoginInfo = (key) => {
    const infoStr = localStorage.getItem(key) || sessionStorage.getItem(key);
    return infoStr ? JSON.parse(infoStr) : null;
  };
  const isValidCredential = (credentialList, loginInfo) => {
    const decrypt = privateConfig.value.decrypt;
    return credentialList.some(
      (item) => item.username === loginInfo.username && item.password === (decrypt ? decrypt(loginInfo.password, frontmatter) : loginInfo.password)
    );
  };
  const isLoginExpired = (loginInfo, key) => {
    const { expire, loginTime, strategy } = loginInfo;
    if (strategy === "always") {
      sessionStorage.removeItem(key);
      localStorage.removeItem(key);
    }
    return expire && loginTime && (/* @__PURE__ */ new Date()).getTime() - loginTime > expire;
  };
  const isLogin = (loginKey, credentialList, type2) => {
    const nativeValidate = () => {
      const loginInfo = getLoginInfo(loginKey);
      return !!(loginInfo && isValidCredential(credentialList, loginInfo) && !isLoginExpired(loginInfo, loginKey));
    };
    return privateConfig.value.doValidate ? privateConfig.value.doValidate(type2, frontmatter.value, nativeValidate) : nativeValidate();
  };
  const watchSite = () => {
    if (!isClient) return;
    if (!privateConfig.value.enabled) return;
    if (!privateConfig.value.siteLogin || !loginPath.value || router.route.data.frontmatter.loginPage) return;
    const { verifyMode, toPath } = loginUrlKeyMap;
    const goLogin = `${loginPath.value}?${verifyMode}=${verifyModeMap.site}&${toPath}=${window.location.href}`;
    if (!isLogin(siteLoginKey, privateConfig.value.site || [], "site")) router.go(goLogin);
  };
  const watchPages = () => {
    if (!isClient) return;
    if (!privateConfig.value.enabled) return;
    watch(
      router.route,
      (newVal) => {
        if (!privateConfig.value.enabled) return;
        if (!frontmatter.value.private || !loginPath.value || newVal.data.frontmatter.loginPage) return;
        if (isLogin(siteLoginKey, privateConfig.value.site || [], "site")) {
          const siteLoginInfo = getLoginInfo(siteLoginKey);
          if (siteLoginInfo.role === "admin") return;
        }
        const { verifyMode, toPath, realm: realmKey } = loginUrlKeyMap;
        const goLogin = `${loginPath.value}?${verifyMode}={verifyMode}&${toPath}=${newVal.path}`;
        const realm = frontmatter.value.privateRealm;
        const page = [
          ...frontmatter.value.loginInfo || [],
          { username: frontmatter.value.username, password: frontmatter.value.password }
        ].filter((item) => ![void 0, ""].includes(item.username) && ![void 0, ""].includes(item.password));
        if (page.length) {
          const path = "/" + newVal.data.relativePath.replace(".md", "");
          if (isLogin(pageLoginKey + path, page, "page")) return;
        }
        if (realm) {
          const goRealm = goLogin.replace("{verifyMode}", verifyModeMap.realm) + `&${realmKey}=${realm}`;
          if (!isLogin(realmLoginKey + realm, privateConfig.value.realm[realm] || [], "realm")) router.go(goRealm);
          return;
        }
        if (page.length) {
          const goPage = goLogin.replace("{verifyMode}", verifyModeMap.page);
          return router.go(goPage);
        }
        const goPages = goLogin.replace("{verifyMode}", verifyModeMap.pages);
        if (!isLogin(pagesLoginKey, privateConfig.value.pages || [], "pages")) router.go(goPages);
      },
      { immediate: true }
    );
  };
  return { watchSite, watchPages };
};

// node_modules/vitepress-theme-teek/es/components/theme/RiskLinkPage/src/index.vue2.mjs
import { useData as useData11 } from "vitepress";
var _hoisted_112 = ["src"];
var _hoisted_28 = { key: 1 };
var _sfc_main18 = defineComponent({
  ...{ name: "RiskLinkPage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("risk-link");
    const { t } = useLocale();
    const { frontmatter } = useData11();
    const targetLink = ref("");
    onMounted(() => {
      const { searchParams } = new URL(window.location.href);
      const target = searchParams.get("target");
      if (target && isValidURL(target)) {
        targetLink.value = target;
      }
    });
    const confirmRedirect = () => {
      window.location.href = targetLink.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).joinNamespace("center"), "flx-space-y-20"])
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns4).e("header"), "flx-align-center"])
            },
            [
              unref(frontmatter).logo ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: unref(frontmatter).logo,
                alt: "logo"
              }, null, 8, _hoisted_112)) : createCommentVNode("v-if", true),
              targetLink.value ? (openBlock(), createElementBlock(
                "p",
                {
                  key: 1,
                  class: normalizeClass(unref(ns4).e("title"))
                },
                toDisplayString(unref(frontmatter).desc ? unref(frontmatter).desc : unref(t)("tk.riskLink.title", { name: unref(frontmatter).name || "VitePress Theme Teek" })),
                3
                /* TEXT, CLASS */
              )) : (openBlock(), createElementBlock(
                "p",
                {
                  key: 2,
                  class: normalizeClass(unref(ns4).e("title"))
                },
                toDisplayString(unref(frontmatter).linkIllegal ? unref(frontmatter).linkIllegal : unref(t)("tk.riskLink.linkIllegal")),
                3
                /* TEXT, CLASS */
              ))
            ],
            2
            /* CLASS */
          ),
          targetLink.value ? (openBlock(), createElementBlock(
            "p",
            {
              key: 0,
              class: normalizeClass([unref(ns4).e("link"), "sle"])
            },
            toDisplayString(targetLink.value),
            3
            /* TEXT, CLASS */
          )) : createCommentVNode("v-if", true),
          targetLink.value ? (openBlock(), createElementBlock("div", _hoisted_28, [
            createBaseVNode(
              "button",
              {
                class: "btn",
                onClick: confirmRedirect
              },
              toDisplayString(unref(t)("tk.riskLink.confirmButtonText")),
              1
              /* TEXT */
            )
          ])) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RiskLinkPage/src/useRiskLink.mjs
import "vitepress";
var useRiskLink = (options = {}) => {
  const riskLinks = /* @__PURE__ */ new Set();
  const cleanups = [];
  const { riskLinkPath } = usePagePath();
  const { whitelist = [], blacklist = [] } = options;
  const isSome = (arr, name) => {
    return arr.some(
      (item) => item === name || isString2(item) && name.startsWith(item) || item instanceof RegExp && item.test(name)
    );
  };
  const isRiskLink = (url, currentDomain) => {
    const link = new URL(url, window.location.origin);
    return link.hostname !== currentDomain && !isSome(whitelist, url);
  };
  const start = async () => {
    await nextTick();
    if (!isClient) return;
    document.querySelectorAll("a").forEach((link) => {
      const href = link.getAttribute("href");
      const currentDomain = window.location.hostname;
      if (!href || riskLinks.has(link)) return;
      if (blacklist.length && !isSome(blacklist, href)) return;
      if (!isRiskLink(href, currentDomain)) return;
      riskLinks.add(link);
      const stop2 = useEventListener(link, "click", (e) => {
        e.preventDefault();
        const encodedUrl = encodeURIComponent(href);
        window.open(`${riskLinkPath.value}?target=${encodedUrl}`);
      });
      cleanups.push(stop2);
    });
  };
  const stop = () => {
    cleanups.forEach((fn) => fn());
    cleanups.length = 0;
    riskLinks.clear();
  };
  const restart = () => {
    stop();
    start();
  };
  useScopeDispose(stop);
  return { start, stop, restart };
};

// node_modules/vitepress-theme-teek/es/components/theme/DemoCode/src/index.vue2.mjs
import { useData as useData12 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/TransitionCollapse/src/index.vue2.mjs
import "vitepress";
var _sfc_main19 = defineComponent({
  ...{ name: "TransitionCollapse" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("collapse-transition");
    const reset2 = (el) => {
      el.style.maxHeight = "";
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingTop = el.dataset.oldPaddingTop;
      el.style.paddingBottom = el.dataset.oldPaddingBottom;
    };
    const on = {
      beforeEnter(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        if (el.style.height) el.dataset.elExistsHeight = el.style.height;
        el.style.maxHeight = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
      },
      enter(el) {
        requestAnimationFrame(() => {
          el.dataset.oldOverflow = el.style.overflow;
          if (el.dataset.elExistsHeight) {
            el.style.maxHeight = el.dataset.elExistsHeight;
          } else if (el.scrollHeight !== 0) {
            el.style.maxHeight = `${el.scrollHeight}px`;
          } else {
            el.style.maxHeight = 0;
          }
          el.style.paddingTop = el.dataset.oldPaddingTop;
          el.style.paddingBottom = el.dataset.oldPaddingBottom;
          el.style.overflow = "hidden";
        });
      },
      afterEnter(el) {
        el.style.maxHeight = "";
        el.style.overflow = el.dataset.oldOverflow;
      },
      enterCancelled(el) {
        reset2(el);
      },
      beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.dataset.oldPaddingTop = el.style.paddingTop;
        el.dataset.oldPaddingBottom = el.style.paddingBottom;
        el.dataset.oldOverflow = el.style.overflow;
        el.style.maxHeight = `${el.scrollHeight}px`;
        el.style.overflow = "hidden";
      },
      leave(el) {
        if (el.scrollHeight !== 0) {
          el.style.maxHeight = 0;
          el.style.paddingTop = 0;
          el.style.paddingBottom = 0;
        }
      },
      afterLeave(el) {
        reset2(el);
      },
      leaveCancelled(el) {
        reset2(el);
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, mergeProps({
        name: unref(ns4).b()
      }, toHandlers(on)), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/DemoCode/src/index.vue2.mjs
var _hoisted_113 = ["innerHTML"];
var _hoisted_29 = ["innerHTML"];
var _sfc_main20 = defineComponent({
  ...{ name: "DemoCode" },
  __name: "index",
  props: {
    source: {},
    rawSource: {},
    path: {},
    description: {},
    options: {},
    effect: {}
  },
  setup(__props) {
    const props = __props;
    const ns4 = useNamespace("demo-code");
    const { t } = useLocale();
    const { copy, copied, isSupported } = useClipboard();
    const { frontmatter, isDark } = useData12();
    const {
      playgroundUrl = "",
      playgroundMainFileName = "App.vue",
      githubUrl = "",
      playgroundButtonTip = t("tk.demoCode.playground"),
      githubButtonTip = t("tk.demoCode.github"),
      copyButtonTip = t("tk.demoCode.copy"),
      collapseSourceButtonTip = t("tk.demoCode.collapseSource"),
      expandSourceButtonTip = t("tk.demoCode.expandSource")
    } = { ...JSON.parse(decodeURIComponent(props.options)), ...frontmatter.value.demo };
    const decodeSource = computed(() => decodeURIComponent(props.source));
    const decodeRawSource = computed(() => decodeURIComponent(props.rawSource));
    const decodedDescription = computed(() => decodeURIComponent(props.description));
    const effect = computed(() => props.effect === "true");
    const moduleFiles = import.meta.glob("/examples/**/*.vue", { eager: true });
    const DemoComponent = defineAsyncComponent(async () => {
      try {
        const key = Object.keys(moduleFiles).find((i) => i.endsWith(`/${props.path}`));
        return moduleFiles[key];
      } catch (error) {
        console.error(`[Teek Error] Failed to load component: '/${props.path}'`, error);
      }
    });
    const sourceVisible = ref(false);
    const handleToggleSourceVisible = (bol) => {
      if (bol !== void 0) sourceVisible.value = bol;
      else sourceVisible.value = !sourceVisible.value;
    };
    const handleEditPlayground = () => {
      const encoded = getPlaygroundEncoded(props.source);
      const darkParam = isDark.value ? "?theme=dark" : "";
      const link = playgroundUrl.includes("?") ? `${playgroundUrl}${darkParam.replace("?", "&")}` : `${playgroundUrl}${darkParam}`;
      const url = `${link.replace(/\/$/, "")}/#${encoded}`;
      window.open(url, "_blank");
    };
    const getPlaygroundEncoded = (source) => {
      const code = decodeURIComponent(source);
      const originCode = {
        [playgroundMainFileName]: code
      };
      const encoded = btoa(JSON.stringify(originCode));
      return encoded;
    };
    const handleEditGithub = () => {
      const url = `${githubUrl}/${props.path}`;
      window.open(url, "_blank");
    };
    const copyCode = async () => {
      if (!isSupported) console.error(t("tk.demoCode.notSupport"));
      await copy(decodeRawSource.value);
      copied.value ? message.success({
        message: t("tk.demoCode.copySuccess"),
        plain: true
      }) : message.error({
        message: t("tk.demoCode.copyFail"),
        plain: true
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          decodedDescription.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(unref(ns4).b("description")),
            innerHTML: decodedDescription.value
          }, null, 10, _hoisted_113)) : createCommentVNode("v-if", true),
          effect.value ? (openBlock(), createBlock(resolveDynamicComponent(unref(DemoComponent)), { key: 1 })) : (openBlock(), createElementBlock(
            "div",
            {
              key: 2,
              class: normalizeClass(unref(ns4).b())
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns4).e("effect"))
                },
                [
                  (openBlock(), createBlock(resolveDynamicComponent(unref(DemoComponent))))
                ],
                2
                /* CLASS */
              ),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns4).e("button-group"))
                },
                [
                  renderSlot(_ctx.$slots, "teek-demo-code-button-left"),
                  unref(playgroundUrl) ? (openBlock(), createBlock(unref(_sfc_main14), {
                    key: 0,
                    title: unref(playgroundButtonTip),
                    onClick: handleEditPlayground,
                    icon: unref(playgroundIcon),
                    role: "link",
                    "aria-label": unref(playgroundButtonTip)
                  }, null, 8, ["title", "icon", "aria-label"])) : createCommentVNode("v-if", true),
                  unref(githubUrl) ? (openBlock(), createBlock(unref(_sfc_main14), {
                    key: 1,
                    title: unref(githubButtonTip),
                    onClick: handleEditGithub,
                    icon: unref(githubIcon),
                    role: "link",
                    "aria-label": unref(githubUrl)
                  }, null, 8, ["title", "icon", "aria-label"])) : createCommentVNode("v-if", true),
                  createVNode(unref(_sfc_main14), {
                    title: unref(copyButtonTip),
                    icon: unref(copyIcon),
                    onClick: copyCode,
                    role: "button",
                    "aria-label": unref(copyButtonTip)
                  }, null, 8, ["title", "icon", "aria-label"]),
                  createVNode(unref(_sfc_main14), {
                    title: sourceVisible.value ? unref(expandSourceButtonTip) : unref(collapseSourceButtonTip),
                    onClick: _cache[0] || (_cache[0] = ($event) => handleToggleSourceVisible()),
                    icon: unref(codeIcon),
                    role: "button",
                    "aria-label": sourceVisible.value ? unref(expandSourceButtonTip) : unref(collapseSourceButtonTip)
                  }, null, 8, ["title", "icon", "aria-label"]),
                  renderSlot(_ctx.$slots, "teek-demo-code-button-right")
                ],
                2
                /* CLASS */
              ),
              createVNode(unref(_sfc_main19), null, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("div", {
                    class: normalizeClass(unref(ns4).joinNamespace("vp-code")),
                    innerHTML: decodeSource.value
                  }, null, 10, _hoisted_29), [
                    [vShow, sourceVisible.value]
                  ])
                ]),
                _: 1
                /* STABLE */
              }),
              createVNode(Transition, {
                name: unref(ns4).joinNamespace("fade-linear"),
                persisted: ""
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns4).e("float-control")),
                      onClick: _cache[1] || (_cache[1] = ($event) => handleToggleSourceVisible(false)),
                      role: "button"
                    },
                    [
                      createVNode(unref(_sfc_main14), { icon: unref(caretTopIcon) }, null, 8, ["icon"]),
                      createBaseVNode(
                        "span",
                        null,
                        toDisplayString(unref(expandSourceButtonTip)),
                        1
                        /* TEXT */
                      )
                    ],
                    2
                    /* CLASS */
                  ), [
                    [vShow, sourceVisible.value]
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["name"])
            ],
            2
            /* CLASS */
          ))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/Layout/src/index.vue2.mjs
import DefaultTheme from "vitepress/theme";
import { useData as useData30, onContentUpdated as onContentUpdated2 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/Home/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/HomeFullscreenWallpaper/src/index.vue2.mjs
import "vitepress";
var _sfc_main21 = defineComponent({
  ...{ name: "HomeFullscreenWallpaper" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("fullscreen-wallpaper");
    const { getTeekConfigRef } = useTeekConfig();
    const isFullscreen = ref(false);
    const wallpaperConfig = getTeekConfigRef("wallpaper", {
      hideBanner: false,
      hideWaves: false,
      hideMask: false
    });
    const handleKeyDown = (event) => {
      if (event.key === "F12" && isFullscreen.value) return event.preventDefault();
      if (event.key === "I" && event.ctrlKey && event.shiftKey && isFullscreen.value) return event.preventDefault();
      if (event.key === "F11") {
        event.preventDefault();
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
        }
      }
    };
    const handleFullscreenChange = () => {
      const htmlDom = document.documentElement;
      if (htmlDom.scrollTop !== 0) return;
      const bannerCenterDom = document.querySelector(`.${ns4.joinNamespace("banner__content")}`);
      const bannerContentDom = document.querySelector(`.${ns4.joinNamespace("bannerContent")}`);
      const wavesDom = document.querySelector(`.${ns4.joinNamespace("waves")}`);
      const bodyBgImageMaskDom = document.querySelector(`.${ns4.joinNamespace("bodyBgImage")} .mask`);
      const bannerMaskDom = document.querySelector(`.${ns4.joinNamespace("bannerBgImage")} .mask`);
      isFullscreen.value = !!document.fullscreenElement;
      const { hideBanner, hideWaves, hideMask } = wallpaperConfig.value;
      const options = [
        { el: htmlDom, executeClass: ns4.b() },
        { el: bannerCenterDom, executeClass: "no-feature" },
        {
          el: bannerContentDom,
          executeClass: "display-none",
          execute: hideBanner
        },
        { el: wavesDom, executeClass: "display-none", execute: hideWaves },
        { el: bodyBgImageMaskDom, executeClass: "display-none", execute: hideMask },
        { el: bannerMaskDom, executeClass: "display-none", execute: hideMask }
      ];
      addOrRemoveClass(!!document.fullscreenElement, options);
    };
    const addOrRemoveClass = (add, options) => {
      if (add) {
        options.forEach((item) => {
          var _a, _b;
          if (item.execute !== false) item.executeClass && ((_a = item.el) == null ? void 0 : _a.classList.add(item.executeClass));
          else item.notExecuteClass && ((_b = item.el) == null ? void 0 : _b.classList.add(item.notExecuteClass));
        });
        return;
      }
      options.forEach((item) => {
        var _a, _b;
        if (item.execute !== false) item.executeClass && ((_a = item.el) == null ? void 0 : _a.classList.remove(item.executeClass));
        else item.notExecuteClass && ((_b = item.el) == null ? void 0 : _b.classList.remove(item.notExecuteClass));
      });
    };
    const handleContextMenu = (event) => {
      if (isFullscreen.value) event.preventDefault();
    };
    const getDocument = () => document;
    useEventListener(getDocument, "keydown", handleKeyDown);
    useEventListener(getDocument, "fullscreenchange", handleFullscreenChange);
    useEventListener(getDocument, "contextmenu", handleContextMenu);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        null,
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/index.vue2.mjs
import { useData as useData14, useRoute as useRoute2 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/pagination.mjs
var paginationKey = Symbol("paginationKey");

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/prev.vue2.mjs
import "vitepress";
var _hoisted_114 = ["disabled", "aria-label", "aria-disabled"];
var _hoisted_210 = { key: 0 };
var _sfc_main22 = defineComponent({
  ...{ name: "PaginationPrev" },
  __name: "prev",
  props: {
    disabled: { type: Boolean },
    currentPage: {},
    prevText: {},
    prevIcon: {}
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(() => props.disabled || props.currentPage <= 1);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: internalDisabled.value,
        "aria-label": _ctx.prevText || unref(t)("tk.pagination.prev"),
        "aria-disabled": internalDisabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock(
          "span",
          _hoisted_210,
          toDisplayString(_ctx.prevText),
          1
          /* TEXT */
        )) : _ctx.prevIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
          key: 1,
          icon: _ctx.prevIcon
        }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
      ], 8, _hoisted_114);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/next.vue2.mjs
import "vitepress";
var _hoisted_115 = ["disabled", "aria-label", "aria-disabled"];
var _hoisted_211 = { key: 0 };
var _sfc_main23 = defineComponent({
  ...{ name: "PaginationNext" },
  __name: "next",
  props: {
    disabled: { type: Boolean },
    currentPage: {},
    pageCount: {},
    nextText: {},
    nextIcon: {}
  },
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(
      () => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: internalDisabled.value,
        "aria-label": _ctx.nextText || unref(t)("tk.pagination.next"),
        "aria-disabled": internalDisabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock(
          "span",
          _hoisted_211,
          toDisplayString(_ctx.nextText),
          1
          /* TEXT */
        )) : _ctx.nextIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
          key: 1,
          icon: _ctx.nextIcon
        }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
      ], 8, _hoisted_115);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/jumper.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/usePagination.mjs
var usePagination = () => inject(paginationKey, {});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/jumper.vue2.mjs
var _hoisted_116 = ["disabled"];
var _hoisted_212 = ["disabled", "aria-label"];
var _sfc_main24 = defineComponent({
  ...{ name: "PaginationJumper" },
  __name: "jumper",
  props: {
    size: { default: "default" }
  },
  setup(__props) {
    const ns4 = useNamespace("pagination");
    const { t } = useLocale();
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref((currentPage == null ? void 0 : currentPage.value) || 1);
    const handleChange = (event) => {
      var _a;
      let value = ((_a = event.target) == null ? void 0 : _a.value) || userInput.value;
      if (value < 1) value = 1;
      if ((pageCount == null ? void 0 : pageCount.value) && value > pageCount.value) value = pageCount.value;
      const val = Math.trunc(+value);
      changeEvent == null ? void 0 : changeEvent(val);
      userInput.value = val;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns4).e("jump")),
        disabled: unref(disabled)
      }, [
        createBaseVNode(
          "span",
          {
            class: normalizeClass([unref(ns4).e("goto")])
          },
          toDisplayString(unref(t)("tk.pagination.goto")),
          3
          /* TEXT, CLASS */
        ),
        withDirectives(createBaseVNode("input", {
          type: "number",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userInput.value = $event),
          disabled: unref(disabled),
          onChange: handleChange,
          "aria-label": unref(t)("tk.pagination.page"),
          class: normalizeClass([unref(ns4).e("input"), unref(ns4).em("input", _ctx.size)])
        }, null, 42, _hoisted_212), [
          [vModelText, userInput.value]
        ]),
        createBaseVNode(
          "span",
          {
            class: normalizeClass([unref(ns4).e("classifier")])
          },
          toDisplayString(unref(t)("tk.pagination.pageClassifier")),
          3
          /* TEXT, CLASS */
        )
      ], 10, _hoisted_116);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/total.vue2.mjs
import "vitepress";
var _hoisted_117 = ["disabled"];
var _sfc_main25 = defineComponent({
  ...{ name: "PaginationTotal" },
  __name: "total",
  props: {
    total: {}
  },
  setup(__props) {
    const ns4 = useNamespace("pagination");
    const { t } = useLocale();
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns4).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t)("tk.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_117);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/components/pager.vue2.mjs
import "vitepress";
var _hoisted_118 = ["aria-current", "aria-label", "tabindex"];
var _hoisted_213 = ["tabindex", "aria-label"];
var _hoisted_37 = ["innerHTML"];
var _hoisted_46 = ["innerHTML"];
var _hoisted_56 = ["aria-current", "aria-label", "tabindex"];
var _hoisted_65 = ["tabindex", "aria-label"];
var _hoisted_74 = ["innerHTML"];
var _hoisted_83 = ["innerHTML"];
var _hoisted_92 = ["aria-current", "aria-label", "tabindex"];
var _sfc_main26 = defineComponent({
  ...{ name: "PaginationPager" },
  __name: "pager",
  props: {
    currentPage: {},
    pageCount: {},
    pagerCount: {},
    disabled: { type: Boolean }
  },
  emits: ["change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const { t } = useLocale();
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount || 7;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) showPrevMore2 = true;
        if (currentPage < pageCount - halfPagerCount) showNextMore2 = true;
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    const prevMoreKls = computed(() => ["more", "btn-quick-prev", nsIcon.b(), nsPager.is("disabled", props.disabled)]);
    const nextMoreKls = computed(() => ["more", "btn-quick-next", nsIcon.b(), nsPager.is("disabled", props.disabled)]);
    const tabindex = computed(() => props.disabled ? -1 : 0);
    watchEffect(() => {
      const halfPagerCount = (props.pagerCount - 1) / 2;
      showPrevMore.value = false;
      showNextMore.value = false;
      if (props.pageCount > props.pagerCount) {
        if (props.currentPage > props.pagerCount - halfPagerCount) showPrevMore.value = true;
        if (props.currentPage < props.pageCount - halfPagerCount) showNextMore.value = true;
      }
    });
    const onMouseEnter = (forward = false) => {
      if (props.disabled) return;
      if (forward) quickPrevHover.value = true;
      else quickNextHover.value = true;
    };
    const onFocus = (forward = false) => {
      if (forward) quickPrevFocus.value = true;
      else quickNextFocus.value = true;
    };
    const onEnter = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) emit("change", newPage);
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e);
      }
    };
    const onPagerClick = (event) => {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) return;
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quick-prev")) newPage = currentPage - pagerCountOffset;
        else if (target.className.includes("quick-next")) newPage = currentPage + pagerCountOffset;
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) newPage = 1;
        if (newPage > pageCount) newPage = pageCount;
      }
      if (newPage !== currentPage) emit("change", newPage);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "ul",
        {
          class: normalizeClass(unref(nsPager).b()),
          onClick: onPagerClick,
          onKeyup: withKeys(onEnter, ["enter"])
        },
        [
          _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === 1), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
            "aria-current": _ctx.currentPage === 1,
            "aria-label": unref(t)("tk.pagination.currentPage", { pager: 1 }),
            tabindex: tabindex.value
          }, " 1 ", 10, _hoisted_118)) : createCommentVNode("v-if", true),
          showPrevMore.value ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(prevMoreKls.value),
            tabindex: tabindex.value,
            "aria-label": unref(t)("tk.pagination.prevPages", { pager: _ctx.pagerCount - 2 }),
            onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
            onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
            onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
            onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
          }, [
            (quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: unref(dArrowLeftIcon)
            }, null, 8, _hoisted_37)) : (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: unref(moreFilledIcon)
            }, null, 8, _hoisted_46))
          ], 42, _hoisted_213)) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(pagers.value, (pager) => {
              return openBlock(), createElementBlock("li", {
                key: pager,
                class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === pager), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
                "aria-current": _ctx.currentPage === pager,
                "aria-label": unref(t)("el.pagination.currentPage", { pager }),
                tabindex: tabindex.value
              }, toDisplayString(pager), 11, _hoisted_56);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          showNextMore.value ? (openBlock(), createElementBlock("li", {
            key: 2,
            class: normalizeClass(nextMoreKls.value),
            tabindex: tabindex.value,
            "aria-label": unref(t)("tk.pagination.nextPages", { pager: _ctx.pagerCount - 2 }),
            onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
            onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
            onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
            onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
          }, [
            (quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createElementBlock("span", {
              key: 0,
              innerHTML: unref(dArrowRightIcon)
            }, null, 8, _hoisted_74)) : (openBlock(), createElementBlock("span", {
              key: 1,
              innerHTML: unref(moreFilledIcon)
            }, null, 8, _hoisted_83))
          ], 42, _hoisted_65)) : createCommentVNode("v-if", true),
          _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
            key: 3,
            class: normalizeClass([[unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount), unref(nsPager).is("disabled", _ctx.disabled)], "number"]),
            "aria-current": _ctx.currentPage === _ctx.pageCount,
            "aria-label": unref(t)("tk.pagination.currentPage", { pager: _ctx.pageCount }),
            tabindex: tabindex.value
          }, toDisplayString(_ctx.pageCount), 11, _hoisted_92)) : createCommentVNode("v-if", true)
        ],
        34
        /* CLASS, NEED_HYDRATION */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Pagination/src/index.vue2.mjs
var _sfc_main27 = defineComponent({
  ...{ name: "Pagination" },
  __name: "index",
  props: mergeModels({
    total: {},
    pageCount: {},
    pagerCount: { default: 7 },
    layout: { default: ["prev, pager, next, jumper, ->, total"].join(", ") },
    prevText: {},
    prevIcon: { default: () => arrowLeftIcon },
    nextText: {},
    nextIcon: { default: () => arrowRightIcon },
    size: { default: "default" },
    background: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    hideOnSinglePage: { type: Boolean, default: false }
  }, {
    "currentPage": { type: Number, default: 1 },
    "currentPageModifiers": {},
    "pageSize": { type: Number, default: 10 },
    "pageSizeModifiers": {}
  }),
  emits: mergeModels(["size-change", "change", "current-change", "prev-click", "next-click"], ["update:currentPage", "update:pageSize"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns4 = useNamespace("pagination");
    const slots = useSlots();
    const currentPageModel = useModel(__props, "currentPage");
    const pageSizeModel = useModel(__props, "pageSize");
    const isAbsent = (v) => typeof v !== "number";
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) pageCount = props.pageCount;
      else if (!isAbsent(props.total)) pageCount = Math.max(1, Math.ceil(props.total / pageSizeModel.value));
      return pageCount;
    });
    watch(pageCountBridge, (val) => {
      if (currentPageModel.value > val) currentPageModel.value = val;
    });
    watch(
      [currentPageModel, pageSizeModel],
      (value) => {
        emit("change", ...value);
      },
      { flush: "post" }
    );
    const handleSizeChange = (val) => {
      pageSizeModel.value = val;
      emit("size-change", pageSizeModel.value);
      const newPageCount = pageCountBridge.value;
      if (currentPageModel.value > newPageCount) currentPageModel.value = newPageCount;
    };
    const prev = () => {
      if (props.disabled) return;
      handleCurrentChange(currentPageModel.value - 1);
      emit("prev-click", currentPageModel.value);
    };
    const next = () => {
      if (props.disabled) return;
      handleCurrentChange(currentPageModel.value + 1);
      emit("next-click", currentPageModel.value);
    };
    const handleCurrentChange = (val) => {
      currentPageModel.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageModel.value < 1) currentPageModel.value = 1;
      else if (currentPageModel.value > newPageCount) currentPageModel.value = newPageCount;
      emit("current-change", currentPageModel.value);
    };
    const addClass = (element, cls) => {
      if (element) {
        if (!element.props) element.props = {};
        element.props.class = [element.props.class, cls].join(" ");
      }
    };
    provide(paginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageModel,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    const components = computed(() => {
      if (!props.layout) return [];
      if (props.hideOnSinglePage && pageCountBridge.value <= 1) return [];
      const components2 = props.layout.split(",").map((item) => item.trim());
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h("div", { class: ns4.e("right-wrapper") }, rightWrapperChildren);
      let haveRightWrapper = false;
      components2.forEach((c) => {
        if (c === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) rootChildren.push(componentMap.value[c]);
        else rightWrapperChildren.push(componentMap.value[c]);
      });
      addClass(rootChildren[0], ns4.is("first"));
      addClass(rootChildren[rootChildren.length - 1], ns4.is("last"));
      if (rightWrapperChildren.length > 0) {
        addClass(rightWrapperChildren[0], ns4.is("first"));
        addClass(rightWrapperChildren[rightWrapperChildren.length - 1], ns4.is("last"));
        rootChildren.push(rightWrapperRoot);
      }
      return rootChildren;
    });
    const componentMap = computed(() => {
      var _a;
      return {
        prev: h(_sfc_main22, {
          disabled: props.disabled,
          currentPage: currentPageModel.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h(_sfc_main24, {
          size: props.size
        }),
        pager: h(_sfc_main26, {
          currentPage: currentPageModel.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h(_sfc_main23, {
          disabled: props.disabled,
          currentPage: currentPageModel.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        slot: ((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) ?? null,
        total: h(_sfc_main25, { total: isAbsent(props.total) ? 0 : props.total })
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).is("background", _ctx.background), unref(ns4).m(_ctx.size)])
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(components.value, (component) => {
              return openBlock(), createBlock(resolveDynamicComponent(component), { key: component });
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/homePostList.mjs
var pageNumKey = "pageNum";

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/HomePostItem.vue2.mjs
import { withBase as withBase7 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ArticleInfo/src/index.vue2.mjs
import { useData as useData13, useRoute, withBase as withBase6 } from "vitepress";
var _hoisted_119 = ["aria-label"];
var _hoisted_214 = ["aria-label"];
var _hoisted_38 = ["title", "href", "target", "aria-label"];
var _hoisted_47 = ["title", "href", "aria-label"];
var _sfc_main28 = defineComponent({
  ...{ name: "ArticleInfo" },
  __name: "index",
  props: {
    post: {},
    scope: {},
    split: { type: Boolean, default: false }
  },
  setup(__props) {
    const ns4 = useNamespace("article-info");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { page } = useData13();
    const articleConfig = getTeekConfigRef("articleAnalyze", {
      showIcon: true,
      dateFormat: "yyyy-MM-dd",
      showAuthor: true,
      showCreateDate: true,
      showUpdateDate: false,
      showCategory: false,
      showTag: false
    });
    const posts = usePosts();
    const route = useRoute();
    const createDate = computed(() => {
      var _a;
      const originPosts = posts.value.originPosts;
      const date = __props.post.date || ((_a = originPosts.find((item) => [item.url, item.frontmatter.permalink].includes(route.path))) == null ? void 0 : _a.date);
      const dateFormatConst = articleConfig.value.dateFormat;
      if (isFunction(dateFormatConst)) return dateFormatConst(date || "");
      return formatDate(date || /* @__PURE__ */ new Date(), dateFormatConst);
    });
    const updateDate = computed(() => {
      const date = page.value.lastUpdated;
      if (!date) return "";
      const dateFormatConst = articleConfig.value.dateFormat;
      if (isFunction(dateFormatConst)) return dateFormatConst(date);
      return formatDate(date, dateFormatConst);
    });
    const baseInfo = computed(() => {
      var _a, _b, _c, _d, _e;
      const { showAuthor, showCreateDate, showUpdateDate, showCategory, showTag } = articleConfig.value;
      return [
        {
          title: t("tk.articleInfo.author"),
          icon: userIcon,
          data: (_a = __props.post.author) == null ? void 0 : _a.name,
          href: (_b = __props.post.author) == null ? void 0 : _b.link,
          target: ((_c = __props.post.author) == null ? void 0 : _c.link) ? "_blank" : "_self",
          show: isShow(showAuthor)
        },
        {
          title: t("tk.articleInfo.createTime"),
          icon: calendarIcon,
          data: createDate.value,
          show: isShow(showCreateDate)
        },
        {
          title: t("tk.articleInfo.updateTime"),
          icon: editPenIcon,
          data: updateDate.value,
          show: updateDate.value && __props.scope === "article" && showUpdateDate
        },
        {
          title: t("tk.articleInfo.category"),
          icon: folderOpenedIcon,
          dataList: ((_d = __props.post.frontmatter) == null ? void 0 : _d.categories) || [],
          href: "/categories?category={data}",
          class: "or",
          show: __props.scope === "post" || isShow(showCategory)
        },
        {
          title: t("tk.articleInfo.tag"),
          icon: collectionTagIcon,
          dataList: ((_e = __props.post.frontmatter) == null ? void 0 : _e.tags) || [],
          href: "/tags?tag={data}",
          class: "or",
          show: __props.scope === "post" || isShow(showTag)
        }
      ];
    });
    const isShow = (showInfo) => {
      const arr = [showInfo || []].flat();
      return arr.includes(true) || arr.includes(__props.scope);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns4).b(), _ctx.scope]),
        role: "group",
        "aria-label": unref(t)("tk.articleInfo.label")
      }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(baseInfo.value, (item) => {
            var _a;
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: item.title
              },
              [
                item.show && (item.data || ((_a = item.dataList) == null ? void 0 : _a.length)) ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass([unref(ns4).e("item"), { split: _ctx.split }]),
                  role: "group",
                  "aria-label": item.title
                }, [
                  unref(articleConfig).showIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
                    key: 0,
                    icon: item.icon,
                    class: normalizeClass(unref(ns4).e("icon")),
                    "aria-hidden": "true"
                  }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true),
                  item.data ? (openBlock(), createElementBlock("a", {
                    key: 1,
                    title: item.title,
                    href: item.href && unref(withBase6)(item.href),
                    target: item.target,
                    class: normalizeClass([item.class, "hover-color"]),
                    "aria-label": item.data
                  }, toDisplayString(item.data), 11, _hoisted_38)) : (openBlock(true), createElementBlock(
                    Fragment,
                    { key: 2 },
                    renderList(item.dataList, (data, index2) => {
                      return openBlock(), createElementBlock("a", {
                        key: index2,
                        title: item.title,
                        href: item.href && unref(withBase6)(item.href.replace("{data}", encodeURIComponent(data))),
                        class: normalizeClass([item.class, "hover-color"]),
                        "aria-label": data
                      }, toDisplayString(data), 11, _hoisted_47);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 10, _hoisted_214)) : createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            );
          }),
          128
          /* KEYED_FRAGMENT */
        )),
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_119);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/HomePostItem.vue2.mjs
var _hoisted_120 = ["title", "aria-label"];
var _hoisted_215 = { class: "list flx" };
var _hoisted_39 = ["href", "aria-label"];
var _hoisted_48 = ["aria-label"];
var _hoisted_57 = ["innerHTML"];
var _hoisted_66 = ["href", "aria-label"];
var _hoisted_75 = ["aria-label"];
var _hoisted_84 = ["aria-label"];
var _hoisted_93 = ["innerHTML"];
var _hoisted_10 = ["href", "aria-label"];
var _hoisted_11 = ["href", "aria-label"];
var _sfc_main29 = defineComponent({
  ...{ name: "HomePostItem" },
  __name: "HomePostItem",
  props: {
    post: {},
    coverImgMode: {}
  },
  setup(__props) {
    const ns4 = useNamespace("post-item");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const postConfig = getTeekConfigRef("post", {
      excerptPosition: "bottom",
      showMore: true,
      moreLabel: t("tk.homePost.moreLabel"),
      showCapture: false,
      splitSeparator: false,
      listStyleTitleTagPosition: "right",
      defaultCoverImg: []
    });
    const articleConfig = getTeekConfigRef("articleAnalyze", {
      showInfo: true
    });
    const postUrl = __props.post.url && withBase7(__props.post.url);
    const excerpt = computed(
      () => __props.post.frontmatter.description || __props.post.excerpt || postConfig.value.showCapture && __props.post.capture
    );
    const imgSrcList = computed(() => [__props.post.frontmatter.coverImg || postConfig.value.defaultCoverImg || []].flat());
    const coverImgMap = computed(() => {
      const imgSrcListConst = imgSrcList.value;
      return {
        default: {
          is: "div",
          props: {
            style: `background-image: url(${withBase7(imgSrcListConst[0])});`
          }
        },
        full: {
          is: "img",
          props: {
            src: withBase7(imgSrcListConst[0])
          }
        }
      };
    });
    const isShowInfo = computed(() => {
      const arr = [articleConfig.value.showInfo].flat();
      return arr.includes(true) || arr.includes("post");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          !!_ctx.post.frontmatter.sticky ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: "pin",
            title: unref(t)("tk.homePost.pin", { sticky: _ctx.post.frontmatter.sticky }),
            "aria-label": unref(t)("tk.homePost.pinLabel")
          }, null, 8, _hoisted_120)) : createCommentVNode("v-if", true),
          createBaseVNode("div", _hoisted_215, [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns4).e("left"))
              },
              [
                createCommentVNode(" 标题 "),
                createBaseVNode("a", {
                  class: normalizeClass([unref(ns4).e("left__title"), "hover-color", "sle"]),
                  href: unref(postUrl),
                  "aria-label": _ctx.post.title
                }, [
                  createVNode(unref(_sfc_main7), {
                    post: _ctx.post,
                    "title-tag-props": { position: unref(postConfig).listStyleTitleTagPosition }
                  }, null, 8, ["post", "title-tag-props"])
                ], 10, _hoisted_39),
                createCommentVNode(" 摘要 top "),
                excerpt.value && unref(postConfig).excerptPosition === "top" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(`${unref(ns4).e("left__excerpt")} top`),
                  "aria-label": unref(t)("tk.homePost.excerptLabel")
                }, [
                  createBaseVNode("div", {
                    class: "excerpt",
                    innerHTML: excerpt.value
                  }, null, 8, _hoisted_57),
                  unref(postConfig).showMore ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: "more",
                    href: unref(postUrl),
                    "aria-label": unref(postConfig).moreLabel
                  }, toDisplayString(unref(postConfig).moreLabel), 9, _hoisted_66)) : createCommentVNode("v-if", true)
                ], 10, _hoisted_48)) : createCommentVNode("v-if", true),
                createCommentVNode(" 文章信息 "),
                createBaseVNode("div", {
                  class: normalizeClass(unref(ns4).e("left__footer")),
                  "aria-label": unref(t)("tk.homePost.infoLabel")
                }, [
                  isShowInfo.value ? (openBlock(), createBlock(unref(_sfc_main28), {
                    key: 0,
                    post: _ctx.post,
                    scope: "post",
                    split: unref(postConfig).splitSeparator
                  }, null, 8, ["post", "split"])) : createCommentVNode("v-if", true)
                ], 10, _hoisted_75),
                createCommentVNode(" 摘要 bottom "),
                excerpt.value && unref(postConfig).excerptPosition === "bottom" ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(`${unref(ns4).e("left__excerpt")} bottom`),
                  "aria-label": unref(t)("tk.homePost.excerptLabel")
                }, [
                  createBaseVNode("div", {
                    class: "excerpt",
                    innerHTML: excerpt.value
                  }, null, 8, _hoisted_93),
                  unref(postConfig).showMore ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: "more",
                    href: unref(postUrl),
                    "aria-label": unref(postConfig).moreLabel
                  }, toDisplayString(unref(postConfig).moreLabel), 9, _hoisted_10)) : createCommentVNode("v-if", true)
                ], 10, _hoisted_84)) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            ),
            createCommentVNode(" 右侧封面图 "),
            createBaseVNode(
              "div",
              {
                class: normalizeClass(`${unref(ns4).e("right")} flx-align-center`)
              },
              [
                imgSrcList.value.length ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: unref(postUrl),
                  class: normalizeClass(`${_ctx.coverImgMode} cover`),
                  "aria-label": unref(t)("tk.homePost.coverImgLabel")
                }, [
                  (openBlock(), createBlock(
                    resolveDynamicComponent(coverImgMap.value[_ctx.coverImgMode].is),
                    mergeProps(coverImgMap.value[_ctx.coverImgMode].props, {
                      "aria-hidden": "true",
                      class: "cover-img"
                    }),
                    null,
                    16
                    /* FULL_PROPS */
                  ))
                ], 10, _hoisted_11)) : createCommentVNode("v-if", true)
              ],
              2
              /* CLASS */
            )
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/HomePostItemCard.vue2.mjs
import { withBase as withBase8 } from "vitepress";
var _hoisted_121 = ["href", "alt"];
var _hoisted_216 = ["src"];
var _hoisted_310 = ["href", "aria-label"];
var _hoisted_49 = ["innerHTML", "aria-label"];
var _sfc_main30 = defineComponent({
  ...{ name: "HomePostItemCard" },
  __name: "HomePostItemCard",
  props: {
    post: {}
  },
  setup(__props) {
    const ns4 = useNamespace("post-item-card");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const postConfig = getTeekConfigRef("post", {
      showCapture: false,
      splitSeparator: false,
      cardStyleTitleTagPosition: "left",
      defaultCoverImg: []
    });
    const articleConfig = getTeekConfigRef("articleAnalyze", { showInfo: true });
    const postUrl = __props.post.url && withBase8(__props.post.url);
    const imgSrcList = computed(() => [__props.post.frontmatter.coverImg || postConfig.value.defaultCoverImg || []].flat());
    const excerpt = computed(
      () => __props.post.frontmatter.description || __props.post.excerpt || postConfig.value.showCapture && __props.post.capture
    );
    const isShowInfo = computed(() => {
      const arr = [articleConfig.value.showInfo].flat();
      return arr.includes(true) || arr.includes("post");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          !!_ctx.post.frontmatter.sticky ? (openBlock(), createBlock(unref(_sfc_main14), {
            key: 0,
            icon: unref(topIcon),
            class: "top",
            size: 40,
            title: unref(t)("tk.homePost.pin", { sticky: _ctx.post.frontmatter.sticky }),
            "aria-label": unref(t)("tk.homePost.pinLabel")
          }, null, 8, ["icon", "title", "aria-label"])) : createCommentVNode("v-if", true),
          imgSrcList.value.length ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              class: normalizeClass(unref(ns4).e("cover-img"))
            },
            [
              createBaseVNode("a", {
                href: unref(postUrl),
                alt: _ctx.post.title
              }, [
                createBaseVNode("img", {
                  src: unref(withBase8)(imgSrcList.value[0]),
                  class: "cover-img"
                }, null, 8, _hoisted_216)
              ], 8, _hoisted_121)
            ],
            2
            /* CLASS */
          )) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns4).e("info")])
            },
            [
              createBaseVNode("a", {
                class: "title hover-color, sle",
                href: unref(postUrl),
                "aria-label": _ctx.post.title
              }, [
                createVNode(unref(_sfc_main7), {
                  post: _ctx.post,
                  "title-tag-props": { position: unref(postConfig).cardStyleTitleTagPosition }
                }, null, 8, ["post", "title-tag-props"])
              ], 8, _hoisted_310),
              excerpt.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: "excerpt mle",
                innerHTML: excerpt.value,
                "aria-label": unref(t)("tk.homePost.excerptLabel")
              }, null, 8, _hoisted_49)) : createCommentVNode("v-if", true),
              isShowInfo.value ? (openBlock(), createBlock(unref(_sfc_main28), {
                key: 1,
                post: _ctx.post,
                scope: "post",
                split: unref(postConfig).splitSeparator,
                "aria-label": unref(t)("tk.homePost.infoLabel")
              }, null, 8, ["post", "split", "aria-label"])) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomePostList/src/index.vue2.mjs
var _hoisted_122 = ["aria-label"];
var _hoisted_217 = ["aria-label"];
var targetSize = "small";
var targetLayout = "prev, pager, next";
var _sfc_main31 = defineComponent({
  ...{ name: "HomePostList" },
  __name: "index",
  props: {
    "modelValue": { default: false },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const ns4 = useNamespace("post-list");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const posts = usePosts();
    const { frontmatter } = useData14();
    const postConfig = getTeekConfigRef("post", {
      postStyle: "list",
      coverImgMode: "default",
      emptyLabel: t("tk.homePost.emptyLabel"),
      transition: true,
      transitionName: ns4.joinNamespace("slide-fade")
    });
    const pageConfig = getTeekConfigRef("page", {});
    const coverImgMode = ref(postConfig.value.coverImgMode);
    const pageNum = ref(1);
    const total = ref(0);
    const isPaging = useModel(__props, "modelValue");
    const defaultPageSize = computed(() => postConfig.value.postStyle === "list" ? 10 : 15);
    const pageSize = computed(() => pageConfig.value.pageSize || defaultPageSize.value);
    const route = useRoute2();
    const currentPosts = ref([]);
    const totalPostsCount = ref(0);
    const updateData = () => {
      if (!isClient) return;
      const { searchParams } = new URL(window.location.href);
      const p = Number(searchParams.get(pageNumKey)) || 1;
      if (p !== pageNum.value) pageNum.value = p;
      isPaging.value = p > 1;
      const postConst = posts.value;
      const frontmatterConst = frontmatter.value;
      let post = postConst.sortPostsByDateAndSticky;
      if (frontmatterConst.categoriesPage) {
        const c = searchParams.get("category");
        post = c ? postConst.groupPosts.categories[c] : post.filter((item) => item.frontmatter.categories);
      } else if (frontmatterConst.tagsPage) {
        const t2 = searchParams.get("tag");
        post = t2 ? postConst.groupPosts.tags[t2] : post.filter((item) => item.frontmatter.tags);
      }
      if (total.value !== (post == null ? void 0 : post.length)) total.value = (post == null ? void 0 : post.length) || 0;
      const inHomePosts = post.filter((item) => item.frontmatter.inHomePost !== false);
      totalPostsCount.value = inHomePosts.length;
      currentPosts.value = inHomePosts.slice((pageNum.value - 1) * pageSize.value, pageNum.value * pageSize.value);
    };
    watch(
      route,
      () => {
        updateData();
      },
      { immediate: true }
    );
    const handlePagination = () => {
      const { searchParams } = new URL(window.location.href);
      searchParams.delete(pageNumKey);
      searchParams.append(pageNumKey, String(pageNum.value));
      window.history.pushState({}, "", `${window.location.pathname}?${searchParams.toString()}`);
      updateData();
      nextTick(() => {
        var _a;
        const rootStyles = getComputedStyle(document.documentElement);
        const navHeight = removeUnit(rootStyles.getPropertyValue("--vp-c-text-1"));
        (_a = document.querySelector("html")) == null ? void 0 : _a.scrollTo({ top: window.innerHeight - navHeight, behavior: "smooth" });
      });
    };
    const pagePropsRef = reactive({ ...pageConfig.value });
    const { size: size2 = "default", layout = "prev, pager, next, jumper, ->, total" } = pageConfig.value;
    useWindowSize((width) => {
      if (width <= 768) {
        if (pagePropsRef.size !== targetSize) pagePropsRef.size = targetSize;
      } else if (pagePropsRef.size !== size2) pagePropsRef.size = size2;
      if (width <= 960) {
        if (pagePropsRef.layout !== targetLayout) pagePropsRef.layout = targetLayout;
      } else if (pagePropsRef.layout !== layout) pagePropsRef.layout = layout;
      if (width <= 960) {
        if (coverImgMode.value !== "default") coverImgMode.value = "default";
      } else if (coverImgMode.value !== postConfig.value.coverImgMode) coverImgMode.value = postConfig.value.coverImgMode;
    });
    __expose({ updateData });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).is("card", unref(postConfig).postStyle === "card")])
        },
        [
          currentPosts.value ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              renderSlot(_ctx.$slots, "teek-home-post-list", normalizeProps(guardReactiveProps({ currentPosts: currentPosts.value, transitionName: unref(postConfig).transitionName })), () => [
                createVNode(TransitionGroup, {
                  tag: "ul",
                  name: unref(postConfig).transition ? unref(postConfig).transitionName : "",
                  "aria-label": unref(t)("tk.homePost.label")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(currentPosts.value, (post) => {
                        return openBlock(), createElementBlock(
                          "li",
                          {
                            key: post.url,
                            class: normalizeClass({ "full-img": coverImgMode.value === "full" })
                          },
                          [
                            unref(postConfig).postStyle === "card" ? (openBlock(), createBlock(_sfc_main30, {
                              key: 0,
                              post
                            }, null, 8, ["post"])) : (openBlock(), createBlock(_sfc_main29, {
                              key: 1,
                              post,
                              coverImgMode: coverImgMode.value
                            }, null, 8, ["post", "coverImgMode"]))
                          ],
                          2
                          /* CLASS */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["name", "aria-label"])
              ]),
              createBaseVNode("div", {
                class: normalizeClass(`${unref(ns4).e("pagination")} flx-justify-center`),
                "aria-label": unref(t)("tk.homePost.pageLabel")
              }, [
                totalPostsCount.value >= pageSize.value ? (openBlock(), createBlock(unref(_sfc_main27), mergeProps({
                  key: 0,
                  "page-size": pageSize.value,
                  "onUpdate:pageSize": _cache[0] || (_cache[0] = ($event) => pageSize.value = $event),
                  "current-page": pageNum.value,
                  "onUpdate:currentPage": _cache[1] || (_cache[1] = ($event) => pageNum.value = $event),
                  total: total.value,
                  background: "",
                  onCurrentChange: handlePagination
                }, { ...pagePropsRef }), null, 16, ["page-size", "current-page", "total"])) : createCommentVNode("v-if", true)
              ], 10, _hoisted_122)
            ],
            64
            /* STABLE_FRAGMENT */
          )) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([unref(ns4).e("empty"), "flx-column-center"]),
            "aria-label": unref(postConfig).emptyLabel
          }, [
            createVNode(unref(_sfc_main14), {
              icon: unref(emptyIcon),
              size: 160,
              color: "var(--vp-c-text-3)",
              "aria-hidden": "true"
            }, null, 8, ["icon"]),
            createBaseVNode(
              "span",
              {
                class: normalizeClass(unref(ns4).e("empty__title"))
              },
              toDisplayString(unref(postConfig).emptyLabel),
              3
              /* TEXT, CLASS */
            )
          ], 10, _hoisted_217))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/index.vue2.mjs
import { useData as useData17 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/HomeBannerBgPure.vue2.mjs
import "vitepress";
var _hoisted_123 = ["aria-label"];
var _sfc_main32 = defineComponent({
  ...{ name: "HomeBannerBgPure" },
  __name: "HomeBannerBgPure",
  setup(__props) {
    const ns4 = useNamespace("banner-bg-pure");
    const { t } = useLocale();
    const { getTeekConfig } = useTeekConfig();
    const getStyle = () => {
      const { pureBgColor = "#28282d" } = getTeekConfig("banner", {});
      return { backgroundColor: pureBgColor };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns4).b()),
        style: normalizeStyle(getStyle()),
        "aria-label": unref(t)("tk.homeBanner.bgPureLabel")
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 14, _hoisted_123);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/HomeBannerBgImage.vue2.mjs
import { withBase as withBase9 } from "vitepress";
var _hoisted_124 = ["aria-label"];
var _hoisted_218 = ["aria-label"];
var _sfc_main33 = defineComponent({
  ...{ name: "HomeBannerBgImage" },
  __name: "HomeBannerBgImage",
  setup(__props) {
    const ns4 = useNamespace("banner-bg-image");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const bannerConfig = getTeekConfigRef("banner", {
      bgStyle: void 0,
      imgSrc: void 0,
      imgInterval: 15e3,
      imgShuffle: false,
      mask: true,
      maskBg: "rgba(0, 0, 0, 0.4)"
    });
    const isPartImgBgStyle = computed(() => bannerConfig.value.bgStyle === "partImg");
    const isFullImgBgStyle = computed(() => bannerConfig.value.bgStyle === "fullImg");
    const dataArray = computed(() => [bannerConfig.value.imgSrc || []].flat().map((item) => item && withBase9(item)));
    const {
      data: imageSrc,
      start,
      index: index2
    } = useSwitchData(dataArray, {
      timeout: bannerConfig.value.imgInterval,
      shuffle: bannerConfig.value.imgShuffle,
      onAfterUpdate: () => {
        const nextIndex = (index2.value + 1) % dataArray.value.length;
        const newValue = dataArray.value[nextIndex];
        if (newValue) {
          const img = new Image();
          img.src = newValue;
        }
      }
    });
    onMounted(() => {
      start();
    });
    const getStyle = () => {
      const { imgSrc, maskBg, imgInterval } = bannerConfig.value;
      const imgBgVar = ns4.cssVarName("banner-img-bg");
      const maskBgColorVar = ns4.cssVarName("banner-mask-bg-color");
      const imgSwitchIntervalVar = ns4.cssVarName("banner-img-switch-interval-s");
      if (!(imgSrc == null ? void 0 : imgSrc.length)) return { [imgBgVar]: ns4.cssVar("bg-img-default") };
      return {
        [imgBgVar]: `url(${imageSrc.value}) center center / cover no-repeat`,
        [maskBgColorVar]: isString2(maskBg) ? maskBg : `rgba(0, 0, 0, ${maskBg})`,
        [imgSwitchIntervalVar]: imgInterval / 1e3 + "s"
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode("div", {
            class: normalizeClass([unref(ns4).b(), { part: isPartImgBgStyle.value, full: isFullImgBgStyle.value }]),
            style: normalizeStyle(getStyle()),
            "aria-label": unref(t)("tk.homeBanner.bgImgLabel")
          }, [
            unref(bannerConfig).mask && unref(bannerConfig).imgSrc ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "mask",
              "aria-label": unref(t)("tk.homeBanner.maskLabel")
            }, null, 8, _hoisted_218)) : createCommentVNode("v-if", true),
            isPartImgBgStyle.value ? renderSlot(_ctx.$slots, "default", { key: 1 }) : createCommentVNode("v-if", true)
          ], 14, _hoisted_124),
          isFullImgBgStyle.value ? renderSlot(_ctx.$slots, "default", { key: 0 }) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/HomeBannerContent.vue2.mjs
import { useData as useData15 } from "vitepress";
var _hoisted_125 = ["aria-label"];
var _hoisted_219 = ["aria-label"];
var _hoisted_311 = ["aria-label"];
var _hoisted_410 = { key: 0 };
var _hoisted_58 = ["aria-label"];
var _hoisted_67 = ["aria-label"];
var _sfc_main34 = defineComponent({
  ...{ name: "HomeBannerContent" },
  __name: "HomeBannerContent",
  setup(__props) {
    var _a;
    const ns4 = useNamespace("banner-content");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { site, frontmatter } = useData15();
    const bannerConfig = getTeekConfigRef("banner", {
      name: ((_a = frontmatter.value.tk) == null ? void 0 : _a.name) || site.value.title || "",
      descStyle: "default",
      description: [],
      switchTime: 4e3,
      switchShuffle: false,
      typesInTime: 200,
      typesOutTime: 100,
      typesNextTime: 800,
      typesShuffle: false
    });
    const descArray = computed(() => {
      var _a2, _b;
      return [
        ...new Set(
          (_b = [((_a2 = frontmatter.value.tk) == null ? void 0 : _a2.description) || bannerConfig.value.description || []].flat()) == null ? void 0 : _b.filter((v) => !!v)
        )
      ];
    });
    const isDefaultDescStyle = computed(() => bannerConfig.value.descStyle === "default");
    const isTypesDescStyle = computed(() => bannerConfig.value.descStyle === "types");
    const isSwitchDescStyle = computed(() => bannerConfig.value.descStyle === "switch");
    const {
      text: typesText,
      isFinished,
      start: startTypes
    } = useTextTypes(descArray, {
      inputTime: bannerConfig.value.typesInTime,
      outputTime: bannerConfig.value.typesOutTime,
      nextTime: bannerConfig.value.typesNextTime,
      shuffle: bannerConfig.value.typesShuffle
    });
    const { data: text, start: startAutoSwitch } = useSwitchData(descArray, {
      timeout: bannerConfig.value.switchTime,
      shuffle: bannerConfig.value.switchShuffle,
      onUpdate: (data, newValue) => {
        data.value = "";
        setTimeout(() => {
          data.value = newValue;
        }, 100);
      }
    });
    onMounted(() => {
      if (isTypesDescStyle.value) startTypes();
      if (isSwitchDescStyle.value) startAutoSwitch();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.homeBanner.contentLabel")
      }, [
        createBaseVNode("h1", {
          class: normalizeClass(unref(ns4).e("content__title")),
          "aria-label": unref(t)("tk.homeBanner.titleLabel")
        }, toDisplayString(unref(bannerConfig).name), 11, _hoisted_219),
        createBaseVNode("p", {
          class: normalizeClass(unref(ns4).e("content__desc")),
          "aria-label": unref(t)("tk.homeBanner.descLabel")
        }, [
          isDefaultDescStyle.value ? (openBlock(), createElementBlock(
            "span",
            _hoisted_410,
            toDisplayString(descArray.value[0]),
            1
            /* TEXT */
          )) : isSwitchDescStyle.value ? withDirectives((openBlock(), createElementBlock("span", {
            key: 1,
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(startAutoSwitch) && unref(startAutoSwitch)(...args)),
            class: "switch",
            "aria-label": unref(t)("tk.homeBanner.descSwitchLabel")
          }, toDisplayString(unref(text)), 9, _hoisted_58)), [
            [vShow, !!unref(text)]
          ]) : isTypesDescStyle.value && descArray.value.length ? (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              createBaseVNode("span", {
                "aria-label": unref(t)("tk.homeBanner.descTypedLabel")
              }, toDisplayString(unref(typesText)), 9, _hoisted_67),
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(["typed", { "is-animation": unref(isFinished) }])
                },
                "|",
                2
                /* CLASS */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true)
        ], 10, _hoisted_311)
      ], 10, _hoisted_125);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/HomeBannerFeature.vue2.mjs
import { useData as useData16, withBase as withBase10 } from "vitepress";
var _hoisted_126 = ["aria-labelledby"];
var _hoisted_220 = ["href", "aria-label"];
var _hoisted_312 = ["src", "alt", "aria-label"];
var _hoisted_411 = ["id"];
var _hoisted_59 = { class: "feature-description" };
var _sfc_main35 = defineComponent({
  ...{ name: "HomeBannerFeature" },
  __name: "HomeBannerFeature",
  setup(__props) {
    var _a;
    const ns4 = useNamespace("banner-feature");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { frontmatter } = useData16();
    const bannerConfig = getTeekConfigRef("banner", {
      features: ((_a = frontmatter.value.tk) == null ? void 0 : _a.features) || [],
      featureCarousel: 4e3
    });
    const active = ref(0);
    const isMobile = ref(false);
    let timer;
    const clearTimer = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    useWindowSize((width) => {
      const { features, featureCarousel } = bannerConfig.value;
      if (width <= 719) {
        isMobile.value = true;
        clearTimer();
        timer = setInterval(() => {
          active.value = (active.value + 1) % features.length;
        }, featureCarousel);
      } else {
        isMobile.value = false;
        clearTimer();
      }
    });
    onBeforeUnmount(() => {
      clearTimer();
    });
    return (_ctx, _cache) => {
      return unref(bannerConfig).features.length ? (openBlock(), createBlock(TransitionGroup, {
        key: 0,
        name: unref(ns4).joinNamespace("slide-next"),
        tag: "div",
        class: normalizeClass([unref(ns4).b(), unref(ns4).joinNamespace("wallpaper-outside"), "flx-wrap-between"]),
        "aria-label": unref(t)("tk.homeBanner.featureLabel")
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(bannerConfig).features, (feature, index2) => {
              return withDirectives((openBlock(), createElementBlock("div", {
                class: normalizeClass(unref(ns4).e("feature__item")),
                key: index2,
                role: "group",
                "aria-labelledby": `feature-title-${index2}`
              }, [
                feature.link ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: unref(withBase10)(feature.link),
                  class: "flx-column-center hover-color",
                  "aria-label": feature.title
                }, [
                  feature.imgUrl ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    class: "feature-img",
                    src: unref(withBase10)(feature.imgUrl),
                    alt: feature.title,
                    "aria-label": feature.title
                  }, null, 8, _hoisted_312)) : createCommentVNode("v-if", true),
                  createBaseVNode("p", {
                    id: `feature-title-${index2}`,
                    class: "feature-title"
                  }, toDisplayString(feature.title), 9, _hoisted_411),
                  createBaseVNode(
                    "p",
                    _hoisted_59,
                    toDisplayString(feature.description),
                    1
                    /* TEXT */
                  )
                ], 8, _hoisted_220)) : createCommentVNode("v-if", true)
              ], 10, _hoisted_126)), [
                [vShow, !isMobile.value || active.value === index2]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["name", "class", "aria-label"])) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/HomeBannerWaves.vue2.mjs
import "vitepress";
var _sfc_main36 = defineComponent({
  ...{ name: "HomeBannerWaves" },
  __name: "HomeBannerWaves",
  setup(__props) {
    const ns4 = useNamespace("banner-waves");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "svg",
        {
          class: normalizeClass(unref(ns4).b()),
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: "0 24 150 28",
          preserveAspectRatio: "none",
          "shape-rendering": "auto"
        },
        [
          createCommentVNode("形状容器"),
          _cache[0] || (_cache[0] = createBaseVNode(
            "defs",
            null,
            [
              createBaseVNode("path", {
                id: "gentle-wave",
                d: "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              })
            ],
            -1
            /* HOISTED */
          )),
          createCommentVNode("组合波浪"),
          _cache[1] || (_cache[1] = createStaticVNode('<g class="parallax"><use class="use" xlink:href="#gentle-wave" x="48" y="0"></use><use class="use dark:fill-black" xlink:href="#gentle-wave" x="48" y="3"></use><use class="use dark:fill-black" xlink:href="#gentle-wave" x="48" y="5"></use><use class="use dark:fill-black" xlink:href="#gentle-wave" x="48" y="7"></use></g>', 1))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeBanner/src/index.vue2.mjs
var _hoisted_127 = ["aria-label"];
var fullImgNavBarKey = "full-img-nav-bar";
var _sfc_main37 = defineComponent({
  ...{ name: "HomeBanner" },
  __name: "index",
  props: {
    disabled: { type: Boolean, default: false }
  },
  setup(__props) {
    var _a;
    const ns4 = useNamespace("banner");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { frontmatter } = useData17();
    const bannerConfig = getTeekConfigRef("banner", {
      bgStyle: "pure",
      imgWaves: true,
      textColor: "#ffffff",
      titleFontSize: "3.2rem",
      descFontSize: "1.4rem",
      features: ((_a = frontmatter.value.tk) == null ? void 0 : _a.features) || []
    });
    const bodyBgImgConfig = getTeekConfigRef("bodyBgImg", {
      imgSrc: "",
      bannerStyle: "full"
    });
    const currentBgStyle = computed(() => {
      const { bgStyle } = bannerConfig.value;
      const { imgSrc, bannerStyle } = bodyBgImgConfig.value;
      const isBannerPureBgStyle = bgStyle === "pure";
      const isBannerPartImgBgStyle = bgStyle === "partImg";
      const isBannerFullImgBgStyle = bgStyle === "fullImg";
      const isBodyImgBgStyle = !!imgSrc;
      const isBodyPartImgBgStyle = isBodyImgBgStyle && bannerStyle === "part";
      const isBodyFullImgBgStyle = isBodyImgBgStyle && bannerStyle === "full";
      return {
        isBannerPureBgStyle,
        isBannerPartImgBgStyle,
        isBannerFullImgBgStyle,
        isBodyImgBgStyle,
        isBodyPartImgBgStyle,
        isBodyFullImgBgStyle
      };
    });
    const getStyle = () => {
      const titleTextVar = ns4.cssVarName("banner-title-text");
      const descTextVar = ns4.cssVarName("banner-desc-text");
      const textColorVar = ns4.cssVarName("banner-text-color");
      const { titleFontSize, descFontSize, textColor } = bannerConfig.value;
      return { [titleTextVar]: titleFontSize, [descTextVar]: descFontSize, [textColorVar]: textColor };
    };
    const bannerRef = ref(null);
    const toggleFullImgNavBarClass = (add = true) => {
      const vPNavDom = document.querySelector(".VPNavBar");
      if (add) vPNavDom == null ? void 0 : vPNavDom.classList.add(fullImgNavBarKey);
      else vPNavDom == null ? void 0 : vPNavDom.classList.remove(fullImgNavBarKey);
    };
    const toggleClass = async () => {
      if (!bannerRef.value || __props.disabled) return;
      const current = currentBgStyle.value;
      if (!current.isBannerFullImgBgStyle && !current.isBodyFullImgBgStyle) return;
      await nextTick();
      const offset = current.isBodyImgBgStyle ? 0 : 100;
      const windowInBanner = document.documentElement.scrollTop + offset < document.documentElement.clientHeight;
      toggleFullImgNavBarClass(windowInBanner);
    };
    watch(
      () => __props.disabled,
      () => toggleFullImgNavBarClass(!__props.disabled)
    );
    onMounted(() => {
      if (currentBgStyle.value.isBannerFullImgBgStyle || currentBgStyle.value.isBodyFullImgBgStyle) {
        toggleClass();
        useEventListener(window, "scroll", toggleClass);
      }
    });
    onUnmounted(() => {
      toggleFullImgNavBarClass(false);
    });
    const className = computed(() => {
      const {
        isBannerPureBgStyle,
        isBannerPartImgBgStyle,
        isBannerFullImgBgStyle,
        isBodyPartImgBgStyle,
        isBodyFullImgBgStyle
      } = currentBgStyle.value;
      if (isBodyPartImgBgStyle) return ns4.is("part-img");
      if (isBodyFullImgBgStyle) return ns4.is("full-img");
      if (isBannerPureBgStyle) return ns4.is("pure");
      if (isBannerPartImgBgStyle) return ns4.is("part-img");
      if (isBannerFullImgBgStyle) return ns4.is("full-img");
      return "";
    });
    const styleComponentMap = {
      bodyPart: { el: "div", props: { class: `body-pure` } },
      bodyFull: { el: "div", props: { class: `body-full` } },
      bannerPure: { el: _sfc_main32 },
      bannerPartImg: { el: _sfc_main33 },
      bannerFullImg: { el: _sfc_main33 }
    };
    const styleComponent = computed(() => {
      const { isBodyImgBgStyle } = currentBgStyle.value;
      const { bgStyle } = bannerConfig.value;
      const { bannerStyle } = bodyBgImgConfig.value;
      const currentStyle = isBodyImgBgStyle ? `body${upperFirst(bannerStyle)}` : `banner${upperFirst(bgStyle)}`;
      return styleComponentMap[currentStyle];
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-banner-before"),
          createBaseVNode("div", {
            ref_key: "bannerRef",
            ref: bannerRef,
            class: normalizeClass([unref(ns4).b(), className.value]),
            style: normalizeStyle(getStyle()),
            "aria-label": unref(t)("tk.homeBanner.label")
          }, [
            (openBlock(), createBlock(
              resolveDynamicComponent(styleComponent.value.el),
              normalizeProps(guardReactiveProps(styleComponent.value.props)),
              {
                default: withCtx(() => [
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass([unref(ns4).e("content"), { "no-feature": !unref(bannerConfig).features.length }])
                    },
                    [
                      renderSlot(_ctx.$slots, "teek-home-banner-content-before"),
                      createVNode(_sfc_main34),
                      renderSlot(_ctx.$slots, "teek-home-banner-content-after"),
                      renderSlot(_ctx.$slots, "teek-home-banner-feature-before"),
                      createVNode(_sfc_main35),
                      renderSlot(_ctx.$slots, "teek-home-banner-feature-after")
                    ],
                    2
                    /* CLASS */
                  )
                ]),
                _: 3
                /* FORWARDED */
              },
              16
              /* FULL_PROPS */
            )),
            unref(bannerConfig).imgWaves && currentBgStyle.value.isBannerFullImgBgStyle && !currentBgStyle.value.isBodyImgBgStyle ? (openBlock(), createBlock(_sfc_main36, {
              key: 0,
              "aria-label": unref(t)("tk.homeBanner.wavesLabel")
            }, null, 8, ["aria-label"])) : createCommentVNode("v-if", true)
          ], 14, _hoisted_127),
          renderSlot(_ctx.$slots, "teek-home-banner-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeCardList/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/HomeMyCard/src/index.vue2.mjs
import { withBase as withBase12 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/PageCard/src/index.vue2.mjs
import { withBase as withBase11 } from "vitepress";
var _hoisted_128 = ["aria-label"];
var _hoisted_221 = ["href", "target", "aria-label"];
var _hoisted_313 = ["innerHTML"];
var _hoisted_412 = ["aria-label"];
var _hoisted_510 = ["innerHTML"];
var _hoisted_68 = ["innerHTML"];
var _hoisted_76 = { key: 0 };
var _hoisted_85 = ["aria-label", "aria-disabled"];
var _hoisted_94 = ["aria-label", "aria-disabled"];
var _sfc_main38 = defineComponent({
  ...{ name: "PageCard" },
  __name: "index",
  props: mergeModels({
    title: { default: "" },
    titleLink: {},
    titleClick: { type: Function },
    page: { type: Boolean, default: false },
    pageSize: { default: 4 },
    total: { default: 0 },
    autoPage: { type: Boolean, default: false },
    pageSpeed: { default: 4e3 }
  }, {
    "modelValue": { default: 1 },
    "modelModifiers": {}
  }),
  emits: mergeModels(["pagination"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const ns4 = useNamespace("page-card");
    const pointClass = ns4.joinNamespace("pointer");
    const { t } = useLocale();
    const emit = __emit;
    const pageNum = useModel(__props, "modelValue");
    const pageTotalNum = Math.ceil(__props.total / __props.pageSize);
    const hasNextData = __props.total !== 0 && pageTotalNum !== 1;
    const transitionName2 = ref(ns4.joinNamespace("scroll"));
    const pagination = (to, type2) => {
      emit("pagination", to, type2);
      transitionName2.value = ns4.joinNamespace(`slide-${type2}`);
      if (__props.page && __props.autoPage) startAutoPage();
      const index2 = pageNum.value % pageTotalNum;
      const res = (index2 + to) % pageTotalNum;
      if (res < 1) pageNum.value = pageTotalNum + res;
      else if (res > pageTotalNum) pageNum.value = 1;
      else pageNum.value = res;
    };
    let timer;
    const startAutoPage = () => {
      closeAutoPage();
      if (__props.pageSpeed > 0) {
        timer = setTimeout(() => {
          pagination(1, "next");
        }, __props.pageSpeed);
      }
    };
    const closeAutoPage = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    onMounted(() => {
      if (__props.page && __props.autoPage) startAutoPage();
    });
    onUnmounted(() => {
      if (__props.page && __props.autoPage) closeAutoPage();
    });
    const removeHtmlTag = (str2) => {
      return str2.replace(/<[^>]*>/g, "").trim();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns4).b()} card`),
        "aria-label": unref(t)("tk.pageCard.label")
      }, [
        _ctx.title ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(`${unref(ns4).e("header")} flx-justify-between`)
          },
          [
            renderSlot(_ctx.$slots, "title", {}, () => [
              _ctx.titleLink ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: unref(withBase11)(_ctx.titleLink),
                target: unref(isValidURL)(_ctx.titleLink) ? "_blank" : "_self",
                "aria-label": removeHtmlTag(_ctx.title)
              }, [
                createBaseVNode("span", {
                  class: "title flx-align-center",
                  innerHTML: _ctx.title
                }, null, 8, _hoisted_313)
              ], 8, _hoisted_221)) : _ctx.titleClick ? (openBlock(), createElementBlock("a", {
                key: 1,
                onClick: _cache[0] || (_cache[0] = () => _ctx.titleClick()),
                class: normalizeClass(unref(pointClass)),
                "aria-label": removeHtmlTag(_ctx.title)
              }, [
                createBaseVNode("span", {
                  class: "title flx-align-center",
                  innerHTML: _ctx.title
                }, null, 8, _hoisted_510)
              ], 10, _hoisted_412)) : (openBlock(), createElementBlock("span", {
                key: 2,
                class: "title flx-align-center",
                innerHTML: _ctx.title
              }, null, 8, _hoisted_68))
            ]),
            renderSlot(_ctx.$slots, "page", normalizeProps(guardReactiveProps({ pagination })), () => [
              _ctx.page ? (openBlock(), createElementBlock("div", _hoisted_76, [
                renderSlot(_ctx.$slots, "page-left", normalizeProps(guardReactiveProps({ pagination })), () => [
                  createBaseVNode("span", {
                    class: normalizeClass(["page-button", unref(hasNextData) ? unref(pointClass) : "disabled"]),
                    onClick: _cache[1] || (_cache[1] = ($event) => pagination(-1, "prev")),
                    role: "button",
                    "aria-label": unref(t)("tk.pageCard.prev"),
                    "aria-disabled": !unref(hasNextData)
                  }, [
                    createVNode(unref(_sfc_main14), {
                      icon: unref(arrowLeftIcon),
                      size: 14,
                      "aria-hidden": "true"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_85)
                ]),
                renderSlot(_ctx.$slots, "page-right", normalizeProps(guardReactiveProps({ pagination })), () => [
                  createBaseVNode("span", {
                    class: normalizeClass(["page-button", unref(hasNextData) ? unref(pointClass) : "disabled"]),
                    onClick: _cache[2] || (_cache[2] = ($event) => pagination(1, "next")),
                    role: "button",
                    "aria-label": unref(t)("tk.pageCard.next"),
                    "aria-disabled": !unref(hasNextData)
                  }, [
                    createVNode(unref(_sfc_main14), {
                      icon: unref(arrowRightIcon),
                      size: 14,
                      "aria-hidden": "true"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_94)
                ])
              ])) : createCommentVNode("v-if", true)
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps({ transitionName: transitionName2.value, startAutoPage, closeAutoPage })))
      ], 10, _hoisted_128);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Avatar/src/index.vue2.mjs
import "vitepress";
var _hoisted_129 = ["src", "alt", "srcSet"];
var _hoisted_222 = { key: 2 };
var _sfc_main39 = defineComponent({
  ...{ name: "Avatar" },
  __name: "index",
  props: {
    size: {},
    shape: { default: "circle" },
    icon: {},
    iconSize: {},
    src: {},
    alt: {},
    srcSet: {},
    fit: { default: "cover" },
    bgColor: {},
    textColor: {},
    textSize: {},
    text: {}
  },
  emits: ["error"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const ns4 = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const classList = [ns4.b()];
      if (isString2(__props.size)) classList.push(ns4.m(__props.size));
      if (__props.icon) classList.push(ns4.m("icon"));
      if (__props.shape) classList.push(ns4.m(__props.shape));
      return classList;
    });
    const avatarStyle = computed(() => {
      return {
        [ns4.cssVarName("avatar-size")]: addUnit(__props.size),
        [ns4.cssVarName("avatar-bg-color")]: __props.bgColor,
        [ns4.cssVarName("avatar-text-color")]: __props.textColor,
        [ns4.cssVarName("avatar-text-size")]: addUnit(__props.textSize),
        [ns4.cssVarName("avatar-icon-size")]: addUnit(__props.iconSize)
      };
    });
    const imgStyle = computed(() => ({ objectFit: __props.fit }));
    watch(
      () => __props.src,
      () => hasLoadError.value = false
    );
    const handleError = (e) => {
      hasLoadError.value = true;
      emit("error", e);
    };
    const captureText = (text) => {
      const isChinese = /^[\u4e00-\u9fa5]+$/.test(text);
      if (isChinese) return text.charAt(0);
      const words = text.split(/\s+/).filter((word) => word.length > 0);
      if (words.length >= 2) {
        return words.slice(0, 2).map((word) => word.charAt(0).toUpperCase()).join("");
      }
      if (words.length === 1) return text.slice(0, 2).toUpperCase();
      return "";
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(avatarClass.value),
          style: normalizeStyle(avatarStyle.value)
        },
        [
          (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.src,
            alt: _ctx.alt,
            srcSet: _ctx.srcSet,
            style: normalizeStyle(imgStyle.value),
            onError: handleError
          }, null, 44, _hoisted_129)) : _ctx.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
            key: 1,
            icon: _ctx.icon
          }, null, 8, ["icon"])) : _ctx.text ? (openBlock(), createElementBlock(
            "span",
            _hoisted_222,
            toDisplayString(captureText(_ctx.text)),
            1
            /* TEXT */
          )) : renderSlot(_ctx.$slots, "default", { key: 3 })
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeMyCard/src/index.vue2.mjs
var _hoisted_130 = ["aria-label"];
var _hoisted_223 = ["href", "title", "aria-label"];
var _hoisted_314 = ["aria-label"];
var _hoisted_413 = { class: "name" };
var _hoisted_511 = { class: "slogan" };
var _sfc_main40 = defineComponent({
  ...{ name: "HomeMyCard" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("my");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const blogger = getTeekConfigRef("blogger", { shape: "square", circleBgMask: true });
    const social = getTeekConfigRef("social", []);
    const shape = computed(() => blogger.value.shape.replace(/-.*$/, ""));
    const isCircleBgImg = computed(() => shape.value === "circle" && !!blogger.value.circleBgImg);
    const avatarBgStyle = computed(() => ({ backgroundImage: `url(${withBase12(blogger.value.circleBgImg)})` }));
    const myCardColorStyle = computed(() => ({ color: blogger.value.color }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-my-before"),
          renderSlot(_ctx.$slots, "teek-home-card-my", {}, () => [
            unref(blogger).name ? (openBlock(), createBlock(unref(_sfc_main38), {
              key: 0,
              class: normalizeClass([unref(ns4).b(), unref(ns4).is("circle-bg", isCircleBgImg.value)]),
              style: normalizeStyle(myCardColorStyle.value),
              "aria-label": unref(t)("tk.myCard.label")
            }, {
              default: withCtx(() => [
                isCircleBgImg.value ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass([unref(ns4).em("avatar__circle", "bg"), unref(ns4).is("mask", unref(blogger).circleBgMask)]),
                    style: normalizeStyle(avatarBgStyle.value)
                  },
                  null,
                  6
                  /* CLASS, STYLE */
                )) : createCommentVNode("v-if", true),
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(`${unref(ns4).e("avatar")} ${unref(blogger).shape} flx-center`)
                  },
                  [
                    unref(blogger).avatar ? (openBlock(), createBlock(unref(_sfc_main39), {
                      key: 0,
                      src: unref(withBase12)(unref(blogger).avatar),
                      size: unref(blogger).shape === "square" ? "100%" : 100,
                      shape: shape.value,
                      "bg-color": "transparent",
                      alt: unref(t)("tk.myCard.avatarAlt"),
                      title: unref(t)("tk.myCard.avatarTitle"),
                      "aria-hidden": "true"
                    }, null, 8, ["src", "size", "shape", "alt", "title"])) : (openBlock(), createBlock(unref(_sfc_main39), {
                      key: 1,
                      size: 100,
                      shape: shape.value,
                      text: unref(blogger).name,
                      "text-size": 50,
                      "bg-color": unref(ns4).cssVar("theme-color"),
                      "aria-hidden": "true"
                    }, null, 8, ["shape", "text", "bg-color"]))
                  ],
                  2
                  /* CLASS */
                ),
                unref(social).length ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(`${unref(ns4).e("icons")} flx-justify-around`),
                  "aria-label": unref(t)("tk.myCard.socialLabel")
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(unref(social), (item, index2) => {
                      return openBlock(), createElementBlock("a", {
                        key: index2,
                        href: item.link && unref(withBase12)(item.link),
                        title: item.name,
                        target: "_blank",
                        "aria-label": item.name
                      }, [
                        item.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                          key: 0,
                          iconType: item.iconType,
                          icon: item.icon,
                          size: "20px",
                          hover: "",
                          imgAlt: item.imgAlt,
                          "aria-hidden": "true"
                        }, null, 8, ["iconType", "icon", "imgAlt"])) : createCommentVNode("v-if", true)
                      ], 8, _hoisted_223);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 10, _hoisted_130)) : createCommentVNode("v-if", true),
                createBaseVNode("div", {
                  class: normalizeClass(unref(ns4).e("blogger")),
                  "aria-label": unref(t)("tk.myCard.bloggerLabel")
                }, [
                  createBaseVNode(
                    "h3",
                    _hoisted_413,
                    toDisplayString(unref(blogger).name),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "span",
                    _hoisted_511,
                    toDisplayString(unref(blogger).slogan),
                    1
                    /* TEXT */
                  )
                ], 10, _hoisted_314)
              ]),
              _: 1
              /* STABLE */
            }, 8, ["class", "style", "aria-label"])) : createCommentVNode("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-my-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeTopArticleCard/src/index.vue2.mjs
import { useRouter as useRouter4, withBase as withBase13 } from "vitepress";
var _hoisted_131 = ["aria-label"];
var _hoisted_224 = ["href"];
var _hoisted_315 = { class: "date" };
var _hoisted_414 = ["aria-label"];
var _sfc_main41 = defineComponent({
  ...{ name: "HomeTopArticleCard" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("top-article");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const posts = usePosts();
    const topArticleConfig = getTeekConfigRef("topArticle", {
      limit: 4,
      title: t("tk.topArticleCard.title", { icon: topArticleIcon }),
      emptyLabel: t("tk.topArticleCard.emptyLabel"),
      autoPage: false,
      pageSpeed: 4e3,
      dateFormat: "yyyy-MM-dd hh:mm:ss"
    });
    const topArticleList = computed(() => {
      var _a;
      const sortPostsByDateAndSticky = posts.value.sortPostsByDateAndSticky;
      return (_a = sortPostsByDateAndSticky.filter((p) => p.frontmatter.top)) == null ? void 0 : _a.map((p, index2) => ({ ...p, num: index2 + 1 }));
    });
    const pageNum = ref(1);
    const currentTopArticleList = computed(() => {
      const { limit } = topArticleConfig.value;
      const p = pageNum.value;
      return topArticleList.value.slice((p - 1) * limit, p * limit);
    });
    const formatPostDate = (date) => {
      const dateFormatConst = topArticleConfig.value.dateFormat;
      if (isFunction(dateFormatConst)) return dateFormatConst(date || "");
      return formatDate(date || /* @__PURE__ */ new Date(), dateFormatConst);
    };
    const finalTitle = computed(() => {
      const { title } = topArticleConfig.value;
      if (isFunction(title)) return title(topArticleIcon);
      return title;
    });
    const tagColor = useTagColor();
    const itemRefs = ref([]);
    const getStyle = (num, index2) => {
      var _a, _b;
      return {
        [ns4.cssVarName("num-bg-color")]: tagColor.value[num % tagColor.value.length].text,
        top: `calc(${index2} * (calc(${ns4.cssVar("home-top-article-gap")} + ${((_b = (_a = itemRefs.value) == null ? void 0 : _a[index2]) == null ? void 0 : _b.getBoundingClientRect().height) || 0}px)))`
      };
    };
    const router = useRouter4();
    const handleTitleClick = () => {
      var _a, _b;
      (_b = (_a = topArticleConfig.value).titleClick) == null ? void 0 : _b.call(_a, router);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-top-article-before"),
          renderSlot(_ctx.$slots, "teek-home-card-top-article", {}, () => [
            createVNode(unref(_sfc_main38), {
              page: "",
              modelValue: pageNum.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pageNum.value = $event),
              pageSize: unref(topArticleConfig).limit,
              total: topArticleList.value.length,
              title: finalTitle.value,
              titleClick: unref(topArticleConfig).titleClick ? handleTitleClick : void 0,
              autoPage: unref(topArticleConfig).autoPage,
              pageSpeed: unref(topArticleConfig).pageSpeed,
              class: normalizeClass(unref(ns4).b()),
              "aria-label": unref(t)("tk.topArticleCard.label")
            }, {
              default: withCtx(({ transitionName: transitionName2 }) => [
                topArticleList.value.length ? (openBlock(), createBlock(TransitionGroup, {
                  key: 0,
                  name: transitionName2,
                  tag: "ul",
                  mode: "out-in",
                  class: normalizeClass(`${unref(ns4).e("list")} flx-column`),
                  "aria-label": unref(t)("tk.topArticleCard.listLabel")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(currentTopArticleList.value, (item, index2) => {
                        return openBlock(), createElementBlock("li", {
                          ref_for: true,
                          ref_key: "itemRefs",
                          ref: itemRefs,
                          key: item.num,
                          class: normalizeClass(unref(ns4).e("list__item")),
                          style: normalizeStyle(getStyle(item.num - 1, index2)),
                          "aria-label": item.title
                        }, [
                          createBaseVNode(
                            "span",
                            {
                              class: normalizeClass(["num", { sticky: item.frontmatter.sticky }])
                            },
                            toDisplayString(item.num),
                            3
                            /* TEXT, CLASS */
                          ),
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(ns4).e("list__item__info"))
                            },
                            [
                              createBaseVNode("a", {
                                href: item.url && unref(withBase13)(item.url),
                                class: "hover-color flx-align-center"
                              }, [
                                createVNode(unref(_sfc_main7), {
                                  post: item,
                                  "title-tag-props": { position: "right", size: "mini" }
                                }, null, 8, ["post"])
                              ], 8, _hoisted_224),
                              createBaseVNode(
                                "div",
                                _hoisted_315,
                                toDisplayString(formatPostDate(item.date)),
                                1
                                /* TEXT */
                              )
                            ],
                            2
                            /* CLASS */
                          )
                        ], 14, _hoisted_131);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["name", "class", "aria-label"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(ns4).m("empty")),
                  "aria-label": unref(topArticleConfig).emptyLabel
                }, toDisplayString(unref(topArticleConfig).emptyLabel), 11, _hoisted_414))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["modelValue", "pageSize", "total", "title", "titleClick", "autoPage", "pageSpeed", "class", "aria-label"])
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-top-article-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeCategoryCard/src/index.vue2.mjs
import { useRouter as useRouter5, withBase as withBase14 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/Home/src/home.mjs
var postDataUpdateSymbol = Symbol("postDataUpdate");

// node_modules/vitepress-theme-teek/es/components/theme/HomeCategoryCard/src/index.vue2.mjs
var _hoisted_132 = ["onClick", "aria-label"];
var _hoisted_225 = { class: "sle" };
var _hoisted_316 = ["href", "aria-label"];
var _hoisted_415 = ["aria-label"];
var categoryKey = "category";
var _sfc_main42 = defineComponent({
  ...{ name: "HomeCategoryCard" },
  __name: "index",
  props: {
    categoriesPage: { type: Boolean, default: false }
  },
  setup(__props) {
    const ns4 = useNamespace("category");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { categoryPath } = usePagePath();
    const categoryConfig = getTeekConfigRef("category", {
      path: "/categories",
      pageTitle: t("tk.categoryCard.pageTitle", { icon: categoryIcon }),
      homeTitle: t("tk.categoryCard.homeTitle", { icon: categoryIcon }),
      emptyLabel: t("tk.categoryCard.emptyLabel"),
      moreLabel: t("tk.categoryCard.moreLabel"),
      limit: 5,
      autoPage: false,
      pageSpeed: 4e3
    });
    const posts = usePosts();
    const pageNum = ref(1);
    const categories = computed(() => posts.value.groupCards.categories);
    const currentCategories = computed(() => {
      const { limit } = categoryConfig.value;
      const c = categories.value;
      const p = pageNum.value;
      return __props.categoriesPage ? c : c.slice((p - 1) * limit, p * limit);
    });
    const finalTitle = computed(() => {
      const { pageTitle, homeTitle } = categoryConfig.value;
      const pt = isFunction(pageTitle) ? pageTitle(categoryIcon) : pageTitle;
      const ht = isFunction(homeTitle) ? homeTitle(categoryIcon) : homeTitle;
      return { pt, ht };
    });
    const updatePostListData = inject(postDataUpdateSymbol, () => {
    });
    const router = useRouter5();
    const selectedCategory = ref("");
    const handleSwitchCategory = (category = "") => {
      const { pathname, searchParams } = new URL(window.location.href);
      const categoriesPathConst = withBase14(categoryPath.value);
      const inCategoriesPage = categoriesPathConst === pathname;
      searchParams.delete(pageNumKey);
      searchParams.append(pageNumKey, "1");
      searchParams.delete(categoryKey);
      if (category) searchParams.append(categoryKey, category);
      const searchParamsStr = category ? `?${searchParams.toString()}` : "";
      if (inCategoriesPage && selectedCategory.value === category) return;
      selectedCategory.value = category;
      if (!inCategoriesPage) return router.go(categoriesPathConst + searchParamsStr);
      window.history.pushState({}, "", pathname + searchParamsStr);
      updatePostListData();
    };
    onMounted(() => {
      const { searchParams } = new URL(window.location.href);
      const category = searchParams.get(categoryKey);
      if (category) selectedCategory.value = category;
    });
    watch(
      () => __props.categoriesPage,
      () => {
        if (!__props.categoriesPage) {
          selectedCategory.value = "";
          return;
        }
        const { searchParams } = new URL(window.location.href);
        const category = searchParams.get(categoryKey);
        if (category && selectedCategory.value !== category) selectedCategory.value = category;
      }
    );
    const itemRefs = ref([]);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-category-before"),
          renderSlot(_ctx.$slots, "teek-home-card-category", {}, () => [
            createVNode(unref(_sfc_main38), {
              page: !_ctx.categoriesPage,
              modelValue: pageNum.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pageNum.value = $event),
              pageSize: unref(categoryConfig).limit,
              total: categories.value.length,
              title: finalTitle.value[_ctx.categoriesPage ? "pt" : "ht"],
              titleClick: handleSwitchCategory,
              autoPage: unref(categoryConfig).autoPage,
              pageSpeed: unref(categoryConfig).pageSpeed,
              class: normalizeClass([unref(ns4).b(), unref(ns4).is("page", _ctx.categoriesPage)]),
              "aria-label": unref(t)("tk.categoryCard.label")
            }, {
              default: withCtx(({ transitionName: transitionName2 }) => [
                categories.value.length ? (openBlock(), createBlock(TransitionGroup, {
                  key: 0,
                  name: transitionName2,
                  tag: "div",
                  mode: "out-in",
                  class: normalizeClass(`${unref(ns4).e("list")} flx-column`),
                  "aria-label": unref(t)("tk.categoryCard.listLabel")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(currentCategories.value, (item, index2) => {
                        var _a, _b;
                        return openBlock(), createElementBlock("a", {
                          ref_for: true,
                          ref_key: "itemRefs",
                          ref: itemRefs,
                          key: item.name,
                          onClick: ($event) => handleSwitchCategory(item.name),
                          class: normalizeClass([{ active: item.name === selectedCategory.value }, "hover-color"]),
                          style: normalizeStyle(`top: ${index2 * ((_b = (_a = itemRefs.value) == null ? void 0 : _a[index2]) == null ? void 0 : _b.getBoundingClientRect().height) || 0}px`),
                          "aria-label": item.name
                        }, [
                          createBaseVNode(
                            "span",
                            _hoisted_225,
                            toDisplayString(item.name),
                            1
                            /* TEXT */
                          ),
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(item.length),
                            1
                            /* TEXT */
                          )
                        ], 14, _hoisted_132);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    !_ctx.categoriesPage && unref(categoryConfig).limit < categories.value.length ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: unref(withBase14)(unref(categoryPath)),
                      "aria-label": unref(categoryConfig).moreLabel
                    }, toDisplayString(unref(categoryConfig).moreLabel), 9, _hoisted_316)) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["name", "class", "aria-label"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(ns4).m("empty")),
                  "aria-label": unref(categoryConfig).emptyLabel
                }, toDisplayString(unref(categoryConfig).emptyLabel), 11, _hoisted_415))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["page", "modelValue", "pageSize", "total", "title", "autoPage", "pageSpeed", "class", "aria-label"])
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-category-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeTagCard/src/index.vue2.mjs
import { useRouter as useRouter6, withBase as withBase15 } from "vitepress";
var _hoisted_133 = ["onClick", "aria-label"];
var _hoisted_226 = { class: "num" };
var _hoisted_317 = ["href", "aria-label"];
var _hoisted_416 = ["aria-label"];
var tagKey = "tag";
var _sfc_main43 = defineComponent({
  ...{ name: "HomeTagCard" },
  __name: "index",
  props: {
    tagsPage: { type: Boolean, default: false }
  },
  setup(__props) {
    const ns4 = useNamespace("tag");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const pageNum = ref(1);
    const tagConfig = getTeekConfigRef("tag", {
      pageTitle: t("tk.tagCard.pageTitle", { icon: tagIcon }),
      homeTitle: t("tk.tagCard.homeTitle", { icon: tagIcon }),
      emptyLabel: t("tk.tagCard.emptyLabel"),
      moreLabel: t("tk.tagCard.moreLabel"),
      limit: 21,
      autoPage: false,
      pageSpeed: 4e3,
      bgColor: ""
    });
    const { tagPath } = usePagePath();
    const posts = usePosts();
    const tagColor = useTagColor();
    const tags = computed(() => posts.value.groupCards.tags);
    const currentTags = computed(() => {
      const { limit } = tagConfig.value;
      const t2 = tags.value;
      const p = pageNum.value;
      return __props.tagsPage ? t2 : t2.slice((p - 1) * limit, p * limit);
    });
    const finalTitle = computed(() => {
      const { pageTitle, homeTitle } = tagConfig.value;
      const pt = isFunction(pageTitle) ? pageTitle(tagIcon) : pageTitle;
      const ht = isFunction(homeTitle) ? homeTitle(tagIcon) : homeTitle;
      return { pt, ht };
    });
    const getTagStyle = (index2) => {
      const tagColorConst = tagColor.value;
      const color = tagColorConst[index2 % tagColorConst.length];
      return {
        [ns4.cssVarName("home-tag-bg-color")]: color.bg,
        backgroundColor: color.bg,
        color: color.text,
        borderColor: color.border
      };
    };
    const updatePostListData = inject(postDataUpdateSymbol, () => {
    });
    const router = useRouter6();
    const selectedTag = ref("");
    const handleSwitchTag = (tag = "") => {
      const { pathname, searchParams } = new URL(window.location.href);
      const categoriesPageLinkConst = withBase15(tagPath.value);
      const inCategoriesPage = categoriesPageLinkConst === pathname;
      searchParams.delete(pageNumKey);
      searchParams.append(pageNumKey, "1");
      searchParams.delete(tagKey);
      if (tag) searchParams.append(tagKey, tag);
      const searchParamsStr = tag ? `?${searchParams.toString()}` : "";
      if (inCategoriesPage && selectedTag.value === tag) return;
      selectedTag.value = tag;
      if (!inCategoriesPage) return router.go(categoriesPageLinkConst + searchParamsStr);
      window.history.pushState({}, "", pathname + searchParamsStr);
      updatePostListData();
    };
    onMounted(() => {
      const { searchParams } = new URL(window.location.href);
      const tag = searchParams.get(tagKey);
      if (tag) selectedTag.value = tag;
    });
    watch(
      () => __props.tagsPage,
      () => {
        if (!__props.tagsPage) {
          selectedTag.value = "";
          return;
        }
        const { searchParams } = new URL(window.location.href);
        const tag = searchParams.get(tagKey);
        if (tag && selectedTag.value !== tag) selectedTag.value = tag;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-tag-before"),
          renderSlot(_ctx.$slots, "teek-home-card-tag", {}, () => [
            createVNode(unref(_sfc_main38), {
              page: !_ctx.tagsPage,
              modelValue: pageNum.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pageNum.value = $event),
              pageSize: unref(tagConfig).limit,
              total: tags.value.length,
              title: finalTitle.value[_ctx.tagsPage ? "pt" : "ht"],
              titleClick: handleSwitchTag,
              autoPage: unref(tagConfig).autoPage,
              pageSpeed: unref(tagConfig).pageSpeed,
              class: normalizeClass([unref(ns4).b(), unref(ns4).is("page", _ctx.tagsPage)]),
              "aria-label": unref(t)("tk.tagCard.label")
            }, {
              default: withCtx(({ transitionName: transitionName2 }) => [
                tags.value.length ? (openBlock(), createBlock(TransitionGroup, {
                  key: 0,
                  name: transitionName2,
                  tag: "div",
                  mode: "out-in",
                  class: normalizeClass(unref(ns4).e("list")),
                  "aria-label": unref(t)("tk.tagCard.listLabel")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(currentTags.value, (item, index2) => {
                        return openBlock(), createElementBlock("a", {
                          key: item.name,
                          style: normalizeStyle(getTagStyle(index2)),
                          onClick: ($event) => handleSwitchTag(item.name),
                          class: normalizeClass([{ active: item.name === selectedTag.value }, unref(ns4).joinNamespace("pointer")]),
                          "aria-label": item.name
                        }, [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(item.name),
                            1
                            /* TEXT */
                          ),
                          createBaseVNode(
                            "span",
                            _hoisted_226,
                            toDisplayString(item.length),
                            1
                            /* TEXT */
                          )
                        ], 14, _hoisted_133);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )),
                    !_ctx.tagsPage && unref(tagConfig).limit < tags.value.length ? (openBlock(), createElementBlock("a", {
                      key: 0,
                      href: unref(withBase15)(unref(tagPath)),
                      class: "more",
                      "aria-label": unref(tagConfig).moreLabel
                    }, toDisplayString(unref(tagConfig).moreLabel), 9, _hoisted_317)) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["name", "class", "aria-label"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(ns4).m("empty")),
                  "aria-label": unref(tagConfig).emptyLabel
                }, toDisplayString(unref(tagConfig).emptyLabel), 11, _hoisted_416))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["page", "modelValue", "pageSize", "total", "title", "autoPage", "pageSpeed", "class", "aria-label"])
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-tag-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeFriendLinkCard/src/index.vue2.mjs
import { useRouter as useRouter7 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/HomeFriendLinkCard/src/ItemInfo.vue2.mjs
import { withBase as withBase16 } from "vitepress";
var _hoisted_134 = ["href", "aria-label"];
var _hoisted_227 = ["src", "alt"];
var _hoisted_318 = ["title"];
var _hoisted_417 = ["title"];
var _sfc_main44 = defineComponent({
  __name: "ItemInfo",
  props: {
    item: {},
    ns: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        href: _ctx.item.link && unref(withBase16)(_ctx.item.link),
        target: "_blank",
        class: "hover-color flx-align-center",
        "aria-label": _ctx.item.name
      }, [
        createBaseVNode("img", {
          src: _ctx.item.avatar && unref(withBase16)(_ctx.item.avatar),
          class: "friend-avatar",
          alt: _ctx.item.alt || _ctx.item.name,
          "aria-hidden": "true"
        }, null, 8, _hoisted_227),
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.ns.e("list__item__info"))
          },
          [
            createBaseVNode("div", {
              class: "friend-name sle",
              title: _ctx.item.name
            }, toDisplayString(_ctx.item.name), 9, _hoisted_318),
            createBaseVNode("div", {
              class: "friend-desc sle",
              title: _ctx.item.desc
            }, toDisplayString(_ctx.item.desc), 9, _hoisted_417)
          ],
          2
          /* CLASS */
        )
      ], 8, _hoisted_134);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeFriendLinkCard/src/index.vue2.mjs
var _hoisted_135 = ["aria-label"];
var _sfc_main45 = defineComponent({
  ...{ name: "HomeFriendLinkCard" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("friend-link");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const friendLinkConfig = getTeekConfigRef("friendLink", {
      list: [],
      limit: 4,
      title: t("tk.friendLinkCard.title", { icon: friendLinkIcon }),
      emptyLabel: t("tk.friendLinkCard.emptyLabel"),
      autoScroll: false,
      scrollSpeed: 2500,
      autoPage: false,
      pageSpeed: 4e3,
      titleClick: void 0
    });
    const { data, start, stop } = useScrollData(friendLinkConfig.value.list, 5, {
      intervalTime: friendLinkConfig.value.scrollSpeed
    });
    const pageNum = ref(1);
    const currentFriendLinkList = computed(() => {
      const { list, limit, autoScroll } = friendLinkConfig.value;
      if (autoScroll) return data.value;
      const p = pageNum.value;
      return list.slice((p - 1) * limit, p * limit);
    });
    const finalTitle = computed(() => {
      const { title } = friendLinkConfig.value;
      if (isFunction(title)) return title(friendLinkIcon);
      return title;
    });
    onMounted(() => {
      if (friendLinkConfig.value.autoScroll) start();
    });
    const itemRefs = ref([]);
    const getLiStyle = (index2) => {
      var _a, _b;
      if (friendLinkConfig.value.autoScroll) return {};
      const clientRect = (_b = (_a = itemRefs.value) == null ? void 0 : _a[index2]) == null ? void 0 : _b.getBoundingClientRect();
      return {
        top: `calc(${index2} * (calc(${ns4.cssVar("home-friend-link-gap")} + ${(clientRect == null ? void 0 : clientRect.height) || 0}px)))`
      };
    };
    const router = useRouter7();
    const handleTitleClick = () => {
      var _a, _b;
      (_b = (_a = friendLinkConfig.value).titleClick) == null ? void 0 : _b.call(_a, router);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-friend-link-before"),
          renderSlot(_ctx.$slots, "teek-home-card-friend-link", {}, () => [
            createVNode(unref(_sfc_main38), {
              page: !unref(friendLinkConfig).autoScroll,
              modelValue: pageNum.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => pageNum.value = $event),
              pageSize: unref(friendLinkConfig).limit,
              total: unref(friendLinkConfig).list.length,
              title: finalTitle.value,
              titleClick: unref(friendLinkConfig).titleClick ? handleTitleClick : void 0,
              autoPage: unref(friendLinkConfig).autoPage,
              pageSpeed: unref(friendLinkConfig).pageSpeed,
              class: normalizeClass(unref(ns4).b()),
              "aria-label": unref(t)("tk.friendLinkCard.label")
            }, {
              default: withCtx(({ transitionName: transitionName2, startAutoPage, closeAutoPage }) => [
                unref(friendLinkConfig).list.length ? (openBlock(), createBlock(TransitionGroup, {
                  key: 0,
                  name: transitionName2,
                  tag: "ul",
                  mode: "out-in",
                  class: normalizeClass(`${unref(ns4).e("list")} flx-column`),
                  onMouseenter: ($event) => unref(friendLinkConfig).autoScroll ? unref(stop)() : unref(friendLinkConfig).autoPage ? closeAutoPage() : () => {
                  },
                  onMouseleave: ($event) => unref(friendLinkConfig).autoScroll ? unref(start)() : unref(friendLinkConfig).autoPage ? startAutoPage() : () => {
                  },
                  "aria-label": unref(t)("tk.friendLinkCard.listLabel")
                }, {
                  default: withCtx(() => [
                    unref(friendLinkConfig).autoScroll ? (openBlock(true), createElementBlock(
                      Fragment,
                      { key: 0 },
                      renderList(currentFriendLinkList.value, (item, index2) => {
                        return openBlock(), createElementBlock(
                          "li",
                          {
                            key: item.name,
                            class: normalizeClass(unref(ns4).e("list__item")),
                            style: normalizeStyle(getLiStyle(index2))
                          },
                          [
                            createVNode(_sfc_main44, {
                              item,
                              ns: unref(ns4)
                            }, null, 8, ["item", "ns"])
                          ],
                          6
                          /* CLASS, STYLE */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )) : (openBlock(true), createElementBlock(
                      Fragment,
                      { key: 1 },
                      renderList(currentFriendLinkList.value, (item, index2) => {
                        return openBlock(), createElementBlock(
                          "li",
                          {
                            ref_for: true,
                            ref_key: "itemRefs",
                            ref: itemRefs,
                            key: item.name,
                            class: normalizeClass(unref(ns4).e("list__item")),
                            style: normalizeStyle(getLiStyle(index2))
                          },
                          [
                            createVNode(_sfc_main44, {
                              item,
                              ns: unref(ns4)
                            }, null, 8, ["item", "ns"])
                          ],
                          6
                          /* CLASS, STYLE */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["name", "class", "onMouseenter", "onMouseleave", "aria-label"])) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(unref(ns4).m("empty")),
                  "aria-label": unref(friendLinkConfig).emptyLabel
                }, toDisplayString(unref(friendLinkConfig).emptyLabel), 11, _hoisted_135))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["page", "modelValue", "pageSize", "total", "title", "titleClick", "autoPage", "pageSpeed", "class", "aria-label"])
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-friend-link-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeDocAnalysisCard/src/index.vue2.mjs
import { useData as useData18 } from "vitepress";
var _hoisted_136 = ["innerHTML"];
var _hoisted_228 = ["innerHTML"];
var _sfc_main46 = defineComponent({
  ...{ name: "HomeDocAnalysisCard" },
  __name: "index",
  setup(__props) {
    var _a;
    const ns4 = useNamespace("doc-analysis");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { theme } = useData18();
    const docAnalysisConfig = getTeekConfigRef("docAnalysis", {
      createTime: void 0,
      title: t("tk.docAnalysisCard.title", { icon: docAnalysisIcon }),
      statistics: {},
      overrideInfo: [],
      appendInfo: []
    });
    const docAnalysisInfo = computed(() => theme.value.docAnalysisInfo || {});
    const finalTitle = computed(() => {
      const { title } = docAnalysisConfig.value;
      if (isFunction(title)) return title(docAnalysisIcon);
      return title;
    });
    const createToNowDay = computed(() => formatDiffDateToDay(docAnalysisConfig.value.createTime || getNowDate()));
    const posts = usePosts();
    const postAddNum = computed(() => {
      const sortPostsByDate = posts.value.sortPostsByDate;
      let weekAddNum = 0;
      let monthAddNum = 0;
      const currentDate = new Date(getNowDate());
      for (const item of sortPostsByDate) {
        if (!item.date) continue;
        const postDate = new Date(item.date);
        if (postDate.getTime() > currentDate.getTime() - 7 * 24 * 60 * 60 * 1e3) weekAddNum++;
        if (postDate.getTime() > currentDate.getTime() - 30 * 24 * 60 * 60 * 1e3) monthAddNum++;
        else return { weekAddNum, monthAddNum };
      }
      return { weekAddNum, monthAddNum };
    });
    const formatWordCount = (wordCount) => {
      if (wordCount < 1e3) return wordCount + "";
      if (wordCount < 1e6) return Math.round(wordCount / 100) / 10 + "k";
      return Math.round(wordCount / 1e4) / 10 + "w";
    };
    const statisticsConfig = computed(() => ({
      provider: "",
      siteView: true,
      iteration: false,
      pageIteration: 2e3,
      permalink: true,
      ...docAnalysisConfig.value.statistics
    }));
    const useSiteView = computed(() => !!statisticsConfig.value.provider && statisticsConfig.value.siteView);
    const { sitePv, siteUv, isGet, request } = useBuSuanZi(useSiteView.value, {
      tryRequest: statisticsConfig.value.tryRequest,
      tryCount: statisticsConfig.value.tryCount,
      tryIterationTime: statisticsConfig.value.tryIterationTime
    });
    const statisticsInfo = computed(() => ({ siteUv: siteUv.value, sitePv: sitePv.value, isGet: isGet.value }));
    watch(useSiteView, (newVal) => {
      if (newVal) request();
    });
    const vpRouter = useVpRouter();
    const { router } = vpRouter;
    if (statisticsConfig.value.permalink && ((_a = router.state) == null ? void 0 : _a.permalinkPlugin)) {
      vpRouter.bindRouterFn("urlChange", () => {
        router.onAfterUrlLoad = () => {
          if (useSiteView.value) request();
        };
      });
    } else {
      watch(router.route, () => {
        if (useSiteView.value) request();
      });
    }
    const docAnalysisList = computed(() => {
      var _a2, _b, _c, _d;
      const { createTime, appendInfo, overrideInfo } = docAnalysisConfig.value;
      const { fileList = [], totalFileWords, lastCommitTime } = docAnalysisInfo.value;
      const { siteUv: siteUv2, sitePv: sitePv2, isGet: isGet2 } = statisticsInfo.value;
      const list = [
        {
          key: "totalPosts",
          label: t("tk.docAnalysisCard.totalPosts"),
          originValue: fileList.length,
          value: `${fileList.length} ${t("tk.docAnalysisCard.fileUnit")}`
        },
        {
          key: "weekAddNum",
          label: t("tk.docAnalysisCard.weekAddNum"),
          originValue: (_a2 = postAddNum.value) == null ? void 0 : _a2.weekAddNum,
          value: `${(_b = postAddNum.value) == null ? void 0 : _b.weekAddNum} ${t("tk.docAnalysisCard.fileUnit")}`
        },
        {
          key: "monthAddNum",
          label: t("tk.docAnalysisCard.monthAddNum"),
          originValue: (_c = postAddNum.value) == null ? void 0 : _c.monthAddNum,
          value: `${(_d = postAddNum.value) == null ? void 0 : _d.monthAddNum} ${t("tk.docAnalysisCard.fileUnit")}`
        },
        {
          key: "runtime",
          label: t("tk.docAnalysisCard.runtime"),
          originValue: createTime,
          value: `${createToNowDay.value === 0 ? t("tk.docAnalysisCard.runtimeLess") : `${createToNowDay.value} ${t("tk.docAnalysisCard.runtimeUnit")}`}`
        },
        {
          key: "totalWordCount",
          label: t("tk.docAnalysisCard.totalWordCount"),
          originValue: totalFileWords,
          value: `${formatWordCount(totalFileWords)} ${t("tk.docAnalysisCard.wordCountUnit")}`
        },
        {
          key: "lastActiveTime",
          label: t("tk.docAnalysisCard.lastActiveTime"),
          originValue: lastCommitTime,
          value: formatDiffDate(lastCommitTime)
        },
        {
          key: "viewCount",
          label: t("tk.docAnalysisCard.viewCount"),
          originValue: sitePv2,
          value: isGet2 ? `${sitePv2} ${t("tk.docAnalysisCard.viewCountUnit")}` : "Get...",
          show: useSiteView.value
        },
        {
          key: "visitCount",
          label: t("tk.docAnalysisCard.visitCount"),
          originValue: siteUv2,
          value: isGet2 ? `${siteUv2} ${t("tk.docAnalysisCard.visitCountUnit")}` : "Get...",
          show: useSiteView.value
        },
        ...appendInfo
      ];
      if (overrideInfo.length) {
        list.forEach((item) => {
          const override = overrideInfo.find((overrideItem) => overrideItem.key === item.key);
          if (override) {
            item.label = override.label || item.label;
            item.value = override.value ? override.value(item.originValue || "", item.value) : item.value;
            item.show = override.show !== false;
          }
        });
      }
      return list;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          renderSlot(_ctx.$slots, "teek-home-card-doc-analysis-before"),
          renderSlot(_ctx.$slots, "teek-home-card-doc-analysis", {}, () => [
            createVNode(unref(_sfc_main38), {
              title: finalTitle.value,
              class: normalizeClass(unref(ns4).b()),
              "aria-label": unref(t)("tk.docAnalysisCard.label")
            }, {
              default: withCtx(() => [
                (openBlock(true), createElementBlock(
                  Fragment,
                  null,
                  renderList(docAnalysisList.value, (item) => {
                    return openBlock(), createElementBlock(
                      Fragment,
                      {
                        key: item.key
                      },
                      [
                        item.show !== false ? (openBlock(), createElementBlock(
                          "div",
                          {
                            key: 0,
                            class: normalizeClass(unref(ns4).e("item"))
                          },
                          [
                            createBaseVNode("span", {
                              innerHTML: item.label
                            }, null, 8, _hoisted_136),
                            createBaseVNode("span", {
                              innerHTML: item.value
                            }, null, 8, _hoisted_228)
                          ],
                          2
                          /* CLASS */
                        )) : createCommentVNode("v-if", true)
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    );
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              _: 1
              /* STABLE */
            }, 8, ["title", "class", "aria-label"])
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-doc-analysis-after")
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeCardList/src/index.vue2.mjs
var _sfc_main47 = defineComponent({
  ...{ name: "HomeCardList" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("home-card-list");
    const { getTeekConfig } = useTeekConfig();
    const teekConfig = computed(() => getTeekConfig(null, {}));
    const finalHomeCardSort = computed(() => {
      const configCardSort = teekConfig.value.homeCardSort || [];
      return ["my", .../* @__PURE__ */ new Set([...configCardSort, ...["topArticle", "category", "tag", "friendLink", "docAnalysis"]])];
    });
    const { isHomePage, isCategoriesPage, isTagsPage } = usePageState();
    const componentMap = computed(() => {
      const { topArticle, category, tag, docAnalysis, friendLink } = teekConfig.value;
      const homePage = isHomePage.value;
      const categoriesPage = isCategoriesPage.value;
      const tagsPage = isTagsPage.value;
      return {
        my: {
          el: _sfc_main40,
          show: homePage,
          slot: ["-home-my-before", "-home-my-after"]
        },
        topArticle: {
          el: _sfc_main41,
          show: homePage && (topArticle == null ? void 0 : topArticle.enabled) !== false,
          slot: ["-home-top-article-before", "-home-top-article-after"]
        },
        category: {
          el: _sfc_main42,
          props: { categoriesPage },
          show: (homePage || categoriesPage) && (category == null ? void 0 : category.enabled) !== false,
          slot: ["-home-category-before", "-home-category-after"]
        },
        tag: {
          el: _sfc_main43,
          props: { tagsPage },
          show: (homePage || tagsPage) && (tag == null ? void 0 : tag.enabled) !== false,
          slot: ["-home-tag-before", "-home-tag-after"]
        },
        docAnalysis: {
          el: _sfc_main46,
          show: homePage && (docAnalysis == null ? void 0 : docAnalysis.enabled) !== false,
          slot: ["-home-doc-analysis-before", "-home-doc-analysis-after"]
        },
        friendLink: {
          el: _sfc_main45,
          show: homePage && (friendLink == null ? void 0 : friendLink.enabled) !== false,
          slot: ["-home-friend-link-before", "-home-friend-link-after"]
        }
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), "flx-column"])
        },
        [
          renderSlot(_ctx.$slots, "teek-home-card-before"),
          renderSlot(_ctx.$slots, "teek-home-card", {}, () => [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(finalHomeCardSort.value, (item) => {
                var _a, _b, _c, _d;
                return openBlock(), createElementBlock(
                  Fragment,
                  { key: item },
                  [
                    ((_a = componentMap.value[item]) == null ? void 0 : _a.show) ? (openBlock(), createBlock(
                      resolveDynamicComponent((_b = componentMap.value[item]) == null ? void 0 : _b.el),
                      mergeProps({
                        key: 0,
                        ref_for: true
                      }, (_c = componentMap.value[item]) == null ? void 0 : _c.props),
                      createSlots({
                        _: 2
                        /* DYNAMIC */
                      }, [
                        renderList((_d = componentMap.value[item]) == null ? void 0 : _d.slot, (name) => {
                          return {
                            name,
                            fn: withCtx(() => [
                              renderSlot(_ctx.$slots, name)
                            ])
                          };
                        })
                      ]),
                      1040
                      /* FULL_PROPS, DYNAMIC_SLOTS */
                    )) : createCommentVNode("v-if", true)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-after")
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/Home/src/index.vue2.mjs
var _hoisted_137 = ["aria-label"];
var _hoisted_229 = { key: 0 };
var _hoisted_319 = ["aria-label"];
var _hoisted_418 = ["aria-label"];
var _sfc_main48 = defineComponent({
  ...{ name: "Home" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("home");
    const { t } = useLocale();
    const { isHomePage } = usePageState();
    const { getTeekConfigRef } = useTeekConfig();
    const teekConfig = getTeekConfigRef(null, {
      teekHome: true,
      homeCardListPosition: "right",
      banner: {},
      wallpaper: {},
      bodyBgImg: {}
    });
    const homePostListInstance = ref(null);
    provide(postDataUpdateSymbol, () => {
      var _a;
      return (_a = homePostListInstance.value) == null ? void 0 : _a.updateData();
    });
    const isPaging = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns4).b()),
        role: "main",
        "aria-label": unref(t)("tk.home.label")
      }, [
        unref(isHomePage) && (unref(teekConfig).banner.enabled ?? true) ? withDirectives((openBlock(), createElementBlock(
          "div",
          _hoisted_229,
          [
            createVNode(unref(_sfc_main37), { disabled: isPaging.value }, createSlots({
              _: 2
              /* DYNAMIC */
            }, [
              renderList(_ctx.$slots, (_, name) => {
                return {
                  name,
                  fn: withCtx(() => [
                    renderSlot(_ctx.$slots, name)
                  ])
                };
              })
            ]), 1032, ["disabled"])
          ],
          512
          /* NEED_PATCH */
        )), [
          [vShow, !isPaging.value]
        ]) : createCommentVNode("v-if", true),
        createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(ns4).e("content"), unref(ns4).joinNamespace("wallpaper-outside"), "flx-start-justify-center"])
          },
          [
            createBaseVNode("div", {
              class: normalizeClass(unref(ns4).e("content__post")),
              "aria-label": unref(t)("tk.home.postLabel")
            }, [
              renderSlot(_ctx.$slots, "teek-home-post-before"),
              createVNode(unref(_sfc_main31), {
                modelValue: isPaging.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isPaging.value = $event),
                ref_key: "homePostListInstance",
                ref: homePostListInstance
              }, createSlots({
                _: 2
                /* DYNAMIC */
              }, [
                renderList(_ctx.$slots, (_, name) => {
                  return {
                    name,
                    fn: withCtx(() => [
                      renderSlot(_ctx.$slots, name)
                    ])
                  };
                })
              ]), 1032, ["modelValue"]),
              renderSlot(_ctx.$slots, "teek-home-post-after")
            ], 10, _hoisted_319),
            createBaseVNode("div", {
              class: normalizeClass([unref(ns4).e("content__info"), unref(teekConfig).homeCardListPosition === "left" ? unref(ns4).is("left") : unref(ns4).is("right")]),
              "aria-label": unref(t)("tk.home.cardLabel")
            }, [
              createVNode(
                unref(_sfc_main47),
                null,
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )
            ], 10, _hoisted_418)
          ],
          2
          /* CLASS */
        ),
        unref(teekConfig).wallpaper.enabled && (unref(teekConfig).banner.bgStyle === "fullImg" || unref(teekConfig).bodyBgImg.imgSrc) ? (openBlock(), createBlock(unref(_sfc_main21), { key: 1 })) : createCommentVNode("v-if", true)
      ], 10, _hoisted_137);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/HomeMyCard/src/HomeMyCardScreen.vue2.mjs
import { withBase as withBase17 } from "vitepress";
var _hoisted_138 = ["src", "alt"];
var _hoisted_230 = ["aria-label"];
var _hoisted_320 = { class: "name" };
var _hoisted_419 = { class: "slogan" };
var _sfc_main49 = defineComponent({
  ...{ name: "HomeMyCardScreen" },
  __name: "HomeMyCardScreen",
  setup(__props) {
    const ns4 = useNamespace("my-screen");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const blogger = getTeekConfigRef("blogger", {});
    const isShow = useMediaQuery("(max-width: 960px)");
    return (_ctx, _cache) => {
      return unref(isShow) && unref(blogger).name && unref(blogger).avatar && unref(blogger).slogan ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          renderSlot(_ctx.$slots, "teek-home-card-my-screen-before"),
          renderSlot(_ctx.$slots, "teek-home-card-my-screen", {}, () => [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns4).b())
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(ns4).e("avatar"))
                  },
                  [
                    unref(blogger).avatar ? (openBlock(), createElementBlock("img", {
                      key: 0,
                      src: unref(withBase17)(unref(blogger).avatar),
                      alt: unref(t)("tk.myCard.avatarAlt")
                    }, null, 8, _hoisted_138)) : createCommentVNode("v-if", true)
                  ],
                  2
                  /* CLASS */
                ),
                createBaseVNode("div", {
                  class: normalizeClass(unref(ns4).e("blogger")),
                  "aria-label": unref(t)("tk.myCard.bloggerLabel")
                }, [
                  createBaseVNode(
                    "h3",
                    _hoisted_320,
                    toDisplayString(unref(blogger).name),
                    1
                    /* TEXT */
                  ),
                  createBaseVNode(
                    "span",
                    _hoisted_419,
                    toDisplayString(unref(blogger).slogan),
                    1
                    /* TEXT */
                  )
                ], 10, _hoisted_230)
              ],
              2
              /* CLASS */
            )
          ]),
          renderSlot(_ctx.$slots, "teek-home-card-my-screen-after")
        ],
        64
        /* STABLE_FRAGMENT */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/BodyBgImage/src/index.vue2.mjs
import { withBase as withBase18 } from "vitepress";
var _hoisted_139 = {
  key: 0,
  class: "mask"
};
var _sfc_main50 = defineComponent({
  ...{ name: "BodyBgImage" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("body-bg-image");
    const { getTeekConfigRef } = useTeekConfig();
    const bodyBgImgConfig = getTeekConfigRef("bodyBgImg", {
      imgSrc: void 0,
      imgOpacity: 1,
      imgInterval: 15e3,
      imgShuffle: false,
      mask: false,
      maskBg: "rgba(0, 0, 0, 0.2)"
    });
    const dataArray = computed(() => [bodyBgImgConfig.value.imgSrc || []].flat().map((item) => item && withBase18(item)));
    const {
      data: imageSrc,
      start,
      index: index2
    } = useSwitchData(dataArray, {
      timeout: bodyBgImgConfig.value.imgInterval,
      shuffle: bodyBgImgConfig.value.imgShuffle,
      onAfterUpdate: () => {
        const nextIndex = (index2.value + 1) % dataArray.value.length;
        const newValue = dataArray.value[nextIndex];
        if (newValue) {
          const img = new Image();
          img.src = newValue;
        }
      }
    });
    onMounted(() => {
      start();
    });
    const getStyle = () => {
      const { imgSrc, imgOpacity, maskBg } = bodyBgImgConfig.value;
      const imgBgVar = ns4.cssVarName("body-bg-img");
      const imgBgOpacityVar = ns4.cssVarName("body-bg-img-opacity");
      const maskBgColorVar = ns4.cssVarName("body-mask-bg-color");
      if (!(imgSrc == null ? void 0 : imgSrc.length)) return { [imgBgVar]: ns4.cssVar("bg-img-default") };
      return {
        [imgBgVar]: `url(${imageSrc.value}) center center / cover no-repeat`,
        [imgBgOpacityVar]: imgOpacity,
        [maskBgColorVar]: isString2(maskBg) ? maskBg : `rgba(0, 0, 0, ${maskBg})`
      };
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b()),
          style: normalizeStyle(getStyle())
        },
        [
          unref(bodyBgImgConfig).mask ? (openBlock(), createElementBlock("div", _hoisted_139)) : createCommentVNode("v-if", true)
        ],
        6
        /* CLASS, STYLE */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/FooterGroup/src/index.vue2.mjs
import "vitepress";
var _hoisted_140 = ["name", "href", "title", "target", "aria-label", "aria-describedby"];
var _hoisted_231 = { class: "sle" };
var _sfc_main51 = defineComponent({
  ...{ name: "FooterGroup" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("footer-group");
    const { getTeekConfigRef } = useTeekConfig();
    const footerGroupConfig = getTeekConfigRef("footerGroup", []);
    return (_ctx, _cache) => {
      return unref(footerGroupConfig).length ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(unref(ns4).b())
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(footerGroupConfig), (group, index2) => {
              return openBlock(), createElementBlock("div", {
                key: (group.title || "") + index2
              }, [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass([unref(ns4).e("title"), "flx-center"])
                  },
                  [
                    group.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                      key: 0,
                      icon: group.icon,
                      style: { "margin-right": "4px" },
                      "aria-hidden": "true"
                    }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
                    createTextVNode(
                      " " + toDisplayString(group.title),
                      1
                      /* TEXT */
                    )
                  ],
                  2
                  /* CLASS */
                ),
                createBaseVNode("ul", null, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(group.links || [], (link, idx) => {
                      return openBlock(), createElementBlock(
                        "li",
                        {
                          key: (link.name || "") + idx,
                          class: normalizeClass([unref(ns4).e("link")])
                        },
                        [
                          link.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                            key: 0,
                            icon: link.icon,
                            style: { "margin-right": "4px" },
                            "aria-hidden": "true"
                          }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
                          createBaseVNode("a", {
                            name: link.name,
                            href: link.link,
                            title: link.name,
                            target: unref(isExternal)(link.link || "") ? "_blank" : "_self",
                            class: "hover-color",
                            "aria-label": link.name,
                            rel: "noopener noreferrer",
                            "aria-describedby": link.name
                          }, [
                            createBaseVNode(
                              "span",
                              _hoisted_231,
                              toDisplayString(link.name),
                              1
                              /* TEXT */
                            ),
                            unref(isExternal)(link.link || "") ? (openBlock(), createBlock(unref(_sfc_main14), {
                              key: 0,
                              icon: unref(externalLinkIcon),
                              class: normalizeClass(unref(ns4).e("link__external-icon")),
                              "aria-hidden": "true"
                            }, null, 8, ["icon", "class"])) : createCommentVNode("v-if", true)
                          ], 8, _hoisted_140)
                        ],
                        2
                        /* CLASS */
                      );
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/FooterInfo/src/index.vue2.mjs
import { withBase as withBase19 } from "vitepress";

// node_modules/vitepress-theme-teek/es/static/img/securityRecord.png.mjs
var securityRecordImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQjSURBVHjaVNNZbFRlGIDh95w525zpdGa6TVtbykBbyiICxQY0AhYTJUCiiYqGqEEiJhKQmBg0ESPeeCGRENEYb4jhBr0gNQrRlCBiSgyLaSlSaKEs3Wemy+xnzuqFYdD/6rt6ku/N9wue55EcPwWArCgIgkx5ZRuYVxsnJ801Z05f3jY1MRnb/HxHV+uSph9RKq4mhkdwbZVgdQ2SHkPTwgj/h1QUWWi8/tfg/hM/XN/Y2zfaZnkSnuRDtLMsXhBOvrJtya/LlrcdMs1Qb1lVRQmSAEDAsU1kxpgamXp3y+azu1esreK9dyRqs9PIjkW6OsLx7lTV1ld/237s8HRV57MbnvO8CA+e9GCQFTk6Mza+4/0P+t9a9VSEI3uyTH/eR27aB2Ed31Q/Hx1sI6BHOPT13c5Frd0HW9p3HPUQEwAigJW9RDp+bstrOy981nVGLN/7RpHUV70YfXnEAtjxFPasxPDBQXatjzNTdOQXtg983H/51AFFy1KCIg2bNIdC+8270NwmUmelsXqSqHkDK5PDl8iCW0QcnEW+lqCjvcjQuMZ4YnQRTkotQUZu4GkjcfZNv19G011kXw4vayNYNvqCCvSVTciOgABgeuhBGwhgz5zbkI2ff7HUqJiNR2QktbbSYnBYYqbMT/ilKI4SIbT/GcRylbnvLmJ2X8N7tJ7rR8OE/BbliqEYea81WIotmOs02WFpc55Lf0f5/mSI3dsamOgxSX7ZjaALuBmB6M6FnB+S+POCwmOLk1QFFAqZyQWl1YrpiRZJLvDkygyC5NJ1XCax7xYNiTQVEYVIuUulayIcGeLkpw6WK7GuPY/fb2CkhleXIFFe8XPGaKBj9QxLW1Ik0bg8EuT2zRCJYZvZIYepe0EGbvi4bQUJVZhs2phADFYj+df0lBqJUnaekS4SUHXe3jrOnoE2PhSewHfRpfZGgcryIvfHdQruQlLo7Ns6QizqkJ31CIUlqwQJXuWUpDXj6qOsW32HT3YNImll9FwJsb4jyaLmWQ4fa6a+2sQw0ry8YZSiHcPxxXBtMfCv4XkUCrfliWs/fTE31rtTVfv9vsIorvQIniMhqXM4popVcJFVMHMpfMEaLPdxR1Tnna1b1vl6tGntpAjgCTNWONZyIFBR8Ydtr6EgrCI3VySfzZPLBDHyIq5gkpmzcOUmTGMF+bh7M9LYulfWzMmHBzk7Fpq9deWEYxjrtaCMXjWfstp6BCGNXZzBdYqYhogWqkMum4+oBVD0YnP63u/fFqbv1D+M7VSlBbmmK5uYaLYLYwslfwFVAyXQiOfcx3XyyGIM8DDn0lgWyGokHogu/0UJxpL/+f2e569s/CZQZ53OpzJr0+NXludUfb5jVdf7VUGXJUPIZast1S9PeII6jFDT5xMjFwO1S4c8zwTgnwEAxufYSzA67PMAAAAASUVORK5CYII=";

// node_modules/vitepress-theme-teek/es/components/theme/FooterInfo/src/index.vue2.mjs
var _hoisted_141 = ["aria-label"];
var _hoisted_232 = ["aria-label"];
var _hoisted_321 = ["href", "title", "aria-label"];
var _hoisted_420 = { key: 1 };
var _hoisted_512 = ["innerHTML"];
var _hoisted_69 = ["aria-label"];
var _hoisted_77 = ["href", "aria-label"];
var _hoisted_86 = { key: 2 };
var _hoisted_95 = ["innerHTML"];
var _hoisted_102 = ["innerHTML"];
var _sfc_main52 = defineComponent({
  ...{ name: "FooterInfo" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("footer-info");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const footerInfo = getTeekConfigRef("footerInfo", {});
    const social = getTeekConfigRef("social", []);
    const footerData = computed(() => {
      const { theme = {}, copyright = {}, icpRecord, securityRecord } = footerInfo.value || {};
      const data = [];
      if (theme.show !== false) {
        data.push({
          name: "Theme By Teek",
          icon: themeIcon,
          link: "https://github.com/Kele-Bingtang/vitepress-theme-teek",
          // 可覆盖上面的配置项
          ...theme
        });
      }
      const { show = true, createYear = "", suffix = "" } = copyright;
      if (show) {
        data.push({
          name: `Copyright ${createYear ? `${createYear}-` : ""}${(/* @__PURE__ */ new Date()).getFullYear()} ${suffix}`,
          icon: copyrightIcon,
          ...copyright
        });
      }
      if (icpRecord) data.push({ icon: icpRecordIcon, ...icpRecord });
      if (securityRecord) {
        data.push({ icon: securityRecordImg, iconType: "img", imgAlt: "Security Record", ...securityRecord });
      }
      return data;
    });
    return (_ctx, _cache) => {
      return unref(footerInfo) || unref(social).length ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass([unref(ns4).b(), unref(ns4).joinNamespace("wallpaper-outside")]),
        role: "contentinfo",
        "aria-label": unref(t)("tk.footerInfo.label")
      }, [
        unref(social).length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`${unref(ns4).e("icons")} flx-center`),
          role: "group",
          "aria-label": unref(t)("tk.footerInfo.socialLabel")
        }, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(unref(social), (item, index2) => {
              return openBlock(), createElementBlock("a", {
                key: index2,
                href: item.link && unref(withBase19)(item.link),
                title: item.name,
                target: "_blank",
                "aria-label": item.name
              }, [
                item.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                  key: 0,
                  iconType: item.iconType,
                  icon: item.icon,
                  size: "20px",
                  color: "var(--vp-c-text-2)",
                  hover: "",
                  imgAlt: item.imgAlt,
                  "aria-hidden": "true"
                }, null, 8, ["iconType", "icon", "imgAlt"])) : item.name ? (openBlock(), createElementBlock(
                  "span",
                  _hoisted_420,
                  toDisplayString(item.name),
                  1
                  /* TEXT */
                )) : createCommentVNode("v-if", true)
              ], 8, _hoisted_321);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_232)) : createCommentVNode("v-if", true),
        unref(footerInfo) ? (openBlock(), createElementBlock(
          Fragment,
          { key: 1 },
          [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList([unref(footerInfo).topMessage || []].flat(), (message2, index2) => {
                return openBlock(), createElementBlock("p", {
                  key: index2,
                  innerHTML: message2
                }, null, 8, _hoisted_512);
              }),
              128
              /* KEYED_FRAGMENT */
            )),
            createBaseVNode("div", {
              class: normalizeClass(`${unref(ns4).e("list")} flx-wrap-justify-center`),
              role: "list",
              "aria-label": unref(t)("tk.footerInfo.infoLabel")
            }, [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(footerData.value, (item) => {
                  return openBlock(), createElementBlock(
                    "div",
                    {
                      key: item.name,
                      class: normalizeClass(`${unref(ns4).e("list__item")} flx-align-center`),
                      role: "listitem"
                    },
                    [
                      item.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                        key: 0,
                        iconType: item.iconType,
                        icon: item.icon,
                        size: "16px",
                        color: "var(--vp-c-text-2)",
                        imgAlt: item.imgAlt,
                        "aria-hidden": "true"
                      }, null, 8, ["iconType", "icon", "imgAlt"])) : createCommentVNode("v-if", true),
                      item.link ? (openBlock(), createElementBlock("a", {
                        key: 1,
                        href: unref(withBase19)(item.link),
                        target: "_blank",
                        "aria-label": item.name
                      }, toDisplayString(item.name), 9, _hoisted_77)) : (openBlock(), createElementBlock(
                        "span",
                        _hoisted_86,
                        toDisplayString(item.name),
                        1
                        /* TEXT */
                      ))
                    ],
                    2
                    /* CLASS */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              )),
              unref(footerInfo).customHtml ? (openBlock(), createElementBlock("span", {
                key: 0,
                innerHTML: unref(footerInfo).customHtml
              }, null, 8, _hoisted_95)) : createCommentVNode("v-if", true)
            ], 10, _hoisted_69),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList([unref(footerInfo).bottomMessage || []].flat(), (message2, index2) => {
                return openBlock(), createElementBlock("p", {
                  key: index2,
                  innerHTML: message2
                }, null, 8, _hoisted_102);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ],
          64
          /* STABLE_FRAGMENT */
        )) : createCommentVNode("v-if", true)
      ], 10, _hoisted_141)) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleImagePreview/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/ImageViewer/src/ImageViewer.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/FocusTrap/src/useEscapeKeydown.mjs
var registeredEscapeHandlers = [];
var cachedHandler = (event) => {
  if (event.code === "Escape") {
    registeredEscapeHandlers.forEach((registeredHandler) => registeredHandler(event));
  }
};
var useEscapeKeydown = (handler) => {
  onMounted(() => {
    if (registeredEscapeHandlers.length === 0) document.addEventListener("keydown", cachedHandler);
    if (isClient) registeredEscapeHandlers.push(handler);
  });
  onBeforeUnmount(() => {
    registeredEscapeHandlers = registeredEscapeHandlers.filter((registeredHandler) => registeredHandler !== handler);
    if (registeredEscapeHandlers.length === 0) {
      if (isClient) document.removeEventListener("keydown", cachedHandler);
    }
  });
};

// node_modules/vitepress-theme-teek/es/components/common/FocusTrap/src/tokens.mjs
var FOCUS_AFTER_TRAPPED = "focus-trap.focus-after-trapped";
var FOCUS_AFTER_RELEASED = "focus-trap.focus-after-released";
var FOCUSOUT_PREVENTED = "focus-trap.focusout-prevented";
var FOCUS_AFTER_TRAPPED_OPTS = {
  cancelable: true,
  bubbles: false
};
var FOCUSOUT_PREVENTED_OPTS = {
  cancelable: true,
  bubbles: false
};
var ON_TRAP_FOCUS_EVT = "focusAfterTrapped";
var ON_RELEASE_FOCUS_EVT = "focusAfterReleased";
var FOCUS_TRAP_INJECTION_KEY = Symbol("focusTrap");

// node_modules/vitepress-theme-teek/es/components/common/FocusTrap/src/utils.mjs
var focusReason = ref();
var lastUserFocusTimestamp = ref(0);
var lastAutomatedFocusTimestamp = ref(0);
var focusReasonUserCount = 0;
var obtainAllFocusableElements = (element) => {
  const nodes = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) => {
      const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
      if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
      return node.tabIndex >= 0 || node === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
};
var getVisibleElement = (elements, container) => {
  for (const element of elements) {
    if (!isHidden(element, container)) return element;
  }
};
var isHidden = (element, container) => {
  if (false) return false;
  if (getComputedStyle(element).visibility === "hidden") return true;
  while (element) {
    if (container && element === container) return false;
    if (getComputedStyle(element).display === "none") return true;
    element = element.parentElement;
  }
  return false;
};
var getEdges = (container) => {
  const focusable = obtainAllFocusableElements(container);
  const first = getVisibleElement(focusable, container);
  const last = getVisibleElement(focusable.reverse(), container);
  return [first, last];
};
var isSelectable = (element) => {
  return element instanceof HTMLInputElement && "select" in element;
};
var tryFocus = (element, shouldSelect) => {
  if (element && element.focus) {
    const prevFocusedElement = document.activeElement;
    let cleanup = false;
    if (isElement(element) && !isFocusable(element) && !element.getAttribute("tabindex")) {
      element.setAttribute("tabindex", "-1");
      cleanup = true;
    }
    element.focus({ preventScroll: true });
    lastAutomatedFocusTimestamp.value = window.performance.now();
    if (element !== prevFocusedElement && isSelectable(element) && shouldSelect) {
      element.select();
    }
    if (isElement(element) && cleanup) {
      element.removeAttribute("tabindex");
    }
  }
};
function removeFromStack(list, item) {
  const copy = [...list];
  const idx = list.indexOf(item);
  if (idx !== -1) {
    copy.splice(idx, 1);
  }
  return copy;
}
var createFocusableStack = () => {
  let stack2 = [];
  const push = (layer) => {
    const currentLayer = stack2[0];
    if (currentLayer && layer !== currentLayer) {
      currentLayer.pause();
    }
    stack2 = removeFromStack(stack2, layer);
    stack2.unshift(layer);
  };
  const remove = (layer) => {
    var _a, _b;
    stack2 = removeFromStack(stack2, layer);
    (_b = (_a = stack2[0]) == null ? void 0 : _a.resume) == null ? void 0 : _b.call(_a);
  };
  return {
    push,
    remove
  };
};
var focusFirstDescendant = (elements, shouldSelect = false) => {
  const prevFocusedElement = document.activeElement;
  for (const element of elements) {
    tryFocus(element, shouldSelect);
    if (document.activeElement !== prevFocusedElement) return;
  }
};
var focusableStack = createFocusableStack();
var isFocusCausedByUserEvent = () => {
  return lastUserFocusTimestamp.value > lastAutomatedFocusTimestamp.value;
};
var notifyFocusReasonPointer = () => {
  focusReason.value = "pointer";
  lastUserFocusTimestamp.value = window.performance.now();
};
var notifyFocusReasonKeydown = () => {
  focusReason.value = "keyboard";
  lastUserFocusTimestamp.value = window.performance.now();
};
var useFocusReason = () => {
  onMounted(() => {
    if (focusReasonUserCount === 0) {
      document.addEventListener("mousedown", notifyFocusReasonPointer);
      document.addEventListener("touchstart", notifyFocusReasonPointer);
      document.addEventListener("keydown", notifyFocusReasonKeydown);
    }
    focusReasonUserCount++;
  });
  onBeforeUnmount(() => {
    focusReasonUserCount--;
    if (focusReasonUserCount <= 0) {
      document.removeEventListener("mousedown", notifyFocusReasonPointer);
      document.removeEventListener("touchstart", notifyFocusReasonPointer);
      document.removeEventListener("keydown", notifyFocusReasonKeydown);
    }
  });
  return {
    focusReason,
    lastUserFocusTimestamp,
    lastAutomatedFocusTimestamp
  };
};
var createFocusOutPreventedEvent = (detail) => {
  return new CustomEvent(FOCUSOUT_PREVENTED, {
    ...FOCUSOUT_PREVENTED_OPTS,
    detail
  });
};

// node_modules/vitepress-theme-teek/es/components/common/FocusTrap/src/index.vue2.mjs
var _sfc_main53 = defineComponent({
  name: "FocusTrap",
  inheritAttrs: false,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [ON_TRAP_FOCUS_EVT, ON_RELEASE_FOCUS_EVT, "focusin", "focusout", "focusout-prevented", "release-requested"],
  setup(props, { emit }) {
    const forwardRef = ref();
    let lastFocusBeforeTrapped;
    let lastFocusAfterTrapped;
    const { focusReason: focusReason2 } = useFocusReason();
    useEscapeKeydown((event) => {
      if (props.trapped && !focusLayer.paused) emit("release-requested", event);
    });
    const focusLayer = {
      paused: false,
      pause() {
        this.paused = true;
      },
      resume() {
        this.paused = false;
      }
    };
    const onKeydown = (e) => {
      if (!props.loop && !props.trapped) return;
      if (focusLayer.paused) return;
      const { code, altKey, ctrlKey, metaKey, currentTarget, shiftKey } = e;
      const { loop } = props;
      const isTabbing = code === "Tab" && !altKey && !ctrlKey && !metaKey;
      const currentFocusingEl = document.activeElement;
      if (isTabbing && currentFocusingEl) {
        const container = currentTarget;
        const [first, last] = getEdges(container);
        const isTabbable = first && last;
        if (!isTabbable) {
          if (currentFocusingEl === container) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) e.preventDefault();
          }
        } else {
          if (!shiftKey && currentFocusingEl === last) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop) tryFocus(first, true);
            }
          } else if (shiftKey && [first, container].includes(currentFocusingEl)) {
            const focusoutPreventedEvent = createFocusOutPreventedEvent({
              focusReason: focusReason2.value
            });
            emit("focusout-prevented", focusoutPreventedEvent);
            if (!focusoutPreventedEvent.defaultPrevented) {
              e.preventDefault();
              if (loop) tryFocus(last, true);
            }
          }
        }
      }
    };
    provide(FOCUS_TRAP_INJECTION_KEY, {
      focusTrapRef: forwardRef,
      onKeydown
    });
    watch(
      () => props.focusTrapEl,
      (focusTrapEl) => {
        if (focusTrapEl) forwardRef.value = focusTrapEl;
      },
      { immediate: true }
    );
    watch([forwardRef], ([forwardRef2], [oldForwardRef]) => {
      if (forwardRef2) {
        forwardRef2.addEventListener("keydown", onKeydown);
        forwardRef2.addEventListener("focusin", onFocusIn);
        forwardRef2.addEventListener("focusout", onFocusOut);
      }
      if (oldForwardRef) {
        oldForwardRef.removeEventListener("keydown", onKeydown);
        oldForwardRef.removeEventListener("focusin", onFocusIn);
        oldForwardRef.removeEventListener("focusout", onFocusOut);
      }
    });
    const trapOnFocus = (e) => {
      emit(ON_TRAP_FOCUS_EVT, e);
    };
    const releaseOnFocus = (e) => emit(ON_RELEASE_FOCUS_EVT, e);
    const onFocusIn = (e) => {
      const trapContainer = forwardRef.value;
      if (!trapContainer) return;
      const target = e.target;
      const relatedTarget = e.relatedTarget;
      const isFocusedInTrap = target && trapContainer.contains(target);
      if (!props.trapped) {
        const isPrevFocusedInTrap = relatedTarget && trapContainer.contains(relatedTarget);
        if (!isPrevFocusedInTrap) lastFocusBeforeTrapped = relatedTarget;
      }
      if (isFocusedInTrap) emit("focusin", e);
      if (focusLayer.paused) return;
      if (props.trapped) {
        if (isFocusedInTrap) lastFocusAfterTrapped = target;
        else tryFocus(lastFocusAfterTrapped, true);
      }
    };
    const onFocusOut = (e) => {
      const trapContainer = forwardRef.value;
      if (focusLayer.paused || !trapContainer) return;
      if (props.trapped) {
        const relatedTarget = e.relatedTarget;
        if (!relatedTarget && !trapContainer.contains(relatedTarget)) {
          setTimeout(() => {
            if (!focusLayer.paused && props.trapped) {
              const focusoutPreventedEvent = createFocusOutPreventedEvent({
                focusReason: focusReason2.value
              });
              emit("focusout-prevented", focusoutPreventedEvent);
              if (!focusoutPreventedEvent.defaultPrevented) {
                tryFocus(lastFocusAfterTrapped, true);
              }
            }
          }, 0);
        }
      } else {
        const target = e.target;
        const isFocusedInTrap = target && trapContainer.contains(target);
        if (!isFocusedInTrap) emit("focusout", e);
      }
    };
    async function startTrap() {
      await nextTick();
      const trapContainer = forwardRef.value;
      if (trapContainer) {
        focusableStack.push(focusLayer);
        const prevFocusedElement = trapContainer.contains(document.activeElement) ? lastFocusBeforeTrapped : document.activeElement;
        lastFocusBeforeTrapped = prevFocusedElement;
        const isPrevFocusContained = trapContainer.contains(prevFocusedElement);
        if (!isPrevFocusContained) {
          const focusEvent = new Event(FOCUS_AFTER_TRAPPED, FOCUS_AFTER_TRAPPED_OPTS);
          trapContainer.addEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
          trapContainer.dispatchEvent(focusEvent);
          if (!focusEvent.defaultPrevented) {
            nextTick(() => {
              let focusStartEl = props.focusStartEl;
              if (!isString2(focusStartEl)) {
                tryFocus(focusStartEl);
                if (document.activeElement !== focusStartEl) focusStartEl = "first";
              }
              if (focusStartEl === "first") focusFirstDescendant(obtainAllFocusableElements(trapContainer), true);
              if (document.activeElement === prevFocusedElement || focusStartEl === "container") {
                tryFocus(trapContainer);
              }
            });
          }
        }
      }
    }
    function stopTrap() {
      const trapContainer = forwardRef.value;
      if (trapContainer) {
        trapContainer.removeEventListener(FOCUS_AFTER_TRAPPED, trapOnFocus);
        const releasedEvent = new CustomEvent(FOCUS_AFTER_RELEASED, {
          ...FOCUS_AFTER_TRAPPED_OPTS,
          detail: {
            focusReason: focusReason2.value
          }
        });
        trapContainer.addEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        trapContainer.dispatchEvent(releasedEvent);
        if (!releasedEvent.defaultPrevented && (focusReason2.value === "keyboard" || !isFocusCausedByUserEvent() || trapContainer.contains(document.activeElement))) {
          tryFocus(lastFocusBeforeTrapped ?? document.body);
        }
        trapContainer.removeEventListener(FOCUS_AFTER_RELEASED, releaseOnFocus);
        focusableStack.remove(focusLayer);
      }
    }
    onMounted(() => {
      if (props.trapped) startTrap();
      watch(
        () => props.trapped,
        (trapped) => {
          if (trapped) startTrap();
          else stopTrap();
        }
      );
    });
    onBeforeUnmount(() => {
      if (props.trapped) stopTrap();
      if (forwardRef.value) {
        forwardRef.value.removeEventListener("keydown", onKeydown);
        forwardRef.value.removeEventListener("focusin", onFocusIn);
        forwardRef.value.removeEventListener("focusout", onFocusOut);
        forwardRef.value = void 0;
      }
    });
    return {
      onKeydown
    };
  }
});

// node_modules/vitepress-theme-teek/es/_virtual/_plugin-vue_export-helper.mjs
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// node_modules/vitepress-theme-teek/es/components/common/FocusTrap/src/index.vue.mjs
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default", { handleKeydown: _ctx.onKeydown });
}
var TkFocusTrap = _export_sfc(_sfc_main53, [["render", _sfc_render]]);

// node_modules/vitepress-theme-teek/es/components/common/ImageViewer/src/ImageViewer.vue2.mjs
var _hoisted_142 = ["src", "crossorigin"];
var _sfc_main54 = defineComponent({
  ...{ name: "ImageViewer" },
  __name: "ImageViewer",
  props: {
    urlList: { default: () => [] },
    zIndex: {},
    initialIndex: { default: 0 },
    infinite: { type: Boolean, default: true },
    hideOnClickModal: { type: Boolean, default: false },
    teleported: { type: Boolean },
    closeOnPressEscape: { type: Boolean, default: true },
    zoomRate: { default: 1.2 },
    minScale: { default: 0.2 },
    maxScale: { default: 7 },
    showProgress: { type: Boolean, default: false },
    crossorigin: {}
  },
  emits: ["close", "switch", "rotate"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: fullscreenIcon
      },
      ORIGINAL: {
        name: "original",
        icon: scaleToOriginalIcon
      }
    };
    const props = __props;
    const emit = __emit;
    let prevOverflow = "";
    const ns4 = useNamespace("image-viewer");
    const { t } = useLocale();
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRefs = ref([]);
    const scopeEventListener = effectScope();
    const loading = ref(true);
    const activeIndex = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform2 = ref({
      scale: 1,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const zIndex2 = ref(props.zIndex ?? nextZIndex());
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => activeIndex.value === 0);
    const isLast = computed(() => activeIndex.value === props.urlList.length - 1);
    const currentImg = computed(() => props.urlList[activeIndex.value]);
    const arrowPrevKls = computed(() => [ns4.e("btn"), ns4.e("prev"), ns4.is("disabled", !props.infinite && isFirst.value)]);
    const arrowNextKls = computed(() => [ns4.e("btn"), ns4.e("next"), ns4.is("disabled", !props.infinite && isLast.value)]);
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform2.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      const radian = deg * Math.PI / 180;
      const cosRadian = Math.cos(radian);
      const sinRadian = Math.sin(radian);
      translateX = translateX * cosRadian + translateY * sinRadian;
      translateY = translateY * cosRadian - offsetX / scale * sinRadian;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    const progress = computed(() => `${activeIndex.value + 1} / ${props.urlList.length}`);
    const hide = () => {
      unregisterEventListener();
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      emit("close");
    };
    const registerEventListener = () => {
      const keydownHandler = useDebounce((e) => {
        switch (e.code) {
          case "Escape":
            props.closeOnPressEscape && hide();
            break;
          case "Space":
            toggleMode();
            break;
          case "ArrowLeft":
            prev();
            break;
          case "ArrowUp":
            handleActions("zoomIn");
            break;
          case "ArrowRight":
            next();
            break;
          case "ArrowDown":
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = useDebounce((e) => {
        const delta = e.deltaY || e.deltaX;
        handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
          zoomRate: props.zoomRate,
          enableTransition: false
        });
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(document, "wheel", mousewheelHandler);
      });
    };
    const unregisterEventListener = () => {
      scopeEventListener.stop();
    };
    const handleImgLoad = () => {
      loading.value = false;
    };
    const handleImgError = (e) => {
      loading.value = false;
      e.target.alt = t("tk.image.error");
    };
    const handleMouseDown = (e) => {
      if (loading.value || e.button !== 0 || !wrapper.value) return;
      transform2.value.enableTransition = false;
      const { offsetX, offsetY } = transform2.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = useDebounce((ev) => {
        transform2.value = {
          ...transform2.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeDragHandler = () => {
        document.removeEventListener("mousemove", dragHandler);
        document.removeEventListener("mouseup", removeDragHandler);
      };
      document.addEventListener("mousemove", dragHandler);
      document.addEventListener("mouseup", removeDragHandler);
      e.preventDefault();
    };
    const reset2 = () => {
      transform2.value = {
        scale: 1,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    };
    const toggleMode = () => {
      if (loading.value) return;
      const modeNames = Object.keys(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset2();
    };
    const setActiveItem = (index2) => {
      const len = props.urlList.length;
      activeIndex.value = (index2 + len) % len;
    };
    const prev = () => {
      if (isFirst.value && !props.infinite) return;
      setActiveItem(activeIndex.value - 1);
    };
    const next = () => {
      if (isLast.value && !props.infinite) return;
      setActiveItem(activeIndex.value + 1);
    };
    const handleActions = (action, options = {}) => {
      if (loading.value) return;
      const { minScale, maxScale } = props;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: props.zoomRate,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform2.value.scale > minScale) {
            transform2.value.scale = Number.parseFloat((transform2.value.scale / zoomRate).toFixed(3));
          }
          break;
        case "zoomIn":
          if (transform2.value.scale < maxScale) {
            transform2.value.scale = Number.parseFloat((transform2.value.scale * zoomRate).toFixed(3));
          }
          break;
        case "clockwise":
          transform2.value.deg += rotateDeg;
          emit("rotate", transform2.value.deg);
          break;
        case "anticlockwise":
          transform2.value.deg -= rotateDeg;
          emit("rotate", transform2.value.deg);
          break;
      }
      transform2.value.enableTransition = enableTransition;
    };
    const onFocusoutPrevented = (event) => {
      var _a;
      if (((_a = event.detail) == null ? void 0 : _a.focusReason) === "pointer") {
        event.preventDefault();
      }
    };
    const onCloseRequested = () => {
      if (props.closeOnPressEscape) {
        hide();
      }
    };
    const wheelHandler = (e) => {
      if (!e.ctrlKey) return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    };
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRefs.value[0];
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(activeIndex, (val) => {
      reset2();
      emit("switch", val);
    });
    registerEventListener();
    const stopWheelListener = useEventListener(document, "wheel", wheelHandler, { passive: false });
    onMounted(() => {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    });
    __expose({
      /**
       * 手动切换图片
       */
      setActiveItem
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, {
        disabled: !_ctx.teleported,
        to: "body"
      }, [
        createVNode(Transition, {
          name: "viewer-fade",
          appear: ""
        }, {
          default: withCtx(() => [
            createBaseVNode(
              "div",
              {
                ref_key: "wrapper",
                ref: wrapper,
                tabindex: -1,
                class: normalizeClass(unref(ns4).e("wrapper")),
                style: normalizeStyle({ zIndex: zIndex2.value })
              },
              [
                createVNode(unref(TkFocusTrap), {
                  loop: "",
                  trapped: "",
                  "focus-trap-el": wrapper.value,
                  "focus-start-el": "container",
                  onFocusoutPrevented,
                  onReleaseRequested: onCloseRequested
                }, {
                  default: withCtx(() => [
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(ns4).e("mask")),
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
                      },
                      null,
                      2
                      /* CLASS */
                    ),
                    createCommentVNode(" CLOSE "),
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass([unref(ns4).e("btn"), unref(ns4).e("close")]),
                        onClick: hide
                      },
                      [
                        createVNode(unref(_sfc_main14), { icon: unref(closeIcon) }, null, 8, ["icon"])
                      ],
                      2
                      /* CLASS */
                    ),
                    createCommentVNode(" ARROW "),
                    !isSingle.value ? (openBlock(), createElementBlock(
                      Fragment,
                      { key: 0 },
                      [
                        createBaseVNode(
                          "span",
                          {
                            class: normalizeClass(arrowPrevKls.value),
                            onClick: prev
                          },
                          [
                            createVNode(unref(_sfc_main14), { icon: unref(arrowLeftIcon) }, null, 8, ["icon"])
                          ],
                          2
                          /* CLASS */
                        ),
                        createBaseVNode(
                          "span",
                          {
                            class: normalizeClass(arrowNextKls.value),
                            onClick: next
                          },
                          [
                            createVNode(unref(_sfc_main14), { icon: unref(arrowRightIcon) }, null, 8, ["icon"])
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      64
                      /* STABLE_FRAGMENT */
                    )) : createCommentVNode("v-if", true),
                    _ctx.$slots.progress || _ctx.showProgress ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 1,
                        class: normalizeClass([unref(ns4).e("btn"), unref(ns4).e("progress")])
                      },
                      [
                        renderSlot(_ctx.$slots, "progress", {
                          activeIndex: activeIndex.value,
                          total: _ctx.urlList.length
                        }, () => [
                          createTextVNode(
                            toDisplayString(progress.value),
                            1
                            /* TEXT */
                          )
                        ])
                      ],
                      2
                      /* CLASS */
                    )) : createCommentVNode("v-if", true),
                    createCommentVNode(" ACTIONS "),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass([unref(ns4).e("btn"), unref(ns4).e("actions")])
                      },
                      [
                        createBaseVNode(
                          "div",
                          {
                            class: normalizeClass(unref(ns4).e("actions__inner"))
                          },
                          [
                            renderSlot(_ctx.$slots, "toolbar", {
                              actions: handleActions,
                              prev,
                              next,
                              reset: toggleMode,
                              activeIndex: activeIndex.value,
                              setActiveItem
                            }, () => [
                              createVNode(unref(_sfc_main14), {
                                icon: unref(zoomOutIcon),
                                onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                              }, null, 8, ["icon"]),
                              createVNode(unref(_sfc_main14), {
                                icon: unref(zoomInIcon),
                                onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                              }, null, 8, ["icon"]),
                              createBaseVNode(
                                "i",
                                {
                                  class: normalizeClass(unref(ns4).e("actions__divider"))
                                },
                                null,
                                2
                                /* CLASS */
                              ),
                              createVNode(unref(_sfc_main14), {
                                icon: mode.value.icon,
                                onClick: toggleMode
                              }, null, 8, ["icon"]),
                              createBaseVNode(
                                "i",
                                {
                                  class: normalizeClass(unref(ns4).e("actions__divider"))
                                },
                                null,
                                2
                                /* CLASS */
                              ),
                              createVNode(unref(_sfc_main14), {
                                icon: unref(refreshLeftIcon),
                                onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                              }, null, 8, ["icon"]),
                              createVNode(unref(_sfc_main14), {
                                icon: unref(refreshRightIcon),
                                onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                              }, null, 8, ["icon"])
                            ])
                          ],
                          2
                          /* CLASS */
                        )
                      ],
                      2
                      /* CLASS */
                    ),
                    createCommentVNode(" CANVAS "),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(ns4).e("canvas"))
                      },
                      [
                        (openBlock(true), createElementBlock(
                          Fragment,
                          null,
                          renderList(_ctx.urlList, (url, i) => {
                            return withDirectives((openBlock(), createElementBlock("img", {
                              ref_for: true,
                              ref: (el) => imgRefs.value[i] = el,
                              key: url,
                              src: url,
                              style: normalizeStyle(imgStyle.value),
                              class: normalizeClass(unref(ns4).e("img")),
                              crossorigin: _ctx.crossorigin,
                              onLoad: handleImgLoad,
                              onError: handleImgError,
                              onMousedown: handleMouseDown
                            }, null, 46, _hoisted_142)), [
                              [vShow, i === activeIndex.value]
                            ]);
                          }),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ],
                      2
                      /* CLASS */
                    ),
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                  /* FORWARDED */
                }, 8, ["focus-trap-el"])
              ],
              6
              /* CLASS, STYLE */
            )
          ]),
          _: 3
          /* FORWARDED */
        })
      ], 8, ["disabled"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/ImageViewer/src/index.vue2.mjs
var _sfc_main55 = defineComponent({
  ...{ name: "ImageViewerControl" },
  __name: "index",
  props: {
    "modelValue": { default: false },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const visible = useModel(__props, "modelValue");
    const close = () => {
      document.body.style.overflow = "";
      visible.value = false;
    };
    return (_ctx, _cache) => {
      return visible.value ? (openBlock(), createBlock(
        _sfc_main54,
        mergeProps({ key: 0 }, _ctx.$attrs, { onClose: close }),
        null,
        16
        /* FULL_PROPS */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/ImageViewer/index.mjs
var instance = null;
var createImageViewer = (options) => {
  if (typeof window === "undefined") return;
  const { modelValue = true } = options;
  options.modelValue = modelValue;
  document.body.style.overflow = "hidden";
  const container = document.createElement("div");
  document.body.appendChild(container);
  instance = createVNode(_sfc_main55, options);
  render(instance, container);
};

// node_modules/vitepress-theme-teek/es/components/theme/ArticleImagePreview/src/index.vue2.mjs
var _sfc_main56 = defineComponent({
  __name: "index",
  setup(__props) {
    const { getTeekConfig } = useTeekConfig();
    const imageViewer = computed(() => {
      const { imageViewer: imageViewer2 = {} } = getTeekConfig("articleAnalyze", {});
      return imageViewer2;
    });
    const previewImage = (e) => {
      const target = e.target;
      if (target.tagName.toLowerCase() === "img" && !target.className.includes("no-preview")) {
        const imgDoms = target.querySelectorAll(".content-container .main img");
        const imgs = Array.from(imgDoms);
        const urlList = imgs.map((el) => el.src);
        let initialIndex = imgs.findIndex((el) => el === target);
        const url = target.getAttribute("src");
        if (initialIndex === -1 && url) {
          urlList.push(url);
          initialIndex = urlList.length - 1;
        }
        createImageViewer({ infinite: false, ...imageViewer.value, urlList, initialIndex });
      }
    };
    useEventListener(() => document.querySelector("#VPContent"), "click", previewImage);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAnalyze/src/index.vue2.mjs
import { useData as useData20 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ArticleBreadcrumb/src/index.vue2.mjs
import { useData as useData19, withBase as withBase20 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Breadcrumb/src/Breadcrumb.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Breadcrumb/src/breadcrumb.mjs
var breadcrumbKey = Symbol("breadcrumbKey");

// node_modules/vitepress-theme-teek/es/components/common/Breadcrumb/src/namespace.mjs
import "vitepress";
var ns = useNamespace("breadcrumb");

// node_modules/vitepress-theme-teek/es/components/common/Breadcrumb/src/Breadcrumb.vue2.mjs
var _hoisted_143 = ["aria-label"];
var _sfc_main57 = defineComponent({
  ...{ name: "Breadcrumb" },
  __name: "Breadcrumb",
  props: {
    separator: { default: "/" }
  },
  setup(__props) {
    const { t } = useLocale();
    const breadcrumb = ref();
    provide(breadcrumbKey, { separator: __props.separator });
    onMounted(() => {
      var _a;
      const items = (_a = breadcrumb.value) == null ? void 0 : _a.querySelectorAll(`.${ns.e("item")}`);
      if (items == null ? void 0 : items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        role: "navigation",
        "aria-label": unref(t)("tk.breadcrumb.label")
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_143);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Breadcrumb/src/BreadcrumbItem.vue2.mjs
var _sfc_main58 = defineComponent({
  ...{ name: "BreadcrumbItem" },
  __name: "BreadcrumbItem",
  setup(__props) {
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(unref(ns).e("item"))
        },
        [
          createBaseVNode(
            "span",
            {
              ref: "link",
              class: normalizeClass(unref(ns).e("inner")),
              role: "link"
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
            /* CLASS */
          ),
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(ns).e("separator")),
              role: "presentation"
            },
            toDisplayString((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separator),
            3
            /* TEXT, CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleBreadcrumb/src/index.vue2.mjs
var _hoisted_144 = ["aria-label"];
var _hoisted_233 = ["href", "title", "aria-label"];
var _sfc_main59 = defineComponent({
  ...{ name: "ArticleBreadcrumb" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("article-breadcrumb");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const { localeIndex, theme, page } = useData19();
    const breadcrumb = getTeekConfigRef("breadcrumb", {
      enabled: true,
      showCurrentName: false,
      separator: "/",
      homeLabel: t("tk.articleBreadcrumb.home")
    });
    const relativePathArr = computed(() => page.value.relativePath.split("/") || []);
    const breadcrumbList = computed(() => {
      const classifyList = [];
      const relativePathArrConst = relativePathArr.value;
      relativePathArrConst.forEach((item, index2) => {
        var _a, _b, _c;
        const fileName = ((_a = item.replace(/^\d+\./, "").split(".")) == null ? void 0 : _a[0]) || "";
        if ((index2 !== relativePathArrConst.length - 1 || breadcrumb.value.showCurrentName) && fileName !== localeIndex.value) {
          classifyList.push({
            fileName,
            filePath: ((_c = (_b = theme.value.catalogues) == null ? void 0 : _b.inv[item]) == null ? void 0 : _c.filePath) || ""
          });
        }
      });
      return classifyList;
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns4).b()}`),
        role: "navigation",
        "aria-label": unref(t)("tk.articleBreadcrumb.label")
      }, [
        ((_a = unref(breadcrumb)) == null ? void 0 : _a.enabled) ? (openBlock(), createBlock(unref(_sfc_main57), {
          key: 0,
          separator: unref(breadcrumb).separator
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main58), null, {
              default: withCtx(() => [
                createBaseVNode("a", {
                  href: unref(withBase20)("/"),
                  title: unref(breadcrumb).homeLabel,
                  class: "home hover-color",
                  "aria-label": unref(breadcrumb).homeLabel
                }, [
                  createVNode(unref(_sfc_main14), {
                    icon: unref(houseIcon),
                    "aria-hidden": "true"
                  }, null, 8, ["icon"])
                ], 8, _hoisted_233)
              ]),
              _: 1
              /* STABLE */
            }),
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(breadcrumbList.value, (item, index2) => {
                return openBlock(), createBlock(
                  unref(_sfc_main58),
                  { key: index2 },
                  {
                    default: withCtx(() => [
                      (openBlock(), createBlock(resolveDynamicComponent(item.filePath ? "a" : "span"), {
                        href: item.filePath && unref(withBase20)(`/${item.filePath}`),
                        title: item.fileName,
                        class: normalizeClass([item.filePath ? "hover-color" : ""]),
                        "aria-label": item.fileName
                      }, {
                        default: withCtx(() => [
                          createTextVNode(
                            toDisplayString(item.fileName),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["href", "title", "class", "aria-label"]))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["separator"])) : createCommentVNode("v-if", true)
      ], 10, _hoisted_144);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAnalyze/src/index.vue2.mjs
var _hoisted_145 = ["aria-label"];
var _hoisted_234 = {
  key: 0,
  class: "flx-center"
};
var _hoisted_322 = ["title", "aria-label"];
var _hoisted_421 = {
  key: 1,
  class: "flx-center"
};
var _hoisted_513 = ["title", "aria-label"];
var _hoisted_610 = {
  key: 2,
  class: "flx-center"
};
var _hoisted_78 = ["title", "aria-label"];
var _sfc_main60 = defineComponent({
  ...{ name: "ArticleAnalyze" },
  __name: "index",
  setup(__props) {
    var _a;
    const ns4 = useNamespace("article-analyze");
    const { t } = useLocale();
    const { getTeekConfig, getTeekConfigRef } = useTeekConfig();
    const { theme, frontmatter } = useData20();
    const vpRouter = useVpRouter();
    const { router } = vpRouter;
    const post = computed(() => ({
      author: getTeekConfig("author", {}),
      date: frontmatter.value.date,
      frontmatter: frontmatter.value,
      url: ""
    }));
    const docAnalysisInfo = computed(() => theme.value.docAnalysisInfo || {});
    const pageViewInfo = computed(() => {
      var _a2;
      let pageViewInfo2 = {};
      (_a2 = docAnalysisInfo.value.eachFileWords) == null ? void 0 : _a2.forEach((item) => {
        if (item.fileInfo.relativePath === router.route.data.relativePath) pageViewInfo2 = item;
      });
      return pageViewInfo2;
    });
    const articleConfig = getTeekConfigRef("articleAnalyze", {
      showInfo: true,
      showIcon: true,
      teleport: {}
    });
    const isShowInfo = computed(() => {
      const arr = [articleConfig.value.showInfo].flat();
      if (arr.includes(true) || arr.includes("article")) return true;
      return false;
    });
    const baseInfoRef = ref();
    const teleportInfo = () => {
      var _a2, _b;
      const { selector, position = "after", className = "teleport" } = articleConfig.value.teleport || {};
      const baseInfoRefConst = baseInfoRef.value;
      if (!selector || !baseInfoRefConst) return;
      const docDomContainer = document.querySelector("#VPContent");
      const targetDom = docDomContainer == null ? void 0 : docDomContainer.querySelector(selector);
      (_a2 = targetDom == null ? void 0 : targetDom.parentElement) == null ? void 0 : _a2.querySelectorAll(`.${ns4.e("wrapper")}`).forEach((v) => v.remove());
      baseInfoRefConst.classList.add(className);
      (_b = targetDom == null ? void 0 : targetDom[position]) == null ? void 0 : _b.call(targetDom, baseInfoRefConst);
    };
    onMounted(() => {
      nextTick(teleportInfo);
    });
    const docAnalysisConfig = getTeekConfigRef("docAnalysis", {
      wordCount: true,
      readingTime: true,
      statistics: {}
    });
    const statisticsConfig = computed(() => ({
      provider: "",
      pageView: true,
      tryRequest: false,
      tryCount: 5,
      tryIterationTime: 2e3,
      permalink: true,
      ...docAnalysisConfig.value.statistics
    }));
    const usePageView = computed(() => !!statisticsConfig.value.provider && statisticsConfig.value.pageView);
    const { pagePv, isGet, request } = useBuSuanZi(usePageView.value, {
      tryRequest: statisticsConfig.value.tryRequest,
      tryCount: statisticsConfig.value.tryCount,
      tryIterationTime: statisticsConfig.value.tryIterationTime
    });
    const statisticsInfo = computed(() => ({ pagePv: pagePv.value, isGet: isGet.value }));
    watch(usePageView, (newVal) => {
      if (newVal) request();
    });
    if (statisticsConfig.value.permalink && ((_a = router.state) == null ? void 0 : _a.permalinkPlugin)) {
      vpRouter.bindRouterFn("urlChange", () => {
        router.onAfterUrlLoad = () => {
          if (usePageView.value) request();
        };
      });
    } else {
      watch(router.route, () => {
        if (usePageView.value) request();
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(`${unref(ns4).b()} flx-justify-between`),
        "aria-label": unref(t)("tk.articleAnalyze.label")
      }, [
        createVNode(unref(_sfc_main59)),
        isShowInfo.value ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            ref_key: "baseInfoRef",
            ref: baseInfoRef,
            class: normalizeClass(`${unref(ns4).e("wrapper")} flx-align-center`)
          },
          [
            createVNode(unref(_sfc_main28), {
              post: post.value,
              scope: "article"
            }, null, 8, ["post"]),
            unref(docAnalysisConfig).wordCount || pageViewInfo.value.wordCount ? (openBlock(), createElementBlock("div", _hoisted_234, [
              unref(articleConfig).showIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
                key: 0,
                icon: unref(readingIcon),
                "aria-hidden": "true"
              }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
              createBaseVNode("a", {
                title: unref(t)("tk.articleAnalyze.wordCount"),
                class: "hover-color",
                "aria-label": unref(t)("tk.articleAnalyze.wordCount")
              }, toDisplayString(pageViewInfo.value.wordCount), 9, _hoisted_322)
            ])) : createCommentVNode("v-if", true),
            unref(docAnalysisConfig).readingTime || pageViewInfo.value.readingTime ? (openBlock(), createElementBlock("div", _hoisted_421, [
              unref(articleConfig).showIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
                key: 0,
                icon: unref(clockIcon)
              }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
              createBaseVNode("a", {
                title: unref(t)("tk.articleAnalyze.readingTime"),
                class: "hover-color",
                "aria-label": unref(t)("tk.articleAnalyze.readingTime")
              }, toDisplayString(pageViewInfo.value.readingTime), 9, _hoisted_513)
            ])) : createCommentVNode("v-if", true),
            usePageView.value ? (openBlock(), createElementBlock("div", _hoisted_610, [
              unref(articleConfig).showIcon ? (openBlock(), createBlock(unref(_sfc_main14), {
                key: 0,
                icon: unref(viewIcon)
              }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
              createBaseVNode("a", {
                title: unref(t)("tk.articleAnalyze.pageView"),
                class: "hover-color",
                "aria-label": unref(t)("tk.articleAnalyze.pageView")
              }, toDisplayString(statisticsInfo.value.isGet ? statisticsInfo.value.pagePv : "Get..."), 9, _hoisted_78)
            ])) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true)
      ], 10, _hoisted_145);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleShare/src/index.vue2.mjs
import "vitepress";
var _hoisted_146 = ["aria-label"];
var _hoisted_235 = {
  key: 0,
  class: "flx-center"
};
var _hoisted_323 = {
  key: 1,
  class: "flx-center"
};
var _sfc_main61 = defineComponent({
  ...{ name: "ArticleShare" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("article-share");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const articleShareConfig = getTeekConfigRef("articleShare", {
      icon: shareIcon,
      text: t("tk.articleShare.text"),
      copiedIcon: thumbsIcon,
      copiedText: t("tk.articleShare.copiedText"),
      query: false,
      hash: false
    });
    const shareLink = computed(() => {
      const { hash, query } = articleShareConfig.value;
      const { origin, pathname, search } = location;
      return `${origin}${pathname}${query ? search : ""}${hash ? location.hash : ""}`;
    });
    const { copy, copied } = useClipboard(2e3);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          createBaseVNode("button", {
            class: normalizeClass([unref(ns4).e("button"), { copied: unref(copied) }, "flx-center"]),
            "aria-label": unref(copied) ? unref(articleShareConfig).copiedText : unref(articleShareConfig).text,
            "aria-live": "polite",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(copy)(shareLink.value))
          }, [
            !unref(copied) ? (openBlock(), createElementBlock("div", _hoisted_235, [
              createVNode(unref(_sfc_main14), {
                icon: unref(shareIcon),
                style: { "margin-right": "4px" }
              }, null, 8, ["icon"]),
              createTextVNode(
                " " + toDisplayString(unref(articleShareConfig).text),
                1
                /* TEXT */
              )
            ])) : (openBlock(), createElementBlock("div", _hoisted_323, [
              createVNode(unref(_sfc_main14), {
                icon: unref(thumbsIcon),
                style: { "margin-right": "4px" }
              }, null, 8, ["icon"]),
              createTextVNode(
                " " + toDisplayString(unref(articleShareConfig).copiedText),
                1
                /* TEXT */
              )
            ]))
          ], 10, _hoisted_146)
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleUpdate/src/index.vue2.mjs
import { useRoute as useRoute3, useData as useData21, withBase as withBase21 } from "vitepress";
var _hoisted_147 = ["href", "aria-label"];
var _hoisted_236 = { key: 1 };
var _hoisted_324 = ["href", "aria-label"];
var _sfc_main62 = defineComponent({
  ...{ name: "ArticleUpdate" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("article-update");
    const { t } = useLocale();
    const posts = usePosts();
    const route = useRoute3();
    const { frontmatter } = useData21();
    const { getTeekConfigRef } = useTeekConfig();
    const { archivesPath } = usePagePath();
    const articleConfig = getTeekConfigRef("articleUpdate", {
      limit: 3
    });
    const updatePosts = computed(() => {
      const path = "/" + route.data.relativePath.replace(".md", "");
      return [
        ...posts.value.sortPostsByDate.filter((item) => ![route.path, path, `${path}.html`].includes(item.url)).slice(0, articleConfig.value.limit),
        { title: "更多文章 >", url: archivesPath.value, frontmatter: {}, date: "" }
      ];
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns4).e("title"), "flx-align-center"])
            },
            [
              createVNode(unref(_sfc_main14), {
                icon: unref(editPenIcon),
                class: "edit-icon",
                "aria-hidden": "true"
              }, null, 8, ["icon"]),
              unref(archivesPath) ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: unref(withBase21)(unref(archivesPath)),
                class: "hover-color",
                "aria-label": unref(t)("tk.articleUpdate.label")
              }, toDisplayString(unref(t)("tk.articleUpdate.label")), 9, _hoisted_147)) : (openBlock(), createElementBlock(
                "span",
                _hoisted_236,
                toDisplayString(unref(t)("tk.articleUpdate.label")),
                1
                /* TEXT */
              ))
            ],
            2
            /* CLASS */
          ),
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(updatePosts.value, (item, index2) => {
                return openBlock(), createElementBlock("li", {
                  key: item.url,
                  class: "flx-center"
                }, [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(unref(ns4).m("num")),
                      "aria-hidden": "true"
                    },
                    toDisplayString(index2 !== updatePosts.value.length - 1 ? (index2 + 1).toString().padStart(2, "0") : ""),
                    3
                    /* TEXT, CLASS */
                  ),
                  createBaseVNode(
                    "div",
                    {
                      class: normalizeClass(unref(ns4).e("content"))
                    },
                    [
                      item.url ? (openBlock(), createElementBlock("a", {
                        key: 0,
                        href: unref(withBase21)(item.url),
                        class: "flx-1 hover-color",
                        "aria-label": item.title
                      }, [
                        createVNode(unref(_sfc_main7), {
                          post: item,
                          "title-tag-props": { position: "right", size: "small" }
                        }, null, 8, ["post"])
                      ], 8, _hoisted_324)) : createCommentVNode("v-if", true),
                      item.date ? (openBlock(), createElementBlock(
                        "span",
                        {
                          key: 1,
                          class: normalizeClass(unref(ns4).em("content", "date"))
                        },
                        toDisplayString(item.date),
                        3
                        /* TEXT, CLASS */
                      )) : createCommentVNode("v-if", true)
                    ],
                    2
                    /* CLASS */
                  )
                ]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ],
        2
        /* CLASS */
      )), [
        [vShow, unref(frontmatter).article !== false]
      ]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleHeadingHighlight/src/index.vue2.mjs
import { useRoute as useRoute4 } from "vitepress";
var _sfc_main63 = defineComponent({
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("article-heading-highlight");
    const handleHighlight = () => {
      if (!isClient || !window.location.hash) return;
      const targetedHashId = decodeURIComponent(window.location.hash);
      if (!targetedHashId) return;
      let elem;
      try {
        elem = document.querySelector(targetedHashId);
      } catch (e) {
        return console.error(e);
      }
      if (!elem) return;
      if (!elem.classList.contains(ns4.b())) {
        elem.classList.add(ns4.b());
      }
      elem.classList.remove(ns4.b());
      setTimeout(() => {
        if (elem) elem.classList.add(ns4.b());
      }, 10);
    };
    const route = useRoute4();
    watch(route, async () => {
      await nextTick();
      handleHighlight();
    });
    useEventListener(() => window, "hashchange", handleHighlight);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticlePageStyle/src/index.vue2.mjs
import "vitepress";
var _sfc_main64 = defineComponent({
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const { getTeekConfigRef } = useTeekConfig();
    const themeConfig = getTeekConfigRef(null, {
      vpHome: true,
      pageStyle: "default"
    });
    const initPageStyle = async () => {
      if (!isClient) return;
      await nextTick();
      const tkLayoutDom = document.querySelector(`.${ns4.joinNamespace("layout")}`);
      ["default", "card", "card-nav", "segment", "segment-nav"].forEach(
        (item) => tkLayoutDom == null ? void 0 : tkLayoutDom.classList.remove(ns4.joinNamespace(item))
      );
      tkLayoutDom == null ? void 0 : tkLayoutDom.classList.add(ns4.joinNamespace(themeConfig.value.pageStyle));
    };
    watch(() => themeConfig.value.pageStyle, initPageStyle, { immediate: true });
    watch(() => themeConfig.value.vpHome, initPageStyle);
    return (_ctx, _cache) => {
      return null;
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAppreciation/src/AsideBottomAppreciation.vue2.mjs
import "vitepress";
var _hoisted_148 = ["aria-label"];
var _hoisted_237 = ["innerHTML"];
var _hoisted_325 = ["innerHTML"];
var _sfc_main65 = defineComponent({
  ...{ name: "AsideBottomAppreciation" },
  __name: "AsideBottomAppreciation",
  setup(__props) {
    const ns4 = useNamespace("article-appreciation");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const appreciateConfig = getTeekConfigRef("appreciation", { position: "" });
    const asideBottomOptions = computed(() => appreciateConfig.value.options || {});
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns4).b(), unref(ns4).m("aside-bottom")]),
        "aria-label": unref(t)("tk.articleAppreciation.label")
      }, [
        createBaseVNode("span", {
          innerHTML: asideBottomOptions.value.title
        }, null, 8, _hoisted_237),
        createBaseVNode("div", {
          class: normalizeClass(unref(ns4).e("content")),
          innerHTML: asideBottomOptions.value.content
        }, null, 10, _hoisted_325)
      ], 10, _hoisted_148);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAppreciation/src/DocAfterAppreciation.vue2.mjs
import "vitepress";
var _hoisted_149 = ["aria-label"];
var _hoisted_238 = ["innerHTML", "aria-expanded", "aria-controls"];
var _hoisted_326 = ["aria-expanded", "aria-controls"];
var _hoisted_422 = ["innerHTML"];
var _hoisted_514 = ["innerHTML"];
var _hoisted_611 = ["aria-label"];
var _hoisted_79 = ["innerHTML"];
var _sfc_main66 = defineComponent({
  ...{ name: "DocAfterAppreciation" },
  __name: "DocAfterAppreciation",
  setup(__props) {
    const ns4 = useNamespace("article-appreciation");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const appreciateConfig = getTeekConfigRef("appreciation", { position: "" });
    const docAfterOptions = computed(() => appreciateConfig.value.options || { expand: false });
    const showContent = ref(docAfterOptions.value.expand);
    const icon = computed(() => {
      const { icon: icon2 } = docAfterOptions.value;
      if (icon2 === "aliPay") return aliPayIcon;
      if (icon2 === "weChatPay") return weChatPayIcon;
      return icon2;
    });
    const toggleShowContent = () => {
      showContent.value = !showContent.value;
    };
    watch(
      () => docAfterOptions.value.expand,
      (newValue) => {
        showContent.value = newValue;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns4).b(), unref(ns4).m("doc-after")]),
        "aria-label": unref(t)("tk.articleAppreciation.label")
      }, [
        docAfterOptions.value.buttonHtml ? (openBlock(), createElementBlock("div", {
          key: 0,
          innerHTML: docAfterOptions.value.buttonHtml,
          role: "button",
          "aria-expanded": showContent.value,
          "aria-controls": `${unref(ns4).e("content")}`
        }, null, 8, _hoisted_238)) : docAfterOptions.value.expandTitle || docAfterOptions.value.collapseTitle ? (openBlock(), createElementBlock("button", {
          key: 1,
          class: normalizeClass(unref(ns4).e("button")),
          onClick: toggleShowContent,
          "aria-expanded": showContent.value,
          "aria-controls": `${unref(ns4).e("content")}`,
          "aria-live": "polite"
        }, [
          icon.value ? (openBlock(), createBlock(unref(_sfc_main14), {
            key: 0,
            class: normalizeClass(unref(ns4).e("button__icon")),
            icon: icon.value,
            size: 16,
            "aria-hidden": "true"
          }, null, 8, ["class", "icon"])) : createCommentVNode("v-if", true),
          showContent.value ? (openBlock(), createElementBlock("span", {
            key: 1,
            innerHTML: docAfterOptions.value.collapseTitle
          }, null, 8, _hoisted_422)) : (openBlock(), createElementBlock("span", {
            key: 2,
            innerHTML: docAfterOptions.value.expandTitle
          }, null, 8, _hoisted_514))
        ], 10, _hoisted_326)) : createCommentVNode("v-if", true),
        createVNode(Transition, {
          name: unref(ns4).joinNamespace("fade")
        }, {
          default: withCtx(() => [
            showContent.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref(ns4).e("content")),
              "aria-label": unref(t)("tk.articleAppreciation.contentLabel")
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns4).e("content")),
                innerHTML: docAfterOptions.value.content
              }, null, 10, _hoisted_79)
            ], 10, _hoisted_611)) : createCommentVNode("v-if", true)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["name"])
      ], 10, _hoisted_149);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAppreciation/src/DocAfterAppreciationPopper.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Popover/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Popover/src/useFocusTrap.mjs
var useFocusTrap = (visible, emit) => {
  const focusStartRef = ref();
  const onFocusAfterTrapped = () => {
    emit("focus");
  };
  const onFocusAfterReleased = (event) => {
    var _a;
    if (((_a = event.detail) == null ? void 0 : _a.focusReason) !== "pointer") {
      focusStartRef.value = "first";
      emit("blur");
    }
  };
  const onFocusInTrap = (event) => {
    if (visible.value && event.target) {
      focusStartRef.value = event.target;
    }
  };
  const onFocusoutPrevented = (event) => {
    if (event.detail.focusReason === "pointer") {
      event.preventDefault();
    }
  };
  const onReleaseRequested = () => {
    emit("close");
  };
  return {
    focusStartRef,
    onFocusAfterTrapped,
    onFocusAfterReleased,
    onFocusInTrap,
    onFocusoutPrevented,
    onReleaseRequested
  };
};

// node_modules/vitepress-theme-teek/es/components/common/Popover/src/index.vue2.mjs
var _sfc_main67 = defineComponent({
  ...{ name: "Popover" },
  __name: "index",
  props: mergeModels({
    trigger: { default: "hover" },
    placement: { default: "bottom" },
    content: { default: "" },
    width: {},
    height: {},
    offset: { default: 0 },
    xOffset: { default: 0 },
    yOffset: { default: 0 },
    disabled: { type: Boolean, default: false },
    transition: { type: Boolean, default: true },
    transitionName: {},
    triggerEl: {},
    zIndex: {},
    popperClass: {},
    popperStyle: {},
    beforePopup: { type: Function }
  }, {
    "modelValue": { default: false },
    "modelModifiers": {}
  }),
  emits: mergeModels(["focus", "blur", "close"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const ns4 = useNamespace("popover");
    const { nextZIndex } = useZIndex();
    const zIndexRef = ref(__props.zIndex ?? nextZIndex());
    const visible = useModel(__props, "modelValue");
    const triggerRef = ref();
    const popoverRef = ref();
    const isHovered = useElementHover(triggerRef);
    const popupVisible = useElementHover(popoverRef);
    const triggerElComputed = computed(() => __props.triggerEl || triggerRef.value);
    const { top, right, left, bottom, update } = usePopoverSize(triggerElComputed, popoverRef, {
      placement: __props.placement,
      offset: __props.offset,
      xOffset: __props.xOffset,
      yOffset: __props.yOffset
    });
    const popupStyle = computed(() => {
      return {
        zIndex: zIndexRef.value,
        top: addUnit(top.value),
        right: addUnit(right.value),
        bottom: addUnit(bottom.value),
        left: addUnit(left.value),
        width: addUnit(__props.width),
        height: addUnit(__props.height),
        ...__props.popperStyle
      };
    });
    const calculatePopoverPosition = () => {
      var _a;
      if (!triggerRef.value || !popoverRef.value) {
        visible.value = false;
        return;
      }
      update();
      const result = ((_a = __props.beforePopup) == null ? void 0 : _a.call(__props, {
        top: top.value,
        right: right.value,
        bottom: left.value,
        left: bottom.value,
        triggerElement: __props.triggerEl || triggerRef.value,
        popoverElement: popoverRef.value
      })) ?? {};
      if (result.top) top.value = result.top;
      if (result.right) right.value = result.right;
      if (result.bottom) bottom.value = result.bottom;
      if (result.left) left.value = result.left;
    };
    if (__props.trigger === "hover") {
      watch(isHovered, (newVal) => {
        if (__props.trigger === "hover") visible.value = newVal;
      });
    }
    const toggleVisible = (event) => {
      if (event === __props.trigger) visible.value = !visible.value;
    };
    watch(visible, (newVal) => {
      if (newVal) calculatePopoverPosition();
    });
    watch(popupVisible, (newVal) => {
      if (__props.trigger === "hover") visible.value = newVal;
    });
    onClickOutside(popoverRef, (e) => {
      if (e.composedPath().includes(triggerRef.value)) return;
      if (__props.trigger === "hover") return;
      if (visible.value !== false) visible.value = false;
    });
    const popoverContainerId = ns4.joinNamespace("popover-container");
    onBeforeMount(() => {
      const popoverContainer = document.querySelector(`#${popoverContainerId}`);
      if (!popoverContainer) {
        const container = document.createElement("div");
        container.id = popoverContainerId;
        document.body.appendChild(container);
      }
    });
    const emit = __emit;
    const {
      focusStartRef,
      onFocusAfterTrapped,
      onFocusAfterReleased,
      onFocusInTrap,
      onFocusoutPrevented,
      onReleaseRequested
    } = useFocusTrap(visible, emit);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode(
            "div",
            mergeProps({
              ref_key: "triggerRef",
              ref: triggerRef,
              onClick: _cache[0] || (_cache[0] = ($event) => toggleVisible("click")),
              onContextmenu: _cache[1] || (_cache[1] = ($event) => toggleVisible("contextmenu")),
              onFocus: _cache[2] || (_cache[2] = ($event) => toggleVisible("focus")),
              onTouchstart: _cache[3] || (_cache[3] = ($event) => visible.value = !visible.value)
            }, _ctx.$attrs),
            [
              renderSlot(_ctx.$slots, "reference")
            ],
            16
            /* FULL_PROPS */
          ),
          (openBlock(), createBlock(Teleport, {
            to: `#${unref(popoverContainerId)}`
          }, [
            createVNode(Transition, {
              name: _ctx.transition ? _ctx.transitionName || unref(ns4).joinNamespace("fade-linear") : ""
            }, {
              default: withCtx(() => [
                !_ctx.disabled ? withDirectives((openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    ref_key: "popoverRef",
                    ref: popoverRef,
                    style: normalizeStyle(popupStyle.value),
                    class: normalizeClass([unref(ns4).b(), _ctx.popperClass]),
                    onClick: _cache[4] || (_cache[4] = withModifiers(() => {
                    }, ["stop"])),
                    onTouchstart: _cache[5] || (_cache[5] = withModifiers(() => {
                    }, ["stop"]))
                  },
                  [
                    createVNode(unref(TkFocusTrap), {
                      loop: "",
                      trapped: visible.value,
                      "focus-trap-el": popoverRef.value,
                      "focus-start-el": unref(focusStartRef),
                      onFocusAfterTrapped: unref(onFocusAfterTrapped),
                      onFocusAfterReleased: unref(onFocusAfterReleased),
                      onFocusin: unref(onFocusInTrap),
                      onFocusoutPrevented: unref(onFocusoutPrevented),
                      onReleaseRequested: unref(onReleaseRequested)
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          createTextVNode(
                            toDisplayString(_ctx.content),
                            1
                            /* TEXT */
                          )
                        ])
                      ]),
                      _: 3
                      /* FORWARDED */
                    }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusin", "onFocusoutPrevented", "onReleaseRequested"])
                  ],
                  38
                  /* CLASS, STYLE, NEED_HYDRATION */
                )), [
                  [vShow, visible.value]
                ]) : createCommentVNode("v-if", true)
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["name"])
          ], 8, ["to"]))
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ArticleAppreciation/src/DocAfterAppreciationPopper.vue2.mjs
var _hoisted_150 = ["aria-label"];
var _hoisted_239 = ["innerHTML", "aria-expanded", "aria-controls"];
var _hoisted_327 = ["aria-expanded", "aria-controls"];
var _hoisted_423 = ["innerHTML"];
var _hoisted_515 = ["aria-label"];
var _hoisted_612 = ["innerHTML"];
var _sfc_main68 = defineComponent({
  ...{ name: "DocAfterAppreciationPopper" },
  __name: "DocAfterAppreciationPopper",
  setup(__props) {
    const ns4 = useNamespace("article-appreciation");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const appreciateConfig = getTeekConfigRef("appreciation", { position: "" });
    const showContent = ref(false);
    const docAfterPopperOptions = computed(
      () => ({ trigger: "click", ...appreciateConfig.value.options })
    );
    const icon = computed(() => {
      const { icon: icon2 } = docAfterPopperOptions.value;
      if (icon2 === "aliPay") return aliPayIcon;
      if (icon2 === "weChatPay") return weChatPayIcon;
      return icon2;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref(ns4).b()),
        "aria-label": unref(t)("tk.articleAppreciation.label")
      }, [
        createVNode(unref(_sfc_main67), {
          modelValue: showContent.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => showContent.value = $event),
          trigger: docAfterPopperOptions.value.trigger
        }, {
          reference: withCtx(() => [
            docAfterPopperOptions.value.buttonHtml ? (openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: docAfterPopperOptions.value.buttonHtml,
              role: "button",
              "aria-expanded": showContent.value,
              "aria-controls": `${unref(ns4).e("content")}`
            }, null, 8, _hoisted_239)) : docAfterPopperOptions.value.title ? (openBlock(), createElementBlock("button", {
              key: 1,
              class: normalizeClass(unref(ns4).e("button")),
              "aria-expanded": showContent.value,
              "aria-controls": `${unref(ns4).e("content")}`,
              "aria-live": "polite"
            }, [
              icon.value ? (openBlock(), createBlock(unref(_sfc_main14), {
                key: 0,
                class: normalizeClass(unref(ns4).e("button__icon")),
                icon: icon.value,
                size: 16,
                "aria-hidden": "true"
              }, null, 8, ["class", "icon"])) : createCommentVNode("v-if", true),
              docAfterPopperOptions.value.title ? (openBlock(), createElementBlock("span", {
                key: 1,
                innerHTML: docAfterPopperOptions.value.title
              }, null, 8, _hoisted_423)) : createCommentVNode("v-if", true)
            ], 10, _hoisted_327)) : createCommentVNode("v-if", true)
          ]),
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass([unref(ns4).e("content"), unref(ns4).m("doc-after-popper")]),
              "aria-label": unref(t)("tk.articleAppreciation.contentLabel")
            }, [
              createBaseVNode("div", {
                class: normalizeClass(unref(ns4).e("content")),
                innerHTML: docAfterPopperOptions.value.content
              }, null, 10, _hoisted_612)
            ], 10, _hoisted_515)
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue", "trigger"])
      ], 10, _hoisted_150);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CommentTwikoo/src/index.vue2.mjs
import "vitepress";
var _hoisted_151 = ["href", "integrity"];
var _sfc_main69 = defineComponent({
  ...{ name: "CommentTwikoo" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const vpRouter = useVpRouter();
    const { getTeekConfig } = useTeekConfig();
    const twikooOptions = getTeekConfig("comment", {}).options;
    const {
      envId,
      jsLink = "https://cdn.jsdelivr.net/npm/twikoo@{version}/dist/twikoo.nocss.js",
      jsIntegrity,
      cssLink = "https://cdn.jsdelivr.net/npm/twikoo@{version}/dist/twikoo.css",
      version: version2 = "1.6.42",
      katex,
      timeout = 700,
      ...options
    } = twikooOptions;
    const initTwikoo = () => {
      if (!isClient) return console.error("[Teek Error] Not in a client");
      if (!envId) return console.error("[Teek Error] Twikoo initialization failed. Please configure the 'envId'");
      if (window.twikoo) window.twikoo.init({ ...options, envId, el: "#twikoo" });
    };
    const twikooJs = ref(null);
    const initJs = () => {
      const t = twikooJs.value;
      if (t) t.onload = initTwikoo;
    };
    const reloadTwikoo = (to) => {
      if (to) setTimeout(initTwikoo, timeout);
    };
    const initCss = () => {
      fetch(cssLink.replace("{version}", version2)).then((response) => {
        if (!response.ok) throw new Error("[Teek Error] Twikoo Css Link Network response was not ok");
        return response.text();
      }).then((data) => {
        if (document.getElementById("twikoo-css")) return;
        const style = document.createElement("style");
        style.type = "text/css";
        style.id = "twikoo-css";
        style.textContent = `.${ns4.b("twikoo")} {${data}}`;
        document.head.appendChild(style);
      });
    };
    onMounted(() => {
      initJs();
      initCss();
      twikooJs.value && vpRouter.bindAfterRouteChange(ns4.joinNamespace("twikoo"), (href) => reloadTwikoo(href));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b("twikoo"))
        },
        [
          createCommentVNode(" KaTeX "),
          unref(katex) ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createBaseVNode("link", {
                rel: "stylesheet",
                href: unref(katex).cssLink,
                integrity: unref(katex).cssIntegrity,
                crossorigin: "anonymous"
              }, null, 8, _hoisted_151),
              (openBlock(), createBlock(resolveDynamicComponent("script"), {
                defer: "",
                src: unref(katex).coreJsLink,
                integrity: unref(katex).coreJsIntegrity,
                crossorigin: "anonymous"
              }, null, 8, ["src", "integrity"])),
              (openBlock(), createBlock(resolveDynamicComponent("script"), {
                defer: "",
                src: unref(katex).renderJsLink,
                integrity: unref(katex).renderJsIntegrity,
                crossorigin: "anonymous"
              }, null, 8, ["src", "integrity"]))
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true),
          _cache[0] || (_cache[0] = createBaseVNode(
            "div",
            { id: "twikoo" },
            null,
            -1
            /* HOISTED */
          )),
          (openBlock(), createBlock(resolveDynamicComponent("script"), {
            src: unref(jsLink).replace("{version}", unref(version2)),
            integrity: unref(jsIntegrity),
            crossorigin: "anonymous",
            ref_key: "twikooJs",
            ref: twikooJs
          }, null, 8, ["src", "integrity"]))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CommentArtalk/src/index.vue2.mjs
import { useData as useData22 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/CommentArtalk/src/artalk.mjs
var artalkContext = Symbol("artalk");

// node_modules/vitepress-theme-teek/es/components/theme/CommentArtalk/src/index.vue2.mjs
var _hoisted_152 = ["href"];
var artalkId = "artalk";
var _sfc_main70 = defineComponent({
  ...{ name: "CommentArtalk" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const vpRouter = useVpRouter();
    const { getTeekConfig } = useTeekConfig();
    const { isDark, page } = useData22();
    const artalkOptions = getTeekConfig("comment", {}).options;
    const { server, site, ...options } = artalkOptions;
    const artalkRef = ref(null);
    const artalkJs = ref(null);
    const artalk = ref();
    const initArtalkByInject = () => {
      const getArtalkInstance = inject(artalkContext, () => null);
      const el = artalkRef.value || `#${artalkId}`;
      const artalkInstance = getArtalkInstance == null ? void 0 : getArtalkInstance(el, artalkOptions);
      if (!artalkInstance) return false;
      artalk.value = artalkInstance;
      switchDark();
      return true;
    };
    const initArtalkByJs = () => {
      if (!isClient) return console.error("[Teek Error] Not in a client");
      const Artalk = window.Artalk;
      const el = artalkRef.value || `#${artalkId}`;
      if (!Artalk || !artalkRef.value) {
        return console.error("[Teek Error] Artalk initialization failed. Unable to load online js file from " + server);
      }
      artalk.value = Artalk.init({
        darkMode: isDark.value,
        ...options,
        el,
        pageKey: vpRouter.route.path,
        pageTitle: page.value.title,
        server,
        site
      });
      switchDark();
    };
    const initJs = () => {
      const t = artalkJs.value;
      if (t) t.onload = initArtalkByJs;
    };
    const reloadArtalk = () => {
      const a = artalk.value;
      a == null ? void 0 : a.update({
        pageKey: vpRouter.route.path,
        pageTitle: page.value.title
      });
      a == null ? void 0 : a.reload();
    };
    onMounted(() => {
      if (!initArtalkByInject() && server) {
        initJs();
        return artalk.value && vpRouter.bindAfterRouteChange(ns4.joinNamespace("artalk"), () => reloadArtalk());
      }
      console.error(
        "[Teek Error] Artalk initialization failed. Please configure the 'server' and 'site' or provide the artalk instance"
      );
    });
    onUnmounted(() => {
      const a = artalk.value;
      if (a) a.destroy();
    });
    const switchDark = () => {
      setTimeout(() => {
        const a = artalk.value;
        if (a) a.setDarkMode(isDark.value);
      }, 100);
    };
    watch(isDark, () => switchDark());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b("artalk"))
        },
        [
          unref(server) ? (openBlock(), createElementBlock("link", {
            key: 0,
            rel: "stylesheet",
            href: `${unref(server)}/dist/Artalk.css`,
            crossorigin: "anonymous"
          }, null, 8, _hoisted_152)) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              id: artalkId,
              ref_key: "artalkRef",
              ref: artalkRef
            },
            null,
            512
            /* NEED_PATCH */
          ),
          unref(server) ? (openBlock(), createBlock(resolveDynamicComponent("script"), {
            key: 1,
            src: `${unref(server)}/dist/Artalk.js`,
            crossorigin: "anonymous",
            ref_key: "artalkJs",
            ref: artalkJs
          }, null, 8, ["src"])) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CommentGiscus/src/index.vue2.mjs
import { useData as useData23 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/CommentGiscus/src/giscus.mjs
var giscusContext = Symbol("giscus");

// node_modules/vitepress-theme-teek/es/components/theme/CommentGiscus/src/index.vue2.mjs
var _sfc_main71 = defineComponent({
  ...{ name: "CommentGiscus" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const vpRouter = useVpRouter();
    const { getTeekConfig } = useTeekConfig();
    const { isDark } = useData23();
    const giscusOptions = getTeekConfig("comment", {}).options;
    const {
      repo,
      repoId,
      category,
      categoryId,
      mapping = "pathname",
      strict = "0",
      reactionsEnabled = "1",
      emitMetadata = "0",
      inputPosition = "top",
      lang = "zh-CN",
      theme: giscusThemeConfig,
      loading = "eager",
      useOnline = true,
      link = "https://giscus.app/client.js",
      integrity,
      ...options
    } = giscusOptions;
    const giscusTheme = computed(() => {
      if (isFunction(giscusThemeConfig)) return giscusThemeConfig(isDark.value);
      return giscusThemeConfig || (isDark.value ? "dark" : "light");
    });
    const giscusComponentFn = inject(giscusContext, () => null);
    const giscusComponent = giscusComponentFn == null ? void 0 : giscusComponentFn(giscusOptions);
    const isShow = ref(false);
    const reloadGiscus = () => {
      isShow.value = false;
      nextTick(() => {
        isShow.value = true;
      });
    };
    onMounted(() => {
      if (!useOnline && !giscusComponent) {
        return console.error(
          "[Teek Error] Giscus initialization failed. Please configure the 'useOnline' to 'true' or provide the giscus component"
        );
      }
      reloadGiscus();
      vpRouter.bindAfterRouteChange(ns4.joinNamespace("giscus"), () => {
        reloadGiscus();
      });
    });
    return (_ctx, _cache) => {
      return isShow.value ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(unref(ns4).b("giscus"))
        },
        [
          unref(giscusComponent) ? (openBlock(), createBlock(resolveDynamicComponent(unref(giscusComponent)), mergeProps({
            key: 0,
            repo: unref(repo),
            "repo-id": unref(repoId),
            category: unref(category),
            "category-id": unref(categoryId),
            mapping: unref(mapping),
            "reactions-enabled": unref(reactionsEnabled),
            "emit-metadata": unref(emitMetadata),
            "input-position": unref(inputPosition),
            lang: unref(lang),
            theme: giscusTheme.value,
            loading: unref(loading)
          }, options), null, 16, ["repo", "repo-id", "category", "category-id", "mapping", "reactions-enabled", "emit-metadata", "input-position", "lang", "theme", "loading"])) : unref(useOnline) ? (openBlock(), createBlock(resolveDynamicComponent("script"), mergeProps({
            key: 1,
            defer: "",
            src: unref(link),
            integrity: unref(integrity),
            "data-repo": unref(repo),
            "data-repo-id": unref(repoId),
            "data-category": unref(category),
            "data-category-id": unref(categoryId),
            "data-mapping": unref(mapping),
            "data-strict": unref(strict),
            "data-reactions-enabled": unref(reactionsEnabled),
            "data-emit-metadata": unref(emitMetadata),
            "data-input-position": unref(inputPosition),
            "data-theme": giscusTheme.value,
            "data-lang": unref(lang)
          }, options, { crossorigin: "anonymous" }), null, 16, ["src", "integrity", "data-repo", "data-repo-id", "data-category", "data-category-id", "data-mapping", "data-strict", "data-reactions-enabled", "data-emit-metadata", "data-input-position", "data-theme", "data-lang"])) : createCommentVNode("v-if", true)
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CommentWaline/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/CommentWaline/src/waline.mjs
var walineContext = Symbol("waline");

// node_modules/vitepress-theme-teek/es/components/theme/CommentWaline/src/index.vue2.mjs
var _hoisted_153 = ["href", "integrity"];
var walineId = "waline";
var _sfc_main72 = defineComponent({
  ...{ name: "CommentWaline" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const vpRouter = useVpRouter();
    const { getTeekConfig } = useTeekConfig();
    const walineOptions = getTeekConfig("comment", {}).options;
    const { serverURL, jsLink, cssLink, dark = "html[class='dark']", cssIntegrity, ...options } = walineOptions;
    let waline = null;
    const initWalineByInject = () => {
      const getWalineInstance = inject(walineContext, () => null);
      if (getWalineInstance) waline = getWalineInstance == null ? void 0 : getWalineInstance(`#${walineId}`, walineOptions);
      return waline;
    };
    const initWalineByJs = async () => {
      if (!jsLink) return;
      const { init } = await import(
        /* @vite-ignore */
        jsLink
      );
      waline = init({ dark, ...options, serverURL, el: `#${walineId}` });
    };
    const preventJump = () => {
      if (!isClient) return;
      const loginNickLink = document.querySelector(".wl-login-nick");
      loginNickLink && loginNickLink.removeAttribute("href");
    };
    onMounted(async () => {
      if (!initWalineByInject() && serverURL && jsLink) {
        await initWalineByJs();
        preventJump();
        return vpRouter.bindAfterRouteChange(ns4.joinNamespace("waline"), () => waline == null ? void 0 : waline.update());
      }
      console.error(
        "[Teek Error] Waline initialization failed. Please configure the 'jsLink' and 'serverURL' or provide the waline instance"
      );
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b("waline"))
        },
        [
          unref(cssLink) ? (openBlock(), createElementBlock("link", {
            key: 0,
            rel: "stylesheet",
            href: unref(cssLink),
            integrity: unref(cssIntegrity),
            crossorigin: "anonymous"
          }, null, 8, _hoisted_153)) : createCommentVNode("v-if", true),
          createBaseVNode("div", { id: walineId })
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/CodeBlockToggle/src/index.vue2.mjs
import "vitepress";
var documentAttribute = "code-block";
var foldClass = "fold";
var arrowClass = "code-arrow";
var _sfc_main73 = defineComponent({
  ...{ name: "CodeBlockToggle" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace();
    const { getTeekConfigRef } = useTeekConfig();
    const codeBlockConfig = getTeekConfigRef("codeBlock", {
      collapseHeight: 700,
      copiedDone: void 0
    });
    watch(
      codeBlockConfig,
      (newVal) => {
        if (!isClient) return;
        const { disabled } = newVal || {};
        if (disabled) return document.documentElement.removeAttribute(documentAttribute);
        document.documentElement.setAttribute(documentAttribute, ns4.namespace);
        nextTick(() => initCodeBlock());
      },
      { immediate: true }
    );
    const initCodeBlock = () => {
      const modes = document.querySelectorAll(".vp-doc div[class*='language-']");
      Array.from(modes).forEach((item) => {
        var _a;
        const copyDom = item.querySelector(`.copy`);
        copyDom == null ? void 0 : copyDom.addEventListener("click", (e) => {
          var _a2, _b;
          (_b = (_a2 = codeBlockConfig.value).copiedDone) == null ? void 0 : _b.call(_a2, message);
        });
        const className = (_a = item.parentElement) == null ? void 0 : _a.className;
        if ((className == null ? void 0 : className.includes("details")) || (className == null ? void 0 : className.includes(ns4.joinNamespace("vp-code")))) return;
        const arrowElement = item.querySelector(`.${arrowClass}`);
        if (arrowElement) return;
        const newArrowElement = document.createElement("div");
        newArrowElement.classList.add(arrowClass);
        newArrowElement.innerHTML = arrowDownIcon;
        addClickEvent(newArrowElement, item);
        item.append(newArrowElement);
      });
    };
    const addClickEvent = (arrowDom, codeDom) => {
      const modeHeight = getElementHeight(codeDom);
      codeDom.style.height = `${modeHeight}px`;
      const preDom = codeDom.querySelector("pre");
      const lineNumbersWrapperDom = codeDom.querySelector(".line-numbers-wrapper");
      const codeBlockState = {
        expand: { height: `${modeHeight}px`, display: "block", speed: 80 },
        fold: { height: ns4.cssVar("code-block-fold-height"), display: "none", speed: 400 }
      };
      let timer;
      const clearTimer = () => {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
      };
      const toggle = () => {
        const isFold = arrowDom.classList.contains(foldClass);
        const state = codeBlockState[isFold ? "expand" : "fold"];
        codeDom.style.height = state.height;
        clearTimer();
        if (preDom || lineNumbersWrapperDom) {
          timer = setTimeout(() => {
            if (preDom) preDom.style.display = state.display;
            if (lineNumbersWrapperDom) lineNumbersWrapperDom.style.display = state.display;
            if (timer) clearTimer();
          }, state.speed);
        }
        arrowDom.classList.toggle(foldClass);
      };
      useEventListener(arrowDom, "click", toggle);
      const collapseHeight = codeBlockConfig.value.collapseHeight;
      if (isBoolean(collapseHeight)) collapseHeight && toggle();
      else if (collapseHeight && modeHeight > collapseHeight) toggle();
    };
    const getElementHeight = (item) => {
      var _a;
      const parentElementClass = ((_a = item.parentElement) == null ? void 0 : _a.className) || "";
      if (!parentElementClass.includes("blocks")) return item.offsetHeight;
      if (parentElementClass.includes("blocks") && item.className.includes("active")) return item.offsetHeight;
      item.style.display = "block";
      const height = item.offsetHeight;
      item.style.display = "";
      return height;
    };
    return (_ctx, _cache) => {
      return null;
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/index.vue2.mjs
import { useData as useData28 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/index.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/namespace.mjs
import "vitepress";
var ns2 = useNamespace("theme-enhance");
var transitionName = ns2.joinNamespace("theme-enhance-slide");
var pageMaxWidthVar = ns2.cssVarName("page-max-width");
var docMaxWidthVar = ns2.cssVarName("doc-max-width");
var layoutModeStorageKey = ns2.storageKey("layoutMode");
var pageMaxWidthSlideStorageKey = ns2.storageKey("pageMaxWidthSlide");
var docMaxWidthSlideStorageKey = ns2.storageKey("docMaxWidthSlide");
var themeColorStorageKey = ns2.storageKey("themeColor");
var themeBgColorStorageKey = ns2.storageKey("themeBgColor");
var spotlightStorageKey = ns2.storageKey("spotlight");
var spotlightStyleStorageKey = ns2.storageKey("spotlightStyle");

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/themeEnhance.mjs
var LayoutMode = ((LayoutMode2) => {
  LayoutMode2["FullWidth"] = "fullWidth";
  LayoutMode2["SidebarWidthAdjustableOnly"] = "sidebarWidthAdjustableOnly";
  LayoutMode2["BothWidthAdjustable"] = "bothWidthAdjustable";
  LayoutMode2["Original"] = "original";
  return LayoutMode2;
})(LayoutMode || {});
var SpotlightStyle = ((SpotlightStyle2) => {
  SpotlightStyle2["Under"] = "under";
  SpotlightStyle2["Aside"] = "aside";
  return SpotlightStyle2;
})(SpotlightStyle || {});
var ThemeColor = ((ThemeColor2) => {
  ThemeColor2["vpDefault"] = "vp-default";
  ThemeColor2["vpGreen"] = "vp-green";
  ThemeColor2["vpYellow"] = "vp-yellow";
  ThemeColor2["vpRed"] = "vp-red";
  ThemeColor2["epBlue"] = "ep-blue";
  ThemeColor2["epGreen"] = "ep-green";
  ThemeColor2["epYellow"] = "ep-yellow";
  ThemeColor2["epRed"] = "ep-red";
  return ThemeColor2;
})(ThemeColor || {});
var themeColorList = [
  "vp-default",
  "vp-green",
  "vp-yellow",
  "vp-red",
  "ep-blue",
  "ep-green",
  "ep-yellow",
  "ep-red"
  /* epRed */
];
var mobileMaxWidthMedia = "(max-width: 768px)";
var activateMaxWidthSlideMedia = "(min-width: 1440px)";
var touchMedia = "(pointer: coarse)";
var layoutModeAttribute = "layout-mode";
var themeColorAttribute = "theme-color";

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/LayoutSwitch.vue2.mjs
import { useData as useData24 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Segmented/src/Segmented.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/Segmented/src/SegmentedItem.vue2.mjs
import "vitepress";
var _hoisted_154 = ["title", "disabled"];
var _hoisted_240 = ["value", "name", "disabled", "checked", "aria-checked"];
var _hoisted_328 = { key: 1 };
var _sfc_main74 = defineComponent({
  ...{ name: "SegmentedItem" },
  __name: "SegmentedItem",
  props: mergeModels({
    disabled: { type: Boolean },
    value: { type: [String, Number, Object, Boolean] },
    label: {},
    icon: {},
    title: {},
    name: {}
  }, {
    "modelValue": { type: [String, Number, Object, Boolean] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const ns4 = useNamespace("segmented-item");
    const model = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([unref(ns4).b(), unref(ns4).is("active", model.value === _ctx.value && !_ctx.disabled), unref(ns4).is("disabled", _ctx.disabled)]),
        title: _ctx.title,
        disabled: _ctx.disabled
      }, [
        withDirectives(createBaseVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
          type: "radio",
          value: _ctx.value,
          name: _ctx.name,
          disabled: _ctx.disabled,
          checked: model.value === _ctx.value,
          "aria-checked": model.value === _ctx.value,
          role: "radio",
          style: { "display": "none" }
        }, null, 8, _hoisted_240), [
          [vModelRadio, model.value]
        ]),
        createBaseVNode(
          "span",
          {
            class: normalizeClass(unref(ns4).e("content"))
          },
          [
            _ctx.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
              key: 0,
              icon: _ctx.icon,
              "aria-hidden": "true"
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
            _ctx.label ? (openBlock(), createElementBlock(
              "span",
              _hoisted_328,
              toDisplayString(_ctx.label),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ],
          2
          /* CLASS */
        )
      ], 10, _hoisted_154);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/Segmented/src/Segmented.vue2.mjs
var _sfc_main75 = defineComponent({
  ...{ name: "Segmented" },
  __name: "Segmented",
  props: mergeModels({
    options: {},
    disabled: { type: Boolean }
  }, {
    "modelValue": { type: [String, Number, Object, Boolean] },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const ns4 = useNamespace("segmented");
    const model = useModel(__props, "modelValue");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "fieldset",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.options, (option) => {
              return openBlock(), createBlock(_sfc_main74, mergeProps({
                key: option.name,
                modelValue: model.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
                ref_for: true
              }, option, { disabled: _ctx.disabled }), null, 16, ["modelValue", "disabled"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/useAnimated.mjs
import "vitepress";
var useAnimated = (delay = 1e3, immediate = false) => {
  let timer = null;
  const stop = () => {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };
  const start = () => {
    if (!isClient) return;
    if (!immediate) {
      immediate = true;
      return;
    }
    stop();
    document.documentElement.setAttribute(`${layoutModeAttribute}-animated`, "true");
    timer = setTimeout(() => {
      document.documentElement.removeAttribute(`${layoutModeAttribute}-animated`);
    }, toValue(delay));
  };
  useScopeDispose(stop);
  return { start, stop };
};

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/Title.vue2.mjs
var _hoisted_155 = { key: 0 };
var _sfc_main76 = defineComponent({
  __name: "Title",
  props: {
    title: {},
    disabled: { type: Boolean },
    icon: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns2).e("title"), unref(ns2).is("disabled", !!_ctx.disabled)])
        },
        [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            _ctx.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
              key: 0,
              icon: _ctx.icon,
              size: 16
            }, null, 8, ["icon"])) : createCommentVNode("v-if", true)
          ]),
          renderSlot(_ctx.$slots, "default", {}, () => [
            _ctx.title ? (openBlock(), createElementBlock(
              "span",
              _hoisted_155,
              toDisplayString(_ctx.title),
              1
              /* TEXT */
            )) : createCommentVNode("v-if", true)
          ])
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/Helper.vue2.mjs
var _sfc_main77 = defineComponent({
  ...{ name: "Helper" },
  __name: "Helper",
  props: mergeModels({
    triggerEl: {}
  }, {
    "modelValue": { default: false },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const visible = useModel(__props, "modelValue");
    const popoverVisible = ref(visible.value);
    watch(popoverVisible, (newVal) => {
      visible.value = newVal;
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main67), {
        class: normalizeClass(unref(ns2).e("helper")),
        modelValue: popoverVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => popoverVisible.value = $event),
        "trigger-el": _ctx.triggerEl,
        placement: "left-start"
      }, {
        reference: withCtx(() => [
          createVNode(unref(_sfc_main14), {
            icon: unref(questionFilledIcon),
            size: 16
          }, null, 8, ["icon"])
        ]),
        default: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns2).e("helper__popup"))
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
            /* CLASS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "modelValue", "trigger-el"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/BorderHighlight.vue2.mjs
import "vitepress";
var _sfc_main78 = defineComponent({
  ...{ name: "BorderHighlight" },
  __name: "BorderHighlight",
  props: {
    active: { type: Boolean }
  },
  setup(__props) {
    const ns4 = useNamespace("border-highlight");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns4).b(), unref(ns4).is("active", Boolean(_ctx.active))])
        },
        [
          renderSlot(_ctx.$slots, "default")
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/BaseTemplate.vue2.mjs
var _hoisted_156 = {
  class: "flx-align-center",
  style: { "margin-bottom": "6px" }
};
var _hoisted_241 = {
  key: 1,
  style: { "font-weight": "600" }
};
var _hoisted_329 = { key: 0 };
var _hoisted_424 = {
  key: 1,
  style: { "margin-top": "8px" }
};
var _sfc_main79 = defineComponent({
  ...{ name: "BaseTemplate" },
  __name: "BaseTemplate",
  props: {
    title: {},
    helperDesc: {},
    icon: {},
    tips: {},
    disabled: { type: Boolean },
    helper: { type: Boolean },
    borderHighlight: { type: Boolean, default: true }
  },
  setup(__props) {
    const helperVisible = ref(false);
    const titleElementRef = ref();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode(
          "div",
          {
            ref_key: "titleElementRef",
            ref: titleElementRef,
            class: "flx-align-center"
          },
          [
            createVNode(_sfc_main76, {
              title: _ctx.title,
              icon: _ctx.icon,
              disabled: _ctx.disabled,
              "aria-label": _ctx.title
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "title")
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["title", "icon", "disabled", "aria-label"]),
            _ctx.helper ? (openBlock(), createBlock(_sfc_main77, {
              key: 0,
              modelValue: helperVisible.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => helperVisible.value = $event),
              "trigger-el": titleElementRef.value
            }, {
              default: withCtx(() => [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass(unref(ns2).e("helper__body"))
                  },
                  [
                    createBaseVNode(
                      "h4",
                      {
                        class: normalizeClass(unref(ns2).em("helper", "title"))
                      },
                      [
                        renderSlot(_ctx.$slots, "helper-title", {}, () => [
                          createTextVNode(
                            toDisplayString(_ctx.title),
                            1
                            /* TEXT */
                          )
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    createBaseVNode(
                      "p",
                      {
                        class: normalizeClass(unref(ns2).em("helper", "desc"))
                      },
                      [
                        renderSlot(_ctx.$slots, "helper-desc", {}, () => [
                          createTextVNode(
                            toDisplayString(_ctx.helperDesc),
                            1
                            /* TEXT */
                          )
                        ])
                      ],
                      2
                      /* CLASS */
                    ),
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(_ctx.tips, (tip, index2) => {
                        return openBlock(), createElementBlock(
                          "div",
                          {
                            key: index2,
                            class: normalizeClass(unref(ns2).e("helper__body__tip"))
                          },
                          [
                            createBaseVNode("div", _hoisted_156, [
                              tip.icon ? (openBlock(), createBlock(unref(_sfc_main14), {
                                key: 0,
                                icon: tip.icon,
                                size: 16,
                                style: { "margin-right": "4px" }
                              }, null, 8, ["icon"])) : createCommentVNode("v-if", true),
                              tip.title ? (openBlock(), createElementBlock(
                                "span",
                                _hoisted_241,
                                toDisplayString(tip.title),
                                1
                                /* TEXT */
                              )) : createCommentVNode("v-if", true)
                            ]),
                            tip.content ? (openBlock(), createElementBlock(
                              "span",
                              _hoisted_329,
                              toDisplayString(tip.content),
                              1
                              /* TEXT */
                            )) : createCommentVNode("v-if", true)
                          ],
                          2
                          /* CLASS */
                        );
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  2
                  /* CLASS */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["modelValue", "trigger-el"])) : createCommentVNode("v-if", true)
          ],
          512
          /* NEED_PATCH */
        ),
        _ctx.borderHighlight ? (openBlock(), createBlock(_sfc_main78, {
          key: 0,
          active: helperVisible.value,
          style: { "margin-top": "8px" }
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
          /* FORWARDED */
        }, 8, ["active"])) : (openBlock(), createElementBlock("div", _hoisted_424, [
          renderSlot(_ctx.$slots, "default")
        ]))
      ]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/LayoutSwitch.vue2.mjs
var _sfc_main80 = defineComponent({
  ...{ name: "LayoutSwitch" },
  __name: "LayoutSwitch",
  setup(__props) {
    var _a;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const { frontmatter } = useData24();
    const layoutMode = useStorage(
      layoutModeStorageKey,
      ((_a = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a.defaultMode) || LayoutMode.Original
    );
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const oldLayoutMode = ref(layoutMode.value);
    const { start: startAnimated } = useAnimated();
    const update = (val) => {
      var _a2, _b;
      if (!isClient) return;
      const { layoutSwitch } = themeEnhanceConfig.value;
      if (!(layoutSwitch == null ? void 0 : layoutSwitch.disableAnimation)) startAnimated();
      const el = document.documentElement;
      if (el.getAttribute(layoutModeAttribute) === val) return;
      el.setAttribute(layoutModeAttribute, val);
      (_b = (_a2 = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a2.switchModeDone) == null ? void 0 : _b.call(_a2, val);
    };
    watch(layoutMode, update, { immediate: true });
    watch(
      () => frontmatter.value.layoutMode,
      (newVal) => {
        if (newVal) {
          oldLayoutMode.value = layoutMode.value;
          layoutMode.value = newVal;
        } else {
          layoutMode.value = oldLayoutMode.value;
        }
      },
      { immediate: true }
    );
    watch(
      () => {
        var _a2;
        return (_a2 = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a2.defaultMode;
      },
      (newVal) => {
        if (newVal) layoutMode.value = newVal;
      }
    );
    const content = computed(() => [
      {
        value: LayoutMode.FullWidth,
        title: t("tk.themeEnhance.layoutSwitch.fullWidthTipTitle"),
        tipContent: t("tk.themeEnhance.layoutSwitch.fullWidthHelpTipContent"),
        icon: fullScreenOneIcon
      },
      {
        value: LayoutMode.SidebarWidthAdjustableOnly,
        title: t("tk.themeEnhance.layoutSwitch.sidebarWidthAdjustableOnlyTipTitle"),
        tipContent: t("tk.themeEnhance.layoutSwitch.sidebarWidthAdjustableOnlyHelpTipContent"),
        icon: fullscreenTwoIcon
      },
      {
        value: LayoutMode.BothWidthAdjustable,
        title: t("tk.themeEnhance.layoutSwitch.bothWidthAdjustableTipTitle"),
        tipContent: t("tk.themeEnhance.layoutSwitch.bothWidthAdjustableHelpTipContent"),
        icon: fullscreenIcon
      },
      {
        value: LayoutMode.Original,
        title: t("tk.themeEnhance.layoutSwitch.originalWidthTipTitle"),
        tipContent: t("tk.themeEnhance.layoutSwitch.originalWidthHelpTipContent"),
        icon: overallReductionIcon
      }
    ]);
    const segmentedOptions = computed(
      () => content.value.map((item) => ({
        value: item.value,
        title: item.title,
        ariaLabel: item.title,
        icon: item.icon
      }))
    );
    const tips = computed(
      () => content.value.map((item) => ({
        title: item.title,
        icon: item.icon,
        content: item.tipContent
      }))
    );
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(_sfc_main79, {
        icon: unref(layoutIcon),
        title: unref(t)("tk.themeEnhance.layoutSwitch.title"),
        helper: !((_a2 = unref(themeEnhanceConfig).layoutSwitch) == null ? void 0 : _a2.disableHelp),
        "helper-desc": unref(t)("tk.themeEnhance.layoutSwitch.helpDesc"),
        tips: tips.value,
        disabled: unref(isMobile)
      }, {
        default: withCtx(() => [
          createVNode(unref(_sfc_main75), {
            modelValue: unref(layoutMode),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(layoutMode) ? layoutMode.value = $event : null),
            options: segmentedOptions.value,
            disabled: unref(isMobile)
          }, null, 8, ["modelValue", "options", "disabled"])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["icon", "title", "helper", "helper-desc", "tips", "disabled"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/LayoutPageWidthSlide.vue2.mjs
import "vitepress";

// node_modules/vitepress-theme-teek/es/components/common/InputSlide/src/index.vue2.mjs
import "vitepress";
var _hoisted_157 = ["name", "min", "max", "disabled", "step"];
var _sfc_main81 = defineComponent({
  ...{ name: "InputSlide" },
  __name: "index",
  props: mergeModels({
    name: { default: "Slider" },
    disabled: { type: Boolean },
    min: { default: 0 },
    max: { default: 100 },
    step: { default: 1 },
    format: { type: Function }
  }, {
    "modelValue": { default: 0 },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const ns4 = useNamespace("input-slide");
    const inputValue = useModel(__props, "modelValue");
    const inputSliderRef = ref();
    const inputSliderTooltipRef = ref();
    const hovering = useElementHover(inputSliderRef);
    const positioning = ref(false);
    const sliderValueVar = ns4.cssVarName("slider-value");
    const sliderMinVar = ns4.cssVarName("slider-min");
    const sliderMaxVar = ns4.cssVarName("slider-max");
    useEventListener(inputSliderRef, "input", () => {
      if (!inputSliderRef.value) return;
      inputSliderRef.value.style.setProperty(sliderValueVar, inputSliderRef.value.value.toString());
    });
    onMounted(() => {
      var _a, _b;
      if (!inputSliderRef.value) return;
      const inputSliderStyle = inputSliderRef.value.style;
      inputSliderStyle.setProperty(sliderValueVar, inputValue.value.toString());
      inputSliderStyle.setProperty(sliderMinVar, ((_a = __props.min) == null ? void 0 : _a.toString()) ?? "0");
      inputSliderStyle.setProperty(sliderMaxVar, ((_b = __props.max) == null ? void 0 : _b.toString()) ?? "100");
    });
    const calTipPosition = (inputElement, inputTooltipElement) => {
      const finalMax = __props.max || 100;
      const finalMin = __props.min || 0;
      const ratio = (inputValue.value - finalMin) / (finalMax - finalMin);
      const rect = inputElement.getBoundingClientRect();
      const tooltipRect = inputTooltipElement.getBoundingClientRect();
      const centeringShift = (tooltipRect.width - 32) / 2;
      inputTooltipElement.style.setProperty("left", `${ratio * (rect.width - 32) - centeringShift}px`);
    };
    watch(hovering, () => {
      positioning.value = true;
      setTimeout(() => {
        if (!hovering.value) {
          positioning.value = false;
          return;
        }
        if (!inputSliderRef.value) {
          positioning.value = false;
          return;
        }
        if (!inputSliderTooltipRef.value) {
          positioning.value = false;
          return;
        }
        calTipPosition(inputSliderRef.value, inputSliderTooltipRef.value);
        positioning.value = false;
      }, 50);
    });
    watch(inputValue, (val) => {
      if (val < __props.min) val = __props.min;
      if (val > __props.max) val = __props.max;
      if (!inputSliderRef.value || !inputSliderTooltipRef.value) return;
      calTipPosition(inputSliderRef.value, inputSliderTooltipRef.value);
    });
    watch(
      () => __props.min,
      (val) => {
        if (inputValue.value >= val) return;
        inputValue.value = val;
      }
    );
    watch(
      () => __props.max,
      (val) => {
        if (inputValue.value <= val) return;
        inputValue.value = val;
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns4).b())
        },
        [
          createBaseVNode(
            "label",
            {
              class: normalizeClass(unref(ns4).e("label"))
            },
            [
              withDirectives(createBaseVNode("input", {
                ref_key: "inputSliderRef",
                ref: inputSliderRef,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                type: "range",
                name: _ctx.name,
                min: _ctx.min,
                max: _ctx.max,
                disabled: _ctx.disabled,
                step: _ctx.step,
                class: normalizeClass([unref(ns4).e("label__input"), unref(ns4).e("label__input-progress"), unref(ns4).is("disabled", _ctx.disabled)])
              }, null, 10, _hoisted_157), [
                [
                  vModelText,
                  inputValue.value,
                  void 0,
                  { number: true }
                ]
              ]),
              createVNode(Transition, {
                name: "fade",
                persisted: ""
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode(
                    "span",
                    {
                      ref_key: "inputSliderTooltipRef",
                      ref: inputSliderTooltipRef,
                      class: normalizeClass([unref(ns4).e("label__tooltip"), unref(ns4).is("opacity-0", unref(hovering) && positioning.value)])
                    },
                    toDisplayString(!!_ctx.format ? _ctx.format(inputValue.value) : inputValue.value),
                    3
                    /* TEXT, CLASS */
                  ), [
                    [vShow, unref(hovering)]
                  ])
                ]),
                _: 1
                /* STABLE */
              })
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/LayoutPageWidthSlide.vue2.mjs
var _sfc_main82 = defineComponent({
  ...{ name: "LayoutPageWidthSlide" },
  __name: "LayoutPageWidthSlide",
  setup(__props) {
    var _a, _b;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const min = computed(() => 60 * 100);
    const max = computed(() => 100 * 100);
    const pageMaxWidth = useStorage(
      pageMaxWidthSlideStorageKey,
      (((_a = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a.defaultPageMaxWidth) || 90) * 100
    );
    const layoutMode = useStorage(
      layoutModeStorageKey,
      ((_b = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _b.defaultMode) || LayoutMode.Original
    );
    const { start: startAnimated } = useAnimated();
    const updatePageMaxWidth = (val) => {
      var _a2;
      if (!isClient) return;
      if (!((_a2 = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a2.disableAnimation)) startAnimated();
      document.body.style.setProperty(pageMaxWidthVar, `${Math.ceil(val / 100)}%`);
    };
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const shouldActivateMaxWidth = useMediaQuery(activateMaxWidthSlideMedia);
    watch(shouldActivateMaxWidth, () => {
      updatePageMaxWidth(pageMaxWidth.value);
    });
    const update = useDebounce(updatePageMaxWidth, 1e3);
    watch(pageMaxWidth, update);
    const format = (val) => `${Math.ceil(val / 100)}%`;
    const tips = [
      {
        title: t("tk.themeEnhance.pageLayoutMaxWidth.helpTipTitle"),
        icon: scaleIcon,
        content: t("tk.themeEnhance.pageLayoutMaxWidth.helpTipContent")
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(transitionName),
        persisted: ""
      }, {
        default: withCtx(() => {
          var _a2;
          return [
            withDirectives(createVNode(_sfc_main79, {
              icon: unref(autoWidthIcon),
              title: unref(t)("tk.themeEnhance.pageLayoutMaxWidth.title"),
              helper: !((_a2 = unref(themeEnhanceConfig).layoutSwitch) == null ? void 0 : _a2.disablePageMaxWidthHelp),
              "helper-desc": unref(t)("tk.themeEnhance.pageLayoutMaxWidth.helpDesc"),
              tips,
              disabled: unref(isMobile)
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main81), {
                  modelValue: unref(pageMaxWidth),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(pageMaxWidth) ? pageMaxWidth.value = $event : null),
                  disabled: unref(isMobile),
                  min: min.value,
                  max: max.value,
                  format,
                  class: normalizeClass(unref(ns2).e("slide")),
                  "aria-label": unref(t)("tk.themeEnhance.pageLayoutMaxWidth.helperTipTitle")
                }, null, 8, ["modelValue", "disabled", "min", "max", "class", "aria-label"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["icon", "title", "helper", "helper-desc", "disabled"]), [
              [vShow, unref(layoutMode) === unref(LayoutMode).SidebarWidthAdjustableOnly || unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable]
            ])
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/LayoutDocWidthSlide.vue2.mjs
import "vitepress";
var _sfc_main83 = defineComponent({
  ...{ name: "LayoutDocWidthSlide" },
  __name: "LayoutDocWidthSlide",
  setup(__props) {
    var _a, _b;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const min = computed(() => 60 * 100);
    const max = computed(() => 100 * 100);
    const docMaxWidth = useStorage(
      docMaxWidthSlideStorageKey,
      (((_a = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a.defaultDocMaxWidth) || 95) * 100
    );
    const layoutMode = useStorage(
      layoutModeStorageKey,
      ((_b = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _b.defaultMode) || LayoutMode.Original
    );
    const { start: startAnimated } = useAnimated();
    const updateMaxWidth = (val) => {
      var _a2;
      if (!isClient) return;
      if (!((_a2 = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a2.disableAnimation)) startAnimated();
      const bodyStyle = document.body.style;
      if (!shouldActivateMaxWidth.value) bodyStyle.setProperty(ns2.joinNamespace("page-max-width"), `100%`);
      bodyStyle.setProperty(docMaxWidthVar, `${Math.ceil(val / 100)}%`);
    };
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const shouldActivateMaxWidth = useMediaQuery(activateMaxWidthSlideMedia);
    watch(shouldActivateMaxWidth, () => {
      updateMaxWidth(docMaxWidth.value);
    });
    const update = useDebounce(updateMaxWidth, 1e3);
    watch(docMaxWidth, update);
    const format = (val) => `${Math.ceil(val / 100)}%`;
    const tips = [
      {
        title: t("tk.themeEnhance.docLayoutMaxWidth.helpTipTitle"),
        icon: scaleIcon,
        content: t("tk.themeEnhance.docLayoutMaxWidth.helpTipContent")
      }
    ];
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(transitionName),
        persisted: ""
      }, {
        default: withCtx(() => {
          var _a2;
          return [
            withDirectives(createVNode(_sfc_main79, {
              icon: unref(autoWidthIcon),
              title: unref(t)("tk.themeEnhance.docLayoutMaxWidth.title"),
              helper: !((_a2 = unref(themeEnhanceConfig).layoutSwitch) == null ? void 0 : _a2.disableDocMaxWidthHelp),
              "helper-desc": unref(t)("tk.themeEnhance.docLayoutMaxWidth.helpDesc"),
              tips,
              disabled: unref(isMobile)
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main81), {
                  modelValue: unref(docMaxWidth),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(docMaxWidth) ? docMaxWidth.value = $event : null),
                  disabled: unref(isMobile),
                  min: min.value,
                  max: max.value,
                  format,
                  class: normalizeClass(unref(ns2).e("slide")),
                  "aria-label": unref(t)("tk.themeEnhance.docLayoutMaxWidth.helperTipTitle")
                }, null, 8, ["modelValue", "disabled", "min", "max", "class", "aria-label"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["icon", "title", "helper", "helper-desc", "disabled"]), [
              [vShow, unref(layoutMode) === unref(LayoutMode).BothWidthAdjustable]
            ])
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/ThemeColor.vue2.mjs
import { useData as useData25 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/Switch.vue2.mjs
var _sfc_main84 = defineComponent({
  __name: "Switch",
  props: {
    "modelValue": { default: false },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const check = useModel(__props, "modelValue");
    const handleClick = () => {
      check.value = !check.value;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass([unref(ns2).e("switch"), unref(ns2).is("checked", check.value)]),
          onClick: handleClick
        },
        _cache[0] || (_cache[0] = [
          createBaseVNode(
            "div",
            { class: "action" },
            null,
            -1
            /* HOISTED */
          )
        ]),
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/ThemeColor.vue2.mjs
var _hoisted_158 = { class: "flx-justify-between flx-1" };
var _hoisted_242 = { class: "flx-align-center" };
var _hoisted_330 = { class: "label" };
var _hoisted_425 = ["title", "aria-label"];
var _sfc_main85 = defineComponent({
  ...{ name: "ThemeColor" },
  __name: "ThemeColor",
  setup(__props) {
    var _a, _b;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const { frontmatter } = useData25();
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const themeColor = useStorage(
      themeColorStorageKey,
      ((_a = themeEnhanceConfig.value.themeColor) == null ? void 0 : _a.defaultColor) || ThemeColor.vpDefault
    );
    const isSpread = useStorage(themeBgColorStorageKey, ((_b = themeEnhanceConfig.value.themeColor) == null ? void 0 : _b.defaultSpread) || false);
    const oldThemeColor = ref(themeColor.value);
    const primaryColor = ref("");
    const { start, stop, clear } = useThemeColor(primaryColor, () => {
      if (themeColorList.includes(themeColor.value)) {
        return [varNameList.vpIndigo1, varNameList.vpIndigo2, varNameList.vpIndigo3, varNameList.vpIndigoSoft];
      }
    });
    const update = (val) => {
      var _a2, _b2;
      if (!isClient) return;
      const el = document.documentElement;
      if (el.getAttribute(themeColorAttribute) === val) return;
      el.setAttribute(themeColorAttribute, val);
      clear();
      primaryColor.value = getComputedStyle(el).getPropertyValue(varNameList.vpIndigo1);
      (_b2 = (_a2 = themeEnhanceConfig.value.themeColor) == null ? void 0 : _a2.switchColorDone) == null ? void 0 : _b2.call(_a2, val);
    };
    watch(themeColor, update, { immediate: true });
    watch(
      () => frontmatter.value.themeColor,
      (newVal) => {
        if (newVal) {
          oldThemeColor.value = themeColor.value;
          themeColor.value = newVal;
        } else {
          themeColor.value = oldThemeColor.value;
        }
      },
      { immediate: true }
    );
    watch(
      isSpread,
      (newVal) => {
        if (newVal) start();
        else stop();
      },
      { immediate: true, flush: "post" }
    );
    const themeColorSelectList = computed(() => {
      const { append = [] } = themeEnhanceConfig.value.themeColor || {};
      return [
        {
          label: t("tk.themeEnhance.themeColor.vpLabel"),
          tip: t("tk.themeEnhance.themeColor.vpTip"),
          options: [
            {
              value: ThemeColor.vpDefault,
              label: t("tk.themeEnhance.themeColor.defaultLabel"),
              title: `VitePress ${t("tk.themeEnhance.themeColor.defaultLabel")}`,
              ariaLabel: `VitePress ${t("tk.themeEnhance.themeColor.defaultLabel")}`
            },
            {
              value: ThemeColor.vpGreen,
              label: t("tk.themeEnhance.themeColor.greenLabel"),
              title: `VitePress ${t("tk.themeEnhance.themeColor.greenLabel")}`,
              ariaLabel: `VitePress ${t("tk.themeEnhance.themeColor.greenLabel")}`
            },
            {
              value: ThemeColor.vpYellow,
              label: t("tk.themeEnhance.themeColor.yellowLabel"),
              title: `VitePress ${t("tk.themeEnhance.themeColor.yellowLabel")}`,
              ariaLabel: `VitePress ${t("tk.themeEnhance.themeColor.yellowLabel")}`
            },
            {
              value: ThemeColor.vpRed,
              label: t("tk.themeEnhance.themeColor.redLabel"),
              title: `VitePress ${t("tk.themeEnhance.themeColor.redLabel")}`,
              ariaLabel: `VitePress ${t("tk.themeEnhance.themeColor.redLabel")}`
            }
          ]
        },
        {
          label: t("tk.themeEnhance.themeColor.epLabel"),
          tip: t("tk.themeEnhance.themeColor.epTip"),
          options: [
            {
              value: ThemeColor.epBlue,
              label: `${t("tk.themeEnhance.themeColor.blueLabel")}`,
              title: `ElementPlus ${t("tk.themeEnhance.themeColor.blueLabel")}`,
              ariaLabel: `ElementPlus ${t("tk.themeEnhance.themeColor.blueLabel")}`
            },
            {
              value: ThemeColor.epGreen,
              label: `${t("tk.themeEnhance.themeColor.greenLabel")}`,
              title: `ElementPlus ${t("tk.themeEnhance.themeColor.greenLabel")}`,
              ariaLabel: `ElementPlus ${t("tk.themeEnhance.themeColor.greenLabel")}`
            },
            {
              value: ThemeColor.epYellow,
              label: `${t("tk.themeEnhance.themeColor.yellowLabel")}`,
              title: `ElementPlus ${t("tk.themeEnhance.themeColor.yellowLabel")}`,
              ariaLabel: `ElementPlus ${t("tk.themeEnhance.themeColor.yellowLabel")}`
            },
            {
              value: ThemeColor.epRed,
              label: `${t("tk.themeEnhance.themeColor.redLabel")}`,
              title: `ElementPlus ${t("tk.themeEnhance.themeColor.redLabel")}`,
              ariaLabel: `ElementPlus ${t("tk.themeEnhance.themeColor.redLabel")}`
            }
          ]
        },
        ...append
      ];
    });
    const tips = [
      { title: t("tk.themeEnhance.themeColor.vpHelpTipTitle"), content: t("tk.themeEnhance.themeColor.vpHelpTipContent") },
      { title: t("tk.themeEnhance.themeColor.epHelpTipTitle"), content: t("tk.themeEnhance.themeColor.epHelpTipContent") }
    ];
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createBlock(_sfc_main79, {
        class: normalizeClass(unref(ns2).e("theme-color")),
        icon: unref(waterIcon),
        title: unref(t)("tk.themeEnhance.themeColor.title"),
        helper: !((_a2 = unref(themeEnhanceConfig).themeColor) == null ? void 0 : _a2.disableHelp),
        "helper-desc": unref(t)("tk.themeEnhance.themeColor.helpDesc"),
        tips,
        disabled: unref(isMobile)
      }, {
        title: withCtx(() => [
          createBaseVNode("div", _hoisted_158, [
            createTextVNode(
              toDisplayString(unref(t)("tk.themeEnhance.themeColor.title")) + " ",
              1
              /* TEXT */
            ),
            createBaseVNode("div", _hoisted_242, [
              createBaseVNode(
                "span",
                _hoisted_330,
                toDisplayString(unref(t)("tk.themeEnhance.themeColor.speedLabel")),
                1
                /* TEXT */
              ),
              createVNode(_sfc_main84, {
                modelValue: unref(isSpread),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(isSpread) ? isSpread.value = $event : null)
              }, null, 8, ["modelValue"])
            ])
          ])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(themeColorSelectList.value, (item) => {
              return openBlock(), createElementBlock(
                Fragment,
                {
                  key: item.label
                },
                [
                  createBaseVNode("h3", {
                    title: item.tip,
                    "aria-label": item.label
                  }, toDisplayString(item.label), 9, _hoisted_425),
                  createVNode(unref(_sfc_main75), {
                    modelValue: unref(themeColor),
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(themeColor) ? themeColor.value = $event : null),
                    options: item.options,
                    disabled: unref(isMobile)
                  }, null, 8, ["modelValue", "options", "disabled"])
                ],
                64
                /* STABLE_FRAGMENT */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "icon", "title", "helper", "helper-desc", "disabled"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/Spotlight.vue2.mjs
import { useData as useData26 } from "vitepress";

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/components/SpotlightHover.vue2.mjs
import { useRoute as useRoute5 } from "vitepress";
var _sfc_main86 = defineComponent({
  ...{ name: "SpotlightHover" },
  __name: "SpotlightHover",
  props: {
    enabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const shouldRecalculate = ref(false);
    const boxStyles = ref({ display: "none" });
    const vpDocElement = ref();
    const highlightedElement = ref();
    const spotlightStyle = useStorage(spotlightStyleStorageKey, SpotlightStyle.Aside);
    const mousePosition = ref({ x: 0, y: 0 });
    const computeBoxStyles = (bounding) => {
      return {
        display: "block",
        width: `${bounding.width + 8}px`,
        height: `${bounding.height + 8}px`,
        left: `${bounding.left - 4}px`,
        top: `${bounding.top - 4}px`,
        transition: "all 0.2s ease",
        borderRadius: "8px"
      };
    };
    const findChildElementUnderVPDocElement = (element) => {
      if (element === null) return null;
      if (element.parentElement === document.querySelector(".VPDoc main .vp-doc > div")) return element;
      else return findChildElementUnderVPDocElement(element.parentElement);
    };
    const watchHandler = () => {
      var _a;
      if (!isClient) return;
      const element = document.elementFromPoint(mousePosition.value.x, mousePosition.value.y);
      if (!(element && ((_a = vpDocElement.value) == null ? void 0 : _a.contains(element)))) return;
      const el = findChildElementUnderVPDocElement(element);
      highlightedElement.value = el || void 0;
      if (highlightedElement.value && highlightedElement.value.tagName === "P") {
        const val = highlightedElement.value;
        const style = window.getComputedStyle(val);
        const lineHeight = Number.parseFloat(style.lineHeight);
        const lines = Math.floor(val.offsetHeight / lineHeight);
        const rect = val.getBoundingClientRect();
        const relativeY = mousePosition.value.y - rect.top;
        for (let i = 0; i < lines; i++) {
          const top = i * lineHeight;
          const height = lineHeight;
          const left = val.offsetLeft;
          const width = val.offsetWidth;
          if (relativeY >= top && relativeY < top + height) {
            boxStyles.value = computeBoxStyles({
              top: top + rect.top,
              left: left + rect.left,
              width,
              height
            });
            break;
          }
        }
      } else {
        if (highlightedElement.value) {
          const rect = highlightedElement.value.getBoundingClientRect();
          boxStyles.value = computeBoxStyles({
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          });
        }
      }
    };
    useEventListener(
      () => document,
      "mousemove",
      (event) => {
        mousePosition.value = { x: event.clientX, y: event.clientY };
      }
    );
    useEventListener(() => document, "scroll", watchHandler, true);
    onMounted(() => {
      vpDocElement.value = document.querySelector(".VPDoc main .vp-doc");
    });
    const route = useRoute5();
    watch(
      route,
      () => {
        vpDocElement.value = document.querySelector(".VPDoc main .vp-doc");
        shouldRecalculate.value = true;
        boxStyles.value = { display: "none" };
        watchHandler();
        shouldRecalculate.value = false;
      },
      { flush: "post" }
    );
    watch([() => mousePosition.value.x, () => mousePosition.value.y], () => {
      if (props.enabled) watchHandler();
    });
    watch(
      () => props.enabled,
      (val) => {
        if (!val) boxStyles.value = { display: "none" };
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        props.enabled && !shouldRecalculate.value ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            style: normalizeStyle(boxStyles.value),
            class: normalizeClass([
              unref(ns2).joinNamespace("spotlight-hover"),
              unref(spotlightStyle) === unref(SpotlightStyle).Under ? unref(ns2).joinNamespace("spotlight-hover__under") : "",
              unref(spotlightStyle) === unref(SpotlightStyle).Aside ? unref(ns2).joinNamespace("spotlight-hover__aside") : ""
            ]),
            "aria-hidden": "true",
            focusable: "false"
          },
          null,
          6
          /* CLASS, STYLE */
        )) : createCommentVNode("v-if", true)
      ]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/Spotlight.vue2.mjs
var _sfc_main87 = defineComponent({
  ...{ name: "Spotlight" },
  __name: "Spotlight",
  setup(__props) {
    var _a;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const { frontmatter } = useData26();
    const isMobile = useMediaQuery(touchMedia);
    const spotlight = useStorage(spotlightStorageKey, ((_a = themeEnhanceConfig.value.spotlight) == null ? void 0 : _a.defaultValue) ?? true);
    const oldSpotlight = ref(spotlight.value);
    watch(
      () => frontmatter.value.spotlight,
      (newVal) => {
        if (newVal !== void 0) {
          oldSpotlight.value = spotlight.value;
          spotlight.value = newVal;
        } else {
          spotlight.value = oldSpotlight.value;
        }
      },
      { immediate: true }
    );
    const segmentedOptions = computed(() => [
      {
        value: true,
        label: "ON",
        title: t("tk.themeEnhance.spotlight.onTipTitle"),
        ariaLabel: t("tk.themeEnhance.spotlight.onTipTitle")
      },
      {
        value: false,
        label: "OFF",
        title: t("tk.themeEnhance.spotlight.offTipTitle"),
        ariaLabel: t("tk.themeEnhance.spotlight.offTipTitle")
      }
    ]);
    const tips = [
      {
        title: `ON ${t("tk.themeEnhance.spotlight.onTipTitle")}`,
        content: t("tk.themeEnhance.spotlight.onHelpTipContent")
      },
      {
        title: `OFF ${t("tk.themeEnhance.spotlight.offTipTitle")}`,
        content: t("tk.themeEnhance.spotlight.offHelpTipContent")
      }
    ];
    return (_ctx, _cache) => {
      var _a2;
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createVNode(_sfc_main79, {
            icon: unref(clickIcon),
            title: unref(t)("tk.themeEnhance.spotlight.title"),
            helper: !((_a2 = unref(themeEnhanceConfig).spotlight) == null ? void 0 : _a2.disableHelp),
            "helper-desc": unref(t)("tk.themeEnhance.spotlight.helpDesc"),
            tips,
            disabled: unref(isMobile)
          }, {
            default: withCtx(() => [
              createVNode(unref(_sfc_main75), {
                modelValue: unref(spotlight),
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(spotlight) ? spotlight.value = $event : null),
                options: segmentedOptions.value,
                disabled: unref(isMobile)
              }, null, 8, ["modelValue", "options", "disabled"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["icon", "title", "helper", "helper-desc", "disabled"]),
          unref(spotlight) && !unref(isMobile) ? (openBlock(), createBlock(_sfc_main86, {
            key: 0,
            enabled: unref(spotlight) && !unref(isMobile)
          }, null, 8, ["enabled"])) : createCommentVNode("v-if", true)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/SpotlightStyle.vue2.mjs
import "vitepress";
var _sfc_main88 = defineComponent({
  ...{ name: "SpotlightStyle" },
  __name: "SpotlightStyle",
  setup(__props) {
    var _a, _b;
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const { t } = useLocale();
    const spotlightStyle = useStorage(
      spotlightStyleStorageKey,
      ((_a = themeEnhanceConfig.value.spotlight) == null ? void 0 : _a.defaultStyle) || SpotlightStyle.Aside
    );
    const spotlightToggledOn = useStorage(spotlightStorageKey, ((_b = themeEnhanceConfig.value.spotlight) == null ? void 0 : _b.defaultValue) ?? true);
    const isMobile = useMediaQuery(touchMedia);
    const content = computed(() => [
      {
        value: SpotlightStyle.Aside,
        title: t("tk.themeEnhance.spotlightStyles.asideTipTitle"),
        helpMessage: t("tk.themeEnhance.spotlightStyles.asideHelpTipContent"),
        ariaLabel: t("tk.themeEnhance.spotlightStyles.asideTipTitle"),
        icon: alignTextLeftIcon
      },
      {
        value: SpotlightStyle.Under,
        title: t("tk.themeEnhance.spotlightStyles.underTipTitle"),
        helpMessage: t("tk.themeEnhance.spotlightStyles.underHelpTipContent"),
        ariaLabel: t("tk.themeEnhance.spotlightStyles.underTipTitle"),
        icon: alignLeftIcon
      }
    ]);
    const segmentedOptions = computed(
      () => content.value.map((item) => ({
        value: item.value,
        title: item.title,
        ariaLabel: item.ariaLabel,
        icon: item.icon
      }))
    );
    const tips = computed(
      () => content.value.map((item) => ({
        title: item.title,
        icon: item.icon,
        content: item.helpMessage
      }))
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: unref(transitionName) }, {
        default: withCtx(() => {
          var _a2;
          return [
            unref(spotlightToggledOn) ? (openBlock(), createBlock(_sfc_main79, {
              key: 0,
              icon: unref(clickIcon),
              title: unref(t)("tk.themeEnhance.spotlightStyles.title"),
              helper: !((_a2 = unref(themeEnhanceConfig).spotlight) == null ? void 0 : _a2.disableHelp),
              "helper-desc": unref(t)("tk.themeEnhance.spotlightStyles.helpDesc"),
              tips: tips.value,
              disabled: unref(isMobile)
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main75), {
                  modelValue: unref(spotlightStyle),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(spotlightStyle) ? spotlightStyle.value = $event : null),
                  options: segmentedOptions.value,
                  disabled: unref(isMobile)
                }, null, 8, ["modelValue", "options", "disabled"])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["icon", "title", "helper", "helper-desc", "tips", "disabled"])) : createCommentVNode("v-if", true)
          ];
        }),
        _: 1
        /* STABLE */
      }, 8, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/ThemeEnhance/src/index.vue2.mjs
var _sfc_main89 = defineComponent({
  ...{ name: "ThemeEnhance" },
  __name: "index",
  props: {
    position: {}
  },
  setup(__props) {
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", { position: "top" });
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const disabledList = computed(() => {
      var _a, _b, _c;
      return {
        layoutSwitch: ((_a = themeEnhanceConfig.value.layoutSwitch) == null ? void 0 : _a.disabled) ?? false,
        themeColor: ((_b = themeEnhanceConfig.value.themeColor) == null ? void 0 : _b.disabled) ?? false,
        spotlight: ((_c = themeEnhanceConfig.value.spotlight) == null ? void 0 : _c.disabled) ?? false
      };
    });
    return (_ctx, _cache) => {
      return !unref(isMobile) && unref(themeEnhanceConfig).position === "top" ? (openBlock(), createBlock(unref(_sfc_main67), {
        key: 0,
        class: normalizeClass([unref(ns2).b(), unref(ns2).is(_ctx.position), "flx-align-center"]),
        "popper-class": unref(ns2).e("popover"),
        "y-offset": -15
      }, {
        reference: withCtx(() => [
          createVNode(unref(_sfc_main14), {
            icon: unref(readingIcon),
            size: 20
          }, null, 8, ["icon"])
        ]),
        default: withCtx(() => [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns2).e("content"))
            },
            [
              renderSlot(_ctx.$slots, "teek-theme-enhance-top"),
              !disabledList.value.layoutSwitch ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createVNode(_sfc_main80),
                  createVNode(_sfc_main82),
                  createVNode(_sfc_main83)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              !disabledList.value.themeColor ? (openBlock(), createBlock(_sfc_main85, { key: 1 })) : createCommentVNode("v-if", true),
              !disabledList.value.spotlight ? (openBlock(), createElementBlock(
                Fragment,
                { key: 2 },
                [
                  createVNode(_sfc_main87),
                  createVNode(_sfc_main88)
                ],
                64
                /* STABLE_FRAGMENT */
              )) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-theme-enhance-bottom")
            ],
            2
            /* CLASS */
          )
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["class", "popper-class"])) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/namespace.mjs
import "vitepress";
var ns3 = useNamespace("right-bottom-button");

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/BackTop.vue2.mjs
import "vitepress";
var _hoisted_159 = ["title", "aria-label", "aria-valuenow"];
var _sfc_main90 = defineComponent({
  ...{ name: "BackTop" },
  __name: "BackTop",
  setup(__props) {
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const backTopDone = getTeekConfigRef("backTopDone");
    const scrollTop = ref(0);
    const showToTop = computed(() => scrollTop.value > 100);
    const progress = ref(0);
    const scrollToTop = useDebounce(
      () => {
        var _a;
        if (!isClient) return;
        (_a = document.querySelector("html")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          var _a2;
          (_a2 = backTopDone.value) == null ? void 0 : _a2.call(backTopDone, message);
        }, 600);
      },
      500,
      true
    );
    const watchScroll = () => {
      scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop || 0;
      updateScrollProgress();
    };
    const updateScrollProgress = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      progress.value = Math.round(p * 100);
    };
    onMounted(() => {
      updateScrollProgress();
    });
    useEventListener(() => window, "scroll", watchScroll);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns3).joinNamespace("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            title: unref(t)("tk.rightBottomButton.backTopTitle"),
            class: normalizeClass([unref(ns3).e("button"), "back-top"]),
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(scrollToTop) && unref(scrollToTop)(...args)),
            style: normalizeStyle({ [unref(ns3).cssVarName("progress")]: progress.value }),
            role: "button",
            "aria-label": unref(t)("tk.rightBottomButton.backTopTitle"),
            "aria-valuenow": progress.value,
            "aria-valuemin": "0",
            "aria-valuemax": "100"
          }, [
            createVNode(unref(_sfc_main14), {
              icon: unref(rocketIcon),
              "aria-hidden": "true"
            }, null, 8, ["icon"])
          ], 14, _hoisted_159), [
            [vShow, showToTop.value]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/ToComment.vue2.mjs
import "vitepress";
var _hoisted_160 = ["title", "aria-label"];
var _sfc_main91 = defineComponent({
  ...{ name: "ToComment" },
  __name: "ToComment",
  setup(__props) {
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const toCommentDone = getTeekConfigRef("toCommentDone");
    const scrollTop = ref(0);
    const showToComment = computed(() => {
      var _a, _b;
      if (!isClient) return false;
      const docContentHeight = (_a = document.querySelector(".content-container .main")) == null ? void 0 : _a.getBoundingClientRect().height;
      const docFooterHeight = ((_b = document.querySelector(".VPDocFooter")) == null ? void 0 : _b.getBoundingClientRect().height) || 200;
      let height = 0;
      if (docContentHeight) height = docContentHeight - docFooterHeight - window.innerHeight / 2;
      return scrollTop.value < height;
    });
    const scrollToComment = useDebounce(
      () => {
        var _a;
        if (!isClient) return;
        (_a = document.querySelector(`#${ns3.joinNamespace("comment")}`)) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          var _a2;
          (_a2 = toCommentDone.value) == null ? void 0 : _a2.call(toCommentDone, message);
        }, 600);
      },
      500,
      true
    );
    const watchScroll = () => {
      scrollTop.value = document.documentElement.scrollTop || document.body.scrollTop || 0;
    };
    useEventListener(() => window, "scroll", watchScroll);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns3).joinNamespace("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("div", {
            title: unref(t)("tk.rightBottomButton.toComment"),
            class: normalizeClass(unref(ns3).e("button")),
            onClick: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(scrollToComment) && unref(scrollToComment)(...args)),
            role: "button",
            "aria-label": unref(t)("tk.rightBottomButton.toComment")
          }, [
            createVNode(unref(_sfc_main14), {
              icon: unref(commentIcon),
              "aria-hidden": "true"
            }, null, 8, ["icon"])
          ], 10, _hoisted_160), [
            [vShow, showToComment.value]
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["name"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/ThemeColor.vue2.mjs
import { useData as useData27 } from "vitepress";
var _hoisted_161 = ["title", "aria-label"];
var _hoisted_243 = ["onClick", "aria-label"];
var _sfc_main92 = defineComponent({
  ...{ name: "ThemeColor" },
  __name: "ThemeColor",
  setup(__props) {
    var _a;
    const { t } = useLocale();
    const { frontmatter } = useData27();
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const themeColor = useStorage(
      themeColorStorageKey,
      ((_a = themeEnhanceConfig.value.themeColor) == null ? void 0 : _a.defaultColor) || ThemeColor.vpDefault
    );
    const update = (val) => {
      const el = document.documentElement;
      themeColor.value = val;
      if (el.getAttribute(themeColorAttribute) === val) return;
      el.setAttribute(themeColorAttribute, val);
    };
    watch(
      () => frontmatter.value.themeColor,
      (newVal) => {
        if (newVal) update(newVal);
      }
    );
    onMounted(() => {
      if (frontmatter.value.themeColor) update(frontmatter.value.themeColor);
      else update(themeColor.value);
    });
    const themeColorList2 = computed(() => {
      const { append = [] } = themeEnhanceConfig.value.themeColor || {};
      return [
        {
          label: t("tk.themeEnhance.themeColor.vpLabel"),
          tip: t("tk.themeEnhance.themeColor.vpTip"),
          options: [
            { label: t("tk.themeEnhance.themeColor.defaultLabel"), value: "vp-default" },
            { label: t("tk.themeEnhance.themeColor.greenLabel"), value: "vp-green" },
            { label: t("tk.themeEnhance.themeColor.yellowLabel"), value: "vp-yellow" },
            { label: t("tk.themeEnhance.themeColor.redLabel"), value: "vp-red" }
          ]
        },
        {
          label: t("tk.themeEnhance.themeColor.epLabel"),
          tip: t("tk.themeEnhance.themeColor.epTip"),
          options: [
            { label: t("tk.themeEnhance.themeColor.blueLabel"), value: "ep-blue" },
            { label: t("tk.themeEnhance.themeColor.greenLabel"), value: "ep-green" },
            { label: t("tk.themeEnhance.themeColor.yellowLabel"), value: "ep-yellow" },
            { label: t("tk.themeEnhance.themeColor.redLabel"), value: "ep-red" }
          ]
        },
        ...append
      ];
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main67), {
        class: normalizeClass(unref(ns3).e("button")),
        "popper-class": unref(ns3).e("dropdown"),
        placement: "left-start",
        width: 120,
        "x-offset": 15,
        "transition-name": unref(ns3).joinNamespace("fade-scale"),
        title: unref(t)("tk.themeEnhance.themeColor.title"),
        role: "button",
        "aria-label": unref(t)("tk.themeEnhance.themeColor.title")
      }, {
        reference: withCtx(() => [
          createVNode(unref(_sfc_main14), {
            icon: unref(magicIcon),
            "aria-hidden": "true"
          }, null, 8, ["icon"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(themeColorList2.value, (item) => {
              return openBlock(), createElementBlock("ul", {
                key: item.label
              }, [
                createBaseVNode("li", {
                  class: normalizeClass(`${unref(ns3).e("dropdown__title")} sle`),
                  title: item.tip,
                  "aria-label": item.label
                }, toDisplayString(item.label), 11, _hoisted_161),
                createBaseVNode("li", null, [
                  createBaseVNode("ul", null, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(item.options, (option) => {
                        return openBlock(), createElementBlock("li", {
                          key: item.label + option.value,
                          class: normalizeClass(["dropdown-item", "sle", { active: option.value === unref(themeColor) }]),
                          onClick: ($event) => update(option.value),
                          role: "button",
                          "aria-label": option.label
                        }, toDisplayString(option.label), 11, _hoisted_243);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ])
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 8, ["class", "popper-class", "transition-name", "title", "aria-label"]);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/RightBottomButton/src/index.vue2.mjs
var _sfc_main93 = defineComponent({
  ...{ name: "RightBottomButton" },
  __name: "index",
  setup(__props) {
    const { getTeekConfigRef } = useTeekConfig();
    const themeEnhanceConfig = getTeekConfigRef("themeEnhance", {});
    const teekConfig = getTeekConfigRef(null, { comment: { provider: "" } });
    const { frontmatter } = useData28();
    const commentConfig = computed(() => {
      const comment = frontmatter.value.comment ?? teekConfig.value.comment;
      if (isBoolean(comment)) return { enabled: comment };
      return { enabled: true, provider: comment.provider };
    });
    const isMobile = useMediaQuery(mobileMaxWidthMedia);
    const disabledThemeColor = computed(() => {
      const { themeColor = {} } = themeEnhanceConfig.value;
      return !isMobile.value || (themeColor.disabled ?? themeColor.disabledInMobile);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns3).b(), unref(ns3).joinNamespace("wallpaper-outside"), "flx-column"])
        },
        [
          renderSlot(_ctx.$slots, "teek-right-bottom-before"),
          createVNode(_sfc_main90),
          commentConfig.value.enabled && commentConfig.value.provider ? (openBlock(), createBlock(_sfc_main91, { key: 0 })) : createCommentVNode("v-if", true),
          !unref(isMobile) && unref(themeEnhanceConfig).position === "bottom" ? (openBlock(), createBlock(unref(_sfc_main89), {
            key: 1,
            class: normalizeClass(unref(ns3).e("button")),
            position: "bottom",
            "y-offset": 7
          }, createSlots({
            _: 2
            /* DYNAMIC */
          }, [
            renderList(_ctx.$slots, (_, name) => {
              return {
                name,
                fn: withCtx(() => [
                  renderSlot(_ctx.$slots, name)
                ])
              };
            })
          ]), 1032, ["class"])) : createCommentVNode("v-if", true),
          !disabledThemeColor.value ? (openBlock(), createBlock(_sfc_main92, { key: 2 })) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "teek-right-bottom-after")
        ],
        2
        /* CLASS */
      );
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/Notice/src/index.vue2.mjs
import { useData as useData29 } from "vitepress";
var _hoisted_162 = ["aria-label"];
var _hoisted_244 = ["aria-label"];
var _hoisted_331 = ["aria-label"];
var _hoisted_426 = { class: "flx-align-center" };
var _hoisted_516 = {
  id: "notice-title",
  class: "title sle"
};
var _hoisted_613 = ["aria-label"];
var _sfc_main94 = defineComponent({
  ...{ name: "Notice" },
  __name: "index",
  setup(__props) {
    const ns4 = useNamespace("notice");
    const { t } = useLocale();
    const { getTeekConfigRef } = useTeekConfig();
    const vpRouter = useVpRouter();
    const { localeIndex } = useData29();
    const noticeConfig = getTeekConfigRef("notice", {
      noticeStyle: void 0,
      iconStyle: {},
      popoverStyle: {},
      title: t("tk.notice.title"),
      initOpen: true,
      duration: 0,
      mobileMinify: false,
      reopen: true,
      useStorage: true,
      twinkle: false,
      position: "top",
      noticeIcon,
      closeIcon,
      onAfterRouteChange: void 0
    });
    const destroyNoticeIcon = ref(false);
    const showNoticeIcon = computed(() => !showPopover.value && !destroyNoticeIcon.value);
    const showPopover = ref(noticeConfig.value.initOpen);
    watch(
      () => noticeConfig.value.initOpen,
      (newValue) => showPopover.value = newValue
    );
    const styleObj = computed(() => {
      const { noticeStyle } = noticeConfig.value;
      if (!noticeStyle) return "";
      return noticeStyle.trim().startsWith(`.${ns4.b()}`) ? noticeStyle : `.${ns4.b()} { ${noticeStyle} }`;
    });
    const noticeTitle = computed(() => {
      const { title } = noticeConfig.value;
      if (isString2(title)) return title;
      return title(localeIndex.value);
    });
    const isMobile = useMediaQuery("(max-width: 768px)");
    watch(
      () => noticeConfig.value.mobileMinify,
      (val) => {
        if (isMobile) destroyNoticeIcon.value = val;
      },
      { immediate: true }
    );
    let timer;
    const closePopoverWhenTimeout = () => {
      const { duration } = noticeConfig.value;
      if (showPopover.value && duration > 0) {
        if (timer) {
          clearTimeout(timer);
          timer = null;
        }
        timer = setTimeout(handleClosePopover, duration);
      }
    };
    onMounted(() => {
      vpRouter.bindAfterRouteChange(
        ns4.joinNamespace("notice"),
        () => {
          var _a, _b;
          return (_b = (_a = noticeConfig.value).onAfterRouteChange) == null ? void 0 : _b.call(_a, vpRouter.route, showNoticeIcon.value, showPopover.value);
        }
      );
      closePopoverWhenTimeout();
    });
    const openOrDisableScroll = (action) => {
      if (!isClient) return;
      if (noticeConfig.value.position !== "center") return;
      const actions = {
        open: "remove",
        disable: "add"
      };
      document.documentElement.classList[actions[action]]("disable-scroll");
    };
    const storageKey = computed(() => ns4.storageKey("notice", localeIndex.value, isClient ? window.location.hostname : ""));
    if (noticeConfig.value.useStorage) {
      watch(
        localeIndex,
        () => {
          if (!noticeConfig.value.useStorage) return;
          const oldValue = localStorage.getItem(storageKey.value);
          if (oldValue) {
            const isShowPopover = oldValue === "true";
            showPopover.value = isShowPopover;
            if (isShowPopover) openOrDisableScroll("disable");
          }
        },
        { immediate: true }
      );
    }
    const handleOpenPopover = () => {
      showPopover.value = true;
      storagePopoverState("true");
      closePopoverWhenTimeout();
      openOrDisableScroll("disable");
    };
    const handleClosePopover = () => {
      showPopover.value = false;
      storagePopoverState("false");
      if (!noticeConfig.value.reopen) destroyNoticeIcon.value = true;
      if (timer) clearTimeout(timer);
      openOrDisableScroll("open");
    };
    const storagePopoverState = (state) => {
      if (noticeConfig.value.useStorage) localStorage.setItem(storageKey.value, state);
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(ns4).b(), unref(ns4).joinNamespace("wallpaper-outside")]),
        "aria-label": unref(t)("tk.notice.label")
      }, [
        styleObj.value ? (openBlock(), createBlock(resolveDynamicComponent("style"), { key: 0 }, {
          default: withCtx(() => [
            createTextVNode(
              toDisplayString(styleObj.value),
              1
              /* TEXT */
            )
          ]),
          _: 1
          /* STABLE */
        })) : createCommentVNode("v-if", true),
        createCommentVNode(" 公告图标 "),
        !destroyNoticeIcon.value ? withDirectives((openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass([unref(ns4).e("icon"), { twinkle: unref(noticeConfig).twinkle }, "flx"]),
          style: normalizeStyle(unref(noticeConfig).iconStyle),
          onClick: handleOpenPopover,
          role: "button",
          "aria-label": unref(t)("tk.notice.openLabel")
        }, [
          createVNode(unref(_sfc_main14), {
            icon: unref(noticeConfig).noticeIcon,
            color: "#ffffff",
            size: "14px",
            "aria-hidden": "true"
          }, null, 8, ["icon"])
        ], 14, _hoisted_244)), [
          [vShow, showNoticeIcon.value]
        ]) : createCommentVNode("v-if", true),
        createCommentVNode(" 公告弹窗 "),
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass([unref(ns4).e("popover"), unref(ns4).is(unref(noticeConfig).position)]),
            style: normalizeStyle(unref(noticeConfig).popoverStyle),
            role: "dialog",
            "aria-modal": true,
            "aria-labelledby": "notice-title"
          },
          [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createBaseVNode("div", {
                class: normalizeClass([unref(ns4).e("popover__header"), "flx-justify-between"]),
                "aria-label": unref(t)("tk.notice.headLabel")
              }, [
                createBaseVNode("div", _hoisted_426, [
                  createVNode(unref(_sfc_main14), {
                    icon: unref(noticeConfig).noticeIcon,
                    color: "#ffffff",
                    size: "20px",
                    "aria-hidden": "true"
                  }, null, 8, ["icon"]),
                  createBaseVNode(
                    "span",
                    _hoisted_516,
                    toDisplayString(noticeTitle.value),
                    1
                    /* TEXT */
                  )
                ]),
                createVNode(unref(_sfc_main14), {
                  icon: unref(noticeConfig).closeIcon,
                  color: "#ffffff",
                  size: "20px",
                  class: normalizeClass(unref(ns4).joinNamespace("pointer")),
                  onClick: handleClosePopover,
                  role: "button",
                  "aria-label": unref(t)("tk.notice.closeLabel")
                }, null, 8, ["icon", "class", "aria-label"])
              ], 10, _hoisted_331)
            ]),
            createBaseVNode("div", {
              class: normalizeClass(unref(ns4).e("popover__content")),
              "aria-label": unref(t)("tk.notice.contentLabel")
            }, [
              renderSlot(_ctx.$slots, "teek-notice-content")
            ], 10, _hoisted_613)
          ],
          6
          /* CLASS, STYLE */
        ), [
          [vShow, showPopover.value]
        ]),
        createCommentVNode(" 遮罩层，与公告弹窗一起出现 "),
        withDirectives(createBaseVNode(
          "div",
          {
            class: normalizeClass(unref(ns4).e("mask")),
            role: "presentation"
          },
          null,
          2
          /* CLASS */
        ), [
          [vShow, showPopover.value && unref(noticeConfig).position === "center"]
        ])
      ], 10, _hoisted_162);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/common/VpContainer/src/index.vue2.mjs
import "vitepress";
var _hoisted_163 = {
  key: 0,
  class: "custom-block-title"
};
var _hoisted_245 = ["innerHTML"];
var _hoisted_332 = { key: 1 };
var _hoisted_427 = ["innerHTML"];
var _sfc_main95 = defineComponent({
  ...{ name: "VpContainer" },
  __name: "index",
  props: {
    type: { default: "tip" },
    title: {},
    text: { default: "" }
  },
  setup(__props) {
    const ns4 = useNamespace("vp-container");
    const slots = useSlots();
    const hasTitle = computed(() => __props.title || slots.title);
    const hasText = computed(() => __props.text || slots.default);
    return (_ctx, _cache) => {
      return hasTitle.value || hasText.value ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass([unref(ns4).b(), "vp-doc"])
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass([_ctx.type, "custom-block", { "no-title": !_ctx.title }])
            },
            [
              hasTitle.value ? (openBlock(), createElementBlock("div", _hoisted_163, [
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createBaseVNode("span", { innerHTML: _ctx.title }, null, 8, _hoisted_245)
                ])
              ])) : createCommentVNode("v-if", true),
              hasText.value ? (openBlock(), createElementBlock("p", _hoisted_332, [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createBaseVNode("span", { innerHTML: _ctx.text }, null, 8, _hoisted_427)
                ])
              ])) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true);
    };
  }
});

// node_modules/vitepress-theme-teek/es/components/theme/Layout/src/index.vue2.mjs
var _sfc_main96 = defineComponent({
  ...{ name: "TeekLayout" },
  __name: "index",
  props: {
    locale: {}
  },
  setup(__props) {
    const props = __props;
    provide(
      localeContextKey,
      computed(() => props.locale)
    );
    const { Layout } = DefaultTheme;
    const ns4 = useNamespace("layout");
    const { getTeekConfigRef } = useTeekConfig();
    const { isHomePage, isArchivesPage, isCataloguePage, isArticleOverviewPage } = usePageState();
    const { frontmatter, localeIndex, page } = useData30();
    const teekConfig = getTeekConfigRef(null, {
      teekTheme: true,
      teekHome: true,
      vpHome: true,
      codeBlock: { disabled: false },
      themeSize: "",
      bodyBgImg: {},
      notice: {},
      comment: { provider: "" },
      articleUpdate: { enabled: true },
      articleTopTip: void 0,
      articleBottomTip: void 0,
      articleShare: {},
      appreciation: {},
      riskLink: { enabled: false }
    });
    const commentConfig = computed(() => {
      const comment = frontmatter.value.comment ?? teekConfig.value.comment;
      if (isBoolean(comment)) return { enabled: comment };
      return {
        enabled: true,
        components: {
          twikoo: _sfc_main69,
          waline: _sfc_main72,
          giscus: _sfc_main71,
          artalk: _sfc_main70
        },
        provider: comment.provider,
        options: comment.options
      };
    });
    const topTipConfig = computed(() => {
      var _a, _b;
      return (_b = (_a = teekConfig.value).articleTopTip) == null ? void 0 : _b.call(_a, frontmatter.value, localeIndex.value, page.value);
    });
    const bottomTipConfig = computed(() => {
      var _a, _b;
      return (_b = (_a = teekConfig.value).articleBottomTip) == null ? void 0 : _b.call(_a, frontmatter.value, localeIndex.value, page.value);
    });
    const themeSizeAttribute = ns4.joinNamespace("theme-size");
    watch(
      () => teekConfig.value.themeSize,
      (newValue) => {
        if (!isClient) return;
        if (newValue) document.documentElement.setAttribute(themeSizeAttribute, newValue);
        else document.documentElement.removeAttribute(themeSizeAttribute);
      },
      { immediate: true, flush: "post" }
    );
    const { watchSite, watchPages } = useWatchLogin();
    const { restart } = useRiskLink({
      whitelist: teekConfig.value.riskLink.whitelist,
      blacklist: teekConfig.value.riskLink.blacklist
    });
    watchSite();
    watchPages();
    onContentUpdated2(() => {
      if (teekConfig.value.riskLink.enabled) restart();
    });
    const usedSlots = [
      "home-hero-before",
      "nav-bar-content-after",
      "layout-bottom",
      "doc-footer-before",
      "doc-before",
      "doc-after",
      "aside-bottom",
      "page-top",
      "aside-outline-before",
      "sidebar-nav-before"
    ];
    return (_ctx, _cache) => {
      var _a, _b;
      return unref(teekConfig).teekTheme ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          unref(frontmatter).loginPage === true ? renderSlot(_ctx.$slots, "teek-login-page", { key: 0 }, () => [
            createVNode(unref(_sfc_main17))
          ]) : createCommentVNode("v-if", true),
          unref(frontmatter).riskLinkPage === true ? renderSlot(_ctx.$slots, "teek-risk-link-page", { key: 1 }, () => [
            createVNode(unref(_sfc_main18))
          ]) : createCommentVNode("v-if", true),
          unref(frontmatter).layout !== false ? (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              ((_a = unref(teekConfig).bodyBgImg) == null ? void 0 : _a.imgSrc) ? (openBlock(), createBlock(unref(_sfc_main50), { key: 0 })) : createCommentVNode("v-if", true),
              createVNode(unref(_sfc_main63)),
              ((_b = unref(teekConfig).notice) == null ? void 0 : _b.enabled) ? (openBlock(), createBlock(
                unref(_sfc_main94),
                { key: 1 },
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true),
              createVNode(
                unref(_sfc_main93),
                null,
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )
            ],
            64
            /* STABLE_FRAGMENT */
          )) : createCommentVNode("v-if", true),
          createVNode(unref(Layout), {
            class: normalizeClass([unref(ns4).b(), { [unref(ns4).m("hide-vp-home")]: !unref(teekConfig).vpHome }])
          }, createSlots({
            "home-hero-before": withCtx(() => [
              renderSlot(_ctx.$slots, "home-hero-before"),
              renderSlot(_ctx.$slots, "teek-home-before"),
              createCommentVNode(" 自定义首页 "),
              unref(teekConfig).teekHome ? (openBlock(), createBlock(
                unref(_sfc_main48),
                { key: 0 },
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-home-after")
            ]),
            "nav-bar-content-after": withCtx(() => [
              renderSlot(_ctx.$slots, "nav-bar-content-after"),
              createVNode(
                unref(_sfc_main89),
                { position: "top" },
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )
            ]),
            "layout-bottom": withCtx(() => [
              unref(isHomePage) ? (openBlock(), createBlock(unref(_sfc_main51), { key: 0 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-footer-info-before"),
              unref(isHomePage) ? (openBlock(), createBlock(unref(_sfc_main52), { key: 1 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-footer-info-after"),
              renderSlot(_ctx.$slots, "layout-bottom")
            ]),
            "sidebar-nav-before": withCtx(() => [
              createVNode(unref(_sfc_main49))
            ]),
            "doc-footer-before": withCtx(() => [
              bottomTipConfig.value ? (openBlock(), createBlock(
                unref(_sfc_main95),
                normalizeProps(mergeProps({ key: 0 }, bottomTipConfig.value)),
                null,
                16
                /* FULL_PROPS */
              )) : createCommentVNode("v-if", true)
            ]),
            "doc-before": withCtx(() => [
              renderSlot(_ctx.$slots, "doc-before"),
              renderSlot(_ctx.$slots, "teek-article-analyze-before"),
              unref(frontmatter).article !== false ? (openBlock(), createBlock(unref(_sfc_main60), { key: 0 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-article-analyze-after"),
              createVNode(unref(_sfc_main56)),
              createVNode(unref(_sfc_main64)),
              !unref(teekConfig).codeBlock.disabled ? (openBlock(), createBlock(unref(_sfc_main73), { key: 1 })) : createCommentVNode("v-if", true),
              topTipConfig.value ? (openBlock(), createBlock(
                unref(_sfc_main95),
                normalizeProps(mergeProps({ key: 2 }, topTipConfig.value)),
                null,
                16
                /* FULL_PROPS */
              )) : createCommentVNode("v-if", true)
            ]),
            "doc-after": withCtx(() => {
              var _a2;
              return [
                renderSlot(_ctx.$slots, "doc-after"),
                renderSlot(_ctx.$slots, "teek-doc-update-before"),
                unref(teekConfig).articleUpdate.enabled && unref(frontmatter).articleUpdate !== false ? (openBlock(), createBlock(unref(_sfc_main62), { key: 0 })) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "teek-doc-update-after"),
                renderSlot(_ctx.$slots, "teek-doc-after-appreciation-before"),
                unref(teekConfig).appreciation.position === "doc-after" ? (openBlock(), createBlock(unref(_sfc_main66), { key: 1 })) : unref(teekConfig).appreciation.position === "doc-after-popper" ? (openBlock(), createBlock(unref(_sfc_main68), { key: 2 })) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "teek-doc-after-appreciation-after"),
                renderSlot(_ctx.$slots, "teek-comment-before"),
                createCommentVNode(" 评论区 "),
                commentConfig.value.enabled && commentConfig.value.provider ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 3 },
                  [
                    commentConfig.value.provider === "render" ? renderSlot(_ctx.$slots, "teek-comment", { key: 0 }) : (openBlock(), createBlock(resolveDynamicComponent((_a2 = commentConfig.value.components) == null ? void 0 : _a2[commentConfig.value.provider]), {
                      key: 1,
                      id: `${unref(ns4).namespace}-comment`,
                      class: normalizeClass(unref(ns4).e("comment"))
                    }, null, 8, ["id", "class"]))
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : createCommentVNode("v-if", true),
                renderSlot(_ctx.$slots, "teek-comment-after")
              ];
            }),
            "aside-bottom": withCtx(() => [
              renderSlot(_ctx.$slots, "aside-bottom"),
              renderSlot(_ctx.$slots, "teek-aside-bottom-appreciation-before"),
              unref(teekConfig).appreciation.position === "aside-bottom" ? (openBlock(), createBlock(unref(_sfc_main65), { key: 0 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-aside-bottom-appreciation-after")
            ]),
            "page-top": withCtx(() => [
              renderSlot(_ctx.$slots, "page-top"),
              renderSlot(_ctx.$slots, "teek-page-top-before"),
              unref(isArchivesPage) ? (openBlock(), createBlock(
                unref(_sfc_main8),
                { key: 0 },
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true),
              unref(isCataloguePage) ? (openBlock(), createBlock(
                unref(_sfc_main6),
                { key: 1 },
                createSlots({
                  _: 2
                  /* DYNAMIC */
                }, [
                  renderList(_ctx.$slots, (_, name) => {
                    return {
                      name,
                      fn: withCtx(() => [
                        renderSlot(_ctx.$slots, name)
                      ])
                    };
                  })
                ]),
                1024
                /* DYNAMIC_SLOTS */
              )) : createCommentVNode("v-if", true),
              unref(isArticleOverviewPage) ? (openBlock(), createBlock(unref(_sfc_main9), { key: 2 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-page-top-after")
            ]),
            "aside-outline-before": withCtx(() => [
              renderSlot(_ctx.$slots, "teek-article-share-before"),
              unref(teekConfig).articleShare.enabled ? (openBlock(), createBlock(unref(_sfc_main61), { key: 0 })) : createCommentVNode("v-if", true),
              renderSlot(_ctx.$slots, "teek-article-share-after"),
              renderSlot(_ctx.$slots, "aside-outline-before")
            ]),
            _: 2
            /* DYNAMIC */
          }, [
            renderList(Object.keys(_ctx.$slots).filter((name) => !usedSlots.includes(name)), (name) => {
              return {
                name,
                fn: withCtx((slotData) => [
                  renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData)))
                ])
              };
            })
          ]), 1032, ["class"])
        ],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createBlock(
        unref(Layout),
        { key: 1 },
        createSlots({
          _: 2
          /* DYNAMIC */
        }, [
          renderList(_ctx.$slots, (_, name) => {
            return {
              name,
              fn: withCtx((slotData) => [
                renderSlot(_ctx.$slots, name, normalizeProps(guardReactiveProps(slotData)))
              ])
            };
          })
        ]),
        1024
        /* DYNAMIC_SLOTS */
      ));
    };
  }
});

// node_modules/vitepress-theme-teek/es/index.mjs
var index = {
  extends: DefaultTheme2,
  Layout: TeekConfigProvider(_sfc_main96),
  enhanceApp({ app, siteData }) {
    app.component("TkCataloguePage", _sfc_main6);
    app.component("TkArchivesPage", _sfc_main8);
    app.component("TkArticleOverviewPage", _sfc_main9);
    app.component("TkLoginPage", _sfc_main17);
    app.component("TkRiskLinkPage", _sfc_main18);
    app.component("TkDemoCode", _sfc_main20);
    app.component("TkTitleTag", _sfc_main4);
    app.component("TkIcon", _sfc_main14);
    const siteAnalytics = siteData.value.themeConfig.siteAnalytics || [];
    const siteAnalysis = {
      baidu: (options) => {
        baiduAnalytics(options);
        if (isClient) trackPageview(options, window.location.href);
      },
      google: (options) => googleAnalytics(options),
      umami: (options) => umamiAnalytics(options)
    };
    siteAnalytics.forEach((item) => {
      var _a;
      (_a = siteAnalysis[item.provider]) == null ? void 0 : _a.call(siteAnalysis, item.options);
    });
  }
};
export {
  LayoutMode,
  SpotlightStyle,
  StorageSerializers,
  TeekConfigProvider,
  ThemeColor,
  _sfc_main8 as TkArchivesPage,
  _sfc_main60 as TkArticleAnalyze,
  _sfc_main59 as TkArticleBreadcrumb,
  _sfc_main63 as TkArticleHeadingHighlight,
  _sfc_main56 as TkArticleImagePreview,
  _sfc_main28 as TkArticleInfo,
  _sfc_main9 as TkArticleOverviewPage,
  _sfc_main3 as TkArticlePage,
  _sfc_main64 as TkArticlePageStyle,
  _sfc_main61 as TkArticleShare,
  _sfc_main7 as TkArticleTitle,
  _sfc_main62 as TkArticleUpdate,
  _sfc_main65 as TkAsideBottomAppreciation,
  _sfc_main39 as TkAvatar,
  _sfc_main50 as TkBodyBgImage,
  _sfc_main57 as TkBreadcrumb,
  _sfc_main58 as TkBreadcrumbItem,
  _sfc_main5 as TkCatalogueItem,
  _sfc_main6 as TkCataloguePage,
  _sfc_main73 as TkCodeBlockToggle,
  _sfc_main70 as TkCommentArtalk,
  _sfc_main71 as TkCommentGiscus,
  _sfc_main69 as TkCommentTwikoo,
  _sfc_main72 as TkCommentWaline,
  _sfc_main20 as TkDemoCode,
  _sfc_main66 as TkDocAfterAppreciation,
  _sfc_main68 as TkDocAfterAppreciationPopper,
  _sfc_main2 as TkDocAsideOutline,
  TkFocusTrap,
  _sfc_main51 as TkFooterGroup,
  _sfc_main52 as TkFooterInfo,
  _sfc_main48 as TkHome,
  _sfc_main37 as TkHomeBanner,
  _sfc_main33 as TkHomeBannerBgImage,
  _sfc_main32 as TkHomeBannerBgPure,
  _sfc_main34 as TkHomeBannerContent,
  _sfc_main35 as TkHomeBannerFeature,
  _sfc_main36 as TkHomeBannerWaves,
  _sfc_main47 as TkHomeCardList,
  _sfc_main42 as TkHomeCategoryCard,
  _sfc_main46 as TkHomeDocAnalysisCard,
  _sfc_main45 as TkHomeFriendLinkCard,
  _sfc_main21 as TkHomeFullscreenWallpaper,
  _sfc_main40 as TkHomeMyCard,
  _sfc_main49 as TkHomeMyCardScreen,
  _sfc_main29 as TkHomePostItem,
  _sfc_main31 as TkHomePostList,
  _sfc_main43 as TkHomeTagCard,
  _sfc_main41 as TkHomeTopArticleCard,
  _sfc_main14 as TkIcon,
  _sfc_main55 as TkImageViewer,
  _sfc_main81 as TkInputSlide,
  _sfc_main96 as TkLayout,
  _sfc_main17 as TkLoginPage,
  message as TkMessage,
  _sfc_main94 as TkNotice,
  _sfc_main38 as TkPageCard,
  _sfc_main27 as TkPagination,
  _sfc_main67 as TkPopover,
  _sfc_main93 as TkRightBottomButton,
  _sfc_main18 as TkRiskLinkPage,
  _sfc_main75 as TkSegmented,
  _sfc_main74 as TkSegmentedItem,
  _sfc_main84 as TkSwitch,
  _sfc_main89 as TkThemeEnhance,
  _sfc_main79 as TkThemeEnhanceBaseTemplate,
  _sfc_main4 as TkTitleTag,
  _sfc_main19 as TkTransitionCollapse,
  _sfc_main16 as TkVerifyCode,
  _sfc_main95 as TkVpContainer,
  Z_INDEX_INJECTION_KEY,
  activateMaxWidthSlideMedia,
  addCollection as addIcons,
  addUnit,
  aliPayIcon,
  alignLeftIcon,
  alignTextLeftIcon,
  arrowDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  artalkContext,
  autoWidthIcon,
  baiduAnalytics,
  calendarIcon,
  caretTopIcon,
  categoryIcon,
  circleCloseFilledIcon,
  clickIcon,
  clockIcon,
  closeIcon,
  codeIcon,
  collectionTagIcon,
  commentIcon,
  copyIcon,
  copyrightIcon,
  createCardContainer,
  createCardContainers,
  createContainerThenGet,
  createContainerThenUse,
  createContainersThenGet,
  createContainersThenUse,
  createDynamicComponent,
  createImageViewer,
  dArrowLeftIcon,
  dArrowRightIcon,
  index as default,
  defaultInitialZIndex,
  defaultPrivateConfig,
  docAnalysisIcon,
  docMaxWidthSlideStorageKey,
  docMaxWidthVar,
  editPenIcon,
  emptyIcon,
  en,
  externalLinkIcon,
  folderOpenedIcon,
  formatDate,
  formatDiffDate,
  formatDiffDateToDay,
  friendLinkIcon,
  fullScreenOneIcon,
  fullscreenIcon,
  fullscreenTwoIcon,
  get,
  getDarkColor,
  getInstance,
  getLastOffset,
  getLightColor,
  getLoginStorageKey,
  getNowDate,
  getOffsetOrSpace,
  giscusContext,
  githubIcon,
  googleAnalytics,
  guessSerializerType,
  hexToRgb,
  houseIcon,
  icpRecordIcon,
  inBrowser,
  infoFilledIcon,
  instances,
  is,
  isArray2 as isArray,
  isAsyncFunction,
  isBoolean,
  isClient,
  isDate,
  isDef,
  isElement,
  isEmpty,
  isExternal,
  isFocusable,
  isFunction,
  isIOS,
  isImageDom,
  isImgPath,
  isNull,
  isNullAndUnDef,
  isNullOrUnDef,
  isNumber,
  isObject2 as isObject,
  isPhone,
  isPromise,
  isServer,
  isString2 as isString,
  isStringNumber,
  isType,
  isUnDef,
  isValidURL,
  layoutIcon,
  layoutModeAttribute,
  layoutModeStorageKey,
  localeContextKey,
  lockIcon,
  loginUrlKeyMap,
  magicIcon,
  mobileMaxWidthMedia,
  moreFilledIcon,
  noticeIcon,
  ns2 as ns,
  onClickOutside,
  overallReductionIcon,
  pageMaxWidthSlideStorageKey,
  pageMaxWidthVar,
  pageNumKey,
  playgroundIcon,
  postDataUpdateSymbol,
  postsContext,
  questionFilledIcon,
  readingIcon,
  refreshLeftIcon,
  refreshRightIcon,
  removeStorageItem,
  removeUnit,
  rgbToHex,
  rocketIcon,
  scaleIcon,
  scaleToOriginalIcon,
  shareIcon,
  size as sizeIcon,
  spotlightStorageKey,
  spotlightStyleStorageKey,
  successFilledIcon,
  tagIcon,
  teekConfigContext,
  themeBgColorStorageKey,
  themeColorAttribute,
  themeColorList,
  themeColorStorageKey,
  themeIcon,
  thumbsIcon,
  topArticleIcon,
  topIcon,
  touchMedia,
  trackPageview,
  transitionName,
  umamiAnalytics,
  upperFirst,
  useAllPosts,
  useAnchorScroll,
  useBuSuanZi,
  useClipboard,
  useDebounce,
  useElementHover,
  useEventListener,
  useLocale,
  useMediaQuery,
  useMounted,
  useNamespace,
  usePagePath,
  usePageState,
  usePopoverSize,
  usePosts,
  useRiskLink,
  useScopeDispose,
  useScrollData,
  useStorage,
  useSwitchData,
  useTagColor,
  useTeekConfig,
  useTextTypes,
  useThemeColor,
  useViewTransition,
  useVpRouter,
  useWatchLogin,
  useWindowSize,
  useZIndex,
  userIcon,
  varNameList,
  verifyModeMap,
  version,
  viewIcon,
  walineContext,
  warningFilledIcon,
  waterIcon,
  weChatPayIcon,
  withBase,
  zIndexContextKey,
  zhCn,
  zoomInIcon,
  zoomOutIcon
};
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)

@vue/compiler-core/dist/compiler-core.esm-bundler.js:
  (**
  * @vue/compiler-core v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/compiler-dom/dist/compiler-dom.esm-bundler.js:
  (**
  * @vue/compiler-dom v3.5.17
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
//# sourceMappingURL=vitepress-theme-teek.js.map
