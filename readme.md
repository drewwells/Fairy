# Fairy!

**[See a demonstration](http://jsbin.com/ocelo/)**

***Fairy*** is a stand-alone (no dependencies) JavaScript class for generating fairy-like pulsating thingies. It's almost entirely pointless... but very fun. It's best when used as a bookmarklet.

The code is quite simple so I'm not going to litter this sacred ground with documentation.

I'll just leave this here:

    fairyEnvironment.spawn(25, function(){
        if (this.dom) {
            document.body.appendChild(this.dom);
            this.start();
        }
    });
    // Now you have 25 fairies flying around!