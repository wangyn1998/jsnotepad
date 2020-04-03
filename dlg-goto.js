var $dlgGoto =(function(){
    var  cfg = {
            container:'body',
            num:7,
            title:'同意',
            onClick: null
        };
    var html = ''
        +'<div class="notepad-dlg-goto">'
            +'<div class="dialogbox">'
                +'<div class="titlebar">'
                    +'<p class="title">转到指定行</p>'
                + '<span class="close-btn">×</span>'
                +'</div>'
                +'<div class="main">'
                    +'<label>行号(L):</label>'
                    +'<br>'
                    +'<input class="txt-line-num" type="text" autofocus>'
                    +'<br>'
                    +'<input class="btn-goto" type="button" value="转到">'
                    +'<input class="btn-cancel" type="button" value="取消">'
                +'</div>'
            +'</div>'
        +'</div>';
    function show(conf){
        var $dlg = $('<input class="timer-button" type="button" disabled/>');
        //1.DOM绘制
        $(cfg.container).append(html);
        $.extend(cfg,conf);
        num = cfg.num;
        
        //2.enent bind
        $dlg.click(cfg.onClick());
    }

    return{
        show:show
    }
}());
//不用page load event
/*封装成对象，有几种方案
1.全局对象
var timerBtn={
    show:function()
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn = (function(){
    return{
        show:function(){}
    }
}())匿名函数
3.构造函数
function TimerBtn(){

}
var tb=new TimerBtn()
*/