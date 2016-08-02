$(function(){
    var isHome = window.location.pathname == "/" && window.location.hash == "";

    //显示加载动画
    function  addLoading() {
        if(isHome){
            var loadingEle = $("div.overlay:first");
            loadingEle.show();

            $(window).on('load',function () {
                //移除loading动画
                (function removeLoading() {
                    loadingEle.slideUp();
                    loadingEle = null;
                })();
            });
        }
    }

    //显示封面
    function showConver()
    {
        var index_conver =$("div.panel-cover:first");
        var blog_conver =$("div.body_container:first");

        if(isHome)
        {
            index_conver.fadeIn();

            index_conver.find("a.blog-button").click(function(){
                index_conver.slideUp();
                blog_conver.show();
            });
        }
        else
        {
            blog_conver.show();
        }
    }

    addLoading();
    showConver();
});
