var intro = {
    name: 'intro',
    title: "Welcome!",
    text: "This is a _babe template providing examples for drawing random shapes in random colors at different positions on the canvas. In the following you will see three blocks of examples that use different methods for positioning elements on the canvas: (i) random placement, (ii) grid placement, (iii) grid placement in blocks. See <a href='https://babe-project.github.io/babe_site/reuse/templates.html'>the _babe documentation</a> for more explanation.",
    buttonText: "Begin experiment",
    render: function () {
        var viewTemplate = $('#intro-view').html();

        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            button: this.buttonText
        }));

        var prolificId = $('#prolific-id');
        var IDform = $('#prolific-id-form');
        var next = $('#next');

        var showNextBtn = function () {
            if (prolificId.val().trim() !== "") {
                next.removeClass('nodisplay');
            } else {
                next.addClass('nodisplay');
            }
        };

        if (config_deploy.deployMethod !== "Prolific") {
            IDform.addClass('nodisplay');
            next.removeClass('nodisplay');
        }

        prolificId.on('keyup', function () {
            showNextBtn();
        });

        prolificId.on('focus', function () {
            showNextBtn();
        });


        // moves to the next view
        next.on('click', function () {
            if (config_deploy.deployMethod === "Prolific") {
                exp.global_data.prolific_id = prolificId.val().trim();
            }

            exp.findNextView();
        });

    },
    // for how many trials should this view be repeated?
    trials: 1
};

var beginMain = {
    name: 'beginMain',
    text: "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong>displayed at a random position on the canvas</strong>.",
    render: function () {
        var viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function () {
            exp.findNextView();
        });

    },
    trials: 1
};

var main = {
    name: 'main',
    render: function (CT) {

        // fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {}));
        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), exp.trial_info.main_trials[CT], 'random');

        var startingTime = Date.now();

        $('#next').on('click', function () {
            var RT = Date.now() - startingTime; // measure RT before anything else
            var trial_data = {
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
    },
    trials: 4
};

var beginMainGrid = {
    name: 'beginMainGrid',
    text: "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong> displayed in a grid ordered by object type</strong>.",
    render: function () {
        var viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function () {
            exp.findNextView();
        });

    },
    trials: 1
};

var mainGrid = {
    name: 'mainGrid',
    render: function (CT) {

        // fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {}));

        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), exp.trial_info.main_trials[CT], 'grid');

        // record trial starting time
        var startingTime = Date.now();

        $('#next').on('click', function () {
            var RT = Date.now() - startingTime; // measure RT before anything else
            var trial_data = {
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
    },
    trials: 4
};

var beginMainGridSplit = {
    name: 'beginMainGridSplit',
    text: "Next you will see four trials in which a random number of two kinds of random geometrical shapes (triangles, squares or circles) with a random color (red, blue, yellow, or green) is <strong> displayed in two block of grids</strong>.",
    render: function () {
        var viewTemplate = $('#begin-exp-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            text: this.text
        }));

        // moves to the next view
        $('#next').on('click', function () {
            exp.findNextView();
        });

    },
    trials: 1
};

var mainGridSplit = {
    name: 'mainGridSplit',
    render: function (CT) {

        // fill variables in view-template
        var viewTemplate = $('#main-view').html();
        $('#main').html(Mustache.render(viewTemplate, {}));

        // draws the shapes on the canvas
        drawOnCanvas(document.getElementById('canvas'), exp.trial_info.main_trials[CT], 'gridSplit');

        // record trial starting time
        var startingTime = Date.now();

        $('#next').on('click', function () {
            var RT = Date.now() - startingTime; // measure RT before anything else
            var trial_data = {
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
    },
    trials: 4
};

var postTest = {
    name: 'postText',
    title: "Additional Info",
    text: "Answering the following questions is optional, but will help us understand your answers.",
    buttonText: "Continue",
    render: function () {
        var viewTemplate = $('#post-test-view').html();
        $('#main').html(Mustache.render(viewTemplate, {
            title: this.title,
            text: this.text,
            buttonText: this.buttonText
        }));

        $('#next').on('click', function (e) {
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
    name: 'thanks',
    message: "Thank you for taking part in this experiment!",
    render: function () {
        var viewTemplate = $('#thanks-view').html();

        // what is seen on the screen depends on the used deploy method
        //    normally, you do not need to modify this
        if ((config_deploy.is_MTurk) || (config_deploy.deployMethod === 'directLink')) {
            // updates the fields in the hidden form with info for the MTurk's server
            $('#main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message
            }));
        } else if (config_deploy.deployMethod === 'Prolific') {

            $('main').html(Mustache.render(viewTemplate, {
                thanksMessage: this.message,
                extraMessage: 'Please press the button below to confirm that you completed the experiment with Prolific<br />'.concat('<a href=', config_deploy.prolificURL, ' class="prolific-url">Confirm</a>')
            }));
        } else if (config_deploy.deployMethod === 'debug') {
            $('main').html(Mustache.render(viewTemplate, {}));
        } else {
            console.log('no such config_deploy.deployMethod');
        }

        exp.submit();

    },
    trials: 1
};