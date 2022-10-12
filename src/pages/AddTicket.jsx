import React, { useEffect, useRef, useState } from 'react';
import * as DataCollection from '../data/DataCollection';
import { useStateContext } from '../contexts/ContextProvider';
import RichTextEditor from '../components/RichTextEditor';


const AddTicket = () => {

    const { textEditor, setTextEditor, projectName, setprojectName, user, setUser, setOpenPopup } = useStateContext();

    const [ddCustomerActive, setDdCustomerActive] = useState(false);
    const [ddActive, setDdActive] = useState(false);
    const [subTicket, setSubTicket] = useState([]);
    const [customer, setCustomer] = useState([]);
    const [subTicketType, setSubTicketType] = useState("");
    const [platform, setPlatfrom] = useState([]);

    const selectRef = useRef();

    useEffect(() => {
        setPlatfrom(DataCollection.getPlatformCollection);
      },[]);

   

    function updateDescription(value) {
        console.log(value);
        setTextEditor(value);
    }

    const handleChange = e => setUser(e.target.value);

    const handleChangePlatform = (id) => {

        console.log(id);
        const selectedPlatform = DataCollection.getPlatformCollection.find(x => x.id === id);

        console.log(selectedPlatform.title);
        const plt = selectedPlatform.title;

        const dt = DataCollection.getCustomerCollection.filter(x => x.platformId === id);
        if(plt === 'VEDC')
        {

            setDdCustomerActive(true);
            console.log(dt);
            setCustomer(dt);
        }else {
            setDdCustomerActive(false);
            console.log(dt);
            setCustomer([]);
        }


        // console.log(e.target.value);
    }


    const handleChangeProject = (id) => {

        console.log(id);
        const selectedTicket = DataCollection.getIssueTypeCollection.find(x => x.id === id);

        console.log(selectedTicket.title);

        const dt = DataCollection.getSubIssueCollection.filter(x => x.issueId === id);
        if (dt.length > 0) {
            setSubTicketType(selectedTicket.title);
            setDdActive(true);
            console.log(dt);
            setSubTicket(dt);
        } else if (dt.length === 0) {
            setSubTicketType("");
            setDdActive(false);
            console.log(dt);
            setSubTicket([]);
        }


        // console.log(e.target.value);
    }

    const handleSubmit = () =>
    {

    }


    const handleCancel = () =>
    {
        
    }

   

    return (
        <div>
            <form>
                <div class="flex flex-col flex-auto justify-start m-2 p-2">

                    <div className='flex flex-row flex-auto items-center'>
                        <p className='text-2xl text-black p-1 font-sans font-medium text-left my-4'>Create</p>
                        
                    </div>

                    <div class="grid grid-cols-10 gap-5   p-5">


                        <div className="col-start-1 col-span-5 relative">

                        <label for="ddlPlatform" 
                            className=" after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400
                            ">Platform Type</label>
                            
                            <select id='ddlPlatform' 
                             placeholder='Select Platform' onChange={(e) => handleChangePlatform(e.target.value)} 
                            className="peer placeholder-transparent bg-gray-50 border border-gray-300 text-gray-900 
                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full p-2.5
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                              dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {/* <option className='text-gray-200 text-lg font-bold' disabled={true} value="">
                                    Platform Type
                                </option> */}
                                <option  value="" selected disabled hidden></option>
                                {platform &&
                                    platform !== undefined ?
                                    platform.map((item) => {
                                        return (<option value={item.id}>{item.title}</option>);
                                    })
                                    : "No Platform"}
                            </select>
                            {/* <label for="ddlPlatform" 
                            className="absolute after:content-['*'] after:ml-0.5 after:text-red-500 left-2  block top-4
                            mb-2 text-sm font-semibold text-gray-600 dark:text-gray-400 
                            peer-focus:-top-0.5
                            peer-focus:text-base
                            
                            peer-focus:text-gray-800
                            peer-focus:font-medium
                            ">Platform Type</label> */}
                        </div>

                        

                        <div className=" col-span-5 ">
                            <label for="ddlTicket" className="after:content-['*'] after:ml-0.5 after:text-red-500 block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Ticket Type</label>
                            <select id='ddlTicket' onChange={(e) => handleChangeProject(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm h-14 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                {DataCollection.getIssueTypeCollection &&
                                    DataCollection.getIssueTypeCollection !== undefined ?
                                    DataCollection.getIssueTypeCollection.map((item) => {
                                        return (<option value={item.id}>{item.title}</option>);
                                    })
                                    : "No Ticket"}
                            </select>
                        </div>

                        {/* <div className='col-start-1'></div> */}


                        {ddCustomerActive ? (
                            <div className="col-span-5  ">
                                <label for="Customer" className="block mb-2 text-sm font-bold text-gray-900 pr-2 dark:text-gray-400">Customer</label>
                                <select id='ddlCustomer' onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-14 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {customer &&
                                        customer !== undefined ?
                                        customer.map((item) => {
                                            return (<option value={item.id}>{item.title}</option>);
                                        })
                                        : "No Customer"}
                                </select>
                            </div>
                        )
                            : (
                                <></>
                            )}

                        {ddActive ? (
                            <div className="col-span-5  ">
                                <label for="IssueType" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400 pr-4">{subTicketType} Type</label>
                                <select id='ddlSubTicket' onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg h-14 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {subTicket &&
                                        subTicket !== undefined ?
                                        subTicket.map((item) => {
                                            return (<option value={item.id}>{item.title}</option>);
                                        })
                                        : "No SubIssue"}
                                </select>
                            </div>
                        )
                            : (
                                <></>
                            )}


                        <div className="col-span-5 ">
                            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400 pr-10'>Title</label>
                            <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" name="name" />
                 {/* required onChange={(e) => setprojectName(e.target.value)} */}
                 

                        </div>

                        <div className="col-span-5 ">
                            <label for="Assignee" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400 pr-4">Assignee</label>
                            <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="⬇️ Select a Assignee ⬇️"> -- Select a Assignee -- </option>
                                {DataCollection.getAssigneeCollection.map((item) => {
                                    return (<option value={item.id}>{item.title}</option>);
                                })}
                            </select>
                        </div>


                        <div className=" col-span-5 ">
        <label for="LinkedIssues" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Linked Issues</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getLinkedIssuesCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>


        {/* <div className='col-start-1'>
        </div> */}

        


        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-span-5 ">
        <label for="Priority" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400 pr-4">Priority</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getPriorityCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        <div className="col-span-10">
        <label for="Description" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Description</label>       
        <RichTextEditor value={textEditor} onChange={(value) => { updateDescription(value); }} />
        </div>
        

        <div className="col-start-1 col-span-1" >
                      <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                                rounded' type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
                     
                    
        </div >   
        <div className="col-span-1 col-start-2" >
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 
                        rounded" onClick={(e) => handleCancel(e)}  type="button">
                          Cancel
                      </button>
                     
        </div >  

                        

                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddTicket