$(document).ready(function() {
  var elems = $("body").find("*:not(:has(*))");

  for (var i = 0; i < elems.length; i++) {
    var elem = elems.eq(i);
    var text = $(elem).text();
    text = text.replace("Witnesses", "These dudes I know");
    text = text.replace("witnesses", "these dudes I know");
    text = text.replace("Witness", "This dude I know");
    text = text.replace("witness", "this dude I know");
    text = text.replace("Allegedly", "Kinda probably");
    text = text.replace("allegedly", "kinda probably");
    text = text.replace("new studies", "Tumblr posts");
    text = text.replace("new study", "Tumblr post");
    text = text.replace("rebuild", "avenge");
    text = text.replace("Space", "Spaaace");
    text = text.replace("space", "spaaace");
    text = text.replace("Google Glass", "Virtual Boy");
    text = text.replace("Smartphones", "Pokedexes");
    text = text.replace("smartphones", "Pokedexes");
    text = text.replace("Smartphone", "Pokedex");
    text = text.replace("smartphone", "Pokedex");
    text = text.replace("Electric", "Atomic");
    text = text.replace("electric", "atomic");
    text = text.replace("Senator", "Elf-Lord");
    text = text.replace("senator", "elf-lord");
    // these mess up too many words
    // text = text.replace("Car", "Cat");
    // text = text.replace("car", "cat");
    text = text.replace("Election", "Eating contest");
    text = text.replace("election", "eating contest");
    text = text.replace("Congressional leaders", "River spirits");
    text = text.replace("congressional leaders", "river spirits");
    text = text.replace("Homeland Security", "Homestar Runner");
    text = text.replace("could not be reached for comment", "is guilty and everyone knows it");
    text = text.replace("Force", "Horse");
    text = text.replace("force", "horse");
    $(elem).text(text);
  }
});
