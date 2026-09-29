document.documentElement.dataset.baseUrl;const C="https://mariela-responses.andyguzman117.workers.dev",t={bossHP:200,bossMaxHP:200,playerHP:60,playerMaxHP:60,playerHearts:3,skillsCooldown:{attack:0,special:0,dodge:0},skillCooldownMax:{attack:1,special:4,dodge:5},bossAttackTimer:3,warningActive:!1,dodgeActive:!1,totalDamageDealt:0,attackCount:0,dodgeCount:0,status:"fighting",lastFrame:performance.now()},f={welcome:document.getElementById("screen-welcome"),battle:document.getElementById("screen-battle"),victory:document.getElementById("screen-victory"),defeat:document.getElementById("screen-defeat")},m=e=>{Object.values(f).forEach(s=>s.classList.remove("screen-active")),f[e].classList.add("screen-active")},E=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bossBody" cx="50%" cy="40%">
              <stop offset="0%" stop-color="#7F1D1D"/>
              <stop offset="100%" stop-color="#1F0A0A"/>
            </radialGradient>
            <radialGradient id="bossEye" cx="50%" cy="50%">
              <stop offset="0%" stop-color="#FBBF24"/>
              <stop offset="100%" stop-color="#DC2626"/>
            </radialGradient>
          </defs>
          <!-- Cuerpo -->
          <ellipse cx="50" cy="60" rx="38" ry="32" fill="url(#bossBody)"/>
          <!-- Cuernos -->
          <path d="M 22 35 L 15 15 L 28 28 Z" fill="#1F0A0A" stroke="#7F1D1D" stroke-width="1.5"/>
          <path d="M 78 35 L 85 15 L 72 28 Z" fill="#1F0A0A" stroke="#7F1D1D" stroke-width="1.5"/>
          <!-- Ojos brillantes -->
          <ellipse cx="38" cy="55" rx="6" ry="7" fill="url(#bossEye)"/>
          <ellipse cx="62" cy="55" rx="6" ry="7" fill="url(#bossEye)"/>
          <circle cx="38" cy="55" r="2" fill="#000"/>
          <circle cx="62" cy="55" r="2" fill="#000"/>
          <!-- Boca -->
          <path d="M 35 72 Q 50 82, 65 72 L 65 75 Q 50 85, 35 75 Z" fill="#1F0A0A"/>
          <!-- Dientes -->
          <path d="M 40 73 L 42 76 L 44 73 Z" fill="#FFFCF2"/>
          <path d="M 56 73 L 58 76 L 60 73 Z" fill="#FFFCF2"/>
          <!-- Espinas en espalda -->
          <path d="M 50 28 L 47 22 L 53 22 Z" fill="#1F0A0A"/>
          <path d="M 38 30 L 35 25 L 41 25 Z" fill="#1F0A0A"/>
          <path d="M 62 30 L 59 25 L 65 25 Z" fill="#1F0A0A"/>
        </svg>
      `,w=`
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="playerBody" cx="50%" cy="40%">
              <stop offset="0%" stop-color="#FEF3C7"/>
              <stop offset="100%" stop-color="#F59E0B"/>
            </radialGradient>
          </defs>
          <!-- Cuerpo -->
          <ellipse cx="50" cy="60" rx="32" ry="30" fill="url(#playerBody)" stroke="#D97706" stroke-width="1.5"/>
          <!-- Cara -->
          <circle cx="50" cy="48" r="20" fill="#FEF3C7" stroke="#D97706" stroke-width="1.2"/>
          <!-- Ojos -->
          <ellipse cx="43" cy="48" rx="2" ry="2.5" fill="#7C2D12"/>
          <ellipse cx="57" cy="48" rx="2" ry="2.5" fill="#7C2D12"/>
          <!-- Brillo ojos -->
          <circle cx="44" cy="47" r="0.6" fill="#FFFCF2"/>
          <circle cx="58" cy="47" r="0.6" fill="#FFFCF2"/>
          <!-- Sonrisa -->
          <path d="M 44 55 Q 50 60, 56 55" stroke="#7C2D12" stroke-width="1.5" fill="none" stroke-linecap="round"/>
          <!-- Cabello -->
          <path d="M 30 38 Q 35 25, 50 30 Q 65 25, 70 38 L 68 42 Q 60 35, 50 38 Q 40 35, 32 42 Z" fill="#92400E"/>
          <!-- Corona -->
          <path d="M 40 28 L 45 22 L 50 28 L 55 22 L 60 28 L 58 32 L 42 32 Z" fill="#FFD466" stroke="#D97706" stroke-width="0.8"/>
        </svg>
      `,p=document.getElementById("boss-sprite"),u=document.getElementById("player-sprite");p&&(p.innerHTML=E);u&&(u.innerHTML=w);document.getElementById("btn-start")?.addEventListener("click",()=>{y(),m("battle"),requestAnimationFrame(x)});document.getElementById("btn-retry")?.addEventListener("click",()=>{y(),m("battle")});const y=()=>{t.bossHP=200,t.playerHP=60,t.playerHearts=3,t.skillsCooldown={attack:0,special:0,dodge:0},t.bossAttackTimer=3,t.warningActive=!1,t.dodgeActive=!1,t.totalDamageDealt=0,t.attackCount=0,t.dodgeCount=0,t.status="fighting",c()};document.getElementById("skill-attack")?.addEventListener("click",()=>{t.status==="fighting"&&(t.skillsCooldown.attack>0||(t.skillsCooldown.attack=t.skillCooldownMax.attack,h(10,!1),t.attackCount++))});document.getElementById("skill-special")?.addEventListener("click",()=>{t.status==="fighting"&&(t.skillsCooldown.special>0||(t.skillsCooldown.special=t.skillCooldownMax.special,h(30,!0),t.attackCount++))});document.getElementById("skill-dodge")?.addEventListener("click",()=>{t.status==="fighting"&&(t.skillsCooldown.dodge>0||(t.skillsCooldown.dodge=t.skillCooldownMax.dodge,t.dodgeActive=!0,d("🛡️ Bloqueado!","block"),t.dodgeCount++))});const h=(e,s)=>{t.bossHP=Math.max(0,t.bossHP-e),t.totalDamageDealt+=e,d(`-${e}`,s?"crit":"normal",!0);const o=document.getElementById("boss-sprite");o?.classList.add("is-hit"),setTimeout(()=>o?.classList.remove("is-hit"),400),k(),B(),c(),t.bossHP<=0&&(t.status="victory",setTimeout(v,800))},L=e=>{if(t.dodgeActive){d("🛡️ Bloqueado!","block"),t.dodgeActive=!1;return}t.playerHP=Math.max(0,t.playerHP-e),t.playerHearts=Math.ceil(t.playerHP/20),d(`-${e}`,"normal",!1);const s=document.getElementById("player-sprite");s?.classList.add("is-hit"),setTimeout(()=>s?.classList.remove("is-hit"),400),k(),c(),t.playerHP<=0&&(t.status="defeat",setTimeout(A,800))},F=()=>{const e=t.bossHP/t.bossMaxHP;return e<.25?1.5:e<.5?2:3},B=()=>{const e=document.getElementById("boss-phase");if(!e)return;const s=t.bossHP/t.bossMaxHP;s<.25?(e.textContent="🔥 Fase 3 - Enraged",e.classList.add("is-enraged")):s<.5?(e.textContent="⚡ Fase 2",e.classList.remove("is-enraged")):(e.textContent="Fase 1",e.classList.remove("is-enraged"))},d=(e,s,o=!0)=>{const a=document.getElementById("damage-log");if(!a)return;const i=document.createElement("div");i.className=`damage-num ${s==="crit"?"is-crit":""} ${s==="block"?"is-block":""}`,i.textContent=e;const n=o?80+Math.random()*40:280+Math.random()*40;i.style.top=`${n}px`,i.style.right=`${10+Math.random()*30}px`,a.appendChild(i),setTimeout(()=>i.remove(),1e3)},k=()=>{const e=document.getElementById("battle-frame");e?.classList.add("is-shaking"),setTimeout(()=>e?.classList.remove("is-shaking"),400)},c=()=>{const e=document.getElementById("boss-hp-fill"),s=document.getElementById("boss-hp-text"),o=document.getElementById("player-hp-fill"),a=document.getElementById("player-hp-text"),i=document.getElementById("player-hearts");e&&(e.style.width=`${t.bossHP/t.bossMaxHP*100}%`),s&&(s.textContent=`${t.bossHP} / ${t.bossMaxHP}`),o&&(o.style.width=`${t.playerHP/t.playerMaxHP*100}%`),a&&(a.textContent=`${t.playerHP} / ${t.playerMaxHP}`),i&&i.querySelectorAll(".heart").forEach((l,r)=>{r<t.playerHearts?l.classList.remove("is-lost"):l.classList.add("is-lost")}),["attack","special","dodge"].forEach(n=>{const l=document.getElementById(`skill-${n}`);if(l)if(t.skillsCooldown[n]>0){l.classList.add("is-cooling"),l.setAttribute("disabled","true");const r=l.querySelector(".skill-cd");r&&(r.textContent=`${t.skillsCooldown[n].toFixed(1)}s`)}else{l.classList.remove("is-cooling"),l.removeAttribute("disabled");const r={attack:"10 dmg",special:"30 dmg",dodge:"Bloquea"},g=l.querySelector(".skill-cd");g&&(g.textContent=r[n])}})},x=e=>{if(t.status!=="fighting")return;const s=Math.min(.1,(e-t.lastFrame)/1e3);t.lastFrame=e;for(const a of["attack","special","dodge"])t.skillsCooldown[a]=Math.max(0,t.skillsCooldown[a]-s);t.bossAttackTimer-=s;const o=document.getElementById("attack-warning");t.bossAttackTimer<=0&&(t.warningActive?(L(15),t.warningActive=!1,t.bossAttackTimer=F(),o&&o.classList.add("hidden")):(t.warningActive=!0,t.bossAttackTimer=1.2,o&&o.classList.remove("hidden"))),c(),requestAnimationFrame(x)},v=()=>{const e=document.getElementById("stat-damage"),s=document.getElementById("stat-attacks"),o=document.getElementById("stat-dodges"),a=document.getElementById("stat-hearts");e&&(e.textContent=String(t.totalDamageDealt)),s&&(s.textContent=String(t.attackCount)),o&&(o.textContent=String(t.dodgeCount)),a&&(a.textContent=`${t.playerHearts} / 3`),m("victory"),b(!0)},A=()=>{m("defeat"),b(!1)},b=async e=>{try{const s=new FormData;s.set("Respuesta",e?"Victoria contra Lord Boss":"Derrota contra Lord Boss"),s.set("Mensaje",`Daño: ${t.totalDamageDealt} | Ataques: ${t.attackCount} | Esquivas: ${t.dodgeCount} | Vidas restantes: ${t.playerHearts}/3`),await fetch(C,{method:"POST",body:s,headers:{Accept:"application/json"}})}catch(s){console.warn("No se pudo guardar el resultado:",s)}};c();
