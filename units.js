function convertLength() {
    
    "use strict";
    
    var lengthNum = document.getElementById("LengthNum").value;
    var typeLength = document.getElementById("Lengthselect");
    var chooce = typeLength.options[typeLength.selectedIndex].value;
    var m; 
    var km; 
    var cm; 
    var mm; 
    var μm;
    var nm;
    var mi; 
    var yd; 
    var ft; 
    var inc; 
    var ly; 
    
    if (chooce=="Meter") {
        m   = lengthNum * 1;
        km  = lengthNum * 0.001;
        cm  = lengthNum * 100;
        mm  = lengthNum * 1000;
        μm  = lengthNum * 1000000;
        nm  = lengthNum * 1000000000;
        mi  = lengthNum * 0.0006;
        yd  = lengthNum * 1.094;
        ft  = lengthNum * 3.281;
        inc = lengthNum * 39.37;
        ly  = lengthNum * 1.057008707e-16;
    }
    if (chooce=="Kilometer") {
        m   = lengthNum * 1000 ;
        km  = lengthNum * 1;
        cm  = lengthNum * 100000;
        mm  = lengthNum * 1000000;
        μm  = lengthNum * 1000000000;
        nm  = lengthNum * 1000000000000;
        mi  = lengthNum * 0.621;
        yd  = lengthNum * 1093.61;
        ft  = lengthNum * 3280.84;
        inc = lengthNum * 39370.08;
        ly  = lengthNum * 1.057008707E-13; 
    }
    if (chooce=="Centimeter") {
        m   = lengthNum * 0.01;
        km  = lengthNum * 0.00001;
        cm  = lengthNum * 1;
        mm  = lengthNum * 10;
        μm  = lengthNum * 10000;
        nm  = lengthNum * 10000000;
        mi  = lengthNum * 0.0000062137;
        yd  = lengthNum * 0.010936133;
        ft  = lengthNum * 0.032808399;
        inc = lengthNum * 0.3937007874;
        ly  = lengthNum * 1.057008707E-18; 
    }
    if (chooce=="Millimeter") {
        m   = lengthNum * 0.001;
        km  = lengthNum * 0.000001;
        cm  = lengthNum * 0.1;
        mm  = lengthNum * 1;
        μm  = lengthNum * 0.1;
        nm  = lengthNum * 1000000;
        mi  = lengthNum * 6.213688756E-7;
        yd  = lengthNum * 0.0010936133;
        ft  = lengthNum * 0.0032808399;
        inc = lengthNum * 0.0393700787;
        ly  = lengthNum * 1.057008707E-19; 
    }
    if (chooce=="Micrometer") {
        m   = lengthNum * 0.000001 ;
        km  = lengthNum * 9.999999999E-10;
        cm  = lengthNum * 0.0001;
        mm  = lengthNum * 0.001;
        μm  = lengthNum * 1;
        nm  = lengthNum * 1000;
        mi  = lengthNum * 6.213688756E-10;
        yd  = lengthNum * 0.0000010936;
        ft  = lengthNum * 0.0000032808;
        inc = lengthNum * 0.0000393701;
        ly  = lengthNum * 1.057008707E-22; 
    }
    if (chooce=="Nanometer") {
        m   = lengthNum * 1.E-9 ;
        km  = lengthNum * 1.E-12;
        cm  = lengthNum * 1.E-7;
        mm  = lengthNum * 0.000001;
        μm  = lengthNum * 0.001;
        nm  = lengthNum * 1;
        mi  = lengthNum * 6.213688756E-13;
        yd  = lengthNum * 1.093613298E-9;
        ft  = lengthNum * 3.280839895E-9;
        inc = lengthNum * 3.937007874E-8;
        ly  = lengthNum * 1.057008707E-25; 
    }
    if (chooce=="Mile") {
        m   = lengthNum * 1609.35 ;
        km  = lengthNum * 1.60935;
        cm  = lengthNum * 160935;
        mm  = lengthNum * 1609350;
        μm  = lengthNum * 1609350000;
        nm  = lengthNum * 1609350000000;
        mi  = lengthNum * 1;
        yd  = lengthNum * 1760.0065617;
        ft  = lengthNum * 5280.019685;
        inc = lengthNum * 63360.23622;
        ly  = lengthNum * 1.701096963E-13; 
    }
    if (chooce=="Yard") {
        m   = lengthNum * 0.9144 ;
        km  = lengthNum * 0.0009144;
        cm  = lengthNum * 91.44;
        mm  = lengthNum * 914.4;
        μm  = lengthNum * 914400;
        nm  = lengthNum * 914400000;
        mi  = lengthNum * 0.0005681797;
        yd  = lengthNum * 1;
        ft  = lengthNum * 3;
        inc = lengthNum * 36;
        ly  = lengthNum * 9.665287622E-17; 
    }
    if (chooce=="Foot") {
        m   = lengthNum * 0.3048 ;
        km  = lengthNum * 0.0003048;
        cm  = lengthNum * 30.48;
        mm  = lengthNum * 304.8;
        μm  = lengthNum * 304800;
        nm  = lengthNum * 304800000;
        mi  = lengthNum * 0.0001894;
        yd  = lengthNum * 0.333;
        ft  = lengthNum * 1;
        inc = lengthNum * 12;
        ly  = lengthNum * 3.22176254E-17; 
    }
    if (chooce=="Inch") {
        m   = lengthNum * 0.0254;
        km  = lengthNum * 0.0000254;
        cm  = lengthNum * 2.54;
        mm  = lengthNum * 25.4;
        μm  = lengthNum * 25400;
        nm  = lengthNum * 25400000;
        mi  = lengthNum * 0.0000157828;
        yd  = lengthNum * 0.0277777778;
        ft  = lengthNum * 0.0833333333;
        inc = lengthNum * 1;
        ly  = lengthNum * 2.684802117E-18; 
    }
    if (chooce=="Light Year") {
        m   = lengthNum * 9460660000000000 ;
        km  = lengthNum * 9460660000000;
        cm  = lengthNum * 946066000000000000;
        mm  = lengthNum * 946066E+13;
        μm  = lengthNum * 9.46066E+21;
        nm  = lengthNum * 1000000000000;
        mi  = lengthNum * 0.621;
        yd  = lengthNum * 1093.61;
        ft  = lengthNum * 3280.84;
        inc = lengthNum * 39370.08;
        ly  = lengthNum * 1.057008707E-13; 
    }
    document.getElementById("Meterid").innerHTML = m;
    document.getElementById("Kilometerid").innerHTML = km;
    document.getElementById("Centimeterid").innerHTML = cm;
    document.getElementById("Millimeterid").innerHTML = mm;
    document.getElementById("Micrometerid").innerHTML = μm;
    document.getElementById("Nanometerid").innerHTML = nm;
    document.getElementById("Mileid").innerHTML = mi;
    document.getElementById("Yardid").innerHTML = yd;
    document.getElementById("Footid").innerHTML = ft;
    document.getElementById("Inchid").innerHTML = inc;
    document.getElementById("Light Yearid").innerHTML = ly;
}

