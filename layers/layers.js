ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([744013.138720, 7172536.923498, 754990.551503, 7178592.928707]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_UnidadesdeConservao_1 = new ol.format.GeoJSON();
var features_UnidadesdeConservao_1 = format_UnidadesdeConservao_1.readFeatures(json_UnidadesdeConservao_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UnidadesdeConservao_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UnidadesdeConservao_1.addFeatures(features_UnidadesdeConservao_1);
var lyr_UnidadesdeConservao_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UnidadesdeConservao_1, 
                style: style_UnidadesdeConservao_1,
                popuplayertitle: 'Unidades de Conservação ',
                interactive: true,
                title: '<img src="styles/legend/UnidadesdeConservao_1.png" /> Unidades de Conservação '
            });
var format_reasUrbanaseRurais_2 = new ol.format.GeoJSON();
var features_reasUrbanaseRurais_2 = format_reasUrbanaseRurais_2.readFeatures(json_reasUrbanaseRurais_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasUrbanaseRurais_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasUrbanaseRurais_2.addFeatures(features_reasUrbanaseRurais_2);
var lyr_reasUrbanaseRurais_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasUrbanaseRurais_2, 
                style: style_reasUrbanaseRurais_2,
                popuplayertitle: 'Áreas Urbanas e Rurais ',
                interactive: true,
                title: '<img src="styles/legend/reasUrbanaseRurais_2.png" /> Áreas Urbanas e Rurais '
            });
var format_FundeadourosLongoPrazo_3 = new ol.format.GeoJSON();
var features_FundeadourosLongoPrazo_3 = format_FundeadourosLongoPrazo_3.readFeatures(json_FundeadourosLongoPrazo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FundeadourosLongoPrazo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosLongoPrazo_3.addFeatures(features_FundeadourosLongoPrazo_3);
var lyr_FundeadourosLongoPrazo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosLongoPrazo_3, 
                style: style_FundeadourosLongoPrazo_3,
                popuplayertitle: 'Fundeadouros - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosLongoPrazo_3.png" /> Fundeadouros - Longo Prazo '
            });
var format_FundeadourosMdioPrazo_4 = new ol.format.GeoJSON();
var features_FundeadourosMdioPrazo_4 = format_FundeadourosMdioPrazo_4.readFeatures(json_FundeadourosMdioPrazo_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FundeadourosMdioPrazo_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosMdioPrazo_4.addFeatures(features_FundeadourosMdioPrazo_4);
var lyr_FundeadourosMdioPrazo_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosMdioPrazo_4, 
                style: style_FundeadourosMdioPrazo_4,
                popuplayertitle: 'Fundeadouros - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosMdioPrazo_4.png" /> Fundeadouros - Médio Prazo '
            });
var format_FundeadourosCurtoPrazo_5 = new ol.format.GeoJSON();
var features_FundeadourosCurtoPrazo_5 = format_FundeadourosCurtoPrazo_5.readFeatures(json_FundeadourosCurtoPrazo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FundeadourosCurtoPrazo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosCurtoPrazo_5.addFeatures(features_FundeadourosCurtoPrazo_5);
var lyr_FundeadourosCurtoPrazo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosCurtoPrazo_5, 
                style: style_FundeadourosCurtoPrazo_5,
                popuplayertitle: 'Fundeadouros - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosCurtoPrazo_5.png" /> Fundeadouros - Curto Prazo '
            });
var format_FundeadourosSituaoAtual_6 = new ol.format.GeoJSON();
var features_FundeadourosSituaoAtual_6 = format_FundeadourosSituaoAtual_6.readFeatures(json_FundeadourosSituaoAtual_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FundeadourosSituaoAtual_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FundeadourosSituaoAtual_6.addFeatures(features_FundeadourosSituaoAtual_6);
var lyr_FundeadourosSituaoAtual_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FundeadourosSituaoAtual_6, 
                style: style_FundeadourosSituaoAtual_6,
                popuplayertitle: 'Fundeadouros - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/FundeadourosSituaoAtual_6.png" /> Fundeadouros - Situação Atual '
            });
var format_BaciasdeEvoluoLongoPrazo_7 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoLongoPrazo_7 = format_BaciasdeEvoluoLongoPrazo_7.readFeatures(json_BaciasdeEvoluoLongoPrazo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BaciasdeEvoluoLongoPrazo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoLongoPrazo_7.addFeatures(features_BaciasdeEvoluoLongoPrazo_7);
var lyr_BaciasdeEvoluoLongoPrazo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoLongoPrazo_7, 
                style: style_BaciasdeEvoluoLongoPrazo_7,
                popuplayertitle: 'Bacias de Evolução - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoLongoPrazo_7.png" /> Bacias de Evolução - Longo Prazo '
            });
var format_BaciasdeEvoluoMdioPrazo_8 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoMdioPrazo_8 = format_BaciasdeEvoluoMdioPrazo_8.readFeatures(json_BaciasdeEvoluoMdioPrazo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BaciasdeEvoluoMdioPrazo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoMdioPrazo_8.addFeatures(features_BaciasdeEvoluoMdioPrazo_8);
var lyr_BaciasdeEvoluoMdioPrazo_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoMdioPrazo_8, 
                style: style_BaciasdeEvoluoMdioPrazo_8,
                popuplayertitle: 'Bacias de Evolução - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoMdioPrazo_8.png" /> Bacias de Evolução - Médio Prazo '
            });
var format_BaciasdeEvoluoCurtoPrazo_9 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoCurtoPrazo_9 = format_BaciasdeEvoluoCurtoPrazo_9.readFeatures(json_BaciasdeEvoluoCurtoPrazo_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BaciasdeEvoluoCurtoPrazo_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoCurtoPrazo_9.addFeatures(features_BaciasdeEvoluoCurtoPrazo_9);
var lyr_BaciasdeEvoluoCurtoPrazo_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoCurtoPrazo_9, 
                style: style_BaciasdeEvoluoCurtoPrazo_9,
                popuplayertitle: 'Bacias de Evolução - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoCurtoPrazo_9.png" /> Bacias de Evolução - Curto Prazo '
            });
var format_BaciasdeEvoluoSituaoAtual_10 = new ol.format.GeoJSON();
var features_BaciasdeEvoluoSituaoAtual_10 = format_BaciasdeEvoluoSituaoAtual_10.readFeatures(json_BaciasdeEvoluoSituaoAtual_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BaciasdeEvoluoSituaoAtual_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BaciasdeEvoluoSituaoAtual_10.addFeatures(features_BaciasdeEvoluoSituaoAtual_10);
var lyr_BaciasdeEvoluoSituaoAtual_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BaciasdeEvoluoSituaoAtual_10, 
                style: style_BaciasdeEvoluoSituaoAtual_10,
                popuplayertitle: 'Bacias de Evolução - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/BaciasdeEvoluoSituaoAtual_10.png" /> Bacias de Evolução - Situação Atual '
            });
var format_CanaisdeAcessoLongoPrazo_11 = new ol.format.GeoJSON();
var features_CanaisdeAcessoLongoPrazo_11 = format_CanaisdeAcessoLongoPrazo_11.readFeatures(json_CanaisdeAcessoLongoPrazo_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CanaisdeAcessoLongoPrazo_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoLongoPrazo_11.addFeatures(features_CanaisdeAcessoLongoPrazo_11);
var lyr_CanaisdeAcessoLongoPrazo_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoLongoPrazo_11, 
                style: style_CanaisdeAcessoLongoPrazo_11,
                popuplayertitle: 'Canais de Acesso - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoLongoPrazo_11.png" /> Canais de Acesso - Longo Prazo '
            });
var format_CanaisdeAcessoMdioPrazo_12 = new ol.format.GeoJSON();
var features_CanaisdeAcessoMdioPrazo_12 = format_CanaisdeAcessoMdioPrazo_12.readFeatures(json_CanaisdeAcessoMdioPrazo_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CanaisdeAcessoMdioPrazo_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoMdioPrazo_12.addFeatures(features_CanaisdeAcessoMdioPrazo_12);
var lyr_CanaisdeAcessoMdioPrazo_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoMdioPrazo_12, 
                style: style_CanaisdeAcessoMdioPrazo_12,
                popuplayertitle: 'Canais de Acesso - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoMdioPrazo_12.png" /> Canais de Acesso - Médio Prazo '
            });
var format_CanaisdeAcessoCurtoPrazo_13 = new ol.format.GeoJSON();
var features_CanaisdeAcessoCurtoPrazo_13 = format_CanaisdeAcessoCurtoPrazo_13.readFeatures(json_CanaisdeAcessoCurtoPrazo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CanaisdeAcessoCurtoPrazo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoCurtoPrazo_13.addFeatures(features_CanaisdeAcessoCurtoPrazo_13);
var lyr_CanaisdeAcessoCurtoPrazo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoCurtoPrazo_13, 
                style: style_CanaisdeAcessoCurtoPrazo_13,
                popuplayertitle: 'Canais de Acesso - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoCurtoPrazo_13.png" /> Canais de Acesso - Curto Prazo '
            });
var format_CanaisdeAcessoSituaoAtual_14 = new ol.format.GeoJSON();
var features_CanaisdeAcessoSituaoAtual_14 = format_CanaisdeAcessoSituaoAtual_14.readFeatures(json_CanaisdeAcessoSituaoAtual_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CanaisdeAcessoSituaoAtual_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CanaisdeAcessoSituaoAtual_14.addFeatures(features_CanaisdeAcessoSituaoAtual_14);
var lyr_CanaisdeAcessoSituaoAtual_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CanaisdeAcessoSituaoAtual_14, 
                style: style_CanaisdeAcessoSituaoAtual_14,
                popuplayertitle: 'Canais de Acesso - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/CanaisdeAcessoSituaoAtual_14.png" /> Canais de Acesso - Situação Atual '
            });
