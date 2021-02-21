import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import DragOverlay from './DragOverlay';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative'
  }
});

interface DropzoneProps {
  children: React.ReactElement;
  fileDropped: (files: FileList | null) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ children, fileDropped }) => {

  const [ drag, setDrag ] = React.useState<boolean>(false);
  const [ counter, setCounter ] = React.useState<number>(0);

  React.useEffect(() => {
    if (counter === 0) {
      setDrag(false);
    }
  }, [ setDrag, counter ]);

  const classes = useStyles();

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCounter(counter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setCounter(counter - 1);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      fileDropped(e.dataTransfer.files);
    }

    e.dataTransfer.clearData();
    setCounter(0);
  };

  return (
    <div
      className={classes.root}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}>
      {drag && <DragOverlay/>}
      {children}
    </div>
  );
};

export default Dropzone;
