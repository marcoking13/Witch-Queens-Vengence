class Boost {
  constructor(stat_type,stages,lower){
    this.stages = stages;
    this.stage_points = .25;
    this.stat_type = stat_type;
    this.name = "boost";
    this.lower = lower;

    this.effect =  function boost(character_stats,stat_type){

      var stage_multiplier = (this.stage_points * this.stages);
      var boost_or_lower_stat = stage_multiplier * this.lower;


      switch(stat_type){
        case "attack":
          character_stats.attack +=  Math.floor(character_stats.attack * boost_or_lower_stat);
          return character_stats
        case "defense":
        console.log(character_stats.defense)
           character_stats.defense +=  Math.floor(character_stats.defense * boost_or_lower_stat);
           console.log(character_stats.defense)
           return character_stats

        case "speed":
           character_stats.speed +=  Math.floor( character_stats.speed *  boost_or_lower_stat);
           console.log(character_stats)
           return character_stats
        case "luck":
           character_stats.luck += Math.floor(character_stats.luck * boost_or_lower_stat);
           return character_stats
      }

    }

  }

}