function convertTemperature(){
    
    "use strict";
    
    var temperatureNum = document.getElementById("TemperatureNum").value;
    var typetemperature = document.getElementById("Temperatureselect");
    var chooce = typetemperature.options[typetemperature.selectedIndex].value;
    var cel;
    var kel;
    var fah;
    
    if (chooce=="Celsius") {
        cel = temperatureNum * 1;
        kel = Number(temperatureNum) + Number(273.15);
        fah = temperatureNum * 1.8 +32;
    }
    
    if (chooce=="Kelvin") {
        cel = temperatureNum - 273.15;
        kel = temperatureNum * 1;
        fah = temperatureNum * 1.8 - 459.67;
    }
    
    if (chooce=="Fahrenheit") {
        cel = (temperatureNum - 32) / 1.8;
        kel = (+temperatureNum + +459.67) / 1.8;
        fah = temperatureNum* 1;
    }
    
    document.getElementById("Celsiusid").innerHTML = cel;
    document.getElementById("Kelvinid").innerHTML = kel;
    document.getElementById("Fahrenheitid").innerHTML = fah;
    
}

function convertArea(){
    
    "use strict";
    
    var areaNum  = document.getElementById("AreaNum").value;
    var typeArea = document.getElementById("Areaselect");
    var chooce   = typeArea.options[typeArea.selectedIndex].value;
    var sm;
    var skm;
    var scm;
    var smm;
    var sμm;
    var hec;
    var smi;
    var syd;
    var sft;
    var sinc;
    var acre;
    
    if (chooce == "smeter") {
        sm   = areaNum* 1;
        skm  = areaNum* 0.000001;
        scm  = areaNum* 10000;
        smm  = areaNum* 1000000;
        sμm  = areaNum* 1000000000000;
        hec  = areaNum* 0.0001;
        smi  = areaNum* 3.861018768E-7;
        syd  = areaNum* 1.1959900463;
        sft  = areaNum* 10.763910417;
        sinc = areaNum* 1550.0031;
        acre = areaNum* 0.0002471054;
    }
    if (chooce == "skilometer") {
        sm   = areaNum* 1000000;
        skm  = areaNum* 1;
        scm  = areaNum* 10000000000;
        smm  = areaNum* 1000000000000;
        sμm  = areaNum* 1000000000000000000;
        hec  = areaNum* 100;
        smi  = areaNum* 0.3861018768;
        syd  = areaNum* 1195990.0463;
        sft  = areaNum* 10763910.417;
        sinc = areaNum* 1550003100;
        acre = areaNum* 247.10538147;
    }  
    if (chooce == "scentimeter") {
        sm   = areaNum* 0.0001;
        skm  = areaNum* 1.E-10;
        scm  = areaNum* 1;
        smm  = areaNum* 100;
        sμm  = areaNum* 100000000;
        hec  = areaNum* 1.E-8;
        smi  = areaNum* 3.861018768E-11;
        syd  = areaNum* 0.000119599;
        sft  = areaNum* 0.001076391;
        sinc = areaNum* 0.15500031;
        acre = areaNum* 2.471053814E-8;
    }    
    if (chooce == "smillimeter") {
        sm   = areaNum* 0.000001;
        skm  = areaNum* 1.E-12;
        scm  = areaNum* 0.01;
        smm  = areaNum* 1;
        sμm  = areaNum* 1000000;
        hec  = areaNum* 9.999999999E-11;
        smi  = areaNum* 3.861018768E-13;
        syd  = areaNum* 0.000001196;
        sft  = areaNum* 0.0000107639;
        sinc = areaNum* 0.0015500031;
        acre = areaNum* 2.471053814E-10;
    }   
    if (chooce == "smicrometer") {
        sm   = areaNum* 1.E-12;
        skm  = areaNum* 1.E-18;
        scm  = areaNum* 9.999999999E-9;
        smm  = areaNum* 0.000001;
        sμm  = areaNum* 1;
        hec  = areaNum* 1.E-16;
        smi  = areaNum* 3.861018768E-19;
        syd  = areaNum* 1.195990046E-12;
        sft  = areaNum* 1.076391041E-11;
        sinc = areaNum* 1.5500031E-9;
        acre = areaNum* 2.471053814E-16;
    }  
    if (chooce == "Hectare") {
        sm   = areaNum* 10000;
        skm  = areaNum* 0.01;
        scm  = areaNum* 100000000;
        smm  = areaNum* 10000000000;
        sμm  = areaNum* 10000000000000000;
        hec  = areaNum* 1;
        smi  = areaNum* 0.0038610188;
        syd  = areaNum* 11959.900463;
        sft  = areaNum* 107639.10417;
        sinc = areaNum* 15500031;
        acre = areaNum* 2.4710538147;
    }
    if (chooce == "smile") {
        sm   = areaNum* 2589990;
        skm  = areaNum* 2.58999;
        scm  = areaNum* 25899900000;
        smm  = areaNum* 2589990000000;
        sμm  = areaNum* 2589990000000000000;
        hec  = areaNum* 258.999;
        smi  = areaNum* 1;
        syd  = areaNum* 3097602.26;
        sft  = areaNum* 27878420.34;
        sinc = areaNum* 4014492529;
        acre = areaNum* 640.00046695;
    }
    if (chooce == "syard") {
        sm   = areaNum* 0.83612736;
        skm  = areaNum* 8.3612736E-7;
        scm  = areaNum* 8361.2736;
        smm  = areaNum* 836127.36;
        sμm  = areaNum* 836127360000;
        hec  = areaNum* 0.0000836127;
        smi  = areaNum* 3.228303429E-7;
        syd  = areaNum* 1;
        sft  = areaNum* 9;
        sinc = areaNum* 1296;
        acre = areaNum* 0.0002066116;
    }
    if (chooce == "sfoot") {
        sm   = areaNum* 0.09290304;
        skm  = areaNum* 9.290304E-8;
        scm  = areaNum* 929.0304;
        smm  = areaNum* 92903.04;
        sμm  = areaNum* 92903040000;
        hec  = areaNum* 0.0000092903;
        smi  = areaNum* 3.58700381E-8;
        syd  = areaNum* 0.1111111111;
        sft  = areaNum* 1;
        sinc = areaNum* 144;
        acre = areaNum* 0.0000229568;
    }
    if (chooce == "sinch") {
        sm   = areaNum* 0.00064516;
        skm  = areaNum* 6.4516E-10;
        scm  = areaNum* 6.4516;
        smm  = areaNum* 645.16;
        sμm  = areaNum* 645160000;
        hec  = areaNum* 6.4516E-8;
        smi  = areaNum* 2.490974868E-10;
        syd  = areaNum* 0.0007716049;
        sft  = areaNum* 0.0069444444;
        sinc = areaNum* 1;
        acre = areaNum* 1.594225079E-7;
    }
    if (chooce == "Acre") {
        sm   = areaNum* 4046.8564224;
        skm  = areaNum* 0.0040468564;
        scm  = areaNum* 40468564.224;
        smm  = areaNum* 4046856422.4;
        sμm  = areaNum* 4046856422400000;
        hec  = areaNum* 0.4046856422;
        smi  = areaNum* 0.0015624989;
        syd  = areaNum* 4840;
        sft  = areaNum* 43560;
        sinc = areaNum* 6272640;
        acre = areaNum* 1;
    }
    
    
    document.getElementById("Meter2id").innerHTML = sm;
    document.getElementById("Kilometer2id").innerHTML = skm;
    document.getElementById("Centimeter2id").innerHTML = scm;
    document.getElementById("Millimeter2id").innerHTML = smm;
    document.getElementById("Micrometer2id").innerHTML = sμm;
    document.getElementById("Hectareid").innerHTML = hec;
    document.getElementById("Mile2id").innerHTML = smi;
    document.getElementById("Yard2id").innerHTML = syd;
    document.getElementById("Foot2id").innerHTML = sft;
    document.getElementById("Inch2id").innerHTML = sinc;
    document.getElementById("Acreid").innerHTML = acre;
    
}

