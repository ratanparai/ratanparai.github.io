var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Setting up Jekyll for the first time",
      excerpt: "My first experience with Jekyll and how I am stating to love it",
      categories: ["Jekyll"],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "SSL certificate for Intranet network",
      excerpt: "SSL (read HTTPS) encrypted internal website for security is must for banking solution. This is how I solved the problem....",
      categories: [],
      tags: ["https,intranet-ssl,ssl,openssl"],
      id: 1
    });
    
  
    idx.add({
      title: "Change ssh port of CentOS 7",
      excerpt: "Change ssh port of CentOS 7",
      categories: ["Linux"],
      tags: [],
      id: 2
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Setting up Jekyll for the first time",
        "url": "http://localhost:4000/jekyll/setting-up-jekyll-for-the-first-time/",
        "excerpt": "This is my first Jekyll1 post and I am testing this thing out. So far looking good and fantastic. At...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SSL certificate for Intranet network",
        "url": "http://localhost:4000/SSL-certificate-for-intranet-network/",
        "excerpt": "Setup OpenSSL Download and install OpenSSL from here. For our current task light version is more than enough. I have...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Change ssh port of CentOS 7",
        "url": "http://localhost:4000/linux/change-centos7-ssh-port/",
        "excerpt": "To change SSH port of CentOS 7 please follow those steps- At first backup the default configuration file. It is...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p>'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
