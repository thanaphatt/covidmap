ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_21_1 = new ol.format.GeoJSON();
var features_21_1 = format_21_1.readFeatures(json_21_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_21_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_21_1.addFeatures(features_21_1);
var lyr_21_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_21_1, 
                style: style_21_1,
                interactive: true,
    title: '21 พ.ค.<br />\
    <img src="styles/legend/21_1_0.png" /> 1 - 100<br />\
    <img src="styles/legend/21_1_1.png" /> 101 - 200<br />\
    <img src="styles/legend/21_1_2.png" /> 201 - 500<br />\
    <img src="styles/legend/21_1_3.png" /> 501 - 10000<br />'
        });
var format_20_2 = new ol.format.GeoJSON();
var features_20_2 = format_20_2.readFeatures(json_20_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_20_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20_2.addFeatures(features_20_2);
var lyr_20_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20_2, 
                style: style_20_2,
                interactive: true,
    title: '20 พ.ค.<br />\
    <img src="styles/legend/20_2_0.png" /> 1 - 100<br />\
    <img src="styles/legend/20_2_1.png" /> 101 - 200<br />\
    <img src="styles/legend/20_2_2.png" /> 201 - 500<br />\
    <img src="styles/legend/20_2_3.png" /> 501 - 10000<br />'
        });
var format_19_3 = new ol.format.GeoJSON();
var features_19_3 = format_19_3.readFeatures(json_19_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_19_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19_3.addFeatures(features_19_3);
var lyr_19_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19_3, 
                style: style_19_3,
                interactive: true,
    title: '19 พ.ค.<br />\
    <img src="styles/legend/19_3_0.png" /> 1 - 100<br />\
    <img src="styles/legend/19_3_1.png" /> 101 - 200<br />\
    <img src="styles/legend/19_3_2.png" /> 201 - 500<br />\
    <img src="styles/legend/19_3_3.png" /> 501 - 10000<br />'
        });
var format_18_4 = new ol.format.GeoJSON();
var features_18_4 = format_18_4.readFeatures(json_18_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_18_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18_4.addFeatures(features_18_4);
var lyr_18_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_18_4, 
                style: style_18_4,
                interactive: true,
    title: '18 พ.ค.<br />\
    <img src="styles/legend/18_4_0.png" /> 1 - 100<br />\
    <img src="styles/legend/18_4_1.png" /> 101 - 200<br />\
    <img src="styles/legend/18_4_2.png" /> 201 - 500<br />\
    <img src="styles/legend/18_4_3.png" /> 501 - 10000<br />'
        });
var format_17_5 = new ol.format.GeoJSON();
var features_17_5 = format_17_5.readFeatures(json_17_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_17_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_17_5.addFeatures(features_17_5);
var lyr_17_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_17_5, 
                style: style_17_5,
                interactive: true,
    title: '17 พ.ค.<br />\
    <img src="styles/legend/17_5_0.png" /> 1 - 100<br />\
    <img src="styles/legend/17_5_1.png" /> 101 - 200<br />\
    <img src="styles/legend/17_5_2.png" /> 201 - 500<br />\
    <img src="styles/legend/17_5_3.png" /> 501 - 10000<br />'
        });
var format_16_6 = new ol.format.GeoJSON();
var features_16_6 = format_16_6.readFeatures(json_16_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_16_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_16_6.addFeatures(features_16_6);
var lyr_16_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_16_6, 
                style: style_16_6,
                interactive: true,
    title: '16 พ.ค.<br />\
    <img src="styles/legend/16_6_0.png" /> 1 - 100<br />\
    <img src="styles/legend/16_6_1.png" /> 101 - 200<br />\
    <img src="styles/legend/16_6_2.png" /> 201 - 500<br />\
    <img src="styles/legend/16_6_3.png" /> 501 - 10000<br />'
        });
var format_15_7 = new ol.format.GeoJSON();
var features_15_7 = format_15_7.readFeatures(json_15_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_15_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_15_7.addFeatures(features_15_7);
var lyr_15_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_15_7, 
                style: style_15_7,
                interactive: true,
    title: '15 พ.ค.<br />\
    <img src="styles/legend/15_7_0.png" /> 1 - 100<br />\
    <img src="styles/legend/15_7_1.png" /> 101 - 200<br />\
    <img src="styles/legend/15_7_2.png" /> 201 - 500<br />\
    <img src="styles/legend/15_7_3.png" /> 501 - 10000<br />'
        });

lyr_EsriWorldImagery_0.setVisible(true);lyr_21_1.setVisible(true);lyr_20_2.setVisible(true);lyr_19_3.setVisible(true);lyr_18_4.setVisible(true);lyr_17_5.setVisible(true);lyr_16_6.setVisible(true);lyr_15_7.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_21_1,lyr_20_2,lyr_19_3,lyr_18_4,lyr_17_5,lyr_16_6,lyr_15_7];
lyr_21_1.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_20_2.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_19_3.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_18_4.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_17_5.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_16_6.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_15_7.set('fieldAliases', {'จังหวัด': 'จังหวัด', 'จำนวน': 'จำนวน', });
lyr_21_1.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_20_2.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_19_3.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_18_4.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_17_5.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_16_6.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_15_7.set('fieldImages', {'จังหวัด': 'TextEdit', 'จำนวน': 'Range', });
lyr_21_1.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_20_2.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_19_3.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_18_4.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_17_5.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_16_6.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_15_7.set('fieldLabels', {'จังหวัด': 'inline label', 'จำนวน': 'inline label', });
lyr_15_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});