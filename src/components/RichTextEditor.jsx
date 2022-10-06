import React from 'react';
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from 'suneditor-react';


const RichTextEditor = ({onChange, value}) => {

    // const { textEditor, setTextEditor } = useStateContext();

    /* const editor = useRef(null);
	const [content, setContent] = useState('');
 */
	// const handleChange = (e) =>
    // {
    //     // console.log(e);
    //     this.props.onChange(e.target.value);
    // }

  return (
    
        <SunEditor
            autoFocus={true}
            placeholder='Enter the description'
            width='100%'
            height='300'
            // getSunEditorInstance={}
            setContents={value}
            onChange={onChange}
            setDefaultStyle="font-family:bold; color:black; font-size:30px;"
            setOptions={{
                buttonList: [
                    [
                        "bold",
                        "underline",
                        "italic",
                        "strike",
                        "list",
                        "align",
                        "fontSize",
                        "formatBlock",
                        "table",
                        "image"
                    ]
                ]
            }}
        />
    
  )
}

export default RichTextEditor
