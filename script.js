// src/script.js
import { app } from '../firebaseConfig.js';
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Other code...

// Function to add a new user to Firestore
async function addNewUser(data) {
  const db = getFirestore(app);
  const docRef = await addDoc(collection(db, "users"), data);
  console.log("Document written with ID: ", docRef.id);
}

// Example usage
addNewUser({ name: "John Doe", email: "john.doe@example.com" });

// Other code...
   
    subscribeButton.addEventListener('click', () => {
        const channelId = 'https://www.youtube.com/channel/UCZ5heNyv3s5dIw9mtjsAGsg'; // You are not using this variable
        const url = `https://www.youtube.com/channel/YOUR_CHANNEL_ID?sub_confirmation=1`;

        window.electronAPI.openExternal(url);
        isConnected = !isConnected;

        if (isConnected) {
            subscribeButton.classList.add('connected');
            subscribeButton.textContent = 'CONNECTED';
        } else {
            subscribeButton.classList.remove('connected');
            subscribeButton.textContent = 'CONNECT';
        }
   });

  
        


//my web_app js snippets from html
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
let watchTime = parseInt(localStorage.getItem('watchTime')) || 0;
let timerInterval = null;
let currentInterval = 10 * 60 * 60 * 1000; // Declare and initialize currentInterval
let isFirstCodeAfterReload = true; // Track if it's the first code after reload
const playPauseButton = document.getElementById('play-pause-button');
const videoId = 'fUehe82E5yU';
const videoContainer = document.getElementById('video-container');
const channelId = 'UCZ5heNyv3s5dIw9mtjsAGsg';
const codeDisplay = document.getElementById('code-display');
const progressBar = document.getElementById('progress-bar');

// Function to handle YouTube IFrame API ready event
function onYouTubeIframeAPIReady() {
    createPlayer(videoId);
}

// Function to handle player ready event
function onPlayerReady(event) {
    enableTheatreMode(event.target);
    event.target.playVideo();
    if (lastPlaybackTime > 0) {
        event.target.seekTo(lastPlaybackTime);
    }

      // Move player-dependent logic here
      if (player && player.getPlayerState() === YT.PlayerState.PLAYING) {
        startCounter();
    }

    // Hide recommended videos on pause
    player.getIframe().contentWindow.document.querySelector('video').addEventListener('pause', hideRecommendedVideos);
}

// Function to create the YouTube player
document.addEventListener('DOMContentLoaded', () => {
    // Load watch time from localStorage if available
    if (localStorage.getItem('watchTime')) {
        watchTime = parseInt(localStorage.getItem('watchTime'));
    } else {
        watchTime = 0; // Default to 0 if no saved time exists
    }
    

    // Update the counter display with the retrieved watch time
    updateCounterDisplay();
    

    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'hidden') {
            // Pause the counter when the page is not visible
            pauseCounter();
        } else {
            // Resume the counter when the page becomes visible again
            startCounter();
        }

       
    


    // Generate a unique code for the user if not already generated
    const codeFromStorage = localStorage.getItem('uniqueCode');
    console.log('Code from storage:', codeFromStorage); // Check the retrieved code
    if (!codeFromStorage && !localStorage.getItem('uniqueCode')) {
        generateCode();
    } else {
        codeDisplay.textContent = codeFromStorage;
    }
});

try {
    generateCode();
} catch (error) {
    console.error('Error generating code:', error);
}

   // Block page reload actions
   document.addEventListener('keydown', (e) => {
        // Block F5, Ctrl+R, and Command+R
        if (e.key === 'F5' || (e.ctrlKey && e.key === 'R') || (e.metaKey && e.key === 'R')) {
            e.preventDefault();
        }
    });
    
   
    // Sound Button Functionality
    const soundButton = document.getElementById('sound-button');
    soundButton.addEventListener('click', () => {
        if (player.isMuted()) {
            player.unMute();
            soundButton.textContent = '';
        } else {
            player.mute();
            soundButton.textContent = '';
        }
    });

    // Modified play/pause button functionality
let pressTimer;
const playPauseButton = document.getElementById('play-pause-button');

// Normal click functionality
playPauseButton.addEventListener('click', () => {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
});

