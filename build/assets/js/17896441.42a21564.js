"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[918],{8943:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(7294),l=a(6010),i=a(3783),s=a(9960),r=a(5999);var o=function(e){var t=e.metadata;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement(s.Z,{className:"pagination-nav__link",to:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},c=a(2263),d=a(907),m=a(2822);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function g(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function p(e){var t,a=e.versionMetadata,i=(0,c.Z)().siteConfig.title,s=(0,d.gA)({failfast:!0}).pluginId,r=(0,m.J)(s).savePreferredVersionName,o=(0,d.Jo)(s),u=o.latestDocSuggestion,p=o.latestVersionSuggestion,b=null!=u?u:(t=p).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(g,{versionLabel:p.label,to:b.path,onClick:function(){return r(p.name)}})))}var b=function(e){var t=e.versionMetadata;return t.banner?n.createElement(p,{versionMetadata:t}):n.createElement(n.Fragment,null)},E=a(1217);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){var t=e.lastUpdatedBy;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(6753),_=a(62),L="lastUpdated_mt2f";function Z(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(_.Z,e)))}function U(e){var t=e.editUrl,a=e.lastUpdatedAt,i=e.lastUpdatedBy,s=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||i)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:s,lastUpdatedBy:i})))}function C(e){var t=e.content.metadata,a=t.editUrl,i=t.lastUpdatedAt,s=t.formattedLastUpdatedAt,r=t.lastUpdatedBy,o=t.tags,c=o.length>0,d=!!(a||i||r);return c||d?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},c&&n.createElement(Z,{tags:o}),d&&n.createElement(U,{editUrl:a,lastUpdatedAt:i,lastUpdatedBy:r,formattedLastUpdatedAt:s})):n.createElement(n.Fragment,null)}var T=a(1575),y="tocCollapsible_aw-L",w="tocCollapsibleButton_zr6a",M="tocCollapsibleContent_0dom",A="tocCollapsibleExpanded_FSiv",x=a(5002);function H(e){var t,a=e.toc,i=e.className,s=e.minHeadingLevel,o=e.maxHeadingLevel,c=(0,m.uR)({initialState:!0}),d=c.collapsed,u=c.toggleCollapsed;return n.createElement("div",{className:(0,l.Z)(y,(t={},t[A]=!d,t),i)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w),onClick:u},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:M,collapsed:d},n.createElement(x.Z,{toc:a,minHeadingLevel:s,maxHeadingLevel:o})))}var B=a(9649),F="docItemContainer_oiyr",S="docItemCol_zHA2",V="tocMobile_Tx6Y";function D(e){var t,a=e.content,s=e.versionMetadata,r=a.metadata,c=a.frontMatter,d=c.image,u=c.keywords,v=c.hide_title,g=c.hide_table_of_contents,p=c.toc_min_heading_level,h=c.toc_max_heading_level,f=r.description,N=r.title,k=!v&&void 0===a.contentTitle,_=(0,i.Z)(),L=!g&&a.toc&&a.toc.length>0,Z=L&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(E.Z,{title:N,description:f,keywords:u,image:d}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",(t={},t[S]=!g,t))},n.createElement(b,{versionMetadata:s}),n.createElement("div",{className:F},n.createElement("article",null,s.badge&&n.createElement("span",{className:(0,l.Z)(m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",s.label),L&&n.createElement(H,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:h,className:(0,l.Z)(m.kM.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},k&&n.createElement(B.N,null,N),n.createElement(a,null)),n.createElement(C,e)),n.createElement(o,{metadata:r}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(T.Z,{toc:a.toc,minHeadingLevel:p,maxHeadingLevel:h,className:m.kM.docs.docTocDesktop}))))}},6753:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),l=a(5999),i=a(7462),s=a(3366),r=a(6010),o="iconEdit_mS5F",c=["className"],d=function(e){var t=e.className,a=(0,s.Z)(e,c);return n.createElement("svg",(0,i.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},m=a(2822);function u(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:m.kM.common.editThisPage},n.createElement(d,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1575:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),i=a(7294),s=a(6010),r=a(5002),o="tableOfContents_vrFS",c=["className"];var d=function(e){var t=e.className,a=(0,l.Z)(e,c);return i.createElement("div",{className:(0,s.Z)(o,"thin-scrollbar",t)},i.createElement(r.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),i=a(7294),s=a(2822),r=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function o(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?i.createElement("ul",{className:l?void 0:a},t.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(o,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}function c(e){var t=e.toc,a=e.className,c=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,m=void 0===d?"table-of-contents__link":d,u=e.linkActiveClassName,v=void 0===u?void 0:u,g=e.minHeadingLevel,p=e.maxHeadingLevel,b=(0,l.Z)(e,r),E=(0,s.LU)(),h=null!=g?g:E.tableOfContents.minHeadingLevel,f=null!=p?p:E.tableOfContents.maxHeadingLevel,N=(0,s.DA)({toc:t,minHeadingLevel:h,maxHeadingLevel:f}),k=(0,i.useMemo)((function(){if(m&&v)return{linkClassName:m,linkActiveClassName:v,minHeadingLevel:h,maxHeadingLevel:f}}),[m,v,h,f]);return(0,s.Si)(k),i.createElement(o,(0,n.Z)({toc:N,className:c,linkClassName:m},b))}},62:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(6010),i=a(5999),s=a(7774),r="tags_NBRY",o="tag_F03v";function c(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);