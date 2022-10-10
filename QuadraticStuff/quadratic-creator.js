function create() {
    event.preventDefault();
    let x1 = parseFloat(document.forms["createForm"]["x1"].value);
    let x2 = parseFloat(document.forms["createForm"]["x2"].value);

    let SOR = (x1 + x2)*-1;
    let POR = x1*x2;
    if(SOR % 1 == 0 && POR % 1 == 0) {
        document.getElementById("result").innerHTML = `x<sup>2</sup> ${(SOR<=0?"":"+")} ${SOR}x ${(POR<=0?"":"+")} ${POR} = 0`;

    } 
    else {
        let a = 1;
        let i = 2;
        let m = 0;
        while(true) {
            if(((SOR * i) % 1 == 0) && ((POR * i) % 1 == 0)) {
                m = i;
                break;
            } 
            i+=1;
        } 
        
        a = a*m;
        SOR = SOR * m;
        POR = POR * m;
        document.getElementById("result").innerHTML = `${a}x<sup>2</sup> ${(SOR<=0?"":"+")} ${SOR}x ${(POR<=0?"":"+")} ${POR} = 0`;
    } 		
}