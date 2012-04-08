(function () {
	
	var Shape = Backbone.Model.extend({});
	
	var ShapeView = Backbone.View.extend({
		
		tagName : 'div',
		
		className: 'shape',
		
		events: {
			'click' : 'move'
		}, 
		
		render: function() {
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		}, 
		
		setDimensions: function() {
			this.$el.css({
				width: this.model.get('width'), 
				height: this.model.get('height')
			});
		}, 
		
		setPosition: function() {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x, 
				top: position.y
			});
		},
		
		setColor: function() {
			this.$el.css('background-color', this.model.get('color'));
		}, 
		
		move: function() {
			this.$el.css('left', this.$el.position().left + 10);
		}
		
	});
	
	var models = [
	    new Shape({
	    	width: 100, 
	    	height: 60,
	    	position: {x: 300, y: 150},
	    	color: 'red'
	    })
	];
	
	_(models).each(function(model) {
		$('div#canvas').append(new ShapeView({model:model}).render().el);
	});
	
})();