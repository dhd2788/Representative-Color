#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2021.2.3),
    on February 10, 2022, at 18:30
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2021.2.3'
expName = 'Representative Color'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\Users\\darad\\Desktop\\Pavlovia\\Representative Color_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1600,900], fullscr=False, screen=0, 
    winType='pyglet', allowGUI=True, allowStencil=False,
    monitor='testMonitor', color=[0.3411,0.3411,0.3411], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# Setup eyetracking
ioDevice = ioConfig = ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "InitCode"
InitCodeClock = core.Clock()
import random, xlrd

# set square variables
squareSize = 0.1
squareOffset = 0.12

# set text variables
textSize = 0.023
textOffset = 0.08
screenTop = 0.3

# manual data storage
trials = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:/Users/darad/Desktop/Research Project/Representative-Color/UI/Representative Color_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName='data/results')

# randomize the seed
random.seed()

# Initialize components for Routine "WelcomeScreen"
WelcomeScreenClock = core.Clock()
textWelcomeMessage = visual.TextStim(win=win, name='textWelcomeMessage',
    text='Evaluating Perception of the Representative Color of a Complex Image\nInvestigators: Dara Dimoff and Susan Farnand\n\nThis research study is evaluating how observers average color information over an image. You will briefly be shown a series of images. Following each image, you will be shown an array of nine colors contained in the image. For each array, please determine which of the nine colors you feel best represents the overall color of the image by clicking on the appropriate color patch. This experiment should approximately take 20 minutes. Thank you for your participation.\n\nCONFIDENTIALITY\nYour name will not be associated directly with your data. An identifier such as “Participant 11” will be used to identify your data. The information obtained will not be traceable back to you.\n\nRISKS AND BENEFITS\nThere are no anticipated risks of participating in this study. The results of this experiment will provide information that should prove useful to the color science community.\n\nYOUR RIGHTS AS A RESEARCH PARTICIPANT\nParticipation in this study is voluntary. You have the right not to participate at all, to stop the study at any time, or to request your data be removed from the study. Just let us know if you would like to stop for any reason.\n\nCONTACTS FOR QUESTIONS OR CONCERNS\nYou may contact Dara Dimoff at dhd2788@rit.edu or Susan Farnand at spfpci@rit.edu if you have questions about the study.',
    font='Open Sans',
    pos=(0, 0.1), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textElectronicSignature = visual.TextStim(win=win, name='textElectronicSignature',
    text='Electronic Signature:',
    font='Open Sans',
    pos=(0, -0.3), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
textDate = visual.TextStim(win=win, name='textDate',
    text='Date (MM/DD/YY):',
    font='Open Sans',
    pos=(0, -0.35), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
textboxElectronicSignature = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, -0.3),     letterHeight=textSize,
     size=(0.45, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='white', borderColor='black',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textboxElectronicSignature',
     autoLog=True,
)
textboxDate = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0, -0.35),     letterHeight=textSize,
     size=(0.45, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='white', borderColor='black',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textboxDate',
     autoLog=True,
)
buttonSubmit = visual.ButtonStim(win, 
    text='Submit', font='Open Sans',
    pos=(0.42, -0.35),
    letterHeight=textSize,
    size=(0.2, None), borderWidth=0.0,
    fillColor='darkgrey', borderColor='black',
    color='black', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='buttonSubmit'
)
buttonSubmit.buttonClock = core.Clock()
textboxText = visual.TextBox2(
     win, text='MyTextbos', font='Open Sans',
     pos=(0, 0),     letterHeight=0.05,
     size=(None, None), borderWidth=2.0,
     color='white', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor=None, borderColor=None,
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textboxText',
     autoLog=True,
)

# Initialize components for Routine "BackgroundInformation"
BackgroundInformationClock = core.Clock()
textInitials = visual.TextStim(win=win, name='textInitials',
    text='Observer Initials:',
    font='Open Sans',
    pos=(0, screenTop), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
textViewingConditions = visual.TextStim(win=win, name='textViewingConditions',
    text='Viewing Conditions: ',
    font='Open Sans',
    pos=(0, screenTop-textOffset), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-1.0);
textColorScientist = visual.TextStim(win=win, name='textColorScientist',
    text='Do you have experience in imaging?',
    font='Open Sans',
    pos=(0, screenTop-textOffset*2), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-2.0);
textAge = visual.TextStim(win=win, name='textAge',
    text='Age:\n(Note: if you are under 18, you may participate,\nbut your data will not be used)',
    font='Open Sans',
    pos=(0, screenTop-textOffset*3), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-3.0);
textCVD = visual.TextStim(win=win, name='textCVD',
    text='Do you have a color vision deficiency?',
    font='Open Sans',
    pos=(0, screenTop-textOffset*5), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-4.0);
textGenderIdentification = visual.TextStim(win=win, name='textGenderIdentification',
    text='Gender Identification:',
    font='Open Sans',
    pos=(0, screenTop-textOffset*4), height=textSize, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=-5.0);
textboxInitials = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0.2, screenTop),     letterHeight=textSize,
     size=(0.45, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='white', borderColor='black',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textboxInitials',
     autoLog=True,
)
sliderViewConditions = visual.Slider(win=win, name='sliderViewConditions',
    startValue=None, size=(0.15, 0.025), pos=(0.1, screenTop-textOffset), units=None,
    labels=['Indoor', 'Outdoor'], ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='Black', fillColor='Black', borderColor=[0,0,0], colorSpace='rgb',
    font='Open Sans', labelHeight=textSize,
    flip=False, depth=-7, readOnly=False)
sliderColorScientist = visual.Slider(win=win, name='sliderColorScientist',
    startValue=None, size=(0.15, 0.025), pos=(0.1, screenTop-textOffset*2), units=None,
    labels=['Yes','No'], ticks=(1, 2), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='black', fillColor='black', borderColor=[0,0,0], colorSpace='rgb',
    font='Open Sans', labelHeight=textSize,
    flip=False, depth=-8, readOnly=False)
textboxAge = visual.TextBox2(
     win, text=None, font='Open Sans',
     pos=(0.2, screenTop-textOffset*3),     letterHeight=textSize,
     size=(0.45, None), borderWidth=2.0,
     color='black', colorSpace='rgb',
     opacity=None,
     bold=False, italic=False,
     lineSpacing=1.0,
     padding=0.0,
     anchor='center',
     fillColor='white', borderColor='black',
     flipHoriz=False, flipVert=False,
     editable=True,
     name='textboxAge',
     autoLog=True,
)
sliderCVD = visual.Slider(win=win, name='sliderCVD',
    startValue=None, size=(0.225, 0.025), pos=(0.1, screenTop-textOffset*5), units=None,
    labels=['Yes','No','Unsure'], ticks=(1, 2, 3), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='black', fillColor='black', borderColor=[0,0,0], colorSpace='rgb',
    font='Open Sans', labelHeight=textSize,
    flip=False, depth=-10, readOnly=False)
sliderGenderIdentification = visual.Slider(win=win, name='sliderGenderIdentification',
    startValue=None, size=(0.5, 0.025), pos=(0.1, screenTop-textOffset*4), units=None,
    labels=['Female','Male','Nonbinary','Prefer not\nto respond'], ticks=(1, 2, 3, 4), granularity=1.0,
    style='radio', styleTweaks=(), opacity=None,
    color='black', fillColor='black', borderColor=[0,0,0], colorSpace='rgb',
    font='Open Sans', labelHeight=textSize,
    flip=False, depth=-11, readOnly=False)

# Initialize components for Routine "Instructions"
InstructionsClock = core.Clock()
textInstructions = visual.TextStim(win=win, name='textInstructions',
    text='INSTRUCTIONS\nThis research study is looking to understand how human vision "averages" color on objects that are not uniform in color.\n\nPlease make sure that any color filters on your monitor are disabled for the duration of this study (ie. blue light filters at night). You will be presented with an image for one second and then will be asked to select the color that best represents the image you just saw.\n\nTo select the best representative color, left click on that square.\n\nThis experiment will take you approximately 20 minutes. Thank you for your participation. We will begin by collecting some background information.\n\nPress "Continue" to begin the experiment.',
    font='Open Sans',
    pos=(0, 0), height=0.023, wrapWidth=None, ori=0.0, 
    color='black', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
buttonContinue = visual.ButtonStim(win, 
    text='Continue', font='Open Sans',
    pos=(0, -0.35),
    letterHeight=textSize,
    size=(0.2, None), borderWidth=0.0,
    fillColor='lightgrey', borderColor='black',
    color='black', colorSpace='rgb',
    opacity=None,
    bold=True, italic=False,
    padding=None,
    anchor='center',
    name='buttonContinue'
)
buttonContinue.buttonClock = core.Clock()

# Initialize components for Routine "blank1000"
blank1000Clock = core.Clock()
textBlankWaitOneSecond = visual.TextStim(win=win, name='textBlankWaitOneSecond',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "showImage"
showImageClock = core.Clock()
imageScramble = visual.ImageStim(
    win=win,
    name='imageScramble', 
    image='sin', mask=None,
    ori=0.0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=None,
    flipHoriz=False, flipVert=False,
    texRes=128.0, interpolate=True, depth=0.0)

# Initialize components for Routine "blank1000"
blank1000Clock = core.Clock()
textBlankWaitOneSecond = visual.TextStim(win=win, name='textBlankWaitOneSecond',
    text=None,
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);

# Initialize components for Routine "randomizeColors"
randomizeColorsClock = core.Clock()

# Initialize components for Routine "trialSelection"
trialSelectionClock = core.Clock()
firstChoice = visual.Rect(
    win=win, name='firstChoice',units='height', 
    width=(squareSize, squareSize)[0], height=(squareSize, squareSize)[1],
    ori=0.0, pos=(squareOffset/2*-1, squareOffset+squareOffset/2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=0.0, interpolate=True)
secondChoice = visual.Rect(
    win=win, name='secondChoice',
    width=(squareSize, squareSize)[0], height=(squareSize, squareSize)[1],
    ori=0.0, pos=(squareOffset/2, squareOffset+squareOffset/2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-1.0, interpolate=True)
thirdChoice = visual.Rect(
    win=win, name='thirdChoice',
    width=(squareSize, squareSize)[0], height=(squareSize, squareSize)[1],
    ori=0.0, pos=((squareOffset/2+squareOffset)*-1, 0.06),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-2.0, interpolate=True)
fourthChoice = visual.Rect(
    win=win, name='fourthChoice',
    width=(squareSize, squareSize)[0], height=(squareSize, squareSize)[1],
    ori=0.0, pos=(squareOffset/2+squareOffset, squareOffset/2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-3.0, interpolate=True)
fifthChoice = visual.Rect(
    win=win, name='fifthChoice',
    width=(squareSize, squareSize)[0], height=(squareSize, squareSize)[1],
    ori=0.0, pos=((squareOffset+squareOffset/2)*-1,-squareOffset/2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-4.0, interpolate=True)
sixthChoice = visual.Rect(
    win=win, name='sixthChoice',
    width=(squareSize,squareSize)[0], height=(squareSize,squareSize)[1],
    ori=0.0, pos=(squareOffset+squareOffset/2,-squareOffset/2),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-5.0, interpolate=True)
seventhChoice = visual.Rect(
    win=win, name='seventhChoice',
    width=(squareSize,squareSize)[0], height=(squareSize,squareSize)[1],
    ori=0.0, pos=(-squareOffset/2,-(squareOffset+squareOffset/2)),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-6.0, interpolate=True)
eighthChoice = visual.Rect(
    win=win, name='eighthChoice',
    width=(squareSize,squareSize)[0], height=(squareSize,squareSize)[1],
    ori=0.0, pos=(squareOffset/2,-(squareOffset+squareOffset/2)),
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=None, depth=-7.0, interpolate=True)
mouseResponse = event.Mouse(win=win)
x, y = [None, None]
mouseResponse.mouseClock = core.Clock()

# Initialize components for Routine "GoodbyeScreen"
GoodbyeScreenClock = core.Clock()
goodbyeText = visual.TextStim(win=win, name='goodbyeText',
    text='Thank you for participating',
    font='Open Sans',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0.0, 
    color='white', colorSpace='rgb', opacity=None, 
    languageStyle='LTR',
    depth=0.0);
keyEndTrial = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "InitCode"-------
continueRoutine = True
# update component parameters for each repeat
# keep track of which components have finished
InitCodeComponents = []
for thisComponent in InitCodeComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InitCodeClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "InitCode"-------
while continueRoutine:
    # get current time
    t = InitCodeClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InitCodeClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InitCodeComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "InitCode"-------
for thisComponent in InitCodeComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# the Routine "InitCode" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "WelcomeScreen"-------
continueRoutine = True
# update component parameters for each repeat
textboxElectronicSignature.reset()
textboxDate.reset()
textboxText.reset()
textWelcomeMessage.alignText='left'
textElectronicSignature.alignText='left'
textDate.alignText='left'
# keep track of which components have finished
WelcomeScreenComponents = [textWelcomeMessage, textElectronicSignature, textDate, textboxElectronicSignature, textboxDate, buttonSubmit, textboxText]
for thisComponent in WelcomeScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
WelcomeScreenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "WelcomeScreen"-------
while continueRoutine:
    # get current time
    t = WelcomeScreenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=WelcomeScreenClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textWelcomeMessage* updates
    if textWelcomeMessage.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textWelcomeMessage.frameNStart = frameN  # exact frame index
        textWelcomeMessage.tStart = t  # local t and not account for scr refresh
        textWelcomeMessage.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textWelcomeMessage, 'tStartRefresh')  # time at next scr refresh
        textWelcomeMessage.setAutoDraw(True)
    
    # *textElectronicSignature* updates
    if textElectronicSignature.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textElectronicSignature.frameNStart = frameN  # exact frame index
        textElectronicSignature.tStart = t  # local t and not account for scr refresh
        textElectronicSignature.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textElectronicSignature, 'tStartRefresh')  # time at next scr refresh
        textElectronicSignature.setAutoDraw(True)
    
    # *textDate* updates
    if textDate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textDate.frameNStart = frameN  # exact frame index
        textDate.tStart = t  # local t and not account for scr refresh
        textDate.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textDate, 'tStartRefresh')  # time at next scr refresh
        textDate.setAutoDraw(True)
    
    # *textboxElectronicSignature* updates
    if textboxElectronicSignature.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textboxElectronicSignature.frameNStart = frameN  # exact frame index
        textboxElectronicSignature.tStart = t  # local t and not account for scr refresh
        textboxElectronicSignature.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textboxElectronicSignature, 'tStartRefresh')  # time at next scr refresh
        textboxElectronicSignature.setAutoDraw(True)
    
    # *textboxDate* updates
    if textboxDate.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textboxDate.frameNStart = frameN  # exact frame index
        textboxDate.tStart = t  # local t and not account for scr refresh
        textboxDate.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textboxDate, 'tStartRefresh')  # time at next scr refresh
        textboxDate.setAutoDraw(True)
    
    # *buttonSubmit* updates
    if buttonSubmit.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        buttonSubmit.frameNStart = frameN  # exact frame index
        buttonSubmit.tStart = t  # local t and not account for scr refresh
        buttonSubmit.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonSubmit, 'tStartRefresh')  # time at next scr refresh
        buttonSubmit.setAutoDraw(True)
    if buttonSubmit.status == STARTED:
        # check whether buttonSubmit has been pressed
        if buttonSubmit.isClicked:
            if not buttonSubmit.wasClicked:
                buttonSubmit.timesOn.append(buttonSubmit.buttonClock.getTime()) # store time of first click
                buttonSubmit.timesOff.append(buttonSubmit.buttonClock.getTime()) # store time clicked until
            else:
                buttonSubmit.timesOff[-1] = buttonSubmit.buttonClock.getTime() # update time clicked until
            if not buttonSubmit.wasClicked:
                continueRoutine = False  # end routine when buttonSubmit is clicked
                None
            buttonSubmit.wasClicked = True  # if buttonSubmit is still clicked next frame, it is not a new click
        else:
            buttonSubmit.wasClicked = False  # if buttonSubmit is clicked next frame, it is a new click
    else:
        buttonSubmit.wasClicked = False  # if buttonSubmit is clicked next frame, it is a new click
    
    # *textboxText* updates
    if textboxText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textboxText.frameNStart = frameN  # exact frame index
        textboxText.tStart = t  # local t and not account for scr refresh
        textboxText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textboxText, 'tStartRefresh')  # time at next scr refresh
        textboxText.setAutoDraw(True)
    if textboxText.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > textboxText.tStartRefresh + 1.0-frameTolerance:
            # keep track of stop time/frame for later
            textboxText.tStop = t  # not accounting for scr refresh
            textboxText.frameNStop = frameN  # exact frame index
            win.timeOnFlip(textboxText, 'tStopRefresh')  # time at next scr refresh
            textboxText.setAutoDraw(False)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in WelcomeScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "WelcomeScreen"-------
