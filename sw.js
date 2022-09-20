self.addEventListener('install',(event)=>{
 console.log('sw: install');
});

self.addEventListener('fetch',(event)=>{
 if (event.request.url.includes('style.css')){
 console.log(event.request.url);
 
 const resp = new Response (
  
    `
    body{

            color: red;
            background-color: #000;

        }`,
    {

        headers: {
            'Content-Type': 'text/css',
        },
    }  
 );
 event.respondWith(resp )
    
 }


});




self.addEventListener('fetch',(event)=>{
    if (event.request.url.includes('gato1.webp')){
    console.log(event.request.url);
    
    let foto = fetch('images/gato2.jpeg');
    event.respondWith(foto )
       
    }
   
   
   });