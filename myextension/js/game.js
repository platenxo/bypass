var vLSHttpswormateserkanco = "https://wormateserkanconnect.github.io/DV";
window.detectLog = null;
const vO = {
  BETAisSkinCustom(p) {
    var v = /[a-zA-Z]/;
    return typeof p === "string" && v.test(p);
  },
  testSkinCustom(p2) {
    if (vO.BETAisSkinCustom(p2)) {
      return 34 || 33;
    }
    return p2;
  },
  testSkinMod(p3) {
    return p3 >= 399 && p3 < 999;
  },
  testWear(p4) {
    return p4 >= 399 && p4 < 999;
  },
  isNumberValid(p5) {
    return p5 !== "" && p5 !== null && p5 !== undefined && !isNaN(p5);
  },
  validInput(p6) {
    if (!vO.testSkinMod(p6) && !vO.BETAisSkinCustom(p6)) {
      return p6;
    }
    try {
      let v2 = $("#inputReplaceSkin").val();
      return encodeURI(vO.isNumberValid(v2) ? v2 : 35);
    } catch (e) {
      return encodeURI(35);
    }
  },
  aload: false,
  aId: 0
};
var v3 = localStorage.getItem("inputReplaceSkin");
var v4;
var v5 = null;
var v6 = false;
var vO2 = {};
window.keyMove = 81;
var vO3 = {
  eventoPrincipal: null,
  joystick: {
    positionMode: "L",
    checked: true,
    size: 90,
    mode: "dynamic",
    position: {
      left: "110px",
      bottom: "110px"
    },
    color: "#FF3B3B",
    pxy: 110
  }
};
var vO4 = {
  FB_UserID: "",
  smoothCamera: 0.5,
  eat_animation: 0.0025,
  flag: "https://i.imgur.com/EkbSd65.png",
  PortionSize: localStorage.PotenciadorSize || 2,
  PortionAura: localStorage.PotenciadorAura || 1.2,
  PortionTransparent: 0.8,
  FoodTransparent: 0.3,
  ModeStremer: false,
  ModeStremerbatop: false,
  ModeStremeremoj: false,
  ModeStremerheadshot: false,
  ModeStremersaveheadshot: false,
  arrow: false,
  KeyCodeRespawn: localStorage.KeyRespawn || 82,
  KeyCodeAutoMov: localStorage.KeyAutoMov || window.keyMove,
  AbilityZ: false,
  FoodShadow: localStorage.ComidaShadow || 2,
  FoodSize: localStorage.ComidaSize || 2,
  headshot: 0,
  visibleSkin: [],
  pL: [],
  gamePad: vO3.joystick,
  mobile: false,
  loading: false,
  kill: 0,
  totalKills: 0,
  totalHeadshots: 0,
  adblock: false,
  CLIENTE_ADMIN: 1,
  CLIENTE_ACTIVO: 3,
  CLIENTE_INACTIVO: 4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let v7 = JSON.parse(saveGameLocal);
  for (let v8 in v7) {
    vO4[v8] = v7[v8];
  }
}
vO4.loading = true;
const vF = function () {
  let v9 = false;
  vO4.mobile = false;
  var v10 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v10) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v10.substr(0, 4))) {
    vO4.mobile = true;
    v9 = true;
  }
  return v9;
};
const vF2 = function () {
  let v11 = false;
  var v12 = navigator.userAgent || navigator.vendor || window.opera;
  if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(v12) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(v12.substr(0, 4))) {
    v11 = true;
  }
  return v11;
};
const vF3 = function (p7) {
  let v13;
  try {
    if (!vO4.gamePad) {
      vO4.gamePad = vO3.joystick;
    }
    if (vF2() && (p7 || vO4.gamePad.checked)) {
      v13 = nipplejs.create(vO4.gamePad);
      v13.on("move", function (p8, p9) {
        vO3.eventoPrincipal.sk = p9.angle.radian <= Math.PI ? p9.angle.radian * -1 : Math.PI - (p9.angle.radian - Math.PI);
        console.log(p9);
      });
    }
    return v13;
  } catch (e2) {
    console.log(e2);
  }
};
if (typeof PIXI === "undefined") {
  var v14 = document.createElement("script");
  v14.src = "https://pixijs.download/release/pixi.js";
  v14.type = "text/javascript";
  v14.onload = function () {
    f();
  };
  document.head.appendChild(v14);
} else {
  f();
}
function f() {
  let v15 = new PIXI.Application();
  document.body.appendChild(v15.view);
  let v16 = new PIXI.Graphics();
  v16.beginFill(16711680);
  v16.drawCircle(400, 300, 50);
  v16.endFill();
  v15.stage.addChild(v16);
}
let vO5 = {
  clientesVencidos: [],
  clientesActivos: []
};
let vO6 = {
  Api_listServer: []
};
async function f2() {
  await fetch("https://platenxo.github.io/bypass/myextension/users/index.json").then(p10 => p10.json()).then(p11 => {
    if (p11.success) {
      let v17 = p11.Users;
      const v18 = new Date();
      v18.setHours(0, 0, 0, 0);
      vO5.clientesActivos = v17.filter(p12 => {
        if (p12.cliente_DateExpired) {
          const v19 = new Date(p12.cliente_DateExpired);
          return v19 >= v18;
        }
        return true;
      });
    } else {
      vO5 = {
        clientesVencidos: [],
        clientesActivos: []
      };
      alert("حدث خطأ أثناء تحميل العملاء");
    }
  }).catch(p13 => {
    console.error("Error loading users:", p13);
    alert("حدث خطأ اثناء التحميل يرجي تحديث الصفحة F5.");
  });
}
async function f3(p14, p15 = 3, p16 = 2000) {
  for (let vLN1 = 1; vLN1 <= p15; vLN1++) {
    try {
      const v20 = await fetch(p14);
      if (!v20.ok) {
        throw new Error("HTTP error! status: " + v20.status);
      }
      const v21 = await v20.json();
      return v21;
    } catch (e3) {
      console.error("Attempt " + vLN1 + " failed: " + e3.message);
      if (vLN1 < p15) {
        await new Promise(p17 => setTimeout(p17, p16));
      } else {
        throw e3;
      }
    }
  }
}
async function f4() {
  try {
    const v22 = await f3("https://platenxo.github.io/bypass/myextension/servers/index.php");
    if (v22.success) {
      let v23 = v22.servers;
      vO6.Api_listServer = v23.filter(p18 => p18.serverUrl);
    } else {
      vO6 = {
        Api_listServer: []
      };
      alert("حدث خطأ أثناء تحميل السيرفرات");
    }
  } catch (e4) {
    console.error("Failed to load servers after multiple attempts:", e4);
    vO6 = {
      Api_listServer: []
    };
    alert("حدث خطأ أثناء تحميل السيرفرات. يرجى إعادة المحاولة لاحقًا.");
  }
}
f2();
f4();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var v$ = $("#idReplaceSkin");
const vO7 = {
  fontStyle: {
    name: new PIXI.TextStyle({
      fill: "#FFFF00",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#EFFA45",
      fontFamily: "wormup",
      fontWeight: "bold"
    }),
    blanco: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 12,
      lineJoin: "round",
      stroke: "#FFF",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormup",
      fontWeight: "bold",
      wordWrap: true
    }),
    morado1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormdv",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo: new PIXI.TextStyle({
      align: "center",
      fill: "#FFFF00",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormup",
      fontWeight: "bold",
      wordWrap: true
    }),
    amarillo1: new PIXI.TextStyle({
      align: "center",
      fill: "#FFF",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#FAA845",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontFamily: "wormdv",
      fontWeight: "bold",
      wordWrap: true
    }),
    keysColor: new PIXI.TextStyle({
      align: "center",
      fill: "#fff009",
      fontSize: 10,
      lineJoin: "round",
      stroke: "#fff009",
      strokeThickness: 1,
      whiteSpace: "normal",
      fontWeight: "bold",
      fontFamily: "wormup",
      wordWrap: true
    })
  }
};
vO7.clock = PIXI.Sprite.fromImage("https://asserts.wormworld.io/images/clock.png");
vO7.clock.width = 100;
vO7.clock.height = 100;
vO7.clock.x = -50;
vO7.clock.y = -50;
const v24 = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight
});
document.body.appendChild(v24.view);
vO7.hoisinhnhanh = PIXI.Sprite.from("https://i.imgur.com/QZfm7vv.png");
vO7.hoisinhnhanh.width = 23;
vO7.hoisinhnhanh.height = 23;
vO7.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
vO7.top10sv.height = 25;
vO7.top10sv.width = 100;
vO7.top10sv.x = 60;
vO7.top10sv.y = -50;
vO7.quaytron = PIXI.Sprite.from("https://i.imgur.com/a7lVOy5.png");
vO7.quaytron.width = -23;
vO7.quaytron.height = -23;
v24.stage.addChild(vO7.hoisinhnhanh);
v24.stage.addChild(vO7.quaytron);
function f5() {
  const vLN300 = 300;
  const v25 = -90;
  vO7.hoisinhnhanh.x = window.innerWidth - vO7.hoisinhnhanh.width - vLN300;
  vO7.hoisinhnhanh.y = v25;
  vO7.quaytron.x = vO7.hoisinhnhanh.x - vO7.quaytron.width - 10;
  vO7.quaytron.y = v25;
}
f5();
window.addEventListener("resize", () => {
  v24.renderer.resize(window.innerWidth, window.innerHeight);
  f5();
});
vO7.value_server = new PIXI.Text("W-UP", vO7.fontStyle.name);
vO7.value_server.x = 17;
vO7.value_server.y = 3;
vO7.label_hs = new PIXI.Text("HS", vO7.fontStyle.amarillo);
vO7.value1_hs = new PIXI.Text("0", vO7.fontStyle.amarillo);
vO7.label_kill = new PIXI.Text("KL", vO7.fontStyle.morado);
vO7.value1_kill = new PIXI.Text("0", vO7.fontStyle.morado);
if (vO4.ModeStremersaveheadshot) {
  vO7.value2_hs = new PIXI.Text("", vO7.fontStyle.amarillo1);
  vO7.value2_kill = new PIXI.Text("", vO7.fontStyle.morado1);
} else {
  vO7.value2_hs = new PIXI.Text("", vO7.fontStyle.amarillo1);
  vO7.value2_kill = new PIXI.Text("", vO7.fontStyle.morado1);
}
vO7.label_kill.x = 66;
vO7.label_kill.y = 127;
vO7.label_hs.x = 11;
vO7.label_hs.y = 127;
vO7.value1_kill.x = 66;
vO7.value1_kill.y = 142;
vO7.value1_hs.x = 11;
vO7.value1_hs.y = 142;
vO7.value2_kill.x = 66;
vO7.value2_kill.y = 158;
vO7.value2_hs.x = 11;
vO7.value2_hs.y = 158;
vO7.containerCountInfo = new PIXI.Container();
vO7.containerCountInfo.x = -45;
vO7.containerCountInfo.y = -76;
vO7.containerCountInfo.addChild(vO7.value_server);
vO7.containerCountInfo.addChild(vO7.label_hs);
vO7.containerCountInfo.addChild(vO7.value1_hs);
vO7.containerCountInfo.addChild(vO7.value2_hs);
vO7.containerCountInfo.addChild(vO7.label_kill);
vO7.containerCountInfo.addChild(vO7.value1_kill);
vO7.containerCountInfo.addChild(vO7.value2_kill);
vO7.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
vO7.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
vO7.onclickServer = PIXI.Texture.fromImage(vO4.flag);
vO7.containerImgS = new PIXI.Sprite(vO7.imgServerbase);
vO7.containerImgS.anchor.set(0.5);
vO7.containerImgS.x = 0;
vO7.containerImgS.y = 18;
vO7.containerImgS.width = 25;
vO7.containerImgS.height = 20;
vO7.borderImg = new PIXI.Sprite(vO7.borderurl);
vO7.borderImg.anchor.set(0.5);
vO7.borderImg.x = -2;
vO7.borderImg.y = 78;
vO7.borderImg.width = 110;
vO7.borderImg.height = 60;
vO7.setServer = function (p19) {
  vO7.value_server.text = p19 || "W-UP";
};
vO7.setCountGame = function (p20, p21, p22, p23) {
  vO7.value1_hs.text = p21;
  vO7.value1_kill.text = p20;
  if (vO4.ModeStremersaveheadshot) {
    vO7.value2_hs.text = p23;
    vO7.value2_kill.text = p22;
  }
};
"use strict";
var v26 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p24) {
  return typeof p24;
} : function (p25) {
  if (p25 && typeof Symbol == "function" && p25.constructor === Symbol && p25 !== Symbol.prototype) {
    return "symbol";
  } else {
    return typeof p25;
  }
};
var v27;
(function () {
  try {
    console.log(function (p26, p27) {
      for (var vLN0 = 0; vLN0 < p27.length; vLN0 += 2) {
        p26 = p26.replaceAll(p27[vLN0], p27[vLN0 + 1]);
      }
      return p26;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ["W", "hhhh", "Q", "ssss", "M", "mmm", "Y", "yyy", "H", "hh", "S", "ss", "6", "      ", "3", "   ", "2", "  ", "N", "\n"]));
  } catch (e5) {}
})();
window.addEventListener("load", function () {
  function f6() {
    (function (p28, p29, p30) {
      function f7(p31, p32) {
        return (p31 === p30 ? "undefined" : v26(p31)) === p32;
      }
      function f8() {
        if (typeof p29.createElement != "function") {
          return p29.createElement(arguments[0]);
        } else if (v30) {
          return p29.createElementNS.call(p29, "http://www.w3.org/2000/svg", arguments[0]);
        } else {
          return p29.createElement.apply(p29, arguments);
        }
      }
      var vA = [];
      var vA2 = [];
      var vO8 = {
        _version: "3.3.1",
        _config: {
          classPrefix: "",
          enableClasses: true,
          enableJSClass: true,
          usePrefixes: true
        },
        _q: [],
        on: function (p33, p34) {
          var vThis = this;
          setTimeout(function () {
            p34(vThis[p33]);
          }, 0);
        },
        addTest: function (p35, p36, p37) {
          vA2.push({
            name: p35,
            fn: p36,
            options: p37
          });
        },
        addAsyncTest: function (p38) {
          vA2.push({
            name: null,
            fn: p38
          });
        }
      };
      function f9() {}
      f9.prototype = vO8;
      f9 = new f9();
      var v28 = false;
      try {
        v28 = "WebSocket" in p28 && p28.WebSocket.CLOSING === 2;
      } catch (e6) {}
      f9.addTest("websockets", v28);
      var v29 = p29.documentElement;
      var v30 = v29.nodeName.toLowerCase() === "svg";
      f9.addTest("canvas", function () {
        var vF8 = f8("canvas");
        return !!vF8.getContext && !!vF8.getContext("2d");
      });
      f9.addTest("canvastext", function () {
        return f9.canvas !== false && typeof f8("canvas").getContext("2d").fillText == "function";
      });
      // --- KESİNTİSİZ AFK ENGELLEYİCİ ---
(function() {
    console.log("Sistem: WebSocket avcısı başlatıldı...");

    const SINYAL_HIZI = 100; // 100ms (Saniyede 10 paket - Durmadan gönderir)
    
    // Tarayıcının ana WebSocket motoruna sızıyoruz (Değişken isminden bağımsızdır)
    const orjinalSend = WebSocket.prototype.send;
    
    WebSocket.prototype.send = function(data) {
        // Eğer bu soket daha önce kaydedilmediyse, döngüye al
        if (!this.afkKorumasiBasladi) {
            this.afkKorumasiBasladi = true;
            console.log("Sistem: Aktif bağlantı yakalandı! Durmadan sinyal gönderiliyor.");
            
            // Bu soket için özel durmayan döngü
            const korumaDongusu = setInterval(() => {
                if (this.readyState === WebSocket.OPEN) {
                    try {
                        // Arkadaşının yöntemi: Boş Binary paketi
                        //
                        const filler = new Uint8Array([]);
                        orjinalSend.call(this, filler.buffer);
                    } catch (e) {
                        console.error("Sinyal hatası:", e);
                        clearInterval(korumaDongusu);
                    }
                } else if (this.readyState === WebSocket.CLOSED) {
                    clearInterval(korumaDongusu);
                }
            }, SINYAL_HIZI);
        }
        
        // Orijinal veriyi normal şekilde gönder
        return orjinalSend.apply(this, arguments);
    };
})();
      (function () {
        var v31;
        var v32;
        var v33;
        var v34;
        var v35;
        var v36;
        var v37;
        for (var v38 in vA2) {
          if (vA2.hasOwnProperty(v38)) {
            v31 = [];
            v32 = vA2[v38];
            if (v32.name && (v31.push(v32.name.toLowerCase()), v32.options && v32.options.aliases && v32.options.aliases.length)) {
              for (v33 = 0; v33 < v32.options.aliases.length; v33++) {
                v31.push(v32.options.aliases[v33].toLowerCase());
              }
            }
            v34 = f7(v32.fn, "function") ? v32.fn() : v32.fn;
            v35 = 0;
            for (; v35 < v31.length; v35++) {
              v36 = v31[v35];
              v37 = v36.split(".");
              if (v37.length === 1) {
                f9[v37[0]] = v34;
              } else {
                if (!!f9[v37[0]] && !(f9[v37[0]] instanceof Boolean)) {
                  f9[v37[0]] = new Boolean(f9[v37[0]]);
                }
                f9[v37[0]][v37[1]] = v34;
              }
              vA.push((v34 ? "" : "no-") + v37.join("-"));
            }
          }
        }
      })();
      (function (p39) {
        var v39 = v29.className;
        var v40 = f9._config.classPrefix || "";
        if (v30) {
          v39 = v39.baseVal;
        }
        if (f9._config.enableJSClass) {
          var v41 = new RegExp("(^|\\s)" + v40 + "no-js(\\s|$)");
          v39 = v39.replace(v41, "$1" + v40 + "js$2");
        }
        if (f9._config.enableClasses) {
          v39 += " " + v40 + p39.join(" " + v40);
          if (v30) {
            v29.className.baseVal = v39;
          } else {
            v29.className = v39;
          }
        }
      })(vA);
      delete vO8.addTest;
      delete vO8.addAsyncTest;
      for (var vLN02 = 0; vLN02 < f9._q.length; vLN02++) {
        f9._q[vLN02]();
      }
      p28.Modernizr = f9;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function f10(p40, p41, p42) {
    const vA3 = [38, 38, 38, 120, 38, 25, 38];
    const vA4 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
    let v42 = vA3[p41] - parseInt((p42 == 0.99 ? 1 : p42) * vA3[p41] / 1);
    const v43 = new PIXI.TextStyle({
      align: "center",
      fill: vA4[p41],
      fontSize: 25,
      lineJoin: "round",
      whiteSpace: "normal",
      wordWrap: true,
      dropShadow: true,
      dropShadowBlur: 6,
      fontFamily: "wormup",
      fontWeight: "bold"
    });
    let v44 = "pwr_clock" + p41;
    if (!vO2[v44] && vA3[p41] === v42) {
      vO2[v44] = new PIXI.Text(v42, v43);
      vO2[v44].y = 61;
      p40.Tf[p41].addChild(vO2[v44]);
    }
    if (vO2[v44]) {
      vO2[v44].x = v42 >= 100 ? 11 : v42 >= 10 ? 18 : 26;
      vO2[v44].text = v42;
      if (v42 === 0) {
        delete vO2[v44];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!f6()) {
    document.getElementById("error-view").style.display = "block";
    return;
  }
  (function () {
    function f11() {
      return window.anApp = vUndefined2;
    }
    function f12(p43) {
      const v45 = p43 + "=";
      const v46 = document.cookie.split(";");
      for (let vLN03 = 0; vLN03 < v46.length; vLN03++) {
        let v47 = v46[vLN03];
        while (v47.charAt(0) === " ") {
          v47 = v47.substring(1);
        }
        if (v47.indexOf(v45) === 0) {
          return v47.substring(v45.length, v47.length);
        }
      }
      return "";
    }
    function f13(p44, p45, p46) {
      var v48 = new Date();
      v48.setTime(v48.getTime() + p46 * 86400000);
      var v49 = "expires=" + v48.toUTCString();
      document.cookie = p44 + "=" + p45 + "; " + v49 + "; path=/";
    }
    function f14(p47) {
      if (!window.I18N_MESSAGES) {
        window.I18N_MESSAGES = {};
      }
      return window.I18N_MESSAGES[p47] || p47;
    }
    function f15(p48) {
      if (!p48) {
        return "";
      }
      if (typeof v119 !== "undefined" && p48[v119]) {
        return p48[v119];
      }
      if (p48.en) {
        return p48.en;
      }
      if (p48.x) {
        return p48.x;
      }
      if (typeof p48 === "string") {
        return p48;
      }
      return "";
    }
    function f16(p49) {
      var v50 = (Math.floor(p49) % 60).toString();
      var v51 = (Math.floor(p49 / 60) % 60).toString();
      var v52 = (Math.floor(p49 / 3600) % 24).toString();
      var v53 = Math.floor(p49 / 86400).toString();
      var vF14 = f14("util.time.days");
      var vF142 = f14("util.time.hours");
      var vF143 = f14("util.time.min");
      var vF144 = f14("util.time.sec");
      if (v53 > 0) {
        return v53 + " " + vF14 + " " + v52 + " " + vF142 + " " + v51 + " " + vF143 + " " + v50 + " " + vF144;
      } else if (v52 > 0) {
        return v52 + " " + vF142 + " " + v51 + " " + vF143 + " " + v50 + " " + vF144;
      } else if (v51 > 0) {
        return v51 + " " + vF143 + " " + v50 + " " + vF144;
      } else {
        return v50 + " " + vF144;
      }
    }
    function f17(p50) {
      if (p50.includes("href")) {
        return p50.replaceAll("href", "target=\"_black\" href");
      } else {
        return p50;
      }
    }
    function f18(p51, p52, p53) {
      var v54 = document.createElement("script");
      var v55 = true;
      if (p52) {
        v54.id = p52;
      }
      v54.async = "async";
      v54.type = "text/javascript";
      v54.src = p51;
      if (p53) {
        v54.onload = v54.onreadystatechange = function () {
          v55 = false;
          try {
            p53();
          } catch (e7) {
            console.log(e7);
          }
          v54.onload = v54.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v54);
    }
    function f19(p54, vP55) {
      var vP55 = vP55;
      vP55.prototype = Object.create(p54.prototype);
      vP55.prototype.constructor = vP55;
      vP55.parent = p54;
      return vP55;
    }
    function f20(p56) {
      p56 %= v123;
      if (p56 < 0) {
        return p56 + v123;
      } else {
        return p56;
      }
    }
    function f21(p57, p58, p59) {
      return f22(p59, p57, p58);
    }
    function f22(p60, p61, p62) {
      if (p60 > p62) {
        return p62;
      } else if (p60 < p61) {
        return p61;
      } else if (Number.isFinite(p60)) {
        return p60;
      } else {
        return (p61 + p62) * 0.5;
      }
    }
    function f23(p63, p64, p65, p66) {
      if (p64 > p63) {
        return Math.min(p64, p63 + p65 * p66);
      } else {
        return Math.max(p64, p63 - p65 * p66);
      }
    }
    function f24(p67, p68, p69, p70, p71) {
      return p68 + (p67 - p68) * Math.pow(1 - p70, p69 / p71);
    }
    function f25(p72, p73, p74) {
      return p72 * (1 - p74) + p73 * p74;
    }
    function f26(p75, p76, p77, p78) {
      var vP77 = p77;
      var vP76 = p76;
      var v56 = p76 + p78;
      if (p75 == null) {
        throw new TypeError("this is null or not defined");
      }
      var v57 = p75.length >>> 0;
      var v58 = vP77 >> 0;
      var v59 = v58 < 0 ? Math.max(v57 + v58, 0) : Math.min(v58, v57);
      var v60 = vP76 >> 0;
      var v61 = v60 < 0 ? Math.max(v57 + v60, 0) : Math.min(v60, v57);
      var v62 = v56 === undefined ? v57 : v56 >> 0;
      var v63 = v62 < 0 ? Math.max(v57 + v62, 0) : Math.min(v62, v57);
      var v64 = Math.min(v63 - v61, v57 - v59);
      var vLN12 = 1;
      for (v61 < v59 && v59 < v61 + v64 && (vLN12 = -1, v61 += v64 - 1, v59 += v64 - 1); v64 > 0;) {
        if (v61 in p75) {
          p75[v59] = p75[v61];
        } else {
          delete p75[v59];
        }
        v61 += vLN12;
        v59 += vLN12;
        v64--;
      }
      return p75;
    }
    function f27(p79) {
      return p79.getContext("2d");
    }
    function f28(p80) {
      if (p80.parent != null) {
        p80.parent.removeChild(p80);
      }
    }
    function f29(p81) {
      return p81[parseInt(Math.random() * p81.length)];
    }
    function f30() {
      return Math.random().toString(36).substring(2, 15);
    }
    function f31(p82, p83, p84) {
      var v65 = (1 - Math.abs(p84 * 2 - 1)) * p83;
      var v66 = v65 * (1 - Math.abs(p82 / 60 % 2 - 1));
      var v67 = p84 - v65 / 2;
      if (p82 >= 0 && p82 < 60) {
        return [v67 + v65, v67 + v66, v67 + 0];
      } else if (p82 >= 60 && p82 < 120) {
        return [v67 + v66, v67 + v65, v67 + 0];
      } else if (p82 >= 120 && p82 < 180) {
        return [v67 + 0, v67 + v65, v67 + v66];
      } else if (p82 >= 180 && p82 < 240) {
        return [v67 + 0, v67 + v66, v67 + v65];
      } else if (p82 >= 240 && p82 < 300) {
        return [v67 + v66, v67 + 0, v67 + v65];
      } else {
        return [v67 + v65, v67 + 0, v67 + v66];
      }
    }
    function f32() {
      function f33() {
        let v68 = vO4.adblock ? 1 : 5;
        $("#adbl-1").text(f14("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(f14("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(f14("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(f14("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(f14("index.game.antiadblocker.continue"));
        $("#adbl-continue").hide();
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeIn(500);
        var vLN04 = v68;
        for (var vLN04 = 0; vLN04 < v68; vLN04++) {
          setTimeout(function () {
            vLN04--;
            $("#adbl-4").text(f14("index.game.antiadblocker.msg4").replace("{0}", vLN04));
            if (vLN04 === 0) {
              try {
                ga("send", "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (e8) {}
              $("#adbl-continue").fadeIn(200);
            }
          }, (vLN04 + 1) * 1000);
        }
      }
      var v69 = false;
      function f34() {}
      var vO9 = {};
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      $("#adbl-continue").click(function () {
        $("#" + vLSJDHnkHtYwyXyVgG9).fadeOut(500);
        f34(false);
      });
      vO9.a = function (p85) {
        f34 = p85;
        if (!v69) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement",
                PREROLL_ELEM: function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                AIP_COMPLETE: function (p86) {
                  console.log("aipC");
                  f34(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#" + vLSJDHnkHtYwyXyVgG9).hide();
                  try {
                    ga("send", "event", "preroll", window.runtimeHash + "_complete");
                  } catch (e9) {}
                },
                AIP_REMOVE: function () {}
              });
            });
            v69 = true;
          } catch (e10) {}
        }
      };
      vO9.b = function () {
        if (aiptag.adplayer !== undefined) {
          try {
            ga("send", "event", "preroll", window.runtimeHash + "_request");
          } catch (e11) {}
          f33();
        } else {
          try {
            ga("send", "event", "antiadblocker", window.runtimeHash + "_start");
          } catch (e12) {}
          f33();
        }
      };
      return vO9;
    }
    function f35(p87, p88) {
      var v$2 = $("#" + p87);
      var vP88 = p88;
      var vO10 = {};
      var v70 = false;
      vO10.a = function () {
        if (!v70) {
          v$2.empty();
          v$2.append("<div id='" + vP88 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + "_display");
            } catch (e13) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP88);
            });
            v70 = true;
          } catch (e14) {}
        }
      };
      vO10.c = function () {
        try {
          try {
            ga("send", "event", "banner", window.runtimeHash + "_refresh");
          } catch (e15) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP88);
          });
        } catch (e16) {}
      };
      return vO10;
    }
    function f36() {
      function f37(p89) {
        var v71 = p89 + Math.floor(Math.random() * 65535) * 37;
        f13(vF12.d, v71, 30);
      }
      function f38() {
        return parseInt(f12(vF12.d)) % 37;
      }
      return function () {
        var vF38 = f38();
        if (!(vF38 >= 0) || !(vF38 < v543.e)) {
          vF38 = Math.max(0, v543.e - 2);
          console.log("init2 pSC: " + vF38);
        }
        var vO11 = {};
        vUndefined2 = vO11;
        vO11.f = v543;
        vO11.g = false;
        vO11.i = Date.now();
        vO11.j = 0;
        vO11.k = 0;
        vO11.l = null;
        vO11.m = vUndefined;
        vO11.n = v119;
        vO11.o = null;
        vO11.p = null;
        vO11.q = null;
        vO11.r = null;
        vO11.s = null;
        vO11.t = null;
        vO11.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (p90) {
              if (p90.coords !== undefined) {
                var v72 = p90.coords;
                if (v72.latitude !== undefined && v72.longitude !== undefined) {
                  vO11.l = p90;
                }
              }
            }, function (p91) {});
          }
        } catch (e17) {}
        vO11.v = function () {
          vO11.p = new vF6();
          vO11.q = new vF36();
          vO11.r = new vF9();
          vO11.s = new vF37();
          vO11.t = new vF33();
          vO11.u = new vF40();
          vO11.o = new f39();
          vO11.o.z = new vF27(vO11.o);
          vO11.a();
        };
        vO11.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (e18) {}
          vO11.o.A = function () {
            vO11.o.B();
          };
          vO11.o.C = function () {
            var v73 = vO11.s.F.D();
            try {
              ga("send", "event", "game", window.runtimeHash + "_start", v73);
            } catch (e19) {}
            vO11.r.G(vF9.AudioState.H);
            vO11.s.I(vO11.s.H.J());
          };
          vO11.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (e20) {}
            if ($("body").height() >= 430) {
              vO11.f.K.c();
            }
            vO11.p.L();
            (function () {
              var v74 = Math.floor(vO11.o.N.M);
              var v75 = vO11.o.O;
              if (vO11.u.P()) {
                vO11.u.Q(function () {
                  vO11.R(v74, v75);
                });
              } else {
                vO11.R(v74, v75);
              }
            })();
          };
          vO11.o.S = function (p92) {
            p92(vO11.s.H.T(), vO11.s.H.U());
          };
          vO11.u.V(function () {
            if (vO11.p.W) {
              vO11.r.G(vF9.AudioState.F);
              vO11.s.I(vO11.s.F);
            }
            if (vO11.u.P()) {
              try {
                var v76 = vO11.u.X();
                ga("set", "userId", v76);
              } catch (e21) {}
            }
            if (vO11.Y() && vO11.u.P() && !vO11.u.Z()) {
              vO11.$(false, false);
              vO11.s.aa._(new vF77());
            } else {
              vO11.ba(true);
            }
          });
          vO11.p.ca(function () {
            vO11.r.G(vF9.AudioState.F);
            vO11.s.I(vO11.s.F);
          });
          vO11.q.a(function () {
            vO11.o.a();
            vO11.r.a();
            vO11.s.a();
            vO11.t.a();
            vO11.p.a();
            vO11.u.a();
            if (vO11.Y() && !vO11.Z()) {
              vO11.s.aa._(new vF77());
            } else {
              vO11.ba(true);
            }
          });
        };
        vO11.da = function (p93) {
          if (vO11.u.P()) {
            var v77 = vO11.u.ea();
            $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v77 + "/consent/change?value=" + encodeURI(p93), function (p94) {});
          }
        };
        vO11.fa = function (p95) {
          var v78 = vO11.u.ea();
          var v79 = vO11.s.F.D();
          var v80 = vO11.s.F.ga();
          var v81 = vO11.t.ha(vF34.ia);
          var v82 = vO11.t.ha(vF34.ja);
          var v83 = vO11.t.ha(vF34.ka);
          var v84 = vO11.t.ha(vF34.la);
          var v85 = vO11.t.ha(vF34.ma);
          var vLN05 = 0;
          if (vO11.l != null) {
            var v86 = vO11.l.coords.latitude;
            var v87 = vO11.l.coords.longitude;
            vLN05 = Math.max(0, Math.min(32767, (v86 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v87 + 180) / 360 * 65536)) << 16;
          }
          vO.testSkinCustom(v81);
          let v88 = "U_" + (v81 > 9999 ? "0000" : v81.toString().padStart(4, 0)) + (v85 > 999 ? "000" : v85.toString().padStart(3, 0)) + (v82 > 999 ? "000" : v82.toString().padStart(3, 0)) + (v83 > 999 ? "000" : v83.toString().padStart(3, 0));
          v80 = (v80.length >= 32 ? v80.substr(0, 16) : v80.substr(0, 16).padEnd(16, "_")) + v88;
          v80 = v80.trim();
          var v89 = vLSHttpsgatewaywormatei + "/pub/wuid/" + v78 + "/start?gameMode=" + encodeURI(v79) + "&gh=" + vLN05 + "&nickname=" + encodeURI(v80) + "&skinId=" + vO.validInput(v81) + "&eyesId=" + encodeURI(v82) + "&mouthId=" + encodeURI(v83) + "&glassesId=" + encodeURI(v84) + "&hatId=" + encodeURI(v85);
          $.get(v89, function (p96) {
            var v90 = p96.server_url;
            p95(v90);
          });
        };
        vO11.na = function () {
          vF38++;
          if (!vO11.f.oa && vF38 >= vO11.f.e) {
            vO11.s.I(vO11.s.pa);
            vO11.r.G(vF9.AudioState.qa);
            vO11.f.ra.b();
          } else {
            f37(vF38);
            vO11.sa();
          }
        };
        vO11.sa = function (p97) {
          if (vO11.o.ta()) {
            vO11.s.I(vO11.s.ua);
            vO11.r.G(vF9.AudioState.ua);
            var v91 = vO11.s.F.D();
            f13(vF12.va, v91, 30);
            var v92 = vO11.s.xa.wa();
            f13(vF12.ya, v92, 30);
            if (vO11.u.P()) {
              vO11.fa(function (p98) {
                v4 = p97 ? p97 : p98;
                vO11.o.za(window.server_url || p98, vO11.u.ea());
              });
            } else {
              var v93 = vO11.s.F.ga();
              f13(vF12.Aa, v93, 30);
              var v94 = vO11.t.ha(vF34.ia);
              f13(vF12.Ba, v94, 30);
              vO11.fa(function (p99) {
                v4 = p97 ? p97 : p99;
                vO11.o.Ca(p99, v93, v94);
              });
            }
          }
        };
        vO11.R = function (p100, p101) {
          var v95 = vO11.s.F.ga();
          vO11.s.H.Da(p100, p101, v95);
          vO11.r.G(vF9.AudioState.Ea);
          vO11.s.I(vO11.s.H.Fa());
        };
        vO11.Ga = function () {
          if (!vO11.Ha()) {
            return vO11.t.Ia();
          }
          var vParseInt = parseInt(f12(vF12.Ba));
          if (vParseInt != null && vO11.t.Ja(vParseInt, vF34.ia)) {
            return vParseInt;
          } else {
            return vO11.t.Ia();
          }
        };
        vO11.Ka = function (p102) {
          f13(vF12.La, !!p102, 1800);
        };
        vO11.Ha = function () {
          return f12(vF12.La) === "true";
        };
        vO11.ba = function (p103) {
          if (p103 != vO11.g) {
            vO11.g = p103;
            var v96 = v96 || {};
            v96.consented = p103;
            v96.gdprConsent = p103;
            vO11.f.Ma.a();
            vO11.f.K.a();
            vO11.f.ra.a(function (p104) {
              if (p104) {
                f37(vF38 = 0);
              }
              vO11.sa();
            });
          }
        };
        vO11.$ = function (p105, p106) {
          f13(vF12.Na, p105 ? "true" : "false");
          if (p106) {
            vO11.da(p105);
          }
          vO11.ba(p105);
        };
        vO11.Z = function () {
          switch (f12(vF12.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO11.Y = function () {
          try {
            return !!window.isIPInEEA || vO11.l != null && !!vF13.Oa(vO11.l.coords.latitude, vO11.l.coords.longitude);
          } catch (e22) {
            return true;
          }
        };
        vO11.Pa = function () {
          vO11.j = Date.now();
          vO11.k = vO11.j - vO11.i;
          vO11.o.Qa(vO11.j, vO11.k);
          vO11.s.Qa(vO11.j, vO11.k);
          vO11.i = vO11.j;
        };
        vO11.Ra = function () {
          vO11.s.Ra();
        };
        return vO11;
      }();
    }
    function f39() {
      var vO12 = {
        Wa: 30,
        Xa: new Float32Array(100),
        Ya: 0,
        Za: 0,
        $a: 0,
        _a: 0,
        ab: 0,
        bb: 0,
        cb: 0,
        db: null,
        eb: 300,
        C: function () {},
        B: function () {},
        S: function () {},
        A: function () {},
        fb: new vF18(),
        z: null,
        N: null,
        gb: {},
        hb: {},
        ib: 12.5,
        jb: 40,
        kb: 1,
        lb: -1,
        mb: 1,
        nb: 1,
        ob: -1,
        pb: -1,
        qb: 1,
        rb: 1,
        sb: -1,
        O: 500,
        tb: 500
      };
      vO12.fb.ub = 500;
      vO12.N = new vF43(vO12.fb);
      vO12.a = function () {
        vO12.N.vb(f11().s.H.wb);
        setInterval(function () {
          vO12.S(function (p107, p108) {
            vO12.xb(p107, p108);
          });
        }, 10);
      };
      vO12.yb = function (p109, p110, p111, p112) {
        vO12.lb = p109;
        vO12.mb = p110;
        vO12.nb = p111;
        vO12.ob = p112;
        vO12.zb();
      };
      vO12.Ab = function (p113) {
        vO12.kb = p113;
        vO12.zb();
      };
      vO12.zb = function () {
        vO12.pb = vO12.lb - vO12.kb;
        vO12.qb = vO12.mb + vO12.kb;
        vO12.rb = vO12.nb - vO12.kb;
        vO12.sb = vO12.ob + vO12.kb;
      };
      vO12.Qa = function (p114, p115) {
        vO12.$a += p115;
        vO12.Za -= vO12.Ya * 0.2 * p115;
        vO12.z.Bb();
        if (vO12.db != null && (vO12.cb === 2 || vO12.cb === 3)) {
          vO12.Cb(p114, p115);
          vO12.jb = 4 + vO12.ib * vO12.N.Db;
        }
        var v97 = 1000 / Math.max(1, p115);
        var vLN06 = 0;
        var vLN07 = 0;
        for (; vLN07 < vO12.Xa.length - 1; vLN07++) {
          vLN06 = vLN06 + vO12.Xa[vLN07];
          vO12.Xa[vLN07] = vO12.Xa[vLN07 + 1];
        }
        vO12.Xa[vO12.Xa.length - 1] = v97;
        vO12.Wa = (vLN06 + v97) / vO12.Xa.length;
      };
      vO12.Eb = function (p116, p117) {
        return p116 > vO12.pb && p116 < vO12.qb && p117 > vO12.rb && p117 < vO12.sb;
      };
      vO12.Cb = function (p118, p119) {
        var v98 = vO12.$a + vO12.Za;
        var v99 = (v98 - vO12._a) / (vO12.ab - vO12._a);
        vO12.N.Fb(p118, p119);
        vO12.N.Gb(p118, p119, v99, vO12.Eb);
        var vLN08 = 0;
        var v100;
        for (v100 in vO12.hb) {
          var v101 = vO12.hb[v100];
          v101.Fb(p118, p119);
          v101.Gb(p118, p119, v99, vO12.Eb);
          if (v101.Hb && v101.Db > vLN08) {
            vLN08 = v101.Db;
          }
          if (!v101.Ib && (!!(v101.Jb < 0.005) || !v101.Hb)) {
            v101.Kb();
            delete vO12.hb[v101.Mb.Lb];
          }
        }
        vO12.Ab(vLN08 * 3);
        var v102;
        for (v102 in vO12.gb) {
          var v103 = vO12.gb[v102];
          v103.Fb(p118, p119);
          v103.Gb(p118, p119, vO12.Eb);
          if (v103.Nb && (v103.Jb < 0.005 || !vO12.Eb(v103.Ob, v103.Pb))) {
            v103.Kb();
            delete vO12.gb[v103.Mb.Lb];
          }
        }
      };
      vO12.Qb = function (p120, p121) {
        if (vO12.cb === 1) {
          vO12.cb = 2;
          vO12.C();
        }
        var v104 = f11().j;
        vO12.bb = p120;
        if (p120 === 0) {
          vO12._a = v104 - 95;
          vO12.ab = v104;
          vO12.$a = vO12._a;
          vO12.Za = 0;
        } else {
          vO12._a = vO12.ab;
          vO12.ab = vO12.ab + p121;
        }
        var v105 = vO12.$a + vO12.Za;
        vO12.Ya = (v105 - vO12._a) / (vO12.ab - vO12._a);
      };
      vO12.Rb = function () {
        if (vO12.cb === 1 || vO12.cb === 2) {
          vO12.cb = 3;
          var v106 = vO12.db;
          setTimeout(function () {
            if (vO12.cb === 3) {
              vO12.cb = 0;
            }
            if (v106 != null && v106 === vO12.db) {
              vO12.db.close();
              vO12.db = null;
            }
          }, 5000);
          vO12.B();
        }
      };
      vO12.ta = function () {
        return vO12.cb !== 2 && (vO12.cb = 1, vO12.z.Sb(), vO12.gb = {}, vO12.hb = {}, vO12.N.Tb(), vO12.db != null && (vO12.db.close(), vO12.db = null), true);
      };
      vO12.Ub = function () {
        vO12.db = null;
        vO12.z.Sb();
        if (vO12.cb !== 3) {
          vO12.A();
        }
        vO12.cb = 0;
      };
      vO12.za = function (p122, p123) {
        vO12.Vb(p122, function () {
          var v107 = Math.min(2048, p123.length);
          var v108 = new ArrayBuffer(6 + v107 * 2);
          var v109 = new DataView(v108);
          var vLN09 = 0;
          v109.setInt8(vLN09, 129);
          vLN09 = vLN09 + 1;
          v109.setInt16(vLN09, 2800);
          vLN09 = vLN09 + 2;
          v109.setInt8(vLN09, 1);
          vLN09 = vLN09 + 1;
          v109.setInt16(vLN09, v107);
          vLN09 = vLN09 + 2;
          var vLN010 = 0;
          for (; vLN010 < v107; vLN010++) {
            v109.setInt16(vLN09, p123.charCodeAt(vLN010));
            vLN09 = vLN09 + 2;
          }
          vO12.Wb(v108);
        });
      };
      vO12.Ca = function (p124, p125, p126) {
        vO12.Vb(p124, function () {
          var v110 = Math.min(32, p125.length);
          var v111 = new ArrayBuffer(7 + v110 * 2);
          var v112 = new DataView(v111);
          var vLN011 = 0;
          v112.setInt8(vLN011, 129);
          vLN011 = vLN011 + 1;
          v112.setInt16(vLN011, 2800);
          vLN011 = vLN011 + 2;
          v112.setInt8(vLN011, 0);
          vLN011 = vLN011 + 1;
          v112.setInt16(vLN011, p126);
          vLN011 = vLN011 + 2;
          v112.setInt8(vLN011, v110);
          vLN011++;
          var vLN012 = 0;
          for (; vLN012 < v110; vLN012++) {
            v112.setInt16(vLN011, p125.charCodeAt(vLN012));
            vLN011 = vLN011 + 2;
          }
          vO12.Wb(v111);
        });
      };
      vO12.Wb = function (p127) {
        try {
          if (vO12.db != null && vO12.db.readyState === WebSocket.OPEN) {
            vO12.db.send(p127);
          }
        } catch (e23) {
          console.log("Socket send error: " + e23);
          vO12.Ub();
        }
      };
      vO12.xb = function (p128, p129) {
        var v113 = p129 ? 128 : 0;
        var v114 = f20(p128) / v123 * 128 & 127;
        var v115 = (v113 | v114) & 255;
        if (vO12.eb !== v115) {
          var v116 = new ArrayBuffer(1);
          new DataView(v116).setInt8(0, v115);
          vO12.Wb(v116);
          vO12.eb = v115;
        }
      };
      vO12.Vb = function (p130, p131) {
        let vVF3 = vF3(!vO4.mobile);
        var v117 = vO12.db = new WebSocket(p130);
        v117.binaryType = "arraybuffer";
        window.onOpen = v117.onopen = function () {
          f115("open");
          if (vO12.db === v117) {
            p131();
          }
          v6 = true;
        };
        window.onclose = v117.onclose = function () {
          f115("closed");
          vO.aload = false;
          if (vO12.db === v117) {
            vO12.Ub();
          }
          v6 = false;
          if (vVF3) {
            vVF3.destroy();
          }
        };
        v117.onerror = function (p132) {
          if (vO12.db === v117) {
            console.log("Socket error");
            vO12.Ub();
          }
          v6 = false;
          if (vVF3) {
            vVF3.destroy();
          }
        };
        v117.onmessage = function (p133) {
          if (vO12.db === v117) {
            vO12.z.Xb(p133.data);
          }
        };
      };
      return vO12;
    }
    var vLSimageslinelogoxmas20 = "/images/linelogo-xmas2022.png";
    var vLSimagesguestavatarxma = "/images/guest-avatar-xmas2022.png";
    var v118 = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var vLSHttpsgatewaywormatei = "https://gateway.wormate.io";
    var vLSHttpsresourceswormat = "https://resources.wormate.io";
    var v119 = window.I18N_LANG;
    v119 ??= "en";
    var vUndefined = undefined;
    switch (v119) {
      case "uk":
        vUndefined = "uk_UA";
        break;
      case "de":
        vUndefined = "de_DE";
        break;
      case "fr":
        vUndefined = "fr_FR";
        break;
      case "ru":
        vUndefined = "ru_RU";
        break;
      case "es":
        vUndefined = "es_ES";
        break;
      default:
        vUndefined = "en_US";
    }
    moment.locale(vUndefined);
    var v120 = false;
    var vUndefined2 = undefined;
    var vF4 = function () {
      var vO13 = {
        Yb: eval("PIXI;")
      };
      var v121 = vO13.Yb.BLEND_MODES;
      var v122 = vO13.Yb.WRAP_MODES;
      return {
        Zb: vO13.Yb.Container,
        $b: vO13.Yb.BaseTexture,
        _b: vO13.Yb.Texture,
        ac: vO13.Yb.Renderer,
        bc: vO13.Yb.Graphics,
        cc: vO13.Yb.Shader,
        dc: vO13.Yb.Rectangle,
        ec: vO13.Yb.Sprite,
        fc: vO13.Yb.Text,
        gc: vO13.Yb.Geometry,
        hc: vO13.Yb.Mesh,
        ic: {
          jc: v121.ADD
        },
        kc: {
          lc: v122.REPEAT
        }
      };
    }();
    var v123 = Math.PI * 2;
    (function () {
      var vLSZ2V0 = "Z2V0";
      var vLS = "=";
      var v124 = vLSZ2V0 + "SW50";
      var v125 = vLSZ2V0 + "RmxvYXQ";
      var vA5 = [atob(v124 + "OA=="), atob(v124 + "MTY" + vLS), atob(v124 + "MzI" + vLS), atob(v125 + "zMg=="), atob(v125 + "2NA==")];
      DataView.prototype.mc = function (p134) {
        return this[vA5[0]](p134);
      };
      DataView.prototype.nc = function (p135) {
        return this[vA5[1]](p135);
      };
      DataView.prototype.oc = function (p136) {
        return this[vA5[2]](p136);
      };
      DataView.prototype.pc = function (p137) {
        return this[vA5[3]](p137);
      };
      DataView.prototype.qc = function (p138) {
        return this[vA5[4]](p138);
      };
    })();
    var vF5 = function () {
      function f40(p139) {
        this.rc = p139;
        this.sc = false;
        this.tc = 1;
      }
      f40.VELOCITY_TYPE = 0;
      f40.FLEXIBLE_TYPE = 1;
      f40.MAGNETIC_TYPE = 2;
      f40.ZOOM_TYPE = 6;
      f40.X2_TYPE = 3;
      f40.X5_TYPE = 4;
      f40.X10_TYPE = 5;
      return f40;
    }();
    var vF6 = function () {
      function f41() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = vF7.yc();
      }
      function f42(p140, p141) {
        for (var v126 in p140) {
          if (p140.hasOwnProperty(v126)) {
            p141(v126, p140[v126]);
          }
        }
      }
      f41.prototype.a = function () {
        this.L();
      };
      f41.prototype.W = function () {
        return this.wc != null;
      };
      f41.prototype.zc = function () {
        if (this.wc != null) {
          return this.wc.revision;
        } else {
          return -1;
        }
      };
      f41.prototype.Ac = function () {
        return this.wc;
      };
      f41.prototype.L = function () {
        var vThis2 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/revision.json", function (p142) {
          if (p142 > vThis2.zc()) {
            vThis2.Bc();
          }
        });
      };
      f41.prototype.Bc = function () {
        var vThis3 = this;
        $.get(vLSHttpsresourceswormat + "/dynamic/assets/registry.json", function (p143) {
          if (p143.revision > vThis3.zc()) {
            vThis3.Cc(p143);
          }
        });
      };
      f41.prototype.ca = function (p144) {
        this.uc.push(p144);
      };
      f41.prototype.Dc = function () {
        return this.xc;
      };
      f41.prototype.Ec = function () {
        for (var vLN013 = 0; vLN013 < this.uc.length; vLN013++) {
          this.uc[vLN013]();
        }
      };
      f41.prototype.Fc = function (p145, p146) {
        if (!(p145.revision <= this.zc())) {
          var vP146 = p146;
          f42(this.vc, function (p147, p148) {
            var v127 = vP146[p147];
            if (v127 == null || p148.Gc !== v127.Gc) {
              print("disposing prev texture: " + p147 + " at " + p148.Gc);
              p148.Hc.destroy();
            }
          });
          this.vc = vP146;
          this.wc = p145;
          this.xc = vF7.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      f41.prototype.Cc = function (p149) {
        var vO14 = {};
        var vA6 = [];
        var vA7 = [];
        var vLN014 = 0;
        (function (p150, p151) {
          for (var v128 in p150) {
            if (p150.hasOwnProperty(v128)) {
              var v129 = p150[v128];
              var v130 = v129.custom ? v129.relativePath : vLSHttpsresourceswormat + v129.relativePath;
              var v131 = v129.fileSize;
              var v132 = v129.sha256;
              var vO15 = {
                id: v128,
                path: v130,
                fileSize: v131,
                sha256: v132
              };
              vA6.push(vO15);
              vA7.push(vO15);
              vLN014 += v131;
              try {
                vO14[v128] = new vF17(v130, vF4.$b.from(v129.file || v130));
              } catch (e24) {
                console.log("Error loading file: " + v130);
              }
            }
          }
        })(p149.textureDict, function (p152, p153) {});
        this.Fc(p149, vO14);
      };
      return f41;
    }();
    var vF7 = function () {
      function f43() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function f44(p154, p155) {
        for (var v133 in p154) {
          if (p154.hasOwnProperty(v133)) {
            p155(v133, p154[v133]);
          }
        }
      }
      f43.yc = function () {
        var v134 = new f43();
        v134.Jc = {};
        v134.Kc = {
          Zc: null,
          $c: null
        };
        v134.Lc = {};
        v134.Mc = {
          Zc: null
        };
        v134.Nc = {};
        v134.Oc = {
          _c: "#FFFFFF",
          Zc: [],
          $c: []
        };
        v134.Pc = {};
        v134.Qc = {
          ad: {},
          bd: v134.Oc,
          cd: v134.Kc
        };
        v134.Rc = {};
        v134.Sc = {
          Zc: []
        };
        v134.Tc = {};
        v134.Uc = {
          Zc: []
        };
        v134.Vc = {};
        v134.Wc = {
          Zc: []
        };
        v134.Xc = {};
        v134.Yc = {
          Zc: []
        };
        return v134;
      };
      f43.Ic = function (p156, p157) {
        var v135 = new f43();
        var vO16 = {};
        f44(p156.colorDict, function (p158, p159) {
          vO16[p158] = p159;
        });
        var vO17 = {};
        f44(p156.regionDict, function (p160, p161) {
          vO17[p160] = new vF35(p157[p161.texture].Hc, p161.x, p161.y, p161.w, p161.h, p161.px, p161.py, p161.pw, p161.ph);
        });
        v135.Nc = {};
        for (var vLN015 = 0; vLN015 < p156.skinArrayDict.length; vLN015++) {
          var v136 = p156.skinArrayDict[vLN015];
          v135.Nc[v136.id] = new f43.WormSkinData("#" + vO16[v136.prime], v136.base.map(function (p162) {
            return vO17[p162];
          }), v136.glow.map(function (p163) {
            return vO17[p163];
          }));
        }
        var v137 = p156.skinUnknown;
        v135.Oc = new f43.WormSkinData("#" + vO16[v137.prime], v137.base.map(function (p164) {
          return vO17[p164];
        }), v137.glow.map(function (p165) {
          return vO17[p165];
        }));
        v135.Rc = {};
        f44(p156.eyesDict, function (p166, p167) {
          p166 = parseInt(p166);
          v135.Rc[p166] = new f43.WearSkinData(p167.base.map(function (p168) {
            return vO17[p168.region];
          }));
        });
        v135.Sc = new f43.WearSkinData(p156.eyesUnknown.base.map(function (p169) {
          return vO17[p169.region];
        }));
        v135.Tc = {};
        f44(p156.mouthDict, function (p170, p171) {
          p170 = parseInt(p170);
          v135.Tc[p170] = new f43.WearSkinData(p171.base.map(function (p172) {
            return vO17[p172.region];
          }));
        });
        v135.Uc = new f43.WearSkinData(p156.mouthUnknown.base.map(function (p173) {
          return vO17[p173.region];
        }));
        v135.Vc = {};
        f44(p156.glassesDict, function (p174, p175) {
          p174 = parseInt(p174);
          v135.Vc[p174] = new f43.WearSkinData(p175.base.map(function (p176) {
            return vO17[p176.region];
          }));
        });
        v135.Wc = new f43.WearSkinData(p156.glassesUnknown.base.map(function (p177) {
          return vO17[p177.region];
        }));
        v135.Xc = {};
        f44(p156.hatDict, function (p178, p179) {
          p178 = parseInt(p178);
          v135.Xc[p178] = new f43.WearSkinData(p179.base.map(function (p180) {
            return vO17[p180.region];
          }));
        });
        v135.Yc = new f43.WearSkinData(p156.hatUnknown.base.map(function (p181) {
          return vO17[p181.region];
        }));
        v135.Jc = {};
        f44(p156.portionDict, function (p182, p183) {
          p182 = parseInt(p182);
          v135.Jc[p182] = new f43.PortionSkinData(vO17[p183.base], vO17[p183.glow]);
        });
        var v138 = p156.portionUnknown;
        v135.Kc = new f43.PortionSkinData(vO17[v138.base], vO17[v138.glow]);
        v135.Lc = {};
        f44(p156.abilityDict, function (p184, p185) {
          p184 = parseInt(p184);
          v135.Lc[p184] = new f43.AbilitySkinData(vO17[p185.base]);
        });
        var v139 = p156.abilityUnknown;
        v135.Mc = new f43.AbilitySkinData(vO17[v139.base]);
        v135.Pc = {};
        f44(p156.teamDict, function (p186, p187) {
          p186 = parseInt(p186);
          v135.Pc[p186] = new f43.TeamSkinData(p187.name, new f43.WormSkinData("#" + vO16[p187.skin.prime], [], p187.skin.glow.map(function (p188) {
            return vO17[p188];
          })), new f43.PortionSkinData([], vO17[p187.portion.glow]));
        });
        v135.Qc = new f43.TeamSkinData({}, v135.Oc, v135.Kc);
        return v135;
      };
      f43.prototype.dd = function (p189) {
        var v140 = this.Nc[p189];
        return v140 || this.Oc;
      };
      f43.prototype.ed = function (p190) {
        var v141 = this.Pc[p190];
        return v141 || this.Qc;
      };
      f43.prototype.fd = function (p191) {
        var v142 = this.Rc[p191];
        return v142 || this.Sc;
      };
      f43.prototype.gd = function (p192) {
        var v143 = this.Tc[p192];
        return v143 || this.Uc;
      };
      f43.prototype.hd = function (p193) {
        var v144 = this.Vc[p193];
        return v144 || this.Wc;
      };
      f43.prototype.jd = function (p194) {
        var v145 = this.Xc[p194];
        return v145 || this.Yc;
      };
      f43.prototype.kd = function (p195) {
        var v146 = this.Jc[p195];
        return v146 || this.Kc;
      };
      f43.prototype.ld = function (p196) {
        var v147 = this.Lc[p196];
        return v147 || this.Mc;
      };
      f43.TeamSkinData = function () {
        function f45(p197, p198, p199) {
          this.ad = p197;
          this.bd = p198;
          this.cd = p199;
        }
        return f45;
      }();
      f43.WormSkinData = function () {
        function f46(p200, p201, p202) {
          this._c = p200;
          this.Zc = p201;
          this.$c = p202;
        }
        return f46;
      }();
      f43.WearSkinData = function () {
        function f47(p203) {
          this.Zc = p203;
        }
        return f47;
      }();
      f43.PortionSkinData = function () {
        function f48(p204, p205) {
          this.Zc = p204;
          this.$c = p205;
        }
        return f48;
      }();
      f43.AbilitySkinData = function () {
        function f49(p206) {
          this.Zc = p206;
        }
        return f49;
      }();
      return f43;
    }();
    var vF9 = function () {
      function f50() {
        this.md = f50.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      f50.prototype.a = function () {};
      f50.prototype.rd = function (p207) {
        this.od = p207;
      };
      f50.prototype.G = function (p208) {
        this.md = p208;
        this.sd();
      };
      f50.prototype.td = function (p209) {
        this.nd = p209;
        this.sd();
      };
      f50.prototype.sd = function () {};
      f50.prototype.ud = function (p210, p211) {
        if (!f11().p.W) {
          return null;
        }
        var v148 = p210[p211];
        if (v148 == null || v148.length == 0) {
          return null;
        } else {
          return v148[Math.floor(Math.random() * v148.length)].cloneNode();
        }
      };
      f50.prototype.vd = function (p212, p213, p214) {
        if (this.od && !(p214 <= 0)) {
          var v149 = this.ud(p212, p213);
          if (v149 != null) {
            v149.volume = Math.min(1, p214);
            v149.play();
          }
        }
      };
      f50.prototype.wd = function (p215, p216) {
        if (this.md.xd) {
          this.vd(v24.q.yd, p215, p216);
        }
      };
      f50.prototype.zd = function (p217, p218) {
        if (this.md.Ad) {
          this.vd(v24.q.Bd, p217, p218);
        }
      };
      f50.prototype.Cd = function () {};
      f50.prototype.Dd = function () {};
      f50.prototype.Ed = function () {};
      f50.prototype.Fd = function () {};
      f50.prototype.Gd = function () {};
      f50.prototype.Hd = function () {};
      f50.prototype.Id = function (p219, p220, p221) {};
      f50.prototype.Jd = function (p222) {};
      f50.prototype.Kd = function (p223) {};
      f50.prototype.Ld = function (p224) {};
      f50.prototype.Md = function (p225) {};
      f50.prototype.Nd = function (p226) {};
      f50.prototype.Od = function (p227) {};
      f50.prototype.Pd = function (p228) {};
      f50.prototype.Qd = function (p229) {};
      f50.prototype.Rd = function (p230) {};
      f50.prototype.Sd = function (p231) {};
      f50.prototype.Td = function (p232) {};
      f50.prototype.Ud = function (p233) {};
      f50.prototype.Vd = function (p234) {};
      f50.prototype.Wd = function (p235) {};
      f50.prototype.Xd = function (p236, p237) {};
      f50.prototype.Yd = function (p238) {};
      f50.prototype.Zd = function (p239, p240, p241) {};
      (function () {
        function f51(p242) {
          this.$d = new vF10(p242, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        f51.prototype.be = function (p243) {
          if (p243) {
            this.b();
          } else {
            this.ce();
          }
        };
        f51.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0;
            this.$d.ee(1500, 100);
          }
        };
        f51.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(1500, 100);
          }
        };
      })();
      (function () {
        function f52(p244) {
          this.ge = p244.map(function (p245) {
            return new vF10(p245, 0.4);
          });
          f53(this.ge, 0, this.ge.length);
          this.he = null;
          this.ie = 0;
          this.ae = false;
          this.je = 10000;
        }
        function f53(p246, p247, p248) {
          for (var v150 = p248 - 1; v150 > p247; v150--) {
            var v151 = p247 + Math.floor(Math.random() * (v150 - p247 + 1));
            var v152 = p246[v150];
            p246[v150] = p246[v151];
            p246[v151] = v152;
          }
        }
        f52.prototype.be = function (p249) {
          if (p249) {
            this.b();
          } else {
            this.ce();
          }
        };
        f52.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(1500);
          }
        };
        f52.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(800, 50);
            }
          }
        };
        f52.prototype.ke = function (p250) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 1000 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 1000 - this.je));
            this.he.de = 0;
            this.he.ee(p250, 100);
            var v153 = (this.he._d.duration - this.he._d.currentTime) * 1000 - this.je;
            var vThis4 = this;
            var vSetTimeout = setTimeout(function () {
              if (vThis4.ae && vSetTimeout == vThis4.ie) {
                vThis4.he.fe(vThis4.je, 100);
                vThis4.he = vThis4.le();
                vThis4.he._d.currentTime = 0;
                vThis4.ke(vThis4.je);
              }
            }, v153);
            this.ie = vSetTimeout;
          }
        };
        f52.prototype.le = function () {
          var v154 = this.ge[0];
          var v155 = Math.max(1, this.ge.length / 2);
          f53(this.ge, v155, this.ge.length);
          this.ge.push(this.ge.shift());
          return v154;
        };
      })();
      var vF10 = function () {
        function f54(p251, p252) {
          this._d = p251;
          this.me = p252;
          this.de = 0;
          p251.volume = 0;
          this.ne = 0;
          this.oe = false;
        }
        f54.prototype.ee = function (p253, p254) {
          console.log("fade IN " + this._d.src);
          this.pe(true, p253, p254);
        };
        f54.prototype.fe = function (p255, p256) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, p255, p256);
        };
        f54.prototype.pe = function (p257, p258, p259) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var vThis5 = this;
          var v156 = 1 / (p258 / p259);
          var vSetInterval = setInterval(function () {
            if (vThis5.oe && vSetInterval != vThis5.ne) {
              clearInterval(vSetInterval);
              return;
            }
            if (p257) {
              vThis5.de = Math.min(1, vThis5.de + v156);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de >= 1) {
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            } else {
              vThis5.de = Math.max(0, vThis5.de - v156);
              vThis5._d.volume = vThis5.de * vThis5.me;
              if (vThis5.de <= 0) {
                vThis5._d.pause();
                vThis5.oe = false;
                clearInterval(vSetInterval);
              }
            }
          }, p259);
          this.oe = true;
          this.ne = vSetInterval;
          this._d.play();
        };
        return f54;
      }();
      f50.AudioState = {
        ua: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        F: {
          qe: false,
          re: true,
          Ad: true,
          xd: false
        },
        H: {
          qe: true,
          re: false,
          Ad: false,
          xd: true
        },
        Ea: {
          qe: false,
          re: false,
          Ad: true,
          xd: false
        },
        qa: {
          qe: false,
          re: false,
          Ad: false,
          xd: false
        }
      };
      return f50;
    }();
    var vF11 = function () {
      function f55(p260) {
        this.se = p260;
        this.te = p260.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          backgroundColor: vLN016,
          antialias: true
        });
        this.ve = new vF4.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var vLN016 = 0;
      function f56(p261, p262) {
        return p261 + Math.random(p262 - p261);
      }
      function f57(p263) {
        if (p263 >= 0) {
          return Math.cos(p263 % v123);
        } else {
          return Math.cos(p263 % v123 + v123);
        }
      }
      function f58(p264) {
        if (p264 >= 0) {
          return Math.sin(p264 % v123);
        } else {
          return Math.sin(p264 % v123 + v123);
        }
      }
      var vA8 = [{
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 1,
        De: 2,
        Ee: 16737962
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 1.5,
        De: 1.5,
        Ee: 16746632
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 2,
        De: 1,
        Ee: 16755302
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 3,
        De: 2,
        Ee: 11206502
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 2.5,
        De: 2.5,
        Ee: 8978312
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 2,
        De: 3,
        Ee: 6750122
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 5,
        De: 4,
        Ee: 6728447
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 4.5,
        De: 4.5,
        Ee: 8947967
      }, {
        ze: f56(0, v123),
        Ae: f56(0, v123),
        Be: f56(0.1, 0.5),
        Ce: 4,
        De: 5,
        Ee: 11167487
      }];
      f55.prototype.a = function () {
        var vF112 = f11();
        this.ue.backgroundColor = vLN016;
        this.we = new Array(vA8.length);
        for (var vLN019 = 0; vLN019 < this.we.length; vLN019++) {
          this.we[vLN019] = new vF4.ec();
          this.we[vLN019].texture = vF112.q.Fe;
          this.we[vLN019].anchor.set(0.5);
          this.we[vLN019].zIndex = 1;
          this.ve.addChild(this.we[vLN019]);
        }
        this.xe = new Array(vF112.q.Ge.length);
        for (var vLN019 = 0; vLN019 < this.xe.length; vLN019++) {
          this.xe[vLN019] = new vF4.ec();
          this.xe[vLN019].texture = vF112.q.Ge[vLN019];
          this.xe[vLN019].anchor.set(0.5);
          this.xe[vLN019].zIndex = 2;
          this.ve.addChild(this.xe[vLN019]);
        }
        this.ye = new Array(this.xe.length);
        for (var vLN019 = 0; vLN019 < this.ye.length; vLN019++) {
          this.ye[vLN019] = {
            He: Math.random(),
            Ie: Math.random(),
            Je: Math.random(),
            Ke: Math.random()
          };
        }
        this.Ra();
      };
      f55.sc = false;
      f55.Le = function (p265) {
        f55.sc = p265;
      };
      f55.prototype.Ra = function () {
        var v157 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v158 = this.se.width();
        var v159 = this.se.height();
        this.ue.resize(v158, v159);
        this.ue.resolution = v157;
        this.te.width = v157 * v158;
        this.te.height = v157 * v159;
        var v160 = Math.max(v158, v159) * 0.8;
        for (var vLN020 = 0; vLN020 < this.we.length; vLN020++) {
          this.we[vLN020].width = v160;
          this.we[vLN020].height = v160;
        }
      };
      f55.prototype.Pa = function (p266, p267) {
        if (f55.sc) {
          var v161 = p266 / 1000;
          var v162 = p267 / 1000;
          var v163 = this.se.width();
          var v164 = this.se.height();
          for (var vLN022 = 0; vLN022 < this.we.length; vLN022++) {
            var v165 = vA8[vLN022 % vA8.length];
            var v170 = this.we[vLN022];
            var vF57 = f57(v165.Ce * (v161 * 0.08) + v165.Ae);
            var vF58 = f58(v165.De * (v161 * 0.08));
            var vF22 = 0.2 + f57(v165.Ae + v165.Be * v161) * 0.2;
            v170.tint = v165.Ee;
            v170.alpha = vF22;
            v170.position.set(v163 * (0.2 + (vF57 + 1) * 0.5 * 0.6), v164 * (0.1 + (vF58 + 1) * 0.5 * 0.8));
          }
          var v168 = Math.max(v163, v164) * 0.05;
          for (var vLN022 = 0; vLN022 < this.xe.length; vLN022++) {
            var v169 = this.ye[vLN022];
            var v170 = this.xe[vLN022];
            var v171 = v123 * vLN022 / this.xe.length + v169.He;
            v169.Ke += v169.Ie * v162;
            if (v169.Ke > 1.3) {
              v169.He = Math.random() * v123;
              v169.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              v169.Je = 0.15 + Math.random() * 0.7;
              v169.Ke = -0.3;
            }
            var v172 = v169.Je + Math.sin(Math.sin(v171 + v161 * 0.48) * 6) * 0.03;
            var v173 = v169.Ke;
            var vF22 = f22(Math.sin(Math.PI * v173), 0.1, 1);
            var v174 = (0.4 + (1 + Math.sin(v171 + v161 * 0.12)) * 0.5 * 1.2) * 0.5;
            var v175 = v171 + v169.Ie * 2 * v161;
            v170.alpha = vF22;
            v170.position.set(v163 * v172, v164 * v173);
            v170.rotation = v175;
            var v176 = v170.texture.width / v170.texture.height;
            v170.width = v174 * v168;
            v170.height = v174 * v168 * v176;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return f55;
    }();
    var vF12 = function () {
      function f59() {}
      f59.Na = "consent_state_2";
      f59.ya = "showPlayerNames";
      f59.Me = "musicEnabled";
      f59.Ne = "sfxEnabled";
      f59.Oe = "account_type";
      f59.va = "gameMode";
      f59.Aa = "nickname";
      f59.Ba = "skin";
      f59.d = "prerollCount";
      f59.La = "shared";
      return f59;
    }();
    var vF13 = function () {
      function f60(p268, p269, p270) {
        var v177 = false;
        for (var vLN023 = 0, v178 = p270.length - 1; vLN023 < p270.length; v178 = vLN023++) {
          if (p270[vLN023][1] > p269 != p270[v178][1] > p269 && p268 < (p270[v178][0] - p270[vLN023][0]) * (p269 - p270[vLN023][1]) / (p270[v178][1] - p270[vLN023][1]) + p270[vLN023][0]) {
            v177 = !v177;
          }
        }
        return v177;
      }
      var vA9 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        Oa: function (p271, p272) {
          return f60(p272, p271, vA9);
        }
      };
    }();
    var vF15 = function () {
      function f61(p273) {
        var vUndefined3 = undefined;
        vUndefined3 = p273 > 0 ? "+" + Math.floor(p273) : p273 < 0 ? "-" + Math.floor(p273) : "0";
        var v179 = Math.min(1.5, 0.5 + p273 / 600);
        var vUndefined4 = undefined;
        if (p273 < 1) {
          vUndefined4 = "0xFFFFFF";
        } else if (p273 < 30) {
          var v182 = (p273 - 1) / 29;
          vUndefined4 = f63((1 - v182) * 1 + v182 * 0.96, (1 - v182) * 1 + v182 * 0.82, (1 - v182) * 1 + v182 * 0);
        } else if (p273 < 300) {
          var v182 = (p273 - 30) / 270;
          vUndefined4 = f63((1 - v182) * 0.96 + v182 * 0.93, (1 - v182) * 0.82 + v182 * 0.34, (1 - v182) * 0 + v182 * 0.25);
        } else if (p273 < 700) {
          var v182 = (p273 - 300) / 400;
          vUndefined4 = f63((1 - v182) * 0.93 + v182 * 0.98, (1 - v182) * 0.34 + v182 * 0, (1 - v182) * 0.25 + v182 * 0.98);
        } else {
          vUndefined4 = f63(0.98, 0, 0.98);
        }
        var v183 = Math.random();
        var v184 = 1 + Math.random() * 0.5;
        return new vF16(vUndefined3, vUndefined4, true, 0.5, v179, v183, v184);
      }
      function f62(p274, p275) {
        var vUndefined5 = undefined;
        var vUndefined6 = undefined;
        if (p275) {
          vUndefined5 = 1.3;
          vUndefined6 = f63(0.93, 0.34, 0.25);
        } else {
          vUndefined5 = 1.1;
          vUndefined6 = f63(0.96, 0.82, 0);
        }
        return new vF16(p274, vUndefined6, true, 0.5, vUndefined5, 0.5, 0.7);
      }
      function f63(p276, p277, p278) {
        return ((p276 * 255 & 255) << 16) + ((p277 * 255 & 255) << 8) + (p278 * 255 & 255);
      }
      var vF19 = f19(vF4.Zb, function () {
        vF4.Zb.call(this);
        this.Pe = [];
        this.Qe = 0;
      });
      vF19.prototype.Re = function (p279) {
        this.Qe += p279;
        if (this.Qe >= 1) {
          var v185 = Math.floor(this.Qe);
          this.Qe -= v185;
          var vF61 = f61(v185);
          this.addChild(vF61);
          this.Pe.push(vF61);
        }
      };
      let vLN024 = 0;
      function f64() {
        vLN024 = 0;
      }
      vF19.prototype.Se = function (p280) {
        f115("count", p280);
        if (p280) {
          if (!vO4.ModeStremerheadshot) {
            const v186 = new Audio();
            if (vLN024 % 10 === 9) {
              v186.src = "https://wormateup.live/up/video/monster-kill-hahaha.MP3";
            } else {
              v186.src = localStorage.getItem("selectedSound") || "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
            }
            if (localStorage.getItem("isMuted") !== "true") {
              v186.play().catch(function (p281) {});
            }
            vLN024++;
            if (vLN024 % 10 === 0) {
              vLN024 = 0;
            }
          }
          var v187 = localStorage.getItem("headshotMessage") || "ضربة قوية";
          var vF622 = f62(v187, true);
          this.addChild(vF622);
          this.Pe.push(vF622);
          if (vF622) {
            vO4.emoji_headshot = true;
            setTimeout(() => vO4.emoji_headshot = false, 3000);
          }
        } else {
          var v188 = localStorage.getItem("killMessage") || "حاول مجددًا";
          var vF622 = f62(v188, false);
          this.addChild(vF622);
          this.Pe.push(vF622);
          if (vF622) {
            vO4.emoji_kill = true;
            setTimeout(() => vO4.emoji_kill = false, 3000);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          f64();
        });
        $(document).on("click", "#final-replay", function () {
          f64();
        });
        $(document).on("keydown", function (p282) {
          if (p282.key === "r" || p282.key === "R") {
            f64();
          }
        });
      });
      vF19.prototype.Te = function (p283, p284) {
        var v189 = f11().s.H.wb;
        var v190 = v189.ue.width / v189.ue.resolution;
        var v191 = v189.ue.height / v189.ue.resolution;
        var vLN025 = 0;
        while (vLN025 < this.Pe.length) {
          var v192 = this.Pe[vLN025];
          v192.Ue = v192.Ue + p284 / 2000 * v192.Ve;
          v192.We = v192.We + p284 / 2000 * v192.Xe;
          v192.alpha = Math.sin(Math.PI * v192.We) * 0.5;
          v192.scale.set(v192.Ue);
          v192.position.x = v190 * (0.25 + v192.Ye * 0.5);
          v192.position.y = v192.Ze ? v191 * (1 - (1 + v192.We) * 0.5) : v191 * (1 - (0 + v192.We) * 0.5);
          if (v192.We > 1) {
            f28(v192);
            this.Pe.splice(vLN025, 1);
            vLN025--;
          }
          vLN025++;
        }
      };
      var vF16 = function () {
        return f19(vF4.fc, function (p285, p286, p287, p288, p289, p290, p291) {
          vF4.fc.call(this, p285, {
            fill: p286,
            fontFamily: "wormdv",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Ze = p287;
          this.Ue = p288;
          this.Ve = p289;
          this.Ye = p290;
          this.We = 0;
          this.Xe = p291;
        });
      }();
      return vF19;
    }();
    var vF17 = function () {
      function f65(p292, p293) {
        this.Gc = p292;
        this.Hc = p293;
      }
      return f65;
    }();
    var vO18 = {
      $e: 0,
      _e: 16
    };
    var vF18 = function () {
      function f66() {
        this.af = vO18.$e;
        this.bf = 0;
        this.ub = 500;
        this.cf = 4000;
        this.df = 7000;
      }
      f66.TEAM_DEFAULT = 0;
      f66.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return f66;
    }();
    var vF20 = function () {
      function f67(p294) {
        this.se = p294;
        this.te = p294.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          backgroundColor: vLN026,
          antialias: true
        });
        this.ve = new vF4.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 360);
        this.gf = 0;
        this.hf = 0;
        this.if = 15;
        this.jf = 0.5;
        this.kf = 0;
        this.lf = new vF41();
        this.mf = new vF4.bc();
        this.nf = new vF4.Zb();
        this.pf = new vF4.Zb();
        this.pf.sortableChildren = true;
        this.qf = new vF4.Zb();
        this.rf = new vF4.Zb();
        this.rf.sortableChildren = true;
        this.sf = new vF4.Zb();
        this.tf = new vF21();
        this.uf = new vF23();
        this.vf = new vF25();
        this.wf = new vF15();
        this.xf = new vF4.ec();
        this.yf = {
          x: 0,
          y: -20
        };
        this.a();
      }
      var vLN026 = 0;
      f67.prototype.a = function () {
        this.ue.backgroundColor = vLN026;
        this.lf.zf.zIndex = 10;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 20;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 5000;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 5100;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 10000;
        this.ve.addChild(this.qf);
        this.xf.texture = f11().q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      f67.prototype.Ra = function () {
        var v193 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v194 = this.se.width();
        var v195 = this.se.height();
        this.ue.resize(v194, v195);
        this.ue.resolution = v193;
        this.te.width = v193 * v194;
        this.te.height = v193 * v195;
        this.jf = Math.min(Math.min(v194, v195), Math.max(v194, v195) * 0.625);
        this.xf.position.x = v194 / 2;
        this.xf.position.y = v195 / 2;
        this.xf.width = v194;
        this.xf.height = v195;
        this.vf.position.x = v194 - 225;
        this.vf.position.y = 1;
        window.changedNf = () => this.jf = Math.min(Math.max(v194, v195), window.multiplier * Math.min(v194, v195));
        if (vO4.ModeStremer) {
          this.tf.position.x = v194 / 2 + 150;
          this.uf.position.x = v194 / 2 + 10;
          this.vf.position.x = v194 / 2 - 130;
        } else {
          this.tf.position.x = 60;
          this.uf.position.x = 110;
          this.vf.position.x = v194 - 200;
        }
        this.tf.position.y = 60;
        this.uf.position.y = 10;
        this.vf.position.y = 3;
        this.tf.addChild(vO7.hoisinhnhanh);
        this.tf.addChild(vO7.clock);
        this.tf.addChild(vO7.quaytron);
        this.vf.addChild(vO7.value_server);
        this.vf.addChild(vO7.containerImgS);
        this.tf.addChild(vO7.borderImg);
        window.retundFlagError = () => {
          return vO7.containerImgS.texture = PIXI.Texture.fromImage(vO4.flag);
        };
        this.tf.addChild(vO7.containerCountInfo);
      };
      f67.prototype.Te = function (p295, p296) {
        var vF113 = f11();
        this.if = 15;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(p295.af == vO18.$e ? vF113.q.Cf : vF113.q.Df);
        var v196 = this.mf;
        v196.clear();
        v196.lineStyle(0.8, 16711680);
        v196.drawCircle(0, 0, p295.ub);
        v196.endFill();
        this.vf.Ef = p296;
        this.sf.visible = p296;
      };
      f67.prototype.Pa = function (p297, p298) {
        if (!(this.ue.width <= 5)) {
          var vF114 = f11();
          var v197 = vF114.o.N;
          var v198 = this.ue.width / this.ue.resolution;
          var v199 = this.ue.height / this.ue.resolution;
          this.if = f23(this.if, vF114.o.jb, p298, 0.002);
          var v200 = this.jf / this.if;
          var v201 = vF114.o.N.Ff[vF5.ZOOM_TYPE];
          var v202 = v201 != null && v201.sc;
          this.kf = f21(0, 1, this.kf + p298 / 1000 * ((v202 ? 1 : 0) * 0.1 - this.kf));
          this.xf.alpha = this.kf;
          this.ff = this.ff + p298 * 0.01;
          if (this.ff > 360) {
            this.ff = this.ff % 360;
          }
          this.gf = Math.sin(p297 / 1200 * 2 * Math.PI);
          var v203 = v197.Gf();
          this.yf.x = f24(this.yf.x, v203.x, p298, vO4.smoothCamera, 33.333);
          this.yf.y = f24(this.yf.y, v203.y, p298, 0.5, 33.333);
          var v204 = v198 / v200 / 2;
          var v205 = v199 / v200 / 2;
          vF114.o.yb(this.yf.x - v204 * 1.3, this.yf.x + v204 * 1.3, this.yf.y - v205 * 1.3, this.yf.y + v205 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, v204 * 2, v205 * 2);
          var v206 = vF114.o.fb.ub;
          this.ve.scale.x = v200;
          this.ve.scale.y = v200;
          this.ve.position.x = v198 / 2 - this.yf.x * v200;
          this.ve.position.y = v199 / 2 - this.yf.y * v200;
          var v207 = Math.hypot(v203.x, v203.y);
          if (v207 > v206 - 10) {
            this.hf = f21(0, 1, 1 + (v207 - v206) / 10);
            var v208 = Math.cos(this.ff * v123 / 360) * (1 - this.hf) + this.hf * 1;
            var v209 = Math.sin(this.ff * v123 / 360) * (1 - this.hf);
            var v210 = (Math.atan2(v209, v208) + v123) % v123 * 360 / v123;
            var v211 = this.hf * (0.5 + this.gf * 0.5);
            var vF31 = f31(Math.floor(v210), 1, 0.75 - this.hf * 0.25);
            this.lf.Hf(vF31[0], vF31[1], vF31[2], 0.1 + v211 * 0.2);
          } else {
            this.hf = 0;
            var vF312 = f31(Math.floor(this.ff), 1, 0.75);
            this.lf.Hf(vF312[0], vF312[1], vF312[2], 0.1);
          }
          var vLN027 = 0;
          for (; vLN027 < this.sf.children.length; vLN027++) {
            var v212 = this.sf.children[vLN027];
            v212.position.x = v198 / 2 - (this.yf.x - v212.If.x) * v200;
            v212.position.y = v199 / 2 - (this.yf.y - v212.If.y) * v200;
          }
          this.tf.Jf.position.x = v203.x / v206 * this.tf.Kf;
          this.tf.Jf.position.y = v203.y / v206 * this.tf.Kf;
          this.uf.Qa(p297);
          this.wf.Te(p297, p298);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      f67.prototype.Lf = function (p299, p300) {
        p300.Of.Nf.Mf().zIndex = (p299 + 2147483648) / 4294967296 * 5000;
        this.nf.addChild(p300.Of.Pf.Mf());
        this.pf.addChild(p300.Of.Nf.Mf());
      };
      f67.prototype.Qf = function (p301, p302, p303) {
        p302.Rf.zIndex = f11().o.fb.bf ? 0 : 10 + (p301 + 32768) / 65536 * 5000;
        this.qf.addChild(p302.Rf);
        if (p301 != f11().o.fb.bf) {
          this.sf.addChild(p303);
        }
      };
      var vF21 = function () {
        return f19(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Kf = 40;
          this.Sf = new vF4.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new vF4.bc();
          var v213 = new vF4.bc();
          v213.beginFill("black", 0.4);
          v213.drawCircle(0, 0, this.Kf);
          v213.endFill();
          v213.lineStyle(1, 65288);
          v213.drawCircle(0, 0, this.Kf);
          v213.moveTo(0, -this.Kf);
          v213.lineTo(0, +this.Kf);
          v213.moveTo(-this.Kf, 0);
          v213.lineTo(+this.Kf, 0);
          v213.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(16711680);
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(1, "black");
          this.Jf.drawCircle(0, 0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(v213);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var vF23 = function () {
        var vF192 = f19(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Tf = {};
        });
        vF192.prototype.Qa = function (p304) {
          var v214 = 0.5 + Math.cos(v123 * (p304 / 1000 / 1.6)) * 0.5;
          var v215;
          for (v215 in this.Tf) {
            var v216 = this.Tf[v215];
            var v217 = v216.Uf;
            v216.alpha = 1 - v217 + v217 * v214;
          }
        };
        vF192.prototype.Te = function (p305) {
          var v218;
          for (v218 in this.Tf) {
            if (p305[v218] == null || !p305[v218].sc) {
              f28(this.Tf[v218]);
              delete this.Tf[v218];
            }
          }
          var vLN028 = 0;
          var v219;
          for (v219 in p305) {
            var v220 = p305[v219];
            if (v220.sc) {
              var v221 = this.Tf[v219];
              if (!v221) {
                var v222 = f11().p.Dc().ld(v220.rc).Zc;
                v221 = new vF24();
                v221.texture = v222.Hc;
                v221.width = 40;
                v221.height = 40;
                this.Tf[v219] = v221;
                this.addChild(v221);
              }
              f10(this, v219, v220.tc);
              v221.Uf = v220.tc;
              if (vO4.ModeStremer) {
                v221.position.x = vLN028 + 225;
              } else {
                v221.position.x = vLN028;
              }
              vLN028 = vLN028 + 40;
            }
          }
        };
        var vF24 = function () {
          return f19(vF4.ec, function () {
            vF4.ec.call(this);
            this.Uf = 0;
          });
        }();
        return vF192;
      }();
      var vF25 = function () {
        var vF193 = f19(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.Ef = true;
          this.Vf = 12;
          this.Wf = 9;
          this.Pe = [];
          var vLN029 = 0;
          for (; vLN029 < 14; vLN029++) {
            this.Xf();
          }
        });
        vF193.prototype.Te = function (p306) {
          var vF115 = f11();
          var v223 = vF115.o.fb.af == vO18._e;
          var vLN7 = 7;
          var vLN030 = 0;
          if (vLN030 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[vLN030].Yf(1, "white");
          this.Pe[vLN030].Zf("", f14(""), "(" + vF115.o.tb + " online)");
          this.Pe[vLN030].position.y = vLN7;
          vLN7 = vLN7 + this.Vf;
          vLN030 = vLN030 + 1;
          if (p306.$f.length > 0) {
            vLN7 = vLN7 + this.Wf;
          }
          var vLN031 = 0;
          for (; vLN031 < p306.$f.length; vLN031++) {
            var v224 = p306.$f[vLN031];
            var v225 = vF115.p.Dc().ed(v224._f);
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(0.8, v225.bd._c);
            this.Pe[vLN030].Zf("" + (vLN031 + 1), f15(v225.ad), "" + Math.floor(v224.M));
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
          }
          if (p306.ag.length > 0) {
            vLN7 = vLN7 + this.Wf;
          }
          var vLN032 = 0;
          for (; vLN032 < p306.ag.length; vLN032++) {
            var v226 = p306.ag[vLN032];
            var v227 = vF115.o.fb.bf == v226.bg;
            var vUndefined7 = undefined;
            var vUndefined8 = undefined;
            if (v227) {
              vUndefined7 = "yellow";
              vUndefined8 = vF115.o.N.Mb.ad;
            } else {
              var v228 = vF115.o.hb[v226.bg];
              if (v228 != null) {
                vUndefined7 = v223 ? vF115.p.Dc().ed(v228.Mb.cg).bd._c : vF115.p.Dc().dd(v228.Mb.dg)._c;
                vUndefined8 = this.Ef ? v228.Mb.ad : "---";
              } else {
                vUndefined7 = "gray";
                vUndefined8 = "?";
              }
            }
            if (v227) {
              vLN7 = vLN7 + this.Wf;
            }
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(v227 ? 1 : 0.8, vUndefined7);
            var v229 = Math.floor(v226.M);
            v229.dotFormat();
            this.Pe[vLN030].Zf("" + (vLN032 + 1), vUndefined8, "" + v229.dotFormat());
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
            if (v227) {
              vLN7 = vLN7 + this.Wf;
            }
          }
          if (vF115.o.O > p306.ag.length) {
            vLN7 = vLN7 + this.Wf;
            if (vLN030 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[vLN030].Yf(2, "white");
            window.tuNewScore = Math.floor(vF115.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[vLN030].Zf("" + vF115.o.O, vF115.o.N.Mb.ad, "" + window.tuNewScore.dotFormat());
            this.Pe[vLN030].position.y = vLN7;
            vLN7 = vLN7 + this.Vf;
            vLN030 = vLN030 + 1;
            vLN7 = vLN7 + this.Wf;
          }
          while (this.Pe.length > vLN030) {
            f28(this.Pe.pop());
          }
        };
        vF193.prototype.Xf = function () {
          var v230 = new vF26();
          v230.position.y = 0;
          if (this.Pe.length > 0) {
            v230.position.y = this.Pe[this.Pe.length - 1].position.y + this.Vf;
          }
          this.Pe.push(v230);
          this.addChild(v230);
        };
        var vF26 = function () {
          var vF194 = f19(vF4.Zb, function () {
            vF4.Zb.call(this);
            this.eg = new vF4.fc("", {
              fontFamily: "wormup",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.eg.anchor.x = 2;
            this.eg.position.x = 4;
            this.addChild(this.eg);
            this.fg = new vF4.fc("", {
              fontFamily: "wormdv",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.fg.anchor.x = 0;
            this.fg.position.x = 4;
            this.addChild(this.fg);
            this.gg = new vF4.fc("", {
              fontFamily: "wormup",
              fontSize: 11,
              fill: "white",
              fontWeight: "bold",
              line: 5
            });
            this.gg.anchor.x = 1;
            this.gg.position.x = 190;
            this.addChild(this.gg);
          });
          vF194.prototype.Zf = function (p307, p308, p309) {
            this.eg.text = p307;
            this.gg.text = p309;
            var vP308 = p308;
            this.fg.text = vP308;
            while (this.fg.width > 120) {
              vP308 = vP308.substring(0, vP308.length - 1);
              this.fg.text = vP308 + "..";
            }
          };
          vF194.prototype.Yf = function (p310, p311) {
            this.eg.alpha = p310;
            this.eg.style.fill = p311;
            this.fg.alpha = p310;
            this.fg.style.fill = p311;
            this.gg.alpha = p310;
            this.gg.style.fill = p311;
          };
          return vF194;
        }();
        return vF193;
      }();
      return f67;
    }();
    var vF27 = function () {
      function f68(p312) {
        this.o = p312;
        this.hg = [];
        this.ig = 0;
      }
      f68.prototype.Xb = function (p313) {
        this.hg.push(new DataView(p313));
      };
      f68.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0;
      };
      f68.prototype.Bb = function () {
        for (var vLN033 = 0; vLN033 < 10; vLN033++) {
          if (this.hg.length === 0) {
            return;
          }
          var v231 = this.hg.shift();
          try {
            this.jg(v231);
          } catch (e25) {
            throw e25;
          }
        }
      };
      f68.prototype.jg = function (p314) {
        switch (p314.mc(0) & 255) {
          case 0:
            this.kg(p314, 1);
            return;
          case 1:
            this.lg(p314, 1);
            return;
          case 2:
            this.mg(p314, 1);
            return;
          case 3:
            this.ng(p314, 1);
            return;
          case 4:
            this.og(p314, 1);
            return;
          case 5:
            this.pg(p314, 1);
            return;
        }
      };
      f68.prototype.kg = function (p315, p316) {
        this.o.fb.af = p315.mc(p316);
        p316 = p316 + 1;
        var v232 = p315.nc(p316);
        p316 = p316 + 2;
        this.o.fb.bf = v232;
        this.o.N.Mb.Lb = v232;
        this.o.fb.ub = p315.pc(p316);
        p316 = p316 + 4;
        this.o.fb.cf = p315.pc(p316);
        p316 = p316 + 4;
        this.o.fb.df = p315.pc(p316);
        p316 = p316 + 4;
        f11().s.H.wb.Te(this.o.fb, f11().s.xa.wa());
        return p316;
      };
      f68.prototype.lg = function (p317, p318) {
        var v233 = this.ig++;
        var v234 = p317.nc(p318);
        p318 += 2;
        var vUndefined9 = undefined;
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN034 = 0; vLN034 < vUndefined9; vLN034++) {
          p318 = this.sg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN035 = 0; vLN035 < vUndefined9; vLN035++) {
          p318 = this.tg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN036 = 0; vLN036 < vUndefined9; vLN036++) {
          p318 = this.ug(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN037 = 0; vLN037 < vUndefined9; vLN037++) {
          p318 = this.vg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN038 = 0; vLN038 < vUndefined9; vLN038++) {
          p318 = this.wg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN039 = 0; vLN039 < vUndefined9; vLN039++) {
          p318 = this.xg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN040 = 0; vLN040 < vUndefined9; vLN040++) {
          p318 = this.yg(p317, p318);
        }
        vUndefined9 = this.qg(p317, p318);
        p318 += this.rg(vUndefined9);
        for (var vLN041 = 0; vLN041 < vUndefined9; vLN041++) {
          p318 = this.zg(p317, p318);
        }
        if (v233 > 0) {
          p318 = this.Ag(p317, p318);
        }
        this.o.Qb(v233, v234);
        return p318;
      };
      f68.prototype.vg = function (p319, p320) {
        var v235 = new vF43.Config();
        v235.Lb = p319.nc(p320);
        p320 = p320 + 2;
        v235.cg = this.o.fb.af == vO18._e ? p319.mc(p320++) : vF18.TEAM_DEFAULT;
        v235.dg = p319.nc(p320);
        let vP320 = p320;
        p320 = p320 + 2;
        v235.Bg = p319.nc(p320);
        let vP3202 = p320;
        p320 = p320 + 2;
        v235.Cg = p319.nc(p320);
        let vP3203 = p320;
        p320 = p320 + 2;
        v235.Dg = p319.nc(p320);
        let vP3204 = p320;
        p320 = p320 + 2;
        v235.Eg = p319.nc(p320);
        let vP3205 = p320;
        p320 = p320 + 2;
        var v236 = p319.mc(p320);
        p320 = p320 + 1;
        var vLS2 = "";
        var vLN042 = 0;
        for (; vLN042 < v236; vLN042++) {
          vLS2 = vLS2 + String.fromCharCode(p319.nc(p320));
          p320 = p320 + 2;
        }
        if (p320 > 210) {
          for (let v237 in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[v237].Mb.ad)) {
              console.log("nombre: " + this.o.hb[v237].Mb.ad);
              var v238 = this.o.hb[v237].Mb.ad.substr(-13);
              console.log("elimina spacios: " + v238);
              f68 = v238.substr(0, 4);
              console.log("primeros digitos: " + f68);
              let v239 = v238.substr(4, 3);
              console.log("segundos digitos: " + v239);
              let v240 = v238.substr(7, 3);
              console.log("tercer digitos: " + v240);
              let v241 = v238.substr(10, 3);
              console.log("mouthId_A: " + v241);
              if (f68 !== "0000" && vO4.visibleSkin.indexOf(parseInt(f68)) !== -1) {
                this.o.hb[v237].Mb.dg = parseInt(f68);
              }
              if (v239 !== "000") {
                this.o.hb[v237].Mb.Eg = parseInt(v239);
              }
              if (v240 !== "000") {
                this.o.hb[v237].Mb.Bg = parseInt(v240);
              }
              if (v241 !== "000") {
                this.o.hb[v237].Mb.Cg = parseInt(v241);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === v235.Lb) {
          v235.dg = vO4.PropertyManager.rh;
          v235.Bg = vO4.PropertyManager.sh;
          v235.Cg = vO4.PropertyManager.th;
          v235.Dg = vO4.PropertyManager.uh;
          v235.Eg = vO4.PropertyManager.vh;
          p319.setInt16(vP320, v235.dg);
          p319.setInt16(vP3202, v235.Bg);
          p319.setInt16(vP3203, v235.Cg);
          p319.setInt16(vP3204, v235.Dg);
          p319.setInt16(vP3205, v235.Eg);
          vO.aload = true;
          vO.aId = vP320;
        }
        v235.ad = vLS2;
        if (this.o.fb.bf === v235.Lb) {
          this.o.N.Fg(v235);
          v235.Mb = v235.Lb;
          v235.bd = v235.ad;
        } else {
          var v242 = this.o.hb[v235.Lb];
          if (v242 != null) {
            v242.Kb();
          }
          var v243 = new vF43(this.o.fb);
          v243.vb(f11().s.H.wb);
          this.o.hb[v235.Lb] = v243;
          v243.Fg(v235);
        }
        return p320;
      };
      f68.prototype.wg = function (p321, p322) {
        var v244 = p321.nc(p322);
        p322 += 2;
        var v245 = p321.mc(p322);
        p322++;
        var v246 = !!(v245 & 1);
        var v247 = !!(v245 & 2);
        var vLN043 = 0;
        if (v246) {
          vLN043 = p321.nc(p322);
          p322 += 2;
        }
        var v248 = this.Gg(v244);
        if (v248 === undefined) {
          return p322;
        }
        v248.Ib = false;
        if (!v248.Hb) {
          return p322;
        }
        var v249 = this.Gg(v244);
        if (v246 && v249 !== undefined && v249.Hb) {
          if (vLN043 === this.o.fb.bf) {
            var v250 = this.o.N.Gf();
            var v251 = v248.Hg(v250.x, v250.y);
            Math.max(0, 1 - v251.distance / (this.o.jb * 0.5));
            if (v251.distance < this.o.jb * 0.5) {
              f11().s.H.wb.wf.Se(v247);
            }
          } else if (v244 === this.o.fb.bf) ;else {
            var v254 = this.o.N.Gf();
            var v255 = v248.Hg(v254.x, v254.y);
            Math.max(0, 1 - v255.distance / (this.o.jb * 0.5));
          }
        } else if (v244 === this.o.fb.bf) ;else {
          var v254 = this.o.N.Gf();
          var v255 = v248.Hg(v254.x, v254.y);
          Math.max(0, 1 - v255.distance / (this.o.jb * 0.5));
        }
        return p322;
      };
      f68.prototype.zg = function (p323, p324) {
        var v256 = p323.nc(p324);
        p324 += 2;
        var v257 = v256 === this.o.fb.bf ? null : this.o.hb[v256];
        var v258 = p323.mc(p324);
        p324 += 1;
        var v259 = !!(v258 & 1);
        if (v258 & 2) {
          var v260 = p323.pc(p324);
          p324 += 4;
          if (v257) {
            v257.Ig(v260);
          }
        }
        var v261 = this.Jg(p323.mc(p324++), p323.mc(p324++), p323.mc(p324++));
        var v262 = this.Jg(p323.mc(p324++), p323.mc(p324++), p323.mc(p324++));
        if (v257) {
          v257.Kg(v261, v262, v259);
          var v263 = this.o.N.Gf();
          var v264 = v257.Gf();
          var v265 = Math.max(0, 1 - Math.hypot(v263.x - v264.x, v263.y - v264.y) / (this.o.jb * 0.5));
          f11().r.Zd(v265, v256, v259);
        }
        var v266 = this.qg(p323, p324);
        p324 += this.rg(v266);
        if (v257) {
          for (var v267 in v257.Ff) {
            var v268 = v257.Ff[v267];
            if (v268) {
              v268.sc = false;
            }
          }
        }
        for (var vLN044 = 0; vLN044 < v266; vLN044++) {
          var v269 = p323.mc(p324);
          p324++;
          var v270 = p323.mc(p324);
          p324++;
          if (v257) {
            var v271 = v257.Ff[v269];
            v271 = v271 || (v257.Ff[v269] = new vF5(v269));
            v271.sc = true;
            v271.tc = Math.min(1, Math.max(0, v270 / 100));
          }
        }
        return p324;
      };
      f68.prototype.Ag = function (p325, p326) {
        var v272 = this.o.N;
        var v273 = p325.mc(p326);
        p326 += 1;
        var v274 = !!(v273 & 1);
        var v275 = !!(v273 & 2);
        var v276 = !!(v273 & 4);
        if (v275) {
          var v277 = v272.M;
          v272.Ig(p325.pc(p326));
          p326 += 4;
          v277 = v272.M - v277;
          if (v277 > 0) {
            f11().s.H.wb.wf.Re(v277);
          }
        }
        if (v276) {
          this.o.ib = p325.pc(p326);
          p326 += 4;
        }
        var v278 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        var v279 = this.Jg(p325.mc(p326++), p325.mc(p326++), p325.mc(p326++));
        v272.Kg(v278, v279, v274);
        f11().r.Zd(0.5, this.o.fb.bf, v274);
        var v280 = this.qg(p325, p326);
        p326 += this.rg(v280);
        for (var v281 in v272.Ff) {
          var v282 = v272.Ff[v281];
          if (v282) {
            v282.sc = false;
          }
        }
        for (var vLN045 = 0; vLN045 < v280; vLN045++) {
          var v283 = p325.mc(p326);
          p326++;
          var v284 = p325.mc(p326);
          p326++;
          var v285 = v272.Ff[v283];
          if (!v285) {
            v285 = new vF5(v283);
            v272.Ff[v283] = v285;
          }
          v285.sc = true;
          v285.tc = Math.min(1, Math.max(0, v284 / 100));
        }
        f11().s.H.wb.uf.Te(v272.Ff);
      };
      f68.prototype.xg = function (p327, p328) {
        var vThis6 = this;
        var v286 = p327.nc(p328);
        p328 += 2;
        var v287 = this.Gg(v286);
        var v288 = p327.pc(p328);
        p328 += 4;
        var vA10 = [];
        for (var v289 in v287.Ff) {
          if (v289 == 0) {
            vA10.push("velocidad");
            $(".v0").fadeIn();
          } else if (v289 == 1) {
            vA10.push("movimiento");
            $(".v1").fadeIn();
          } else if (v289 == 2) {
            vA10.push("iman");
            $(".v2").fadeIn();
          } else if (v289 == 3) {
            vA10.push("comidax2");
            $(".v3").fadeIn();
          } else if (v289 == 4) {
            vA10.push("comidax5");
            $(".v4").fadeIn();
          } else if (v289 == 5) {
            vA10.push("comidax10");
            $(".v5").fadeIn();
          } else if (v289 == 6) {
            vA10.push("zoom");
            $(".v6").fadeIn();
          } else {
            console.log("comiste otro potenciador");
          }
        }
        window.nombres2 = vA10;
        $(".Worm_cerca").text(" : " + v287.Mb.ad);
        if (v287.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 3000);
        } else {}
        var v290 = this.qg(p327, p328);
        p328 += this.rg(v290);
        if (v287) {
          v287.Ig(v288);
          v287.Lg(function () {
            return vThis6.Jg(p327.mc(p328++), p327.mc(p328++), p327.mc(p328++));
          }, v290);
          v287.Mg(true);
          var v291 = this.o.N.Gf();
          var v292 = v287.Gf();
          var v293 = Math.max(0, 1 - Math.hypot(v291.x - v292.x, v291.y - v292.y) / (this.o.jb * 0.5));
          f11().r.Xd(v293, v286);
        } else {
          p328 += v290 * 6;
        }
        return p328;
      };
      f68.prototype.yg = function (p329, p330) {
        var v294 = p329.nc(p330);
        p330 += 2;
        var v295 = this.o.hb[v294];
        var vA11 = [];
        if (v295 && v295.Ib) {
          v295.Mg(false);
        }
        f11().r.Yd(v294);
        return p330;
      };
      f68.prototype.sg = function (p331, p332) {
        var v296 = new vF29.Config();
        v296.Lb = p331.oc(p332);
        p332 += 4;
        v296.cg = this.o.fb.af === vO18._e ? p331.mc(p332++) : vF18.TEAM_DEFAULT;
        v296.Ng = this.Jg(p331.mc(p332++), p331.mc(p332++), p331.mc(p332++));
        v296.dg = p331.mc(p332++);
        var v297 = this.o.gb[v296.Lb];
        if (v297 != null) {
          v297.Kb();
        }
        var v298 = new vF29(v296, f11().s.H.wb);
        v298.Og(this.Pg(v296.Lb), this.Qg(v296.Lb), true);
        this.o.gb[v296.Lb] = v298;
        return p332;
      };
      f68.prototype.tg = function (p333, p334) {
        var v299 = p333.oc(p334);
        p334 += 4;
        var v300 = this.o.gb[v299];
        if (v300) {
          v300.Rg = 0;
          v300.Sg = v300.Sg * 1.5;
          v300.Nb = true;
        }
        return p334;
      };
      f68.prototype.ug = function (p335, p336) {
        var v301 = p335.oc(p336);
        p336 += 4;
        var v302 = p335.nc(p336);
        p336 += 2;
        var v303 = this.o.gb[v301];
        if (v303) {
          v303.Rg = 0;
          v303.Sg = v303.Sg * 0.1;
          v303.Nb = true;
          var v304 = this.Gg(v302);
          if (v304 && v304.Hb) {
            this.o.fb.bf;
            var v305 = v304.Gf();
            v303.Og(v305.x, v305.y, false);
          }
        }
        return p336;
      };
      var vA12 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f68.prototype.mg = function (p337) {
        var v306 = f11().q.Ug.Tg;
        var v307 = v306.getImageData(0, 0, 80, 80);
        var v308 = vA12[0];
        var v309 = 80 - v308;
        var vLN046 = 0;
        for (var vLN047 = 0; vLN047 < 628; vLN047++) {
          var v310 = p337.mc(1 + vLN047);
          for (var vLN048 = 0; vLN048 < 8; vLN048++) {
            var v311 = (v310 >> vLN048 & 1) != 0;
            var v312 = (v308 + vLN046 * 80) * 4;
            if (v311) {
              v307.data[v312] = 255;
              v307.data[v312 + 1] = 255;
              v307.data[v312 + 2] = 255;
              v307.data[v312 + 3] = 255;
            } else {
              v307.data[v312 + 3] = 0;
            }
            if (++v308 >= v309 && ++vLN046 < 80) {
              v308 = vA12[vLN046];
              v309 = 80 - v308;
            }
          }
        }
        v306.putImageData(v307, 0, 0);
        var v313 = f11().s.H.wb.tf.Sf;
        v313.texture = f11().q.Ug.Hc;
        v313.texture.update();
      };
      f68.prototype.og = function (p338, p339) {
        var v314 = p338.oc(p339);
        p339 += 4;
      };
      f68.prototype.pg = function (p340, p341) {
        this.o.Rb();
      };
      var vLN9 = 9;
      f68.prototype.ng = function (p342, p343) {
        this.o.tb = p342.nc(p343);
        p343 += 2;
        this.o.O = p342.nc(p343);
        p343 += 2;
        var v315 = new vF39();
        v315.ag = [];
        if (vO4.ModeStremerbatop) {
          var v319 = p342.mc(p343++);
          for (var vLN050 = vLN9; vLN050 < v319; vLN050++) {
            var v320 = p342.nc(p343);
            p343 += 2;
            var v321 = p342.pc(p343);
            p343 += 4;
            v315.ag.push(vF39.Vg(v320, v321));
          }
        } else {
          var v319 = p342.mc(p343++);
          for (var vLN050 = 0; vLN050 < v319; vLN050++) {
            var v320 = p342.nc(p343);
            p343 += 2;
            var v321 = p342.pc(p343);
            p343 += 4;
            v315.ag.push(vF39.Vg(v320, v321));
          }
        }
        v315.$f = [];
        if (this.o.fb.af === vO18._e) {
          var v322 = p342.mc(p343++);
          for (var vLN050 = 0; vLN050 < v322; vLN050++) {
            var v323 = p342.mc(p343);
            p343 += 1;
            var v324 = p342.pc(p343);
            p343 += 4;
            v315.$f.push(vF39.Wg(v323, v324));
          }
        }
        f11().s.H.wb.vf.Te(v315);
      };
      f68.prototype.Gg = function (p344) {
        if (p344 === this.o.fb.bf) {
          return this.o.N;
        } else {
          return this.o.hb[p344];
        }
      };
      f68.prototype.Jg = function (p345, p346, p347) {
        return (((p347 & 255 | p346 << 8 & 65280 | p345 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f68.prototype.Pg = function (p348) {
        return ((p348 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f68.prototype.Qg = function (p349) {
        return ((p349 >> 16 & 65535) / 32768 - 1) * this.o.fb.ef();
      };
      f68.prototype.qg = function (p350, p351) {
        var v325 = p350.mc(p351);
        if ((v325 & 128) == 0) {
          return v325;
        }
        var v326 = p350.mc(p351 + 1);
        if ((v326 & 128) == 0) {
          return v326 | v325 << 7 & 16256;
        }
        var v327 = p350.mc(p351 + 2);
        if ((v327 & 128) == 0) {
          return v327 | v326 << 7 & 16256 | v325 << 14 & 2080768;
        }
        var v328 = p350.mc(p351 + 3);
        if ((v328 & 128) == 0) {
          return v328 | v327 << 7 & 16256 | v326 << 14 & 2080768 | v325 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      f68.prototype.rg = function (p352) {
        if (p352 < 128) {
          return 1;
        } else if (p352 < 16384) {
          return 2;
        } else if (p352 < 2097152) {
          return 3;
        } else if (p352 < 268435456) {
          return 4;
        } else {
          return undefined;
        }
      };
      return f68;
    }();
    var vF28 = function () {
      function f69(p353) {
        this.Xg = p353;
      }
      f69.Yg = function () {
        return new vF28(null);
      };
      f69.Zg = function (p354) {
        return new vF28(p354);
      };
      f69.prototype.$g = function () {
        return this.Xg;
      };
      f69.prototype._g = function () {
        return this.Xg != null;
      };
      f69.prototype.ah = function (p355) {
        if (this.Xg != null) {
          p355(this.Xg);
        }
      };
      return f69;
    }();
    var vF29 = function () {
      function f70(p356, p357) {
        this.Mb = p356;
        this.bh = p356.dg >= 80;
        this.Ob = 0;
        this.Pb = 0;
        this.ch = 0;
        this.dh = 0;
        this.Sg = this.bh ? 1 : p356.Ng;
        this.Rg = 1;
        this.Nb = false;
        this.eh = 0;
        this.fh = 0;
        this.Jb = 1;
        this.Ae = Math.PI * 2 * Math.random();
        this.gh = new vF30();
        this.gh.hh(f11().o.fb.af, this.Mb.cg === vF18.TEAM_DEFAULT ? null : f11().p.Dc().ed(this.Mb.cg), f11().p.Dc().kd(this.Mb.dg));
        p357.Lf(p356.Lb, this.gh);
      }
      f70.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      f70.prototype.Og = function (p358, p359, p360) {
        this.Ob = p358;
        this.Pb = p359;
        if (p360) {
          this.ch = p358;
          this.dh = p359;
        }
      };
      f70.prototype.Fb = function (p361, p362) {
        var v329 = Math.min(0.5, this.Sg * 1);
        var v330 = Math.min(2.5, this.Sg * 1.5);
        this.eh = f23(this.eh, v329, p362, 0.0025);
        this.fh = f23(this.fh, v330, p362, 0.0025);
        this.Jb = f23(this.Jb, this.Rg, p362, 0.0025);
      };
      f70.prototype.Gb = function (p363, p364, p365) {
        this.ch = f23(this.ch, this.Ob, p364, vO4.eat_animation);
        this.dh = f23(this.dh, this.Pb, p364, 0.0025);
        this.gh.Te(this, p363, p364, p365);
      };
      f70.Config = function () {
        function f71() {
          this.Lb = 0;
          this.cg = vF18.TEAM_DEFAULT;
          this.Ng = 0;
          this.dg = 0;
        }
        return f71;
      }();
      return f70;
    }();
    var vF30 = function () {
      function f72() {
        this.Of = new vF32(new vF42(), new vF42());
        this.Of.Pf.jh.blendMode = vF4.ic.jc;
        this.Of.Pf.jh.zIndex = vLN100;
        this.Of.Nf.jh.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f72.prototype.hh = function (p366, p367, p368) {
        var v331 = p368.Zc;
        if (v331 != null) {
          this.Of.Nf.kh(v331);
        }
        var v332 = p366 == vO18._e && p367 != null ? p367.cd.$c : p368.$c;
        if (v332 != null) {
          this.Of.Pf.kh(v332);
        }
      };
      f72.prototype.Te = function (p369, p370, p371, p372) {
        if (!p372(p369.ch, p369.dh)) {
          this.Of.lh();
          return;
        }
        var v333 = p369.fh * (1 + Math.cos(p369.Ae + p370 / 200) * 0.3);
        if (p369.bh) {
          this.Of.mh(p369.ch, p369.dh, vO4.PortionSize * p369.eh, p369.Jb * 1, vO4.PortionAura * v333, vO4.PortionTransparent * p369.Jb);
        } else {
          this.Of.mh(p369.ch, p369.dh, vO4.FoodSize * p369.eh, p369.Jb * 1, vO4.FoodShadow * v333, vO4.FoodTransparent * p369.Jb);
        }
      };
      var vF32 = function () {
        function f73(p373, p374) {
          this.Nf = p373;
          this.Pf = p374;
        }
        f73.prototype.mh = function (p375, p376, p377, p378, p379, p380) {
          this.Nf.Mg(true);
          this.Nf.nh(p375, p376);
          this.Nf.oh(p377);
          this.Nf.qh(p378);
          this.Pf.Mg(true);
          this.Pf.nh(p375, p376);
          this.Pf.oh(p379);
          this.Pf.qh(p380);
        };
        f73.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return f73;
      }();
      return f72;
    }();
    var vF33 = function () {
      function f74() {
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.wh = [];
      }
      function f75(p381, p382) {
        if (!f11().p.W()) {
          return null;
        }
        var v334 = f11().p.Ac();
        if (p382 === vF34.ia) {
          var v_0x582063 = f76(v334.skinArrayDict, p381);
          if (v_0x582063 < 0) {
            return null;
          } else {
            return v334.skinArrayDict[v_0x582063];
          }
        }
        switch (p382) {
          case vF34.ja:
            return v334.eyesDict[p381];
          case vF34.ka:
            return v334.mouthDict[p381];
          case vF34.la:
            return v334.glassesDict[p381];
          case vF34.ma:
            return v334.hatDict[p381];
        }
        return null;
      }
      function f76(p383, p384) {
        for (var vLN051 = 0; vLN051 < p383.length; vLN051++) {
          if (p383[vLN051].id == p384) {
            return vLN051;
          }
        }
        return -1;
      }
      f74.prototype.a = function () {};
      f74.prototype.ha = function (p385) {
        if (!vO4.loading) {
          vO4.PropertyManager = this;
          localStorage.setItem("SaveGameXT", JSON.stringify(vO4));
        }
        switch (p385) {
          case vF34.ia:
            return this.rh;
          case vF34.ja:
            return this.sh;
          case vF34.ka:
            return this.th;
          case vF34.la:
            return this.uh;
          case vF34.ma:
            return this.vh;
        }
        return 0;
      };
      f74.prototype.xh = function (p386) {
        this.wh.push(p386);
        this.yh();
      };
      f74.prototype.Ia = function () {
        if (!f11().p.W()) {
          return f29([32, 33, 34, 35]);
        }
        for (var v335 = f11().p.Ac(), vA13 = [], vLN052 = 0; vLN052 < v335.skinArrayDict.length; vLN052++) {
          var v336 = v335.skinArrayDict[vLN052];
          if (this.Ja(v336.id, vF34.ia)) {
            vA13.push(v336);
          }
        }
        if (vA13.length === 0) {
          return 0;
        } else {
          return vA13[parseInt(vA13.length * Math.random())].id;
        }
      };
      f74.prototype.zh = function () {
        if (f11().p.W) {
          var v337 = f11().p.Ac().skinArrayDict;
          var vF76 = f76(v337, this.rh);
          if (!(vF76 < 0)) {
            for (var v338 = vF76 + 1; v338 < v337.length; v338++) {
              if (this.Ja(v337[v338].id, vF34.ia)) {
                this.rh = v337[v338].id;
                this.yh();
                return;
              }
            }
            for (var vLN053 = 0; vLN053 < vF76; vLN053++) {
              if (this.Ja(v337[vLN053].id, vF34.ia)) {
                this.rh = v337[vLN053].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f74.prototype.Ah = function () {
        if (f11().p.W) {
          var v339 = f11().p.Ac().skinArrayDict;
          var vF762 = f76(v339, this.rh);
          if (!(vF762 < 0)) {
            for (var v340 = vF762 - 1; v340 >= 0; v340--) {
              if (this.Ja(v339[v340].id, vF34.ia)) {
                this.rh = v339[v340].id;
                this.yh();
                return;
              }
            }
            for (var v341 = v339.length - 1; v341 > vF762; v341--) {
              if (this.Ja(v339[v341].id, vF34.ia)) {
                this.rh = v339[v341].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      f74.prototype.Bh = function (p387, p388) {
        if (!f11().p.W() || this.Ja(p387, p388)) {
          switch (p388) {
            case vF34.ia:
              if (this.rh != p387) {
                this.rh = p387;
                this.yh();
              }
              return;
            case vF34.ja:
              if (this.sh != p387) {
                this.sh = p387;
                this.yh();
              }
              return;
            case vF34.ka:
              if (this.th != p387) {
                this.th = p387;
                this.yh();
              }
              return;
            case vF34.la:
              if (this.uh != p387) {
                this.uh = p387;
                this.yh();
              }
              return;
            case vF34.ma:
              if (this.vh != p387) {
                this.vh = p387;
                this.yh();
              }
              return;
          }
        }
      };
      f74.prototype.Ja = function (p389, p390) {
        var vF75 = f75(p389, p390);
        return vF75 != null && (f11().u.P() ? vF75.price == 0 && !vF75.nonbuyable || f11().u.Ch(p389, p390) : vF75.guest);
      };
      f74.prototype.yh = function () {
        for (var vLN054 = 0; vLN054 < this.wh.length; vLN054++) {
          this.wh[vLN054]();
        }
      };
      return f74;
    }();
    var vF34 = function () {
      function f77() {}
      f77.ia = "SKIN";
      f77.ja = "EYES";
      f77.ka = "MOUTH";
      f77.la = "GLASSES";
      f77.ma = "HAT";
      return f77;
    }();
    var vF35 = function () {
      function f78(p391, p392, p393, p394, p395, p396, p397, p398, p399) {
        this.Hc = new vF4._b(p391, new vF4.dc(p392, p393, p394, p395));
        this.Dh = p392;
        this.Eh = p393;
        this.Fh = p394;
        this.Gh = p395;
        this.Hh = p396 || (p398 || p394) / 2;
        this.Ih = p397 || (p399 || p395) / 2;
        this.Jh = p398 || p394;
        this.Kh = p399 || p395;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return f78;
    }();
    var vF36 = function () {
      function f79() {
        this.fn_o = f80;
        this.Fe = new vF4._b(vF4.$b.from("/images/bg-obstacle.png"));
        var v342 = vF4.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128)), new vF4._b(v342, new vF4.dc(0, 0, 128, 128))];
        this.Cf = new vF4._b(f80());
        this.Df = new vF4._b(function () {
          var v343 = vF4.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          v343.wrapMode = vF4.kc.lc;
          return v343;
        }());
        this.Af = new vF4._b(vF4.$b.from("/images/lens.png"));
        var v344 = vF4.$b.from("/images/wear-ability.png");
        var v345 = vF4.$b.from("https://i.imgur.com/EDt862t.png");
        var v346 = vF4.$b.from("https://i.imgur.com/U5sTlhC.png");
        var v347 = vF4.$b.from("https://i.imgur.com/ub4ed3R.png");
        var v348 = vF4.$b.from("https://i.imgur.com/LFiCido.png");
        this.X_x5 = new vF35(v348, 156, 80, 87, 60, 170, 1.5, 128, 128);
        this.X_x10 = new vF35(v348, 158, 200, 95, 55, 265, 128.5, 128, 128);
        this.X_xxlupa = new vF35(v348, 79, 8, 75, 77, 265, 1.5, 128, 128);
        this.Id_mobileguia = new vF35(v347, 0, 0, 87, 74, 350, 63, 128, 128);
        this.emoji_headshot = new vF35(v345, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.emoji_kill = new vF35(v346, 0, 0, 256, 256, 170.5, -163.5, 128, 128);
        this.Ph = new vF35(v344, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Qh = new vF35(v344, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Rh = new vF35(v348, 156, 140, 87, 60, 170, 128.5, 128, 128);
        this.Ug = function () {
          var v349 = window.document.createElement("canvas");
          v349.width = 80;
          v349.height = 80;
          return {
            te: v349,
            Tg: v349.getContext("2d"),
            Hc: new vF4._b(vF4.$b.from(v349))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function f80(p400) {
        var v350 = vF4.$b.from(p400 || "https://i.imgur.com/8ubx4RA.png");
        v350.wrapMode = vF4.kc.lc;
        return v350;
      }
      f79.prototype.a = function (p401) {
        function f81() {
          if (--vLN4 == 0) {
            p401();
          }
        }
        var vLN4 = 4;
        this.Bd = {};
        f81();
        this.yd = {};
        f81();
        this.Sh = [];
        f81();
        this.Th = null;
        f81();
      };
      return f79;
    }();
    var vF37 = function () {
      function f82() {
        this.H = new vF50();
        this.F = new vF52();
        this.Uh = new vF70();
        this.Vh = new vF71();
        this.Wh = new vF56();
        this.Xh = new vF59();
        this.Yh = new vF63();
        this.Zh = new vF60();
        this.xa = new vF64();
        this.$h = new vF65();
        this._h = new vF67();
        this.ai = new vF68();
        this.aa = new vF54();
        this.ua = new vF51();
        this.pa = new vF53();
        this.bi = [];
        this.ci = null;
      }
      function f83(p402, p403) {
        if (p403 != 0) {
          var v351 = p402[p403];
          f26(p402, 0, 1, p403);
          p402[0] = v351;
        }
      }
      function f84(p404, p405) {
        if (p405 != p404.length + 1) {
          var v352 = p404[p405];
          f26(p404, p405 + 1, p405, p404.length - p405 - 1);
          p404[p404.length - 1] = v352;
        }
      }
      function f85(p406, p407) {
        for (var vLN055 = 0; vLN055 < p406.length; vLN055++) {
          if (p406[vLN055] == p407) {
            return vLN055;
          }
        }
        return -1;
      }
      f82.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var vLN056 = 0; vLN056 < this.bi.length; vLN056++) {
          this.bi[vLN056].a();
        }
        this.ci = new vF11(vF49.di);
      };
      f82.prototype.Qa = function (p408, p409) {
        for (var v353 = this.bi.length - 1; v353 >= 0; v353--) {
          this.bi[v353].Pa(p408, p409);
        }
        if (this.bi[0] != this.H && this.bi[0] != this.pa && this.ci != null) {
          this.ci.Pa(p408, p409);
        }
      };
      f82.prototype.Ra = function () {
        for (var v354 = this.bi.length - 1; v354 >= 0; v354--) {
          this.bi[v354].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      f82.prototype.I = function (p410) {
        var vF85 = f85(this.bi, p410);
        if (!(vF85 < 0)) {
          this.bi[0].ei();
          f83(this.bi, vF85);
          this.fi();
        }
      };
      f82.prototype.gi = function () {
        this.bi[0].ei();
        do {
          f84(this.bi, 0);
        } while (this.bi[0].rc != 1);
        this.fi();
      };
      f82.prototype.fi = function () {
        var v355 = this.bi[0];
        v355.ii();
        v355.ji();
        this.ki();
      };
      f82.prototype.li = function () {
        return this.bi.length != 0 && this.bi[0].rc == 1 && this.aa.mi();
      };
      f82.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return f82;
    }();
    var vF39 = function () {
      function f86() {
        this.ag = [];
        this.$f = [];
      }
      f86.Vg = function (p411, p412) {
        return {
          bg: p411,
          M: p412
        };
      };
      f86.Wg = function (p413, p414) {
        return {
          _f: p413,
          M: p414
        };
      };
      return f86;
    }();
    var vF40 = function () {
      function f87() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
      }
      var vLSGuest = "guest";
      f87.prototype.a = function () {
        this.vi();
      };
      f87.prototype.X = function () {
        if (this.qi) {
          return this.si.userId;
        } else {
          return "";
        }
      };
      f87.prototype.wi = function () {
        if (this.qi) {
          return this.si.username;
        } else {
          return "";
        }
      };
      f87.prototype.ga = function () {
        if (this.qi) {
          return this.si.nickname;
        } else {
          return "";
        }
      };
      f87.prototype.xi = function () {
        if (this.qi) {
          return this.si.avatarUrl;
        } else {
          return vLSimagesguestavatarxma;
        }
      };
      f87.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      f87.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      f87.prototype.zi = function () {
        if (this.qi) {
          return this.si.coins;
        } else {
          return 0;
        }
      };
      f87.prototype.Ai = function () {
        if (this.qi) {
          return this.si.level;
        } else {
          return 1;
        }
      };
      f87.prototype.Bi = function () {
        if (this.qi) {
          return this.si.expOnLevel;
        } else {
          return 0;
        }
      };
      f87.prototype.Ci = function () {
        if (this.qi) {
          return this.si.expToNext;
        } else {
          return 50;
        }
      };
      f87.prototype.Di = function () {
        if (this.qi) {
          return this.si.skinId;
        } else {
          return 0;
        }
      };
      f87.prototype.Ei = function () {
        if (this.qi) {
          return this.si.eyesId;
        } else {
          return 0;
        }
      };
      f87.prototype.Fi = function () {
        if (this.qi) {
          return this.si.mouthId;
        } else {
          return 0;
        }
      };
      f87.prototype.Gi = function () {
        if (this.qi) {
          return this.si.glassesId;
        } else {
          return 0;
        }
      };
      f87.prototype.Hi = function () {
        if (this.qi) {
          return this.si.hatId;
        } else {
          return 0;
        }
      };
      f87.prototype.Ii = function () {
        if (this.qi) {
          return this.si.highScore;
        } else {
          return 0;
        }
      };
      f87.prototype.Ji = function () {
        if (this.qi) {
          return this.si.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f87.prototype.Ki = function () {
        if (this.qi) {
          return this.si.kills;
        } else {
          return 0;
        }
      };
      f87.prototype.Li = function () {
        if (this.qi) {
          return this.si.headShots;
        } else {
          return 0;
        }
      };
      f87.prototype.Mi = function () {
        if (this.qi) {
          return this.si.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f87.prototype.Ni = function () {
        if (this.qi) {
          return this.si.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f87.prototype.Oi = function () {
        if (this.qi) {
          return this.si.regDate;
        } else {
          return {};
        }
      };
      f87.prototype.V = function (p415) {
        this.ni.push(p415);
        p415();
      };
      f87.prototype.Pi = function (p416) {
        this.oi.push(p416);
        p416();
      };
      f87.prototype.Qi = function (p417) {
        this.pi.push(p417);
      };
      f87.prototype.Ch = function (p418, p419) {
        var v356 = this.si.propertyList.concat(vO4.pL || []);
        if (!v356) {
          return false;
        }
        for (var vLN057 = 0; vLN057 < v356.length; vLN057++) {
          var v357 = v356[vLN057];
          if (v357.id == p418 && v357.type === p419) {
            return true;
          }
        }
        return false;
      };
      f87.prototype.P = function () {
        return this.qi;
      };
      f87.prototype.ea = function () {
        return this.ri;
      };
      f87.prototype.Q = function (p420) {
        var vThis7 = this;
        if (this.qi) {
          this.Ri(function (p421) {
            if (p421) {
              var v358 = vThis7.zi();
              var v359 = vThis7.Ai();
              vThis7.si = p421;
              f105(vThis7.si);
              vThis7.Si();
              var v360 = vThis7.zi();
              var v361 = vThis7.Ai();
              if (v361 > 1 && v361 != v359) {
                f11().s.aa.Ti(new vF74(v361));
              }
              var v362 = v360 - v358;
              if (v362 >= 20) {
                f11().s.aa.Ti(new vF73(v362));
              }
            }
            if (p420) {
              p420();
            }
          });
        }
      };
      f87.prototype.Ri = function (p422) {
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/getUserData", function (p423) {
          p422(p423.user_data);
        });
      };
      f87.prototype.Ui = function (p424, p425, p426) {
        var vThis8 = this;
        $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/buyProperty?id=" + p424 + "&type=" + p425, function (p427) {
          if (p427.code == 1200) {
            vThis8.Q(p426);
          } else {
            p426();
          }
        }).fail(function () {
          p426();
        });
      };
      f87.prototype.Vi = function () {
        var vThis9 = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (p428) {
          if (p428.status === "connected") {
            if (p428.authResponse && p428.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p428.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
            return;
          }
          FB.login(function (p429) {
            if (p429.status === "connected" && p429.authResponse && p429.authResponse.accessToken) {
              vThis9.Yi("facebook", "fb_" + p429.authResponse.accessToken);
            } else {
              vThis9.Xi();
            }
          });
        });
      };
      f87.prototype.Zi = function () {
        var vThis10 = this;
        this.Wi();
        if (v27 === undefined) {
          this.Xi();
          return;
        }
        v27.then(function () {
          if (v27.isSignedIn.get()) {
            var v363 = v27.currentUser.get();
            vThis10.Yi("google", "gg_" + v363.getAuthResponse().id_token);
            return;
          }
          v27.signIn().then(function (p430) {
            if (p430.error !== undefined) {
              vThis10.Xi();
              return;
            } else if (p430.isSignedIn()) {
              vThis10.Yi("google", "gg_" + p430.getAuthResponse().id_token);
              return;
            } else {
              vThis10.Xi();
              return;
            }
          });
        });
      };
      f87.prototype.Wi = function () {
        var v364 = this.ri;
        var v365 = this.ti;
        this.qi = false;
        this.ri = vLSGuest;
        this.si = {};
        this.ti = null;
        f13(vF12.Oe, "", 60);
        switch (v365) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (v364 !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      f87.prototype.bj = function () {
        console.log("dA");
        if (this.qi) {
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + this.ri + "/deleteAccount", function (p431) {
            if (p431.code === 1200) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      f87.prototype.vi = function () {
        var vF122 = f12(vF12.Oe);
        var vThis11 = this;
        if (vF122 == "facebook") {
          (function f88() {
            if (typeof FB != "undefined") {
              vThis11.Vi();
            } else {
              setTimeout(f88, 100);
            }
          })();
        } else if (vF122 == "google") {
          (function f89() {
            if (v27 !== undefined) {
              vThis11.Zi();
            } else {
              setTimeout(f89, 100);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      f87.prototype.aj = function () {
        var vLN058 = 0;
        for (; vLN058 < this.ni.length; vLN058++) {
          this.ni[vLN058]();
        }
        this.Si();
      };
      f87.prototype.Si = function () {
        var vLN059 = 0;
        for (; vLN059 < this.oi.length; vLN059++) {
          this.oi[vLN059]();
        }
        var v366 = this.pi;
        this.pi = [];
        var vLN060 = 0;
        for (; vLN060 < v366.length; vLN060++) {
          v366[vLN060]();
        }
      };
      f87.prototype.Yi = function (p432, p433) {
        var vThis12 = this;
        var vLN061 = 0;
        var v367 = localStorage.getItem("token__gg");
        if (v367) {
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + v367 + "/login", function (p434) {
            if (p434 && p434.code === 1485 && p434.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate UP  : " + vLN061 + "</h2>");
              f90();
            } else {
              f91(p434);
            }
          }).fail(function () {
            f90();
          });
        } else {
          f90();
        }
        function f90() {
          console.log("Fetching a new token...");
          $.get(vLSHttpsgatewaywormatei + "/pub/wuid/" + p433 + "/login", function (p435) {
            if (p435 && p435.code === 1485 && p435.error === "expired_token") {
              vLN061++;
              console.log("auto login attempt:", vLN061);
              $("#login-view").html("<h2>Auto Login Google Wormate.io  : " + vLN061 + "</h2>");
              f90();
            } else {
              f91(p435);
            }
          }).fail(function () {
            vThis12.Xi();
          });
        }
        function f91(p436) {
          if (p436 && p436.user_data) {
            f105(p436.user_data);
            var v368 = this.ri;
            vThis12.qi = true;
            vThis12.ri = p433;
            vThis12.si = p436.user_data;
            vO4.FB_UserID = p436.user_data.userId;
            vThis12.ti = p432;
            f13(vF12.Oe, vThis12.ti, 60);
            f106();
            for (var vLN062 = 0; vLN062 < vO5.clientesActivos.length; vLN062++) {
              var v369 = vO5.clientesActivos[vLN062].cliente_NOMBRE;
              var v370 = vO5.clientesActivos[vLN062].cliente_ID;
              var v371 = vO5.clientesActivos[vLN062].Client_VisibleSkin;
              var v372 = vO5.clientesActivos[vLN062].Client_VisibleSkin1;
              var v373 = vO5.clientesActivos[vLN062].Client_VisibleSkin2;
              var v374 = vO5.clientesActivos[vLN062].Client_VisibleSkin3;
              var v375 = vO5.clientesActivos[vLN062].Client_VisibleSkin4;
              var v376 = vO5.clientesActivos[vLN062].Client_VisibleSkin5;
              var v377 = vO5.clientesActivos[vLN062].Client_VisibleSkin6;
              var v378 = vO5.clientesActivos[vLN062].Client_VisibleSkin7;
              var v379 = vO5.clientesActivos[vLN062].Client_VisibleSkin8;
              var v380 = vO5.clientesActivos[vLN062].Client_VisibleSkin9;
              var v381 = vO5.clientesActivos[vLN062].Client_VisibleSkin10;
              var v382 = vO5.clientesActivos[vLN062].Client_VisibleSkin11;
              var v383 = vO5.clientesActivos[vLN062].Client_VisibleSkin12;
              var v384 = vO5.clientesActivos[vLN062].Client_VisibleSkin13;
              var v385 = vO5.clientesActivos[vLN062].Client_VisibleSkin14;
              var v386 = vO5.clientesActivos[vLN062].Client_VisibleSkin15;
              var v387 = vO5.clientesActivos[vLN062].Client_VisibleSkin16;
              var v388 = vO5.clientesActivos[vLN062].Client_VisibleSkin17;
              var v389 = vO5.clientesActivos[vLN062].Client_VisibleSkin18;
              var v390 = vO5.clientesActivos[vLN062].Client_VisibleSkin19;
              var v391 = vO5.clientesActivos[vLN062].Client_VisibleSkin20;
              var v392 = vO5.clientesActivos[vLN062].Client_KeyAccecs;
              var v393 = vO5.clientesActivos[vLN062].cliente_DateExpired;
              if (vO4.FB_UserID == 0) {} else if (vO4.FB_UserID == v370) {
                $(".column-left").append("<div class='het-han'> ينتهي التفعيل في : " + v393 + "</div>");
                f111();
                f110();
              } else {}
            }
            vO4.loading = false;
            if (v368 !== p433) {
              vThis12.aj();
            } else {
              vThis12.Si();
            }
            localStorage.setItem("token__gg", p433);
          } else {
            vThis12.Xi();
          }
        }
      };
      f87.prototype.Xi = function () {
        this.Wi();
      };
      f87.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      f87.prototype._i = function () {
        console.log("lo:gg");
        v27.signOut();
      };
      return f87;
    }();
    var vF41 = function () {
      function f92() {
        this.cj = {};
        this.cj[v397] = [1, 0.5, 0.25, 0.5];
        this.cj[v398] = vF4._b.WHITE;
        this.cj[v399] = [0, 0];
        this.cj[v400] = [0, 0];
        var v394 = vF4.cc.from(v403, v404, this.cj);
        this.zf = new vF4.hc(v402, v394);
      }
      var v395 = "a1_" + f30();
      var v396 = "a2_" + f30();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v397 = "u3_" + f30();
      var v398 = "u4_" + f30();
      var v399 = "u5_" + f30();
      var v400 = "u6_" + f30();
      var v401 = "v1_" + f30();
      var v402 = new vF4.gc().addAttribute(v395, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v396, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v403 = "precision mediump float;attribute vec2 " + v395 + ";attribute vec2 " + v396 + ";uniform mat3 " + vLSTranslationMatrix + ";uniform mat3 " + vLSProjectionMatrix + ";varying vec2 " + v401 + ";void main(){" + v401 + "=" + v396 + ";gl_Position=vec4((" + vLSProjectionMatrix + "*" + vLSTranslationMatrix + "*vec3(" + v395 + ",1.0)).xy,0.0,1.0);}";
      var v404 = "precision highp float;varying vec2 " + v401 + ";uniform vec4 " + v397 + ";uniform sampler2D " + v398 + ";uniform vec2 " + v399 + ";uniform vec2 " + v400 + ";void main(){vec2 coord=" + v401 + "*" + v399 + "+" + v400 + ";vec4 v_color_mix=" + v397 + ";gl_FragColor=texture2D(" + v398 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      f92.prototype.Hf = function (p437, p438, p439, p440) {
        var v405 = this.cj[v397];
        v405[0] = p437;
        v405[1] = p438;
        v405[2] = p439;
        v405[3] = p440;
      };
      f92.prototype.Bf = function (p441) {
        this.cj[v398] = p441;
      };
      f92.prototype.Te = function (p442, p443, p444, p445) {
        this.zf.position.x = p442;
        this.zf.position.y = p443;
        this.zf.scale.x = p444;
        this.zf.scale.y = p445;
        var v406 = this.cj[v399];
        v406[0] = p444 * 0.2520615384615385;
        v406[1] = p445 * 0.4357063736263738;
        var v407 = this.cj[v400];
        v407[0] = p442 * 0.2520615384615385;
        v407[1] = p443 * 0.4357063736263738;
      };
      return f92;
    }();
    var vF42 = function () {
      function f93() {
        this.jh = new vF4.ec();
        this.dj = 0;
        this.ej = 0;
      }
      f93.prototype.kh = function (p446) {
        if (p446 && p446.Hc) {
          this.jh.texture = p446.Hc;
          this.jh.anchor.set(p446.Lh, p446.Mh);
          this.dj = p446.Nh;
          this.ej = p446.Oh;
        }
      };
      f93.prototype.oh = function (p447) {
        this.jh.width = p447 * this.dj;
        this.jh.height = p447 * this.ej;
      };
      f93.prototype.fj = function (p448) {
        this.jh.rotation = p448;
      };
      f93.prototype.nh = function (p449, p450) {
        this.jh.position.set(p449, p450);
      };
      f93.prototype.Mg = function (p451) {
        this.jh.visible = p451;
      };
      f93.prototype.gj = function () {
        return this.jh.visible;
      };
      f93.prototype.qh = function (p452) {
        this.jh.alpha = p452;
      };
      f93.prototype.Mf = function () {
        return this.jh;
      };
      f93.prototype.ih = function () {
        f28(this.jh);
      };
      return f93;
    }();
    var vF43 = function () {
      function f94(p453) {
        this.fb = p453;
        this.Mb = new vF43.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0;
        this.ij = 0;
        this.Jb = 1;
        this.jj = 0;
        this.M = 0;
        this.Ff = {};
        this.kj = 0;
        this.lj = new Float32Array(vLN200 * 2);
        this.mj = new Float32Array(vLN200 * 2);
        this.nj = new Float32Array(vLN200 * 2);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      var vLN200 = 200;
      f94.prototype.Kb = function () {
        if (this.pj != null) {
          f28(this.pj.Rf);
        }
        if (this.qj != null) {
          f28(this.qj);
        }
      };
      f94.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = "";
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      f94.prototype.Fg = function (p454) {
        this.Mb = p454;
        this.rj(this.Hb);
      };
      f94.prototype.Mg = function (p455) {
        var v408 = this.Hb;
        this.Hb = p455;
        this.rj(v408);
      };
      f94.prototype.Ig = function (p456) {
        this.M = p456 * 50;
        var vP456 = p456;
        if (p456 > this.fb.cf) {
          vP456 = Math.atan((p456 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var v409 = Math.sqrt(Math.pow(vP456 * 5, 0.707106781186548) * 4 + 25);
        var v410 = Math.min(vLN200, Math.max(3, (v409 - 5) * 5 + 1));
        var v411 = this.kj;
        this.Db = (5 + v409 * 0.9) * 0.025;
        this.kj = Math.floor(v410);
        this.ij = v410 - this.kj;
        if (v411 > 0 && v411 < this.kj) {
          var v412 = this.lj[v411 * 2 - 2];
          var v413 = this.lj[v411 * 2 - 1];
          var v414 = this.mj[v411 * 2 - 2];
          var v415 = this.mj[v411 * 2 - 1];
          var v416 = this.nj[v411 * 2 - 2];
          var v417 = this.nj[v411 * 2 - 1];
          for (var vV411 = v411; vV411 < this.kj; vV411++) {
            this.lj[vV411 * 2] = v412;
            this.lj[vV411 * 2 + 1] = v413;
            this.mj[vV411 * 2] = v414;
            this.mj[vV411 * 2 + 1] = v415;
            this.nj[vV411 * 2] = v416;
            this.nj[vV411 * 2 + 1] = v417;
          }
        }
      };
      f94.prototype.Lg = function (p457, p458) {
        this.kj = p458;
        for (var vLN063 = 0; vLN063 < this.kj; vLN063++) {
          this.lj[vLN063 * 2] = this.mj[vLN063 * 2] = this.nj[vLN063 * 2] = p457();
          this.lj[vLN063 * 2 + 1] = this.mj[vLN063 * 2 + 1] = this.nj[vLN063 * 2 + 1] = p457();
        }
      };
      f94.prototype.Kg = function (p459, p460, p461) {
        this.hj = p461;
        for (var vLN064 = 0; vLN064 < this.kj; vLN064++) {
          this.lj[vLN064 * 2] = this.mj[vLN064 * 2];
          this.lj[vLN064 * 2 + 1] = this.mj[vLN064 * 2 + 1];
        }
        var v418 = p459 - this.mj[0];
        var v419 = p460 - this.mj[1];
        this.sj(v418, v419, this.kj, this.mj);
      };
      f94.prototype.sj = function (p462, p463, p464, p465) {
        var v420 = Math.hypot(p462, p463);
        if (!(v420 <= 0)) {
          var v421 = p465[0];
          var vUndefined10 = undefined;
          p465[0] += p462;
          var v422 = p465[1];
          var vUndefined11 = undefined;
          p465[1] += p463;
          var v423 = this.Db / (this.Db + v420);
          var v424 = 1 - v423 * 2;
          for (var vLN13 = 1, v425 = p464 - 1; vLN13 < v425; vLN13++) {
            vUndefined10 = p465[vLN13 * 2];
            p465[vLN13 * 2] = p465[vLN13 * 2 - 2] * v424 + (vUndefined10 + v421) * v423;
            v421 = vUndefined10;
            vUndefined11 = p465[vLN13 * 2 + 1];
            p465[vLN13 * 2 + 1] = p465[vLN13 * 2 - 1] * v424 + (vUndefined11 + v422) * v423;
            v422 = vUndefined11;
          }
          v423 = this.ij * this.Db / (this.ij * this.Db + v420);
          v424 = 1 - v423 * 2;
          p465[p464 * 2 - 2] = p465[p464 * 2 - 4] * v424 + (p465[p464 * 2 - 2] + v421) * v423;
          p465[p464 * 2 - 1] = p465[p464 * 2 - 3] * v424 + (p465[p464 * 2 - 1] + v422) * v423;
        }
      };
      f94.prototype.Gf = function () {
        return {
          x: this.nj[0],
          y: this.nj[1]
        };
      };
      f94.prototype.Hg = function (p466, p467) {
        var vLN1000000 = 1000000;
        var vP466 = p466;
        var vP467 = p467;
        for (var vLN065 = 0; vLN065 < this.kj; vLN065++) {
          var v426 = this.nj[vLN065 * 2];
          var v427 = this.nj[vLN065 * 2 + 1];
          var v428 = Math.hypot(p466 - v426, p467 - v427);
          if (v428 < vLN1000000) {
            vLN1000000 = v428;
            vP466 = v426;
            vP467 = v427;
          }
        }
        return {
          x: vP466,
          y: vP467,
          distance: vLN1000000
        };
      };
      f94.prototype.vb = function (p468) {
        this.oj = p468;
      };
      f94.prototype.Fb = function (p469, p470) {
        this.Jb = f23(this.Jb, this.Ib ? this.hj ? 0.9 + Math.cos(p469 / 400 * Math.PI) * 0.1 : 1 : 0, p470, 1 / 800);
        this.jj = f23(this.jj, this.Ib ? this.hj ? 1 : 0 : 1, p470, 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      f94.prototype.Gb = function (p471, p472, p473, p474) {
        if (this.Hb && this.Ib) {
          var v429 = Math.pow(0.11112, p472 / 95);
          for (var vLN066 = 0; vLN066 < this.kj; vLN066++) {
            var vF252 = f25(this.lj[vLN066 * 2], this.mj[vLN066 * 2], p473);
            var vF253 = f25(this.lj[vLN066 * 2 + 1], this.mj[vLN066 * 2 + 1], p473);
            this.nj[vLN066 * 2] = f25(vF252, this.nj[vLN066 * 2], v429);
            this.nj[vLN066 * 2 + 1] = f25(vF253, this.nj[vLN066 * 2 + 1], v429);
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, p471, p472, p474);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0];
          this.qj.If.y = this.nj[1] - this.Db * 3;
        }
      };
      f94.prototype.rj = function (p475) {
        if (this.Hb) {
          if (!p475) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            f28(this.pj.Rf);
          }
          if (this.qj != null) {
            f28(this.qj);
          }
        }
      };
      f94.prototype.uj = function () {
        var vF116 = f11();
        if (this.pj == null) {
          this.pj = new vF45();
        } else {
          f28(this.pj.Rf);
        }
        this.pj.hh(vF116.o.fb.af, vF116.p.Dc().ed(this.Mb.cg), vF116.p.Dc().dd(this.Mb.dg), vF116.p.Dc().fd(this.Mb.Bg), vF116.p.Dc().gd(this.Mb.Cg), vF116.p.Dc().hd(this.Mb.Dg), vF116.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new vF44("");
          this.qj.style.fontFamily = "wormup";
          this.qj.anchor.set(0.5);
        } else {
          f28(this.qj);
        }
        this.qj.style.fontSize = 15;
        this.qj.style.fill = vF116.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      f94.Config = function () {
        function f95() {
          this.Lb = 0;
          this.cg = vF18.TEAM_DEFAULT;
          this.dg = 0;
          this.Bg = 0;
          this.Cg = 0;
          this.Dg = 0;
          this.Eg = 0;
          this.ad = "";
        }
        return f95;
      }();
      return f94;
    }();
    var vF44 = function () {
      return f19(vF4.fc, function (p476, p477, p478) {
        vF4.fc.call(this, p476, p477, p478);
        this.If = {
          x: 0,
          y: 0
        };
      });
    }();
    var vF45 = function () {
      function f96() {
        this.Rf = new vF4.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new vF46();
        this.vj.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.wj = 0;
        this.xj = new Array(vLN797);
        this.xj[0] = this.yj(0, new vF42(), new vF42());
        for (var vLN14 = 1; vLN14 < vLN797; vLN14++) {
          this.xj[vLN14] = this.yj(vLN14, new vF42(), new vF42());
        }
        this.zj = 0;
        this.Aj = 0;
        this.Bj = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v430 = Math.PI * 0.1;
      var v431 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v432 = -0.03515625;
      var v433 = -0.0625;
      var vLN05625 = 0.5625;
      var v434 = v431 * 3 + vLN084375;
      var v435 = vLN02578125 - v431 * 3;
      var v436 = v431 + v432;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v437 = v433 + v433;
      var v438 = v432 * 3 + vLN02578125;
      var v439 = vLN084375 - v432 * 3;
      var v440 = v432 + v431;
      f96.prototype.yj = function (p479, p480, p481) {
        var v441 = new vF47(p480, p481);
        p480.jh.zIndex = vLN0001 * ((vLN797 - p479) * 2 + 1 + 3);
        p481.jh.zIndex = vLN0001 * ((vLN797 - p479) * 2 - 2 + 3);
        return v441;
      };
      f96.prototype.hh = function (p482, p483, p484, p485, p486, p487, p488) {
        var v442 = p484.Zc;
        var v443 = p482 == vO18._e ? p483.bd.$c : p484.$c;
        if (v442.length > 0 && v443.length > 0) {
          for (var vLN067 = 0; vLN067 < this.xj.length; vLN067++) {
            this.xj[vLN067].Nf.kh(v442[vLN067 % v442.length]);
            this.xj[vLN067].Pf.kh(v443[vLN067 % v443.length]);
          }
        }
        this.vj.hh(p485, p486, p487, p488);
      };
      var vF46 = function () {
        var vF195 = f19(vF4.Zb, function () {
          vF4.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new vF4.Zb();
          this.Hj = [];
          for (var vLN068 = 0; vLN068 < 4; vLN068++) {
            var v444 = new vF42();
            v444.kh(f11().q.Ph);
            this.Gj.addChild(v444.jh);
            this.Hj.push(v444);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new vF42();
          this.Jj.kh(f11().q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new vF42();
          this.xEmojiType_headshot.kh(f11().q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new vF42();
          this.xEmojiType_kill.kh(f11().q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new vF42();
          this.guia_mobile.kh(f11().q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new vF42();
          this.flx.kh(f11().q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new vF42();
          this.xxx5.kh(f11().q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new vF42();
          this.xxx2.kh(f11().q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new vF42();
          this.xxx10.kh(f11().q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new vF42();
          this.xxxLupatype.kh(f11().q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        vF195.prototype.hh = function (p489, p490, p491, p492) {
          this.Lj(0.002, this.Cj, p489.Zc);
          this.Lj(0.003, this.Dj, p490.Zc);
          this.Lj(0.004, this.Fj, p492.Zc);
          this.Lj(0.005, this.Ej, p491.Zc);
        };
        vF195.prototype.Lj = function (p493, p494, p495) {
          while (p495.length > p494.length) {
            var v445 = new vF42();
            p494.push(v445);
            this.addChild(v445.Mf());
          }
          while (p495.length < p494.length) {
            p494.pop().ih();
          }
          var vP493 = p493;
          for (var vLN069 = 0; vLN069 < p495.length; vLN069++) {
            vP493 += 0.0001;
            var v446 = p494[vLN069];
            v446.kh(p495[vLN069]);
            v446.jh.zIndex = vP493;
          }
        };
        vF195.prototype.mh = function (p496, p497, p498, p499) {
          this.visible = true;
          this.position.set(p496, p497);
          this.rotation = p499;
          for (var vLN070 = 0; vLN070 < this.Cj.length; vLN070++) {
            this.Cj[vLN070].oh(p498);
          }
          for (var vLN071 = 0; vLN071 < this.Dj.length; vLN071++) {
            this.Dj[vLN071].oh(p498);
          }
          for (var vLN072 = 0; vLN072 < this.Ej.length; vLN072++) {
            this.Ej[vLN072].oh(p498);
          }
          for (var vLN073 = 0; vLN073 < this.Fj.length; vLN073++) {
            this.Fj[vLN073].oh(p498);
          }
        };
        vF195.prototype.lh = function () {
          this.visible = false;
        };
        vF195.prototype.Mj = function (p500, p501, p502, p503) {
          this.Gj.visible = true;
          var v447 = p502 / 1000;
          var v448 = 1 / this.Hj.length;
          for (var vLN074 = 0; vLN074 < this.Hj.length; vLN074++) {
            var v449 = 1 - (v447 + v448 * vLN074) % 1;
            this.Hj[vLN074].jh.alpha = 1 - v449;
            this.Hj[vLN074].oh(p501 * (0.5 + v449 * 4.5));
          }
        };
        vF195.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        vF195.prototype.Nj = function (p504, p505, p506, p507) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = f23(this.Jj.jh.alpha, p504.hj ? 0.9 : 0.2, p507, 0.0025);
          this.Jj.oh(p505);
        };
        vF195.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        vF195.prototype.Nflex = function (p508, p509, p510, p511) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = f23(this.Jj.jh.alpha, p508.hj ? 0.9 : 0.2, p511, 0.0025);
          this.flx.oh(p509);
        };
        vF195.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        vF195.prototype.ActiveX5 = function (p512, p513, p514, p515) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = f23(this.Jj.jh.alpha, p512.hj ? 0.9 : 0.2, p515, 0.0025);
          this.xxx5.oh(p513);
        };
        vF195.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        vF195.prototype.ActiveX2 = function (p516, p517, p518, p519) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = f23(this.Jj.jh.alpha, p516.hj ? 0.9 : 0.2, p519, 0.0025);
          this.xxx2.oh(p517);
        };
        vF195.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        vF195.prototype.ActiveX10 = function (p520, p521, p522, p523) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = f23(this.Jj.jh.alpha, p520.hj ? 0.9 : 0.2, p523, 0.0025);
          this.xxx10.oh(p521);
        };
        vF195.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        vF195.prototype.ActiveZlupa = function (p524, p525, p526, p527) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = f23(this.Jj.jh.alpha, p524.hj ? 0.9 : 0.2, p527, 0.0025);
          this.xxxLupatype.oh(p525);
        };
        vF195.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        vF195.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        vF195.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        vF195.prototype.Rx = function (p528, p529, p530, p531) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(p529);
        };
        vF195.prototype.Njh = function (p532, p533, p534, p535) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(p533);
        };
        vF195.prototype.Njk = function (p536, p537, p538, p539) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(p537);
        };
        return vF195;
      }();
      f96.prototype.Oj = function (p540) {
        return this.Aj + this.Bj * Math.sin(p540 * v430 - this.zj);
      };
      f96.prototype.tj = function (p541, p542, p543, p544) {
        var v450 = p541.Db * 2;
        var v451 = p541.nj;
        var v452 = p541.kj;
        var v453 = v452 * 4 - 3;
        var vV453 = v453;
        this.zj = p542 / 400 * Math.PI;
        this.Aj = v450 * 1.5;
        this.Bj = v450 * 0.15 * p541.jj;
        var vUndefined12 = undefined;
        var vUndefined13 = undefined;
        var vUndefined14 = undefined;
        var vUndefined15 = undefined;
        var vUndefined16 = undefined;
        var vUndefined17 = undefined;
        var vUndefined18 = undefined;
        var vUndefined19 = undefined;
        vUndefined13 = v451[0];
        vUndefined17 = v451[1];
        if (p544(vUndefined13, vUndefined17)) {
          vUndefined14 = v451[2];
          vUndefined18 = v451[3];
          vUndefined15 = v451[4];
          vUndefined19 = v451[5];
          var v454 = Math.atan2(vUndefined19 + vUndefined17 * 2 - vUndefined18 * 3, vUndefined15 + vUndefined13 * 2 - vUndefined14 * 3);
          this.vj.mh(vUndefined13, vUndefined17, v450, v454);
          this.xj[0].mh(vUndefined13, vUndefined17, v450, this.Oj(0), v454);
          this.xj[1].mh(v434 * vUndefined13 + v435 * vUndefined14 + v436 * vUndefined15, v434 * vUndefined17 + v435 * vUndefined18 + v436 * vUndefined19, v450, this.Oj(1), vF47.angleBetween(this.xj[0], this.xj[2]));
          this.xj[2].mh(vLN0375 * vUndefined13 + vLN075 * vUndefined14 + v437 * vUndefined15, vLN0375 * vUndefined17 + vLN075 * vUndefined18 + v437 * vUndefined19, v450, this.Oj(2), vF47.angleBetween(this.xj[1], this.xj[3]));
          this.xj[3].mh(v438 * vUndefined13 + v439 * vUndefined14 + v440 * vUndefined15, v438 * vUndefined17 + v439 * vUndefined18 + v440 * vUndefined19, v450, this.Oj(3), vF47.angleBetween(this.xj[2], this.xj[4]));
        } else {
          this.vj.lh();
          this.xj[0].lh();
          this.xj[1].lh();
          this.xj[2].lh();
          this.xj[3].lh();
        }
        var vLN42 = 4;
        for (var vLN2 = 2, v455 = v452 * 2 - 4; vLN2 < v455; vLN2 += 2) {
          vUndefined13 = v451[vLN2];
          vUndefined17 = v451[vLN2 + 1];
          if (p544(vUndefined13, vUndefined17)) {
            vUndefined12 = v451[vLN2 - 2];
            vUndefined16 = v451[vLN2 - 1];
            vUndefined14 = v451[vLN2 + 2];
            vUndefined18 = v451[vLN2 + 3];
            vUndefined15 = v451[vLN2 + 4];
            vUndefined19 = v451[vLN2 + 5];
            this.xj[vLN42].mh(vUndefined13, vUndefined17, v450, this.Oj(vLN42), vF47.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v431 * vUndefined12 + vLN084375 * vUndefined13 + vLN02578125 * vUndefined14 + v432 * vUndefined15, v431 * vUndefined16 + vLN084375 * vUndefined17 + vLN02578125 * vUndefined18 + v432 * vUndefined19, v450, this.Oj(vLN42), vF47.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v433 * vUndefined12 + vLN05625 * vUndefined13 + vLN05625 * vUndefined14 + v433 * vUndefined15, v433 * vUndefined16 + vLN05625 * vUndefined17 + vLN05625 * vUndefined18 + v433 * vUndefined19, v450, this.Oj(vLN42), vF47.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
            this.xj[vLN42].mh(v432 * vUndefined12 + vLN02578125 * vUndefined13 + vLN084375 * vUndefined14 + v431 * vUndefined15, v432 * vUndefined16 + vLN02578125 * vUndefined17 + vLN084375 * vUndefined18 + v431 * vUndefined19, v450, this.Oj(vLN42), vF47.angleBetween(this.xj[vLN42 - 1], this.xj[vLN42 + 1]));
            vLN42++;
          } else {
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
            this.xj[vLN42].lh();
            vLN42++;
          }
        }
        vUndefined13 = v451[v452 * 2 - 4];
        vUndefined17 = v451[v452 * 2 - 3];
        if (p544(vUndefined13, vUndefined17)) {
          vUndefined12 = v451[v452 * 2 - 6];
          vUndefined16 = v451[v452 * 2 - 5];
          vUndefined14 = v451[v452 * 2 - 2];
          vUndefined18 = v451[v452 * 2 - 1];
          this.xj[v453 - 5].mh(vUndefined13, vUndefined17, v450, this.Oj(v453 - 5), vF47.angleBetween(this.xj[v453 - 6], this.xj[v453 - 4]));
          this.xj[v453 - 4].mh(v440 * vUndefined12 + v439 * vUndefined13 + v438 * vUndefined14, v440 * vUndefined16 + v439 * vUndefined17 + v438 * vUndefined18, v450, this.Oj(v453 - 4), vF47.angleBetween(this.xj[v453 - 5], this.xj[v453 - 3]));
          this.xj[v453 - 3].mh(v437 * vUndefined12 + vLN075 * vUndefined13 + vLN0375 * vUndefined14, v437 * vUndefined16 + vLN075 * vUndefined17 + vLN0375 * vUndefined18, v450, this.Oj(v453 - 3), vF47.angleBetween(this.xj[v453 - 4], this.xj[v453 - 2]));
          this.xj[v453 - 2].mh(v436 * vUndefined12 + v435 * vUndefined13 + v434 * vUndefined14, v436 * vUndefined16 + v435 * vUndefined17 + v434 * vUndefined18, v450, this.Oj(v453 - 2), vF47.angleBetween(this.xj[v453 - 3], this.xj[v453 - 1]));
          this.xj[v453 - 1].mh(vUndefined14, vUndefined18, v450, this.Oj(v453 - 1), vF47.angleBetween(this.xj[v453 - 2], this.xj[v453 - 1]));
        } else {
          this.xj[v453 - 5].lh();
          this.xj[v453 - 4].lh();
          this.xj[v453 - 3].lh();
          this.xj[v453 - 2].lh();
          this.xj[v453 - 1].lh();
        }
        if (this.wj == 0 && vV453 > 0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0 && vV453 == 0) {
          f28(this.vj);
        }
        while (this.wj < vV453) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 1;
        }
        while (this.wj > vV453) {
          this.wj -= 1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var v456 = p541.Ff[vF5.MAGNETIC_TYPE];
        if (this.xj[0].gj() && v456 != null && v456.sc) {
          this.vj.Mj(p541, v450, p542, p543);
        } else {
          this.vj.Ij();
        }
        var v457 = p541.Ff[vF5.VELOCITY_TYPE];
        if (this.xj[0].gj() && v457 != null && v457.sc) {
          this.vj.Nj(p541, v450, p542, p543);
        } else {
          this.vj.Kj();
        }
        if (vO4.ModeStremeremoj) {} else {
          if (vO4.emoji_headshot && p541 && p541.Mb && p541.Mb.Mb) {
            this.vj.Njh(p541, v450, p542, p543);
          } else {
            this.vj.xzs();
          }
          if (vO4.emoji_kill && p541 && p541.Mb && p541.Mb.Mb) {
            this.vj.Njk(p541, v450, p542, p543);
          } else {
            this.vj.zas();
          }
        }
        ;
        if (vO4.mobile && vO4.arrow && p541 && p541.Mb && p541.Mb.Mb) {
          this.vj.Rx(p541, v450, p542, p543);
        }
        var v458 = p541.Ff[vF5.FLEXIBLE_TYPE];
        if (this.xj[0].gj() && v458 != null && v458.sc) {
          this.vj.Nflex(p541, v450, p542, p543);
        } else {
          this.vj.flexx();
        }
        var v459 = p541.Ff[vF5.X5_TYPE];
        if (this.xj[0].gj() && v459 != null && v459.sc) {
          this.vj.ActiveX5(p541, v450, p542, p543);
        } else {
          this.vj.xXx5();
        }
        var v460 = p541.Ff[vF5.X2_TYPE];
        if (this.xj[0].gj() && v460 != null && v460.sc) {
          this.vj.ActiveX2(p541, v450, p542, p543);
        } else {
          this.vj.xXx2();
        }
        var v461 = p541.Ff[vF5.X10_TYPE];
        if (this.xj[0].gj() && v461 != null && v461.sc) {
          this.vj.ActiveX10(p541, v450, p542, p543);
        } else {
          this.vj.xXx10();
        }
        var v462 = p541.Ff[vF5.ZOOM_TYPE];
        if (this.xj[0].gj() && v462 != null && v462.sc) {
          this.vj.ActiveZlupa(p541, v450, p542, p543);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var vF47 = function () {
        function f97(p545, p546) {
          this.Nf = p545;
          this.Nf.Mg(false);
          this.Pf = p546;
          this.Pf.Mg(false);
        }
        f97.prototype.mh = function (p547, p548, p549, p550, p551) {
          this.Nf.Mg(true);
          this.Nf.nh(p547, p548);
          this.Nf.oh(p549);
          this.Nf.fj(p551);
          this.Pf.Mg(true);
          this.Pf.nh(p547, p548);
          this.Pf.oh(p550);
          this.Pf.fj(p551);
        };
        f97.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        f97.prototype.gj = function () {
          return this.Nf.gj();
        };
        f97.angleBetween = function (p552, p553) {
          return Math.atan2(p552.Nf.jh.position.y - p553.Nf.jh.position.y, p552.Nf.jh.position.x - p553.Nf.jh.position.x);
        };
        return f97;
      }();
      return f96;
    }();
    var vF48 = function () {
      function f98(p554) {
        this.se = p554;
        this.te = p554.get()[0];
        this.ue = new vF4.ac({
          view: this.te,
          transparent: true
        });
        this.sc = false;
        this.Pj = new vF45();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0;
        this.Rj = 0;
        this.Ng = 1;
        this.rh = 0;
        this.sh = 0;
        this.th = 0;
        this.uh = 0;
        this.vh = 0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var vThis13 = this;
        f11().p.ca(function () {
          if (f11().p.W()) {
            vThis13.Fb();
          }
        });
      }
      f98.prototype.Fb = function () {
        var vF117 = f11();
        this.Pj.hh(vO18.$e, null, vF117.p.Dc().dd(this.rh), vF117.p.Dc().fd(this.sh), vF117.p.Dc().gd(this.th), vF117.p.Dc().hd(this.uh), vF117.p.Dc().jd(this.vh));
      };
      f98.prototype.Le = function (p555) {
        this.sc = p555;
      };
      f98.prototype.ak = function (p556, p557, p558) {
        this.rh = p556;
        this.Sj = p557;
        this.Xj = p558;
        this.Fb();
      };
      f98.prototype.bk = function (p559, p560, p561) {
        this.sh = p559;
        this.Tj = p560;
        this.Yj = p561;
        this.Fb();
      };
      f98.prototype.ck = function (p562, p563, p564) {
        this.th = p562;
        this.Uj = p563;
        this.Zj = p564;
        this.Fb();
      };
      f98.prototype.dk = function (p565, p566, p567) {
        this.uh = p565;
        this.Vj = p566;
        this.$j = p567;
        this.Fb();
      };
      f98.prototype.ek = function (p568, p569, p570) {
        this.vh = p568;
        this.Wj = p569;
        this._j = p570;
        this.Fb();
      };
      f98.prototype.Ra = function () {
        var v463 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = v463;
        this.te.width = v463 * this.Qj;
        this.te.height = v463 * this.Rj;
        this.Ng = this.Rj / 4;
        var vF212 = f21(1, this.Pj.xj.length, Math.floor(this.Qj / this.Ng) * 2 - 5);
        if (this.Pj.wj != vF212) {
          for (var vVF212 = vF212; vVF212 < this.Pj.xj.length; vVF212++) {
            this.Pj.xj[vVF212].lh();
          }
          while (this.Pj.wj < vF212) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 1;
          }
          while (this.Pj.wj > vF212) {
            this.Pj.wj -= 1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      f98.prototype.Pa = function () {
        if (this.sc) {
          if (f11().p.W) {
            var v464 = Date.now();
            var v465 = v464 / 200;
            var v466 = Math.sin(v465);
            var v467 = this.Ng;
            var v468 = this.Ng * 1.5;
            var v469 = this.Qj - (this.Qj - v467 * 0.5 * (this.Pj.wj - 1)) * 0.5;
            var v470 = this.Rj * 0.5;
            var vLN076 = 0;
            var vLN077 = 0;
            for (var v471 = -1; v471 < this.Pj.wj; v471++) {
              var vV471 = v471;
              var v472 = Math.cos(vV471 * 1 / 12 * Math.PI - v465) * (1 - Math.pow(16, vV471 * -1 / 12));
              if (v471 >= 0) {
                var v473 = v469 + v467 * -0.5 * vV471;
                var v474 = v470 + v467 * 0.5 * v472;
                var v475 = v467 * 2;
                var v476 = v468 * 2;
                var v477 = Math.atan2(vLN077 - v472, vV471 - vLN076);
                if (v471 == 0) {
                  this.Pj.vj.mh(v473, v474, v475, v477);
                }
                this.Pj.xj[v471].mh(v473, v474, v475, v476, v477);
                var v478 = this.Sj ? this.Xj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Xj ? 0.4 : 1;
                this.Pj.xj[v471].Nf.qh(v478);
                this.Pj.xj[v471].Pf.qh(v478);
              }
              vLN076 = vV471;
              vLN077 = v472;
            }
            for (var vLN078 = 0; vLN078 < this.Pj.vj.Cj.length; vLN078++) {
              var v479 = this.Tj ? this.Yj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Yj ? 0.4 : 1;
              this.Pj.vj.Cj[vLN078].qh(v479);
            }
            for (var vLN079 = 0; vLN079 < this.Pj.vj.Dj.length; vLN079++) {
              var v480 = this.Uj ? this.Zj ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.Zj ? 0.4 : 1;
              this.Pj.vj.Dj[vLN079].qh(v480);
            }
            for (var vLN080 = 0; vLN080 < this.Pj.vj.Ej.length; vLN080++) {
              var v481 = this.Vj ? this.$j ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this.$j ? 0.4 : 1;
              this.Pj.vj.Ej[vLN080].qh(v481);
            }
            for (var vLN081 = 0; vLN081 < this.Pj.vj.Fj.length; vLN081++) {
              var v482 = this.Wj ? this._j ? 0.4 + v466 * 0.2 : 0.9 + v466 * 0.1 : this._j ? 0.4 : 1;
              this.Pj.vj.Fj[vLN081].qh(v482);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return f98;
    }();
    var vF49 = function () {
      function f99(p571) {
        this.rc = p571;
      }
      f99.fk = $("#game-view");
      f99.gk = $("#results-view");
      f99.hk = $("#main-menu-view");
      f99.ik = $("#popup-view");
      f99.jk = $("#toaster-view");
      f99.kk = $("#loading-view");
      f99.lk = $("#stretch-box");
      f99.mk = $("#game-canvas");
      f99.di = $("#background-canvas");
      f99.nk = $("#social-buttons");
      f99.ok = $("#markup-wrap");
      f99.prototype.a = function () {};
      f99.prototype.ii = function () {};
      f99.prototype.ji = function () {};
      f99.prototype.ei = function () {};
      f99.prototype.Ra = function () {};
      f99.prototype.Pa = function (p572, p573) {};
      return f99;
    }();
    var vF50 = function () {
      function f100(p574, p575, p576, p577, p578, p579) {
        var v483 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p574 + "</span></div>";
        var v$3 = $(v483);
        v$3.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p575,
              name: p576,
              caption: p577,
              description: p578,
              picture: p579
            }, function () {});
          }
        });
        return v$3;
      }
      var v$4 = $("#final-caption");
      var v$5 = $("#final-continue");
      var v$6 = $("#congrats-bg");
      var v$7 = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var v$8 = $("#final-share-fb");
      var v$9 = $("#final-message");
      var v$10 = $("#final-score");
      var v$11 = $("#final-place");
      var v$12 = $("#final-board");
      var vF196 = f19(vF49, function () {
        vF49.call(this, 0);
        var vThis14 = this;
        var vF118 = f11();
        var v484 = vF49.mk.get()[0];
        v$8.toggle(v543.qk);
        v$4.text(f14("index.game.result.title"));
        v$5.text(f14("index.game.result.continue"));
        v$5.click(function () {
          vF118.r.Cd();
          vF118.f.Ma.c();
          vF118.r.G(vF9.AudioState.F);
          vF118.s.I(vF118.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $("html").keydown(function (p580) {
          if (p580.keyCode == 32) {
            vThis14.rk = true;
          }
          if (p580.keyCode == 107) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (p580.keyCode == 109) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 1000);
          }
          if (vO4.KeyCodeRespawn == p580.keyCode) {
            vThis14.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $("#mm-action-play").click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 1000);
          }
        }).keyup(function (p581) {
          if (p581.keyCode == 32) {
            vThis14.rk = false;
          }
        });
        v484.addEventListener("touchmove", function (p582) {
          if (!vF2() || !vO4.gamePad.checked) {
            if (p582 === p582 || window.event) {
              p582 = p582.touches[0];
              if (p582.clientX !== undefined) {
                vThis14.sk = Math.atan2(p582.clientY - v484.offsetHeight * 0.5, p582.clientX - v484.offsetWidth * 0.5);
              } else {
                vThis14.sk = Math.atan2(p582.pageY - v484.offsetHeight * 0.5, p582.pageX - v484.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        v484.addEventListener("touchstart", function (p583) {
          if (p583 === p583 || window.event) {
            vThis14.rk = p583.touches.length >= 2;
          }
          p583.preventDefault();
        }, true);
        v484.addEventListener("touchend", function (p584) {
          if (p584 === p584 || window.event) {
            vThis14.rk = p584.touches.length >= 2;
          }
        }, true);
        v484.addEventListener("mousemove", function (p585) {
          if (!v5 && p585.clientX !== undefined) {
            vThis14.sk = Math.atan2(p585.clientY - v484.offsetHeight * 0.5, p585.clientX - v484.offsetWidth * 0.5);
          }
        }, true);
        v484.addEventListener("mousedown", function (p586) {
          vThis14.rk = true;
        }, true);
        v484.addEventListener("mouseup", function (p587) {
          vThis14.rk = false;
        }, true);
        this.wb = new vF20(vF49.mk);
        this.cb = 0;
        this.sk = 0;
        this.rk = false;
        vO3.eventoPrincipal = vThis14;
      });
      vF196.prototype.a = function () {};
      vF196.prototype.ii = function () {
        if (this.cb == 0) {
          vF49.fk.stop();
          vF49.fk.fadeIn(500);
          vF49.gk.stop();
          vF49.gk.fadeOut(1);
          vF49.hk.stop();
          vF49.hk.fadeOut(50);
          vF49.ik.stop();
          vF49.ik.fadeOut(50);
          vF49.jk.stop();
          vF49.jk.fadeOut(50);
          vF49.kk.stop();
          vF49.kk.fadeOut(50);
          vF49.lk.stop();
          vF49.lk.fadeOut(1);
          vF49.di.stop();
          vF49.di.fadeOut(50);
          vF11.Le(false);
          vF49.nk.stop();
          vF49.nk.fadeOut(50);
          vF49.ok.stop();
          vF49.ok.fadeOut(50);
        } else {
          vF49.fk.stop();
          vF49.fk.fadeIn(500);
          vF49.gk.stop();
          vF49.gk.fadeIn(500);
          vF49.hk.stop();
          vF49.hk.fadeOut(50);
          vF49.ik.stop();
          vF49.ik.fadeOut(50);
          vF49.jk.stop();
          vF49.jk.fadeOut(50);
          vF49.kk.stop();
          vF49.kk.fadeOut(50);
          vF49.lk.stop();
          vF49.lk.fadeOut(1);
          vF49.di.stop();
          vF49.di.fadeOut(50);
          vF11.Le(false);
          vF49.nk.stop();
          vF49.nk.fadeOut(50);
          vF49.ok.stop();
          vF49.ok.fadeOut(50);
        }
      };
      vF196.prototype.J = function () {
        this.cb = 0;
        return this;
      };
      vF196.prototype.Fa = function () {
        v$6.hide();
        setTimeout(function () {
          v$6.fadeIn(500);
        }, 3000);
        v$7.hide();
        setTimeout(function () {
          v$7.fadeIn(500);
        }, 500);
        this.cb = 1;
        return this;
      };
      vF196.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 1) {
          f11().r.Gd();
        }
      };
      vF196.prototype.Ra = function () {
        this.wb.Ra();
      };
      vF196.prototype.Pa = function (p588, p589) {
        this.wb.Pa(p588, p589);
      };
      vF196.prototype.Da = function (p590, p591, p592) {
        var vUndefined20 = undefined;
        var vUndefined21 = undefined;
        var vUndefined22 = undefined;
        if (p591 >= 1 && p591 <= 10) {
          vUndefined20 = f14("index.game.result.place.i" + p591);
          vUndefined21 = f14("index.game.result.placeInBoard");
          vUndefined22 = f14("index.game.social.shareResult.messGood").replace("{0}", p592).replace("{1}", p590).replace("{2}", vUndefined20);
        } else {
          vUndefined20 = "";
          vUndefined21 = f14("index.game.result.tryHit");
          vUndefined22 = f14("index.game.social.shareResult.messNorm").replace("{0}", p592).replace("{1}", p590);
        }
        v$9.html(f14("index.game.result.your"));
        v$10.html(p590);
        v$11.html(vUndefined20);
        v$12.html(vUndefined21);
        if (v543.qk) {
          var vF145 = f14("index.game.result.share");
          f14("index.game.social.shareResult.caption");
          v$8.empty().append(f100(vF145, "https://wormate.io", "wormate.io", vUndefined22, vUndefined22, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      vF196.prototype.T = function () {
        return this.sk;
      };
      vF196.prototype.U = function () {
        return this.rk;
      };
      return vF196;
    }();
    var vF51 = function () {
      var v$13 = $("#loading-worm-a");
      var v$14 = $("#loading-worm-b");
      var v$15 = $("#loading-worm-c");
      var vA14 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var vF197 = f19(vF49, function () {
        vF49.call(this, 0);
      });
      vF197.prototype.a = function () {};
      vF197.prototype.ii = function () {
        vF49.fk.stop();
        vF49.fk.fadeOut(50);
        vF49.gk.stop();
        vF49.gk.fadeOut(50);
        vF49.hk.stop();
        vF49.hk.fadeOut(50);
        vF49.ik.stop();
        vF49.ik.fadeOut(50);
        vF49.jk.stop();
        vF49.jk.fadeOut(50);
        vF49.kk.stop();
        vF49.kk.fadeIn(500);
        vF49.lk.stop();
        vF49.lk.fadeIn(1);
        vF49.di.stop();
        vF49.di.fadeIn(500);
        vF11.Le(true);
        vF49.nk.stop();
        vF49.nk.fadeOut(50);
        vF49.ok.stop();
        vF49.ok.fadeOut(50);
      };
      vF197.prototype.ji = function () {
        this.tk();
      };
      vF197.prototype.tk = function () {
        v$13.css("background-position", "100% 200%");
        for (var vLN082 = 0; vLN082 < vA14.length; vLN082++) {
          var v485 = Math.floor(Math.random() * vA14.length);
          var v486 = vA14[vLN082];
          vA14[vLN082] = vA14[v485];
          vA14[v485] = v486;
        }
        v$13.css("background-position", vA14[0]);
        v$14.css("background-position", vA14[1]);
        v$15.css("background-position", vA14[2]);
      };
      return vF197;
    }();
    var vF52 = function () {
      $("#mm-event-text");
      var v$16 = $("#mm-skin-canv");
      var v$17 = $("#mm-skin-prev");
      var v$18 = $("#mm-skin-next");
      var v$19 = $("#mm-skin-over");
      var v$20 = $("#mm-skin-over-button-list");
      var v$21 = $("#mm-params-nickname");
      var v$22 = $("#mm-params-game-mode");
      var v$23 = $("#mm-action-buttons");
      var v$24 = $("#mm-action-play");
      var v$25 = $("#mm-action-guest");
      var v$26 = $("#mm-action-login");
      var v$27 = $("#mm-player-info");
      var v$28 = $("#mm-store");
      var v$29 = $("#mm-leaders");
      var v$30 = $("#mm-settings");
      var v$31 = $("#mm-coins-box");
      var v$32 = $("#mm-player-avatar");
      var v$33 = $("#mm-player-username");
      var v$34 = $("#mm-coins-val");
      var v$35 = $("#mm-player-exp-bar");
      var v$36 = $("#mm-player-exp-val");
      var v$37 = $("#mm-player-level");
      var vF198 = f19(vF49, function () {
        vF49.call(this, 1);
        var vF119 = f11();
        this.uk = new vF48(v$16);
        v$22.click(function () {
          vF119.r.Cd();
        });
        v$16.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.$h);
          }
        });
        v$17.click(function () {
          vF119.r.Cd();
          vF119.t.Ah();
        });
        v$18.click(function () {
          vF119.r.Cd();
          vF119.t.zh();
        });
        v$21.keypress(function (p593) {
          if (p593.keyCode == 13) {
            vF119.na();
          }
        });
        v$24.click(function () {
          vF119.r.Cd();
          vF119.na();
        });
        v$25.click(function () {
          vF119.r.Cd();
          vF119.na();
        });
        v$26.click(function () {
          vF119.r.Cd();
          vF119.s.I(vF119.s.Zh);
        });
        v$30.click(function () {
          vF119.r.Cd();
          vF119.s.I(vF119.s.xa);
        });
        v$27.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Yh);
          }
        });
        v$29.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Xh);
          }
        });
        v$28.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s._h);
          }
        });
        v$31.click(function () {
          if (vF119.u.P()) {
            vF119.r.Cd();
            vF119.s.I(vF119.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("<div id=\"final-continue1\">الصفحة الرئيسيه</div>");
        $("#final-continue").after("<div id=\"final-replay\">رسبون</div>");
        $("#final-replay").click(function () {
          let vV4 = v4;
          if (vV4) {
            anApp.r.Hd();
            anApp.sa(vV4);
          }
        });
        $("#final-continue").html("<div id='final-continue1'>الصفحة الرئيسيه</div>");
        $("#final-continue").after("<div id='final-replay'>رسبون</div>");
        $("#final-continue1").on("click", function () {
          var v487 = localStorage.getItem("starredNickname");
          if (v487) {
            setTimeout(function () {
              $("#mm-params-nickname").val(v487);
            }, 50);
          }
        });
        $("#final-replay").on("click", function () {
          var v488 = localStorage.getItem("starredNickname");
          handleRespawn();
          if (v488) {
            setTimeout(function () {
              $("#mm-params-nickname").val(v488);
            }, 50);
          }
        });
        var vF123 = f12(vF12.va);
        if (vF123 != "ARENA" && vF123 != "TEAM2") {
          vF123 = "ARENA";
        }
        v$22.val(vF123);
      });
      vF198.prototype.a = function () {
        var vF1110 = f11();
        var vThis15 = this;
        vF1110.u.V(function () {
          vF1110.s.F.xk();
        });
        vF1110.u.Pi(function () {
          if (vF1110.u.P()) {
            vF1110.t.Bh(vF1110.u.Di(), vF34.ia);
            vF1110.t.Bh(vF1110.u.Ei(), vF34.ja);
            vF1110.t.Bh(vF1110.u.Fi(), vF34.ka);
            vF1110.t.Bh(vF1110.u.Gi(), vF34.la);
            vF1110.t.Bh(vF1110.u.Hi(), vF34.ma);
          } else {
            vF1110.t.Bh(vF1110.Ga(), vF34.ia);
            vF1110.t.Bh(0, vF34.ja);
            vF1110.t.Bh(0, vF34.ka);
            vF1110.t.Bh(0, vF34.la);
            vF1110.t.Bh(0, vF34.ma);
          }
        });
        vF1110.u.Pi(function () {
          v$24.toggle(vF1110.u.P());
          v$26.toggle(!vF1110.u.P());
          v$25.toggle(!vF1110.u.P());
          v$29.toggle(vF1110.u.P());
          v$28.toggle(vF1110.u.P());
          v$31.toggle(vF1110.u.P());
          if (vF1110.u.P()) {
            v$19.hide();
            v$33.html(vF1110.u.wi());
            v$32.attr("src", vF1110.u.xi());
            v$34.html(vF1110.u.zi());
            v$35.width(vF1110.u.Bi() * 100 / vF1110.u.Ci() + "%");
            v$36.html(vF1110.u.Bi() + " / " + vF1110.u.Ci());
            v$37.html(vF1110.u.Ai());
            v$21.val(vF1110.u.ga());
          } else {
            v$19.toggle(v543.qk && !vF1110.Ha());
            v$33.html(v$33.data("guest"));
            v$32.attr("src", vLSimagesguestavatarxma);
            v$34.html("10");
            v$35.width("0");
            v$36.html("");
            v$37.html(1);
            v$21.val(f12(vF12.Aa));
          }
        });
        vF1110.t.xh(function () {
          vThis15.uk.ak(vF1110.t.ha(vF34.ia), false, false);
          vThis15.uk.bk(vF1110.t.ha(vF34.ja), false, false);
          vThis15.uk.ck(vF1110.t.ha(vF34.ka), false, false);
          vThis15.uk.dk(vF1110.t.ha(vF34.la), false, false);
          vThis15.uk.ek(vF1110.t.ha(vF34.ma), false, false);
        });
      };
      vF198.prototype.ii = function () {
        vF49.fk.stop();
        vF49.fk.fadeOut(50);
        vF49.gk.stop();
        vF49.gk.fadeOut(50);
        vF49.hk.stop();
        vF49.hk.fadeIn(500);
        vF49.ik.stop();
        vF49.ik.fadeOut(50);
        vF49.jk.stop();
        vF49.jk.fadeOut(50);
        vF49.kk.stop();
        vF49.kk.fadeOut(50);
        vF49.lk.stop();
        vF49.lk.fadeIn(1);
        vF49.di.stop();
        vF49.di.fadeIn(500);
        vF11.Le(true);
        vF49.nk.stop();
        vF49.nk.fadeIn(500);
        vF49.ok.stop();
        vF49.ok.fadeIn(500);
      };
      vF198.prototype.ji = function () {
        f11().r.Dd();
        this.uk.Le(true);
      };
      vF198.prototype.ei = function () {
        this.uk.Le(false);
      };
      vF198.prototype.Ra = function () {
        this.uk.Ra();
      };
      vF198.prototype.Pa = function (p594, p595) {
        this.uk.Pa();
      };
      vF198.prototype.ga = function () {
        return v$21.val();
      };
      vF198.prototype.D = function () {
        return v$22.val();
      };
      vF198.prototype.xk = function () {
        v$23.show();
      };
      vF198.prototype.vk = function () {
        var v489 = $("#mm-advice-cont").children();
        var vLN083 = 0;
        setInterval(function () {
          v489.eq(vLN083).fadeOut(500, function () {
            if (++vLN083 >= v489.length) {
              vLN083 = 0;
            }
            v489.eq(vLN083).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      vF198.prototype.wk = function () {
        function f101() {
          vF1111.Ka(true);
          setTimeout(function () {
            v$19.hide();
          }, 3000);
        }
        var vF1111 = f11();
        if (v543.qk && !vF1111.Ha()) {
          v$19.show();
          var vF146 = f14("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(f14("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(f14("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$20.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + vF146 + "</span></a>").click(f101));
          v$20.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + vF146 + "</span></a>").click(f101));
        }
      };
      return vF198;
    }();
    var vF53 = function () {
      var vF199 = f19(vF49, function () {
        vF49.call(this, 0);
      });
      vF199.prototype.a = function () {};
      vF199.prototype.ii = function () {
        vF49.fk.stop();
        vF49.fk.fadeOut(50);
        vF49.gk.stop();
        vF49.gk.fadeOut(50);
        vF49.hk.stop();
        vF49.hk.fadeOut(50);
        vF49.ik.stop();
        vF49.ik.fadeOut(50);
        vF49.jk.stop();
        vF49.jk.fadeOut(50);
        vF49.kk.stop();
        vF49.kk.fadeOut(50);
        vF49.lk.stop();
        vF49.lk.fadeOut(1);
        vF49.di.stop();
        vF49.di.fadeOut(50);
        vF11.Le(false);
        vF49.nk.stop();
        vF49.nk.fadeOut(50);
        vF49.ok.stop();
        vF49.ok.fadeOut(50);
      };
      return vF199;
    }();
    var vF54 = function () {
      var v$38 = $("#toaster-stack");
      var vF1910 = f19(vF49, function () {
        vF49.call(this, 0);
        this.yk = [];
        this.zk = null;
      });
      vF1910.prototype.a = function () {};
      vF1910.prototype.ii = function () {
        vF49.fk.stop();
        vF49.fk.fadeOut(50);
        vF49.gk.stop();
        vF49.gk.fadeOut(50);
        vF49.hk.stop();
        vF49.hk.fadeOut(50);
        vF49.ik.stop();
        vF49.ik.fadeOut(50);
        vF49.jk.stop();
        vF49.jk.fadeIn(500);
        vF49.kk.stop();
        vF49.kk.fadeOut(50);
        vF49.lk.stop();
        vF49.lk.fadeIn(1);
        vF49.di.stop();
        vF49.di.fadeIn(500);
        vF11.Le(true);
        vF49.nk.stop();
        vF49.nk.fadeOut(50);
        vF49.ok.stop();
        vF49.ok.fadeIn(500);
      };
      vF1910.prototype.ji = function () {
        this.Ak();
      };
      vF1910.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0;
      };
      vF1910.prototype._ = function (p596) {
        this.yk.unshift(p596);
        setTimeout(function () {
          f11().s.ki();
        }, 0);
      };
      vF1910.prototype.Ti = function (p597) {
        this.yk.push(p597);
        setTimeout(function () {
          f11().s.ki();
        }, 0);
      };
      vF1910.prototype.Ak = function () {
        var vThis16 = this;
        if (this.zk == null) {
          if (this.yk.length == 0) {
            f11().s.gi();
            return;
          }
          var v490 = this.yk.shift();
          this.zk = v490;
          var v491 = v490.Bk();
          v491.hide();
          v491.fadeIn(300);
          v$38.append(v491);
          v490.Ck = function () {
            v491.fadeOut(300);
            setTimeout(function () {
              v491.remove();
            }, 300);
            if (vThis16.zk == v490) {
              vThis16.zk = null;
            }
            vThis16.Ak();
          };
          v490.ji();
        }
      };
      return vF1910;
    }();
    var vF55 = function () {
      var v$39 = $("#popup-menu-label");
      var v$40 = $("#popup-menu-coins-box");
      var v$41 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var vF1112 = f11();
        vF1112.r.Cd();
        vF1112.s.gi();
      });
      v$40.click(function () {
        var vF1113 = f11();
        if (vF1113.u.P()) {
          vF1113.r.Cd();
          vF1113.s.I(vF1113.s.Wh);
        }
      });
      var vF1911 = f19(vF49, function (p598, p599) {
        vF49.call(this, 1);
        this.ad = p598;
        this.Dk = p599;
      });
      vF1911.prototype.a = function () {
        vF1911.parent.prototype.a.call(this);
        if (!vF1911.Ek) {
          vF1911.Ek = true;
          var vF1114 = f11();
          vF1114.u.Pi(function () {
            if (vF1114.u.P()) {
              v$41.html(vF1114.u.zi());
            } else {
              v$41.html("0");
            }
          });
        }
      };
      vF1911.Fk = $("#coins-view");
      vF1911.Gk = $("#leaders-view");
      vF1911.Hk = $("#profile-view");
      vF1911.Ik = $("#settings-view");
      vF1911.Jk = $("#login-view");
      vF1911.Kk = $("#skins-view");
      vF1911.Lk = $("#store-view");
      vF1911.Mk = $("#wear-view");
      vF1911.Nk = $("#withdraw-consent-view");
      vF1911.Ok = $("#delete-account-view");
      vF1911.Pk = $("#please-wait-view");
      vF1911.prototype.ii = function () {
        vF49.fk.stop();
        vF49.fk.fadeOut(200);
        vF49.gk.stop();
        vF49.gk.fadeOut(200);
        vF49.hk.stop();
        vF49.hk.fadeOut(200);
        vF49.ik.stop();
        vF49.ik.fadeIn(200);
        vF49.jk.stop();
        vF49.jk.fadeOut(200);
        vF49.kk.stop();
        vF49.kk.fadeOut(200);
        vF49.nk.stop();
        vF49.nk.fadeIn(200);
        vF49.ok.stop();
        vF49.ok.fadeIn(200);
        v$39.html(this.ad);
        v$40.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      vF1911.prototype.Rk = function () {};
      vF1911.prototype.Sk = function () {
        vF55.Pk.stop();
        vF55.Pk.fadeIn(300);
      };
      vF1911.prototype.Qk = function () {
        vF55.Pk.stop();
        vF55.Pk.fadeOut(300);
      };
      return vF1911;
    }();
    var vF56 = function () {
      var v$42 = $("#store-buy-coins_125000");
      var v$43 = $("#store-buy-coins_50000");
      var v$44 = $("#store-buy-coins_16000");
      var v$45 = $("#store-buy-coins_7000");
      var v$46 = $("#store-buy-coins_3250");
      var v$47 = $("#store-buy-coins_1250");
      var vF1912 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.coins.tab"), false);
        var vF1115 = f11();
        var vThis17 = this;
        v$42.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_125000");
        });
        v$43.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_50000");
        });
        v$44.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_16000");
        });
        v$45.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_7000");
        });
        v$46.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_3250");
        });
        v$47.click(function () {
          vF1115.r.Cd();
          vThis17.Tk("coins_1250");
        });
      });
      vF1912.prototype.a = function () {
        vF1912.parent.prototype.a.call(this);
      };
      vF1912.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeIn(200);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1912.prototype.ji = function () {
        f11().r.Dd();
      };
      vF1912.prototype.Tk = function (p600) {};
      return vF1912;
    }();
    var vF59 = function () {
      var v$48 = $("#highscore-table");
      var v$49 = $("#leaders-button-level");
      var v$50 = $("#leaders-button-highscore");
      var v$51 = $("#leaders-button-kills");
      var vF1913 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.leaders.tab"), true);
        var vF1116 = f11();
        var vThis18 = this;
        this.Uk = {};
        this.Vk = {
          Wk: {
            Xk: v$49,
            Yk: "byLevel"
          },
          Zk: {
            Xk: v$50,
            Yk: "byHighScore"
          },
          $k: {
            Xk: v$51,
            Yk: "byKillsAndHeadShots"
          }
        };
        v$49.click(function () {
          vF1116.r.Cd();
          vThis18._k(vThis18.Vk.Wk);
        });
        v$50.click(function () {
          vF1116.r.Cd();
          vThis18._k(vThis18.Vk.Zk);
        });
        v$51.click(function () {
          vF1116.r.Cd();
          vThis18._k(vThis18.Vk.$k);
        });
      });
      vF1913.prototype.a = function () {
        vF1913.parent.prototype.a.call(this);
      };
      vF1913.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeIn(200);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1913.prototype.ji = function () {
        f11().r.Dd();
        var vThis19 = this;
        this.Sk();
        $.get(vLSHttpsgatewaywormatei + "/pub/leaders", function (p601) {
          vThis19.Uk = p601;
          vThis19._k(vThis19.al ?? vThis19.Vk.Wk);
          vThis19.Qk();
        }).done(function () {
          vThis19.Qk();
        });
      };
      vF1913.prototype._k = function (p602) {
        this.al = p602;
        for (var v492 in this.Vk) {
          if (this.Vk.hasOwnProperty(v492)) {
            var v493 = this.Vk[v492];
            v493.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        for (var v494 = this.Uk[this.al.Yk], vLS3 = "", vLN084 = 0; vLN084 < v494.length; vLN084++) {
          var v495 = v494[vLN084];
          vLS3 += "<div class=\"table-row\"><span>" + (vLN084 + 1) + "</span><span><img src=\"" + v495.avatarUrl + "\"/></span><span>" + v495.username + "</span><span>" + v495.level + "</span><span>" + v495.highScore + "</span><span>" + v495.headShots + " / " + v495.kills + "</span></div>";
        }
        v$48.empty();
        v$48.append(vLS3);
      };
      return vF1913;
    }();
    var vF60 = function () {
      var v$52 = $("#popup-login-gg");
      var v$53 = $("#popup-login-fb");
      var vF1914 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.login.tab"), false);
        var vF1117 = f11();
        var vThis20 = this;
        v$52.click(function () {
          vF1117.r.Cd();
          vThis20.Sk();
          vF1117.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF1117.u.Zi();
        });
        v$53.click(function () {
          vF1117.r.Cd();
          vThis20.Sk();
          vF1117.u.Qi(function () {
            vThis20.Qk();
          });
          setTimeout(function () {
            vThis20.Qk();
          }, 10000);
          vF1117.u.Vi();
        });
      });
      vF1914.prototype.a = function () {
        vF1914.parent.prototype.a.call(this);
      };
      vF1914.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeIn(200);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1914.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1914;
    }();
    var vF63 = function () {
      var v$54 = $("#profile-avatar");
      var v$55 = $("#profile-username");
      var v$56 = $("#profile-experience-bar");
      var v$57 = $("#profile-experience-val");
      var v$58 = $("#profile-level");
      var v$59 = $("#profile-stat-highScore");
      var v$60 = $("#profile-stat-bestSurvivalTime");
      var v$61 = $("#profile-stat-kills");
      var v$62 = $("#profile-stat-headshots");
      var v$63 = $("#profile-stat-gamesPlayed");
      var v$64 = $("#profile-stat-totalTimeSpent");
      var v$65 = $("#profile-stat-registrationDate");
      var vF1915 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.profile.tab"), true);
      });
      vF1915.prototype.a = function () {
        vF1915.parent.prototype.a.call(this);
      };
      vF1915.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeIn(200);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1915.prototype.ji = function () {
        var vF1118 = f11();
        vF1118.r.Dd();
        var v496 = vF1118.u.Oi();
        var v497 = moment([v496.year, v496.month - 1, v496.day]).format("LL");
        v$55.html(vF1118.u.wi());
        v$54.attr("src", vF1118.u.xi());
        v$56.width(vF1118.u.Bi() * 100 / vF1118.u.Ci() + "%");
        v$57.html(vF1118.u.Bi() + " / " + vF1118.u.Ci());
        v$58.html(vF1118.u.Ai());
        v$59.html(vF1118.u.Ii());
        v$60.html(f16(vF1118.u.Ji()));
        v$61.html(vF1118.u.Ki());
        v$62.html(vF1118.u.Li());
        v$63.html(vF1118.u.Mi());
        v$64.html(f16(vF1118.u.Ni()));
        v$65.html(v497);
      };
      return vF1915;
    }();
    var vF64 = function () {
      var v$66 = $("#settings-music-enabled-switch");
      var v$67 = $("#settings-sfx-enabled-switch");
      var v$68 = $("#settings-show-names-switch");
      var v$69 = $("#popup-logout");
      var v$70 = $("#popup-logout-container");
      var v$71 = $("#popup-delete-account");
      var v$72 = $("#popup-delete-account-container");
      var v$73 = $("#popup-withdraw-consent");
      var vF1916 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.settings.tab"), false);
        var vThis21 = this;
        var vF1119 = f11();
        v$66.click(function () {
          var v498 = !!v$66.prop("checked");
          f13(vF12.Me, v498, 30);
          vF1119.r.td(v498);
          vF1119.r.Cd();
        });
        v$67.click(function () {
          var v499 = !!v$67.prop("checked");
          f13(vF12.Ne, v499, 30);
          vF1119.r.rd(v499);
          vF1119.r.Cd();
        });
        v$68.click(function () {
          vF1119.r.Cd();
        });
        v$69.click(function () {
          vF1119.r.Cd();
          vThis21.Sk();
          setTimeout(function () {
            vThis21.Qk();
          }, 2000);
          vF1119.u.Wi();
        });
        v$71.click(function () {
          if (vF1119.u.P()) {
            vF1119.r.Cd();
            vF1119.s.I(vF1119.s.Vh);
          } else {
            vF1119.r.Hd();
          }
        });
        v$73.click(function () {
          if (vF1119.Y()) {
            vF1119.r.Cd();
            vF1119.s.I(vF1119.s.Uh);
          } else {
            vF1119.r.Hd();
          }
        });
      });
      vF1916.prototype.a = function () {
        vF1916.parent.prototype.a.call(this);
        var vF1120 = f11();
        var vUndefined23 = undefined;
        switch (f12(vF12.Me)) {
          case "false":
            vUndefined23 = false;
            break;
          default:
            vUndefined23 = true;
        }
        v$66.prop("checked", vUndefined23);
        vF1120.r.td(vUndefined23);
        var vUndefined24 = undefined;
        switch (f12(vF12.Ne)) {
          case "false":
            vUndefined24 = false;
            break;
          default:
            vUndefined24 = true;
        }
        v$67.prop("checked", vUndefined24);
        vF1120.r.rd(vUndefined24);
        var vUndefined25 = undefined;
        switch (f12(vF12.ya)) {
          case "false":
            vUndefined25 = false;
            break;
          default:
            vUndefined25 = true;
        }
        v$68.prop("checked", vUndefined25);
        vF1120.u.V(function () {
          v$70.toggle(vF1120.u.P());
          v$72.toggle(vF1120.u.P());
        });
      };
      vF1916.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeIn(200);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1916.prototype.ji = function () {
        var vF1121 = f11();
        vF1121.r.Dd();
        if (vF1121.Y()) {
          v$73.show();
        } else {
          v$73.hide();
        }
      };
      vF1916.prototype.wa = function () {
        return v$68.prop("checked");
      };
      return vF1916;
    }();
    var vF65 = function () {
      var v$74 = $("#store-view-canv");
      var v$75 = $("#skin-description-text");
      var v$76 = $("#skin-group-description-text");
      var v$77 = $("#store-locked-bar");
      var v$78 = $("#store-locked-bar-text");
      var v$79 = $("#store-buy-button");
      var v$80 = $("#store-item-price");
      var v$81 = $("#store-groups");
      var v$82 = $("#store-view-prev");
      var v$83 = $("#store-view-next");
      var vF1917 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.skins.tab"), true);
        var vThis22 = this;
        var vF1122 = f11();
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new vF48(v$74);
        v$79.click(function () {
          vF1122.r.Cd();
          vThis22.fl();
        });
        v$82.click(function () {
          vF1122.r.Cd();
          vThis22.bl.gl();
        });
        v$83.click(function () {
          vF1122.r.Cd();
          vThis22.bl.hl();
        });
      });
      vF1917.prototype.a = function () {
        vF1917.parent.prototype.a.call(this);
        var vThis23 = this;
        var vF1123 = f11();
        vF1123.p.ca(function () {
          var v500 = vF1123.p.Ac();
          if (v500 != null) {
            vThis23.cl = [];
            for (var vLN085 = 0; vLN085 < v500.skinGroupArrayDict.length; vLN085++) {
              vThis23.cl.push(new vF66(vThis23, v500.skinGroupArrayDict[vLN085]));
            }
            vThis23.dl = {};
            for (var vLN086 = 0; vLN086 < v500.skinArrayDict.length; vLN086++) {
              var v501 = v500.skinArrayDict[vLN086];
              vThis23.dl[v501.id] = v501;
            }
          }
        });
        this.il(false);
        vF1123.t.xh(function () {
          vThis23.il(false);
        });
      };
      vF1917.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeIn(200);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1917.prototype.ji = function () {
        f11().r.Dd();
        this.jl();
        this.el.Le(true);
      };
      vF1917.prototype.ei = function () {
        this.el.Le(false);
      };
      vF1917.prototype.Ra = function () {
        this.el.Ra();
      };
      vF1917.prototype.Pa = function (p603, p604) {
        this.el.Pa();
      };
      vF1917.prototype.jl = function () {
        var vThis24 = this;
        var vThis25 = this;
        var vF1124 = f11();
        v$81.empty();
        for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
          (function (p605) {
            var v502 = vThis24.cl[p605];
            var v503 = document.createElement("li");
            v$81.append(v503);
            var v$84 = $(v503);
            v$84.html(v502.kl());
            v$84.click(function () {
              vF1124.r.Cd();
              vThis25.ll(v502);
            });
            v502.ml = v$84;
          })(vLN088);
        }
        if (this.cl.length > 0) {
          var v504 = vF1124.t.ha(vF34.ia);
          for (var vLN088 = 0; vLN088 < this.cl.length; vLN088++) {
            var v505 = this.cl[vLN088];
            for (var v506 = v505.nl.list, vLN089 = 0; vLN089 < v506.length; vLN089++) {
              if (v506[vLN089] == v504) {
                v505.ol = vLN089;
                this.ll(v505);
                return;
              }
            }
          }
          this.ll(this.cl[0]);
        }
      };
      vF1917.prototype.ll = function (p606) {
        if (this.bl != p606) {
          var vF1125 = f11();
          this.bl = p606;
          v$81.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          v$76.html("");
          if (p606.nl != null) {
            var v507 = vF1125.p.Ac().textDict[p606.nl.description];
            if (v507 != null) {
              v$76.html(f17(f15(v507)));
            }
          }
          this.il(true);
        }
      };
      vF1917.prototype.pl = function () {
        if (this.bl == null) {
          return vF28.Yg();
        } else {
          return this.bl.ql();
        }
      };
      vF1917.prototype.fl = function () {
        var vThis26 = this;
        this.pl().ah(function (p607) {
          vThis26.rl(p607);
        });
      };
      vF1917.prototype.rl = function (p608) {
        var vThis27 = this;
        var vF1126 = f11();
        var v508 = this.dl[p608].price;
        if (!(vF1126.u.zi() < v508)) {
          this.Sk();
          var v509 = vF1126.t.ha(vF34.ia);
          var v510 = vF1126.t.ha(vF34.ja);
          var v511 = vF1126.t.ha(vF34.ka);
          var v512 = vF1126.t.ha(vF34.la);
          var v513 = vF1126.t.ha(vF34.ma);
          vF1126.u.Ui(p608, vF34.ia, function () {
            vF1126.t.Bh(v509, vF34.ia);
            vF1126.t.Bh(v510, vF34.ja);
            vF1126.t.Bh(v511, vF34.ka);
            vF1126.t.Bh(v512, vF34.la);
            vF1126.t.Bh(v513, vF34.ma);
            if (vF1126.u.Ch(p608, vF34.ia)) {
              vF1126.t.Bh(p608, vF34.ia);
            }
            vThis27.Qk();
          });
        }
      };
      vF1917.prototype.il = function (p609) {
        var vF1127 = f11();
        this.el.bk(vF1127.t.ha(vF34.ja), false, false);
        this.el.ck(vF1127.t.ha(vF34.ka), false, false);
        this.el.dk(vF1127.t.ha(vF34.la), false, false);
        this.el.ek(vF1127.t.ha(vF34.ma), false, false);
        var v514 = this.pl();
        if (v514._g()) {
          var v515 = v514.$g();
          var v516 = this.dl[v515];
          var v517 = false;
          if (vF1127.t.Ja(v515, vF34.ia)) {
            v$77.hide();
            v$79.hide();
          } else if (v516 == null || v516.nonbuyable == 1) {
            v517 = true;
            v$77.show();
            v$79.hide();
            v$78.text(f14("index.game.popup.menu.store.locked"));
            if (v516 != null && v516.nonbuyable && v516.nonbuyableCause != null) {
              var v518 = vF1127.p.Ac().textDict[v516.nonbuyableCause];
              if (v518 != null) {
                v$78.text(f15(v518));
              }
            }
          } else {
            v$77.hide();
            v$79.show();
            v$80.html(v516.price);
          }
          v$75.html("");
          if (v516 != null && v516.description != null) {
            var v519 = vF1127.p.Ac().textDict[v516.description];
            if (v519 != null) {
              v$75.html(f17(f15(v519)));
            }
          }
          v$.html(v516.id);
          this.el.ak(v515, true, v517);
          if (p609) {
            vF1127.t.Bh(v515, vF34.ia);
          }
        }
      };
      var vF66 = function () {
        function f102(p610, p611) {
          this.sl = p610;
          this.ol = 0;
          this.nl = p611;
        }
        f102.prototype.gl = function () {
          if (--this.ol < 0) {
            this.ol = this.nl.list.length - 1;
          }
          this.sl.il(true);
        };
        f102.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0;
          }
          this.sl.il(true);
        };
        f102.prototype.kl = function () {
          let vF152 = f15(this.nl.name);
          if (this.nl.img) {
            var vLSimgSrc = "<img src=\"";
            vLSimgSrc = vLSimgSrc + vLSHttpswormateserkanco + "/images/paths/" + this.nl.img;
            vF152 = vLSimgSrc = vLSimgSrc + "\" height=\"43\" width=\"220\" />";
          }
          return vF152;
        };
        f102.prototype.ql = function () {
          if (this.ol >= this.nl.list.length) {
            return vF28.Yg();
          } else {
            return vF28.Zg(this.nl.list[this.ol]);
          }
        };
        return f102;
      }();
      return vF1917;
    }();
    var vF67 = function () {
      var v$85 = $("#store-go-coins-button");
      var v$86 = $("#store-go-skins-button");
      var v$87 = $("#store-go-wear-button");
      var vF1918 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.store.tab"), true);
        var vF1128 = f11();
        v$85.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.Wh);
        });
        v$86.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.$h);
        });
        v$87.click(function () {
          vF1128.r.Cd();
          vF1128.s.I(vF1128.s.ai);
        });
      });
      vF1918.prototype.a = function () {
        vF1918.parent.prototype.a.call(this);
      };
      vF1918.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeIn(200);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1918.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1918;
    }();
    var vF68 = function () {
      var v$88 = $("#wear-view-canv");
      var v$89 = $("#wear-description-text");
      var v$90 = $("#wear-locked-bar");
      var v$91 = $("#wear-locked-bar-text");
      var v$92 = $("#wear-buy-button");
      var v$93 = $("#wear-item-price");
      var v$94 = $("#wear-eyes-button");
      var v$95 = $("#wear-mouths-button");
      var v$96 = $("#wear-glasses-button");
      var v$97 = $("#wear-hats-button");
      var v$98 = $("#wear-tint-chooser");
      var v$99 = $("#wear-view-prev");
      var v$100 = $("#wear-view-next");
      var vF1919 = f19(vF55, function () {
        var vThis28 = this;
        vF55.call(this, f14("index.game.popup.menu.wear.tab"), true);
        var vF1129 = f11();
        var vThis29 = this;
        this.tl = [];
        this.ja = new vF69(this, vF34.ja, v$94);
        this.ka = new vF69(this, vF34.ka, v$95);
        this.la = new vF69(this, vF34.la, v$96);
        this.ma = new vF69(this, vF34.ma, v$97);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new vF48(v$88);
        v$92.click(function () {
          vF1129.r.Cd();
          vThis29.Bl();
        });
        v$99.click(function () {
          vF1129.r.Cd();
          vThis29.ul.Cl();
        });
        v$100.click(function () {
          vF1129.r.Cd();
          vThis29.ul.Dl();
        });
        v$94.click(function () {
          vF1129.r.Cd();
          vThis29.El(vThis28.ja);
        });
        v$95.click(function () {
          vF1129.r.Cd();
          vThis29.El(vThis28.ka);
        });
        v$96.click(function () {
          vF1129.r.Cd();
          vThis29.El(vThis28.la);
        });
        v$97.click(function () {
          vF1129.r.Cd();
          vThis29.El(vThis28.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      vF1919.prototype.a = function () {
        vF1919.parent.prototype.a.call(this);
        var vF1130 = f11();
        var vThis30 = this;
        vF1130.p.ca(function () {
          var v520 = vF1130.p.Ac();
          if (v520 != null) {
            vThis30.vl = v520.eyesDict;
            vThis30.wl = v520.mouthDict;
            vThis30.xl = v520.glassesDict;
            vThis30.yl = v520.hatDict;
            vThis30.zl = v520.colorDict;
            vThis30.ja.Fl(v520.eyesVariantArray);
            vThis30.ja.Gl(vThis30.vl);
            vThis30.ka.Fl(v520.mouthVariantArray);
            vThis30.ka.Gl(vThis30.wl);
            vThis30.la.Fl(v520.glassesVariantArray);
            vThis30.la.Gl(vThis30.xl);
            vThis30.ma.Fl(v520.hatVariantArray);
            vThis30.ma.Gl(vThis30.yl);
          }
        });
        this.il(false);
        vF1130.t.xh(function () {
          vThis30.il(false);
        });
      };
      vF1919.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeIn(200);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1919.prototype.ji = function () {
        f11().r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      vF1919.prototype.ei = function () {
        this.Al.Le(false);
      };
      vF1919.prototype.Ra = function () {
        this.Al.Ra();
      };
      vF1919.prototype.Pa = function (p612, p613) {
        this.Al.Pa();
      };
      vF1919.prototype.El = function (p614) {
        this.ul = p614;
        for (var vLN090 = 0; vLN090 < this.tl.length; vLN090++) {
          this.tl[vLN090].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      vF1919.prototype.Hl = function () {
        if (this.ul == null) {
          return vF28.Yg();
        } else {
          return vF28.Zg({
            Lb: this.ul.ql(),
            rc: this.ul.rc
          });
        }
      };
      vF1919.prototype.Bl = function () {
        var vThis31 = this;
        this.Hl().ah(function (p615) {
          vThis31.Ui(p615.Lb, p615.rc);
        });
      };
      vF1919.prototype.Ui = function (p616, p617) {
        var vThis32 = this;
        var vF1131 = f11();
        var vUndefined26 = undefined;
        switch (p617) {
          case vF34.ja:
            vUndefined26 = this.vl[p616].price;
            break;
          case vF34.ka:
            vUndefined26 = this.wl[p616].price;
            break;
          case vF34.la:
            vUndefined26 = this.xl[p616].price;
            break;
          case vF34.ma:
            vUndefined26 = this.yl[p616].price;
            break;
          default:
            return;
        }
        if (!(vF1131.u.zi() < vUndefined26)) {
          this.Sk();
          var v521 = vF1131.t.ha(vF34.ia);
          var v522 = vF1131.t.ha(vF34.ja);
          var v523 = vF1131.t.ha(vF34.ka);
          var v524 = vF1131.t.ha(vF34.la);
          var v525 = vF1131.t.ha(vF34.ma);
          vF1131.u.Ui(p616, p617, function () {
            vF1131.t.Bh(v521, vF34.ia);
            vF1131.t.Bh(v522, vF34.ja);
            vF1131.t.Bh(v523, vF34.ka);
            vF1131.t.Bh(v524, vF34.la);
            vF1131.t.Bh(v525, vF34.ma);
            if (vF1131.u.Ch(p616, p617)) {
              vF1131.t.Bh(p616, p617);
            }
            vThis32.Qk();
          });
        }
      };
      vF1919.prototype.Il = function (p618, p619) {
        switch (p619) {
          case vF34.ja:
            return this.vl[p618];
          case vF34.ka:
            return this.wl[p618];
          case vF34.la:
            return this.xl[p618];
          case vF34.ma:
            return this.yl[p618];
        }
        return null;
      };
      vF1919.prototype.il = function (p620) {
        var vF1132 = f11();
        this.Al.ak(vF1132.t.ha(vF34.ia), false, false);
        this.Al.bk(vF1132.t.ha(vF34.ja), false, false);
        this.Al.ck(vF1132.t.ha(vF34.ka), false, false);
        this.Al.dk(vF1132.t.ha(vF34.la), false, false);
        this.Al.ek(vF1132.t.ha(vF34.ma), false, false);
        var v526 = this.Hl();
        if (v526._g()) {
          var v527 = v526.$g();
          var v528 = this.Il(v527.Lb, v527.rc);
          var v529 = false;
          if (vF1132.t.Ja(v527.Lb, v527.rc)) {
            v$90.hide();
            v$92.hide();
          } else if (v528 == null || v528.nonbuyable == 1) {
            v529 = true;
            v$90.show();
            v$92.hide();
            v$91.text(f14("index.game.popup.menu.store.locked"));
            if (v528 != null && v528.nonbuyable && v528.nonbuyableCause != null) {
              var v530 = vF1132.p.Ac().textDict[v528.nonbuyableCause];
              if (v530 != null) {
                v$91.text(f15(v530));
              }
            }
          } else {
            v$90.hide();
            v$92.show();
            v$93.html(v528.price);
          }
          v$89.html("");
          if (v528 != null && v528.description != null) {
            var v531 = vF1132.p.Ac().textDict[v528.description];
            if (v531 != null) {
              v$89.html(f17(f15(v531)));
            }
          }
          switch (v527.rc) {
            case vF34.ja:
              this.Al.bk(v527.Lb, true, v529);
              break;
            case vF34.ka:
              this.Al.ck(v527.Lb, true, v529);
              break;
            case vF34.la:
              this.Al.dk(v527.Lb, true, v529);
              break;
            case vF34.ma:
              this.Al.ek(v527.Lb, true, v529);
          }
          if (p620) {
            vF1132.t.Bh(v527.Lb, v527.rc);
          }
        }
      };
      var vF69 = function () {
        function f103(p621, p622, p623) {
          this.sl = p621;
          this.rc = p622;
          this.Xk = p623;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -10;
          this.Ml = -10;
        }
        f103.prototype.Fl = function (p624) {
          this.Kl = p624;
        };
        f103.prototype.Gl = function (p625) {
          this.Jl = p625;
        };
        f103.prototype.ii = function () {
          var vF1133 = f11();
          var v532 = vF1133.t.ha(this.rc);
          for (var vLN091 = 0; vLN091 < this.Kl.length; vLN091++) {
            for (var vLN092 = 0; vLN092 < this.Kl[vLN091].length; vLN092++) {
              if (this.Kl[vLN091][vLN092] == v532) {
                this.Nl(vLN091);
                this.Ol(vLN092);
                return;
              }
            }
          }
          this.Nl(0);
          this.Ol(0);
        };
        f103.prototype.Cl = function () {
          var v533 = this.Ll - 1;
          if (v533 < 0) {
            v533 = this.Kl.length - 1;
          }
          this.Nl(v533);
          this.Ol(this.Ml % this.Kl[v533].length);
        };
        f103.prototype.Dl = function () {
          var v534 = this.Ll + 1;
          if (v534 >= this.Kl.length) {
            v534 = 0;
          }
          this.Nl(v534);
          this.Ol(this.Ml % this.Kl[v534].length);
        };
        f103.prototype.Nl = function (p626) {
          var vThis33 = this;
          if (!(p626 < 0) && !(p626 >= this.Kl.length)) {
            this.Ll = p626;
            v$98.empty();
            var v535 = this.Kl[this.Ll];
            if (v535.length > 1) {
              for (var vLN093 = 0; vLN093 < v535.length; vLN093++) {
                (function (p627) {
                  var v536 = v535[p627];
                  var v537 = vThis33.Jl[v536];
                  var v538 = "#" + vThis33.sl.zl[v537.prime];
                  var v$101 = $("<div style=\"border-color:" + v538 + "\"></div>");
                  v$101.click(function () {
                    f11().r.Cd();
                    vThis33.Ol(p627);
                  });
                  v$98.append(v$101);
                })(vLN093);
              }
            }
          }
        };
        f103.prototype.Ol = function (p628) {
          if (!(p628 < 0) && !(p628 >= this.Kl[this.Ll].length)) {
            this.Ml = p628;
            v$98.children().css("background-color", "transparent");
            var v539 = v$98.children(":nth-child(" + (1 + p628) + ")");
            v539.css("background-color", v539.css("border-color"));
            this.sl.il(true);
          }
        };
        f103.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return f103;
      }();
      return vF1919;
    }();
    var vF70 = function () {
      var v$102 = $("#withdraw-consent-yes");
      var v$103 = $("#withdraw-consent-no");
      var vF1920 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.consent.tab"), false);
        var vF1134 = f11();
        v$102.click(function () {
          vF1134.r.Cd();
          if (vF1134.Y()) {
            vF1134.s.I(vF1134.s.F);
            vF1134.$(false, true);
            vF1134.s.aa._(new vF77());
          } else {
            vF1134.s.gi();
          }
        });
        v$103.click(function () {
          vF1134.r.Cd();
          vF1134.s.gi();
        });
      });
      vF1920.prototype.a = function () {
        vF1920.parent.prototype.a.call(this);
      };
      vF1920.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeIn(200);
        vF55.Ok.stop();
        vF55.Ok.fadeOut(50);
      };
      vF1920.prototype.ji = function () {
        f11().r.Dd();
      };
      return vF1920;
    }();
    var vF71 = function () {
      var v$104 = $("#delete-account-timer");
      var v$105 = $("#delete-account-yes");
      var v$106 = $("#delete-account-no");
      var vF1921 = f19(vF55, function () {
        vF55.call(this, f14("index.game.popup.menu.delete.tab"), false);
        var vF1135 = f11();
        v$105.click(function () {
          vF1135.r.Cd();
          if (vF1135.u.P()) {
            vF1135.u.bj();
            vF1135.u.Wi();
          } else {
            vF1135.s.gi();
          }
        });
        v$106.click(function () {
          vF1135.r.Cd();
          vF1135.s.gi();
        });
        this.Pl = [];
      });
      vF1921.prototype.a = function () {
        vF1921.parent.prototype.a.call(this);
      };
      vF1921.prototype.Rk = function () {
        vF55.Fk.stop();
        vF55.Fk.fadeOut(50);
        vF55.Gk.stop();
        vF55.Gk.fadeOut(50);
        vF55.Hk.stop();
        vF55.Hk.fadeOut(50);
        vF55.Jk.stop();
        vF55.Jk.fadeOut(50);
        vF55.Ik.stop();
        vF55.Ik.fadeOut(50);
        vF55.Kk.stop();
        vF55.Kk.fadeOut(50);
        vF55.Lk.stop();
        vF55.Lk.fadeOut(50);
        vF55.Mk.stop();
        vF55.Mk.fadeOut(50);
        vF55.Nk.stop();
        vF55.Nk.fadeOut(50);
        vF55.Ok.stop();
        vF55.Ok.fadeIn(200);
      };
      vF1921.prototype.ji = function () {
        f11().r.Hd();
        v$105.stop();
        v$105.hide();
        v$104.stop();
        v$104.show();
        v$104.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          v$104.text(".. 9 ..");
        }, 1000);
        this.Rl(function () {
          v$104.text(".. 8 ..");
        }, 2000);
        this.Rl(function () {
          v$104.text(".. 7 ..");
        }, 3000);
        this.Rl(function () {
          v$104.text(".. 6 ..");
        }, 4000);
        this.Rl(function () {
          v$104.text(".. 5 ..");
        }, 5000);
        this.Rl(function () {
          v$104.text(".. 4 ..");
        }, 6000);
        this.Rl(function () {
          v$104.text(".. 3 ..");
        }, 7000);
        this.Rl(function () {
          v$104.text(".. 2 ..");
        }, 8000);
        this.Rl(function () {
          v$104.text(".. 1 ..");
        }, 9000);
        this.Rl(function () {
          v$104.hide();
          v$105.fadeIn(300);
        }, 10000);
      };
      vF1921.prototype.Rl = function (p629, p630) {
        var vSetTimeout2 = setTimeout(p629, p630);
        this.Pl.push(vSetTimeout2);
      };
      vF1921.prototype.Ql = function () {
        for (var vLN094 = 0; vLN094 < this.Pl.length; vLN094++) {
          clearTimeout(this.Pl[vLN094]);
        }
        this.Pl = [];
      };
      return vF1921;
    }();
    var vF72 = function () {
      function f104() {
        this.Ck = function () {};
      }
      f104.prototype.Bk = function () {};
      f104.prototype.ji = function () {};
      return f104;
    }();
    var vF73 = function () {
      var vF1922 = f19(vF72, function (p631) {
        vF72.call(this);
        var v540 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v540 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + p631 + "</div>    <div class=\"toaster-coins-close\">" + f14("index.game.toaster.continue") + "</div></div>");
        var vThis34 = this;
        this.Sl.find(".toaster-coins-close").click(function () {
          f11().r.Cd();
          vThis34.Ck();
        });
      });
      vF1922.prototype.Bk = function () {
        return this.Sl;
      };
      vF1922.prototype.ji = function () {
        f11().r.Fd();
      };
      return vF1922;
    }();
    var vF74 = function () {
      var vF1923 = f19(vF72, function (p632) {
        vF72.call(this);
        var v541 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v541 + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + p632 + "</div>    <div class=\"toaster-levelup-text\">" + f14("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + f14("index.game.toaster.continue") + "</div></div>");
        var vThis35 = this;
        this.Sl.find(".toaster-levelup-close").click(function () {
          f11().r.Cd();
          vThis35.Ck();
        });
      });
      vF1923.prototype.Bk = function () {
        return this.Sl;
      };
      vF1923.prototype.ji = function () {
        f11().r.Ed();
      };
      return vF1923;
    }();
    var vF77 = function () {
      var vF1924 = f19(vF72, function () {
        vF72.call(this);
        var vThis36 = this;
        var vF1136 = f11();
        var v542 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Sl = $("<div id=\"" + v542 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vLSimageslinelogoxmas20 + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + f14("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + f14("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + f14("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Tl = this.Sl.find(".toaster-consent-close");
        this.Tl.hide();
        this.Tl.click(function () {
          vF1136.r.Cd();
          if (vF1136.Y()) {
            vF1136.$(true, true);
          }
          vThis36.Ck();
        });
      });
      vF1924.prototype.Bk = function () {
        return this.Sl;
      };
      vF1924.prototype.ji = function () {
        var vThis37 = this;
        var vF1137 = f11();
        if (vF1137.Y() && !vF1137.Z()) {
          vF1137.r.Hd();
          setTimeout(function () {
            vThis37.Tl.fadeIn(300);
          }, 2000);
        } else {
          setTimeout(function () {
            vThis37.Ck();
          }, 0);
        }
      };
      return vF1924;
    }();
    var vO19 = {};
    vO19.main = {
      Ma: f35("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f35("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f32(),
      e: 4,
      oa: false,
      qk: true
    };
    vO19.miniclip = {
      Ma: f35("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
      K: f35("ltmolilci1iurq1i", "wormate-io_970x250"),
      ra: f32(),
      e: 4,
      oa: false,
      qk: false
    };
    var v543 = vO19[window.ENV];
    v543 = v543 || vO19.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p633) {
      p633.preventDefault();
      p633.stopPropagation();
      return false;
    });
    f18("//connect.facebook.net/" + vUndefined + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v8.0"
      });
    });
    f18("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        v27 = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vUndefined2 = f36();
    vUndefined2.v();
    if (vF()) {
      f18("https://wormateup.live/up/js/joy.min.js", "mobileconfig", function () {
        vF78();
      });
    }
    ;
    let vF78 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = "q";
    window.addEventListener("keydown", function (p634) {
      if (p634.key.toLowerCase() !== "q" || !v6 || v5 !== null) {
        if (v5 !== null) {
          clearInterval(v5);
          v5 = null;
        }
      } else {
        let vLN095 = 0;
        const v544 = window.tuNewScore;
        if (v5 !== null) {
          clearInterval(v5);
        }
        v5 = setInterval(function () {
          let v545 = Math.PI / 4;
          let v546 = 165 + (v544 >= 100000 ? 5 : v544 >= 10000 ? 10 : 0);
          vO3.eventoPrincipal.sk += v545;
          if (vO3.eventoPrincipal.sk >= Math.PI * 2) {
            vO3.eventoPrincipal.sk -= Math.PI * 2;
          } else if (vO3.eventoPrincipal.sk <= Math.PI * -2) {
            vO3.eventoPrincipal.sk += Math.PI * 2;
          }
          let v547 = document.getElementById("elementId");
          if (v547) {
            v547.style.transform = "rotate(" + vO3.eventoPrincipal.sk + "rad)";
          }
        }, 165 + (v544 >= 100000 ? 5 : v544 >= 10000 ? 10 : 0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(vO4));
    }, false);
    let vA15 = [{
      nombre: "chuot 1",
      url: "https://i.imgur.com/SjFtyqp.png"
    }, {
      nombre: "chuot 2",
      url: "https://i.imgur.com/4QC2Exd.png"
    }, {
      nombre: "chuot 3",
      url: "https://i.imgur.com/PfdBkc2.png"
    }, {
      nombre: "chuot 4",
      url: "https://i.imgur.com/vD4zoMk.png"
    }, {
      nombre: "chuot 5",
      url: "https://i.imgur.com/n4N79UI.png"
    }, {
      nombre: "arrow",
      url: "https://cdn.custom-cursor.com/db/234/32/arrow2291.png"
    }, {
      nombre: "Superman",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Superman_Cursor.png"
    }, {
      nombre: "Kratos",
      url: "https://cdn.custom-cursor.com/128/assets/pointers/32/GOW_Kratos_Pointer.png"
    }, {
      nombre: "Pusheen_Ca",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Pusheen_Cat_Cursor.png"
    }, {
      nombre: "lipstick",
      url: "https://cdn.custom-cursor.com/db/15214/32/sailor-moon-fish-eye-and-lipstick-cursor.png"
    }, {
      nombre: "AKM",
      url: "https://cdn.custom-cursor.com/db/cursor/32/PUBG_AKM_Cursor.png"
    }, {
      nombre: "Cherries_Pointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Cherries_Pointer.png"
    }, {
      nombre: "Tom_and_JerryCurso",
      url: "https://cdn.custom-cursor.com/db/cursor/32/Tom_and_JerryCursor.png"
    }, {
      nombre: "JerryPointer",
      url: "https://cdn.custom-cursor.com/db/pointer/32/Tom_and_JerryPointer.png"
    }];
    let vA16 = [{
      nombre: "Default",
      url: "https://i.imgur.com/8ubx4RA.png"
    }, {
      nombre: "Schwarze Background",
      url: "https://i.imgur.com/3cxXwZ6.png"
    }, {
      nombre: "light blue",
      url: "https://i.imgur.com/dWtJFIx.png"
    }, {
      nombre: "woman",
      url: "https://i.imgur.com/19YALRi.png"
    }, {
      nombre: "Navidad",
      url: "https://i.imgur.com/PSRIvVM.png"
    }, {
      nombre: "Mal3ab",
      url: "https://i.imgur.com/MlCgOma.png"
    }, {
      nombre: "Galaxy_Star",
      url: "https://i.imgur.com/yayb9Ru.png"
    }, {
      nombre: "Desert",
      url: "https://asserts.wormworld.io/backgrounds/bkgnd7.png"
    }];
    vO4.loading = true;
    var vLS4 = "";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "</div>";
    vLS4 += "<div id=\"wormcerca\">";
    vLS4 += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    vLS4 += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    vLS4 += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    vLS4 += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    vLS4 += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    vLS4 += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    vLS4 += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    vLS4 += "</div>";
    vLS4 += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    vLS4 += "</div><div class=\"worm_2\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
    $("#game-view").append(vLS4);
    function f105(p635) {
      if (vO4.PropertyManager) {
        p635.skinId = vO4.PropertyManager.rh;
        p635.eyesId = vO4.PropertyManager.sh;
        p635.mouthId = vO4.PropertyManager.th;
        p635.glassesId = vO4.PropertyManager.uh;
        p635.hatId = vO4.PropertyManager.vh;
      }
    }
    function f106() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://wormateserkanconnect.github.io/DV/skinlab/\">يمكنك الذهاب إلى Skinlab بالضغط هنا.</a></div>");
      $("#mm-store").after("\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Setting\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span>Game settings</span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">closing</button>\n\n                <!-- أزرار التبويبات -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">Additions to the list</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">Gift Message Settings</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">Wallpaper settings</button>\n                </div>\n\n                <!-- محتوى إعدادات اللعب -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"" + vO4.FB_UserID + "\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(() => alert('Your ID " + vO4.FB_UserID + " نسخ!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            🔊\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormateup.live/up/video/emaat.mp3\">ولك امعط</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">القم</option>\n    <option value=\"https://www.myinstants.com/media/sounds/bye-bye-mikey-tokyo-revengers.mp3\">Bye Bye</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">اديلوو ادي</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">ع لووبي</option>\n    <option value=\"https://wormateup.live/up/video/laugh.mp3\">Laugh ههههه</option>\n    <option value=\"https://wormateup.live/up/video/mario-jump.mp3\">Mario Jump</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // عناصر التحكم\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // قائمة الأصوات\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // الصوت الافتراضي فارغ\n  let audio = null; // كائن الصوت غير مهيأ\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // التحقق من إعداد الصوت\n\n  // إعدادات الصوت الأولية\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // تحديث الصوت عند التغيير في القائمة\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // إيقاف أي صوت قيد التشغيل\n      audio = new Audio(audioSrc); // إنشاء كائن صوت جديد\n      audio.play(); // تشغيل الصوت الجديد\n    }\n  });\n\n  // تعطيل الصوت\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // إيقاف الصوت إذا تم كتمه\n    }\n  });\n\n  // تشغيل الصوت عند تمرير الماوس على الخيارات\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // إنشاء كائن صوت عند المرور\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // لا يتم تشغيل الصوت الأولي هنا\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n              <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> rotation <a href=\"/\">Q</a> To place the rotors around the worm (to disable the rotation, press the same letter)\n                </div>\n            <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Failed <a href=\"/\">R</a>To make the deposit (three times only)\n\n            </div>\n                        <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Fast zoom <a href=\"/\">Z</a>   For quick approximation\n\n            </div>\n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3></h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">The boy s phrase</label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"بلعة بوتات\">بلعة بوتات</option>\n                            <option value=\"هاي شنو\">هاي شنو</option>\n                            <option value=\"خواااصر عيني\">خواااصر عيني</option>\n                            <option value=\"ماتقدر لي\">ماتقدر لي</option>\n\n                        </select>\n                    </div>\n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">Headshot phrase</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\"إبلع ليك\">إبلع ليك</option>\n                            <option value=\"اديلووو ادي 🔪\">اديلووو ادي 🔪</option>\n                            <option value=\" HEADSHOT ☠️\">HEADSHOT ☠️</option>\n\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Memorizing phrases</button>\n            </div>\n\n                <!-- محتوى تبويب إعدادات الخلفيات (تم حذف كافة الخلفيات) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        \n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        \n        .background-options {\n            margin-top: 20px;\n        }\n\n        \n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        \n        #messageSettings {\n            display: flex;\n            flex-direction: row; \n            justify-content: center; \n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // دالة التنقل بين التبويبات\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// دالة لحفظ الرسائل\nfunction saveMessages() {\n    // استرجاع القيم من القوائم المنسدلة\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // حفظ القيم في localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // عرض رسالة تأكيد\n    alert(\"تم حفظ الرسائل بنجاح!\");\n\n    // لعرض القيم المدخلة في وحدة التحكم لتتأكد من الحفظ\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// دالة لاسترجاع الرسائل المخزنة من localStorage عند تحميل الصفحة\nfunction loadMessages() {\n    // استرجاع القيم من localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // التحقق من أن القيم مخزنة في localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // لعرض القيم في وحدة التحكم للتأكد من استرجاعها بشكل صحيح\n\n}\n\n// استرجاع الرسائل المخزنة عند تحميل الصفحة أو بعد إضافة المحتوى الجديد\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // تأخير بسيط للتأكد من تحميل المحتوى\n}\n\n// استدعاء initializeSettings عند إضافة المحتوى أو تحميل الصفحة\ninitializeSettings();\n\n\n\n\n\n        // دالة لحفظ الخلفية\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"تم حفظ الخلفية بنجاح!\");\n        }\n    </script>\n");
      $("#loa831pibur0w4gv").replaceWith("\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n          <div class=\"label\" id=\"titleSetings\">الزوم يعمل مع التفعيل فقط</div>\n          <div class=\"bao-list1\">\n            <input type=\"text\" value=\"" + vO4.FB_UserID + "\" style=\"width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;\" />\n            <button style=\"height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;\" onclick=\"navigator.clipboard.writeText('" + vO4.FB_UserID + "').then(() => alert('Your ID " + vO4.FB_UserID + " copied!'));\">نسخ</button>\n            <center>\n              <div class=\"hg\">\n                <a target=\"_blank\" href=\"https://wormateup.live/\">الصفحة الرئيسية</a>\n                <br> <br> <br><br> <br> <br>\n                                <a\">لم تقم بتفعيل الاداة الرجاء التوجه للديسكورد </a>\n\n              </div>\n            </center>\n            <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n            <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://discord.gg/zNJkB8EeUF\">لتفعيل الاداة عن طريق الديسكورد</a>\n          </div>\n        </div>\n      ");
      var v548 = document.getElementById("settingBtn");
      var v549 = document.getElementById("settingContent");
      v548.addEventListener("click", function () {
        if (v549.style.display === "none") {
          v549.style.display = "block";
        } else {
          v549.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        vO4.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO4.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO4.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO4.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO4.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO4.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO4.FoodSize = $(this).val();
        localStorage.ComidaSize = vO4.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO4.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO4.FoodShadow;
      });
      $("#mm-advice-cont").html("\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n          <input type=\"button\" value=\"Full screen\" class=\"fullscreen_button\">\n          <input type=\"button\" value=\"Respawn\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n\n          </div>\n      ");
      $(".mm-merchant-cont").html("\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/wormup\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormateup.live/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://wormateup.live.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>");
      $(document).ready(function () {
        $(".fullscreen_button").on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
              document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
          } else if (document.cancelFullScreen) {
            document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          }
        });
      });
      $("#hoisinh").click(() => handleRespawn());
      $(".mm-merchant").replaceWith("");
      async function f107(p636) {
        return new Promise(p637 => {
          const vSetTimeout3 = setTimeout(() => {
            p637({
              id: p636.id,
              online: false,
              serverName: p636.serverName,
              isFull: false,
              trafficLevel: "unknown"
            });
          }, 5000);
          try {
            const v550 = new WebSocket(p636.serverUrl);
            v550.onopen = () => {
              clearTimeout(vSetTimeout3);
              let vLSLow = "low";
              if (p636.currentPlayers >= p636.maxPlayers * 0.7) {
                vLSLow = "high";
              } else if (p636.currentPlayers >= p636.maxPlayers * 0.4) {
                vLSLow = "medium";
              }
              const v551 = p636.currentPlayers >= p636.maxPlayers;
              p637({
                id: p636.id,
                online: true,
                serverName: p636.serverName,
                isFull: v551,
                trafficLevel: vLSLow,
                currentPlayers: p636.currentPlayers,
                maxPlayers: p636.maxPlayers
              });
              v550.close();
            };
            v550.onerror = () => {
              clearTimeout(vSetTimeout3);
              p637({
                id: p636.id,
                online: false,
                serverName: p636.serverName,
                isFull: false,
                trafficLevel: "offline"
              });
            };
            v550.onclose = () => {
              clearTimeout(vSetTimeout3);
            };
          } catch (e26) {
            clearTimeout(vSetTimeout3);
            p637({
              id: p636.id,
              online: false,
              serverName: p636.serverName,
              isFull: false,
              trafficLevel: "error"
            });
          }
        });
      }
      $(".mm-merchant").replaceWith("");
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n          <div id=\"title\">P L A T E N  </div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ");
      $(".ui-tab").on("click", f124);
      $(".flag").click(function () {
        let v552 = $(this).attr("value");
        vO4.flag = v552;
        vO7.containerImgS.texture = vO7.onclickServer;
        retundFlagError();
      });
      const vLSstatusdotnearbydotDi = "\n                .status-dot, .nearby-dot {\n                    display: inline-block;\n                    border-radius: 50%;\n                    position: absolute;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n                \n                .status-dot {\n                    width: 8px;\n                    height: 8px;\n                    transition: all 0.3s ease;\n                    right: 32px;\n                }\n                \n                .nearby-dot {\n                    width: 6px;\n                    height: 6px;\n                    transition: all 0.3s ease;\n                    right: 42px;\n                }\n                \n                .online {\n                    background-color: #00ff00;\n                    box-shadow: 0 0 5px #00ff00;\n                }\n                \n                .nearby {\n                    background-color: #007bff;\n                    box-shadow: 0 0 3px #007bff;\n                }\n            \n                .selectSala {\n                    position: relative;\n                    padding-right: 60px;\n                    line-height: 25px;\n                    min-height: 25px;\n                    display: flex;\n                    align-items: center;\n                    direction: rtl;\n                    text-align: left;\n                }\n            \n                .selectSala > span:first-of-type {\n                    margin-right: auto;\n                    direction: ltr;\n                }\n            \n                .selectSala img {\n                    position: absolute;\n                    right: 5px;\n                    top: 50%;\n                    transform: translateY(-50%);\n                }\n            ";
      $("<style>").text(vLSstatusdotnearbydotDi).appendTo("head");
      async function f108() {
        try {
          const v553 = await fetch("https://wormup.in:8082/active-servers", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Cache-Control": "no-cache"
            },
            timeout: 5000
          });
          if (!v553.ok) {
            throw new Error("HTTP error! status: " + v553.status);
          }
          window.serverData = await v553.json();
          console.log("بيانات السيرفر كاملة:", window.serverData);
          if (window.serverData.success) {
            $(".selectSala").each(function () {
              const v554 = $(this).attr("value");
              console.log("رابط السيرفر:", v554);
              console.log("معلومات السيرفر:", window.serverData.servers[v554]);
              const v555 = $(this).find(".status-dot");
              const v556 = $(this).find(".nearby-dot");
              v555.removeClass("online");
              v556.removeClass("nearby");
              if (window.serverData.servers && window.serverData.servers[v554]) {
                v555.addClass("online");
              }
            });
          }
        } catch (e27) {
          console.warn("خطأ في تحديث حالة السيرفرات:", e27);
        }
      }
      function f109() {
        if (!vO6 || !vO6.Api_listServer) {
          console.error("Servers list not found");
          return;
        }
        $(".servers-peru, .servers-mexico, .servers-eeuu, .servers-canada, .servers-germania, .servers-francesa, .servers-singapur, .servers-japon, .servers-australia, .servers-granbretana").empty();
        for (let vLN096 = 0; vLN096 < vO6.Api_listServer.length; vLN096++) {
          const v557 = vO6.Api_listServer[vLN096].serverUrl;
          const v558 = vO6.Api_listServer[vLN096].name;
          const v559 = vO6.Api_listServer[vLN096].region;
          const v560 = document.createElement("p");
          v560.value = v557;
          v560.innerHTML = "<span>" + v558 + "</span>\n                        <span class=\"status-dot\"></span>\n                        <span class=\"nearby-dot\"></span>";
          $(".servers-" + v559).prepend(v560);
          $(v560).attr({
            id: v559,
            class: "selectSala",
            value: v557
          });
          $(v560).click(function () {
            try {
              if (typeof vO7 !== "undefined" && vO7.setServer) {
                vO7.setServer($(this).find("span:first").text());
                let v561 = $(this).val();
                if (vO7.containerImgS && vO7.onclickServer) {
                  vO7.containerImgS.texture = vO7.onclickServer;
                }
                if (typeof retundFlagError === "function") {
                  retundFlagError();
                }
                window.server_url = v561;
                $("#mm-action-play").click();
                $("#adbl-continue").click();
              }
            } catch (e28) {
              console.error("Server selection error:", e28);
            }
          });
        }
      }
      $(document).ready(() => {
        if (vO6 && vO6.Api_listServer) {
          f109();
          f108();
        }
      });
    }
    function f110() {
      $("#getskin").on("click", function () {
        for (var vLN097 = 0; vLN097 < vO5.clientesActivos.length; vLN097++) {
          var v562 = vO5.clientesActivos[vLN097].cliente_NOMBRE;
          var v563 = vO5.clientesActivos[vLN097].cliente_ID;
          var v564 = vO5.clientesActivos[vLN097].Client_VisibleSkin;
          var v565 = vO5.clientesActivos[vLN097].Client_VisibleSkin1;
          var v566 = vO5.clientesActivos[vLN097].Client_VisibleSkin2;
          var v567 = vO5.clientesActivos[vLN097].Client_VisibleSkin3;
          var v568 = vO5.clientesActivos[vLN097].Client_VisibleSkin4;
          var v569 = vO5.clientesActivos[vLN097].Client_VisibleSkin5;
          var v570 = vO5.clientesActivos[vLN097].Client_VisibleSkin6;
          var v571 = vO5.clientesActivos[vLN097].Client_VisibleSkin7;
          var v572 = vO5.clientesActivos[vLN097].Client_VisibleSkin8;
          var v573 = vO5.clientesActivos[vLN097].Client_VisibleSkin9;
          var v574 = vO5.clientesActivos[vLN097].Client_VisibleSkin10;
          var v575 = vO5.clientesActivos[vLN097].Client_VisibleSkin11;
          var v576 = vO5.clientesActivos[vLN097].Client_VisibleSkin12;
          var v577 = vO5.clientesActivos[vLN097].Client_VisibleSkin13;
          var v578 = vO5.clientesActivos[vLN097].Client_VisibleSkin14;
          var v579 = vO5.clientesActivos[vLN097].Client_VisibleSkin15;
          var v580 = vO5.clientesActivos[vLN097].Client_VisibleSkin16;
          var v581 = vO5.clientesActivos[vLN097].Client_VisibleSkin17;
          var v582 = vO5.clientesActivos[vLN097].Client_VisibleSkin18;
          var v583 = vO5.clientesActivos[vLN097].Client_VisibleSkin19;
          var v584 = vO5.clientesActivos[vLN097].Client_VisibleSkin20;
          var v585 = vO5.clientesActivos[vLN097].Client_KeyAccecs;
          if (vO4.FB_UserID == 0) {} else if (vO4.FB_UserID == v563) {
            if (v585 == "XTPRIVATESKIN") {
              for (let vLN098 = 0; vLN098 < vO4.idSkin.length; vLN098++) {
                const v586 = vO4.idSkin[vLN098];
                if (v586.id == v564 || v586.id == v565 || v586.id == v566 || v586.id == v567 || v586.id == v568 || v586.id == v569 || v586.id == v570 || v586.id == v571 || v586.id == v572 || v586.id == v573 || v586.id == v574 || v586.id == v575 || v586.id == v576 || v586.id == v577 || v586.id == v578 || v586.id == v579 || v586.id == v580 || v586.id == v581 || v586.id == v582 || v586.id == v583 || v586.id == v584) {
                  v586.nonbuyable = false;
                }
              }
            } else {}
          } else {}
        }
      });
    }
    function f111() {
      vO4.adblock = true;
      $("#loa831pibur0w4gv").replaceWith("\n        <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n         <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <div class=\"label\" id=\"titleSetings\">Instructions and Updates</div>\n          <div class=\"bao-list1\">\n            <div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n              Update: 07/12/2024\n            </div>\n            <br>\n            <div class=\"list1\">\n            <i class=\"fa fa-volume-off\" aria-hidden=\"true\" style=\"color: #ff0000;\"></i>\nUpdates are complete - the tool has become very smooth even on weak devices - the tool works on mobile phones</div>\n<br> \n<br> <br> <br> <br>  \n<div class=\"list1\">\n              <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n\n              <a href=\"https://discord.gg/zNJkB8EeUF\">To communicate via Discord.</a>\n            </div>\n          </div>\n        </div>\n      ");
      $("#mm-coins-box").replaceWith("\n                <div style=\"margin: 0;\" id=\"mm-coins-box\">\n          <button \n            style=\"\n              width: 109px;\n              height: 32px;\n              float: right;\n              border-radius: 10px;\n              border: solid #fac 2px;\n            \" \n            id=\"getskin\">Unlock Skins</button>\n        </div>\n      ");
      window.multiplier = 1;
      window.zoomLevel = 5;
      window.onwheel = p638 => {
        if (p638.deltaY > 0) {
          window.multiplier *= 0.8;
        } else {
          window.multiplier /= 0.8;
        }
        window.changedNf();
      };
      function f112() {
        window.zoomLevel++;
        window.multiplier *= 0.8;
        changedNf();
        f114();
      }
      function f113() {
        if (window.zoomLevel > 0) {
          window.zoomLevel--;
          window.multiplier /= 0.8;
          changedNf();
          f114();
        }
      }
      function f114() {
        var v587 = Math.round(window.multiplier / 0.625 * 100);
        v587 = Math.min(100, v587);
        var v588 = document.getElementById("zoom-percentage");
        v588.textContent = v587 + "%";
      }
      document.getElementById("zoom-in").addEventListener("touchstart", f112, {
        passive: false
      });
      document.getElementById("zoom-out").addEventListener("touchstart", f113, {
        passive: false
      });
      window.onwheel = function (p639) {
        p639.preventDefault();
        if (p639.deltaY < 0) {
          f112();
        } else {
          f113();
        }
      };
      $("#settings-Abilityzoom-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.eat_animation = 1;
          localStorage.setItem("mySwitch", "on");
        } else {
          console.log("I'm not checked");
          vO4.eat_animation = 0.0025;
          localStorage.setItem("mySwitch", "off");
        }
      });
      $(document).ready(function () {
        var v589 = localStorage.getItem("mySwitch");
        if (v589 === "on") {
          $("#settings-Abilityzoom-switch").prop("checked", true);
          vO4.eat_animation = 1;
        } else {
          $("#settings-Abilityzoom-switch").prop("checked", false);
          vO4.eat_animation = 0.0025;
        }
      });
      $("#settings-stremingmode-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremer = true;
          localStorage.setItem("ModeStremer", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremer = false;
          localStorage.setItem("ModeStremer", "false");
        }
      });
      $(document).ready(function () {
        var v590 = localStorage.getItem("ModeStremer");
        if (v590 === "true") {
          vO4.ModeStremer = true;
          $("#settings-stremingmode-switch").prop("checked", true);
        } else {
          vO4.ModeStremer = false;
          $("#settings-stremingmode-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodebatop-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerbatop = true;
          localStorage.setItem("ModeStremerbatop", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerbatop = false;
          localStorage.setItem("ModeStremerbatop", "false");
        }
      });
      $(document).ready(function () {
        var v591 = localStorage.getItem("ModeStremerbatop");
        if (v591 === "true") {
          vO4.ModeStremerbatop = true;
          $("#settings-stremingmodebatop-switch").prop("checked", true);
        } else {
          vO4.ModeStremerbatop = false;
          $("#settings-stremingmodebatop-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodesaveheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremersaveheadshot = true;
          localStorage.setItem("ModeStremersaveheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremersaveheadshot = false;
          localStorage.setItem("ModeStremersaveheadshot", "false");
        }
        location.reload();
      });
      $(document).ready(function () {
        var v592 = localStorage.getItem("ModeStremersaveheadshot");
        if (v592 === "true") {
          vO4.ModeStremersaveheadshot = true;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremersaveheadshot = false;
          $("#settings-stremingmodesaveheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v593 = localStorage.getItem("ModeStremerheadshot");
        if (v593 === "true") {
          vO4.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeheadshot-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremerheadshot = true;
          localStorage.setItem("ModeStremerheadshot", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremerheadshot = false;
          localStorage.setItem("ModeStremerheadshot", "false");
        }
      });
      $(document).ready(function () {
        var v594 = localStorage.getItem("ModeStremerheadshot");
        if (v594 === "true") {
          vO4.ModeStremerheadshot = true;
          $("#settings-stremingmodeheadshot-switch").prop("checked", true);
        } else {
          vO4.ModeStremerheadshot = false;
          $("#settings-stremingmodeheadshot-switch").prop("checked", false);
        }
      });
      $("#settings-stremingmodeemoj-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.ModeStremeremoj = true;
          localStorage.setItem("ModeStremeremoj", "true");
        } else {
          console.log("I'm not checked");
          vO4.ModeStremeremoj = false;
          localStorage.setItem("ModeStremeremoj", "false");
        }
      });
      $(document).ready(function () {
        var v595 = localStorage.getItem("ModeStremeremoj");
        if (v595 === "true") {
          vO4.ModeStremeremoj = true;
          $("#settings-stremingmodeemoj-switch").prop("checked", true);
        } else {
          vO4.ModeStremeremoj = false;
          $("#settings-stremingmodeemoj-switch").prop("checked", false);
        }
      });
      $("#settings-arrowmobile-switch").on("click", function () {
        if (this.checked) {
          console.log("I am checked");
          vO4.arrow = false;
        } else {
          console.log("I'm not checked");
          vO4.arrow = true;
        }
      });
      $("#PortionSize").on("input", function () {
        vO4.PortionSize = $(this).val();
        localStorage.PotenciadorSize = vO4.PortionSize;
      });
      $("#PortionAura").on("input", function () {
        vO4.PortionAura = $(this).val();
        localStorage.PotenciadorAura = vO4.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        vO4.smoothCamera = $(this).val();
        localStorage.smoothCamera = vO4.smoothCamera;
      });
      $("#FoodSize").on("input", function () {
        vO4.FoodSize = $(this).val();
        localStorage.ComidaSize = vO4.FoodSize;
      });
      $("#FoodShadow").on("input", function () {
        vO4.FoodShadow = $(this).val();
        localStorage.ComidaShadow = vO4.FoodShadow;
      });
      $("#KeyRespawn,#KeyAutoMov").on("keydown", function (p640) {
        if (isValidHotkey(p640)) {
          var v$107 = $(this);
          var vGetPresedKey = getPresedKey(p640);
          var v596 = p640.keyCode;
          v$107.val(vGetPresedKey);
          v$107.blur();
          window.keyMove = v596;
          window.localStorage.setItem(v$107.attr("id"), v596);
        } else {
          p640.preventDefault();
        }
      });
      for (a = 0; a < vA15.length; a++) {
        var v597 = vA15[a].url;
        var v598 = vA15[a].nombre;
        let v599 = document.createElement("img");
        v599.src = v597;
        $(".cursor-container").prepend(v599);
        $(v599).attr("class", "cursor");
        $(v599).click(function () {
          let v600 = $(this).attr("src");
          localStorage.cursorSeleccionado = v600;
          $("#game-cont").css({
            cursor: "url(" + v600 + "), default"
          });
          $("#game-canvas").css({
            cursor: "url(" + v600 + "), default"
          });
          $("body").css({
            cursor: "url(" + v600 + "), default"
          });
        });
        $("#default-cursor-btn").click(function () {
          delete localStorage.cursorSeleccionado;
          $("#game-cont, #game-canvas, body").css("cursor", "default");
        });
      }
      $("#game-cont").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("#game-canvas").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      $("body").css({
        cursor: "url(" + localStorage.cursorSeleccionado + "), default"
      });
      for (a = 0; a < vA16.length; a++) {
        var v601 = vA16[a].url;
        var v602 = vA16[a].nombre;
        let v603 = document.createElement("img");
        v603.src = v601;
        $(".background-container").prepend(v603);
        $(v603).attr("class", "background");
        $(v603).attr("value", v602);
        $(v603).click(function () {
          let v604 = $(this).attr("src");
          let v605 = $(this).attr("value");
          backgroundIMG = v604;
          localStorage.fondoSeleccionado = backgroundIMG;
          alert("You selected the background: " + v605);
          vUndefined2.q.Cf = new vF4._b(vUndefined2.q.fn_o(v604));
        });
      }
      $(".background-container").prepend("");
      vUndefined2.q.Cf = new vF4._b(vUndefined2.q.fn_o(localStorage.fondoSeleccionado));
    }
    function f115(p641, p642) {
      let vF79 = function (p643, p644, p645, p646) {
        vO7.setCountGame(p643, p644, p645, p646);
      };
      if (p641 === "count") {
        vO4.kill = (vO4.kill || 0) + (p642 ? 0 : 1);
        vO4.headshot = (vO4.headshot || 0) + (p642 ? 1 : 0);
        vO4.totalKills = vO4.totalKills + (p642 ? 0 : 1);
        vO4.totalHeadshots = vO4.totalHeadshots + (p642 ? 1 : 0);
        vF79(vO4.kill, vO4.headshot, vO4.totalKills, vO4.totalHeadshots);
      }
      if (p641 === "open") {
        vO4.kill = 0;
        vO4.headshot = 0;
        $("#contadorKill_12").show();
        vF79(vO4.kill, vO4.headshot, vO4.totalKills, vO4.totalHeadshots);
      }
      if (p641 === "closed") {
        vO2 = {};
      }
      if (p641 === "cerrar") {
        vO4.kill = 0;
        vO4.headshot = 0;
        vO4.totalKills = 0;
        vO4.totalHeadshots = 0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(3, 2);
      };
    }
    setTimeout(function () {
      var vA17 = ["كلب", "fuck", "fuak", "جحش", "أن الله يراك", "عرضك", "نظيف", "طيبة", "اخوك", "اختك", "امك", "ابوك", "قواد", "ملعون"];
      function f116(p647) {
        if (!p647) {
          return "";
        }
        return p647.toLowerCase().replace(/[^a-zA-Z0-9\u0600-\u06FF*]/g, "").replace(/[ـ]/g, "").replace(/[ًٌٍَُِّْ]/g, "").replace(/[أإآا]/g, "ا").replace(/[ىي]/g, "ي").replace(/[ة]/g, "ه");
      }
      function f117(p648, p649) {
        if (!p648) {
          return false;
        }
        var v606 = p648.replace(/\*$/, "");
        var vF1162 = f116(v606);
        var v607 = Array.isArray(p649) ? p649 : Object.values(p649);
        return v607.some(function (p650) {
          var vF1163 = f116(p650);
          return vF1162.includes(vF1163);
        });
      }
      function f118(p651) {
        if (!p651 || p651.trim() === "") {
          const v608 = localStorage.getItem("lastValidNickname");
          return v608 || "";
        }
        if (f117(p651, vA17)) {
          return "أن الله يراك*";
        }
        localStorage.setItem("lastValidNickname", p651);
        return p651;
      }
      function f119() {
        const v609 = new MutationObserver(function () {
          const v610 = $("#mm-params-nickname").val();
          const v611 = localStorage.getItem("lastValidNickname");
          if (v610 !== v611 && v611 && !f117(v611, vA17)) {
            if (v610 && !f117(v610, vA17)) {
              localStorage.setItem("lastValidNickname", v610);
            } else {
              $("#mm-params-nickname").val(v611);
            }
          }
        });
        const v612 = document.getElementById("mm-params-nickname");
        if (v612) {
          v609.observe(v612, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
          });
        }
      }
      $("#mm-action-play").on("click", function () {
        var v613 = $("#mm-params-nickname").val();
        if (v613 && v613.trim() !== "") {
          var vF1182 = f118(v613);
          $("#mm-params-nickname").val(vF1182);
          if (vF1182 !== "أن الله يراك*") {
            localStorage.setItem("lastValidNickname", vF1182);
          }
        }
      });
      $("#final-continue1, #final-replay").on("click", function () {
        setTimeout(() => {
          const v614 = localStorage.getItem("lastValidNickname");
          if (v614 && !f117(v614, vA17)) {
            $("#mm-params-nickname").val(v614);
          }
        }, 100);
      });
      $("#home-button, .home-button, [data-action=\"home\"]").on("click", function () {
        const v615 = $("#mm-params-nickname").val();
        if (v615 && !f117(v615, vA17)) {
          localStorage.setItem("lastValidNickname", v615);
        }
      });
      fetch("https://wormateup.live/up/api/words/get_banned_words.php").then(p652 => p652.json()).then(p653 => {
        vA17 = Array.isArray(p653) ? p653 : Object.values(p653);
      }).catch(p654 => {
        console.error("Error loading banned words:", p654);
      });
      $(document).ready(function () {
        var v616 = localStorage.getItem("lastValidNickname");
        if (v616 && !f117(v616, vA17)) {
          $("#mm-params-nickname").val(v616);
        }
        f119();
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $("#mm-player-info").css("display", "block");
      $("#mm-bottom-buttons").addClass("buttonNavidad");
      $("#relojHelp").css({
        position: "absolute",
        top: "12px",
        left: "5px"
      });
      $("#delete-account-view").css("display", "none");
    }, 3000);
    var v_0x4b76f2 = function f120() {
      requestAnimationFrame(f120);
      f11().Pa();
    };
    v_0x4b76f2();
    function f121() {
      var v617 = v$108.width();
      var v618 = v$108.height();
      var v619 = v$109.outerWidth();
      var v620 = v$109.outerHeight();
      var v621 = v$110.outerHeight();
      var v622 = v$111.outerHeight();
      var v623 = Math.min(1, Math.min((v618 - v622 - v621) / v620, v617 / v619));
      var v624 = "translate(-50%, -50%) scale(" + v623 + ")";
      v$109.css({
        "-webkit-transform": v624,
        "-moz-transform": v624,
        "-ms-transform": v624,
        "-o-transform": v624,
        transform: v624
      });
      f11().Ra();
      window.scrollTo(0, 1);
    }
    var v$108 = $("body");
    var v$109 = $("#stretch-box");
    var v$110 = $("#markup-header");
    var v$111 = $("#markup-footer");
    f121();
    $(window).resize(f121);
  })();
  window.anApp.p.Bc = function () {
    var v625 = window.anApp.p;
    var vO20 = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (p655) {
      vO20 = p655;
      $.ajax({
        url: "https://platenxo.github.io/bypass/myextension/skins/index.php",
        method: "GET",
        dataType: "json",
        success: function (p656) {
          vO4.visibleSkin = p656.visibleSkin;
          delete p656.visibleSkin;
          for (let v626 in p656) {
            if (v626 !== "propertyList") {
              if (Array.isArray(p656[v626])) {
                p655[v626] = p655[v626].concat(p656[v626]);
              } else {
                p655[v626] = {
                  ...p655[v626],
                  ...p656[v626]
                };
              }
            }
          }
          vO4.pL = p656.propertyList;
          vO4.idSkin = p656.skinArrayDict;
          v625.Cc(p655);
        },
        error: function (p657, p658, p659) {
          console.error(p659);
          v625.Cc(vO20);
        }
      });
    });
  };
  $("#background-canvas").replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $("#popup-login-gg").html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $("#social-buttons").replaceWith("");
  $("#markup-footer").replaceWith("<footer id=\"markup-footer\"><div class=\"lang-menu\"><button class=\"lang-button\">Language </button><div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a><a hreflang=\"de\" href=\"/de/\">Deutsch</a><a hreflang=\"fr\" href=\"/fr/\">FranÃ§ais</a><a hreflang=\"es\" href=\"/es/\">EspaÃ±ol</a></div></div><a class=\"link\" hreflang=\"en\" href=\"https://wormate.io\">© 2026 Platen</a><a style=\"font-size: 17px;font-weight: 600;\">wormate.io</a><a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:white'></i> in Türkiye !</a></footer>");
});
function f122() {
  var v627 = document.getElementById("popup");
  var v628 = document.getElementById("overlay");
  v627.style.display = "block";
  v628.style.display = "block";
}
function f123() {
  var v629 = document.getElementById("popup");
  var v630 = document.getElementById("overlay");
  v629.style.display = "none";
  v630.style.display = "none";
}
function f124() {
  $(".mx").on("click", function () {
    $(".servers-mexico").fadeIn(500);
    $("#addflag").attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(100);
    $(".servers-eeuu").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(500);
    $("#addflag").attr("class", "flag br");
  });
  $(".us").on("click", function () {
    $(".servers-eeuu").fadeIn(500);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".ca").on("click", function () {
    $(".servers-canada").fadeIn(500);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr("class", "ui-tab-active ui-tab-inactive3");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".de").on("click", function () {
    $(".servers-germania").fadeIn(500);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(500);
    $(".servers-canada").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(500);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".sg").on("click", function () {
    $(".servers-singapur").fadeIn(500);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".jp").on("click", function () {
    $(".servers-japon").fadeIn(500);
    $("#addflag").attr("class", "flag jp");
    $(".ui-tab-inactive7").attr("class", "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-australia").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".au").on("click", function () {
    $(".servers-australia").fadeIn(500);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-granbretana").fadeOut(100);
  });
  $(".gb").on("click", function () {
    $(".servers-granbretana").fadeIn(500);
    $("#addflag").attr("class", "flag gb");
    $(".ui-tab-inactive9").attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(100);
    $(".servers-mexico").fadeOut(100);
    $(".servers-peru").fadeOut(100);
    $(".servers-canada").fadeOut(100);
    $(".servers-germania").fadeOut(100);
    $(".servers-francia").fadeOut(100);
    $(".servers-singapur").fadeOut(100);
    $(".servers-japon").fadeOut(100);
    $(".servers-australia").fadeOut(100);
  });
}
getPresedKey = function (p660) {
  var vLS5 = "";
  if (p660.keyCode == 9) {
    vLS5 += "TAB";
  } else if (p660.keyCode == 13) {
    vLS5 += "ENTER";
  } else if (p660.keyCode == 16) {
    vLS5 += "SHIFT";
  } else {
    vLS5 += String.fromCharCode(p660.keyCode);
  }
  return vLS5;
};
isValidHotkey = function (p661) {
  return !!(p661.keyCode >= 48) && !!(p661.keyCode <= 57) || !!(p661.keyCode >= 65) && !!(p661.keyCode <= 90) || p661.keyCode == 9 || p661.keyCode == 13 || p661.keyCode == 16 || p661.keyCode == 32 || p661.keyCode == 27;
};
eval(function (p662, p663, p664, p665, p666, p667) {
  p666 = function (p668) {
    return (p668 < p663 ? "" : p666(parseInt(p668 / p663))) + ((p668 = p668 % p663) > 35 ? String.fromCharCode(p668 + 29) : p668.toString(36));
  };
  if (!"".replace(/^/, String)) {
    while (p664--) {
      p667[p666(p664)] = p665[p664] || p666(p664);
    }
    p665 = [function (p669) {
      return p667[p669];
    }];
    p666 = function () {
      return "\\w+";
    };
    p664 = 1;
  }
  ;
  while (p664--) {
    if (p665[p664]) {
      p662 = p662.replace(new RegExp("\\b" + p666(p664) + "\\b", "g"), p665[p664]);
    }
  }
  return p662;
});
function f125(p670) {
  if (p670.key === "z") {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener("wheel", f125);
document.addEventListener("DOMContentLoaded", () => {
  let vO21 = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    radius: 7
  };
  let v631 = vO21.x;
  let v632 = vO21.y;
  let vLN099 = 0;
  function f126() {
    let v633 = Date.now();
    fetch(window.location.href).then(() => {
      let v634 = Date.now();
      vLN099 = v634 - v633;
      if (vLN099 > 149) {
        v635.style.color = "red";
      } else if (vLN099 > 99) {
        v635.style.color = "yellow";
      } else {
        v635.style.color = "green";
      }
    }).catch(() => {
      vLN099 = "Error";
      v635.style.color = "red";
    });
  }
  let v635 = document.createElement("div");
  v635.style.position = "fixed";
  v635.style.right = "5px";
  v635.style.bottom = "5px";
  v635.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  v635.style.color = "white";
  v635.style.padding = "2px 5px";
  v635.style.fontSize = "12px";
  v635.style.borderRadius = "3px";
  v635.style.fontWeight = "bold";
  v635.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(v635);
  document.addEventListener("mousemove", p671 => {
    v631 = p671.clientX;
    v632 = p671.clientY;
  });
  function f127() {
    let v636 = v631 - vO21.x;
    let v637 = v632 - vO21.y;
    let v638 = Math.sqrt(v636 * v636 + v637 * v637);
    if (v638 > vO21.radius) {
      vO21.x += v636 / v638 * vO21.radius;
      vO21.y += v637 / v638 * vO21.radius;
    } else {
      vO21.x = v631;
      vO21.y = v632;
    }
    let v639 = document.getElementById("solucan");
    if (v639) {
      v639.style.left = vO21.x + "px";
      v639.style.top = vO21.y + "px";
    }
    v635.textContent = "Ping: " + vLN099 + "ms";
    requestAnimationFrame(f127);
  }
  f127();
  setInterval(f126, 1000);
});
document.addEventListener("keydown", p672 => {
  if (p672.key === "F12") {
    p672.preventDefault();
  }
}, false);
document.addEventListener("contextmenu", p673 => {
  p673.preventDefault();
}, false);
window.addEventListener("keydown", p674 => {
  const v640 = p674.key.toLowerCase();
  if (v640 === "z" || v640 === "ئ") {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
class C {
  constructor() {
    this.textureCache = new Map();
    this.maxCacheSize = 100;
    this.gcInterval = 10000;
    this.lastGC = 0;
    this.memoryThreshold = 0.8;
    this.lowMemoryMode = false;
  }
  init() {
    this.setupMemoryMonitoring();
    this.setupGCInterval();
  }
  clearUnusedTextures() {
    if (this.textureCache.size > this.maxCacheSize) {
      const v641 = Array.from(this.textureCache.entries()).slice(0, Math.floor(this.maxCacheSize * 0.2));
      v641.forEach(([v642, v643]) => {
        v643.destroy(true);
        this.textureCache.delete(v642);
      });
    }
  }
  setupMemoryMonitoring() {
    setInterval(() => {
      if (performance && performance.memory) {
        const v644 = performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit;
        if (v644 > this.memoryThreshold) {
          this.enableLowMemoryMode();
        } else if (this.lowMemoryMode && v644 < this.memoryThreshold * 0.8) {
          this.disableLowMemoryMode();
        }
      }
    }, 5000);
  }
  setupGCInterval() {
    setInterval(() => {
      const v645 = Date.now();
      if (v645 - this.lastGC > this.gcInterval) {
        this.cleanupUnusedResources();
        this.lastGC = v645;
      }
    }, this.gcInterval);
  }
  enableLowMemoryMode() {
    this.lowMemoryMode = true;
  }
  disableLowMemoryMode() {
    this.lowMemoryMode = false;
  }
  cleanupUnusedResources() {
    this.clearUnusedTextures();
  }
}
class C2 {
  constructor() {
    this.frameCount = 0;
    this.lastTime = 0;
    this.fps = 0;
    this.frameSkipThreshold = 16;
    this.lastFrameTime = 0;
    this.fpsHistory = [];
    this.qualityLevels = {
      HIGH: {
        particleCount: 100,
        shadowQuality: 1,
        antialiasing: true
      },
      MEDIUM: {
        particleCount: 50,
        shadowQuality: 0.5,
        antialiasing: true
      },
      LOW: {
        particleCount: 25,
        shadowQuality: 0,
        antialiasing: false
      }
    };
    this.currentQuality = "HIGH";
    this.buffer = null;
    this.showGrid = false;
    this.gridColor = "rgba(255,255,255,0.2)";
    this.gridSize = 50;
  }
  init() {
    this.createBuffer();
    this.startMonitoring();
  }
  createBuffer() {
    const v646 = document.createElement("canvas");
    const v647 = v646.getContext("2d", {
      alpha: false,
      willReadFrequently: true
    });
    const v648 = window.anApp?.o?.fb?.ub || 500;
    v646.width = v648;
    v646.height = v648;
    v647.imageSmoothingEnabled = false;
    this.buffer = {
      canvas: v646,
      ctx: v647
    };
  }
  shouldRenderFrame(p675) {
    const v649 = p675 - this.lastFrameTime;
    if (v649 >= this.frameSkipThreshold) {
      this.lastFrameTime = p675;
      this.updateFPS(v649);
      return true;
    }
    return false;
  }
  updateFPS(p676) {
    const v650 = 1000 / p676;
    this.fpsHistory.push(v650);
    if (this.fpsHistory.length > 60) {
      this.fpsHistory.shift();
    }
    this.adjustQuality();
  }
  adjustQuality() {
    const v651 = this.getAverageFPS();
    if (v651 < 30 && this.currentQuality !== "LOW") {
      this.currentQuality = "LOW";
      this.applyQualitySettings();
    } else if (v651 > 45 && v651 < 55 && this.currentQuality !== "MEDIUM") {
      this.currentQuality = "MEDIUM";
      this.applyQualitySettings();
    } else if (v651 > 58 && this.currentQuality !== "HIGH") {
      this.currentQuality = "HIGH";
      this.applyQualitySettings();
    }
  }
  startMonitoring() {
    const vF80 = () => {
      const v652 = performance.now();
      if (this.shouldRenderFrame(v652)) {}
      requestAnimationFrame(() => vF80());
    };
    vF80();
  }
  getAverageFPS() {
    return this.fpsHistory.reduce((p677, p678) => p677 + p678, 0) / this.fpsHistory.length;
  }
  applyQualitySettings() {
    const v653 = this.qualityLevels[this.currentQuality];
    if (window.anApp?.renderer) {
      window.anApp.renderer.antialias = v653.antialiasing;
    }
  }
}
class C3 {
  constructor() {
    this.inputBuffer = [];
    this.bufferSize = 5;
    this.inputDelay = 16;
    this.lastInputTime = 0;
    this.mouseSensitivity = 1;
  }
  init() {
    this.setupEventListeners();
  }
  setupEventListeners() {
    document.addEventListener("keydown", p679 => this.handleKeyInput(p679));
    document.addEventListener("mousemove", p680 => this.handleMouseInput(p680));
  }
  handleKeyInput(p681) {
    const v654 = this.processInput({
      type: "keyboard",
      key: p681.key,
      timestamp: performance.now()
    });
    if (v654) {
      this.executeInput(v654);
    }
  }
  handleMouseInput(p682) {
    const v655 = this.processInput({
      type: "mouse",
      x: p682.movementX * this.mouseSensitivity,
      y: p682.movementY * this.mouseSensitivity,
      timestamp: performance.now()
    });
    if (v655) {
      this.executeInput(v655);
    }
  }
  processInput(p683) {
    const v656 = performance.now();
    if (v656 - this.lastInputTime < this.inputDelay) {
      return null;
    }
    this.inputBuffer.push(p683);
    if (this.inputBuffer.length > this.bufferSize) {
      this.inputBuffer.shift();
    }
    this.lastInputTime = v656;
    return this.getPredictedInput();
  }
  getPredictedInput() {
    if (this.inputBuffer.length < 2) {
      return this.inputBuffer[this.inputBuffer.length - 1];
    }
    return this.inputBuffer[this.inputBuffer.length - 1];
  }
  executeInput(p684) {
    if (p684.type === "keyboard") {} else if (p684.type === "mouse") {}
  }
}
class C4 {
  constructor() {
    this.lastTime = 0;
    this.frameCount = 0;
    this.fps = 0;
    this.slowFrames = 0;
    this.debugMode = false;
  }
  init() {
    this.startMonitoring();
  }
  startMonitoring() {
    const vF81 = () => {
      const v657 = performance.now();
      const v658 = v657 - this.lastTime;
      this.frameCount++;
      if (v658 >= 1000) {
        this.fps = Math.round(this.frameCount * 1000 / v658);
        this.frameCount = 0;
        this.lastTime = v657;
        if (this.debugMode) {
          this.logStats();
        }
      }
      if (v658 > 16.67) {
        this.slowFrames++;
        if (this.debugMode) {
          this.logPerformanceIssue(v658);
        }
      }
      requestAnimationFrame(() => vF81());
    };
    vF81();
  }
  logStats() {
    console.debug("Performance Stats - FPS: " + this.fps + " | Slow Frames: " + this.slowFrames);
  }
  logPerformanceIssue(p685) {
    console.warn("Performance issue detected: " + Math.round(p685) + "ms frame time");
  }
  toggleDebugMode() {
    this.debugMode = !this.debugMode;
    console.log("Debug mode: " + (this.debugMode ? "enabled" : "disabled"));
  }
}
class C5 {
  constructor() {
    this.resourceManager = new C();
    this.renderOptimizer = new C2();
    this.inputManager = new C3();
    this.diagnostics = new C4();
  }
  init() {
    this.resourceManager.init();
    this.renderOptimizer.init();
    this.inputManager.init();
    this.diagnostics.init();
  }
}
class C6 {
  constructor() {
    this.fpsTarget = this.detectRefreshRate();
    this.currentFps = 0;
    this.frameTime = 1000 / this.fpsTarget;
    this.lastFrameTime = 0;
    this.initialized = false;
    this.fpsHistory = [this.fpsTarget];
  }
  detectRefreshRate() {
    if (window.screen && window.screen.refresh) {
      return window.screen.refresh;
    }
    return 60;
  }
  init() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    window.theoKzObjects = window.theoKzObjects || {};
    window.theoKzObjects.performanceMode = {
      renderDistance: 1,
      animationQuality: 1,
      eat_animation: 0.0025,
      smoothCamera: 0.5
    };
    this.startPerformanceMonitoring();
  }
  startPerformanceMonitoring() {
    let vLN0100 = 0;
    let v659 = performance.now();
    const vF82 = () => {
      const v660 = performance.now();
      vLN0100++;
      if (v660 - v659 >= 1000) {
        this.currentFps = vLN0100;
        this.fpsHistory.push(this.currentFps);
        if (this.fpsHistory.length > 3) {
          this.fpsHistory.shift();
        }
        vLN0100 = 0;
        v659 = v660;
        this.adjustPerformance();
      }
      requestAnimationFrame(vF82);
    };
    vF82();
  }
  adjustPerformance() {
    const v661 = window.theoKzObjects.performanceMode;
    const v662 = this.fpsHistory.reduce((p686, p687) => p686 + p687, 0) / this.fpsHistory.length;
    const v663 = this.fpsTarget;
    const v664 = v662 / v663;
    if (v664 < 0.5) {
      v661.renderDistance = 0.6;
      v661.animationQuality = 0.6;
      window.theoKzObjects.eat_animation = 0.006;
      window.theoKzObjects.smoothCamera = 0.3;
    } else if (v664 < 0.75) {
      v661.renderDistance = 0.7;
      v661.animationQuality = 0.8;
      window.theoKzObjects.eat_animation = 0.005;
      window.theoKzObjects.smoothCamera = 0.4;
    } else if (v664 < 0.9) {
      v661.renderDistance = 0.8;
      v661.animationQuality = 0.9;
      window.theoKzObjects.eat_animation = 0.004;
      window.theoKzObjects.smoothCamera = 0.45;
    } else {
      v661.renderDistance = 1;
      v661.animationQuality = 1;
      window.theoKzObjects.eat_animation = 0.0025;
      window.theoKzObjects.smoothCamera = 0.5;
    }
  }
  throttle(p688, p689) {
    let v665;
    return function (..._0x2cf9d4) {
      if (!v665) {
        p688.apply(this, _0x2cf9d4);
        v665 = true;
        setTimeout(() => v665 = false, p689);
      }
    };
  }
}
if (vF()) {
  const v666 = new C6();
  v666.init();
}
window.GameOptimizer = new C5();
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.GameOptimizer.init());
} else {
  window.GameOptimizer.init();
}