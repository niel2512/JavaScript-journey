let aritmatika1, aritmatika2, operator, hasil
document.getElementById("button").onclick = function () {
  aritmatika1 = document.getElementById("aritmatika1").value;
  aritmatika2 = document.getElementById("aritmatika2").value;
  operator = document.getElementById("operator").value;
  hasil = eval(aritmatika1 + operator + aritmatika2);

  document.getElementById("hasil").textContent = hasil;
}

let boolean1, boolean2, operatorBool, hasilBool
document.getElementById("buttonBool").onclick = function () {
  boolean1 = document.getElementById("boolean1").value;
  boolean2 = document.getElementById("boolean2").value;
  operatorBool = document.getElementById("operatorBool").value;
  hasilBool = eval(boolean1 + operatorBool + boolean2);

  document.getElementById("hasilBool").textContent = hasilBool;
}

let komparasi1, komparasi2, operatorKomparasi, hasilKomparasi
document.getElementById("buttonKomparasi").onclick = function () {
  komparasi1 = document.getElementById("komparasi1").value;
  komparasi2 = document.getElementById("komparasi2").value;
  operatorKomparasi = document.getElementById("operatorKomparasi").value;
  hasilKomparasi = eval(komparasi1 + operatorKomparasi + komparasi2);

  document.getElementById("hasilKomparasi").textContent = hasilKomparasi;
}