// Long press functionality
playPauseButton.addEventListener('mousedown', startTimer);
playPauseButton.addEventListener('mouseup', cancelTimer);
playPauseButton.addEventListener('mouseleave', cancelTimer);

// Touch events for mobile
playPauseButton.addEventListener('touchstart', startTimer);
playPauseButton.addEventListener('touchend', cancelTimer);
playPauseButton.addEventListener('touchcancel', cancelTimer);

function startTimer(e) {
    e.preventDefault();
    pressTimer = window.setTimeout(() => {
        // Pause the counter before redirecting
        stopCounter();
        window.open(`https://www.youtube.com/channel/${channelId}?sub_confirmation=1`, '_blank');
    }, 3000);
}
function cancelTimer() {
    if (pressTimer) {
        window.clearTimeout(pressTimer);
        pressTimer = null;
    }
}

// Keep subscribe button visible but non-functional
subscribeButton.style.cursor = 'default';
subscribeButton.onclick = null;

    
    // Prevent interaction with the video container
    touchOverlay.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Check internet connection periodically
    setInterval(checkInternetConnection, 5000);

    // Lock screen orientation to portrait
    lockScreenOrientation();
});



function createPlayer(videoId) {
    if (typeof YT === 'undefined' || !YT.Player) {
        console.error("YouTube Player API not loaded yet.");
        return; // Exit early if YT is not defined
    }
    player = new YT.Player('video-container', {
        height: '450',
        width: '800',
        videoId: videoId,
        playerVars: {
            controls: 0, // Hide controls
            disablekb: 1, // Disable keyboard controls
            autoplay: 1, // Auto-play the video
            modestbranding: 1, // Hide YouTube logo
            rel: 0// Prevent related videos from appearing at the end
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError // Add error event listener
        }
    });
}

function onPlayerError(event) {
    console.error('Error with the player:', event.data);
    switchToNextSection();
}


 // Toggle Button Functionality
const toggleButton = document.getElementById('toggle-button');
let currentVideoIndex = 0;
const videoIds = [
    'PLD60YBjiIjQPryp_T2IdNm9fukceO8AtN', // Home (Playlist ID)
    'SJUH0qthtCA', // Nour (Single Video ID)
    'fUehe82E5yU', 'Mw-lmUzkiY0', // Afra7 (Single Video ID)
];
const videoNames = ['Home', 'Nour', 'Afra7'];

toggleButton.addEventListener('click', () => {
    const currentTime = player.getCurrentTime();
    const nextVideoIndex = (currentVideoIndex + 1) % videoIds.length;

    // Save playback time and index for the current video/playlist
    localStorage.setItem(videoIds[currentVideoIndex], JSON.stringify({
        time: currentTime,
        index: player.getPlaylistIndex ? player.getPlaylistIndex() : 0
    }));

    currentVideoIndex = nextVideoIndex;

    // Load the new video/playlist; always start from the saved time or 0 if none saved
    let startSeconds = 0;
    let startIndex = 0;
    if (currentVideoIndex !== 2) {
        const savedData = JSON.parse(localStorage.getItem(videoIds[currentVideoIndex])) || {};
        startSeconds = savedData.time || 0;
        startIndex = savedData.index || 0;
    }

    // Load the playlist for Home, or the single video for Nour and Afra7
    if (currentVideoIndex === 1 || currentVideoIndex === 2) { // Nour or Afra7 (Single Video)
        player.loadVideoById({
            videoId: videoIds[currentVideoIndex],
            startSeconds: startSeconds
        });
    } else { // Home (Playlist)
        player.loadPlaylist({
            listType: 'playlist',
            list: videoIds[currentVideoIndex], // Use the playlist ID directly
            index: startIndex, // Continue from the last saved index
            startSeconds: startSeconds // Continue from the last saved time
        });
    }

    // Update button text to show the next video's name
    toggleButton.textContent = videoNames[currentVideoIndex];
});

