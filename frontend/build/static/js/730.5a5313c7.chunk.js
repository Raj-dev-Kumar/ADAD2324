"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[730],{8730:function(M,e,i){i.r(e),i.d(e,{connect_modal:function(){return N}});var o=i(5671),l=i(3144),a=i(8112),n=function(){return function(){var M=!!window.chrome,e=window.navigator,i=e.vendor,o="undefined"!==typeof window.opr,l=e.userAgent.includes("Edge"),a=/CriOS/.exec(e.userAgent),n=e.userAgent.includes("Mobile");return!a&&null!==M&&"undefined"!==typeof M&&"Google Inc."===i&&!1===o&&!1===l&&!1===n}()?"Chrome":window.navigator.userAgent.includes("Firefox")?"Firefox":null},t="https://www.google.com/chrome/",N=function(){function M(e){(0,o.Z)(this,M),(0,a.r)(this,e),this.authOptions=void 0,this.hasOpenedInstall=void 0,this.hasOpenedInstallXverse=void 0}return(0,l.Z)(M,[{key:"handleCloseModal",value:function(){var M,e;this.modalEl.remove(),null===(e=(M=this.authOptions).onCancel)||void 0===e||e.call(M)}},{key:"handleDownloadPath",value:function(M){if("Chrome"===M)window.open("https://chrome.google.com/webstore/detail/hiro-wallet/ldinpeekobnhjjdofggfgjlcehhmanlj/","_blank");else if("Firefox"===M)window.open("https://addons.mozilla.org/en-US/firefox/addon/hiro-wallet/","_blank");else{if("IOS"===M)return window.open("https://apps.apple.com/app/id1552272513","_blank"),void(this.hasOpenedInstallXverse=!0);if("Android"===M)return window.open("https://play.google.com/store/apps/details?id=com.secretkeylabs.xverse","_blank"),void(this.hasOpenedInstallXverse=!0);if("Xverse-Chrome"===M)return window.open("https://chrome.google.com/webstore/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg","_blank"),void(this.hasOpenedInstallXverse=!0);window.open("https://www.hiro.so/wallet/install-web","_blank")}this.hasOpenedInstall=!0}},{key:"render",value:function(){var M=this,e=n(),i=window.navigator.userAgent.includes("Mobile")?window.navigator.userAgent.includes("iPhone")?"IOS":"Android":null;return(0,a.h)("div",{class:"modal-container"},(0,a.h)("div",{class:"modal-body"},(0,a.h)("div",{class:"modal-header"},(0,a.h)("div",{class:"close-modal"},(0,a.h)("img",{class:"close-icon",src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTcgNyAxMCAxME0xNyA3IDcgMTciIHN0cm9rZT0iIzI0MjYyOSIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",onClick:function(){return M.handleCloseModal()}})),i||e?(0,a.h)("span",{class:"modal-title"},"Get wallet to use ",this.authOptions.appDetails.name):(0,a.h)("span",{class:"modal-title"},"Your browser isn't supported")),(0,a.h)("div",{class:"modal-subtitle"},"To sign in to ",this.authOptions.appDetails.name,", you will need a Stacks-compatible wallet."),(0,a.h)("div",{class:"modal-content"},(0,a.h)("div",{class:"wallet-container"},(0,a.h)("div",{class:"modal-wallet-card"},(0,a.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiByeD0iMjYuODM4NyIgZmlsbD0iIzEyMTAwRiIvPgo8cGF0aCBkPSJNNzQuOTE3MSA1Mi43MTE0QzgyLjQ3NjYgNTEuNTQwOCA5My40MDg3IDQzLjU4MDQgOTMuNDA4NyAzNy4zNzYxQzkzLjQwODcgMzUuNTAzMSA5MS44OTY4IDM0LjIxNTQgODkuNjg3MSAzNC4yMTU0Qzg1LjUwMDQgMzQuMjE1NCA3OC40MDYxIDQwLjUzNjggNzQuOTE3MSA1Mi43MTE0Wk0zOS45MTEgODMuNDk5MUMzMC4wMjU2IDgzLjQ5OTEgMjkuMjExNSA5My4zMzI0IDM5LjA5NjkgOTMuMzMyNEM0My41MTYzIDkzLjMzMjQgNDguODY2MSA5MS41NzY0IDUxLjY1NzMgODguNDE1N0M0Ny41ODY4IDg0LjkwMzggNDQuMjE0MSA4My40OTkxIDM5LjkxMSA4My40OTkxWk0xMDIuODI5IDc5LjI4NDhDMTAzLjQxIDk1Ljc5MDcgOTUuMDM2OSAxMDUuMDM5IDgwLjg0ODQgMTA1LjAzOUM3Mi40NzQ4IDEwNS4wMzkgNjguMjg4MSAxMDEuODc4IDU5LjMzMyA5Ni4wMjQ5QzU0LjY4MSAxMDEuMTc2IDQ1Ljg0MjMgMTA1LjAzOSAzOC41MTU0IDEwNS4wMzlDMTMuMjc4NSAxMDUuMDM5IDE0LjMyNTIgNzIuODQ2MyA0MC4wMjczIDcyLjg0NjNDNDUuMzc3MSA3Mi44NDYzIDQ5LjkxMjggNzQuMjUxMSA1NS43Mjc3IDc3Ljg4TDU5LjU2NTYgNjQuNDE3N0M0My43NDg5IDYwLjA4NjQgMzUuODQwNSA0Ny45MTE4IDQzLjYzMjYgMzAuNDY5M0g1Ni4xOTI5QzQ5LjIxNSA0Mi4wNTg2IDUzLjk4MzIgNTEuNjU3OCA2Mi44MjIgNTIuNzExNEM2Ny41OTAzIDM1LjczNzIgNzcuODI0NiAyMi41MDkgOTEuNDMxNiAyMi41MDlDOTkuMTA3NCAyMi41MDkgMTA1LjE1NSAyNy41NDI4IDEwNS4xNTUgMzYuNjczN0MxMDUuMTU1IDUxLjMwNjYgODYuMDgxOSA2My4yNDcxIDcxLjY2MDcgNjQuNDE3N0w2NS43Mjk1IDg1LjM3MjFDNzIuNDc0OCA5My4yMTUzIDkxLjE5OSAxMDAuODI0IDkxLjE5OSA3OS4yODQ4SDEwMi44MjlaIiBmaWxsPSIjRjVGMUVEIi8+Cjwvc3ZnPgo="}),(0,a.h)("div",{class:"modal-wallet-card-content"},(0,a.h)("span",{class:"modal-subheading"},"Leather"),e&&!i?(0,a.h)("div",{class:"modal-wallet-text"},"Leather is the only Bitcoin wallet you need to tap into the emerging Bitcoin economy."):(0,a.h)("div",{class:"modal-wallet-text"},"Browser extension for "," ",(0,a.h)("a",{href:t,target:"_blank"},"Chrome"),", ",(0,a.h)("a",{href:"https://brave.com/",target:"_blank"},"Brave"),", or ",(0,a.h)("a",{href:"https://www.mozilla.org/en-US/",target:"_blank"},"Firefox")," on desktop."),(0,a.h)("span",{class:"link",onClick:function(){return window.open("https://leather.io/","_blank")}},"About Leather \u2192"),e&&!i&&(0,a.h)("div",{class:"download-app-container"},this.hasOpenedInstall?(0,a.h)("div",{class:"modal-wallet-text"},"After installing Leather, reload this page and sign in."):(0,a.h)("button",{class:"button",onClick:function(){M.handleDownloadPath(e)}},"Download")))),(0,a.h)("div",{class:"modal-wallet-card"},(0,a.h)("img",{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiByeD0iMTAuMjkyNCIgZmlsbD0iIzEyMTUxRSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjk0OTQgMTEuMTAxQzE2LjUxMjIgNi45NjYzMiAyMy40ODgxIDYuOTY2MzUgMjguMDUwOSAxMS4xMDFMMjYuOTg3MiAxMi4xNjQ3QzIzLjAxMzQgOC42MTQ2NiAxNi45ODcgOC42MTQ2MyAxMy4wMTMxIDEyLjE2NDZMMTEuOTQ5NCAxMS4xMDFaTTI4Ljg5OTQgMTEuOTQ5NkwyNy44MzU4IDEzLjAxMzNDMzEuMzg1NSAxNi45ODcxIDMxLjM4NTUgMjMuMDEzMyAyNy44MzU2IDI2Ljk4NzFMMjguODk5MiAyOC4wNTA4QzMzLjAzMzggMjMuNDg4MSAzMy4wMzM4IDE2LjUxMjQgMjguODk5NCAxMS45NDk2Wk0xMy4wMTMzIDI3LjgzNTdDMTYuOTg3MSAzMS4zODU1IDIzLjAxMzIgMzEuMzg1NSAyNi45ODcgMjcuODM1NkwyOC4wNTA3IDI4Ljg5OTNDMjMuNDg3OSAzMy4wMzM4IDE2LjUxMjQgMzMuMDMzOCAxMS45NDk2IDI4Ljg5OTRMMTMuMDEzMyAyNy44MzU3Wk0xMi4xNjQ3IDI2Ljk4NzJMMTEuMTAxIDI4LjA1MDlDNi45NjYzOCAyMy40ODgxIDYuOTY2MzIgMTYuNTEyNCAxMS4xMDA4IDExLjk0OTVMMTIuMTY0NSAxMy4wMTMyQzguNjE0NjMgMTYuOTg3MSA4LjYxNDY5IDIzLjAxMzQgMTIuMTY0NyAyNi45ODcyWk0yNy40Nzg2IDE0Ljk4OTZDMjcuMTU3OSAxNC41MTIxIDI2Ljc4NjQgMTQuMDU4NSAyNi4zNjQzIDEzLjYzNjRDMjMuNTY4MiAxMC44NDAyIDE5LjM4OTkgMTAuMjY4NSAxNi4wMjg2IDExLjkyMTRMMTYuNzgxOSAxMy4yMjYxQzE5LjU2NjQgMTEuOTAzMiAyMi45OTc3IDEyLjM5NDEgMjUuMzAyMiAxNC42OTg1QzI1LjYyOTMgMTUuMDI1NiAyNS45MTk4IDE1LjM3NTQgMjYuMTczOCAxNS43NDI5TDI3LjQ3ODYgMTQuOTg5NlpNMjYuNzc0NSAxNi43ODE3TDI4LjA3OTMgMTYuMDI4NEMyOS43MzIyIDE5LjM4OTggMjkuMTYwNiAyMy41NjgyIDI2LjM2NDMgMjYuMzY0NEMyNS45NDIyIDI2Ljc4NjYgMjUuNDg4NSAyNy4xNTggMjUuMDEwOCAyNy40Nzg4TDI0LjI1NzYgMjYuMTc0MUMyNC42MjUxIDI1LjkyIDI0Ljk3NSAyNS42Mjk0IDI1LjMwMjIgMjUuMzAyMkMyNy42MDY3IDIyLjk5NzcgMjguMDk3NSAxOS41NjYyIDI2Ljc3NDUgMTYuNzgxN1pNMjMuMjE4NyAyNi43NzQ3QzIwLjQzNDIgMjguMDk3NSAxNy4wMDI5IDI3LjYwNjYgMTQuNjk4NSAyNS4zMDIyQzE0LjM3MTIgMjQuOTc0OSAxNC4wODA1IDI0LjYyNDkgMTMuODI2NCAyNC4yNTczTDEyLjUyMTcgMjUuMDEwNkMxMi44NDI1IDI1LjQ4ODMgMTMuMjE0IDI1Ljk0MjEgMTMuNjM2MyAyNi4zNjQ0QzE2LjQzMjUgMjkuMTYwNSAyMC42MTA3IDI5LjczMjIgMjMuOTcyIDI4LjA3OTRMMjMuMjE4NyAyNi43NzQ3Wk0xMS45MjExIDIzLjk3MTdMMTMuMjI1OCAyMy4yMTg0QzExLjkwMzMgMjAuNDM0IDEyLjM5NDIgMTcuMDAyOSAxNC42OTg1IDE0LjY5ODVDMTUuMDI1NyAxNC4zNzE0IDE1LjM3NTUgMTQuMDgwOCAxNS43NDMgMTMuODI2N0wxNC45ODk3IDEyLjUyMkMxNC41MTIxIDEyLjg0MjggMTQuMDU4NSAxMy4yMTQyIDEzLjYzNjMgMTMuNjM2NEMxMC44NDAzIDE2LjQzMjQgMTAuMjY4NSAyMC42MTA0IDExLjkyMTEgMjMuOTcxN1pNMjQuMjQyOCAxNS43NTc0QzI1LjEyODcgMTYuNjQzMyAyNS42Nzk3IDE3LjczNzMgMjUuODk1NyAxOC44ODIxTDI0LjM4OTIgMTkuMDEzOUMyNC4yMDkzIDE4LjIwOTcgMjMuODA2NCAxNy40NDU0IDIzLjE4MDYgMTYuODE5NUMyMi4zNTU2IDE1Ljk5NDUgMjEuMjg5NyAxNS41NTY5IDIwLjIwOTIgMTUuNTA3TDIwLjA3NzQgMTQuMDAwNUMyMS41ODcxIDE0LjAxOTggMjMuMDkwOSAxNC42MDU0IDI0LjI0MjggMTUuNzU3NFpNMTguODgyIDE0LjEwNDVDMTcuNzM3MyAxNC4zMjA2IDE2LjY0MzMgMTQuODcxNSAxNS43NTc1IDE1Ljc1NzRDMTQuNjA1NiAxNi45MDkyIDE0LjAyIDE4LjQxMjkgMTQuMDAwNiAxOS45MjI1TDE1LjUwNzEgMTkuNzkwN0MxNS41NTcxIDE4LjcxMDMgMTUuOTk0NiAxNy42NDQ2IDE2LjgxOTYgMTYuODE5NUMxNy40NDU0IDE2LjE5MzggMTguMjA5NyAxNS43OTA5IDE5LjAxMzggMTUuNjExTDE4Ljg4MiAxNC4xMDQ1Wk0xNC4xMDQ2IDIxLjExOEMxNC4zMjA2IDIyLjI2MjggMTQuODcxNSAyMy4zNTY4IDE1Ljc1NzUgMjQuMjQyN0MxNi45MDkzIDI1LjM5NDYgMTguNDEzIDI1Ljk4MDIgMTkuOTIyNiAyNS45OTk2TDE5Ljc5MDcgMjQuNDkzMUMxOC43MTA0IDI0LjQ0MyAxNy42NDQ2IDI0LjAwNTUgMTYuODE5NiAyMy4xODA1QzE2LjE5MzggMjIuNTU0NyAxNS43OTEgMjEuNzkwNCAxNS42MTExIDIwLjk4NjJMMTQuMTA0NiAyMS4xMThaTTI0LjI0MjggMjQuMjQyN0MyMy4zNTY5IDI1LjEyODYgMjIuMjYyOCAyNS42Nzk2IDIxLjExOCAyNS44OTU2TDIwLjk4NjIgMjQuMzg5MUMyMS43OTA0IDI0LjIwOTIgMjIuNTU0OCAyMy44MDY0IDIzLjE4MDYgMjMuMTgwNUMyNC4wMDU2IDIyLjM1NTUgMjQuNDQzMiAyMS4yODk3IDI0LjQ5MzIgMjAuMjA5NEwyNS45OTk3IDIwLjA3NzZDMjUuOTgwMyAyMS41ODcyIDI1LjM5NDcgMjMuMDkwOCAyNC4yNDI4IDI0LjI0MjdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfNTA1Nl8yNDIzNjgpIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfNTA1Nl8yNDIzNjgiIHgxPSIxMS41NjgxIiB5MT0iMjguNTY5MSIgeDI9IjMyLjc2NjkiIHkyPSI3LjM3MDMzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM1NTY1RjciLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOUVBN0ZBIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg=="}),(0,a.h)("div",{class:"modal-wallet-card-content"},(0,a.h)("span",{class:"modal-subheading"},"Xverse Wallet"),"Chrome"===e?(0,a.h)("div",{class:"modal-wallet-text"},"Xverse is an advanced web3 wallet for Bitcoin and Stacks. Available for Chrome, Android and iOS. Add it to Chrome to continue."):i?(0,a.h)("div",{class:"modal-wallet-text"},"Xverse is your gateway to Stacks apps like ",this.authOptions.appDetails.name,". Install it on your device to continue.`"):(0,a.h)("div",{class:"modal-wallet-text"},"Browser extension for "," ",(0,a.h)("a",{href:t,target:"_blank"},"Chrome")," on desktop, application for iOS and Android on mobile."),(0,a.h)("span",{class:"link",onClick:function(){return window.open("https://www.xverse.app/","_blank")}},"About Xverse Wallet \u2192"),(0,a.h)("div",{class:"download-app-container"},this.hasOpenedInstallXverse?i?(0,a.h)("span",{class:"link",onClick:function(){return window.open("stacks://browser?url=".concat(window.location.href),"_blank")}},"Open this page in Xverse Wallet \u2192"):(0,a.h)("div",{class:"modal-wallet-text"},"After installing Xverse Wallet, reload this page and sign in."):("Chrome"===e||i)&&(0,a.h)("button",{class:"button",onClick:function(){M.handleDownloadPath(null!==i&&void 0!==i?i:"Xverse-".concat(e))}},"Download"))))))))}},{key:"modalEl",get:function(){return(0,a.g)(this)}}],[{key:"assetsDirs",get:function(){return["assets"]}}]),M}();N.style=':host{all:initial}.modal-container{display:flex;flex-direction:column;background-color:rgba(0, 0, 0, 0.48);width:100%;height:100%;position:fixed;top:0px;left:0px;justify-content:center;font-family:"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";z-index:8999;overflow-y:scroll}.modal-body{width:486px;max-width:100%;max-height:calc(100% - 48px);background:white;margin-left:auto;margin-right:auto;border-radius:12px;padding:20px 24px 20px;box-sizing:border-box;overflow-y:scroll;-ms-overflow-style:none;scrollbar-width:none}.modal-body::-webkit-scrollbar{display:none}@media (max-width: 640px){.modal-body{max-height:100%}}.modal-header{display:flex;flex-direction:column}@media (max-width: 640px){.modal-header{flex-direction:row-reverse;align-items:flex-start}}.close-modal{display:flex;align-items:flex-end;justify-content:flex-end}.close-icon{cursor:pointer}.modal-content{display:flex;flex-direction:column}.modal-title{color:#242629;font-family:"Open Sauce One", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";font-weight:500;font-size:32px;line-height:32px;margin-bottom:18px;padding-right:48px;margin-top:18px}@media (max-width: 640px){.modal-title{font-size:24px;line-height:24px;margin-bottom:8px;margin-top:0px;padding-right:0px}}.modal-subtitle{font-size:16px;font-weight:400;line-height:24px;color:#74777d}@media (max-width: 640px){.modal-subtitle{font-size:13px}}.download-app-container{display:flex;flex-direction:column;margin-top:20px}.button{width:100%;max-width:139px;box-sizing:border-box;border-radius:8px;font-size:14px;font-weight:500;line-height:20px;background-color:#5546ff;color:#ffffff;min-height:48px;min-width:126px;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transition:all 250ms;transition:all 250ms;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;outline:none;border:none;cursor:pointer}.link{color:#5546ff;font-size:14px;line-height:20px;cursor:pointer;margin-top:4px}.modal-subheading{font-size:16px;font-weight:600;line-height:19px;color:#000000}.modal-wallet-card{display:flex;align-items:flex-start;background:white;border:2px solid #f4f4f6;border-radius:16px;margin-top:12px;padding:24px 10px 24px 20px}.wallet-container{display:flex;flex-direction:column}@media (max-width: 640px){.wallet-container{flex-direction:column-reverse}}.modal-wallet-text{font-size:14px;font-weight:400;line-height:20px;margin-top:4px;color:#74777d}.modal-wallet-text a{color:#5546ff;text-decoration:none}@media (max-width: 640px){.modal-wallet-text{font-size:13px}}.modal-wallet-card-content{display:flex;flex-direction:column;padding-left:14px}'}}]);
//# sourceMappingURL=730.5a5313c7.chunk.js.map