var format_AcessosDutoviriosInternos_15 = new ol.format.GeoJSON();
var features_AcessosDutoviriosInternos_15 = format_AcessosDutoviriosInternos_15.readFeatures(json_AcessosDutoviriosInternos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosDutoviriosInternos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosInternos_15.addFeatures(features_AcessosDutoviriosInternos_15);
var lyr_AcessosDutoviriosInternos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosInternos_15, 
                style: style_AcessosDutoviriosInternos_15,
                popuplayertitle: 'Acessos Dutoviários Internos',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosInternos_15.png" /> Acessos Dutoviários Internos'
            });
var format_AcessosDutoviriosExternos_16 = new ol.format.GeoJSON();
var features_AcessosDutoviriosExternos_16 = format_AcessosDutoviriosExternos_16.readFeatures(json_AcessosDutoviriosExternos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosDutoviriosExternos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosDutoviriosExternos_16.addFeatures(features_AcessosDutoviriosExternos_16);
var lyr_AcessosDutoviriosExternos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosDutoviriosExternos_16, 
                style: style_AcessosDutoviriosExternos_16,
                popuplayertitle: 'Acessos Dutoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosDutoviriosExternos_16.png" /> Acessos Dutoviários Externos '
            });
var format_AcessosFerroviriosInternosLongoPrazo_17 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosLongoPrazo_17 = format_AcessosFerroviriosInternosLongoPrazo_17.readFeatures(json_AcessosFerroviriosInternosLongoPrazo_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosFerroviriosInternosLongoPrazo_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosLongoPrazo_17.addFeatures(features_AcessosFerroviriosInternosLongoPrazo_17);
var lyr_AcessosFerroviriosInternosLongoPrazo_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosLongoPrazo_17, 
                style: style_AcessosFerroviriosInternosLongoPrazo_17,
                popuplayertitle: 'Acessos Ferroviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosLongoPrazo_17.png" /> Acessos Ferroviários Internos - Longo Prazo '
            });
var format_AcessosFerroviriosInternosMdioPrazo_18 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosMdioPrazo_18 = format_AcessosFerroviriosInternosMdioPrazo_18.readFeatures(json_AcessosFerroviriosInternosMdioPrazo_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosFerroviriosInternosMdioPrazo_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosMdioPrazo_18.addFeatures(features_AcessosFerroviriosInternosMdioPrazo_18);
var lyr_AcessosFerroviriosInternosMdioPrazo_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosMdioPrazo_18, 
                style: style_AcessosFerroviriosInternosMdioPrazo_18,
                popuplayertitle: 'Acessos Ferroviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosMdioPrazo_18.png" /> Acessos Ferroviários Internos - Médio Prazo '
            });
var format_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosCurtoPrazo_19 = format_AcessosFerroviriosInternosCurtoPrazo_19.readFeatures(json_AcessosFerroviriosInternosCurtoPrazo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosCurtoPrazo_19.addFeatures(features_AcessosFerroviriosInternosCurtoPrazo_19);
var lyr_AcessosFerroviriosInternosCurtoPrazo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosCurtoPrazo_19, 
                style: style_AcessosFerroviriosInternosCurtoPrazo_19,
                popuplayertitle: 'Acessos Ferroviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosCurtoPrazo_19.png" /> Acessos Ferroviários Internos - Curto Prazo '
            });
var format_AcessosFerroviriosInternosSituaoAtual_20 = new ol.format.GeoJSON();
var features_AcessosFerroviriosInternosSituaoAtual_20 = format_AcessosFerroviriosInternosSituaoAtual_20.readFeatures(json_AcessosFerroviriosInternosSituaoAtual_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosFerroviriosInternosSituaoAtual_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosInternosSituaoAtual_20.addFeatures(features_AcessosFerroviriosInternosSituaoAtual_20);
var lyr_AcessosFerroviriosInternosSituaoAtual_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosInternosSituaoAtual_20, 
                style: style_AcessosFerroviriosInternosSituaoAtual_20,
                popuplayertitle: 'Acessos Ferroviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosInternosSituaoAtual_20.png" /> Acessos Ferroviários Internos - Situação Atual '
            });
var format_AcessosFerroviriosExternos_21 = new ol.format.GeoJSON();
var features_AcessosFerroviriosExternos_21 = format_AcessosFerroviriosExternos_21.readFeatures(json_AcessosFerroviriosExternos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosFerroviriosExternos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosFerroviriosExternos_21.addFeatures(features_AcessosFerroviriosExternos_21);
var lyr_AcessosFerroviriosExternos_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosFerroviriosExternos_21, 
                style: style_AcessosFerroviriosExternos_21,
                popuplayertitle: 'Acessos Ferroviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosFerroviriosExternos_21.png" /> Acessos Ferroviários Externos '
            });
var format_AcessosRodoviriosInternosLongoPrazo_22 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosLongoPrazo_22 = format_AcessosRodoviriosInternosLongoPrazo_22.readFeatures(json_AcessosRodoviriosInternosLongoPrazo_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosRodoviriosInternosLongoPrazo_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosLongoPrazo_22.addFeatures(features_AcessosRodoviriosInternosLongoPrazo_22);
var lyr_AcessosRodoviriosInternosLongoPrazo_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosLongoPrazo_22, 
                style: style_AcessosRodoviriosInternosLongoPrazo_22,
                popuplayertitle: 'Acessos Rodoviários Internos - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosLongoPrazo_22.png" /> Acessos Rodoviários Internos - Longo Prazo '
            });
var format_AcessosRodoviriosInternosMdioPrazo_23 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosMdioPrazo_23 = format_AcessosRodoviriosInternosMdioPrazo_23.readFeatures(json_AcessosRodoviriosInternosMdioPrazo_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosRodoviriosInternosMdioPrazo_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosMdioPrazo_23.addFeatures(features_AcessosRodoviriosInternosMdioPrazo_23);
var lyr_AcessosRodoviriosInternosMdioPrazo_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosMdioPrazo_23, 
                style: style_AcessosRodoviriosInternosMdioPrazo_23,
                popuplayertitle: 'Acessos Rodoviários Internos - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosMdioPrazo_23.png" /> Acessos Rodoviários Internos - Médio Prazo '
            });
var format_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosCurtoPrazo_24 = format_AcessosRodoviriosInternosCurtoPrazo_24.readFeatures(json_AcessosRodoviriosInternosCurtoPrazo_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosCurtoPrazo_24.addFeatures(features_AcessosRodoviriosInternosCurtoPrazo_24);
var lyr_AcessosRodoviriosInternosCurtoPrazo_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosCurtoPrazo_24, 
                style: style_AcessosRodoviriosInternosCurtoPrazo_24,
                popuplayertitle: 'Acessos Rodoviários Internos - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosCurtoPrazo_24.png" /> Acessos Rodoviários Internos - Curto Prazo '
            });
var format_AcessosRodoviriosInternosSituaoAtual_25 = new ol.format.GeoJSON();
var features_AcessosRodoviriosInternosSituaoAtual_25 = format_AcessosRodoviriosInternosSituaoAtual_25.readFeatures(json_AcessosRodoviriosInternosSituaoAtual_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosRodoviriosInternosSituaoAtual_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosInternosSituaoAtual_25.addFeatures(features_AcessosRodoviriosInternosSituaoAtual_25);
var lyr_AcessosRodoviriosInternosSituaoAtual_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosInternosSituaoAtual_25, 
                style: style_AcessosRodoviriosInternosSituaoAtual_25,
                popuplayertitle: 'Acessos Rodoviários Internos - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosInternosSituaoAtual_25.png" /> Acessos Rodoviários Internos - Situação Atual '
            });
var format_AcessosRodoviriosExternos_26 = new ol.format.GeoJSON();
var features_AcessosRodoviriosExternos_26 = format_AcessosRodoviriosExternos_26.readFeatures(json_AcessosRodoviriosExternos_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcessosRodoviriosExternos_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcessosRodoviriosExternos_26.addFeatures(features_AcessosRodoviriosExternos_26);
var lyr_AcessosRodoviriosExternos_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcessosRodoviriosExternos_26, 
                style: style_AcessosRodoviriosExternos_26,
                popuplayertitle: 'Acessos Rodoviários Externos ',
                interactive: true,
                title: '<img src="styles/legend/AcessosRodoviriosExternos_26.png" /> Acessos Rodoviários Externos '
            });
var format_InstalaesRetroporturiasLongoPrazo_27 = new ol.format.GeoJSON();
var features_InstalaesRetroporturiasLongoPrazo_27 = format_InstalaesRetroporturiasLongoPrazo_27.readFeatures(json_InstalaesRetroporturiasLongoPrazo_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InstalaesRetroporturiasLongoPrazo_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturiasLongoPrazo_27.addFeatures(features_InstalaesRetroporturiasLongoPrazo_27);
var lyr_InstalaesRetroporturiasLongoPrazo_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesRetroporturiasLongoPrazo_27, 
                style: style_InstalaesRetroporturiasLongoPrazo_27,
                popuplayertitle: 'Instalações Retroportuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturiasLongoPrazo_27.png" /> Instalações Retroportuárias - Longo Prazo '
            });