for thisComponent in WelcomeScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textWelcomeMessage.started', textWelcomeMessage.tStartRefresh)
thisExp.addData('textWelcomeMessage.stopped', textWelcomeMessage.tStopRefresh)
thisExp.addData('textElectronicSignature.started', textElectronicSignature.tStartRefresh)
thisExp.addData('textElectronicSignature.stopped', textElectronicSignature.tStopRefresh)
thisExp.addData('textDate.started', textDate.tStartRefresh)
thisExp.addData('textDate.stopped', textDate.tStopRefresh)
thisExp.addData('textboxElectronicSignature.text',textboxElectronicSignature.text)
thisExp.addData('textboxElectronicSignature.started', textboxElectronicSignature.tStartRefresh)
thisExp.addData('textboxElectronicSignature.stopped', textboxElectronicSignature.tStopRefresh)
thisExp.addData('textboxDate.text',textboxDate.text)
thisExp.addData('textboxDate.started', textboxDate.tStartRefresh)
thisExp.addData('textboxDate.stopped', textboxDate.tStopRefresh)
thisExp.addData('buttonSubmit.started', buttonSubmit.tStartRefresh)
thisExp.addData('buttonSubmit.stopped', buttonSubmit.tStopRefresh)
thisExp.addData('buttonSubmit.numClicks', buttonSubmit.numClicks)
if buttonSubmit.numClicks:
   thisExp.addData('buttonSubmit.timesOn', buttonSubmit.timesOn)
   thisExp.addData('buttonSubmit.timesOff', buttonSubmit.timesOff)
