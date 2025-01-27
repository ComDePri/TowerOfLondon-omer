/* ************************************ */
/* Define new helper functions for ComDepRi */
/* ************************************ */

var problemsJSON = {
  "11": [
    [2, 1, 3],
    [0, 0],
    [0]
  ],
  "12": [
    [2, 1, 0],
    [0, 0],
    [3]
  ],
  "13": [
    [2, 1, 0],
    [3, 0],
    [0]
  ],
  "14": [
    [2, 0, 0],
    [3, 1],
    [0]
  ],
  "15": [
    [2, 0, 0],
    [3, 0],
    [1]
  ],
  "16": [
    [0, 0, 0],
    [3, 2],
    [1]
  ],
  "21": [
    [2, 3, 1],
    [0, 0],
    [0]
  ],
  "22": [
    [2, 3, 0],
    [0, 0],
    [1]
  ],
  "23": [
    [2, 3, 0],
    [1, 0],
    [0]
  ],
  "24": [
    [2, 0, 0],
    [1, 3],
    [0]
  ],
  "25": [
    [2, 0, 0],
    [1, 0],
    [3]
  ],
  "26": [
    [0, 0, 0],
    [1, 2],
    [3]
  ],
  "31": [
    [3, 2, 1],
    [0, 0],
    [0]
  ],
  "32": [
    [3, 2, 0],
    [0, 0],
    [1]
  ],
  "33": [
    [3, 2, 0],
    [1, 0],
    [0]
  ],
  "34": [
    [3, 0, 0],
    [1, 2],
    [0]
  ],
  "35": [
    [3, 0, 0],
    [1, 0],
    [2]
  ],
  "36": [
    [0, 0, 0],
    [1, 3],
    [2]
  ],
  "41": [
    [3, 1, 2],
    [0, 0],
    [0]
  ],
  "42": [
    [3, 1, 0],
    [0, 0],
    [2]
  ],
  "43": [
    [3, 1, 0],
    [2, 0],
    [0]
  ],
  "44": [
    [3, 0, 0],
    [2, 1],
    [0]
  ],
  "45": [
    [3, 0, 0],
    [2, 0],
    [1]
  ],
  "46": [
    [0, 0, 0],
    [2, 3],
    [1]
  ],

  "51": [
    [1, 3, 2],
    [0, 0],
    [0]
  ],
  "52": [
    [1, 3, 0],
    [0, 0],
    [2]
  ],
  "53": [
    [1, 3, 0],
    [2, 0],
    [0]
  ],
  "54": [
    [1, 0, 0],
    [2, 3],
    [0]
  ],
  "55": [
    [1, 0, 0],
    [2, 0],
    [3]
  ],
  "56": [
    [0, 0, 0],
    [2, 1],
    [3]
  ],

  "61": [
    [1, 2, 3],
    [0, 0],
    [0]
  ],
  "62": [
    [1, 2, 0],
    [0, 0],
    [3]
  ],
  "63": [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  "64": [
    [1, 0, 0],
    [3, 2],
    [0]
  ],
  "65": [
    [1, 0, 0],
    [3, 0],
    [2]
  ],
  "66": [
    [0, 0, 0],
    [3, 1],
    [2]
  ]
}

const BUCKET_NAME = "shape-dependent-tracking-2025"
// Define starting and ending positions
function getStartingPos(numMovements, pos) {
  var startPos = {
    4: ["14", "45", "23", "14", "16", "22", "46", "42"],
    5: ["23", "52", "34", "43", "54", "63", "15", "45"],
    6: ["12", "53", "56", "42", "53", "24", "42", "16"],
  };

  return problemsJSON[startPos[numMovements][pos]];
}
function getEndingPos(numMovements, pos) {
  var endPos = {
    4: ["51", "51", "64", "53", "24", "63", "65", "55"],
    5: ["41", "11", "54", "63", "34", "43", "55", "25"],
    6: ["51", "11", "24", "63", "34", "63", "15", "35"],
  };

  return problemsJSON[endPos[numMovements][pos]]
}

const _4_moves_start = [
  [
    [2, 0, 0],
    [3, 1],
    [0]
  ],
  [
    [3, 0, 0],
    [2, 0],
    [1]
  ],
  [
    [2, 3, 0],
    [1, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [3, 1],
    [0]
  ],
  [
    [0, 0, 0],
    [3, 2],
    [1]
  ],
  [
    [2, 3, 0],
    [0, 0],
    [1]
  ],
  [
    [0, 0, 0],
    [2, 3],
    [1]
  ],
  [
    [3, 1, 0],
    [0, 0],
    [2]
  ]
]
const _4_moves_end = [
  [
    [1, 3, 2],
    [0, 0],
    [0]
  ],
  [
    [1, 3, 2],
    [0, 0],
    [0]
  ],
  [
    [1, 0, 0],
    [3, 2],
    [0]
  ],
  [
    [1, 3, 0],
    [2, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [1, 3],
    [0]
  ],
  [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  [
    [1, 0, 0],
    [3, 0],
    [2]
  ],
  [
    [1, 0, 0],
    [2, 0],
    [3]
  ]

]
const _5_moves_start = [
  [
    [2, 3, 0],
    [1, 0],
    [0]
  ],
  [
    [1, 3, 0],
    [0, 0],
    [2]
  ],
  [
    [3, 0, 0],
    [1, 2],
    [0]
  ],
  [
    [3, 1, 0],
    [2, 0],
    [0]
  ],
  [
    [1, 0, 0],
    [2, 3],
    [0]
  ],
  [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [3, 0],
    [1]
  ],
  [
    [3, 0, 0],
    [2, 0],
    [1]
  ]
]
const _5_moves_end = [
  [
    [3, 1, 2],
    [0, 0],
    [0]
  ],
  [
    [2, 1, 3],
    [0, 0],
    [0]
  ],
  [
    [1, 0, 0],
    [2, 3],
    [0]
  ],
  [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  [
    [3, 0, 0],
    [1, 2],
    [0]
  ],
  [
    [3, 1, 0],
    [2, 0],
    [0]
  ],
  [
    [1, 0, 0],
    [2, 0],
    [3]
  ],
  [
    [2, 0, 0],
    [1, 0],
    [3]
  ]

]
const _6_moves_start = [
  [
    [2, 1, 0],
    [0, 0],
    [3]
  ],
  [
    [1, 3, 0],
    [2, 0],
    [0]
  ],
  [
    [0, 0, 0],
    [2, 1],
    [3]
  ],
  [
    [3, 1, 0],
    [0, 0],
    [2]
  ],
  [
    [1, 3, 0],
    [2, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [1, 3],
    [0]
  ],
  [
    [3, 1, 0],
    [0, 0],
    [2]
  ],
  [
    [0, 0, 0],
    [3, 2],
    [1]
  ]

]
const _6_moves_end = [
  [
    [1, 3, 2],
    [0, 0],
    [0]
  ],
  [
    [2, 1, 3],
    [0, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [1, 3],
    [0]
  ],
  [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  [
    [3, 0, 0],
    [1, 2],
    [0]
  ],
  [
    [1, 2, 0],
    [3, 0],
    [0]
  ],
  [
    [2, 0, 0],
    [3, 0],
    [1]
  ],
  [
    [3, 0, 0],
    [1, 0],
    [2]
  ]
]

const starting_pos = [_4_moves_start, _5_moves_start, _6_moves_start];
const ending_pos = [_4_moves_end, _5_moves_end, _6_moves_end];

function getProlificId(){
  const urlParams = new URL(location.href).searchParams;
// Get parameters by name
  return urlParams.get('PROLIFIC_PID')
}

function getExpURL(){
  const urlParams = new URL(location.href).searchParams;

// Get parameters by name
  //console.log("getting expUrl")
  let expurl =  urlParams.get('expUrl');
  let pid = urlParams.get('PROLIFIC_PID');
  let stud = urlParams.get('studID');
  let sess = urlParams.get('sessID');
  return expurl +"/?PROLIFIC_PID="+ pid + "&studID=" + stud + "&sessID=" + sess;
}

function downloadJSON(data, filename) {
  const jsonData = JSON.stringify(data, null, 2); // Pretty print JSON
  const blob = new Blob([jsonData], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click(); // Automatically triggers the download
}

function showErrorMessage() {
  const email = "comdepri+shir_neh@mail.huji.ac.il";

  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(() => {
    console.log("Email address copied to clipboard.");
  }).catch(err => {
    console.error("Failed to copy email address to clipboard:", err);
  });

  // Update the page content
  document.body.innerHTML = `
    <div style="font-family: Arial, sans-serif; text-align: center; margin-top: 20vh;">
      <h1 style="color: sandybrown;">There was an error saving the experiment data</h1>
      <p>It has been saved on your computer. Please send us the file to the following email address:</p>
      <p><a href="mailto:${email}" style="color: blue; text-decoration: underline;">${email}</a></p>
      <p style="color: gray;">(The email address has been copied to your clipboard.)</p>
      <p>Press <strong>Enter</strong> to continue.</p>
    </div>
  `;

  // Listen for the Enter key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      window.location.href = getExpURL();
    }
  });
}

function uploadDataWithRetryOld(retryCount = 3, delay = 1000) {

  let subject = getProlificId();
  let data = jsPsych.data.dataAsJSON();// Get data as JSON string

  $.ajax({
    url: 'https://hss74dd1ed.execute-api.us-east-1.amazonaws.com/dev/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      "subject_id": `${subject}`,
      "bucket": `${BUCKET_NAME}`,
      "exp_data": JSON.stringify(data)
    }),
    success: function(response) {
      console.log('Data uploaded successfully:', response);
      window.location.href = getExpURL();
    },
    error: function(xhr, status, error) {
      console.error(`Error uploading data (${retryCount} retries left):`, error);
      if (retryCount > 0) {
        setTimeout(() => {
          uploadDataWithRetry(retryCount - 1, delay * 2); // Double the delay
        }, delay);
      } else {
        console.error('All retry attempts failed.');
        downloadJSON(data, 'tol_results_' + subject);
        showErrorMessage()
      }
    }
  });
}

function uploadDataWithRetry(lastTry=false, endTest=true ,retryCount = 5, delay = 1000) {
  let subject = getProlificId();
  let data = jsPsych.data.dataAsJSON(); // Get data as JSON string

  return new Promise((resolve, reject) => {
    function attemptUpload(remainingRetries) {
      $.ajax({
        url: 'https://hss74dd1ed.execute-api.us-east-1.amazonaws.com/dev/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          "subject_id": `${subject}`,
          "bucket": `${BUCKET_NAME}`,
          "exp_data": JSON.stringify(data)
        }),
        success: function(response) {
          console.log('Data uploaded successfully:', response);
          resolve(response); // Resolve the promise on success
          if(endTest) {
            if (isKick){

            }
            window.location.href = getExpURL();
          }
        },
        error: function(xhr, status, error) {
          let errorMessage = xhr.responseText || "Unknown Status Msg";
          let errorCode = xhr.status || "Unknown Status Code";

          jsPsych.data.addDataToLastTrial({"upload_error": errorMessage + " - " + errorCode});
          console.error(`Error uploading data (${remainingRetries} retries left):`, error);
          if (remainingRetries > 0) {
            setTimeout(() => {
              attemptUpload(remainingRetries - 1); // Retry with reduced retry count
            }, delay);
          } else {
            console.error('All retry attempts failed.');
            if(lastTry) {
              downloadJSON(data, 'tol_results_' + subject); // Download data locally
              showErrorMessage(); // Display error message
            }
            reject(new Error('All retry attempts failed.')); // Reject the promise on failure
          }
        }
      });
    }

    attemptUpload(retryCount); // Start the upload process
  });
}

function saveData() {
  // Retrieve data from jsPsych

  //let subject = getUrlDetails()
  let subject = getProlificId();
  var data = jsPsych.data.dataAsJSON();// Get data as JSON string

  // Make a POST request to the Lambda function or API Gateway endpoint
  $.ajax({
    url: 'https://hss74dd1ed.execute-api.us-east-1.amazonaws.com/dev/',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
      "subject_id": `${subject}`,
      "bucket": `${BUCKET_NAME}`,
      "exp_data": JSON.stringify(data)
    }),
    success: function(response) {
      console.log('Data uploaded successfully:', response);
      window.location.href = getExpURL();

    },
    error: function(xhr, status, error) {
      console.error('Error uploading data:', error);

    }
  });
}