function convertVolume(){
    "use strict";
    
    var volumeNum = document.getElementById("VolumeNum").value;
    var typeVolume = document.getElementById("Volumeselect");
    var chooce = typeVolume.options[typeVolume.selectedIndex].value;
    var cm;
    var ckm;
    var ccm;
    var cmm;
    var liter;
    var mliter;
    var cmile;
    var cyd;
    var cft;
    var cinch;
    
    if (chooce == "m3"){
        cm     = volumeNum * 1;
        ckm    = volumeNum * 1.E-9;
        ccm    = volumeNum * 1000000;
        cmm    = volumeNum * 1000000000;
        liter  = volumeNum * 1000;
        mliter = volumeNum * 1000000;
        cmile  = volumeNum * 2.399128636E-10;
        cyd    = volumeNum * 1.3079506193;
        cft    = volumeNum * 35.314666721;
        cinch  = volumeNum * 61023.744095;
    }
    if (chooce == "km3"){
        cm     = volumeNum * 1000000000;
        ckm    = volumeNum * 1;
        ccm    = volumeNum * 1000000000000000;
        cmm    = volumeNum * 1000000000000000000;
        liter  = volumeNum * 1000000000000;
        mliter = volumeNum * 1000000000000000;
        cmile  = volumeNum * 0.2399128636;
        cyd    = volumeNum * 1307950619.3;
        cft    = volumeNum * 35314666721;
        cinch  = volumeNum * 61023744094732;
    }
    if (chooce == "cm3"){
        cm = volumeNum * 0.000001;
        ckm = volumeNum * 9.999999999E-16;
        ccm = volumeNum * 1;
        cmm = volumeNum * 1000;
        liter = volumeNum * 0.001;
        mliter = volumeNum * 1;
        cmile = volumeNum * 2.399128636E-16;
        cyd = volumeNum * 0.000001308;
        cft = volumeNum * 0.0000353147;
        cinch = volumeNum * 0.0610237441;
    }
    if (chooce == "mm3"){
        cm = volumeNum * 1.E-9;
        ckm = volumeNum * 1.E-18;
        ccm = volumeNum * 0.001;
        cmm = volumeNum * 1;
        liter = volumeNum * 0.000001;
        mliter = volumeNum * 0.001;
        cmile = volumeNum * 2.399128636E-19;
        cyd = volumeNum * 1.307950619E-9;
        cft = volumeNum * 3.531466672E-8;
        cinch = volumeNum * 0.0000610237;
    }
    if (chooce == "liter"){
        cm = volumeNum * 0.001;
        ckm = volumeNum * 1.E-12;
        ccm = volumeNum * 1000;
        cmm = volumeNum * 1000000;
        liter = volumeNum * 1;
        mliter = volumeNum * 1000;
        cmile = volumeNum * 2.399128636E-13;
        cyd = volumeNum * 0.0013079506;
        cft = volumeNum * 0.0353146667;
        cinch = volumeNum * 61.023744095;
    }
    if (chooce == "mliter"){
        cm = volumeNum * 0.000001;
        ckm = volumeNum * 9.999999999E-16;
        ccm = volumeNum * 1;
        cmm = volumeNum * 1000;
        liter = volumeNum * 0.001;
        mliter = volumeNum * 1;
        cmile = volumeNum * 2.399128636E-16;
        cyd = volumeNum * 0.000001308;
        cft = volumeNum * 0.0000353147;
        cinch = volumeNum * 0.0610237441;
    }
    if (chooce == "mile3"){
        cm = volumeNum * 4168180000;
        ckm = volumeNum * 4.16818;
        ccm = volumeNum * 4168180000000000;
        cmm = volumeNum * 4168179999999999500;
        liter = volumeNum * 4168180000000;
        mliter = volumeNum * 4168180000000000;
        cmile = volumeNum * 1;
        cyd = volumeNum * 5451773612.4;
        cft = volumeNum * 147197887535;
        cinch = volumeNum * 254357949660781;
    }
    if (chooce == "yd3"){
        cm = volumeNum * 0.764554858;
        ckm = volumeNum * 7.645548579E-10;
        ccm = volumeNum * 764554.85798;
        cmm = volumeNum * 764554857.98;
        liter = volumeNum * 764.55485798;
        mliter = volumeNum * 764554.85798;
        cmile = volumeNum * 1.834265453E-10;
        cyd = volumeNum * 1;
        cft = volumeNum * 27;
        cinch = volumeNum * 46656;
    }
    if (chooce == "ft3"){
        cm = volumeNum * 0.0283168466;
        ckm = volumeNum * 2.831684659E-11;
        ccm = volumeNum * 28316.846592;
        cmm = volumeNum * 28316846.592;
        liter = volumeNum * 28.316846592;
        mliter = volumeNum * 28316.846592;
        cmile = volumeNum * 6.793575755E-12;
        cyd = volumeNum * 0.037037037;
        cft = volumeNum * 1;
        cinch = volumeNum * 1728;
    }
    if (chooce == "inch3"){
        cm = volumeNum * 0.0000163871;
        ckm = volumeNum * 1.6387064E-14;
        ccm = volumeNum * 16.387064;
        cmm = volumeNum * 16387.064;
        liter = volumeNum * 0.016387064;
        mliter = volumeNum * 16.387064;
        cmile = volumeNum * 3.931467451E-15;
        cyd = volumeNum * 0.0000214335;
        cft = volumeNum * 0.0005787037;
        cinch = volumeNum * 1;
    }
    
    document.getElementById("Meter3id").innerHTML = cm;
    document.getElementById("Kilometer3id").innerHTML    = ckm;
    document.getElementById("Centimeter3id").innerHTML   = ccm;
    document.getElementById("Millimeter3id").innerHTML   = cmm;
    document.getElementById("Literid").innerHTML         = liter;
    document.getElementById("Milliliterid").innerHTML    = mliter;
    document.getElementById("Mile3id").innerHTML         = cmile;
    document.getElementById("Yard3id").innerHTML         = cyd;
    document.getElementById("Foot3id").innerHTML         = cft;
    document.getElementById("Inch3id").innerHTML         = cinch;
   
}

