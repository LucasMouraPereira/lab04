import Swal from "sweetalert2";

function getBrowser() {
    function getActualBrowser() {
      const ua = navigator.userAgent;
        let tem; let M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return {
          name: "IE",
          version: (tem[1] || "")
        };
      }

      if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) {
          return {
            name: "Opera",
            version: tem[1]
          };
        }
      }

      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      tem = ua.match(/version\/(\d+)/i);
      if (tem != null) {
        M.splice(1, 1, tem[1]);
      }
      return {
        name: M[0],
        version: M[1]
      };
    };
    const browser = getActualBrowser();
    if (browser.name === "IE") {
      Swal.fire({
        title: "",
        icon: "warning",
        iconHtml: `
            <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <rect width="88" height="88" fill="url(#pattern0)"/>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlink:href="#image0" transform="scale(0.01)"/>
                </pattern>
                <image id="image0" width="100" height="100" xlink:href="data:image/png;base64,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"/>
              </defs>
            </svg>      
        `,
        html: `
            <div>
              <h1>Que pena!</h1>
              <p>
                Você está usando um navegador incompatível com algumas funcionalidades do nosso site.
                Para ter uma experiência de navegação completa, recomendamos que utilize o
                <strong>Google Chrome</strong>, o <strong>Mozilla Firefox</strong> ou o
                <strong>Microsoft Edge</strong> nas versões mais recentes.
              </p>
            </div>
          `,
        showCloseButton: true,
        showConfirmButton: false,
        customClass: {
          popup: "old-popup",
          icon: "popup-icon"
        }
      })
    };
  }


getBrowser();