const geojsonLayers = [
    {
        id: '1vDR',
        file: '1вDR.geojson',
        type: 'line',
        width: 1,
        color: 'red'
    },
    {
        id: '1vGR',
        file: '1вGR.geojson',
        type: 'line',
        width: 1,
        color: 'blue'
    },
    {
        id: '1вGR2D',
        file: '1вGR2D.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: '2ODR',
        file: '2ODR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: '2OGR',
        file: '2OGR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '2OGR2D',
        file: '2OGR2D.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: '2TEXKOTIPR70',
        file: '2TEXKOTIPR70.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: '2вDR',
        file: '2вDR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: '2вGR',
        file: '2вGR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '2вGR2D',
        file: '2вGR2D.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '3prelopDR',
        file: '3prelopDR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: '3prelopGR',
        file: '3prelopGR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '3prelopGR2D',
        file: '3prelopGR2D.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '3вDR',
        file: '3вDR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: '3вGR',
        file: '3вGR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '3вGR2D',
        file: '3вGR2D.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '10GTL',
        file: '10GTL.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'r_k3--DO-TEKSTKOTIPROFILI',
        file: 'r_k3--DO-TEKSTKOTIPROFILI.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: '10ODR',
        file: '10ODR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: '10OGR',
        file: '10OGR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '10OGR2D',
        file: '10OGR2D.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: '10TEXTKOTPROF-70',
        file: '10TEXTKOTPROF-70.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: '2020-09-30',
        file: '2020-09-30.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: '2021-07-15',
        file: '2021-07-15.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: '2021-11-09',
        file: '2021-11-09.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: '2025-03-17',
        file: '2025-03-17.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'GTL',
        file: 'GTL.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'GTL-DOBIV',
        file: 'GTL-DOBIV.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'Kontakt1',
        file: 'Kontakt1.geojson',
        type: 'line',
        width: 2,
        color: 'grey'
    },
    {
        id: 'KONTAKT-2',
        file: 'KONTAKT-2.geojson',
        type: 'line',
        width: 2,
        color: 'grey'
    },
    {
        id: 'KONTAKT-3',
        file: 'KONTAKT-3.geojson',
        type: 'line',
        width: 2,
        color: 'grey'
    },
    {
        id: 'MREJA70',
        file: 'MREJA70.geojson',
        type: 'line',
        width: 2,
        color: 'grey'
    },
    {
        id: 'r_k3-1hor-DR',
        file: 'r_k3-1hor-DR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: 'r_k3-1hor-GR',
        file: 'r_k3-1hor-GR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: 'r_k3-1hor-GR-2d',
        file: 'r_k3-1hor-GR-2d.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: 'r_k3-1hor-GTL',
        file: 'r_k3-1hor-GTL.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'r_k3-1hor-TEKSTKOTIPROFILI',
        file: 'r_k3-1hor-TEKSTKOTIPROFILI.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: 'r_k3-2hor-VODOOTLIV',
        file: 'r_k3-2hor-VODOOTLIV.geojson',
        type: 'line',
        width: 2,
        color: 'cyan'
    },
    {
        id: 'r_k3--DO-2plDGr-GR',
        file: 'r_k3--DO-2plDGr-GR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-2plDGr-GR-2d',
        file: 'r_k3--DO-2plDGr-GR-2d.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-2plGGr-DR',
        file: 'r_k3--DO-2plGGr-DR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: 'r_k3--DO-2plGGr-GR',
        file: 'r_k3--DO-2plGGr-GR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-2plGGr-GR-2d',
        file: 'r_k3--DO-2plGGr-GR-2d.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-3plDGr-DR',
        file: 'r_k3--DO-3plDGr-DR.geojson',
        type: 'line',
        width: 2,
        color: 'red'
    },
    {
        id: 'r_k3--DO-3plDGr-GR',
        file: 'r_k3--DO-3plDGr-GR.geojson',
        type: 'line',
        width: 2,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-3plDGr-GR-2d',
        file: 'r_k3--DO-3plDGr-GR-2d.geojson',
        type: 'line',
        width: 3,
        color: 'blue'
    },
    {
        id: 'r_k3--DO-GTL',
        file: 'r_k3--DO-GTL.geojson',
        type: 'line',
        width: 2,
        color: 'green'
    },
    {
        id: 'R3-03$0$2020-09-30',
        file: 'R3-03$0$2020-09-30.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: 'textkontakt70profili',
        file: 'textkontakt70profili.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
    {
        id: 'textkoti70dobiv',
        file: 'textkoti70dobiv.geojson',
        type: 'line',
        width: 2,
        color: 'black'
    },
];


export default geojsonLayers;