var format_InstalaesRetroporturiasMdioPrazo_28 = new ol.format.GeoJSON();
var features_InstalaesRetroporturiasMdioPrazo_28 = format_InstalaesRetroporturiasMdioPrazo_28.readFeatures(json_InstalaesRetroporturiasMdioPrazo_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InstalaesRetroporturiasMdioPrazo_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturiasMdioPrazo_28.addFeatures(features_InstalaesRetroporturiasMdioPrazo_28);
var lyr_InstalaesRetroporturiasMdioPrazo_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesRetroporturiasMdioPrazo_28, 
                style: style_InstalaesRetroporturiasMdioPrazo_28,
                popuplayertitle: 'Instalações Retroportuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturiasMdioPrazo_28.png" /> Instalações Retroportuárias - Médio Prazo '
            });
var format_InstalaesRetroporturiasCurtoPrazo_29 = new ol.format.GeoJSON();
var features_InstalaesRetroporturiasCurtoPrazo_29 = format_InstalaesRetroporturiasCurtoPrazo_29.readFeatures(json_InstalaesRetroporturiasCurtoPrazo_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InstalaesRetroporturiasCurtoPrazo_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturiasCurtoPrazo_29.addFeatures(features_InstalaesRetroporturiasCurtoPrazo_29);
var lyr_InstalaesRetroporturiasCurtoPrazo_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesRetroporturiasCurtoPrazo_29, 
                style: style_InstalaesRetroporturiasCurtoPrazo_29,
                popuplayertitle: 'Instalações Retroportuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturiasCurtoPrazo_29.png" /> Instalações Retroportuárias - Curto Prazo '
            });
var format_InstalaesRetroporturiasSituaoAtual_30 = new ol.format.GeoJSON();
var features_InstalaesRetroporturiasSituaoAtual_30 = format_InstalaesRetroporturiasSituaoAtual_30.readFeatures(json_InstalaesRetroporturiasSituaoAtual_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_InstalaesRetroporturiasSituaoAtual_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InstalaesRetroporturiasSituaoAtual_30.addFeatures(features_InstalaesRetroporturiasSituaoAtual_30);
var lyr_InstalaesRetroporturiasSituaoAtual_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InstalaesRetroporturiasSituaoAtual_30, 
                style: style_InstalaesRetroporturiasSituaoAtual_30,
                popuplayertitle: 'Instalações Retroportuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/InstalaesRetroporturiasSituaoAtual_30.png" /> Instalações Retroportuárias - Situação Atual '
            });
var format_TerminaldeUsoPrivado_31 = new ol.format.GeoJSON();
var features_TerminaldeUsoPrivado_31 = format_TerminaldeUsoPrivado_31.readFeatures(json_TerminaldeUsoPrivado_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_TerminaldeUsoPrivado_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerminaldeUsoPrivado_31.addFeatures(features_TerminaldeUsoPrivado_31);
var lyr_TerminaldeUsoPrivado_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerminaldeUsoPrivado_31, 
                style: style_TerminaldeUsoPrivado_31,
                popuplayertitle: 'Terminal de Uso Privado ',
                interactive: true,
                title: '<img src="styles/legend/TerminaldeUsoPrivado_31.png" /> Terminal de Uso Privado '
            });
var format_reaseInstalaesAlfandegadas_32 = new ol.format.GeoJSON();
var features_reaseInstalaesAlfandegadas_32 = format_reaseInstalaesAlfandegadas_32.readFeatures(json_reaseInstalaesAlfandegadas_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reaseInstalaesAlfandegadas_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaseInstalaesAlfandegadas_32.addFeatures(features_reaseInstalaesAlfandegadas_32);
var lyr_reaseInstalaesAlfandegadas_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reaseInstalaesAlfandegadas_32, 
                style: style_reaseInstalaesAlfandegadas_32,
                popuplayertitle: 'Áreas e Instalações Alfandegadas ',
                interactive: true,
                title: '<img src="styles/legend/reaseInstalaesAlfandegadas_32.png" /> Áreas e Instalações Alfandegadas '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35 = format_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.readFeatures(json_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.addFeatures(features_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35);
var lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35, 
                style: style_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.png" /> Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = format_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.readFeatures(json_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.addFeatures(features_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36);
var lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36, 
                style: style_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.png" /> Áreas Não Afetas às Operações Portuárias em Exploração Indireta - Situação Atual '
            });
var format_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasLongoPrazo_37 = format_reasNoAfetassOperaesPorturiasLongoPrazo_37.readFeatures(json_reasNoAfetassOperaesPorturiasLongoPrazo_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37.addFeatures(features_reasNoAfetassOperaesPorturiasLongoPrazo_37);
var lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasLongoPrazo_37, 
                style: style_reasNoAfetassOperaesPorturiasLongoPrazo_37,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasLongoPrazo_37.png" /> Áreas Não Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasMdioPrazo_38 = format_reasNoAfetassOperaesPorturiasMdioPrazo_38.readFeatures(json_reasNoAfetassOperaesPorturiasMdioPrazo_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38.addFeatures(features_reasNoAfetassOperaesPorturiasMdioPrazo_38);
var lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasMdioPrazo_38, 
                style: style_reasNoAfetassOperaesPorturiasMdioPrazo_38,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasMdioPrazo_38.png" /> Áreas Não Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = format_reasNoAfetassOperaesPorturiasCurtoPrazo_39.readFeatures(json_reasNoAfetassOperaesPorturiasCurtoPrazo_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39.addFeatures(features_reasNoAfetassOperaesPorturiasCurtoPrazo_39);
var lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasCurtoPrazo_39, 
                style: style_reasNoAfetassOperaesPorturiasCurtoPrazo_39,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasCurtoPrazo_39.png" /> Áreas Não Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.format.GeoJSON();
var features_reasNoAfetassOperaesPorturiasSituaoAtual_40 = format_reasNoAfetassOperaesPorturiasSituaoAtual_40.readFeatures(json_reasNoAfetassOperaesPorturiasSituaoAtual_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40.addFeatures(features_reasNoAfetassOperaesPorturiasSituaoAtual_40);
var lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasNoAfetassOperaesPorturiasSituaoAtual_40, 
                style: style_reasNoAfetassOperaesPorturiasSituaoAtual_40,
                popuplayertitle: 'Áreas Não Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasNoAfetassOperaesPorturiasSituaoAtual_40.png" /> Áreas Não Afetas às Operações Portuárias - Situação Atual '
            });
var format_AcostagemLongoPrazo_41 = new ol.format.GeoJSON();
var features_AcostagemLongoPrazo_41 = format_AcostagemLongoPrazo_41.readFeatures(json_AcostagemLongoPrazo_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcostagemLongoPrazo_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemLongoPrazo_41.addFeatures(features_AcostagemLongoPrazo_41);
var lyr_AcostagemLongoPrazo_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemLongoPrazo_41, 
                style: style_AcostagemLongoPrazo_41,
                popuplayertitle: 'Acostagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemLongoPrazo_41.png" /> Acostagem - Longo Prazo '
            });
var format_AcostagemMdioPrazo_42 = new ol.format.GeoJSON();
var features_AcostagemMdioPrazo_42 = format_AcostagemMdioPrazo_42.readFeatures(json_AcostagemMdioPrazo_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcostagemMdioPrazo_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemMdioPrazo_42.addFeatures(features_AcostagemMdioPrazo_42);
var lyr_AcostagemMdioPrazo_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemMdioPrazo_42, 
                style: style_AcostagemMdioPrazo_42,
                popuplayertitle: 'Acostagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemMdioPrazo_42.png" /> Acostagem - Médio Prazo '
            });
var format_AcostagemCurtoPrazo_43 = new ol.format.GeoJSON();
var features_AcostagemCurtoPrazo_43 = format_AcostagemCurtoPrazo_43.readFeatures(json_AcostagemCurtoPrazo_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcostagemCurtoPrazo_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemCurtoPrazo_43.addFeatures(features_AcostagemCurtoPrazo_43);
var lyr_AcostagemCurtoPrazo_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemCurtoPrazo_43, 
                style: style_AcostagemCurtoPrazo_43,
                popuplayertitle: 'Acostagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemCurtoPrazo_43.png" /> Acostagem - Curto Prazo '
            });
var format_AcostagemSituaoAtual_44 = new ol.format.GeoJSON();
var features_AcostagemSituaoAtual_44 = format_AcostagemSituaoAtual_44.readFeatures(json_AcostagemSituaoAtual_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AcostagemSituaoAtual_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcostagemSituaoAtual_44.addFeatures(features_AcostagemSituaoAtual_44);
var lyr_AcostagemSituaoAtual_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcostagemSituaoAtual_44, 
                style: style_AcostagemSituaoAtual_44,
                popuplayertitle: 'Acostagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/AcostagemSituaoAtual_44.png" /> Acostagem - Situação Atual '
            });
var format_ArmazenagemLongoPrazo_45 = new ol.format.GeoJSON();
var features_ArmazenagemLongoPrazo_45 = format_ArmazenagemLongoPrazo_45.readFeatures(json_ArmazenagemLongoPrazo_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArmazenagemLongoPrazo_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemLongoPrazo_45.addFeatures(features_ArmazenagemLongoPrazo_45);
var lyr_ArmazenagemLongoPrazo_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemLongoPrazo_45, 
                style: style_ArmazenagemLongoPrazo_45,
                popuplayertitle: 'Armazenagem - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemLongoPrazo_45.png" /> Armazenagem - Longo Prazo '
            });
var format_ArmazenagemMdioPrazo_46 = new ol.format.GeoJSON();
var features_ArmazenagemMdioPrazo_46 = format_ArmazenagemMdioPrazo_46.readFeatures(json_ArmazenagemMdioPrazo_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArmazenagemMdioPrazo_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemMdioPrazo_46.addFeatures(features_ArmazenagemMdioPrazo_46);
var lyr_ArmazenagemMdioPrazo_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemMdioPrazo_46, 
                style: style_ArmazenagemMdioPrazo_46,
                popuplayertitle: 'Armazenagem - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemMdioPrazo_46.png" /> Armazenagem - Médio Prazo '
            });
