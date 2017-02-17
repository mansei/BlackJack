// Generated by CoffeeScript 1.12.3
(function() {
  $(function() {
    return app.initialize();
  });

  window.app = {
    initialize: function() {
      var i, j, k, l, m, n, o, results;
      this.setBind();
      this.number = new Array;
      for (i = k = 1; k <= 4; i = ++k) {
        this.number[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      }
      for (i = l = 1; l <= 4; i = ++l) {
        for (j = m = 1; m <= 13; j = ++m) {
          this.number[i][j] = j;
          if (j >= 10) {
            this.number[i][j] = 10;
          }
        }
      }
      this.checknumber = new Array;
      for (i = n = 1; n <= 4; i = ++n) {
        this.checknumber[i] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      }
      results = [];
      for (i = o = 1; o <= 4; i = ++o) {
        results.push((function() {
          var p, results1;
          results1 = [];
          for (j = p = 1; p <= 13; j = ++p) {
            results1.push(this.checknumber[i][j] = 0);
          }
          return results1;
        }).call(this));
      }
      return results;
    },
    setBind: function() {
      $('#duel_start').on('click', (function(_this) {
        return function() {
          return _this.dealCard();
        };
      })(this));
      return $('#hit').on('click', (function(_this) {
        return function() {
          return _this.addCard();
        };
      })(this));
    },
    dealCard: function() {
      this.decideNumber('dealer');
      return this.decideNumber('my');
    },
    decideNumber: function(who) {
      var who_mark1, who_mark2, who_number, who_number1, who_number2;
      who_mark1 = _.random(1, 4);
      who_number1 = _.random(1, 13);
      if (this.checknumber[who_mark1][who_number1] === 1) {
        who_mark1 = _.random(1, 4);
        who_number1 = _.random(1, 13);
      }
      this.checknumber[who_mark1][who_number1] = 1;
      who_mark2 = _.random(1, 4);
      who_number2 = _.random(1, 13);
      if (this.checknumber[who_mark2][who_number2] === 1) {
        who_number2 = _.random(1, 13);
        who_mark2 = _.random(1, 4);
      }
      this.checknumber[who_mark2][who_number2] = 1;
      who_number = this.number[who_mark1][who_number1] + this.number[who_mark2][who_number2];
      return console.log(who_number);
    },
    addCard: function() {}
  };

}).call(this);
