function szamol() {
    let db = parseInt(document.getElementById("zacsidb").value);
    let zacsiar = parseInt(document.getElementById("zacsiar").value);
    
    // Havi és éves költség számítása
    let havikoltseg = Math.round((db / 230) * zacsiar * 6 * 30);  // 230 az alap érték, amit beállítasz
    let evikoltseg = Math.round(havikoltseg * 12);
    
    document.getElementById("havikoltseg").value = `${havikoltseg} Ft`;
    document.getElementById("evikoltseg").value = `${evikoltseg} Ft`;
}