import axios from 'axios';

export const getCarModels = async () => {
  const url = `${process.env.API_URL}/GetMakesForVehicleType/car?format=json`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error('Faild to fatch data, please try again later');
    }

    if (e.request) {
      throw new Error('Sorry, something went wrong, please try again later');
    }
  }
};

export const getCars = async (carId, carYear) => {
  const url = `${process.env.API_URL}/GetModelsForMakeIdYear/makeId/${carId}/modelyear/${carYear}?format=json`;

  try {
    const response = await axios.get(url);

    return response.data;
  } catch (e) {
    if (e.response) {
      throw new Error('Faild to fatch data, please try again later');
    }

    if (e.request) {
      throw new Error('Sorry, something went wrong, please try again later');
    }
  }
};
