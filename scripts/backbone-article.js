// Backbone
$(function(){
	var ArticleView = Backbone.View.extend({

		template:_.template($('#backbone-article').html()),

		events:{
			'click .up':'upvote'
		},

		initialize:function(){
			this.model=new Backbone.Model;

			this.listenTo(this.model,'change',this.render);

			this.getData();
		},

		render:function(){
			var tpl=$('#backbone-article').html();
			this.$el.html(this.template(this.model.toJSON()));

			return this.$el;
		},

		/**
		 * 获取数据
		 */
		getData:function(){
			var self=this;
			util.getArticle({
				id:2,
				success:function(response){
					self.model.set(response);
				}
			});
		},
		/**
		 * 点赞
		 */
		upvote:function(){
			var self=this,
				id=this.model.get('id');
			util.upvote({
				id:id,
				success:function(response){
					if(response == 'success'){
						var vote=self.model.get('vote');
						self.model.set('vote', vote+1);
					}
				}
			})
		}

	});

	new ArticleView({
		el:$('.backbone-article')
	})
})