var format_ArmazenagemCurtoPrazo_47 = new ol.format.GeoJSON();
var features_ArmazenagemCurtoPrazo_47 = format_ArmazenagemCurtoPrazo_47.readFeatures(json_ArmazenagemCurtoPrazo_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArmazenagemCurtoPrazo_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemCurtoPrazo_47.addFeatures(features_ArmazenagemCurtoPrazo_47);
var lyr_ArmazenagemCurtoPrazo_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemCurtoPrazo_47, 
                style: style_ArmazenagemCurtoPrazo_47,
                popuplayertitle: 'Armazenagem - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemCurtoPrazo_47.png" /> Armazenagem - Curto Prazo '
            });
var format_ArmazenagemSituaoAtual_48 = new ol.format.GeoJSON();
var features_ArmazenagemSituaoAtual_48 = format_ArmazenagemSituaoAtual_48.readFeatures(json_ArmazenagemSituaoAtual_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ArmazenagemSituaoAtual_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ArmazenagemSituaoAtual_48.addFeatures(features_ArmazenagemSituaoAtual_48);
var lyr_ArmazenagemSituaoAtual_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ArmazenagemSituaoAtual_48, 
                style: style_ArmazenagemSituaoAtual_48,
                popuplayertitle: 'Armazenagem - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/ArmazenagemSituaoAtual_48.png" /> Armazenagem - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = format_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.readFeatures(json_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.addFeatures(features_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52);
var lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52, 
                style: style_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.png" /> Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento - Situação Atual '
            });
var format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = format_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.readFeatures(json_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.addFeatures(features_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53);
var lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53, 
                style: style_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = format_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.readFeatures(json_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.addFeatures(features_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54);
var lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54, 
                style: style_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = format_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.readFeatures(json_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.addFeatures(features_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55);
var lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55, 
                style: style_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = format_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.readFeatures(json_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.addFeatures(features_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56);
var lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56, 
                style: style_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.png" /> Áreas Afetas às Operações Portuárias Arrendadas - Situação Atual '
            });
var format_GranisSlidosdeOrigemVegetal_57 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemVegetal_57 = format_GranisSlidosdeOrigemVegetal_57.readFeatures(json_GranisSlidosdeOrigemVegetal_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemVegetal_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemVegetal_57.addFeatures(features_GranisSlidosdeOrigemVegetal_57);
var lyr_GranisSlidosdeOrigemVegetal_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemVegetal_57, 
                style: style_GranisSlidosdeOrigemVegetal_57,
                popuplayertitle: 'Granéis Sólidos de Origem Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemVegetal_57.png" /> Granéis Sólidos de Origem Vegetal'
            });
var format_GranisSlidosdeOrigemMineral_58 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemMineral_58 = format_GranisSlidosdeOrigemMineral_58.readFeatures(json_GranisSlidosdeOrigemMineral_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemMineral_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemMineral_58.addFeatures(features_GranisSlidosdeOrigemMineral_58);
var lyr_GranisSlidosdeOrigemMineral_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemMineral_58, 
                style: style_GranisSlidosdeOrigemMineral_58,
                popuplayertitle: 'Granéis Sólidos de Origem Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemMineral_58.png" /> Granéis Sólidos de Origem Mineral'
            });
var format_GranisSlidos_59 = new ol.format.GeoJSON();
var features_GranisSlidos_59 = format_GranisSlidos_59.readFeatures(json_GranisSlidos_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidos_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_59.addFeatures(features_GranisSlidos_59);
var lyr_GranisSlidos_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_59, 
                style: style_GranisSlidos_59,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_59.png" /> Granéis Sólidos'
            });
var format_GranisLquidos_60 = new ol.format.GeoJSON();
var features_GranisLquidos_60 = format_GranisLquidos_60.readFeatures(json_GranisLquidos_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisLquidos_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_60.addFeatures(features_GranisLquidos_60);
var lyr_GranisLquidos_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_60, 
                style: style_GranisLquidos_60,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_60.png" /> Granéis Líquidos'
            });
var format_Multipropsito_61 = new ol.format.GeoJSON();
var features_Multipropsito_61 = format_Multipropsito_61.readFeatures(json_Multipropsito_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Multipropsito_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_61.addFeatures(features_Multipropsito_61);
var lyr_Multipropsito_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_61, 
                style: style_Multipropsito_61,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_61.png" /> Multipropósito'
            });
var format_CargaGeral_62 = new ol.format.GeoJSON();
var features_CargaGeral_62 = format_CargaGeral_62.readFeatures(json_CargaGeral_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CargaGeral_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_62.addFeatures(features_CargaGeral_62);
var lyr_CargaGeral_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_62, 
                style: style_CargaGeral_62,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_62.png" /> Carga Geral'
            });
var format_RoRo_63 = new ol.format.GeoJSON();
var features_RoRo_63 = format_RoRo_63.readFeatures(json_RoRo_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RoRo_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoRo_63.addFeatures(features_RoRo_63);
var lyr_RoRo_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoRo_63, 
                style: style_RoRo_63,
                popuplayertitle: 'Ro-Ro ',
                interactive: true,
                title: '<img src="styles/legend/RoRo_63.png" /> Ro-Ro '
            });
var format_GranisSlidosdeOrigemVegetal_64 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemVegetal_64 = format_GranisSlidosdeOrigemVegetal_64.readFeatures(json_GranisSlidosdeOrigemVegetal_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemVegetal_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemVegetal_64.addFeatures(features_GranisSlidosdeOrigemVegetal_64);
var lyr_GranisSlidosdeOrigemVegetal_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemVegetal_64, 
                style: style_GranisSlidosdeOrigemVegetal_64,
                popuplayertitle: 'Granéis Sólidos de Origem Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemVegetal_64.png" /> Granéis Sólidos de Origem Vegetal'
            });
var format_GranisSlidosdeOrigemMineral_65 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemMineral_65 = format_GranisSlidosdeOrigemMineral_65.readFeatures(json_GranisSlidosdeOrigemMineral_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemMineral_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemMineral_65.addFeatures(features_GranisSlidosdeOrigemMineral_65);
var lyr_GranisSlidosdeOrigemMineral_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemMineral_65, 
                style: style_GranisSlidosdeOrigemMineral_65,
                popuplayertitle: 'Granéis Sólidos de Origem Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemMineral_65.png" /> Granéis Sólidos de Origem Mineral'
            });
var format_GranisSlidos_66 = new ol.format.GeoJSON();
var features_GranisSlidos_66 = format_GranisSlidos_66.readFeatures(json_GranisSlidos_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidos_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidos_66.addFeatures(features_GranisSlidos_66);
var lyr_GranisSlidos_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidos_66, 
                style: style_GranisSlidos_66,
                popuplayertitle: 'Granéis Sólidos',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidos_66.png" /> Granéis Sólidos'
            });
var format_GranisLquidos_67 = new ol.format.GeoJSON();
var features_GranisLquidos_67 = format_GranisLquidos_67.readFeatures(json_GranisLquidos_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisLquidos_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_67.addFeatures(features_GranisLquidos_67);
var lyr_GranisLquidos_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_67, 
                style: style_GranisLquidos_67,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_67.png" /> Granéis Líquidos'
            });
var format_Multipropsito_68 = new ol.format.GeoJSON();
var features_Multipropsito_68 = format_Multipropsito_68.readFeatures(json_Multipropsito_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Multipropsito_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_68.addFeatures(features_Multipropsito_68);
var lyr_Multipropsito_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_68, 
                style: style_Multipropsito_68,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_68.png" /> Multipropósito'
            });
var format_CargaGeral_69 = new ol.format.GeoJSON();
var features_CargaGeral_69 = format_CargaGeral_69.readFeatures(json_CargaGeral_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CargaGeral_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_69.addFeatures(features_CargaGeral_69);
var lyr_CargaGeral_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_69, 
                style: style_CargaGeral_69,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_69.png" /> Carga Geral'
            });
var format_RoRo_70 = new ol.format.GeoJSON();
var features_RoRo_70 = format_RoRo_70.readFeatures(json_RoRo_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RoRo_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoRo_70.addFeatures(features_RoRo_70);
var lyr_RoRo_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoRo_70, 
                style: style_RoRo_70,
                popuplayertitle: 'Ro-Ro',
                interactive: true,
                title: '<img src="styles/legend/RoRo_70.png" /> Ro-Ro'
            });
var format_GranisSlidosdeOrigemVegetal_71 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemVegetal_71 = format_GranisSlidosdeOrigemVegetal_71.readFeatures(json_GranisSlidosdeOrigemVegetal_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemVegetal_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemVegetal_71.addFeatures(features_GranisSlidosdeOrigemVegetal_71);
var lyr_GranisSlidosdeOrigemVegetal_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemVegetal_71, 
                style: style_GranisSlidosdeOrigemVegetal_71,
                popuplayertitle: 'Granéis Sólidos de Origem Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemVegetal_71.png" /> Granéis Sólidos de Origem Vegetal'
            });
var format_GranisSlidosdeOrigemMineral_72 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemMineral_72 = format_GranisSlidosdeOrigemMineral_72.readFeatures(json_GranisSlidosdeOrigemMineral_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemMineral_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemMineral_72.addFeatures(features_GranisSlidosdeOrigemMineral_72);
var lyr_GranisSlidosdeOrigemMineral_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemMineral_72, 
                style: style_GranisSlidosdeOrigemMineral_72,
                popuplayertitle: 'Granéis Sólidos de Origem Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemMineral_72.png" /> Granéis Sólidos de Origem Mineral'
            });