/* ************************************ */
/* Define helper functions */
/* ************************************ */

function assessPerformance() {
  /* Function to calculate the "credit_var", which is a boolean used to
  credit individual experiments in expfactory.
   */
  var experiment_data = jsPsych.data.getTrialsOfType('single-stim-button');
  var missed_count = 0;
  var trial_count = 0;
  var rt_array = [];
  var rt = 0;
  var avg_rt = -1;
  //record choices participants made
  for (var i = 0; i < experiment_data.length; i++) {
    trial_count += 1
    rt = experiment_data[i].rt
    if (rt == -1) {
      missed_count += 1
    } else {
      rt_array.push(rt)
    }
  }
  //calculate average rt
  if (rt_array.length !== 0) {
    avg_rt = math.median(rt_array)
  } else {
    avg_rt = -1
  }
  credit_var = (avg_rt > 100)
  jsPsych.data.addDataToLastTrial({"credit_var": credit_var})
}

var getStim = function() {
  var moveCountElement = '<div id="move-count">Moves: ' + num_moves + '/'+ (stage + 4)+ ' </div>';
  var ref_board = makeBoard('your_board', curr_placement, 'ref');
  var target_board = makeBoard('peg_board', my_problem);
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>';
  var hold_box;
  if (held_ball !== 0) {
    ball = colors[held_ball - 1]
    hold_box = '<div class = tol_hand_box><div class = "tol_hand_ball tol_' + ball +
      '"><div class = tol_ball_label>' + ball[0] +
      '</div></div></div><div class = tol_hand_label><strong>Ball in Hand</strong></div>'
  } else {
    hold_box =
      '<div class = tol_hand_box></div><div class = tol_hand_label><strong>Ball in Hand</strong></div>'
  }
  return moveCountElement + canvas + ref_board + target_board + hold_box;
}

