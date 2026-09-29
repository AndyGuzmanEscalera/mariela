const x=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="shieldG" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#60A5FA"/><stop offset="100%" stop-color="#1E40AF"/>
          </linearGradient></defs>
          <path d="M 50 12 L 82 22 L 82 55 Q 82 80 50 92 Q 18 80 18 55 L 18 22 Z"
                fill="url(#shieldG)" stroke="#FFD700" stroke-width="3"/>
          <path d="M 50 28 L 62 38 L 56 52 L 68 58 L 50 78 L 32 58 L 44 52 L 38 38 Z"
                fill="#FFD700"/>
          <circle cx="50" cy="50" r="4" fill="#1E3A8A"/>
        </svg>
      `,A=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="swordG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#FCA5A5"/><stop offset="100%" stop-color="#B91C1C"/>
          </linearGradient></defs>
          <path d="M 28 72 L 50 50 L 72 72 L 80 64 L 50 34 L 20 64 Z"
                fill="url(#swordG)" stroke="#7F1D1D" stroke-width="2"/>
          <rect x="46" y="22" width="8" height="14" fill="#FFD700" rx="1"/>
          <rect x="38" y="18" width="24" height="6" fill="#FFD700" rx="2"/>
          <circle cx="50" cy="20" r="3" fill="#F59E0B"/>
        </svg>
      `,C=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="orbG" cx="50%" cy="30%">
            <stop offset="0%" stop-color="#E9D5FF"/><stop offset="100%" stop-color="#7C3AED"/>
          </radialGradient></defs>
          <rect x="47" y="40" width="6" height="50" fill="#4C1D95" rx="2"/>
          <circle cx="50" cy="32" r="14" fill="url(#orbG)" stroke="#5B21B6" stroke-width="2"/>
          <circle cx="50" cy="32" r="7" fill="#FAF5FF"/>
          <path d="M 28 32 L 18 22 M 72 32 L 82 22 M 30 35 L 22 18 M 70 35 L 78 18"
                stroke="#A78BFA" stroke-width="2" stroke-linecap="round"/>
          <circle cx="20" cy="22" r="2" fill="#E9D5FF"/>
          <circle cx="80" cy="22" r="2" fill="#E9D5FF"/>
          <circle cx="22" cy="18" r="2" fill="#E9D5FF"/>
          <circle cx="78" cy="18" r="2" fill="#E9D5FF"/>
        </svg>
      `,b=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><linearGradient id="bowG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#86EFAC"/><stop offset="100%" stop-color="#15803D"/>
          </linearGradient></defs>
          <path d="M 32 18 Q 76 50 32 82" stroke="url(#bowG)" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 32 18 L 32 82" stroke="#BBF7D0" stroke-width="1.5"/>
          <line x1="20" y1="50" x2="78" y2="46" stroke="#FFFCF2" stroke-width="2"/>
          <polygon points="78,46 70,44 70,48" fill="#FFFCF2"/>
          <polygon points="20,50 14,48 14,52" fill="#FFFCF2"/>
          <circle cx="78" cy="46" r="2" fill="#FCA5A5"/>
        </svg>
      `,B=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="crossG" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#FBCFE8"/><stop offset="100%" stop-color="#BE185D"/>
          </radialGradient></defs>
          <circle cx="50" cy="50" r="36" fill="url(#crossG)" stroke="#9D174D" stroke-width="2"/>
          <rect x="44" y="22" width="12" height="56" fill="#FFFCF2" rx="2"/>
          <rect x="22" y="44" width="56" height="12" fill="#FFFCF2" rx="2"/>
          <circle cx="50" cy="50" r="10" fill="rgba(255,255,255,0.4)"/>
          <circle cx="38" cy="38" r="2" fill="#FCE7F3"/>
        </svg>
      `,k=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="embG" cx="50%" cy="50%">
            <stop offset="0%" stop-color="#FEF3C7"/><stop offset="100%" stop-color="#D97706"/>
          </radialGradient></defs>
          <circle cx="50" cy="50" r="38" fill="url(#embG)" stroke="#92400E" stroke-width="3"/>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#FFFCF2" stroke-width="1.5" stroke-dasharray="4 2"/>
          <path d="M 50 25 L 56 42 L 74 42 L 60 52 L 66 70 L 50 60 L 34 70 L 40 52 L 26 42 L 44 42 Z"
                fill="#FFFCF2" stroke="#92400E" stroke-width="1"/>
          <circle cx="50" cy="48" r="4" fill="#DC2626"/>
        </svg>
      `,m=[{svg:x,answer:"Defensa",options:["Defensa","Ataque Físico","Magia","Curación"],hint:"Reduce el daño que recibís"},{svg:A,answer:"Ataque Físico",options:["Magia","Ataque Físico","Defensa","Velocidad"],hint:"Causa daño cuerpo a cuerpo"},{svg:C,answer:"Magia",options:["Curación","Magia","Ataque Físico","Defensa"],hint:"Lanza hechizos devastadores"},{svg:b,answer:"Ataque a Distancia",options:["Defensa","Ataque Físico","Ataque a Distancia","Curación"],hint:"Ataca desde lejos con precisión"},{svg:B,answer:"Curación",options:["Magia","Defensa","Curación","Ataque Físico"],hint:"Restaura la vida de los aliados"},{svg:k,answer:"Emblema",options:["Emblema","Botas","Arma","Pociones"],hint:"Poder pasivo que mejora tus stats"}],f=[{emojis:["🛡️","💪","⚔️"],answer:"Tank / Guerrero",options:["Tank / Guerrero","Maga","Asesina","Apoyo"],hint:"Defiende al equipo y aguanta todo el daño"},{emojis:["🧙‍♀️","🔮","✨"],answer:"Maga",options:["Arquera","Maga","Luchadora","Apoyo"],hint:"Lanza hechizos devastadores desde lejos"},{emojis:["🏹","🌿","👁️"],answer:"Arquera",options:["Tank / Guerrero","Apoyo","Arquera","Maga"],hint:"Ataca desde lejos con precisión mortal"},{emojis:["🗡️","🌙","⚡"],answer:"Asesina",options:["Maga","Asesina","Tank / Guerrero","Arquera"],hint:"Rápida, letal y aparece de la nada"},{emojis:["💖","🌸","🤲"],answer:"Apoyo",options:["Apoyo","Asesina","Luchadora","Arquera"],hint:"Cura al equipo y lo hace más fuerte"},{emojis:["🥋","👊","🔥"],answer:"Luchador",options:["Tank / Guerrero","Luchador","Maga","Apoyo"],hint:"Cuerpo a cuerpo, no se rinde nunca"},{emojis:["🎯","🔫","💨"],answer:"Tirador",options:["Tirador","Asesina","Luchador","Maga"],hint:"Ataques rápidos desde lejos, daño constante"},{emojis:["🐉","🌙","⚡"],answer:"Asesina",options:["Tank / Guerrero","Maga","Asesina","Apoyo"],hint:"Letal, sigilosa y muy rápida"}],j=[{name:"Hanabi",role:"Tiradora",emoji:"🏹💥"},{name:"Miya",role:"Tiradora",emoji:"🌟🏹"},{name:"Pharsa",role:"Maga",emoji:"🔥🦅"},{name:"Luo Yi",role:"Maga",emoji:"🌙🧧"},{name:"Estes",role:"Apoyo",emoji:"💚🌿"},{name:"Guinevere",role:"Maga",emoji:"👸✨"},{name:"Fanny",role:"Asesina",emoji:"🗡️💨"},{name:"Kagura",role:"Maga",emoji:"🧙‍♀️🔮"},{name:"Chou",role:"Luchador",emoji:"🥋⚡"},{name:"Angela",role:"Apoyo",emoji:"💖🌸"}];document.documentElement.dataset.baseUrl;const M="https://mariela-responses.andyguzman117.workers.dev";let i=0,c=0,g=0;const h=m.length+f.length,v={welcome:document.getElementById("screen-welcome"),roundIntro:document.getElementById("screen-round-intro"),game:document.getElementById("screen-game"),final:document.getElementById("screen-final"),result:document.getElementById("screen-result")},p=o=>{Object.values(v).forEach(e=>e.classList.remove("screen-active")),v[o].classList.add("screen-active")};document.getElementById("btn-start")?.addEventListener("click",()=>{i=0,c=0,g=0,F()});document.getElementById("btn-round-start")?.addEventListener("click",()=>{p("game"),E()});const F=()=>{const o=document.getElementById("round-intor-badge"),e=document.getElementById("round-intro-title"),t=document.getElementById("round-intro-desc");i===0?(o&&(o.textContent="Ronda 1"),e&&(e.textContent="Reconocé los items"),t&&(t.innerHTML="Te voy a mostrar objetos del juego.<br/>Decime qué tipo de objeto es.")):(o&&(o.textContent="Ronda 2"),e&&(e.textContent="Adivina el héroe"),t&&(t.innerHTML="Ahora con emojis mágicos.<br/>¿Qué clase de héroe representan?")),p("roundIntro")},E=()=>{const o=i===0?m:f,e=o[c],t=o.length,s=i*m.length+c,l=document.getElementById("progress-fill"),d=document.getElementById("round-label"),n=document.getElementById("round-counter");d&&(d.textContent=`Ronda ${i+1}`),n&&(n.textContent=`Pregunta ${c+1} / ${t}`),l&&(l.style.width=`${s/h*100}%`);const r=document.getElementById("item-display"),y=document.getElementById("rune-container");if(i===0){r?.classList.remove("hidden"),y?.classList.add("hidden");const a=document.getElementById("item-svg");a&&(a.innerHTML=e.svg)}else{r?.classList.add("hidden"),y?.classList.remove("hidden");const a=document.getElementById("rune-emojis");a&&(a.innerHTML=e.emojis.map(L=>`<span>${L}</span>`).join(" + "))}const w=document.getElementById("options-grid"),u=document.getElementById("feedback");u&&(u.classList.add("hidden"),u.classList.remove("correct","wrong"),u.textContent=""),w.innerHTML=e.options.map(a=>`
            <button type="button" class="option-btn" data-value="${a}">
              <span>${a}</span>
            </button>
          `).join(""),w.querySelectorAll(".option-btn").forEach(a=>{a.addEventListener("click",()=>q(a,e.answer,e.hint))})},q=(o,e,t)=>{const s=document.getElementById("feedback"),l=document.querySelectorAll(".option-btn");if(l.forEach(n=>n.disabled=!0),o.dataset.value===e)g++,o.classList.add("is-correct"),s.textContent=`✨ ¡Correcto! ${t}`,s.classList.add("correct");else{o.classList.add("is-wrong");const n=Array.from(l).find(r=>r.dataset.value===e);n&&n.classList.add("is-correct"),s.textContent=`😅 Casi... era "${e}".`,s.classList.add("wrong")}s.classList.remove("hidden"),window.setTimeout(()=>{if(c++,c<(i===0?m:f).length)E();else if(i===0)i=1,c=0,F();else{p("final"),D();const r=document.getElementById("progress-fill");r&&(r.style.width="100%")}},1800)},D=()=>{const o=document.getElementById("heroine-grid");o.innerHTML=j.map(e=>`
            <button type="button" class="heroine-btn" data-name="${e.name}" data-role="${e.role}">
              <span style="font-size:24px;">${e.emoji.split("")[0]}</span>
              <span>${e.name}</span>
              <span class="role">${e.role}</span>
            </button>
          `).join(""),o.querySelectorAll(".heroine-btn").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.name,s=e.dataset.role;G(t,s)})})},G=(o,e)=>{const s={Hanabi:"Hanabi lanza sus flechas con una precisión increíble, llena de luz y de poder. Como vos cuando jugás: enfocada, segura, sin que nada te detenga.",Miya:"Miya dispara desde lejos con precisión y paciencia. Clásica y elegante, como la esencia que llevás dentro.",Pharsa:"Pharsa vuela sobre el campo de batalla con una vista que nadie más tiene. Como vos: siempre viendo las cosas desde otra perspectiva.","Luo Yi":"Luo Yi lee los astros y guía con magia antigua. Como vos: siempre conectada con lo que sentís, con esa intuición que no falla.",Estes:"Estes es de los apoyos más nobles: curar sin esperar nada a cambio. Como vos con los que querés.",Guinevere:"Guinevere es elegante, poderosa y tiene un corazón noble. Como vos, Mariela: fuerte por fuera, suave por dentro.",Fanny:"Fanny es rápida, arriesgada y hace cosas que nadie más se atreve. Como vos.",Kagura:"Kagura es mágica, llena de luz. Como la magia que le pusiste a mi vida.",Chou:"Chou nunca se rinde, aguanta todo y vuelve más fuerte. Eso sos vos, Mariela.",Angela:"Angela cuida, protege y da todo por los suyos. Como vos."}[o]||`Elegiste a ${o}. Si es tu favorita, ya me cae bien. 💛`,l=document.getElementById("result-title"),d=document.getElementById("result-message"),n=document.getElementById("final-score"),r=document.getElementById("final-total");l&&(l.textContent=`${o}, ${e}`),d&&(d.textContent=s),n&&(n.textContent=String(g)),r&&(r.textContent=String(h)),p("result"),I(o,e)},I=async(o,e)=>{try{const t=new FormData;t.set("Respuesta",`Heroína favorita: ${o}`),t.set("Mensaje",`Rol: ${e} | Puntaje en el juego: ${g}/${h}`),await fetch(M,{method:"POST",body:t,headers:{Accept:"application/json"}})}catch(t){console.warn("No se pudo guardar:",t)}};
