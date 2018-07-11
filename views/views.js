var intro = {
    // introduction title
    "title": "Welcome!",
    // introduction text
    "text": "This is a _babe template providing examples for drawing random shapes in random colors at different positions on the canvas. In the following you will see three blocks of examples that use different methods for positioning elements on the canvas: (i) random placement, (ii) grid placement, (iii) grid placement in blocks. See <a href='https://babe-project.github.io/babe_site/reuse/templates.html'>the _babe documentation</a> for more explanation.",
    // introduction's slide proceeding button text
    "buttonText": "Next",
    // render function renders the view
    render: function() {
        
        viewTemplate = $('#intro-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    // for how many trials should this view be repeated?
    trials: 1
}


var beginMain = {
    "text": "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong>displayed at a random position on the canvas</strong>.",
    render: function() {

        viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    trials: 1
}

var main = {
	
	trials : 4,
	
    render : function(CT) {
		
		// fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
        }));
		
		// update the progress bar based on how many trials there are in this round
        var filled = exp.currentTrialInViewCounter * (180 / exp.views_seq[exp.currentViewCounter].trials);
        $('#filled').css('width', filled);
        console.log(exp.trial_info.main_trials[CT]);
        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), 
					 exp.trial_info.main_trials[CT], 
					 'random');

        $('#next').on('click', function() {
            RT = Date.now() - startingTime; // measure RT before anything else
            trial_data = {
                trial_type: "main",
                trial_number: CT + 1,
                focalShape: exp.trial_info.main_trials[CT].focalShape,
                otherShape: exp.trial_info.main_trials[CT].otherShape,
                focalNumber: exp.trial_info.main_trials[CT].focalNumber,
                otherNumber: exp.trial_info.main_trials[CT].total - exp.trial_info.main_trials[CT].focalNumber,
                total: exp.trial_info.main_trials[CT].total,
                focalColor: exp.trial_info.main_trials[CT].focalColor,
                otherColor: exp.trial_info.main_trials[CT].otherColor,
                rows: exp.trial_info.main_trials[CT].rows,
                RT: RT
            };
            exp.trial_data.push(trial_data);
            exp.findNextView();
        });
		
        // record trial starting time
        startingTime = Date.now();
		
    }
};

var beginMainGrid= {
    "text": "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong> displayed in a grid ordered by object type</strong>.",
    render: function() {

        viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    trials: 1
}

var mainGrid = {
	
	trials : 4,
	
    render : function(CT) {
		
		// fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
        }));
		
		// update the progress bar based on how many trials there are in this round
        var filled = exp.currentTrialInViewCounter * (180 / exp.views_seq[exp.currentViewCounter].trials);
        $('#filled').css('width', filled);
        console.log(exp.trial_info.main_trials[CT]);
        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), 
					 exp.trial_info.main_trials[CT],
					 'grid');

        $('#next').on('click', function() {
            RT = Date.now() - startingTime; // measure RT before anything else
            trial_data = {
                trial_type: "main",
                trial_number: CT + 1,
                focalShape: exp.trial_info.main_trials[CT].focalShape,
                otherShape: exp.trial_info.main_trials[CT].otherShape,
                focalNumber: exp.trial_info.main_trials[CT].focalNumber,
                otherNumber: exp.trial_info.main_trials[CT].total - exp.trial_info.main_trials[CT].focalNumber,
                total: exp.trial_info.main_trials[CT].total,
                focalColor: exp.trial_info.main_trials[CT].focalColor,
                otherColor: exp.trial_info.main_trials[CT].otherColor,
                rows: exp.trial_info.main_trials[CT].rows,
                RT: RT
            };
            exp.trial_data.push(trial_data);
            exp.findNextView();
        });
		
        // record trial starting time
        startingTime = Date.now();
		
    }
};

var beginMainGridSplit = {
    "text": "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong> displayed in two block of grids</strong>.",
    render: function() {

        viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function(e) {
            exp.findNextView();
        });

    },
    trials: 1
}

var mainGridSplit = {
	
	trials : 4,
	
    render : function(CT) {
		
		// fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
        }));
		
		// update the progress bar based on how many trials there are in this round
        var filled = exp.currentTrialInViewCounter * (180 / exp.views_seq[exp.currentViewCounter].trials);
        $('#filled').css('width', filled);
        console.log(exp.trial_info.main_trials[CT]);
        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), 
					 exp.trial_info.main_trials[CT],
					 'gridSplit');

        $('#next').on('click', function() {
            RT = Date.now() - startingTime; // measure RT before anything else
            trial_data = {
                trial_type: "main",
                trial_number: CT + 1,
                focalShape: exp.trial_info.main_trials[CT].focalShape,
                otherShape: exp.trial_info.main_trials[CT].otherShape,
                focalNumber: exp.trial_info.main_trials[CT].focalNumber,
                otherNumber: exp.trial_info.main_trials[CT].total - exp.trial_info.main_trials[CT].focalNumber,
                total: exp.trial_info.main_trials[CT].total,
                focalColor: exp.trial_info.main_trials[CT].focalColor,
                otherColor: exp.trial_info.main_trials[CT].otherColor,
                rows: exp.trial_info.main_trials[CT].rows,
                RT: RT
            };
            exp.trial_data.push(trial_data);
            exp.findNextView();
        });
		
        // record trial starting time
        startingTime = Date.now();
		
    }
};

var postTest = {
    "title": "Additional Info",
    "text": "Answering the following questions is optional, but will help us understand your answers.",
    "buttonText": "Continue",
    render : function() {

        viewTemplate = $('#post-test-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            buttonText: this.buttonText
        }));

        $('#next').on('click', function(e) {
            // prevents the form from submitting
            e.preventDefault();

            // records the post test info
            exp.global_data.age = $('#age').val();
            exp.global_data.gender = $('#gender').val();
            exp.global_data.education = $('#education').val();
            exp.global_data.languages = $('#languages').val();
            exp.global_data.comments = $('#comments').val().trim();
            exp.global_data.endTime = Date.now();
            exp.global_data.timeSpent = (exp.global_data.endTime - exp.global_data.startTime) / 60000;

            // moves to the next view
            exp.findNextView();
        })

    },
    trials: 1
};

var thanks = {
    "message": "Thank you for taking part in this experiment!",
    render: function() {

        viewTemplate = $('#thanks-view').html();

        // what is seen on the screen depends on the used deploy method
		//    normally, you do not need to modify this
        if ((config_deploy.is_MTurk) || (config_deploy.deployMethod === 'directLink')) {
            // updates the fields in the hidden form with info for the MTurk's server
            $('#main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
            }));
        } else if (config_deploy.deployMethod === 'Prolific') {
            var prolificURL = 'https://prolific.ac/submissions/complete?cc=' + config_deploy.prolificCode;

            $('main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
                extraMessage: "Please press the button below<br />" + '<a href=' + prolificURL +  ' class="prolific-url">Finished!</a>'
            }));
        } else if (config_deploy.deployMethod === 'debug') {
            $('main').html(Mustache.render(viewTemplate, {}));
        } else {
            console.log('no such config_deploy.deployMethod');
        }

        exp.submit();

    },
    trials: 1
}