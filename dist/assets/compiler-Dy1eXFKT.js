import"./modulepreload-polyfill-P2Xu9kJm.js";import{i as e,o as t,r as n}from"./queueStore-D7KRN-jj.js";function r(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}async function i(){let r=await e(),i=await n(),s=document.getElementById(`doc-title-input`),c=document.getElementById(`doc-main-title`),l=document.getElementById(`doc-metadata`),u=document.getElementById(`section-count`),d=document.getElementById(`status-msg`),f=document.getElementById(`layout-select`),p=document.getElementById(`print-btn`),m=document.getElementById(`doc-content`);if(i.layout&&(f.value=i.layout,a(i.layout)),u.textContent=`${r.length} section${r.length===1?``:`s`}`,l.textContent=`Generated on ${new Date().toLocaleDateString(void 0,{year:`numeric`,month:`long`,day:`numeric`})} • ${r.length} Sections`,s.addEventListener(`input`,()=>{let e=s.value.trim()||`Compiled Academic Notes`;c.textContent=e,document.title=`${e} - Academic PDF`}),f.addEventListener(`change`,async()=>{let e=f.value;a(e),await t({layout:e})}),p.addEventListener(`click`,()=>{window.print()}),r.length===0){d.textContent=`Queue is empty`,m.innerHTML=`
      <div style="text-align: center; padding: 48px 0; color: #64748b;">
        <p style="font-size: 14pt; margin-bottom: 8px;">No sections queued yet.</p>
        <p style="font-size: 10pt;">Navigate to any course page and click "Add Current Page" from the extension side panel.</p>
      </div>
    `;return}o(r,m),d.textContent=`Ready to print`}function a(e){document.body.classList.remove(`layout-single-column`,`layout-two-column`),document.body.classList.add(`layout-${e}`)}function o(e,t){let n=[];e.forEach((e,t)=>{let i=t+1;n.push(`
      <section class="academic-section" id="section-${e.id}">
        <div class="academic-divider">
          <span>§ ${i}. ${r(e.title)}</span>
        </div>
        <div class="section-body">
          ${e.sanitizedHtml}
        </div>
      </section>
    `)}),t.innerHTML=n.join(`
`)}document.addEventListener(`DOMContentLoaded`,i);