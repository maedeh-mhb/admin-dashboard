import { useEffect, useState } from "react";
import './DataTable.scss';

const columns = [
    { field: 'id', headerName: 'Order Id', width: 130 },
    { field: 'product', headerName: 'Product', width: 130 },
    { field: 'date', headerName: 'Date', width: 130 },
    {
      field: 'email',
      headerName: 'User Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 160,
      cellClassName:(params) => `grid-${params.row.status}`

    },
  ];


  const data = [
    { id: '#1123', product: 'Snow', date: '2020/11/03', email: 'dsdsdsdsd@yahoo.com',status: 'pending' },
    { id: '#1123a', product: 'Lannister', date: '2022/09/13', email: 'wewdfg56@yahoo.com',status: 'paid' },
    { id: '#1123b', product: 'Lannister', date: '2020/11/03', email: 'oioio87@yahoo.com',status: 'failed' },
    { id: '#1123c', product: 'Stark', date: '2020/02/03', email: 'tyjyuiuiu@yahoo.com',status: 'paid' },
    { id: '#1123d', product: 'Targaryen', date: '2020/10/18', email: 'bvbf5@yahoo.com',status: 'paid' },
    { id: '#1123e', product: 'Melisandre', date: '2015/11/23', email: 'dwew2@yahoo.com',status: 'pending' },
    { id: '#1123f', product: 'Clifford', date: '2018/01/12', email: 's45rtrtrtd@yahoo.com',status: 'paid' },
    { id: '#1123g', product: 'Frances', date: '2010/08/10', email: 'fdf656@yahoo.com',status: 'paid' },
    { id: '#1123h', product: 'Roxie', date: '2020/07/08', email: 'jkoio98@yahoo.com',status: 'failed' },
  ];
  
  
  
  function DataTable(props) {
      const [headers,setHeaders] = useState([]);
      const [rows,setRows] = useState([]);;

      function makeHeader () {
        let header = [];
        for (let i of columns) {
            header.push(<span style={{width:i.width}}>{i.headerName}</span>) ;
        };         
        setHeaders([...header])
        };

        function makeRows () {
            let headerArr= columns.map((col)=>col.field)
            let row = [];
            for (let i of headerArr) {
               data.map((item)=>console.log(headerArr.indexOf(item[i])));
            //    console.log(headerArr.indexOf(item[i]))
            };
           
            setRows([...row])
        }
      
    useEffect(()=>{
      makeHeader();
    },[data]);

    useEffect(()=>{
        makeRows();
      },[data]);
  
    return (
        <div className="data-table-container">
            <div className="table-header-container">
                {headers}
                {rows}
            </div>
        </div>
    );
}

export default DataTable;