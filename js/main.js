  $(function(){


    
    
    for(i = 0; i < $('.team:odd').length; i ++){
      var team_even = $($('.team:even')[i]).offset().top;
      var team_odd =  $($('.team:odd')[i]).offset().top;

      var diff = team_odd - team_even;

      $($('.team:even')[i]).attr('style', '--team-after-height: ' + diff + 'px')

    };

  })
  