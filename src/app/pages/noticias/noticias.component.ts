import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-noticias",
  templateUrl: "./noticias.component.html",
  styleUrls: ["./noticias.component.css"],
})
export class NoticiasComponent implements OnInit {
  texto: string = "HOLA";

  public primeraNoticias: any[] = [
    {
      targetEnlaceImagen: "_blank",
      titleEnlaceImagen:
        "Celebración del Consejo de Alcaldes y Alcaldesas de la provincia de Jaén. JPG 360 KB | Diputación de Jaén | Ampliar imagen",
      hrefEnlaceImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200827_Consejo_de_alcaldes_y_alcaldesas_x1x.jpg",
      classImagen: "img-rounded img-responsive bordeVerde",
      srcImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200827_Consejo_de_alcaldes_y_alcaldesas_x1x.jpg",
      altImagen:
        "Celebración del Consejo de Alcaldes y Alcaldesas de la provincia de Jaén. JPG 360 KB | Diputación de Jaén | Ampliar imagen",
      titleImagen:
        "Celebración del Consejo de Alcaldes y Alcaldesas de la provincia de Jaén. JPG 360 KB - | Diputación de Jaén | Ampliar imagen",
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=ca61eaa9-e84a-11ea-b69e-005056b0675f",
      titulo:
        "El Consejo de Alcaldes y Alcaldesas aborda medidas ante el inicio de las clases y de la campaña de la aceituna",
      subTitulo:
        "Francisco Reyes también ha solicitado a los munícipes propuestas de cara a la elaboración del presupuesto de la Diputación Provincial para el año 2021",
      tipo: "Principal",
    },
  ];

  public segundaNoticias: any[] = [
    {
      targetEnlaceImagen: "_blank",
      titleEnlaceImagen:
        "Reunión celebrada en julio con los alcaldes sobre la puesta en marcha de estos proyectos. JPG de 121 KB | Diputación de Jaén | Ampliar imagen",
      hrefEnlaceImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200722_Reunixn_sobre_depuradoras_x1x.jpg",
      classImagen: "img-rounded img-responsive bordeVerde",
      srcImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200722_Reunixn_sobre_depuradoras_x1x.jpg",
      altImagen:
        "Reunión celebrada en julio con los alcaldes sobre la puesta en marcha de estos proyectos. JPG de 121 KB | Diputación de Jaén | Ampliar imagen",
      titleImagen:
        "Reunión celebrada en julio con los alcaldes sobre la puesta en marcha de estos proyectos. JPG de 121 KB - | Diputación de Jaén | Ampliar imagen",
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=09096e04-e84d-11ea-b69e-005056b0675f",
      titulo:
        "Diputación inicia las obras de mejora energética y puesta a punto de 35 depuradoras en 28 municipios",
      subTitulo: null,
      tipo: "Secundaria",
    },
    {
      targetEnlaceImagen: "_blank",
      titleEnlaceImagen:
        "Francisco Reyes junto a Belén Navarro, acompañados por miembros de la junta directiva de la FAMPA Los Olivos. JPG 324 KB | Diputación de Jaén | Ampliar imagen",
      hrefEnlaceImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200826_Reunixn_nueva_presidenta_FAMPA_Los_Olivos_x3x.jpg",
      classImagen: "img-rounded img-responsive bordeVerde",
      srcImagen:
        "http://www.dipujaen.es/export/sites/default/galerias/galeriaImagenes/diputacion/dipujaen/actualidad/2020-agosto/4-semana/20200826_Reunixn_nueva_presidenta_FAMPA_Los_Olivos_x3x.jpg",
      altImagen:
        "Francisco Reyes junto a Belén Navarro, acompañados por miembros de la junta directiva de la FAMPA Los Olivos. JPG 324 KB | Diputación de Jaén | Ampliar imagen",
      titleImagen:
        "Francisco Reyes junto a Belén Navarro, acompañados por miembros de la junta directiva de la FAMPA Los Olivos. JPG 324 KB - | Diputación de Jaén | Ampliar imagen",
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=64f1a5ca-e78b-11ea-8f1d-005056b0675f",
      titulo:
        "Reyes pide a la Junta una ayuda específica para que los ayuntamientos lleven a cabo la desinfección de colegios",
      subTitulo: null,
      tipo: "Secundaria",
    },
  ];

  public ultimasNoticias: any[] = [
    
    {
      targetEnlaceImagen: null,
      titleEnlaceImagen: null,
      hrefEnlaceImagen: null,
      classImagen: null,
      srcImagen: null,
      altImagen: null,
      titleImagen: null,
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=f6072410-e77e-11ea-8f1d-005056b0675f",
      titulo:
        "Reyes aboga por el aprovechamiento de subproductos del olivar para mejorar la competitividad del sector",
      subTitulo: null,
      tipo: "Mas",
    },
    {
      targetEnlaceImagen: null,
      titleEnlaceImagen: null,
      hrefEnlaceImagen: null,
      classImagen: null,
      srcImagen: null,
      altImagen: null,
      titleImagen: null,
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=efed6e21-e786-11ea-8f1d-005056b0675f",
      titulo:
        "Diputación otorgará ayudas de hasta 2.990 euros para que las empresas amorticen sus microcréditos",
      subTitulo: null,
      tipo: "Mas",
    },
    {
      targetEnlaceImagen: null,
      titleEnlaceImagen: null,
      hrefEnlaceImagen: null,
      classImagen: null,
      srcImagen: null,
      altImagen: null,
      titleImagen: null,
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=a1b5832f-e6c3-11ea-8955-005056b0675f",
      titulo:
        "La residencia de Jimena recibe una placa de Diputación en reconocimiento por su labor durante la pandemia",
      subTitulo: null,
      tipo: "Mas",
    },
    {
      targetEnlaceImagen: null,
      titleEnlaceImagen: null,
      hrefEnlaceImagen: null,
      classImagen: null,
      srcImagen: null,
      altImagen: null,
      titleImagen: null,
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=60cc4090-e6bc-11ea-8955-005056b0675f",
      titulo:
        "Las Noches de Palacio regresan el próximo sábado con la emblemática banda Nacha Pop",
      subTitulo: null,
      tipo: "Mas",
    },
    {
      targetEnlaceImagen: null,
      titleEnlaceImagen: null,
      hrefEnlaceImagen: null,
      classImagen: null,
      srcImagen: null,
      altImagen: null,
      titleImagen: null,
      hrefTexto:
        "http://www.dipujaen.es/diputacion/dipujaen/_area-de-actualidad/detalles.html?uid=3dfbc62e-e6b9-11ea-8955-005056b0675f",
      titulo:
        "Jamilena recupera con la colaboración de la Diputación un sondeo con el que mejora su abastecimiento de agua",
      subTitulo: null,
      tipo: "Mas",
    },
  ];

  constructor(

  ) {}

  ngOnInit() {}
}