var getPractice = function() {
  var ref_board = makeBoard('your_board', curr_placement, 'ref')
  var target_board = makeBoard('peg_board', example_problem3)
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>'
  var hold_box;
  if (held_ball !== 0) {
    ball = colors[held_ball - 1]
    hold_box = '<div class = tol_hand_box><div class = "tol_hand_ball tol_' + ball +
      '"><div class = tol_ball_label>' + ball[0] +
      '</div></div></div><div class = tol_hand_label><strong>Ball in Hand</strong></div>'
  } else {
    hold_box =
      '<div class = tol_hand_box></div><div class = tol_hand_label><strong>Ball in Hand</strong></div>'
  }
  return canvas + ref_board + target_board + hold_box
}

var getFB = function() {
  var data = jsPsych.data.getLastTrialData()
  var target = data.target
  var isequal = true
  correct = false
  for (var i = 0; i < target.length; i++) {
    isequal = arraysEqual(target[i], data.current_position[i])
    if (isequal === false) {
      break;
    }
  }
  var feedback;
  if (isequal === true) {
    feedback = "You got it!"
    correct = true
  } else {
    feedback = "Didn't get that one."
  }
  var ref_board = makeBoard('your_board', curr_placement)
  var target_board = makeBoard('peg_board', target)
  var canvas = '<div class = tol_canvas><div class="tol_vertical_line"></div></div>'
  var feedback_box = '<div class = tol_feedbackbox><p class = center-text>' + feedback +
    '</p></div>'
  return canvas + ref_board + target_board + feedback_box
}

