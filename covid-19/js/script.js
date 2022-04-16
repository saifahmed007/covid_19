$(document).ready( function(){

    $('section').each(function(){

      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let height = $(this).height();

      if(top > offset && top < offset + height){
        $('.navbar a').removeClass('active');
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

 

});


  // fetch api covid-19
      var myform = document.getElementById('myform')
    myform.addEventListener('submit',function(e){

        e.preventDefault()

    var country = document.getElementById('country').value
    

    // fetch covid 19 api
    var url ="https://api.covid19api.com/dayone/country/"+country

    fetch (url)
    .then((res) => res.json())
    .then((res) => {
        console.log(res)
        var length = res.length
        var index  = length - 1
        var confirmed = document.getElementById('confirmed')
        var deaths    = document.getElementById('deaths')
        var recovered = document.getElementById('recovered')

        confirmed.innerHTML = ''
        deaths.innerHTML    = ''
        recovered.innerHTML = ''




        confirmed.append("Total Confirmed:"+res[index].Confirmed)
        deaths.append("Total Deaths:"+res[index].Deaths)
        recovered.append("Total Recovered:"+res[index].Recovered)

    })


    })


    // country details fetch api
    
function connectAPI(){
  fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json() )
  .then(data => loadAPI(data))
}

connectAPI();


function loadAPI(data){
  console.log(data[0]);

var outerDiv = document.getElementById('countries')

  for(var a=0; a<data.length; a++){


    var newDiv = document.createElement('div'); 
    newDiv.innerHTML = `<h4>${data[a].name.common}   </h4> 
                          
                           <img src= '${data[a].flags.png}'>                        
                           <p>Population: ${data[a].population}</p> 
                           <p>Capital: ${data[a].capital[0]}</p>                       
                           <p>Region: ${data[a].region}</p>                       


                     `;
        newDiv.classList.add('inner-style');
        outerDiv.appendChild(newDiv);

  }
}




