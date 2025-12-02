import * as __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__ from "@wordpress/interactivity";
/******/ var __webpack_modules__ = ({

/***/ "@wordpress/interactivity-router":
/*!**************************************************!*\
  !*** external "@wordpress/interactivity-router" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@wordpress/interactivity-router");;

/***/ }),

/***/ "@wordpress/interactivity":
/*!*******************************************!*\
  !*** external "@wordpress/interactivity" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__wordpress_interactivity_8e89b257__;

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/interactivity */ "@wordpress/interactivity");

const isValidLink = ref => ref && ref instanceof window.HTMLAnchorElement && ref.href && (!ref.target || ref.target === '_self') && ref.origin === window.location.origin;

// Shared prefetch logic
const prefetchLink = function* (ref) {
  if (isValidLink(ref)) {
    const {
      actions
    } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @wordpress/interactivity-router */ "@wordpress/interactivity-router"));
    yield actions.prefetch(ref.href);
  }
};
const {
  state
} = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.store)('router-2f43f8', {
  state: {
    urlRegionDisplay: window.location.href,
    get areNavigationLinksVisible() {
      return !state.prev && !state.next;
    },
    get itemSlug() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.item.split('|')[0];
    },
    get itemName() {
      const ctx = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getContext)();
      return ctx.item.split('|')[1];
    },
    get isCurrentSlug() {
      return state.currentSlug === state.itemSlug;
    }
  },
  actions: {
    *navigate(e) {
      e.preventDefault();
      const {
        actions
      } = yield Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @wordpress/interactivity-router */ "@wordpress/interactivity-router"));
      state.urlRegionDisplay = e.target.href;
      console.log('Navigating to: ', state.urlRegionDisplay);
      console.log('Base URL: ', state.base_url);
      yield actions.navigate(e.target.href);
    },
    *prefetch() {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      yield* prefetchLink(ref);
    }
  },
  callbacks: {
    newPage() {
      const serverState = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getServerState)();
      state.prev = serverState.prev;
      state.next = serverState.next;
      state.currentSlug = serverState.currentSlug;
    },
    *prefetch() {
      const {
        ref
      } = (0,_wordpress_interactivity__WEBPACK_IMPORTED_MODULE_0__.getElement)();
      yield* prefetchLink(ref);
    }
  }
});
})();


//# sourceMappingURL=view.js.map