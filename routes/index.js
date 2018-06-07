var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/',function(req, res, next) {
  var selectedFiles = [];
  loadFiles(selectedFiles);
  res.render('index', { title: 'Express' , files: selectedFiles});
});

function loadFiles(selectedFiles) {
	 var files = fs.readdirSync('./public');
	  for(fn in files) {
		  if(files[fn].endsWith(".html")) {
			  selectedFiles.push(files[fn]);
		  }
	  }
}

module.exports = router;
