/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module) => {

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
var task1 = new ToDoItem("Mow Lawn", "Time to mow the lawn", null, null, null, null);
console.log("ToDoItem Class Test \"".concat(task1.title, "\" is the title."));

// Generate HTML To-Do Item
function generateItem(item) {
  var toDoItems = document.getElementById('to-do-items');
  var h3 = document.createElement('h3');
  var p = document.createElement('p');
  h3.textContent = item[1];
  p.textContent = item[2];
  toDoItems.appendChild(h3);
  toDoItems.appendChild(p);
}
;
generateItem(task1);
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
var ToDoListApp = /*#__PURE__*/function () {
  function ToDoListApp() {
    _classCallCheck(this, ToDoListApp);
    this.projects = [];
    this.addProject('Default');
  }
  return _createClass(ToDoListApp, [{
    key: "addProject",
    value: function addProject(name) {
      var project = new Project(name);
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
}(); // Factory Functions - clean way to create instances of objects
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
module.exports = {
  ToDoItem: ToDoItem,
  Project: Project,
  ToDoListApp: ToDoListApp
}; // Exported for Jest testing purposes (at least... maybe other purposes too)

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hIckQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCdIZWxsbywgd29ybGQhJylcblxuY2xhc3MgVG9Eb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzID0gW10sIGNoZWNrbGlzdCA9IFtdLCBjb21wbGV0ZWQgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjsgXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XG4gICAgfVxuXG4gICAgZWRpdFRvZG8obmV3VGl0bGUsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5O1xuICAgIH1cblxuICAgIG1hcmtBc0NvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTk9URSBkaWZmZXJzIGZyb20gRGVzY3JpcHRpb24uIE5vdGUgaXMgbGlrZSBhIGNvbW1lbnQgb24gdGhlIHNwZWNpZmljIEl0ZW0uXG4gICAgYWRkTm90ZShub3RlKSB7XG4gICAgICAgIHRoaXMubm90ZXMucHVzaChub3RlKTtcbiAgICB9XG5cbiAgICAvLyBDSEVDS0xJU1QgXG4gICAgYWRkQ2hlY2tsaXN0SXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuY2hlY2tsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hlY2tsaXN0SXRlbShpbmRleCkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn07XG5cbmNvbnN0IHRhc2sxID0gbmV3IFRvRG9JdGVtKFwiTW93IExhd25cIiwgXCJUaW1lIHRvIG1vdyB0aGUgbGF3blwiLCBudWxsLCBudWxsLCBudWxsLCBudWxsKSBcbmNvbnNvbGUubG9nKGBUb0RvSXRlbSBDbGFzcyBUZXN0IFwiJHt0YXNrMS50aXRsZX1cIiBpcyB0aGUgdGl0bGUuYClcblxuLy8gR2VuZXJhdGUgSFRNTCBUby1EbyBJdGVtXG5mdW5jdGlvbiBnZW5lcmF0ZUl0ZW0oaXRlbSkge1xuICAgIGxldCB0b0RvSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG8tZG8taXRlbXMnKTtcbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGgzLnRleHRDb250ZW50ID0gaXRlbVsxXTtcbiAgICBwLnRleHRDb250ZW50ID0gaXRlbVsyXVxuXG4gICAgdG9Eb0l0ZW1zLmFwcGVuZENoaWxkKGgzKTtcbiAgICB0b0RvSXRlbXMuYXBwZW5kQ2hpbGQocCk7XG59O1xuXG5nZW5lcmF0ZUl0ZW0odGFzazEpO1xuXG5jbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zID0gW107XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvSXRlbSkge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICByZW1vdmVUb2RvKGluZGV4KSB7XG4gICAgICAgIHRoaXMudG9kb0l0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZWRpdFByb2plY3QobmV3TmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXdOYW1lO1xuICAgIH1cbn07XG5cbmNsYXNzIFRvRG9MaXN0QXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tpbmRleF07XG4gICAgfVxufVxuXG4vLyBGYWN0b3J5IEZ1bmN0aW9ucyAtIGNsZWFuIHdheSB0byBjcmVhdGUgaW5zdGFuY2VzIG9mIG9iamVjdHNcbi8vIGZvciBleGFtcGxlIHdoZW4gYWNjZXB0aW5nIHVzZXIgaW5wdXQsIHdyaXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0Zvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkgeyBldmVudC5wcmV2ZW50RGVmYXVsdCgpOy4uLlxuLy8gY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbi8vIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4vLyBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbi8vIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4vLyB0aGVuIHJ1biB0aGUgZnVuYzogY3JlYXRlVG9Eb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7IDwtLSBsb29rcyBhIGxpdHRsZSBkaWZmZXJlbnQgdGhhbiB0aGlzIGV4YW1wbGVcbi8vIGNvbnNvbGUubG9nKHRvZG9JdGVtKTtcbmZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzID0gW10sIGNoZWNrbGlzdCA9IFtdKSB7XG4gICAgcmV0dXJuIG5ldyBUb0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9qZWN0KG5hbWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgVG9Eb0l0ZW0sIFByb2plY3QsIFRvRG9MaXN0QXBwIH07IC8vIEV4cG9ydGVkIGZvciBKZXN0IHRlc3RpbmcgcHVycG9zZXMgKGF0IGxlYXN0Li4uIG1heWJlIG90aGVyIHB1cnBvc2VzIHRvbylcblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIlRvRG9JdGVtIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGVzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hlY2tsaXN0IiwiY29tcGxldGVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJlZGl0VG9kbyIsIm5ld1RpdGxlIiwibmV3RGVzY3JpcHRpb24iLCJuZXdEdWVEYXRlIiwibmV3UHJpb3JpdHkiLCJtYXJrQXNDb21wbGV0ZSIsImFkZE5vdGUiLCJub3RlIiwicHVzaCIsImFkZENoZWNrbGlzdEl0ZW0iLCJpdGVtIiwicmVtb3ZlQ2hlY2tsaXN0SXRlbSIsImluZGV4Iiwic3BsaWNlIiwidGFzazEiLCJjb25jYXQiLCJnZW5lcmF0ZUl0ZW0iLCJ0b0RvSXRlbXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaDMiLCJjcmVhdGVFbGVtZW50IiwicCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJQcm9qZWN0IiwibmFtZSIsInRvZG9JdGVtcyIsImFkZFRvZG8iLCJ0b2RvSXRlbSIsInJlbW92ZVRvZG8iLCJlZGl0UHJvamVjdCIsIm5ld05hbWUiLCJUb0RvTGlzdEFwcCIsInByb2plY3RzIiwiYWRkUHJvamVjdCIsInByb2plY3QiLCJyZW1vdmVQcm9qZWN0IiwiZ2V0UHJvamVjdCIsImNyZWF0ZVRvZG9JdGVtIiwiY3JlYXRlUHJvamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9