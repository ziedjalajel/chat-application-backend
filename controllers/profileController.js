const { Profile } = require("../db/models");

// fetchProfile
exports.fetchProfile = async (profileId, next) => {
  try {
    const foundProfile = await Profile.findByPk(profileId);
    return foundProfile;
  } catch (error) {
    next(error);
  }
};

//Detail
exports.profileData = async (req, res) => res.json(req.profile);

//Update
exports.profileUpdate = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.profileImage = `http://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    await req.profile.update(req.body);
    res.status(201).json(req.profile);
  } catch (error) {
    next(error);
  }
};

//Create
exports.profileAdd = async (req, res, next) => {
  try {
    if (req.file) {
      req.body.profileImage = `http://${req.get("host")}/media/${
        req.file.filename
      }`;
    }
    const profileAdd = await Profile.create(req.body);
    res.status(201).json(profileAdd);
  } catch (error) {
    next(error);
  }
};
