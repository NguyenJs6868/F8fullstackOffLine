var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

//Yêu cầu: Chuyển đổi hết thành phần trăm (%)

var handleUpdateValue = function (value) {
  progress.style.width = `${value}%`;
};

//Tính độ dài của progress-bar
var progressBarWidth = progressBar.clientWidth;
var isDrag = false; //Cắm cờ
var initialClientX;
var initialValue = 0;
var value;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    var offsetX = e.offsetX;
    value = (offsetX * 100) / progressBarWidth;
    initialValue = value;
    initialClientX = e.clientX;
    isDrag = true;
    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration; // Tua tay

    currentTimeEl.innerText = getTime(currentTime);

    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  if (e.which === 1) {
    isDrag = true;
    initialClientX = e.clientX;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var moveWidth = e.clientX - initialClientX;
    value = (moveWidth * 100) / progressBarWidth;
    value = initialValue + value;

    if (value < 0) {
      value = 0;
    }

    if (value > 100) {
      value = 100;
    }

    handleUpdateValue(value);

    var currentTime = (value / 100) * audio.duration;

    currentTimeEl.innerText = getTime(currentTime);

    timePreview.classList.remove("show");
    timePreview.innerText = 0;
    timePreview.style.left = 0;
  }
});

document.addEventListener("mouseup", function () {
  if (isDrag) {
    isDrag = false;
    initialValue = value;

    var currentTime = (value / 100) * audio.duration;
    audio.currentTime = currentTime;
  }
});

progressSpan.addEventListener("mousemove", function (e) {
  e.stopPropagation();
});

//Xây dựng trình phát nhạc
var audio = document.querySelector(".audio");

var durationEl = progressBar.nextElementSibling;

var currentTimeEl = progressBar.previousElementSibling;

var playBtn = document.querySelector(".play-btn");

var pauseBtnIcon = `<i class="fa-solid fa-pause"></i>`;

var playBtnIcon = `<i class="fa-solid fa-play"></i>`;

var timePreview = progressBar.querySelector(".time-preview");

var getTime = function (seconds) {
  //Giây => Phút và giây
  var mins = Math.floor(seconds / 60);
  seconds -= mins * 60;
  seconds = Math.floor(seconds);

  return `${mins < 10 ? `0${mins}` : mins}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
};
//Lắng nghe sự kiện load xong nhạc
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseBtnIcon;
  } else {
    audio.pause();
    this.innerHTML = playBtnIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  //Lấy ra tỷ lệ phần trăm dựa vào currentTime và duration
  var value = (audio.currentTime * 100) / audio.duration;

  if (!isDrag) {
    currentTimeEl.innerText = getTime(audio.currentTime);

    handleUpdateValue(value);
  }
});

progressBar.addEventListener("mousemove", function (e) {
  timePreview.classList.add("show");
  var rate = (e.offsetX * 100) / progressBarWidth;
  var currentTime = (rate / 100) * audio.duration;
  timePreview.innerText = getTime(currentTime);
  timePreview.style.left = `${e.offsetX}px`;
});

progressBar.addEventListener("mouseout", function () {
  timePreview.classList.remove("show");
  timePreview.innerText = 0;
  timePreview.style.left = 0;
});

audio.addEventListener("ended", function () {
  playBtn.innerHTML = playBtnIcon;
  handleUpdateValue(0);
  audio.currentTime = 0;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseBtnIcon;
});

audio.addEventListener("pause", function () {
  playBtn.innerHTML = playBtnIcon;
});


// Xây dựng tính năng karaoke
var karaoke = document.querySelector(".karaoke");
var karaokeInner = document.querySelector(".karaoke-inner");
var karaokContent = document.querySelector(".karaoke-content");
var closeBtn = document.querySelector(".close");
var karaokePlay = document.querySelector(".play");
var playerWrap = document.querySelector(".player-wrap");


karaokePlay.addEventListener("click", function() {
  console.log('hiện lời');
  karaoke.classList.add("show");
  playerWrap.classList.add("bottom");

});

closeBtn.addEventListener("click", function() {
  console.log('ẩn lời');
  karaoke.classList.remove("show");
  playerWrap.classList.remove("bottom");

});

console.log('lyric', lyric);

// Lắng nghê sự kiện
// x 1000  đổi sang mini giây
var currentScreen;
audio.addEventListener("timeupdate", function() {
  var currentTime = Math.floor(audio.currentTime * 1000);

  var index = lyric.findIndex(function (sentence) {
    sentence = sentence.words;
    return (
      currentTime >= sentence[0].startTime && currentTime <= sentence[sentence.length - 1].endTime
    )
  });

  // Lấy ra thời gian của từ đầu tiên
  // Hiện thị 2 câu đầu tiên nếu lời trước 5 giây
  var firstTime = lyric[0].words[0].startTime;
  var firstRange = currentTime - firstTime
  if(Math.abs(firstRange > -5000 && firstRange < 0)) {
    index = 0
  }

  var offset = (screen - 1) * 2; // đảm bảo lấy câu đầu

  if (index !== -1) {
    // karaokContent.innerHTML = `<p>${sentence}</p>`
    handleColor(currentTime)
    var screen  = Math.floor(index / 2 + 1); // + 1 đảm bảo có screen 1
    if (screen !== currentScreen) {
      console.log(screen);

      var offset = (screen - 1)  * 2; // loại từ các màn = 1?

      if (index >= offset && index < offset + 2) {
        var pTag = "";

        for (var i = offset; i < offset + 2; i++) {
          var sentence = lyric[i].words.map(function (item) {
            return item.data;
          }).join(" ");
          pTag += `<p
            data-start-time="${lyric[i].words[0].startTime}"
            data-end-time="${lyric[i].words[lyric[i].words.length - 1].endTime}">${sentence}
            data-words=${JSON.stringify(lyric[i].words)}
            <span>${sentence}</span>
          </p>`
          // Lấy đầu cuối
        }

        karaokContent.innerHTML = pTag;

      }
      currentScreen = screen; // Gán dòng cho đỡ bị render
    }
  }
});

var handleColor = function (currentTime) {
  console.log(currentTime);
  var sentenceEl = karaokContent.children;
  Array.from(sentenceEl).forEach(function() {

  })

  // So sánh curen với startTiem của từng tư -> Biết được đang hát tới từ nào trong 1 câu
  var word = JSON.parse(sentence.dataset.words)

  var word = words.find(function (item) { // lấy cái đầu tiên, lấy từng từ lấy cả end
    return currentTime >= item.startTime && currentTime <= item.endTime;
  })

  console.log(word);
  //
}