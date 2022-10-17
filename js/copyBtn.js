const copyBtnAddressKr = document.querySelector(".copy-address-kr");
const copyBtnAddressEn = document.querySelector(".copy-address-en");
const copyBtnEmail = document.querySelector(".copy-email");

function copyToClipboard(val) {
  const t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  document.execCommand("copy");
  document.body.removeChild(t);
}
function copyAddressKr() {
  copyToClipboard("대전 유성구 유성대로1184번길 11-27");
  alert("주소를 복사하였습니다.");
}
function copyAddressEn() {
  copyToClipboard("11-27 Yuseong-daero 1184beon-gil, Yuseong-gu, Daejeon");
  alert("Address was copied");
}
function copyEmail() {
  copyToClipboard("office@antbridge.kr");
  alert("메일주소를 복사하였습니다.");
}

copyBtnAddressKr.addEventListener("click", copyAddressKr);
copyBtnAddressEn.addEventListener("click", copyAddressEn);
copyBtnEmail.addEventListener("click", copyEmail);
