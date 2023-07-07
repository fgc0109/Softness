tinymce.PluginManager.add('ax_wordlimit', function(editor) {
    var pluginName='字数限制';
    var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
    var global$2 = tinymce.util.Tools.resolve('tinymce.util.Delay');
    var ax_wordlimit_type = editor.getParam('ax_wordlimit_type', 'letter' );
    var ax_wordlimit_num = editor.getParam('ax_wordlimit_num', false );
    var ax_wordlimit_delay = editor.getParam('ax_wordlimit_delay', 500 );
    var ax_wordlimit_callback = editor.getParam('ax_wordlimit_callback', function(){} );
    var ax_wordlimit_event = editor.getParam('ax_wordlimit_event', 'SetContent Undo Redo Keyup' );
    var onsign=1;
    //统计方法1：计算总字符数
    var sumLetter = function(){
        var html = editor.getContent();
        var re1 = new RegExp("<.+?>","g");
        var txt = html.replace(re1,'');
        txt = txt.replace(/\n/g,'');
        txt = txt.replace(/&nbsp;/g,'');
        txt = txt.replace(/\s/g,"");
        txt = txt.replace(/[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g ,"'");
        var num=txt.trim().length;
        return {txt:txt,num:num}
    }
    var onAct = function(){
        if(onsign){
            onsign=0;
            //此处预留更多统计方法
            switch(ax_wordlimit_type){
                case 'letter':
                default:
                    var res = sumLetter();
            }
            // if( res.num > ax_wordlimit_num ){
            //     ax_wordlimit_callback(editor, res.txt, ax_wordlimit_num);
            // }
            setTimeout(function(){onsign=1}, ax_wordlimit_delay);
        }
        
    }
    var setup = function(){
        if( ax_wordlimit_num>0 ){
            global$2.setEditorTimeout(editor, function(){
                var doth = editor.on(ax_wordlimit_event, onAct);
            }, 300);
        }
    };

    setup();

    return {
        getMetadata: function () {
            return  {
                name: pluginName,
                url: "http://tinymce.ax-z.cn/more-plugins/ax_wordlimit.php",
            };
        }
    };
});
