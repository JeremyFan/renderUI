(function(){
	angular.module('article', [])
		.controller('ArticleCtrl', ['$scope', function ArticleCtrl($scope) {
			$scope.data = 	{
				id:4,
				title:'苦鬼',
				img:'zxzz.jpg',
				vote:89,
				content:[
					'最近我一直解释自己的把戏',
					'对一个姑娘',
					'今天她对我说：“再见，可爱的小伙子。”',
					'我就这样陷入颓丧',
					'她很深地进入我的无知',
					'她轻易地把我赶进了襁褓里',
					'仿佛又对我说：“兄弟，你姐姐今天会回来得早。”',
					'她答应如果在五点前接不着客',
					'就在工厂里偷块铁',
					'趁供销社没有打烊之前卖掉它',
					'给你带回一瓶乐百氏',
					'每一个亿万民众失业的年代',
					'我们学会解释自己的把戏',
					'领导们总说：“人多，锅小，我们挺好！',
					'有的国家还在战火里纷飞咧。”',
					'你叼着烟投降，跺着脚地想着窍门',
					'人民被迫投降',
					'人民越级上访',
					'你叼着烟投降，跺着脚地想着窍门',
					'人民麻烦地上访',
					'人民被迫投降',
					'我投降在襁褓里，在出神地望着你',
				]
			}
	   }]);
})()