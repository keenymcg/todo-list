/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
console.log("Class: ToDoItem Test".concat(task1.title, " is the title."));
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
}(); // Factory Functions
function createTodoItem(title, description, dueDate, priority) {
  var notes = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var checklist = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  return new ToDoItem(title, description, dueDate, priority, notes, checklist);
}
function createProject(name) {
  return new Project(name);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFBQSxJQUFFRyxTQUFTLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFDckYsT0FBTyxJQUFJTixRQUFRLENBQUNDLEtBQUssRUFBRUMsV0FBVyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFSSxTQUFTLENBQUM7QUFDaEY7QUFFQSxTQUFTcUMsYUFBYUEsQ0FBQ2QsSUFBSSxFQUFFO0VBQ3pCLE9BQU8sSUFBSUQsT0FBTyxDQUFDQyxJQUFJLENBQUM7QUFDNUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8sIHdvcmxkIScpXG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyA9IFtdLCBjaGVja2xpc3QgPSBbXSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIGVkaXRUb2RvKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBtYXJrQXNDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE5PVEUgZGlmZmVycyBmcm9tIERlc2NyaXB0aW9uLiBOb3RlIGlzIGxpa2UgYSBjb21tZW50IG9uIHRoZSBzcGVjaWZpYyBJdGVtLlxuICAgIGFkZE5vdGUobm90ZSkge1xuICAgICAgICB0aGlzLm5vdGVzLnB1c2gobm90ZSk7XG4gICAgfVxuXG4gICAgLy8gQ0hFQ0tMSVNUIFxuICAgIGFkZENoZWNrbGlzdEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59O1xuXG5jb25zdCB0YXNrMSA9IG5ldyBUb0RvSXRlbShcIk1vdyBMYXduXCIsIFwiVGltZSB0byBtb3cgdGhlIGxhd25cIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCkgXG5jb25zb2xlLmxvZyhgQ2xhc3M6IFRvRG9JdGVtIFRlc3Qke3Rhc2sxLnRpdGxlfSBpcyB0aGUgdGl0bGUuYClcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRvZG9JdGVtcyA9IFtdO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kb0l0ZW0pIHtcbiAgICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvSXRlbSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlVG9kbyhpbmRleCkge1xuICAgICAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGVkaXRQcm9qZWN0KG5ld05hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmV3TmFtZTtcbiAgICB9XG59XG5cbmNsYXNzIFRvRG9MaXN0QXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLmFkZFByb2plY3QoJ0RlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KG5hbWUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvamVjdChpbmRleCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0c1tpbmRleF07XG4gICAgfVxufVxuXG4vLyBGYWN0b3J5IEZ1bmN0aW9uc1xuZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMgPSBbXSwgY2hlY2tsaXN0ID0gW10pIHtcbiAgICByZXR1cm4gbmV3IFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUpIHtcbiAgICByZXR1cm4gbmV3IFByb2plY3QobmFtZSk7XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiVG9Eb0l0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjaGVja2xpc3QiLCJjb21wbGV0ZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImVkaXRUb2RvIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0R1ZURhdGUiLCJuZXdQcmlvcml0eSIsIm1hcmtBc0NvbXBsZXRlIiwiYWRkTm90ZSIsIm5vdGUiLCJwdXNoIiwiYWRkQ2hlY2tsaXN0SXRlbSIsIml0ZW0iLCJyZW1vdmVDaGVja2xpc3RJdGVtIiwiaW5kZXgiLCJzcGxpY2UiLCJ0YXNrMSIsImNvbmNhdCIsIlByb2plY3QiLCJuYW1lIiwidG9kb0l0ZW1zIiwiYWRkVG9kbyIsInRvZG9JdGVtIiwicmVtb3ZlVG9kbyIsImVkaXRQcm9qZWN0IiwibmV3TmFtZSIsIlRvRG9MaXN0QXBwIiwicHJvamVjdHMiLCJhZGRQcm9qZWN0IiwicHJvamVjdCIsInJlbW92ZVByb2plY3QiLCJnZXRQcm9qZWN0IiwiY3JlYXRlVG9kb0l0ZW0iLCJjcmVhdGVQcm9qZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==