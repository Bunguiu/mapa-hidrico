import "./App.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { LatLngExpression, LeafletMouseEvent } from "leaflet";
import "leaflet/dist/leaflet.css";
import villa from "./resources/villanueva.json";
import { GeoJsonObject } from "geojson";
import { CustomPopup } from "./components/custom-popup";
import ReactDOMServer from "react-dom/server";
import mapaVilla from "./resources/villanueva.jpeg";

function App() {
  const position: LatLngExpression = [15.298706, -88.012954];
  return (
    <div>
      <div className="bg-black p-2 text-white flex justify-between">
        <p>Mapa Hidrico de Honduras</p>
        <p>Fecha de publicación: 14/09/2023</p>
      </div>
      <div className="w-full h-[500px] flex">
        <div className="w-2/3">
          <MapContainer
            center={position}
            zoom={12}
            className="w-full h-[100vh]"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://api.mapbox.com/styles/v1/mapbox/outdoors-v12/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYm5vcmFsZXMiLCJhIjoiY2wxamc1MXFuMDlncjNjcWdjOTNyc2FyeCJ9.RnFL5S2gg46H2WjVXLoWeA"
              tileSize={512}
              zoomOffset={-1}
            />

            {villa.features.map((x, i: number) => {
              return (
                <GeoJSON
                  key={i}
                  data={x as GeoJsonObject}
                  pathOptions={{
                    color: x.properties.stroke,
                    fillColor: x.properties.fill,
                    fillOpacity: x.properties["fill-opacity"],
                    weight: 3,
                  }}
                  onEachFeature={(feature, layer) => {
                    const popupContent = ReactDOMServer.renderToString(
                      <CustomPopup feature={feature} />
                    );
                    layer.on({
                      mouseover: (e: LeafletMouseEvent) => {
                        if (feature.geometry.type !== "Polygon")
                          e.target.setStyle({ weight: 10 });
                      },
                      mouseout: (e: LeafletMouseEvent) => {
                        if (feature.geometry.type !== "Polygon")
                          e.target.setStyle({ weight: 3 });
                      },
                    });
                    if (feature.geometry.type !== "Polygon")
                      layer.bindPopup(popupContent);
                  }}
                ></GeoJSON>
              );
            })}
          </MapContainer>
        </div>
        <div className="w-1/3 h-[100vh] overflow-scroll">
          <img className="w-full h-[350px]" src={mapaVilla} alt="/any" />
          <section className="border-b p-3">
            <p className=" text-2xl">Villanueva, Cortes</p>
            <p className=" text-sm">Honduras</p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">Historia</h1>
            <p className=" text-sm">
              Villanueva tiene una historia que se remonta a finales del siglo
              XIX, cuando fue fundado por pobladores provenientes del
              departamento vecino de Santa Bárbara. Estos pobladores buscaban
              tierras fértiles para establecerse y cultivar. El 28 de agosto de
              1871, se constituyó oficialmente el municipio de Villanueva, con
              el nombre de San Francisco de Villanueva, en honor al santo
              patrono y al general Francisco Morazán, héroe nacional. El
              municipio fue creciendo y prosperando gracias al trabajo de sus
              habitantes y al apoyo de las autoridades. El 8 de marzo de 1945,
              recibió el título de ciudad, como reconocimiento a su desarrollo
              económico y social.
            </p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">Economía</h1>
            <p className="text-sm">
              La economía de Villanueva se basa principalmente en la agricultura
              y la industria. El cultivo más importante es la caña de azúcar,
              que le ha valido el apodo de la "Ciudad que endulza a Honduras".
              La caña de azúcar se procesa en los ingenios azucareros de la
              zona, que producen azúcar y sus derivados, como el alcohol, la
              melaza y la energía eléctrica. La Compañía Azucarera Hondureña,
              ubicada en Búfalo, tiene una capacidad instalada para procesar
              13,000 toneladas de caña por día, procesando alrededor de 20,000
              manzanas de caña de azúcar. Además de la caña de azúcar, también
              se cultivan otros productos como el banano, el café y el maíz, que
              generan empleo e ingresos para los agricultores. La ganadería
              también juega un papel importante en la economía del municipio,
              con la producción de carne y leche.
            </p>
            <p className="text-sm">
              El sector industrial ha experimentado un crecimiento significativo
              desde los años 80, con la llegada e instalación de fábricas y
              maquilas que se dedican a la producción textil, plástica,
              metalmecánica y alimentaria. Estas industrias ofrecen
              oportunidades laborales para los habitantes del municipio y
              contribuyen al progreso social. Un ejemplo reciente es el parque
              eléctrico industrial Polygroup, que genera energía renovable a
              partir de biomasa y gas natural.
            </p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">Hidrología</h1>
            <p className=" text-sm">
              Villanueva es agraciada con una hidrología abundante, con ríos y
              arroyos que atraviesan el municipio. El río más importante es el
              Ulúa, que nace en las montañas del departamento de Intibucá y
              recorre unos 400 kilómetros hasta desembocar en el mar Caribe. El
              Ulúa es uno de los principales cuerpos de agua en la región norte
              del país, y es vital para la agricultura, ya que proporciona el
              riego necesario para los cultivos, especialmente la caña de
              azúcar. Otros ríos importantes son el Chamelecón, el Blanco y el
              Humuya. Además, el municipio cuenta con varias lagunas y humedales
              que albergan una rica biodiversidad.
            </p>
            <p className=" text-sm">
              La gestión sostenible de estos recursos hídricos es un desafío
              importante para la comunidad villanovense, que busca equilibrar la
              necesidad de agua para la agricultura con la conservación del
              entorno natural. El agua subterránea juega un papel crucial en la
              vida diaria y económica del municipio. Con más de 700 pozos
              profundos distribuidos por todo el valle, Villanueva garantiza el
              suministro constante para sus actividades agrícolas e
              industriales. Sin embargo, también presenta desafíos en términos
              de gestión del agua y protección contra inundaciones, que se han
              agravado por el cambio climático.
            </p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">Clima</h1>
            <p className=" text-sm">
              El clima de Villanueva es tropical lluvioso, con temperaturas
              cálidas a lo largo del año. El municipio experimenta una estación
              seca y una estación húmeda, con una precipitación anual que varía
              entre 1,500 a 2,000 milímetros. Durante los meses de junio a
              octubre, las lluvias son más intensas, lo que favorece la
              agricultura. Esta distribución de lluvias es crucial para el ciclo
              de cultivos, asegurando una adecuada humedad en el suelo para la
              producción agrícola. Según AccuWeather, la temperatura en
              Villanueva puede llegar hasta los 37°C con una sensación térmica
              que puede superar los 100°F.
            </p>
            <p>
              Este clima tropical también implica algunos riesgos y
              vulnerabilidades para el municipio, como las inundaciones, las
              sequías, las plagas y las enfermedades. Por ello, el municipio
              debe implementar medidas de prevención y adaptación al cambio
              climático, que afecta la variabilidad y la intensidad de los
              fenómenos meteorológicos.
            </p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">
              Importancia estratégica
            </h1>
            <p className=" text-sm">
              Villanueva es un punto estratégico en el departamento de Cortés,
              desempeñando un papel vital en la economía de la región norte de
              Honduras. La producción de caña de azúcar y sus derivados ha
              ganado renombre a nivel nacional e internacional, contribuyendo
              significativamente a la economía del país. Además, la ubicación
              geográfica de Villanueva le otorga ventajas en términos de
              logística y comercio, consolidándolo como un centro de actividades
              económicas importantes. Villanueva tiene una conexión vial con las
              principales ciudades del país, como San Pedro Sula y Tegucigalpa,
              así como con el puerto marítimo de Puerto Cortés y el aeropuerto
              internacional Ramón Villeda Morales. Estas vías facilitan el
              transporte y la exportación de los productos agrícolas e
              industriales del municipio.
            </p>
          </section>
          <section className="p-3 border-b">
            <h1 className="font-medium text-base pb-4">Conclusión</h1>
            <p className=" text-sm">
              Villanueva Cortés es un municipio que combina la tradición con la
              modernidad, la naturaleza con la industria, y la dulzura con el
              trabajo. Es un municipio que tiene mucho que ofrecer y que
              enfrenta muchos retos para mejorar la calidad de vida de sus
              habitantes. Es un municipio que merece ser conocido y valorado por
              su importancia histórica, económica, social y ambiental.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
