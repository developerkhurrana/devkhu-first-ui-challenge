var iconShareBlock = document.querySelector(`.icon-share`),
    iShare = document.querySelector(`.i-share`),
    networks = document.querySelector('.ico-network');

    iconShareBlock.addEventListener( 'click', function () {
      if( networks.style.visibility === '' || networks.style.visibility === 'hidden'){
        networks.style.visibility = 'visible';
        this.style.background = 'var(--vdg-blue)';
        iShare.style.fill = 'var(--lg-gb)';
        return

      }
      networks.style.visibility = "hidden";
      this.style.background = '';
      iShare.style.fillv = '';


    })