function convertWeight(){
    "use strict";
    
    var weightNum = document.getElementById("WeightNum").value;
    var typeWeight = document.getElementById("Weightselect");
    var chooce = typeWeight.options[typeWeight.selectedIndex].value;
    var km, gram, mgm, mt, lt, st, p, ou, car, amu;
    
    if ( chooce == "KM") {
        km   = weightNum * 1;
        gram = weightNum * 1000;
        mgm  = weightNum * 1000000;
        mt   = weightNum * 0.001;
        lt   = weightNum * 0.0009842073;
        st   = weightNum * 0.0011023122;
        p    = weightNum * 2.2046244202;
        ou   = weightNum * 35.273990723;
        car  = weightNum * 5000;
        amu  = weightNum * 6.022136652E+26;
    }
    if ( chooce == "GM") {
        km   = weightNum * 0.001;
        gram = weightNum * 1;
        mgm  = weightNum * 1000;
        mt   = weightNum * 0.000001;
        lt   = weightNum * 9.842073304E-7;
        st   = weightNum * 0.0000011023;
        p    = weightNum * 0.0022046244;
        ou   = weightNum * 0.0352739907;
        car  = weightNum * 5;
        amu  = weightNum * 6.022136652E+23;
    }
    if ( chooce == "MGM") {
        km   = weightNum * 0.000001;
        gram = weightNum * 0.001;
        mgm  = weightNum * 1;
        mt   = weightNum * 9.999999999E-10;
        lt   = weightNum * 9.842073304E-10;
        st   = weightNum * 1.10231221E-9;
        p    = weightNum * 0.0000022046;
        ou   = weightNum * 0.000035274;
        car  = weightNum * 0.005;
        amu  = weightNum * 602213665200000000000;
    }
    if ( chooce == "MT") {
        km   = weightNum * 1000;
        gram = weightNum * 1000000;
        mgm  = weightNum * 1000000000;
        mt   = weightNum * 1;
        lt   = weightNum * 0.9842073304;
        st   = weightNum * 1.1023122101;
        p    = weightNum * 2204.6244202;
        ou   = weightNum * 35273.990723;
        car  = weightNum * 5000000;
        amu  = weightNum * 6.022136652E+29;
    }
    if ( chooce == "LT") {
        km   = weightNum * 1016.04608;
        gram = weightNum * 1016046.08;
        mgm  = weightNum * 1016046080;
        mt   = weightNum * 1.01604608;
        lt   = weightNum * 1;
        st   = weightNum * 1.12;
        p    = weightNum * 2240;
        ou   = weightNum * 35840;
        car  = weightNum * 5080230.4;
        amu  = weightNum * 6.118768338E+29;
    }
    if ( chooce == "ST") {
        km   = weightNum * 907.184;
        gram = weightNum * 907184;
        mgm  = weightNum * 907184000;
        mt   = weightNum * 0.907184;
        lt   = weightNum * 0.8928571429;
        st   = weightNum * 1;
        p    = weightNum * 2000;
        ou   = weightNum * 32000;
        car  = weightNum * 4535920;
        amu  = weightNum * 5.463186016E+29;
    }
    if ( chooce == "P") {
        km   = weightNum * 0.453592;
        gram = weightNum * 453.592;
        mgm  = weightNum * 453592;
        mt   = weightNum * 0.000453592;
        lt   = weightNum * 0.0004464286;
        st   = weightNum * 0.0005;
        p    = weightNum * 1;
        ou   = weightNum * 16;
        car  = weightNum * 2267.96;
        amu  = weightNum * 2.731593008E+26;
    }
    if ( chooce == "OU") {
        km   = weightNum * 0.0283495;
        gram = weightNum * 28.3495;
        mgm  = weightNum * 28349.5;
        mt   = weightNum * 0.0000283495;
        lt   = weightNum * 0.0000279018;
        st   = weightNum * 0.00003125;
        p    = weightNum * 0.0625;
        ou   = weightNum * 1;
        car  = weightNum * 141.7475;
        amu  = weightNum * 1.70724563E+25;
    }
    if ( chooce == "Car") {
        km   = weightNum * 0.0002;
        gram = weightNum * 0.2;
        mgm  = weightNum * 200;
        mt   = weightNum * 2.E-7;
        lt   = weightNum * 1.96841466E-7;
        st   = weightNum * 2.20462442E-7;
        p    = weightNum * 0.0004409249;
        ou   = weightNum * 0.0070547981;
        car  = weightNum * 1;
        amu  = weightNum * 1.20442733E+23;
    }
    if ( chooce == "AMU") {
        km   = weightNum * 1.660540199E-27;
        gram = weightNum * 1.660540199E-24;
        mgm  = weightNum * 1.660540199E-21;
        mt   = weightNum * 1.660540199E-30;
        lt   = weightNum * 1.634315837E-30;
        st   = weightNum * 1.830433737E-30;
        p    = weightNum * 3.660867475E-27;
        ou   = weightNum * 5.85738796E-26;
        car  = weightNum * 8.302700999E-24;
        amu  = weightNum * 1;
    }
    
    document.getElementById("Kilometer").innerHTML = km;
    document.getElementById("Gram").innerHTML = gram;
    document.getElementById("Milligram").innerHTML = mgm;
    document.getElementById("Metric Ton").innerHTML = mt;
    document.getElementById("Long Ton").innerHTML = lt;
    document.getElementById("Short Ton").innerHTML = st;
    document.getElementById("Pound").innerHTML = p;
    document.getElementById("Ounce").innerHTML = ou;
    document.getElementById("Carrat").innerHTML = car;
    document.getElementById("Atomic Mass Unit").innerHTML = amu;
}

