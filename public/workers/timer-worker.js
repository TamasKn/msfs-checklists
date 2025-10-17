/**
 * Timer Web Worker
 * Provides a reliable timer that continues running even when the page is inactive or not in focus
 */

let timerId = null
let elapsedSeconds = 0
let isRunning = false

/**
 * Handle messages from the main thread
 */
self.onmessage = function (e) {
  const { type, payload } = e.data

  switch (type) {
    case 'START':
      startTimer(payload?.initialSeconds || 0)
      break

    case 'PAUSE':
      pauseTimer()
      break

    case 'RESUME':
      resumeTimer()
      break

    case 'RESET':
      resetTimer()
      break

    case 'GET_TIME':
      sendTimeUpdate()
      break

    case 'STOP':
      stopTimer()
      break

    default:
      console.warn('Unknown message type:', type)
  }
}

/**
 * Start the timer with an initial value
 * @param {number} initialSeconds - Starting seconds value
 */
function startTimer(initialSeconds) {
  elapsedSeconds = initialSeconds
  isRunning = true

  if (timerId) {
    clearInterval(timerId)
  }

  timerId = setInterval(() => {
    if (isRunning) {
      elapsedSeconds++
      sendTimeUpdate()
    }
  }, 1000)

  sendTimeUpdate()
  sendStatus('started')
}

/**
 * Pause the timer
 */
function pauseTimer() {
  isRunning = false
  sendTimeUpdate()
  sendStatus('paused')
}

/**
 * Resume the timer
 */
function resumeTimer() {
  isRunning = true
  sendStatus('resumed')
}

/**
 * Reset the timer to zero
 */
function resetTimer() {
  elapsedSeconds = 0
  isRunning = false
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  sendTimeUpdate()
  sendStatus('reset')
}

/**
 * Stop the timer completely
 */
function stopTimer() {
  isRunning = false
  if (timerId) {
    clearInterval(timerId)
    timerId = null
  }
  sendStatus('stopped')
}

/**
 * Send current time to main thread
 */
function sendTimeUpdate() {
  self.postMessage({
    type: 'TIME_UPDATE',
    payload: {
      elapsedSeconds,
      isRunning
    }
  })
}

/**
 * Send status update to main thread
 * @param {string} status - Status message
 */
function sendStatus(status) {
  self.postMessage({
    type: 'STATUS',
    payload: {
      status,
      elapsedSeconds,
      isRunning
    }
  })
}

