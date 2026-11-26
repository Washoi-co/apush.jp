// 前へ・次へ・何枚目か・矢印キー。中身は .deck の .s を数えるだけ。
const deck = document.querySelector('.deck'), slides = [...deck.querySelectorAll('.s')];
const [prev, next] = document.querySelectorAll('.nav button'), out = document.querySelector('.nav output');
const cur = () => Math.round(deck.scrollLeft / deck.clientWidth);
const go = i => deck.scrollTo({ left: Math.max(0, Math.min(slides.length - 1, i)) * deck.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
const show = () => { const i = cur(); out.value = `${i + 1} / ${slides.length}`; prev.disabled = i === 0; next.disabled = i === slides.length - 1; };
prev.onclick = () => go(cur() - 1); next.onclick = () => go(cur() + 1);
deck.addEventListener('scroll', show, { passive: true });
addEventListener('keydown', e => { if (e.key === 'ArrowRight') go(cur() + 1); if (e.key === 'ArrowLeft') go(cur() - 1); });
show();