else:
   thisExp.addData('buttonSubmit.timesOn', "")
   thisExp.addData('buttonSubmit.timesOff', "")
thisExp.addData('textboxText.text',textboxText.text)
thisExp.addData('textboxText.started', textboxText.tStartRefresh)
thisExp.addData('textboxText.stopped', textboxText.tStopRefresh)
# the Routine "WelcomeScreen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "BackgroundInformation"-------
continueRoutine = True
# update component parameters for each repeat
textboxInitials.reset()
sliderViewConditions.reset()
sliderColorScientist.reset()
textboxAge.reset()
sliderCVD.reset()
sliderGenderIdentification.reset()
textInitials.alignText='left'
textViewingConditions.alignText='left'
textColorScientist.alignText='left'
textAge.alignText='left'
textGenderIdentification.alignText='left'
textCVD.alignText='left'
ratingScale = visual.RatingScale(win)
# keep track of which components have finished
BackgroundInformationComponents = [textInitials, textViewingConditions, textColorScientist, textAge, textCVD, textGenderIdentification, textboxInitials, sliderViewConditions, sliderColorScientist, textboxAge, sliderCVD, sliderGenderIdentification]
for thisComponent in BackgroundInformationComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
BackgroundInformationClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "BackgroundInformation"-------
while continueRoutine:
    # get current time
    t = BackgroundInformationClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=BackgroundInformationClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textInitials* updates
    if textInitials.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textInitials.frameNStart = frameN  # exact frame index
        textInitials.tStart = t  # local t and not account for scr refresh
        textInitials.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textInitials, 'tStartRefresh')  # time at next scr refresh
        textInitials.setAutoDraw(True)
    
    # *textViewingConditions* updates
    if textViewingConditions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textViewingConditions.frameNStart = frameN  # exact frame index
        textViewingConditions.tStart = t  # local t and not account for scr refresh
        textViewingConditions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textViewingConditions, 'tStartRefresh')  # time at next scr refresh
        textViewingConditions.setAutoDraw(True)
    
    # *textColorScientist* updates
    if textColorScientist.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textColorScientist.frameNStart = frameN  # exact frame index
        textColorScientist.tStart = t  # local t and not account for scr refresh
        textColorScientist.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textColorScientist, 'tStartRefresh')  # time at next scr refresh
        textColorScientist.setAutoDraw(True)
    
    # *textAge* updates
    if textAge.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textAge.frameNStart = frameN  # exact frame index
        textAge.tStart = t  # local t and not account for scr refresh
        textAge.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textAge, 'tStartRefresh')  # time at next scr refresh
        textAge.setAutoDraw(True)
    
    # *textCVD* updates
    if textCVD.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textCVD.frameNStart = frameN  # exact frame index
        textCVD.tStart = t  # local t and not account for scr refresh
        textCVD.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textCVD, 'tStartRefresh')  # time at next scr refresh
        textCVD.setAutoDraw(True)
    
    # *textGenderIdentification* updates
    if textGenderIdentification.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textGenderIdentification.frameNStart = frameN  # exact frame index
        textGenderIdentification.tStart = t  # local t and not account for scr refresh
        textGenderIdentification.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textGenderIdentification, 'tStartRefresh')  # time at next scr refresh
        textGenderIdentification.setAutoDraw(True)
    
    # *textboxInitials* updates
    if textboxInitials.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textboxInitials.frameNStart = frameN  # exact frame index
        textboxInitials.tStart = t  # local t and not account for scr refresh
        textboxInitials.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textboxInitials, 'tStartRefresh')  # time at next scr refresh
        textboxInitials.setAutoDraw(True)
    
    # *sliderViewConditions* updates
    if sliderViewConditions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sliderViewConditions.frameNStart = frameN  # exact frame index
        sliderViewConditions.tStart = t  # local t and not account for scr refresh
        sliderViewConditions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sliderViewConditions, 'tStartRefresh')  # time at next scr refresh
        sliderViewConditions.setAutoDraw(True)
    
    # *sliderColorScientist* updates
    if sliderColorScientist.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sliderColorScientist.frameNStart = frameN  # exact frame index
        sliderColorScientist.tStart = t  # local t and not account for scr refresh
        sliderColorScientist.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sliderColorScientist, 'tStartRefresh')  # time at next scr refresh
        sliderColorScientist.setAutoDraw(True)
    
    # Check sliderColorScientist for response to end routine
    if sliderColorScientist.getRating() is not None and sliderColorScientist.status == STARTED:
        continueRoutine = False
    
    # *textboxAge* updates
    if textboxAge.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textboxAge.frameNStart = frameN  # exact frame index
        textboxAge.tStart = t  # local t and not account for scr refresh
        textboxAge.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textboxAge, 'tStartRefresh')  # time at next scr refresh
        textboxAge.setAutoDraw(True)
    
    # *sliderCVD* updates
    if sliderCVD.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sliderCVD.frameNStart = frameN  # exact frame index
        sliderCVD.tStart = t  # local t and not account for scr refresh
        sliderCVD.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sliderCVD, 'tStartRefresh')  # time at next scr refresh
        sliderCVD.setAutoDraw(True)
    
    # *sliderGenderIdentification* updates
    if sliderGenderIdentification.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        sliderGenderIdentification.frameNStart = frameN  # exact frame index
        sliderGenderIdentification.tStart = t  # local t and not account for scr refresh
        sliderGenderIdentification.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(sliderGenderIdentification, 'tStartRefresh')  # time at next scr refresh
        sliderGenderIdentification.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in BackgroundInformationComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "BackgroundInformation"-------