var format_GranisLquidos_73 = new ol.format.GeoJSON();
var features_GranisLquidos_73 = format_GranisLquidos_73.readFeatures(json_GranisLquidos_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisLquidos_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_73.addFeatures(features_GranisLquidos_73);
var lyr_GranisLquidos_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_73, 
                style: style_GranisLquidos_73,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_73.png" /> Granéis Líquidos'
            });
var format_Multipropsito_74 = new ol.format.GeoJSON();
var features_Multipropsito_74 = format_Multipropsito_74.readFeatures(json_Multipropsito_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Multipropsito_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_74.addFeatures(features_Multipropsito_74);
var lyr_Multipropsito_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_74, 
                style: style_Multipropsito_74,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_74.png" /> Multipropósito'
            });
var format_CargaGeral_75 = new ol.format.GeoJSON();
var features_CargaGeral_75 = format_CargaGeral_75.readFeatures(json_CargaGeral_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CargaGeral_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_75.addFeatures(features_CargaGeral_75);
var lyr_CargaGeral_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_75, 
                style: style_CargaGeral_75,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_75.png" /> Carga Geral'
            });
var format_RoRo_76 = new ol.format.GeoJSON();
var features_RoRo_76 = format_RoRo_76.readFeatures(json_RoRo_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RoRo_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoRo_76.addFeatures(features_RoRo_76);
var lyr_RoRo_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoRo_76, 
                style: style_RoRo_76,
                popuplayertitle: 'Ro-Ro',
                interactive: true,
                title: '<img src="styles/legend/RoRo_76.png" /> Ro-Ro'
            });
var format_GranisSlidosdeOrigemVegetal_77 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemVegetal_77 = format_GranisSlidosdeOrigemVegetal_77.readFeatures(json_GranisSlidosdeOrigemVegetal_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemVegetal_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemVegetal_77.addFeatures(features_GranisSlidosdeOrigemVegetal_77);
var lyr_GranisSlidosdeOrigemVegetal_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemVegetal_77, 
                style: style_GranisSlidosdeOrigemVegetal_77,
                popuplayertitle: 'Granéis Sólidos de Origem Vegetal',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemVegetal_77.png" /> Granéis Sólidos de Origem Vegetal'
            });
var format_GranisSlidosdeOrigemMineral_78 = new ol.format.GeoJSON();
var features_GranisSlidosdeOrigemMineral_78 = format_GranisSlidosdeOrigemMineral_78.readFeatures(json_GranisSlidosdeOrigemMineral_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisSlidosdeOrigemMineral_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisSlidosdeOrigemMineral_78.addFeatures(features_GranisSlidosdeOrigemMineral_78);
var lyr_GranisSlidosdeOrigemMineral_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisSlidosdeOrigemMineral_78, 
                style: style_GranisSlidosdeOrigemMineral_78,
                popuplayertitle: 'Granéis Sólidos de Origem Mineral',
                interactive: true,
                title: '<img src="styles/legend/GranisSlidosdeOrigemMineral_78.png" /> Granéis Sólidos de Origem Mineral'
            });
var format_GranisLquidos_79 = new ol.format.GeoJSON();
var features_GranisLquidos_79 = format_GranisLquidos_79.readFeatures(json_GranisLquidos_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_GranisLquidos_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranisLquidos_79.addFeatures(features_GranisLquidos_79);
var lyr_GranisLquidos_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranisLquidos_79, 
                style: style_GranisLquidos_79,
                popuplayertitle: 'Granéis Líquidos',
                interactive: true,
                title: '<img src="styles/legend/GranisLquidos_79.png" /> Granéis Líquidos'
            });
var format_Multipropsito_80 = new ol.format.GeoJSON();
var features_Multipropsito_80 = format_Multipropsito_80.readFeatures(json_Multipropsito_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Multipropsito_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Multipropsito_80.addFeatures(features_Multipropsito_80);
var lyr_Multipropsito_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Multipropsito_80, 
                style: style_Multipropsito_80,
                popuplayertitle: 'Multipropósito',
                interactive: true,
                title: '<img src="styles/legend/Multipropsito_80.png" /> Multipropósito'
            });
var format_CargaGeral_81 = new ol.format.GeoJSON();
var features_CargaGeral_81 = format_CargaGeral_81.readFeatures(json_CargaGeral_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_CargaGeral_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CargaGeral_81.addFeatures(features_CargaGeral_81);
var lyr_CargaGeral_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CargaGeral_81, 
                style: style_CargaGeral_81,
                popuplayertitle: 'Carga Geral',
                interactive: true,
                title: '<img src="styles/legend/CargaGeral_81.png" /> Carga Geral'
            });
var format_RoRo_82 = new ol.format.GeoJSON();
var features_RoRo_82 = format_RoRo_82.readFeatures(json_RoRo_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_RoRo_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RoRo_82.addFeatures(features_RoRo_82);
var lyr_RoRo_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RoRo_82, 
                style: style_RoRo_82,
                popuplayertitle: 'Ro-Ro',
                interactive: true,
                title: '<img src="styles/legend/RoRo_82.png" /> Ro-Ro'
            });
var format_reasAfetassOperaesPorturiasLongoPrazo_83 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasLongoPrazo_83 = format_reasAfetassOperaesPorturiasLongoPrazo_83.readFeatures(json_reasAfetassOperaesPorturiasLongoPrazo_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasLongoPrazo_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasLongoPrazo_83.addFeatures(features_reasAfetassOperaesPorturiasLongoPrazo_83);
var lyr_reasAfetassOperaesPorturiasLongoPrazo_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasLongoPrazo_83, 
                style: style_reasAfetassOperaesPorturiasLongoPrazo_83,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Longo Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasLongoPrazo_83.png" /> Áreas Afetas às Operações Portuárias - Longo Prazo '
            });
var format_reasAfetassOperaesPorturiasMdioPrazo_84 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasMdioPrazo_84 = format_reasAfetassOperaesPorturiasMdioPrazo_84.readFeatures(json_reasAfetassOperaesPorturiasMdioPrazo_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasMdioPrazo_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasMdioPrazo_84.addFeatures(features_reasAfetassOperaesPorturiasMdioPrazo_84);
var lyr_reasAfetassOperaesPorturiasMdioPrazo_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasMdioPrazo_84, 
                style: style_reasAfetassOperaesPorturiasMdioPrazo_84,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Médio Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasMdioPrazo_84.png" /> Áreas Afetas às Operações Portuárias - Médio Prazo '
            });
var format_reasAfetassOperaesPorturiasCurtoPrazo_85 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasCurtoPrazo_85 = format_reasAfetassOperaesPorturiasCurtoPrazo_85.readFeatures(json_reasAfetassOperaesPorturiasCurtoPrazo_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_85.addFeatures(features_reasAfetassOperaesPorturiasCurtoPrazo_85);
var lyr_reasAfetassOperaesPorturiasCurtoPrazo_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasCurtoPrazo_85, 
                style: style_reasAfetassOperaesPorturiasCurtoPrazo_85,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Curto Prazo ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasCurtoPrazo_85.png" /> Áreas Afetas às Operações Portuárias - Curto Prazo '
            });
var format_reasAfetassOperaesPorturiasSituaoAtual_86 = new ol.format.GeoJSON();
var features_reasAfetassOperaesPorturiasSituaoAtual_86 = format_reasAfetassOperaesPorturiasSituaoAtual_86.readFeatures(json_reasAfetassOperaesPorturiasSituaoAtual_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_reasAfetassOperaesPorturiasSituaoAtual_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasAfetassOperaesPorturiasSituaoAtual_86.addFeatures(features_reasAfetassOperaesPorturiasSituaoAtual_86);
var lyr_reasAfetassOperaesPorturiasSituaoAtual_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reasAfetassOperaesPorturiasSituaoAtual_86, 
                style: style_reasAfetassOperaesPorturiasSituaoAtual_86,
                popuplayertitle: 'Áreas Afetas às Operações Portuárias - Situação Atual ',
                interactive: true,
                title: '<img src="styles/legend/reasAfetassOperaesPorturiasSituaoAtual_86.png" /> Áreas Afetas às Operações Portuárias - Situação Atual '
            });
var format_PoligonaldareadoPortoOrganizadodeParanagu_87 = new ol.format.GeoJSON();
var features_PoligonaldareadoPortoOrganizadodeParanagu_87 = format_PoligonaldareadoPortoOrganizadodeParanagu_87.readFeatures(json_PoligonaldareadoPortoOrganizadodeParanagu_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_PoligonaldareadoPortoOrganizadodeParanagu_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoligonaldareadoPortoOrganizadodeParanagu_87.addFeatures(features_PoligonaldareadoPortoOrganizadodeParanagu_87);
var lyr_PoligonaldareadoPortoOrganizadodeParanagu_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PoligonaldareadoPortoOrganizadodeParanagu_87, 
                style: style_PoligonaldareadoPortoOrganizadodeParanagu_87,
                popuplayertitle: 'Poligonal da Área do Porto Organizado de Paranaguá',
                interactive: true,
                title: '<img src="styles/legend/PoligonaldareadoPortoOrganizadodeParanagu_87.png" /> Poligonal da Área do Porto Organizado de Paranaguá'
            });
var group_PoligonaldareadoPortoOrganizado = new ol.layer.Group({
                                layers: [lyr_PoligonaldareadoPortoOrganizadodeParanagu_87,],
                                fold: 'open',
                                title: 'Poligonal da Área do Porto Organizado '});
