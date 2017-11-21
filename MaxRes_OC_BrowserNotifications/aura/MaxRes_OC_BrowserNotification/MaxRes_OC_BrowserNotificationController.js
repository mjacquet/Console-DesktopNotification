({
    doInit: function(cmp, evt, hlp) {
        document.addEventListener("visibilitychange", function(){
            if (document.hidden) {
            cmp.set("v.hasFocus",false);
        } else {
            cmp.set("v.hasFocus",true);
        }
        }, false);
        
        
        
        window.setInterval(
            $A.getCallback(function() {
                var omniAPI = cmp.find("omniToolkit");
                omniAPI.getAgentWorks({
                    callback: function(result) {
                        if(typeof result.works != 'undefined'){
                            var works = JSON.parse(result.works);
                            works.forEach(function(work) {
                                if(!work.isEngaged){
                                    var lastnotif=cmp.get("v.lastnotif");
                                    var foc=cmp.get("v.hasFocus");
                                    if(lastnotif!=work.workId && !foc)hlp.notify(cmp);
                                    cmp.set("v.lastnotif",work.workId);
                                }
                            });    
                        }
                    }
                });
            }), 1000
        );
        
    }
})