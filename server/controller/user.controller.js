const axios = require('axios');
const accessToken = 'lip_sGErgcLJprR9uKPB5Xgw';

exports.topPlayersList = async(req, res) => {
  try {
    const response = await axios.get('https://lichess.org/api/player/top/50/classical', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Access the response data
    const responseData = response.data;
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(403).json({msg: "Error while fetching top 50 player list"})
  }
};

exports.playerRatingsHistory = async(req, res) => {
  try {
    const response = await axios.get(`https://lichess.org/api/user/${req.body.username}/rating-history`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    // Access the response data
    const responseData = response.data;
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(403).json({msg: "Error while fetching player rating list"})
  }
};
