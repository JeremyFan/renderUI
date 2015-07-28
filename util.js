var articles = [
	{
		id:1,
		title:'九月',
		img:'zyp.jpg',
		vote:23,
		content:[
				'目击众神死亡的草原上野花一片',
				'远在远方的风比远方更远',
				'我的琴声呜咽',
				'我的泪水全无',
				'我把这远方的远归还草原',
				'一个叫木头',
				'一个叫马尾',
				'',
				'“亡我祁连山',
				'使我牛羊不蕃息',
				'失我胭脂山',
				'令我妇女无颜色”',
				'',
				'远方只有在死亡中凝聚野花一片',
				'明月如镜高悬在草原',
				'映照千年的岁月',
				'我的琴声呜咽',
				'我的泪水全无',
				'只身打马过草原',
				'',
				'（原词来自海子，有增改）'
		]
	},
	{
		id:2,
		title:'高级动物',
		img:'dw.jpg',
		vote:43,
		content:[
				'矛盾 虚伪 贪婪 欺骗',
				'好强 无奈 孤独 脆弱',
				'忍让 气忿 复杂 讨厌',
				'嫉妒 阴险 争夺 埋怨',
				'自私 无聊 变态 冒险',
				'好色 善良 博爱 诡辩',
				'能说 空虚 真诚 金钱',
				'&nbsp;',
				'哦 我的天',
				'高级动物',
				'地狱天堂',
				'皆在人间',
				'&nbsp;',
				'伟大 渺小 中庸 可怜',
				'欢乐 痛苦 战争 平安',
				'辉煌 暗淡 得意 伤感',
				'怀恨 报复 专横 责难',
				'&nbsp;',
				'幸福在哪里'
		]
	}
]

var util={
	/**
	 * 获取文章
	 */
	getArticle:function(param){
		if(param.id && typeof param.success == 'function'){
			var result;
			for(var i=0;i<=articles.length;i++){
				var article = articles[i]
				if(param.id == article.id) {
					result = article;
					break;
				}
			}

			setTimeout(function(){
				param.success(result);
			},500)
		}
	},

	upvote:function(param){
		setTimeout(function(){
			if(typeof param.success == 'function')
				param.success('success');
		},1000)
	}
}

