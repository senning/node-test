exports.index = function(req, res){
  res.render(
    'home',
    {
      title: 'Who loves you?',
    }
  );
}