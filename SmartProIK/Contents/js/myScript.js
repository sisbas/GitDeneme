var sayac = 0;
document.getElementById('yeniAdres').addEventListener('click', function () {
    sayac++;

    var anaDiv = document.getElementById('iletisim-tab');
    var testNode = document.createElement('div');
    testNode.setAttribute("id", "gizliAdres" + sayac);
    anaDiv.appendChild(testNode);
    var formGroupDiv = document.createElement('div');
    formGroupDiv.setAttribute('class', 'form-group');
    testNode.appendChild(formGroupDiv);
    var labelIl = document.createElement('label');
    labelIl.setAttribute('class', 'col-lg-3 control-label')
    labelIl.innerText = "İl"
    formGroupDiv.appendChild(labelIl);
    var selectDiv = document.createElement('div');
    selectDiv.setAttribute('class', 'col-lg-5');
    var selectIl = document.createElement('select');
    selectIl.setAttribute('id', 'il' + sayac);
    selectDiv.appendChild(selectIl);
    var selectOpt = document.createElement('option');
    selectOpt.innerText = "";
    selectIl.appendChild(selectOpt);
    formGroupDiv.appendChild(selectDiv);

    var formGroupDiv1 = document.createElement('div');
    formGroupDiv1.setAttribute('class', 'form-group');
    testNode.appendChild(formGroupDiv1);
    var labelIlce = document.createElement('label');
    labelIlce.setAttribute('class', 'col-lg-3 control-label')
    labelIlce.innerText = "İlçe"
    formGroupDiv1.appendChild(labelIlce);
    var selectDiv1 = document.createElement('div');
    selectDiv1.setAttribute('class', 'col-lg-5');
    var selectIlce = document.createElement('select');
    selectIlce.setAttribute('id', 'ilce' + sayac);
    selectDiv1.appendChild(selectIlce);
    var selectOpt1 = document.createElement('option');
    selectOpt1.innerText = "";
    selectIlce.appendChild(selectOpt1);
    formGroupDiv1.appendChild(selectDiv1);

    var formGroupDiv2 = document.createElement('div');
    formGroupDiv2.setAttribute('class', 'form-group');
    testNode.appendChild(formGroupDiv2);
    var labelMahalle = document.createElement('label');
    labelMahalle.setAttribute('class', 'col-lg-3 control-label')
    labelMahalle.innerText = "Mahalle"
    formGroupDiv2.appendChild(labelMahalle);
    var selectDiv2 = document.createElement('div');
    selectDiv2.setAttribute('class', 'col-lg-5');
    var txbMahalle = document.createElement('input');
    txbMahalle.setAttribute('id', 'mahalle' + sayac);
    txbMahalle.setAttribute('type', 'text');
    txbMahalle.setAttribute('class', 'form-control')
    selectDiv2.appendChild(txbMahalle);
    formGroupDiv2.appendChild(selectDiv2);

    var formGroupDiv3 = document.createElement('div');
    formGroupDiv3.setAttribute('class', 'form-group');
    testNode.appendChild(formGroupDiv3);
    var labelDiger = document.createElement('label');
    labelDiger.setAttribute('class', 'col-lg-3 control-label')
    labelDiger.innerText = "Diğer"
    formGroupDiv3.appendChild(labelDiger);
    var selectDiv3 = document.createElement('div');
    selectDiv3.setAttribute('class', 'col-lg-5');
    var txbDiger = document.createElement('input');
    txbDiger.setAttribute('id', 'mahalle' + sayac);
    txbDiger.setAttribute('type', 'text');
    txbDiger.setAttribute('class', 'form-control')
    selectDiv3.appendChild(txbDiger);
    formGroupDiv3.appendChild(selectDiv3);

    function illeriDoldur() {
        $.ajax({
            type: "POST",
            url: '../../Ogrenci/Iller',
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            data: null,
            success: function (gelenIller) {
                console.log(gelenIller);
                for (var i = 0; i < gelenIller.length; i++) {
                    //$('#il1').append('<option id="'+gelenIller[i].il_id+'">' + gelenIller[i].il_ad + '</option>')
                    $('select[id^="il"]').not('select[id^="ilce"]').last("select").append('<option id="optIl1' + gelenIller[i].il_id + '">' + gelenIller[i].il_ad + '</option>');

                };
            },
            error: function (e1, e2, e3) {
                console.log(e3);
            }
        })
    }
    $('select[id^="il"]').not('select[id^="ilce"]').last('select').change(function () {
        var sayi = $(this).attr('id').substr(2);
        var gonderilenIlId = $(this).find(':selected').attr('id').substr(6);
        console.log(gonderilenIlId);
        var gidenVeri = {};
        gidenVeri.gelenID = gonderilenIlId;
        $.ajax({
            type: "POST",
            url: '../../Ogrenci/Ilceler',
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            data: JSON.stringify(gidenVeri),
            success: function (gelenVeri) {
                $('select[id^="ilce"][id$="' + sayi + '"] option').each(function () { $(this).remove() })
                for (var i = 0; i < gelenVeri.length; i++) {
                    $('select[id^="ilce"][id$="' + sayi + '"]').append("<option>" + gelenVeri[i] + "</option>");
                };
            },
            error: function (e1, e2, e3) {
                console.log(e3);
            }
        })
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //$('select[id^=il]').not('select[id^="ilce"]').last('select').change(function () {
    //    var sayi = $(this).attr('id').substr(2);
    //    $('select[id^="ilce"][id$="' + sayi + '"]').append("<option>Test</option>");
    //    var gonderilenIlId = $(this).find(':selected').attr('id');
    //    console.log(gonderilenIlId);

    //});
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //$('select[id^=il]').not('select[id^="ilce"]').last('select').change(function () {
    //    var sayi = alert($(this).attr('id'));
    //    $('select[id^="ilce"][id$="' + sayi + '"]').append("<option>kalp</option>");
    //    var gonderilenIlId = $(this).find(':selected').attr('id');
    //    console.log(sayi);
    //});

    illeriDoldur();

});

