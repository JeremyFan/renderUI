		$(function(){

			var Content = React.createClass({
				render:function(text){
					var createPara = function(text){
						if(text)
							result = <p>{text}</p>
						else
							result = <p>&nbsp;</p>

						return {result}
					}
					return (
						<div className="content">
							{this.props.data.map(createPara)}
						</div>
					)
				}
			});

			var Vote = React.createClass({

				getInitialState:function(){
					return {
						data: 0
					}
				},

				vote:function(){
					var self=this;
					util.upvote({
						id:this.props.id,
						success:function(response){
							if(response == 'success'){
								self.setState({data:self.state.data+1});
							}
						}
					})
				},

				render:function(){
					return (
						<div className="up" onClick={this.vote}>
							<div className="arrow"></div>
							<span>{this.state.data}</span>
						</div>
					)
				},
				/**
				 * 组件接收到新props时调用
				 */
				componentWillReceiveProps:function(nextProps){
					this.setState({data: nextProps.data});
				}
			});

			var Article = React.createClass({

				getInitialState:function(){
					return {
						id:0,
						title: '',
						vote: 0,
						img:'',
						content: []
					}
				},

				render:function(){
					return (
						<div>
							<h2 className="title">{this.state.title}</h2>
							<img src={this.state.img} />
							<Vote id={this.state.id} data={this.state.vote} />
							<Content data={this.state.content} />
						</div>
					)
				},

				componentDidMount:function(){
					var self = this;
					util.getArticle({
						id:3,
						success:function(response){
							self.setState(response);
						}
					})
				}
			});

			React.render(
				<Article />,
				document.querySelector('.react-article')
			)

		});
