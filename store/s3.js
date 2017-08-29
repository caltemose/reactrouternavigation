// import { RNS3 } from 'react-native-aws3';

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
};

export default s3;
