const MyElement = React.createElement('h1', {id: 'judul'}, 'Haii' )
ReactDOM.render(MyElement, document.getElementsById('p'))

function Multiple(){
        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").innerHTML = num1 * num2;
    };
    function Divide(){
        num1 = document.getElementById("first").value;
        num2 = document.getElementById("second").value;
        document.getElementById("result").innerHTML = num1 / num2;
    };

    function Check(){
        number = document.getElementById("number").value;
        if (number % 3 == 0 || number % 7 == 0){
            document.getElementById("truth").innerHTML = "Yess, the number is multiple of 3 or 7";
        }else{
            document.getElementById("truth").innerHTML = "Noo, the number is't multiple of 3 or 7";
        };
    };

    function range(){
        num = document.getElementById("range_num").value;
        if (num > 50 && num < 99){
            document.getElementById("result_range").innerHTML = "Yess, it is";
        }else{
            document.getElementById("result_range").innerHTML = "Noo, it's not";
        };
    };

    function larRang(){
        num1 = document.getElementById("large_range1").value;
        num2 = document.getElementById("large_range2").value;
        if (num1 > 40 && num1 < 60 && num2 > 40 && num2 < 60){
            if (num1 == num2){
                document.getElementById("larRang_result").innerHTML = "The numbers are same";
            }else if (num1 > num2 ){
                document.getElementById("larRang_result").innerHTML = `${num1} is larger then ${num2}`;
            }else{
                document.getElementById("larRang_result").innerHTML = num2 + " is larger then " + num1;
            };
        }else{
            document.getElementById("larRang_result").innerHTML = "The number is't in range 40-60";
        };
    };

    function time(){
        number = document.getElementById("convert").value;
        var hours = Math.floor (number / 60 );
        var minutes = number % 60 ;
        document.getElementById("convert_result").innerHTML = `${hours} Hours ${minutes} Minutes`;
    };

    function perhitungan(){
        angka1 = parseFloat(document.getElementById("angka1").value);
        angka2 = parseFloat(document.getElementById("angka2").value);
        operasi = document.querySelector('input[name="operasi"]:checked');
        if (!operasi) {
            alert("Pilih dulu operatornya bos!");
        return;
        }

        hasil = 0;
        switch (operasi.value){
            case "tambah":
                hasil = angka1 + angka2;
                break;
            case "kurang":
                hasil = angka1 - angka2;
                break;
            case "kali":
                hasil = angka1 * angka2;
                break;
            case "bagi":
                hasil = angka1 / angka2;
                break
        };
        document.getElementById("hasil_bos").innerHTML = hasil;
    }