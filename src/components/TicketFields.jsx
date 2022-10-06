import React from 'react';
import RichTextEditor from './RichTextEditor';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import { ticketRecords } from '../data/TicketRecords';
import * as DataCollection from '../data/DataCollection';


function createGuidId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// const getIssueTypeCollection =[
//     { id: '1', title: 'Incident' },
//     { id: '2', title: 'Problem' },
//     { id: '3', title: 'Service Request' },
// ]

const TicketFields = (props) => {
    const { textEditor, setTextEditor, projectName, setprojectName, user, setUser, setOpenPopup } = useStateContext();

    // const [projectName, setprojectName] = useState("");
   
    // const [user, setUser] = useState("");


    let history = useNavigate;

    function updateDescription(value) {
        console.log(value);
        setTextEditor(value);
    }

    const handleChange = e => setUser(e.target.value);


    // const handleUser = (e) =>
    // {
    //     console.log("Value: " + e.target.value + "; Display: " + e.target[e.target.selectedIndex].text + ".");
    //     setUser(e.target[e.target.selectedIndex].text);
    // }

    const handleSubmit =(e) => {
        e.preventDefault();

        const ids = createGuidId();
        let uniqueId = ids.slice(0,8);

        let a = projectName,
        b = textEditor,
        c= user;
        ticketRecords.push({id:uniqueId, project_name:a, description:b,user:c});

        history("/manage");
    }

  return (
    <div>
         <form>
         <div class="min-h-screen flex flex-col items-center justify-center">
        <div class="grid grid-cols-9 gap-5 items-center  p-5">

        {/* <div>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Project" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Project</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getProjectCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="IssueType" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Issue Type</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getIssueTypeCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>


        {/* <div className='col-start-1'>
        </div> */}


        <div className="col-start-1 col-span-9">
        <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400'>Summary</label>
            <input className='form-control block w-full px-3 py-1.5 text-base font-normal rounded-lg bg-gray-50
                 text-gray-700  bg-clip-padding border border-solid border-gray-300 dark:placeholder-gray-400
                 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 
                 focus:outline-none' type="text" name="name" required onChange={(e) => setprojectName(e.target.value)}/>
        
        </div>

        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Assignee" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Assignee</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="⬇️ Select a Assignee ⬇️"> -- Select a Assignee -- </option>
         {DataCollection.getAssigneeCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Reporter" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Reporter</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getReporterCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Component" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Component/s</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getComponentsCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        {/* <div className='col-start-1 col-span-2'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="TypeOfIncident" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Type of Incident</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getIncidentCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>

        {/* <div className='col-start-1 col-span-9'>
        <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
        </div> */}

        {/* <div className="flex col-span-9">
        <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
        <div className='ml-9'>
        <RichTextEditor value={textEditor} onChange={(value) => { updateDescription(value); }} />
        </div>
        </div> */}

        <div className="col-span-9">
        <label for="Description" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Description</label>       
        <RichTextEditor value={textEditor} onChange={(value) => { updateDescription(value); }} />
        </div>

        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="LinkedIssues" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Linked Issues</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getLinkedIssuesCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>


        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Issues" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Issue</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getIssueCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>


        {/* <div className='col-start-1'>
        </div> */}

        <div className="col-start-1 col-span-9">
        <label for="Priority" className="block mb-2 text-sm font-bold text-gray-900 dark:text-gray-400">Priority</label>
        <select onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
         {DataCollection.getPriorityCollection.map((item) => {
                  return (<option value={item.id}>{item.title}</option>);
              })}
         </select>
        </div>
        

        <div className="col-span-1" >
                      <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 
                                rounded' type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
                     
                    
        </div >   
        <div className="col-span-1 col-start-3" >
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 
                        rounded" onClick={() => setOpenPopup(false)}  type="button">
                          Cancel
                      </button>
                     
        </div >  

            
        </div >
    </div >
    
                                
</form >
                               
    </div >

  )
}

export default TicketFields