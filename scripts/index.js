var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  loop: true,
  loopComplete: () => {
      for (let i = 0; i < tl.children.length; i += 1) {
        tl.children[i].completed = false;
        tl.children[i].began = false;
      }
    }
});

anime({
  targets: '.hero-title',
  translateY: [250 , 0],
  easing: 'easeOutExpo',
  opacity: [0,1],
  duration: 1500
});
anime({
  targets: '.hero-img-obj',
  easing: 'easeOutExpo',
  opacity: [0,1],
  duration: 2500
});

anime({
  targets: '.hero-bodies',
  easing: 'easeOutExpo',
  opacity: [0,1],
  translateY: [100, 0],
  duration: 2500
});

tl.add({
  targets: '.text-1',
  opacity: [0,1],
  begin: ()=>{
      console.log('c');
      document.querySelector('.text-1').classList.remove('dispnon');
  }
});
tl.add({
  targets: '.text-1',
  opacity: [1,0],
  delay: 3000,
  complete: ()=>{
      document.querySelector('.text-1').classList.add('dispnon');
  }
});
tl.add({
  targets: '.text-2',
  opacity: [0,1],
  begin: ()=>{
      document.querySelector('.text-2').classList.remove('dispnon');
  }
});
tl.add({
  targets: '.text-2',
  opacity: [1,0],
  delay: 3000,
  complete: ()=>{
      document.querySelector('.text-2').classList.add('dispnon');
  }
});
tl.add({
  targets: '.text-3',
  opacity: [0,1],
  begin: ()=>{
      document.querySelector('.text-3').classList.remove('dispnon');
  }
});
tl.add({
  targets: '.text-3',
  opacity: [1,0],
  delay: 3000,
  complete: ()=>{
      document.querySelector('.text-3').classList.add('dispnon');
  }
});
tl.add({
  targets: '.text-4',
  opacity: [0,1],
  begin: ()=>{
      document.querySelector('.text-4').classList.remove('dispnon');
  }
});
tl.add({
  targets: '.text-4',
  opacity: [1,0],
  delay: 3000,
  complete: ()=>{
      document.querySelector('.text-4').classList.add('dispnon');
  }
});
tl.add({
  targets: '.text-5',
  opacity: [0,1],
  begin: ()=>{
      document.querySelector('.text-5').classList.remove('dispnon');
  }
});
tl.add({
  targets: '.text-5',
  opacity: [1,0],
  delay: 3000,
  complete: ()=>{
      document.querySelector('.text-5').classList.add('dispnon');
  }
});