for thisComponent in BackgroundInformationComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textInitials.started', textInitials.tStartRefresh)
thisExp.addData('textInitials.stopped', textInitials.tStopRefresh)
thisExp.addData('textViewingConditions.started', textViewingConditions.tStartRefresh)
thisExp.addData('textViewingConditions.stopped', textViewingConditions.tStopRefresh)
thisExp.addData('textColorScientist.started', textColorScientist.tStartRefresh)
thisExp.addData('textColorScientist.stopped', textColorScientist.tStopRefresh)
thisExp.addData('textAge.started', textAge.tStartRefresh)
thisExp.addData('textAge.stopped', textAge.tStopRefresh)
thisExp.addData('textGenderIdentification.started', textGenderIdentification.tStartRefresh)
thisExp.addData('textGenderIdentification.stopped', textGenderIdentification.tStopRefresh)
thisExp.addData('textboxInitials.text',textboxInitials.text)
thisExp.addData('textboxInitials.started', textboxInitials.tStartRefresh)
thisExp.addData('textboxInitials.stopped', textboxInitials.tStopRefresh)
thisExp.addData('sliderViewConditions.response', sliderViewConditions.getRating())
thisExp.addData('sliderColorScientist.response', sliderColorScientist.getRating())
thisExp.addData('textboxAge.text',textboxAge.text)
thisExp.addData('sliderCVD.response', sliderCVD.getRating())
thisExp.addData('sliderGenderIdentification.response', sliderGenderIdentification.getRating())
# the Routine "BackgroundInformation" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "Instructions"-------
continueRoutine = True
# update component parameters for each repeat
textInstructions.alignText='left'
# keep track of which components have finished
InstructionsComponents = [textInstructions, buttonContinue]
for thisComponent in InstructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
InstructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Instructions"-------
while continueRoutine:
    # get current time
    t = InstructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=InstructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *textInstructions* updates
    if textInstructions.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        textInstructions.frameNStart = frameN  # exact frame index
        textInstructions.tStart = t  # local t and not account for scr refresh
        textInstructions.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(textInstructions, 'tStartRefresh')  # time at next scr refresh
        textInstructions.setAutoDraw(True)
    
    # *buttonContinue* updates
    if buttonContinue.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        buttonContinue.frameNStart = frameN  # exact frame index
        buttonContinue.tStart = t  # local t and not account for scr refresh
        buttonContinue.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(buttonContinue, 'tStartRefresh')  # time at next scr refresh
        buttonContinue.setAutoDraw(True)
    if buttonContinue.status == STARTED:
        # check whether buttonContinue has been pressed
        if buttonContinue.isClicked:
            if not buttonContinue.wasClicked:
                buttonContinue.timesOn.append(buttonContinue.buttonClock.getTime()) # store time of first click
                buttonContinue.timesOff.append(buttonContinue.buttonClock.getTime()) # store time clicked until
            else:
                buttonContinue.timesOff[-1] = buttonContinue.buttonClock.getTime() # update time clicked until
            if not buttonContinue.wasClicked:
                continueRoutine = False  # end routine when buttonContinue is clicked
                None
            buttonContinue.wasClicked = True  # if buttonContinue is still clicked next frame, it is not a new click
        else:
            buttonContinue.wasClicked = False  # if buttonContinue is clicked next frame, it is a new click
    else:
        buttonContinue.wasClicked = False  # if buttonContinue is clicked next frame, it is a new click
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in InstructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Instructions"-------
for thisComponent in InstructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('textInstructions.started', textInstructions.tStartRefresh)
thisExp.addData('textInstructions.stopped', textInstructions.tStopRefresh)
thisExp.addData('buttonContinue.started', buttonContinue.tStartRefresh)
thisExp.addData('buttonContinue.stopped', buttonContinue.tStopRefresh)
thisExp.addData('buttonContinue.numClicks', buttonContinue.numClicks)
if buttonContinue.numClicks:
   thisExp.addData('buttonContinue.timesOn', buttonContinue.timesOn)
   thisExp.addData('buttonContinue.timesOff', buttonContinue.timesOff)
