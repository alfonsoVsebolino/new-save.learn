(self["webpackChunk"]=self["webpackChunk"]||[]).push([["ReduxStorage_CohortRoles_selectors_web_ts","courseTheme","jquery","reduxStorage"],{13704:(e,o,t)=>{"use strict";t.d(o,{G5:()=>k,Gj:()=>v,K_:()=>T,NB:()=>A,NX:()=>$,Op:()=>z,T8:()=>R,Wl:()=>O,Xh:()=>x,b5:()=>C,cW:()=>N,dU:()=>_,eE:()=>E,ev:()=>P,hf:()=>y,w0:()=>M,zU:()=>S});var r=t(24885);var n=t(53624);var a=t.n(n);var i=t(63994);var s=t(77949);var c=t(22715);var d=t(33246);var l=t(34203);var u=t(98064);var p=t(14780);var g=t(87192);var m=t(78674);var b=t(23194);function h(e){return e.CourseNavigationInfo}const f=a().Map();const x=(0,r.Mz)(h,d.KU,((e,o)=>o?e.getIn(["byCoursePath",o],f):null));const v=(0,r.Mz)([x],(e=>e.get("hasLoadedNavData")?e.get("moduleVisibility"):null));const $=(0,r.Mz)([x],(e=>e.get("showAccessSuspended")));const w=(e,o,t)=>{let r=false;if(e.get("pagePath")&&e.get("pagePath")===o){r=true}else if(e.get("type")==="default-module-set"&&t==="Default"){r=true}else if(e.get("type")==="module-set"&&t===e.get("name")){r=true}return r};const _=e=>{if(e.get("external")){return null}else if(e.get("type")==="separator"){return null}else if(e.get("type")==="default-module-set"){return null}else if(e.get("type")==="module-set"){return null}const o="/".concat(e.get("pagePath")).split("/courses/");if(o.length<2){return null}const t=o[1];const r=t.split("/").slice(1);return r.join("/")||""};const k=(0,r.Mz)([x,l.Qk,m.p],((e,o,t)=>{const r=e&&e.get("links");let a=0;return r?r.map((e=>e.set("inUse",w(e,o,t)).set("courseSubPath",_(e)).set("index",a++))):new n.List}));const y=(0,r.Mz)([d.KU,(0,i.ZX)(s.T.EXAM_ACCESS_CONTROL)],((e,o)=>{if(!e){return null}return(0,n.fromJS)([{name:"General",action:"general"},{name:"Timeline",action:"timeline"},{name:"Learners",action:"students"},{name:"Statistics",action:"statistics"},{name:"Announcements",action:"announcements"},o.enabled&&{name:"Exam access",action:"exam-access"},{name:"Advanced",action:"advanced"}].filter(Boolean))}));const S=(0,r.Mz)([d.KU,c.xG,(0,i.ZX)(s.T.COURSE_COMPLETION)],((e,o,t)=>{if(!e||!o){return null}const r=[{name:"Setup Wizard",action:"starter"},{name:"General",action:"general"},{name:"Appearance",action:"appearance"},{name:"Staff Roles",action:"roles"},{name:"Classes",action:"classes"},{name:"Groups",action:"groups"},{name:"Notifications",action:"notifications_admin"},t.enabled&&{name:"Completion",action:"completion"},{name:"Achievements",action:"community"},{name:"Exports",action:"exports"},{name:"Advanced",action:"advanced"}].filter(Boolean);return(0,n.fromJS)(r)}));const C=(0,r.Mz)([d.KU,c.xG,b.H],((e,o,t)=>{if(!e||!o){return null}const r=[{name:"Learning outcomes",action:"learning_outcomes"},{name:"Course builder",action:"course_builder"},{name:"Content editor",action:"content"},t&&{name:"Portfolio",action:"portfolio"}].filter(Boolean);return(0,n.fromJS)(r)}));const E=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("courseDesignAdminExpanded")){return e.get("courseDesignAdminExpanded")}else{return o.get("type")===p.e$}}));const M=(0,r.Mz)([d.KU,c.xG],((e,o)=>{if(!e||!o){return null}const t=[{name:"Landing Page",action:"landing_page"},{name:"Marketplace",action:"marketplace"}];return(0,n.fromJS)(t)}));const A=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("coursePromoAdminExpanded")){return e.get("coursePromoAdminExpanded")}else{return o.get("type")===p.e$}}));const P=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("courseAdminExpanded")){return e.get("courseAdminExpanded")}else{return o.get("type")===p.e$}}));const O=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("cohortAdminExpanded")){return e.get("cohortAdminExpanded")}else{return o.get("type")===p.I6}}));const T=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("certificationExpanded")){return e.get("certificationExpanded")}else{return o.get("type")===p.zg}}));const z=(0,r.Mz)(h,u.UA,((e,o)=>{if(e&&e.has("assessmentExpanded")){return e.get("assessmentExpanded")}else{return o.get("type")===p.lG}}));const N=(0,r.Mz)([h,d.KU],((e,o)=>e.getIn(["byCoursePath",o,"isLoadingNavData"],false)));const R=(0,r.Mz)([h,d.KU],((e,o)=>e.getIn(["byCoursePath",o,"hasLoadedNavData"],false)))},16530:(e,o,t)=>{"use strict";t.d(o,{Tn:()=>k,Wk:()=>y,mJ:()=>d,ow:()=>M});var r=t(67700);const n="https://upload.wikimedia.org/wikipedia/commons/a/a2/Monet_Chasse-maree_a_l%27ancre_Musee_d%27Orsay.jpg";const a=e=>(0,r.css)``;const i=150;const s=210;const c=290;const d=768;const l=980;const u=1200;const p=1920;const g=2;const m=10;const b=16;const h=2;const f=8;const x=6;const v=36;const $=28;const w=100;const _=90;const k=104;const y=116;const S=40;const C=24;const E=3;const M=e=>{const{themeColor:o,themeColor85:t,themeColor70:n,courseLayoutSettings:k}=e;if(!k.modern){return(0,r.css)``}if(k.courseFrame==="originalCourseFrame"){return(0,r.css)`
      body {
        background-image: none;
      }

      body,
      #site-container,
      .course-info-container {
        background-color: ${o};
        padding-bottom: 0;
      }

      #site-page-header-container {
        display: ${k.bannerEnabled?"block":"none"};
      }

      .first-page-container {
        margin-top: 0;
      }

      /* ===== Change: Small paddings on the outermost part of the page */
      .course-container-row {
        /* padding: 0 ${m}px; */
        padding: 0;
      }

      nav.course-sidebar-span {
        padding-left: ${m}px;

        @media (min-width: ${d}px) and (max-width: ${l}px) {
          width: ${i}px;
        }

        @media (min-width: ${l}px) {
          width: ${s}px;
        }

        @media (min-width: ${u}px) {
          width: ${c}px;
        }

        @media (min-width: ${p}px) {
          padding-left: 0;
        }
      }

      #course-page-container {
        @media (min-width: ${d}px) {
          width: calc(100% - ${i+m}px);
          padding-right: ${m}px;
        }

        @media (min-width: ${l}px) {
          width: calc(100% - ${s+m}px);
        }

        @media (min-width: ${u}px) {
          width: calc(100% - ${c+m}px);
        }

        @media (min-width: ${p}px) {
          padding-right: 0;
        }
      }

      /* Applies to course block pages */
      #course-page-content.viewing-block-page {
        /* Height starts at 0 but will be set once items start rendering */
        --pseudo-height: 0px;

        &::before {
          content: '';
          position: fixed;
          top: 0;
          right: 0;
          height: var(--pseudo-height);
          background: ${o};
          z-index: ${E};

          // Full width on mobile devices
          left: 0;

          // Avoids the sidebar column on tablets and desktops
          @media (min-width: ${d}px) {
            left: calc(${i}px + ${g}px);
          }

          @media (min-width: ${l}px) {
            left: calc(${s}px + ${g}px);
          }

          @media (min-width: ${u}px) {
            left: calc(${c}px + ${g}px);
          }

          // If the window width is less than the max container width, the main
          // container will be full width. However when it is not, then the
          // main container is centered, meawrning that we need to calculate
          // the left hand side offset due to the centering.
          @media (min-width: ${p}px) {
            left: calc(
              (100% - ${p}px) / 2 + ${c}px +
                ${m}px
            );
          }
        }
      }
      /* ===== End of change */

      /* Applies to both course block pages and setup pages */
      #course-page-content {
        border-radius: ${f}px;
        box-shadow: none;
      }

      module-display {
        margin-top: ${g}px;
      }

      #communityFooter {
        border-radius: ${f}px;
      }

      .banner-title-text {
        font-size: ${S}px;

        @media (max-width: ${d}px) {
          font-size: ${C}px;
        }
      }

      .course-banner-small-container,
      .course-banner-small-background-img {
        border-radius: ${f}px;
        min-height: ${w}px;
      }

      #site-page-header-container {
        .row {
          margin-left: 0;
        }

        .span12 {
          background-color: ${o};
          margin-left: 0;
          width: 100%;
        }
      }

      .course-banner-background {
        /* border-radius: 8px; */

        .course-banner-background-img {
          height: 100%;
          width: 100%;
          object-fit: ${k.bannerFit==="contain"?"contain":"cover"};
        }
      }

      #course-info {
        background: transparent;
        border-radius: ${f}px;

        .course-stats {
          /* border-radius: ${f}px; */
        }
      }

      course-sidebar {
        #course-sidebar.courseSidebar {
          padding-left: 0;
          padding-right: 0;

          #course-links .section:first-child {
            margin-top: 0;
          }
        }
      }

      .course-page-container-padding {
        padding: 0 !important;
        border-top-right-radius: ${h}px;
        border-bottom-right-radius: ${h}px;
        width: 100%;
      }

      @media (min-width: 768px) {
        .container,
        .navbar-static-top .container,
        .navbar-fixed-top .container,
        .navbar-fixed-bottom .container {
          width: 100%;
          max-width: ${p}px;
        }
      }

      blockpage-header {
        background-color: ${o};
      }

      blockpage-header > div.blockpage-header-container {
        /* Wait for outcome tags to be implemented here */
        /* height: 167px; */
        padding: ${b}px;

        &.no-page-options {
          border-top-left-radius: ${f}px;
          border-top-right-radius: ${f}px;
        }
      }

      page-options-bar {
        min-height: ${v}px !important;

        page-mode-toggle {
          height: ${$}px !important;
        }

        div.page-options {
          height: ${v}px !important;
          border-top-right-radius: ${f}px;
          border-top-left-radius: ${f}px;

          // border-top-right-radius and border-top-left-radius of this element
          // are set dynamically in updateCourseInfoBarLocation().
        }

        .page-mode-button {
          height: ${$}px !important;

          &.mode-view {
            border-top-left-radius: ${x}px;
            border-bottom-left-radius: ${x}px;
          }

          &.mode-edit {
            border-top-right-radius: ${x}px;
            border-bottom-right-radius: ${x}px;
          }
        }
      }

      #page-options-bar {
        background: ${o};
      }

      #portal-footer-mount portal-footer {
        margin-top: ${_}px !important;
      }

      .page-options.container {
        .edit-option.right-option {
          border-top-right-radius: ${x}px;
        }
      }

      // Widget toolbox for edit mode
      #block-activity-container.widget-toolbox-container-wrapper {
        margin-top: 11px;
        margin-left: 10px;
        border-radius: ${f}px;
        left: 0;
        width: 0;

        @media (min-width: ${d}px) {
          width: 140px;
        }

        @media (min-width: ${l}px) {
          width: 200px;
        }

        @media (min-width: ${u}px) {
          width: 280px;
        }

        @media (min-width: ${p}px) {
          left: calc((100% - ${p}px) / 2);
        }

        widget-toolbox {
          /* We move the horizontal padding to the children, so that the
          scrollbar appears at the edge. */
          padding: 10px 0;

          .toolbox-tip,
          .widget-toolbox-selection {
            // previously 10px
            padding-left: 18px;
            padding-right: 18px;
          }

          .widget-toolbox-scroll-container {
            padding-left: 10px;
            padding-right: 10px;
          }

          .widget-subcategory {
            display: flex;
            flex-direction: column;
          }

          .widget-toolbox-selection {
            width: 100%;
            margin-left: 0;
            margin-bottom: 8px;
          }

          .widget-toolbox-scroll-container > p {
            margin-left: 10px;
          }

          .widget-subcategory-widgets {
            max-width: 100%;
            display: grid;
            justify-content: space-evenly;
            justify-items: start;
            gap: 4px;
            grid-template-columns: repeat(auto-fit, minmax(72px, 1fr));

            @media (min-width: ${d}px) {
              grid-template-columns: repeat(1, minmax(72px, 1fr));
            }

            @media (min-width: ${l}px) {
              grid-template-columns: repeat(2, minmax(72px, 1fr));
            }

            @media (min-width: ${u}px) {
              grid-template-columns: repeat(3, minmax(72px, 1fr));
            }

            .widget-icon-button {
              width: 100%;

              .widget-icon {
                width: 100%; // previously 80px

                .icon {
                  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.07),
                    0 3px 6px rgba(0, 0, 0, 0.1);
                }
              }
            }
          }
        }
      }

      cohort-groups-grid {
        .groups-heading {
          max-width: ${u}px;
          margin: 0 auto;
        }
      }

      // Uncomment this when we want some widgets (e.g. RichText, ShareText)
      // to have a maximum width and then centered on the block page.
      /* blockpage-content {
        blockpage-block {
          &.RichTextWidget,
          &.ShareTextWidget {
            width: 100%;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      } */
    `}return a({themeColor:o,themeColor85:t,themeColor70:n})}},23194:(e,o,t)=>{"use strict";t.d(o,{H:()=>i});var r=t(24885);var n=t(33246);const a=e=>e.CurrentCoursePortfolio;const i=(0,r.Mz)(a,n.KU,((e,o)=>e.getIn([o,"portfolioAllowed"],false)))},25209:(e,o,t)=>{"use strict";t.d(o,{bv:()=>c,r:()=>d});var r=t(24885);var n=t(53624);var a=t.n(n);var i=t(33246);const s=a().fromJS({type:"",code:"",data:{},isProcessing:false});const c=e=>e.Certification;const d=(0,r.Mz)(c,i.KU,((e,o)=>{if(o){return e.getIn(["byCoursePath",o])||s}else{return null}}));const l=e=>createSelector([c],(o=>o.getIn(["byCoursePath",e],Immutable.Map())));const u=(0,r.Mz)([i.EI],(e=>{if(e){const o=e.get("certification");return o&&o.get("type")!=="no_certificate"}else{return false}}))},25690:(e,o,t)=>{"use strict";t.d(o,{l:()=>a,o:()=>n});var r=t(51725);const n=e=>o=>{o({type:r._A,portal:e})};const a=(e,o)=>t=>{t({type:r.GQ,portalPath:e,domain:o})}},26189:(e,o,t)=>{"use strict";var r=t(56283);var n=t(60197);var a=t(25074);var i=t(33246);var s=t(63696);var c=t(67700);var d=t(43430);var l=t(16530);var u=t(91785);const p="35px";const g="#e3792e";const m="#c0392b";const b="#7f8c8d";const h="#aaa";const f="#f0f0f0";const x="#616265";const v=(0,s.memo)((e=>{const{themeData:o,currentCourseHasLoaded:t,isAdmin:r,isStaff:n,userHasMultipleCohorts:s}=e;const v=r||n||s;const $=o["theme-color"];const w=o["background-image"];const _=o["background-color"];const k=o["background-image-repeat"];const y=(0,d.jh)($,"white",.85);const S=(0,d.jh)($,"white",.7);const C=(0,d.e$)(y,.1);const E=(0,d.DZ)($,"#111");const M=(0,d.B3)(E,.33);const A=(0,d.mx)($,"#111");const P=(0,d.mx)($,"#222");const O=(0,d.e$)($,.1);const T=(0,d.B3)($,.5);const z=(0,a.useSelector)(i.EV);return t?(0,u.jsx)(c.Global,{styles:(0,c.css)`
        .border-box {
          box-sizing: border-box;
        }

        #portal-footer-mount {
          margin-top: -100px; // hacky css fix to negate the margin-top on the footer
        }

        portal-footer {
          background-color: ${$};
        }

        .sidebar-box-shadow {
          box-shadow: 0 0 9px -2px #000;
        }

        .content-box {
          box-sizing: content-box;
        }

        .vertical-center {
          position: relative;
          top: 50%;

          transform: translateY(-50%);
        }

        .vertical-center-absolute {
          position: absolute;
          top: 50%;

          transform: translateY(-50%);
        }

        /* Theme overrides */
        pre,
        code {
          color: ${$};
        }

        .page-content a {
          &.btn,
          [class^='icon-'],
          [class*=' icon-'] {
            text-decoration: none;
          }
        }

        a.moduleActivity:hover {
          text-decoration: underline;
        }

        .inverse-background {
          background-color: ${$};
        }

        .addborder {
          border-top: 2px solid ${$};
        }

        .blogpost-slide {
          background-color: ${$};
          color: #252525;
        }

        .comment_info a,
        .comment_info a:visited {
          color: #444;
        }

        #wp-calendar thead th {
          background-color: ${$};
        }

        #wp-calendar a {
          color: ${$};
        }

        #wp-calendar #prev a {
          background-color: ${$};
        }

        #wp-calendar #next a {
          background-color: ${$};
        }

        .logo a:hover {
          color: ${A};
        }

        .nav-pills > li > a:hover {
          color: #fefefe;
        }

        .btn-navbar {
          color: ${$};
        }

        .btn-navbar:hover {
          color: #252525;
          background-color: ${$};
        }

        .accordion-toggle.collapsed::after {
          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: 8px;
          content: '\f0da';
          font-family: FontAwesome;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 1;
        }

        .accordion-toggle::after {
          position: absolute;
          top: 50%;
          margin-top: -8px;
          right: 8px;
          content: '\f0d7';
          font-family: FontAwesome;
          font-size: 16px;
          font-style: normal;
          font-weight: normal;
          line-height: 1;
        }

        .picker-switch.accordion-toggle::after {
          display: none;
        }

        .accordion-heading .accordion-toggle {
          position: relative;
          background-color: ${A};
          color: white;
          font-weight: bold;
        }

        a.accordion-toggle:hover {
          background-color: ${E};
        }

        a.accordion-toggle {
          text-decoration: none;
        }

        a.accordion-toggle span {
          font-weight: normal;
        }

        .teammember:hover {
          border-bottom: 1px solid ${$};
        }

        ul.option-set li a.selected,
        ul.option-set li a:hover {
          background-color: ${$};
          color: white;
        }

        .portfolioitem {
          border-bottom: 1px solid ${$};
        }

        .detailpagepag a,
        .detailpagepag a:visited {
          background-color: ${$};
        }

        .grid figcaption {
          color: ${$};
        }

        .grid figcaption a {
          background: ${$};
        }

        .bloginnerwrap {
          border-left: 1px solid ${$};
        }

        .pagination ul > .active > a {
          color: white;
          cursor: default;
        }

        .pagination ul > li > a:focus,
        .pagination ul > .active > a,
        .pagination ul > .active > span {
          background-color: ${$};
        }

        .tagcloud a {
          background-color: ${$};
        }

        .tagcloud a:hover {
          color: ${$};
          background-color: white;
        }

        .blogwidgetarea h3 > span {
          border-bottom: 1px solid ${$};
        }

        .blogwidgetarea li a:hover {
          color: ${$};
        }

        .featured > header {
          background-color: ${$};
        }

        body {
          background-color: #d7d6d6;
        }

        #site-container {
          background-color: #d7d6d6;
        }

        .muted {
          color: ${A};
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${x};
        }

        h1 small,
        h2 small,
        h3 small,
        h4 small,
        h5 small,
        h6 small {
          color: ${x};
        }

        .inverse-font,
        a.inverse-link,
        a:visited.inverse-link,
        .comment_info a,
        .comment_info a:visited,
        #wp-calendar a,
        .logo a:hover,
        .btn-navbar,
        .btn-navbar:hover,
        .tweet_list li a,
        .nav-tabs > li > a,
        .detailpagepag a:hover,
        .theblogpost h3 a:hover,
        .blogtags a,
        .pagination ul > li > a,
        .pagination ul > li > a:hover,
        .tagcloud a:hover,
        .blogwidgetarea li a:hover,
        .grid figcaption {
          color: ${A};
        }

        .inverse-background,
        #wp-calendar thead th,
        #wp-calendar #prev a,
        #wp-calendar #next a,
        ul.option-set li a.selected,
        ul.option-set li a:hover,
        .datebackground,
        .pagination ul > li > span,
        .pagination ul > li > a:focus,
        .pagination ul > .active > a,
        .pagination ul > .active > span,
        .tagcloud a,
        .featured > header,
        .grid figcaption a {
          background-color: ${A};
          color: ${f};
        }

        .progress-inverse .bar,
        .progress .bar-inverse {
          background-color: ${A} !important;
        }

        .detailpagepag a,
        .detailpagepag a:visited {
          background-color: ${A};
        }

        .progress-inverse .bar,
        .progress .bar-inverse {
          background-color: ${A};
          background-image: linear-gradient(
            to bottom,
            ${A},
            ${A}
          );
          background-repeat: repeat-x;
        }

        /* Course-specific Styles */

        .course-banner-container {
          background-color: ${$};
        }

        #course-links,
        #related-pages,
        #sidebar-topSubmissionList,
        #submission-info,
        #navItemList,
        #institution-courses,
        .courseNavigation,
        .addCourseNavigation {
          background: #fff;

          border-radius: 2px;

          & > :first-child {
            border-top-left-radius: 2px;
            border-top-right-radius: 2px;
          }

          & > :last-child {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
          }

          border-top: 0 solid ${$};

          border: 1px solid #e2e2e2;
        }

        #course-links li:hover,
        #related-pages li:hover,
        #submission-info li:hover,
        #sidebar-topSubmissionList li:hover,
        #institution-courses li:hover {
          background-color: #fafafa;
        }

        #course-links li a:hover,
        #related-pages li a:hover,
        #submission-info li a:hover,
        #sidebar-topSubmissionList li a:hover,
        #institution-courses li a:hover {
          color: white;
        }

        #course-info-container {
          padding-bottom: 10px;
          background: ${$};
        }

        .course-task-nav {
          padding: 10px 20px;
          color: #fff;
          background-color: ${$};
          position: absolute;
          left: 0;
          right: 0;
          width: 100%;
          bottom: 0;

          border-radius: 2px;

          a,
          a:hover {
            color: #fff;
          }
        }

        #course-page-content {
          padding: 30px 20px 20px 20px;
          position: relative;
          background-color: white;

          border-top: 0 solid ${$};
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
          border-radius: 2px;

          margin-bottom: 10px;
        }

        #course-page-content.viewing-block-page {
          padding: 0;
        }

        .courseSidebar li a,
        .courseSidebar li a:visited {
          color: ${b};
        }

        .profile-link {
          height: 35px;
          width: 35px;
          overflow: hidden;
          display: inline-block;
          border-radius: 2px;

          img {
            display: block;
            width: 100%;
            border: none;
          }
        }

        .course-info {
          background-color: white;
        }

        .fixed-course-info {
          position: fixed;
          top: ${p};
          z-index: 930;

          .course-stats {
            border-top: 0;
            border-bottom: 1px solid ${$};
          }
        }

        .absolute-course-info {
          position: absolute;
          bottom: 0;
          z-index: 300;
        }

        .addCourseNavigation {
          a,
          a:active,
          a:hover {
            color: ${$};
          }

          padding: 10px;
          width: auto;
          border-bottom: 1px solid #e2e2e2;
          margin: 0 0 10px 0;
        }

        #course-admin-subnav {
          & > :last-child {
            border-bottom-left-radius: 2px;
            border-bottom-right-radius: 2px;
          }
        }

        #course-links,
        #related-pages,
        #submission-info,
        #sidebar-topSubmissionList,
        .courseNavigation,
        #navItemList,
        #institution-courses {
          li {
            padding: 0;
            width: auto;
            border-bottom: 1px solid #e2e2e2;
          }

          li.active a {
            border-right: 3px solid ${$};
          }

          li:hover {
            cursor: pointer;
          }

          a {
            padding: 10px;
            display: block;
          }

          margin: 0 0 10px 0;
        }

        /* More Overrides */

        .section-status.your-course-status {
          background-color: ${$};
          color: ${f};
        }

        .page-options-extra {
          float: right;
          background-color: ${$};
          color: ${f};
        }

        .page-options-extra:hover {
          background-color: ${P};
        }

        .page-options-edit {
          background-color: ${$};
          color: ${f};

          border-top-right-radius: 2px;
        }

        .page-options-edit a {
          color: ${f};
        }

        .page-options-subscribe {
          background-color: ${$};
          color: ${f};
        }

        .page-options-subscribe:hover {
          background-color: ${A};
        }

        .page-options-subscribe.subscribed {
          background-color: ${$};
        }

        #relatedContentForm .btn {
          border: 1px solid ${h};
          padding: 4px 13px;
        }

        .page-options-subscribe.subscribed:hover {
          background-color: ${P};
        }

        .page-options-caret > i {
          color: ${f} !important;
        }

        .page-options-box a,
        .page-options-box button,
        .page-options-box a:hover,
        .page-options-box button:hover {
          color: ${f};
        }

        .page-options-box:hover,
        .page-options-caret:hover {
          background-color: ${A};
          color: ${f};
        }

        .page-options-caret:hover {
          border-top-right-radius: 2px;
        }

        /* Bootstrap Overrides */

        .dropdown-menu > li > button:hover,
        .dropdown-menu > li > button:focus,
        .dropdown-submenu:hover > button,
        .dropdown-submenu:focus > button,
        .dropdown-menu > li > a:hover,
        .dropdown-menu > li > a:focus,
        .dropdown-submenu:hover > a,
        .dropdown-submenu:focus > a {
          color: #fff;
          background-color: ${$};
          background-image: linear-gradient(
            to bottom,
            ${$},
            ${A}
          );
          background-repeat: repeat-x;
        }

        .dropdown-menu > .active > button,
        .dropdown-menu > .active > button:hover,
        .dropdown-menu > .active > button:focus,
        .dropdown-menu > .active > a,
        .dropdown-menu > .active > a:hover,
        .dropdown-menu > .active > a:focus {
          color: #fff;
          background-color: ${$};
          background-image: linear-gradient(
            to bottom,
            ${$},
            ${A}
          );
          background-repeat: repeat-x;
          outline: 0;
        }

        .copyright a,
        .copyright .inverse-link {
          color: #bbb !important;
        }

        .copyright a:hover,
        .copyright .inverse-link:hover {
          color: #ddd !important;
        }

        .footersocial a,
        .footersocial .inverse-link {
          color: #bbb !important;
        }

        .footersocial a:hover,
        .footersocial .inverse-link:hover {
          color: #ddd !important;
        }

        .vote-zero-icon {
          color: #aaa !important;
        }

        .vote-box {
          color: #aaa;
        }

        .vote-up-icon,
        .vote-up-icon i {
          color: #aaa;
        }

        .vote-down-icon,
        .vote-down-icon i {
          color: #aaa;
        }

        /* need to move these into plug-in... */
        .ol-sharing-container {
          background-color: ${E};
        }

        .ol-sharing-container::after {
          border-right-color: ${E} !important;
        }

        .ol-sharing-button {
          background-color: ${E};
        }

        .ol-sharing-button:hover {
          background-color: ${A};
        }

        /* -- end -- */

        #user-karma a,
        #user-karma span {
          color: ${A};
          font-size: 20px;
          font-weight: 600;
        }

        a.analytics-box {
          color: ${f};
          font-size: 28px;
          line-height: 32px;
          text-align: center;
          background-color: ${A};
          padding: 50px 10px;
          display: block;
          text-decoration: none;

          border-radius: 2px;

          i {
            color: ${f};
            margin-right: 10px;
          }

          &:hover {
            background-color: ${E};
          }
        }

        .page-content a.header-summary-box {
          span {
            color: ${E};
          }

          i {
            color: ${$};
          }

          &:hover {
            span {
              color: ${A};
            }

            i {
              color: ${A};
            }
          }
        }

        .page-content div.header-summary-box {
          span {
            color: ${E};
          }

          i {
            color: ${$};
          }

          &:hover {
            span {
              color: ${A};
            }

            i {
              color: ${A};
            }
          }
        }

        .comment-container {
          &.linked,
          &.highlighted {
            border-right-color: ${$};
          }
        }

        .comment-separator {
          background-color: ${M};
        }

        .pinned-comment {
          .comment-separator {
            border-top: 4px solid ${M};
          }
        }

        .pricing-label {
          text-shadow: 0 1px #fff;
          font-size: 100px;
          font-weight: 500;
          color: ${$};
          line-height: 96px;

          sup {
            top: -1.3em;
            font-size: 36px;
          }

          sub {
            font-size: 14px;
            line-height: 26px;
            color: #aaa;
          }
        }

        .pricing-info {
          font-size: 14px;
          line-height: 26px;
        }

        .pricing-desc {
          font-size: 14px;
          line-height: 22px;
          margin-bottom: 0;
        }

        .highlightedPage {
          margin-bottom: 10px;
          display: block;
        }

        .highlightedPage img {
          border-radius: 2px;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
        }

        .ol-shared-sorting {
          margin: 0;
          padding: 0;
          list-style: none;
          margin-top: 0;
          border-bottom: 1px solid #ddd;
          height: 28px;
        }

        .ol-shared-sorting li.separator {
          height: 28px;
          float: left;
          width: 1px;
          overflow: hidden;
          padding: 4px;
          padding-top: 2px;
          font-weight: bold;
        }

        .ol-shared-sorting li.sorting {
          height: 28px;
          float: left;
          min-width: 48px;
          text-align: center;
          padding: 4px 10px;
          padding-top: 2px;
          border-top: 1px solid #ddd;
          border-left: 1px solid #ddd;
          border-right: 1px solid #ddd;
          border-bottom: 1px solid #ddd;
          color: #666;
          font-weight: bold;
        }

        .ol-shared-sorting li.sorting.active {
          border-bottom: 1px solid #fff;
        }

        .ol-shared-sorting li.sorting:hover {
          background-color: #f5f5f5;
          border-bottom: 1px solid #f5f5f5;
          cursor: pointer;
        }

        .centre-header-button {
          background-color: ${$};
          border: 1px solid ${A};
          color: ${f};

          border-radius: 2px;

          cursor: pointer;
          padding: 5px 15px;
        }

        .centre-header-button:hover {
          background-color: ${A};
        }

        .trendingup {
          color: ${g};
        }

        .trendingdown {
          color: ${m};
        }

        /* Buzz Page overrides */
        .page-options {
          background-color: ${$};
          color: ${f};

          .add-option,
          .edit-option {
            &:hover {
              background-color: ${A};
            }

            a {
              color: ${f};
            }
          }

          .add-option .dropdown-menu li:not(.disabled) a:hover {
            color: ${f};
          }
        }

        .discussion-post-comments {
          color: ${$};
        }

        .fotorama__caption__wrap a:hover {
          color: ${A};
        }

        .lined-title {
          line-height: 0;
          padding-left: 25px;
          color: ${$};
          margin-bottom: 50px;
          margin-top: 40px;
        }

        .lined-title span {
          display: inline-block;
          position: relative;
          width: 100%;
        }

        .lined-title span::before,
        .lined-title span::after {
          content: '';
          position: absolute;
          height: 1px;
          border-top: 1px solid ${$};
          top: 0;
        }

        .lined-title span::before {
          right: 100%;
          margin-right: 10px;
          width: 15px;
        }

        .lined-title span::after {
          margin-left: 10px;
          width: 100%;
        }

        .page-background-overlay {
          background-color: ${T};
        }

        .block-page-modal {
          border: 1px solid ${O};
          border-bottom: none;

          .rev-set-revision span {
            padding: 3px 9px;
            background-color: ${$};
            border: 1px solid rgba(0, 0, 0, 0.1);

            &:hover {
              background-color: ${A};
            }
          }
        }

        .block-page-modal-footer {
          border: 1px solid ${O};
          border-top: none;

          .save-in-progress {
            color: ${$};
          }

          .save-close,
          .rev-close {
            background-color: ${$};

            &:hover {
              background-color: ${A};
            }
          }
        }

        body {
          background-image: url(${w});
          background-color: ${_};
          background-repeat: ${k};
          background-attachment: fixed;
          background-position: left center;
        }

        #site-container {
          background: none;
        }

        .page-section {
          background: none;
        }

        body {
          .page-section
            .container.page-container.last-page-container.course-container-box {
            background-color: ${$};
          }

          .page-options {
            // if $index == 19 { background-color: #e13b19; }
            background-color: ${y};
          }

          course-sidebar {
            .courseSidebar {
              #course-links,
              #module-sets {
                border: none;
                background-color: transparent;

                // Customisation for MediaPrima
                // @if $index == 19 {
                //   ${y}: #e13b19;
                //   ${S}: mix(${y}, white, 85%);
                // }

                .section_expandable {
                  background-color: ${y};
                }

                li:not(.separator) {
                  background-color: ${y};

                  &.in-use {
                    // Customisation for MediaPrima
                    // @if $index == 16 or $index == 19 {
                    //   background-color: #652c86;
                    // } @else if $index == 17 {
                    //   background-color: #cb1978;
                    // } @else if $index == 18 {
                    //   background-color: #43b974;
                    // } @else {
                    //   background-color: ${C};
                    // }

                    background-color: ${C};
                  }

                  &.in-use.in-viewed-set {
                    background-color: ${S};
                  }

                  &:not(.open-menu):hover {
                    background-color: ${S};

                    &.in-use {
                      background-color: ${S};
                    }
                  }
                }
              }
            }
          }
        }

        body {
          module-display {
            // Customisation for MediaPrima
            // @if $index == 16 {
            //   background-color: #652c86;
            // } @else if $index == 17 {
            //   background-color: #cb1978;
            // } @else if $index == 18 {
            //   background-color: #43b974;
            // } @else if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: $color;
            // }

            background-color: ${$};
          }

          .mv-module-title {
            cursor: pointer;

            // Customisation for MediaPrima
            // @if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: mix($color, white, 85%);
            // }

            background-color: ${y};

            &:not(.open-module):hover,
            &.in-use {
              // Customisation for MediaPrima
              // @if $index == 19 {
              //   background-color: #652c86;
              // } @else {
              //   background-color: mix($color, white, 70%);
              // }

              background-color: ${S};
            }
          }

          .mv-page.current {
            background-color: ${$};

            .mv-page-title {
              color: white;
            }
          }
        }

        body blockpage-header > div.blockpage-header-container {
          // Customisation for MediaPrima
          // @if $index == 19 {
          //   ${y}: #e13b19;
          //   ${S}: mix(${y}, white, 85%);
          // }

          &.no-page-options {
            background-color: ${y};

            &.linked-to-course-sidebar:not(.editable):hover {
              background-color: ${S};
            }
          }

          &:not(.no-page-options) {
            background-image: linear-gradient(
              to top,
              ${y} 0%,
              ${y} calc(100% - 3px),
              ${C} 100%
            );

            &.linked-to-course-sidebar:not(.editable):hover {
              background-image: linear-gradient(
                to top,
                ${S} 0%,
                ${S} calc(100% - 3px),
                ${C} 100%
              );
            }
          }
        }

        body {
          .blockpage-empty {
            background-color: ${$};
          }
        }

        body {
          cohort-autocomplete {
            .react-autosuggest__suggestion--focused {
              // Customisation for MediaPrima
              // @if $index == 19 {
              //   background-color: #e13b19;
              // } @else {
              //   background-color: ${y};
              // }
              // Customisation for MediaPrima

              background-color: ${y};
              color: #fff;

              .highlight {
                color: #fff;
              }
            }

            .highlight {
              color: ${$};
            }
          }
        }

        body {
          assessment-criteria {
            .back-to-assessment-design {
              color: ${$};
            }
          }
        }

        body {
          modal-blockpage-editor
            > .me-page-placeholder
            > .me-page-modal.block-page-modal
            > #me-block-activity-container
            > #block-activity-container {
            // Customisation for MediaPrima
            // @if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: mix($color, white, 85%);
            // }
            background-color: ${y};
          }

          modal-blockpage-editor .block-page-modal .me-page-modal-exhibit-user {
            background-color: ${y};
          }
        }

        body progress-page {
          .progress-container {
            .module-set-heading {
              color: ${$};
            }

            .module-heading {
              background-color: ${$};
            }
          }
        }

        body {
          .course-info-container.new-layout #course-info .course-stats {
            // Customisation for MediaPrima
            // @if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: mix($color, white, 85%);
            // }
            background-color: ${y};

            #user-karma {
              background-color: rgba(255, 255, 255, 0.25);

              a,
              span {
                color: white;
              }
            }

            .course-user-type {
              color: white;
              font-weight: bold;
            }
          }

          .theme-background {
            // Customisation for MediaPrima
            // @if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: mix($color, white, 85%);
            // }
            background-color: ${y};
          }

          #scroll-to-top-button {
            // Customisation for MediaPrima
            // @if $index == 19 {
            //   background-color: #e13b19;
            // } @else {
            //   background-color: mix($color, white, 85%);
            // }
            background-color: ${y};
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);

            &:hover {
              // Customisation for MediaPrima
              // @if $index == 19 {
              //   background-color: mix(#e13b19, white, 85%);
              // } @else {
              //   background-color: mix($color, white, 70%);
              // }
              background-color: ${S};
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
                0 6px 6px rgba(0, 0, 0, 0.23);
            }
          }
        }

        body {
          user-autocomplete {
            .react-autosuggest__suggestion--focused {
              // Customisation for MediaPrima
              // @if $index == 19 {
              //   background-color: #e13b19;
              // } @else {
              //   background-color: mix($color, white, 85%);
              // }
              background-color: ${y};
              color: #fff;

              .highlight {
                color: #fff;
              }
            }

            .highlight {
              color: ${$};
            }
          }
        }

        course-sidebar {
          #course-links {
            .courseNavigationMenu {
              .section_expandable_collapsed:hover {
                background-color: ${S};
              }
            }
          }
        }

        /* blockpage-header div.blockpage-header-container {
          display: flex;

          editable-label.blockpage-header-title > h2.label-text {
            margin-left: 0;
          }
        } */

        @media (max-width: ${l.mJ}px) {
          #module-display-layer module-set {
            max-width: 100%;
          }

          #course-progress-bar-container course-progress-bar a {
            // Only make the "Your progress" bar narrower if user has
            // the cohort switching menu displayed, so that it fits the bar.
            ${v?"width: 60px;":""};

            .course-progress-bar-text {
              ${v?"display: none;":""};
            }
          }

          .course-stats #progress-badge-container {
            width: auto;
          }

          .course-page-container-padding {
            padding-right: 0 !important;
          }
        }

        ${(0,l.ow)({themeColor:$,themeColor85:y,themeColor70:S,courseLayoutSettings:z})}
      `}):null}));var $=t(32498);var w=t(77753);var _=t(58621);const k=(0,a.connect)((e=>{var o;return{themeData:(0,$.a1)(e),currentCourseHasLoaded:(0,i.MR)(e),isAdmin:(0,i.ld)(e),isStaff:(0,w.ad)(e),userHasMultipleCohorts:((o=(0,_.tX)(e))===null||o===void 0?void 0:o.count())>1}}))(v);const y=(0,n.K)(k);var S=t(46039);var C=t(79105);var E=t(78773);var M=t(25690);var A=t(51414);const P=(0,S.o)("current-course-data");const O=(0,S.o)("current-portal-data");const T=(0,S.o)("current-cohort-data");C.il.dispatch((0,E.Vm)(P));C.il.dispatch((0,M.o)(O));C.il.dispatch((0,A.B2)(T));(0,r.L)(y,document.getElementById("course-theme-mount"))},32498:(e,o,t)=>{"use strict";t.d(o,{wj:()=>k,a1:()=>C});var r=t(24885);var n=t(65270);var a=t(33246);const i="#094967";const s="#ECF0F1";const c="";const d="no-repeat";var l=t(63967);const u=e=>e.CourseAppearanceSettings;const p=(0,r.Mz)([l.dc,l.uQ],((e,o)=>{const{action:t}=o;return e==="ROUTE_COURSE_ADMIN"&&t==="appearance"}));function g(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?g(Object(t),!0).forEach((function(o){b(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function b(e,o,t){o=h(o);if(o in e){Object.defineProperty(e,o,{value:t,enumerable:true,configurable:true,writable:true})}else{e[o]=t}return e}function h(e){var o=f(e,"string");return typeof o==="symbol"?o:String(o)}function f(e,o){if(typeof e!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var r=t.call(e,o||"default");if(typeof r!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(e)}const x=(e,o)=>{if(o&&"brand-color"in o){const{"brand-color":t}=o;return m(m({},t?{"theme-color":t}:{}),e)}else{return e}};const v=(e,o,t)=>{if(t){return m(m({},e),o)}else{return e}};const $=e=>{const o=e&&e["theme-color"]||i;const t=e&&e["background-image"]||c;const r=e&&e["background-color"]||s;const n=e&&e["background-image-repeat"]||d;return m(m({},e),{},{"theme-color":o,"background-image":t,"background-color":r,"background-image-repeat":n})};const w=e=>{const{themeData:o}=e||{};return o||null};const _=(0,r.Mz)(n.hP,(e=>w(e)));const k=(0,r.Mz)([a.wt],(e=>!(e&&"theme-color"in e)));const y=(0,r.Mz)([a.wt,_],((e,o)=>x(e,o)));const S=(0,r.Mz)([y,u,p],((e,o,t)=>v(e,o,t)));const C=(0,r.Mz)([S],(e=>$(e)));const E=e=>createSelector([coursesSelector,selectPortalsByPath,selectCourseApperanceSettings,selectIsOnCourseAppearanceSetting],((o,t,r,n)=>{let a=null;const i=e&&o.get(e);if(i){const e=i.get("themeData");const o=e?e.toJS():null;const s=getCourseLinkedPortal(i,t);const c=getCourseLinkedPortalJS(s);const d=w(c);const l=x(o,d);a=v(l,r,n)}return $(a)}))},42559:(e,o,t)=>{const r=t(95616);if(typeof window!=="undefined"){t(59777)}e.exports=r;e.exports["default"]=r},43430:(e,o,t)=>{"use strict";t.d(o,{B3:()=>c,DZ:()=>i,e$:()=>l,jh:()=>d,mx:()=>s,sH:()=>p,so:()=>g});var r=t(44308);var n=t.n(r);var a=t(42981);const i=(e,o)=>{const t=new(n())(e);const r=new(n())(o);return new(n())(e).red(t.red()+r.red()).green(t.green()+r.green()).blue(t.blue()+r.blue()).hex()};const s=(e,o)=>{const t=new(n())(e);const r=new(n())(o);return new(n())(e).red(t.red()-r.red()).green(t.green()-r.green()).blue(t.blue()-r.blue()).hex()};const c=(e,o)=>{const t=new(n())(e);return`rgba(${t.red()}, ${t.green()}, ${t.blue()}, ${o})`};const d=(e,o,t)=>new(n())(e).mix(new(n())(o),1-t).hex();const l=(e,o)=>new(n())(e).darken(o).hex();const u=(e,o)=>new Color(e).lighten(o).hex();const p=e=>new(n())(e).lighten(a.OL_HOVER_LIGHTEN_AMOUNT).hex();const g=e=>new(n())(e).darken(a.OL_HOVER_DARKEN_AMOUNT).hex()},46039:(e,o,t)=>{"use strict";t.d(o,{R:()=>i,o:()=>a});const r={dataLoader:false,dataMultiLoader:false};const n=(e,o)=>{if(!r[e]){console.warn(o);r[e]=true}};function a(e){n("dataLoader","[Deprecation Notice]: Use of dataLoader (and loading data from the DOM) is deprecated.");const o=document.getElementById(e);if(o){if(o.tagName==="META"&&o.hasAttribute("content")){const e=o.getAttribute("content");return JSON.parse(atob(e))}else if(o.textContent.trim()!==""){return JSON.parse(o.textContent)}}return{}}function i(e){n("dataMultiLoader","[Deprecation Notice]: Use of dataMultiLoader (and loading data from the DOM) is deprecated.");const o=document.getElementsByClassName(e);const t=[];for(let e=0;e<o.length;e++){const r=o[e];if(r.tagName==="META"&&r.hasAttribute("content")){const e=r.getAttribute("content");t.push(JSON.parse(atob(e)))}else if(r.textContent.trim()!==""){t.push(JSON.parse(r.textContent))}}return t}},51414:(e,o,t)=>{"use strict";t.d(o,{AK:()=>l,As:()=>w,B2:()=>d,BX:()=>h,Bh:()=>$,Le:()=>E,M5:()=>g,T5:()=>S,U8:()=>_,Us:()=>x,WV:()=>y,b5:()=>k,iw:()=>p,jb:()=>C,xw:()=>m,yZ:()=>b});var r=t(54580);var n=t(65400);var a=t(27003);var i=t(44822);var s=t(58621);function c(e){return o=>o({type:SET_ACTIVE_COHORT,cohort:e})}function d(e){return o=>o({type:n.et,cohort:e})}function l(e){return o=>o({type:n.jL,cohortList:e})}function u(e){return o=>{Resource.lookup("cohort","resources",{initArgsList:e,ignoreMissing:true}).then((e=>{o(l(Object.values(e)))}))}}function p(e,o){return t=>{t({type:n.bW,cohortPath:e,preset:o});const r={mongo_id:o._id,name:o.name,type:o.type};if(o.maximumMark!=null){r.maximumMark=o.maximumMark}if(o.bands!=null){r.bands=o.bands}if(o.categories!=null){r.categories=o.categories}if(o.scoreCompetencyTerminology!=null){r.scoreCompetencyTerminology=o.scoreCompetencyTerminology}if(o.scoreCompetencyDescriptor!=null){r.scoreCompetencyDescriptor=o.scoreCompetencyDescriptor}i.Ay.update("cohort",e,"addAssessmentPreset",r)}}function g(e,o){return t=>{t({type:n.dT,cohortPath:e,preset:o});const r={presetId:o._id,name:o.name,type:o.type};if(o.maximumMark!=null){r.maximumMark=o.maximumMark}if(o.bands!=null){r.bands=o.bands}if(o.categories!=null){r.categories=o.categories}if(o.scoreCompetencyTerminology!=null){r.scoreCompetencyTerminology=o.scoreCompetencyTerminology}if(o.scoreCompetencyDescriptor!=null){r.scoreCompetencyDescriptor=o.scoreCompetencyDescriptor}i.Ay.update("cohort",e,"updateAssessmentPreset",r)}}function m(e,o){return t=>{t({type:n.WY,cohortPath:e,presetIds:o});i.Ay.update("cohort",e,"reorderAssessmentPresets",{presetIds:o})}}function b(e,o){return t=>{t({type:n.hW,cohortPath:e,presetId:o});i.Ay.update("cohort",e,"deleteAssessmentPreset",{presetId:o})}}function h(e,o){return t=>{t({type:n.AC,cohortPath:e});return new Promise(((r,a)=>{i.Ay.update("cohort",e,"setAssessmentSettings",{assessmentSettings:o.toJS()}).then((o=>{setTimeout((()=>{t({type:n.rR,cohortPath:e,assessmentSettings:o});r()}),300)})).fail((()=>{setTimeout((()=>{t({type:n.uq,cohortPath:e});a(new Error("Error saving assessment settings"))}),300)}))}))}}function f(e,o,t){const r=t||"fetch";const n=()=>{switch(r){case"fetch":return ASSESSMENT_STATUS_FETCH_START;case"refresh":return ASSESSMENT_STATUS_REFRESH_START;default:return null}};const a=()=>{switch(r){case"fetch":return ASSESSMENT_STATUS_FETCH_SUCCESS;case"refresh":return ASSESSMENT_STATUS_REFRESH_SUCCESS;default:return null}};return t=>{t({type:n()});Resource.read("cohort",o,"getAssessmentStatus").then((r=>{let n=null;if(r.assessmentReportCohortMemberships[0]){n={name:"Assessment Reports",url:null,pagePath:null,external:false,type:"navigation",icon:null}}t({type:a(),coursePath:e,cohortPath:o,cohortMemberships:r.assessmentReportCohortMemberships,assessmentEvaluations:r.assessmentEvaluations,navigationItem:n})})).catch((e=>{t({type:ASSESSMENT_STATUS_FETCH_FAILED,error:e})}))}}function x(e,o){return async t=>{await i.pH.update("cohort",e,"setClassAccesTimezone",{tz:o});t({type:n.dU,cohortPath:e,tz:o})}}function v(e){return async()=>{ResourceApi.update("cohort",e,"updateAllModulePagesAccessStartDates",{})}}function $(e,o){return async t=>{const n=o&&(0,r.xN)(o);const s=await i.pH.update("cohort",e,"setStartDate",{when:n});t({type:a.P2,cohortPath:e,startDate:s.startDate,startDateLocalNaive:s.startDateLocalNaive})}}function w(e,o){return async t=>{const n=o&&(0,r.xN)(o);const s=await i.pH.update("cohort",e,"setEndDate",{when:n});t({type:a.CR,cohortPath:e,endDate:s.endDate,endDateLocalNaive:s.endDateLocalNaive})}}function _(e){return o=>{o({type:a.vF});return i.pH.update("cohort",e,[{method:"setScheduled",args:{isScheduled:true}},{method:"setSelfPaced",args:{isSelfPaced:false}}]).then((()=>o({type:a.z$,cohortPath:e})),(e=>o({type:a.Ho,errorMessage:{pacingMode:e.response.error==="Invalid"?"You must set a start date to use scheduled pacing.":"Error switching to the scheduled pacing."}})))}}function k(e){return o=>{o({type:a.vF});return i.pH.update("cohort",e,"setOpen").then((()=>o({type:a.Ar,cohortPath:e})),(e=>o({type:a.Ho,errorMessage:{pacingMode:e.message}})))}}function y(e){return o=>{o({type:a.vF});return i.pH.update("cohort",e,[{method:"setScheduled",args:{isScheduled:false}},{method:"setSelfPaced",args:{isSelfPaced:true}}]).then((()=>o({type:a.YF,cohortPath:e})),(e=>o({type:a.Ho,errorMessage:{pacingMode:e.message}})))}}function S(e,o){return t=>{t({type:a.vF});return i.pH.update("cohort",e,"setSelfPaced",{isSelfPaced:o}).then((()=>t({type:a.Th,cohortPath:e,isSelfPaced:o})))}}function C(e,o){return async t=>{const a=o&&(0,r.xN)(o);const s=await i.pH.update("cohort",e,"setEnrolmentCloseDate",{enrolmentCloseDate:a});t({type:n.vn,cohortPath:e,enrolmentCloseDate:s.enrolmentCloseDate,enrolmentCloseDateLocalNaive:s.enrolmentCloseDateLocalNaive})}}function E(e){return async o=>{const t=await i.Ay.lookup("cohort","getUserActiveCohort",{coursePath:e});await o(l([t]));return t}}function M(){return async(e,o)=>{const t=currentCohortSelector(o());return ResourceApi.read("cohort",t.get("path"),"getInstitutionSpecificSettings")}}function A(e){let{institutionPath:o,enabled:t,isFree:r,basePrice:n,otherStudentPrices:a,fxConversionDisabled:i}=e;return async(e,s)=>{const c=currentCohortSelector(s());return ResourceApi.update("cohort",c.get("path"),"updateInstitutionSpecificPrice",{institutionPath:o,isFree:r,enabled:t,basePrice:n,otherStudentPrices:a,fxConversionDisabled:i})}}},56283:(e,o,t)=>{"use strict";t.d(o,{L:()=>l,q:()=>u});var r=t(63696);var n=t(78325);var a=t(25074);var i=t(31803);var s=t(79105);var c=t(34744);var d=t(91785);const l=(e,o,t={},{ssr:r=false}={})=>{const c=e;(r?n.hydrate:n.render)((0,d.jsx)(a.Provider,{store:s.il},(0,d.jsx)(i.q3,{api:s.$h},(0,d.jsx)(c,t))),o)};const u=e=>{(0,n.unmountComponentAtNode)(e)}},60197:(e,o,t)=>{"use strict";t.d(o,{K:()=>r});function r(e){return e}},63994:(e,o,t)=>{"use strict";t.d(o,{OQ:()=>c,RK:()=>s,ZX:()=>i});var r=t(24885);const n=e=>e.Features;const a=(0,r.Mz)(n,(e=>e.featureVariants));const i=e=>(0,r.Mz)(a,(o=>{const t=o[e];const r=e in o;const{variant:n=null,payload:a=null}=t||{};return{enabled:r,variant:n,payload:a}}));const s=(0,r.Mz)(a,(e=>Object.keys(e)));const c=e=>(0,r.Mz)(a,(o=>e in o))},77753:(e,o,t)=>{"use strict";t.d(o,{Dc:()=>m,Eu:()=>u.Eu,R5:()=>u.R5,SX:()=>u.SX,Xs:()=>u.Xs,aP:()=>p,ad:()=>u.ad,uD:()=>g});var r=t(53624);var n=t.n(r);var a=t(24885);var i=t(22715);var s=t(33246);var c=t(13704);var d=t(25209);var l=t(71502);var u=t(98838);const p=(0,a.Mz)(u.R5,s.ld,c.Xh,((e,o,t)=>!!(t&&t.get("showCertification")&&(e||o))));const g=(0,a.Mz)(c.Xh,d.r,((e,o)=>e&&e.get("braintreeEnabled")&&o&&l.q.has(o.get("type"))));const m=(0,a.Mz)(i.o_,s.KU,i.xG,((e,o,t)=>{let r=n().List();if(e.get("isSuperUser",false)){r=r.push("superuser")}r=r.concat(e.getIn(["courseRoles",o],n().List()));r=r.concat(e.getIn(["classRoles",t],n().List()));return r}))},77949:(e,o,t)=>{"use strict";t.d(o,{T:()=>r});let r=function(e){e["TEST"]="test";e["ENROLMENT_VOUCHER"]="enrolment_voucher";e["EXAM_ACCESS_CONTROL"]="exam_access_control";e["OUTCOME_REPORT_NAV_REFRESH"]="outcome-report-nav-refresh";e["ASSESSMENT_AI_RUBRICS"]="assessment_ai_rubrics";e["COMMENT_VISIBILITY"]="comment-visibility";e["PROGRAM_ENROLMENTS_ADMIN"]="program_enrolments_admin";e["MEMBERS_ONLY_COHORT"]="members-only-cohort";e["PROGRAM_DATA_TAB"]="program_data_tab";e["MY_COURSES_PAGE_KONMARI"]="my_courses_page_konmari";e["NEW_LATE_EVIDENCE_INDICATOR"]="new-late-evidence-indicator";e["CODE_EXAM_WIDGET"]="code_exam_widget";e["COURSE_COMPLETION"]="course_completion";e["HOME_DASHBOARD_SHOW_COURSES_FEED"]="home_dashboard_show_courses_feed";e["POSTING_BEHAVIOUR_SETTINGS"]="posting_behaviour_settings";e["PROGRAMS_SELF_ENROLMENT"]="programs_self_enrolment";e["SCORING_LINE_ITEMS"]="scoring-line-items";e["QUIZ_SCORE_CALCULATION"]="quiz-score-calculation";e["OUTCOMES_MAPPING_APP"]="outcomes_mapping_app";e["NATIVE_CREDENTIALS"]="native_credentials";return e}({})},78773:(e,o,t)=>{"use strict";t.d(o,{BF:()=>r.BF,Bz:()=>r.Bz,CM:()=>r.CM,CO:()=>r.CO,C_:()=>r.C_,Ek:()=>r.Ek,Fv:()=>r.Fv,Fy:()=>r.Fy,H6:()=>r.H6,IY:()=>r.IY,Sy:()=>r.Sy,Tk:()=>r.Tk,UY:()=>r.UY,Uu:()=>r.Uu,VG:()=>r.VG,VL:()=>r.VL,Vm:()=>r.Vm,d:()=>r.d,ee:()=>r.ee,gM:()=>r.gM,h2:()=>r.h2,qf:()=>r.qf,s:()=>r.s,t3:()=>r.t3,u1:()=>r.u1,uK:()=>r.uK,zY:()=>r.zY});var r=t(96788)},78822:(e,o,t)=>{"use strict";var r=t(30246);var n=t.n(r);var a=t(57278);var i=t.n(a);var s=t(90381);var c=t.n(s);var d=t(33051);var l=t.n(d);var u=t(41200);var p=t.n(u);p().polyfill();if(!window.location.origin){window.location.origin=`${window.location.protocol}//${window.location.hostname}${window.location.port?`:${window.location.port}`:""}`}(function(){if(typeof window.CustomEvent==="function")return false;function e(e,o){const t=o||{bubbles:false,cancelable:false,detail:undefined};const r=document.createEvent("CustomEvent");r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail);return r}e.prototype=window.Event.prototype;window.CustomEvent=e;return null})();(function(){if(typeof window.Event==="function")return false;function e(e,o){const t=o||{bubbles:false,cancelable:false};const r=document.createEvent("Event");r.initEvent(e,t.bubbles,t.cancelable);return r}e.prototype=window.Event.prototype;window.Event=e;return null})();document.execCommand("defaultParagraphSeparator",false,"div")},87192:(e,o,t)=>{"use strict";var r=t(53624);var n=t(14780);var a=t(6307);function i(e=(0,r.fromJS)({byCoursePath:{}}),o){switch(o.type){case a.TG:{const{coursePath:t,navigation:n}=o;return e.mergeIn(["byCoursePath"],(0,r.fromJS)(n)).setIn(["byCoursePath",t,"isLoadingNavData"],false).setIn(["byCoursePath",t,"hasLoadedNavData"],true)}case n.e$:case a.Sw:return e.set("courseAdminExpanded",o.expanded!==undefined?o.expanded:true);case a.cj:return e.set("coursePromoAdminExpanded",o.expanded!==undefined?o.expanded:true);case n.I6:case a.ym:return e.set("cohortAdminExpanded",o.expanded!==undefined?o.expanded:true);case n.zg:case a.dS:return e.set("certificationExpanded",o.expanded!==undefined?o.expanded:true);case n.lG:case a.dD:return e.set("assessmentExpanded",o.expanded!==undefined?o.expanded:true);case a.VL:return e.setIn(["byCoursePath",o.coursePath,"isLoadingNavData"],true);case a.bz:return e.setIn(["byCoursePath",o.coursePath,"isLoadingNavData"],false);case a.x7:return e.set("courseDesignAdminExpanded",o.expanded!==undefined?o.expanded:true);default:{return e}}}var s=t(79105);function c(){(0,s.G)("CourseNavigationInfo",i)}c();if(false){}},98838:(e,o,t)=>{"use strict";t.d(o,{Eu:()=>g,R5:()=>f,SX:()=>h,Xs:()=>b,ad:()=>x});var r=t(53624);var n=t.n(r);var a=t(24885);var i=t(22715);var s=t(37183);var c=t(33246);const d=e=>e.CohortRoles;const l=e=>e.Users;const u=(0,a.Mz)(d,(e=>{let o=n().Map();for(const t of e.values()){o=o.setIn([t.get("course"),t.get("id")],t)}return o}));const p=(0,a.Mz)(c.KU,u,((e,o)=>o.get(e,n().Map())));const g=(0,a.Mz)(p,l,((e,o)=>{let t=n().OrderedMap();for(const r of e.values()){const e=r.get("user");const a=r.get("cohort");if(r.get("roles").size===0){continue}if(!t.has(e)){t=t.set(e,o.get(e,n().Map()))}t=t.setIn([e,"cohortRoles",a],r)}t=t.sortBy((e=>e.get("fullName")));return t}));const m=(0,a.Mz)(d,i.xG,s.as,((e,o,t)=>e.find((e=>(e===null||e===void 0?void 0:e.get("cohort"))===o&&(e===null||e===void 0?void 0:e.get("user"))===(t===null||t===void 0?void 0:t.get("id"))))));const b=(0,a.Mz)(m,(e=>!!e&&e.get("roles").indexOf("assessor")!==-1));const h=(0,a.Mz)(m,(e=>!!e&&e.get("roles").indexOf("facilitator")!==-1));const f=(0,a.Mz)(m,(e=>!!e&&e.get("roles").indexOf("assessment_designer")!==-1));const x=(0,a.Mz)(m,(e=>!!e&&e.get("roles").size>0))}},e=>{var o=o=>e(e.s=o);e.O(0,["vendors-node_modules_core-js_modules_es_regexp_flags_js-node_modules_core-js_modules_es_typed-ee22eb","vendors-node_modules_emotion_react_dist_emotion-react_browser_esm_js-node_modules_react-dom_i-28b412","vendors-node_modules_moment_locale_vi_js-node_modules_url-parse_index_js","vendors-node_modules_immutable_dist_immutable_js","vendors-node_modules_amplitude_analytics-browser_lib_esm_index_js-node_modules_amplitude_plug-68f3e8","vendors-node_modules_emotion_core_dist_core_browser_esm_js-node_modules_emotion_styled_base_d-c357f7","vendors-node_modules_sentry_browser_node_modules_sentry_core_esm_exports_js","vendors-node_modules_lodash_debounce_js-node_modules_lodash_get_js","vendors-node_modules_redux-devtools_remote_lib_esm_devTools_js-node_modules_reduxjs_toolkit_d-07e45d","vendors-node_modules_color_index_js","vendors-node_modules_respond-framework_react_es_index_js-node_modules_ungap_structured-clone_-8d5784","web_metrics_metrics_jsx-node_modules_moment_locale_sync_recursive_vi_js_","ReduxStorage_Store_jsx","ReduxStorage_Courses_dispatchers_common_jsx","ReduxStorage_UserSubscriptionPlans_selectors_jsx"],(()=>(o(63960),o(78822),o(42559),o(26189))));var t=e.O()}]);