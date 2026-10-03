document.getElementById('year').textContent=new Date().getFullYear();
const box=document.getElementById('lightbox'),big=box.querySelector('img');
document.querySelectorAll('.photo img').forEach(img=>img.addEventListener('click',()=>{big.src=img.src;big.alt=img.alt;box.classList.add('open')}));
function closeBox(){box.classList.remove('open');big.src=''}
box.querySelector('.close').addEventListener('click',closeBox);box.addEventListener('click',e=>{if(e.target===box)closeBox()});

const albumModal=document.getElementById('albumModal');
const albumTitle=document.getElementById('albumModalTitle');
const albumDate=document.getElementById('albumModalDate');
const albumPlace=document.getElementById('albumModalPlace');
const albumNote=document.getElementById('albumModalNote');
const albumGallery=document.getElementById('albumModalGallery');
const albums=[...document.querySelectorAll('.album')];
albums.forEach((album,index)=>{
  album.setAttribute('role','button'); album.setAttribute('tabindex','0');
  const open=()=>{
    albumTitle.textContent=album.querySelector('h3').textContent;
    albumDate.textContent=album.querySelector('.album-date').textContent;
    albumPlace.textContent=album.querySelector('.album-place').textContent;
    albumNote.textContent=album.querySelector('.album-note').textContent;
    albumGallery.innerHTML='';
    album.querySelectorAll('.album-stack img').forEach(img=>{
      const copy=img.cloneNode(); copy.removeAttribute('loading'); albumGallery.appendChild(copy);
      copy.addEventListener('click',()=>{big.src=copy.src;big.alt=copy.alt;box.classList.add('open')});
    });
    albumModal.classList.add('open'); document.body.style.overflow='hidden';
  };
  album.addEventListener('click',open); album.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
});
function closeAlbum(){albumModal.classList.remove('open');document.body.style.overflow=''}
albumModal.querySelector('.album-modal-close').addEventListener('click',closeAlbum);
albumModal.addEventListener('click',e=>{if(e.target===albumModal)closeAlbum()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(box.classList.contains('open')) closeBox(); else if(albumModal.classList.contains('open')) closeAlbum()}});