else:
   thisExp.addData('buttonContinue.timesOn', "")
   thisExp.addData('buttonContinue.timesOff', "")
# the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trialsBlock = data.TrialHandler(nReps=1.0, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('resources/conditions.xlsx'),
    seed=None, name='trialsBlock')
thisExp.addLoop(trialsBlock)  # add the loop to the experiment
thisTrialsBlock = trialsBlock.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrialsBlock.rgb)
if thisTrialsBlock != None:
    for paramName in thisTrialsBlock:
        exec('{} = thisTrialsBlock[paramName]'.format(paramName))

for thisTrialsBlock in trialsBlock:
    currentLoop = trialsBlock
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsBlock.rgb)
    if thisTrialsBlock != None:
        for paramName in thisTrialsBlock:
            exec('{} = thisTrialsBlock[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    trialsStimuli = data.TrialHandler(nReps=1.0, method='random', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions(cond_file),
        seed=None, name='trialsStimuli')
    thisExp.addLoop(trialsStimuli)  # add the loop to the experiment
    thisTrialsstimulu = trialsStimuli.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisTrialsstimulu.rgb)
    if thisTrialsstimulu != None:
        for paramName in thisTrialsstimulu:
            exec('{} = thisTrialsstimulu[paramName]'.format(paramName))
    
    for thisTrialsstimulu in trialsStimuli:
        currentLoop = trialsStimuli
        # abbreviate parameter names if possible (e.g. rgb = thisTrialsstimulu.rgb)
        if thisTrialsstimulu != None:
            for paramName in thisTrialsstimulu:
                exec('{} = thisTrialsstimulu[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "blank1000"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        blank1000Components = [textBlankWaitOneSecond]
        for thisComponent in blank1000Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        blank1000Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "blank1000"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = blank1000Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=blank1000Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *textBlankWaitOneSecond* updates
            if textBlankWaitOneSecond.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                textBlankWaitOneSecond.frameNStart = frameN  # exact frame index
                textBlankWaitOneSecond.tStart = t  # local t and not account for scr refresh
                textBlankWaitOneSecond.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(textBlankWaitOneSecond, 'tStartRefresh')  # time at next scr refresh
                textBlankWaitOneSecond.setAutoDraw(True)
            if textBlankWaitOneSecond.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > textBlankWaitOneSecond.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    textBlankWaitOneSecond.tStop = t  # not accounting for scr refresh
                    textBlankWaitOneSecond.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(textBlankWaitOneSecond, 'tStopRefresh')  # time at next scr refresh
                    textBlankWaitOneSecond.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in blank1000Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "blank1000"-------
        for thisComponent in blank1000Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "showImage"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        imageScramble.setImage('resources/' + File_Name)
        # keep track of which components have finished
        showImageComponents = [imageScramble]
        for thisComponent in showImageComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        showImageClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "showImage"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = showImageClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=showImageClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *imageScramble* updates
            if imageScramble.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                imageScramble.frameNStart = frameN  # exact frame index
                imageScramble.tStart = t  # local t and not account for scr refresh
                imageScramble.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(imageScramble, 'tStartRefresh')  # time at next scr refresh
                imageScramble.setAutoDraw(True)
            if imageScramble.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > imageScramble.tStartRefresh + 1-frameTolerance:
                    # keep track of stop time/frame for later
                    imageScramble.tStop = t  # not accounting for scr refresh
                    imageScramble.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(imageScramble, 'tStopRefresh')  # time at next scr refresh
                    imageScramble.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in showImageComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "showImage"-------
        for thisComponent in showImageComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "blank1000"-------
        continueRoutine = True
        routineTimer.add(1.000000)
        # update component parameters for each repeat
        # keep track of which components have finished
        blank1000Components = [textBlankWaitOneSecond]
        for thisComponent in blank1000Components:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        blank1000Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "blank1000"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = blank1000Clock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=blank1000Clock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *textBlankWaitOneSecond* updates
            if textBlankWaitOneSecond.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                textBlankWaitOneSecond.frameNStart = frameN  # exact frame index
                textBlankWaitOneSecond.tStart = t  # local t and not account for scr refresh
                textBlankWaitOneSecond.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(textBlankWaitOneSecond, 'tStartRefresh')  # time at next scr refresh
                textBlankWaitOneSecond.setAutoDraw(True)
            if textBlankWaitOneSecond.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > textBlankWaitOneSecond.tStartRefresh + 1.0-frameTolerance:
                    # keep track of stop time/frame for later
                    textBlankWaitOneSecond.tStop = t  # not accounting for scr refresh
                    textBlankWaitOneSecond.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(textBlankWaitOneSecond, 'tStopRefresh')  # time at next scr refresh
                    textBlankWaitOneSecond.setAutoDraw(False)
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in blank1000Components:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "blank1000"-------
        for thisComponent in blank1000Components:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        
        # ------Prepare to start Routine "randomizeColors"-------
        continueRoutine = True
        # update component parameters for each repeat
        # array for the stimuli
        colors = []
        colors.append(color1)
        colors.append(color2)
        colors.append(color3)
        colors.append(color4)
        colors.append(color5)
        colors.append(color6)
        colors.append(color7)
        colors.append(color8)
        
        # index array (which color did they choose based on the UNRANDOMIZED list)
        ids = [1,2,3,4,5,6,7,8]
        
        temp = list(zip(colors,ids))
        
        # shuffle color order
        random.shuffle(temp)
        
        colors, ids = zip(*temp)
        # keep track of which components have finished
        randomizeColorsComponents = []
        for thisComponent in randomizeColorsComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        randomizeColorsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "randomizeColors"-------
        while continueRoutine:
            # get current time
            t = randomizeColorsClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=randomizeColorsClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in randomizeColorsComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "randomizeColors"-------
        for thisComponent in randomizeColorsComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        # the Routine "randomizeColors" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
        
        # ------Prepare to start Routine "trialSelection"-------
        continueRoutine = True
        # update component parameters for each repeat
        firstChoice.setFillColor([float(i)*2-1 for i in colors[0].split(',')])
        firstChoice.setLineColor([float(i)*2-1 for i in colors[0].split(',')])
        secondChoice.setFillColor([float(i)*2-1 for i in colors[1].split(',')])
        secondChoice.setLineColor([float(i)*2-1 for i in colors[1].split(',')])
        thirdChoice.setFillColor([float(i)*2-1 for i in colors[2].split(',')])
        thirdChoice.setLineColor([float(i)*2-1 for i in colors[2].split(',')])
        fourthChoice.setFillColor([float(i)*2-1 for i in colors[3].split(',')])
        fourthChoice.setLineColor([float(i)*2-1 for i in colors[3].split(',')])
        fifthChoice.setFillColor([float(i)*2-1 for i in colors[4].split(',')])
        fifthChoice.setLineColor([float(i)*2-1 for i in colors[4].split(',')])
        sixthChoice.setFillColor([float(i)*2-1 for i in colors[5].split(',')])
        sixthChoice.setLineColor([float(i)*2-1 for i in colors[5].split(',')])
        seventhChoice.setFillColor([float(i)*2-1 for i in colors[6].split(',')])
        seventhChoice.setLineColor([float(i)*2-1 for i in colors[6].split(',')])
        eighthChoice.setFillColor([float(i)*2-1 for i in colors[7].split(',')])
        eighthChoice.setLineColor([float(i)*2-1 for i in colors[7].split(',')])
        # setup some python lists for storing info about the mouseResponse
        mouseResponse.x = []
        mouseResponse.y = []
        mouseResponse.leftButton = []
        mouseResponse.midButton = []
        mouseResponse.rightButton = []
        mouseResponse.time = []
        mouseResponse.clicked_name = []
        mouseResponse.clicked_fillColor = []
        gotValidClick = False  # until a click is received
        # keep track of which components have finished
        trialSelectionComponents = [firstChoice, secondChoice, thirdChoice, fourthChoice, fifthChoice, sixthChoice, seventhChoice, eighthChoice, mouseResponse]
        for thisComponent in trialSelectionComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        trialSelectionClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "trialSelection"-------
        while continueRoutine:
            # get current time
            t = trialSelectionClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=trialSelectionClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *firstChoice* updates
            if firstChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                firstChoice.frameNStart = frameN  # exact frame index
                firstChoice.tStart = t  # local t and not account for scr refresh
                firstChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(firstChoice, 'tStartRefresh')  # time at next scr refresh
                firstChoice.setAutoDraw(True)
            
            # *secondChoice* updates
            if secondChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                secondChoice.frameNStart = frameN  # exact frame index
                secondChoice.tStart = t  # local t and not account for scr refresh
                secondChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(secondChoice, 'tStartRefresh')  # time at next scr refresh
                secondChoice.setAutoDraw(True)
            
            # *thirdChoice* updates
            if thirdChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                thirdChoice.frameNStart = frameN  # exact frame index
                thirdChoice.tStart = t  # local t and not account for scr refresh
                thirdChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(thirdChoice, 'tStartRefresh')  # time at next scr refresh
                thirdChoice.setAutoDraw(True)
            
            # *fourthChoice* updates
            if fourthChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fourthChoice.frameNStart = frameN  # exact frame index
                fourthChoice.tStart = t  # local t and not account for scr refresh
                fourthChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fourthChoice, 'tStartRefresh')  # time at next scr refresh
                fourthChoice.setAutoDraw(True)
            
            # *fifthChoice* updates
            if fifthChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                fifthChoice.frameNStart = frameN  # exact frame index
                fifthChoice.tStart = t  # local t and not account for scr refresh
                fifthChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(fifthChoice, 'tStartRefresh')  # time at next scr refresh
                fifthChoice.setAutoDraw(True)
            
            # *sixthChoice* updates
            if sixthChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                sixthChoice.frameNStart = frameN  # exact frame index
                sixthChoice.tStart = t  # local t and not account for scr refresh
                sixthChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(sixthChoice, 'tStartRefresh')  # time at next scr refresh
                sixthChoice.setAutoDraw(True)
            
            # *seventhChoice* updates
            if seventhChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                seventhChoice.frameNStart = frameN  # exact frame index
                seventhChoice.tStart = t  # local t and not account for scr refresh
                seventhChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(seventhChoice, 'tStartRefresh')  # time at next scr refresh
                seventhChoice.setAutoDraw(True)
            
            # *eighthChoice* updates
            if eighthChoice.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                eighthChoice.frameNStart = frameN  # exact frame index
                eighthChoice.tStart = t  # local t and not account for scr refresh
                eighthChoice.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(eighthChoice, 'tStartRefresh')  # time at next scr refresh
                eighthChoice.setAutoDraw(True)
            # *mouseResponse* updates
            if mouseResponse.status == NOT_STARTED and t >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                mouseResponse.frameNStart = frameN  # exact frame index
                mouseResponse.tStart = t  # local t and not account for scr refresh
                mouseResponse.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(mouseResponse, 'tStartRefresh')  # time at next scr refresh
                mouseResponse.status = STARTED
                mouseResponse.mouseClock.reset()
                prevButtonState = mouseResponse.getPressed()  # if button is down already this ISN'T a new click
            if mouseResponse.status == STARTED:  # only update if started and not finished!
                buttons = mouseResponse.getPressed()
                if buttons != prevButtonState:  # button state changed?
                    prevButtonState = buttons
                    if sum(buttons) > 0:  # state changed to a new click
                        # check if the mouse was inside our 'clickable' objects
                        gotValidClick = False
                        try:
                            iter([firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice,sixthChoice,seventhChoice,eighthChoice])
                            clickableList = [firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice,sixthChoice,seventhChoice,eighthChoice]
                        except:
                            clickableList = [[firstChoice,secondChoice,thirdChoice,fourthChoice,fifthChoice,sixthChoice,seventhChoice,eighthChoice]]
                        for obj in clickableList:
                            if obj.contains(mouseResponse):
                                gotValidClick = True
                                mouseResponse.clicked_name.append(obj.name)
                                mouseResponse.clicked_fillColor.append(obj.fillColor)
                        x, y = mouseResponse.getPos()
                        mouseResponse.x.append(x)
                        mouseResponse.y.append(y)
                        buttons = mouseResponse.getPressed()
                        mouseResponse.leftButton.append(buttons[0])
                        mouseResponse.midButton.append(buttons[1])
                        mouseResponse.rightButton.append(buttons[2])
                        mouseResponse.time.append(mouseResponse.mouseClock.getTime())
                        if gotValidClick:  # abort routine on response
                            continueRoutine = False
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in trialSelectionComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "trialSelection"-------
        for thisComponent in trialSelectionComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        trialsStimuli.addData('fourthChoice.started', fourthChoice.tStartRefresh)
        trialsStimuli.addData('fourthChoice.stopped', fourthChoice.tStopRefresh)
        trialsStimuli.addData('fifthChoice.started', fifthChoice.tStartRefresh)
        trialsStimuli.addData('fifthChoice.stopped', fifthChoice.tStopRefresh)
        # store data for trialsStimuli (TrialHandler)
        if len(mouseResponse.x): trialsStimuli.addData('mouseResponse.x', mouseResponse.x[0])
        if len(mouseResponse.y): trialsStimuli.addData('mouseResponse.y', mouseResponse.y[0])
        if len(mouseResponse.leftButton): trialsStimuli.addData('mouseResponse.leftButton', mouseResponse.leftButton[0])
        if len(mouseResponse.midButton): trialsStimuli.addData('mouseResponse.midButton', mouseResponse.midButton[0])
        if len(mouseResponse.rightButton): trialsStimuli.addData('mouseResponse.rightButton', mouseResponse.rightButton[0])
        if len(mouseResponse.time): trialsStimuli.addData('mouseResponse.time', mouseResponse.time[0])
        if len(mouseResponse.clicked_name): trialsStimuli.addData('mouseResponse.clicked_name', mouseResponse.clicked_name[0])
        if len(mouseResponse.clicked_fillColor): trialsStimuli.addData('mouseResponse.clicked_fillColor', mouseResponse.clicked_fillColor[0])
        trials.addData('stimulus',File_Name)
        
        # get the user's selection position
        selectedSquare = mouseResponse.clicked_name[0]
        trials.addData('selectionLocation',selectedSquare)
        
        # map the selected position to the index of the corresponding color
        id = -1 # error
        if selectedSquare==('firstChoice'):
            id = 0
        elif selectedSquare==('secondChoice'):
            id = 1
        elif selectedSquare==('thirdChoice'):
            id = 2
        elif selectedSquare==('fourthChoice'):
            id = 3
        elif selectedSquare==('fifthChoice'):
            id = 4
        elif selectedSquare==('sixthChoice'):
            id = 5
        elif selectedSquare==('seventhChoice'):
            id = 6
        elif selectedSquare==('eighthChoice'):
            id = 7
        
        trials.addData('selectionId',ids[id])
        trials.addData('choice',colors[id])
        trials.nextEntry()
        # the Routine "trialSelection" was not non-slip safe, so reset the non-slip timer
        routineTimer.reset()
    # completed 1.0 repeats of 'trialsStimuli'
    