var getTime = function() {
  if ((time_per_trial - time_elapsed) > 0) {
    return time_per_trial - time_elapsed
  } else {
    return 1
  }

}

var getStartText = function() {
  return '<div class = centerbox><p class = block-text>We will now start Section 1.' +
      ' There will be 8 problems to complete, with a limit of 4 moves each one.' +
      '<br><br> Pay attention: If your activity is three standard deviations below the participants’ average or if you are not active in the task, we may ask you to return your submission.' +
      '<br><br> Press <strong>enter</strong> to begin.</p></div>'
}

var getStageText = function() {
  return '<div class = centerbox><p class = block-text>We will now start an new section. The problems will have now a limit of ' + (stage + 5) +
      ' moves per problem.<br> Press <strong>enter</strong> to begin.</p></div>'
}

var getText = function() {
  return '<div class = centerbox><p class = block-text>About to start problem ' + (problem_i + 2) +
    '. Remember: You have ' + (stage + 4) +' moves to solve it - Plan well.<br> Press <strong>enter</strong> to begin.</p></div>'
}

var pegClick = function(peg_id) {
  var choice = Number(peg_id.slice(-1)) - 1
  var peg = curr_placement[choice]
  var ball_location = 0
  if (held_ball === 0) {
    for (var i = peg.length - 1; i >= 0; i--) {
      if (peg[i] !== 0) {
        held_ball = peg[i]
        peg[i] = 0
        num_moves += 1
        break;
      }
    }
  } else {
    var open_spot = peg.indexOf(0)
    if (open_spot != -1) {
      peg[open_spot] = held_ball
      held_ball = 0
    }
  }
}

