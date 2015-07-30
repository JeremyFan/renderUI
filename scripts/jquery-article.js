$(function() {
	util.getArticle({
		id: 1,
		success: function(response) {
			var $container = $('.jquery-article'),
				$title = $('<h2 class="title">' + response.title + '</h2>'),
				$up = $('<div class="up" data-id="' + response.id + '"></div>').append($('<div class="arrow"></div>'), $('<span>' + response.vote + '</span>')),
				$img = $('<img alt="" src="' + response.img + '">'),
				$content = $('<div class="content"></div>');

			response.content.forEach(function(item) {
				var $p = $('<p>' + item + '</p>');
				$content.append($p);
			});

			// 绑定事件
			$up.on('click', function() {
				var $this = $(this);

				util.upvote({
					// 从html中获取id信息
					id: $this.attr('data-id'),
					success: function(response) {
						if (response == 'success') {
							// 更新DOM
							var $span = $this.find('span');
							$span.text(+$span.text() + 1);
						}
					}
				})
			})
			$container.append($title, $up, $img, $content);
		}
	});
})