var clicks = 0;
var upgCost = 100;
var workerCost = 200;
var superWorkerCost = 1000;
var farmCost = 100000;
var multiplier = 1;
var workers = 0;
var superWorkers = 0;
var farms = 0;
var paused = false;
var expPriceMultiplier = 0;
var expPriceWorker = 0;
var expPriceSuperWorker = 0;
var expPriceFarm = 0;
var settingsOpen = false;
var achTrackerOpen = false;
var patchNotesOpen = false;
var difficulty = 2;
var achievements = 0;
var colorMode = 0;
var achSlot1 = true;
var achSlot2 = true;
var achSlot3 = true;
var colorMode = "dark";
var bundleAvailable = false;
var battling = false;
var multiplierBet = 0;
var workerBet = 0;
var superWorkerBet = 0;
var farmBet = 0;
var battleScore = 0;

const bundle = {
  multipliers: 0,
  workers: 0,
  superWorkers: 0,
  farms: 0,
  cost: 0,
};

const a = {
  banana1: false,
  banana2: false,
  banana3: false,
  banana4: false,
  multiplier1: false,
  multiplier2: false,
  multiplier3: false,
  multiplier4: false,
  workers1: false,
  workers2: false,
  workers3: false,
  workers4: false,
  superWorkers1: false,
  superWorkers2: false,
  superWorkers3: false,
  superWorkers4: false,
  farms1: false,
  farms2: false,
  farms3: false,
  farms4: false,
};

function bananaClick() {
  if (paused == false) {
    clicks += 1 * multiplier;
  }
}

function abbreviate(x) {
  var y;
  if (x < 10000) {
    y = x;
  } else if (x >= 10000 && x < 1000000) {
    y = (Math.round(x / 10) * 10) / 1000 + "K";
  } else if (x >= 1000000 && x < 1000000000) {
    y = (Math.round(x / 10000) * 10000) / 1000000 + "M";
  } else if (x >= 1000000000 && x < 1000000000000) {
    y = (Math.round(x / 10000000) * 10000000) / 1000000000 + "B";
  } else if (x >= 1000000000000 && x < 1000000000000000) {
    y = (Math.round(x / 10000000000) * 10000000000) / 1000000000000 + "t";
  } else if (x >= 1000000000000000) {
    y =
      (Math.round(x / 10000000000000) * 10000000000000) / 1000000000000000 +
      "q";
  }
  return y;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
  newBundle();
}, 90000);

function ach(title, reward) {
  if (achSlot1 == true) {
    achSlot1 = false;
    document.getElementById("achTitle").innerHTML = title.toString();
    document.getElementById("achReward").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement").style.opacity = opacity;
      document.getElementById("achievement").style.right = right + "px";
    });
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
    setTimeout(() => {
      var interval2 = setInterval(() => {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement").style.opacity = opacity;
        document.getElementById("achievement").style.right = right + "px";
      });
      setTimeout(() => {
        clearInterval(interval2);
        achSlot1 = true;
      }, 500);
    }, 3000);
  } else if (achSlot2 == true) {
    achSlot2 = false;
    document.getElementById("achTitle2").innerHTML = title.toString();
    document.getElementById("achReward2").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement2").style.opacity = opacity;
      document.getElementById("achievement2").style.right = right + "px";
    });
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
    setTimeout(() => {
      var interval2 = setInterval(() => {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement2").style.opacity = opacity;
        document.getElementById("achievement2").style.right = right + "px";
      });
      setTimeout(() => {
        clearInterval(interval2);
        achSlot2 = true;
      }, 500);
    }, 3000);
  } else if (achSlot3 == true) {
    achSlot3 = false;
    document.getElementById("achTitle3").innerHTML = title.toString();
    document.getElementById("achReward3").innerHTML = reward.toString();
    var opacity = 0;
    var right = -330;
    var interval = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.01;
      } else {
        opacity = 1;
      }
      if (right < 30) {
        right += 6;
      } else {
        right = 30;
      }
      document.getElementById("achievement3").style.opacity = opacity;
      document.getElementById("achievement3").style.right = right + "px";
    });
    setTimeout(() => {
      clearInterval(interval);
    }, 1000);
    setTimeout(() => {
      var interval2 = setInterval(() => {
        if (opacity > 0) {
          opacity -= 0.01;
        } else {
          opacity = 0;
        }
        if (right > -330) {
          right -= 6;
        } else {
          right = -330;
        }
        document.getElementById("achievement3").style.opacity = opacity;
        document.getElementById("achievement3").style.right = right + "px";
      });
      setTimeout(() => {
        clearInterval(interval2);
        achSlot3 = true;
      }, 500);
    }, 3000);
  } else {
    return;
  }
}

