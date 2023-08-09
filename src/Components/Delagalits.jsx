import React from 'react'

import './delagalits.scss'
import EnhancedTable from './Table/EnhancedTable'

const Delagalist = ({ rows, columns }) => {
  // const [Delagas, setDelagas] = useState([]);
  // useEffect(() => {
  //     async function fetch() {
  //     const data = await axios.get("http://41.231.54.51/server/delegations")
  // let delegations = data.data.list
  // delegations = await Promise.all( delegations.map(
  //     async (delegation)=>  {
  //       const dataGov = await axios.get(`http://41.231.54.51/server/govs/${delegation.govId}`)
  //     console.log(dataGov.data.name)
  //       return {...delegation, govName: dataGov.data.name}
  //     }))
  //     console.log(delegations)
  // setDelagas(delegations)
  // }
  // fetch()
  //     /*axios
  //         .get("http://41.231.54.51/server/delegations")
  //         .then(({ data }) => {
  //             axios
  //             .get("http://41.231.54.51/server/govs/6137e4f21c73eb28103c2311")
  //             .then(({ dataGov }) => {
  //             console.log(data)
  //             console.error("ADD"+dataGov)
  //             console.log(data.count)
  //             console.log(data.list)
  //             setDelagas(data.list)
  //         })
  //         .catch((error) => {
  //             console.log(error);
  //         });
  //     })
  //         .catch((error) => {
  //             console.log(error);
  //         });*/
  // }, []);
  // const DataTable = () => {
  //     return Delagas.map((res, i) => {
  //         return <Delega obj={res} key={i} />;
  //     });
  // };
  // return (
  //     <div className="table-wrapper">
  //     <h1>table de delegation</h1>
  //         <table class="fixed_headers">
  //              <thead>
  //                 <tr>
  //                     <td> id</td>
  //                     <td>name</td>
  //                     <td>nameAr</td>
  //                     <td>status</td>
  //                     <td>createdAt</td>
  //                     <td>govId</td>
  //                 </tr>
  //             </thead>
  //             <tbody>{DataTable()}</tbody>
  //         </table>
  //     </div>
  // );
  // };
  return (
    <EnhancedTable
      rows={rows}
      header={[
        {
          id: 1,
          numeric: false,
          disablePadding: true,
          label: 'id',
        },
        {
          id: 2,
          numeric: false,
          disablePadding: true,
          label: 'name',
        },
        {
          id: 3,
          numeric: false,
          disablePadding: true,
          label: 'email',
        },
        {
          id: 4,
          numeric: false,
          disablePadding: true,
          label: 'gov',
        },
        {
          id: 5,
          numeric: false,
          disablePadding: true,
          label: 'nb farms',
        },
      ]}
    ></EnhancedTable>
  )
}
export default Delagalist
