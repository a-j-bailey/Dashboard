var lockedDown = false;
function toggleLock(){
    if(lockedDown){
        document.getElementById('foreground').classList.remove('locked');
        lockedDown = false;
    } else {
        document.getElementById('foreground').classList.add('locked');
        lockedDown = true;
    }
}