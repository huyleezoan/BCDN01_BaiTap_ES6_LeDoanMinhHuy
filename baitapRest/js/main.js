let TinhDiemTB = (...mangMon) => {
    let dtb = 0;
    mangMon.map((item) => {
        dtb += parseFloat(item);
    });
    dtb /= mangMon.length;
    return dtb.toFixed(2);
}

document.querySelector("#btnKhoi1").addEventListener("click", () => {
    let toan = document.querySelector("#inpToan").value;
    let ly = document.querySelector("#inpLy").value;
    let hoa = document.querySelector("#inpHoa").value;
    document.querySelector("#tbKhoi1").innerHTML = TinhDiemTB(toan, ly, hoa);
});
document.querySelector("#btnKhoi2").addEventListener("click", () => {
    let van = document.querySelector("#inpVan").value;
    let su = document.querySelector("#inpSu").value;
    let dia = document.querySelector("#inpDia").value;
    let tiengAnh = document.querySelector("#inpEnglish").value;
    document.querySelector("#tbKhoi2").innerHTML = TinhDiemTB(van, su, dia, tiengAnh);
});