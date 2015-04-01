System.register(["aurelia-framework"], function (_export) {
  var Behavior, _createClass, _classCallCheck, RedditGif;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      RedditGif = _export("RedditGif", (function () {
        function RedditGif() {
          _classCallCheck(this, RedditGif);

          this.gifActive = false;
        }

        _createClass(RedditGif, {
          bind: {
            value: function bind() {
              this.gifSrc = "";
            }
          },
          toggleGif: {
            value: function toggleGif() {
              if (this.gifActive) {
                this.gifSrc = "";
              } else {
                this.gifSrc = this.data.url + "#embed";
              }

              this.gifActive = !this.gifActive;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("reddit-gif").withProperty("data");
            }
          }
        });

        return RedditGif;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGRpdC1naWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFFBQVEsaUNBRUgsU0FBUzs7OztBQUZkLGNBQVEscUJBQVIsUUFBUTs7Ozs7Ozs7O0FBRUgsZUFBUztBQVFULGlCQVJBLFNBQVMsR0FRTjtnQ0FSSCxTQUFTOztBQVNsQixjQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7cUJBVlUsU0FBUztBQVlwQixjQUFJO21CQUFBLGdCQUFHO0FBQ0wsa0JBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ2xCOztBQUVELG1CQUFTO21CQUFBLHFCQUFHO0FBQ1Ysa0JBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixvQkFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7ZUFDbEIsTUFBTTtBQUNMLG9CQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQztlQUN4Qzs7QUFFRCxrQkFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEM7OztBQXRCTSxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsWUFBWSxDQUFDLENBQzNCLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6Qjs7OztlQU5VLFNBQVMiLCJmaWxlIjoicmVkZGl0LWdpZi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9