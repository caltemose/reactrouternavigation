import { FileSystem } from 'expo';
import { RNS3 } from 'react-native-aws3';
import s3info from './s3info';

const prefsUrl = 'https://chad-plantdb.s3.amazonaws.com//prefs1.json';

const s3 = {
  loadPreferences: async (callback) => {
    try {
      let response = await fetch(prefsUrl);

      if (response.status === 200) {
        let responseJson = await response.json();
        console.log(responseJson);
        callback(responseJson);
      } else {
        console.error('!!! no prefs file. to be implemented.');
        callback({ err: 'No prefs file could be loaded.' });
      }

    } catch (error) {
      console.error(error);
      callback({ err: error });
    }
  },

  savePreferences: async (state, callback) => {
    try {
      const fileUri = FileSystem.cacheDirectory + 'prefs1.json';
      const data = JSON.stringify(state);
      console.log(data);
      FileSystem
        .writeAsStringAsync(fileUri, data)
        .then(() => {
          FileSystem
            .getInfoAsync(fileUri)
            .then(result => {
              const file = {
                uri: fileUri,
                name: "prefs1.json",
                type: "application/json",
              }

              const options = s3info;

              // RNS3.put(file, options).then(response => {
              //   if (response.status !== 201) {
              //     console.error(response);
              //     throw new Error("Failed to upload prefs");
              //   }
              //   console.log('finished', response.body.postResponse.location);
              //   callback(response.body.postResponse.location);
              // })
            })
          })
    } catch (error) {
      console.error(error);
      callback({ err: error });
    }
  }
};

export default s3;
