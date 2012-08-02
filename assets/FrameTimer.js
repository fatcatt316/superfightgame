var FrameTimer = function() {
  this._lastTick = (new Date()).getTime();
};
 
FrameTimer.prototype = {
  getSeconds: function() {
    var seconds = this._frameSpacing / 1000;
    if(isNaN(seconds)) {
      return 0;
    }
 
    return seconds;
  },
 
  tick: function() {
    var currentTick = (new Date()).getTime();
    this._frameSpacing = currentTick - this._lastTick;
    this._lastTick = currentTick;
  },
  
  reset: function() {
    this._frameSpacing = 0;
    this._lastTick = 0;
  }
};