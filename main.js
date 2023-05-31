
// BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN
function tongtienluong() {
	var tagLuong1Ngay = document.getElementById("luong1Ngay").value;
	var tagSoNgayLam = document.getElementById("soNgayLam").value;
	var hienThiKetQua = "Tổng lương là: " + tagLuong1Ngay * tagSoNgayLam;
	document.getElementById("ketQuaDangNhap").innerHTML = hienThiKetQua;
}

// BÀI 2: TÍNH TRUNG BÌNH
function trungbinh() {
	var tagNum1 = parseFloat(document.getElementById("num1").value);
	var tagNum2 = parseFloat(document.getElementById("num2").value);
	var tagNum3 = parseFloat(document.getElementById("num3").value);
	var tagNum4 = parseFloat(document.getElementById("num4").value);
	var tagNum5 = parseFloat(document.getElementById("num5").value);
	var result = (tagNum1 + tagNum2 + tagNum3 + tagNum4 + tagNum5) / 5;
	var hienThiTrungBinh = "Trung bình là: " + result;
	document.getElementById("ketQuaTrungBinh").innerHTML = hienThiTrungBinh;
}

//BÀI 3: QUY ĐỔI TIỀN
function doitien() {
	var tagDoLaMy = parseFloat;
}
