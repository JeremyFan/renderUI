// Backbone
$(function() {
	var ArticleView = Backbone.View.extend({

		// 模版组装方法
		template: _.template($('#backbone-article').html()),

		// 绑定事件
		events: {
			'click .up': 'upvote'
		},

		initialize: function() {
			this.model = new Backbone.Model;

			// 监听model变化
			this.listenTo(this.model, 'change', this.render);

			this.getData();
		},

		render: function() {
			this.$el.html(this.template(this.model.toJSON()));

			return this.$el;
		},

		/**
		 * 获取数据
		 */
		getData: function() {
			var self = this;
			util.getArticle({
				id: 2,
				success: function(response) {
					// 设置数据
					self.model.set(response);
				}
			});
		},
		/**
		 * 点赞
		 */
		upvote: function() {
			var self = this,
				// id从model获取
				id = this.model.get('id');
			util.upvote({
				id: id,
				success: function(response) {
					if (response == 'success') {
						var vote = self.model.get('vote');
						self.model.set('vote', vote + 1);
					}
				}
			})
		}

	});

	// 初始化一个ArticleView
	new ArticleView({
		el: $('.backbone-article')
	})
})