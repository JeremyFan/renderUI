/* 内容块 */
var Content = React.createClass({
	render:function(){
		var createPara=function(text){
			return <li>{text}</li>;
		}
		return <ul>{this.props.data.map(createPara)}</ul>
	}
})

var Article = React.createClass({
	getInitialState: function() {
	  return {
	    title: '',
	    vote: '',
	    content:[]
	  };
	},

	render:function(){
		return (
			<article>
				<Content data={this.state.content} />
			</article>
		)
	},

	componentDidMount: function() {
		var self=this;
		util.getArticle({
			id:2,
			success:function(response){
				self.setState({
					title:response.title,
					vote:response.vote,
					content:response.content
				})
			}
		})
	}
});

React.render(
	<Article />,
	document.body
)