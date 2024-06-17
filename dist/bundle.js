/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/itemContent.js":
/*!****************************!*\
  !*** ./src/itemContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function itemsContent(items) {
  var container = document.createElement('div');
  items.forEach(function (item) {
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    var h4 = document.createElement('h4');
    var h5 = document.createElement('h5');
    h3.textContent = item.title;
    p.textContent = item.description;
    h4.textContent = item.dueDate;
    h5.textContent = "Priority: ".concat(item.priority);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(h4);
    div.appendChild(h5);
    container.appendChild(div);
  });
  return container;
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsContent);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _itemContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./itemContent */ "./src/itemContent.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
console.log('Hello, world!');
var ToDoItem = /*#__PURE__*/function () {
  function ToDoItem(title, description, dueDate, priority) {
    var notes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
    var checklist = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
    var completed = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    _classCallCheck(this, ToDoItem);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.completed = completed;
  }
  return _createClass(ToDoItem, [{
    key: "editTodo",
    value: function editTodo(newTitle, newDescription, newDueDate, newPriority) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
      this.priority = newPriority;
    }
  }, {
    key: "markAsComplete",
    value: function markAsComplete() {
      this.completed = true;
    }

    // NOTE differs from Description. Note is like a comment on the specific Item.
  }, {
    key: "addNote",
    value: function addNote(note) {
      this.notes.push(note);
    }

    // CHECKLIST 
  }, {
    key: "addChecklistItem",
    value: function addChecklistItem(item) {
      this.checklist.push(item);
    }
  }, {
    key: "removeChecklistItem",
    value: function removeChecklistItem(index) {
      this.checklist.splice(index, 1);
    }
  }]);
}();
;
var Project = /*#__PURE__*/function () {
  function Project(name) {
    _classCallCheck(this, Project);
    this.name = name;
    this.todoItems = [];
  }
  return _createClass(Project, [{
    key: "addTodo",
    value: function addTodo(todoItem) {
      this.todoItems.push(todoItem);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(index) {
      this.todoItems.splice(index, 1);
    }
  }, {
    key: "editProject",
    value: function editProject(newName) {
      this.name = newName;
    }
  }]);
}();
;

// Test Project Class
// const project1 = new Project("Home")
// const project2 = new Project("Work")
// console.log(`Project Class Test "${project1.name}" is the name.`)

// // Generate HTML Projects
// function generateProjects(projects) {
//     let projectList = document.getElementById('project-list');

//     projects.forEach(project => {
//         const h2 = document.createElement('h2');

//         h2.textContent = project.name;

//         projectList.appendChild(h2);
//     })
// };

// generateProjects([project1, project2]);

////////////
var ToDoListApp = /*#__PURE__*/function () {
  function ToDoListApp() {
    _classCallCheck(this, ToDoListApp);
    this.projects = [];
    // this.addProject('Default');
  }
  return _createClass(ToDoListApp, [{
    key: "addProject",
    value: function addProject(name) {
      var project = new Project(name);
      this.projects.push(project);
    }
  }, {
    key: "addExistingProject",
    value: function addExistingProject(project) {
      this.projects.push(project);
    }
  }, {
    key: "removeProject",
    value: function removeProject(index) {
      this.projects.splice(index, 1);
    }
  }, {
    key: "getProject",
    value: function getProject(index) {
      return this.projects[index];
    }
  }]);
}();
;

// Factory Functions - clean way to create instances of objects
// for example when accepting user input, write: document.getElementById('todoForm').addEventListener('submit', function(event) { event.preventDefault();...
// const title = document.getElementById('title').value;
// const description = document.getElementById('description').value;
// const dueDate = document.getElementById('dueDate').value;
// const priority = document.getElementById('priority').value;
// then run the func: createToDoItem(title, description, dueDate, priority); <-- looks a little different than this example
// console.log(todoItem);
function createTodoItem(title, description, dueDate, priority) {
  var notes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var checklist = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  return new ToDoItem(title, description, dueDate, priority, notes, checklist);
}
function createProject(name) {
  return new Project(name);
}

// module.exports = { ToDoItem, Project, ToDoListApp }; // Exported for Jest testing purposes (at least... maybe other purposes too)

////////////


document.addEventListener('DOMContentLoaded', function () {
  var content = document.getElementById('content');
  var task1 = createTodoItem("Mow Lawn", "Time to mow the lawn", "Today", "High", ["Don't forget to wear sunscreen"], ["Wear sunscreen", "Mow the lawn"]);
  var task2 = createTodoItem("Scratch cat", "Let's scratch the cat", "Today", "High", ["Don't forget to feed the cat"], ["Feed the cat"]);
  content.appendChild((0,_itemContent__WEBPACK_IMPORTED_MODULE_0__["default"])([task1, task2]));

  // Test ToDoListApp & Populating Projects
  var project1 = createProject("Home");
  var project2 = createProject("Work");
  project1.todoItems.push(task1); // Giving project1 ownership of task1
  console.log(project1); // Successfully added task1 to project1

  var todoListApp = new ToDoListApp();
  todoListApp.addExistingProject(project1);
  todoListApp.addExistingProject(project2);
  console.log(todoListApp);
  var navItems = document.querySelectorAll('nav button');
  navItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      content.innerHTML = '';
      if (e.target.textContent === 'Projects') {
        // content.appendChild(itemsContent(project1.todoItems));
        // Display all the project names from the todoListApp
        todoListApp.projects.forEach(function (project) {
          var h2 = document.createElement('h2');
          h2.textContent = project.name;
          content.appendChild(h2);
        });
        var projectsList = document.querySelectorAll('h2');
        projectsList.forEach(function (project) {
          project.addEventListener('click', function (e) {
            console.log("You clicked"); // Success
            content.innerHTML = '';
            var projectIndex = todoListApp.projects.findIndex(function (project) {
              return project.name === e.target.textContent;
            });
            // console.log(itemsContent(todoListApp.projects[projectIndex].todoItems)); // Success
            content.appendChild((0,_itemContent__WEBPACK_IMPORTED_MODULE_0__["default"])(todoListApp.projects[projectIndex].todoItems));
          });
        });
      } else if (e.target.textContent === '???') {
        return;
      } else if (e.target.textContent === '??????') {
        return;
      }
    });
  });
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxHQUFHNEMsT0FBTyxDQUFDVixJQUFJO1VBQzdCaUIsT0FBTyxDQUFDN0MsV0FBVyxDQUFDeUQsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQztRQUNGLElBQU1DLFlBQVksR0FBR3pFLFFBQVEsQ0FBQ29FLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUNwREssWUFBWSxDQUFDdkUsT0FBTyxDQUFDLFVBQUNtRCxPQUFPLEVBQUs7VUFDOUJBLE9BQU8sQ0FBQ00sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUNVLENBQUMsRUFBSztZQUNyQ3JELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDNUIyQyxPQUFPLENBQUNVLFNBQVMsR0FBRyxFQUFFO1lBQ3RCLElBQU1JLFlBQVksR0FBR1IsV0FBVyxDQUFDZixRQUFRLENBQUN3QixTQUFTLENBQUMsVUFBQXRCLE9BQU87Y0FBQSxPQUFJQSxPQUFPLENBQUNWLElBQUksS0FBSzBCLENBQUMsQ0FBQ0UsTUFBTSxDQUFDOUQsV0FBVztZQUFBLEVBQUM7WUFDckc7WUFDQW1ELE9BQU8sQ0FBQzdDLFdBQVcsQ0FBQ2xCLHdEQUFZLENBQUNxRSxXQUFXLENBQUNmLFFBQVEsQ0FBQ3VCLFlBQVksQ0FBQyxDQUFDOUIsU0FBUyxDQUFDLENBQUM7VUFDbkYsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxDQUFDO01BQ04sQ0FBQyxNQUFNLElBQUl5QixDQUFDLENBQUNFLE1BQU0sQ0FBQzlELFdBQVcsS0FBSyxLQUFLLEVBQUU7UUFDdkM7TUFDSixDQUFDLE1BQU0sSUFBSTRELENBQUMsQ0FBQ0UsTUFBTSxDQUFDOUQsV0FBVyxLQUFLLFFBQVEsRUFBRTtRQUMxQztNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaXRlbUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZnVuY3Rpb24gaXRlbXNDb250ZW50KGl0ZW1zKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgY29uc3QgaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuXG4gICAgICAgIGgzLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIGg0LnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICAgICAgICBoNS50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtpdGVtLnByaW9yaXR5fWA7XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDQpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDUpO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH0pXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zQ29udGVudDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnNvbGUubG9nKCdIZWxsbywgd29ybGQhJylcblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzID0gW10sIGNoZWNrbGlzdCA9IFtdLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgZWRpdFRvZG8obmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIG1hcmtBc0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTk9URSBkaWZmZXJzIGZyb20gRGVzY3JpcHRpb24uIE5vdGUgaXMgbGlrZSBhIGNvbW1lbnQgb24gdGhlIHNwZWNpZmljIEl0ZW0uXG4gICAgYWRkTm90ZShub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgICB9XG5cbiAgICAvLyBDSEVDS0xJU1QgXG4gICAgYWRkQ2hlY2tsaXN0SXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hlY2tsaXN0SXRlbShpbmRleCkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn07XG5cbmNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUb2RvKHRvZG9JdGVtKSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnB1c2godG9kb0l0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZVRvZG8oaW5kZXgpIHtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBlZGl0UHJvamVjdChuZXdOYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5ld05hbWU7XG4gICAgfVxufTtcblxuLy8gVGVzdCBQcm9qZWN0IENsYXNzXG4gICAgLy8gY29uc3QgcHJvamVjdDEgPSBuZXcgUHJvamVjdChcIkhvbWVcIilcbiAgICAvLyBjb25zdCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KFwiV29ya1wiKVxuICAgIC8vIGNvbnNvbGUubG9nKGBQcm9qZWN0IENsYXNzIFRlc3QgXCIke3Byb2plY3QxLm5hbWV9XCIgaXMgdGhlIG5hbWUuYClcblxuICAgIC8vIC8vIEdlbmVyYXRlIEhUTUwgUHJvamVjdHNcbiAgICAvLyBmdW5jdGlvbiBnZW5lcmF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgLy8gICAgIGxldCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWxpc3QnKTtcblxuICAgIC8vICAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgIC8vICAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gICAgLy8gICAgICAgICBoMi50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcblxuICAgIC8vICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIC8vICAgICB9KVxuICAgIC8vIH07XG5cbiAgICAvLyBnZW5lcmF0ZVByb2plY3RzKFtwcm9qZWN0MSwgcHJvamVjdDJdKTtcblxuLy8vLy8vLy8vLy8vXG5cbmNsYXNzIFRvRG9MaXN0QXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICAvLyB0aGlzLmFkZFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgYWRkRXhpc3RpbmdQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgIH1cblxuICAgIHJlbW92ZVByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGdldFByb2plY3QoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHNbaW5kZXhdO1xuICAgIH1cbn07XG5cbi8vIEZhY3RvcnkgRnVuY3Rpb25zIC0gY2xlYW4gd2F5IHRvIGNyZWF0ZSBpbnN0YW5jZXMgb2Ygb2JqZWN0c1xuLy8gZm9yIGV4YW1wbGUgd2hlbiBhY2NlcHRpbmcgdXNlciBpbnB1dCwgd3JpdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvRm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7IGV2ZW50LnByZXZlbnREZWZhdWx0KCk7Li4uXG4vLyBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuLy8gY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbi8vIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuLy8gY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbi8vIHRoZW4gcnVuIHRoZSBmdW5jOiBjcmVhdGVUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTsgPC0tIGxvb2tzIGEgbGl0dGxlIGRpZmZlcmVudCB0aGFuIHRoaXMgZXhhbXBsZVxuLy8gY29uc29sZS5sb2codG9kb0l0ZW0pO1xuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgPSBbXSwgY2hlY2tsaXN0ID0gW10pIHtcbiAgICByZXR1cm4gbmV3IFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0geyBUb0RvSXRlbSwgUHJvamVjdCwgVG9Eb0xpc3RBcHAgfTsgLy8gRXhwb3J0ZWQgZm9yIEplc3QgdGVzdGluZyBwdXJwb3NlcyAoYXQgbGVhc3QuLi4gbWF5YmUgb3RoZXIgcHVycG9zZXMgdG9vKVxuXG5cbi8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgaXRlbXNDb250ZW50IGZyb20gXCIuL2l0ZW1Db250ZW50XCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgdGFzazEgPSBjcmVhdGVUb2RvSXRlbShcIk1vdyBMYXduXCIsIFwiVGltZSB0byBtb3cgdGhlIGxhd25cIiwgXCJUb2RheVwiLCBcIkhpZ2hcIiwgW1wiRG9uJ3QgZm9yZ2V0IHRvIHdlYXIgc3Vuc2NyZWVuXCJdLCBbXCJXZWFyIHN1bnNjcmVlblwiLCBcIk1vdyB0aGUgbGF3blwiXSkgXG4gICAgY29uc3QgdGFzazIgPSBjcmVhdGVUb2RvSXRlbShcIlNjcmF0Y2ggY2F0XCIsIFwiTGV0J3Mgc2NyYXRjaCB0aGUgY2F0XCIsIFwiVG9kYXlcIiwgXCJIaWdoXCIsIFtcIkRvbid0IGZvcmdldCB0byBmZWVkIHRoZSBjYXRcIl0sIFtcIkZlZWQgdGhlIGNhdFwiXSlcbiAgICBcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW1zQ29udGVudChbdGFzazEsIHRhc2syXSkpO1xuXG4gICAgLy8gVGVzdCBUb0RvTGlzdEFwcCAmIFBvcHVsYXRpbmcgUHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0MSA9IGNyZWF0ZVByb2plY3QoXCJIb21lXCIpO1xuICAgIGNvbnN0IHByb2plY3QyID0gY3JlYXRlUHJvamVjdChcIldvcmtcIik7XG4gICAgcHJvamVjdDEudG9kb0l0ZW1zLnB1c2godGFzazEpOyAvLyBHaXZpbmcgcHJvamVjdDEgb3duZXJzaGlwIG9mIHRhc2sxXG4gICAgY29uc29sZS5sb2cocHJvamVjdDEpOyAvLyBTdWNjZXNzZnVsbHkgYWRkZWQgdGFzazEgdG8gcHJvamVjdDFcblxuICAgIGNvbnN0IHRvZG9MaXN0QXBwID0gbmV3IFRvRG9MaXN0QXBwKCk7XG4gICAgdG9kb0xpc3RBcHAuYWRkRXhpc3RpbmdQcm9qZWN0KHByb2plY3QxKTsgXG4gICAgdG9kb0xpc3RBcHAuYWRkRXhpc3RpbmdQcm9qZWN0KHByb2plY3QyKTtcbiAgICBjb25zb2xlLmxvZyh0b2RvTGlzdEFwcCk7XG5cbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKTtcbiAgICBuYXZJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnUHJvamVjdHMnKSB7XG4gICAgICAgICAgICAgICAgLy8gY29udGVudC5hcHBlbmRDaGlsZChpdGVtc0NvbnRlbnQocHJvamVjdDEudG9kb0l0ZW1zKSk7XG4gICAgICAgICAgICAgICAgLy8gRGlzcGxheSBhbGwgdGhlIHByb2plY3QgbmFtZXMgZnJvbSB0aGUgdG9kb0xpc3RBcHBcbiAgICAgICAgICAgICAgICB0b2RvTGlzdEFwcC5wcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICAgICAgICAgIGgyLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2gyJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIllvdSBjbGlja2VkXCIpOyAvLyBTdWNjZXNzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gdG9kb0xpc3RBcHAucHJvamVjdHMuZmluZEluZGV4KHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBlLnRhcmdldC50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtc0NvbnRlbnQodG9kb0xpc3RBcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvSXRlbXMpKTsgLy8gU3VjY2Vzc1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtc0NvbnRlbnQodG9kb0xpc3RBcHAucHJvamVjdHNbcHJvamVjdEluZGV4XS50b2RvSXRlbXMpKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJz8/PycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICc/Pz8/Pz8nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7Il0sIm5hbWVzIjpbIml0ZW1zQ29udGVudCIsIml0ZW1zIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiZm9yRWFjaCIsIml0ZW0iLCJkaXYiLCJoMyIsInAiLCJoNCIsImg1IiwidGV4dENvbnRlbnQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsImNvbmNhdCIsInByaW9yaXR5IiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwiVG9Eb0l0ZW0iLCJub3RlcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNoZWNrbGlzdCIsImNvbXBsZXRlZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZWRpdFRvZG8iLCJuZXdUaXRsZSIsIm5ld0Rlc2NyaXB0aW9uIiwibmV3RHVlRGF0ZSIsIm5ld1ByaW9yaXR5IiwibWFya0FzQ29tcGxldGUiLCJhZGROb3RlIiwibm90ZSIsInB1c2giLCJhZGRDaGVja2xpc3RJdGVtIiwicmVtb3ZlQ2hlY2tsaXN0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwiUHJvamVjdCIsIm5hbWUiLCJ0b2RvSXRlbXMiLCJhZGRUb2RvIiwidG9kb0l0ZW0iLCJyZW1vdmVUb2RvIiwiZWRpdFByb2plY3QiLCJuZXdOYW1lIiwiVG9Eb0xpc3RBcHAiLCJwcm9qZWN0cyIsImFkZFByb2plY3QiLCJwcm9qZWN0IiwiYWRkRXhpc3RpbmdQcm9qZWN0IiwicmVtb3ZlUHJvamVjdCIsImdldFByb2plY3QiLCJjcmVhdGVUb2RvSXRlbSIsImNyZWF0ZVByb2plY3QiLCJhZGRFdmVudExpc3RlbmVyIiwiY29udGVudCIsImdldEVsZW1lbnRCeUlkIiwidGFzazEiLCJ0YXNrMiIsInByb2plY3QxIiwicHJvamVjdDIiLCJ0b2RvTGlzdEFwcCIsIm5hdkl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImUiLCJpbm5lckhUTUwiLCJ0YXJnZXQiLCJoMiIsInByb2plY3RzTGlzdCIsInByb2plY3RJbmRleCIsImZpbmRJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=