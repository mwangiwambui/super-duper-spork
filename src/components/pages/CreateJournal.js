import React, { Component } from "react";
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class CreateJournal extends Component {


  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
      value: draftToHtml(convertToRaw(editorState.getCurrentContent()))
    })
  };

  // onSubmitForm = (editorState) => {
  //   const convertedValue = draftToHtml(convertToRaw(editorState.getCurrentContent()))
  // };

  render() {
    const { editorState } = this.state;
    const editorStyle = {
      overflowY: "scroll",
      height: "500px",
      border: "1px solid grey"
    };

    return (
      <div className="mx-auto">
        <div class="flex mb-6">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Large input</label>
          <input type="text" id="large-input" class="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>


        <div style={editorStyle} className="p-4 mb-10 max-w-4xl">
          <Editor
            editorState={editorState}
            // toolbarClassName="toolbarClassName"
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}

          />
        </div>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Publish
          </span>
        </button>
        {/* <textarea
          hidden
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div >

    )
  }
}

export default CreateJournal;