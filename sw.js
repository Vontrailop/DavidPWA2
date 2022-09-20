
self.addEventListener('install', (event) => {
    console.log("SW INSTALL");
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('.jpg')) {
        console.log(event.request.url);
        // const resp = new Response(`
        // body{
        //     color:red;
        //     background-color: blue;
        // }
        // `, {
        //     headers: {
        //         'Content-Type': 'text/css'
        //     }
        // })

        event.respondWith(
            fetch('images/Draven_0.jpg')
        )
        // event.respondWith(
        //     resp
        // )
    }


});