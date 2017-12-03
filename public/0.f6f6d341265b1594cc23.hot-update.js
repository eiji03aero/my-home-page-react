webpackHotUpdate(0,{

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddColorForm = undefined;

__webpack_require__(160);

var AddColorForm = exports.AddColorForm = function AddColorForm(_ref) {
  var formIsOpen = _ref.formIsOpen,
      onAddColor = _ref.onAddColor;

  var _title = void 0,
      _color = void 0;
  var formClass = formIsOpen ? 'add-color-form active' : 'add-color-form';

  var onSubmit = function onSubmit() {
    var title = _title.value;
    var color = _color.value;
    if (color && title) {
      onAddColor(title, color);
    }
    _title.value = '';
    _color.value = '';
  };

  return React.createElement(
    'div',
    { className: formClass },
    React.createElement(
      'p',
      null,
      'Add your new color'
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'span',
        null,
        'Title: '
      ),
      React.createElement('input', {
        type: 'text',
        ref: function ref(input) {
          return _title = input;
        } })
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'span',
        null,
        'Color: '
      ),
      React.createElement('input', {
        type: 'color',
        ref: function ref(input) {
          return _color = input;
        } })
    ),
    React.createElement(
      'button',
      { onClick: onSubmit },
      'Submit'
    )
  );
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

})
//# sourceMappingURL=0.f6f6d341265b1594cc23.hot-update.js.map