setInterval(() => {
  if (paused == false) {
    document.getElementById("clicks").innerHTML = abbreviate(clicks);
    document.getElementById("upgCost").innerHTML = abbreviate(upgCost);
    document.getElementById("workerCost").innerHTML = abbreviate(workerCost);
    document.getElementById("superWorkerCost").innerHTML =
      abbreviate(superWorkerCost);
    if (bundle.cost != 0) {
      document.getElementById("bundleCost").innerHTML = abbreviate(bundle.cost);
    } else {
      document.getElementById("bundleCost").innerHTML = "";
    }
    document.getElementById("farmCost").innerHTML = abbreviate(farmCost);
    document.getElementById("currentMultiplier").innerHTML = multiplier;
    document.getElementById("nextMultiplier").innerHTML = multiplier + 1;
    document.getElementById("currentWorkers").innerHTML = workers;
    document.getElementById("nextWorker").innerHTML = workers + 1;
    document.getElementById("currentSuperWorkers").innerHTML = superWorkers;
    document.getElementById("nextSuperWorker").innerHTML = superWorkers + 1;
    document.getElementById("currentFarms").innerHTML = farms;
    document.getElementById("nextFarm").innerHTML = farms + 1;
    document.getElementById("achCount").innerHTML = achievements;

    if (paused == false) {
      document.getElementById("pauseIcon").innerHTML = "pause";
    } else {
      document.getElementById("pauseIcon").innerHTML = "play_arrow";
    }

    if (a.banana2 == false) {
      document.getElementById("attackBtn").style.display = "none";
    } else {
      document.getElementById("attackBtn").style.display = "block";
    }

    if (difficulty == 2) {
      if (multiplier % 10 == 0 && expPriceMultiplier != multiplier / 10) {
        expPriceMultiplier++;
      }

      if (workers % 7 == 0 && expPriceWorker != workers / 7) {
        expPriceWorker++;
      }

      if (superWorkers % 5 == 0 && expPriceSuperWorker != superWorkers / 5) {
        expPriceSuperWorker++;
      }

      if (farms % 3 == 0 && expPriceFarm != farms / 3) {
        expPriceFarm++;
      }
    }

    if (difficulty == 3) {
      if (multiplier % 5 == 0 && expPriceMultiplier != multiplier / 5) {
        expPriceMultiplier++;
      }

      if (workers % 3 == 0 && expPriceWorker != workers / 3) {
        expPriceWorker++;
      }

      if (superWorkers % 2 == 0 && expPriceSuperWorker != superWorkers / 2) {
        expPriceSuperWorker++;
      }

      if (farms % 1 == 0 && expPriceFarm != farms / 1) {
        expPriceFarm++;
      }
    }

    if (clicks >= 1000 && a.banana1 == false) {
      ach("Reach 1000 Bananas", "+2x Multiplier");
      freeUpgrade();
      freeUpgrade();
      a.banana1 = true;
      achievements++;
    }
    if (clicks >= 100000 && a.banana2 == false) {
      ach("Reach 100K Bananas", "Battles Unlocked!");
      a.banana2 = true;
      achievements++;
    }
    if (clicks >= 1000000 && a.banana3 == false) {
      ach("Reach 1M Bananas", "+2 Farms");
      freeFarm();
      freeFarm();
      a.banana3 = true;
      achievements++;
    }
    if (clicks >= 1000000000 && a.banana4 == false) {
      ach("Reach 1B Bananas", "+20 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      a.banana4 = true;
      achievements++;
    }
    if (multiplier >= 20 && a.multiplier1 == false) {
      ach("Reach 20x Multiplier", "+5K Bananas");
      clicks += 5000;
      a.multiplier1 = true;
      achievements++;
    }
    if (multiplier >= 50 && a.multiplier2 == false) {
      ach("Reach 50x Multiplier", "+3 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      a.multiplier2 = true;
      achievements++;
    }
    if (multiplier >= 100 && a.multiplier3 == false) {
      ach("Reach 100x Multiplier", "+750K Bananas");
      clicks += 750000;
      a.multiplier3 = true;
      achievements++;
    }
    if (multiplier >= 750 && a.multiplier4 == false) {
      ach("Reach 750x Multiplier", "+10M Bananas");
      clicks += 10000000;
      a.multiplier4 = true;
      achievements++;
    }
    if (workers >= 1 && a.workers1 == false) {
      ach("Obtain a Worker", "+2x Multiplier");
      freeUpgrade();
      freeUpgrade();
      a.workers1 = true;
      achievements++;
    }
    if (workers >= 10 && a.workers2 == false) {
      ach("Obtain 10 Workers", "+5x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.workers2 = true;
      achievements++;
    }
    if (workers >= 75 && a.workers3 == false) {
      ach("Obtain 75 Workers", "+5 Super Workers");
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      freeSuperWorker();
      a.workers3 = true;
      achievements++;
    }
    if (workers >= 750 && a.workers4 == false) {
      ach("Obtain 750 Workers", "+10 Farms");
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      freeFarm();
      a.workers4 = true;
      achievements++;
    }
    if (superWorkers >= 1 && a.superWorkers1 == false) {
      ach("Obtain a Super Worker", "+4x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.superWorkers1 = true;
      achievements++;
    }
    if (superWorkers >= 5 && a.superWorkers2 == false) {
      ach("Obtain 5 Super Workers", "+10 Workers");
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      freeWorker();
      a.superWorkers2 = true;
      achievements++;
    }
    if (superWorkers >= 50 && a.superWorkers3 == false) {
      ach("Obtain 50 Super Workers", "+2 Farms");
      freeFarm();
      freeFarm();
      a.superWorkers3 = true;
      achievements++;
    }
    if (superWorkers >= 500 && a.superWorkers4 == false) {
      ach("Obtain 500 Super Workers", "+1B Bananas");
      clicks += 1000000000;
      a.superWorkers4 = true;
      achievements++;
    }
    if (farms >= 1 && a.farms1 == false) {
      ach("Obtain a Farm", "+8x Multiplier");
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      freeUpgrade();
      a.farms1 = true;
      achievements++;
    }
    if (farms >= 3 && a.farms2 == false) {
      ach("Obtain 3 Farms", "+50K Bananas");
      clicks += 50000;
      a.farms2 = true;
      achievements++;
    }
    if (farms >= 15 && a.farms3 == false) {
      ach("Obtain 15 Farms", "+10M Bananas");
      clicks += 10000000;
      a.farms3 = true;
      achievements++;
    }
    if (farms >= 75 && a.farms4 == false) {
      ach("Obtain 75 Farms", "+100M Bananas");
      clicks += 100000000;
      a.farms4 = true;
      achievements++;
    }
    if (a.banana1 == true) {
      document.getElementById("banana1").style.border = "4px solid orange";
    }
    if (a.banana2 == true) {
      document.getElementById("banana2").style.border = "4px solid orange";
    }
    if (a.banana3 == true) {
      document.getElementById("banana3").style.border = "4px solid orange";
    }
    if (a.banana4 == true) {
      document.getElementById("banana4").style.border = "4px solid orange";
    }
    if (a.multiplier1 == true) {
      document.getElementById("multiplier1").style.border = "4px solid orange";
    }
    if (a.multiplier2 == true) {
      document.getElementById("multiplier2").style.border = "4px solid orange";
    }
    if (a.multiplier3 == true) {
      document.getElementById("multiplier3").style.border = "4px solid orange";
    }
    if (a.multiplier4 == true) {
      document.getElementById("multiplier4").style.border = "4px solid orange";
    }
    if (a.workers1 == true) {
      document.getElementById("workers1").style.border = "4px solid orange";
    }
    if (a.workers2 == true) {
      document.getElementById("workers2").style.border = "4px solid orange";
    }
    if (a.workers3 == true) {
      document.getElementById("workers3").style.border = "4px solid orange";
    }
    if (a.workers4 == true) {
      document.getElementById("workers4").style.border = "4px solid orange";
    }
    if (a.superWorkers1 == true) {
      document.getElementById("superWorkers1").style.border =
        "4px solid orange";
    }
    if (a.superWorkers2 == true) {
      document.getElementById("superWorkers2").style.border =
        "4px solid orange";
    }
    if (a.superWorkers3 == true) {
      document.getElementById("superWorkers3").style.border =
        "4px solid orange";
    }
    if (a.superWorkers4 == true) {
      document.getElementById("superWorkers4").style.border =
        "4px solid orange";
    }
    if (a.farms1 == true) {
      document.getElementById("farms1").style.border = "4px solid orange";
    }
    if (a.farms2 == true) {
      document.getElementById("farms2").style.border = "4px solid orange";
    }
    if (a.farms3 == true) {
      document.getElementById("farms3").style.border = "4px solid orange";
    }
    if (a.farms4 == true) {
      document.getElementById("farms4").style.border = "4px solid orange";
    }
  }
});

setInterval(() => {
  if (paused == false) {
    if (difficulty == 1) {
      clicks += (farms * 200 + superWorkers * 10 + workers) * multiplier;
    } else if (difficulty == 2) {
      clicks +=
        (farms * 200 + superWorkers * 10 + workers) * Math.ceil(multiplier / 5);
    } else if (difficulty == 3) {
      clicks +=
        (farms * 150 + superWorkers * 7 + workers) * Math.ceil(multiplier / 10);
    }
  }
}, 500);

function upgrade() {
  if (paused == false) {
    if (clicks >= upgCost) {
      clicks -= upgCost;
      multiplier++;
      spendAnimation(upgCost);
      upgCost += 50 * (1 + expPriceMultiplier / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function freeUpgrade() {
  if (paused == false) {
    multiplier++;
    upgCost += 50 * (1 + expPriceMultiplier / 10);
  }
}

function newWorker() {
  if (paused == false) {
    if (clicks >= workerCost) {
      clicks -= workerCost;
      workers++;
      spendAnimation(workerCost);
      workerCost += 100 * (1 + expPriceWorker / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function freeWorker() {
  if (paused == false) {
    workers++;
    workerCost += 100 * (1 + expPriceWorker / 10);
  }
}

function newSuperWorker() {
  if (paused == false) {
    if (clicks >= superWorkerCost) {
      clicks -= superWorkerCost;
      superWorkers++;
      spendAnimation(superWorkerCost);
      superWorkerCost += 1000 * (1 + expPriceSuperWorker / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function freeSuperWorker() {
  if (paused == false) {
    superWorkers++;
    superWorkerCost += 1000 * (1 + expPriceSuperWorker / 10);
  }
}

function newFarm() {
  if (paused == false) {
    if (clicks >= farmCost) {
      clicks -= farmCost;
      farms++;
      spendAnimation(farmCost);
      farmCost += 150000 * (1 + expPriceFarm / 10);
    } else {
      notEnoughBananas();
    }
  }
}

function freeFarm() {
  if (paused == false) {
    farms++;
    farmCost += 150000 * (1 + expPriceFarm / 10);
  }
}

function spendAnimation(price) {
  var elem = document.createElement("H3");
  price = abbreviate(price);
  elem.innerHTML = "-" + price;
  elem.style.color = "red";
  elem.style.position = "absolute";
  elem.style.left = "50%";
  elem.style.transform = "translate(-50%)";
  elem.style.top = "455px";
  elem.style.fontSize = "40px";
  document.body.appendChild(elem);
  var elemTop = 455;
  var elemOpacity = 1;
  var interval = setInterval(() => {
    elemTop -= 0.1;
    elemOpacity -= 0.005;
    elem.style.top = elemTop.toString() + "px";
    elem.style.opacity = elemOpacity.toString();
  });
  setTimeout(() => {
    clearInterval(interval);
    document.body.removeChild(elem);
  }, 1000);
}

function newBundle() {
  var value = random(2, 4);
  bundle.multipliers = Math.round(random(multiplier / 100, multiplier / 50));
  bundle.workers = Math.round(random(workers / 100, workers / 50));
  bundle.superWorkers = Math.round(
    random(superWorkers / 100, superWorkers / 50)
  );
  bundle.farms = Math.round(random(farms / 100, farms / 50));
  if (
    bundle.multipliers == 0 &&
    bundle.workers == 0 &&
    bundle.superWorkers == 0 &&
    bundle.farms == 0
  ) {
    return;
  } else {
    document.getElementById("bundleItems").innerHTML = "";
    bundleAvailable = true;
    if (bundle.multipliers != 0) {
      document.getElementById("bundleItems").innerHTML +=
        "<br>Multiplier: +" + bundle.multipliers + "x";
      bundle.cost += bundle.multipliers * upgCost;
    }
    if (bundle.workers != 0) {
      document.getElementById("bundleItems").innerHTML +=
        "<br>Workers: +" + bundle.workers;
      bundle.cost += bundle.workers * workerCost;
    }
    if (bundle.superWorkers != 0) {
      document.getElementById("bundleItems").innerHTML +=
        "<br>Super Workers: +" + bundle.superWorkers;
      bundle.cost += bundle.superWorkers * superWorkerCost;
    }
    if (bundle.farms != 0) {
      document.getElementById("bundleItems").innerHTML +=
        "<br>Farms: +" + bundle.farms;
      bundle.cost += bundle.farms * farmCost;
    }
    bundle.cost /= value;
    bundle.cost = Math.round(bundle.cost);
  }
}

function buyBundle() {
  if (paused == false) {
    if (clicks >= bundle.cost && bundleAvailable == true) {
      clicks -= bundle.cost;
      multiplier += bundle.multipliers;
      workers += bundle.workers;
      superWorkers += bundle.superWorkers;
      farms += bundle.farms;
      spendAnimation(bundle.cost);
      bundle.cost = 0;
      document.getElementById("bundleItems").innerHTML =
        "<span style='color:red'><br>Unavailable</span>";
      bundleAvailable = false;
    } else if (clicks < bundle.cost && bundleAvailable == true) {
      notEnoughBananas();
    }
  }
}

function notEnoughBananas() {
  document.getElementById("clicks").style.color = "red";
  document.getElementById("clicks").style.fontSize = "50px";
  document.getElementById("bananaIcon").style.fontSize = "50px";
  setTimeout(() => {
    document.getElementById("clicks").style.color = "rgb(255, 217, 0)";
    document.getElementById("clicks").style.fontSize = "40px";
    document.getElementById("bananaIcon").style.fontSize = "40px";
  }, 100);
}

function pause() {
  if (paused == false) {
    paused = true;
    document.getElementById("pauseIcon").innerHTML = "play_arrow";
  } else {
    paused = false;
    document.getElementById("pauseIcon").innerHTML = "pause";
  }
}

function help() {
  alert(
    "Click on the banana to gain more bananas. Obtain upgrades from the shop. Prices have slight exponential increases as you Obtain more items. The multiplier is fully effective on clicks, while much weaker on workers and farms."
  );
}

function settings() {
  if (battling == false) {
    if (settingsOpen == false) {
      settingsOpen = true;
      achTrackerOpen = false;
      patchNotesOpen = false;
      paused = true;
      document.getElementById("shop").style.display = "none";
      document.getElementById("banana").style.display = "none";
      document.getElementById("clickCounter").style.display = "none";
      document.getElementById("divider2").style.display = "none";
      document.getElementById("achTrackerMenu").style.display = "none";
      document.getElementById("patchNotesMenu").style.display = "none";
      document.getElementById("divider4").style.display = "none";
      document.getElementById("settingsMenu").style.display = "block";
      document.getElementById("divider3").style.display = "block";
    } else if (settingsOpen == true) {
      settingsOpen = false;
      paused = false;
      document.getElementById("shop").style.display = "block";
      document.getElementById("banana").style.display = "block";
      document.getElementById("clickCounter").style.display = "block";
      document.getElementById("divider2").style.display = "block";
      document.getElementById("settingsMenu").style.display = "none";
    }
  }
}

function easy() {
  document.getElementById("easy").style.backgroundColor = "orange";
  document.getElementById("easy").style.color = "rgb(30,30,30)";
  document.getElementById("normal").style.backgroundColor = "transparent";
  document.getElementById("normal").style.color = "orange";
  document.getElementById("hard").style.backgroundColor = "transparent";
  document.getElementById("hard").style.color = "orange";
}

function normal() {
  document.getElementById("normal").style.backgroundColor = "orange";
  document.getElementById("normal").style.color = "rgb(30,30,30)";
  document.getElementById("easy").style.backgroundColor = "transparent";
  document.getElementById("easy").style.color = "orange";
  document.getElementById("hard").style.backgroundColor = "transparent";
  document.getElementById("hard").style.color = "orange";
}

function hard() {
  document.getElementById("hard").style.backgroundColor = "orange";
  document.getElementById("hard").style.color = "rgb(30,30,30)";
  document.getElementById("normal").style.backgroundColor = "transparent";
  document.getElementById("normal").style.color = "orange";
  document.getElementById("easy").style.backgroundColor = "transparent";
  document.getElementById("easy").style.color = "orange";
}

function areYouSure() {
  if (
    (document.getElementById("easy").style.backgroundColor == "orange" &&
      difficulty != 1) ||
    (document.getElementById("normal").style.backgroundColor == "orange" &&
      difficulty != 2) ||
    (document.getElementById("hard").style.backgroundColor == "orange" &&
      difficulty != 3)
  ) {
    if (
      confirm(
        "Changing this settings requires a restart. Press 'OK' below to continue or press 'Cancel' to cancel this action."
      )
    ) {
      saveSettings();
    }
  }
}

function saveSettings() {
  if (
    document.getElementById("easy").style.backgroundColor == "orange" &&
    difficulty != 1
  ) {
    difficulty = 1;
    settings();
  } else if (
    document.getElementById("normal").style.backgroundColor == "orange" &&
    difficulty != 2
  ) {
    difficulty = 2;
    settings();
  } else if (
    document.getElementById("hard").style.backgroundColor == "orange" &&
    difficulty != 3
  ) {
    difficulty = 3;
    settings();
  }
  clicks = 0;
  upgCost = 100;
  workerCost = 200;
  superWorkerCost = 1000;
  farmCost = 100000;
  multiplier = 1;
  workers = 0;
  superWorkers = 0;
  farms = 0;
  paused = false;
  expPriceMultiplier = 0;
  expPriceWorker = 0;
  expPriceSuperWorker = 0;
  expPriceFarm = 0;
  settingsOpen = false;
  achievements = 0;
  achTrackerOpen = false;
  patchNotesOpen = false;
  achSlot1 = true;
  achSlot2 = true;
  achSlot3 = true;
  a.banana1 = false;
  a.banana2 = false;
  a.banana3 = false;
  a.banana4 = false;
  a.multiplier1 = false;
  a.multiplier2 = false;
  a.multiplier3 = false;
  a.multiplier4 = false;
  a.workers1 = false;
  a.workers2 = false;
  a.workers3 = false;
  a.workers4 = false;
  a.superWorkers1 = false;
  a.superWorkers2 = false;
  a.superWorkers3 = false;
  a.superWorkers4 = false;
  a.farms1 = false;
  a.farms2 = false;
  a.farms3 = false;
  a.farms4 = false;
}

function closeSettings() {
  if (difficulty == 1) {
    document.getElementById("easy").style.backgroundColor = "orange";
    document.getElementById("easy").style.color = "rgb(30,30,30)";
    document.getElementById("normal").style.backgroundColor = "transparent";
    document.getElementById("normal").style.color = "orange";
    document.getElementById("hard").style.backgroundColor = "transparent";
    document.getElementById("hard").style.color = "orange";
  } else if (difficulty == 2) {
    document.getElementById("normal").style.backgroundColor = "orange";
    document.getElementById("normal").style.color = "rgb(30,30,30)";
    document.getElementById("easy").style.backgroundColor = "transparent";
    document.getElementById("easy").style.color = "orange";
    document.getElementById("hard").style.backgroundColor = "transparent";
    document.getElementById("hard").style.color = "orange";
  } else if (difficulty == 3) {
    document.getElementById("hard").style.backgroundColor = "orange";
    document.getElementById("hard").style.color = "rgb(30,30,30)";
    document.getElementById("normal").style.backgroundColor = "transparent";
    document.getElementById("normal").style.color = "orange";
    document.getElementById("easy").style.backgroundColor = "transparent";
    document.getElementById("easy").style.color = "orange";
  }
  settings();
}

function achTracker() {
  if (battling == false) {
    if (achTrackerOpen == false) {
      achTrackerOpen = true;
      settingsOpen = false;
      patchNotesOpen = false;
      paused = true;
      document.getElementById("shop").style.display = "none";
      document.getElementById("banana").style.display = "none";
      document.getElementById("clickCounter").style.display = "none";
      document.getElementById("divider2").style.display = "none";
      document.getElementById("divider3").style.display = "none";
      document.getElementById("patchNotesMenu").style.display = "none";
      document.getElementById("settingsMenu").style.display = "none";
      document.getElementById("divider4").style.display = "block";
      document.getElementById("achTrackerMenu").style.display = "block";
    } else if (achTrackerOpen == true) {
      achTrackerOpen = false;
      paused = false;
      document.getElementById("shop").style.display = "block";
      document.getElementById("banana").style.display = "block";
      document.getElementById("clickCounter").style.display = "block";
      document.getElementById("divider2").style.display = "block";
      document.getElementById("divider3").style.display = "block";
      document.getElementById("divider4").style.display = "none";
      document.getElementById("achTrackerMenu").style.display = "none";
    }
  }
}

function patchNotes() {
  if (battling == false) {
    if (patchNotesOpen == false) {
      patchNotesOpen = true;
      settingsOpen = false;
      achTrackerOpen = false;
      paused = true;
      document.getElementById("shop").style.display = "none";
      document.getElementById("banana").style.display = "none";
      document.getElementById("clickCounter").style.display = "none";
      document.getElementById("divider2").style.display = "none";
      document.getElementById("settingsMenu").style.display = "none";
      document.getElementById("achTrackerMenu").style.display = "none";
      document.getElementById("divider4").style.display = "none";
      document.getElementById("patchNotesMenu").style.display = "block";
      document.getElementById("divider3").style.display = "block";
    } else if (patchNotesOpen == true) {
      patchNotesOpen = false;
      paused = false;
      document.getElementById("shop").style.display = "block";
      document.getElementById("banana").style.display = "block";
      document.getElementById("clickCounter").style.display = "block";
      document.getElementById("divider2").style.display = "block";
      document.getElementById("patchNotesMenu").style.display = "none";
    }
  }
}

function lightMode() {
  document.getElementById("stylesheet").href = "lightmode.css";
  document.getElementById("light").style.backgroundColor = "orange";
  document.getElementById("light").style.color = "rgb(30,30,30)";
  document.getElementById("dark").style.backgroundColor = "transparent";
  document.getElementById("dark").style.color = "orange";
  colorMode = "light";
}
function darkMode() {
  document.getElementById("stylesheet").href = "darkmode.css";
  document.getElementById("dark").style.backgroundColor = "orange";
  document.getElementById("dark").style.color = "rgb(30,30,30)";
  document.getElementById("light").style.backgroundColor = "transparent";
  document.getElementById("light").style.color = "orange";
  colorMode = "dark";
}

function downloadSave() {
  if (battling == false) {
    var data =
      clicks +
      "\n" +
      upgCost +
      "\n" +
      workerCost +
      "\n" +
      superWorkerCost +
      "\n" +
      farmCost +
      "\n" +
      multiplier +
      "\n" +
      workers +
      "\n" +
      superWorkers +
      "\n" +
      farms +
      "\n" +
      expPriceMultiplier +
      "\n" +
      expPriceWorker +
      "\n" +
      expPriceSuperWorker +
      "\n" +
      expPriceFarm +
      "\n" +
      achievements +
      "\n" +
      a.banana1 +
      "\n" +
      a.banana2 +
      "\n" +
      a.banana3 +
      "\n" +
      a.banana4 +
      "\n" +
      a.multiplier1 +
      "\n" +
      a.multiplier2 +
      "\n" +
      a.multiplier3 +
      "\n" +
      a.multiplier4 +
      "\n" +
      a.workers1 +
      "\n" +
      a.workers2 +
      "\n" +
      a.workers3 +
      "\n" +
      a.workers4 +
      "\n" +
      a.superWorkers1 +
      "\n" +
      a.superWorkers2 +
      "\n" +
      a.superWorkers3 +
      "\n" +
      a.superWorkers4 +
      "\n" +
      a.farms1 +
      "\n" +
      a.farms2 +
      "\n" +
      a.farms3 +
      "\n" +
      a.farms4 +
      "\n" +
      colorMode +
      "\n" +
      difficulty;

    var download = document.createElement("a");
    download.style.display = "none";
    download.setAttribute(
      "href",
      "data:text/file;charset=utf-8," + encodeURIComponent(data)
    );
    download.setAttribute("download", "BC-save");
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
  }
}

function uploadSave() {
  if (battling == false) {
    var upload = document.createElement("input");
    upload.style.display = "none";
    upload.setAttribute("type", "file");
    document.body.appendChild(upload);
    upload.click();
    upload.addEventListener(
      "change",
      function (e) {
        console.log(upload.files);
        const reader = new FileReader();
        reader.onload = () => {
          const line = reader.result.split("\n");
          if (reader.result.split("\n").map(() => {}).length != 36) {
            alert(
              "This file is from an outdated version of Banana Clicker, so some things may not work correctly. This file has " +
                reader.result
                  .split("\n")
                  .map(() => {})
                  .length.toString() +
                " lines. Updated/current files have 36 lines."
            );
          }
          try {
            if (line[14] == "false") {
              a.banana1 = false;
            } else {
              a.banana1 = true;
            }
            if (line[15] == "false") {
              a.banana2 = false;
            } else {
              a.banana2 = true;
            }
            if (line[16] == "false") {
              a.banana3 = false;
            } else {
              a.banana3 = true;
            }
            if (line[17] == "false") {
              a.banana4 = false;
            } else {
              a.banana4 = true;
            }
            if (line[18] == "false") {
              a.multiplier1 = false;
            } else {
              a.multiplier1 = true;
            }
            if (line[19] == "false") {
              a.multiplier2 = false;
            } else {
              a.multiplier2 = true;
            }
            if (line[20] == "false") {
              a.multiplier3 = false;
            } else {
              a.multiplier3 = true;
            }
            if (line[21] == "false") {
              a.multiplier4 = false;
            } else {
              a.multiplier4 = true;
            }
            if (line[22] == "false") {
              a.workers1 = false;
            } else {
              a.workers1 = true;
            }
            if (line[23] == "false") {
              a.workers2 = false;
            } else {
              a.workers2 = true;
            }
            if (line[24] == "false") {
              a.workers3 = false;
            } else {
              a.workers3 = true;
            }
            if (line[25] == "false") {
              a.workers4 = false;
            } else {
              a.workers4 = true;
            }
            if (line[26] == "false") {
              a.superWorkers1 = false;
            } else {
              a.superWorkers1 = true;
            }
            if (line[27] == "false") {
              a.superWorkers2 = false;
            } else {
              a.superWorkers2 = true;
            }
            if (line[28] == "false") {
              a.superWorkers3 = false;
            } else {
              a.superWorkers3 = true;
            }
            if (line[29] == "false") {
              a.superWorkers4 = false;
            } else {
              a.superWorkers4 = true;
            }
            if (line[30] == "false") {
              a.farms1 = false;
            } else {
              a.farms1 = true;
            }
            if (line[31] == "false") {
              a.farms2 = false;
            } else {
              a.farms2 = true;
            }
            if (line[32] == "false") {
              a.farms3 = false;
            } else {
              a.farms3 = true;
            }
            if (line[33] == "false") {
              a.farms4 = false;
            } else {
              a.farms4 = true;
            }
            if (line[34] == "dark") {
              document.getElementById("stylesheet").href = "darkmode.css";
              document.getElementById("dark").style.backgroundColor = "orange";
              document.getElementById("dark").style.color = "rgb(30,30,30)";
              document.getElementById("light").style.backgroundColor =
                "transparent";
              document.getElementById("light").style.color = "orange";
              colorMode = "dark";
            } else {
              document.getElementById("stylesheet").href = "lightmode.css";
              document.getElementById("light").style.backgroundColor = "orange";
              document.getElementById("light").style.color = "rgb(30,30,30)";
              document.getElementById("dark").style.backgroundColor =
                "transparent";
              document.getElementById("dark").style.color = "orange";
              colorMode = "light";
            }
            if (line[35] == 1) {
              document.getElementById("easy").style.backgroundColor = "orange";
              document.getElementById("easy").style.color = "rgb(30,30,30)";
              document.getElementById("normal").style.backgroundColor =
                "transparent";
              document.getElementById("normal").style.color = "orange";
              document.getElementById("hard").style.backgroundColor =
                "transparent";
              document.getElementById("hard").style.color = "orange";
            } else if (line[35] == 2) {
              document.getElementById("normal").style.backgroundColor =
                "orange";
              document.getElementById("normal").style.color = "rgb(30,30,30)";
              document.getElementById("easy").style.backgroundColor =
                "transparent";
              document.getElementById("easy").style.color = "orange";
              document.getElementById("hard").style.backgroundColor =
                "transparent";
              document.getElementById("hard").style.color = "orange";
            } else {
              document.getElementById("hard").style.backgroundColor = "orange";
              document.getElementById("hard").style.color = "rgb(30,30,30)";
              document.getElementById("normal").style.backgroundColor =
                "transparent";
              document.getElementById("normal").style.color = "orange";
              document.getElementById("easy").style.backgroundColor =
                "transparent";
              document.getElementById("easy").style.color = "orange";
            }
            clicks = parseInt(line[0]);
            upgCost = parseInt(line[1]);
            workerCost = parseInt(line[2]);
            superWorkerCost = parseInt(line[3]);
            farmCost = parseInt(line[4]);
            multiplier = parseInt(line[5]);
            workers = parseInt(line[6]);
            superWorkers = parseInt(line[7]);
            farms = parseInt(line[8]);
            expPriceMultiplier = parseInt(line[9]);
            expPriceWorker = parseInt(line[10]);
            expPriceSuperWorker = parseInt(line[11]);
            expPriceFarm = parseInt(line[12]);
            achievements = parseInt(line[13]);
          } catch {
            alert(
              "There was an error while converting the file into data for the game. This is most likely because the file may be old and not correctly formatted, or there is an error in the file."
            );
          }
        };
        reader.onerror = function (e) {
          alert(e.target.error.name);
        };
        reader.readAsText(upload.files[0]);
      },
      false
    );
  }
}

function attack() {
  if (confirm("Are you sure you want to start an attack?")) {
    document.getElementById("shop").style.display = "none";
    document.getElementById("banana").style.display = "none";
    document.getElementById("clickCounter").style.display = "none";
    document.getElementById("divider2").style.display = "none";
    document.getElementById("settingsMenu").style.display = "none";
    document.getElementById("achTrackerMenu").style.display = "none";
    document.getElementById("divider4").style.display = "none";
    document.getElementById("divider2").style.display = "none";
    document.getElementById("patchNotesMenu").style.display = "none";
    document.getElementById("attackMenu").style.display = "block";
    battling = true;
  } else {
    return;
  }
}

function attackBet() {
  if (
    isNaN(parseInt(document.getElementById("multiplierBet").value)) == true ||
    isNaN(parseInt(document.getElementById("workerBet").value)) == true ||
    isNaN(parseInt(document.getElementById("superWorkerBet").value)) == true ||
    isNaN(parseInt(document.getElementById("farmBet").value)) == true
  ) {
    alert("One or more inputs has an error");
    return;
  }
  multiplierBet = parseInt(document.getElementById("multiplierBet").value);
  workerBet = parseInt(document.getElementById("workerBet").value);
  superWorkerBet = parseInt(document.getElementById("superWorkerBet").value);
  farmBet = parseInt(document.getElementById("farmBet").value);
  if (
    multiplierBet >= multiplier ||
    workerBet > workers ||
    superWorkerBet > superWorkers ||
    farmBet > farms
  ) {
    alert(
      "You cannot bet more than what you have, or the same multiplier you have. You have: \n\n" +
        multiplier +
        "x Multiplier \n" +
        workers +
        " Workers \n" +
        superWorkers +
        " Super Workers \n" +
        farms +
        " Farms"
    );
    return;
  }
  if (
    multiplierBet == 0 &&
    workerBet == 0 &&
    superWorkerBet == 0 &&
    farmBet == 0
  ) {
    alert("You cannot bet nothing.");
    return;
  }
  if (
    (multiplier > 20 && multiplierBet >= multiplier / 5) ||
    (workers > 20 && workerBet >= workers / 5) ||
    (superWorkers > 20 && superWorkerBet >= superWorkers / 5) ||
    (farms > 20 && farmBet >= farms / 5)
  ) {
    if (
      !confirm(
        "Are you sure? One or more of these bets is at least 20% of those items that you have and could cause a large loss if you are defeated. You have: \n\n" +
          multiplier +
          "x Multiplier \n" +
          workers +
          " Workers \n" +
          superWorkers +
          " Super Workers \n" +
          farms +
          " Farms"
      )
    ) {
      return;
    }
  }
  document.getElementById("attackMenu").style.display = "none";
  document.getElementById("attackDialogue").style.display = "block";
  document.getElementById("generatingOpponent").style.opacity = 0;
  var opacity1 = 0;
  var interval1 = setInterval(() => {
    if (opacity1 < 1) {
      opacity1 += 0.01;
      document.getElementById("generatingOpponent").style.opacity = opacity1;
    } else {
      opacity1 = 1;
    }
  });
  setTimeout(() => {
    clearInterval(interval1);
    var interval2 = setInterval(() => {
      if (opacity1 > 0) {
        opacity1 -= 0.01;
        document.getElementById("generatingOpponent").style.opacity = opacity1;
      } else {
        opacity1 = 0;
      }
    });
    setTimeout(() => {
      clearInterval(interval2);
    }, 1000);
  }, 1000);

  setTimeout(() => {
    document.getElementById("generatingOpponent").style.display = "none";
    document.getElementById("startingBattle").style.display = "block";
    var opacity2 = 0;
    var interval3 = setInterval(() => {
      if (opacity2 < 1) {
        opacity2 += 0.01;
        document.getElementById("startingBattle").style.opacity = opacity2;
      } else {
        opacity2 = 1;
      }
    });
    setTimeout(() => {
      clearInterval(interval3);
    }, 1000);
  }, 2100);

  setTimeout(() => {
    startAttack();
  }, 3400);
}

function startAttack() {
  document.getElementById("attackDialogue").style.display = "none";
  document.getElementById("divider3").style.display = "none";
  document.getElementById("battle").style.display = "block";
  document.getElementById("divider5").style.display = "block";
  countdown();
  battleScore = 0;
}

function countdown() {
  document.getElementById("countdown").style.scale = "1";
  document.getElementById("countdown").style.opacity = "1";
  document.getElementById("countdown").innerHTML = "3";
  countdownInflate();
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "2";
    countdownInflate();
  }, 1000);
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "1";
    countdownInflate();
  }, 2000);
  setTimeout(() => {
    document.getElementById("countdown").innerHTML = "";
    document.getElementById("battlePrompt").style.display = "none";
    timer();
    nodeLauncher();
  }, 3000);
}

function countdownInflate() {
  var opacity = 1;
  var scale = 1;
  var interval = setInterval(() => {
    opacity -= 0.005;
    scale += 0.005;
    document.getElementById("countdown").style.opacity = opacity.toString();
    document.getElementById("countdown").style.transform =
      "scale(" + scale + ")";
  });
  setTimeout(() => {
    clearInterval(interval);
  }, 1000);
}

function timer() {
  var timeLeft = 20;
  var interval = setInterval(() => {
    timeLeft--;
    if (timeLeft > 9) {
      document.getElementById("timer").innerHTML = "0:" + timeLeft;
    } else if (timeLeft > -1 && timeLeft <= 9) {
      document.getElementById("timer").innerHTML = "0:0" + timeLeft;
    }
    if (timeLeft == 0) {
      setTimeout(() => {
        clearInterval(interval);
        endGame();
        timeLeft = 20;
      }, 1000);
    }
  }, 1000);
}

function nodeLauncher() {
  var interval = setInterval(() => {
    createNode();
  }, 950);
  setTimeout(() => {
    clearInterval(interval);
  }, 19000);
}

function createNode() {
  var x = random(0, 95);
  var y = random(0, 95);
  var rotation = random(0, 360);
  var scale = 1;
  var newNode = document.createElement("IMG");
  newNode.setAttribute("src", "banana.png");
  newNode.classList.add("node");
  newNode.style.left = x + "%";
  newNode.style.bottom = y + "%";
  var interval = setInterval(() => {
    scale -= 0.01;
    newNode.style.transform =
      "rotate(" + rotation + "deg) scale(" + scale + ")";
    if (scale <= 0) {
      clearInterval(interval);
      newNode.style.display = "none";
    }
  }, 30);
  newNode.onclick = () => {
    clearInterval(interval);
    newNode.style.display = "none";
    battleScore++;
  };
  setTimeout(() => {
    document.getElementById("battle").appendChild(newNode);
  }, 100);
  setTimeout(() => {
    document.getElementById("battle").removeChild(newNode);
  }, 3500);
}

function endGame() {
  document.getElementById("battleScores").innerHTML = battleScore;
  console.log(battleScore);
  var win = null;
  var opponentScore = 0;
  if (battleScore == 20) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum < 70) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = null;
      opponentScore = battleScore;
    }
  } else if (battleScore > 18) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum < 55) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = false;
      opponentScore = battleScore + Math.round(random(1, 2));
    }
  } else if (battleScore > 15) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum < 40) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = false;
      opponentScore = battleScore + Math.round(random(1, 5));
    }
  } else if (battleScore > 13) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum < 25) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = false;
      opponentScore = battleScore + Math.round(random(1, 7));
    }
  } else if (battleScore > 10) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum < 10) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = false;
      opponentScore = battleScore + Math.round(random(1, 10));
    }
  } else if (battleScore < 10) {
    var randomNum = Math.round(random(0, 100));
    if (randomNum == 1) {
      win = true;
      opponentScore = battleScore - Math.round(random(1, 3));
    } else {
      win = false;
      opponentScore = battleScore + Math.round(random(1, 10));
    }
  }

  document.getElementById("battleScores").innerHTML += " - " + opponentScore;

  if (win == true) {
    document.getElementById("result").innerHTML =
      "<span style='color:lime'>VICTORY</span>";
    document.getElementById("gainOrLossMsg").innerHTML = "You won:";
    document.getElementById("gainOrLoss").innerHTML = "";
    if (multiplierBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        multiplierBet + "x Multiplier <br>";
    }
    if (workerBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        workerBet + " Workers <br>";
    }
    if (superWorkerBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        superWorkerBet + " Super Workers <br>";
    }
    if (farmBet != 0) {
      document.getElementById("gainOrLoss").innerHTML += farmBet + " Farms";
    }
    multiplier += multiplierBet;
    workers += workerBet;
    superWorkers += superWorkerBet;
    farms += farmBet;
  } else if (win == false) {
    document.getElementById("result").innerHTML =
      "<span style='color:red'>DEFEAT</span>";
    document.getElementById("gainOrLossMsg").innerHTML = "You lost:";
    document.getElementById("gainOrLoss").innerHTML = "";
    if (multiplierBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        multiplierBet + "x Multiplier <br>";
    }
    if (workerBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        workerBet + " Workers <br>";
    }
    if (superWorkerBet != 0) {
      document.getElementById("gainOrLoss").innerHTML +=
        superWorkerBet + " Super Workers <br>";
    }
    if (farmBet != 0) {
      document.getElementById("gainOrLoss").innerHTML += farmBet + " Farms";
    }
    multiplier -= multiplierBet;
    workers -= workerBet;
    superWorkers -= superWorkerBet;
    farms -= farmBet;
  } else {
    document.getElementById("result").innerHTML = "TIE";
    document.getElementById("gainOrLossMsg").innerHTML = "No winnings";
    document.getElementById("gainOrLoss").innerHTML = "";
  }
  document.getElementById("battle").style.display = "none";
  document.getElementById("battleEndScreen").style.display = "block";
  document.getElementById("divider3").style.display = "block";
  document.getElementById("divider5").style.display = "none";
  battleScore = 0;
  opponentScore = 0;
}

function closeBattle() {
  document.getElementById("battleEndScreen").style.display = "none";
  document.getElementById("shop").style.display = "block";
  document.getElementById("banana").style.display = "block";
  document.getElementById("clickCounter").style.display = "block";
  document.getElementById("divider2").style.display = "block";
  battling = false;
}