// Pause counter when leaving the page
window.addEventListener('beforeunload', () => {
    stopCounter();
});

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        if (!timerInterval) {
            let startTime = Date.now() - watchTime;
            timerInterval = setInterval(() => {
                watchTime = Date.now() - startTime;
                localStorage.setItem('watchTime', watchTime);
                updateCounterDisplay();

                const currentTime = player.getCurrentTime();
                localStorage.setItem('lastPlaybackTime', currentTime);

                // Check if 5 minutes have passed
                if (watchTime % (5 * 60 * 1000) < 10) {
                    console.log("5 minutes have passed, generating new code");
                    const newCode = generateCode();
                    localStorage.setItem('uniqueCode', newCode);
                    codeDisplay.textContent = newCode;
                    progressBar.style.width = '0%';
                }

                const progress = (watchTime % (5 * 60 * 1000)) / (5 * 60 * 1000) * 100;
                progressBar.style.width = `${progress}%`;
            }, 10);
        }
    } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.BUFFERING) {
        stopCounter();
    } else if (event.data === YT.PlayerState.ENDED) {
        stopCounter();
        
    
        // Check if the last video in the playlist has ended
        if (videoIds[currentVideoIndex] === 'PLD60YBjiIjQPryp_T2IdNm9fukceO8AtN') { // Home (Playlist)
            // Retrieve the saved playback state for the Home playlist
            const savedData = JSON.parse(localStorage.getItem(videoIds[currentVideoIndex])) || {};
            const startSeconds = savedData.time || 0; // Last saved playback time
            const startIndex = savedData.index || 0; // Last saved playlist index

            // Loop the Home playlist from the last saved state
            player.loadPlaylist({
                listType: 'playlist',
                list: videoIds[currentVideoIndex], // Use the playlist ID directly
                index: startIndex, // Continue from the last saved index
                startSeconds: startSeconds // Continue from the last saved time
            });
        } else if (videoIds[currentVideoIndex] === 'fUehe82E5yU') { // Afra7 (Single Video)
            // Loop the Afra7 video
            player.loadVideoById({
                videoId: videoIds[currentVideoIndex],
                startSeconds: 0 // Start from the beginning
            });
        } else {
            // Move to the next video in the playlist
            player.nextVideo();
        }
    }
}
function switchToNextSection() {
    // Define your sections and their corresponding video IDs
    const sections = [
        { id: 'Home', videoId: 'PLD60YBjiIjQPryp_T2IdNm9fukceO8AtN' },
        { id: 'Nour', videoId: 'SJUH0qthtCA' },
        { id: 'Afra7', videoId: 'fUehe82E5yU' }
        // Add more sections as needed
    ];
    // Find the current section index
    const currentSectionIndex = sections.findIndex(section => section.id === 'Nour');

    if (currentSectionIndex > -1) {
        // If not the first section, load the previous section
        player.loadVideoById({
            videoId: sections[currentSectionIndex - 1].videoId,
            startSeconds: 0
        });
    } else {
        // If it's the first section, load the next one
        player.loadVideoById({
            videoId: sections[currentSectionIndex + 1].videoId,
            startSeconds: 0
        });
    }
}


    // Prevent interaction with the video container
    const touchOverlay = document.querySelector('.touch-overlay');
    touchOverlay.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    // Check internet connection periodically
    setInterval(checkInternetConnection, 5000);

    
