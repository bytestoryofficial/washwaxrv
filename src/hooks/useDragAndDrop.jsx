import { useState } from 'react';

const useDragAndDrop = (setFileState, fileState) => {
  const [dragActiveState, setDragActiveState] = useState(false);

  const handleOnDrag = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActiveState(true);
    } else if (event.type === 'dragleave') {
      setDragActiveState(false);
    }
  };

  const handleOnDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActiveState(false);

    if (event.dataTransfer.files) {
      setFileState([...fileState, ...event.dataTransfer.files]);
    }
  };

  const handleUpload = (event) => {
    setFileState(null);
    event.preventDefault();
    if (event.target.files) {
      setFileState([...fileState, ...event.target.files]);
    }
  };

  const handleRemoveFile = (index) => () => {
    const files = [...fileState];
    files.splice(index, 1);
    setFileState(files);
  };

  return {
    dragActive: dragActiveState,
    setFile: setDragActiveState,
    onUpload: handleUpload,
    onDrag: handleOnDrag,
    onDrop: handleOnDrop,
    onRemove: handleRemoveFile,
  };
};

export default useDragAndDrop;
