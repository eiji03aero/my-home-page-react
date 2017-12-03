webpackHotUpdate(0,{

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(React, PropTypes) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorOrganizerHeader = undefined;

var _AddColorForm = __webpack_require__(159);

__webpack_require__(139);

var ColorOrganizerHeader = exports.ColorOrganizerHeader = function ColorOrganizerHeader(_ref) {
  var formIsOpen = _ref.formIsOpen,
      _onAddColor = _ref.onAddColor;

  return React.createElement(
    'div',
    { className: 'color-organizer-header u-flex--fs' },
    React.createElement('input', { placeholder: 'search your color' }),
    React.createElement(
      'div',
      { className: 'u-optional-right' },
      React.createElement(
        'button',
        null,
        'Add Color'
      ),
      React.createElement(_AddColorForm.AddColorForm, { isFormOpen: isFormOpen,
        onAddColor: function onAddColor(title, color) {
          return _onAddColor(title, color);
        } })
    )
  );
};

ColorOrganizerHeader.propTypes = {
  formIsOpen: PropTypes.bool.isRequired,
  onAddColor: PropTypes.func.isRequired
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=0.2e34f078a0a8a9beb012.hot-update.js.map