var makeBoard = function(container, ball_placement, board_type) {

  let my_label
  if(board_type == 'ref'){
    my_label = 'tol_ball_label>'
  } else {
    my_label = 'tol_static_ball_label>'
  }

  var board = '<div class = tol_' + container + '><div class = tol_base></div>'
  if (container == 'your_board') {
    board += '<div class = tol_board_label><strong>Your Board</strong></div>'
  } else {
    board += '<div class = tol_board_label><strong>Target Board</strong></div>'
  }
  for (var p = 0; p < 3; p++) {
    board += '<div id = tol_peg_' + (p + 1) + '><div class = tol_peg></div></div>' //place peg
      //place balls
    if (board_type == 'ref') {
      if (ball_placement[p][0] === 0 & held_ball === 0) {
        board += '<div id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      } else if (ball_placement[p].slice(-1)[0] !== 0 & held_ball !== 0) {
        board += '<div id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      } else {
        board += '<div class = special id = tol_peg_' + (p + 1) + ' onclick = "pegClick(this.id)">'
      }
    } else {
      board += '<div id = tol_peg_' + (p + 1) + ' >'
    }
    var peg = ball_placement[p]
    for (var b = 0; b < peg.length; b++) {
      if (peg[b] !== 0) {
        ball = colors[peg[b] - 1]
        board += '<div class = "tol_ball tol_' + ball + '"><div class = ' + my_label + ball[0] +
          '</div></div>'
      }
    }
    board += '</div>'
  }
  board += '</div>'
  return board
}

var arraysEqual = function(arr1, arr2) {
  if (arr1.length !== arr2.length)
    return false;
  for (var i = arr1.length; i--;) {
    if (arr1[i] !== arr2[i])
      return false;
  }
  return true;
}

var getInstructFeedback = function() {
  return '<div class = centerbox><p class = center-block-text>' + feedback_instruct_text +
    '</p></div>'
}

/* ************************************ */
/* Define experimental variables */
/* ************************************ */
// generic task variables
var sumInstructTime = 0 //ms
var instructTimeThresh = 0 ///in seconds
var credit_var = true

// task specific variables
var correct = false
var exp_stage = 'practice'
var colors = ['Green', 'Red', 'Blue']
var problem_i = 0
var stage = 0
var time_per_trial = 60000 //time per trial in seconds
var time_elapsed = 0 //tracks time for a problem
var num_moves = 0 //tracks number of moves for a problem
var zero_moves = 0
var MAX_NO_MOVES = 3
  /*keeps track of peg board (where balls are). Lowest ball is the first value for each peg.
  So the initial_placement has the 1st ball and 2nd ball on the first peg and the third ball on the 2nd peg.
  */
  // make Your board
var curr_placement = [
  [1, 2, 0],
  [3, 0],
  [0]
]
var example_problem1 = [
  [1, 2, 0],
  [0, 0],
  [3]
]
var example_problem2 = [
  [1, 0, 0],
  [3, 0],
  [2]
]
var example_problem3 = [
  [1, 0, 0],
  [3, 2],
  [0]
]
var ref_board = makeBoard('your_board', curr_placement)
var my_problem = [[1,2,3],[0,0],[0]]

//var answers = [2]
var answers = [2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5]
var held_ball = 0

