jQuery(function(){
    function showConver()
    {
        var isHome = window.location.pathname == "/" && window.location.hash == "";

        var index_conver =jQuery("div.panel-cover:first");
        var blog_conver =jQuery("div.body_container:first");

        if(isHome)
        {
            index_conver.fadeIn();

            jQuery("a.blog-button").click(function(){
                index_conver.fadeOut();
                blog_conver.show();
            });
        }
        else
        {
            blog_conver.fadeIn();
        }
    }

    showConver();

});
