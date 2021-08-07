/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../../services/firebase';
import { ContainerInputSearch } from './styles';

const filter = createFilterOptions();

export default function FreeSoloCreateOption() {
  const [value, setValue] = React.useState(null);
  const [channels] = useCollection(db.collection('rooms'));

  const channelRooms = channels?.docs.map(doc => doc.data().name);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        // Suggest the creation of a new value
        if (params.inputValue !== '') {
          filtered.push({
            inputValue: params.inputValue
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={channelRooms}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(option) => option.title}
      style={{ width: "100%" }}
      freeSolo
      renderInput={(params) => (
        <ContainerInputSearch>
          <TextField {...params} label="Pesquise por um canal" variant="filled" />
        </ContainerInputSearch>
      )}
    />
  );
}