function convertTime(){
    "use strict";
    
    var timeNum = document.getElementById("TimeNum").value;
    var typeTime = document.getElementById("Timeselect");
    var chooce = typeTime.options[typeTime.selectedIndex].value;
    var sec, misec, mcsec, nsec, psec, min, hr, day, week, month, y;
    
    if (chooce =="sec"){
        sec   = timeNum * 1;
        misec = timeNum * 1000;
        mcsec = timeNum * 1000000;
        nsec  = timeNum * 1000000000;
        psec  = timeNum * 1000000000000;
        min   = timeNum * 0.0166666667;
        hr    = timeNum * 0.0002777778;
        day   = timeNum * 0.0000115741;
        week  = timeNum * 0.0000016534;
        month = timeNum * 3.802570537E-7;
        y     = timeNum * 3.168808781E-8;
    }
    if (chooce =="misec"){
        sec   = timeNum * 0.001;
        misec = timeNum * 1;
        mcsec = timeNum * 1000;
        nsec  = timeNum * 1000000;
        psec  = timeNum * 1000000000;
        min   = timeNum * 0.0000166667;
        hr    = timeNum * 2.777777777E-7;
        day   = timeNum * 1.157407407E-8;
        week  = timeNum * 1.653439153E-9;
        month = timeNum * 3.802570537E-10;
        y     = timeNum * 3.168808781E-11;
    }
    if (chooce =="mcsec"){
        sec   = timeNum * 0.000001;
        misec = timeNum * 0.001;
        mcsec = timeNum * 1;
        nsec  = timeNum * 1000;
        psec  = timeNum * 1000000;
        min   = timeNum * 1.666666666E-8;
        hr    = timeNum * 2.777777777E-10;
        day   = timeNum * 1.157407407E-11;
        week  = timeNum * 1.653439153E-12;
        month = timeNum * 3.802570537E-13;
        y     = timeNum * 3.168808781E-14;
    }
    if (chooce =="nsec"){
        sec   = timeNum * 1.E-9;
        misec = timeNum * 0.000001;
        mcsec = timeNum * 0.001;
        nsec  = timeNum * 1;
        psec  = timeNum * 1000;
        min   = timeNum * 1.666666666E-11;
        hr    = timeNum * 2.777777777E-13;
        day   = timeNum * 1.157407407E-14;
        week  = timeNum * 1.653439153E-15;
        month = timeNum * 3.802570537E-16;
        y     = timeNum * 3.168808781E-17;
    }
    if (chooce =="psec"){
        sec   = timeNum * 1.E-12;
        misec = timeNum * 1.E-9;
        mcsec = timeNum * 0.000001;
        nsec  = timeNum * 0.001;
        psec  = timeNum * 1;
        min   = timeNum * 1.666666666E-14;
        hr    = timeNum * 2.777777777E-16;
        day   = timeNum * 1.157407407E-17;
        week  = timeNum * 1.653439153E-18;
        month = timeNum * 3.802570537E-19;
        y     = timeNum * 3.168808781E-20;
    }
    if (chooce =="min"){
        sec   = timeNum * 60;
        misec = timeNum * 60000;
        mcsec = timeNum * 60000000;
        nsec  = timeNum * 60000000000;
        psec  = timeNum * 60000000000000;
        min   = timeNum * 1;
        hr    = timeNum * 0.0166666667;
        day   = timeNum * 0.0006944444;
        week  = timeNum * 0.0000992063;
        month = timeNum * 0.0000228154;
        y     = timeNum * 0.0000019013;
    }
    if (chooce =="hr"){
        sec   = timeNum * 3600;
        misec = timeNum * 3600000;
        mcsec = timeNum * 3600000000;
        nsec  = timeNum * 3600000000000;
        psec  = timeNum * 3600000000000000;
        min   = timeNum * 60;
        hr    = timeNum * 1;
        day   = timeNum * 0.0416666667;
        week  = timeNum * 0.005952381;
        month = timeNum * 0.0013689254;
        y     = timeNum * 0.0001140771;
    }
    if (chooce =="day"){
        sec   = timeNum * 86400;
        misec = timeNum * 86400000;
        mcsec = timeNum * 86400000000;
        nsec  = timeNum * 86400000000000;
        psec  = timeNum * 86400000000000000;
        min   = timeNum * 1440;
        hr    = timeNum * 24;
        day   = timeNum * 1;
        week  = timeNum * 0.1428571429;
        month = timeNum * 0.0328542094;
        y     = timeNum * 0.0027378508;
    }
    if (chooce =="week"){
        sec   = timeNum * 604800;
        misec = timeNum * 604800000;
        mcsec = timeNum * 604800000000;
        nsec  = timeNum * 604800000000000;
        psec  = timeNum * 604800000000000000;
        min   = timeNum * 10080;
        hr    = timeNum * 168;
        day   = timeNum * 7;
        week  = timeNum * 1;
        month = timeNum * 0.2299794661;
        y     = timeNum * 0.0191649555;
    }
    if (chooce =="month"){
        sec   = timeNum * 2629800;
        misec = timeNum * 2629800000;
        mcsec = timeNum * 2629800000000;
        nsec  = timeNum * 2629800000000000;
        psec  = timeNum * 2629800000000000000;
        min   = timeNum * 43830;
        hr    = timeNum * 730.5;
        day   = timeNum * 30.4375;
        week  = timeNum * 4.3482142857;
        month = timeNum * 1;
        y     = timeNum * 0.0833333333;
    }
    if (chooce =="y"){
        sec   = timeNum * 31557600;
        misec = timeNum * 31557600000;
        mcsec = timeNum * 31557600000000;
        nsec  = timeNum * 31557600000000000;
        psec  = timeNum * 31557600000000000000;
        min   = timeNum * 525960;
        hr    = timeNum * 8766;
        day   = timeNum * 365.25;
        week  = timeNum * 52.178571429;
        month = timeNum * 12;
        y     = timeNum * 1;
    }
    
    document.getElementById("Secondid").innerHTML = sec;
    document.getElementById("Millisecondid").innerHTML = misec;
    document.getElementById("Microsecondid").innerHTML = mcsec;
    document.getElementById("Nanosecondid").innerHTML = nsec;
    document.getElementById("Picosecondid").innerHTML = psec;
    document.getElementById("Minuteid").innerHTML = min;
    document.getElementById("Hourid").innerHTML = hr;
    document.getElementById("Dayid").innerHTML = day;
    document.getElementById("Weekid").innerHTML = week;
    document.getElementById("Monthid").innerHTML = month;
    document.getElementById("Yearid").innerHTML = y;
} 

    