# completed 1.0 repeats of 'trialsBlock'


# ------Prepare to start Routine "GoodbyeScreen"-------
continueRoutine = True
# update component parameters for each repeat
keyEndTrial.keys = []
keyEndTrial.rt = []
_keyEndTrial_allKeys = []
# keep track of which components have finished
GoodbyeScreenComponents = [goodbyeText, keyEndTrial]
for thisComponent in GoodbyeScreenComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
GoodbyeScreenClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "GoodbyeScreen"-------
while continueRoutine:
    # get current time
    t = GoodbyeScreenClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=GoodbyeScreenClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *goodbyeText* updates
    if goodbyeText.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        goodbyeText.frameNStart = frameN  # exact frame index
        goodbyeText.tStart = t  # local t and not account for scr refresh
        goodbyeText.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(goodbyeText, 'tStartRefresh')  # time at next scr refresh
        goodbyeText.setAutoDraw(True)
    
    # *keyEndTrial* updates
    waitOnFlip = False
    if keyEndTrial.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        keyEndTrial.frameNStart = frameN  # exact frame index
        keyEndTrial.tStart = t  # local t and not account for scr refresh
        keyEndTrial.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(keyEndTrial, 'tStartRefresh')  # time at next scr refresh
        keyEndTrial.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(keyEndTrial.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(keyEndTrial.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if keyEndTrial.status == STARTED and not waitOnFlip:
        theseKeys = keyEndTrial.getKeys(keyList=['space'], waitRelease=False)
        _keyEndTrial_allKeys.extend(theseKeys)
        if len(_keyEndTrial_allKeys):
            keyEndTrial.keys = _keyEndTrial_allKeys[-1].name  # just the last key pressed
            keyEndTrial.rt = _keyEndTrial_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in GoodbyeScreenComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "GoodbyeScreen"-------
for thisComponent in GoodbyeScreenComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('goodbyeText.started', goodbyeText.tStartRefresh)
thisExp.addData('goodbyeText.stopped', goodbyeText.tStopRefresh)
# check responses
if keyEndTrial.keys in ['', [], None]:  # No response was made
    keyEndTrial.keys = None
thisExp.addData('keyEndTrial.keys',keyEndTrial.keys)
if keyEndTrial.keys != None:  # we had a response
    thisExp.addData('keyEndTrial.rt', keyEndTrial.rt)
thisExp.nextEntry()
# the Routine "GoodbyeScreen" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