// Function to convert time in milliseconds to hours, minutes, and seconds
function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const decisecondsPart = Math.floor((milliseconds % 1000) / 10);
    const seconds = totalSeconds % 60;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);
    const formattedDeciseconds = String(decisecondsPart).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedHours = String(hours).padStart(4, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}.${formattedDeciseconds}`;
}



function generateCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    
    // Generate FAKE code only once per reload
    if (isFirstCodeAfterReload) {
        code = 'FAKE-'; 
        for (let i = 0; i < 18; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
            if ((i + 4 + 1) % 4 === 0 && i < 17) code += '-';
        }
        isFirstCodeAfterReload = false; // Disable FAKE after first generation
    } else {
        // Normal code generation
        for (let i = 0; i < 22; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
            if ((i + 1) % 4 === 0 && i < 21) code += '-';
        }
    }

    localStorage.setItem('uniqueCode', code);
    codeDisplay.textContent = code;
    return code;
}




   
// Function to start the counter
function startCounter() {
    if (!timerInterval) {
        let startTime = Date.now() - watchTime;
        timerInterval = setInterval(() => {
            watchTime = Date.now() - startTime;
            localStorage.setItem('watchTime', watchTime);
            updateCounterDisplay();
            updateProgressBar();

            const currentTime = player.getCurrentTime();
            localStorage.setItem('lastPlaybackTime', currentTime);

            const nextCodeGenerationTime = parseInt(localStorage.getItem('nextCodeGenerationTime'));
            const progress = calculateProgress(watchTime, nextCodeGenerationTime);
            document.getElementById('progress-text').textContent = `${progress.toFixed(2)}%`;

            console.log('watchTime:', watchTime);
            console.log('nextCodeGenerationTime:', nextCodeGenerationTime);
            console.log('progress:', progress);

            if (progress === 100) {
                generateCode();
                resetProgress();
            }

            if (watchTime >= 9999 * 60 * 60 * 1000) {
                watchTime = 0;
                localStorage.setItem('watchTime', watchTime);
                updateCounterDisplay();
            }
        }, 10);
    }
}

function stopCounter() {
    clearInterval(timerInterval);
    timerInterval = null;
    // Optional: Reset watchTime if needed
    // watchTime = 0;
}


// Function to reset the counter
function resetCounter() {
    watchTime = 0;
    localStorage.setItem('watchTime', watchTime);
    updateCounterDisplay();
    clearInterval(timerInterval);
    timerInterval = null;
}



// Function to reset progress and start over
function resetProgress() {
    localStorage.setItem('nextCodeGenerationTime', Date.now() + currentInterval);
    updateProgressBar();
    console.log('Progress reset. New nextCodeGenerationTime:', localStorage.getItem('nextCodeGenerationTime'));
}

// Ensure initial value of nextCodeGenerationTime
if (!localStorage.getItem('nextCodeGenerationTime')) {
    localStorage.setItem('nextCodeGenerationTime', Date.now() + currentInterval);
    console.log('Initialized nextCodeGenerationTime:', localStorage.getItem('nextCodeGenerationTime'));
}

// Verify codeDisplay element
console.log('codeDisplay element:', document.getElementById('codeDisplay'));

// Function to update the counter display
function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        const time = formatTime(watchTime);
        const digits = time.split('').map(digit => `
            <span>
                ${digit}
                <span class="shine"></span>
            </span>
        `).join('');
        counterElement.innerHTML = digits;
    } else {
        console.error("Counter element not found!"); // Handle the case where element isn't there
    }
}
// Function to safely set an item in localStorage
function safeSetItem(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        if (isQuotaExceededError(error)) {
            console.warn("LocalStorage is full. Cleaning up old data...");
            cleanupOldData();
            try {
                localStorage.setItem(key, value);
            } catch (retryError) {
                console.error("Failed to save to localStorage after cleanup:", retryError);
            }
        } else {
            console.error("Failed to save to localStorage:", error);
        }
    }
}

// Function to check if the error is due to exceeding localStorage quota
function isQuotaExceededError(error) {
    let quotaExceeded = false;
    if (error) {
        if (error.code) {
            switch (error.code) {
                case 22:
                    quotaExceeded = true;
                    break;
                case 1014:
                    if (error.name === 'QuotaExceededError' || error.name === 'NS_ERROR_DOM_QUOTA_REACHED') {
                        quotaExceeded = true;
                    }
                    break;
                default:
                    break;
            }
        } else if (error.number === -2147024882) {
            quotaExceeded = true;
        }
    }
    return quotaExceeded;
}

// Function to clean up old data in localStorage
function cleanupOldData() {
    const oneMonthAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    for (let i = localStorage.length - 1; i >= 0; i--) {
        const key = localStorage.key(i);
        try {
            const item = JSON.parse(localStorage.getItem(key));
            if (item.timestamp && item.timestamp < oneMonthAgo) {
                localStorage.removeItem(key);
                console.log(`Removed old item: ${key}`);
            }
        } catch (error) {
            console.warn(`Skipping invalid item: ${key}`);
        }
    }
}

// Call this function periodically or when you need to clean up old data
    setInterval(cleanupOldData, 86400000); // Run every 24 hours
// Function to calculate progress percentage
function calculateProgress(currentTime, nextCodeGenerationTime) {
    const totalTime = nextCodeGenerationTime - Date.now();
    const progress = (currentTime >= totalTime) ? 100 : (currentTime / totalTime) * 100;
    return Math.min(progress, 100); // Ensure progress does not exceed 100%
}

// Function to create and animate the first laser beam crossing over the code bar
function createLaserBeam() {
    const laserBeam = document.createElement('div');
    laserBeam.classList.add('laser-beam');
    laserBeam.style.left = '-100%';
    document.body.appendChild(laserBeam);

    setTimeout(() => {
        laserBeam.remove();
    }, 5000);
}

// Function to create and animate laser beams
function createAndAnimateLaserBeams() {
    const laserBeamCode = document.createElement('div');
    laserBeamCode.classList.add('laser-beam');
    laserBeamCode.style.left = '-100%';
    document.body.appendChild(laserBeamCode);

    setTimeout(() => {
        laserBeamCode.remove();
        laserBeamCounter.remove();
    }, 2000);
}

// Call the laser beam functions at intervals
setInterval(createAndAnimateLaserBeams, 2000);

// Function to check subscription status
function checkSubscriptionStatus() {
    const isSubscribed = false; // Change this to true to simulate a subscribed user
    if (isSubscribed) {
        subscribeButton.textContent = 'Subscribed';
        subscribeButton.classList.add('subscribed');
    } else {
        subscribeButton.textContent = 'Subscribe';
        subscribeButton.classList.remove('subscribed');
    }
}



// Function to handle screen orientation changes
function handleOrientationChange() {
    const counterContainer = document.getElementById('counter-container');

    function updateOrientation() {
        if (screen.orientation.type.startsWith('landscape')) {
            // Hide the counter container in fullscreen mode
            counterContainer.style.display = 'none';
            enableTheatreMode(player);
        } else {
            // Show the counter container in normal mode
            counterContainer.style.display = 'flex';
            disableTheatreMode(player);
        }
    }

    // Listen for orientation changes
    screen.orientation.addEventListener('change', updateOrientation);

    // Initial check
    updateOrientation();
}

// Call the function to handle orientation changes
handleOrientationChange();







// Function to enable theatre mode
function enableTheatreMode(player) {
    const iframe = player.getIframe();
    iframe.classList.add('theatre-mode');
    document.body.classList.add('theatre-mode-active');
}

// Function to disable theatre mode
function disableTheatreMode(player) {
    const iframe = player.getIframe();
    iframe.classList.remove('theatre-mode');
    document.body.classList.remove('theatre-mode-active');
}



// Function to handle internet connection check
function checkInternetConnection() {
    // Implement your logic to check internet connection here
}

// Function to pause the counter

window.addEventListener('online', function() {
    // The browser is back online, you can restart the counter or any other logic here
    console.log('Browser is online');
});

window.addEventListener('offline', function() {
    // The browser is offline, pause the counter and show a message
    pauseCounter();
    console.log('Browser is offline');
});


function updateLaserBeamPosition() {
    const codeContainer = document.getElementById('code-container');
    const laserBeam = document.getElementById('laser-beam');

    if (codeContainer && laserBeam) {
        const containerRect = codeContainer.getBoundingClientRect();
        laserBeam.style.transform = `translateX(${containerRect.left}px)`;
    }
}

// Call the function to update the laser beam position on page load and resize
window.addEventListener('load', updateLaserBeamPosition);
window.addEventListener('resize', updateLaserBeamPosition);

var tag = document.createElement('script');
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
    console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');

    
        // Function to hide recommended videos

        function hideRecommendedVideos() {
            const recommendedVideos = document.querySelector('.recommended-videos-selector'); // Replace with actual selector
            if (recommendedVideos) {
                recommendedVideos.style.display = 'none'; // Hide recommended videos
            }
        }


            document.addEventListener('keydown', (e) => {
                // Block F5, Ctrl+R, and Command+R
                if (e.key === 'F5' || (e.ctrlKey && e.key === 'R') || (e.metaKey && e.key === 'R')) {
                    e.preventDefault();
                }
            });

        
            window.addEventListener('scroll', () => {
            window.scrollTo(0, 0);
            });
             // Call this function when the video is paused
            videoElement.addEventListener('pause', hideRecommendedVideos);

        document.addEventListener('contextmenu', (e) => e.preventDefault()); // Disable right-click
        document.addEventListener('click', (e) => {
            e.preventDefault(); // Disable click events on the page
        });


