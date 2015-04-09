System.register(["aurelia-http-client"], function (_export) {
  var HttpClient, _classCallCheck, _createClass, Gifs;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }],
    execute: function () {
      "use strict";

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Gifs = (function () {
        function Gifs(http) {
          _classCallCheck(this, Gifs);

          this.http = http;
          this.posts = [];
          this.subreddit_url = "http://reddit.com/r/gifs.json";
        }

        _createClass(Gifs, [{
          key: "loadPosts",
          value: function loadPosts() {
            var _this = this;

            return this.http.jsonp(this.subreddit_url, "jsonp").then(function (r) {
              _this.posts = r.response.data.children;
            });
          }
        }, {
          key: "activate",
          value: function activate() {
            return this.loadPosts();
          }
        }], [{
          key: "inject",
          value: function inject() {
            return [HttpClient];
          }
        }]);

        return Gifs;
      })();

      _export("Gifs", Gifs);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtpREFFZSxJQUFJOzs7O3NDQUZYLFVBQVU7Ozs7Ozs7OztBQUVILFVBQUk7QUFHSixpQkFIQSxJQUFJLENBR0gsSUFBSSxFQUFDO2dDQUhOLElBQUk7O0FBSWIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsY0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBSSxDQUFDLGFBQWEsR0FBRywrQkFBK0IsQ0FBQztTQUN0RDs7cUJBUFUsSUFBSTs7aUJBU04scUJBQUU7OztBQUNULG1CQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQzVELG9CQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDdkMsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFTyxvQkFBRTtBQUNSLG1CQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztXQUN6Qjs7O2lCQWhCWSxrQkFBRztBQUFFLG1CQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7V0FBRTs7O2VBRDdCLElBQUk7OztzQkFBSixJQUFJIiwiZmlsZSI6ImdpZnMuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==