/* ************************************ */
/* Set up jsPsych blocks */
/* ************************************ */
//Set up post task questionnaire
var post_task_block = {
   type: 'survey-text',
   data: {
       trial_id: "post task questions"
   },
   questions: ['<p class = center-block-text style = "font-size: 20px">Please summarize what you were asked to do in this task.</p>'],
   rows: [15],
   columns: [60]
};

/* define static blocks */

// Error block definition
var error_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "error",
    exp_id: 'tower_of_london',
    reason: 'inactivity'
  },
  timing_response: 180000,
  text: '<div class = centerbox><p class = center-block-text>The experiment has ended due to inactivity.</p><p class = center-block-text><br> Press <strong>enter</strong> to continue.</p></div>',
  cont_key: [13],
  timing_post_trial: 0,
  on_finish: function() {
    uploadDataWithRetry(false,false)
    console.log("data_saved_from_error_block");
    window.location.replace('https://app.prolific.com/submissions/complete?cc=C135SBBZ')
  }
};


var end_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "end",
    exp_id: 'tower_of_london'
  },
  timing_response: 180000,
  text: '<div class = centerbox><p class = center-block-text>Thanks for completing this task!</p><p class = center-block-text><br>Press <strong>enter</strong> to continue.</p></div>',
  timing_post_trial: 0,
  on_finish: function () {
    assessPerformance();
    uploadDataWithRetry();
  },
}

var manual_upload_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "end",
    exp_id: 'tower_of_london'
  },
  timing_response: 180000,
  text: `
    <div class="centerbox" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; text-align: center;">
    <p class="center-block-text" style="margin-bottom: 20px;">Please wait while your data is being uploaded</p>
  <p class="center-block-text" style="margin-bottom: 20px;"> If you are not redirected automatically, click the 'Upload' button.</p>
  <button id="uploadButton" class="button" style="padding: 10px 20px; font-size: 16px; cursor: pointer; text-align: center;">Upload</button>
  <p id="countdown" style="display: none; margin-top: 20px; font-size: 14px;">Please wait <span id="timer">20</span> seconds before trying again.</p>
</div>`,
  cont_key: [1],
  timing_post_trial: 0,
  on_load: function () {
    setTimeout(() => { // Ensure DOM is fully loaded
      let uploadAttempts = 0;
      const maxAttempts = 3;
      const uploadButton = document.getElementById('uploadButton');
      const countdownText = document.getElementById('countdown');
      const timerSpan = document.getElementById('timer');

      // Ensure the uploadButton is found
      if (!uploadButton) {
        console.error("Upload button not found in the DOM.");
        return;
      }

      // Disable button with countdown
      function startCountdown() {
        let remainingTime = 10;
        uploadButton.disabled = true;
        uploadButton.classList.add('disabled');
        countdownText.style.display = 'block';

        const interval = setInterval(() => {
          remainingTime -= 1;
          timerSpan.textContent = remainingTime;

          if (remainingTime <= 0) {
            clearInterval(interval);
            uploadButton.disabled = false;
            uploadButton.classList.remove('disabled');
            countdownText.style.display = 'none';
          }
        }, 1000);
      }

      // Handle button click
      uploadButton.addEventListener('click', () => {
        startCountdown();
        let isLastTry = false;
        if (uploadAttempts >= maxAttempts) {
          isLastTry = true;
        }
        uploadDataWithRetry(isLastTry)
            .then(() => {
              alert('Upload succeeded! Redirecting...');
              window.location.href = getExpURL(); // Replace with your success page URL
            })
            .catch(() => {
              uploadAttempts += 1;
            });
      });
    }, 0); // Defer execution to ensure DOM is ready
  },
  on_finish: function () {
    console.log("Manual upload block completed.");
  }
};


var feedback_instruct_text =
  'Welcome to the experiment.<br> This experiment will take about 20 minutes.<br>Press <strong>enter</strong> to begin.'
