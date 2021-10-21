export default function FullScreen() {

    function getFullScreen() {
        return document.fullscreenElement
    }
    function toolgeFullScreen() {
        if (getFullScreen()) {
            document.exitFullScreen();
        } else {
            document.documentElement.requestFullscreen().catch((err) => { console.log(err) })
        }
    }

    document.addEventListener('fullbutt', () => {
        toolgeFullScreen()
    })


    return (
        <div>
            <button id="fullbutt" onClick={toolgeFullScreen}>FullScreen</button>
        </div>
    )
}