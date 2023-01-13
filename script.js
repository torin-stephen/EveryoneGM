addTitle(document.body);

function addTitle() {
  const matches = document.getElementsByClassName("user-tagline-component");

  for (let i = 0; i < matches.length; i++) {
    console.log(matches[i])
    matches[i].insertAdjacentHTML("afterBegin",
      '<a href="https://www.chess.com/members/titled-players" target="_blank" class="user-chess-title-component">GM</a>'
    );
  }
}
