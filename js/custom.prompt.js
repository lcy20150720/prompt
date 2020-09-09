// +--------------------------------------------------------------------------------------
// | custom.prompt.js
// +--------------------------------------------------------------------------------------
// | time：2020-09-09
// +--------------------------------------------------------------------------------------
// | Author: lcy
// +--------------------------------------------------------------------------------------
// | 使用
// |	引入js文件，调用方法如下：
// |	mylayer.getInstance().defaultPrompt.show(msg,size);
// |	msg参数表示传入的文字内容;
// |    size参数表示提示框大小（传入'mid'表示中型,'min'表示小型,不传默认中型框）
// |
// +--------------------------------------------------------------------------------------
 
var mylayer = (function(){
	var defaultPrompt = (function(){
		function defaultPrompt(){}
		defaultPrompt.prototype={
			show: function(msg, size){
				this.boxSize = size || 'mid'; //传入提示框大小['mid'：中]['min': 小]
				this.boxTxt = msg || ''; //传入提示框内容

				var prompt = document.querySelector('.jm_prompt');
				if(prompt){
					setTimeout(function(){
						prompt.classList.add('prompt_animate');
						setTimeout(function(){
							prompt.classList.remove('prompt_animate');
						},3000)
					},200);
				}else{
					var promptTmp = this.createHtml();
					document.body.appendChild(promptTmp);

					setTimeout(function(){
						promptTmp.classList.add('prompt_animate');
						setTimeout(function(){
							promptTmp.classList.remove('prompt_animate');
						},3000)
					},200);
				}
			},
			createHtml: function(){
				var _this = this;
				var boxWrap = document.createElement('div');
				boxWrap.classList.add('jm_prompt');

				if(this.boxSize == 'mid'){
					boxWrap.classList.add('mid_prompt');
				}else{
					boxWrap.classList.add('min_prompt');
				}

				var conBox;
				if(this.boxTxt!=''){
					conBox = '<style>.jm_prompt{background:rgba(0,0,0,.8);border-radius:4px;color: #fff;text-align: center;transition: all .5s;opacity:0;position: fixed; left: 50%; top: 50%;}';
					conBox+= '.prompt_animate{opacity: 1;z-index: 999;transform: translate(-50%,-50%);}';
					conBox+= '.mid_prompt{width:160px;height:48px;line-height: 48px;}';
					conBox+= '.min_prompt{padding: 0 12px;height:32px;line-height: 32px;min-width: 80px;}';
					conBox+= '</style>';
					conBox+= '<div class="prompt_content">'+_this.boxTxt+'</div>';
				}
				boxWrap.innerHTML=conBox;
				return boxWrap;
			},

		}
		return new defaultPrompt();
	})()
	var instance;
	var _static = {
		getInstance: function(){
			if(!instance){
				intance ={
					defaultPrompt: defaultPrompt
				}
			}
			return intance;
		}
	}
	return _static;
})()