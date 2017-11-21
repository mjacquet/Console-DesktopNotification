({
    notify : function(cmp) {
        if (!("Notification" in window)) {
            alert("This browser does not support desktop notification");
        }
        
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
         
            var notification = new Notification('New Work Assigned!', {
                icon: 'https://cdn.zapier.com/storage/services/e18d02bc3d9fdcf0d4bf9ad43d8a8e6d.128x128.png',
                body: 'A new work item has been assigned to you',
            });
            
            notification.onclick = function () {
                console.log("clicked");
                parent.focus();
                window.focus();
            };
            
            
        }
        
        // Otherwise, we need to ask the user for permission
            else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification('New Work Assigned!', {
                            icon: 'https://cdn.zapier.com/storage/services/e18d02bc3d9fdcf0d4bf9ad43d8a8e6d.128x128.png',
                            body: 'A new work item has been assigned to you',
                        });
                    }
                });
            }
    }
})