// Select elements
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const awwMessage = document.getElementById('awwMessage');
const meme = document.getElementById('meme');
const giftBtn = document.getElementById('giftBtn');
const qrPopup = document.getElementById('qrPopup');
const backBtn = document.getElementById('backBtn');

let scaleFactor = 1.2;

// No Button Click (Increase Yes Button Size)
noBtn.addEventListener('click', () => {
    scaleFactor += 0.2;
    yesBtn.style.transform = `scale(${scaleFactor})`;
});

// Yes Button Click (Show Message & Meme)
yesBtn.addEventListener('click', () => {
    awwMessage.style.display = 'block';
    setTimeout(() => {
        awwMessage.style.opacity = '1';
        awwMessage.style.transform = 'translateY(0)';
    }, 50);

    meme.style.display = 'block';
    setTimeout(() => {
        meme.style.opacity = '1';
        meme.style.transform = 'scale(1)';
    }, 50);

    giftBtn.style.display = 'inline-block';
});

// Gift Button Click (Show QR Code Popup)
giftBtn.addEventListener('click', () => {
    giftBtn.innerText = "Send a Gift for Me!";
    qrPopup.style.display = 'block'; // Ensure it is visible first
    setTimeout(() => {
        qrPopup.classList.add('show'); // Apply the animation
    }, 10); // Short delay to trigger transition properly
});

// Back Button Click (Return to Main Screen)
backBtn.addEventListener('click', () => {
    qrPopup.classList.remove('show');
    setTimeout(() => {
        qrPopup.style.display = 'none';
        giftBtn.innerText = "A Gift";
    }, 300); // Delay hiding to match transition
});
