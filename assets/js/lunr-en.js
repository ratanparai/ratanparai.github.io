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
      tags: ["https","intranet-ssl","ssl","openssl"],
      id: 1
    });
    
  
    idx.add({
      title: "Change ssh port of CentOS 7",
      excerpt: "Change ssh port of CentOS 7",
      categories: ["Linux"],
      tags: ["CentOS 7","SSH"],
      id: 2
    });
    
  
    idx.add({
      title: "Responsive image on jekyll",
      excerpt: "Responsive image make your website faster by loading the image that is required for the screen. Loading high quality image...",
      categories: ["Jekyll"],
      tags: ["responsive image","jekyll plugin","lazysizes"],
      id: 3
    });
    
  
    idx.add({
      title: "Java application with code coverage report using gradle",
      excerpt: "Although we can use IDE for creating new java projects, if we use a build tool like `gradle` and create...",
      categories: ["Java"],
      tags: ["gradle","junit","code coverage","jacoco","unit test"],
      id: 4
    });
    
  
    idx.add({
      title: "Compile TaskWarrior in Ubuntu",
      excerpt: "Although you can install `TaskWarrior` from `Ubuntu` package manager, but it doesn't have latest version. So you have to download...",
      categories: ["Taskwarrior"],
      tags: ["Ubuntu"],
      id: 5
    });
    
  
    idx.add({
      title: "Writing unit tests for C++ with Bazel and GoogleTest",
      excerpt: "On my journey to be a better programmer, I stated to learn C++. This is how I am using bazel...",
      categories: ["C++"],
      tags: ["bazel","googletest"],
      id: 6
    });
    
  
    idx.add({
      title: "Functional Testing of ASP.NET core 2.1 MVC Application",
      excerpt: "In ASP.NET core 2.1, setting up functional testing project got much easier with the release of [Microsoft.AspNetCore.Mvc.Testing](https://www.nuget.org/packages/Microsoft.AspNetCore.Mvc.Testing) nuget package.",
      categories: ["dotnet"],
      tags: ["asp.net core","functional testing","dotnet core"],
      id: 7
    });
    
  
    idx.add({
      title: "Zero to Hero in Microservices with dotnet core - Introduction",
      excerpt: "In this series of blog articles, we are going to start from a basic dotnet core MVC application and then...",
      categories: ["Microservices"],
      tags: ["microservices","dotnet core"],
      id: 8
    });
    
  
    idx.add({
      title: "Part one: Getting started with asp.net core MVC",
      excerpt: "This is part one of the tutorial series Zero to Hero in Microservices with dotnet core.\n\n",
      categories: ["Microservices"],
      tags: ["microservices","dotnet core"],
      id: 9
    });
    
  
    idx.add({
      title: "Add request id to all asp.net core MVC response",
      excerpt: "In REST API, most of the time we only send request ID when the calls fails with 4XXX or 5XXX...",
      categories: ["dotnet"],
      tags: ["dotnet","dotnet core","asp.net core"],
      id: 10
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Setting up Jekyll for the first time",
        "url": "https://www.ratanparai.com/jekyll/setting-up-jekyll-for-the-first-time/",
        "excerpt": "This is my first Jekyll1 post and I am testing this thing out. So far looking good and fantastic. At...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "SSL certificate for Intranet network",
        "url": "https://www.ratanparai.com/SSL-certificate-for-intranet-network/",
        "excerpt": "Setup OpenSSL Download and install OpenSSL from here. For our current task light version is more than enough. I have...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Change ssh port of CentOS 7",
        "url": "https://www.ratanparai.com/linux/change-centos7-ssh-port/",
        "excerpt": "To change SSH port of CentOS 7 please follow those steps- At first backup the default configuration file. It is...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Responsive image on jekyll",
        "url": "https://www.ratanparai.com/jekyll/Responsive-image-on-jekyll/",
        "excerpt": "Responsive image make your website faster by loading the image that is required for the screen. Loading high quality image...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Java application with code coverage report using gradle",
        "url": "https://www.ratanparai.com/java/java-application-using-gradle-with-code-coverage/",
        "excerpt": "Although we can use IDE for creating new java projects, if we use a build tool like gradle and create...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Compile TaskWarrior in Ubuntu",
        "url": "https://www.ratanparai.com/taskwarrior/compile-taskwarrior-ubuntu/",
        "excerpt": "Taskwarrior is Free and Open Source Software that manages your TODO list from the command line. It is flexible, fast,...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Writing unit tests for C++ with Bazel and GoogleTest",
        "url": "https://www.ratanparai.com/c++/writing-unit-tests-with-bazel/",
        "excerpt": "For last couple of months I am in love with writing Unit Tests. I wasn’t like that. You may say...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Functional Testing of ASP.NET core 2.1 MVC Application",
        "url": "https://www.ratanparai.com/dotnet/functional-testing-aspnet-core-2.1-mcv/",
        "excerpt": "In ASP.NET core 2.1, setting up functional testing project got much easier with the release of Microsoft.AspNetCore.Mvc.Testing nuget package. In...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Zero to Hero in Microservices with dotnet core - Introduction",
        "url": "https://www.ratanparai.com/microservices/zero-to-hero-with-dotnet-core-microservice-introduction/",
        "excerpt": "In this series of blog articles, we are going to start from a basic dotnet core MVC application and then...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Part one: Getting started with asp.net core MVC",
        "url": "https://www.ratanparai.com/microservices/part-1-mvc-application/",
        "excerpt": "This is part one of the tutorial series Zero to Hero in Microservices with dotnet core. Today, we will create...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Add request id to all asp.net core MVC response",
        "url": "https://www.ratanparai.com/dotnet/add-request-id-to-every-response/",
        "excerpt": "In REST API, most of the time we only send request ID when the calls fails with 4XXX or 5XXX...",
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
