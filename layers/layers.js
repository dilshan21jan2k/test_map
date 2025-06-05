var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SriLankaDistricts_1 = new ol.format.GeoJSON();
var features_SriLankaDistricts_1 = format_SriLankaDistricts_1.readFeatures(json_SriLankaDistricts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaDistricts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaDistricts_1.addFeatures(features_SriLankaDistricts_1);
var lyr_SriLankaDistricts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaDistricts_1, 
                style: style_SriLankaDistricts_1,
                popuplayertitle: 'Sri Lanka Districts',
                interactive: true,
                title: '<img src="styles/legend/SriLankaDistricts_1.png" /> Sri Lanka Districts'
            });
var format_SriLankaWaterways_2 = new ol.format.GeoJSON();
var features_SriLankaWaterways_2 = format_SriLankaWaterways_2.readFeatures(json_SriLankaWaterways_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SriLankaWaterways_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SriLankaWaterways_2.addFeatures(features_SriLankaWaterways_2);
var lyr_SriLankaWaterways_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SriLankaWaterways_2, 
                style: style_SriLankaWaterways_2,
                popuplayertitle: 'Sri Lanka Waterways',
                interactive: true,
                title: '<img src="styles/legend/SriLankaWaterways_2.png" /> Sri Lanka Waterways'
            });

lyr_ESRIOcean_0.setVisible(true);lyr_SriLankaDistricts_1.setVisible(true);lyr_SriLankaWaterways_2.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_SriLankaDistricts_1,lyr_SriLankaWaterways_2];
lyr_SriLankaDistricts_1.set('fieldAliases', {'shapeName': 'shapeName', 'shapeISO': 'shapeISO', 'shapeID': 'shapeID', 'shapeGroup': 'shapeGroup', 'shapeType': 'shapeType', });
lyr_SriLankaWaterways_2.set('fieldAliases', {'name': 'name', 'name_en': 'name_en', 'waterway': 'waterway', 'covered': 'covered', 'width': 'width', 'depth': 'depth', 'layer': 'layer', 'blockage': 'blockage', 'tunnel': 'tunnel', 'natural': 'natural', 'water': 'water', 'source': 'source', 'name_si': 'name_si', 'name_ta': 'name_ta', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_SriLankaDistricts_1.set('fieldImages', {'shapeName': 'TextEdit', 'shapeISO': 'TextEdit', 'shapeID': 'TextEdit', 'shapeGroup': 'TextEdit', 'shapeType': 'TextEdit', });
lyr_SriLankaWaterways_2.set('fieldImages', {'name': 'TextEdit', 'name_en': 'TextEdit', 'waterway': 'TextEdit', 'covered': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'layer': 'TextEdit', 'blockage': 'TextEdit', 'tunnel': 'TextEdit', 'natural': 'TextEdit', 'water': 'TextEdit', 'source': 'TextEdit', 'name_si': 'TextEdit', 'name_ta': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', });
lyr_SriLankaDistricts_1.set('fieldLabels', {'shapeName': 'no label', 'shapeISO': 'no label', 'shapeID': 'no label', 'shapeGroup': 'no label', 'shapeType': 'no label', });
lyr_SriLankaWaterways_2.set('fieldLabels', {'name': 'no label', 'name_en': 'no label', 'waterway': 'no label', 'covered': 'no label', 'width': 'no label', 'depth': 'no label', 'layer': 'no label', 'blockage': 'no label', 'tunnel': 'no label', 'natural': 'no label', 'water': 'no label', 'source': 'no label', 'name_si': 'no label', 'name_ta': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_SriLankaWaterways_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});