var SpriteSheet = function(data) {
    this.load(data);
};
 
SpriteSheet.prototype = {
  _sprites: [],
  _width: 0,
  _height: 0,
 
  load: function(data) {
    this._height = data.height;
    this._width = data.width;
    this._sprites = data.sprites;
  },
 
  getOffset: function(spriteName) {
    //Go through all sprites to find the required one
    for(var i = 0, len = this._sprites.length; i < len; i++) {
      var sprite = this._sprites[i];
 
      if(sprite.name == spriteName) {
        //To get the offset, multiply by sprite width
        //Sprite-specific x and y offset is then added into it.
        return {
            x: (i * this._width) + (sprite.x||0),
            y: (sprite.y||0),
            width: this._width,
            height: this._height
        };
      }
    }
 
    return null;
  }
}