const tick = () => {
    let i = loopNum % toRotate, length;
    let fullText = toRotate(i);
    let updateText = isDeleting ? fullText.substring(0, text-length - 1) : fullText.substring(0,text-length + 1);

    setText(updateText);

    if (isDeleting)
 {
    setDelta(prevDelta => prevDelta /2)
 }

 if (!isDeleting && updateText === fullText) {
    setDeleting(true);
    setDelta(period);
 } else if (isDeleting && updateText === fullText) {
    setIsDeleting(false);
    setLoopNum(loopNum + 1);
    setDelta(500);
 }
}

