(self["webpackChunk"]=self["webpackChunk"]||[]).push([["web_module-display_module-display-wrapper-wrapper_jsx-web_utilities_courseInfoBarLocation_ts"],{9673:(e,t,o)=>{"use strict";o.d(t,{v:()=>h});var n=o(95616);var s=o.n(n);var i=o(94260);var r=o(78674);var d=o(79105);var a=o(52257);var c=o(63696);var _=o(67625);var l=o(56283);const p=(0,_.rP)(c.lazy((()=>Promise.all([o.e("vendors-node_modules_mime_index_js-node_modules_dompurify_dist_purify_es_mjs"),o.e("vendors-node_modules_pica_dist_pica_js"),o.e("vendors-node_modules_react-tabs_esm_index_js"),o.e("vendors-node_modules_react-katex_dist_react-katex_js"),o.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-4aa336"),o.e("vendors-node_modules_decimal_js_decimal_mjs"),o.e("vendors-node_modules_inherits_inherits_browser_js-node_modules_is-arguments_index_js-node_mod-6cbba2"),o.e("vendors-node_modules_fortawesome_free-regular-svg-icons_index_es_js"),o.e("vendors-node_modules_bson_lib_bson_objectid_js"),o.e("vendors-node_modules_pnotify_lib_umd_PNotifyButtons_js"),o.e("vendors-node_modules_react-select_dist_react-select_esm_js"),o.e("vendors-node_modules_react-laag_dist_react-laag_esm_js-node_modules_framer-motion_dist_es_com-32ab86"),o.e("vendors-node_modules_color_index_js"),o.e("vendors-node_modules_bson_lib_bson_bson_js"),o.e("vendors-node_modules_reakit-utils_es_ensureFocus_js-node_modules_reakit-utils_es_getNextActiv-070e74"),o.e("vendors-node_modules_react-pdf_dist_esm_Page_AnnotationLayer_css-node_modules_react-pdf_dist_-b6512d"),o.e("vendors-node_modules_rc-tooltip_es_index_js"),o.e("vendors-node_modules_react-dom_server_browser_js"),o.e("vendors-node_modules_react-aria_interactions_dist_Pressable_mjs-node_modules_react-aria-compo-9ce535"),o.e("vendors-node_modules_fortawesome_pro-regular-svg-icons_faPaperclip_js-node_modules_at_js_dist-bffd2b"),o.e("vendors-node_modules_fortawesome_free-solid-svg-icons_faCaretDown_js-node_modules_fortawesome-afa513"),o.e("vendors-node_modules_react-selectize_src_index_js"),o.e("vendors-node_modules_react-datetime_DateTime_js"),o.e("vendors-node_modules_color-convert_index_js"),o.e("vendors-node_modules_framer-motion_dist_es_render_components_motion_proxy_mjs"),o.e("vendors-node_modules_async_dist_async_js-node_modules_events_events_js-node_modules_socketclu-4e7b07"),o.e("vendors-node_modules_dnd-kit_core_dist_core_esm_js"),o.e("vendors-node_modules_tailwind-merge_dist_bundle-mjs_mjs"),o.e("vendors-node_modules_openlearningnet_openlearningui_dist_components_Buttons_Button_component_web_js"),o.e("vendors-node_modules_react-container-dimensions_lib_index_js"),o.e("vendors-node_modules_medium-draft_lib_index_js"),o.e("vendors-node_modules_react-bootstrap_es_Tab_js-node_modules_react-bootstrap_es_Tabs_js"),o.e("vendors-node_modules_rc-slider_es_index_js"),o.e("vendors-node_modules_fortawesome_pro-regular-svg-icons_faCheckSquare_js-node_modules_fortawes-30b84c"),o.e("vendors-node_modules_dnd-kit_modifiers_dist_modifiers_esm_js-node_modules_emotion_cache_dist_-269192"),o.e("web_components_RichTextEditor_RichTextEditorCore_jsx"),o.e("web_components_ImageAuthoringSettings_ImageDescriptionsSettings_component_jsx-web_components_-f8bf0b"),o.e("ReduxStorage_IdentitySession_dispatchers_ts"),o.e("web_components_Input_Dropdowns_SingleSelect_component_tsx"),o.e("web_containers_AiAssistant_styles_tsx"),o.e("web_containers_AiAssistant_AiAssistantCreateRevision_helpers_ts-web_containers_AiAssistant_Ai-67afbb"),o.e("web_components_Comments_ReplyForm_ReplyForm_jsx-web_components_IFramelyMedia_IFramelyMedia_js-017f15"),o.e("web_components_AlignmentTags_component_tsx-web_components_RichTextEditor_RichTextEditor_jsx"),o.e("web_components_Comments_index_jsx"),o.e("web_components_ModalPost_ModalPost_jsx"),o.e("web_components_PopoverAria_components_tsx-web_components_Post_Stamp_styles_ts-web_utilities_d-52e676"),o.e("web_vendor_jquery_plugins_jquery-ui-1_11_4_custom_js"),o.e("web_containers_AiAssistant_AiAssistantCreateRevision_component_tsx"),o.e("web_containers_CourseAdmin_CourseBuilder_components_ModuleContent_CreateUpdatePagePlan_compon-ad263f"),o.e("web_containers_BlockPage_BlockPageContent_jsx"),o.e("CustomPropTypes_UserPropTypes_jsx-ReduxStorage_Pages_dispatchers_web_jsx-web_components_Edito-5d4b8a"),o.e("common_components_MultipleChoiceWidget_helpers_ts-web_components_Input_DropdownsOld_SingleSel-f24a87"),o.e("ReduxStorage_Posts_dispatchers_web_jsx-ReduxStorage_Posts_selectors_jsx-ReduxStorage_Profiles-6cf200")]).then(o.bind(o,53714)).then((e=>({default:e.ModuleDisplayElement}))))),null);const m=(e,t)=>(0,l.L)(p,e,t);const u=l.q;const g="course-sidebar";function h(){this.scope={moduleDisplay:null,viewedSet:null};this.closeModuleDisplay=()=>{const e=document.getElementById("course-page-container");e.classList.remove("hide");requestAnimationFrame((()=>{s()("body").trigger("block-page-mode-changed")}))};this.openOrUdateModuleDisplay=()=>{const e=document.getElementById("course-page-container");e.classList.add("hide");this.scrollToCurrent()};this.findAncestor=(e,t)=>{while((e=e.parentElement)&&!(e.matches||e.matchesSelector).call(e,t));return e};this.scrollToCurrent=()=>{const e=document.getElementsByTagName("module-display")[0];if(e){setTimeout((()=>{const t=e.querySelector(".mv-page.current");if(t){(0,a.hT)(t,{scrollMode:"if-needed",behavior:"smooth"})}}),500)}};this.onChangeReduxOpenSet=()=>{const e=(0,r.p)(d.il.getState());if(e!==this.scope.viewedSet){this.scope.viewedSet=e;if(e!==null){this.openOrUdateModuleDisplay()}else{this.closeModuleDisplay()}}};this.mount=()=>{this.scope.moduleDisplay=document.getElementById("module-display-layer");m(this.scope.moduleDisplay,{});this.reduxUnsubscribe=d.il.subscribe(this.onChangeReduxOpenSet);this.onChangeReduxOpenSet()};this.unmount=()=>{s()("body").off(`.${g}`);if(this.reduxUnsubscribe){this.reduxUnsubscribe()}this.reduxUnsubscribe=null;u(this.scope.moduleDisplay)};return this}},16530:(e,t,o)=>{"use strict";o.d(t,{Tn:()=>$,Wk:()=>j,mJ:()=>c,ow:()=>C});var n=o(67700);const s="https://upload.wikimedia.org/wikipedia/commons/a/a2/Monet_Chasse-maree_a_l%27ancre_Musee_d%27Orsay.jpg";const i=e=>(0,n.css)``;const r=150;const d=210;const a=290;const c=768;const _=980;const l=1200;const p=1920;const m=2;const u=10;const g=16;const h=2;const b=8;const x=6;const w=36;const f=28;const v=100;const y=90;const $=104;const j=116;const k=40;const P=24;const S=3;const C=e=>{const{themeColor:t,themeColor85:o,themeColor70:s,courseLayoutSettings:$}=e;if(!$.modern){return(0,n.css)``}if($.courseFrame==="originalCourseFrame"){return(0,n.css)`
      body {
        background-image: none;
      }

      body,
      #site-container,
      .course-info-container {
        background-color: ${t};
        padding-bottom: 0;
      }

      #site-page-header-container {
        display: ${$.bannerEnabled?"block":"none"};
      }

      .first-page-container {
        margin-top: 0;
      }

      /* ===== Change: Small paddings on the outermost part of the page */
      .course-container-row {
        /* padding: 0 ${u}px; */
        padding: 0;
      }

      nav.course-sidebar-span {
        padding-left: ${u}px;

        @media (min-width: ${c}px) and (max-width: ${_}px) {
          width: ${r}px;
        }

        @media (min-width: ${_}px) {
          width: ${d}px;
        }

        @media (min-width: ${l}px) {
          width: ${a}px;
        }

        @media (min-width: ${p}px) {
          padding-left: 0;
        }
      }

      #course-page-container {
        @media (min-width: ${c}px) {
          width: calc(100% - ${r+u}px);
          padding-right: ${u}px;
        }

        @media (min-width: ${_}px) {
          width: calc(100% - ${d+u}px);
        }

        @media (min-width: ${l}px) {
          width: calc(100% - ${a+u}px);
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
          background: ${t};
          z-index: ${S};

          // Full width on mobile devices
          left: 0;

          // Avoids the sidebar column on tablets and desktops
          @media (min-width: ${c}px) {
            left: calc(${r}px + ${m}px);
          }

          @media (min-width: ${_}px) {
            left: calc(${d}px + ${m}px);
          }

          @media (min-width: ${l}px) {
            left: calc(${a}px + ${m}px);
          }

          // If the window width is less than the max container width, the main
          // container will be full width. However when it is not, then the
          // main container is centered, meawrning that we need to calculate
          // the left hand side offset due to the centering.
          @media (min-width: ${p}px) {
            left: calc(
              (100% - ${p}px) / 2 + ${a}px +
                ${u}px
            );
          }
        }
      }
      /* ===== End of change */

      /* Applies to both course block pages and setup pages */
      #course-page-content {
        border-radius: ${b}px;
        box-shadow: none;
      }

      module-display {
        margin-top: ${m}px;
      }

      #communityFooter {
        border-radius: ${b}px;
      }

      .banner-title-text {
        font-size: ${k}px;

        @media (max-width: ${c}px) {
          font-size: ${P}px;
        }
      }

      .course-banner-small-container,
      .course-banner-small-background-img {
        border-radius: ${b}px;
        min-height: ${v}px;
      }

      #site-page-header-container {
        .row {
          margin-left: 0;
        }

        .span12 {
          background-color: ${t};
          margin-left: 0;
          width: 100%;
        }
      }

      .course-banner-background {
        /* border-radius: 8px; */

        .course-banner-background-img {
          height: 100%;
          width: 100%;
          object-fit: ${$.bannerFit==="contain"?"contain":"cover"};
        }
      }

      #course-info {
        background: transparent;
        border-radius: ${b}px;

        .course-stats {
          /* border-radius: ${b}px; */
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
        background-color: ${t};
      }

      blockpage-header > div.blockpage-header-container {
        /* Wait for outcome tags to be implemented here */
        /* height: 167px; */
        padding: ${g}px;

        &.no-page-options {
          border-top-left-radius: ${b}px;
          border-top-right-radius: ${b}px;
        }
      }

      page-options-bar {
        min-height: ${w}px !important;

        page-mode-toggle {
          height: ${f}px !important;
        }

        div.page-options {
          height: ${w}px !important;
          border-top-right-radius: ${b}px;
          border-top-left-radius: ${b}px;

          // border-top-right-radius and border-top-left-radius of this element
          // are set dynamically in updateCourseInfoBarLocation().
        }

        .page-mode-button {
          height: ${f}px !important;

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
        background: ${t};
      }

      #portal-footer-mount portal-footer {
        margin-top: ${y}px !important;
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
        border-radius: ${b}px;
        left: 0;
        width: 0;

        @media (min-width: ${c}px) {
          width: 140px;
        }

        @media (min-width: ${_}px) {
          width: 200px;
        }

        @media (min-width: ${l}px) {
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

            @media (min-width: ${c}px) {
              grid-template-columns: repeat(1, minmax(72px, 1fr));
            }

            @media (min-width: ${_}px) {
              grid-template-columns: repeat(2, minmax(72px, 1fr));
            }

            @media (min-width: ${l}px) {
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
          max-width: ${l}px;
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
    `}return i({themeColor:t,themeColor85:o,themeColor70:s})}},68319:(e,t,o)=>{"use strict";o.d(t,{I:()=>h});var n=o(95616);var s=o.n(n);var i=o(39574);var r=o(16530);function d(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?d(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){t=_(t);if(t in e){Object.defineProperty(e,t,{value:o,enumerable:true,configurable:true,writable:true})}else{e[t]=o}return e}function _(e){var t=l(e,"string");return typeof t==="symbol"?t:String(t)}function l(e,t){if(typeof e!=="object"||e===null)return e;var o=e[Symbol.toPrimitive];if(o!==undefined){var n=o.call(e,t||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const p=30;const m=14;const u=52;const g=e=>()=>requestAnimationFrame((()=>{const t=i.uC;const o=s()("#course-info-container");const n=s()("#course-info");const d=s()("#page-options-bar");const c=s()(window);if(n.length===0||o.length===0){return}let _=null;const l=o.offset();const g=c.scrollTop();if(!l||g===undefined){return}const h=l.top-t;const b=5;const x=e.bannerEnabled?0:5;if(h-x<g-b){_=a({position:"fixed","z-index":p,top:t},(e===null||e===void 0?void 0:e.modern)?{width:"100%",top:u,borderRadius:0}:{});if(e===null||e===void 0?void 0:e.modern){var w;(w=document.getElementById("course-page-content"))===null||w===void 0?void 0:w.style.setProperty("--pseudo-height",`${r.Wk}px`)}}else{_=a({position:"relative","z-index":m,top:"auto"},(e===null||e===void 0?void 0:e.modern)?{width:"100%"}:{});if(e===null||e===void 0?void 0:e.modern){var f;(f=document.getElementById("course-page-content"))===null||f===void 0?void 0:f.style.setProperty("--pseudo-height",`${r.Tn}px`)}}if(d.height()===0){var v;(v=document.getElementById("course-page-content"))===null||v===void 0?void 0:v.style.setProperty("--pseudo-height",`0px`)}n.css(_)}));const h=e=>{const t=s()(window);t.scroll(g(e));t.resize(g(e))}},81856:(e,t,o)=>{"use strict";o.r(t);var n=o(95616);var s=o.n(n);(function(e){e.fn.waitUntilExists=function(t,o,n){var s="found";var i=e(this.selector);var r=i.not((function(){return e(this).data(s)})).each(t).data(s,true);if(!n){(window.waitUntilExists_Intervals=window.waitUntilExists_Intervals||{})[this.selector]=window.setInterval((function(){i.waitUntilExists(t,o,true)}),500)}else if(o&&r.length){window.clearInterval(window.waitUntilExists_Intervals[this.selector])}return i}})(s())},94260:(e,t,o)=>{o(81856)}}]);