"use strict";
const btnAll = document.querySelectorAll(".btn");
const btnShowAll22 = document.getElementById("showAll22");
const btnShowAll21 = document.getElementById("showAll21");
const btnShowAll20 = document.getElementById("showAll20");
const btnMediaAllStats = document.getElementById("mediaAll");
const btnConference = document.getElementById("conference");
const btnAllSeason = document.querySelectorAll(".btnMedia");
const btnAllEastWest = document.querySelectorAll(".btnConference");
const boxCards = document.querySelector(".box-cards");
const boxMedia = document.querySelector(".box-media");
const boxConference = document.querySelector(".box-conference");
btnAll.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn.id);
        const selecionado = document.querySelector(".btn.selecionado");
        if (selecionado) {
            selecionado.classList.remove("selecionado");
        }
        btn.classList.add("selecionado");
    });
});
function showAllItens(menu) {
    let element = "";
    menu.forEach((item) => {
        element += `
    <li class="card"> 
      <div class="img-card"> 
        <img src="${item.src}" />
        <h1>${item.name}</h1>
      </div>
      
      <div class="content-info">
        <div class="info">
          <div class="info-top">
           <h3>${item.position}</h3>
          </div>
          <div class="info-bottom">
            <p>Height ${item.height}</p>
            <p>Age ${item.age}</p>
           <p>Number ${item.number}</p>
          </div>
        </div>
      
        <div class="score">
          <h3>Stats</h3>
          <div class="score-numbers">
            <p>PTS ${item.point}</p>
            <p>REB ${item.reb}</p>
            <p>AST ${item.ast}</p>
          </div>
        </div>
      </div>
    </li>
    `;
    });
    boxCards.innerHTML = element;
}
function showStats22() {
    boxConference.classList.remove("showBtnsConference");
    boxMedia.classList.remove("show");
    let stats22 = menuPlayers.map((player) => {
        if (player.name === "Lebron James") {
            player.point = 28.9;
            player.reb = 8.3;
            player.ast = 6.8;
        }
        if (player.name === "Stephen Curry") {
            player.point = 29.4;
            player.reb = 6.1;
            player.ast = 6.3;
        }
        if (player.name === "Kevin Durant") {
            player.point = 29.7;
            player.reb = 6.7;
            player.ast = 5.3;
        }
        if (player.name === "Jayson Tatum") {
            player.point = 30.1;
            player.reb = 8.8;
            player.ast = 4.6;
        }
        if (player.name === "Luka Dončić") {
            player.point = 32.4;
            player.reb = 8.6;
            player.ast = 8.0;
        }
        if (player.name === "Nikola Jokic") {
            player.point = 24.5;
            player.reb = 11.8;
            player.ast = 9.8;
        }
        if (player.name === "Joel Embiid") {
            player.point = 33.1;
            player.reb = 10.2;
            player.ast = 4.2;
        }
        if (player.name === "Giannis Antetokounmpo") {
            player.point = 31.1;
            player.reb = 11.8;
            player.ast = 5.7;
        }
        return player;
    });
    // console.log(stats22);
    showAllItens(stats22);
    return stats22;
}
function showStats21() {
    boxConference.classList.remove("showBtnsConference");
    boxMedia.classList.remove("show");
    let stats21 = menuPlayers.map((player) => {
        if (player.name === "Lebron James") {
            player.point = 30.3;
            player.reb = 8.2;
            player.ast = 6.2;
        }
        if (player.name === "Stephen Curry") {
            player.point = 25.5;
            player.reb = 5.2;
            player.ast = 6.3;
        }
        if (player.name === "Kevin Durant") {
            player.point = 29.9;
            player.reb = 7.4;
            player.ast = 6.4;
        }
        if (player.name === "Jayson Tatum") {
            player.point = 26.9;
            player.reb = 8.0;
            player.ast = 4.4;
        }
        if (player.name === "Luka Dončić") {
            player.point = 28.4;
            player.reb = 9.1;
            player.ast = 8.7;
        }
        if (player.name === "Nikola Jokic") {
            player.point = 27.1;
            player.reb = 13.8;
            player.ast = 7.9;
        }
        if (player.name === "Joel Embiid") {
            player.point = 30.6;
            player.reb = 11.7;
            player.ast = 4.2;
        }
        if (player.name === "Giannis Antetokounmpo") {
            player.point = 29.9;
            player.reb = 11.6;
            player.ast = 5.8;
        }
        return player;
    });
    // console.log(stats21);
    showAllItens(stats21);
    return stats21;
}
function showStats20() {
    boxConference.classList.remove("showBtnsConference");
    boxMedia.classList.remove("show");
    let stats20 = menuPlayers.map((player) => {
        if (player.name === "Lebron James") {
            player.point = 25.0;
            player.reb = 7.7;
            player.ast = 7.8;
        }
        if (player.name === "Stephen Curry") {
            player.point = 32.0;
            player.reb = 5.5;
            player.ast = 5.8;
        }
        if (player.name === "Kevin Durant") {
            player.point = 26.9;
            player.reb = 7.1;
            player.ast = 5.6;
        }
        if (player.name === "Jayson Tatum") {
            player.point = 26.4;
            player.reb = 7.4;
            player.ast = 4.3;
        }
        if (player.name === "Luka Dončić") {
            player.point = 27.7;
            player.reb = 8.0;
            player.ast = 8.6;
        }
        if (player.name === "Nikola Jokic") {
            player.point = 26.4;
            player.reb = 10.8;
            player.ast = 8.3;
        }
        if (player.name === "Joel Embiid") {
            player.point = 28.5;
            player.reb = 10.6;
            player.ast = 2.8;
        }
        if (player.name === "Giannis Antetokounmpo") {
            player.point = 28.1;
            player.reb = 11.0;
            player.ast = 5.9;
        }
        return player;
    });
    // console.log(stats20);
    showAllItens(stats20);
    return stats20;
}
// MEDIA
function mediaAllStats() {
    boxCards.innerHTML = "";
    boxConference.classList.remove("showBtnsConference");
    boxMedia.classList.add("show");
    // let resultPoint: number = mediaPoints();
    // let resultReb: number = mediaReb();
    // let resultAst: number = mediaAst();
}
btnAllSeason.forEach((btn) => {
    btn.addEventListener("click", () => {
        changeBtnMedia(btn);
        if (btn.id === "20") {
            let stats20 = showStats20();
            boxMedia.classList.add("show");
            boxConference.classList.remove("showBtnsConference");
            boxCards.innerHTML = "";
            mediaPoints(stats20);
            mediaReb(stats20);
            mediaAst(stats20);
        }
        else if (btn.id === "21") {
            let stats21 = showStats21();
            boxMedia.classList.add("show");
            boxConference.classList.remove("showBtnsConference");
            boxCards.innerHTML = "";
            mediaPoints(stats21);
            mediaReb(stats21);
            mediaAst(stats21);
        }
        else {
            let stats22 = showStats22();
            boxMedia.classList.add("show");
            boxConference.classList.remove("showBtnsConference");
            boxCards.innerHTML = "";
            mediaPoints(stats22);
            mediaReb(stats22);
            mediaAst(stats22);
        }
    });
});
function changeBtnMedia(btn) {
    let selecionado = document.querySelector(".btnMediaSelecionado");
    if (selecionado) {
        selecionado === null || selecionado === void 0 ? void 0 : selecionado.classList.remove("btnMediaSelecionado");
    }
    btn.classList.add("btnMediaSelecionado");
}
const points = document.querySelector(".points");
const rebotes = document.querySelector(".rebounds");
const assist = document.querySelector(".assist");
function mediaPoints(stats) {
    let mediaStatsPoints = stats.reduce((acumulador, atual) => {
        let result = acumulador + atual.point / stats.length;
        return +result.toFixed(2);
    }, 0);
    console.log(`Pontos ${mediaStatsPoints}`);
    points.textContent = `PTS ${mediaStatsPoints}`;
    return mediaStatsPoints;
}
function mediaReb(stats) {
    let mediaStatsReb = stats.reduce((acumulador, atual) => {
        let result = acumulador + atual.reb / stats.length;
        return +result.toFixed(2);
    }, 0);
    console.log(`Rebotes - ${mediaStatsReb}`);
    rebotes.textContent = `REB ${mediaStatsReb}`;
    return mediaStatsReb;
}
function mediaAst(stats) {
    let mediaStatsAst = stats.reduce((acumulador, atual) => {
        let result = acumulador + atual.ast / stats.length;
        return +result.toFixed(2);
    }, 0);
    console.log(`Assistêcia - ${mediaStatsAst}`);
    assist.textContent = `AST ${mediaStatsAst}`;
    return mediaStatsAst;
}
// CONFERÊNCIA
function playersConference() {
    boxCards.innerHTML = "";
    boxMedia.classList.remove("show");
    boxConference.classList.add("showBtnsConference");
    let selecionado = document.querySelector(".selecionadoConference");
    if (selecionado) {
        if (selecionado.id === "east")
            showEast();
        if (selecionado.id === "west")
            showWest();
    }
    btnAllEastWest.forEach((btn) => {
        btn.addEventListener("click", () => {
            changeBtnConference(btn);
            if (btn.id === "east") {
                let leste = menuPlayers.filter((player) => player.conference === "East");
                showAllItens(leste);
            }
            if (btn.id === "west") {
                let oeste = menuPlayers.filter((player) => player.conference === "West");
                showAllItens(oeste);
            }
        });
    });
}
function showEast() {
    let leste = menuPlayers.filter((player) => player.conference === "East");
    showAllItens(leste);
}
function showWest() {
    let oeste = menuPlayers.filter((player) => player.conference === "West");
    showAllItens(oeste);
}
function changeBtnConference(btn) {
    let selecionado = document.querySelector(".selecionadoConference");
    if (selecionado) {
        selecionado === null || selecionado === void 0 ? void 0 : selecionado.classList.remove("selecionadoConference");
    }
    btn.classList.add("selecionadoConference");
}
btnShowAll22 === null || btnShowAll22 === void 0 ? void 0 : btnShowAll22.addEventListener("click", showStats22);
btnShowAll21 === null || btnShowAll21 === void 0 ? void 0 : btnShowAll21.addEventListener("click", showStats21);
btnShowAll20 === null || btnShowAll20 === void 0 ? void 0 : btnShowAll20.addEventListener("click", showStats20);
btnMediaAllStats === null || btnMediaAllStats === void 0 ? void 0 : btnMediaAllStats.addEventListener("click", mediaAllStats);
btnConference === null || btnConference === void 0 ? void 0 : btnConference.addEventListener("click", playersConference);
document.addEventListener("DOMContentLoaded", () => showAllItens(menuPlayers));
// function showStats21() {
//   let stats21: string[] = menuPlayers.map((player) => {
//     console.log(player.name);
//     return player.name;
//   });
//   console.log(stats21);
// }
