import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'

const Home = () => {

  const [bankTable, setBankTable] = useState('')


  const getBankData = () => {
    axios.get('http://103.88.221.150:9439/api/bank/getAll').then((response)=>{
      console.log("responded",response.data);
      setBankTable(response.data)
    })
  } 

  useEffect(()=>{
    getBankData()
  },[])

  const columns = [
    {
      name: 'Bsnk Id',
      selector: row => row.bankId,
    },
    {
      name: 'Bsnk Name',
      selector: row => row.bankName ,
    },
    {
      name: 'Account Number',
      selector: row => row.accountNumber,
    },
    {
      name: 'IFSC Code',
      selector: row => row.ifscCode,
    },
  ]

  return (
    <div>
      <DataTable
      columns={columns}
      data={bankTable}
      />
    </div>
  )
}

export default Home
