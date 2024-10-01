var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_readoPortoOrganizadodeItaqui_1 = new ol.format.GeoJSON();
var features_readoPortoOrganizadodeItaqui_1 = format_readoPortoOrganizadodeItaqui_1.readFeatures(json_readoPortoOrganizadodeItaqui_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readoPortoOrganizadodeItaqui_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readoPortoOrganizadodeItaqui_1.addFeatures(features_readoPortoOrganizadodeItaqui_1);
var lyr_readoPortoOrganizadodeItaqui_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_readoPortoOrganizadodeItaqui_1, 
                style: style_readoPortoOrganizadodeItaqui_1,
                popuplayertitle: "Área do Porto Organizado de Itaqui",
                interactive: false,
                title: '<img src="styles/legend/readoPortoOrganizadodeItaqui_1.png" /> Área do Porto Organizado de Itaqui'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_readoPortoOrganizadodeItaqui_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_readoPortoOrganizadodeItaqui_1];
lyr_readoPortoOrganizadodeItaqui_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Área': 'Área', });
lyr_readoPortoOrganizadodeItaqui_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Área': 'TextEdit', });
lyr_readoPortoOrganizadodeItaqui_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Área': 'no label', });
lyr_readoPortoOrganizadodeItaqui_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});