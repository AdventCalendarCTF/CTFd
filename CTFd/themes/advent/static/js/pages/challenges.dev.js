/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"pages/challenges": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/themes/advent/static/js";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./CTFd/themes/advent/assets/js/pages/challenges.js","helpers","vendor","default~pages/challenges~pages/main~pages/notifications~pages/scoreboard~pages/settings~pages/setup~~6822bf1f"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CTFd/themes/advent/assets/js/pages/challenges.js":
/*!**********************************************************!*\
  !*** ./CTFd/themes/advent/assets/js/pages/challenges.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

;
eval("\n\n__webpack_require__(/*! ./main */ \"./CTFd/themes/advent/assets/js/pages/main.js\");\n__webpack_require__(/*! bootstrap/js/dist/tab */ \"./node_modules/bootstrap/js/dist/tab.js\");\nvar _ezq = __webpack_require__(/*! ../ezq */ \"./CTFd/themes/advent/assets/js/ezq.js\");\nvar _utils = __webpack_require__(/*! ../utils */ \"./CTFd/themes/advent/assets/js/utils.js\");\nvar _dayjs = _interopRequireDefault(__webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\"));\nvar _relativeTime = _interopRequireDefault(__webpack_require__(/*! dayjs/plugin/relativeTime */ \"./node_modules/dayjs/plugin/relativeTime.js\"));\nvar _jquery = _interopRequireDefault(__webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\"));\nvar _CTFd = _interopRequireDefault(__webpack_require__(/*! ../CTFd */ \"./CTFd/themes/advent/assets/js/CTFd.js\"));\nvar _config = _interopRequireDefault(__webpack_require__(/*! ../config */ \"./CTFd/themes/advent/assets/js/config.js\"));\nvar _highlight = _interopRequireDefault(__webpack_require__(/*! highlight.js */ \"./node_modules/highlight.js/lib/index.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n_dayjs[\"default\"].extend(_relativeTime[\"default\"]);\n_CTFd[\"default\"]._internal.challenge = {};\nvar challenges = [];\nvar solves = [];\nvar loadChal = function loadChal(id) {\n  var chal = _jquery[\"default\"].grep(challenges, function (chal) {\n    return chal.id == id;\n  })[0];\n  if (chal.type === \"hidden\") {\n    (0, _ezq.ezAlert)({\n      title: \"Challenge Hidden!\",\n      body: \"You haven't unlocked this challenge yet!\",\n      button: \"Got it!\"\n    });\n    return;\n  }\n  displayChal(chal);\n};\nvar loadChalByName = function loadChalByName(name) {\n  var idx = name.lastIndexOf(\"-\");\n  var pieces = [name.slice(0, idx), name.slice(idx + 1)];\n  var id = pieces[1];\n  var chal = _jquery[\"default\"].grep(challenges, function (chal) {\n    return chal.id == id;\n  })[0];\n  displayChal(chal);\n};\nvar displayChal = function displayChal(chal) {\n  return Promise.all([_CTFd[\"default\"].api.get_challenge({\n    challengeId: chal.id\n  }), _jquery[\"default\"].getScript(_config[\"default\"].urlRoot + chal.script), _jquery[\"default\"].get(_config[\"default\"].urlRoot + chal.template)]).then(function (responses) {\n    var challenge = _CTFd[\"default\"]._internal.challenge;\n    (0, _jquery[\"default\"])(\"#challenge-window\").empty();\n\n    // Inject challenge data into the plugin\n    challenge.data = responses[0].data;\n\n    // Call preRender function in plugin\n    challenge.preRender();\n\n    // Build HTML from the Jinja response in API\n    (0, _jquery[\"default\"])(\"#challenge-window\").append(responses[0].data.view);\n    (0, _jquery[\"default\"])(\"#challenge-window #challenge-input\").addClass(\"form-control\");\n    (0, _jquery[\"default\"])(\"#challenge-window #challenge-submit\").addClass(\"btn btn-md btn-outline-secondary float-right\");\n    var modal = (0, _jquery[\"default\"])(\"#challenge-window\").find(\".modal-dialog\");\n    if (window.init.theme_settings && window.init.theme_settings.challenge_window_size) {\n      switch (window.init.theme_settings.challenge_window_size) {\n        case \"sm\":\n          modal.addClass(\"modal-sm\");\n          break;\n        case \"lg\":\n          modal.addClass(\"modal-lg\");\n          break;\n        case \"xl\":\n          modal.addClass(\"modal-xl\");\n          break;\n        default:\n          break;\n      }\n    }\n    (0, _jquery[\"default\"])(\".challenge-solves\").click(function (_event) {\n      getSolves((0, _jquery[\"default\"])(\"#challenge-id\").val());\n    });\n    (0, _jquery[\"default\"])(\".nav-tabs a\").click(function (event) {\n      event.preventDefault();\n      (0, _jquery[\"default\"])(this).tab(\"show\");\n    });\n\n    // Handle modal toggling\n    (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hide.bs.modal\", function (_event) {\n      (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"wrong\");\n      (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"correct\");\n      (0, _jquery[\"default\"])(\"#incorrect-key\").slideUp();\n      (0, _jquery[\"default\"])(\"#correct-key\").slideUp();\n      (0, _jquery[\"default\"])(\"#already-solved\").slideUp();\n      (0, _jquery[\"default\"])(\"#too-fast\").slideUp();\n    });\n    (0, _jquery[\"default\"])(\".load-hint\").on(\"click\", function (_event) {\n      loadHint((0, _jquery[\"default\"])(this).data(\"hint-id\"));\n    });\n    (0, _jquery[\"default\"])(\"#challenge-submit\").click(function (event) {\n      event.preventDefault();\n      (0, _jquery[\"default\"])(\"#challenge-submit\").addClass(\"disabled-button\");\n      (0, _jquery[\"default\"])(\"#challenge-submit\").prop(\"disabled\", true);\n      _CTFd[\"default\"]._internal.challenge.submit().then(renderSubmissionResponse).then(loadChals).then(markSolves);\n    });\n    (0, _jquery[\"default\"])(\"#challenge-input\").keyup(function (event) {\n      if (event.keyCode == 13) {\n        (0, _jquery[\"default\"])(\"#challenge-submit\").click();\n      }\n    });\n    challenge.postRender();\n    (0, _jquery[\"default\"])(\"#challenge-window\").find(\"pre code\").each(function (_idx) {\n      _highlight[\"default\"].highlightBlock(this);\n    });\n    window.location.replace(window.location.href.split(\"#\")[0] + \"#\".concat(chal.name, \"-\").concat(chal.id));\n    (0, _jquery[\"default\"])(\"#challenge-window\").modal();\n  });\n};\nfunction renderSubmissionResponse(response) {\n  var result = response.data;\n  var result_message = (0, _jquery[\"default\"])(\"#result-message\");\n  var result_notification = (0, _jquery[\"default\"])(\"#result-notification\");\n  var answer_input = (0, _jquery[\"default\"])(\"#challenge-input\");\n  result_notification.removeClass();\n  result_message.text(result.message);\n  if (result.status === \"authentication_required\") {\n    window.location = _CTFd[\"default\"].config.urlRoot + \"/login?next=\" + _CTFd[\"default\"].config.urlRoot + window.location.pathname + window.location.hash;\n    return;\n  } else if (result.status === \"incorrect\") {\n    // Incorrect key\n    result_notification.addClass(\"alert alert-danger alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.removeClass(\"correct\");\n    answer_input.addClass(\"wrong\");\n    setTimeout(function () {\n      answer_input.removeClass(\"wrong\");\n    }, 3000);\n  } else if (result.status === \"correct\") {\n    // Challenge Solved\n    result_notification.addClass(\"alert alert-success alert-dismissable text-center\");\n    result_notification.slideDown();\n    if ((0, _jquery[\"default\"])(\".challenge-solves\").text().trim()) {\n      // Only try to increment solves if the text isn't hidden\n      (0, _jquery[\"default\"])(\".challenge-solves\").text(parseInt((0, _jquery[\"default\"])(\".challenge-solves\").text().split(\" \")[0]) + 1 + \" Solves\");\n    }\n    answer_input.val(\"\");\n    answer_input.removeClass(\"wrong\");\n    answer_input.addClass(\"correct\");\n  } else if (result.status === \"already_solved\") {\n    // Challenge already solved\n    result_notification.addClass(\"alert alert-info alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.addClass(\"correct\");\n  } else if (result.status === \"paused\") {\n    // CTF is paused\n    result_notification.addClass(\"alert alert-warning alert-dismissable text-center\");\n    result_notification.slideDown();\n  } else if (result.status === \"ratelimited\") {\n    // Keys per minute too high\n    result_notification.addClass(\"alert alert-warning alert-dismissable text-center\");\n    result_notification.slideDown();\n    answer_input.addClass(\"too-fast\");\n    setTimeout(function () {\n      answer_input.removeClass(\"too-fast\");\n    }, 3000);\n  }\n  setTimeout(function () {\n    (0, _jquery[\"default\"])(\".alert\").slideUp();\n    (0, _jquery[\"default\"])(\"#challenge-submit\").removeClass(\"disabled-button\");\n    (0, _jquery[\"default\"])(\"#challenge-submit\").prop(\"disabled\", false);\n  }, 3000);\n}\nfunction markSolves() {\n  challenges.map(function (challenge) {\n    if (challenge.solved_by_me) {\n      var btn = (0, _jquery[\"default\"])(\"button[value=\\\"\".concat(challenge.id, \"\\\"]\"));\n      btn.addClass(\"solved-challenge\");\n      btn.prepend(\"<i class='fas fa-check corner-button-check'></i>\");\n    }\n  });\n}\nfunction getSolves(id) {\n  return _CTFd[\"default\"].api.get_challenge_solves({\n    challengeId: id\n  }).then(function (response) {\n    var data = response.data;\n    (0, _jquery[\"default\"])(\".challenge-solves\").text(parseInt(data.length) + \" Solves\");\n    var box = (0, _jquery[\"default\"])(\"#challenge-solves-names\");\n    box.empty();\n    for (var _i = 0; _i < data.length; _i++) {\n      var _id = data[_i].account_id;\n      var name = data[_i].name;\n      var date = (0, _dayjs[\"default\"])(data[_i].date).fromNow();\n      var account_url = data[_i].account_url;\n      box.append('<tr><td><a href=\"{0}\">{2}</td><td>{3}</td></tr>'.format(account_url, _id, (0, _utils.htmlEntities)(name), date));\n    }\n  });\n}\nfunction loadChals() {\n  return _CTFd[\"default\"].api.get_challenge_list().then(function (response) {\n    var advcal_next_day = {\n      \"Week1\": 0,\n      \"Week2\": 0,\n      \"Week3\": 0,\n      \"Week4\": 0,\n      \"Week5\": 0\n    };\n    var $challenges_board = (0, _jquery[\"default\"])(\"#chal-calendar\");\n    challenges = response.data;\n    if (window.BETA_sortChallenges) {\n      challenges = window.BETA_sortChallenges(challenges);\n    }\n    $challenges_board.empty();\n    drawCalendar(\"chal-calendar\");\n    for (var _i2 = 0; _i2 <= challenges.length - 1; _i2++) {\n      var chalinfo = challenges[_i2];\n      var chalbutton = void 0;\n      if (solves.indexOf(chalinfo.id) == -1) {\n        advcal_chalbutton = \"<button class='btn btn-dark challenge-button w-100 text-truncate pt-3 pb-3 chal-pending' value='{0}'>\".format(chalinfo.id);\n      } else {\n        advcal_chalbutton = \"<button class='btn btn-success challenge-button w-100 text-truncate pt-3 pb-3 chal-completed' value='{0}'>\".format(chalinfo.id);\n      }\n\n      /* Pour le calendrier de l'avent */\n      var advcal_cat = chalinfo.category.replace(/ /g, \"\");\n      if (advcal_cat in advcal_next_day) {\n        var advcal_el = (0, _jquery[\"default\"])(\"#\" + advcal_cat + \" > .has-chal\")[advcal_next_day[advcal_cat]];\n        var advcal_day = advcal_el.innerText;\n        advcal_el.innerHTML = advcal_chalbutton + advcal_day + \"</button>\";\n        advcal_next_day[advcal_cat]++;\n      }\n    }\n    (0, _jquery[\"default\"])(\".challenge-button\").click(function (_event) {\n      loadChal(this.value);\n    });\n  });\n}\nfunction update() {\n  return loadChals().then(markSolves);\n}\n(0, _jquery[\"default\"])(function () {\n  update().then(function () {\n    if (window.location.hash.length > 0) {\n      loadChalByName(decodeURIComponent(window.location.hash.substring(1)));\n    }\n  });\n  (0, _jquery[\"default\"])(\"#challenge-input\").keyup(function (event) {\n    if (event.keyCode == 13) {\n      (0, _jquery[\"default\"])(\"#challenge-submit\").click();\n    }\n  });\n  (0, _jquery[\"default\"])(\".nav-tabs a\").click(function (event) {\n    event.preventDefault();\n    (0, _jquery[\"default\"])(this).tab(\"show\");\n  });\n  (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hidden.bs.modal\", function (_event) {\n    (0, _jquery[\"default\"])(\".nav-tabs a:first\").tab(\"show\");\n    history.replaceState(\"\", window.document.title, window.location.pathname);\n  });\n  (0, _jquery[\"default\"])(\".challenge-solves\").click(function (_event) {\n    getSolves((0, _jquery[\"default\"])(\"#challenge-id\").val());\n  });\n  (0, _jquery[\"default\"])(\"#challenge-window\").on(\"hide.bs.modal\", function (_event) {\n    (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"wrong\");\n    (0, _jquery[\"default\"])(\"#challenge-input\").removeClass(\"correct\");\n    (0, _jquery[\"default\"])(\"#incorrect-key\").slideUp();\n    (0, _jquery[\"default\"])(\"#correct-key\").slideUp();\n    (0, _jquery[\"default\"])(\"#already-solved\").slideUp();\n    (0, _jquery[\"default\"])(\"#too-fast\").slideUp();\n  });\n});\nsetInterval(update, 300000); // Update every 5 minutes.\n\nvar displayHint = function displayHint(data) {\n  (0, _ezq.ezAlert)({\n    title: \"Hint\",\n    body: data.html,\n    button: \"Got it!\"\n  });\n};\nvar displayUnlock = function displayUnlock(id) {\n  (0, _ezq.ezQuery)({\n    title: \"Unlock Hint?\",\n    body: \"Are you sure you want to open this hint?\",\n    success: function success() {\n      var params = {\n        target: id,\n        type: \"hints\"\n      };\n      _CTFd[\"default\"].api.post_unlock_list({}, params).then(function (response) {\n        if (response.success) {\n          _CTFd[\"default\"].api.get_hint({\n            hintId: id\n          }).then(function (response) {\n            displayHint(response.data);\n          });\n          return;\n        }\n        (0, _ezq.ezAlert)({\n          title: \"Error\",\n          body: response.errors.score,\n          button: \"Got it!\"\n        });\n      });\n    }\n  });\n};\nvar loadHint = function loadHint(id) {\n  _CTFd[\"default\"].api.get_hint({\n    hintId: id\n  }).then(function (response) {\n    if (response.data.content) {\n      displayHint(response.data);\n      return;\n    }\n    displayUnlock(id);\n  });\n};\nwindow.updateChallengeBoard = update;\n/* Partie pour le calendrier de l'avent*/\nif (window.init.theme_settings === undefined || window.init.theme_settings == null) window.init.theme_settings = {};\nif (window.init.theme_settings.yearOfCalendar === undefined) {\n  window.init.theme_settings.yearOfCalendar = \"2023\";\n}\nif (window.init.theme_settings.monthOfCalendar === undefined) {\n  window.init.theme_settings.monthOfCalendar = \"12\";\n}\nif (window.init.theme_settings.lastDayOfCalendar === undefined) {\n  window.init.theme_settings.lastDayOfCalendar = \"24\";\n}\nif (window.init.theme_settings.challOnWE === undefined) {\n  window.init.theme_settings.challOnWE = \"false\";\n}\nvar drawCalendar = function drawCalendar(id) {\n  var first_december = new Date(window.init.theme_settings.yearOfCalendar, window.init.theme_settings.monthOfCalendar - 1, 1); // Attention le mois est indexé à partir de 0\n  var last_day = new Date(window.init.theme_settings.yearOfCalendar, window.init.theme_settings.monthOfCalendar, 0).getDate();\n  var current_day = 1;\n  var week = 2;\n  var html_cal = '<table class=\"table table-chal text-center\"><thead><tr><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th>' + '<th>Friday</th><th>Saturday</th><th>Sunday</th></tr></thead><tbody><tr id=\"Week1\">';\n  var first_december_dof = first_december.getDay();\n  if (first_december_dof == 0) {\n    first_december_dof = 7;\n  }\n  for (i = 1; i < 8; i++) {\n    if (i < first_december_dof) {\n      html_cal += '<td class=\"no-december no-chal\"><div class=\"pt-3 pb-3 bg-light\"></div></td>';\n    } else if (i > 5 && window.init.theme_settings.challOnWE == \"false\") {\n      html_cal += '<td class=\"week-end no-chal\"><div class=\"pt-3 pb-3 bg-light\">' + current_day + '</div></td>';\n      current_day++;\n    } else {\n      html_cal += '<td id=\"cal-chal-' + String(current_day).padStart(2, '0') + '\" class=\"has-chal\"><div class=\"pt-3 pb-3 bg-white\">' + current_day + '</div></td>';\n      current_day++;\n    }\n  }\n  html_cal += \"</tr>\";\n  while (current_day <= last_day) {\n    html_cal += '<tr id=\"Week' + week + '\">';\n    for (i = 1; i < 8; i++) {\n      if (current_day > last_day) {\n        html_cal += '<td class=\"no-december no-chal\"><div class=\"pt-3 pb-3 bg-light\"></div></td>';\n      } else if (i > 5 && window.init.theme_settings.challOnWE == \"false\") {\n        html_cal += '<td class=\"week-end no-chal\"><div class=\"pt-3 pb-3 bg-light\">' + current_day + '</div></td>';\n      } else if (current_day <= window.init.theme_settings.lastDayOfCalendar) {\n        html_cal += '<td id=\"cal-chal-' + String(current_day).padStart(2, '0') + '\" class=\"has-chal\"><div class=\"pt-3 pb-3 bg-white\">' + current_day + '</div></td>';\n      } else {\n        html_cal += '<td class=\"after-christmas no-chal\"><div class=\"pt-3 pb-3 bg-light\">' + current_day + '</div></td>';\n      }\n      current_day++;\n    }\n    html_cal += \"</tr>\";\n    week++;\n  }\n  html_cal += \"</tbody></table>\";\n  document.getElementById(id).innerHTML = html_cal;\n};\ndrawCalendar(\"chal-calendar\");\n\n//# sourceURL=webpack:///./CTFd/themes/advent/assets/js/pages/challenges.js?");

/***/ })

/******/ });