"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4103],{24103:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(24312),s=r(21292),i=r(50045),a=r(19841),l=r(58164),o=r(92379),c=r(72256),d=r(25940),u=r(79014),f=r(33168),m=r(80935),p=r(28178),h=r(79198),g=r(651);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(e){let{isDesktopNavCollapsed:t}=e;return(0,g.jsx)(l.E.div,{initial:!1,transition:{duration:.165},animate:{x:t?"0":"260px"},style:{rotate:t?180:0,y:"-50%"},className:(0,a.default)("fixed left-0 top-1/2 z-40"),children:(0,g.jsx)("button",{onClick:u.vm.toggleDesktopNavCollapsed,children:(0,g.jsxs)(s.u,{side:"right",label:t?(0,g.jsx)(c.Z,v({},y.openSidebar)):(0,g.jsx)(c.Z,v({},y.closeSidebar)),sideOffset:4,children:[(0,g.jsx)(l.E.div,{className:"flex h-[72px] w-8 items-center justify-center",variants:{rest:{},hover:{}},initial:!1,whileHover:["hover","arrow"],animate:["rest",t?"arrow":"line"],children:(0,g.jsxs)(l.E.div,{className:"flex h-6 w-6 flex-col items-center",children:[(0,g.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:".15rem"},arrow:{rotate:"15deg",y:".15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}}),(0,g.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:"-.15rem"},arrow:{rotate:"-15deg",y:"-.15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}})]})}),(0,g.jsx)(i.T,{children:t?(0,g.jsx)(c.Z,v({},y.openSidebar)):(0,g.jsx)(c.Z,v({},y.closeSidebar))})]})})})}function j(e){let{children:t,hideNavigation:r=!1,mobileHeaderContent:n,mobileHeaderRightContent:s,mobileHeaderBottomContent:i,sidebar:l,forceOpenDesktopSidebar:c=!1}=e,d=(0,f.w$)(),x=(0,u.xH)(),v=(0,h.Qr)(),y=[],w=null;o.Children.forEach(t,e=>{o.isValidElement(e)&&(e.type===j.Sidebars?w=e:y.push(e))});let O=d&&!r&&null!=l;return(0,g.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[O?(0,g.jsx)(m.Z,{children:(0,g.jsx)(p.l6,{forceOpenDesktopSidebar:c,children:(0,g.jsx)("div",{className:(0,a.default)("flex h-full min-h-0 flex-col"),children:l})})}):null,(0,g.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!d&&!r&&(0,g.jsxs)(m.Z,{children:[(0,g.jsx)(p.Vs,{onClickOpenSidebar:()=>u.vm.toggleActiveSidebar("mobile-nav"),rightContent:s,bottomContent:i,children:n}),(0,g.jsx)(p.PU,{children:l})]}),(0,g.jsxs)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:[(0,g.jsx)(m.Z,{children:O&&!v&&(0,g.jsx)(b,{isDesktopNavCollapsed:x})}),y]})]}),w]})}j.Sidebars=function(e){let{children:t}=e;return(0,g.jsx)(g.Fragment,{children:t})};let y=(0,d.vU)({closeSidebar:{id:"Stage.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"Stage.openSidebar",defaultMessage:"Open sidebar"}})},28178:function(e,t,r){r.d(t,{MP:function(){return C},Nz:function(){return N},PU:function(){return T},Vs:function(){return E},l6:function(){return _}});var n=r(24312),s=r(4545),i=r(73581),a=r(37782),l=r(94326),o=r(79931),c=r(16602),d=r(19841),u=r(58164),f=r(34442),m=r(92379),p=r(26123),h=r(72256),g=r(25940),x=r(79014);r(33168);var v=r(21292),b=r(79198),j=r(26382),y=r(6811),w=r(651);let O=["onClick","className"],k=["onClick"];function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function C(e){let{onClick:t,className:r}=e,n=(0,s.Z)(e,O);return(0,w.jsx)(j.zV,P({onClick:t,className:(0,d.default)(r,"flex-grow overflow-hidden")},n))}function N(e){let{historyDisabled:t,onNewChatButtonClick:r}=e,n=(0,p.Z)(),{isUserUnauthenticated:s,isLoading:i}=(0,l.EH)(),o=(0,b.Qr)();return i?null:s?(0,w.jsx)(Z,{}):(0,w.jsx)(v.u,{label:t?n.formatMessage({id:"/CxV1V",defaultMessage:"Clear chat"}):n.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),children:(0,w.jsx)(S,{onClick:()=>{c.A.logNewChatButtonClicked({location:"Mobile header"}),r()},children:t?(0,w.jsx)(a.Ezi,{className:(0,d.default)(o?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")}):(0,w.jsx)(a.bl$,{className:(0,d.default)(o?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")})})})}function S(e){let{onClick:t}=e,r=(0,s.Z)(e,k);return(0,w.jsx)("button",P({type:"button",className:"px-3",onClick:t},r))}function Z(e){let{className:t}=e,{navigateToAuth:r}=(0,l.EH)();return(0,w.jsx)(i.z,{as:"button",size:"small",color:"primary",className:t,onClick:()=>{let e=r({authType:"signup"});c.A.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:e})},children:(0,w.jsx)(h.Z,P({},D.signUpButtonText))})}let T=e=>{let{children:t}=e,r=(0,x.tN)(e=>e.activeSidebar),{isUserUnauthenticated:n}=(0,l.EH)(),s=(0,b.Qr)()&&n?(0,w.jsx)(y.E,{}):t;return(0,w.jsx)(o.fC,{open:"mobile-nav"===r,onOpenChange:e=>{e||x.vm.setActiveSidebar(!1)},children:(0,w.jsxs)(o.h_,{children:[(0,w.jsx)(o.aV,{className:"fixed inset-0 bg-black/50 radix-state-open:animate-show"}),(0,w.jsx)(o.VY,{className:"fixed left-0 top-0 h-full max-w-xs bg-token-sidebar-surface-primary focus:outline-none radix-state-open:animate-sidebarShow",children:s})]})})},E=e=>{let{onClickOpenSidebar:t,children:r,rightContent:n,bottomContent:s}=e,i=(0,x.tN)(e=>e.activeSidebar),l=(0,f.useRouter)().asPath;return(0,m.useEffect)(()=>{"mobile-nav"===i&&x.vm.setActiveSidebar(!1)},[l]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:"sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-main-surface-primary pl-1 juice:min-h-[60px] juice:border-transparent juice:pl-0 md:hidden",children:[(0,w.jsxs)("button",{type:"button",className:"absolute bottom-0 left-0 top-0 inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,children:[(0,w.jsx)("span",{className:"sr-only",children:(0,w.jsx)(h.Z,P({},D.openSidebar))}),(0,w.jsx)(a.Oqj,{className:"icon-lg juice:mx-2.5 juice:text-token-text-secondary"})]}),r,null!=n&&(0,w.jsx)("div",{className:"absolute bottom-0 right-2.5 top-0 flex items-center juice:right-3",children:n})]}),s&&(0,w.jsx)("div",{className:"flex w-full items-center justify-center bg-token-main-surface-primary",children:s})]})};function _(e){let{forceOpenDesktopSidebar:t,children:r}=e,n=(0,m.useRef)(null),s=(0,x.xH)()&&!t;return(0,w.jsx)(u.E.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary",ref:n,initial:!1,animate:{width:s?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:()=>{n.current&&(n.current.style.visibility="visible")},onAnimationComplete:()=>{n.current&&s&&(n.current.style.visibility="hidden")},children:(0,w.jsx)("div",{className:"h-full w-[260px]",children:(0,w.jsx)("div",{className:"flex h-full min-h-0 flex-col",children:r})})})}let D=(0,g.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}})},58635:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(79014),s=r(91530),i=r.n(s),a=r(26123),l=r(25940),o=r(61082),c=r(95459),d=r(651);function u(e){let{workspace:t}=e,r=(0,a.Z)(),s=(0,n.EV)(n.B.InviteUsersToWorkspace);return(0,d.jsx)(o.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:s,onClose:i(),type:"success",title:null!=t.data.name?r.formatMessage(f.inviteMemberModalTitle,{workspaceName:t.data.name}):r.formatMessage(f.inviteMemberModalTitleUntitledWorkspace),description:r.formatMessage(f.inviteMemberModalDescription),children:(0,d.jsx)(c.Z,{workspace:t,canResendInviteEmails:!0,onCancel:()=>n.vm.closeModal(n.B.InviteUsersToWorkspace),onSuccess:()=>n.vm.closeModal(n.B.InviteUsersToWorkspace),cancelButtonText:r.formatMessage(f.inviteMemberInviteCancelButton)})})}let f=(0,l.vU)({inviteMemberInviteCancelButton:{id:"adminPage.inviteMemberInviteCancelButton",defaultMessage:"Cancel"},inviteMemberModalTitle:{id:"adminPage.inviteMemberModalTitle",defaultMessage:"Invite members to the {workspaceName} workspace"},inviteMemberModalTitleUntitledWorkspace:{id:"adminPage.inviteMemberModalTitleUntitledWorkspace",defaultMessage:"Invite members to this workspace"},inviteMemberModalDescription:{id:"adminPage.inviteMemberModalDescription",defaultMessage:"This workspace is private, only select members and roles can use this workspace. This workspace is opted out of training."},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}."}})},54289:function(e,t,r){r.d(t,{C:function(){return d}});var n=r(24312),s=r(91530),i=r.n(s),a=r(68810);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let c={showReferralInviteModal:!1},d=(0,a.Ue)()(e=>o(o({},c),{},{setShowReferralInviteModal:function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i();e({showReferralInviteModal:t}),null==r||r()}}))},5994:function(e,t,r){r.d(t,{LE:function(){return eg},ZP:function(){return ep}});var n,s,i=r(81669),a=r(24312),l=r(77134),o=r(91092),c=r(79014),d=r(94326),u=r(31399),f=r(33168),m=r(50045),p=r(16602),h=r(23890),g=r(45232),x=r(19841),v=r(92379),b=r(98302),j=r(26123),y=r(72256),w=r(25940),O=r(74091),k=r(73581),M=r(44194);r(21292);var P=r(37782),C=r(79198),N=r(37508),S=r(92083),Z=r(58635),T=r(97021),E=r(87357),_=r(8025),D=r(34442),I=r(66187),F=r(68810);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let A={showFreeTrialLoadingPayment:!1,showConfirmDismissFreeTrial:!1,didCloseFreeTrial:!1},L=(0,F.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e})({},A));function B(e){L.setState({showFreeTrialLoadingPayment:e})}var H=r(43446),R=r(58164),W=r(14816),z=r(651);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Q(e){let{showFreeTrialLoadingPayment:t,handleGetPaymentLink:r}=e,n=(0,j.Z)(),{data:s,isLoading:i,isSuccess:a}=(0,W.a)({queryKey:["claimedReferralInvite"],queryFn:()=>T.Z.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),l=null==s?void 0:s.invite_code,{0:o,1:c}=(0,v.useState)(!1);if((0,v.useEffect)(()=>{l&&!o&&a&&(c(!0),g.m9.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),p.A.logEvent(_.M.chatgptReferralShowClaimedSidebartMenuPromo))},[l,c,o,a]),!l||i||!a)return null;let d=l.invite_metadata.invite_data,u=null!=d&&d.referral_trial_duration_months?(null==d?void 0:d.referral_trial_duration_months)>1?n.formatMessage($.monthsOfBenefit,{referralTrialDurationMonths:null==d?void 0:d.referral_trial_duration_months}):n.formatMessage($.daysOfBenefit,{referralTrialDurationDays:null==d?void 0:d.referral_trial_duration_days}):null;return(0,z.jsx)(R.E.div,{className:(0,x.default)("relative",{"cursor-progress opacity-50":t}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:(0,z.jsxs)(G,{className:(0,x.default)(t&&"opacity-75"),onClick:()=>{t||(B(!0),r())},children:[(0,z.jsxs)("div",{className:"flex w-full flex-row items-center justify-start gap-3 ",children:[(0,z.jsx)(b.E33,{className:"icon-sm shrink-0"}),(0,z.jsx)(y.Z,V(V({},$.freeTrialCta),{},{values:{duration:u}}))]}),!t&&(0,z.jsx)(P.tPq,{onClick:e=>{e.stopPropagation(),L.setState({showConfirmDismissFreeTrial:!0}),L.setState({didCloseFreeTrial:!0})},className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),(0,z.jsx)("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}let G=O.Z.a(n||(n=(0,i.Z)(["group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm"]))),$=(0,w.vU)({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}});var K=r(26382),Y=r(2425),X=r(54289);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function et(){var e,t,r,n,s,i,a;let l=(0,D.useRouter)(),c=(0,j.Z)(),d=(0,o.hz)(),u=(0,o.t)(),f=!u,m=null!==(e=null==u?void 0:u.hasPaidSubscription())&&void 0!==e&&e,h=null!==(t=null==u?void 0:u.hasClaimedFreeTrial())&&void 0!==t&&t,x=(0,v.useMemo)(()=>null==u?void 0:u.subscriptionAnalyticsParams,[u]),b=async()=>{B(!0),p.A.logEvent(_.M.clickAccountPaymentCheckout,x);try{let e=await T.Z.getCheckoutLink(d);l.push(e.url)}catch(e){H.m.warning(c.formatMessage(ei.paymentErrorWarning),{hasCloseButton:!0}),B(!1)}finally{}},y=L(e=>e.didCloseFreeTrial),w=L(e=>e.showFreeTrialLoadingPayment),O=!y&&h,k=null!==(r=null==u?void 0:u.wasPaidCustomer())&&void 0!==r&&r,M=null!==(n=null==u?void 0:u.isWorkspaceAccount())&&void 0!==n&&n,P=null!==(s=null==u?void 0:u.isPlus())&&void 0!==s&&s,C=!f&&!M&&(!1===P||null!==(i=null==d?void 0:d.includes(E.L0.Teams))&&void 0!==i&&i),{setShowReferralInviteModal:N}=(0,X.C)(e=>({setShowReferralInviteModal:e.setShowReferralInviteModal})),S=(0,v.useCallback)(()=>{g.m9.logEvent("chatgpt_referral_invite_sidebar_clicked"),p.A.logEvent(_.M.chatgptReferralInviteSidebarClicked,x),N(!0,()=>{p.A.logEvent(_.M.clickSidebarAccountPaymentMenuItem,x)})},[x,N]),Z=null!==(a=null==u?void 0:u.isTeam())&&void 0!==a&&a;return(0,z.jsxs)(z.Fragment,{children:[((null==d?void 0:d.includes(E.a3))||m)&&(0,z.jsx)(es,{analyticsParams:x,handleReferralInvite:S}),!m&&O&&(0,z.jsx)(Q,{showFreeTrialLoadingPayment:w,handleGetPaymentLink:b}),Z&&(0,z.jsx)(en,{}),C&&(0,z.jsx)(K.Vq,{onClick:O?()=>{w||(B(!0),b())}:()=>{p.A.logEvent(_.M.clickSidebarAccountPaymentMenuItem,x),(0,Y.MG)("Sidebar account payment menu item")},className:"m-0 rounded-lg px-2",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsx)("div",{className:"flex items-center gap-2",children:(0,z.jsx)(er,{wasPaidCustomer:k,showFreeTrialLoadingPayment:w,hasPlusSubscription:P})})})})]})}let er=e=>{let{wasPaidCustomer:t,showFreeTrialLoadingPayment:r,hasPlusSubscription:n}=e;return r?(0,z.jsx)(I.Z,{className:"icon-sm shrink-0"}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(P.X72,{className:"icon-sm shrink-0"})}),(0,z.jsx)("div",{className:"flex flex-col",children:t?(0,z.jsx)(y.Z,ee({},ei.renewPlus)):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("span",{children:n?(0,z.jsx)(y.Z,ee({},ei.createATeamWorkspace)):(0,z.jsx)(y.Z,ee({},ei.upgradePlan))}),(0,z.jsx)("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:n?(0,z.jsx)(y.Z,ee({},ei.upgradeToTeamUpsell)):(0,z.jsx)(y.Z,ee({},ei.upgradeToPlusUpsell))})]})})]})},en=()=>{let e=(0,o.t)();return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(K.Vq,{onClick:()=>{c.vm.openModal(c.B.InviteUsersToWorkspace)},className:"rounded-lg",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsxs)("span",{className:"flex items-center gap-2",children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(P.pF9,{className:"icon-sm shrink-0"})}),(0,z.jsx)(y.Z,ee({},ei.inviteMembers))]})})}),null!=e?(0,z.jsx)(Z.Z,{workspace:e}):null]})},es=e=>{var t;let{analyticsParams:r,handleReferralInvite:n}=e,s=(0,o.hz)(),i=null!==(t=null==s?void 0:s.includes(E.a3))&&void 0!==t&&t,a=(0,o.t)(),{data:l}=(0,W.a)({queryKey:["referralInvites"],queryFn:()=>T.Z.getEligibleReferralInvites(),enabled:i}),c=a&&!a.isOrWasPaidCustomer()&&!a.hasPlusFeatures(),d=(null==l?void 0:l.invites_remaining)&&(null==l?void 0:l.invites_remaining)>0,u=c&&d,{0:f,1:m}=(0,v.useState)(!1);return((0,v.useEffect)(()=>{u&&!f&&(m(!0),g.m9.logEvent("chatgpt_referral_show_sidebar_menu_item"),p.A.logEvent(_.M.chatgptReferralShowSidebarMenuItem,r))},[u,m,f,r]),u)?(0,z.jsx)(K.Vq,{onClick:n,className:"rounded-lg",children:(0,z.jsx)("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:(0,z.jsxs)("span",{className:"flex items-center gap-2",children:[(0,z.jsx)("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:(0,z.jsx)(P.pF9,{className:"icon-sm shrink-0"})}),(0,z.jsx)(y.Z,ee({},ei.inviteReferral))]})})}):null},ei=(0,w.vU)({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"Get GPT-4, DALL\xb7E, and more"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});var ea=r(49163),el=r(35226),eo=r(96053);let ec=()=>(0,W.a)({queryKey:["userSurvey"],queryFn:async()=>T.Z.getActiveUserSurvey()}),ed=()=>{let e=(0,el.NL)();return(0,eo.D)({mutationFn:async e=>{let{surveyId:t,reason:r}=e;return T.Z.completeUserSurvey(t,r)},onSuccess:async()=>{e.invalidateQueries({queryKey:["userSurvey"]})}})};function eu(){var e;let t=(0,j.Z)(),r=(0,f.w$)(),{0:n,1:s}=(0,v.useState)(!1),i=null===(e=ec().data)||void 0===e?void 0:e.survey,a=ed(),l=e=>{s(!0),null!=i&&a.mutate({surveyId:i.id,reason:e})};return n||null==i?null:(0,z.jsx)("div",{className:"mx-1 mb-1 rounded-sm bg-brand-blue-800",children:(0,z.jsxs)("div",{className:"flex flex-col items-center justify-stretch gap-3 p-3 text-sm text-white",children:[(0,z.jsxs)("div",{className:"flex w-full items-start",children:[(0,z.jsxs)("div",{className:"flex flex-grow flex-col gap-1",children:[(0,z.jsx)("div",{className:"font-bold",children:(0,z.jsx)(y.Z,{id:"navigation.survey.title",defaultMessage:"We are asking a small group of people for their opinion"})}),(0,z.jsx)("div",{children:(0,z.jsx)(y.Z,{id:"navigation.survey.description",defaultMessage:"Could you spare few minutes to take a short survey?"})})]}),(0,z.jsx)("button",{className:"text-white/25 hover:text-white/40",onClick:()=>l("dismissed"),"aria-label":t.formatMessage({id:"navigation.survey.dismiss",defaultMessage:"Dismiss survey"}),children:(0,z.jsx)(P.tPq,{width:r?"20px":"24px",height:r?"20px":"24px"})})]}),(0,z.jsxs)("a",{href:i.link,target:"_blank",className:"flex w-full flex-row items-center justify-center gap-2 rounded bg-white/25 p-2 hover:bg-white/40",rel:"noreferrer",onClick:()=>l("link_clicked"),children:[(0,z.jsx)(P.Pfi,{className:"icon-sm"}),(0,z.jsx)(y.Z,{id:"navigation.survey.takeSurvey",defaultMessage:"Take survey"})]})]})})}function ef(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function em(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ef(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ef(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function ep(e){let{onNewThread:t,currentGizmoId:r,navHeader:n,children:s,className:i}=e,a=(0,j.Z)(),l=(0,o.t)(),c=null==l?void 0:l.isWorkspaceAccount(),f=(0,v.useRef)(null),p=(0,M.V_)(),{openSettings:h}=(0,S.Fr)(),{isUserUnauthenticated:g}=(0,d.EH)();(0,v.useEffect)(()=>{M._P.getModifiedSettings()&&h()},[]);let w=(0,u.cQ)(),O=(0,v.useCallback)(()=>{t(),M._P.enableHistory({useLocalStorage:!w})},[t,w]),P=(0,z.jsxs)("div",{className:(0,x.default)("absolute left-0 top-0 z-20 w-full overflow-hidden transition-all duration-500",p?"visible max-h-72":"invisible max-h-0"),children:[(0,z.jsx)("div",{className:"px-3 py-3.5",children:(0,z.jsx)(N.jl,{gizmo:void 0,historyDisabled:!0,isActive:void 0===r})}),(0,z.jsxs)("div",{className:"bg-gray-900 px-4 py-3",children:[(0,z.jsx)("div",{className:"p-1 text-sm text-gray-100",children:(0,z.jsx)(y.Z,em({},ev.chatHistoryOff))}),(0,z.jsx)("div",{className:"p-1 text-xs text-token-text-tertiary",children:(0,z.jsx)(y.Z,em(em({},c?ev.chatHistoryOffDescriptionBusiness:ev.chatHistoryOffDescription),{},{values:{learnMore:(0,z.jsx)("a",{href:"https://help.openai.com/en/articles/7730893",target:"_blank",className:"underline",rel:"noreferrer",children:(0,z.jsx)(y.Z,em({},ev.learnMore))}),b:e=>(0,z.jsx)("strong",{children:e})}}))}),(0,z.jsxs)(k.z,{fullWidth:!0,className:"mt-4",onClick:O,color:"primary",size:"medium",children:[(0,z.jsx)(b.$IY,{className:"icon-sm"}),(0,z.jsx)(y.Z,em({},ev.enableChatHistory))]})]}),(0,z.jsx)("div",{className:"h-24 bg-gradient-to-t from-gray-900/0 to-gray-900"})]});return(0,z.jsx)(z.Fragment,{children:(0,z.jsxs)("div",{className:"relative h-full w-full flex-1 items-start border-white/20",children:[(0,z.jsx)(m.f,{asChild:!0,children:(0,z.jsx)("h2",{children:(0,z.jsx)(y.Z,em({},ev.chatHistoryLabel))})}),(0,z.jsxs)("nav",{className:(0,x.default)("flex h-full w-full flex-col px-3 pb-3.5 juice:pb-0",i),"aria-label":a.formatMessage(ev.chatHistoryLabel),children:[n,l&&!w&&!g&&P,(0,z.jsx)(ex,{ref:f,$disableScroll:p&&!w&&!g,children:s}),(0,z.jsx)(eh,{})]})]})})}function eh(){let{0:e}=(0,v.useState)(()=>{let e=h.bX.getCookie(h.cn.Workspace);return"string"==typeof e&&e!==l.b}),t=(0,o.t)(),r=(null==t?void 0:t.data)==null,{openSettings:n}=(0,S.Fr)(),{isUserUnauthenticated:s}=(0,d.EH)(),i=(0,C.Qr)(),a=(0,f.w$)();return e&&r||!t||i&&s?null:s?(0,z.jsx)(eg,{}):(0,z.jsxs)("div",{className:"flex flex-col pt-2 empty:hidden juice:py-2 dark:border-white/20",children:[(0,z.jsx)(eu,{}),(0,z.jsx)(et,{}),(a||!i)&&i?null:(0,z.jsx)("div",{className:"flex w-full items-center",children:(0,z.jsx)("div",{className:"max-w-[100%] grow",children:(0,z.jsx)(ea.W,{onClickSettings:()=>n()})})})]})}let eg=()=>{let{navigateToAuth:e}=(0,d.EH)();return(0,z.jsxs)("div",{className:"juice:p-2",children:[(0,z.jsxs)("div",{className:"mb-4 mt-2",children:[(0,z.jsx)("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:(0,z.jsx)(y.Z,em({},ev.signUpOrLogIn))}),(0,z.jsx)("p",{className:"text-sm text-token-text-secondary",children:(0,z.jsx)(y.Z,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),(0,z.jsxs)("div",{className:"flex flex-col space-y-2 juice:flex-row juice:items-start juice:gap-2 juice:space-y-0",children:[(0,z.jsx)(k.z,{as:"button",size:"medium",color:"primary",onClick:()=>{let t=e({authType:"signup"});p.A.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:t}),g.m9.logEvent("chatgpt_sidebar_signup_button_clicked")},children:(0,z.jsx)(y.Z,em({},ev.unauthSignupCta))}),(0,z.jsx)(k.z,{as:"button",size:"medium",color:"secondary","data-testid":"login-button",onClick:()=>{let t=e({authType:"login"});p.A.logLogInButtonClicked({location:"Sidebar bottom unit",provider:t}),g.m9.logEvent("chatgpt_sidebar_login_button_clicked")},children:(0,z.jsx)(y.Z,em({},ev.unauthLoginCta))})]})]})},ex=O.Z.div(s||(s=(0,i.Z)(["flex-col flex-1 transition-opacity duration-500 -mr-2 pr-2\n  ",""])),e=>{let{$disableScroll:t}=e;return t?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}),ev=(0,w.vU)({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},chatHistoryOff:{id:"NavigationContent.chatHistoryOff",defaultMessage:"Chat History is off for this browser."},chatHistoryOffDescription:{id:"NavigationContent.chatHistoryOffDescription",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, be used to train our models, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},chatHistoryOffDescriptionBusiness:{id:"NavigationContent.chatHistoryOffDescriptionBusiness",defaultMessage:"When history is turned off, new chats on this browser won't appear in your history on any of your devices, or stored for longer than 30 days. <b>This setting does not sync across browsers or devices.</b> {learnMore}"},learnMore:{id:"NavigationContent.learnMore",defaultMessage:"Learn more"},enableChatHistory:{id:"NavigationContent.enableChatHistory",defaultMessage:"Enable chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}})},6811:function(e,t,r){r.d(t,{E:function(){return p}});var n=r(79014),s=r(45232),i=r(72256),a=r(67809),l=r(37782),o=r(79198),c=r(92083),d=r(5994),u=r(42177),f=r(45077),m=r(651);let p=()=>{var e,t;let{openSettings:r}=(0,c.Fr)(),p=null===(e=(0,s.sB)("conversations_are_reportable"))||void 0===e?void 0:e.value,h=null===(t=(0,s.sB)("chatgpt-conversation-report-flow"))||void 0===t?void 0:t.value,g=(0,o.Qr)();return(0,m.jsxs)("div",{className:"flex h-full flex-col gap-2 p-3",children:[(0,m.jsx)(f.f,{icon:l.bl$,onClick:()=>{n.vm.toggleActiveSidebar("mobile-nav")},children:(0,m.jsx)(i.Z,{id:"0FupYP",defaultMessage:"New chat"})}),(0,m.jsx)("div",{className:"flex grow items-end justify-center juice:items-center",children:(0,m.jsx)(d.LE,{})}),g&&(0,m.jsxs)(a.d,{contentClassName:"w-[298px]",triggerButton:(0,m.jsx)(f.f,{icon:l.voc,children:(0,m.jsx)(i.Z,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[(0,m.jsx)(a.Z.Item,{onClick:()=>r(),icon:l.SWE,children:(0,m.jsx)(i.Z,{id:"HrRLkZ",defaultMessage:"Settings"})}),p&&h&&(0,m.jsx)(a.Z.Item,{icon:l.U65,onClick:()=>{n.vm.openModal(n.B.ReportConversation)},children:(0,m.jsx)(i.Z,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),(0,m.jsx)(a.Z.Separator,{}),(0,m.jsx)(u.E,{})]})]})}},42177:function(e,t,r){r.d(t,{E:function(){return c}});var n=r(16602),s=r(8025),i=r(72256),a=r(67809),l=r(37782),o=r(651);function c(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{n.A.logEvent(s.M.clickFaqLink)},children:(0,o.jsx)(i.Z,{id:"thread.helpAndFaq",defaultMessage:"Help & FAQ"})})}),(0,o.jsx)(a.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes",target:"_blank",children:(0,o.jsx)(i.Z,{id:"thread.releaseNotes",defaultMessage:"Release notes"})})}),(0,o.jsx)(a.Z.Item,{icon:l.Pfi,children:(0,o.jsx)("a",{href:"https://openai.com/policies",target:"_blank",onClick:()=>{n.A.logEvent(s.M.clickPrivacyPolicy)},children:(0,o.jsx)(i.Z,{id:"thread.termsAndPolicies",defaultMessage:"Terms & policies"})})})]})}}}]);
//# sourceMappingURL=4103-14be21f2ce9e0104.js.map