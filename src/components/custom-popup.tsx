export const CustomPopup = ({ feature }: any) => {
  return (
    <div>
      <table className="border-collapse border border-slate-500 ">
        <tbody>
          <tr>
            <th className="border border-slate-600 p-2">Nombre</th>
            <td className="border border-slate-600  p-2">
              {`${feature.properties.name ?? feature.properties.Name}`}
            </td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">
              Conductividad del Agua
            </th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Conductividad del Agua"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Color</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["color"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Olor Residual</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["olor-residual"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Turbidez</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Turbidez"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Coliforme Totales</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Coliforme Totales"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Nitratos</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Nitratos"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">pH</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["pH"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Dureza del Agua</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Dureza del Agua"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Cloro Residual</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Cloro Residual"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">Temperatura</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["Temperatura"] ?? ""
            }`}</td>
          </tr>
          <tr>
            <th className="border border-slate-600 p-2">tds</th>
            <td className="border border-slate-600 p-2">{`${
              feature.properties["tds"] ?? ""
            }`}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
