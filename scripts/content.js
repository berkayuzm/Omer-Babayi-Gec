let interval;
let  Episodes = [
    {
      title: "Kurtlar Vadisi 1. Bölüm",
      url: "https://www.youtube.com/watch?v=DkAHxvoA2Q8",
      sahneBaslangiclar: [2407, 3363],
      sahneBitisler: [2943, 3673],
    },
    {
      title: "Kurtlar Vadisi 2. Bölüm",
      url: "https://www.youtube.com/watch?v=lPigtgxb4Cg",
      sahneBaslangiclar: [705, 1127, 3150],
      sahneBitisler: [970, 1278, 3234],
    },
    {
      title: "Kurtlar Vadisi 3. Bölüm",
      url: "https://www.youtube.com/watch?v=sEBuF0hVRbc",
      sahneBaslangiclar: [477],
      sahneBitisler: [619],
    },
    {
      title: "Kurtlar Vadisi 4. Bölüm",
      url: "https://www.youtube.com/watch?v=YdlTLOQGagU",
      sahneBaslangiclar: [510],
      sahneBitisler: [688],
    },
    {
      title: "Kurtlar Vadisi 5. Bölüm",
      url: "https://www.youtube.com/watch?v=WyXjWs3qXHk",
      sahneBaslangiclar: [1403],
      sahneBitisler: [1543],
    },
    {
      title: "Kurtlar Vadisi 6. Bölüm",
      url: "https://www.youtube.com/watch?v=yaNZXFBiJvU",
      sahneBaslangiclar: [2268],
      sahneBitisler: [2602],
    },
    {
      title: "Kurtlar Vadisi 7. Bölüm",
      url: "https://www.youtube.com/watch?v=fFUbQGIOhy8",
      sahneBaslangiclar: [2946],
      sahneBitisler: [3170],
    },
  ];
  

function getCurrentTime(episode) {
  console.log(episode.title);
  video = document.getElementsByClassName("video-stream")[0];
  let currentTime = video.currentTime;
  episode.sahneBaslangiclar.map((baslangic, baslangicIndex) => {
    if (currentTime >= baslangic) {
      episode.sahneBitisler.map((bitis, bitisIndex) => {
        if (currentTime <= bitis) {
          if (baslangicIndex === bitisIndex) {
            video.currentTime = bitis;
          }
        }
      });
    }
  });
  console.log(Math.floor(video.currentTime));
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "TabUpdated") {
    clearInterval(interval);
    for (let index = 0; index < Episodes.length; index++) {
      if (Episodes[index].url === document.location.href) {
        interval = setInterval(() => {
          getCurrentTime(Episodes[index]);
        }, 1000);
        break;
      } else {
        clearInterval(interval);
      }
    }
  }
});