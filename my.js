function check() {
    let fruit = document.getElementById('fruit');
    let total = '';
    switch (fruit) {
        case 'Ổi':
        case 'Dưa hấu':
            total = '20000 VNĐ/Kg';
            break;
        case 'Táo': 
        case 'Xoài': 
            total = '30000 VNĐ/Kg';
            break;
        case 'Cam':
        case 'Chôm chôm':
            total = '40000 VNĐ/Kg';
            break;
        case 'Măng cụt':
            total = '50000 VNĐ/Kg';
            break;
    }
    document.getElementById('result').innerHTML = total;
}