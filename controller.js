var lockedDown = true;
function toggleLock(){
    if(lockedDown){
        document.getElementById('foreground').classList.remove('locked');
        document.getElementById('lockdown').classList.remove('lockdown');
        document.getElementById('menuBar').classList.remove('slide-left');
        document.getElementById('greeting').classList.remove('locked');
        lockedDown = false;
    } else {
        document.getElementById('foreground').classList.add('locked');
        document.getElementById('lockdown').classList.add('lockdown');
        document.getElementById('menuBar').classList.add('slide-left');
        document.getElementById('greeting').classList.add('locked');
        lockedDown = true;
    }
}

function completeReminder(reminder){
    document.getElementById(reminder).classList.add('is-success');
    document.getElementById(reminder).classList.remove('is-dark');
}