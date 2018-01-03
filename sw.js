var urlsToCache = [];


  urlsToCache.push("/java/java-application-using-gradle-with-code-coverage/");

  urlsToCache.push("/jekyll/Responsive-image-on-jekyll/");

  urlsToCache.push("/linux/change-centos7-ssh-port/");

  urlsToCache.push("/SSL-certificate-for-intranet-network/");

  urlsToCache.push("/jekyll/setting-up-jekyll-for-the-first-time/");



  
    urlsToCache.push("/404.html");
  

  
    urlsToCache.push("/404.html");
  

  

  
    urlsToCache.push("/_pages/about/");
  

  

  
    urlsToCache.push("/about/");
  

  

  
    urlsToCache.push("/");
  

  

  
    urlsToCache.push("/assets/js/lunr-en.js");
  

  

  
    urlsToCache.push("/assets/css/main.css");
  

  
    urlsToCache.push("/search/");
  

  
    urlsToCache.push("/search/");
  

  
    urlsToCache.push("/search/");
  

  
    urlsToCache.push("/search/");
  

  

  
    urlsToCache.push("/tags/https/");
  

  

  
    urlsToCache.push("/tags/intranet-ssl/");
  

  

  
    urlsToCache.push("/tags/ssl/");
  

  

  
    urlsToCache.push("/tags/openssl/");
  

  

  
    urlsToCache.push("/tags/centos-7/");
  

  

  
    urlsToCache.push("/tags/ssh/");
  

  

  
    urlsToCache.push("/tags/responsive-image/");
  

  

  
    urlsToCache.push("/tags/jekyll-plugin/");
  

  

  
    urlsToCache.push("/tags/lazysizes/");
  

  

  
    urlsToCache.push("/tags/gradle/");
  

  

  
    urlsToCache.push("/tags/junit/");
  

  

  
    urlsToCache.push("/tags/code-coverage/");
  

  

  
    urlsToCache.push("/tags/jacoco/");
  

  

  
    urlsToCache.push("/tags/unit-test/");
  

  

  
    urlsToCache.push("/categories/jekyll/");
  

  

  
    urlsToCache.push("/categories/linux/");
  

  

  
    urlsToCache.push("/categories/java/");
  


var CACHE_NAME = 'ratan-parai-cache-v1';

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(urlsToCache);
  }).catch(function(err) {
    console.log('cache add err', err);
  }));
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});

// strategies from the offline cookbook by jake archibald
// https://jakearchibald.com/2014/offline-cookbook/#serving-suggestions-responding-to-requests



  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.open(CACHE_NAME).then(function(cache) {
        return fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    );
  });

