import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
    // {
    //     name: 'Time to resolution',
    //     selector: row => row.timetoresolution,
    // },
    {
        name: 'Key',
        selector: row => row.key,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Summary',
        selector: row => row.summary,
    },
    {
        name: 'Created',
        selector: row => row.created,
    },
    {
        name: 'Reporter',
        selector: row => row.reporter,
    },
    {
        name: 'Assignee',
        selector: row => row.assignee,
    },
    {
        name: 'Components',
        selector: row => row.components,
    },
    {
        name: 'Updated',
        selector: row => row.updated,
    },
];

const data = [
    {
        id: 1,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',


    },
    {
        id: 2,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',
    },
    {
        id: 3,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',


    },
    {
        id: 4,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',
    },
    {
        id: 5,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',


    },
    {
        id: 6,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',
    },
    {
        id: 7,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',


    },
    {
        id: 8,
        // timetoresolution: '-3mo',
        key: 'CDAOBO-12',
        status:'ACTIVE',
        summary:'LN Duplicate trips Overwrite Causing Missing data within Trips',
        created: '25/Mar/22',
        reporter: '-Darcy Malvolti',
        assignee: 'Paul Shiner',
        components:'LexisNexis',
        updated:'22/Sep/22',
    },
]

const Queues = () => {

    

  return (
    <div className="flex flex-col flex-auto ">
        <div className='flex flex-row flex-auto items-center'>
        <p className='text-2xl text-black p-1 font-sans font-medium text-left my-4'>All Open</p>
        <p className='text-sm text-blue-400 p-1 ml-8 font-sans font-medium text-left my-4'>Switch Queues</p>
        </div>
        
        <div>
        <DataTable
        columns={columns}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        selectableRowsHighlight
        ></DataTable>
        </div>
       
    </div>
  )
}

export default Queues;