var feedback_instruct_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "instruction"
  },
  cont_key: [13],
  text: getInstructFeedback,
  timing_post_trial: 0,
  timing_response: 180000
};
/// This ensures that the subject does not read through the instructions too quickly.  If they do it too quickly, then we will go over the loop again.
var instructions_block = {
  type: 'poldrack-instructions',
  data: {
    trial_id: "instruction"
  },
  pages: [
    '<div class = tol_topbox><p class = block-text>During this task, two boards will be presented at a time. The boards will be of colored balls arranged on pegs like this:</p></div>' +
    ref_board + makeBoard('peg_board', example_problem1) +
    '<div class = tol_bottombox><p class = block-text>Imagine that these balls have holes through them and the pegs are going through the holes. Notice that the first peg can hold three balls, the second peg can hold two balls, and the third peg can hold one ball.</p></div>',
    '<div class = tol_topbox><p class = block-text>Your task will be to make the arrangements of balls in your board look like the arrangements of balls in the target board in the fewest possible moves.</p></div>' +
    ref_board + makeBoard('peg_board', example_problem1) +
    '<div class = tol_bottombox><p class = block-text>The balls in the target board are fixed in place, but the balls in your board are movable. You have to move them to make your board look like the target board. Sometimes you will have to move a ball to a different peg in order to get to the ball below it. During this task it is important that you remember, you want the <strong>fewest possible moves</strong> that are required to make your board look like the target board. <strong>Please plan your moves before making the first move.</strong> You will have 60 seconds to make your decision.</p></div>',
    '<div class = tol_topbox><p class = block-text>Here is an example. Notice that the balls in your board are in a different arrangement than in the target board. If we move the red ball from the first peg in your board to the third peg then it would look like the target board.</p></div>' +
    ref_board + makeBoard('peg_board', example_problem2) + '<div class = tol_bottombox></div>',
    "<div class = centerbox><p class = block-text>During the test you will move the balls on your board by clicking on the pegs. When you click on a peg, the top ball will move into a box called 'your hand'. When you click on another peg, the ball in 'your hand' will move to the top of that peg.</p><p class = block-text>If you try to select a peg with no balls or try to place a ball on a full peg, nothing will happen. If you successfully make your board look like the target board, the trial will end and you will move to the next problem.</p><p class = block-text>We will start with an easy example so that you can learn the controls.</p></div>"
  ],
  allow_keys: false,
  show_clickable_nav: true,
  timing_post_trial: 1000
};

var instruction_node = {
  timeline: [feedback_instruct_block, instructions_block],
  /* This function defines stopping criteria */
  loop_function: function(data) {
    for (i = 0; i < data.length; i++) {
      if ((data[i].trial_type == 'poldrack-instructions') && (data[i].rt != -1)) {
        rt = data[i].rt
        sumInstructTime = sumInstructTime + rt
      }
    }
    if (sumInstructTime <= instructTimeThresh * 1000) {
      feedback_instruct_text =
        'Read through instructions too quickly.  Please take your time and make sure you understand the instructions.<br>  Press <strong>enter</strong> to continue.'
      return true
    } else if (sumInstructTime > instructTimeThresh * 1000) {
      feedback_instruct_text =
        'Done with instructions.\n Press <strong>enter</strong> to continue.'
      return false
    }
  }
}

var start_test_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "instruction"
  },
  timing_response: 180000,
  text: getStartText(),
  cont_key: [13],
  timing_post_trial: 1000,
  on_finish: function() {
    exp_stage = 'test'
    held_ball = 0
    time_elapsed = 0
    num_moves = 0;
    curr_placement = starting_pos[stage][problem_i]
    my_problem = ending_pos[stage][problem_i]
  }
};

var advance_stage_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "advance",
    exp_stage: 'test'
  },
  timing_response: 180000,
  text: getStageText,
  cont_key: [13],
  on_load: function() {
    uploadDataWithRetry(false,false)
  },
  on_finish: function() {
    held_ball = 0
    time_elapsed = 0
    problem_i = 0;
    num_moves = 0;
    stage++
    curr_placement = starting_pos[stage][problem_i]
    my_problem = ending_pos[stage][problem_i]

  }
}

var advance_problem_block = {
  type: 'poldrack-text',
  data: {
    trial_id: "advance",
    exp_stage: 'test'
  },
  timing_response: 180000,
  text: getText,
  cont_key: [13],
  on_finish: function() {
    held_ball = 0
    time_elapsed = 0
    problem_i += 1;
    num_moves = 0;
    curr_placement = starting_pos[stage][problem_i]
    my_problem = ending_pos[stage][problem_i]
  }
}

