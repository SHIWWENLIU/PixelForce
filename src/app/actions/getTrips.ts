import axios from "axios";

export default async function getTrips() {
  

    await axios.get('https://pfx-interview.s3.ap-southeast-2.amazonaws.com/trips.json')
    .then((res) => {
      console.log('res is ',res.data)
      return res.data
    })
    .catch((error) => {
      return null;
    })
   
   
}

