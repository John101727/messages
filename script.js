document.getElementById('showPaperBtn').addEventListener('click', function() {
    // Toggle the "show" class on the paper element to trigger the sliding effect
    const paper = document.getElementById('paperContainer');
    paper.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("bg-audio");

    // Try to play audio after page loads
    let playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            // Wait for user interaction
            document.body.addEventListener("click", () => {
                audio.play();
            }, { once: true }); // Play only once on first click
        });
    }
});
