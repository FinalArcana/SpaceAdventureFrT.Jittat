var Ship = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/ship.png' );
    },

    move: function(keyCode){
    	var y = this.getPositionY();
        if ( keyCode == cc.KEY.up ) {
            if ( y < screenHeight - 10 ) {
                y += 10;
                this.setPositionY( y );
            }
        } else if ( keyCode == cc.KEY.down ) {
            if ( y > 10 ) {
                y -= 10;
                this.setPositionY( y );
            }
        }
    }
});
