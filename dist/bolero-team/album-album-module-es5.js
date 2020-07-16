function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["album-album-module"], {
  /***/
  "./src/app/album/add-ablum-song/add-ablum-song.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/album/add-ablum-song/add-ablum-song.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddAblumSongComponent */

  /***/
  function srcAppAlbumAddAblumSongAddAblumSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAblumSongComponent", function () {
      return AddAblumSongComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _service_album_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../service/album.service */
    "./src/app/service/album.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/album/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AddAblumSongComponent_option_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var album_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", album_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](album_r2.name);
      }
    }

    function AddAblumSongComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddAblumSongComponent_tr_31_Template_input_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var list_r3 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.changeSelection(list_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", list_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r3.singer);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r3.author);
      }
    }

    var AddAblumSongComponent = /*#__PURE__*/function () {
      function AddAblumSongComponent(songService, searchServe, router, fb, route, albumService, tokenService, userService) {
        _classCallCheck(this, AddAblumSongComponent);

        this.songService = songService;
        this.searchServe = searchServe;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.albumService = albumService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.value = '';
        this.songList = [];
        this.albumList = [];
        this.idSong = [];
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(AddAblumSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail().then(function (res) {
              return _this.albumService.getAllAlbumByUserId(res.id).toPromise();
            }).then(function (result) {
              _this.albumList = result;
            });
          }

          this.songService.getAllSongs().subscribe(function (data) {
            _this.songList = data;
          }, function (error) {
            console.log(error);
          });
          this.albumForm = this.fb.group({
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          }); // this.albumService.getAllAlbumByUserId(this.userCurrent.id).subscribe(data => {
          //   this.albumList = data;
          // }, error => {
          //   console.log(error);
          // });
        }
      }, {
        key: "addSongToAlbum",
        value: function addSongToAlbum() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var value, album;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    value = this.albumForm.value;
                    album = {
                      id: value.id,
                      songList: []
                    };
                    album.songList = this.convertToSong(this.idSong);
                    _context.next = 5;
                    return this.albumService.createAlbum(album).subscribe(function (next) {
                      console.log(album);
                      console.log(next);
                    }, function (e) {
                      console.log(e);
                    });

                  case 5:
                    _context.next = 7;
                    return this.router.navigate(['song']);

                  case 7:
                    this.addSongToAlbumSuccess();

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addSongToAlbumSuccess",
        value: function addSongToAlbumSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Thêm bài hát vào album thành công'
          });
        }
      }, {
        key: "changeSelection",
        value: function changeSelection(id) {
          console.log(id);

          if (this.idSong.includes(id)) {
            for (var i = 0; i < this.idSong.length; i++) {
              if (this.idSong[i] === id) {
                this.idSong.splice(i, 1);
              }
            }

            console.log(this.idSong);
          } else {
            this.idSong.push(id);
            console.log(this.idSong);
          }
        }
      }, {
        key: "convertToSong",
        value: function convertToSong(array) {
          for (var i = 0; i < array.length; i++) {
            array[i] = {
              id: array[i]
            };
          }

          return array;
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          };
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          return this.userService.getUserByUserName(this.info.username).toPromise();
        }
      }]);

      return AddAblumSongComponent;
    }();

    AddAblumSongComponent.ɵfac = function AddAblumSongComponent_Factory(t) {
      return new (t || AddAblumSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_album_service__WEBPACK_IMPORTED_MODULE_7__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]));
    };

    AddAblumSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddAblumSongComponent,
      selectors: [["app-add-ablum-song"]],
      decls: 40,
      vars: 5,
      consts: [[1, "card"], [1, "card-header", "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "card-body"], [1, "ng-untouched", "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], ["id", "table", 1, "table-editable"], [1, "table-add", "float-left", "mb-3", "mr-2"], ["routerLink", "/create-song", 1, "text-success"], [1, "fa", "fa-plus-circle", "fa-3x"], [1, "table-add", "float-right", "mb-3", "mr-2"], ["formControlName", "id", 1, "col-lg-9", 2, "color", "black", "height", "30px"], ["value", "", 3, "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", "routerLink", "/", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success"], [3, "value"], [1, "pt-3-half", 2, "width", "100px", "height", "100px"], ["alt", "", 3, "src"], [1, "pt-3-half"], ["type", "checkbox", 3, "click"]],
      template: function AddAblumSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Add Song To Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddAblumSongComponent_Template_form_ngSubmit_7_listener() {
            return ctx.addSongToAlbum();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AddAblumSongComponent_option_16_Template, 2, 2, "option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Song Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Singer");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Add To Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, AddAblumSongComponent_tr_31_Template, 11, 4, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Save Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.albumForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.albumList);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.songList);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_10__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FkZC1hYmx1bS1zb25nL2FkZC1hYmx1bS1zb25nLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddAblumSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-ablum-song',
          templateUrl: './add-ablum-song.component.html',
          styleUrls: ['./add-ablum-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_4__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _service_album_service__WEBPACK_IMPORTED_MODULE_7__["AlbumService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_8__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_9__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/add-album/add-album.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/album/add-album/add-album.component.ts ***!
    \********************************************************/

  /*! exports provided: AddAlbumComponent */

  /***/
  function srcAppAlbumAddAlbumAddAlbumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddAlbumComponent", function () {
      return AddAlbumComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_album_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/album.service */
    "./src/app/service/album.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/album/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function AddAlbumComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name is required and min length is 1 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var AddAlbumComponent = /*#__PURE__*/function () {
      function AddAlbumComponent(albumServie, fb, tokenService, userService) {
        _classCallCheck(this, AddAlbumComponent);

        this.albumServie = albumServie;
        this.fb = fb;
        this.tokenService = tokenService;
        this.userService = userService;
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(AddAlbumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserInfor(); // console.log(this.info.username);

          if (this.info.username !== '') {
            this.getUserDetail();
          }

          this.albumForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(1)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var value, album;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    value = this.albumForm.value;
                    album = {
                      name: value.name,
                      user: {
                        id: this.userCurrent.id
                      }
                    };
                    this.albumServie.createAlbum(album).subscribe(function () {}, function (e) {
                      console.log(e);
                    });
                    console.log(album); // await this.router.navigate(['/']);

                    _context2.next = 6;
                    return this.createSuccess();

                  case 6:
                    this.albumForm.reset(); // alert('create thành công');

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "createSuccess",
        value: function createSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Tạo mới thành công'
          });
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          };
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          var _this2 = this;

          this.userService.getUserByUserName(this.info.username).subscribe(function (data) {
            _this2.userCurrent = data;
            console.log(_this2.userCurrent);
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return AddAlbumComponent;
    }();

    AddAlbumComponent.ɵfac = function AddAlbumComponent_Factory(t) {
      return new (t || AddAlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]));
    };

    AddAlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AddAlbumComponent,
      selectors: [["app-add-album"]],
      decls: 27,
      vars: 4,
      consts: [[1, "container", 2, "text-align", "center", "font-size", "40px"], [1, "main-container", 2, "margin-top", "50px"], [1, "row", "section"], [1, "col-xl-8", "col-md-10", "mx-auto"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "ng-untouched", "ng-pristine", "ng-valid", 3, "formGroup", "ngSubmit"], [1, "form-row", "form-group"], ["for", "name", 1, "col-lg-3", "text-md-right", "col-form-label"], [1, "col-lg-9"], ["id", "name", "type", "text", "formControlName", "name", "placeholder", "Example: Album", 1, "form-control", "is-valid", 3, "ngClass"], ["style", "color: red", 4, "ngIf"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-9", "btn-inline"], ["type", "button", "routerLink", "/", 1, "btn", "btn-outline-secondary"], ["type", "submit", 1, "btn", "btn-outline-success", 3, "disabled"], [2, "color", "red"]],
      template: function AddAlbumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " ADD NEW ALBUM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Add Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AddAlbumComponent_Template_form_ngSubmit_12_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Album Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, AddAlbumComponent_div_18_Template, 2, 0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.albumForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.albumForm.get("name").invalid && ctx.albumForm.touched ? "is-invalid" : "is-valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.albumForm.get("name").invalid && ctx.albumForm.get("name").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.albumForm.invalid);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FkZC1hbGJ1bS9hZGQtYWxidW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddAlbumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-add-album',
          templateUrl: './add-album.component.html',
          styleUrls: ['./add-album.component.css']
        }]
      }], function () {
        return [{
          type: _service_album_service__WEBPACK_IMPORTED_MODULE_4__["AlbumService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/album-list-song/album-list-song.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/album/album-list-song/album-list-song.component.ts ***!
    \********************************************************************/

  /*! exports provided: AlbumListSongComponent */

  /***/
  function srcAppAlbumAlbumListSongAlbumListSongComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumListSongComponent", function () {
      return AlbumListSongComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_album_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/album.service */
    "./src/app/service/album.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/album/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/song/details", a1];
    };

    var _c1 = function _c1(a1) {
      return ["/song/update", a1];
    };

    function AlbumListSongComponent_tr_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var song_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, song_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.singer);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.author);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, song_r1.id));
      }
    }

    var AlbumListSongComponent = /*#__PURE__*/function () {
      function AlbumListSongComponent(songService, searchServe, router, fb, route, albumService) {
        _classCallCheck(this, AlbumListSongComponent);

        this.songService = songService;
        this.searchServe = searchServe;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.albumService = albumService;
        this.value = '';
        this.songList = [];
      }

      _createClass(AlbumListSongComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var id = +this.route.snapshot.paramMap.get('id');
          this.albumService.getSongByAlbumId(id).subscribe(function (next) {
            _this3.album = next;
            _this3.songList = _this3.album.songList;
          });
        }
      }]);

      return AlbumListSongComponent;
    }();

    AlbumListSongComponent.ɵfac = function AlbumListSongComponent_Factory(t) {
      return new (t || AlbumListSongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]));
    };

    AlbumListSongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlbumListSongComponent,
      selectors: [["app-album-list-song"]],
      decls: 22,
      vars: 1,
      consts: [[1, "card"], [1, "card-header", "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "card-body"], ["id", "table", 1, "table-editable"], [1, "table-add", "float-left", "mb-3", "mr-2"], ["routerLink", "/album/create-song", 1, "text-success"], [1, "fa", "fa-plus-circle", "fa-3x"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "pt-3-half", 2, "width", "100px", "height", "100px"], ["alt", "", 3, "src"], [1, "pt-3-half"], [3, "routerLink"], [1, "table-remove"], ["type", "button", 1, "btn", "btn-info", "btn-rounded", "btn-sm", "my-0", 3, "routerLink"]],
      template: function AlbumListSongComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Album List Song");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Song Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Singer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AlbumListSongComponent_tr_21_Template, 14, 10, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songList);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeAreaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FsYnVtLWxpc3Qtc29uZy9hbGJ1bS1saXN0LXNvbmcuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumListSongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-album-list-song',
          templateUrl: './album-list-song.component.html',
          styleUrls: ['./album-list-song.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _service_album_service__WEBPACK_IMPORTED_MODULE_5__["AlbumService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/album.module.ts":
  /*!***************************************!*\
    !*** ./src/app/album/album.module.ts ***!
    \***************************************/

  /*! exports provided: AlbumModule */

  /***/
  function srcAppAlbumAlbumModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlbumModule", function () {
      return AlbumModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _add_album_add_album_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./add-album/add-album.component */
    "./src/app/album/add-album/add-album.component.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/album/layout/layout.component.ts");
    /* harmony import */


    var _add_ablum_song_add_ablum_song_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./add-ablum-song/add-ablum-song.component */
    "./src/app/album/add-ablum-song/add-ablum-song.component.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./welcome-area/welcome-area.component */
    "./src/app/album/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/album/navbar/navbar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
    /* harmony import */


    var _user_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../user.guard */
    "./src/app/user.guard.ts");
    /* harmony import */


    var _all_album_all_album_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./all-album/all-album.component */
    "./src/app/album/all-album/all-album.component.ts");
    /* harmony import */


    var _album_list_song_album_list_song_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./album-list-song/album-list-song.component */
    "./src/app/album/album-list-song/album-list-song.component.ts");
    /* harmony import */


    var _song_song_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../song/song.module */
    "./src/app/song/song.module.ts");

    var routes = [{
      path: '',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
      children: [{
        path: 'create',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]],
        component: _add_album_add_album_component__WEBPACK_IMPORTED_MODULE_2__["AddAlbumComponent"]
      }, {
        path: 'create-song',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]],
        component: _add_ablum_song_add_ablum_song_component__WEBPACK_IMPORTED_MODULE_4__["AddAblumSongComponent"]
      }, {
        path: 'list/:id',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]],
        component: _album_list_song_album_list_song_component__WEBPACK_IMPORTED_MODULE_12__["AlbumListSongComponent"]
      }, {
        path: 'list-album',
        canActivate: [_user_guard__WEBPACK_IMPORTED_MODULE_10__["UserGuard"]],
        component: _all_album_all_album_component__WEBPACK_IMPORTED_MODULE_11__["AllAlbumComponent"]
      }]
    }];

    var AlbumModule = function AlbumModule() {
      _classCallCheck(this, AlbumModule);
    };

    AlbumModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AlbumModule
    });
    AlbumModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AlbumModule_Factory(t) {
        return new (t || AlbumModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_13__["SongModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AlbumModule, {
        declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _add_ablum_song_add_ablum_song_component__WEBPACK_IMPORTED_MODULE_4__["AddAblumSongComponent"], _add_album_add_album_component__WEBPACK_IMPORTED_MODULE_2__["AddAlbumComponent"], _all_album_all_album_component__WEBPACK_IMPORTED_MODULE_11__["AllAlbumComponent"], _album_list_song_album_list_song_component__WEBPACK_IMPORTED_MODULE_12__["AlbumListSongComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_13__["SongModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeAreaComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _add_ablum_song_add_ablum_song_component__WEBPACK_IMPORTED_MODULE_4__["AddAblumSongComponent"], _add_album_add_album_component__WEBPACK_IMPORTED_MODULE_2__["AddAlbumComponent"], _all_album_all_album_component__WEBPACK_IMPORTED_MODULE_11__["AllAlbumComponent"], _album_list_song_album_list_song_component__WEBPACK_IMPORTED_MODULE_12__["AlbumListSongComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"], _song_song_module__WEBPACK_IMPORTED_MODULE_13__["SongModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/all-album/all-album.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/album/all-album/all-album.component.ts ***!
    \********************************************************/

  /*! exports provided: AllAlbumComponent */

  /***/
  function srcAppAlbumAllAlbumAllAlbumComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllAlbumComponent", function () {
      return AllAlbumComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../assets/sweetalert2/sweetalert2.min.js */
    "./src/assets/sweetalert2/sweetalert2.min.js");
    /* harmony import */


    var _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _service_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/search.service */
    "./src/app/service/search.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _service_album_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../service/album.service */
    "./src/app/service/album.service.ts");
    /* harmony import */


    var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../auth/token-storage.service */
    "./src/app/auth/token-storage.service.ts");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../welcome-area/welcome-area.component */
    "./src/app/album/welcome-area/welcome-area.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a1) {
      return ["/album/list", a1];
    };

    function AllAlbumComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllAlbumComponent_tr_19_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var album_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.deleteAlbum(album_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var album_r1 = ctx.$implicit;
        var index_r2 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](index_r2 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, album_r1.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.user.lastName);
      }
    }

    var AllAlbumComponent = /*#__PURE__*/function () {
      function AllAlbumComponent(songService, searchServe, router, fb, route, albumService, tokenService, userService) {
        _classCallCheck(this, AllAlbumComponent);

        this.songService = songService;
        this.searchServe = searchServe;
        this.router = router;
        this.fb = fb;
        this.route = route;
        this.albumService = albumService;
        this.tokenService = tokenService;
        this.userService = userService;
        this.value = '';
        this.songList = [];
        this.albumList = [];
        this.Toast = _assets_sweetalert2_sweetalert2_min_js__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000
        });
      }

      _createClass(AllAlbumComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail().then(function (res) {
              return _this4.albumService.getAllAlbumByUserId(res.id).toPromise();
            }).then(function (result) {
              _this4.albumList = result;
            });
          }
        }
      }, {
        key: "getSongAlbum",
        value: function getSongAlbum(id) {
          var _this5 = this;

          this.albumService.getSongByAlbumId(id).subscribe(function (next) {
            _this5.album = next;
            _this5.songList = _this5.album.songList;
            console.log(_this5.songList);
          });
        }
      }, {
        key: "convertToSong",
        value: function convertToSong(array) {
          for (var i = 0; i < array.length; i++) {
            array[i] = {
              id: array[i]
            };
          }

          return array;
        }
      }, {
        key: "getUserInfor",
        value: function getUserInfor() {
          this.info = {
            token: this.tokenService.getToken(),
            username: this.tokenService.getUsername()
          };
        }
      }, {
        key: "getUserDetail",
        value: function getUserDetail() {
          return this.userService.getUserByUserName(this.info.username).toPromise();
        }
      }, {
        key: "deleteAlbum",
        value: function deleteAlbum(id) {
          var _this6 = this;

          this.albumService.deleteAlbum(id).subscribe(function () {
            _this6.deleteSuccess();

            _this6.getAllSong();
          }, function (error) {
            console.log('delete failed');
          });
        }
      }, {
        key: "deleteSuccess",
        value: function deleteSuccess() {
          this.Toast.fire({
            icon: 'success',
            title: 'Xóa thành công'
          });
        }
      }, {
        key: "getAllSong",
        value: function getAllSong() {
          var _this7 = this;

          this.getUserInfor();

          if (this.info.username !== '') {
            this.getUserDetail().then(function (res) {
              return _this7.albumService.getAllAlbumByUserId(res.id).toPromise();
            }).then(function (result) {
              _this7.albumList = result;
            });
          }
        }
      }]);

      return AllAlbumComponent;
    }();

    AllAlbumComponent.ɵfac = function AllAlbumComponent_Factory(t) {
      return new (t || AllAlbumComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]));
    };

    AllAlbumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AllAlbumComponent,
      selectors: [["app-all-album"]],
      decls: 20,
      vars: 1,
      consts: [[1, "card"], [1, "card-header", "text-center", "font-weight-bold", "text-uppercase", "py-4"], [1, "card-body"], ["id", "table", 1, "table-editable"], [1, "table-add", "float-left", "mb-3", "mr-2"], ["routerLink", "/album/create", 1, "text-success"], [1, "fa", "fa-plus-circle", "fa-3x"], [1, "table", "table-bordered", "table-responsive-md", "table-striped", "text-center"], [1, "text-center"], [4, "ngFor", "ngForOf"], [1, "pt-3-half"], [3, "routerLink"], [1, "table-remove"], ["type", "button", 1, "btn", "btn-danger", "btn-rounded", "btn-sm", "my-0", 3, "click"]],
      template: function AllAlbumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-welcome-area");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Your Album");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Author");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AllAlbumComponent_tr_19_Template, 12, 6, "tr", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumList);
        }
      },
      directives: [_welcome_area_welcome_area_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeAreaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2FsbC1hbGJ1bS9hbGwtYWxidW0uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllAlbumComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-all-album',
          templateUrl: './all-album.component.html',
          styleUrls: ['./all-album.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"]
        }, {
          type: _service_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _service_album_service__WEBPACK_IMPORTED_MODULE_6__["AlbumService"]
        }, {
          type: _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_7__["TokenStorageService"]
        }, {
          type: _service_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/layout/layout.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/album/layout/layout.component.ts ***!
    \**************************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppAlbumLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../service/song.service */
    "./src/app/service/song.service.ts");
    /* harmony import */


    var _song_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../song/header/header.component */
    "./src/app/song/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../song/footer/footer.component */
    "./src/app/song/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent(songService) {
        _classCallCheck(this, LayoutComponent);

        this.songService = songService;
        this.songList = [];
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 3,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        }
      },
      directives: [_song_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _song_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.css']
        }]
      }], function () {
        return [{
          type: _service_song_service__WEBPACK_IMPORTED_MODULE_1__["SongService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/navbar/navbar.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/album/navbar/navbar.component.ts ***!
    \**************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppAlbumNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 33,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], [1, "nav-item", "dropdown"], ["href", "#", "id", "navbarDropdown", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "navbarDropdown", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], [1, "dropdown-divider"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "mr-sm-2"], ["type", "submit", 1, "btn", "btn-outline-success", "my-2", "my-sm-0"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Dropdown ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Disabled");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/album/welcome-area/welcome-area.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/album/welcome-area/welcome-area.component.ts ***!
    \**************************************************************/

  /*! exports provided: WelcomeAreaComponent */

  /***/
  function srcAppAlbumWelcomeAreaWelcomeAreaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeAreaComponent", function () {
      return WelcomeAreaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeAreaComponent = /*#__PURE__*/function () {
      function WelcomeAreaComponent() {
        _classCallCheck(this, WelcomeAreaComponent);
      }

      _createClass(WelcomeAreaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeAreaComponent;
    }();

    WelcomeAreaComponent.ɵfac = function WelcomeAreaComponent_Factory(t) {
      return new (t || WelcomeAreaComponent)();
    };

    WelcomeAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WelcomeAreaComponent,
      selectors: [["app-welcome-area"]],
      decls: 6,
      vars: 0,
      consts: [[1, "breadcumb-area", "bg-img", "bg-overlay", 2, "background-image", "url(../../../assets/img/bg-img/2.jpg)", "margin-bottom", "50px"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12"], [1, "title", "mt-70", 2, "font-family", "Comic Sans MS"]],
      template: function WelcomeAreaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Relax");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtL3dlbGNvbWUtYXJlYS93ZWxjb21lLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeAreaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-welcome-area',
          templateUrl: './welcome-area.component.html',
          styleUrls: ['./welcome-area.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=album-album-module-es5.js.map