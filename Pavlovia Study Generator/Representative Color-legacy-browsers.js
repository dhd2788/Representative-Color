/***************************** 
 * Representative Color Test *
 *****************************/


// store info about the experiment session:
let expName = 'Representative Color';  // from the Builder filename that created this script
let expInfo = {};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.3411, 0.3411, 0.3411]),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InitCodeRoutineBegin());
flowScheduler.add(InitCodeRoutineEachFrame());
flowScheduler.add(InitCodeRoutineEnd());
flowScheduler.add(blank100RoutineBegin());
flowScheduler.add(blank100RoutineEachFrame());
flowScheduler.add(blank100RoutineEnd());
flowScheduler.add(WelcomeScreenRoutineBegin());
flowScheduler.add(WelcomeScreenRoutineEachFrame());
flowScheduler.add(WelcomeScreenRoutineEnd());
flowScheduler.add(BackgroundInformationRoutineBegin());
flowScheduler.add(BackgroundInformationRoutineEachFrame());
flowScheduler.add(BackgroundInformationRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
const trialsBlockLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsBlockLoopBegin(trialsBlockLoopScheduler));
flowScheduler.add(trialsBlockLoopScheduler);
flowScheduler.add(trialsBlockLoopEnd);
flowScheduler.add(GoodbyeScreenRoutineBegin());
flowScheduler.add(GoodbyeScreenRoutineEachFrame());
flowScheduler.add(GoodbyeScreenRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/t4Model-M.png', 'path': 'resources/t4Model-M.png'},
    {'name': 'resources/t3mysteryLightOr_hdrOff.png', 'path': 'resources/t3mysteryLightOr_hdrOff.png'},
    {'name': 'resources/t2Model-LC.png', 'path': 'resources/t2Model-LC.png'},
    {'name': 'resources/t2sky.png', 'path': 'resources/t2sky.png'},
    {'name': 'resources/t1Model-A.png', 'path': 'resources/t1Model-A.png'},
    {'name': 'resources/t3Model-L.png', 'path': 'resources/t3Model-L.png'},
    {'name': 'resources/test_tomato_green.png', 'path': 'resources/test_tomato_green.png'},
    {'name': 'resources/t3DSC_0025.png', 'path': 'resources/t3DSC_0025.png'},
    {'name': 'resources/training.xlsx', 'path': 'resources/training.xlsx'},
    {'name': 'resources/t3Model-R.png', 'path': 'resources/t3Model-R.png'},
    {'name': 'resources/t1DSC_0021.png', 'path': 'resources/t1DSC_0021.png'},
    {'name': 'resources/t2Model-yl.png', 'path': 'resources/t2Model-yl.png'},
    {'name': 'resources/t4mysteryLightOr_hdrOff.png', 'path': 'resources/t4mysteryLightOr_hdrOff.png'},
    {'name': 'resources/t3Model-O.png', 'path': 'resources/t3Model-O.png'},
    {'name': 'resources/t3zpeppers.png', 'path': 'resources/t3zpeppers.png'},
    {'name': 'resources/t2Model-A.png', 'path': 'resources/t2Model-A.png'},
    {'name': 'resources/t2zgrass.png', 'path': 'resources/t2zgrass.png'},
    {'name': 'resources/t2Model-R.png', 'path': 'resources/t2Model-R.png'},
    {'name': 'resources/t1zgrass.png', 'path': 'resources/t1zgrass.png'},
    {'name': 'resources/t4Model-A.png', 'path': 'resources/t4Model-A.png'},
    {'name': 'resources/t3Model-M.png', 'path': 'resources/t3Model-M.png'},
    {'name': 'resources/t1Model-O.png', 'path': 'resources/t1Model-O.png'},
    {'name': 'resources/test_wine.png', 'path': 'resources/test_wine.png'},
    {'name': 'resources/test_tomato_red.png', 'path': 'resources/test_tomato_red.png'},
    {'name': 'resources/t2Model-L.png', 'path': 'resources/t2Model-L.png'},
    {'name': 'resources/t3Model-Y.png', 'path': 'resources/t3Model-Y.png'},
    {'name': 'resources/t1DSC_0016.png', 'path': 'resources/t1DSC_0016.png'},
    {'name': 'resources/trialScramble.xlsx', 'path': 'resources/trialScramble.xlsx'},
    {'name': 'resources/t2DSC_0025.png', 'path': 'resources/t2DSC_0025.png'},
    {'name': 'resources/t2Model-O.png', 'path': 'resources/t2Model-O.png'},
    {'name': 'resources/t2Model-Y.png', 'path': 'resources/t2Model-Y.png'},
    {'name': 'resources/t4DSC_0025.png', 'path': 'resources/t4DSC_0025.png'},
    {'name': 'resources/t4DSC_0021.png', 'path': 'resources/t4DSC_0021.png'},
    {'name': 'resources/t1Model-Y.png', 'path': 'resources/t1Model-Y.png'},
    {'name': 'resources/t1Model-Ol.png', 'path': 'resources/t1Model-Ol.png'},
    {'name': 'resources/t2Model-B.png', 'path': 'resources/t2Model-B.png'},
    {'name': 'resources/conditions.xlsx', 'path': 'resources/conditions.xlsx'},
    {'name': 'resources/t3Model-yl.png', 'path': 'resources/t3Model-yl.png'},
    {'name': 'resources/t4Model-Y.png', 'path': 'resources/t4Model-Y.png'},
    {'name': 'resources/t4sky.png', 'path': 'resources/t4sky.png'},
    {'name': 'resources/t3DSC_0021.png', 'path': 'resources/t3DSC_0021.png'},
    {'name': 'resources/t2zpeppers.png', 'path': 'resources/t2zpeppers.png'},
    {'name': 'resources/t3Model-ll.png', 'path': 'resources/t3Model-ll.png'},
    {'name': 'resources/t3Model-A.png', 'path': 'resources/t3Model-A.png'},
    {'name': 'resources/trialSixtyFour.xlsx', 'path': 'resources/trialSixtyFour.xlsx'},
    {'name': 'resources/t1Model-ll.png', 'path': 'resources/t1Model-ll.png'},
    {'name': 'resources/t2Model-M.png', 'path': 'resources/t2Model-M.png'},
    {'name': 'resources/t1Model-L.png', 'path': 'resources/t1Model-L.png'},
    {'name': 'resources/t4Model-B.png', 'path': 'resources/t4Model-B.png'},
    {'name': 'resources/t4Model-yl.png', 'path': 'resources/t4Model-yl.png'},
    {'name': 'resources/t3sky.png', 'path': 'resources/t3sky.png'},
    {'name': 'resources/t2green22days1_hdrOff.png', 'path': 'resources/t2green22days1_hdrOff.png'},
    {'name': 'resources/t1Model-B.png', 'path': 'resources/t1Model-B.png'},
    {'name': 'resources/trialFull.xlsx', 'path': 'resources/trialFull.xlsx'},
    {'name': 'resources/t4Model-R.png', 'path': 'resources/t4Model-R.png'},
    {'name': 'resources/t1zpeppers.png', 'path': 'resources/t1zpeppers.png'},
    {'name': 'resources/t4zgrass.png', 'path': 'resources/t4zgrass.png'},
    {'name': 'resources/t2mysteryLightOr_hdrOff.png', 'path': 'resources/t2mysteryLightOr_hdrOff.png'},
    {'name': 'resources/t3green22days1_hdrOff.png', 'path': 'resources/t3green22days1_hdrOff.png'},
    {'name': 'resources/t1Model-LC.png', 'path': 'resources/t1Model-LC.png'},
    {'name': 'resources/t2Model-Ol.png', 'path': 'resources/t2Model-Ol.png'},
    {'name': 'resources/t3Model-Ol.png', 'path': 'resources/t3Model-Ol.png'},
    {'name': 'resources/t1mysteryLightOr_hdrOff.png', 'path': 'resources/t1mysteryLightOr_hdrOff.png'},
    {'name': 'resources/t1Model-yl.png', 'path': 'resources/t1Model-yl.png'},
    {'name': 'resources/t1Model-J.png', 'path': 'resources/t1Model-J.png'},
    {'name': 'resources/t1DSC_0025.png', 'path': 'resources/t1DSC_0025.png'},
    {'name': 'resources/t4Model-L.png', 'path': 'resources/t4Model-L.png'},
    {'name': 'resources/t2DSC_0021.png', 'path': 'resources/t2DSC_0021.png'},
    {'name': 'resources/t4Model-ll.png', 'path': 'resources/t4Model-ll.png'},
    {'name': 'resources/t4Model-O.png', 'path': 'resources/t4Model-O.png'},
    {'name': 'resources/t3DSC_0016.png', 'path': 'resources/t3DSC_0016.png'},
    {'name': 'resources/t4green22days1_hdrOff.png', 'path': 'resources/t4green22days1_hdrOff.png'},
    {'name': 'resources/t2Model-ll.png', 'path': 'resources/t2Model-ll.png'},
    {'name': 'resources/t4Model-Ol.png', 'path': 'resources/t4Model-Ol.png'},
    {'name': 'resources/test_sky.png', 'path': 'resources/test_sky.png'},
    {'name': 'resources/t2Model-J.png', 'path': 'resources/t2Model-J.png'},
    {'name': 'resources/t3Model-B.png', 'path': 'resources/t3Model-B.png'},
    {'name': 'resources/trialSixteen.xlsx', 'path': 'resources/trialSixteen.xlsx'},
    {'name': 'resources/t1green22days1_hdrOff.png', 'path': 'resources/t1green22days1_hdrOff.png'},
    {'name': 'resources/t4Model-J.png', 'path': 'resources/t4Model-J.png'},
    {'name': 'resources/t1Model-M.png', 'path': 'resources/t1Model-M.png'},
    {'name': 'resources/t4zpeppers.png', 'path': 'resources/t4zpeppers.png'},
    {'name': 'resources/t2DSC_0016.png', 'path': 'resources/t2DSC_0016.png'},
    {'name': 'resources/t4Model-LC.png', 'path': 'resources/t4Model-LC.png'},
    {'name': 'resources/t3Model-J.png', 'path': 'resources/t3Model-J.png'},
    {'name': 'resources/t3zgrass.png', 'path': 'resources/t3zgrass.png'},
    {'name': 'resources/t1sky.png', 'path': 'resources/t1sky.png'},
    {'name': 'resources/t1Model-R.png', 'path': 'resources/t1Model-R.png'},
    {'name': 'resources/t4DSC_0016.png', 'path': 'resources/t4DSC_0016.png'},
    {'name': 'resources/t3Model-LC.png', 'path': 'resources/t3Model-LC.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var InitCodeClock;
var shuffle;
var squareSize;
var squareOffset;
var textSize;
var textOffset;
var screenTop;
var textboxHeight;
var leftAlign;
var progress;
var buttonX;
var buttonY;
var blank100Clock;
var textBlankWait;
var WelcomeScreenClock;
var buttonSubmitWelcome;
var textWelcomeMessage;
var textElectronicSignature;
var textDate;
var textboxDate;
var textboxElectronicSignature;
var BackgroundInformationClock;
var textInitials;
var textViewingConditions;
var textColorScientist;
var textAge;
var textCVD;
var textGenderIdentification;
var textboxAge;
var textboxInitials;
var sliderViewConditions;
var sliderColorScientist;
var sliderCVD;
var sliderGenderIdentification;
var buttonSubmitBackground;
var InstructionsClock;
var textInstructions;
var buttonContinue;
var blockBeginClock;
var textBlockBegin;
var buttonBlockBegin;
var blank1000Clock;
var textBlankWaitOneSecond;
var showImageClock;
var imageScramble;
var randomizeColorsClock;
var trialSelectionClock;
var textQuestion;
var firstChoice;
var secondChoice;
var thirdChoice;
var fourthChoice;
var fifthChoice;
var sixthChoice;
var seventhChoice;
var eighthChoice;
var mouseResponse;
var GoodbyeScreenClock;
var textGoodbye;
var buttonGoodbye;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "InitCode"
  InitCodeClock = new util.Clock();
  // import shuffle function for shuffling lists
  shuffle = util.shuffle;
  
  // square variables
  squareSize = 0.1;
  squareOffset = 0.12;
  
  // text variables
  textSize = 0.023;
  textOffset = 0.08;
  screenTop = 0.3;
  textboxHeight = 0.005;
  
  // define the left boundary for text on the screen
  leftAlign = -0.5;
  
  // keep track of user's progress
  progress = 0;
  
  // button locations
  buttonX = 0.42;
  buttonY = -0.35;
  // Initialize components for Routine "blank100"
  blank100Clock = new util.Clock();
  textBlankWait = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlankWait',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "WelcomeScreen"
  WelcomeScreenClock = new util.Clock();
  buttonSubmitWelcome = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'buttonSubmitWelcome',
    text: 'Submit',
    pos: [buttonX, buttonY], letterHeight: textSize,
    size: [0.2, (textSize + textboxHeight)]
  });
  buttonSubmitWelcome.clock = new util.Clock();
  
  textWelcomeMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'textWelcomeMessage',
    text: 'Evaluating Perception of the Representative Color of a Complex Image\nInvestigators: Dara Dimoff and Susan Farnand\n\nThis research study is evaluating how observers average color information over an image. You will briefly be shown a series of images. Following each image, you will be shown an array of eight colors contained in the image. For each array, please determine which of the eight colors you feel best represents the overall color of the image by clicking on the appropriate color patch. This experiment should approximately take 20 minutes. Thank you for your participation.\n\nThis experiment MUST be performed on a laptop or desktop monitor. Please not proceed if using a mobile device.\n\nCONFIDENTIALITY\nYour name will not be associated directly with your data. An identifier such as “Participant 11” will be used to identify your data. The information obtained will not be traceable back to you.\n\nRISKS AND BENEFITS\nThere are no anticipated risks of participating in this study. The results of this experiment will provide information that should prove useful to the color science community.\n\nYOUR RIGHTS AS A RESEARCH PARTICIPANT\nParticipation in this study is voluntary. You have the right not to participate at all, to stop the study at any time, or to request your data be removed from the study.\n\nCONTACTS FOR QUESTIONS OR CONCERNS\nYou may contact Dara Dimoff at dhd2788@rit.edu or Susan Farnand at spfpci@rit.edu if you have questions about the study.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.1], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  textElectronicSignature = new visual.TextStim({
    win: psychoJS.window,
    name: 'textElectronicSignature',
    text: 'Electronic Signature:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.3)], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  textDate = new visual.TextStim({
    win: psychoJS.window,
    name: 'textDate',
    text: 'Date (MM/DD/YY):',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.35)], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  textboxDate = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxDate',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.35)], letterHeight: textSize,
    size: [0.35, (textSize + textboxHeight)],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -4.0 
  });
  
  textboxElectronicSignature = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxElectronicSignature',
    text: '',
    font: 'Open Sans',
    pos: [0, (- 0.3)], letterHeight: textSize,
    size: [0.35, (textSize + textboxHeight)],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -5.0 
  });
  
  // Initialize components for Routine "BackgroundInformation"
  BackgroundInformationClock = new util.Clock();
  textInitials = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInitials',
    text: 'Observer Initials:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, screenTop], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  textViewingConditions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textViewingConditions',
    text: 'Viewing Conditions: ',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (screenTop - textOffset)], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  textColorScientist = new visual.TextStim({
    win: psychoJS.window,
    name: 'textColorScientist',
    text: 'Do you have experience in imaging?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (screenTop - (textOffset * 2))], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  textAge = new visual.TextStim({
    win: psychoJS.window,
    name: 'textAge',
    text: 'Age:\n(Note: if you are under 18, you may participate,\nbut your data will not be used)',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (screenTop - (textOffset * 3))], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  textCVD = new visual.TextStim({
    win: psychoJS.window,
    name: 'textCVD',
    text: 'Do you have a color vision deficiency?',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (screenTop - (textOffset * 5))], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -4.0 
  });
  
  textGenderIdentification = new visual.TextStim({
    win: psychoJS.window,
    name: 'textGenderIdentification',
    text: 'Gender Identification:',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (screenTop - (textOffset * 4))], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -5.0 
  });
  
  textboxAge = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxAge',
    text: '',
    font: 'Open Sans',
    pos: [0.22, (screenTop - (textOffset * 3))], letterHeight: textSize,
    size: [0.45, (textSize + textboxHeight)],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -6.0 
  });
  
  textboxInitials = new visual.TextBox({
    win: psychoJS.window,
    name: 'textboxInitials',
    text: '',
    font: 'Open Sans',
    pos: [0.22, screenTop], letterHeight: textSize,
    size: [0.45, (textSize + textboxHeight)],  units: undefined, 
    color: 'black', colorSpace: 'rgb',
    fillColor: 'white', borderColor: 'black',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    editable: true,
    multiline: true,
    anchor: 'center',
    depth: -7.0 
  });
  
  sliderViewConditions = new visual.Slider({
    win: psychoJS.window, name: 'sliderViewConditions',
    size: [0.15, 0.01], pos: [0.1, (screenTop - textOffset)], units: 'height',
    labels: ["Indoor", "Outdoor"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('Black'), markerColor: new util.Color('Black'), lineColor: new util.Color([0, 0, 0]), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -8, 
    flip: false,
  });
  
  sliderColorScientist = new visual.Slider({
    win: psychoJS.window, name: 'sliderColorScientist',
    size: [0.15, 0.01], pos: [0.1, (screenTop - (textOffset * 2))], units: 'height',
    labels: ["Yes", "No"], ticks: [1, 2],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -9, 
    flip: false,
  });
  
  sliderCVD = new visual.Slider({
    win: psychoJS.window, name: 'sliderCVD',
    size: [0.225, 0.01], pos: [0.1, (screenTop - (textOffset * 5))], units: 'height',
    labels: ["Yes", "No", "Unsure"], ticks: [1, 2, 3],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -10, 
    flip: false,
  });
  
  sliderGenderIdentification = new visual.Slider({
    win: psychoJS.window, name: 'sliderGenderIdentification',
    size: [0.5, 0.01], pos: [0.1, (screenTop - (textOffset * 4))], units: 'height',
    labels: ["Female", "Male", "Nonbinary", "Prefer not\nto respond"], ticks: [1, 2, 3, 4],
    granularity: 1.0, style: ["RADIO"],
    color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
    fontFamily: 'Open Sans', bold: true, italic: false, depth: -11, 
    flip: false,
  });
  
  buttonSubmitBackground = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'buttonSubmitBackground',
    text: 'Submit',
    pos: [(- 0.42), (- 0.35)], letterHeight: textSize,
    size: [0.2, (textSize + 0.05)]
  });
  buttonSubmitBackground.clock = new util.Clock();
  
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  textInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'textInstructions',
    text: 'INSTRUCTIONS\nBefore continuing, please make sure that any color filters on your monitor are disabled for the duration of this study (ie. blue light filters at night). Please avoid looking at other screens, including your phone, during the duration of the study. This experiment MUST be performed on a laptop or desktop monitor. Please not proceed if using a mobile device.\n\nYou will be presented with an image for one second and then will be asked to select the color that best represents the image you just saw.\n\nTo select the best representative color, left click on that square.\n\nThis experiment will take you approximately 20 minutes. Thank you for your participation.\n\nWARNING\nIf you press the "Escape" key at any point during the experiment, the experiment will terminate early. If you do not wish to lose your progress, do not press the "Escape" key.\n\nPress "Continue" to begin the experiment.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.023,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  buttonContinue = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'buttonContinue',
    text: 'Continue',
    pos: [0.42, (- 0.35)], letterHeight: textSize,
    size: [0.2, null]
  });
  buttonContinue.clock = new util.Clock();
  
  // Initialize components for Routine "blockBegin"
  blockBeginClock = new util.Clock();
  textBlockBegin = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlockBegin',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  buttonBlockBegin = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'buttonBlockBegin',
    text: '',
    pos: [((- buttonX) + (0.045 / 2)), buttonY], letterHeight: textSize,
    size: [0.245, 0.2]
  });
  buttonBlockBegin.clock = new util.Clock();
  
  // Initialize components for Routine "blank1000"
  blank1000Clock = new util.Clock();
  textBlankWaitOneSecond = new visual.TextStim({
    win: psychoJS.window,
    name: 'textBlankWaitOneSecond',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "showImage"
  showImageClock = new util.Clock();
  imageScramble = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageScramble', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "randomizeColors"
  randomizeColorsClock = new util.Clock();
  // Initialize components for Routine "trialSelection"
  trialSelectionClock = new util.Clock();
  textQuestion = new visual.TextStim({
    win: psychoJS.window,
    name: 'textQuestion',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.38], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  firstChoice = new visual.Rect ({
    win: psychoJS.window, name: 'firstChoice', units : 'height', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [((squareOffset / 2) * (- 1)), (squareOffset + (squareOffset / 2))],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  secondChoice = new visual.Rect ({
    win: psychoJS.window, name: 'secondChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [(squareOffset / 2), (squareOffset + (squareOffset / 2))],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  thirdChoice = new visual.Rect ({
    win: psychoJS.window, name: 'thirdChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [(((squareOffset / 2) + squareOffset) * (- 1)), 0.06],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  fourthChoice = new visual.Rect ({
    win: psychoJS.window, name: 'fourthChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [((squareOffset / 2) + squareOffset), (squareOffset / 2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -4, interpolate: true,
  });
  
  fifthChoice = new visual.Rect ({
    win: psychoJS.window, name: 'fifthChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [((squareOffset + (squareOffset / 2)) * (- 1)), ((- squareOffset) / 2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  sixthChoice = new visual.Rect ({
    win: psychoJS.window, name: 'sixthChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [(squareOffset + (squareOffset / 2)), ((- squareOffset) / 2)],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -6, interpolate: true,
  });
  
  seventhChoice = new visual.Rect ({
    win: psychoJS.window, name: 'seventhChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [((- squareOffset) / 2), (- (squareOffset + (squareOffset / 2)))],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  eighthChoice = new visual.Rect ({
    win: psychoJS.window, name: 'eighthChoice', 
    width: [squareSize, squareSize][0], height: [squareSize, squareSize][1],
    ori: 0.0, pos: [(squareOffset / 2), (- (squareOffset + (squareOffset / 2)))],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -8, interpolate: true,
  });
  
  mouseResponse = new core.Mouse({
    win: psychoJS.window,
  });
  mouseResponse.mouseClock = new util.Clock();
  // Initialize components for Routine "GoodbyeScreen"
  GoodbyeScreenClock = new util.Clock();
  textGoodbye = new visual.TextStim({
    win: psychoJS.window,
    name: 'textGoodbye',
    text: 'Thank you for participating. If you have any questions about the experiment or if you experienced any issues, please contact Dara Dimoff at dhd2788@rit.edu.',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: textSize,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: 0.0 
  });
  
  buttonGoodbye = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'buttonGoodbye',
    text: 'Complete Experiment',
    pos: [(buttonX - (0.1 / 2)), buttonY], letterHeight: textSize,
    size: [0.3, null]
  });
  buttonGoodbye.clock = new util.Clock();
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var InitCodeComponents;
function InitCodeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InitCode'-------
    t = 0;
    InitCodeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // keep track of which components have finished
    InitCodeComponents = [];
    
    InitCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InitCodeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InitCode'-------
    // get current time
    t = InitCodeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InitCodeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InitCodeRoutineEnd() {
  return async function () {
    //------Ending Routine 'InitCode'-------
    InitCodeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "InitCode" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blank100Components;
function blank100RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blank100'-------
    t = 0;
    blank100Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.100000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank100Components = [];
    blank100Components.push(textBlankWait);
    
    blank100Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function blank100RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blank100'-------
    // get current time
    t = blank100Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlankWait* updates
    if (t >= 0.0 && textBlankWait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlankWait.tStart = t;  // (not accounting for frame time here)
      textBlankWait.frameNStart = frameN;  // exact frame index
      
      textBlankWait.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlankWait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlankWait.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank100Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank100RoutineEnd() {
  return async function () {
    //------Ending Routine 'blank100'-------
    blank100Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var WelcomeScreenComponents;
function WelcomeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'WelcomeScreen'-------
    t = 0;
    WelcomeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textboxDate.setText('');
    textboxElectronicSignature.setText('');
    // set the text elements to left-align
    textWelcomeMessage.setAlignHoriz("left");
    textElectronicSignature.setAlignHoriz("left");
    textDate.setAlignHoriz("left");
    
    // reposition them so they aren't left-aligning against the center
    var leftAlign;
    leftAlign = -0.5;
    
    textWelcomeMessage.setPos([leftAlign,0.1]);
    textElectronicSignature.setPos([leftAlign,-0.3]);
    textDate.setPos([leftAlign,-0.35]);
    
    // the button's default color is the same as the background. change it to
    // something lighter
    buttonSubmitWelcome.setFillColor(undefined);
    
    // make the button's text black
    buttonSubmitWelcome.setBorderColor([-1,-1,-1]);
    buttonSubmitWelcome.setColor([-1,-1,-1]);
    buttonSubmitWelcome.reset();
    // keep track of which components have finished
    WelcomeScreenComponents = [];
    WelcomeScreenComponents.push(buttonSubmitWelcome);
    WelcomeScreenComponents.push(textWelcomeMessage);
    WelcomeScreenComponents.push(textElectronicSignature);
    WelcomeScreenComponents.push(textDate);
    WelcomeScreenComponents.push(textboxDate);
    WelcomeScreenComponents.push(textboxElectronicSignature);
    
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function WelcomeScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'WelcomeScreen'-------
    // get current time
    t = WelcomeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *buttonSubmitWelcome* updates
    if (t >= 0 && buttonSubmitWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonSubmitWelcome.tStart = t;  // (not accounting for frame time here)
      buttonSubmitWelcome.frameNStart = frameN;  // exact frame index
      
      buttonSubmitWelcome.setAutoDraw(true);
    }

    if (buttonSubmitWelcome.status === PsychoJS.Status.STARTED) {
      // check whether buttonSubmitWelcome has been pressed
      if (buttonSubmitWelcome.isClicked) {
        if (!buttonSubmitWelcome.wasClicked) {
          // store time of first click
          buttonSubmitWelcome.timesOn.push(buttonSubmitWelcome.clock.getTime());
          // store time clicked until
          buttonSubmitWelcome.timesOff.push(buttonSubmitWelcome.clock.getTime());
        } else {
          // update time clicked until;
          buttonSubmitWelcome.timesOff[buttonSubmitWelcome.timesOff.length - 1] = buttonSubmitWelcome.clock.getTime();
        }
        if (!buttonSubmitWelcome.wasClicked) {
          // end routine when buttonSubmitWelcome is clicked
          continueRoutine = false;
          null;
        }
        // if buttonSubmitWelcome is still clicked next frame, it is not a new click
        buttonSubmitWelcome.wasClicked = true;
      } else {
        // if buttonSubmitWelcome is clicked next frame, it is a new click
        buttonSubmitWelcome.wasClicked = false
      }
    } else {
      // keep clock at 0 if buttonSubmitWelcome hasn't started / has finished
      buttonSubmitWelcome.clock.reset();
      // if buttonSubmitWelcome is clicked next frame, it is a new click
      buttonSubmitWelcome.wasClicked = false;
    }
    
    // *textWelcomeMessage* updates
    if (t >= 0.0 && textWelcomeMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textWelcomeMessage.tStart = t;  // (not accounting for frame time here)
      textWelcomeMessage.frameNStart = frameN;  // exact frame index
      
      textWelcomeMessage.setAutoDraw(true);
    }

    
    // *textElectronicSignature* updates
    if (t >= 0.0 && textElectronicSignature.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textElectronicSignature.tStart = t;  // (not accounting for frame time here)
      textElectronicSignature.frameNStart = frameN;  // exact frame index
      
      textElectronicSignature.setAutoDraw(true);
    }

    
    // *textDate* updates
    if (t >= 0.0 && textDate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textDate.tStart = t;  // (not accounting for frame time here)
      textDate.frameNStart = frameN;  // exact frame index
      
      textDate.setAutoDraw(true);
    }

    
    // *textboxDate* updates
    if (t >= 0.0 && textboxDate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textboxDate.tStart = t;  // (not accounting for frame time here)
      textboxDate.frameNStart = frameN;  // exact frame index
      
      textboxDate.setAutoDraw(true);
    }

    
    // *textboxElectronicSignature* updates
    if (t >= 0.0 && textboxElectronicSignature.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textboxElectronicSignature.tStart = t;  // (not accounting for frame time here)
      textboxElectronicSignature.frameNStart = frameN;  // exact frame index
      
      textboxElectronicSignature.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'WelcomeScreen'-------
    WelcomeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textboxDate.text',textboxDate.text)
    psychoJS.experiment.addData('textboxElectronicSignature.text',textboxElectronicSignature.text)
    // the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var BackgroundInformationComponents;
function BackgroundInformationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'BackgroundInformation'-------
    t = 0;
    BackgroundInformationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    textboxAge.setText('');
    textboxInitials.setText('');
    sliderViewConditions.reset()
    sliderColorScientist.reset()
    sliderCVD.reset()
    sliderGenderIdentification.reset()
    // set the text boxes to empty
    textboxInitials.setText('');
    textboxAge.setText('');
    
    // align text components to the left
    textInitials.setAlignHoriz("left");
    textViewingConditions.setAlignHoriz("left");
    textColorScientist.setAlignHoriz("left");
    textAge.setAlignHoriz("left");
    textGenderIdentification.setAlignHoriz("left");
    textCVD.setAlignHoriz("left");
    
    // set positions for the text boxes
    textInitials.setPos([leftAlign,screenTop]);
    textViewingConditions.setPos([leftAlign,screenTop-textOffset]);
    textColorScientist.setPos([leftAlign,screenTop-textOffset*2]);
    textAge.setPos([leftAlign,screenTop-textOffset*3]);
    textGenderIdentification.setPos([leftAlign,screenTop-textOffset*4]);
    textCVD.setPos([leftAlign,screenTop-textOffset*5]);
    
    // set button color to undefined
    buttonSubmitBackground.setFillColor(undefined);
    buttonSubmitBackground.setColor([-1,-1,-1]);
    
    // re-construct the sliders since there is no existing function to modify fontSize
    var sliderFontSize = 0.018;
    var sliderSize = 0.075;
    var sliderOffset = 0.05;
    var extra = 0.07;
    
    sliderViewConditions = new visual.Slider({
        win: psychoJS.window, name: 'sliderViewConditions',
        size: [sliderSize*3+extra, 0.01], pos: [sliderOffset + sliderSize*3/2 + extra/2, (screenTop - textOffset)], units: 'height',
        labels: ["Indoor (dim)", "Indoor (light)", "Outdoor"], ticks: [1, 2, 3],
        granularity: 1.0, style: ["RADIO"],
        color: new util.Color('Black'), markerColor: new util.Color('Black'), lineColor: new util.Color([0, 0, 0]), 
        fontFamily: 'Open Sans', bold: false, italic: false, depth: -7, 
        flip: false, fontSize: sliderFontSize});
    
      sliderColorScientist = new visual.Slider({
        win: psychoJS.window, name: 'sliderColorScientist',
        size: [sliderSize*2, 0.01], pos: [sliderOffset + sliderSize*2/2, (screenTop - (textOffset * 2))], units: 'height',
        labels: ["Yes", "No"], ticks: [1, 2],
        granularity: 1.0, style: ["RADIO"],
        color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
        fontFamily: 'Open Sans', bold: false, italic: false, depth: -8, 
        flip: false, fontSize: sliderFontSize
      });
      
      sliderGenderIdentification = new visual.Slider({
        win: psychoJS.window, name: 'sliderGenderIdentification',
        size: [sliderSize*4+extra*2, 0.01], pos: [sliderOffset + sliderSize*4/2 + extra, (screenTop - (textOffset * 4))], units: 'height',
        labels: ["Female", "Male", "Nonbinary", "Prefer not\nto respond"], ticks: [1, 2, 3, 4],
        granularity: 1.0, style: ["RADIO"],
        color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
        fontFamily: 'Open Sans', bold: false, italic: false, depth: -11, 
        flip: false, fontSize: sliderFontSize
      });
      
      sliderCVD = new visual.Slider({
        win: psychoJS.window, name: 'sliderCVD',
        size: [sliderSize*3+extra, 0.01], pos: [sliderOffset + sliderSize*3/2 + extra/2, (screenTop - (textOffset * 5))], units: 'height',
        labels: ["Yes", "No", "Unsure"], ticks: [1, 2, 3],
        granularity: 1.0, style: ["RADIO"],
        color: new util.Color('black'), markerColor: new util.Color('black'), lineColor: new util.Color([0, 0, 0]), 
        fontFamily: 'Open Sans', bold: false, italic: false, depth: -10, 
        flip: false, fontSize: sliderFontSize
      });
    
    // after making changes to the sliders, call the reset functions
    sliderViewConditions.reset();
    sliderColorScientist.reset();
    sliderGenderIdentification.reset();
    sliderCVD.reset();
    // keep track of which components have finished
    BackgroundInformationComponents = [];
    BackgroundInformationComponents.push(textInitials);
    BackgroundInformationComponents.push(textViewingConditions);
    BackgroundInformationComponents.push(textColorScientist);
    BackgroundInformationComponents.push(textAge);
    BackgroundInformationComponents.push(textCVD);
    BackgroundInformationComponents.push(textGenderIdentification);
    BackgroundInformationComponents.push(textboxAge);
    BackgroundInformationComponents.push(textboxInitials);
    BackgroundInformationComponents.push(sliderViewConditions);
    BackgroundInformationComponents.push(sliderColorScientist);
    BackgroundInformationComponents.push(sliderCVD);
    BackgroundInformationComponents.push(sliderGenderIdentification);
    BackgroundInformationComponents.push(buttonSubmitBackground);
    
    BackgroundInformationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BackgroundInformationRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'BackgroundInformation'-------
    // get current time
    t = BackgroundInformationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInitials* updates
    if (t >= 0.0 && textInitials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInitials.tStart = t;  // (not accounting for frame time here)
      textInitials.frameNStart = frameN;  // exact frame index
      
      textInitials.setAutoDraw(true);
    }

    
    // *textViewingConditions* updates
    if (t >= 0.0 && textViewingConditions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textViewingConditions.tStart = t;  // (not accounting for frame time here)
      textViewingConditions.frameNStart = frameN;  // exact frame index
      
      textViewingConditions.setAutoDraw(true);
    }

    
    // *textColorScientist* updates
    if (t >= 0.0 && textColorScientist.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textColorScientist.tStart = t;  // (not accounting for frame time here)
      textColorScientist.frameNStart = frameN;  // exact frame index
      
      textColorScientist.setAutoDraw(true);
    }

    
    // *textAge* updates
    if (t >= 0.0 && textAge.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textAge.tStart = t;  // (not accounting for frame time here)
      textAge.frameNStart = frameN;  // exact frame index
      
      textAge.setAutoDraw(true);
    }

    
    // *textCVD* updates
    if (t >= 0.0 && textCVD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textCVD.tStart = t;  // (not accounting for frame time here)
      textCVD.frameNStart = frameN;  // exact frame index
      
      textCVD.setAutoDraw(true);
    }

    
    // *textGenderIdentification* updates
    if (t >= 0.0 && textGenderIdentification.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textGenderIdentification.tStart = t;  // (not accounting for frame time here)
      textGenderIdentification.frameNStart = frameN;  // exact frame index
      
      textGenderIdentification.setAutoDraw(true);
    }

    
    // *textboxAge* updates
    if (t >= 0.0 && textboxAge.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textboxAge.tStart = t;  // (not accounting for frame time here)
      textboxAge.frameNStart = frameN;  // exact frame index
      
      textboxAge.setAutoDraw(true);
    }

    
    // *textboxInitials* updates
    if (t >= 0.0 && textboxInitials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textboxInitials.tStart = t;  // (not accounting for frame time here)
      textboxInitials.frameNStart = frameN;  // exact frame index
      
      textboxInitials.setAutoDraw(true);
    }

    
    // *sliderViewConditions* updates
    if (t >= 0.0 && sliderViewConditions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderViewConditions.tStart = t;  // (not accounting for frame time here)
      sliderViewConditions.frameNStart = frameN;  // exact frame index
      
      sliderViewConditions.setAutoDraw(true);
    }

    
    // *sliderColorScientist* updates
    if (t >= 0.0 && sliderColorScientist.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderColorScientist.tStart = t;  // (not accounting for frame time here)
      sliderColorScientist.frameNStart = frameN;  // exact frame index
      
      sliderColorScientist.setAutoDraw(true);
    }

    
    // *sliderCVD* updates
    if (t >= 0.0 && sliderCVD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderCVD.tStart = t;  // (not accounting for frame time here)
      sliderCVD.frameNStart = frameN;  // exact frame index
      
      sliderCVD.setAutoDraw(true);
    }

    
    // *sliderGenderIdentification* updates
    if (t >= 0.0 && sliderGenderIdentification.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sliderGenderIdentification.tStart = t;  // (not accounting for frame time here)
      sliderGenderIdentification.frameNStart = frameN;  // exact frame index
      
      sliderGenderIdentification.setAutoDraw(true);
    }

    
    // *buttonSubmitBackground* updates
    if (t >= 0 && buttonSubmitBackground.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonSubmitBackground.tStart = t;  // (not accounting for frame time here)
      buttonSubmitBackground.frameNStart = frameN;  // exact frame index
      
      buttonSubmitBackground.setAutoDraw(true);
    }

    if (buttonSubmitBackground.status === PsychoJS.Status.STARTED) {
      // check whether buttonSubmitBackground has been pressed
      if (buttonSubmitBackground.isClicked) {
        if (!buttonSubmitBackground.wasClicked) {
          // store time of first click
          buttonSubmitBackground.timesOn.push(buttonSubmitBackground.clock.getTime());
          // store time clicked until
          buttonSubmitBackground.timesOff.push(buttonSubmitBackground.clock.getTime());
        } else {
          // update time clicked until;
          buttonSubmitBackground.timesOff[buttonSubmitBackground.timesOff.length - 1] = buttonSubmitBackground.clock.getTime();
        }
        if (!buttonSubmitBackground.wasClicked) {
          // end routine when buttonSubmitBackground is clicked
          continueRoutine = false;
          null;
        }
        // if buttonSubmitBackground is still clicked next frame, it is not a new click
        buttonSubmitBackground.wasClicked = true;
      } else {
        // if buttonSubmitBackground is clicked next frame, it is a new click
        buttonSubmitBackground.wasClicked = false
      }
    } else {
      // keep clock at 0 if buttonSubmitBackground hasn't started / has finished
      buttonSubmitBackground.clock.reset();
      // if buttonSubmitBackground is clicked next frame, it is a new click
      buttonSubmitBackground.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BackgroundInformationComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BackgroundInformationRoutineEnd() {
  return async function () {
    //------Ending Routine 'BackgroundInformation'-------
    BackgroundInformationComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('textboxAge.text',textboxAge.text)
    psychoJS.experiment.addData('textboxInitials.text',textboxInitials.text)
    psychoJS.experiment.addData('sliderViewConditions.response', sliderViewConditions.getRating());
    psychoJS.experiment.addData('sliderColorScientist.response', sliderColorScientist.getRating());
    psychoJS.experiment.addData('sliderCVD.response', sliderCVD.getRating());
    psychoJS.experiment.addData('sliderGenderIdentification.response', sliderGenderIdentification.getRating());
    // the Routine "BackgroundInformation" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // set the text to left-align
    textInstructions.setAlignHoriz("left");
    textInstructions.setPos([leftAlign,0]);
    
    // change the button's background and text color
    buttonContinue.setFillColor(undefined);
    buttonContinue.setColor([-1,-1,-1]);
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(textInstructions);
    InstructionsComponents.push(buttonContinue);
    
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textInstructions* updates
    if (t >= 0.0 && textInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textInstructions.tStart = t;  // (not accounting for frame time here)
      textInstructions.frameNStart = frameN;  // exact frame index
      
      textInstructions.setAutoDraw(true);
    }

    
    // *buttonContinue* updates
    if (t >= 0 && buttonContinue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonContinue.tStart = t;  // (not accounting for frame time here)
      buttonContinue.frameNStart = frameN;  // exact frame index
      
      buttonContinue.setAutoDraw(true);
    }

    if (buttonContinue.status === PsychoJS.Status.STARTED) {
      // check whether buttonContinue has been pressed
      if (buttonContinue.isClicked) {
        if (!buttonContinue.wasClicked) {
          // store time of first click
          buttonContinue.timesOn.push(buttonContinue.clock.getTime());
          // store time clicked until
          buttonContinue.timesOff.push(buttonContinue.clock.getTime());
        } else {
          // update time clicked until;
          buttonContinue.timesOff[buttonContinue.timesOff.length - 1] = buttonContinue.clock.getTime();
        }
        if (!buttonContinue.wasClicked) {
          // end routine when buttonContinue is clicked
          continueRoutine = false;
          null;
        }
        // if buttonContinue is still clicked next frame, it is not a new click
        buttonContinue.wasClicked = true;
      } else {
        // if buttonContinue is clicked next frame, it is a new click
        buttonContinue.wasClicked = false
      }
    } else {
      // keep clock at 0 if buttonContinue hasn't started / has finished
      buttonContinue.clock.reset();
      // if buttonContinue is clicked next frame, it is a new click
      buttonContinue.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    InstructionsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions'-------
    InstructionsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trialsBlock;
var currentLoop;
function trialsBlockLoopBegin(trialsBlockLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsBlock = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'resources/conditions.xlsx',
      seed: undefined, name: 'trialsBlock'
    });
    psychoJS.experiment.addLoop(trialsBlock); // add the loop to the experiment
    currentLoop = trialsBlock;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialsBlock.forEach(function() {
      const snapshot = trialsBlock.getSnapshot();
    
      trialsBlockLoopScheduler.add(importConditions(snapshot));
      trialsBlockLoopScheduler.add(blockBeginRoutineBegin(snapshot));
      trialsBlockLoopScheduler.add(blockBeginRoutineEachFrame());
      trialsBlockLoopScheduler.add(blockBeginRoutineEnd());
      const trialsStimuliLoopScheduler = new Scheduler(psychoJS);
      trialsBlockLoopScheduler.add(trialsStimuliLoopBegin(trialsStimuliLoopScheduler, snapshot));
      trialsBlockLoopScheduler.add(trialsStimuliLoopScheduler);
      trialsBlockLoopScheduler.add(trialsStimuliLoopEnd);
      trialsBlockLoopScheduler.add(endLoopIteration(trialsBlockLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


var trialsStimuli;
function trialsStimuliLoopBegin(trialsStimuliLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trialsStimuli = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: cond_file,
      seed: undefined, name: 'trialsStimuli'
    });
    psychoJS.experiment.addLoop(trialsStimuli); // add the loop to the experiment
    currentLoop = trialsStimuli;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trialsStimuli.forEach(function() {
      const snapshot = trialsStimuli.getSnapshot();
    
      trialsStimuliLoopScheduler.add(importConditions(snapshot));
      trialsStimuliLoopScheduler.add(blank1000RoutineBegin(snapshot));
      trialsStimuliLoopScheduler.add(blank1000RoutineEachFrame());
      trialsStimuliLoopScheduler.add(blank1000RoutineEnd());
      trialsStimuliLoopScheduler.add(showImageRoutineBegin(snapshot));
      trialsStimuliLoopScheduler.add(showImageRoutineEachFrame());
      trialsStimuliLoopScheduler.add(showImageRoutineEnd());
      trialsStimuliLoopScheduler.add(blank1000RoutineBegin(snapshot));
      trialsStimuliLoopScheduler.add(blank1000RoutineEachFrame());
      trialsStimuliLoopScheduler.add(blank1000RoutineEnd());
      trialsStimuliLoopScheduler.add(randomizeColorsRoutineBegin(snapshot));
      trialsStimuliLoopScheduler.add(randomizeColorsRoutineEachFrame());
      trialsStimuliLoopScheduler.add(randomizeColorsRoutineEnd());
      trialsStimuliLoopScheduler.add(trialSelectionRoutineBegin(snapshot));
      trialsStimuliLoopScheduler.add(trialSelectionRoutineEachFrame());
      trialsStimuliLoopScheduler.add(trialSelectionRoutineEnd());
      trialsStimuliLoopScheduler.add(endLoopIteration(trialsStimuliLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsStimuliLoopEnd() {
  psychoJS.experiment.removeLoop(trialsStimuli);

  return Scheduler.Event.NEXT;
}


async function trialsBlockLoopEnd() {
  psychoJS.experiment.removeLoop(trialsBlock);

  return Scheduler.Event.NEXT;
}


var progressText;
var blockBeginComponents;
function blockBeginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blockBegin'-------
    t = 0;
    blockBeginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // set the text to left-align
    textBlockBegin.setAlignHoriz("left");
    textBlockBegin.setPos([leftAlign,0]);
    
    // change the button's background and text color
    buttonBlockBegin.setFillColor(undefined);
    buttonBlockBegin.setColor([-1,-1,-1]);
    
    // update the user's progress
    var textAboutToBegin = '';
    if(progress == 0){
        textAboutToBegin += 'This first section contains training images. Your responses will not be recorded and will instead serve as an opportunity for you to understand what the experiment will look like.'
    } else{
        textAboutToBegin += 'Section '+ progress + '/4 is about to begin. If you need to take a break, please do so on this screen.';
    }
    textBlockBegin.setText(textAboutToBegin);
    
    if(progress == 0){
        progressText = 'Begin Training';
    } else {
        progressText = 'Begin Section ' + progress + '/4';
    }
    
    progress = progress + 1;
    buttonBlockBegin.setText(progressText);
    // keep track of which components have finished
    blockBeginComponents = [];
    blockBeginComponents.push(textBlockBegin);
    blockBeginComponents.push(buttonBlockBegin);
    
    blockBeginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blockBeginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blockBegin'-------
    // get current time
    t = blockBeginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlockBegin* updates
    if (t >= 0.0 && textBlockBegin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlockBegin.tStart = t;  // (not accounting for frame time here)
      textBlockBegin.frameNStart = frameN;  // exact frame index
      
      textBlockBegin.setAutoDraw(true);
    }

    
    // *buttonBlockBegin* updates
    if (t >= 0 && buttonBlockBegin.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonBlockBegin.tStart = t;  // (not accounting for frame time here)
      buttonBlockBegin.frameNStart = frameN;  // exact frame index
      
      buttonBlockBegin.setAutoDraw(true);
    }

    if (buttonBlockBegin.status === PsychoJS.Status.STARTED) {
      // check whether buttonBlockBegin has been pressed
      if (buttonBlockBegin.isClicked) {
        if (!buttonBlockBegin.wasClicked) {
          // store time of first click
          buttonBlockBegin.timesOn.push(buttonBlockBegin.clock.getTime());
          // store time clicked until
          buttonBlockBegin.timesOff.push(buttonBlockBegin.clock.getTime());
        } else {
          // update time clicked until;
          buttonBlockBegin.timesOff[buttonBlockBegin.timesOff.length - 1] = buttonBlockBegin.clock.getTime();
        }
        if (!buttonBlockBegin.wasClicked) {
          // end routine when buttonBlockBegin is clicked
          continueRoutine = false;
          null;
        }
        // if buttonBlockBegin is still clicked next frame, it is not a new click
        buttonBlockBegin.wasClicked = true;
      } else {
        // if buttonBlockBegin is clicked next frame, it is a new click
        buttonBlockBegin.wasClicked = false
      }
    } else {
      // keep clock at 0 if buttonBlockBegin hasn't started / has finished
      buttonBlockBegin.clock.reset();
      // if buttonBlockBegin is clicked next frame, it is a new click
      buttonBlockBegin.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blockBeginComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blockBeginRoutineEnd() {
  return async function () {
    //------Ending Routine 'blockBegin'-------
    blockBeginComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "blockBegin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var blank1000Components;
function blank1000RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'blank1000'-------
    t = 0;
    blank1000Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    blank1000Components = [];
    blank1000Components.push(textBlankWaitOneSecond);
    
    blank1000Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function blank1000RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'blank1000'-------
    // get current time
    t = blank1000Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textBlankWaitOneSecond* updates
    if (t >= 0.0 && textBlankWaitOneSecond.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textBlankWaitOneSecond.tStart = t;  // (not accounting for frame time here)
      textBlankWaitOneSecond.frameNStart = frameN;  // exact frame index
      
      textBlankWaitOneSecond.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (textBlankWaitOneSecond.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      textBlankWaitOneSecond.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    blank1000Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function blank1000RoutineEnd() {
  return async function () {
    //------Ending Routine 'blank1000'-------
    blank1000Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var showImageComponents;
function showImageRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'showImage'-------
    t = 0;
    showImageClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    imageScramble.setImage(File_Name);
    // keep track of which components have finished
    showImageComponents = [];
    showImageComponents.push(imageScramble);
    
    showImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function showImageRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'showImage'-------
    // get current time
    t = showImageClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageScramble* updates
    if (t >= 0.0 && imageScramble.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageScramble.tStart = t;  // (not accounting for frame time here)
      imageScramble.frameNStart = frameN;  // exact frame index
      
      imageScramble.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageScramble.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageScramble.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    showImageComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function showImageRoutineEnd() {
  return async function () {
    //------Ending Routine 'showImage'-------
    showImageComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var colors;
var randomizeColorsComponents;
function randomizeColorsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'randomizeColors'-------
    t = 0;
    randomizeColorsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // array for the stimuli
    colors = [];
    
    // convert the color strings to decimal arrays
    var norms = [];
    norms.push(color1.split(',').map(Number));
    norms.push(color2.split(',').map(Number));
    norms.push(color3.split(',').map(Number));
    norms.push(color4.split(',').map(Number));
    norms.push(color5.split(',').map(Number));
    norms.push(color6.split(',').map(Number));
    norms.push(color7.split(',').map(Number));
    norms.push(color8.split(',').map(Number));
    
    // normalize the colors from [0 1] to [-1 -1]
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 3; j++){
            norms[i][j] = norms[i][j]*2 - 1;
        }
    }
    
    // create color objects
    const c1 = {color: color1, colorNorm: norms[0], index: 1};
    const c2 = {color: color2, colorNorm: norms[1], index: 2};
    const c3 = {color: color3, colorNorm: norms[2], index: 3};
    const c4 = {color: color4, colorNorm: norms[3], index: 4};
    const c5 = {color: color5, colorNorm: norms[4], index: 5};
    const c6 = {color: color6, colorNorm: norms[5], index: 6};
    const c7 = {color: color7, colorNorm: norms[6], index: 7};
    const c8 = {color: color8, colorNorm: norms[7], index: 8};
    colors.push(c1);
    colors.push(c2);
    colors.push(c3);
    colors.push(c4);
    colors.push(c5);
    colors.push(c6);
    colors.push(c7);
    colors.push(c8);
    
    // shuffle the list
    shuffle(colors);
    // keep track of which components have finished
    randomizeColorsComponents = [];
    
    randomizeColorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function randomizeColorsRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'randomizeColors'-------
    // get current time
    t = randomizeColorsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    randomizeColorsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function randomizeColorsRoutineEnd() {
  return async function () {
    //------Ending Routine 'randomizeColors'-------
    randomizeColorsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "randomizeColors" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var gotValidClick;
var trialSelectionComponents;
function trialSelectionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trialSelection'-------
    t = 0;
    trialSelectionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    firstChoice.setFillColor(new util.Color(colors[0].colorNorm));
    firstChoice.setLineColor(new util.Color(colors[0].colorNorm));
    secondChoice.setFillColor(new util.Color(colors[1].colorNorm));
    secondChoice.setLineColor(new util.Color(colors[1].colorNorm));
    thirdChoice.setFillColor(new util.Color(colors[2].colorNorm));
    thirdChoice.setLineColor(new util.Color(colors[2].colorNorm));
    fourthChoice.setFillColor(new util.Color(colors[3].colorNorm));
    fourthChoice.setLineColor(new util.Color(colors[3].colorNorm));
    fifthChoice.setFillColor(new util.Color(colors[4].colorNorm));
    fifthChoice.setLineColor(new util.Color(colors[4].colorNorm));
    sixthChoice.setFillColor(new util.Color(colors[5].colorNorm));
    sixthChoice.setLineColor(new util.Color(colors[5].colorNorm));
    seventhChoice.setFillColor(new util.Color(colors[6].colorNorm));
    seventhChoice.setLineColor(new util.Color(colors[6].colorNorm));
    eighthChoice.setFillColor(new util.Color(colors[7].colorNorm));
    eighthChoice.setLineColor(new util.Color(colors[7].colorNorm));
    // setup some python lists for storing info about the mouseResponse
    // current position of the mouse:
    mouseResponse.x = [];
    mouseResponse.y = [];
    mouseResponse.leftButton = [];
    mouseResponse.midButton = [];
    mouseResponse.rightButton = [];
    mouseResponse.time = [];
    mouseResponse.clicked_name = [];
    gotValidClick = false; // until a click is received
    // add a question
    textQuestion.setText(Question);
    // keep track of which components have finished
    trialSelectionComponents = [];
    trialSelectionComponents.push(textQuestion);
    trialSelectionComponents.push(firstChoice);
    trialSelectionComponents.push(secondChoice);
    trialSelectionComponents.push(thirdChoice);
    trialSelectionComponents.push(fourthChoice);
    trialSelectionComponents.push(fifthChoice);
    trialSelectionComponents.push(sixthChoice);
    trialSelectionComponents.push(seventhChoice);
    trialSelectionComponents.push(eighthChoice);
    trialSelectionComponents.push(mouseResponse);
    
    trialSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function trialSelectionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trialSelection'-------
    // get current time
    t = trialSelectionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textQuestion* updates
    if (t >= 0.0 && textQuestion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textQuestion.tStart = t;  // (not accounting for frame time here)
      textQuestion.frameNStart = frameN;  // exact frame index
      
      textQuestion.setAutoDraw(true);
    }

    
    // *firstChoice* updates
    if (t >= 0.0 && firstChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      firstChoice.tStart = t;  // (not accounting for frame time here)
      firstChoice.frameNStart = frameN;  // exact frame index
      
      firstChoice.setAutoDraw(true);
    }

    
    // *secondChoice* updates
    if (t >= 0.0 && secondChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      secondChoice.tStart = t;  // (not accounting for frame time here)
      secondChoice.frameNStart = frameN;  // exact frame index
      
      secondChoice.setAutoDraw(true);
    }

    
    // *thirdChoice* updates
    if (t >= 0.0 && thirdChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      thirdChoice.tStart = t;  // (not accounting for frame time here)
      thirdChoice.frameNStart = frameN;  // exact frame index
      
      thirdChoice.setAutoDraw(true);
    }

    
    // *fourthChoice* updates
    if (t >= 0.0 && fourthChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fourthChoice.tStart = t;  // (not accounting for frame time here)
      fourthChoice.frameNStart = frameN;  // exact frame index
      
      fourthChoice.setAutoDraw(true);
    }

    
    // *fifthChoice* updates
    if (t >= 0.0 && fifthChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fifthChoice.tStart = t;  // (not accounting for frame time here)
      fifthChoice.frameNStart = frameN;  // exact frame index
      
      fifthChoice.setAutoDraw(true);
    }

    
    // *sixthChoice* updates
    if (t >= 0.0 && sixthChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sixthChoice.tStart = t;  // (not accounting for frame time here)
      sixthChoice.frameNStart = frameN;  // exact frame index
      
      sixthChoice.setAutoDraw(true);
    }

    
    // *seventhChoice* updates
    if (t >= 0.0 && seventhChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      seventhChoice.tStart = t;  // (not accounting for frame time here)
      seventhChoice.frameNStart = frameN;  // exact frame index
      
      seventhChoice.setAutoDraw(true);
    }

    
    // *eighthChoice* updates
    if (t >= 0.0 && eighthChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eighthChoice.tStart = t;  // (not accounting for frame time here)
      eighthChoice.frameNStart = frameN;  // exact frame index
      
      eighthChoice.setAutoDraw(true);
    }

    // *mouseResponse* updates
    if (t >= 0.0 && mouseResponse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouseResponse.tStart = t;  // (not accounting for frame time here)
      mouseResponse.frameNStart = frameN;  // exact frame index
      
      mouseResponse.status = PsychoJS.Status.STARTED;
      mouseResponse.mouseClock.reset();
      prevButtonState = mouseResponse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouseResponse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouseResponse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouseResponse.getPos();
          mouseResponse.x.push(_mouseXYs[0]);
          mouseResponse.y.push(_mouseXYs[1]);
          mouseResponse.leftButton.push(_mouseButtons[0]);
          mouseResponse.midButton.push(_mouseButtons[1]);
          mouseResponse.rightButton.push(_mouseButtons[2]);
          mouseResponse.time.push(mouseResponse.mouseClock.getTime());
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          for (const obj of [firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice,sixthChoice,seventhChoice,eighthChoice]) {
            if (obj.contains(mouseResponse)) {
              gotValidClick = true;
              mouseResponse.clicked_name.push(obj.name)
            }
          }
          if (gotValidClick === true) { // abort routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    trialSelectionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var selectedSquare;
var id;
function trialSelectionRoutineEnd() {
  return async function () {
    //------Ending Routine 'trialSelection'-------
    trialSelectionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // store data for psychoJS.experiment (ExperimentHandler)
    if (mouseResponse.x) {  psychoJS.experiment.addData('mouseResponse.x', mouseResponse.x[0])};
    if (mouseResponse.y) {  psychoJS.experiment.addData('mouseResponse.y', mouseResponse.y[0])};
    if (mouseResponse.leftButton) {  psychoJS.experiment.addData('mouseResponse.leftButton', mouseResponse.leftButton[0])};
    if (mouseResponse.midButton) {  psychoJS.experiment.addData('mouseResponse.midButton', mouseResponse.midButton[0])};
    if (mouseResponse.rightButton) {  psychoJS.experiment.addData('mouseResponse.rightButton', mouseResponse.rightButton[0])};
    if (mouseResponse.time) {  psychoJS.experiment.addData('mouseResponse.time', mouseResponse.time[0])};
    if (mouseResponse.clicked_name) {  psychoJS.experiment.addData('mouseResponse.clicked_name', mouseResponse.clicked_name[0])};
    
    // not my finest coding moment, but we need to retrieve the index of the box
    // clicked from the object name
    selectedSquare = mouseResponse.clicked_name[0];
    id = (- 1);
    switch(selectedSquare) {
        case "firstChoice":
            id = 0;
            break;
        case "secondChoice":
            id = 1;
            break;
        case "thirdChoice":
            id = 2;
            break;
        case "fourthChoice":
            id = 3;
            break;
        case "fifthChoice":
            id = 4;
            break;
        case "sixthChoice":
            id = 5;
            break;
        case "seventhChoice":
            id = 6;
            break;
        case "eighthChoice":
            id = 7;
            break;
        default:
            id = -1;
    }
    // add custom variables to the data sheet: the color clicked and the index of the color
    psychoJS.experiment.addData('mouseResponseLocation', id);
    psychoJS.experiment.addData('choiceColor', colors[id].color);
    psychoJS.experiment.addData('choiceIndex', colors[id].index);
    // the Routine "trialSelection" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var GoodbyeScreenComponents;
function GoodbyeScreenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'GoodbyeScreen'-------
    t = 0;
    GoodbyeScreenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // set the text to left-align
    textGoodbye.setAlignHoriz("left");
    textGoodbye.setPos([leftAlign,0]);
    
    // change the button's background and text color
    buttonGoodbye.setFillColor(undefined);
    buttonGoodbye.setColor([-1,-1,-1]);
    
    // keep track of which components have finished
    GoodbyeScreenComponents = [];
    GoodbyeScreenComponents.push(textGoodbye);
    GoodbyeScreenComponents.push(buttonGoodbye);
    
    GoodbyeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeScreenRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'GoodbyeScreen'-------
    // get current time
    t = GoodbyeScreenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textGoodbye* updates
    if (t >= 0.0 && textGoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textGoodbye.tStart = t;  // (not accounting for frame time here)
      textGoodbye.frameNStart = frameN;  // exact frame index
      
      textGoodbye.setAutoDraw(true);
    }

    
    // *buttonGoodbye* updates
    if (t >= 0 && buttonGoodbye.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      buttonGoodbye.tStart = t;  // (not accounting for frame time here)
      buttonGoodbye.frameNStart = frameN;  // exact frame index
      
      buttonGoodbye.setAutoDraw(true);
    }

    if (buttonGoodbye.status === PsychoJS.Status.STARTED) {
      // check whether buttonGoodbye has been pressed
      if (buttonGoodbye.isClicked) {
        if (!buttonGoodbye.wasClicked) {
          // store time of first click
          buttonGoodbye.timesOn.push(buttonGoodbye.clock.getTime());
          // store time clicked until
          buttonGoodbye.timesOff.push(buttonGoodbye.clock.getTime());
        } else {
          // update time clicked until;
          buttonGoodbye.timesOff[buttonGoodbye.timesOff.length - 1] = buttonGoodbye.clock.getTime();
        }
        if (!buttonGoodbye.wasClicked) {
          // end routine when buttonGoodbye is clicked
          continueRoutine = false;
          null;
        }
        // if buttonGoodbye is still clicked next frame, it is not a new click
        buttonGoodbye.wasClicked = true;
      } else {
        // if buttonGoodbye is clicked next frame, it is a new click
        buttonGoodbye.wasClicked = false
      }
    } else {
      // keep clock at 0 if buttonGoodbye hasn't started / has finished
      buttonGoodbye.clock.reset();
      // if buttonGoodbye is clicked next frame, it is a new click
      buttonGoodbye.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoodbyeScreenComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeScreenRoutineEnd() {
  return async function () {
    //------Ending Routine 'GoodbyeScreen'-------
    GoodbyeScreenComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "GoodbyeScreen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
