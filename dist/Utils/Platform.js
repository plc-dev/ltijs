"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));

var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));

// Utis
var Database = require('./Database');

var Auth = require('./Auth');

var provPlatformDebug = require('debug')('provider:platform');
/**
 * @description Class representing a registered platform.
 */


var Platform =
/*#__PURE__*/
function () {
  /**
     * @param {string} name - Platform name.
     * @param {string} platformUrl - Platform url.
     * @param {string} clientId - Client Id generated by the platform.
     * @param {string} authenticationEndpoint - Authentication endpoint that the tool will use to authenticate within the platform.
     * @param {string} accesstokenEndpoint - Access token endpoint for the platform.
     * @param {string} kid - Key id for local keypair used to sign messages to this platform.
     * @param {string} _ENCRYPTIONKEY - Encryption key used
     * @param {Object} _authConfig - Authentication configurations for the platform.
     */
  function Platform(name, platformUrl, clientId, authenticationEndpoint, accesstokenEndpoint, kid, _ENCRYPTIONKEY, _authConfig) {
    (0, _classCallCheck2["default"])(this, Platform);

    _platformName.set(this, {
      writable: true,
      value: void 0
    });

    _platformUrl.set(this, {
      writable: true,
      value: void 0
    });

    _clientId.set(this, {
      writable: true,
      value: void 0
    });

    _authEndpoint.set(this, {
      writable: true,
      value: void 0
    });

    _authConfig2.set(this, {
      writable: true,
      value: void 0
    });

    _ENCRYPTIONKEY2.set(this, {
      writable: true,
      value: void 0
    });

    _accesstokenEndpoint.set(this, {
      writable: true,
      value: void 0
    });

    _kid.set(this, {
      writable: true,
      value: void 0
    });

    (0, _classPrivateFieldSet2["default"])(this, _authConfig2, _authConfig);
    (0, _classPrivateFieldSet2["default"])(this, _ENCRYPTIONKEY2, _ENCRYPTIONKEY);
    (0, _classPrivateFieldSet2["default"])(this, _platformName, name);
    (0, _classPrivateFieldSet2["default"])(this, _platformUrl, platformUrl);
    (0, _classPrivateFieldSet2["default"])(this, _clientId, clientId);
    (0, _classPrivateFieldSet2["default"])(this, _authEndpoint, authenticationEndpoint);
    (0, _classPrivateFieldSet2["default"])(this, _accesstokenEndpoint, accesstokenEndpoint);
    (0, _classPrivateFieldSet2["default"])(this, _kid, kid);
  }
  /**
     * @description Sets/Gets the platform name.
     * @param {string} [name] - Platform name.
     */


  (0, _createClass2["default"])(Platform, [{
    key: "platformName",
    value: function () {
      var _platformName2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(name) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (name) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _platformName));

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  platformName: name
                });

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](2);
                provPlatformDebug(_context.t0);
                return _context.abrupt("return", false);

              case 11:
                (0, _classPrivateFieldSet2["default"])(this, _platformName, name);
                return _context.abrupt("return", this);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 7]]);
      }));

      function platformName(_x) {
        return _platformName2.apply(this, arguments);
      }

      return platformName;
    }()
    /**
       * @description Sets/Gets the platform url.
       * @param {string} [url] - Platform url.
       */

  }, {
    key: "platformUrl",
    value: function () {
      var _platformUrl2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(url) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (url) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _platformUrl));

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  platformUrl: url
                });

              case 5:
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](2);
                provPlatformDebug(_context2.t0);
                return _context2.abrupt("return", false);

              case 11:
                (0, _classPrivateFieldSet2["default"])(this, _platformUrl, url);
                return _context2.abrupt("return", this);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 7]]);
      }));

      function platformUrl(_x2) {
        return _platformUrl2.apply(this, arguments);
      }

      return platformUrl;
    }()
    /**
       * @description Sets/Gets the platform client id.
       * @param {string} [clientId] - Platform client id.
       */

  }, {
    key: "platformClientId",
    value: function () {
      var _platformClientId = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(clientId) {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (clientId) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _clientId));

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  clientId: clientId
                });

              case 5:
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](2);
                provPlatformDebug(_context3.t0);
                return _context3.abrupt("return", false);

              case 11:
                (0, _classPrivateFieldSet2["default"])(this, _clientId, clientId);
                return _context3.abrupt("return", this);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 7]]);
      }));

      function platformClientId(_x3) {
        return _platformClientId.apply(this, arguments);
      }

      return platformClientId;
    }()
    /**
       * @description Gets the platform key_id.
       */

  }, {
    key: "platformKid",
    value: function platformKid() {
      return (0, _classPrivateFieldGet2["default"])(this, _kid);
    }
    /**
       * @description Gets the RSA public key assigned to the platform.
       *
       */

  }, {
    key: "platformPublicKey",
    value: function () {
      var _platformPublicKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        var key;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return Database.Get((0, _classPrivateFieldGet2["default"])(this, _ENCRYPTIONKEY2), 'publickey', {
                  kid: (0, _classPrivateFieldGet2["default"])(this, _kid)
                });

              case 3:
                key = _context4.sent;
                return _context4.abrupt("return", key[0].key);

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](0);
                provPlatformDebug(_context4.t0);
                return _context4.abrupt("return", false);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 7]]);
      }));

      function platformPublicKey() {
        return _platformPublicKey.apply(this, arguments);
      }

      return platformPublicKey;
    }()
    /**
       * @description Gets the RSA private key assigned to the platform.
       *
       */

  }, {
    key: "platformPrivateKey",
    value: function () {
      var _platformPrivateKey = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5() {
        var key;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return Database.Get((0, _classPrivateFieldGet2["default"])(this, _ENCRYPTIONKEY2), 'privatekey', {
                  kid: (0, _classPrivateFieldGet2["default"])(this, _kid)
                });

              case 3:
                key = _context5.sent;
                return _context5.abrupt("return", key[0].key);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                provPlatformDebug(_context5.t0);
                return _context5.abrupt("return", false);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function platformPrivateKey() {
        return _platformPrivateKey.apply(this, arguments);
      }

      return platformPrivateKey;
    }()
    /**
       * @description Sets/Gets the platform authorization configurations used to validate it's messages.
       * @param {string} method - Method of authorization "RSA_KEY" or "JWK_KEY" or "JWK_SET".
       * @param {string} key - Either the RSA public key provided by the platform, or the JWK key, or the JWK keyset address.
       */

  }, {
    key: "platformAuthConfig",
    value: function () {
      var _platformAuthConfig = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(method, key) {
        var authConfig;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(!method && !key)) {
                  _context6.next = 2;
                  break;
                }

                return _context6.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _authConfig2));

              case 2:
                if (!(method !== 'RSA_KEY' && method !== 'JWK_KEY' && method !== 'JWK_SET')) {
                  _context6.next = 4;
                  break;
                }

                throw new Error('Invalid message validation method. Valid methods are "RSA_KEY", "JWK_KEY", "JWK_SET"');

              case 4:
                if (key) {
                  _context6.next = 6;
                  break;
                }

                throw new Error('Missing secong argument key or keyset_url.');

              case 6:
                authConfig = {
                  method: method,
                  key: key
                };
                _context6.prev = 7;
                _context6.next = 10;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  authConfig: authConfig
                });

              case 10:
                _context6.next = 16;
                break;

              case 12:
                _context6.prev = 12;
                _context6.t0 = _context6["catch"](7);
                provPlatformDebug(_context6.t0);
                return _context6.abrupt("return", false);

              case 16:
                (0, _classPrivateFieldSet2["default"])(this, _authConfig2, authConfig);
                return _context6.abrupt("return", this);

              case 18:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[7, 12]]);
      }));

      function platformAuthConfig(_x4, _x5) {
        return _platformAuthConfig.apply(this, arguments);
      }

      return platformAuthConfig;
    }()
    /**
       * @description Sets/Gets the platform authorization endpoint used to perform the OIDC login.
       * @param {string} [authEndpoint] - Platform authorization endpoint.
       */

  }, {
    key: "platformAuthEndpoint",
    value: function () {
      var _platformAuthEndpoint = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(authEndpoint) {
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (authEndpoint) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _authEndpoint));

              case 2:
                _context7.prev = 2;
                _context7.next = 5;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  authEndpoint: authEndpoint
                });

              case 5:
                _context7.next = 11;
                break;

              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](2);
                provPlatformDebug(_context7.t0);
                return _context7.abrupt("return", false);

              case 11:
                (0, _classPrivateFieldSet2["default"])(this, _authEndpoint, authEndpoint);
                return _context7.abrupt("return", this);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 7]]);
      }));

      function platformAuthEndpoint(_x6) {
        return _platformAuthEndpoint.apply(this, arguments);
      }

      return platformAuthEndpoint;
    }()
    /**
       * @description Sets/Gets the platform access token endpoint used to authenticate messages to the platform.
       * @param {string} [accesstokenEndpoint] - Platform access token endpoint.
       */

  }, {
    key: "platformAccessTokenEndpoint",
    value: function () {
      var _platformAccessTokenEndpoint = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(accesstokenEndpoint) {
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (accesstokenEndpoint) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", (0, _classPrivateFieldGet2["default"])(this, _accesstokenEndpoint));

              case 2:
                _context8.prev = 2;
                _context8.next = 5;
                return Database.Modify(false, 'platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }, {
                  accesstokenEndpoint: accesstokenEndpoint
                });

              case 5:
                _context8.next = 11;
                break;

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](2);
                provPlatformDebug(_context8.t0);
                return _context8.abrupt("return", false);

              case 11:
                (0, _classPrivateFieldSet2["default"])(this, _accesstokenEndpoint, accesstokenEndpoint);
                return _context8.abrupt("return", this);

              case 13:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[2, 7]]);
      }));

      function platformAccessTokenEndpoint(_x7) {
        return _platformAccessTokenEndpoint.apply(this, arguments);
      }

      return platformAccessTokenEndpoint;
    }()
    /**
       * @description Gets the platform access token or attempts to generate a new one.
       */

  }, {
    key: "platformAccessToken",
    value: function () {
      var _platformAccessToken = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9() {
        var token, res, _res;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return Database.Get((0, _classPrivateFieldGet2["default"])(this, _ENCRYPTIONKEY2), 'accesstoken', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                });

              case 2:
                token = _context9.sent;

                if (token) {
                  _context9.next = 19;
                  break;
                }

                provPlatformDebug('Access_token for ' + (0, _classPrivateFieldGet2["default"])(this, _platformUrl) + ' not found');
                provPlatformDebug('Attempting to generate new access_token for ' + (0, _classPrivateFieldGet2["default"])(this, _platformUrl));
                _context9.prev = 6;
                _context9.next = 9;
                return Auth.getAccessToken(this, (0, _classPrivateFieldGet2["default"])(this, _ENCRYPTIONKEY2));

              case 9:
                res = _context9.sent;
                return _context9.abrupt("return", res);

              case 13:
                _context9.prev = 13;
                _context9.t0 = _context9["catch"](6);
                provPlatformDebug(_context9.t0);
                return _context9.abrupt("return", false);

              case 17:
                _context9.next = 36;
                break;

              case 19:
                provPlatformDebug('Access_token found');

                if (!((Date.now() - token[0].createdAt) / 1000 > token[0].expires_in)) {
                  _context9.next = 35;
                  break;
                }

                provPlatformDebug('Token expired');
                provPlatformDebug('Access_token for ' + (0, _classPrivateFieldGet2["default"])(this, _platformUrl) + ' not found');
                provPlatformDebug('Attempting to generate new access_token for ' + (0, _classPrivateFieldGet2["default"])(this, _platformUrl));
                _context9.prev = 24;
                _context9.next = 27;
                return Auth.getAccessToken(this, (0, _classPrivateFieldGet2["default"])(this, _ENCRYPTIONKEY2));

              case 27:
                _res = _context9.sent;
                return _context9.abrupt("return", _res);

              case 31:
                _context9.prev = 31;
                _context9.t1 = _context9["catch"](24);
                provPlatformDebug(_context9.t1);
                return _context9.abrupt("return", false);

              case 35:
                return _context9.abrupt("return", token[0].token);

              case 36:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[6, 13], [24, 31]]);
      }));

      function platformAccessToken() {
        return _platformAccessToken.apply(this, arguments);
      }

      return platformAccessToken;
    }()
    /**
     * @description Deletes a registered platform.
     */

  }, {
    key: "remove",
    value: function () {
      var _remove = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10() {
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                return _context10.abrupt("return", Promise.all([Database.Delete('platform', {
                  platformUrl: (0, _classPrivateFieldGet2["default"])(this, _platformUrl)
                }), Database.Delete('publickey', {
                  kid: (0, _classPrivateFieldGet2["default"])(this, _kid)
                }), Database.Delete('privatekey', {
                  kid: (0, _classPrivateFieldGet2["default"])(this, _kid)
                })]));

              case 4:
                _context10.prev = 4;
                _context10.t0 = _context10["catch"](0);
                provPlatformDebug(_context10.t0);
                return _context10.abrupt("return", false);

              case 8:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 4]]);
      }));

      function remove() {
        return _remove.apply(this, arguments);
      }

      return remove;
    }()
  }]);
  return Platform;
}();

var _platformName = new WeakMap();

var _platformUrl = new WeakMap();

var _clientId = new WeakMap();

var _authEndpoint = new WeakMap();

var _authConfig2 = new WeakMap();

var _ENCRYPTIONKEY2 = new WeakMap();

var _accesstokenEndpoint = new WeakMap();

var _kid = new WeakMap();

module.exports = Platform;