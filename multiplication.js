javascript:function automate() { let t = Math.floor(Math.random() * 500 + 900); setTimeout(() => {  let z = document.getElementsByClassName("content")[0].children; let x = z[0].innerText.split(" x "); x = parseInt(x[0]) * parseInt(x[1]); for (let i = 1; i < z.length; i++) { if (z[i].innerText == x) z[i].click(); } automate(); }, t); } automate();