var group_reasAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasLongoPrazo_83,lyr_reasAfetassOperaesPorturiasMdioPrazo_84,lyr_reasAfetassOperaesPorturiasCurtoPrazo_85,lyr_reasAfetassOperaesPorturiasSituaoAtual_86,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual = new ol.layer.Group({
                                layers: [lyr_GranisSlidosdeOrigemVegetal_77,lyr_GranisSlidosdeOrigemMineral_78,lyr_GranisLquidos_79,lyr_Multipropsito_80,lyr_CargaGeral_81,lyr_RoRo_82,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Situação Atual '});
var group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo = new ol.layer.Group({
                                layers: [lyr_GranisSlidosdeOrigemVegetal_71,lyr_GranisSlidosdeOrigemMineral_72,lyr_GranisLquidos_73,lyr_Multipropsito_74,lyr_CargaGeral_75,lyr_RoRo_76,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Curto Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo = new ol.layer.Group({
                                layers: [lyr_GranisSlidosdeOrigemVegetal_64,lyr_GranisSlidosdeOrigemMineral_65,lyr_GranisSlidos_66,lyr_GranisLquidos_67,lyr_Multipropsito_68,lyr_CargaGeral_69,lyr_RoRo_70,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Médio Prazo'});
var group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo = new ol.layer.Group({
                                layers: [lyr_GranisSlidosdeOrigemVegetal_57,lyr_GranisSlidosdeOrigemMineral_58,lyr_GranisSlidos_59,lyr_GranisLquidos_60,lyr_Multipropsito_61,lyr_CargaGeral_62,lyr_RoRo_63,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias por Perfil de Carga - Longo Prazo'});
var group_reasAfetassOperaesPorturiasArrendadas = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53,lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54,lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55,lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Arrendadas '});
var group_reasAfetassOperaesPorturiasDisponveisparaArrendamento = new ol.layer.Group({
                                layers: [lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51,lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52,],
                                fold: 'open',
                                title: 'Áreas Afetas às Operações Portuárias Disponíveis para Arrendamento '});
var group_Armazenagem = new ol.layer.Group({
                                layers: [lyr_ArmazenagemLongoPrazo_45,lyr_ArmazenagemMdioPrazo_46,lyr_ArmazenagemCurtoPrazo_47,lyr_ArmazenagemSituaoAtual_48,],
                                fold: 'open',
                                title: 'Armazenagem '});
var group_Acostagem = new ol.layer.Group({
                                layers: [lyr_AcostagemLongoPrazo_41,lyr_AcostagemMdioPrazo_42,lyr_AcostagemCurtoPrazo_43,lyr_AcostagemSituaoAtual_44,],
                                fold: 'open',
                                title: 'Acostagem '});
var group_reasNoAfetassOperaesPorturias = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37,lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38,lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39,lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias '});
var group_reasNoAfetassOperaesPorturiasemExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias em Exploração Indireta '});
var group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta = new ol.layer.Group({
                                layers: [lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34,lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35,],
                                fold: 'open',
                                title: 'Áreas Não Afetas às Operações Portuárias Disponíveis para Exploração Indireta '});
var group_reaseInstalaesAlfandegadas = new ol.layer.Group({
                                layers: [lyr_reaseInstalaesAlfandegadas_32,],
                                fold: 'open',
                                title: 'Áreas e Instalações Alfandegadas '});
var group_TerminaldeUsoPrivado = new ol.layer.Group({
                                layers: [lyr_TerminaldeUsoPrivado_31,],
                                fold: 'open',
                                title: 'Terminal de Uso Privado '});
var group_InstalaesRetroporturias = new ol.layer.Group({
                                layers: [lyr_InstalaesRetroporturiasLongoPrazo_27,lyr_InstalaesRetroporturiasMdioPrazo_28,lyr_InstalaesRetroporturiasCurtoPrazo_29,lyr_InstalaesRetroporturiasSituaoAtual_30,],
                                fold: 'open',
                                title: 'Instalações Retroportuárias '});
var group_AcessosRodoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosExternos_26,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Externos '});
var group_AcessosRodoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosRodoviriosInternosLongoPrazo_22,lyr_AcessosRodoviriosInternosMdioPrazo_23,lyr_AcessosRodoviriosInternosCurtoPrazo_24,lyr_AcessosRodoviriosInternosSituaoAtual_25,],
                                fold: 'open',
                                title: 'Acessos Rodoviários Internos '});
var group_AcessosFerroviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosExternos_21,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Externos '});
var group_AcessosFerroviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosFerroviriosInternosLongoPrazo_17,lyr_AcessosFerroviriosInternosMdioPrazo_18,lyr_AcessosFerroviriosInternosCurtoPrazo_19,lyr_AcessosFerroviriosInternosSituaoAtual_20,],
                                fold: 'open',
                                title: 'Acessos Ferroviários Internos '});
var group_AcessosDutoviriosExternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosExternos_16,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Externos '});
var group_AcessosDutoviriosInternos = new ol.layer.Group({
                                layers: [lyr_AcessosDutoviriosInternos_15,],
                                fold: 'open',
                                title: 'Acessos Dutoviários Internos'});
var group_CanaisdeAcesso = new ol.layer.Group({
                                layers: [lyr_CanaisdeAcessoLongoPrazo_11,lyr_CanaisdeAcessoMdioPrazo_12,lyr_CanaisdeAcessoCurtoPrazo_13,lyr_CanaisdeAcessoSituaoAtual_14,],
                                fold: 'open',
                                title: 'Canais de Acesso '});
var group_BaciasdeEvoluo = new ol.layer.Group({
                                layers: [lyr_BaciasdeEvoluoLongoPrazo_7,lyr_BaciasdeEvoluoMdioPrazo_8,lyr_BaciasdeEvoluoCurtoPrazo_9,lyr_BaciasdeEvoluoSituaoAtual_10,],
                                fold: 'open',
                                title: 'Bacias de Evolução '});
var group_Fundeadouros = new ol.layer.Group({
                                layers: [lyr_FundeadourosLongoPrazo_3,lyr_FundeadourosMdioPrazo_4,lyr_FundeadourosCurtoPrazo_5,lyr_FundeadourosSituaoAtual_6,],
                                fold: 'open',
                                title: 'Fundeadouros '});
var group_reasUrbanaseRurais = new ol.layer.Group({
                                layers: [lyr_reasUrbanaseRurais_2,],
                                fold: 'open',
                                title: 'Áreas Urbanas e Rurais '});
var group_UnidadesdeConservao = new ol.layer.Group({
                                layers: [lyr_UnidadesdeConservao_1,],
                                fold: 'open',
                                title: 'Unidades de Conservação '});

lyr_GoogleSatellite_0.setVisible(true);lyr_UnidadesdeConservao_1.setVisible(false);lyr_reasUrbanaseRurais_2.setVisible(false);lyr_FundeadourosLongoPrazo_3.setVisible(false);lyr_FundeadourosMdioPrazo_4.setVisible(false);lyr_FundeadourosCurtoPrazo_5.setVisible(false);lyr_FundeadourosSituaoAtual_6.setVisible(false);lyr_BaciasdeEvoluoLongoPrazo_7.setVisible(false);lyr_BaciasdeEvoluoMdioPrazo_8.setVisible(false);lyr_BaciasdeEvoluoCurtoPrazo_9.setVisible(false);lyr_BaciasdeEvoluoSituaoAtual_10.setVisible(false);lyr_CanaisdeAcessoLongoPrazo_11.setVisible(false);lyr_CanaisdeAcessoMdioPrazo_12.setVisible(false);lyr_CanaisdeAcessoCurtoPrazo_13.setVisible(false);lyr_CanaisdeAcessoSituaoAtual_14.setVisible(false);lyr_AcessosDutoviriosInternos_15.setVisible(false);lyr_AcessosDutoviriosExternos_16.setVisible(false);lyr_AcessosFerroviriosInternosLongoPrazo_17.setVisible(false);lyr_AcessosFerroviriosInternosMdioPrazo_18.setVisible(false);lyr_AcessosFerroviriosInternosCurtoPrazo_19.setVisible(false);lyr_AcessosFerroviriosInternosSituaoAtual_20.setVisible(false);lyr_AcessosFerroviriosExternos_21.setVisible(false);lyr_AcessosRodoviriosInternosLongoPrazo_22.setVisible(false);lyr_AcessosRodoviriosInternosMdioPrazo_23.setVisible(false);lyr_AcessosRodoviriosInternosCurtoPrazo_24.setVisible(false);lyr_AcessosRodoviriosInternosSituaoAtual_25.setVisible(false);lyr_AcessosRodoviriosExternos_26.setVisible(false);lyr_InstalaesRetroporturiasLongoPrazo_27.setVisible(false);lyr_InstalaesRetroporturiasMdioPrazo_28.setVisible(false);lyr_InstalaesRetroporturiasCurtoPrazo_29.setVisible(false);lyr_InstalaesRetroporturiasSituaoAtual_30.setVisible(false);lyr_TerminaldeUsoPrivado_31.setVisible(false);lyr_reaseInstalaesAlfandegadas_32.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.setVisible(false);lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.setVisible(false);lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.setVisible(false);lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.setVisible(false);lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.setVisible(false);lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.setVisible(false);lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.setVisible(false);lyr_AcostagemLongoPrazo_41.setVisible(false);lyr_AcostagemMdioPrazo_42.setVisible(false);lyr_AcostagemCurtoPrazo_43.setVisible(false);lyr_AcostagemSituaoAtual_44.setVisible(false);lyr_ArmazenagemLongoPrazo_45.setVisible(false);lyr_ArmazenagemMdioPrazo_46.setVisible(false);lyr_ArmazenagemCurtoPrazo_47.setVisible(false);lyr_ArmazenagemSituaoAtual_48.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.setVisible(false);lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.setVisible(false);lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.setVisible(false);lyr_GranisSlidosdeOrigemVegetal_57.setVisible(false);lyr_GranisSlidosdeOrigemMineral_58.setVisible(false);lyr_GranisSlidos_59.setVisible(false);lyr_GranisLquidos_60.setVisible(false);lyr_Multipropsito_61.setVisible(false);lyr_CargaGeral_62.setVisible(false);lyr_RoRo_63.setVisible(false);lyr_GranisSlidosdeOrigemVegetal_64.setVisible(false);lyr_GranisSlidosdeOrigemMineral_65.setVisible(false);lyr_GranisSlidos_66.setVisible(false);lyr_GranisLquidos_67.setVisible(false);lyr_Multipropsito_68.setVisible(false);lyr_CargaGeral_69.setVisible(false);lyr_RoRo_70.setVisible(false);lyr_GranisSlidosdeOrigemVegetal_71.setVisible(false);lyr_GranisSlidosdeOrigemMineral_72.setVisible(false);lyr_GranisLquidos_73.setVisible(false);lyr_Multipropsito_74.setVisible(false);lyr_CargaGeral_75.setVisible(false);lyr_RoRo_76.setVisible(false);lyr_GranisSlidosdeOrigemVegetal_77.setVisible(false);lyr_GranisSlidosdeOrigemMineral_78.setVisible(false);lyr_GranisLquidos_79.setVisible(false);lyr_Multipropsito_80.setVisible(false);lyr_CargaGeral_81.setVisible(false);lyr_RoRo_82.setVisible(false);lyr_reasAfetassOperaesPorturiasLongoPrazo_83.setVisible(false);lyr_reasAfetassOperaesPorturiasMdioPrazo_84.setVisible(false);lyr_reasAfetassOperaesPorturiasCurtoPrazo_85.setVisible(false);lyr_reasAfetassOperaesPorturiasSituaoAtual_86.setVisible(false);lyr_PoligonaldareadoPortoOrganizadodeParanagu_87.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_UnidadesdeConservao,group_reasUrbanaseRurais,group_Fundeadouros,group_BaciasdeEvoluo,group_CanaisdeAcesso,group_AcessosDutoviriosInternos,group_AcessosDutoviriosExternos,group_AcessosFerroviriosInternos,group_AcessosFerroviriosExternos,group_AcessosRodoviriosInternos,group_AcessosRodoviriosExternos,group_InstalaesRetroporturias,group_TerminaldeUsoPrivado,group_reaseInstalaesAlfandegadas,group_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndireta,group_reasNoAfetassOperaesPorturiasemExploraoIndireta,group_reasNoAfetassOperaesPorturias,group_Acostagem,group_Armazenagem,group_reasAfetassOperaesPorturiasDisponveisparaArrendamento,group_reasAfetassOperaesPorturiasArrendadas,group_reasAfetassOperaesPorturiasporPerfildeCargaLongoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaMdioPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaCurtoPrazo,group_reasAfetassOperaesPorturiasporPerfildeCargaSituaoAtual,group_reasAfetassOperaesPorturias,group_PoligonaldareadoPortoOrganizado];
lyr_UnidadesdeConservao_1.set('fieldAliases', {'Nome': 'Nome', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_reasUrbanaseRurais_2.set('fieldAliases', {'Tipo': 'Tipo de Área ', 'Inst_Legal': 'Instrumento Legal ', 'Area': 'Área (m²) ', });
lyr_FundeadourosLongoPrazo_3.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosMdioPrazo_4.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosCurtoPrazo_5.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_FundeadourosSituaoAtual_6.set('fieldAliases', {'N_Ident': 'Número de Identificação ', 'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldAliases', {'Funcao': 'Função ', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldAliases', {'Trecho': 'Trecho', 'Calado': 'Calado (m) ', });
lyr_AcessosDutoviriosInternos_15.set('fieldAliases', {'Nome': 'Nome', 'Mat_Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T_Duto': 'Tipo de Duto ', 'Diametro': 'Diâmetro', });
lyr_AcessosDutoviriosExternos_16.set('fieldAliases', {'Nome': 'Nome', 'Mat_Trans': 'Material Transportado ', 'Posicao': 'Posição ', 'Operador': 'Operador', 'T_Duto': 'Tipo de Duto ', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldAliases', {'Operador': 'Operador', 'Nome': 'Nome', });
lyr_AcessosFerroviriosExternos_21.set('fieldAliases', {'Linha': 'Linha', 'Operador': 'Operador', 'Trecho': 'Trecho', 'Descricao': 'Descrição ', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldAliases', {'Ident': 'Identificação ', 'N_Pistas': 'Número de Pistas de Rolamento ', });
lyr_AcessosRodoviriosExternos_26.set('fieldAliases', {'Nome': 'Nome', 'Sigla': 'Sigla', 'Jurisdicao': 'Jurisdição ', });
lyr_InstalaesRetroporturiasLongoPrazo_27.set('fieldAliases', {'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga', 'Proprieta': 'Proprietário ', 'Capacidade': 'Capacidade', });
lyr_InstalaesRetroporturiasMdioPrazo_28.set('fieldAliases', {'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga', 'Proprieta': 'Proprietário ', 'Capacidade': 'Capacidade', });
lyr_InstalaesRetroporturiasCurtoPrazo_29.set('fieldAliases', {'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga', 'Proprieta': 'Proprietário ', 'Capacidade': 'Capacidade', });
lyr_InstalaesRetroporturiasSituaoAtual_30.set('fieldAliases', {'T_Instal': 'Tipo de Instalação ', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga', 'Proprieta': 'Proprietário ', 'Capacidade': 'Capacidade', });
lyr_TerminaldeUsoPrivado_31.set('fieldAliases', {'Nome': 'Nome', 'T_Produto': 'Tipo de Produto ', 'Companhia': 'Companhia', 'Area': 'Área (m²) ', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldAliases', {'Inst_Legal': 'Instrumento Legal ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.set('fieldAliases', {'Nome': 'Nome', 'T_Explo': 'Tipo de Exploração ', 'Area': 'Área (m²) ', 'Util_area': 'Utilização Atual da Área ', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldAliases', {'Nome': 'Nome', 'T_Cessao': 'Tipo de Cessão ', 'Respons': 'Responsável ', 'Area': 'Área (m²) ', 'D_Inicio': 'Data de Início do Contrato ', 'D_Term': 'Data de Término do Contrato ', 'A_Desenv': 'Atividade Desenvolvida ', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldAliases', {'Nome': 'Nome', 'Destinacao': 'Destinação ', 'Area': 'Área (m²) ', });
lyr_AcostagemLongoPrazo_41.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemMdioPrazo_42.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemCurtoPrazo_43.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_AcostagemSituaoAtual_44.set('fieldAliases', {'Id_Cais': 'Identificador do Cais ', 'Id_Berco': 'Identificador do Berço ', 'C_Const': 'Características Construtivas ', 'Comp': 'Comprimento (m) ', 'Profund': 'Profundidade (m) ', 'Calado': 'Calado (m) ', 'Per_Carga': 'Perfil de Carga ', });
lyr_ArmazenagemLongoPrazo_45.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemMdioPrazo_46.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_ArmazenagemSituaoAtual_48.set('fieldAliases', {'T_Instal': 'Tipo da Instalação ', 'Capacidade': 'Capacidade', 'Area': 'Área (m²) ', 'Volume': 'Volume (m³) ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldAliases', {'Arrend': 'Arrendatário ', 'N_Cont': 'Número do Contrato ', 'D_Inicio': 'Data Início do Contrato ', 'D_Term': 'Data do Término do Contrato ', 'P_Prorrog': 'Possibilidade de Prorrogação ', 'Perfil': 'Perfil de Carga ', 'Area': 'Área (m²) ', });
lyr_GranisSlidosdeOrigemVegetal_57.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemMineral_58.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_59.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisLquidos_60.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_61.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeral_62.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_RoRo_63.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemVegetal_64.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemMineral_65.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidos_66.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisLquidos_67.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_68.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeral_69.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_RoRo_70.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemVegetal_71.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemMineral_72.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisLquidos_73.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_74.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeral_75.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_RoRo_76.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemVegetal_77.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisSlidosdeOrigemMineral_78.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_GranisLquidos_79.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_Multipropsito_80.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_CargaGeral_81.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_RoRo_82.set('fieldAliases', {'Nome': 'Nome', 'Área (m²': 'Área (m²) ', 'Perfil de': 'Perfil de Carga ', 'Tipo de In': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_83.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_84.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_85.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_instal': 'Tipo de Instalação ', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_86.set('fieldAliases', {'Nome': 'Nome', 'Area': 'Área (m²) ', 'Perfil': 'Perfil de Carga ', 'T_instal': 'Tipo de Instalação ', });
lyr_PoligonaldareadoPortoOrganizadodeParanagu_87.set('fieldAliases', {'Ins_Legal': 'Instrumento Legal ', 'Anexo': 'Anexo', });
lyr_UnidadesdeConservao_1.set('fieldImages', {'Nome': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasUrbanaseRurais_2.set('fieldImages', {'Tipo': 'TextEdit', 'Inst_Legal': 'TextEdit', 'Area': 'TextEdit', });
lyr_FundeadourosLongoPrazo_3.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosMdioPrazo_4.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosCurtoPrazo_5.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_FundeadourosSituaoAtual_6.set('fieldImages', {'N_Ident': 'TextEdit', 'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldImages', {'Funcao': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldImages', {'Trecho': 'TextEdit', 'Calado': 'TextEdit', });
lyr_AcessosDutoviriosInternos_15.set('fieldImages', {'Nome': 'TextEdit', 'Mat_Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T_Duto': 'TextEdit', 'Diametro': 'TextEdit', });
lyr_AcessosDutoviriosExternos_16.set('fieldImages', {'Nome': 'TextEdit', 'Mat_Trans': 'TextEdit', 'Posicao': 'TextEdit', 'Operador': 'TextEdit', 'T_Duto': 'TextEdit', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldImages', {'Operador': 'TextEdit', 'Nome': 'TextEdit', });
lyr_AcessosFerroviriosExternos_21.set('fieldImages', {'Linha': 'TextEdit', 'Operador': 'TextEdit', 'Trecho': 'TextEdit', 'Descricao': 'TextEdit', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldImages', {'Ident': 'TextEdit', 'N_Pistas': 'Range', });
lyr_AcessosRodoviriosExternos_26.set('fieldImages', {'Nome': 'TextEdit', 'Sigla': 'TextEdit', 'Jurisdicao': 'TextEdit', });
lyr_InstalaesRetroporturiasLongoPrazo_27.set('fieldImages', {'T_Instal': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'Proprieta': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_InstalaesRetroporturiasMdioPrazo_28.set('fieldImages', {'T_Instal': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'Proprieta': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_InstalaesRetroporturiasCurtoPrazo_29.set('fieldImages', {'T_Instal': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'Proprieta': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_InstalaesRetroporturiasSituaoAtual_30.set('fieldImages', {'T_Instal': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'Proprieta': 'TextEdit', 'Capacidade': 'TextEdit', });
lyr_TerminaldeUsoPrivado_31.set('fieldImages', {'Nome': 'TextEdit', 'T_Produto': 'TextEdit', 'Companhia': 'TextEdit', 'Area': 'TextEdit', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldImages', {'Inst_Legal': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.set('fieldImages', {'Nome': 'TextEdit', 'T_Explo': 'TextEdit', 'Area': 'TextEdit', 'Util_area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldImages', {'Nome': 'TextEdit', 'T_Cessao': 'TextEdit', 'Respons': 'TextEdit', 'Area': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'A_Desenv': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldImages', {'Nome': 'TextEdit', 'Destinacao': 'TextEdit', 'Area': 'TextEdit', });
lyr_AcostagemLongoPrazo_41.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemMdioPrazo_42.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemCurtoPrazo_43.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_AcostagemSituaoAtual_44.set('fieldImages', {'Id_Cais': 'TextEdit', 'Id_Berco': 'TextEdit', 'C_Const': 'TextEdit', 'Comp': 'Range', 'Profund': 'TextEdit', 'Calado': 'TextEdit', 'Per_Carga': 'TextEdit', });
lyr_ArmazenagemLongoPrazo_45.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemMdioPrazo_46.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_ArmazenagemSituaoAtual_48.set('fieldImages', {'T_Instal': 'TextEdit', 'Capacidade': 'TextEdit', 'Area': 'TextEdit', 'Volume': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldImages', {'Arrend': 'TextEdit', 'N_Cont': 'TextEdit', 'D_Inicio': 'DateTime', 'D_Term': 'DateTime', 'P_Prorrog': 'TextEdit', 'Perfil': 'TextEdit', 'Area': 'TextEdit', });
lyr_GranisSlidosdeOrigemVegetal_57.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemMineral_58.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_59.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisLquidos_60.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_61.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeral_62.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_RoRo_63.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemVegetal_64.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemMineral_65.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidos_66.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisLquidos_67.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_68.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeral_69.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_RoRo_70.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemVegetal_71.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemMineral_72.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisLquidos_73.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_74.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeral_75.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_RoRo_76.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemVegetal_77.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisSlidosdeOrigemMineral_78.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_GranisLquidos_79.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_Multipropsito_80.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_CargaGeral_81.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_RoRo_82.set('fieldImages', {'Nome': 'TextEdit', 'Área (m²': 'TextEdit', 'Perfil de': 'TextEdit', 'Tipo de In': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_83.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_84.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_85.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_86.set('fieldImages', {'Nome': 'TextEdit', 'Area': 'TextEdit', 'Perfil': 'TextEdit', 'T_instal': 'TextEdit', });
lyr_PoligonaldareadoPortoOrganizadodeParanagu_87.set('fieldImages', {'Ins_Legal': 'TextEdit', 'Anexo': 'TextEdit', });
lyr_UnidadesdeConservao_1.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasUrbanaseRurais_2.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Inst_Legal': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_FundeadourosLongoPrazo_3.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosMdioPrazo_4.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosCurtoPrazo_5.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_FundeadourosSituaoAtual_6.set('fieldLabels', {'N_Ident': 'inline label - visible with data', 'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoLongoPrazo_7.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoMdioPrazo_8.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoCurtoPrazo_9.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_BaciasdeEvoluoSituaoAtual_10.set('fieldLabels', {'Funcao': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoLongoPrazo_11.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoMdioPrazo_12.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoCurtoPrazo_13.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_CanaisdeAcessoSituaoAtual_14.set('fieldLabels', {'Trecho': 'inline label - visible with data', 'Calado': 'inline label - visible with data', });
lyr_AcessosDutoviriosInternos_15.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat_Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T_Duto': 'inline label - visible with data', 'Diametro': 'inline label - visible with data', });
lyr_AcessosDutoviriosExternos_16.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Mat_Trans': 'inline label - visible with data', 'Posicao': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'T_Duto': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosLongoPrazo_17.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosMdioPrazo_18.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosCurtoPrazo_19.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosInternosSituaoAtual_20.set('fieldLabels', {'Operador': 'inline label - visible with data', 'Nome': 'inline label - visible with data', });
lyr_AcessosFerroviriosExternos_21.set('fieldLabels', {'Linha': 'inline label - visible with data', 'Operador': 'inline label - visible with data', 'Trecho': 'inline label - visible with data', 'Descricao': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosLongoPrazo_22.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosMdioPrazo_23.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosCurtoPrazo_24.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosInternosSituaoAtual_25.set('fieldLabels', {'Ident': 'inline label - visible with data', 'N_Pistas': 'inline label - visible with data', });
lyr_AcessosRodoviriosExternos_26.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Sigla': 'inline label - visible with data', 'Jurisdicao': 'inline label - visible with data', });
lyr_InstalaesRetroporturiasLongoPrazo_27.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Proprieta': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_InstalaesRetroporturiasMdioPrazo_28.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Proprieta': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_InstalaesRetroporturiasCurtoPrazo_29.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Proprieta': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_InstalaesRetroporturiasSituaoAtual_30.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Proprieta': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', });
lyr_TerminaldeUsoPrivado_31.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Produto': 'inline label - visible with data', 'Companhia': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reaseInstalaesAlfandegadas_32.set('fieldLabels', {'Inst_Legal': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaLongoPrazo_33.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaMdioPrazo_34.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasDisponveisparaExploraoIndiretaCurtoPrazo_35.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Explo': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Util_area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasemExploraoIndiretaSituaoAtual_36.set('fieldLabels', {'Nome': 'inline label - visible with data', 'T_Cessao': 'inline label - visible with data', 'Respons': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'A_Desenv': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasLongoPrazo_37.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasMdioPrazo_38.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasCurtoPrazo_39.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasNoAfetassOperaesPorturiasSituaoAtual_40.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Destinacao': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_AcostagemLongoPrazo_41.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemMdioPrazo_42.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemCurtoPrazo_43.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_AcostagemSituaoAtual_44.set('fieldLabels', {'Id_Cais': 'inline label - visible with data', 'Id_Berco': 'inline label - visible with data', 'C_Const': 'inline label - visible with data', 'Comp': 'inline label - visible with data', 'Profund': 'inline label - visible with data', 'Calado': 'inline label - visible with data', 'Per_Carga': 'inline label - visible with data', });
lyr_ArmazenagemLongoPrazo_45.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemMdioPrazo_46.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemCurtoPrazo_47.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_ArmazenagemSituaoAtual_48.set('fieldLabels', {'T_Instal': 'inline label - visible with data', 'Capacidade': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Volume': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoLongoPrazo_49.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoMdioPrazo_50.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoCurtoPrazo_51.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasDisponveisparaArrendamentoSituaoAtual_52.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasLongoPrazo_53.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasMdioPrazo_54.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasCurtoPrazo_55.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasArrendadasSituaoAtual_56.set('fieldLabels', {'Arrend': 'inline label - visible with data', 'N_Cont': 'inline label - visible with data', 'D_Inicio': 'inline label - visible with data', 'D_Term': 'inline label - visible with data', 'P_Prorrog': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemVegetal_57.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemMineral_58.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_59.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisLquidos_60.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_61.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeral_62.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_RoRo_63.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemVegetal_64.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemMineral_65.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidos_66.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisLquidos_67.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_68.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeral_69.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_RoRo_70.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemVegetal_71.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemMineral_72.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisLquidos_73.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_74.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeral_75.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_RoRo_76.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemVegetal_77.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisSlidosdeOrigemMineral_78.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_GranisLquidos_79.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_Multipropsito_80.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_CargaGeral_81.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_RoRo_82.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Área (m²': 'inline label - visible with data', 'Perfil de': 'inline label - visible with data', 'Tipo de In': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasLongoPrazo_83.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasMdioPrazo_84.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasCurtoPrazo_85.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_reasAfetassOperaesPorturiasSituaoAtual_86.set('fieldLabels', {'Nome': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perfil': 'inline label - visible with data', 'T_instal': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeParanagu_87.set('fieldLabels', {'Ins_Legal': 'inline label - visible with data', 'Anexo': 'inline label - visible with data', });
lyr_PoligonaldareadoPortoOrganizadodeParanagu_87.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});