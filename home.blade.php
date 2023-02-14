<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>

        #reader canvas#qr-canvas-visible{
            display: none;
        }

    </style>
</head>
<body>
    
    <div class="mb-3">{!! DNS2D::getBarcodeHTML('
    nama = ilyas
    kelas = Rpl 120
    absen = 150
    ', 'QRCODE') !!}</div>

    <div id="reader" style="display:none"></div>
    <div id="foto" style="width:30%;margin-top:10px"></div>

    <input type="file" id="qr-input-file" style="margin-top: 10px;margin-left:10px"  accept="image/*">

    <p id="hasil" ></p>

    <script src="https://unpkg.com/html5-qrcode" type="text/javascript"> </script>

    <script>
        let hasil = document.querySelector("#hasil");
        // =====================================================================>KAMERA

        function onScanSuccess(decodedText, decodedResult) {
        // handle the scanned code as you like, for example:
        hasil.innerHTML = decodedText
        }

        function onScanFailure(error) {
        // handle scan failure, usually better to ignore and keep scanning.
        // for example:
        console.warn(`Code scan error = ${error}`);
        }

        let html5QrcodeScanner = new Html5QrcodeScanner(
        "foto",
        { fps: 10, qrbox: {width: 250, height: 250} },
        /* verbose= */ false);
        html5QrcodeScanner.render(onScanSuccess, onScanFailure);

        // ======================================================================>FOLDER

        const html5QrCode = new Html5Qrcode(/* element id */ "reader");
        // File based scanning
        const fileinput = document.getElementById('qr-input-file');
        fileinput.addEventListener('change', e => {
        if (e.target.files.length == 0) {
            // No file selected, ignore 
            return;
        }

        const imageFile = e.target.files[0];
        // Scan QR Code
        html5QrCode.scanFile(imageFile, true)
        .then(decodedText => {
            // success, use decodedText
            let hasil = document.querySelector("#hasil");
            hasil.innerHTML = decodedText
        })
        .catch(err => {
            // failure, handle it.
            console.log(`Error scanning file. Reason: ${err}`)
        });
        });

    </script>
</body>
</html>