const body = document.querySelector('body');
const topBar = `<div class="top-bar">
<div class="container-layout">
  <div class="top-bar-content">
    <a href="https://forcegpt.github.io/principal/">
      <div class='item'>
      <i class='bx bx-left-arrow-alt'></i>
        <span>
        Voltar Ao APP
        </span>
      </div>
    </a>
    <a href="https://forcegpt.github.io/principal/">
      <div class='item'>
        <i class="bx bxs-home "></i>
        <span>
        Home
        </span>
      </div>
    </a>
    <a href="https://forcegpt.github.io/aula/">
      <div class='item '>
      <i class='bx bxs-graduation'></i>
        <span>
        Aprenda a Usar
        </span>
      </div>
    </a>
  </div>
</div>
</div>`;
body.insertAdjacentHTML('beforeend', topBar);