var practice_tohand = {
  type: 'single-stim-button',
  stimulus: getPractice,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_hand",
    exp_stage: 'practice'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': example_problem3,
      'min_moves': 1,
      'problem_id': 'practice'
    })
  }
}

var practice_toboard = {
  type: 'single-stim-button',
  stimulus: getPractice,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_board",
    exp_stage: 'practice'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': example_problem3,
      'min_moves': 1,
      'problem_id': 'practice'
    })
  }
}

var test_tohand = {
  type: 'single-stim-button',
  stimulus: getStim,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_hand",
    exp_stage: 'test'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }

    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': my_problem,
      'min_moves': answers[problem_i],
      'problem_id': problem_i
    })

    if(zero_moves === MAX_NO_MOVES){
      console.log("my msg")
      tower_of_london_experiment = [error_block]
    }
  }
}

var test_toboard = {
  type: 'single-stim-button',
  stimulus: getStim,
  button_class: 'special',
  is_html: true,
  data: {
    trial_id: "to_board",
    exp_stage: 'test'
  },
  timing_stim: getTime,
  timing_response: getTime,
  timing_post_trial: 0,
  on_finish: function(data) {
    if (data.mouse_click != -1) {
      time_elapsed += data.rt
    } else {
      time_elapsed += getTime()
    }
    jsPsych.data.addDataToLastTrial({
      'current_position': jQuery.extend(true, [], curr_placement),
      'num_moves_made': num_moves,
      'target': my_problem,
      'min_moves': answers[problem_i],
      'problem_id': problem_i
    })
  }
}

var feedback_block = {
  type: 'poldrack-single-stim',
  stimulus: getFB,
  choices: 'none',
  is_html: true,
  data: {
    trial_id: 'feedback'
  },
  timing_stim: 2000,
  timing_response: 2000,
  timing_post_trial: 500,
  on_finish: function() {
    jsPsych.data.addDataToLastTrial({
      'exp_stage': exp_stage,
      'problem_time': time_elapsed,
      'correct': correct
    })
  },
}

var practice_node = {
  timeline: [practice_tohand, practice_toboard],
  loop_function: function(data) {
    if (time_elapsed >= time_per_trial) {
      return false
    }
    data = data[1]
    var target = data.target
    var isequal = true
    for (var i = 0; i < target.length; i++) {
      isequal = arraysEqual(target[i], data.current_position[i])
      if (isequal === false) {
        break;
      }
    }
    return !isequal
  },
  timing_post_trial: 1000
}

var problem_node = {
  timeline: [test_tohand, test_toboard],
  loop_function: function(data) {

    if (zero_moves === MAX_NO_MOVES) {
      jsPsych.getDisplayElement().innerHTML = ''; // Clear the display
      jsPsych.init({
        timeline: [error_block]
      });
      return false;
    }

    if (time_elapsed >= time_per_trial || num_moves === stage+4) {
      if(num_moves === 0){
        zero_moves++
        console.log("zero_moves: ", zero_moves)
      } else {
        zero_moves = 0
      }
      return false
    }
    data = data[1]
    var target = data.target
    var isequal = true
    for (var i = 0; i < target.length; i++) {
      isequal = arraysEqual(target[i], data.current_position[i])
      if (isequal === false) {
        break;
      }
    }
    return !isequal
  },
  timing_post_trial: 1000
}

if(getProlificId() === 'test'){
  num_problems = 1
} else {
  num_problems = 8
}

/* create experiment definition array */
var tower_of_london_experiment = [];
tower_of_london_experiment.push(instruction_node);
tower_of_london_experiment.push(practice_node);
tower_of_london_experiment.push(feedback_block)
tower_of_london_experiment.push(start_test_block);

for (var j = 0; j < 3 ; j++) {
  for (var i = 0; i < num_problems ; i++) {
    tower_of_london_experiment.push(problem_node);
    tower_of_london_experiment.push(feedback_block)
    if (i !== 7) {
      tower_of_london_experiment.push(advance_problem_block)
    }
  }
  if(j!==2) {
    tower_of_london_experiment.push(advance_stage_block)
  }
}
tower_of_london_experiment.push(end_block);
tower_of_london_experiment.push(end_block);
tower_of_london_experiment.push(manual_upload_block);