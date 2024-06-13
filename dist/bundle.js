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

// window.task1 = new ToDoItem("Mow Lawn", "Time to mow the lawn bitch", null, null, null, null)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUFBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQztBQUFBLElBRXRCQyxRQUFRO0VBQ1YsU0FBQUEsU0FBWUMsS0FBSyxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsUUFBUSxFQUFpRDtJQUFBLElBQS9DQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7SUFBQSxJQUFFRyxTQUFTLEdBQUFILFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7SUFBQSxJQUFFSSxTQUFTLEdBQUFKLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEtBQUs7SUFBQUssZUFBQSxPQUFBWCxRQUFBO0lBQzVGLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0lBQzlCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0ksU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0VBQzlCO0VBQUMsT0FBQUUsWUFBQSxDQUFBWixRQUFBO0lBQUFhLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFDLFNBQVNDLFFBQVEsRUFBRUMsY0FBYyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRTtNQUN4RCxJQUFJLENBQUNsQixLQUFLLEdBQUdlLFFBQVE7TUFDckIsSUFBSSxDQUFDZCxXQUFXLEdBQUdlLGNBQWM7TUFDakMsSUFBSSxDQUFDZCxPQUFPLEdBQUdlLFVBQVU7TUFDekIsSUFBSSxDQUFDZCxRQUFRLEdBQUdlLFdBQVc7SUFDL0I7RUFBQztJQUFBTixHQUFBO0lBQUFDLEtBQUEsRUFFRCxTQUFBTSxlQUFBLEVBQWlCO01BQ2IsSUFBSSxDQUFDVixTQUFTLEdBQUcsSUFBSTtJQUN6Qjs7SUFFQTtFQUFBO0lBQUFHLEdBQUE7SUFBQUMsS0FBQSxFQUNBLFNBQUFPLFFBQVFDLElBQUksRUFBRTtNQUNWLElBQUksQ0FBQ2pCLEtBQUssQ0FBQ2tCLElBQUksQ0FBQ0QsSUFBSSxDQUFDO0lBQ3pCOztJQUVBO0VBQUE7SUFBQVQsR0FBQTtJQUFBQyxLQUFBLEVBQ0EsU0FBQVUsaUJBQWlCQyxJQUFJLEVBQUU7TUFDbkIsSUFBSSxDQUFDaEIsU0FBUyxDQUFDYyxJQUFJLENBQUNFLElBQUksQ0FBQztJQUM3QjtFQUFDO0lBQUFaLEdBQUE7SUFBQUMsS0FBQSxFQUVELFNBQUFZLG9CQUFvQkMsS0FBSyxFQUFFO01BQ3ZCLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ21CLE1BQU0sQ0FBQ0QsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNuQztFQUFDO0FBQUE7QUFDSjs7QUFFRCxnRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSGVsbG8sIHdvcmxkIScpXG5cbmNsYXNzIFRvRG9JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcyA9IFtdLCBjaGVja2xpc3QgPSBbXSwgY29tcGxldGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247IFxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIGVkaXRUb2RvKG5ld1RpdGxlLCBuZXdEZXNjcmlwdGlvbiwgbmV3RHVlRGF0ZSwgbmV3UHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICB9XG5cbiAgICBtYXJrQXNDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIE5PVEUgZGlmZmVycyBmcm9tIERlc2NyaXB0aW9uLiBOb3RlIGlzIGxpa2UgYSBjb21tZW50IG9uIHRoZSBzcGVjaWZpYyBJdGVtLlxuICAgIGFkZE5vdGUobm90ZSkge1xuICAgICAgICB0aGlzLm5vdGVzLnB1c2gobm90ZSk7XG4gICAgfVxuXG4gICAgLy8gQ0hFQ0tMSVNUIFxuICAgIGFkZENoZWNrbGlzdEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLmNoZWNrbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cblxuICAgIHJlbW92ZUNoZWNrbGlzdEl0ZW0oaW5kZXgpIHtcbiAgICAgICAgdGhpcy5jaGVja2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59O1xuXG4vLyB3aW5kb3cudGFzazEgPSBuZXcgVG9Eb0l0ZW0oXCJNb3cgTGF3blwiLCBcIlRpbWUgdG8gbW93IHRoZSBsYXduIGJpdGNoXCIsIG51bGwsIG51bGwsIG51bGwsIG51bGwpIFxuXG5cblxuXG5cbiJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiVG9Eb0l0ZW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByaW9yaXR5Iiwibm90ZXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJjaGVja2xpc3QiLCJjb21wbGV0ZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImVkaXRUb2RvIiwibmV3VGl0bGUiLCJuZXdEZXNjcmlwdGlvbiIsIm5ld0R1ZURhdGUiLCJuZXdQcmlvcml0eSIsIm1hcmtBc0NvbXBsZXRlIiwiYWRkTm90ZSIsIm5vdGUiLCJwdXNoIiwiYWRkQ2hlY2tsaXN0SXRlbSIsIml0ZW0iLCJyZW1vdmVDaGVja2xpc3RJdGVtIiwiaW5kZXgiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9