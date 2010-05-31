(function(){

    var s = document.documentElement.appendChild(document.createElement('script')),
        t = setInterval(function(){
            if (window.fairyEnvironment && fairyEnvironment.Fairy) {
                clearInterval(t);
                s.parentNode.removeChild(s);
                init();
            }
        }, 50);
    
    s.src = 'fairy.js';

    function init() {
    
        var d = document.body.appendChild(document.createElement('div')),
            docEl = document.documentElement,
            body = document.body,
            winHeight,
            resize = function() {
                winHeight = window.innerHeight || docEl.clientHeight || body.clientHeight;
                fairyEnvironment.bounds.right = Math.max(docEl.clientWidth, docEl.offsetWidth);
                scroll();
            },
            scroll = function() {
                fairyEnvironment.bounds.top = Math.max(body.scrollTop, docEl.scrollTop);
                fairyEnvironment.bounds.left = Math.max(body.scrollLeft, docEl.scrollLeft);
                fairyEnvironment.bounds.bottom = fairyEnvironment.bounds.top + winHeight;
            };
        
        resize();
        
        if (window.addEventListener) {
            window.addEventListener('resize', resize, false);
            window.addEventListener('scroll', scroll, false);
        } else {
            // IE doesn't support canvas, but hey... Here's HOPING!
            window.attachEvent('onresize', resize);
            window.attachEvent('onscroll', scroll);
        }
        
        fairyEnvironment.spawn(25, function(){
            if (this.dom) {
                d.appendChild(this.dom);
                this.start();
            }
        });
    
    }

}());